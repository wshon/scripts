import asyncio
import logging
import socket
import struct
from asyncio import Transport, AbstractEventLoop

ADD_RTYPE_IPV4 = 1
ADD_RTYPE_DOMAIN = 3
ADD_RTYPE_IPV6 = 4

CMD_CONNECT = 1
CMD_BIND = 2
CMD_UDP_ASSOCIATE = 3
CMD_REG_SURVIVOR = 250

RSP_RESCUER = b'\xff\x53\x53'
RSP_SOCKET5_VERSION = b'\x05\x00'
RSP_SUCCESS = b'\x05\x00\x00\x01'
RSP_CONNECTION_REFUSED = b'\x05\x05\x00\x01'
RSP_COMMAND_NOT_SUPPORTED = b'\x05\x07\x00\x01'
RSP_ADDRESS_TYPE_NOT_SUPPORTED = b'\x05\x08\x00\x01'

rescuer_protocols = []


class BaseServerProtocol(asyncio.Protocol):
    in_transferring = False
    transport = None
    other_transport = None


class SurvivorServerProtocol(BaseServerProtocol):
    """
    For local app connect to proxy.
    For wait Rescuer connect, and accept some channel for proxy.
    """
    socket5_flag = False

    def __init__(self, loop: AbstractEventLoop):
        self.loop = loop

    def connection_made(self, transport: Transport):
        peername = transport.get_extra_info('peername')
        logging.info('connection from client {}'.format(peername))
        self.transport = transport
        # logging.debug('Survivor send data: ', RSP_SOCKET5_VERSION)
        # self.transport.write(RSP_SOCKET5_VERSION)

    def data_received(self, data):
        if self.is_transport:
            logging.debug('recv from rescuer: %s', data)
            if self.other_transport:
                self.other_transport.write(data)
                logging.debug('send to local: %s', data)
        else:  # local or rescuer(not sure)
            if self.other_transport:
                logging.debug('recv from local: %s', data)
                self.other_transport.write(data)
                logging.debug('send to rescuer: %s', data)
            elif data[0] == 5 or data[0:7] == b'CONNECT':
                logging.debug('recv from local: %s', data)
                if rescuer_protocols:
                    other = rescuer_protocols.pop(-1)
                    self.other_transport = other.transport
                    other.other_transport = self.transport
                    self.other_transport.write(data)
                    logging.debug('send to rescuer: %s', data)
                else:
                    logging.info('rescuer list is null')
            elif data[0:3] == b'\xff\x53\x53':
                logging.debug('recv from rescuer: %s', data)
                logging.info('socket5 mode.')
                self.is_transport = True
                rescuer_protocols.append(self)
                logging.info('new rescuer added.')
            elif data[0:12] == b'HTTP/1.0 200':
                logging.debug('recv from rescuer: %s', data)
                logging.info('http proxy mode.')
                self.is_transport = True
                rescuer_protocols.append(self)
                logging.info('new rescuer added.')
            elif data.split()[0] in [b'GET', b'POST']:
                pass
            else:
                logging.debug('recv from client: %s', data)
                logging.info('unknown data.')

    def connection_lost(self, exc):
        if self.other_transport:
            self.other_transport.close()
        if self.is_transport:
            if self in rescuer_protocols:
                rescuer_protocols.remove(self)
            logging.info('rescuer client closed the connection')
        else:
            logging.info('local client closed the connection')


class RemoteClientProtocol(BaseServerProtocol):
    """
    For connect to remote target.
    """

    def __init__(self, transport: Transport):
        self.other_transport = transport

    def connection_made(self, transport: Transport):
        self.transport = transport
        logging.info('connect to remote server successful.')

    def data_received(self, data):
        logging.debug('recv from remote: %s', data)
        self.other_transport.write(data)
        logging.debug('send to survivor: %s', data)

    def connection_lost(self, exc):
        self.other_transport.close()
        logging.info('remote server connection closed.')


class RescuerClientProtocol(BaseServerProtocol):
    """
    For connect to Survivor, and provide some channel of proxy.
    """

    socket5_flag = False
    http_flag = False

    def __init__(self, loop, addr, port):
        self.loop = loop
        self.addr = addr
        self.port = port

    def connection_made(self, transport: Transport):
        self.transport = transport
        self.transport.write(RSP_RESCUER)
        logging.info('connect to survivor server successful.')

    def data_received(self, data):
        logging.debug('recv from survivor: %s', data)
        data = bytearray(data)

        if self.other_transport:
            self.other_transport.write(data)
            logging.debug('send to remote: %s', data)
            return
        elif data[0] == 5:
            self.socket5_flag = True
        elif data[0:7] == b'CONNECT':
            self.http_flag = True

        if self.http_flag:
            self.http_flag = False
            data_str = data.decode()
            remote_host = data_str.split()[1].split(":")
            return self.loop.create_task(connect_remote_http(self, remote_host[0], remote_host[1] or "80"))
        elif self.socket5_flag:
            self.socket5_flag = False

            if len(data) >= 2 and (data[1] + 2 == len(data) or (len(data) > data[1] + 2 and data[data[1] + 2] == 5)):
                del data[0:data[1] + 2]
                self.transport.write(RSP_SOCKET5_VERSION)
                logging.debug('send to survivor: %s', RSP_SOCKET5_VERSION)

            if len(data) < 4:
                return
            tpm_data = data[0:4]
            del data[0:4]
            mode = tpm_data[1]
            if mode == CMD_CONNECT:  # 1. Tcp connect
                atyp = tpm_data[3]
                if atyp == ADD_RTYPE_IPV4:  # IPv4
                    addr = socket.inet_ntoa(data[0:4])
                    del data[0:4]
                elif atyp == ADD_RTYPE_DOMAIN:  # Domain name
                    addr = data[1:1 + data[0]]  # self.rfile.read(sock.recv(1)[0])
                    del data[0:1 + data[4]]
                else:
                    self.transport.write(RSP_ADDRESS_TYPE_NOT_SUPPORTED)
                    logging.debug('send to survivor : %s', RSP_ADDRESS_TYPE_NOT_SUPPORTED)
                    logging.warning('RSP_ADDRESS_TYPE_NOT_SUPPORTED')
                    return
                port = struct.unpack('>H{}', data[0:2])
                del data[0:2]
                return self.loop.create_task(connect_remote_socket5(self, addr, port[0]))
            elif mode == CMD_BIND:
                logging.warning('unsupported CMD_BIND')
            elif mode == CMD_UDP_ASSOCIATE:
                logging.warning('unsupported CMD_UDP_ASSOCIATE')
            else:
                self.transport.write(RSP_COMMAND_NOT_SUPPORTED)
                logging.debug('send to survivor: %s', RSP_COMMAND_NOT_SUPPORTED)
                logging.warning('RSP_COMMAND_NOT_SUPPORTED')
                return
        else:
            logging.error('unknown proxy type.')

    def connection_lost(self, exc):
        if self.other_transport:
            self.other_transport.close()
        self.loop.create_task(connect_survivor(self.loop, self.addr, self.port))
        logging.info('survivor server connection closed.')


async def connect_remote_socket5(local: RescuerClientProtocol, addr, port, mode='socket5'):
    try:
        transport, protocol = await local.loop.create_connection(
            lambda: RemoteClientProtocol(local.transport), addr, port)
        remote = transport.get_extra_info('sockname')
        local.other_transport = transport
        reply = RSP_SUCCESS + socket.inet_aton(remote[0]) + struct.pack('>H', remote[1])
    except TimeoutError:
        reply = RSP_CONNECTION_REFUSED
    local.transport.write(reply)
    logging.debug('send to local: %s', reply)


async def connect_remote_http(local: RescuerClientProtocol, addr, port, mode='socket5'):
    try:
        transport, protocol = await local.loop.create_connection(
            lambda: RemoteClientProtocol(local.transport), addr, port)
        local.other_transport = transport
        reply = b"HTTP/1.0 200 Connection Established\r\n\r\n"
    except TimeoutError:
        reply = b"HTTP/1.0 200 Connection Established\r\n\r\n"
    local.transport.write(reply)
    logging.debug('send to local: %s', reply)


async def connect_survivor(loop, addr, port):
    await loop.create_connection(
        lambda: RescuerClientProtocol(loop, addr, port),
        addr, port)


def survivor(port):
    loop = asyncio.get_event_loop()
    # Each client connection will create a new protocol instance
    coro = loop.create_server(
        lambda: SurvivorServerProtocol(loop),
        '0.0.0.0', port)
    server = loop.run_until_complete(coro)

    # Serve requests until Ctrl+C is pressed
    logging.info('serving on {}'.format(server.sockets[0].getsockname()))
    try:
        loop.run_forever()
    except KeyboardInterrupt:
        pass

    # Close the server
    server.close()
    loop.run_until_complete(server.wait_closed())
    loop.close()


def rescuer(addr, port):
    loop = asyncio.get_event_loop()
    coro = loop.create_connection(
        lambda: RescuerClientProtocol(loop, addr, port),
        addr, port)
    logging.info('connect to {}:{}'.format(addr, port))
    for i in range(50):
        loop.create_task(connect_survivor(loop, addr, port))
    loop.run_until_complete(coro)
    loop.run_forever()
    loop.close()


if __name__ == '__main__':
    from optparse import OptionParser

    parser = OptionParser()
    parser.add_option("-s", "--survivor", action="store_true",
                      dest="survivor",
                      default=False,
                      help="Access its network resources by connecting to local rescuers")
    parser.add_option("-r", "--rescuers", action="store_true",
                      dest="rescuers",
                      default=False,
                      help="Help target computers access the Internet")
    parser.add_option("-t", "--target", action="store", type="string",
                      dest="target",
                      default='0.0.0.0',
                      help="target host")
    parser.add_option("-p", "--port", action="store", type="int",
                      dest="port",
                      default='1080',
                      help="target/listen port")
    parser.add_option("-d", "--debug", action="store_true",
                      dest="debug",
                      default=False,
                      help="show all log")

    (options, args) = parser.parse_args()

    logging.basicConfig(
        format='%(levelname)s: %(asctime)s [%(pathname)s:%(lineno)d] %(message)s',
        level=logging.NOTSET if options.debug else logging.INFO
    )

    if options.survivor:
        survivor(options.port)

    if options.rescuers:
        rescuer(options.target, options.port)

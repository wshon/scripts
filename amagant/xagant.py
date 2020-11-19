import asyncio
import logging
import socket
import struct
from asyncio import Transport, AbstractEventLoop


class ProxyTypeBase:
    def __init__(self, protocol: "BaseProtocol"):
        self.protocol = protocol
        pass

    def deal_data(self, data):
        pass


class ProxyTypeDirect(ProxyTypeBase):
    def deal_data(self, data):
        pass


class ProxyTypeHttp(ProxyTypeBase):
    def deal_data(self, data):
        pass


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


class ProxyTypeSocket5(ProxyTypeBase):
    async def _connect_other(self, host, port):
        try:
            transport, protocol = await self.protocol.loop.create_connection(
                lambda: DirectClientProtocol(self.protocol.transport), host, port)
            remote = transport.get_extra_info('sockname')
            self.protocol.other_transport = transport
            reply = RSP_SUCCESS + socket.inet_aton(remote[0]) + struct.pack('>H', remote[1])
        except TimeoutError:
            reply = RSP_CONNECTION_REFUSED
        self.protocol.write_client(reply)
        self.protocol.in_transferring = True

    def connect_other(self, host, port):
        self.protocol.loop.create_task(self._connect_other(host, port))

    def deal_data(self, data):
        data = bytearray(data)
        if len(data) >= 2 and (data[1] + 2 == len(data) or (len(data) > data[1] + 2 and data[data[1] + 2] == 5)):
            del data[0:data[1] + 2]
            self.protocol.write_client(RSP_SOCKET5_VERSION)

        if len(data) < 4:
            return
        tpm_data = data[0:4]
        del data[0:4]
        mode = tpm_data[1]
        if mode == CMD_CONNECT:  # 1. Tcp connect
            atyp = tpm_data[3]
            if atyp == ADD_RTYPE_IPV4:  # IPv4
                host = socket.inet_ntoa(data[0:4])
                del data[0:4]
            elif atyp == ADD_RTYPE_DOMAIN:  # Domain name
                host = data[1:1 + data[0]]  # self.rfile.read(sock.recv(1)[0])
                del data[0:1 + data[4]]
            else:
                self.protocol.write_client(RSP_ADDRESS_TYPE_NOT_SUPPORTED)
                logging.debug('send to survivor : %s', RSP_ADDRESS_TYPE_NOT_SUPPORTED)
                logging.warning('RSP_ADDRESS_TYPE_NOT_SUPPORTED')
                return
            port = struct.unpack('>H', data[0:2])[0]
            del data[0:2]
            self.connect_other(host, port)
            return
        elif mode == CMD_BIND:
            logging.warning('unsupported CMD_BIND')
        elif mode == CMD_UDP_ASSOCIATE:
            logging.warning('unsupported CMD_UDP_ASSOCIATE')
        else:
            self.protocol.write_client(RSP_COMMAND_NOT_SUPPORTED)
            logging.debug('send to survivor: %s', RSP_COMMAND_NOT_SUPPORTED)
            logging.warning('RSP_COMMAND_NOT_SUPPORTED')
            return


class BaseProtocol(asyncio.Protocol):
    proxy_type = None
    transport: "Transport" = None
    other_transport: "Transport" = None
    in_transferring: bool = False

    def __init__(self, loop: AbstractEventLoop):
        self.loop = loop

    def get_proxy_type(self, data):
        if data is None:
            return ProxyTypeDirect(self)
        elif data[0:7] == b'CONNECT':
            return ProxyTypeHttp(self)
        elif data[0] == 5:
            return ProxyTypeSocket5(self)

    @property
    def transport_peername(self):
        if '_transport_peername' not in self.__dict__:
            self._transport_peername = self.transport.get_extra_info('peername')
        return self._transport_peername

    @property
    def other_transport_peername(self):
        if '_other_transport_peername' not in self.__dict__:
            self._other_transport_peername = self.other_transport.get_extra_info('peername')
        return self._other_transport_peername

    def write_client(self, data):
        logging.debug(f'{self.transport_peername} <== {data.hex()}')
        self.transport.write(data)

    def write_others(self, data):
        logging.debug(f'{self.other_transport_peername} <== {data.hex()}')
        self.other_transport.write(data)


class DirectClientProtocol(BaseProtocol):
    """
    For connect to remote target.
    """

    def __init__(self, transport: Transport):
        self.other_transport = transport

    def connection_made(self, transport: Transport):
        self.transport = transport
        logging.info(f'direct to  {self.transport_peername} successful.')

    def data_received(self, data):
        logging.debug(f'{self.transport_peername} ==> {data.hex()}', )
        self.write_others(data)

    def connection_lost(self, exc):
        self.other_transport.close()
        logging.info('remote server connection closed.')


class NetworkProtocol(BaseProtocol):
    """
    For connect to remote target.
    """

    def connection_made(self, transport: Transport):
        self.transport = transport
        logging.info(f'client {self.transport_peername} connected.')

    def data_received(self, data):
        logging.debug(f'{self.transport_peername} ==> {data.hex()}')
        if self.in_transferring:
            self.write_others(data)
            return
        if self.proxy_type is None:
            self.proxy_type = self.get_proxy_type(data)
        if not self.in_transferring:
            self.proxy_type.deal_data(data)

    def connection_lost(self, exc):
        self.other_transport.close()
        logging.info(f'{self.other_transport_peername} connection closed.')


if __name__ == '__main__':
    logging.basicConfig(
        format='%(levelname)s: %(asctime)s [%(filename)s:%(lineno)d] %(message)s',
        level=logging.NOTSET
    )

    port = 1234
    loop = asyncio.get_event_loop()
    # Each client connection will create a new protocol instance
    coro = loop.create_server(lambda: NetworkProtocol(loop), '0.0.0.0', port)
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
    pass

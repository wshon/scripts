import asyncio
import json
from urllib import parse

import aiohttp

from freecams.FCTYPE import *

BASE = 'https://assets.mfcimg.com/_js/serverconfig.js'


def get_serv(camserv):
    """
    from BASE
    :param camserv:
    :return:
    """
    pass


def fc_fun_default(packet):
    pass


def fc_fun_sessionstate(packet):
    payload = packet['payload']
    json_str = parse.unquote(payload)
    data = json.loads(json_str)
    uid = data['uid']
    camserv = data['u']['camserv']
    avatar = f'https://img.mfcimg.com/photos2/{uid[:3]}/{uid}/avatar.100x100.jpg'
    serv = get_serv(camserv)
    snap = f'https://snap.mfcimg.com/snapimg/{serv}/107x80/mfc_1{uid}'
    pass


fc_funs = {
    FCTYPE_SESSIONSTATE: fc_fun_sessionstate,
}


def deal_packet(packet):
    fc_fun = fc_funs.get(packet['type'], fc_fun_default)
    fc_fun and fc_fun(packet)


def deal_data(data):
    data_split = data.split(maxsplit=5)
    packet = {
        'type': int(data_split[0]),
        'from': data_split[1],
        'to': data_split[2],
        'arg1': data_split[3],
        'arg2': data_split[4],
        'payload': data_split[5] if len(data_split) > 5 else ''
    }
    deal_packet(packet)


def deal_msg(msg):
    msg_now = msg
    while msg_now:
        data_len = int(msg_now[:6])
        if data_len + 6 != len(msg_now):
            assert "length error"
        data = msg_now[6:6 + data_len]
        deal_data(data)
        msg_now = msg_now[6 + data_len:]
    pass


async def test():
    session = aiohttp.ClientSession()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.14 Safari/537.36 Edg/83.0.478.10',
        'Origin': 'https://www.myfreecams.com',
    }
    async with session.ws_connect('https://xchat89.myfreecams.com/fcsl', headers=headers) as ws:
        await ws.send_str("fcsws_20180422\n\0")
        await ws.send_str("1 0 0 20071025 0 1/guest:guest\n\0")
        async for msg in ws:
            if msg.type == aiohttp.WSMsgType.TEXT:
                if msg.data == 'close cmd':
                    await ws.close()
                    break
                else:
                    print(msg.data)
                    deal_msg(msg.data)
                    # await ws.send_str(msg.data + '/answer')
            elif msg.type == aiohttp.WSMsgType.CLOSED:
                break
            elif msg.type == aiohttp.WSMsgType.ERROR:
                break


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(test())

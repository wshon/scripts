import asyncio
import json
from pathlib import Path
from urllib import parse

import aiofiles
import aiohttp

from freecams.FCTYPE import *

BASE = 'https://assets.mfcimg.com/_js/serverconfig.js'
SERVER_MAP = {}


async def init_server_map():
    global SERVER_MAP
    async with aiohttp.ClientSession() as session:
        async with session.get(BASE) as response:
            data_raw = await response.text()
    data = json.loads(data_raw)
    SERVER_MAP = data


def get_avatar_url(uid, large=True):
    return f'https://img.mfcimg.com/photos2/{uid[:3]}/{uid}/avatar.{"100x100" if large else "100x100"}.jpg'


def get_snap_url(svr_id, uid, large=True):
    return f'https://snap.mfcimg.com/snapimg/{svr_id}/{"320x240" if large else "107x80"}/mfc_1{uid}'


def get_live_url(svr_id, uid):
    return f'https://video{svr_id}.myfreecams.com/NxServer/ngrp:mfc_1{uid}.f4v_mobile/playlist.m3u8'


async def save_snap(svr_id, uid):
    path = Path('snap')
    if not path.exists():
        path.mkdir()
    elif not path.is_dir():
        path.rename('snap_rename')
        path.mkdir()
    snap_url = get_snap_url(svr_id, uid)
    live_url = get_live_url(svr_id, uid)
    snap_name = snap_url.rsplit('/', 1)[-1] + '.jpg'
    live_name = snap_url.rsplit('/', 1)[-1] + '.txt'
    async with aiohttp.ClientSession() as session:
        async with session.get(snap_url) as response:
            async with aiofiles.open(path / snap_name, mode='wb') as f:
                await f.write(await response.read())
            async with aiofiles.open(path / live_name, mode='w') as f:
                await f.write(live_url)


def get_server_id(svr_no):
    """
    from BASE
    :param svr_no:
    :return:
    """
    global SERVER_MAP
    svr = str(svr_no)
    if svr not in SERVER_MAP['h5video_servers']:
        return '0'
    else:
        return SERVER_MAP['h5video_servers'][svr][5:]


def fc_fun_default(packet):
    pass


def fc_fun_sessionstate(packet):
    payload = packet['payload']
    json_str = parse.unquote(payload)
    data = json.loads(json_str)
    uid = str(data['uid'])
    svr_id = get_server_id(data.get('u', {'camserv': 0}).get('camserv'))
    if svr_id == '0':
        return
    loop = asyncio.get_event_loop()
    loop.create_task(save_snap(svr_id, uid))
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
    await init_server_map()
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

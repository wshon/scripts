import asyncio
import json
from functools import partial
from pathlib import Path
from urllib import parse

import aiofiles
import aiohttp
from aiohttp import WSMessage


class FcType:
    NULL = 0
    LOGIN = 1
    ADDFRIEND = 2
    PMESG = 3
    STATUS = 4
    DETAILS = 5
    TOKENINC = 6
    ADDIGNORE = 7
    PRIVACY = 8
    ADDFRIENDREQ = 9
    USERNAMELOOKUP = 10
    ZBAN = 11
    BROADCASTNEWS = 12
    ANNOUNCE = 13
    MANAGELIST = 14
    INBOX = 15
    GWCONNECT = 16
    RELOADSETTINGS = 17
    HIDEUSERS = 18
    RULEVIOLATION = 19
    SESSIONSTATE = 20
    REQUESTPVT = 21
    ACCEPTPVT = 22
    REJECTPVT = 23
    ENDSESSION = 24
    TXPROFILE = 25
    STARTVOYEUR = 26
    SERVERREFRESH = 27
    SETTING = 28
    BWSTATS = 29
    TKX = 30
    SETTEXTOPT = 31
    SERVERCONFIG = 32
    MODELGROUP = 33
    REQUESTGRP = 34
    STATUSGRP = 35
    GROUPCHAT = 36
    CLOSEGRP = 37
    UCR = 38
    MYUCR = 39
    SLAVECON = 40
    SLAVECMD = 41
    SLAVEFRIEND = 42
    SLAVEVSHARE = 43
    ROOMDATA = 44
    NEWSITEM = 45
    GUESTCOUNT = 46
    PRELOGINQ = 47
    MODELGROUPSZ = 48
    ROOMHELPER = 49
    CMESG = 50
    JOINCHAN = 51
    CREATECHAN = 52
    INVITECHAN = 53
    QUIETCHAN = 55
    BANCHAN = 56
    PREVIEWCHAN = 57
    SHUTDOWN = 58
    LISTBANS = 59
    UNBAN = 60
    SETWELCOME = 61
    CHANOP = 62
    LISTCHAN = 63
    TAGS = 64
    SETPCODE = 65
    SETMINTIP = 66
    UEOPT = 67
    HDVIDEO = 68
    METRICS = 69
    OFFERCAM = 70
    REQUESTCAM = 71
    MYWEBCAM = 72
    MYCAMSTATE = 73
    PMHISTORY = 74
    CHATFLASH = 75
    TRUEPVT = 76
    BOOKMARKS = 77
    EVENT = 78
    STATEDUMP = 79
    RECOMMEND = 80
    EXTDATA = 81
    NOTIFY = 84
    PUBLISH = 85
    XREQUEST = 86
    XRESPONSE = 87
    EDGECON = 88
    XMESG = 89
    CLUBSHOW = 90
    CLUBCMD = 91
    ZGWINVALID = 95
    CONNECTING = 96
    CONNECTED = 97
    DISCONNECTED = 98
    LOGOUT = 99


class User:
    def __init__(self, fc, data):
        self.fc = fc
        self.data = data

    @property
    def is_available(self):
        return bool(self.svr_id)

    @property
    def uid(self):
        return str(self.data['uid'])

    @property
    def svr_idx(self):
        return str(self.data.get('u', {'camserv': None}).get('camserv'))

    @property
    def svr_id(self):
        if self.svr_idx not in self.fc.svr_map['h5video_servers']:
            return None
        else:
            return self.fc.svr_map['h5video_servers'][self.svr_idx][5:]

    @property
    def avatar_url(self):
        return self.get_avatar_url()

    @property
    def snap_url(self):
        return self.get_snap_url()

    @property
    def live_url(self):
        return self.get_live_url()

    def get_avatar_url(self, large=True):
        return f'https://img.mfcimg.com/photos2/{self.uid[:3]}/{self.uid}/avatar.{"100x100" if large else "90x90"}.jpg'

    def get_snap_url(self, large=True):
        return f'https://snap.mfcimg.com/snapimg/{self.svr_id}/{"320x240" if large else "107x80"}/mfc_1{self.uid}'

    def get_live_url(self):
        return f'https://video{self.svr_id}.myfreecams.com/NxServer/ngrp:mfc_1{self.uid}.f4v_mobile/playlist.m3u8'

    async def get_snap(self):
        if not self.is_available:
            return
        async with aiohttp.ClientSession() as session:
            async with session.get(self.snap_url) as response:
                return await response.read()

    async def save_snap(self, path, with_url=True):
        if not self.is_available:
            return
        path = Path(path)
        snap_name = self.snap_url.rsplit('/', 1)[-1] + '.jpg'
        async with aiofiles.open(path / snap_name, mode='wb') as f:
            await f.write(await self.get_snap())
        if with_url:
            live_name = self.snap_url.rsplit('/', 1)[-1] + '.txt'
            async with aiofiles.open(path / live_name, mode='w') as f:
                await f.write(self.live_url)


class FreeCams:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.14 Safari/537.36 Edg/83.0.478.10',
        'Origin': 'https://www.myfreecams.com',
    }
    svr_url = 'https://assets.mfcimg.com/_js/serverconfig.js'
    ws_url = 'https://xchat89.myfreecams.com/fcsl'
    init_msgs = [
        "fcsws_20180422\n\0",
        "1 0 0 20071025 0 1/guest:guest\n\0"
    ]

    fun_map = {}

    svr_map = None

    def __init__(self):
        self.session = aiohttp.ClientSession()

    async def init_svr_map(self):
        async with self.session.get(self.svr_url, headers=self.headers) as response:
            data_raw = await response.text()
        self.svr_map = json.loads(data_raw)

    def reg_fun(self, cmd, fun):
        self.fun_map[cmd] = partial(fun, fc=self)

    def _default_fun(self, packet, fc):
        pass

    def _deal_ws_msg(self, msg):
        msg_split = msg.split(maxsplit=5)
        packet = {
            'type': int(msg_split[0]),
            'from': msg_split[1],
            'to': msg_split[2],
            'arg1': msg_split[3],
            'arg2': msg_split[4],
            'payload': msg_split[5] if len(msg_split) > 5 else ''
        }
        fc_fun = self.fun_map.get(packet['type'], partial(self._default_fun, fc=self))
        fc_fun and fc_fun(packet)

    def _split_ws_msg(self, msg_data):
        msg_data_left = msg_data
        while msg_data_left:
            data_len = int(msg_data_left[:6])
            if data_len + 6 != len(msg_data_left):
                assert "length error"
            msg = msg_data_left[6:6 + data_len]
            self._deal_ws_msg(msg)
            msg_data_left = msg_data_left[6 + data_len:]

    async def run_forever(self):
        if not self.svr_map:
            await self.init_svr_map()
        async with self.session.ws_connect(self.ws_url, headers=self.headers) as ws:
            for init_msg in self.init_msgs:
                await ws.send_str(init_msg)
            ws_msg: WSMessage
            async for ws_msg in ws:
                if ws_msg.type == aiohttp.WSMsgType.TEXT:
                    print(ws_msg.data)
                    self._split_ws_msg(ws_msg.data)
                    # await ws.send_str(msg.data + '/answer')
                elif ws_msg.type == aiohttp.WSMsgType.CLOSED:
                    break
                elif ws_msg.type == aiohttp.WSMsgType.ERROR:
                    break
                else:
                    break
            else:
                return
            return
        pass

    def add_user(self, data):
        return User(self, data)


def run_with_loop(coro):
    asyncio.get_event_loop().create_task(coro)


def fun_sessionstate(packet, fc):
    payload = packet['payload']
    json_str = parse.unquote(payload)
    data = json.loads(json_str)
    user = fc.add_user(data)

    path = Path('snap')
    if not path.exists():
        path.mkdir()
    elif not path.is_dir():
        path.rename('snap_rename')
        path.mkdir()

    run_with_loop(user.save_snap(path))


async def run():
    fcs = FreeCams()
    fcs.reg_fun(FcType.SESSIONSTATE, fun_sessionstate)
    await fcs.run_forever()
    pass


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run())

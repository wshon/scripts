import mimetypes
import os
import uuid

import requests
from requests.cookies import RequestsCookieJar


class Response(object):
    @classmethod
    def load(cls, data):
        obj = None
        for k, v in data.items():
            if k not in cls.__dict__:
                continue
            if not obj:
                obj = cls.__new__(cls)
            obj.__setattr__(k, v)
        return obj


class Object0(Response):
    invalidNames = None
    errorCount = None
    pass


class Object1(Response):
    error = None
    error_message = None
    uptoken = None
    transferguid = None
    uniqueurl = None
    prefix = None
    qrcode = None
    expireAt = None
    pass


class Object2(Response):
    fileGuid = None
    pass


class Object3(Response):
    key = None
    hash = None
    pass


class Object5(Response):
    tempDownloadCode = None
    complete = None
    pass


class File(object):
    def __init__(self, filepath):
        self.filepath = filepath
        kind = mimetypes.guess_type(filepath)
        self.name = os.path.basename(filepath)
        self.type = kind[0] if kind[0] is not None else 'application/octet-stream'
        self.size = os.path.getsize(filepath)

    def open(self):
        return open(self.filepath)


class Result(object):
    def __init__(self,
                 file: File,
                 obj0: Object0,
                 obj1: Object1,
                 obj2: Object2,
                 obj3: Object3,
                 obj4: bool,
                 obj5: Object5):
        self._file = file
        self._obj0 = obj0
        self._obj1 = obj1
        self._obj2 = obj2
        self._obj3 = obj3
        self._obj4 = obj4
        self._obj5 = obj5
        pass

    @property
    def qrcode(self):
        return self._obj1.qrcode

    @property
    def share_url(self):
        return self._obj1.uniqueurl

    @property
    def recv_code(self):
        return self._obj5.tempDownloadCode


class Cow(object):
    key = 'b86d645824ea1f7f'

    # noinspection PyPep8Naming
    class api(object):
        url_base = 'https://cowtransfer.com'
        filename_check = f'{url_base}/generic/filename_check'
        preparesend = f'{url_base}/transfer/preparesend'
        beforeupload = f'{url_base}/transfer/beforeupload'
        upload = f'https://upload.qiniup.com'
        uploaded = f'{url_base}/transfer/uploaded'
        complete = f'{url_base}/transfer/complete'

    def __init__(self, proxies):
        self.proxies = proxies
        self.session = requests.session()
        self.session_id = str(uuid.uuid4())
        self.user_id = str(uuid.uuid4())
        self._init_cookie()
        self._set_id()

    @property
    def headers(self):
        return {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0",
            'Accept': 'application/json',
            'Referer': 'https://cowtransfer.com/',
        }

    def _init_cookie(self):
        ret = self.session.get(self.api.url_base, headers=self.headers, proxies=self.proxies)
        print(ret.status_code)

    def _set_id(self):
        c = RequestsCookieJar()
        c.set(f'{self.key}_gr_session_id', self.session_id, path='/', domain='cowtransfer.com')
        c.set(f'{self.key}_gr_session_id_{self.session_id}', 'false', path='/', domain='cowtransfer.com')
        c.set(f'gr_user_id', self.user_id, path='/', domain='cowtransfer.com')
        self.session.cookies.update(c)

    def _check_filename(self, file: File) -> Object0:
        ret = self.session.post(self.api.filename_check, files={
            'names': (None, file.name),
        }, headers=self.headers, proxies=self.proxies)
        print(ret.text)
        obj = Object0.load(ret.json())
        return obj

    def _prepare_send(self, file: File) -> Object1:
        ret = self.session.post(self.api.preparesend, files={
            'name': (None, ''),
            'totalSize': (None, file.size),
            'message': (None, ''),
            'notifyEmail': (None, ''),
            'validDays': (None, '1'),
            'saveToMyCloud': (None, 'false'),
            'downloadTimes': (None, '-1'),
            'smsReceivers': (None, ''),
            'emailReceivers': (None, ''),
            'enableShareToOthers': (None, 'false'),
            'language': (None, 'cn'),
            'enableDownload': (None, 'true'),
            'enablePreview': (None, 'true'),
        }, headers=self.headers, proxies=self.proxies)
        print(ret.text)
        obj = Object1.load(ret.json())
        return obj

    def _before_upload(self, file: File, obj1: Object1) -> Object2:
        ret = self.session.post(self.api.beforeupload, files={
            'type': (None, file.type),
            'fileId': (None, ''),
            'fileName': (None, file.name),
            'originalName': (None, file.name),
            'fileSize': (None, file.size),
            'transferGuid': (None, obj1.transferguid),
            'storagePrefix': (None, obj1.prefix),
            'unfinishPath': (None, ''),
        }, headers=self.headers, proxies=self.proxies)
        print(ret.text)
        obj = Object2.load(ret.json())
        return obj

    def _upload(self, file: File, obj1: Object1) -> Object3:
        with file.open() as fp:
            ret = self.session.post(self.api.upload, files={
                'file': (file.name, fp, file.type),
                'token': (None, obj1.uptoken),
                'key': (None, f'{obj1.prefix}/{obj1.transferguid}/{file.name}'),
                'fname': (None, file.name),
            }, headers=self.headers, proxies=self.proxies)
        print(ret.text)
        obj = Object3.load(ret.json())
        return obj

    def _uploaded(self, obj1: Object1, obj2: Object2, obj3: Object3) -> bool:
        ret = self.session.post(self.api.uploaded, files={
            'hash': (None, obj3.hash),
            'fileGuid': (None, obj2.fileGuid),
            'transferGuid': (None, obj1.transferguid),
        }, headers=self.headers, proxies=self.proxies)
        print(ret.text)
        return ret.json()

    def _complete(self, obj1: Object1) -> Object5:
        ret = self.session.post(self.api.complete, files={
            'transferGuid': (None, obj1.transferguid),
        }, headers=self.headers, proxies=self.proxies)
        print(ret.text)
        obj = Object5.load(ret.json())
        return obj

    def upload(self, file: File):
        obj0 = self._check_filename(file)
        obj1 = self._prepare_send(file)
        obj2 = self._before_upload(file, obj1)
        obj3 = self._upload(file, obj1)
        obj4 = self._uploaded(obj1, obj2, obj3)
        obj5 = self._complete(obj1)
        return Result(file, obj0, obj1, obj2, obj3, obj4, obj5)

    pass


if __name__ == '__main__':
    cow = Cow(proxies={
        'http': '127.0.0.1:1080',
        'https': '127.0.0.1:1080'
    })
    res = cow.upload(File('test.jpg'))
    pass

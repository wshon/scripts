import uuid

import requests
from requests.cookies import RequestsCookieJar

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0"}
proxies = {
    'http': '127.0.0.1:1080',
    'https': '127.0.0.1:1080'
}
# proxies = None


url_base = 'https://cowtransfer.com'
url_filename_check = f'{url_base}/generic/filename_check'
url_preparesend = f'{url_base}/transfer/preparesend'
url_beforeupload = f'{url_base}/transfer/beforeupload'
url_upload = f'https://upload.qiniup.com'
url_uploaded = f'{url_base}/transfer/uploaded'
url_complete = f'{url_base}/transfer/complete'

session = requests.session()
ret = session.get(url_base, headers=headers, proxies=proxies)
print(ret)

key = 'b86d645824ea1f7f'
gr_session_id = str(uuid.uuid4())
gr_user_id = str(uuid.uuid4())

c = RequestsCookieJar()
c.set(f'{key}_gr_session_id', gr_session_id, path='/', domain='cowtransfer.com')
c.set(f'{key}_gr_session_id_{gr_session_id}', 'false', path='/', domain='cowtransfer.com')
c.set(f'gr_user_id', gr_user_id, path='/', domain='cowtransfer.com')
session.cookies.update(c)

headers.update({
    'Accept': 'application/json',
    'Referer': 'https://cowtransfer.com/',
})

ret = session.post(url_filename_check, files={
    'names': (None, 'zh.203.564.jar'),
}, headers=headers, proxies=proxies)
print(ret.text)

ret = session.post(url_preparesend, files={
    'name': (None, ''),
    'totalSize': (None, '1734109'),
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
}, headers=headers, proxies=proxies)
print(ret.text)
ret_json = ret.json()

error_message = ret_json['error_message']
uptoken = ret_json['uptoken']
transferguid = ret_json['transferguid']
uniqueurl = ret_json['uniqueurl']
prefix = ret_json['prefix']
qrcode = ret_json['qrcode']
expireAt = ret_json['expireAt']

ret = session.post(url_beforeupload, files={
    'type': (None, 'application/jar'),
    'fileId': (None, ''),
    'fileName': (None, 'zh.203.564.jar'),
    'originalName': (None, 'zh.203.564.jar'),
    'fileSize': (None, '1734109'),
    'transferGuid': (None, transferguid),
    'storagePrefix': (None, prefix),
    'unfinishPath': (None, ''),
}, headers=headers, proxies=proxies)
print(ret.text)
ret_json = ret.json()

fileGuid = ret_json['fileGuid']

file_path = r'C:\Users\DELL\AppData\Roaming\JetBrains\IntelliJIdea2020.2\plugins\zh.203.564.jar'
fp = open(file_path, 'rb')
ret = session.post(url_upload, files={
    'file': ('zh.203.564.jar', fp, 'application/jar'),
    'token': (None, uptoken),
    'key': (None, f'{prefix}/{transferguid}/zh.203.564.jar'),
    'fname': (None, 'zh.203.564.jar'),
}, headers=headers, proxies=proxies)
fp.close()
print(ret.text)
ret_json = ret.json()

key = ret_json['key']
hash = ret_json['hash']

ret = session.post(url_uploaded, files={
    'hash': (None, hash),
    'fileGuid': (None, fileGuid),
    'transferGuid': (None, transferguid),
}, headers=headers, proxies=proxies)
print(ret.text)

ret = session.post(url_complete, files={
    'transferGuid': (None, transferguid),
}, headers=headers, proxies=proxies)
print(ret.text)

tempDownloadCode = ret_json['tempDownloadCode']
complete = ret_json['complete']

print(uniqueurl)
print(tempDownloadCode)

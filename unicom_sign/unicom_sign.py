# !/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/11/29 14:00
@Author  : Shon Wong
@Email   : muumlover@live.com
@Blog    : https://blog.wshon.com
@Project : signin_scripts
@FileName: unicom_sign.py
@Software: PyCharm
@license : (C) Copyright 2020 by Shon Wong. All rights reserved.
@Desc    : 
    
"""
import json
import os
from pprint import pprint
from urllib import request

HEAD = """
Connection: keep-alive
Content-Length: 0
Pragma: no-cache
Cache-Control: no-cache
Accept: application/json, text/plain, */*
User-Agent: Mozilla/5.0 (Linux; Android 10; Mi 10 Build/QKQ1.191117.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.101 Mobile Safari/537.36
Content-Type: application/x-www-form-urlencoded
Origin: https://img.client.10010.com
X-Requested-With: com.sinovatech.unicom.ui
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
"""

headers = dict(map(lambda x: x.split(':', 1), (x for x in HEAD.splitlines() if x)))
headers.update({"Cookie": os.getenv("Cookie")})


def format_data(data):
    return json.dumps(json.loads(data), indent=2, ensure_ascii=False)


def today_sign():
    url = "https://act.10010.com/SigninApp/signin/todaySign"
    req = request.Request(url=url, headers=headers)
    rsp = request.urlopen(req)
    return rsp.read().decode()


def push_msg(data):
    url = "http://www.pushplus.plus/send"
    req = request.Request(url=url, headers={"Content-Type": "application/json"})
    data = {
        "token": os.getenv("PushplusToken"),
        "title": "Unicom Signin",
        "content": data,
        "template": "json"
    }
    data = json.dumps(data).encode('utf-8')
    rsp = request.urlopen(req, data=data)
    return rsp.read().decode()


if __name__ == '__main__':
    result = today_sign()
    pprint(json.loads(result), depth=1)
    push_msg(result)

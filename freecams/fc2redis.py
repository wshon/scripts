#!/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/4/29 17:00
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.ronpy.com
@Project : scripts
@FileName: fc2redis
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
from functools import partial

import redis

from fc_spider import FreeCams, FcType


def fun_sessionstate(packet, fc, r):
    user = fc.extract_user(packet['payload'])
    uid, svr_id = user.uid, user.svr_id
    if not uid or not svr_id:
        return
    r.set(uid, svr_id)
    # fc.run_async(user.save_snap())


if __name__ == '__main__':
    # # host是redis主机，需要redis服务端和客户端都启动 redis默认端口是6379

    # 直接连接
    # red = redis.Redis(host='localhost', port=6379, decode_responses=True)

    # 连接池连接
    pool = redis.ConnectionPool(host='localhost', port=6379)
    red = redis.Redis(connection_pool=pool)

    fcs = FreeCams()
    fcs.reg_fun(FcType.SESSIONSTATE, partial(fun_sessionstate, r=red))
    fcs.run_forever()

    a = 1

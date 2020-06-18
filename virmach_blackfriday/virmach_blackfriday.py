#!/usr/bin/env python3
# encoding: utf-8

"""
@Time    : 2019/11/29 17:18 
@Author  : Sam
@Email   : muumlover@live.com
@Blog    : https://blog.muumlover.com
@Project : virmach_blackfriday
@FileName: main
@Software: PyCharm
@license : (C) Copyright 2019 by muumlover. All rights reserved.
@Desc    : 
    
"""
import asyncio
from asyncio import sleep

import aiohttp
import async_timeout


async def get(session, url):
    async with async_timeout.timeout(10):
        async with session.get(url) as response:
            session.cookie_jar.update_cookies(response.cookies)
            return await response.json()


async def post(session, url, data):
    async with async_timeout.timeout(10):
        async with session.post(url, data=data) as response:
            session.cookie_jar.update_cookies(response.cookies)
            return await response.read()


MSG_URL = 'https://sc.ftqq.com/{sc_key}.send'
SC_KEY_LIST = [
    'SC_KEY_1',
    'SC_KEY_2',
]


async def main():
    async with aiohttp.ClientSession() as session:
        url = 'https://billing.virmach.com/modules/addons/blackfriday/new_plan.json'
        plan_id = 0
        while True:
            try:
                content = await get(session, url)
                price = float(content['price'].split()[0][1:])
                if plan_id != content['planid']:
                    for sc_key in SC_KEY_LIST:
                        res = await post(session, MSG_URL.format(sc_key=sc_key), {
                            'text': f'当前价格{price}美元',
                            'desp': f'''价格：{content['price']}
                                        架构：{content['virt']}
                                        内存：{content['ram']}MB RAM
                                        处理器：{content['cpu']} vCORE
                                        硬盘：{content['hdd']}GB SSD(RAID 10)
                                        流量：{content['bw']}GB BANDWIDTH
                                        IP数量：{content['ips']}
                                        位置：{content['location']}
                                        购买链接：https://virmach.com/black-friday-cyber-monday/
                                        速度测试：https://blog.csdn.net/qq_42237101/article/details/85718297'''
                        })
                        pass
                    plan_id = content['planid']
                    pass
            except:
                pass
            await sleep(10)
            pass

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())

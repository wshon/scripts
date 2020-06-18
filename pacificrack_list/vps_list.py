#!/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/4/20 14:48
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.ronpy.com
@Project : scripts
@FileName: vps_list
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
import time
from functools import partial

import requests
from bs4 import BeautifulSoup

Parser = partial(BeautifulSoup, features='html5lib')

# urls = [
#     (x, f'https://pacificrack.com/portal/aff.php?aff=1919&pid={x}') for x in range(9, 60)
# ]

urls = [
    (x, f'https://my.hosteons.com/aff.php?aff=707&pid={x}') for x in range(22, 100)
]

session = requests.Session()

with open(f'out_{time.strftime("%Y%m%d-%H%M%S")}.csv', 'w') as fp:
    for pid, url in urls:
        res = session.get(url)
        content = Parser(res.content)
        try:
            title = content.find(class_='product-title').getText(strip=True)
            info = content.find(class_='product-info').find_all('p')[1].getText(separator=';', strip=True)
            price = content.find(id='inputBillingcycle').getText(separator=';', strip=True)
            vps = f'"{pid}","{title}","{price}","{info}"\n'
            fp.write(vps)
            print(vps, end='')
        except Exception as err:
            pass
        time.sleep(2)

pass

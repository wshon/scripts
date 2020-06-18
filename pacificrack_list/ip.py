#!/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/4/20 15:28
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.ronpy.com
@Project : scripts
@FileName: ip
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
import requests
from bs4 import BeautifulSoup
from ping3 import ping

url = "http://www.xicidaili.com/nn/1"
# 注意复制粘贴的HEADERS里不能有奇异的符号
headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36'}
r = requests.get(url=url, headers=headers)  # requests库get方法获取HTML网页
soup = BeautifulSoup(r.text, "lxml")
# bs中的select方法通过类名查找，组合查找。   (".odd > td:nth-of-type(n)")是指class为odd的标签里的第n个类型为td的子标签
host_list = soup.select(".odd > td:nth-of-type(2)")  # select对象返回的是列表
port_list = soup.select(".odd > td:nth-of-type(3)")
location_list = soup.select(".odd > td:nth-of-type(4)")
type_list = soup.select(".odd > td:nth-of-type(5)")
for location, host in zip(location_list, host_list):  # zip函数接受任意多个可迭代对象作为参数,将对象中对应的元素打包成一个tuple，后以列表形式输出。
    if len(location.contents) != 1:  # bs .contents方法可以将tag的子节点以列表的方式输出
        print(location.a.string.ljust(8), host.string.ljust(20), end='')  # ljust() 方法返回一个原字符串左对齐,并使用空格填充至指定长度的新字符串。
    else:
        print("未知".ljust(8), host.string.ljust(20), end='')
    delay_time = str(ping(host.string, unit='ms'))
    print("time = " + delay_time)

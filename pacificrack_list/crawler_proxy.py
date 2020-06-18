#!/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/4/20 15:48
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.ronpy.com
@Project : scripts
@FileName: crawler_proxy
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
import ssl

import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.ssl_ import create_urllib3_context

CIPHERS = (
    'ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+HIGH:'
    'DH+HIGH:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+HIGH:RSA+3DES:!aNULL:'
    '!eNULL:!MD5'
)


class DESAdapter(HTTPAdapter):
    """
    A TransportAdapter that re-enables 3DES support in Requests.
    """

    def create_ssl_context(self):
        # ctx = create_urllib3_context(ciphers=FORCED_CIPHERS)
        ctx = ssl.create_default_context()
        # allow TLS 1.0 and TLS 1.2 and later (disable SSLv3 and SSLv2)
        # ctx.options |= ssl.OP_NO_SSLv2
        # ctx.options |= ssl.OP_NO_SSLv3
        # ctx.options |= ssl.OP_NO_TLSv1
        ctx.options |= ssl.OP_NO_TLSv1_2
        ctx.options |= ssl.OP_NO_TLSv1_1
        # ctx.options |= ssl.OP_NO_TLSv1_3
        ctx.set_ciphers(CIPHERS)
        # ctx.set_alpn_protocols(['http/1.1', 'spdy/2'])
        ctx.check_hostname = False
        return ctx

    def init_poolmanager(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=CIPHERS)
        kwargs['ssl_context'] = self.create_ssl_context()
        return super(DESAdapter, self).init_poolmanager(*args, **kwargs)

    def proxy_manager_for(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=CIPHERS)
        kwargs['ssl_context'] = self.create_ssl_context()
        return super(DESAdapter, self).proxy_manager_for(*args, **kwargs)


class Request:
    def __init__(self):
        self.session = requests.session()
        self.session.mount('https://', DESAdapter())
        self.get = self.session.get

    @classmethod
    def get(cls, *args, **kwargs):
        return cls().get(*args, **kwargs)


class CrawlerProxy:
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36'
    }

    # header = {
    #     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
    # }

    def __init__(self):
        # self.url = 'http://www.xicidaili.com/nn/'
        self.url = 'https://www.xicidaili.com/wt/'
        self.check_url = 'http://www.ip.cn/'
        self.ip_list = []

    def get_page(self, page=1):
        r = Request.get(url=f'{self.url}{page}', headers=self.headers)  # requests库get方法获取HTML网页
        soup = BeautifulSoup(r.text, "lxml")
        host_list = soup.select(".odd > td:nth-of-type(2)")  # select对象返回的是列表
        port_list = soup.select(".odd > td:nth-of-type(3)")
        location_list = soup.select(".odd > td:nth-of-type(4)")
        type_list = soup.select(".odd > td:nth-of-type(5)")
        return zip(host_list, port_list, location_list, type_list)

    def get_proxy(self, data):
        return data[0].text, data[1].text, data[2].text, data[3].text

    def check_proxy(self, host, port):
        ip_url_next = '://' + host + ':' + port
        proxies = {'http': 'http' + ip_url_next, 'https': 'https' + ip_url_next}
        try:
            r = requests.get(self.check_url, headers=self.headers, proxies=proxies, timeout=3)
            html = r.text
        except Exception as err:
            print('fail-%s' % host)
        else:
            print('success-%s' % host)
            soup = BeautifulSoup(html, 'lxml')
            div = soup.find(class_='well')
            if div:
                print(div.text)
            ip_info = {'address': host, 'port': port}
            self.ip_list.append(ip_info)


if __name__ == '__main__':
    cp = CrawlerProxy()
    proxy_list = cp.get_page()
    for proxy in proxy_list:
        host, port, local, type_ = cp.get_proxy(proxy)
        cp.check_proxy(host, port)
    pass

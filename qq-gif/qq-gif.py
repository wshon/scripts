import logging
import os
import re
import time
from urllib.error import HTTPError
from urllib.request import ProxyHandler, Request, build_opener, urlopen

user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
headers = {'User-Agent': user_agent, 'Connection': 'keep-alive'}


def download_gif(index=0):
    url = f'http://qzonestyle.gtimg.cn/qzone/em/e{index}.gif'

    req = Request(url, headers=headers)

    try:
        if True:
            proxy_handler = ProxyHandler({"http": "127.0.0.1:1080"})
            opener = build_opener(proxy_handler)
            response = opener.open(req)
        else:
            response = urlopen(req)
    except HTTPError:
        logging.debug(f"downlad: {url} error")
        return

    if response.status == 200:
        logging.debug(f"downlad: {url} success")
        with open(f'e{index}.gif', 'wb') as fp:
            fp.write(response .read())
    response.close()


if __name__ == '__main__':
    logging.basicConfig(
        format='%(levelname)s: %(asctime)s [%(pathname)s:%(lineno)d] %(message)s',
        level=logging.NOTSET
    )
    for i in range(626001, 10000000, 1000):
        download_gif(i)

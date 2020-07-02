#!/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/6/30 20:22
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.ronpy.com
@Project : scripts
@FileName: down.py.py
@Software: PyCharm 
@license : (C) Copyright 2020 by Sam Wang. All rights reserved.
@Desc    : 
    
"""

import os
import re
import time
from urllib.request import Request, urlopen

import chardet


def get_html(url):
    """
    返回网页源代码
    :param url:
    :return:
    """
    print('get url: ' + url)
    user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
    headers = {'User-Agent': user_agent, 'Connection': 'keep-alive'}
    req = Request(url, headers=headers)
    http = urlopen(req)
    html_byte = http.read()  # type: bytes
    http.close()
    encode = chardet.detect(html_byte)['encoding']
    html_code = html_byte.decode(encoding=encode)
    return html_code


def download_gallery(gallery_url, path):
    html_code = get_html(gallery_url)
    images = get_image(html_code)
    image_number = 1
    for image in images:
        # urlretrieve速度慢不稳定
        # urllib.urlretrieve(i, path +'%s.jpg' % ImgNum)
        # 下载图片流
        print("开始下载：" + image)
        http = urlopen(image)
        data = http.read()
        # 清除并以二进制写入
        with open(path + '%02d.jpg' % image_number, 'wb') as fp:
            fp.write(data)
        image_number += 1
        time.sleep(2)


def download(page_url, startGallery):
    gallery_num = 0
    next_gallery = True
    while next_gallery:
        next_gallery = False
        html_code = get_html(page_url)
        gallery_urls = get_gallery(html_code)
        for gallery_url, gallery_title, gallery_count in gallery_urls:  # type: str,str,str
            gallery_num += 1
            if gallery_count not in gallery_title:
                gallery_title += '[' + gallery_count + ']'
            else:
                gallery_title = gallery_title.replace('【', '[').replace('】', ']')
            path = mkdir(gallery_title)
            download_gallery(gallery_url, path)
            print('第' + str(gallery_num) + '个相册完成!')
        next_page_url = get_next_page(html_code)
        if next_page_url:
            next_gallery = True
            page_url = next_page_url


def mkdir(name):
    path = ".\\.nothing\\" + name + "\\"
    # 判断路径存在与否
    path = path.strip()  # 去掉首尾空格
    # path = path.rstrip('') # 去掉右侧 \ 符号
    exits = os.path.exists(path)
    if not exits:  # 不存在路径就创建
        os.makedirs(path)
        print(path + ' 创建成功')
    else:
        print(path + ' 已经存在')
    return path


def get_next_page(html_code):
    """<a data-pagination="next" href="https://www.cweb-pix.com/jomiler00/albums/?page=2&seek=C5" >"""
    pattern = re.compile(r'<a data-pagination="next" href="(.*?)".*?>')
    page_url = pattern.findall(html_code)
    return page_url[0]


def get_gallery(html_code):
    """
    返回页面中所有的相册链接(后面处理的时候先加上主站开头)
    :param html_code: html源代码
    :return:
    """
    """<a class="list-item-desc-title-link" href="https://www.cweb-pix.com/album/Cv">Title</a><span class="display-block font-size-small">9 images</span>"""
    pattern = re.compile(r'href="(.*?/album/.*?)">(.*?)</a><span class=".*?">(\d+) images</span>')
    gallery = pattern.findall(html_code)
    return gallery


def get_image(html_code):
    """
    返回相册页面中所有的相册链接(后面处理的时候先加上主站开头)
    :param html_code: html源代码
    :return:
    """
    """<img src="https://img02.cweb-pix.com/images/2015/09/23/01174c28.md.jpg" alt="01174c28.jpg" width="600" height="800">"""
    pattern = re.compile(r'<img.*?src="(.*?\.jpe?g)".*?>')
    image = pattern.findall(html_code)
    image = [x.replace('md.', '') for x in image]
    return image


myUrl = 'https://www.cweb-pix.com/jomiler00/albums'
page = 0
download(myUrl, page)

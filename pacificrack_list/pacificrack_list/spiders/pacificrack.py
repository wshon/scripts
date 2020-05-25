# -*- coding: utf-8 -*-
import scrapy


class PacificrackSpider(scrapy.Spider):
    name = 'pacificrack'
    allowed_domains = ['pacificrack.com']
    start_urls = [
        f'https://pacificrack.com/portal/aff.php?aff=1919&pid={x}' for x in range(60)
    ]

    def parse(self, response):
        pass

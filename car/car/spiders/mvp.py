import scrapy

from car.items import CarItem


class MpvSpider(scrapy.Spider):
    name = 'mpv'
    allowed_domains = ['car.bitauto.com']
    start_urls = ['http://car.bitauto.com/mpv/']

    def parse(self, response):
        for car_url in response.css('div.search-result-list-item').xpath('./a/@href').extract():
            yield scrapy.Request(f'http://car.bitauto.com{car_url}', callback=self.parse_item, dont_filter=True)
        if next_page := response.xpath('//a[@data-current="next"]/@href').get():
            yield scrapy.Request(f'http://car.bitauto.com{next_page}', callback=self.parse, dont_filter=True)
        pass

    def parse_item(self, response):
        item = CarItem()
        item['name'] =response.xpath('//span[@class="yiche-breadcrumb_item-txt"]/text()').get().strip()
        if response.xpath('//div[contains(@class,"zaishou")]'):
            item['ref_price'] = response.xpath('//span[@class="ref-price"]/text()').get().strip()
            item['guide_price'] = response.xpath('//span[@class="guide-price"]/text()').get().strip()
            item['sell_now'] = "在售"
        elif response.xpath('//div[contains(@class,"weishangshi")]'):
            item['ref_price'] = "无"
            item['guide_price'] = "无"
            item['sell_now'] = "未上市"
        return item
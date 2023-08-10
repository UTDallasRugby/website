from pathlib import Path

import scrapy


class SeasonSpider(scrapy.Spider):
    name = "season"
    allowed_domains = ["usarugbystats.com"]

    seasons = [
        "2015-2016",
        "2016-2017",
        "2017-2018",
        "2018-2019",
        "2019-2020",
        "2021-2020",
    ]

    start_urls = [
        "https://usarugbystats.com/embed/club/696/season/" + season
        for season in seasons
    ]

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f"{page}.html"
        Path(filename).write_bytes(response.body)

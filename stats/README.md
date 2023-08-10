# Stats

## Why is this here?

I realized that since USA rugby went bankrupt in 2020, it might delete it's stats pages. Turns out they did in fact move to [Rugby Xplorer](https://xplorer.rugby/) which looks like a much a better management system.

But what about those stats?

Well as of writing this you can still access things through links like https://usarugbystats.com/embed/team/696 but who knows how long that'll last. Their link to the list of CMS links was already gone! (https://assets.usarugby.org/docs/club/cms/USA-Rugby-CMS-List-of-Embed-Friendly-URLs.pdf)

Popped onto the [wayback machine and luckily found it](https://web.archive.org/web/20220303101800/https://assets.usarugby.org/docs/club/cms/USA-Rugby-CMS-List-of-Embed-Friendly-URLs.pdf). It now lives on [in this repo](./USA-Rugby-CMS-List-of-Embed-Friendly-URLs.pdf)

## Scraping

So the [wayback machine hasn't saved all of our stats](https://web.archive.org/web/*/https://usarugbystats.com/embed/team/696*) so I wanted to make sure we could preserve them for UTD.

```sh
scrapy startproject utd_rugby_stats .
```

```sh
scrapy genspider season https://usarugbystats.com/embed/club/696/season/
```

```sh
scrapy crawl season
```

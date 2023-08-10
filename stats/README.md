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

## Then I found the API...

| url (https://usarugbystats.com)       | maps to       |
| ------------------------------------- | ------------- |
| /api/stats/club/pts/696/2015-2016     | points        |
| /api/stats/club/tr/696/2015-2016      | Tries         |
| /api/stats/club/cv/696/2015-2016      | conversions   |
| /api/stats/club/pk/696/2015-2016      | penalty kicks |
| /api/stats/club/dg/696/2015-2016      | drop goals    |
| /api/stats/club/started/696/2015-2016 | Started       |
| /api/stats/club/played/696/2015-2016  | Games played  |
| /api/stats/club/yc/696/2015-2016      | Yellow cards  |
| /api/stats/club/rc/696/2015-2016      | Red Cards     |

I think I'm going to have to pull the competitions manually/ scrapy through it

Looks like you can just replace `embedded` with `api` and it'll spit back json

https://usarugbystats.com/api/competition/1409/match/29329

But it might just be easier to parse the tables...

## Planning

Looks like the `teams` urls has:

1. Schedule
2. Players
3. Standings
4. Stats

### Schedule

1. Save the overall table
2. Follow the link for each game
3. Save the match stream table
4. Save the roster

### Players

1. Download the table
2. Follow the link to each player(https://usarugbystats.com/player/140195) and download
   1. https://usarugbystats.com/api/player/140195
   2. Player Statistics
   3. Team Statistics
   4. Match History

### Standings

Download the table

### Stats

This is where the API will be most beneficial

https://usarugbystats.com/api/stats/club/pts/696/2015-2016?limit=50

# fantasydata-api-node
[SportsDataIO](https://sportsdata.io) API client (formerly branded as FantasyData) library wrapper for Node. For more information on the SportsDataIO API check the [SportsDataIO Developer Portal](https://sportsdata.io/developers). There are no external dependencies for this package aside from [node](https://nodejs.org/).

## Installation
This library is distributed on `npm`. In order to add it as a dependency, run the following command:

``` sh
$ npm install --save fantasydata-node-client
```

## Authentication
You can find your api keys in the [SportsDataIO Developer Portal](https://sportsdata.io/developers). See [Usage](#usage) for implementation details.

## Usage
In this simple example we authenticate two clients, `MLBv3Stats` and `MLBv3Projections`, with their respective keys. We then pull standings for `2023` and do whatever we need to with the JSON returned.
``` js
const fdClientModule = require('fantasydata-node-client');
const keys = {
    'MLBv3StatsClient':'YOUR-MLBV3STATS-KEY',
    'MLBv3ProjectionsClient':'YOUR-MLBV3PROJECTIONS-KEY'
};
const FantasyDataClient = new fdClientModule(keys);
    
FantasyDataClient.MLBv3StatsClient.getStandingsPromise('2023')
    .then((resp) => {
        // data here
    })
    .catch((err) => {
        // handle errors
    });
```

## Documentation
* [SportsDataIO Developer Portal](https://sportsdata.io/developers)
* [Odds API](https://sportsdata.io/live-odds-api)
* [Data Dictionary](https://sportsdata.io/developers/data-dictionary/nfl)

 API Documentation                                                                 |
|----------------------------------------------------------------------------------------|
| [NFL API](https://sportsdata.io/developers/api-documentation/nfl)                      |
| [MLB API](https://sportsdata.io/developers/api-documentation/mlb)                      |
| [NBA API](https://sportsdata.io/developers/api-documentation/nba)                      |
| [NHL API](https://sportsdata.io/developers/api-documentation/nhl)                      |
| [NCAA Football API](https://sportsdata.io/developers/api-documentation/ncaa-football)  |
| [NCAA Basketball API](https://sportsdata.io/developers/api-documentation/ncaa-basketball) |
| [PGA / Golf API](https://sportsdata.io/developers/api-documentation/golf)                |
| [NASCAR API](https://sportsdata.io/developers/api-documentation/nascar)                |
| [Soccer API](https://sportsdata.io/developers/api-documentation/soccer)                |
| [UFC / MMA API](https://sportsdata.io/developers/api-documentation/mma)                      |
| [WNBA API](https://sportsdata.io/developers/api-documentation/wnba)                    |
| [NCAA Women's Basketball API](https://sportsdata.io/developers/api-documentation/ncaa-womens-basketball) |
| [Tennis API](https://sportsdata.io/developers/api-documentation/tennis)                |
| [LoL API](https://sportsdata.io/developers/api-documentation/lol)                      |
| [CS:GO API](https://sportsdata.io/developers/api-documentation/csgo)                   |
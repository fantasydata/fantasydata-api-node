# fantasydata-api-node
[FantasyData](https://fantasydata.com) API client library wrapper for Node. For more information on the FantasyData API check the [Fantasy Data Developer Portal](https://developer.fantasydata.com/?developer-portal). There are no external dependencies for this package aside from [node](https://nodejs.org/).

## Installation
This library is distributed on `npm`. In order to add it as a dependency, run the following command:

``` sh
$ npm install --save fantasydata-node-client
```

## Authentication
You can find your api keys in the [Fantasy Data Developer Portal](https://developer.fantasydata.com/developer). See [Usage](#usage) for implementation details.

## Usage
In this simple example we authenticate two clients, `MLBv3Stats` and `MLBv3Projections`, with their respective keys. We then pull standings for `2018` and do whatever we need to with the JSON returned.
``` js
const fdClientModule = require('fantasydata-node-client');
const keys = {
    'MLBv3StatsClient':'YOUR-MLBV3STATS-KEY',
    'MLBv3ProjectionsClient':'YOUR-MLBV3PROJECTIONS-KEY'
};
const FantasyDataClient = new fdClientModule(keys);
    
FantasyDataClient.MLBv3StatsClient.getStandingsPromise('2018')
    .then((resp) => {
        // data here
    })
    .catch((err) => {
        // handle errors
    });
```

## Documentation
* [Fantasy Data Developer Portal](developer.fantasydata.com/?developer-portal)
* [Implementation Guide](https://fantasydata.com/resources/implementation-guide.aspx)
* [Data Dictionary](https://fantasydata.com/resources/data-dictionary.aspx)

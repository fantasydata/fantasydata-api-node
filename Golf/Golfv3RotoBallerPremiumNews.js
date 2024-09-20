"use strict";

const BaseClient = require('../baseClient');

class Golfv3RotoBallerPremiumNewsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Premium News
    /// </summary>
    getPremiumNewsPromise(){
        return this.GetPromise('/v3/golf/news-rotoballer/{format}/RotoBallerPremiumNews');
    }

    /// <summary>
    /// Get Premium News - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2021-JAN-06</code>, <code>2021-JAN-31</code>.</param>
    getPremiumNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/golf/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Premium News - by Player
    /// </summary>
    /// <param name="playerid">Unique SportsDataIO Player ID. Example:<code>40000019</code>.</param>
    getPremiumNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/golf/news-rotoballer/{format}/RotoBallerPremiumNewsByPlayerID/{playerid}', parameters);
    }

}

module.exports = Golfv3RotoBallerPremiumNewsClient;


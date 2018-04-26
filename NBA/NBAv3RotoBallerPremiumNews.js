"use strict";

const BaseClient = require('../baseClient');

class NBAv3RotoBallerPremiumNewsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Premium News
    /// </summary>
    getRotoBallerPremiumNewsPromise(){
        return this.GetPromise('/v3/nba/news-rotoballer/{format}/RotoBallerPremiumNews');
    }

    /// <summary>
    /// Get Premium News by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getRotoBallerPremiumNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Premium News by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getRotoBallerPremiumNewsByPlayerIDPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nba/news-rotoballer/{format}/RotoBallerPremiumNewsByPlayerID/{playerid}', parameters);
    }

}

module.exports = NBAv3RotoBallerPremiumNewsClient;


﻿"use strict";

const BaseClient = require('../baseClient');

class NFLv3RotoBallerArticlesClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get RotoBaller Articles
    /// </summary>
    getRotoBallerArticlesPromise(){
        return this.GetPromise('/v3/nfl/articles-rotoballer/{format}/RotoBallerArticles');
    }

    /// <summary>
    /// Get RotoBaller Articles - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getRotoBallerArticlesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/articles-rotoballer/{format}/RotoBallerArticlesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get RotoBaller Articles - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getRotoBallerArticlesByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/articles-rotoballer/{format}/RotoBallerArticlesByPlayerID/{playerid}', parameters);
    }

}

module.exports = NFLv3RotoBallerArticlesClient;


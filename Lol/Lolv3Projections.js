"use strict";

const BaseClient = require('../baseClient');

class Lolv3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Example: <code>2019-01-20</code></param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/lol/projections/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Example: <code>2019-01-20</code></param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>100001500</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/lol/projections/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

}

module.exports = Lolv3ProjectionsClient;


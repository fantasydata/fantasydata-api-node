"use strict";

const BaseClient = require('../baseClient');

class Csgov3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/csgo/projections/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>100000576</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/csgo/projections/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

}

module.exports = Csgov3ProjectionsClient;


"use strict";

const BaseClient = require('../baseClient');

class MLBv3ProjectionsDfsrClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getDfsrPlayerGameProjectionStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/projections-dfsr/{format}/DfsrPlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getDfsrPlayerGameProjectionStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/projections-dfsr/{format}/DfsrPlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

}

module.exports = MLBv3ProjectionsDfsrClient;


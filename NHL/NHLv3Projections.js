"use strict";

const BaseClient = require('../baseClient');

class NHLv3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get DFS Slates by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/projections/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/projections/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000378</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/projections/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Starting Goaltenders by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.</param>
    getStartingGoaltendersByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/projections/{format}/StartingGoaltendersByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Injured Players
    /// </summary>
    getInjuredPlayersPromise(){
        return this.GetPromise('/v3/nhl/projections/{format}/InjuredPlayers');
    }

}

module.exports = NHLv3ProjectionsClient;


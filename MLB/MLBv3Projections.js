"use strict";

const BaseClient = require('../baseClient');

class MLBv3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get DFS Slates - by Date
    /// </summary>
    /// <param name="date">The date of the slates. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/projections/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/projections/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/projections/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Projected Player Season Stats With ADP
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getProjectedPlayerSeasonStatsWithADPPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/projections/{format}/PlayerSeasonProjectionStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Injured
    /// </summary>
    getPlayerDetailsByInjuredPromise(){
        return this.GetPromise('/v3/mlb/projections/{format}/InjuredPlayers');
    }

    /// <summary>
    /// Get Starting Lineups - by Date
    /// </summary>
    /// <param name="date">The date of the slates. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getStartingLineupsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/projections/{format}/StartingLineupsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Depth Charts
    /// </summary>
    getDepthChartsPromise(){
        return this.GetPromise('/v3/mlb/projections/{format}/DepthCharts');
    }

    /// <summary>
    /// Get BAKER Projected Player Game Stats - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2023-JUL-31</code>, <code>2023-SEP-01</code>.</param>
    getBAKERProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/projections/{format}/BakerPlayerGameProjections/{date}', parameters);
    }

    /// <summary>
    /// Get BAKER Projected Player Game Stats - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2023-JUL-31</code>, <code>2023-SEP-01</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getBAKERProjectedPlayerGameStatsByDate_1441Promise(date, team){
        var parameters = {};
        parameters['date']=date;
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/projections/{format}/BakerPlayerGameProjectionsByTeam/{date}/{team}', parameters);
    }

}

module.exports = MLBv3ProjectionsClient;


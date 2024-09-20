"use strict";

const BaseClient = require('../baseClient');

class NBAv3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get DFS Slates - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/projections/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/projections/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats - by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>20000571</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nba/projections/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Projected Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2019</code>, etc.</param>
    getProjectedPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nba/projections/{format}/PlayerSeasonProjectionStats/{season}', parameters);
    }

    /// <summary>
    /// Get Projected Player Season Stats - by Player
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2019</code>, etc.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>20000571</code>.</param>
    getProjectedPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nba/projections/{format}/PlayerSeasonProjectionStatsByPlayer/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Projected Player Season Stats - by Team
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2019</code>, etc.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>MIA</code>, <code>PHI</code>.</param>
    getProjectedPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/nba/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Starting Lineups - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.</param>
    getStartingLineupsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/projections/{format}/StartingLineupsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Injured
    /// </summary>
    getPlayerDetailsByInjuredPromise(){
        return this.GetPromise('/v3/nba/projections/{format}/InjuredPlayers');
    }

    /// <summary>
    /// Get Depth Charts
    /// </summary>
    getDepthChartsPromise(){
        return this.GetPromise('/v3/nba/projections/{format}/DepthCharts');
    }

}

module.exports = NBAv3ProjectionsClient;


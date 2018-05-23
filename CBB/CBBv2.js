"use strict";

const BaseClient = require('../baseClient');

class CBBv2Client extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/cbb/v2/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Box Score
    /// </summary>
    /// <param name="gameid">The GameID of an CBB game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getBoxScorePromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/cbb/v2/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    getBoxScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/cbb/v2/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date Delta
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getBoxScoresByDateDeltaPromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/cbb/v2/{format}/BoxScoresDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/cbb/v2/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/cbb/v2/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get League Hierarchy
    /// </summary>
    getLeagueHierarchyPromise(){
        return this.GetPromise('/cbb/v2/{format}/LeagueHierarchy');
    }

    /// <summary>
    /// Get Player Details by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/cbb/v2/{format}/Players');
    }

    /// <summary>
    /// Get Player Details by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>60003802</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/cbb/v2/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/cbb/v2/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    getPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/cbb/v2/{format}/PlayerGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>60003802</code>.</param>
    getPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/cbb/v2/{format}/PlayerGameStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/cbb/v2/{format}/PlayerSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats By Player
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>60003802</code>.</param>
    getPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/cbb/v2/{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats by Team
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/cbb/v2/{format}/PlayerSeasonStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/cbb/v2/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>60003802</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/cbb/v2/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/cbb/v2/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-FEB-27</code>, <code>2015-SEP-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/cbb/v2/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/cbb/v2/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/cbb/v2/{format}/teams');
    }

    /// <summary>
    /// Get Tournament Hierarchy
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getTournamentHierarchyPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/cbb/v2/{format}/Tournament/{season}', parameters);
    }

}

module.exports = CBBv2Client;


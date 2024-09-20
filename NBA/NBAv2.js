﻿"use strict";

const BaseClient = require('../baseClient');

class NBAv2Client extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/nba/v2/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Box Score [Live & Final]
    /// </summary>
    /// <param name="gameid">The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getBoxScoreLiveFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/nba/v2/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getBoxScoresByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/nba/v2/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getBoxScoresDeltaByDatePromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/nba/v2/{format}/BoxScoresDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/nba/v2/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getGamesByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/nba/v2/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/nba/v2/{format}/News');
    }

    /// <summary>
    /// Get News - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/nba/v2/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/nba/v2/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/nba/v2/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Free Agent
    /// </summary>
    getPlayerDetailsByFreeAgentPromise(){
        return this.GetPromise('/nba/v2/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>20000571</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/nba/v2/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getPlayerGameStatsByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/nba/v2/{format}/PlayerGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>20000571</code>.</param>
    getPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/nba/v2/{format}/PlayerGameStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nba/v2/{format}/PlayerSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Player
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>20000571</code>.</param>
    getPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/nba/v2/{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Team
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/nba/v2/{format}/PlayerSeasonStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Players Details - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/nba/v2/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/nba/v2/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
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
        return this.GetPromise('/nba/v2/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nba/v2/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/nba/v2/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nba/v2/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getTeamGameStatsByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/nba/v2/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nba/v2/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Team Stats Allowed by Position
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getTeamStatsAllowedByPositionPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nba/v2/{format}/TeamStatsAllowedByPosition/{season}', parameters);
    }

    /// <summary>
    /// Get Teams - by Active
    /// </summary>
    getTeamsByActivePromise(){
        return this.GetPromise('/nba/v2/{format}/teams');
    }

    /// <summary>
    /// Get Teams - All
    /// </summary>
    getTeamsAllPromise(){
        return this.GetPromise('/nba/v2/{format}/AllTeams');
    }

}

module.exports = NBAv2Client;


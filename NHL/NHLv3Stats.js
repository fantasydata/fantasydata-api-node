﻿"use strict";

const BaseClient = require('../baseClient');

class NHLv3StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Box Score [Live & Final]
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getBoxScoreLiveFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nhl/stats/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    getBoxScoresByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getBoxScoresDeltaByDatePromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nhl/stats/{format}/BoxScoresDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Season - Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get DFS Slates - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    getGamesByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Line Combinations - by Season
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getLineCombinationsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/stats/{format}/LinesBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/News');
    }

    /// <summary>
    /// Get News - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/stats/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Free Agents
    /// </summary>
    getPlayerDetailsByFreeAgentsPromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000007</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/stats/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    getPlayerGameStatsByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/PlayerGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Player [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000378</code>.</param>
    getPlayerGameStatsByPlayerLiveFinalPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/stats/{format}/PlayerGameStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/stats/{format}/PlayerSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Player
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000378</code>.</param>
    getPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/stats/{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Team
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/nhl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nhl/stats/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/stats/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/stats/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    getTeamGameStatsByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/stats/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Team Stats Allowed - by Position
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getTeamStatsAllowedByPositionPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/stats/{format}/TeamStatsAllowedByPosition/{season}', parameters);
    }

    /// <summary>
    /// Get Team Profiles - by Active
    /// </summary>
    getTeamProfilesByActivePromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/teams');
    }

    /// <summary>
    /// Get Teams - All
    /// </summary>
    getTeamsAllPromise(){
        return this.GetPromise('/v3/nhl/stats/{format}/AllTeams');
    }

    /// <summary>
    /// Get Player Game Logs - by Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000651</code>.</param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getPlayerGameLogsBySeasonPromise(season, playerid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/nhl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Team Game Logs - by Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="teamid">Unique ID of team. Example <code> 8 </code></param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getTeamGameLogsBySeasonPromise(season, teamid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['teamid']=teamid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/nhl/stats/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Box Score [Final]
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getBoxScoreFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nhl/stats/{format}/BoxScoreFinal/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    getBoxScoresByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/BoxScoresFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    getPlayerGameStatsByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/PlayerGameStatsByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    getTeamGameStatsByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/TeamGameStatsByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Fantasy Points - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.</param>
    getFantasyPointsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/stats/{format}/FantasyGameStatsByDate/{date}', parameters);
    }

}

module.exports = NHLv3StatsClient;


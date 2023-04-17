﻿"use strict";

const BaseClient = require('../baseClient');

class CBBv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get League Hierarchy
    /// </summary>
    getLeagueHierarchyPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/LeagueHierarchy');
    }

    /// <summary>
    /// Get Player Details by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>60003802</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cbb/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cbb/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/scores/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/scores/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/teams');
    }

    /// <summary>
    /// Get Tournament Hierarchy
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.</param>
    getTournamentHierarchyPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/scores/{format}/Tournament/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Team Schedule
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getTeamSchedulePromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/cbb/scores/{format}/TeamSchedule/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Injured Players
    /// </summary>
    getInjuredPlayersPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/InjuredPlayers');
    }

    /// <summary>
    /// Get Team Game Logs By Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="teamid">Unique ID of team. Example <code> 1 </code></param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getTeamGameLogsBySeasonPromise(season, teamid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['teamid']=teamid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/cbb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Games by Date (Basic)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.</param>
    getGamesByDateBasicPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/scores/{format}/ScoresBasic/{date}', parameters);
    }

    /// <summary>
    /// Get Players by Team (Basic)
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersByTeamBasicPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cbb/scores/{format}/PlayersBasic/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules (Basic)
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesBasicPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/scores/{format}/SchedulesBasic/{season}', parameters);
    }

    /// <summary>
    /// Get Teams (Basic)
    /// </summary>
    getTeamsBasicPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/TeamsBasic');
    }

}

module.exports = CBBv3ScoresClient;


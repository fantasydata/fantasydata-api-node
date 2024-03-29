﻿"use strict";

const BaseClient = require('../baseClient');

class CFBv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Conference Hierarchy (with Teams)
    /// </summary>
    getConferenceHierarchyPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/LeagueHierarchy');
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Current Week
    /// </summary>
    getCurrentWeekPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentWeek');
    }

    /// <summary>
    /// Get Games by Date - Legacy
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.</param>
    getGamesByDateLegacyPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Games by Week - Legacy
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getGamesByWeekLegacyPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Schedules - Legacy
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesLegacyPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Team Game Stats by Week
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getTeamGameStatsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/TeamGameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats & Standings
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.</param>
    getTeamSeasonStatsStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/scores/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams  - Legacy
    /// </summary>
    getTeamsLegacyPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/Teams');
    }

    /// <summary>
    /// Get Current SeasonType
    /// </summary>
    getCurrentSeasonTypePromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentSeasonType');
    }

    /// <summary>
    /// Get Current Season Details
    /// </summary>
    getCurrentSeasonDetailsPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentSeasonDetails');
    }

    /// <summary>
    /// Get Player Details By Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details By Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>50002016</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cfb/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Injured Players
    /// </summary>
    getInjuredPlayersPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/InjuredPlayers');
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
        return this.GetPromise('/v3/cfb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/scores/{format}/PlayersBasic/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/scores/{format}/SchedulesBasic/{season}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/TeamsBasic');
    }

    /// <summary>
    /// Get Scores by Date
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getScoresByDatePromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/ScoresBasic/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Players By Active
    /// </summary>
    getPlayersByActivePromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/PlayersByActive');
    }

}

module.exports = CFBv3ScoresClient;


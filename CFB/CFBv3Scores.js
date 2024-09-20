"use strict";

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
    /// Get Conference Hierarchy
    /// </summary>
    getConferenceHierarchyPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/LeagueHierarchy');
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Week Current
    /// </summary>
    getWeekCurrentPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentWeek');
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.</param>
    getGamesByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Games - by Week [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getGamesByWeekLiveFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
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
    /// Get Team Game Stats - by Week [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getTeamGameStatsByWeekLiveFinalPromise(season, week){
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
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/Teams');
    }

    /// <summary>
    /// Get Season Type - Current
    /// </summary>
    getSeasonTypeCurrentPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentSeasonType');
    }

    /// <summary>
    /// Get Season Current - Details
    /// </summary>
    getSeasonCurrentDetailsPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentSeasonDetails');
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>50002016</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cfb/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Injured
    /// </summary>
    getPlayerDetailsByInjuredPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/InjuredPlayers');
    }

    /// <summary>
    /// Get Team Game Logs - by Season
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
    /// Get Player Profiles - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerProfilesByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/scores/{format}/PlayersBasic/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules (Basic)
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesBasicPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/scores/{format}/SchedulesBasic/{season}', parameters);
    }

    /// <summary>
    /// Get Teams (Basic) - All
    /// </summary>
    getTeamsBasicAllPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/TeamsBasic');
    }

    /// <summary>
    /// Get Games (Basic) - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.</param>
    getGamesBasicByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/scores/{format}/ScoresBasic/{date}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActive_1458Promise(){
        return this.GetPromise('/v3/cfb/scores/{format}/PlayersByActive');
    }

    /// <summary>
    /// Get Games by Date - [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.</param>
    getGamesByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Games (Basic) by Date - [Final]
    /// </summary>
    /// <param name="date">The date of the games. Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>.</param>
    getGamesBasicByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/scores/{format}/ScoresBasicFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Games (Basic) - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getGamesBasicByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/ScoresBasicFinal/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Games - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getGamesByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByWeekFinal/{season}/{week}', parameters);
    }

}

module.exports = CFBv3ScoresClient;


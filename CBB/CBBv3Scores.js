"use strict";

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
    /// Get Season - Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.</param>
    getGamesByDateLiveFinalPromise(date){
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
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>60003802</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cbb/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cbb/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Games - by Season
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getGamesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.</param>
    getTeamGameStatsByDateLiveFinalPromise(date){
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
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/teams');
    }

    /// <summary>
    /// Get Games - by Season [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.</param>
    getGamesBySeasonLiveFinalPromise(season){
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
    /// Get Schedules - by Team
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getSchedulesByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/cbb/scores/{format}/TeamSchedule/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Injured
    /// </summary>
    getPlayerDetailsByInjuredPromise(){
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
    /// Get Games (Basic) - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.</param>
    getGamesBasicByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/scores/{format}/ScoresBasic/{date}', parameters);
    }

    /// <summary>
    /// Get Player Profiles - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SMU</code>, <code>UCLA</code>.</param>
    getPlayerProfilesByTeamPromise(team){
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
    /// Get Teams (Basic) - All
    /// </summary>
    getTeamsBasicAllPromise(){
        return this.GetPromise('/v3/cbb/scores/{format}/TeamsBasic');
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActive_1457Promise(){
        return this.GetPromise('/v3/cbb/scores/{format}/PlayersByActive');
    }

    /// <summary>
    /// Get Games - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.</param>
    getGamesByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/scores/{format}/GamesByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Games - by Season [Final]
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getGamesBySeasonFinalPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/scores/{format}/GamesFinal/{season}', parameters);
    }

}

module.exports = CBBv3ScoresClient;


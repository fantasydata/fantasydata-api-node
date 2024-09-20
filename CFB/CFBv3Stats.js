"use strict";

const BaseClient = require('../baseClient');

class CFBv3StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Box Score [Live & Final]
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>1148</code> or <code>1149</code></param>
    getBoxScoreLiveFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/stats/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-JAN-01</code>, <code>2017-JAN-01</code>.</param>
    getBoxScoresByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/stats/{format}/BoxScoresByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Week [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>2</code>, <code>3</code>, etc.</param>
    getBoxScoresByWeekLiveFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/stats/{format}/BoxScoresByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta - by Week
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getBoxScoresDeltaByWeekPromise(season, week, minutes){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/cfb/stats/{format}/BoxScoresByWeekDelta/{season}/{week}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Conference Hierarchy
    /// </summary>
    getConferenceHierarchyPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/LeagueHierarchy');
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Week Current
    /// </summary>
    getWeekCurrentPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/CurrentWeek');
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.</param>
    getGamesByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/stats/{format}/GamesByDate/{date}', parameters);
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
        return this.GetPromise('/v3/cfb/stats/{format}/GamesByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>50002016</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cfb/stats/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/stats/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Player [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>50002016</code>.</param>
    getPlayerGameStatsByPlayerLiveFinalPromise(season, week, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cfb/stats/{format}/PlayerGameStatsByPlayer/{season}/{week}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Week [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getPlayerGameStatsByWeekLiveFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/stats/{format}/PlayerGameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/stats/{format}/PlayerSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Player
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>50002016</code>.</param>
    getPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cfb/stats/{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Team
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/stats/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/Stadiums');
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
        return this.GetPromise('/v3/cfb/stats/{format}/TeamGameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats & Standings
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.</param>
    getTeamSeasonStatsStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/stats/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/Teams');
    }

    /// <summary>
    /// Get Season Type - Current
    /// </summary>
    getSeasonTypeCurrentPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/CurrentSeasonType');
    }

    /// <summary>
    /// Get Season Current - Details
    /// </summary>
    getSeasonCurrentDetailsPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/CurrentSeasonDetails');
    }

    /// <summary>
    /// Get Player Game Logs - by Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>50036283</code>.</param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getPlayerGameLogsBySeasonPromise(season, playerid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/cfb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Injured
    /// </summary>
    getPlayerDetailsByInjuredPromise(){
        return this.GetPromise('/v3/cfb/stats/{format}/InjuredPlayers');
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
        return this.GetPromise('/v3/cfb/stats/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Box Score [Final]
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>1148</code> or <code>1149</code></param>
    getBoxScoreFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/stats/{format}/BoxScoreFinal/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-JAN-01</code>, <code>2017-JAN-01</code>.</param>
    getBoxScoresByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/stats/{format}/BoxScoresFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>2</code>, <code>3</code>, etc.</param>
    getBoxScoresByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/stats/{format}/BoxScoresByWeekFinal/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getPlayerGameStatsByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getTeamGameStatsByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/stats/{format}/TeamGameStatsByWeekFinal/{season}/{week}', parameters);
    }

}

module.exports = CFBv3StatsClient;


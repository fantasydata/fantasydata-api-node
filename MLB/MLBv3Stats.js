"use strict";

const BaseClient = require('../baseClient');

class MLBv3StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Batter vs. Pitcher Stats
    /// </summary>
    /// <param name="hitterid">Unique FantasyData Player ID. Example:<code>10000031</code>.</param>
    /// <param name="pitcherid">Unique FantasyData Player ID. Example:<code>10000618</code>.</param>
    getBatterVsPitcherStatsPromise(hitterid, pitcherid){
        var parameters = {};
        parameters['hitterid']=hitterid;
        parameters['pitcherid']=pitcherid;
        return this.GetPromise('/v3/mlb/stats/{format}/HitterVsPitcher/{hitterid}/{pitcherid}', parameters);
    }

    /// <summary>
    /// Get Box Score
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getBoxScorePromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getBoxScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date Delta
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresByDateDeltaPromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScoresDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get DFS Slates by Date
    /// </summary>
    /// <param name="date">The date of the slates. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/News');
    }

    /// <summary>
    /// Get News by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/stats/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/Players');
    }

    /// <summary>
    /// Get Player Details by Free Agents
    /// </summary>
    getPlayerDetailsByFreeAgentsPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/stats/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerGameStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Away Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getPlayerSeasonAwayStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonAwayStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Home Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getPlayerSeasonHomeStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonHomeStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Split Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    /// <param name="split">The desired split of stats. Currently, we support vs. Left/Right/Switch handed pitchers/hitters. Possible values are: <code>L</code>, <code>R</code> and <code>S</code></param>
    getPlayerSeasonSplitStatsPromise(season, split){
        var parameters = {};
        parameters['season']=season;
        parameters['split']=split;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonSplitStats/{season}/{split}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats By Player
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats by Team
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats Split By Team
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getPlayerSeasonStatsSplitByTeamPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonStatsSplitByTeam/{season}', parameters);
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/stats/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Hitting vs. Starting Pitcher
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getTeamHittingVsStartingPitcherPromise(gameid, team){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/stats/{format}/TeamHittersVsPitcher/{gameid}/{team}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams (Active)
    /// </summary>
    getTeamsActivePromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/teams');
    }

    /// <summary>
    /// Get Teams (All)
    /// </summary>
    getTeamsAllPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/AllTeams');
    }

}

module.exports = MLBv3StatsClient;


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
    /// Get Box Score [Live & Final]
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getBoxScoreLiveFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getBoxScoresByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresDeltaByDatePromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScoresDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get DFS Slates - by Date
    /// </summary>
    /// <param name="date">The date of the slates. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getGamesByDateLiveFinalPromise(date){
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
    /// Get News - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/stats/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Free Agents
    /// </summary>
    getPlayerDetailsByFreeAgentsPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/stats/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getPlayerGameStatsByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Player
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
    /// Get Player Season Stats - by Away
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getPlayerSeasonStatsByAwayPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonAwayStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Home
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getPlayerSeasonStatsByHomePromise(season){
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
    /// Get Player Season Stats - by Player
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
    /// Get Player Season Stats - by Team
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
    /// Get Player Season Stats Split - by Team
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getPlayerSeasonStatsSplitByTeamPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerSeasonStatsSplitByTeam/{season}', parameters);
    }

    /// <summary>
    /// Get Players - by Team
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
    /// Get Team Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getTeamGameStatsByDateLiveFinalPromise(date){
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
    /// Get Team Profiles - by Active
    /// </summary>
    getTeamProfilesByActivePromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/teams');
    }

    /// <summary>
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/mlb/stats/{format}/AllTeams');
    }

    /// <summary>
    /// Get Player Game Logs - by Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10001365</code>.</param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getPlayerGameLogsBySeasonPromise(season, playerid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Team Game Logs - by Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="teamid">Unique ID of team. Example <code> 12 </code></param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getTeamGameLogsBySeasonPromise(season, teamid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['teamid']=teamid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/mlb/stats/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Box Score [Final]
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getBoxScoreFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScoreFinal/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getBoxScoresByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/BoxScoresFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getPlayerGameStatsByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/PlayerGameStatsByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getTeamGameStatsByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/TeamGameStatsByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Fantasy Points - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getFantasyPointsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/stats/{format}/FantasyGameStatsByDate/{date}', parameters);
    }

}

module.exports = MLBv3StatsClient;


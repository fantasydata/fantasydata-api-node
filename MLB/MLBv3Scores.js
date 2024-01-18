"use strict";

const BaseClient = require('../baseClient');

class MLBv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games by Date - Legacy
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getGamesByDateLegacyPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/News');
    }

    /// <summary>
    /// Get News by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/scores/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details by Active - Legacy
    /// </summary>
    getPlayerDetailsByActiveLegacyPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details by Free Agents - Legacy
    /// </summary>
    getPlayerDetailsByFreeAgentsLegacyPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details by Player - Legacy
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getPlayerDetailsByPlayerLegacyPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Players by Team - Legacy
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersByTeamLegacyPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules - Legacy
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesLegacyPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/scores/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2017</code>, <code>2018</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/scores/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams (Active)
    /// </summary>
    getTeamsActivePromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/teams');
    }

    /// <summary>
    /// Get Teams (All)
    /// </summary>
    getTeamsAllPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/AllTeams');
    }

    /// <summary>
    /// Get Team Game Logs By Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="teamid">Unique ID of team. Example <code> 12 </code></param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getTeamGameLogsBySeasonPromise(season, teamid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['teamid']=teamid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/mlb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Scores by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/ScoresBasic/{date}', parameters);
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/scores/{format}/PlayersBasic/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/scores/{format}/SchedulesBasic/{season}', parameters);
    }

    /// <summary>
    /// Get Players by Active
    /// </summary>
    getPlayersByActivePromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/PlayersByActive');
    }

    /// <summary>
    /// Get Players by Free Agent
    /// </summary>
    getPlayersByFreeAgentPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/PlayersByFreeAgents');
    }

}

module.exports = MLBv3ScoresClient;


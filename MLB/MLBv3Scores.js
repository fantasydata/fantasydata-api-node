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
    /// Get Season - Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getGamesByDateLiveFinalPromise(date){
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
    /// Get News - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/scores/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Free Agents
    /// </summary>
    getPlayerDetailsByFreeAgentsPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Players Details - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
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
    /// Get Team Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getTeamGameStatsByDateLiveFinalPromise(date){
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
    /// Get Team Profiles - by Active
    /// </summary>
    getTeamProfilesByActivePromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/teams');
    }

    /// <summary>
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/mlb/scores/{format}/AllTeams');
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
        return this.GetPromise('/v3/mlb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Games (Basic) - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getGamesBasicByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/ScoresBasic/{date}', parameters);
    }

    /// <summary>
    /// Get Player Profiles (Basic) - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayerProfilesBasicByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/scores/{format}/PlayersBasic/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules (Basic)
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesBasicPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/scores/{format}/SchedulesBasic/{season}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Active
    /// </summary>
    getPlayerDetailsByActive_1459Promise(){
        return this.GetPromise('/v3/mlb/scores/{format}/PlayersByActive');
    }

    /// <summary>
    /// Get Player Details - by Free Agents
    /// </summary>
    getPlayerDetailsByFreeAgents_1460Promise(){
        return this.GetPromise('/v3/mlb/scores/{format}/PlayersByFreeAgents');
    }

    /// <summary>
    /// Get Team Profiles - by Season
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getTeamProfilesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/scores/{format}/teams/{season}', parameters);
    }

    /// <summary>
    /// Get Transactions
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getTransactionsPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/TransactionsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Games - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getGamesByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/GamesByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Games (Basic) - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getGamesBasicByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/ScoresBasicFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getTeamGameStatsByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/scores/{format}/TeamGameStatsByDateFinal/{date}', parameters);
    }

}

module.exports = MLBv3ScoresClient;


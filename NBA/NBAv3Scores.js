"use strict";

const BaseClient = require('../baseClient');

class NBAv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/News');
    }

    /// <summary>
    /// Get News by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/scores/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nba/scores/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Schedules  - Legacy
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesLegacyPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nba/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nba/scores/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/scores/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nba/scores/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams (Active)
    /// </summary>
    getTeamsActivePromise(){
        return this.GetPromise('/v3/nba/scores/{format}/teams');
    }

    /// <summary>
    /// Get Teams (All)
    /// </summary>
    getTeamsAllPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/AllTeams');
    }

    /// <summary>
    /// Get Player Details by Active - Legacy
    /// </summary>
    getPlayerDetailsByActiveLegacyPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details by Free Agent - Legacy
    /// </summary>
    getPlayerDetailsByFreeAgentLegacyPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details by Player - Legacy
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>20000571</code>.</param>
    getPlayerDetailsByPlayerLegacyPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nba/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Referees
    /// </summary>
    getRefereesPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/Referees');
    }

    /// <summary>
    /// Get Players by Team - Legacy
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>BKN</code>.</param>
    getPlayersByTeamLegacyPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nba/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Team Game Logs By Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="teamid">Unique ID of team. Example <code> 8 </code></param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getTeamGameLogsBySeasonPromise(season, teamid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['teamid']=teamid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/nba/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Depth Charts
    /// </summary>
    getDepthChartsPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/DepthCharts');
    }

    /// <summary>
    /// Get Scores by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/scores/{format}/ScoresBasic/{date}', parameters);
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>BKN</code>.</param>
    getPlayersByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nba/scores/{format}/PlayersBasic/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nba/scores/{format}/SchedulesBasic/{season}', parameters);
    }

    /// <summary>
    /// Get Players Active
    /// </summary>
    getPlayersActivePromise(){
        return this.GetPromise('/v3/nba/scores/{format}/PlayersActiveBasic');
    }

    /// <summary>
    /// Get Players by Free Agent
    /// </summary>
    getPlayersByFreeAgentPromise(){
        return this.GetPromise('/v3/nba/scores/{format}/PlayersByFreeAgents');
    }

    /// <summary>
    /// Get Transactions By Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getTransactionsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nba/scores/{format}/TransactionsByDate/{date}', parameters);
    }

}

module.exports = NBAv3ScoresClient;


"use strict";

const BaseClient = require('../baseClient');

class NHLv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/News');
    }

    /// <summary>
    /// Get News by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/scores/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/scores/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details by Active
    /// </summary>
    getPlayerDetailsByActivePromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details by Free Agent
    /// </summary>
    getPlayerDetailsByFreeAgentPromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000007</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getPlayersByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nhl/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/scores/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/scores/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/scores/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams (Active)
    /// </summary>
    getTeamsActivePromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/teams');
    }

    /// <summary>
    /// Get Teams (All)
    /// </summary>
    getTeamsAllPromise(){
        return this.GetPromise('/v3/nhl/scores/{format}/AllTeams');
    }

}

module.exports = NHLv3ScoresClient;


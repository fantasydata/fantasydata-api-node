"use strict";

const BaseClient = require('../baseClient');

class Soccerv3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Competition (w/ DFS Salaries)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getProjectedPlayerGameStatsByCompetitionPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/projections/{format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date (w/ DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/projections/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player (w/ DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/soccer/projections/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Dfs Slates By Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-02-18</code></param>
    getDfsSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/projections/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Upcoming Dfs Slates By Competition
    /// </summary>
    /// <param name="competitionId">The Competition Id. Examples: <code>3</code></param>
    getUpcomingDfsSlatesByCompetitionPromise(competitionId){
        var parameters = {};
        parameters['competitionId']=competitionId;
        return this.GetPromise('/v3/soccer/projections/{format}/UpcomingDfsSlatesByCompetition/{competitionId}', parameters);
    }

    /// <summary>
    /// Get Injured Players By Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getInjuredPlayersByCompetitionPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v3/soccer/projections/{format}/InjuredPlayers/{competition}', parameters);
    }

}

module.exports = Soccerv3ProjectionsClient;


"use strict";

const BaseClient = require('../baseClient');

class Soccerv4ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Dfs Slates By Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2020-02-18</code></param>
    getDfsSlatesByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/projections/{format}/DfsSlatesByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Injured Players By Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getInjuredPlayersByCompetitionPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/projections/{format}/InjuredPlayers/{competition}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date (w/ DFS Salaries)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/projections/{format}/PlayerGameProjectionStatsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Upcoming Dfs Slates By Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getUpcomingDfsSlatesByCompetitionPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/projections/{format}/UpcomingDfsSlatesByCompetition/{competition}', parameters);
    }

}

module.exports = Soccerv4ProjectionsClient;


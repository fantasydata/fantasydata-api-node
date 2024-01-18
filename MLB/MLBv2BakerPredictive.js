"use strict";

const BaseClient = require('../baseClient');

class MLBv2BakerPredictiveClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get BAKER Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Example: 2023-04-30</param>
    getBAKERProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/baker/v2/mlb/{format}/BakerPlayerGameProjections/{date}', parameters);
    }

    /// <summary>
    /// Get BAKER Projected Player Game Stats by Team (w/ Injuries, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Example: 2023-04-30</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
    getBAKERProjectedPlayerGameStatsByTeamPromise(date, team){
        var parameters = {};
        parameters['date']=date;
        parameters['team']=team;
        return this.GetPromise('/baker/v2/mlb/{format}/BakerPlayerGameProjectionsByTeam/{date}/{team}', parameters);
    }

}

module.exports = MLBv2BakerPredictiveClient;


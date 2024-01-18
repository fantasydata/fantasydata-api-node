"use strict";

const BaseClient = require('../baseClient');

class NBAv2BakerPredictiveClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get BAKER Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Example: 2023-04-04</param>
    getBAKERProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/baker/v2/nba/{format}/BakerPlayerGameProjections/{date}', parameters);
    }

}

module.exports = NBAv2BakerPredictiveClient;


"use strict";

const BaseClient = require('../baseClient');

class CFBv3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Week
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2018REG</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>2</code>, <code>3</code>, etc.</param>
    getProjectedPlayerGameStatsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/projections/{format}/ProjectedPlayerGameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get DFS Slates by Date
    /// </summary>
    /// <param name="date">The date of the slates. Examples: <code>2018-SEP-15</code>, <code>2018-SEP-22</code>, etc.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/projections/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get DFS Slates by Week
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2018REG</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>3</code>, <code>4</code>, etc.</param>
    getDFSSlatesByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/projections/{format}/DfsSlatesByWeek/{season}/{week}', parameters);
    }

}

module.exports = CFBv3ProjectionsClient;


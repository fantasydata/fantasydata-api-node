"use strict";

const BaseClient = require('../baseClient');

class NFLv3ProjectionsDfsrClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get DFSR Projected Fantasy Defense Game Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getDfsrFantasyDefenseProjectionsByGamePromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/projections-dfsr/{format}/DfsrFantasyDefenseProjectionsByGame/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get DFSR Projected Player Game Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getDfsrPlayerGameProjectionStatsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/projections-dfsr/{format}/DfsrPlayerGameProjectionStatsByWeek/{season}/{week}', parameters);
    }

}

module.exports = NFLv3ProjectionsDfsrClient;


"use strict";

const BaseClient = require('../baseClient');

class NFLv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Live Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the scores (games). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getLiveGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/odds/{format}/LiveGameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Live Game Odds Line Movement
    /// </summary>
    /// <param name="scoreid">The ScoreID of an NFL score (game). ScoreIDs can be found in the Scores API. Valid entries are <code>16654</code> or <code>16667</code></param>
    getLiveGameOddsLineMovementPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/odds/{format}/LiveGameOddsLineMovement/{scoreid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the scores (games). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getPreGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/odds/{format}/GameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="scoreid">The ScoreID of an NFL score (game). ScoreIDs can be found in the Scores API. Valid entries are <code>16654</code> or <code>16667</code></param>
    getPreGameOddsLineMovementPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/odds/{format}/GameOddsLineMovement/{scoreid}', parameters);
    }

}

module.exports = NFLv3OddsClient;


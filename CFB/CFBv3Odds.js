"use strict";

const BaseClient = require('../baseClient');

class CFBv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Live Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getLiveGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/odds/{format}/LiveGameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Live Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    getLiveGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getPreGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/odds/{format}/GameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

}

module.exports = CFBv3OddsClient;


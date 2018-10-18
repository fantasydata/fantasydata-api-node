"use strict";

const BaseClient = require('../baseClient');

class MLBv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/odds/{format}/GameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Live Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getLiveGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/odds/{format}/LiveGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Live Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    getLiveGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

}

module.exports = MLBv3OddsClient;


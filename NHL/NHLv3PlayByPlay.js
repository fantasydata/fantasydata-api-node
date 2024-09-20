"use strict";

const BaseClient = require('../baseClient');

class NHLv3PlayByPlayClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Play By Play [Live & Final]
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getPlayByPlayLiveFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nhl/pbp/{format}/PlayByPlay/{gameid}', parameters);
    }

    /// <summary>
    /// Get Play By Play Delta
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.</param>
    /// <param name="minutes">Only returns plays that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getPlayByPlayDeltaPromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nhl/pbp/{format}/PlayByPlayDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Play By Play [Final]
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getPlayByPlayFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nhl/pbp/{format}/PlayByPlayFinal/{gameid}', parameters);
    }

}

module.exports = NHLv3PlayByPlayClient;


"use strict";

const BaseClient = require('../baseClient');

class NBAv3PlayByPlayClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Play By Play
    /// </summary>
    /// <param name="gameid">The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are <code>14620</code>, <code>16905</code>, etc.</param>
    getPlayByPlayPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nba/pbp/{format}/PlayByPlay/{gameid}', parameters);
    }

    /// <summary>
    /// Get Play By Play Delta
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-OCT-31</code>, <code>2017-JAN-15</code>.</param>
    /// <param name="minutes">Only returns plays that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getPlayByPlayDeltaPromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nba/pbp/{format}/PlayByPlayDelta/{date}/{minutes}', parameters);
    }

}

module.exports = NBAv3PlayByPlayClient;


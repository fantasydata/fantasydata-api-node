"use strict";

const BaseClient = require('../baseClient');

class Tennisv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Match Odds by Date
    /// </summary>
    /// <param name="date">The date for which to pull matches. Ex: <code> 2023-01-03 </code></param>
    getMatchOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/tennis/odds/{format}/MatchOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Match Odds by Date and Season
    /// </summary>
    /// <param name="seasonid">The SeasonId for which to filter data. Example: <code>27</code></param>
    /// <param name="date">The date for which to pull matches. Ex: <code> 2023-01-03 </code></param>
    getMatchOddsByDateAndSeasonPromise(seasonid, date){
        var parameters = {};
        parameters['seasonid']=seasonid;
        parameters['date']=date;
        return this.GetPromise('/v3/tennis/odds/{format}/MatchOddsBySeasonAndDate/{seasonid}/{date}', parameters);
    }

    /// <summary>
    /// Get Match Odds Line Movement
    /// </summary>
    /// <param name="matchid">The MatchId for which to pull details. Ex: <code> 2 </code></param>
    getMatchOddsLineMovementPromise(matchid){
        var parameters = {};
        parameters['matchid']=matchid;
        return this.GetPromise('/v3/tennis/odds/{format}/MatchOddsLineMovement/{matchid}', parameters);
    }

    /// <summary>
    /// Get Sportsbooks (Active)
    /// </summary>
    getSportsbooksActivePromise(){
        return this.GetPromise('/v3/tennis/odds/{format}/ActiveSportsbooks');
    }

}

module.exports = Tennisv3OddsClient;


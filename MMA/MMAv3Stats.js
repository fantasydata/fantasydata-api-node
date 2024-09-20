"use strict";

const BaseClient = require('../baseClient');

class MMAv3StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Event
    /// </summary>
    /// <param name="eventid">The unique ID of this event. Examples: <code>51</code>, <code>52</code>, etc.</param>
    getEventPromise(eventid){
        var parameters = {};
        parameters['eventid']=eventid;
        return this.GetPromise('/v3/mma/stats/{format}/Event/{eventid}', parameters);
    }

    /// <summary>
    /// Get Fight [Live & Final]
    /// </summary>
    /// <param name="fightid">The unique ID of this fight. Examples: <code>1100</code>, etc.</param>
    getFightLiveFinalPromise(fightid){
        var parameters = {};
        parameters['fightid']=fightid;
        return this.GetPromise('/v3/mma/stats/{format}/Fight/{fightid}', parameters);
    }

    /// <summary>
    /// Get Fighter
    /// </summary>
    /// <param name="fighterid">Each fighter has a unique ID assigned by FantasyData. Fighter IDs can be determined by pulling player related data. Example: <code>140000098</code></param>
    getFighterPromise(fighterid){
        var parameters = {};
        parameters['fighterid']=fighterid;
        return this.GetPromise('/v3/mma/stats/{format}/Fighter/{fighterid}', parameters);
    }

    /// <summary>
    /// Get Fighter Profiles - All
    /// </summary>
    getFighterProfilesAllPromise(){
        return this.GetPromise('/v3/mma/stats/{format}/Fighters');
    }

    /// <summary>
    /// Get Leagues
    /// </summary>
    getLeaguesPromise(){
        return this.GetPromise('/v3/mma/stats/{format}/Leagues');
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="league">The name of the league. Examples: <code>UFC</code>, etc</param>
    /// <param name="season">Year of the season. Examples: <code>2019</code>, <code>2020</code>, etc.</param>
    getSchedulesPromise(league, season){
        var parameters = {};
        parameters['league']=league;
        parameters['season']=season;
        return this.GetPromise('/v3/mma/stats/{format}/Schedule/{league}/{season}', parameters);
    }

    /// <summary>
    /// Get Fight [Final]
    /// </summary>
    /// <param name="fightid">The unique ID of this fight. Examples: <code>1100</code>, etc.</param>
    getFightFinalPromise(fightid){
        var parameters = {};
        parameters['fightid']=fightid;
        return this.GetPromise('/v3/mma/stats/{format}/FightFinal/{fightid}', parameters);
    }

    /// <summary>
    /// Get Fight (Basic) [Live & Final]
    /// </summary>
    /// <param name="fightid">The unique ID of this fight. Examples: <code>1100</code>, etc.</param>
    getFightBasicLiveFinalPromise(fightid){
        var parameters = {};
        parameters['fightid']=fightid;
        return this.GetPromise('/v3/mma/stats/{format}/FightBasic/{fightid}', parameters);
    }

    /// <summary>
    /// Get Fight (Basic) [Final]
    /// </summary>
    /// <param name="fightid">The unique ID of this fight. Examples: <code>1100</code>, etc.</param>
    getFightBasicFinalPromise(fightid){
        var parameters = {};
        parameters['fightid']=fightid;
        return this.GetPromise('/v3/mma/stats/{format}/FightBasicFinal/{fightid}', parameters);
    }

}

module.exports = MMAv3StatsClient;


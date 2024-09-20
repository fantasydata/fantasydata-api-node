"use strict";

const BaseClient = require('../baseClient');

class NASCARv2Client extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Driver Profiles - by Driver
    /// </summary>
    /// <param name="driverid">Unique FantasyData Driver ID. Example:<code>80000268</code>.</param>
    getDriverProfilesByDriverPromise(driverid){
        var parameters = {};
        parameters['driverid']=driverid;
        return this.GetPromise('/nascar/v2/{format}/driver/{driverid}', parameters);
    }

    /// <summary>
    /// Get Projected Player Race Stats - by Race
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getProjectedPlayerRaceStatsByRacePromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/DriverRaceProjections/{raceid}', parameters);
    }

    /// <summary>
    /// Get Driver Profiles - All
    /// </summary>
    getDriverProfilesAllPromise(){
        return this.GetPromise('/nascar/v2/{format}/drivers');
    }

    /// <summary>
    /// Get Leaderboard [Live & Final]
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getLeaderboardLiveFinalPromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/raceresult/{raceid}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nascar/v2/{format}/races/{season}', parameters);
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/nascar/v2/{format}/series');
    }

    /// <summary>
    /// Get Drivers - by Active
    /// </summary>
    getDriversByActivePromise(){
        return this.GetPromise('/nascar/v2/{format}/driversbyactive');
    }

    /// <summary>
    /// Get Entry List - by Race
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getEntryListByRacePromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/EntryListbyRace/{raceid}', parameters);
    }

    /// <summary>
    /// Get Leaderboard [Final]
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getLeaderboardFinalPromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/raceresultfinal/{raceid}', parameters);
    }

    /// <summary>
    /// Get Tracks
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getTracksPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nascar/v2/{format}/tracks/{season}', parameters);
    }

    /// <summary>
    /// Get Fantasy Points - by Race
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getFantasyPointsByRacePromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/FantasyGameStatsByRace/{raceid}', parameters);
    }

    /// <summary>
    /// Get Leaderboard (Basic)
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getLeaderboardBasicPromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/LeaderboardBasic/{raceid}', parameters);
    }

    /// <summary>
    /// Get Leaderboard (Basic) [Final]
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getLeaderboardBasicFinalPromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/LeaderboardBasicFinal/{raceid}', parameters);
    }

}

module.exports = NASCARv2Client;


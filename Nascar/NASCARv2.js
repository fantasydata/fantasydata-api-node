"use strict";

const BaseClient = require('../baseClient');

class NASCARv2Client extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Driver Details
    /// </summary>
    /// <param name="driverid">Unique FantasyData Driver ID. Example:<code>80000268</code>.</param>
    getDriverPromise(driverid){
        var parameters = {};
        parameters['driverid']=driverid;
        return this.GetPromise('/nascar/v2/{format}/driver/{driverid}', parameters);
    }

    /// <summary>
    /// Get Driver Race Projections (Entry List)
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getDriverRaceProjectionsPromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/DriverRaceProjections/{raceid}', parameters);
    }

    /// <summary>
    /// Get Drivers
    /// </summary>
    getDriversPromise(){
        return this.GetPromise('/nascar/v2/{format}/drivers');
    }

    /// <summary>
    /// Get Race Results
    /// </summary>
    /// <param name="raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getRaceresultPromise(raceid){
        var parameters = {};
        parameters['raceid']=raceid;
        return this.GetPromise('/nascar/v2/{format}/raceresult/{raceid}', parameters);
    }

    /// <summary>
    /// Get Races / Schedule
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>.</param>
    getRacesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/nascar/v2/{format}/races/{season}', parameters);
    }

    /// <summary>
    /// Get Series
    /// </summary>
    getSeriesPromise(){
        return this.GetPromise('/nascar/v2/{format}/series');
    }

}

module.exports = NASCARv2Client;


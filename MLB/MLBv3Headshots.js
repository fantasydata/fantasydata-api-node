"use strict";

const BaseClient = require('../baseClient');

class MLBv3HeadshotsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Headshots
    /// </summary>
    getHeadshotsPromise(){
        return this.GetPromise('/v3/mlb/headshots/{format}/Headshots');
    }

}

module.exports = MLBv3HeadshotsClient;


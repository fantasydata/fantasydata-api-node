"use strict";

const BaseClient = require('../baseClient');

class NBAv3HeadshotsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Headshots
    /// </summary>
    getHeadshotsPromise(){
        return this.GetPromise('/v3/nba/headshots/{format}/Headshots');
    }

}

module.exports = NBAv3HeadshotsClient;


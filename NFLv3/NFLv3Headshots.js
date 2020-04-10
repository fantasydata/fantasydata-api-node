"use strict";

const BaseClient = require('../baseClient');

class NFLv3HeadshotsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Headshots
    /// </summary>
    getHeadshotsPromise(){
        return this.GetPromise('/v3/nfl/headshots/{format}/Headshots');
    }

}

module.exports = NFLv3HeadshotsClient;


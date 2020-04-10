"use strict";

const BaseClient = require('../baseClient');

class NHLv3HeadshotsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Headshots
    /// </summary>
    getHeadshotsPromise(){
        return this.GetPromise('/v3/nhl/headshots/{format}/Headshots');
    }

}

module.exports = NHLv3HeadshotsClient;


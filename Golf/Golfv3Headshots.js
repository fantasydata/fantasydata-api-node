"use strict";

const BaseClient = require('../baseClient');

class Golfv3HeadshotsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Headshots
    /// </summary>
    getHeadshotsPromise(){
        return this.GetPromise('/v3/golf/headshots/{format}/Headshots');
    }

}

module.exports = Golfv3HeadshotsClient;


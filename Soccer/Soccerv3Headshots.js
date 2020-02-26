"use strict";

const BaseClient = require('../baseClient');

class Soccerv3HeadshotsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Headshots
    /// </summary>
    getHeadshotsPromise(){
        return this.GetPromise('/v3/soccer/headshots/{format}/Headshots');
    }

}

module.exports = Soccerv3HeadshotsClient;


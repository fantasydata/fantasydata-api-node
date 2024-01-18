"use strict";

const BaseClient = require('../baseClient');

class Soccerv4HeadshotsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Headshots
    /// </summary>
    getHeadshotsPromise(){
        return this.GetPromise('/v4/soccer/headshots/{format}/Headshots');
    }

}

module.exports = Soccerv4HeadshotsClient;


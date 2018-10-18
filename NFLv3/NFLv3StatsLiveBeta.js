"use strict";

const BaseClient = require('../baseClient');

class NFLv3StatsLiveBetaClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

}

module.exports = NFLv3StatsLiveBetaClient;


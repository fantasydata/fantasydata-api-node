"use strict";

const BaseClient = require('../baseClient');

class NBAv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

}

module.exports = NBAv3OddsClient;


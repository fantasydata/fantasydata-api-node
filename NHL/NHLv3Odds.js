"use strict";

const BaseClient = require('../baseClient');

class NHLv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

}

module.exports = NHLv3OddsClient;


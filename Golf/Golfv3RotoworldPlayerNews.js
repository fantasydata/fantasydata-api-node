"use strict";

const BaseClient = require('../baseClient');

class Golfv3RotoworldPlayerNewsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Rotoworld Player News - by Recent
    /// </summary>
    getRotoworldPlayerNewsByRecentPromise(){
        return this.GetPromise('/v3/golf/rotoworld/{format}/RotoworldPlayerNews');
    }

    /// <summary>
    /// Get Rotoworld Player News - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2022-JUL-31</code>, <code>2022-SEP-01</code>.</param>
    getRotoworldPlayerNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/golf/rotoworld/{format}/RotoworldPlayerNewsByDate/{date}', parameters);
    }

}

module.exports = Golfv3RotoworldPlayerNewsClient;


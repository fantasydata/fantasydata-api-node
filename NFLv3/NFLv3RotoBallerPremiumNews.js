"use strict";

const BaseClient = require('../baseClient');

class NFLv3RotoBallerPremiumNewsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Premium News
    /// </summary>
    getRotoBallerPremiumNewsPromise(){
        return this.GetPromise('/v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNews');
    }

    /// <summary>
    /// Get Premium News by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getRotoBallerPremiumNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Premium News by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code>.</param>
    getRotoBallerPremiumNewsByPlayerIDPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Premium News by Team
    /// </summary>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getRotoBallerPremiumNewsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByTeam/{team}', parameters);
    }

}

module.exports = NFLv3RotoBallerPremiumNewsClient;


"use strict";

const BaseClient = require('../baseClient');

class Soccerv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/odds/{format}/GameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/soccer/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getInGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/odds/{format}/LiveGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    getInGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/soccer/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Date by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPreGameOddsByDateByCompetitionPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/odds/{format}/PreGameOddsByDateByCompetition/{competition}/{date}', parameters);
    }

}

module.exports = Soccerv3OddsClient;


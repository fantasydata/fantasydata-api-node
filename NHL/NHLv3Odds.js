"use strict";

const BaseClient = require('../baseClient');

class NHLv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get In-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getInGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/odds/{format}/LiveGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>13096</code> or <code>13110</code></param>
    getInGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nhl/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/odds/{format}/GameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>13096</code> or <code>13110</code></param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nhl/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Player Props by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getPlayerPropsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/odds/{format}/PlayerPropsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Props by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000378</code></param>
    getPlayerPropsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/odds/{format}/PlayerPropsByPlayerID/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Props by Team
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    getPlayerPropsByTeamPromise(date, team){
        var parameters = {};
        parameters['date']=date;
        parameters['team']=team;
        return this.GetPromise('/v3/nhl/odds/{format}/PlayerPropsByTeam/{date}/{team}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getAlternateMarketPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/odds/{format}/AlternateMarketGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>13096</code> or <code>13110</code></param>
    getAlternateMarketPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nhl/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Betting Trends by Matchup
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    /// <param name="opponent">The abbreviation of the requested opponent. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    getBettingTrendsByMatchupPromise(team, opponent){
        var parameters = {};
        parameters['team']=team;
        parameters['opponent']=opponent;
        return this.GetPromise('/v3/nhl/odds/{format}/MatchupTrends/{team}/{opponent}', parameters);
    }

    /// <summary>
    /// Get Betting Trends by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    getBettingTrendsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nhl/odds/{format}/TeamTrends/{team}', parameters);
    }

}

module.exports = NHLv3OddsClient;


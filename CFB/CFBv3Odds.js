"use strict";

const BaseClient = require('../baseClient');

class CFBv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get In-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getInGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/odds/{format}/LiveGameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    getInGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getPreGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/odds/{format}/GameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Player Props by Player
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example: <code>50002016</code></param>
    getPlayerPropsByPlayerPromise(season, week, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/cfb/odds/{format}/PlayerPropsByPlayerID/{season}/{week}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Props by Team
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>MIA</code>, <code>ND</code>, <code>PITT</code>, etc.</param>
    getPlayerPropsByTeamPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/odds/{format}/PlayerPropsByTeam/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get Player Props by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getPlayerPropsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/odds/{format}/PlayerPropsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getAlternateMarketPreGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    getAlternateMarketPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}', parameters);
    }

}

module.exports = CFBv3OddsClient;


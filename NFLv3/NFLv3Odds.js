"use strict";

const BaseClient = require('../baseClient');

class NFLv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get In-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the scores (games). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getInGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/odds/{format}/LiveGameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="scoreid">The ScoreID of an NFL score (game). ScoreIDs can be found in the Scores API. Valid entries are <code>16654</code> or <code>16667</code></param>
    getInGameOddsLineMovementPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/odds/{format}/LiveGameOddsLineMovement/{scoreid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the scores (games). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getPreGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/odds/{format}/GameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="scoreid">The ScoreID of an NFL score (game). ScoreIDs can be found in the Scores API. Valid entries are <code>16654</code> or <code>16667</code></param>
    getPreGameOddsLineMovementPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/odds/{format}/GameOddsLineMovement/{scoreid}', parameters);
    }

    /// <summary>
    /// Get Player Props by Player
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2018REG</code>, <code>2018PRE</code>, <code>2018POST</code></param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code>, <code>2</code>, etc</param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example: <code>17920</code>, <code>16771</code>, etc.</param>
    getPlayerPropsByPlayerPromise(season, week, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/odds/{format}/PlayerPropsByPlayerID/{season}/{week}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Props by Team
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2018REG</code>, <code>2018PRE</code>, <code>2018POST</code></param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code>, <code>2</code>, etc</param>
    /// <param name="team">Abbreviation of the team. Example: <code>PHI</code>, <code>NE</code>, etc.</param>
    getPlayerPropsByTeamPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/odds/{format}/PlayerPropsByTeam/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get Player Props by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2018REG</code>, <code>2018PRE</code>, <code>2018POST</code></param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code>, <code>2</code>, etc</param>
    getPlayerPropsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/odds/{format}/PlayerPropsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the scores (games). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getAlternateMarketPreGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds Line Movement 
    /// </summary>
    /// <param name="scoreid">The ScoreID of an NFL score (game). ScoreIDs can be found in the Scores API. Valid entries are <code>16654</code> or <code>16667</code></param>
    getAlternateMarketPreGameOddsLineMovementPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/odds/{format}/AlternateMarketGameOddsLineMovement/{scoreid}', parameters);
    }

}

module.exports = NFLv3OddsClient;


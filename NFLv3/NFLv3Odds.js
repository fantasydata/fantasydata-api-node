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

    /// <summary>
    /// Get Betting Trends by Matchup
    /// </summary>
    /// <param name="team">Abbreviation of a team. Example: <code>PHI</code>.</param>
    /// <param name="opponent">Abbreviation of an opponent. Example: <code>NE</code>.</param>
    getBettingTrendsByMatchupPromise(team, opponent){
        var parameters = {};
        parameters['team']=team;
        parameters['opponent']=opponent;
        return this.GetPromise('/v3/nfl/odds/{format}/MatchupTrends/{team}/{opponent}', parameters);
    }

    /// <summary>
    /// Get Betting Trends by Team
    /// </summary>
    /// <param name="team">Abbreviation of a team. Example: <code>PHI</code>.</param>
    getBettingTrendsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/odds/{format}/TeamTrends/{team}', parameters);
    }

    /// <summary>
    /// Get Betting Events by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-09-10</code>, <code>2020-09-13</code>.</param>
    getBettingEventsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingEventsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events by Season
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getBettingEventsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingEvents/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Futures by Season
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2020REG</code>, <code>2020PRE</code>, <code>2020POST</code>, <code>2021</code>, etc.</param>
    getBettingFuturesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingFuturesBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingMarket/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Event
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    getBettingMarketsByEventPromise(eventId){
        var parameters = {};
        parameters['eventId']=eventId;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingMarkets/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Market Type
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team Props, <code>6</code> for Game Props</param>
    getBettingMarketsByMarketTypePromise(eventId, marketTypeID){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['marketTypeID']=marketTypeID;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by ScoreID
    /// </summary>
    /// <param name="scoreid">The ScoreID of the desired game/score for which to pull all betting markets (includes outcomes/bets).</param>
    getBettingMarketsByScoreIDPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingMarketsByScoreID/{scoreid}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-09-10</code>, <code>2020-09-13</code>.</param>
    getBettingPlayerPropsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/odds/{format}/BettingPlayerPropsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/nfl/odds/{format}/BettingMetadata');
    }

}

module.exports = NFLv3OddsClient;


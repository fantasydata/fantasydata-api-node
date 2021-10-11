﻿"use strict";

const BaseClient = require('../baseClient');

class CBBv3OddsClient extends BaseClient {
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
        return this.GetPromise('/v3/cbb/odds/{format}/LiveGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CBB game. GameIDs can be found in the Games API. Valid entries are <code>17775</code> or <code>17776</code></param>
    getInGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cbb/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/odds/{format}/GameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CBB game. GameIDs can be found in the Games API. Valid entries are <code>17775</code> or <code>17776</code></param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cbb/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getAlternateMarketPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/odds/{format}/AlternateMarketGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Alternate Market Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CBB game. GameIDs can be found in the Games API. Valid entries are <code>17775</code> or <code>17776</code></param>
    getAlternateMarketPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cbb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Betting Trends By Matchup
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>OU</code>, <code>UK</code>.</param>
    /// <param name="opponent">The abbreviation of the requested opponent. Examples: <code>OU</code>, <code>UK</code>.</param>
    getBettingTrendsByMatchupPromise(team, opponent){
        var parameters = {};
        parameters['team']=team;
        parameters['opponent']=opponent;
        return this.GetPromise('/v3/cbb/odds/{format}/MatchupTrends/{team}/{opponent}', parameters);
    }

    /// <summary>
    /// Get Betting Trends By Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>OU</code>, <code>UK</code>.</param>
    getBettingTrendsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cbb/odds/{format}/TeamTrends/{team}', parameters);
    }

    /// <summary>
    /// Get Betting Events by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getBettingEventsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingEventsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events by Season
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getBettingEventsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingEvents/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Futures by Season
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getBettingFuturesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingFuturesBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingMarket/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Event
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    getBettingMarketsByEventPromise(eventId){
        var parameters = {};
        parameters['eventId']=eventId;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingMarkets/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by GameID
    /// </summary>
    /// <param name="gameid">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets).</param>
    getBettingMarketsByGameIDPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingMarketsByGameID/{gameid}', parameters);
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
        return this.GetPromise('/v3/cbb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-10-17</code></param>
    getBettingPlayerPropsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingPlayerPropsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/cbb/odds/{format}/BettingMetadata');
    }

    /// <summary>
    /// Get Sportsbooks (Active)
    /// </summary>
    getSportsbooksActivePromise(){
        return this.GetPromise('/v3/cbb/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Splits By BettingMarketId
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull splits. MarketIds are pulled from the Betting Markets endpoints.</param>
    getBettingSplitsByBettingMarketIdPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingSplitsByMarketId/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Splits By GameID
    /// </summary>
    /// <param name="gameId">The ID of the game for which you want to receive splits for. GameIds are pulled from the Schedules and Games by Date endpoints.</param>
    getBettingSplitsByGameIDPromise(gameId){
        var parameters = {};
        parameters['gameId']=gameId;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingSplitsByGameId/{gameId}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props by GameID
    /// </summary>
    /// <param name="gameId">The unique GameID of the game in question.</param>
    getBettingPlayerPropsByGameIDPromise(gameId){
        var parameters = {};
        parameters['gameId']=gameId;
        return this.GetPromise('/v3/cbb/odds/{format}/BettingPlayerPropsByGameID/{gameId}', parameters);
    }

}

module.exports = CBBv3OddsClient;


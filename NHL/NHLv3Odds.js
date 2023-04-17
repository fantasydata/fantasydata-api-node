﻿"use strict";

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
    /// Get Generated Player Props by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getGeneratedPlayerPropsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/odds/{format}/PlayerPropsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Generated Player Props by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>30000378</code></param>
    getGeneratedPlayerPropsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nhl/odds/{format}/PlayerPropsByPlayerID/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Generated Player Props by Team
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    getGeneratedPlayerPropsByTeamPromise(date, team){
        var parameters = {};
        parameters['date']=date;
        parameters['team']=team;
        return this.GetPromise('/v3/nhl/odds/{format}/PlayerPropsByTeam/{date}/{team}', parameters);
    }

    /// <summary>
    /// Get Period Game Odds by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getPeriodGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/odds/{format}/AlternateMarketGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Period Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are <code>13096</code> or <code>13110</code></param>
    getPeriodGameOddsLineMovementPromise(gameid){
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

    /// <summary>
    /// Get Betting Events by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-02-15</code>, <code>2020-02-23</code>.</param>
    getBettingEventsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingEventsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events by Season
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2020</code>, <code>2020PRE</code>, <code>2020POST</code>, <code>2020STAR</code>, <code>2021</code>, etc.</param>
    getBettingEventsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingEvents/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Futures by Season
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc</param>
    getBettingFuturesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingFuturesBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets. Valid entries include: <code>421</code>, <code>1041</code>, etc.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingMarket/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Event
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets). Valid entries include: <code>134</code>, <code>155</code>, etc.</param>
    getBettingMarketsByEventPromise(eventId){
        var parameters = {};
        parameters['eventId']=eventId;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingMarkets/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by GameID
    /// </summary>
    /// <param name="gameID">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets). Valid entries include: <code>14814</code></param>
    getBettingMarketsByGameIDPromise(gameID){
        var parameters = {};
        parameters['gameID']=gameID;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingMarketsByGameID/{gameID}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Market Type
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets). Valid entries include: <code>134</code>, <code>155</code>, etc.</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: <code>1</code> for `Game Lines` <code>2</code> for `Player Props` <code>3</code> for `Team Props` <code>6</code> for `Game Props`</param>
    getBettingMarketsByMarketTypePromise(eventId, marketTypeID){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['marketTypeID']=marketTypeID;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/nhl/odds/{format}/Bettingmetadata');
    }

    /// <summary>
    /// Get Sportsbooks (Active)
    /// </summary>
    getSportsbooksActivePromise(){
        return this.GetPromise('/v3/nhl/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Splits By BettingMarketId
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull splits. MarketIds are pulled from the Betting Markets endpoints.</param>
    getBettingSplitsByBettingMarketIdPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingSplitsByMarketId/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Splits By GameID
    /// </summary>
    /// <param name="gameId">The ID of the game for which you want to receive splits for. GameIds are pulled from the Schedules and Games by Date endpoints.</param>
    getBettingSplitsByGameIDPromise(gameId){
        var parameters = {};
        parameters['gameId']=gameId;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingSplitsByGameId/{gameId}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props by GameID
    /// </summary>
    /// <param name="gameId">The unique GameID of the game in question.</param>
    getBettingPlayerPropsByGameIDPromise(gameId){
        var parameters = {};
        parameters['gameId']=gameId;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingPlayerPropsByGameID/{gameId}', parameters);
    }

    /// <summary>
    /// Get Betting Results By Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingResultsByMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/nhl/odds/{format}/BettingMarketResults/{marketId}', parameters);
    }

}

module.exports = NHLv3OddsClient;


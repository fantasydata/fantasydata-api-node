﻿"use strict";

const BaseClient = require('../baseClient');

class CFBv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get In-Game Odds - by Week
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
    /// Get Pre-Game Odds - by Week
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
    /// Get Period Game Odds - by Week
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    getPeriodGameOddsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Period Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    getPeriodGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Betting Trends - by Matchup
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>MIA</code>, <code>ND</code>, <code>PITT</code>, etc.</param>
    /// <param name="opponent">The abbreviation of the requested opponent. Examples: <code>MIA</code>, <code>ND</code>, <code>PITT</code>, etc.</param>
    getBettingTrendsByMatchupPromise(team, opponent){
        var parameters = {};
        parameters['team']=team;
        parameters['opponent']=opponent;
        return this.GetPromise('/v3/cfb/odds/{format}/MatchupTrends/{team}/{opponent}', parameters);
    }

    /// <summary>
    /// Get Betting Trends - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>MIA</code>, <code>ND</code>, <code>PITT</code>, etc.</param>
    getBettingTrendsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/cfb/odds/{format}/TeamTrends/{team}', parameters);
    }

    /// <summary>
    /// Get Betting Events - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-10-17</code></param>
    getBettingEventsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingEventsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events - by Season
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2021</code>, <code>2022</code>, etc.</param>
    getBettingEventsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingEvents/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Futures - by Season
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getBettingFuturesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingFuturesBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarket/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Event
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByEventPromise(eventId, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarkets/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Game
    /// </summary>
    /// <param name="gameid">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByGamePromise(gameid, include){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Market Type
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team Props, <code>6</code> for Game Props</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByMarketTypePromise(eventId, marketTypeID, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['marketTypeID']=marketTypeID;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMetadata');
    }

    /// <summary>
    /// Get Sportsbooks - by Active
    /// </summary>
    getSportsbooksByActivePromise(){
        return this.GetPromise('/v3/cfb/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Results - by Market
    /// </summary>
    /// <param name="marketId">BettingMarketID of the market for which you would like to see resulted outcomes. Valid example ID <code>17819</code></param>
    getBettingResultsByMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarketResults/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Splits - by Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull splits.</param>
    getBettingSplitsByBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingSplitsByMarketId/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Splits - by Game
    /// </summary>
    /// <param name="gameid">The ID of the game for which you want to receive splits for.Example <code>11778</code></param>
    getBettingSplitsByGamePromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingSplitsByGameId/{gameid}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props - by Game
    /// </summary>
    /// <param name="gameId">The unique GameID of the game in question.</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingPlayerPropsByGamePromise(gameId, include){
        var parameters = {};
        parameters['gameId']=gameId;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingPlayerPropsByGameID/{gameId}', parameters);
    }

    /// <summary>
    /// Get Betting Futures - by Season [Sportsbook Group]
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingFuturesBySeasonSportsbookGroupPromise(season, sportsbookgroup){
        var parameters = {};
        parameters['season']=season;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Market [Sportsbook Group]
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingMarketSportsbookGroupPromise(marketId, sportsbookgroup){
        var parameters = {};
        parameters['marketId']=marketId;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Event [Sportsbook Group]
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByEventSportsbookGroupPromise(eventId, sportsbookgroup, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['sportsbookgroup']=sportsbookgroup;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Game [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByGameSportsbookGroupPromise(gameid, sportsbookgroup, include){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Market Type [Sportsbook Group]
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team Props, <code>6</code> for Game Props</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByMarketTypeSportsbookGroupPromise(eventId, marketTypeID, sportsbookgroup, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['marketTypeID']=marketTypeID;
        parameters['sportsbookgroup']=sportsbookgroup;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props - by Game [Sportsbook Group]
    /// </summary>
    /// <param name="gameId">The unique GameID of the game in question.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingPlayerPropsByGameSportsbookGroupPromise(gameId, sportsbookgroup, include){
        var parameters = {};
        parameters['gameId']=gameId;
        parameters['sportsbookgroup']=sportsbookgroup;
        parameters['include']=include;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Results - by Market [Sportsbook Group]
    /// </summary>
    /// <param name="marketId">BettingMarketID of the market for which you would like to see resulted outcomes. Valid example ID <code>17819</code></param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingResultsByMarketSportsbookGroupPromise(marketId, sportsbookgroup){
        var parameters = {};
        parameters['marketId']=marketId;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds - by Week [Sportsbook Group]
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getInGameOddsByWeekSportsbookGroupPromise(season, week, sportsbookgroup){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/InGameOddsByWeek/{season}/{week}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getInGameOddsLineMovementSportsbookGroupPromise(gameid, sportsbookgroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds - by Week [Sportsbook Group]
    /// </summary>
    /// <param name="season">Year of the season, with optional season type. Examples: <code>2018</code>, <code>2018POST</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getPreGameAndPeriodGameOddsByWeekSportsbookGroupPromise(season, week, sportsbookgroup){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/PreGameOddsByWeek/{season}/{week}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds Line Movement [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getPreGameAndPeriodGameOddsLineMovementSportsbookGroupPromise(gameid, sportsbookgroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement with Resulting [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getInGameOddsLineMovementWithResultingSportsbookGroupPromise(gameid, sportsbookgroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds Line Movement with Resulting [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are <code>8487</code> or <code>8657</code></param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupPromise(gameid, sportsbookgroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v3/cfb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}', parameters);
    }

}

module.exports = CFBv3OddsClient;


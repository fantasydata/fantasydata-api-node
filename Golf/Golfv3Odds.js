﻿"use strict";

const BaseClient = require('../baseClient');

class Golfv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Tournament Odds
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getTournamentOddsPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/v3/golf/odds/{format}/TournamentOdds/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Tournament Odds Line Movement
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getTournamentOddsLineMovementPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/v3/golf/odds/{format}/TournamentOddsLineMovement/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get In-play Tournament Odds
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getInplayTournamentOddsPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/v3/golf/odds/{format}/InPlayTournamentOdds/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get In-play Tournament Odds Line Movement
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getInplayTournamentOddsLineMovementPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/v3/golf/odds/{format}/InPlayTournamentOddsLineMovement/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Sportsbooks (Active)
    /// </summary>
    getSportsbooksActivePromise(){
        return this.GetPromise('/v3/golf/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Events by Date
    /// </summary>
    /// <param name="date">The date of the tournament(s). Can be any of the dates for the span of a tournament (i.e. Thursday through Sunday). Examples: <code>2020-10-17</code></param>
    getBettingEventsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/golf/odds/{format}/BettingEventsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events by Season
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getBettingEventsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/golf/odds/{format}/BettingEvents/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/golf/odds/{format}/BettingMarket/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Event
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByEventPromise(eventId, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['include']=include;
        return this.GetPromise('/v3/golf/odds/{format}/BettingMarkets/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Market Type
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByMarketTypePromise(eventId, marketTypeID, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['marketTypeID']=marketTypeID;
        parameters['include']=include;
        return this.GetPromise('/v3/golf/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by TournamentID
    /// </summary>
    /// <param name="tournamentid">The TournamentID of the desired tournament for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByTournamentIDPromise(tournamentid, include){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        parameters['include']=include;
        return this.GetPromise('/v3/golf/odds/{format}/BettingMarketsByTournamentID/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/golf/odds/{format}/BettingMetadata');
    }

}

module.exports = Golfv3OddsClient;


"use strict";

const BaseClient = require('../baseClient');

class NASCARv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Race Odds
    /// </summary>
    /// <param name="Raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getRaceOddsPromise(Raceid){
        var parameters = {};
        parameters['Raceid']=Raceid;
        return this.GetPromise('/v3/nascar/odds/{format}/RaceOdds/{Raceid}', parameters);
    }

    /// <summary>
    /// Get Race Odds Line Movement
    /// </summary>
    /// <param name="Raceid">Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc.</param>
    getRaceOddsLineMovementPromise(Raceid){
        var parameters = {};
        parameters['Raceid']=Raceid;
        return this.GetPromise('/v3/nascar/odds/{format}/RaceOddsLineMovement/{Raceid}', parameters);
    }

    /// <summary>
    /// Get Sportsbooks - by Active
    /// </summary>
    getSportsbooksByActivePromise(){
        return this.GetPromise('/v3/nascar/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Events - by Date
    /// </summary>
    /// <param name="date">The date of the race(s). Examples: 2023-02-19.</param>
    getBettingEventsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nascar/odds/{format}/BettingEventsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events - by Season
    /// </summary>
    /// <param name="season">The season to get BettingEvents. Valid entries are formatted as years such as <code>2023</code></param>
    getBettingEventsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nascar/odds/{format}/BettingEvents/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/nascar/odds/{format}/BettingMarket/{marketId}', parameters);
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
        return this.GetPromise('/v3/nascar/odds/{format}/BettingMarkets/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Market Type
    /// </summary>
    /// <param name="eventID">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: 1 for Race Lines, 2 for Driver Props, 3 for Head to Head Props, 4 for Group Props, 6 for Race Props</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByMarketTypePromise(eventID, marketTypeID, include){
        var parameters = {};
        parameters['eventID']=eventID;
        parameters['marketTypeID']=marketTypeID;
        parameters['include']=include;
        return this.GetPromise('/v3/nascar/odds/{format}/BettingMarketsByMarketType/{eventID}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Race
    /// </summary>
    /// <param name="raceID">The RaceID of the desired race for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByRacePromise(raceID, include){
        var parameters = {};
        parameters['raceID']=raceID;
        parameters['include']=include;
        return this.GetPromise('/v3/nascar/odds/{format}/BettingMarketsByRaceID/{raceID}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/nascar/odds/{format}/BettingMetaData');
    }

}

module.exports = NASCARv3OddsClient;


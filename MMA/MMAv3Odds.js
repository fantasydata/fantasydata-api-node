"use strict";

const BaseClient = require('../baseClient');

class MMAv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Event Fight Odds
    /// </summary>
    /// <param name="eventid">The unique ID of this event. Examples: <code>51</code>, <code>52</code>, etc.</param>
    getEventFightOddsPromise(eventid){
        var parameters = {};
        parameters['eventid']=eventid;
        return this.GetPromise('/v3/mma/odds/{format}/EventOdds/{eventid}', parameters);
    }

    /// <summary>
    /// Get Event Fight Odds Line Movement
    /// </summary>
    /// <param name="eventid">The unique ID of this event. Examples: <code>51</code>, <code>52</code>, etc.</param>
    getEventFightOddsLineMovementPromise(eventid){
        var parameters = {};
        parameters['eventid']=eventid;
        return this.GetPromise('/v3/mma/odds/{format}/EventOddsLineMovement/{eventid}', parameters);
    }

    /// <summary>
    /// Get Sportsbooks (Active)
    /// </summary>
    getSportsbooksActivePromise(){
        return this.GetPromise('/v3/mma/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Events By Event
    /// </summary>
    /// <param name="eventId">The top level EventId for the event (i.e. UFC 250). Distinct from the BettingEventId.</param>
    getBettingEventsByEventPromise(eventId){
        var parameters = {};
        parameters['eventId']=eventId;
        return this.GetPromise('/v3/mma/odds/{format}/BettingEventsByEvent/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The BettingMarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/mma/odds/{format}/BettingMarket/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets By Betting Event
    /// </summary>
    /// <param name="bettingEventId">The BettingEventId for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByBettingEventPromise(bettingEventId, include){
        var parameters = {};
        parameters['bettingEventId']=bettingEventId;
        parameters['include']=include;
        return this.GetPromise('/v3/mma/odds/{format}/BettingMarketsByBettingEvent/{bettingEventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets by Market Type
    /// </summary>
    /// <param name="eventId">The top level EventId for the event (i.e. UFC 250). Distinct from the BettingEventId.</param>
    /// <param name="marketTypeId">The BettingMarketTypeId of the desired market types to pull. See BettingMetaData endpoint for all of the types.</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByMarketTypePromise(eventId, marketTypeId, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['marketTypeId']=marketTypeId;
        parameters['include']=include;
        return this.GetPromise('/v3/mma/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeId}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/mma/odds/{format}/BettingMetadata');
    }

    /// <summary>
    /// Get Betting Fighter Props By Event
    /// </summary>
    /// <param name="eventId">The top level EventId for the event (i.e. UFC 250). Distinct from the BettingEventId.</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingFighterPropsByEventPromise(eventId, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['include']=include;
        return this.GetPromise('/v3/mma/odds/{format}/BettingFighterPropsByEvent/{eventId}', parameters);
    }

    /// <summary>
    /// Get Upcoming Betting Events
    /// </summary>
    getUpcomingBettingEventsPromise(){
        return this.GetPromise('/v3/mma/odds/{format}/UpcomingBettingEvents');
    }

}

module.exports = MMAv3OddsClient;


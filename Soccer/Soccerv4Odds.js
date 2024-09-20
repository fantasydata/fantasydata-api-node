"use strict";

const BaseClient = require('../baseClient');

class Soccerv4OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Betting Events - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2018-11-20</code>, <code>2018-11-23</code>.</param>
    getBettingEventsByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingEventsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events - by Season
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getBettingEventsBySeasonPromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingEventsBySeason/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Futures - by Season
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getBettingFuturesBySeasonPromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(competition, marketId){
        var parameters = {};
        parameters['competition']=competition;
        parameters['marketId']=marketId;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Event
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    getBettingMarketsByEventPromise(competition, eventId){
        var parameters = {};
        parameters['competition']=competition;
        parameters['eventId']=eventId;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarkets/{competition}/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Game
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets).</param>
    getBettingMarketsByGamePromise(competition, gameid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Market Type
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team Props, <code>6</code> for Game Props</param>
    getBettingMarketsByMarketTypePromise(competition, eventId, marketTypeID){
        var parameters = {};
        parameters['competition']=competition;
        parameters['eventId']=eventId;
        parameters['marketTypeID']=marketTypeID;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMetadata');
    }

    /// <summary>
    /// Get Betting Player Props - by Game
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameId">The unique GameID of the game in question.</param>
    getBettingPlayerPropsByGamePromise(competition, gameId){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameId']=gameId;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getInGameOddsByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/odds/{format}/LiveGameOddsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    getInGameOddsLineMovementPromise(competition, gameid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        return this.GetPromise('/v4/soccer/odds/{format}/LiveGameOddsLineMovement/{competition}/{gameid}', parameters);
    }

    /// <summary>
    /// Get Period Game Odds - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPeriodGameOddsByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/odds/{format}/AlternateMarketGameOddsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Period Game Odds Line Movement
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>41323</code></param>
    getPeriodGameOddsLineMovementPromise(competition, gameid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        return this.GetPromise('/v4/soccer/odds/{format}/AlternateMarketGameOddsLineMovement/{competition}/{gameid}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPreGameOddsByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/odds/{format}/GameOddsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    getPreGameOddsLineMovementPromise(competition, gameid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        return this.GetPromise('/v4/soccer/odds/{format}/GameOddsLineMovement/{competition}/{gameid}', parameters);
    }

    /// <summary>
    /// Get Sportsbooks - by Active
    /// </summary>
    getSportsbooksByActivePromise(){
        return this.GetPromise('/v4/soccer/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Futures - by Season [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingFuturesBySeasonSportsbookGroupPromise(competition, season, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Market [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingMarketSportsbookGroupPromise(competition, marketId, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['marketId']=marketId;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Event [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingMarketsByEventSportsbookGroupPromise(competition, eventId, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['eventId']=eventId;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarketsByEvent/{competition}/{eventId}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Game [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingMarketsByGameSportsbookGroupPromise(competition, gameid, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Market Type [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team Props, <code>6</code> for Game Props</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingMarketsByMarketTypeSportsbookGroupPromise(competition, eventId, marketTypeID, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['eventId']=eventId;
        parameters['marketTypeID']=marketTypeID;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props - by Game [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameId">The unique GameID of the game in question.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getBettingPlayerPropsByGameSportsbookGroupPromise(competition, gameId, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameId']=gameId;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds - by Date [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getInGameOddsByDateSportsbookGroupPromise(competition, date, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/InGameOddsByDate/{competition}/{date}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getInGameOddsLineMovementSportsbookGroupPromise(competition, gameid, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/InGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement with Resulting [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getInGameOddsLineMovementWithResultingSportsbookGroupPromise(competition, gameid, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/InGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds - by Date [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getPreGameAndPeriodGameOddsByDateSportsbookGroupPromise(competition, date, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/PreGameOddsByDate/{competition}/{date}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds Line Movement [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getPreGameAndPeriodGameOddsLineMovementSportsbookGroupPromise(competition, gameid, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/PreGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds Line Movement with Resulting [Sportsbook Group]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>14060</code>, <code>14061</code>, etc.</param>
    /// <param name="sportsbookgroup">The name of the Sportsbook grouping. Examples: <code>G1100</code></param>
    getPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupPromise(competition, gameid, sportsbookgroup){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        parameters['sportsbookgroup']=sportsbookgroup;
        return this.GetPromise('/v4/soccer/odds/{format}/PreGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}', parameters);
    }

}

module.exports = Soccerv4OddsClient;


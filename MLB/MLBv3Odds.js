"use strict";

const BaseClient = require('../baseClient');

class MLBv3OddsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Pre-Game Odds - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/odds/{format}/GameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/odds/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getInGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/odds/{format}/LiveGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    getInGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/odds/{format}/LiveGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Generated Player Props by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getGeneratedPlayerPropsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/odds/{format}/PlayerPropsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Generated Player Props by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>10000507</code></param>
    getGeneratedPlayerPropsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/mlb/odds/{format}/PlayerPropsByPlayerID/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Generated Player Props by Team
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    getGeneratedPlayerPropsByTeamPromise(date, team){
        var parameters = {};
        parameters['date']=date;
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/odds/{format}/PlayerPropsByTeam/{date}/{team}', parameters);
    }

    /// <summary>
    /// Get Period Game Odds - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    getPeriodGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/odds/{format}/AlternateMarketGameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Period Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    getPeriodGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/mlb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Betting Trends - by Matchup
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    /// <param name="opponent">The abbreviation of the requested opponent. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    getBettingTrendsByMatchupPromise(team, opponent){
        var parameters = {};
        parameters['team']=team;
        parameters['opponent']=opponent;
        return this.GetPromise('/v3/mlb/odds/{format}/MatchupTrends/{team}/{opponent}', parameters);
    }

    /// <summary>
    /// Get Betting Trends - by Team
    /// </summary>
    /// <param name="team">The abbreviation of the requested team. Examples: <code>PHI</code>, <code>MIN</code>, <code>DET</code>, etc.</param>
    getBettingTrendsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/mlb/odds/{format}/TeamTrends/{team}', parameters);
    }

    /// <summary>
    /// Get Betting Events - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-08-20</code>, <code>2020-08-23</code>.</param>
    getBettingEventsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingEventsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Betting Events - by Season
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2020</code>, <code>2020PRE</code>, <code>2020POST</code>, <code>2020STAR</code>, <code>2021</code>, etc.</param>
    getBettingEventsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingEvents/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Futures - by Season
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2020</code>, <code>2020PRE</code>, <code>2020POST</code>, <code>2020STAR</code>, <code>2021</code>, etc.</param>
    getBettingFuturesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingFuturesBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    getBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarket/{marketId}', parameters);
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
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarkets/{eventId}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Game
    /// </summary>
    /// <param name="gameID">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByGamePromise(gameID, include){
        var parameters = {};
        parameters['gameID']=gameID;
        parameters['include']=include;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}', parameters);
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
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}', parameters);
    }

    /// <summary>
    /// Get Betting Metadata
    /// </summary>
    getBettingMetadataPromise(){
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMetadata');
    }

    /// <summary>
    /// Get Sportsbooks - by Active
    /// </summary>
    getSportsbooksByActivePromise(){
        return this.GetPromise('/v3/mlb/odds/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Betting Results - by Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets. Valid IDs include <code>837872</code>, <code>841068</code></param>
    getBettingResultsByMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarketResults/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Splits by - Betting Market
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull splits.. Valid IDs include <code>837872</code></param>
    getBettingSplitsByBettingMarketPromise(marketId){
        var parameters = {};
        parameters['marketId']=marketId;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingSplitsByMarketId/{marketId}', parameters);
    }

    /// <summary>
    /// Get Betting Splits - by Game
    /// </summary>
    /// <param name="gameId">The ID of the game for which you want to receive splits for. Example <code>63266</code>.</param>
    getBettingSplitsByGamePromise(gameId){
        var parameters = {};
        parameters['gameId']=gameId;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingSplitsByGameId/{gameId}', parameters);
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
        return this.GetPromise('/v3/mlb/odds/{format}/BettingPlayerPropsByGameID/{gameId}', parameters);
    }

    /// <summary>
    /// Get Betting Futures - by Season [Sportsbook Group]
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2020</code>, <code>2020PRE</code>, <code>2020POST</code>, <code>2020STAR</code>, <code>2021</code>, etc.</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getBettingFuturesBySeasonSportsbookGroupPromise(season, sportsbookGroup){
        var parameters = {};
        parameters['season']=season;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Betting Market - [Sportsbook Group]
    /// </summary>
    /// <param name="marketId">The MarketId of the desired market for which to pull all outcomes/bets.</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getBettingMarketSportsbookGroupPromise(marketId, include, sportsbookGroup){
        var parameters = {};
        parameters['marketId']=marketId;
        parameters['include']=include;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarket/{marketId}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Event [Sportsbook Group]
    /// </summary>
    /// <param name="eventId">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    getBettingMarketsByEventSportsbookGroupPromise(eventId, sportsbookGroup, include){
        var parameters = {};
        parameters['eventId']=eventId;
        parameters['sportsbookGroup']=sportsbookGroup;
        parameters['include']=include;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Game [Sportsbook Group]
    /// </summary>
    /// <param name="gameID">The GameID of the desired game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getBettingMarketsByGameSportsbookGroupPromise(gameID, include, sportsbookGroup){
        var parameters = {};
        parameters['gameID']=gameID;
        parameters['include']=include;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Betting Markets - by Market Type [Sportsbook Group]
    /// </summary>
    /// <param name="eventID">The EventId of the desired event/game for which to pull all betting markets (includes outcomes/bets).</param>
    /// <param name="marketTypeID">The Market Type ID of the desired MarketTypes to pull. Some common types include: <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team Props, <code>6</code> for Game Props</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getBettingMarketsByMarketTypeSportsbookGroupPromise(eventID, marketTypeID, include, sportsbookGroup){
        var parameters = {};
        parameters['eventID']=eventID;
        parameters['marketTypeID']=marketTypeID;
        parameters['include']=include;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarketsByMarketType/{eventID}/{marketTypeID}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Betting Player Props - by Game [Sportsbook Group]
    /// </summary>
    /// <param name="gameId">The unique GameID of the game in question.</param>
    /// <param name="include">This parameter indicates which <code>BettingOutcome</code> records to return in the payload. By default, this endpoint only returns available outcomes, excluding the unlisted bets. <b>Important Note:</b> the default parameter of available is much faster and provides the best performance. Passing unlisted will return unlisted odds, but these are cached for much longer and may be several minutes old. For best performance, the default parameter is highly recommended. Possible values include: <code>available</code> - excludes any betting outcomes that have been removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds much faster than using unlisted. <code>unlisted</code> - includes the most recently available betting outcome per sportsbook, for each listed market, even those outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far heavier payload, and it's cached for much longer than available.</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getBettingPlayerPropsByGameSportsbookGroupPromise(gameId, include, sportsbookGroup){
        var parameters = {};
        parameters['gameId']=gameId;
        parameters['include']=include;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Betting Results - by Market [Sportsbook Group]
    /// </summary>
    /// <param name="marketID">The MarketId of the desired market for which to pull all outcomes/bets. Valid IDs include <code>837872</code>, <code>841068</code></param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getBettingResultsByMarketSportsbookGroupPromise(marketID, sportsbookGroup){
        var parameters = {};
        parameters['marketID']=marketID;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/BettingMarketResults/{marketID}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds - by Date [Sportsbook Group]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getInGameOddsByDateSportsbookGroupPromise(date, sportsbookGroup){
        var parameters = {};
        parameters['date']=date;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/InGameOddsByDate/{date}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getInGameOddsLineMovementSportsbookGroupPromise(gameid, sportsbookGroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/InGameOddsLineMovement/{gameid}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds - by Date [Sportsbook Group]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2018-06-20</code>, <code>2018-06-23</code>.</param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getPreGameAndPeriodGameOddsByDateSportsbookGroupPromise(date, sportsbookGroup){
        var parameters = {};
        parameters['date']=date;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/PreGameOddsByDate/{date}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds Line Movement [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getPreGameAndPeriodGameOddsLineMovementSportsbookGroupPromise(gameid, sportsbookGroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get In-Game Odds Line Movement with Resulting [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getInGameOddsLineMovementWithResultingSportsbookGroupPromise(gameid, sportsbookGroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/InGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}', parameters);
    }

    /// <summary>
    /// Get Pre-Game and Period Game Odds Line Movement with Resulting [Sportsbook Group]
    /// </summary>
    /// <param name="gameid">The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are <code>51735</code> or <code>51745</code></param>
    /// <param name="sportsbookGroup">The name of the sportsbook group that will filter outcomes.</param>
    getPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupPromise(gameid, sportsbookGroup){
        var parameters = {};
        parameters['gameid']=gameid;
        parameters['sportsbookGroup']=sportsbookGroup;
        return this.GetPromise('/v3/mlb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}', parameters);
    }

}

module.exports = MLBv3OddsClient;


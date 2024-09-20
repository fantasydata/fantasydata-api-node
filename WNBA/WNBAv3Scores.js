"use strict";

const BaseClient = require('../baseClient');

class WNBAv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Season - Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2019-MAY-16</code>, <code>2019-MAY-25</code>, etc.</param>
    getGamesByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/wnba/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="Season">Year of the season (with optional season type). Examples: <code>2019</code>, <code>2019PRE</code>, <code>2019POST</code>, <code>2019REG</code>, etc.</param>
    getSchedulesPromise(Season){
        var parameters = {};
        parameters['Season']=Season;
        return this.GetPromise('/v3/wnba/scores/{format}/Games/{Season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/Teams');
    }

    /// <summary>
    /// Get Pre-Game Odds - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2019-MAY-16</code>, <code>2019-MAY-25</code>, etc.</param>
    getPreGameOddsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/wnba/scores/{format}/GameOddsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Pre-Game Odds Line Movement
    /// </summary>
    /// <param name="gameid">The unique GameID of the game for which to pull data.</param>
    getPreGameOddsLineMovementPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/wnba/scores/{format}/GameOddsLineMovement/{gameid}', parameters);
    }

    /// <summary>
    /// Get Sportsbooks - by Active
    /// </summary>
    getSportsbooksByActivePromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/ActiveSportsbooks');
    }

    /// <summary>
    /// Get Games - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2019-MAY-16</code>, <code>2019-MAY-25</code>, etc.</param>
    getGamesByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/wnba/scores/{format}/GamesByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Schedules (Basic)
    /// </summary>
    /// <param name="Season">Year of the season (with optional season type). Examples: <code>2019</code>, <code>2019PRE</code>, <code>2019POST</code>, <code>2019REG</code>, etc.</param>
    getSchedulesBasicPromise(Season){
        var parameters = {};
        parameters['Season']=Season;
        return this.GetPromise('/v3/wnba/scores/{format}/SchedulesBasic/{Season}', parameters);
    }

}

module.exports = WNBAv3ScoresClient;


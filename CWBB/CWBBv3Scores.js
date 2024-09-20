"use strict";

const BaseClient = require('../baseClient');

class CWBBv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Any Games In Progress
    /// </summary>
    getAreAnyGamesInProgressPromise(){
        return this.GetPromise('/v3/cwbb/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/cwbb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-FEB-27</code>, <code>2019-DEC-01</code>.</param>
    getGamesByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cwbb/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get League Hierarchy
    /// </summary>
    getLeagueHierarchyPromise(){
        return this.GetPromise('/v3/cwbb/scores/{format}/LeagueHierarchy');
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2020</code>, <code>2020PRE</code>, <code>2020POST</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cwbb/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/cwbb/scores/{format}/Teams');
    }

    /// <summary>
    /// Get Games - by Date [Final]
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2020-FEB-27</code>, <code>2019-DEC-01</code>.</param>
    getGamesByDateFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cwbb/scores/{format}/GamesByDateFinal/{date}', parameters);
    }

    /// <summary>
    /// Get Schedules (Basic)
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2020</code>, <code>2020PRE</code>, <code>2020POST</code>, <code>2019</code>, etc.</param>
    getSchedulesBasicPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cwbb/scores/{format}/SchedulesBasic/{season}', parameters);
    }

}

module.exports = CWBBv3ScoresClient;


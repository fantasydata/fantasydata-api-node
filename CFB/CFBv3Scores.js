"use strict";

const BaseClient = require('../baseClient');

class CFBv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Conference Hierarchy (with Teams)
    /// </summary>
    getConferenceHierarchyPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/LeagueHierarchy');
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Current Week
    /// </summary>
    getCurrentWeekPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/CurrentWeek');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Games by Week
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getGamesByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/GamesByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/scores/{format}/Games/{season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Team Game Stats by Week
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2015</code>, <code>2016</code>, etc.</param>
    /// <param name="week">The week of the game(s). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.</param>
    getTeamGameStatsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/cfb/scores/{format}/TeamGameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats & Standings
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.</param>
    getTeamSeasonStatsStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/cfb/scores/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/v3/cfb/scores/{format}/Teams');
    }

}

module.exports = CFBv3ScoresClient;


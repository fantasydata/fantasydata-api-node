﻿"use strict";

const BaseClient = require('../baseClient');

class Soccerv4StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Areas (Countries)
    /// </summary>
    getAreasCountriesPromise(){
        return this.GetPromise('/v4/soccer/stats/{format}/Areas');
    }

    /// <summary>
    /// Get Box Score [Live & Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>702</code>, <code>1274</code>, etc.</param>
    getBoxScoreLiveFinalPromise(competition, gameid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScore/{competition}/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Live & Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getBoxScoresByDateLiveFinalPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScoresByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresDeltaByDatePromise(competition, date, minutes){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScoresDeltaByDate/{competition}/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Games - by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getGamesByCompetitionPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/stats/{format}/CompetitionDetails/{competition}', parameters);
    }

    /// <summary>
    /// Get Competitions (Leagues)
    /// </summary>
    getCompetitionsLeaguesPromise(){
        return this.GetPromise('/v4/soccer/stats/{format}/Competitions');
    }

    /// <summary>
    /// Get DFS Slates - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2020-02-18</code></param>
    getDFSSlatesByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/DfsSlatesByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getGamesByDateLiveFinalPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/GamesByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Memberships - by Active
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getMembershipsByActivePromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/stats/{format}/ActiveMemberships/{competition}', parameters);
    }

    /// <summary>
    /// Get Memberships - by Recently Changed
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="days">The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code></param>
    getMembershipsByRecentlyChangedPromise(competition, days){
        var parameters = {};
        parameters['competition']=competition;
        parameters['days']=days;
        return this.GetPromise('/v4/soccer/stats/{format}/RecentlyChangedMemberships/{competition}/{days}', parameters);
    }

    /// <summary>
    /// Get Memberships Historical - By Team
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsHistoricalByTeamPromise(competition, teamid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['teamid']=teamid;
        return this.GetPromise('/v4/soccer/stats/{format}/HistoricalMembershipsByTeam/{competition}/{teamid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPlayerGameStatsByDateLiveFinalPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/PlayerGameStatsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getPlayerSeasonStatsPromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/stats/{format}/PlayerSeasonStats/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Team
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getPlayerDetailsByTeamPromise(competition, teamid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['teamid']=teamid;
        return this.GetPromise('/v4/soccer/stats/{format}/PlayersByTeam/{competition}/{teamid}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getSchedulesPromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/stats/{format}/Schedule/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Team Profiles - by Season
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="seasonid">Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getTeamProfilesBySeasonPromise(competition, seasonid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['seasonid']=seasonid;
        return this.GetPromise('/v4/soccer/stats/{format}/SeasonTeams/{competition}/{seasonid}', parameters);
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getStandingsPromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/stats/{format}/Standings/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Live & Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getTeamGameStatsByDateLiveFinalPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/TeamGameStatsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getTeamSeasonStatsPromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/stats/{format}/TeamSeasonStats/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Team Profiles - by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getTeamProfilesByCompetitionPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/stats/{format}/Teams/{competition}', parameters);
    }

    /// <summary>
    /// Get Upcoming DFS Slates - by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getUpcomingDFSSlatesByCompetitionPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/stats/{format}/UpcomingDfsSlatesByCompetition/{competition}', parameters);
    }

    /// <summary>
    /// Get Venues
    /// </summary>
    getVenuesPromise(){
        return this.GetPromise('/v4/soccer/stats/{format}/Venues');
    }

    /// <summary>
    /// Get Box Score [Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>702</code>, <code>1274</code>, etc.</param>
    getBoxScoreFinalPromise(competition, gameid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScoreFinal/{competition}/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Date [Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getBoxScoresByDateFinalPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScoresFinal/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Lineups - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getLineupsByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/LineupsByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Date [Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPlayerGameStatsByDateFinalPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/PlayerGameStatsByDateFinal/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Date [Final]
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getTeamGameStatsByDateFinalPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/TeamGameStatsByDateFinal/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Fantasy Points - by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getFantasyPointsByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/FantasyGameStatsByDate/{competition}/{date}', parameters);
    }

}

module.exports = Soccerv4StatsClient;


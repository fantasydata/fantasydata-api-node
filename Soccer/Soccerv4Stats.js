"use strict";

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
    /// Get Box Score
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>702</code>, <code>1274</code>, etc.</param>
    getBoxScorePromise(competition, gameid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['gameid']=gameid;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScore/{competition}/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getBoxScoresByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScoresByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date Delta
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresByDateDeltaPromise(competition, date, minutes){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v4/soccer/stats/{format}/BoxScoresDeltaByDate/{competition}/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Competition Fixtures (League Details)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getCompetitionFixturesLeagueDetailsPromise(competition){
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
    /// Get Dfs Slates By Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2020-02-18</code></param>
    getDfsSlatesByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/DfsSlatesByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getGamesByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/stats/{format}/GamesByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Memberships (Active)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getMembershipsActivePromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/stats/{format}/ActiveMemberships/{competition}', parameters);
    }

    /// <summary>
    /// Get Memberships (Recently Changed)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="days">The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code></param>
    getMembershipsRecentlyChangedPromise(competition, days){
        var parameters = {};
        parameters['competition']=competition;
        parameters['days']=days;
        return this.GetPromise('/v4/soccer/stats/{format}/RecentlyChangedMemberships/{competition}/{days}', parameters);
    }

    /// <summary>
    /// Get Memberships by Team (Historical)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsByTeamHistoricalPromise(competition, teamid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['teamid']=teamid;
        return this.GetPromise('/v4/soccer/stats/{format}/HistoricalMembershipsByTeam/{competition}/{teamid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPlayerGameStatsByDatePromise(competition, date){
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
    /// Get Players by Team
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getPlayersByTeamPromise(competition, teamid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['teamid']=teamid;
        return this.GetPromise('/v4/soccer/stats/{format}/PlayersByTeam/{competition}/{teamid}', parameters);
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getSchedulePromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/stats/{format}/Schedule/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Season Teams
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="seasonid">Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getSeasonTeamsPromise(competition, seasonid){
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
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getTeamGameStatsByDatePromise(competition, date){
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
    /// Get Teams
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getTeamsPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/stats/{format}/Teams/{competition}', parameters);
    }

    /// <summary>
    /// Get Upcoming Dfs Slates By Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getUpcomingDfsSlatesByCompetitionPromise(competition){
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

}

module.exports = Soccerv4StatsClient;


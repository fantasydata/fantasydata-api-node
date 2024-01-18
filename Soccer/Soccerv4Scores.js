"use strict";

const BaseClient = require('../baseClient');

class Soccerv4ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Areas (Countries)
    /// </summary>
    getAreasCountriesPromise(){
        return this.GetPromise('/v4/soccer/scores/{format}/Areas');
    }

    /// <summary>
    /// Get Canceled Memberships
    /// </summary>
    getCanceledMembershipsPromise(){
        return this.GetPromise('/v4/soccer/scores/{format}/CanceledMemberships');
    }

    /// <summary>
    /// Get Competition Fixtures (League Details)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getCompetitionFixturesLeagueDetailsPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/scores/{format}/CompetitionDetails/{competition}', parameters);
    }

    /// <summary>
    /// Get Competitions (Leagues)
    /// </summary>
    getCompetitionsLeaguesPromise(){
        return this.GetPromise('/v4/soccer/scores/{format}/Competitions');
    }

    /// <summary>
    /// Get Games by Date - Legacy
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getGamesByDateLegacyPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/scores/{format}/GamesByDate/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Memberships (Active)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getMembershipsActivePromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/scores/{format}/ActiveMemberships/{competition}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/RecentlyChangedMemberships/{competition}/{days}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/HistoricalMembershipsByTeam/{competition}/{teamid}', parameters);
    }

    /// <summary>
    /// Get Players by Team - Legacy
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getPlayersByTeamLegacyPromise(competition, teamid){
        var parameters = {};
        parameters['competition']=competition;
        parameters['teamid']=teamid;
        return this.GetPromise('/v4/soccer/scores/{format}/PlayersByTeam/{competition}/{teamid}', parameters);
    }

    /// <summary>
    /// Get Schedule - Legacy
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="season">Year of the season Examples: <code>2020</code>, <code>2021</code>, etc.</param>
    getScheduleLegacyPromise(competition, season){
        var parameters = {};
        parameters['competition']=competition;
        parameters['season']=season;
        return this.GetPromise('/v4/soccer/scores/{format}/Schedule/{competition}/{season}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/SeasonTeams/{competition}/{seasonid}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/Standings/{competition}/{season}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/TeamGameStatsByDate/{competition}/{date}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/TeamSeasonStats/{competition}/{season}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getTeamsPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v4/soccer/scores/{format}/Teams/{competition}', parameters);
    }

    /// <summary>
    /// Get Venues
    /// </summary>
    getVenuesPromise(){
        return this.GetPromise('/v4/soccer/scores/{format}/Venues');
    }

    /// <summary>
    /// Get Scores by Date
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getScoresByDatePromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v4/soccer/scores/{format}/ScoresBasic/{competition}/{date}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/PlayersByTeamBasic/{competition}/{teamid}', parameters);
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
        return this.GetPromise('/v4/soccer/scores/{format}/SchedulesBasic/{competition}/{season}', parameters);
    }

}

module.exports = Soccerv4ScoresClient;


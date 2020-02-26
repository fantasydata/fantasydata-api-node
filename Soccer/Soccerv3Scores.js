"use strict";

const BaseClient = require('../baseClient');

class Soccerv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Areas (Countries)
    /// </summary>
    getAreasCountriesPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/Areas');
    }

    /// <summary>
    /// Get Competition Fixtures (League Details)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getCompetitionFixturesLeagueDetailsPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v3/soccer/scores/{format}/CompetitionDetails/{competition}', parameters);
    }

    /// <summary>
    /// Get Competition Hierarchy (League Hierarchy)
    /// </summary>
    getCompetitionHierarchyLeagueHierarchyPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/CompetitionHierarchy');
    }

    /// <summary>
    /// Get Competitions (Leagues)
    /// </summary>
    getCompetitionsLeaguesPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/Competitions');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Memberships (Active)
    /// </summary>
    getMembershipsActivePromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/ActiveMemberships');
    }

    /// <summary>
    /// Get Memberships (Historical)
    /// </summary>
    getMembershipsHistoricalPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/HistoricalMemberships');
    }

    /// <summary>
    /// Get Memberships by Team (Active)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsByTeamActivePromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/soccer/scores/{format}/MembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Memberships by Team (Historical)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsByTeamHistoricalPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/soccer/scores/{format}/HistoricalMembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/soccer/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Players
    /// </summary>
    getPlayersPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/Players');
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getPlayersByTeamPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/soccer/scores/{format}/PlayersByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getSchedulePromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/soccer/scores/{format}/Schedule/{roundid}', parameters);
    }

    /// <summary>
    /// Get Season Teams
    /// </summary>
    /// <param name="seasonid">Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getSeasonTeamsPromise(seasonid){
        var parameters = {};
        parameters['seasonid']=seasonid;
        return this.GetPromise('/v3/soccer/scores/{format}/SeasonTeams/{seasonid}', parameters);
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getStandingsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/soccer/scores/{format}/Standings/{roundid}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/scores/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getTeamSeasonStatsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/soccer/scores/{format}/TeamSeasonStats/{roundid}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/Teams');
    }

    /// <summary>
    /// Get Venues
    /// </summary>
    getVenuesPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/Venues');
    }

    /// <summary>
    /// Get Upcoming Schedule By Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getUpcomingScheduleByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/soccer/scores/{format}/UpcomingScheduleByPlayer/{playerid}', parameters);
    }

    /// <summary>
    /// Get Memberships (Recently Changed)
    /// </summary>
    /// <param name="days">The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code></param>
    getMembershipsRecentlyChangedPromise(days){
        var parameters = {};
        parameters['days']=days;
        return this.GetPromise('/v3/soccer/scores/{format}/RecentlyChangedMemberships/{days}', parameters);
    }

    /// <summary>
    /// Get Memberships by Competition (Active)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getMembershipsByCompetitionActivePromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v3/soccer/scores/{format}/MembershipsByCompetition/{competition}', parameters);
    }

    /// <summary>
    /// Get Memberships by Competition (Historical)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getMembershipsByCompetitionHistoricalPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v3/soccer/scores/{format}/HistoricalMembershipsByCompetition/{competition}', parameters);
    }

    /// <summary>
    /// Get Canceled Memberships
    /// </summary>
    getCanceledMembershipsPromise(){
        return this.GetPromise('/v3/soccer/scores/{format}/CanceledMemberships');
    }

}

module.exports = Soccerv3ScoresClient;


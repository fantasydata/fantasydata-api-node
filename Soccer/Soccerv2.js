"use strict";

const BaseClient = require('../baseClient');

class Soccerv2Client extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Areas (Countries)
    /// </summary>
    getAreasCountriesPromise(){
        return this.GetPromise('/soccer/v2/{format}/Areas');
    }

    /// <summary>
    /// Get Box Score
    /// </summary>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>702</code>, <code>1274</code>, etc.</param>
    getBoxScorePromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/soccer/v2/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    getBoxScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/soccer/v2/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    getBoxScoresByDateByCompetitionPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/soccer/v2/{format}/BoxScoresByCompetition/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date Delta
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresByDateDeltaPromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/soccer/v2/{format}/BoxScoresDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta by Date by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresDeltaByDateByCompetitionPromise(competition, date, minutes){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/soccer/v2/{format}/BoxScoresDeltaByCompetition/{competition}/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Competition Fixtures (League Details)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getCompetitionFixturesLeagueDetailsPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/soccer/v2/{format}/CompetitionDetails/{competition}', parameters);
    }

    /// <summary>
    /// Get Competition Hierarchy (League Hierarchy)
    /// </summary>
    getCompetitionHierarchyLeagueHierarchyPromise(){
        return this.GetPromise('/soccer/v2/{format}/CompetitionHierarchy');
    }

    /// <summary>
    /// Get Competitions (Leagues)
    /// </summary>
    getCompetitionsLeaguesPromise(){
        return this.GetPromise('/soccer/v2/{format}/Competitions');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/soccer/v2/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Memberships (Active)
    /// </summary>
    getMembershipsActivePromise(){
        return this.GetPromise('/soccer/v2/{format}/ActiveMemberships');
    }

    /// <summary>
    /// Get Memberships (Historical)
    /// </summary>
    getMembershipsHistoricalPromise(){
        return this.GetPromise('/soccer/v2/{format}/HistoricalMemberships');
    }

    /// <summary>
    /// Get Memberships by Team (Active)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsByTeamActivePromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/soccer/v2/{format}/MembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Memberships by Team (Historical)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsByTeamHistoricalPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/soccer/v2/{format}/HistoricalMembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/soccer/v2/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    getPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/soccer/v2/{format}/PlayerGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/soccer/v2/{format}/PlayerGameStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getPlayerSeasonStatsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/soccer/v2/{format}/PlayerSeasonStats/{roundid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats by Player
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getPlayerSeasonStatsByPlayerPromise(roundid, playerid){
        var parameters = {};
        parameters['roundid']=roundid;
        parameters['playerid']=playerid;
        return this.GetPromise('/soccer/v2/{format}/PlayerSeasonStatsByPlayer/{roundid}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats by Team
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    /// <param name="team">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getPlayerSeasonStatsByTeamPromise(roundid, team){
        var parameters = {};
        parameters['roundid']=roundid;
        parameters['team']=team;
        return this.GetPromise('/soccer/v2/{format}/PlayerSeasonStatsByTeam/{roundid}/{team}', parameters);
    }

    /// <summary>
    /// Get Players
    /// </summary>
    getPlayersPromise(){
        return this.GetPromise('/soccer/v2/{format}/Players');
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getPlayersByTeamPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/soccer/v2/{format}/PlayersByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Competition (w/ DFS Salaries)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    getProjectedPlayerGameStatsByCompetitionPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/soccer/v2/{format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Date (w/ DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    getProjectedPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/soccer/v2/{format}/PlayerGameProjectionStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player (w/ DFS Salaries)
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/soccer/v2/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getSchedulePromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/soccer/v2/{format}/Schedule/{roundid}', parameters);
    }

    /// <summary>
    /// Get Season Teams
    /// </summary>
    /// <param name="seasonid">Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getSeasonTeamsPromise(seasonid){
        var parameters = {};
        parameters['seasonid']=seasonid;
        return this.GetPromise('/soccer/v2/{format}/SeasonTeams/{seasonid}', parameters);
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getStandingsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/soccer/v2/{format}/Standings/{roundid}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2016-02-27</code>, <code>2016-09-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/soccer/v2/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getTeamSeasonStatsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/soccer/v2/{format}/TeamSeasonStats/{roundid}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/soccer/v2/{format}/Teams');
    }

    /// <summary>
    /// Get Venues
    /// </summary>
    getVenuesPromise(){
        return this.GetPromise('/soccer/v2/{format}/Venues');
    }

}

module.exports = Soccerv2Client;


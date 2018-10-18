"use strict";

const BaseClient = require('../baseClient');

class Soccerv3StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Areas (Countries)
    /// </summary>
    getAreasCountriesPromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/Areas');
    }

    /// <summary>
    /// Get Box Score
    /// </summary>
    /// <param name="gameid">The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are <code>702</code>, <code>1274</code>, etc.</param>
    getBoxScorePromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/soccer/stats/{format}/BoxScore/{gameid}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getBoxScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/stats/{format}/BoxScores/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getBoxScoresByDateByCompetitionPromise(competition, date){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/stats/{format}/BoxScoresByCompetition/{competition}/{date}', parameters);
    }

    /// <summary>
    /// Get Box Scores by Date Delta
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresByDateDeltaPromise(date, minutes){
        var parameters = {};
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/soccer/stats/{format}/BoxScoresDelta/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta by Date by Competition
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.</param>
    getBoxScoresDeltaByDateByCompetitionPromise(competition, date, minutes){
        var parameters = {};
        parameters['competition']=competition;
        parameters['date']=date;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/soccer/stats/{format}/BoxScoresDeltaByCompetition/{competition}/{date}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Competition Fixtures (League Details)
    /// </summary>
    /// <param name="competition">An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.</param>
    getCompetitionFixturesLeagueDetailsPromise(competition){
        var parameters = {};
        parameters['competition']=competition;
        return this.GetPromise('/v3/soccer/stats/{format}/CompetitionDetails/{competition}', parameters);
    }

    /// <summary>
    /// Get Competition Hierarchy (League Hierarchy)
    /// </summary>
    getCompetitionHierarchyLeagueHierarchyPromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/CompetitionHierarchy');
    }

    /// <summary>
    /// Get Competitions (Leagues)
    /// </summary>
    getCompetitionsLeaguesPromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/Competitions');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/stats/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Memberships (Active)
    /// </summary>
    getMembershipsActivePromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/ActiveMemberships');
    }

    /// <summary>
    /// Get Memberships (Historical)
    /// </summary>
    getMembershipsHistoricalPromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/HistoricalMemberships');
    }

    /// <summary>
    /// Get Memberships by Team (Active)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsByTeamActivePromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/soccer/stats/{format}/MembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Memberships by Team (Historical)
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getMembershipsByTeamHistoricalPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/soccer/stats/{format}/HistoricalMembershipsByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/soccer/stats/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getPlayerGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/stats/{format}/PlayerGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Player
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getPlayerGameStatsByPlayerPromise(date, playerid){
        var parameters = {};
        parameters['date']=date;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/soccer/stats/{format}/PlayerGameStatsByPlayer/{date}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getPlayerSeasonStatsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/soccer/stats/{format}/PlayerSeasonStats/{roundid}', parameters);
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
        return this.GetPromise('/v3/soccer/stats/{format}/PlayerSeasonStatsByPlayer/{roundid}/{playerid}', parameters);
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
        return this.GetPromise('/v3/soccer/stats/{format}/PlayerSeasonStatsByTeam/{roundid}/{team}', parameters);
    }

    /// <summary>
    /// Get Players
    /// </summary>
    getPlayersPromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/Players');
    }

    /// <summary>
    /// Get Players by Team
    /// </summary>
    /// <param name="teamid">Unique FantasyData Team ID. Example:<code>516</code>.</param>
    getPlayersByTeamPromise(teamid){
        var parameters = {};
        parameters['teamid']=teamid;
        return this.GetPromise('/v3/soccer/stats/{format}/PlayersByTeam/{teamid}', parameters);
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getSchedulePromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/soccer/stats/{format}/Schedule/{roundid}', parameters);
    }

    /// <summary>
    /// Get Season Teams
    /// </summary>
    /// <param name="seasonid">Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getSeasonTeamsPromise(seasonid){
        var parameters = {};
        parameters['seasonid']=seasonid;
        return this.GetPromise('/v3/soccer/stats/{format}/SeasonTeams/{seasonid}', parameters);
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getStandingsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/soccer/stats/{format}/Standings/{roundid}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.</param>
    getTeamGameStatsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/soccer/stats/{format}/TeamGameStatsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="roundid">Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc</param>
    getTeamSeasonStatsPromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/soccer/stats/{format}/TeamSeasonStats/{roundid}', parameters);
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/Teams');
    }

    /// <summary>
    /// Get Venues
    /// </summary>
    getVenuesPromise(){
        return this.GetPromise('/v3/soccer/stats/{format}/Venues');
    }

    /// <summary>
    /// Get Upcoming Schedule By Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>90026231</code>.</param>
    getUpcomingScheduleByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/soccer/stats/{format}/UpcomingScheduleByPlayer/{playerid}', parameters);
    }

}

module.exports = Soccerv3StatsClient;


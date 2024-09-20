"use strict";

const BaseClient = require('../baseClient');

class Golfv2Client extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Player Details - by Injured
    /// </summary>
    getPlayerDetailsByInjuredPromise(){
        return this.GetPromise('/golf/v2/{format}/Injuries');
    }

    /// <summary>
    /// Get Injuries (Historical)
    /// </summary>
    getInjuriesHistoricalPromise(){
        return this.GetPromise('/golf/v2/{format}/InjuriesByHistorical');
    }

    /// <summary>
    /// Get Leaderboard [Live & Final]
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getLeaderboardLiveFinalPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/Leaderboard/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/golf/v2/{format}/News');
    }

    /// <summary>
    /// Get News - by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/golf/v2/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News - by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>40000019</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/golf/v2/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>40000019</code>.</param>
    getPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/golf/v2/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Rankings
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getRankingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/golf/v2/{format}/Rankings/{season}', parameters);
    }

    /// <summary>
    /// Get Player Projected Stats - by Tournament
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.</param>
    getPlayerProjectedStatsByTournamentPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/PlayerTournamentProjectionStats/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Player Tournament Stats - by Player
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>40000019</code>.</param>
    getPlayerTournamentStatsByPlayerPromise(tournamentid, playerid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        parameters['playerid']=playerid;
        return this.GetPromise('/golf/v2/{format}/PlayerTournamentStatsByPlayer/{tournamentid}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Profiles - All
    /// </summary>
    getPlayerProfilesAllPromise(){
        return this.GetPromise('/golf/v2/{format}/Players');
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    getSchedulesPromise(){
        return this.GetPromise('/golf/v2/{format}/Tournaments');
    }

    /// <summary>
    /// Get DFS Slates - by Tournament
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getDFSSlatesByTournamentPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/DfsSlatesByTournament/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Schedule - by Season
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getScheduleBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/golf/v2/{format}/Tournaments/{season}', parameters);
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/golf/v2/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Courses
    /// </summary>
    getCoursesPromise(){
        return this.GetPromise('/golf/v2/{format}/Courses');
    }

    /// <summary>
    /// Get Leaderboard (Basic)
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getLeaderboardBasicPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/LeaderboardBasic/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Leaderboard (Basic) [Final]
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getLeaderboardBasicFinalPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/LeaderboardBasicFinal/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Leaderboard [Final]
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getLeaderboardFinalPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/LeaderboardFinal/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Fantasy Points - by Tournament
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.</param>
    getFantasyPointsByTournamentPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/FantasyGameStatsByTournament/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Player Hole Scores - by Tournament [Live & Final]
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getPlayerHoleScoresByTournamentLiveFinalPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/PlayerTournamentHoleScores/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Player Hole Scores - by Tournament [Final]
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getPlayerHoleScoresByTournamentFinalPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/PlayerTournamentHoleScoresFinal/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Scores - by Tournament [Live & Final]
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getScoresByTournamentLiveFinalPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/PlayerTournamentRoundScores/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Scores - by Tournament [Final]
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getScoresByTournamentFinalPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/PlayerTournamentRoundScoresFinal/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/golf/v2/{format}/PlayerSeasonStats/{season}', parameters);
    }

}

module.exports = Golfv2Client;


"use strict";

const BaseClient = require('../baseClient');

class Golfv2Client extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Injuries
    /// </summary>
    getInjuriesPromise(){
        return this.GetPromise('/golf/v2/{format}/Injuries');
    }

    /// <summary>
    /// Get Injuries (Historical)
    /// </summary>
    getInjuriesByHistoricalPromise(){
        return this.GetPromise('/golf/v2/{format}/InjuriesByHistorical');
    }

    /// <summary>
    /// Get Leaderboard
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getLeaderboardPromise(tournamentid){
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
    /// Get News by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/golf/v2/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News by Player
    /// </summary>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>40000019</code>.</param>
    getNewsByPlayerIDPromise(playerid){
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
    /// Get Player Season Stats (w/ World Golf Rankings)
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/golf/v2/{format}/PlayerSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Tournament Projected Stats (w/ DraftKings Salaries)
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.</param>
    getPlayerTournamentProjectionStatsPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/PlayerTournamentProjectionStats/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Player Tournament Stats By Player
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
    /// Get Players
    /// </summary>
    getPlayersPromise(){
        return this.GetPromise('/golf/v2/{format}/Players');
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    getTournamentsPromise(){
        return this.GetPromise('/golf/v2/{format}/Tournaments');
    }

    /// <summary>
    /// Get DFS Slates
    /// </summary>
    /// <param name="tournamentid">The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid entries are <code>58</code>, <code>61</code>, etc.</param>
    getDfsSlatesByTournamentPromise(tournamentid){
        var parameters = {};
        parameters['tournamentid']=tournamentid;
        return this.GetPromise('/golf/v2/{format}/DfsSlatesByTournament/{tournamentid}', parameters);
    }

    /// <summary>
    /// Get Schedule by Season
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2016</code>, <code>2017</code>.</param>
    getTournamentsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/golf/v2/{format}/Tournaments/{season}', parameters);
    }

}

module.exports = Golfv2Client;


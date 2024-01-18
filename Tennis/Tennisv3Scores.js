"use strict";

const BaseClient = require('../baseClient');

class Tennisv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Competitions
    /// </summary>
    getCompetitionsPromise(){
        return this.GetPromise('/v3/tennis/scores/{format}/Competitions');
    }

    /// <summary>
    /// Get Contestants by Season
    /// </summary>
    /// <param name="seasonid">The SeasonId for which to pull Contestants. Ex: <code>27</code></param>
    getContestantsBySeasonPromise(seasonid){
        var parameters = {};
        parameters['seasonid']=seasonid;
        return this.GetPromise('/v3/tennis/scores/{format}/ContestantsBySeason/{seasonid}', parameters);
    }

    /// <summary>
    /// Get Contestants by Season and Discipline and Gender
    /// </summary>
    /// <param name="seasonid">The SeasonId for which to pull Contestants. Ex: <code>27</code></param>
    /// <param name="discipline">The Discipline for which to pull Contestants. Valid Entries are <code> 1, 2, 3, singles, doubles, mixed </code>.</param>
    /// <param name="gender">The Gender for which to pull Contestants. Valid entries are <code> m, male, men, f, female, women, mixed </code>.</param>
    getContestantsBySeasonAndDisciplineAndGenderPromise(seasonid, discipline, gender){
        var parameters = {};
        parameters['seasonid']=seasonid;
        parameters['discipline']=discipline;
        parameters['gender']=gender;
        return this.GetPromise('/v3/tennis/scores/{format}/ContestantsBySeason/{seasonid}/{discipline}/{gender}', parameters);
    }

    /// <summary>
    /// Get Disciplines
    /// </summary>
    getDisciplinesPromise(){
        return this.GetPromise('/v3/tennis/scores/{format}/Disciplines');
    }

    /// <summary>
    /// Get Match Details
    /// </summary>
    /// <param name="matchid">The MatchId for which to pull details. Ex: <code> 2 </code></param>
    getMatchDetailsPromise(matchid){
        var parameters = {};
        parameters['matchid']=matchid;
        return this.GetPromise('/v3/tennis/scores/{format}/Match/{matchid}', parameters);
    }

    /// <summary>
    /// Get Matches by Round (Schedule)
    /// </summary>
    /// <param name="roundid">The RoundId for which to pull the schedule. Ex. <code> 1 </code></param>
    getMatchesByRoundSchedulePromise(roundid){
        var parameters = {};
        parameters['roundid']=roundid;
        return this.GetPromise('/v3/tennis/scores/{format}/MatchesByRound/{roundid}', parameters);
    }

    /// <summary>
    /// Get Matches by Season and Date
    /// </summary>
    /// <param name="seasonid">The SeasonId for which to pull matches. Ex: <code>27</code></param>
    /// <param name="date">The date for which to pull matches. Ex: <code> 2022-06-03 </code></param>
    getMatchesBySeasonAndDatePromise(seasonid, date){
        var parameters = {};
        parameters['seasonid']=seasonid;
        parameters['date']=date;
        return this.GetPromise('/v3/tennis/scores/{format}/MatchesBySeasonAndDate/{seasonid}/{date}', parameters);
    }

    /// <summary>
    /// Get Player Details
    /// </summary>
    /// <param name="playerid">The unique PlayerId of the player to pull details. Ex. <code>160000001</code></param>
    getPlayerDetailsPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/tennis/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Players
    /// </summary>
    getPlayersPromise(){
        return this.GetPromise('/v3/tennis/scores/{format}/Players');
    }

    /// <summary>
    /// Get Players by Rank
    /// </summary>
    /// <param name="discipline">The Discipline for which to pull player rankings. Valid Entries are <code> 1, 2, 3, singles, doubles, mixed <code>.</param>
    /// <param name="gender">The gender for which to pull player rankings. Valid entries are <code> m, male, men, f, female, women, mixed <code>.</param>
    getPlayersByRankPromise(discipline, gender){
        var parameters = {};
        parameters['discipline']=discipline;
        parameters['gender']=gender;
        return this.GetPromise('/v3/tennis/scores/{format}/PlayersByRank/{discipline}/{gender}', parameters);
    }

    /// <summary>
    /// Get Rounds by Season
    /// </summary>
    /// <param name="seasonid">The SeasonID for which to pull Round records. Ex: <code>27</code></param>
    getRoundsBySeasonPromise(seasonid){
        var parameters = {};
        parameters['seasonid']=seasonid;
        return this.GetPromise('/v3/tennis/scores/{format}/RoundsBySeason/{seasonid}', parameters);
    }

    /// <summary>
    /// Get Seasons by Competition
    /// </summary>
    /// <param name="competitionId">The CompetitionId for which to pull Season records. Ex: <code> 28 </code></param>
    getSeasonsByCompetitionPromise(competitionId){
        var parameters = {};
        parameters['competitionId']=competitionId;
        return this.GetPromise('/v3/tennis/scores/{format}/SeasonsByCompetition/{competitionId}', parameters);
    }

    /// <summary>
    /// Get Seasons by Tour Season
    /// </summary>
    /// <param name="tourSeasonId">The TourSeasonId for which to pull Seasons by TourSeason. Ex: <code> 1 </code></param>
    getSeasonsByTourSeasonPromise(tourSeasonId){
        var parameters = {};
        parameters['tourSeasonId']=tourSeasonId;
        return this.GetPromise('/v3/tennis/scores/{format}/SeasonsByTourSeason/{tourSeasonId}', parameters);
    }

    /// <summary>
    /// Get Seasons by Year
    /// </summary>
    /// <param name="year">The year for which to pull Season records. Ex: <code>2022</code></param>
    getSeasonsByYearPromise(year){
        var parameters = {};
        parameters['year']=year;
        return this.GetPromise('/v3/tennis/scores/{format}/SeasonsByYear/{year}', parameters);
    }

    /// <summary>
    /// Get Tours
    /// </summary>
    getToursPromise(){
        return this.GetPromise('/v3/tennis/scores/{format}/Tours');
    }

    /// <summary>
    /// Get Venues
    /// </summary>
    getVenuesPromise(){
        return this.GetPromise('/v3/tennis/scores/{format}/Venues');
    }

}

module.exports = Tennisv3ScoresClient;


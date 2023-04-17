"use strict";

const BaseClient = require('../baseClient');

class NFLv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Bye Weeks
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getByeWeeksPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/Byes/{season}', parameters);
    }

    /// <summary>
    /// Get Game Stats by Season (Deprecated, use Team Game Stats instead)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getGameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/GameStats/{season}', parameters);
    }

    /// <summary>
    /// Get Game Stats by Week (Deprecated, use Team Game Stats instead)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getGameStatsByWeekDeprecatedUseTeamGameStatsInsteadPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/scores/{format}/GameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/News');
    }

    /// <summary>
    /// Get News by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/scores/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News by Player
    /// </summary>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/scores/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get News by Team
    /// </summary>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getNewsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/scores/{format}/NewsByTeam/{team}', parameters);
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulePromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/Schedules/{season}', parameters);
    }

    /// <summary>
    /// Get Scores by Season 
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getScoresBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/Scores/{season}', parameters);
    }

    /// <summary>
    /// Get Scores by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getScoresByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/scores/{format}/ScoresByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Season Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Season Last Completed
    /// </summary>
    getSeasonLastCompletedPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/LastCompletedSeason');
    }

    /// <summary>
    /// Get Season Upcoming
    /// </summary>
    getSeasonUpcomingPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/UpcomingSeason');
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getTeamGameStatsPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/scores/{format}/TeamGameStats/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Teams (Active)
    /// </summary>
    getTeamsActivePromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/Teams');
    }

    /// <summary>
    /// Get Teams (All)
    /// </summary>
    getTeamsAllPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/AllTeams');
    }

    /// <summary>
    /// Get Teams by Season
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getTeamsBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/Teams/{season}', parameters);
    }

    /// <summary>
    /// Get Timeframes
    /// </summary>
    /// <param name="type">The type of timeframes to return. Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.</param>
    getTimeframesPromise(type){
        var parameters = {};
        parameters['type']=type;
        return this.GetPromise('/v3/nfl/scores/{format}/Timeframes/{type}', parameters);
    }

    /// <summary>
    /// Get Week Current
    /// </summary>
    getWeekCurrentPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/CurrentWeek');
    }

    /// <summary>
    /// Get Week Last Completed
    /// </summary>
    getWeekLastCompletedPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/LastCompletedWeek');
    }

    /// <summary>
    /// Get Week Upcoming
    /// </summary>
    getWeekUpcomingPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/UpcomingWeek');
    }

    /// <summary>
    /// Get Scores by Week Simulation
    /// </summary>
    /// <param name="numberofplays">The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.</param>
    getScoresByWeekSimulationPromise(numberofplays){
        var parameters = {};
        parameters['numberofplays']=numberofplays;
        return this.GetPromise('/v3/nfl/scores/{format}/SimulatedScores/{numberofplays}', parameters);
    }

    /// <summary>
    /// Get Player Details by Available
    /// </summary>
    getPlayerDetailsByAvailablePromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/Players');
    }

    /// <summary>
    /// Get Player Details by Free Agents
    /// </summary>
    getPlayerDetailsByFreeAgentsPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details by Player
    /// </summary>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/scores/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details by Team
    /// </summary>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/scores/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Player Details by Rookie Draft Year
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2018</code>, <code>2019</code>, etc.</param>
    getPlayerDetailsByRookieDraftYearPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/Rookies/{season}', parameters);
    }

    /// <summary>
    /// Get Referees
    /// </summary>
    getRefereesPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/Referees');
    }

    /// <summary>
    /// Get Scores by Date
    /// </summary>
    /// <param name="date">The date of the games. Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>.</param>
    getScoresByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/scores/{format}/ScoresByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Game Logs By Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="teamid">Unique ID of team. Example <code> 8 </code></param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getTeamGameLogsBySeasonPromise(season, teamid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['teamid']=teamid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/nfl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Depth Charts
    /// </summary>
    getDepthChartsPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/DepthCharts');
    }

    /// <summary>
    /// Get Schedule (Basic)
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getScheduleBasicPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/scores/{format}/SchedulesBasic/{season}', parameters);
    }

    /// <summary>
    /// Get Scores by Week (Basic)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getScoresByWeekBasicPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/scores/{format}/ScoresBasic/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Teams (Basic)
    /// </summary>
    getTeamsBasicPromise(){
        return this.GetPromise('/v3/nfl/scores/{format}/TeamsBasic');
    }

}

module.exports = NFLv3ScoresClient;


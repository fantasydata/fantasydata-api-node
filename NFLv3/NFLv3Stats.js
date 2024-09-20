"use strict";

const BaseClient = require('../baseClient');

class NFLv3StatsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Box Score [Live & Final]
    /// </summary>
    /// <param name="scoreid">The ScoreID of the game. Possible values include: <code>16247</code>, <code>16245</code>, etc.</param>
    getBoxScoreLiveFinalPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScoreByScoreIDV3/{scoreid}', parameters);
    }

    /// <summary>
    /// Get Box Score - by Team [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="hometeam">Abbreviation of a team playing in this game. Example: <code>WAS</code>.</param>
    getBoxScoreByTeamLiveFinalPromise(season, week, hometeam){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['hometeam']=hometeam;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScoreV3/{season}/{week}/{hometeam}', parameters);
    }

    /// <summary>
    /// Get Box Scores Delta - by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="playerstoinclude">The subcategory of players to include in the returned PlayerGame records. Possible values include: <code>all</code> Returns all players <code>fantasy</code> Returns traditional fantasy players (QB, RB, WR, TE, K, DST) <code>idp</code> Returns traditional fantasy players and IDP players.</param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code>, etc.</param>
    getBoxScoresDeltaByWeekPromise(season, week, playerstoinclude, minutes){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['playerstoinclude']=playerstoinclude;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Bye Weeks
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getByeWeeksPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/Byes/{season}', parameters);
    }

    /// <summary>
    /// Get Daily Fantasy Players
    /// </summary>
    /// <param name="date">The date of the contest for which you're pulling players <code>2014-SEP-21</code>, <code>2014-NOV-15</code>, etc</param>
    getDailyFantasyPlayersPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/stats/{format}/DailyFantasyPlayers/{date}', parameters);
    }

    /// <summary>
    /// Get Daily Fantasy Scoring
    /// </summary>
    /// <param name="date">The date of the contest for which you're pulling players <code>2014-SEP-21</code>, <code>2014-NOV-15</code>, etc</param>
    getDailyFantasyScoringPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/stats/{format}/DailyFantasyPoints/{date}', parameters);
    }

    /// <summary>
    /// Get DFS Slates - by Date
    /// </summary>
    /// <param name="date">The date of the slates. Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/stats/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get DFS Slates - by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getDFSSlatesByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/DfsSlatesByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Fantasy Defense Game Stats - All
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getFantasyDefenseGameStatsAllPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/FantasyDefenseByGame/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Fantasy Defense Game Stats - by Team
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getFantasyDefenseGameStatsByTeamPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get Fantasy Defense Season Stats - All
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getFantasyDefenseSeasonStatsAllPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/FantasyDefenseBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get Fantasy Defense Season Stats - by Team
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getFantasyDefenseSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Fantasy Player Ownership Percentages (Season-Long) - by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getFantasyPlayerOwnershipPercentagesSeasonLongByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerOwnership/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Fantasy Players - with ADP
    /// </summary>
    getFantasyPlayersWithADPPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/FantasyPlayers');
    }

    /// <summary>
    /// Get Game Stats by Season (Deprecated, use Team Game Stats instead)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getGameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/GameStats/{season}', parameters);
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
        return this.GetPromise('/v3/nfl/stats/{format}/GameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get IDP Fantasy Players with ADP
    /// </summary>
    getIDPFantasyPlayersWithADPPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/FantasyPlayersIDP');
    }

    /// <summary>
    /// Get Injuries - All
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getInjuriesAllPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/Injuries/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Injuries - by Team
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getInjuriesByTeamPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/Injuries/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get League Leaders by Season
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="position">Player’s position that you would like to filter by.</param>
    /// <param name="column">Response member you would like results sorted by.</param>
    getLeagueLeadersBySeasonPromise(season, position, column){
        var parameters = {};
        parameters['season']=season;
        parameters['position']=position;
        parameters['column']=column;
        return this.GetPromise('/v3/nfl/stats/{format}/SeasonLeagueLeaders/{season}/{position}/{column}', parameters);
    }

    /// <summary>
    /// Get League Leaders by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="position">Player’s position that you would like to filter by.</param>
    /// <param name="column">Response member you would like results sorted by.</param>
    getLeagueLeadersByWeekPromise(season, week, position, column){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['position']=position;
        parameters['column']=column;
        return this.GetPromise('/v3/nfl/stats/{format}/GameLeagueLeaders/{season}/{week}/{position}/{column}', parameters);
    }

    /// <summary>
    /// Get Legacy Box Score
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="hometeam">Abbreviation of the home team. Example: <code>WAS</code>.</param>
    getLegacyBoxScorePromise(season, week, hometeam){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['hometeam']=hometeam;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScore/{season}/{week}/{hometeam}', parameters);
    }

    /// <summary>
    /// Get Legacy Box Scores
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getLegacyBoxScoresPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScores/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Legacy Box Scores Active
    /// </summary>
    getLegacyBoxScoresActivePromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/ActiveBoxScores');
    }

    /// <summary>
    /// Get Legacy Box Scores Delta
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getLegacyBoxScoresDeltaPromise(season, week, minutes){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScoresDelta/{season}/{week}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Legacy Box Scores Delta (Current Week)
    /// </summary>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getLegacyBoxScoresDeltaCurrentWeekPromise(minutes){
        var parameters = {};
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nfl/stats/{format}/RecentlyUpdatedBoxScores/{minutes}', parameters);
    }

    /// <summary>
    /// Get Legacy Box Scores Final
    /// </summary>
    getLegacyBoxScoresFinalPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/FinalBoxScores');
    }

    /// <summary>
    /// Get Legacy Box Scores Live
    /// </summary>
    getLegacyBoxScoresLivePromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/LiveBoxScores');
    }

    /// <summary>
    /// Get News
    /// </summary>
    getNewsPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/News');
    }

    /// <summary>
    /// Get News - by Date
    /// </summary>
    /// <param name="date">The date of the news. Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.</param>
    getNewsByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/stats/{format}/NewsByDate/{date}', parameters);
    }

    /// <summary>
    /// Get News - by Player
    /// </summary>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.</param>
    getNewsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/stats/{format}/NewsByPlayerID/{playerid}', parameters);
    }

    /// <summary>
    /// Get News - by Team
    /// </summary>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getNewsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/NewsByTeam/{team}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Available
    /// </summary>
    getPlayerDetailsByAvailablePromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/Players');
    }

    /// <summary>
    /// Get Player Details - by Free Agents
    /// </summary>
    getPlayerDetailsByFreeAgentsPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/FreeAgents');
    }

    /// <summary>
    /// Get Player Details - by Player
    /// </summary>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.</param>
    getPlayerDetailsByPlayerPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/stats/{format}/Player/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Team
    /// </summary>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getPlayerDetailsByTeamPromise(team){
        var parameters = {};
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/Players/{team}', parameters);
    }

    /// <summary>
    /// Get Player Game Red Zone Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getPlayerGameRedZoneStatsPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameRedZoneStats/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats by Player
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.</param>
    getPlayerGameStatsByPlayerPromise(season, week, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsByPlayerID/{season}/{week}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Team [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getPlayerGameStatsByTeamLiveFinalPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Week [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getPlayerGameStatsByWeekLiveFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats Delta - by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getPlayerGameStatsDeltaByWeekPromise(season, week, minutes){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats Delta
    /// </summary>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getPlayerGameStatsDeltaPromise(minutes){
        var parameters = {};
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsDelta/{minutes}', parameters);
    }

    /// <summary>
    /// Get Player Season Red Zone Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getPlayerSeasonRedZoneStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerSeasonRedZoneStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Player
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.</param>
    getPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerSeasonStatsByPlayerID/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Player Season Stats - by Team
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Player Season Third Down Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getPlayerSeasonThirdDownStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerSeasonThirdDownStats/{season}', parameters);
    }

    /// <summary>
    /// Get Schedules
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getSchedulesPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/Schedules/{season}', parameters);
    }

    /// <summary>
    /// Get Games - by Season [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getGamesBySeasonLiveFinalPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/Scores/{season}', parameters);
    }

    /// <summary>
    /// Get Games - by Week [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getGamesByWeekLiveFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/ScoresByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Season - Current
    /// </summary>
    getSeasonCurrentPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Season - Last Completed
    /// </summary>
    getSeasonLastCompletedPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/LastCompletedSeason');
    }

    /// <summary>
    /// Get Season - Upcoming
    /// </summary>
    getSeasonUpcomingPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/UpcomingSeason');
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/Stadiums');
    }

    /// <summary>
    /// Get Standings
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getStandingsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/Standings/{season}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Game [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getTeamGameStatsByGameLiveFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/TeamGameStats/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Team Season Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getTeamSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/TeamSeasonStats/{season}', parameters);
    }

    /// <summary>
    /// Get Team Profiles - by Active
    /// </summary>
    getTeamProfilesByActivePromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/Teams');
    }

    /// <summary>
    /// Get Team Profiles - All
    /// </summary>
    getTeamProfilesAllPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/AllTeams');
    }

    /// <summary>
    /// Get Team Profiles - by Season
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getTeamProfilesBySeasonPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/Teams/{season}', parameters);
    }

    /// <summary>
    /// Get Timeframes
    /// </summary>
    /// <param name="type">The type of timeframes to return. Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.</param>
    getTimeframesPromise(type){
        var parameters = {};
        parameters['type']=type;
        return this.GetPromise('/v3/nfl/stats/{format}/Timeframes/{type}', parameters);
    }

    /// <summary>
    /// Get Week - Current
    /// </summary>
    getWeekCurrentPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/CurrentWeek');
    }

    /// <summary>
    /// Get Week - Last Completed
    /// </summary>
    getWeekLastCompletedPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/LastCompletedWeek');
    }

    /// <summary>
    /// Get Week - Upcoming
    /// </summary>
    getWeekUpcomingPromise(){
        return this.GetPromise('/v3/nfl/stats/{format}/UpcomingWeek');
    }

    /// <summary>
    /// Get Pro Bowlers
    /// </summary>
    /// <param name="season">Year of the season Examples: <code>2016</code>, <code>2017</code></param>
    getProBowlersPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/ProBowlers/{season}', parameters);
    }

    /// <summary>
    /// Get Box Scores Simulation
    /// </summary>
    /// <param name="numberofplays">The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.</param>
    getBoxScoresSimulationPromise(numberofplays){
        var parameters = {};
        parameters['numberofplays']=numberofplays;
        return this.GetPromise('/v3/nfl/stats/{format}/SimulatedBoxScoresV3/{numberofplays}', parameters);
    }

    /// <summary>
    /// Get Games by Week Simulation (formerly Scores by Week Simulation)
    /// </summary>
    /// <param name="numberofplays">The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.</param>
    getGamesByWeekSimulationFormerlyScoresByWeekSimulationPromise(numberofplays){
        var parameters = {};
        parameters['numberofplays']=numberofplays;
        return this.GetPromise('/v3/nfl/stats/{format}/SimulatedScores/{numberofplays}', parameters);
    }

    /// <summary>
    /// Get Player Game Red Zone Stats (Inside Five)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getPlayerGameRedZoneStatsInsideFivePromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Game Red Zone Stats (Inside Ten)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getPlayerGameRedZoneStatsInsideTenPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Season Red Zone Stats (Inside Five)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getPlayerSeasonRedZoneStatsInsideFivePromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Season Red Zone Stats (Inside Ten)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getPlayerSeasonRedZoneStatsInsideTenPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideTenStats/{season}', parameters);
    }

    /// <summary>
    /// Get Player Details - by Rookie Draft Year
    /// </summary>
    /// <param name="season">Year of the season. Examples: <code>2018</code>, <code>2019</code>, etc.</param>
    getPlayerDetailsByRookieDraftYearPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/Rookies/{season}', parameters);
    }

    /// <summary>
    /// Get Player Game Logs - by Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="playerid">Unique FantasyData Player ID. Example:<code>17920</code>.</param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getPlayerGameLogsBySeasonPromise(season, playerid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Games - by Date [Live & Final]
    /// </summary>
    /// <param name="date">The date of the games. Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>.</param>
    getGamesByDateLiveFinalPromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/stats/{format}/ScoresByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Team Game Logs - by Season
    /// </summary>
    /// <param name="season">Season to get games from. Example <code>2019POST</code>, <code>2020</code></param>
    /// <param name="teamid">Unique ID of team. Example <code> 8 </code></param>
    /// <param name="numberofgames">How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code></param>
    getTeamGameLogsBySeasonPromise(season, teamid, numberofgames){
        var parameters = {};
        parameters['season']=season;
        parameters['teamid']=teamid;
        parameters['numberofgames']=numberofgames;
        return this.GetPromise('/v3/nfl/stats/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}', parameters);
    }

    /// <summary>
    /// Get Box Score [Final]
    /// </summary>
    /// <param name="scoreid">The ScoreID of the game. Possible values include: <code>16247</code>, <code>16245</code>, etc.</param>
    getBoxScoreFinalPromise(scoreid){
        var parameters = {};
        parameters['scoreid']=scoreid;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScoreFinal/{scoreid}', parameters);
    }

    /// <summary>
    /// Get Box Scores - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getBoxScoresByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScoresFinal/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getPlayerGameStatsByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Team Game Stats - by Game [Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getTeamGameStatsByGameFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/TeamGameStatsFinal/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Games - by Season [Final]
    /// </summary>
    /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.</param>
    getGamesBySeasonFinalPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/stats/{format}/ScoresFinal/{season}', parameters);
    }

    /// <summary>
    /// Get Games - by Week [Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getGamesByWeekFinalPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/ScoresByWeekFinal/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Player Game Stats - by Team [Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getPlayerGameStatsByTeamFinalPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/stats/{format}/PlayerGameStatsByTeamFinal/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get Box Score - by Team [Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="hometeam">Abbreviation of a team playing in this game. Example: <code>WAS</code>.</param>
    getBoxScoreByTeamFinalPromise(season, week, hometeam){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['hometeam']=hometeam;
        return this.GetPromise('/v3/nfl/stats/{format}/BoxScoreByTeamFinal/{season}/{week}/{hometeam}', parameters);
    }

    /// <summary>
    /// Get Fantasy Points - by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getFantasyPointsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/stats/{format}/FantasyGameStatsByWeek/{season}/{week}', parameters);
    }

}

module.exports = NFLv3StatsClient;


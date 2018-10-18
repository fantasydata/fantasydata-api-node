"use strict";

const BaseClient = require('../baseClient');

class NFLv3ProjectionsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get DFS Slates by Date
    /// </summary>
    /// <param name="date">The date of the slates. Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>.</param>
    getDFSSlatesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/nfl/projections/{format}/DfsSlatesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get DFS Slates by Week
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code></param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getDFSSlatesByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/projections/{format}/DfsSlatesByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Projected Fantasy Defense Game Stats (w/ DFS Salaries)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getProjectedFantasyDefenseGameStatsPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/projections/{format}/FantasyDefenseProjectionsByGame/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getProjectedFantasyDefenseSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/projections/{format}/FantasyDefenseProjectionsBySeason/{season}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.</param>
    getProjectedPlayerGameStatsByPlayerPromise(season, week, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/projections/{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getProjectedPlayerGameStatsByTeamPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/projections/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getProjectedPlayerGameStatsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Projected Player Season Stats (w/ Bye Week, ADP)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    getProjectedPlayerSeasonStatsPromise(season){
        var parameters = {};
        parameters['season']=season;
        return this.GetPromise('/v3/nfl/projections/{format}/PlayerSeasonProjectionStats/{season}', parameters);
    }

    /// <summary>
    /// Get Projected Player Season Stats by Player (w/ Bye Week, ADP)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.</param>
    getProjectedPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/projections/{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Projected Player Season Stats by Team (w/ Bye Week, ADP)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getProjectedPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.</param>
    getIDPProjectedPlayerGameStatsByPlayerPromise(season, week, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}', parameters);
    }

    /// <summary>
    /// Get IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getIDPProjectedPlayerGameStatsByTeamPromise(season, week, team){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}', parameters);
    }

    /// <summary>
    /// Get IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getIDPProjectedPlayerGameStatsByWeekPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}', parameters);
    }

}

module.exports = NFLv3ProjectionsClient;


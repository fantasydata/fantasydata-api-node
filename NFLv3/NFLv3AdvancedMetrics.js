"use strict";

const BaseClient = require('../baseClient');

class NFLv3AdvancedMetricsClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Advanced Player Game Stats
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2018REG</code>, <code>2018PRE</code>, <code>2018POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    getAdvancedPlayerGameStatsPromise(season, week){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        return this.GetPromise('/v3/nfl/advanced-metrics/{format}/AdvancedPlayerGameStats/{season}/{week}', parameters);
    }

    /// <summary>
    /// Get Advanced Player Game Stats by Player
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2018REG</code>, <code>2018PRE</code>, <code>2018POST</code>.</param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.</param>
    getAdvancedPlayerGameStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/advanced-metrics/{format}/AdvancedPlayerGameStatsByPlayerID/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Advanced Player Info
    /// </summary>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.</param>
    getAdvancedPlayerInfoPromise(playerid){
        var parameters = {};
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/advanced-metrics/{format}/AdvancedPlayerInfo/{playerid}', parameters);
    }

    /// <summary>
    /// Get Advanced Player Season Stats by Player
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2018REG</code>, <code>2018PRE</code>, <code>2018POST</code>.</param>
    /// <param name="playerid">Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.</param>
    getAdvancedPlayerSeasonStatsByPlayerPromise(season, playerid){
        var parameters = {};
        parameters['season']=season;
        parameters['playerid']=playerid;
        return this.GetPromise('/v3/nfl/advanced-metrics/{format}/AdvancedPlayerSeasonStatsByPlayerID/{season}/{playerid}', parameters);
    }

    /// <summary>
    /// Get Advanced Player Season Stats by Team
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2018REG</code>, <code>2018PRE</code>, <code>2018POST</code>.</param>
    /// <param name="team">Abbreviation of the team. Example: <code>WAS</code>.</param>
    getAdvancedPlayerSeasonStatsByTeamPromise(season, team){
        var parameters = {};
        parameters['season']=season;
        parameters['team']=team;
        return this.GetPromise('/v3/nfl/advanced-metrics/{format}/AdvancedPlayerSeasonStats/{season}/{team}', parameters);
    }

    /// <summary>
    /// Get Advanced Players
    /// </summary>
    getAdvancedPlayersPromise(){
        return this.GetPromise('/v3/nfl/advanced-metrics/{format}/AdvancedPlayers');
    }

}

module.exports = NFLv3AdvancedMetricsClient;


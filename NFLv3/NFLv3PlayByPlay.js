﻿"use strict";

const BaseClient = require('../baseClient');

class NFLv3PlayByPlayClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Play By Play - by Team [Live & Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="hometeam">Abbreviation of the home team. Example: <code>WAS</code>.</param>
    getPlayByPlayByTeamLiveFinalPromise(season, week, hometeam){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['hometeam']=hometeam;
        return this.GetPromise('/v3/nfl/pbp/{format}/PlayByPlay/{season}/{week}/{hometeam}', parameters);
    }

    /// <summary>
    /// Get Play By Play Simulation
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    /// <param name="numberofplays">The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.</param>
    getPlayByPlaySimulationPromise(season, week, minutes, numberofplays){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['minutes']=minutes;
        parameters['numberofplays']=numberofplays;
        return this.GetPromise('/v3/nfl/pbp/{format}/SimulatedPlayByPlay/{numberofplays}', parameters);
    }

    /// <summary>
    /// Get Play By Play Delta
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="minutes">Only returns player statistics that have changed in the last X minutes. You specify how many minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.</param>
    getPlayByPlayDeltaPromise(season, week, minutes){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['minutes']=minutes;
        return this.GetPromise('/v3/nfl/pbp/{format}/PlayByPlayDelta/{season}/{week}/{minutes}', parameters);
    }

    /// <summary>
    /// Get Play By Play [Final]
    /// </summary>
    /// <param name="gameid">The GameID of a NFL game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getPlayByPlayFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nfl/pbp/{format}/PlayByPlayFinal/{gameid}', parameters);
    }

    /// <summary>
    /// Get Play By Play [Live & Final]
    /// </summary>
    /// <param name="gameid">The GameID of a NFL game. GameIDs can be found in the Games API. Valid entries are <code>14620</code> or <code>16905</code></param>
    getPlayByPlayLiveFinalPromise(gameid){
        var parameters = {};
        parameters['gameid']=gameid;
        return this.GetPromise('/v3/nfl/pbp/{format}/PlayByPlay/{gameid}', parameters);
    }

    /// <summary>
    /// Get Play By Play - by Team [Final]
    /// </summary>
    /// <param name="season">Year of the season and the season type. If no season type is provided, then the default is regular season. Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.</param>
    /// <param name="week">Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4. Example: <code>1</code></param>
    /// <param name="hometeam">Abbreviation of the home team. Example: <code>WAS</code>.</param>
    getPlayByPlayByTeamFinalPromise(season, week, hometeam){
        var parameters = {};
        parameters['season']=season;
        parameters['week']=week;
        parameters['hometeam']=hometeam;
        return this.GetPromise('/v3/nfl/pbp/{format}/PlayByPlayFinal/{season}/{week}/{hometeam}', parameters);
    }

}

module.exports = NFLv3PlayByPlayClient;


"use strict";

const https = require('https');

class BaseClient {
    constructor(apiKey){
        this.ApiKey = apiKey;
        this.Host = 'api.fantasydata.net';
    }

    GetPromise(endpoint, params = {}){
        // if someone tries to call this without ever setting an API key
        if(this.ApiKey === undefined){
            return new Promise((resolve, reject) => reject("No API key found for this client!"))
        }
        // we want to return a promise typically instead of node HTTPS stream
        return new Promise((resolve, reject) => {
            params.format = 'JSON';
            //loop the object and replace all the URL parameters with the set values
            for (var property in params) {
                if (params.hasOwnProperty(property)) {
                    endpoint = endpoint.replace('{'+property+'}', params[property]);
                }
            }
            const options ={
                hostname:this.Host,
                path:endpoint,
                headers: { 'Ocp-Apim-Subscription-Key': this.ApiKey }
            };
            const request = https.get(options, (response)=>{
                // accept only 200s
                if (response.statusCode < 200 || response.statusCode > 299) {
                    reject(new Error('Error status code: ' + response.statusCode));
                  }
                 // temporary data holder
                 const body = [];
                 // on every content chunk, push it to the data array
                 response.on('data', (chunk) => body.push(chunk));
                 // we are done, resolve promise with those joined chunks
                 response.on('end', () => resolve(body.join('')));
            });
            // handle connection errors of the request
            request.on('error', (err) => reject(err));
        });
        
    }
};

module.exports = BaseClient;
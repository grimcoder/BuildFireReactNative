"use strict";

function RemoteDatastore(appId, pluginId, instanceId, liveMode, dataStoreUrl) {
    this.appId = appId;
    this.pluginId = pluginId;
    this.instanceId = instanceId;
    this.liveMode = liveMode;
    this.dataStoreUrl = dataStoreUrl;
}



RemoteDatastore.prototype = {
    createReadUrl: function (tag, id, withDynamicData) {

        var url = this.dataStoreUrl + "/plugin/" + this.appId + "/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/" + this.liveMode + "/" + id;
        if (withDynamicData) {
            url += "?withDynamicData=true";
        }
        return url;
    }
    , createSearchUrl: function (tag) {
        return this.dataStoreUrl + "/plugin/search/" + this.appId + "/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/" + this.liveMode + "/";
    }
    , createWriteUrl: function (tag) {
        return this.dataStoreUrl + "/plugin/" + this.appId + "/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/";
    }
    , createCloneUrl: function (tag) {
        return this.dataStoreUrl + "/app/" + this.appId + "/plugin/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/clone/";
    }
    , createSearchAndUpdateUrl: function (tag) {
        return this.dataStoreUrl + "/plugin/searchAndUpdate/" + this.appId + "/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/";
    }
    , createDeleteUrl: function (tag, id) {
        return this.dataStoreUrl + "/plugin/delete/" + this.appId + "/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/" + id;
    }
    , createSaveUrl: function (tag) {
        return this.dataStoreUrl + "/plugin/save/" + this.appId + "/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/";
    }
    , createBulkInsertUrl: function (tag) {
        return this.dataStoreUrl + "/plugin/bulkInsert/" + this.appId + "/" + this.pluginId + "/" + this.instanceId + "/" + this.resolveTag(tag) + "/";
    }
    , createPublishUrl: function () {
        return this.dataStoreUrl + "/publish/" + this.appId;
    }
    , createServicesUrl: function () {
        return this.dataStoreUrl + "/app/" + this.appId + "/services/" + this.liveMode;
    }
    , createDeletePluginInstanceUrl: function (id) {
        return this.dataStoreUrl + "/plugin/deletePluginInstance/" + this.appId + "/" + id;
    }
    , resolveTag: function (tag) {
        if (tag == null || tag == undefined || tag == "") return 'primary';
        return tag;
    }
    , _httpGet: function (url, context, callback) {
        if (typeof(context) == 'function' && !callback) {
            callback = context;
            context = this;
        }

        fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
            callback.apply (context, [null, myJson]);
        });
    
    }
    , _httpPost: function (url, data, callback) {

        // bfUtils.http.post(url, data).then(
        //     function (result) {
        //         callback(null, result);
        //     }
        // ).error(
        //     function (data, status, headers, config) {
        //         var errMsg = 'datastore POST Error with URL: ' + config.url;
        //         callback(errMsg);
        //         console.error('datastore POST Result: ', status, config.url);
        //     }
        // );
        

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => 
    
   { 
    console.log(response)   
    callback(null,  response) }
    
    )
.catch(error => console.error('Error:', error));
    
    }



    , _httpPut: function (url, data, callback) {

        fetch(url, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => 
              
             { 
              console.log(response)   
              callback(null,  response) }
              
              )
          .catch(error => console.error('Error:', error));
    }
    , get:function(id, tag, data, withDynamicData, callback){
        this._httpGet(this.createReadUrl(tag, id, withDynamicData), data, callback);
        return this;
    }
    , save: function (tag, data, callback) {
        this._httpPost(this.createSaveUrl(tag), data, callback);
        return this;
    }
    , insert: function (tag, data, callback) {
        this._httpPost(this.createWriteUrl(tag), data, callback);
        return this;
    }
    , clone: function (tag, data, callback) {
        this._httpPost(this.createCloneUrl(tag), data, callback);
        return this;
    }
    , bulkInsert: function (tag, data, callback) {
        this._httpPost(this.createBulkInsertUrl(tag), data, callback);
        return this;
    }
    , update: function (tag, data, callback) {
        this._httpPut(this.createWriteUrl(tag), data, callback);
        return this;
    }
    , searchAndUpdate: function (tag, data, callback) {
        this._httpPost(this.createSearchAndUpdateUrl(tag), data, callback);
        return this;
    }
    , delete: function (tag, id, data, callback) {
        this._httpPost(this.createDeleteUrl(tag, id), data, callback);
        return this;
    }
    , search: function (tag, options, data, callback) {
        this._httpPost(this.createSearchUrl(tag), data, callback);
        return this;
    }
    , publish: function (data, callback) {
        this._httpPost(this.createPublishUrl(), data, callback);
        return this;
    }
    , getServices: function (data, callback) {
        this._httpGet(this.createServicesUrl(), data, callback);
        return this;
    }
    , deletePluginInstance: function (id, data, callback) {
        this._httpPost(this.createDeletePluginInstanceUrl(id), data, callback);
        return this;
    }
};


export default RemoteDatastore;
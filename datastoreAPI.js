
import RemoteDatastore from './remoteDatastore'

let window = {
    siteConfig: {"appId":202,"endPoints":{"datastoreHost":"https://datastore.buildfire.com","appHost":"https://app.buildfire.com","auth":"auth.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"http://s3-us-west-2.amazonaws.com/pluginserver.prod/plugins","socialHost":"https://social.buildfire.com","pushV2":"https://push2.buildfire.com","publicFilesHost":"https://datastore.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0"},"keys":{"datastoreKey":"123-ASD-TEST"}}
}

window.appContext = {"environment":"prod","currentApp":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","name":"Dark Sequence","whitelabelId":"1717","isActive":1,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","clonedFromAppId":"8da626b9-9f25-11e7-9bb5-0698b23e0a1a","lastUpdatedOn":"2019-04-04T08:53:19.000Z","lastUpdatedBy":154229,"createdOn":"2019-04-03T17:44:23.000Z","createdBy":303311,"deletedOn":null,"deletedBy":null,"urlSchema":"app1e0ac3","publishedOn":"2019-04-04T08:53:19.000Z","publishInfoId":2839,"keys":{"datastoreKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","intercomKey":"tz9eb8ux"},"liveMode":0,"config":{"stockPlugins":[47,48,50,49,61,52,57,58,51,53,55,59,63,65,70,110,169,234,217,54,60,56,62,64,69,109,115,214,218,285,287,335,368,286,288,340,476,690,495,517,877,900],"additionalPluginsIncluded":[],"marketplaceButton":false,"allowAppOwnerAddRemovePlugins":true,"intercom":false,"publishButton":true,"upgradeButton":false,"upgradeButtonURL":"","platformsIncluded":{"Andriod":true,"AndroidTablets":false,"iPhone":true,"iPad":false,"WebsiteHTML5":false},"pushNotifications":true,"pushNotificationsPerMonth":"","configurationUpgradeURL":"","type":"enterprise","allowAccessCode":true,"whitelabelsPluginLicenses":[],"industryInfo":true,"userTagging":"enabled","userManagement":"enabled","topButton":{"show":false,"text":"","url":"","color":"","openInWindow":false},"sideMenuButtons":[],"offlineModeEnabled":true,"advPush":"enabled","advancedPluginAccessSettings":"enabled","pushNotificationOptions":{"richMessage":"enabled","actionItems":"enabled","rssFeeds":"enabled","advancedPushNotificationAnalytics":"enabled"},"requiresGooglePlay":true,"requiresApplePlay":true,"googlePlayAccount":"Publishing@buildfire.com","applePlayAccount":"Publishing@buildfire.com","pluginSearchNoResult":"Try to search another keyword. Thank you","poweredByEnabled":false,"whitlabelName":"BuildFire","poweredBySettings":{"enabled":false,"text":"Powered By BuildFire","url":"https://buildfire.com/"},"TermsOfUse":"http://appdocumentation.org/terms-of-use-policy/","inAppPurchases":"enabled","menuShortcuts":true,"menuShortcutOptions":{"geo":"promo","geo_promo":"default","drip":"promo","drip_promo":"default"},"selectedPluginLicenses":{},"SSOEnabled":true,"pwaSettings":{"show":true},"publishButtonText":"","upgradeButtonText":"","pauseAccountSettings":{"show":false,"amount":0},"allowManageSocialMediaLogin":true,"advancedPluginAnalytics":"enabled","featureSecurityAccess":"enabled","userLoginDomainSettings":"enabled","userTimeline":"enabled","inAppPurchasesSubscriptions":"enabled","searchEngine":"enabled"},"configName":"Nancy (Testing purposes ONLY)","configId":246,"$$hashKey":"object:22"},"currentPlugin":{"pluginAPI":{"appearance":{"pluginAPI":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"analytics":{"analyticsHostUrl":"https://analytics.buildfire.com","appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"source":"web","secondLevelEmailVerificationEnabled":true,"whitelabelId":"1717","_user":{"userId":"tkovtun@buildfire.com","isValidEmail":1}},"datastore":{"enableCache":false,"dataStoreUrl":"https://datastore.buildfire.com","_featureSecurityAccess":"enabled","appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"writeKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","_provider":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"dataStoreUrl":"https://datastore.buildfire.com"}},"iFrameId":"controlIFrame","iFrame":{"$$hashKey":"object:137"},"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"},"userData":{"enableCache":false,"dataStoreUrl":"https://datastore.buildfire.com","appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","isAppUser":false,"writeKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c"},"imageLib":{"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise","writeKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c"}},"colorLib":{"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"appAPI":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","liveMode":0,"appHost":"https://app.buildfire.com"},"actionItems":{"templateUrl":"pages/share/actionBuilder.html","controller":"actionItemsCtrl","context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"notificationsAPI":{},"history":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0},"pluginInstances":{"templateUrl":"pages/plugins/pluginInstanceDialog/pluginInstanceDialog.html","controller":"pluginInstanceDialog","appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","liveMode":0,"appHost":"https://app.buildfire.com","ds":{"enableCache":false,"dataStoreUrl":"https://datastore.buildfire.com","_featureSecurityAccess":"enabled","appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"pluginInstances","instanceId":1,"liveMode":0,"writeKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","_provider":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"pluginInstances","instanceId":1,"liveMode":0,"dataStoreUrl":"https://datastore.buildfire.com"}}},"inAppPurchase":{"initCalled":true,"initialized":true,"storeAccessible":false,"registeredProducts":[],"registeredSubscriptions":[]},"publicData":{"enableCache":true,"dataStoreUrl":"https://datastore.buildfire.com","appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","writeKey":"public"},"notes":{"notesCtrlScope":null,"userToken":false},"deepLink":{},"pushNotifications":{"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"firebase":{"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"auth":{"authCtrlScope":null,"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"mediaAPI":{"audioPlayer":{"_audio":{},"_allowPlay":true,"_interval":{"time":5000,"id":null},"audio":{},"_currentTrack":null,"settings":{"autoPlayNext":false,"loopPlaylist":false,"autoJumpToLastPosition":false,"shufflePlaylist":false,"volume":1},"_tmrSave":null,"playlist":{"tracks":[],"lastIndex":-1}}},"publicFiles":{"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"searchEngine":{"context":{"appId":"1e0ac3bb-5638-11e9-8fc5-06e43182e96c","pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862","liveMode":0,"endPoints":{"appHost":"https://app.buildfire.com","authHost":"https://auth.buildfire.com","pluginHost":"https://pluginserver.buildfire.com/plugins","pluginServer":"https://cdn.pluginserver.buildfire.com/","socialHost":"https://social.buildfire.com","push":"https://push.buildfire.com","pushV2":"https://push2.buildfire.com","datastoreHost":"https://datastore.buildfire.com","analyticsHost":"https://analytics.buildfire.com","crmHost":"https://crm.buildfire.com","webHost":"https://app.buildfire.com","searchEngineHost":"https://public.buildfire.com/1.0","publicFilesHost":"https://publicfiles.buildfire.com"},"cpDomain":"https://app.buildfire.com","device":{"platform":"web"},"deviceId":null,"debugTag":null,"datastoreWriteKey":"1e0ac3fc-5638-11e9-8fc5-06e43182e96c","type":"control","configType":"enterprise"}},"tag":"1) CP: 579399da-9aba-4a4b-beca-42d0e2af3538"},"pluginId":"579399da-9aba-4a4b-beca-42d0e2af3538","instanceId":"579399da-9aba-4a4b-beca-42d0e2af3538-1559253584862"},"liveMode":0}

function DatastoreAPI(appId = window.appContext.currentApp.appId, 
    pluginId=window.appContext.currentPlugin.pluginId, 
    instanceId=window.appContext.currentPlugin.instanceId, 
    liveMode=0, 
    writeKey=window.appContext.currentApp.keys.datastoreKey) {

    if(!window.appContext || !window.appContext.currentApp){
        console.warn("invalid appContext in datastore");
        //return;
        //If this not an issue after Augest First , 2016 then remove this if statement
    }

    this.enableCache = false; // window.location.protocol.indexOf('http') < 0; // enable for non web only
    
    this.dataStoreUrl = window.siteConfig.endPoints.datastoreHost;

    this._featureSecurityAccess = undefined;
    if (window.appContext && window.appContext.currentApp && window.appContext.currentApp.config) {
        if (typeof window.appContext.currentApp.config.featureSecurityAccess == 'undefined') {
            if (window.appContext.currentApp.config.type == "enterprise") {
                this._featureSecurityAccess = 'enabled';
            }
        }
        else {
            this._featureSecurityAccess = window.appContext.currentApp.config.featureSecurityAccess;
        }
    }

    if (typeof(appId) == "object") {
        var config = appId;
        this.appId = config.appId;
        this.pluginId = config.pluginId;
        this.instanceId = config.instanceId;
        this.liveMode = config.liveMode;
        this.writeKey = config.writeKey || (window.appContext.currentApp ? window.appContext.currentApp.keys.datastoreKey : null);
    }
    else {
        this.appId = appId;
        this.pluginId = pluginId;
        this.instanceId = instanceId;
        this.liveMode = liveMode;
        if(writeKey)
            this.writeKey =writeKey;
        else
        if(window.appContext.currentApp && window.appContext.currentApp.keys && window.appContext.currentApp.keys.datastoreKey)
            this.writeKey =window.appContext.currentApp.keys.datastoreKey;
        else
        if(window.appContext.currentApp &&  window.appContext.currentApp.datastoreWriteKey)
            this.writeKey =window.appContext.currentApp.datastoreWriteKey;
        else
            this.writeKey=null;
    }

    if (typeof(CustomEvent) == "undefined")
        //console.warn("Browser doesn't support CustomEvent");

    // check for backward compatibility with old SDK versions. overrides.js loads in SDK only.
    if(typeof RemoteDatastore == "undefined" && document.querySelector('script[src="scripts/overrides.js"]')) {
        console.error("SDK is outdated. Please update to the most recent version.");
        throw "SDK is outdated. Please update to the most recent version.";
    }

    var remoteDatastoreProvider = new RemoteDatastore(this.appId, this.pluginId, this.instanceId, this.liveMode, this.dataStoreUrl);
    if(this.enableCache && typeof OfflineDatastore != 'undefined') {
        this._provider = new OfflineDatastore(this.appId, this.pluginId, this.instanceId, this.liveMode, remoteDatastoreProvider);
    } else {
        this._provider = remoteDatastoreProvider;
    }
}

DatastoreAPI.prototype = {
    deviceOnline : function(){
        if(typeof(navigator) != "undefined" && navigator.connection && navigator.connection.type)
            return navigator.connection.type != "none";
        else
            return true;
    }
    , onUpdate: function (callback) {
    }
    , triggerOnUpdate: function (data) {
        if (this.onUpdate)this.onUpdate(data);
    }
    , onRefresh: function (callback) {
        document.addEventListener('datastoreOnRefresh', callback, false);
    }
    , triggerOnRefresh: function (data) {
        var onUpdateEvent = new CustomEvent('datastoreOnRefresh', {'detail': data});
        document.dispatchEvent(onUpdateEvent);
    }
    , onDisableRefresh: function (callback) {
        document.addEventListener('datastoreOnDisableRefresh', callback, false);
    }
    , disableRefresh: function () {
        document.dispatchEvent(new CustomEvent('datastoreOnDisableRefresh'));
    }
    , resolveTag: function (tag) {
        if (tag == null || tag == undefined || tag == "") return 'primary';
        return tag;
    }
    , get: function (obj, callback) {
        if (typeof(callback) != "function") return; // don't bother

        var self=this;

        var tag;
        var id = '';
        var withDynamicData = false;
        if (typeof(obj) == "object") {
            if (typeof(obj.tag) == "string")
                tag = obj.tag;
            else
                tag = '';
            if (typeof(obj.id) == "string")
                id = obj.id;
            else
                id = '';
            withDynamicData = obj.withDynamicData;
        }
        else if (typeof(obj) == "string")
            tag = obj;
        else if (tag == null || tag == undefined)
            tag = '';

        if (typeof(tag) != "string") tag = '';
        var requestTime = Date.now();
        this._provider.get(id,tag,{ds: this
            , obj: obj
        },withDynamicData, function (err, data) {
            //var responseTime = Date.now() - requestTime;
            //console.log('datastore: response time ' + responseTime);
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                if (data == null) {
                    callback(null, null);
                }
                else {
                    var saveTag = data.tag;
                    data.tag = tag;
                    if(withDynamicData && data && data.data && data.data._buildfire){
                        self._dynamicDataSecurityFilter(data.data._buildfire, function (err, result) {
                            data.data._buildfire = result;
                            callback(null, data);
                            data.tag = saveTag;
                        });
                    }
                    else{
                        callback(null, data);
                        data.tag = saveTag;
                    }
                }
            }
        });
        return this;
    }
    , save: function (obj, callback) {
        if (window.toast)window.toast('saving...');
        if (!this.writeKey) {
            console.error ("no write key has been provided");
            return;
        }
        var tag = obj.tag, data = obj.obj;

        if (typeof(data) == "object") {
            data = this._cleanUp(data);
            if (typeof(angular) != "undefined")
                data = angular.toJson({data: data, writeKey: this.writeKey, id: obj.id});
            else
                data = JSON.stringify({data: data, writeKey: this.writeKey, id: obj.id});
        }


        var t = this;
        this._provider.save(tag, data, function(err) {
            if (err == 404) {
                if (window.toast)window.toast('404', 'danger');
                callback(null, null);
            } else if (err) {
                if (window.toast)window.toast('error saving', 'danger');
                callback(err);
            } else {
                var result = {
                    id: obj.id,
                    data: obj.obj,
                    tag: tag
                };
                callback(null, result);
                t.triggerOnUpdate(result);
            }
        });
        return this;
    }
    , insert: function (obj, callback) {

        var tag = obj.tag, data = obj.obj, checkDuplicate = obj.checkDuplicate;

        if (typeof(data) == "object") {
            data = this._cleanUp(data);
            data = {data: data, writeKey: this.writeKey};
            if (checkDuplicate)
                data.checkDuplicate = checkDuplicate;
            data = JSON.stringify(data);
        }

        var t = this;
        this._provider.insert(tag, data, function (err, response) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                obj.id = response.id;
                var result = {
                    id: response.id,
                    data: obj.obj,
                    tag: tag
                }
                callback(null, result);
                t.triggerOnUpdate(result);

            }

        });
        return this;
    }
    , clone: function (obj, callback) {

        var tag = obj.tag, data = obj.obj, checkDuplicate = obj.checkDuplicate;

        if (typeof(data) == "object") {
            data = this._cleanUp(data);
            data = {data: data, writeKey: this.writeKey};
            if (checkDuplicate)
                data.checkDuplicate = checkDuplicate;
            data = JSON.stringify(data);
        }

        var t = this;
        this._provider.clone(tag, data, function (err, response) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                obj.id = response.id;
                var result = {
                    id: response.id,
                    data: obj.obj,
                    tag: tag
                };
                callback(null, result);
                t.triggerOnUpdate(result);
            }
        });
        return this;
    }
    , bulkInsert: function (obj, callback) {
        var tag = obj.tag, data = obj.obj;

        if (typeof(data) == "object") {
            data = this._cleanUp(data);
            data = JSON.stringify({data: data, writeKey: this.writeKey, checkDuplicate: false});
        }

        var t = this;
        this._provider.bulkInsert(tag, data, function (err, response) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                var result = {
                    data: obj.obj,
                    tag: tag
                };
                callback(null, result);
                t.triggerOnUpdate(result);
            }
        });
        return this;
    }
    , update: function (args, callback) {
        if (window.toast)window.toast('saving...');
        var tag = args.tag, data = args.obj;


        if (typeof(data) == "object") {
            data = this._cleanUp(data);
            data = JSON.stringify({id: args.id, data: data, writeKey: this.writeKey});
        }

        var t = this;
        this._provider.update(tag, data, function (err, response) {
            if (err == 404) {
                if (window.toast)window.toast('404');
                callback(null, null);
            }
            else if (err) {
                if (window.toast)window.toast('error updating');
                callback(err);
            }
            else {
                //if (window.toast)window.toast('saved.');
                response.record.tag = args.tag;
                callback(null, response.record);
                t.triggerOnUpdate(response.record);
            }

        });
        return this;
    }
    , searchAndUpdate: function (args, callback) {
        if (window.toast)window.toast('saving...');
        var tag = args.tag, data = args.obj;

        if (typeof(data) == "object") {
            data = this._cleanUp(data);
            data = JSON.stringify({search: args.search, data: data, writeKey: this.writeKey});
        }

        var t = this;
        this._provider.searchAndUpdate(tag, data, function (err, response) {
            if (err == 404) {
                if (window.toast)window.toast('404');
                callback(null, null);
            }
            else if (err) {
                if (window.toast)window.toast('error updating');
                callback(err);
            }
            else {
                //if (window.toast)window.toast('saved.');
                callback(null, response);
                t.triggerOnUpdate(response);
            }
        });
        return this;
    }
    , delete: function (args, callback) {

        var tag = args.tag;

        var data = JSON.stringify({writeKey: this.writeKey});

        var t = this;
        this._provider.delete(tag, args.id, data, function (err, response) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                callback(null, response);
                t.triggerOnUpdate(args);
            }

        });
        return this;
    }
    , deletePluginInstance: function (args, callback) {
        var data = JSON.stringify({writeKey: this.writeKey});

        var t = this;
        this._provider.deletePluginInstance(args.id, data, function (err, response) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                callback(null, response);
                t.triggerOnUpdate(args);
            }

        });
        return this;
    }
    , search: function (packet, callback) {
        var self = this;
        var tag = packet.tag;
        var data = packet.obj;
        if (typeof(callback) != "function") return; // dont bother

        if (typeof(tag) != "string")
            tag = '';

        if (typeof(data) == "object")
            data = JSON.stringify(data);

        this._provider.search(tag, packet.obj, data, function (err, data) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                /*try {*/

                    if (data == null)
                        callback(null, null);
                    else if (typeof(data) == "string")
                        callback(null, data);
                    else {
                        if (self.pluginId === 'pluginInstances') {
                            //
                            if (typeof (userTags) != "undefined" && userTags.checkPluginAccessSettings && data.result) {
                                self._pluginInstancesSecurityFilter(data.result);
                            }
                            callback(null, data);
                        }
                        else {
                            callback(null, data);
                        }
                    }
                /*}
                catch (e) {
                    callback({data : 'cannot parse data: ' + JSON.stringify(packet) , error : JSON.stringify(e)  });
                }*/
            }

        });
        return this;
    }
    , publish: function (callback) {
        var data = JSON.stringify({publishKey: this.publishKey});
        var t = this;
        this._provider.publish(data, function (err, response) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                /*try {*/
                    callback(null, response);
                /*}
                catch (e) {
                    callback('cannot parse data: ' + response);
                }*/
                t.triggerOnUpdate(obj);
            }

        });
        return this;
    }
    , getServices: function (data, callback) {
        this._provider.getServices(data, function (err, response) {
            if (err == 404)
                callback(null, null);
            else if (err)
                callback(err);
            else {
                callback(null, response);
            }
        });
        return this;
    }
    , _cleanUp: function (data) {
        if (data) {
            var clone = JSON.parse(JSON.stringify(data));
            this._cleanUpTree(clone);
            return clone;
        }
        else {
            return data;
        }
    }
    , _cleanUpTree: function (node) {
        for (var property in node) {
            var subNode = node[property];
            if (property == '_buildfire' && subNode) { // clean auto injected _buildfire
                delete subNode.result;
                delete subNode.err;
            }
            else {
                if (subNode !== null && typeof(subNode) == "object") {
                    this._cleanUpTree(node[property]);
                }
            }
        }
    },
    _dynamicDataSecurityFilter: function (_buildfire, callback) {
        if (typeof (userTags) != "undefined" && userTags.checkPluginAccessSettings) {
            for (var key in _buildfire) {
                if (!key)
                    continue;
                var currentInstance = _buildfire[key];
                if (currentInstance && currentInstance.result) {
                    this._pluginInstancesSecurityFilter(currentInstance.result);
                }
            }
        }
        callback(null, _buildfire);
    },
    _pluginInstancesSecurityFilter: function (pluginInstances) {
        var self = this;
        if (pluginInstances) {
            pluginInstances.forEach(function (pInstance) {
                if (pInstance && pInstance.data) {
                    pInstance.hasAccess = true;
                    if (self._featureSecurityAccess === 'enabled') {
                        userTags.checkPluginAccessSettings(pInstance.data, function (err, hasAccess) {
                            pInstance.hasAccess = hasAccess;
                        });
                    }
                }
            });
        }
    }
};

export default DatastoreAPI;
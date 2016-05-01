cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.pylonproducts.wifiwizard/www/WifiWizard.js",
        "id": "com.pylonproducts.wifiwizard.WifiWizard",
        "pluginId": "com.pylonproducts.wifiwizard",
        "clobbers": [
            "window.WifiWizard"
        ]
    },
    {
        "file": "plugins/phonegap-facebook-plugin/facebookConnectPlugin.js",
        "id": "phonegap-facebook-plugin.FacebookConnectPlugin",
        "pluginId": "phonegap-facebook-plugin",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "id": "cordova-plugin-geolocation.geolocation",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "id": "cordova-plugin-geolocation.PositionError",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-spinner-dialog/www/spinner.js",
        "id": "cordova-plugin-spinner-dialog.SpinnerDialog",
        "pluginId": "cordova-plugin-spinner-dialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.pylonproducts.wifiwizard": "0.2.11",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-whitelist": "1.2.2-dev",
    "phonegap-facebook-plugin": "0.12.0",
    "cordova-plugin-geolocation": "2.2.1-dev",
    "cordova-plugin-spinner-dialog": "1.3.1"
}
// BOTTOM OF METADATA
});
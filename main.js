//"use strict";
'use strict';
global.freeroam = {
utils: require('../freeroam/gm/utility'),
config: require('../freeroam/gm/config'),
chat: jcmp.events.Call('get_chat')[0]
}
var config = require("./config.json");

jcmp.events.AddRemoteCallable("sendconfig", (player) => {
    jcmp.events.CallRemote("receiveconfig", player, JSON.stringify(config));
});
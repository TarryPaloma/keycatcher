'use strict';
// Use const instead var or let if variable does not get changed while runtime
const config = require("./config.json");
// Stringify only one time does save server performance
const configString = JSON.stringify(config); // to save a bit more memory you could add the require on place of config

jcmp.events.AddRemoteCallable("sendconfig", (player) => {
    jcmp.events.CallRemote("receiveconfig", player, configString);
});

const ui = new WebUIWindow("getKeypresses", "package://keycatcher/ui/index.html", new Vector2(1, 1));	

//request config from the server
jcmp.ui.AddEvent("requestconfig", () => {
	jcmp.events.CallRemote("sendconfig");
});
//get config back from server and send to ui
jcmp.events.AddRemoteCallable("receiveconfig", (strconfig) => {
	jcmp.ui.CallEvent("receiveconfig", strconfig);
});

jcmp.ui.AddEvent("eventtoserver", (eventname) => {
	jcmp.events.Call(eventname);
	jcmp.events.CallRemote(eventname);
});
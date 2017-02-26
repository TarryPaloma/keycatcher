(function () {
	var chat_input_state = false;

	//request config from main..
	jcmp.CallEvent("requestconfig");

	//receive config from main..
	jcmp.AddEvent("receiveconfig", (strconfig) => {
		config = JSON.parse(strconfig);
	});

	jcmp.AddEvent('chat_input_state', function(state) {
		chat_input_state = state;
	});
		
	document.onkeydown = (event) => {
		if (chat_input_state){
			return false;
		}
		for(var i=0;i<config.length;i++){
			if(event.keyCode == config[i].keyid){
				jcmp.CallEvent("eventtoserver",config[i].eventname);
			}
		}

	};
})();
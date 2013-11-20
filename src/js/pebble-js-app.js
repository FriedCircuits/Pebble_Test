var led = localStorage.getItem("count");

// We use the fake "PBL" symbol as default
if (!led) {
  led = "5";
}


function getLED(){
	console.log("getLED called");
	Pebble.sendAppMessage({
	  "LED_STATUS":led.toString()
	});
	led ++;
        if(led > 10) led = 1;
        localStorage.setItem("count", led);
}




Pebble.addEventListener("ready",
    function(e) {
        console.log("Connect: " + e.ready);
	getLED();
	console.log(e.type);
    }
);

Pebble.addEventListener("appmessage",
                        function(e) {
                          console.log("message!");
                          getLED();
                          console.log(e.type);
                          console.log(e.payload.LED_STATUS);
                          
                        });

Pebble.addEventListener("webviewclosed",
                                     function(e) {
                                     console.log("webview closed");
                                     console.log(e.type);
                                     console.log(e.response);
                                     });

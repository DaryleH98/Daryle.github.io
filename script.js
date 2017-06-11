// VARIABLE DECLARATIONS
var on = true;
var q = false;

// IMMEDIATE ACTIONS
	// fade in container
$("html,body").hide().fadeIn(1000);
	// delay the typing start
delayType($('.element'),[
		"\"student, writer, coder, avid reader, lover of all kinds of creativity. ^1000passionate about learning. always open to discussion (and of course, job offers).\""
		],1000);


// ANIMATIONS AND EVENT LISTENERS


// FUNCTION DECLARATIONS
	// faux blinking cursor
function cursorBlink(){
	if (on){
		$(".cursor").hide();
		on = !on
	}
	else {
		$(".cursor").show();
		on = !on
	}
}
	// type animation of [text] after [time] delay
function delayType(obj, text, time){
	setTimeout(function(){
		obj.typed({
			strings: text, typespeed: 3
		});
	}, time)
}
	// displays [obj] after [time] delay
function delayShow(obj, time){
	setTimeout(function(){
		obj.css("opacity","1");
	}, time)
}
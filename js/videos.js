// Videos (youtube API and all)

// Load the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/player_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player1, player1c, player2, player3, player4, player5, player5c; 

var muteSlider = function() {
	$(".clone").find(".roundVideo").each(function(){
		var vidID = $(this).find('iframe').attr("id");
		var player = new YT.Player(vidID, {
		events: {
			'onReady': onPlayerReady
			}
		});
 	});
}

function onYouTubeIframeAPIReady() { 

	player1 = new YT.Player("vid1", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'playsinline':1, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});

	player1c = new YT.Player("vid1_clone", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'playsinline':1, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});

	player2 = new YT.Player("vid2", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'playsinline':1, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});

	player3 = new YT.Player("vid3", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'playsinline':1, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});

	player4 = new YT.Player("vid4", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'playsinline':1, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});

	player5 = new YT.Player("vid5", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'playsinline':1, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});

	player5c = new YT.Player("vid5_clone", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'playsinline':1, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});
}

var muteAll = function(){
	player1.mute();
	player2.mute();
	player3.mute();
	player4.mute();
	player5.mute();
}

function onPlayerReady(event) {
	event.target.mute();
	muteSlider();
}


$(".mute").click(function(){
	var tar = $(this).parent('.roundVideo').find('iframe').attr("id");
	$(this).toggleClass("unmuted");
	switch(tar){
		case "vid1":
			if(player1.isMuted()){
				player1.unMute();
			}
			else{
				player1.mute();
			}
			break;

		case "vid1_clone":
			if(player1c.isMuted()){
				player1c.unMute();
			}
			else{
				player1c.mute();
			}
			break;

		case "vid2":
			if(player2.isMuted()){
				player2.unMute();
			}
			else{
				player2.mute();
			}
			break;

		case "vid3":
			if(player3.isMuted()){
				player3.unMute();
			}
			else{
				player3.mute();
			}
			break;

		case "vid4":
			if(player4.isMuted()){
				player4.unMute();
			}
			else{
				player4.mute();
			}
			break;

		case "vid5":
			if(player5.isMuted()){
				player5.unMute();
			}
			else{
				player5.mute();
			}
			break;

		case "vid5_clone":
			if(player5c.isMuted()){
				player5c.unMute();
			}
			else{
				player5c.mute();
			}
			break;
	}
})



/*$(".mute").click(function(){
	//console.log(player);
	var num = $(this).next("iframe").attr("id").split("vid");
	var ytplayer = players[num[1]-1];
	console.log(ytplayer);
	if(ytplayer.isMuted()){
		ytplayer.unMute();
	}
	else{
		ytplayer.mute();
	}
})*/

;

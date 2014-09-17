// Videos (youtube API and all)

// Load the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/player_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player1, player2, player3, player4;
var featured; 

function onYouTubeIframeAPIReady() { 

	featured = new YT.Player("featured", {
		videoId: 'bpOSxM0rNPM',
		playerVars: { 'controls' : 0, 'showinfo':0, 'autoplay':1, 'loop':1, 'modestbranding':1, 'rel':0, 'fs':0 },
		events: {
			'onReady': onPlayerReady
		}
	});

	player1 = new YT.Player("vid1", {
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
}

var muteAll = function(){
	player1.mute();
	player2.mute();
	player3.mute();
	player4.mute();
	featured.mute();
}

function onPlayerReady(event) {
	event.target.mute();
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

		case "featured":
			if(featured.isMuted()){
				featured.unMute();
			}
			else{
				featured.mute();
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


;

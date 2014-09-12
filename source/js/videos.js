// Videos (youtube API and all)

var muteVideos = function() {
	$(".roundVideo").each(function(){
		var vidID = $(this).find('iframe').attr("id");
		console.log(vidID);
		player = new YT.Player(vidID, {
		events: {
			'onReady': onPlayerReady
			}
		});
	});
}


function onYouTubeIframeAPIReady() { 
	muteVideos();
}

function onPlayerReady(event) {
	event.target.mute();
}
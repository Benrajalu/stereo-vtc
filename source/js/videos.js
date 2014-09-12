// Videos (youtube API and all)

var defineVideos = function() {
	$(".roundVideo").each(function(){
		var vidID = $(this).find('iframe').attr("id");
		var player = new YT.Player(vidID, {
		events: {
			'onReady': onPlayerReady
			}
		});
	});
}


function onYouTubeIframeAPIReady() { 
	defineVideos();
}

function onPlayerReady(event) {
	event.target.mute();
}



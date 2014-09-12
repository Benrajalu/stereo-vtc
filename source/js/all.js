/*global $:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

$(window).load(function () {

	// Slider
		$("#mainSlider").flexslider({
			slideshow: false,
			video: true,
			controlNav: true, 
			smoothHeight:true,
			animation: "slide", 
			pauseOnHover: true,
			manualControls: "#sliderNav li a",
			start: function(){
				muteVideos();
			}
		});


	// Mobile menu button
		(function(){
			var el = $("#threeLines");

			el.on("click", function(){
			  $(this).toggleClass("active");
			  $("#topNav").toggleClass("open");
			})
		}());

});

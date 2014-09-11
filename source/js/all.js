/*global $:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

$(window).load(function () {
	$("#mainSlider").flexslider({
		controlNav: true, 
		smoothHeight:true,
		animation: "slide", 
		pauseOnHover: true,
		manualControls: "#sliderNav li a"
	});

	(function(){
		var el = $("#threeLines");

		el.on("click", function(){
		  $(this).toggleClass("active");
		  $("#topNav").toggleClass("open");
		})
	}());

});

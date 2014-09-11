/*global $:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

$(window).load(function () {
	$("#mainSlider").flexslider({
		controlNav: true, 
		animation: "slide", 
		pauseOnHover: true,
		manualControls: "#sliderNav li a"
	});

});

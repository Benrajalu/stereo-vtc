/*global $:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

$(window).load(function () {

	// Slider
		$(".flexslider").addClass("ready");
		$("#mainSlider").flexslider({
			slideshow:false,
			video: true,
			touch: true,
			controlNav: true, 
			smoothHeight:true,
			animation: "slide", 
			pauseOnHover: true,
			manualControls: "#sliderNav li a",
			start: function(){
				muteAll();
				muteSlider();
			}, 
			after: function(){
				muteAll();
				muteSlider();
			}
		});

	// Dropdowns
		$(".dropdown").find("dt a").click(function(event){
			event.preventDefault();
			$(this).toggleClass("active");
			$(this).parent('dt').next("dd").slideToggle();
		});

	// Mobile menu button
		(function(){
			var el = $("#threeLines");

			el.on("click", function(){
			  $(this).toggleClass("active");
			  $("#topNav").toggleClass("open");
			})
		}());

	// Horizontal scroll
		var scrollAnimation = function(){
			if($('#sliderNav ul').hasClass("animated")){
				return false;
			}
			else{
				$('#sliderNav ul').stop().animate({
		            scrollLeft: 300
		        }, 500).delay(300).animate({
		            scrollLeft: 0
		        }, 500).addClass("animated");	
			}
		}

		$("#sliderNav ul").perfectScrollbar({
			suppressScrollY: true
		});

		if(Modernizr.mq('only all and (max-width: 1020px)')){
			scrollAnimation();
		}

		$(window).resize(function(){
			$("#sliderNav ul").perfectScrollbar('update');
			if(Modernizr.mq('only all and (max-width: 1020px)')){
				scrollAnimation();
			}
		})

	// Form
		$("#regionSwitch").find(".switch").each(function(){
			var sel = $(this).parent("#regionSwitch").next("#region"),
				tar = $(this).attr("data-value");

			$(this).click(function(){
				if($(this).hasClass("active")){
					return false
				}
				else{
					$(".switch").removeClass("active");
					$(this).addClass("active");
					sel.val(tar);
				}
			})
		})

	// Splitscreen even
		var tieScreens = function(){
			var row = $(".splitScreen.centered"),
				leftHeight =row.find('.row.left').outerHeight(),
				rightHeight = row.find('.row.right').outerHeight();

			if(leftHeight > rightHeight){
				$(row).find('.row.right').outerHeight(leftHeight);
			}
			else{
				$(row).find('.row.left').outerHeight(rightHeight);
			}
		}
		tieScreens();
		$(window).resize(function(){
			tieScreens();
		})
});

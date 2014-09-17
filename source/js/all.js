/*global $:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */
'use strict';

// Smooth local scrolling
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	});

$(window).load(function () {

	// Slider
		$(".flexslider").addClass("ready");
		$("#mainSlider").flexslider({
			itemMargin: 300,
			slideshow:true,
			animationLoop: false,
			video: false,
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

	// Splitscreen toggle
		$("#halfSwitch a").click(function(event){
			event.preventDefault;
			var cl = $(this).attr("data-target"),
				par = $("#halfSwitch").find('ul'),
				tar = $(".rowFluid.splitScreen");

			switch(cl){
				case 'berline':
					par.removeClass("eco").addClass("berline");
					tar.removeClass("eco").addClass("berline");
					break;
				case 'eco':
					par.removeClass("berline").addClass("eco");
					tar.removeClass("berline").addClass("eco");
					break;
			}
		})

	// Animation

		function setAnimHome(){

		///animation enchainées
		var tl = new TimelineMax({delay:0.5, repeat:0,  onComplete:tlFinished});

			setbg($('.animation-chauffeur .chauffeur'));
			tl.from($('.animation-chauffeur .chauffeur'), 0.8, {opacity:0, onComplete:setbg,onCompleteParams:[$('.animation-chauffeur .costar')] })
				.from($('.animation-chauffeur .costar'), 0.8, {delay:1.5,opacity:0, onComplete:setbg,onCompleteParams:[$('.animation-chauffeur .voiture')] })
				.from($('.animation-chauffeur .voiture'), 0.8, {delay:1.5,opacity:0, onComplete:setbg,onCompleteParams:[$('.animation-chauffeur .billey')] })
				.from($('.animation-chauffeur .billey'), 0.8, {delay:1.5,opacity:0 })
				.to($('.animation-chauffeur .billey'), 2, {opacity:1 });//tweenbidon pour ajouter un délai
			
			}

		function tlFinished(){
			//une fois l'animation complétée, ajout de la boucle sur le bg billey
			$('.animation-chauffeur .billey').removeClass("active-elmnt");
			$('.animation-chauffeur .billey').addClass("active-elmntb");
		}


		function setbg(elmnt) {
			elmnt.addClass("active-elmnt");
		}

		function setBerline(){

		TweenMax.from($(".animation-berline .voiture"), 0.8, {marginTop:70,marginLeft:0,delay:0.2,opacity:0 });

		TweenMax.from($(".animation-berline .pin"),1, {marginTop:70,delay:0.3,opacity:0, ease:Bounce.easeOut});

		}

		function setEco(){

		TweenMax.from($(".animation-eco .voiture"), 0.8, {marginTop:90,marginLeft:120,delay:0.2,opacity:0 });

		TweenMax.from($(".animation-eco .pin"),1, {marginTop:70,delay:0.3,opacity:0, ease:Bounce.easeOut});

		}

		setAnimHome();
		setBerline();
		setEco();
	
});

"use strict";$(window).load(function(){$(".flexslider").addClass("ready"),$("#mainSlider").flexslider({slideshow:!1,video:!0,touch:!0,controlNav:!0,smoothHeight:!0,animation:"slide",pauseOnHover:!0,manualControls:"#sliderNav li a",start:function(){muteAll(),muteSlider()},after:function(){muteAll(),muteSlider()}}),$(".dropdown").find("dt a").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).parent("dt").next("dd").slideToggle()}),function(){var e=$("#threeLines");e.on("click",function(){$(this).toggleClass("active"),$("#topNav").toggleClass("open")})}();var e=function(){return $("#sliderNav ul").hasClass("animated")?!1:void $("#sliderNav ul").stop().animate({scrollLeft:300},500).delay(300).animate({scrollLeft:0},500).addClass("animated")};$("#sliderNav ul").perfectScrollbar({suppressScrollY:!0}),Modernizr.mq("only all and (max-width: 1020px)")&&e(),$(window).resize(function(){$("#sliderNav ul").perfectScrollbar("update"),Modernizr.mq("only all and (max-width: 1020px)")&&e()}),$("#regionSwitch").find(".switch").each(function(){var e=$(this).parent("#regionSwitch").next("#region"),t=$(this).attr("data-value");$(this).click(function(){return $(this).hasClass("active")?!1:($(".switch").removeClass("active"),$(this).addClass("active"),e.val(t),void 0)})});var t=function(){var e=$(".splitScreen.centered"),t=e.find(".row.left").outerHeight(),n=e.find(".row.right").outerHeight();t>n?$(e).find(".row.right").outerHeight(t):$(e).find(".row.left").outerHeight(n)};t(),$(window).resize(function(){t()})});
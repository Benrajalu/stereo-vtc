$(function(){var e=$("[rel~=tooltip]"),t=!1,n=!1;e.bind("mouseenter",function(){if(t=$(this),tip=t.attr("title"),n=$('<div id="tooltip"></div>'),!tip||""==tip)return!1;t.removeAttr("title"),n.css("opacity",0).html(tip).appendTo("body");var e=function(){if($(window).width()<1.5*n.outerWidth()?n.css("max-width",$(window).width()/2):n.css("max-width",340),t.hasClass("left")){var e=t.offset().left+t.outerWidth()+15,a=t.offset().top-n.outerHeight()/2-2;if(n.addClass("leftMost"),e+n.outerWidth()>$(window).width()){var e=t.offset().left+t.outerWidth()/2-n.outerWidth()/2,a=t.offset().top-n.outerHeight()-20;n.removeClass("leftMost")}if(e+n.outerWidth()>$(window).width()?(e=t.offset().left-n.outerWidth()+t.outerWidth()/2+20,n.addClass("right")):n.removeClass("right"),0>a){var a=t.offset().top+t.outerHeight();n.addClass("top")}else n.removeClass("top");n.css({left:e,top:a}).animate({top:"+=10",opacity:1},50)}else{var e=t.offset().left+t.outerWidth()/2-n.outerWidth()/2,a=t.offset().top-n.outerHeight()-20;if(0>e?(e=t.offset().left+t.outerWidth()/2-20,n.addClass("left")):n.removeClass("left"),e+n.outerWidth()>$(window).width()?(e=t.offset().left-n.outerWidth()+t.outerWidth()/2+20,n.addClass("right")):n.removeClass("right"),0>a){var a=t.offset().top+t.outerHeight();n.addClass("top")}else n.removeClass("top");n.css({left:e,top:a}).animate({top:"+=10",opacity:1},50)}};e(),$(window).resize(e);var a=function(){n.animate({top:"-=10",opacity:0},50,function(){$(this).remove()}),t.attr("title",tip)};t.bind("mouseleave",a),n.bind("click",a)})});
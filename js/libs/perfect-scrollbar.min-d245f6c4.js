/*! perfect-scrollbar - v0.4.11
* http://noraesae.github.com/perfect-scrollbar/
* Copyright (c) 2014 Hyeonje Alex Jun; Licensed MIT */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";var t={wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},n=function(){var e=0;return function(){var t=e;return e+=1,".perfect-scrollbar-"+t}}();e.fn.perfectScrollbar=function(a,r){return this.each(function(){var i=e.extend(!0,{},t),o=e(this);if("object"==typeof a?e.extend(!0,i,a):r=a,"update"===r)return o.data("perfect-scrollbar-update")&&o.data("perfect-scrollbar-update")(),o;if("destroy"===r)return o.data("perfect-scrollbar-destroy")&&o.data("perfect-scrollbar-destroy")(),o;if(o.data("perfect-scrollbar"))return o.data("perfect-scrollbar");o.addClass("ps-container");var s,l,c,d,u,p,m,v,f,h,g=e("<div class='ps-scrollbar-x-rail'></div>").appendTo(o),y=e("<div class='ps-scrollbar-y-rail'></div>").appendTo(o),b=e("<div class='ps-scrollbar-x'></div>").appendTo(g),S=e("<div class='ps-scrollbar-y'></div>").appendTo(y),w=parseInt(g.css("bottom"),10),x=w===w,P=x?null:parseInt(g.css("top"),10),T=parseInt(y.css("right"),10),C=T===T,N=C?null:parseInt(y.css("left"),10),M="rtl"===o.css("direction"),I=n(),k=parseInt(g.css("borderLeftWidth"),10)+parseInt(g.css("borderRightWidth"),10),L=parseInt(g.css("borderTopWidth"),10)+parseInt(g.css("borderBottomWidth"),10),E=function(e,t){var n=e+t,a=d-f;h=0>n?0:n>a?a:n;var r=parseInt(h*(p-d)/(d-f),10);o.scrollTop(r)},D=function(e,t){var n=e+t,a=c-m;v=0>n?0:n>a?a:n;var r=parseInt(v*(u-c)/(c-m),10);o.scrollLeft(r)},O=function(e){return i.minScrollbarLength&&(e=Math.max(e,i.minScrollbarLength)),i.maxScrollbarLength&&(e=Math.min(e,i.maxScrollbarLength)),e},W=function(){var e={width:c,display:s?"inherit":"none"};e.left=M?o.scrollLeft()+c-u:o.scrollLeft(),x?e.bottom=w-o.scrollTop():e.top=P+o.scrollTop(),g.css(e);var t={top:o.scrollTop(),height:d,display:l?"inherit":"none"};C?t.right=M?u-o.scrollLeft()-T-S.outerWidth():T-o.scrollLeft():t.left=M?o.scrollLeft()+2*c-u-N-S.outerWidth():N+o.scrollLeft(),y.css(t),b.css({left:v,width:m-k}),S.css({top:h,height:f-L}),s?o.addClass("ps-active-x"):o.removeClass("ps-active-x"),l?o.addClass("ps-active-y"):o.removeClass("ps-active-y")},A=function(){c=i.includePadding?o.innerWidth():o.width(),d=i.includePadding?o.innerHeight():o.height(),u=o.prop("scrollWidth"),p=o.prop("scrollHeight"),!i.suppressScrollX&&u>c+i.scrollXMarginOffset?(s=!0,m=O(parseInt(c*c/u,10)),v=parseInt(o.scrollLeft()*(c-m)/(u-c),10)):(s=!1,m=0,v=0,o.scrollLeft(0)),!i.suppressScrollY&&p>d+i.scrollYMarginOffset?(l=!0,f=O(parseInt(d*d/p,10)),h=parseInt(o.scrollTop()*(d-f)/(p-d),10)):(l=!1,f=0,h=0,o.scrollTop(0)),h>=d-f&&(h=d-f),v>=c-m&&(v=c-m),W()},R=function(){var t,n;b.bind("mousedown"+I,function(e){n=e.pageX,t=b.position().left,g.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+I,function(e){g.hasClass("in-scrolling")&&(D(t,e.pageX-n),A(),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+I,function(){g.hasClass("in-scrolling")&&g.removeClass("in-scrolling")}),t=n=null},H=function(){var t,n;S.bind("mousedown"+I,function(e){n=e.pageY,t=S.position().top,y.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+I,function(e){y.hasClass("in-scrolling")&&(E(t,e.pageY-n),A(),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+I,function(){y.hasClass("in-scrolling")&&y.removeClass("in-scrolling")}),t=n=null},B=function(e,t){var n=o.scrollTop();if(0===e){if(!l)return!1;if(0===n&&t>0||n>=p-d&&0>t)return!i.wheelPropagation}var a=o.scrollLeft();if(0===t){if(!s)return!1;if(0===a&&0>e||a>=u-c&&e>0)return!i.wheelPropagation}return!0},z=function(){var e=!1,t=function(e){var t=e.originalEvent.deltaX,n=-1*e.originalEvent.deltaY;return(void 0===t||void 0===n)&&(t=-1*e.originalEvent.wheelDeltaX/6,n=e.originalEvent.wheelDeltaY/6),[t,n]},n=function(n){var a=t(n),r=a[0],c=a[1];e=!1,i.useBothWheelAxes?l&&!s?(o.scrollTop(c?o.scrollTop()-c*i.wheelSpeed:o.scrollTop()+r*i.wheelSpeed),e=!0):s&&!l&&(o.scrollLeft(r?o.scrollLeft()+r*i.wheelSpeed:o.scrollLeft()-c*i.wheelSpeed),e=!0):(o.scrollTop(o.scrollTop()-c*i.wheelSpeed),o.scrollLeft(o.scrollLeft()+r*i.wheelSpeed)),A(),e=e||B(r,c),e&&(n.stopPropagation(),n.preventDefault())};void 0!==window.onwheel?o.bind("wheel"+I,n):void 0!==window.onmousewheel&&o.bind("mousewheel"+I,n),o.bind("MozMousePixelScroll"+I,function(t){e&&t.preventDefault()})},_=function(){var t=!1;o.bind("mouseenter"+I,function(){t=!0}),o.bind("mouseleave"+I,function(){t=!1});var n=!1;e(document).bind("keydown"+I,function(a){if(!(a.isDefaultPrevented&&a.isDefaultPrevented()||!t||e(document.activeElement).is(":input,[contenteditable]"))){var r=0,i=0;switch(a.which){case 37:r=-30;break;case 38:i=30;break;case 39:r=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=-d;break;case 36:i=d;break;default:return}o.scrollTop(o.scrollTop()-i),o.scrollLeft(o.scrollLeft()+r),n=B(r,i),n&&a.preventDefault()}})},Y=function(){var e=function(e){e.stopPropagation()};S.bind("click"+I,e),y.bind("click"+I,function(e){var t=parseInt(f/2,10),n=e.pageY-y.offset().top-t,a=d-f,r=n/a;0>r?r=0:r>1&&(r=1),o.scrollTop((p-d)*r)}),b.bind("click"+I,e),g.bind("click"+I,function(e){var t=parseInt(m/2,10),n=e.pageX-g.offset().left-t,a=c-m,r=n/a;0>r?r=0:r>1&&(r=1),o.scrollLeft((u-c)*r)})},$=function(){var t=function(e,t){o.scrollTop(o.scrollTop()-t),o.scrollLeft(o.scrollLeft()-e),A()},n={},a=0,r={},i=null,s=!1;e(window).bind("touchstart"+I,function(){s=!0}),e(window).bind("touchend"+I,function(){s=!1}),o.bind("touchstart"+I,function(e){var t=e.originalEvent.targetTouches[0];n.pageX=t.pageX,n.pageY=t.pageY,a=(new Date).getTime(),null!==i&&clearInterval(i),e.stopPropagation()}),o.bind("touchmove"+I,function(e){if(!s&&1===e.originalEvent.targetTouches.length){var i=e.originalEvent.targetTouches[0],o={};o.pageX=i.pageX,o.pageY=i.pageY;var l=o.pageX-n.pageX,c=o.pageY-n.pageY;t(l,c),n=o;var d=(new Date).getTime(),u=d-a;u>0&&(r.x=l/u,r.y=c/u,a=d),e.preventDefault()}}),o.bind("touchend"+I,function(){clearInterval(i),i=setInterval(function(){return.01>Math.abs(r.x)&&.01>Math.abs(r.y)?void clearInterval(i):(t(30*r.x,30*r.y),r.x*=.8,void(r.y*=.8))},10)})},V=function(){o.bind("scroll"+I,function(){A()})},G=function(){o.unbind(I),e(window).unbind(I),e(document).unbind(I),o.data("perfect-scrollbar",null),o.data("perfect-scrollbar-update",null),o.data("perfect-scrollbar-destroy",null),b.remove(),S.remove(),g.remove(),y.remove(),g=y=b=S=s=l=c=d=u=p=m=v=w=x=P=f=h=T=C=N=M=I=null},q=function(t){o.addClass("ie").addClass("ie"+t);var n=function(){var t=function(){e(this).addClass("hover")},n=function(){e(this).removeClass("hover")};o.bind("mouseenter"+I,t).bind("mouseleave"+I,n),g.bind("mouseenter"+I,t).bind("mouseleave"+I,n),y.bind("mouseenter"+I,t).bind("mouseleave"+I,n),b.bind("mouseenter"+I,t).bind("mouseleave"+I,n),S.bind("mouseenter"+I,t).bind("mouseleave"+I,n)},a=function(){W=function(){var e={left:v+o.scrollLeft(),width:m};x?e.bottom=w:e.top=P,b.css(e);var t={top:h+o.scrollTop(),height:f};C?t.right=T:t.left=N,S.css(t),b.hide().show(),S.hide().show()}};6===t&&(n(),a())},X="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,F=function(){var e=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);e&&"msie"===e[1]&&q(parseInt(e[2],10)),A(),V(),R(),H(),Y(),z(),X&&$(),i.useKeyboard&&_(),o.data("perfect-scrollbar",o),o.data("perfect-scrollbar-update",A),o.data("perfect-scrollbar-destroy",G)};return F(),o})}});
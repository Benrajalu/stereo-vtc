/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function a(e){b.cssText=e}function r(e,t){return a(P.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var a in e){var r=e[a];if(!o(r,"-")&&b[r]!==n)return"pfx"==t?r:!0}return!1}function l(e,t,a){for(var r in e){var o=t[e[r]];if(o!==n)return a===!1?e[r]:i(o,"function")?o.bind(a||t):o}return!1}function c(e,t,n){var a=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+T.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?s(r,t):(r=(e+" "+N.join(a+" ")+a).split(" "),l(r,t,n))}function u(){v.input=function(n){for(var a=0,r=n.length;r>a;a++)k[n[a]]=!!(n[a]in S);return k.list&&(k.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),k}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),v.inputtypes=function(e){for(var a,r,i,o=0,s=e.length;s>o;o++)S.setAttribute("type",r=e[o]),a="text"!==S.type,a&&(S.value=x,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&S.style.WebkitAppearance!==n?(h.appendChild(S),i=t.defaultView,a=i.getComputedStyle&&"textfield"!==i.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,h.removeChild(S)):/^(search|tel)$/.test(r)||(a=/^(url|email)$/.test(r)?S.checkValidity&&S.checkValidity()===!1:S.value!=x)),I[e[o]]=!!a;return I}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,p,m="2.8.3",v={},f=!0,h=t.documentElement,g="modernizr",y=t.createElement(g),b=y.style,S=t.createElement("input"),x=":)",w={}.toString,P=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",T=C.split(" "),N=C.toLowerCase().split(" "),M={svg:"http://www.w3.org/2000/svg"},E={},I={},k={},L=[],D=L.slice,O=function(e,n,a,r){var i,o,s,l,c=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(a,10))for(;a--;)s=t.createElement("div"),s.id=r?r[a]:g+(a+1),c.appendChild(s);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),c.id=g,(u?c:d).innerHTML+=i,d.appendChild(c),u||(d.style.background="",d.style.overflow="hidden",l=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),o=n(c,e),u?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),h.style.overflow=l),!!o},W=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var a;return O("@media "+t+" { #"+g+" { position: absolute; } }",function(t){a="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),a},A=function(){function e(e,r){r=r||t.createElement(a[e]||"div"),e="on"+e;var o=e in r;return o||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),o=i(r[e],"function"),i(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,o}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),R={}.hasOwnProperty;p=i(R,"undefined")||i(R.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return R.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),a=function(){if(this instanceof a){var r=function(){};r.prototype=t.prototype;var i=new r,o=t.apply(i,n.concat(D.call(arguments)));return Object(o)===o?o:i}return t.apply(e,n.concat(D.call(arguments)))};return a}),E.flexbox=function(){return c("flexWrap")},E.flexboxlegacy=function(){return c("boxDirection")},E.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},E.canvastext=function(){return!(!v.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},E.webgl=function(){return!!e.WebGLRenderingContext},E.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:O(["@media (",P.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},E.geolocation=function(){return"geolocation"in navigator},E.postmessage=function(){return!!e.postMessage},E.websqldatabase=function(){return!!e.openDatabase},E.indexedDB=function(){return!!c("indexedDB",e)},E.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},E.history=function(){return!(!e.history||!history.pushState)},E.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},E.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},E.rgba=function(){return a("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},E.hsla=function(){return a("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},E.multiplebgs=function(){return a("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},E.backgroundsize=function(){return c("backgroundSize")},E.borderimage=function(){return c("borderImage")},E.borderradius=function(){return c("borderRadius")},E.boxshadow=function(){return c("boxShadow")},E.textshadow=function(){return""===t.createElement("div").style.textShadow},E.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},E.cssanimations=function(){return c("animationName")},E.csscolumns=function(){return c("columnCount")},E.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return a((e+"-webkit- ".split(" ").join(t+e)+P.join(n+e)).slice(0,-e.length)),o(b.backgroundImage,"gradient")},E.cssreflections=function(){return c("boxReflect")},E.csstransforms=function(){return!!c("transform")},E.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in h.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},E.csstransitions=function(){return c("transition")},E.fontface=function(){var e;return O('@font-face {font-family:"font";src:url("https://")}',function(n,a){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(a.split(" ")[0])}),e},E.generatedcontent=function(){var e;return O(["#",g,"{font:0/0 a}#",g,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},E.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return n},E.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n},E.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},E.webworkers=function(){return!!e.Worker},E.applicationcache=function(){return!!e.applicationCache},E.svg=function(){return!!t.createElementNS&&!!t.createElementNS(M.svg,"svg").createSVGRect},E.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==M.svg},E.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(M.svg,"animate")))},E.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(M.svg,"clipPath")))};for(var H in E)p(E,H)&&(d=H.toLowerCase(),v[d]=E[H](),L.push((v[d]?"":"no-")+d));return v.input||u(),v.addTest=function(e,t){if("object"==typeof e)for(var a in e)p(e,a)&&v.addTest(a,e[a]);else{if(e=e.toLowerCase(),v[e]!==n)return v;t="function"==typeof t?t():t,"undefined"!=typeof f&&f&&(h.className+=" "+(t?"":"no-")+e),v[e]=t}return v},a(""),y=S=null,function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=g[e[f]];return t||(t={},h++,e[f]=h,g[h]=t),t}function i(e,n,a){if(n||(n=t),u)return n.createElement(e);a||(a=r(n));var i;return i=a.cache[e]?a.cache[e].cloneNode():v.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!i.canHaveChildren||m.test(e)||i.tagUrn?i:a.frag.appendChild(i)}function o(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||r(e);for(var i=n.frag.cloneNode(),o=0,s=a(),l=s.length;l>o;o++)i.createElement(s[o]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var a=r(e);return!y.shivCSS||c||a.hasCSS||(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,a),e}var c,u,d="3.7.0",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,v=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",h=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,u=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:o};e.html5=y,l(t)}(this,t),v._version=m,v._prefixes=P,v._domPrefixes=N,v._cssomPrefixes=T,v.mq=W,v.hasEvent=A,v.testProp=function(e){return s([e])},v.testAllProps=c,v.testStyles=O,v.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+L.join(" "):""),v}(this,this.document);
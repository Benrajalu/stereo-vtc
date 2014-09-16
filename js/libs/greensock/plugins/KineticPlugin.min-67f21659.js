/*!
 * VERSION: 0.5.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e,t,n,i,r={scale:1,shadowOffset:1,fillPatternOffset:1,offset:1,fill:2,stroke:2,shadowColor:2},s={},a={},o=/(\d|\.)+/g,l=/(?:_cw|_ccw|_short)/,u=_gsScope._gsDefine.globals.com.greensock.plugins,c={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},p=function(e,t,n){return e=0>e?e+1:e>1?e-1:e,0|255*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},h=function(e){if(""===e||null==e||"none"===e)return c.transparent;if(c[e])return c[e];if("number"==typeof e)return[e>>16,255&e>>8,255&e];if("#"===e.charAt(0))return 4===e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),e=parseInt(e.substr(1),16),[e>>16,255&e>>8,255&e];if("hsl"===e.substr(0,3)){e=e.match(o);var t=Number(e[0])%360/360,n=Number(e[1])/100,i=Number(e[2])/100,r=.5>=i?i*(n+1):i+n-i*n,s=2*i-r;return e.length>3&&(e[3]=Number(e[3])),e[0]=p(t+1/3,s,r),e[1]=p(t,s,r),e[2]=p(t-1/3,s,r),e}for(var a=e.match(o)||c.transparent,l=a.length;--l>-1;)a[l]=Number(a[l]);return a},d=function(e,t,n,i){this.getter=t,this.setter=n;var r=h(e[t]());this.proxy={r:r[0],g:r[1],b:r[2],a:r.length>3?r[3]:1},i&&(this._next=i,i._prev=this)},f=[],m=function(){var n=f.length;if(0!==n){for(;--n>-1;)f[n].draw(),f[n]._gsDraw=!1;f.length=0}else e.removeEventListener("tick",m),t=!1},g=function(e,t){var n="x"===t?"y":"x",i="_gs_"+e;s[e]=function(){return this["get"+e]()[t]},a[e]=function(r){var s=this["get"+e](),a=this[i];return a||(a=this[i]={}),a[t]=r,a[n]=s[n],this[e](a),this}},v=function(e,t){return function(n){return arguments.length?t(n):e()}},y=function(e,t){var n,i,o,l,u=[];for(n in t)if(i=t[n],"bezier"!==n&&"autoDraw"!==n&&"set"!==n.substr(0,3)&&void 0===e[n]&&(u.push(n),delete t[n],n="set"+n.charAt(0).toUpperCase()+n.substr(1),t[n]=i),r[n]){if(1===r[n])return t[n+"X"]=t[n+"Y"]=t[n],delete t[n],y(e,t);!e[n]&&a[n]&&(l=e.prototype||e,l[n]=v(s[n],a[n]))}else if("bezier"===n)for(i=i instanceof Array?i:i.values||[],o=i.length;--o>-1;)0===o?u=u.concat(y(e,i[o])):y(e,i[o]);return u},_=function(e){var t,n={};for(t in e)n[t]=e[t];return n};for(i in r)1===r[i]&&(g(i,"x"),g(i,"y"));var b=_gsScope._gsDefine.plugin({propName:"kinetic",API:2,version:"0.5.2",init:function(t,i,s){var a,o,c,p,f,m;if(!n&&(n=5>parseInt(Kinetic.version.split(".")[0],10)))throw"The GSAP KineticPlugin that's loaded requires KineticJS version 5.0.0 or later. For earlier versions, use KineticPlugin from GSAP 1.11.3 or earlier.";this._overwriteProps=y(t,i),this._target=t,this._layer=i.autoDraw!==!1?t.getLayer():null,!e&&this._layer&&(e=s.constructor.ticker);for(a in i){if(o=i[a],2===r[a])p=this._firstSP=new d(t,a,a,this._firstSP),o=h(o),p.proxy.r!==o[0]&&this._addTween(p.proxy,"r",p.proxy.r,o[0],a),p.proxy.g!==o[1]&&this._addTween(p.proxy,"g",p.proxy.g,o[1],a),p.proxy.b!==o[2]&&this._addTween(p.proxy,"b",p.proxy.b,o[2],a),(o.length>3||1!==p.proxy.a)&&p.proxy.a!==o[3]&&this._addTween(p.proxy,"a",p.proxy.a,o.length>3?o[3]:1,a);else if("bezier"===a){if(f=u.BezierPlugin,!f)throw"BezierPlugin not loaded";f=this._bezier=new f,"object"==typeof o&&o.autoRotate===!0&&(o.autoRotate=["x","y","rotation",0,!1]),f._onInitTween(t,o,s),this._overwriteProps=this._overwriteProps.concat(f._overwriteProps),this._addTween(f,"setRatio",0,1,a)}else if("rotation"!==a&&"rotationDeg"!==a||"string"!=typeof o||!l.test(o))o instanceof Array?this._initArrayTween(t[a](),o,a):"autoDraw"!==a&&(c="get"+a.substr(3),this._addTween(t,a,("function"==typeof t[a]?t["get"!==c&&"function"==typeof t[c]?c:a]():t[a])||0,o,a));else{if(m=u.DirectionalRotationPlugin,!m)throw"DirectionalRotationPlugin not loaded";m=this._directionalRotation=new m,c={useRadians:!1},c[a]=o,m._onInitTween(t,c,s),this._addTween(m,"setRatio",0,1,a)}this._overwriteProps.push(a)}return!0},kill:function(e){return e=_(e),y(this._target,e),this._bezier&&this._bezier._kill(e),this._directionalRotation&&this._directionalRotation._kill(e),this._super._kill.call(this,e)},round:function(e,t){return e=_(e),y(this._target,e),this._bezier&&this._bezier._roundProps(e,t),this._super._roundProps.call(this,e,t)},set:function(n){this._super.setRatio.call(this,n);var i,r,s,a,o,l,u=this._firstSP,c=this._layer,p=this._arrayTweens;if(u)for(o=this._target;u;)l=u.proxy,o[u.setter]((1!==l.a?"rgba(":"rgb(")+(0|l.r)+", "+(0|l.g)+", "+(0|l.b)+(1!==l.a?", "+l.a:"")+")"),u=u._next;if(p){for(i=p.length;--i>-1;)r=p[i],a=r.s+r.c*n,r.a[r.i]=1e-6>a&&a>-1e-6?0:a;for(s in this._arrayProps)this._target[s](this._arrayProps[s])}c&&!c._gsDraw&&(f.push(c),c._gsDraw=!0,t||(e.addEventListener("tick",m),t=!0))}});i=b.prototype,i._initArrayTween=function(e,t,n){this._arrayTweens||(this._arrayTweens=[],this._arrayProps={});for(var i,r,s=e.length,a=this._arrayTweens;--s>-1;)i=e[s],r=t[s],i!==r&&a.push({a:e,i:s,s:i,c:r-i});a.length&&(this._arrayProps[n]=e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
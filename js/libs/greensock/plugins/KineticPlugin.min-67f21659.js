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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t,e,n,i,r={scale:1,shadowOffset:1,fillPatternOffset:1,offset:1,fill:2,stroke:2,shadowColor:2},s={},a={},o=/(\d|\.)+/g,l=/(?:_cw|_ccw|_short)/,u=_gsScope._gsDefine.globals.com.greensock.plugins,c={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},p=function(t,e,n){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(n-e)*t:.5>t?n:2>3*t?e+6*(n-e)*(2/3-t):e)+.5},h=function(t){if(""===t||null==t||"none"===t)return c.transparent;if(c[t])return c[t];if("number"==typeof t)return[t>>16,255&t>>8,255&t];if("#"===t.charAt(0))return 4===t.length&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t];if("hsl"===t.substr(0,3)){t=t.match(o);var e=Number(t[0])%360/360,n=Number(t[1])/100,i=Number(t[2])/100,r=.5>=i?i*(n+1):i+n-i*n,s=2*i-r;return t.length>3&&(t[3]=Number(t[3])),t[0]=p(e+1/3,s,r),t[1]=p(e,s,r),t[2]=p(e-1/3,s,r),t}for(var a=t.match(o)||c.transparent,l=a.length;--l>-1;)a[l]=Number(a[l]);return a},d=function(t,e,n,i){this.getter=e,this.setter=n;var r=h(t[e]());this.proxy={r:r[0],g:r[1],b:r[2],a:r.length>3?r[3]:1},i&&(this._next=i,i._prev=this)},f=[],m=function(){var n=f.length;if(0!==n){for(;--n>-1;)f[n].draw(),f[n]._gsDraw=!1;f.length=0}else t.removeEventListener("tick",m),e=!1},g=function(t,e){var n="x"===e?"y":"x",i="_gs_"+t;s[t]=function(){return this["get"+t]()[e]},a[t]=function(r){var s=this["get"+t](),a=this[i];return a||(a=this[i]={}),a[e]=r,a[n]=s[n],this[t](a),this}},v=function(t,e){return function(n){return arguments.length?e(n):t()}},y=function(t,e){var n,i,o,l,u=[];for(n in e)if(i=e[n],"bezier"!==n&&"autoDraw"!==n&&"set"!==n.substr(0,3)&&void 0===t[n]&&(u.push(n),delete e[n],n="set"+n.charAt(0).toUpperCase()+n.substr(1),e[n]=i),r[n]){if(1===r[n])return e[n+"X"]=e[n+"Y"]=e[n],delete e[n],y(t,e);!t[n]&&a[n]&&(l=t.prototype||t,l[n]=v(s[n],a[n]))}else if("bezier"===n)for(i=i instanceof Array?i:i.values||[],o=i.length;--o>-1;)0===o?u=u.concat(y(t,i[o])):y(t,i[o]);return u},_=function(t){var e,n={};for(e in t)n[e]=t[e];return n};for(i in r)1===r[i]&&(g(i,"x"),g(i,"y"));var b=_gsScope._gsDefine.plugin({propName:"kinetic",API:2,version:"0.5.2",init:function(e,i,s){var a,o,c,p,f,m;if(!n&&(n=5>parseInt(Kinetic.version.split(".")[0],10)))throw"The GSAP KineticPlugin that's loaded requires KineticJS version 5.0.0 or later. For earlier versions, use KineticPlugin from GSAP 1.11.3 or earlier.";this._overwriteProps=y(e,i),this._target=e,this._layer=i.autoDraw!==!1?e.getLayer():null,!t&&this._layer&&(t=s.constructor.ticker);for(a in i){if(o=i[a],2===r[a])p=this._firstSP=new d(e,a,a,this._firstSP),o=h(o),p.proxy.r!==o[0]&&this._addTween(p.proxy,"r",p.proxy.r,o[0],a),p.proxy.g!==o[1]&&this._addTween(p.proxy,"g",p.proxy.g,o[1],a),p.proxy.b!==o[2]&&this._addTween(p.proxy,"b",p.proxy.b,o[2],a),(o.length>3||1!==p.proxy.a)&&p.proxy.a!==o[3]&&this._addTween(p.proxy,"a",p.proxy.a,o.length>3?o[3]:1,a);else if("bezier"===a){if(f=u.BezierPlugin,!f)throw"BezierPlugin not loaded";f=this._bezier=new f,"object"==typeof o&&o.autoRotate===!0&&(o.autoRotate=["x","y","rotation",0,!1]),f._onInitTween(e,o,s),this._overwriteProps=this._overwriteProps.concat(f._overwriteProps),this._addTween(f,"setRatio",0,1,a)}else if("rotation"!==a&&"rotationDeg"!==a||"string"!=typeof o||!l.test(o))o instanceof Array?this._initArrayTween(e[a](),o,a):"autoDraw"!==a&&(c="get"+a.substr(3),this._addTween(e,a,("function"==typeof e[a]?e["get"!==c&&"function"==typeof e[c]?c:a]():e[a])||0,o,a));else{if(m=u.DirectionalRotationPlugin,!m)throw"DirectionalRotationPlugin not loaded";m=this._directionalRotation=new m,c={useRadians:!1},c[a]=o,m._onInitTween(e,c,s),this._addTween(m,"setRatio",0,1,a)}this._overwriteProps.push(a)}return!0},kill:function(t){return t=_(t),y(this._target,t),this._bezier&&this._bezier._kill(t),this._directionalRotation&&this._directionalRotation._kill(t),this._super._kill.call(this,t)},round:function(t,e){return t=_(t),y(this._target,t),this._bezier&&this._bezier._roundProps(t,e),this._super._roundProps.call(this,t,e)},set:function(n){this._super.setRatio.call(this,n);var i,r,s,a,o,l,u=this._firstSP,c=this._layer,p=this._arrayTweens;if(u)for(o=this._target;u;)l=u.proxy,o[u.setter]((1!==l.a?"rgba(":"rgb(")+(0|l.r)+", "+(0|l.g)+", "+(0|l.b)+(1!==l.a?", "+l.a:"")+")"),u=u._next;if(p){for(i=p.length;--i>-1;)r=p[i],a=r.s+r.c*n,r.a[r.i]=1e-6>a&&a>-1e-6?0:a;for(s in this._arrayProps)this._target[s](this._arrayProps[s])}c&&!c._gsDraw&&(f.push(c),c._gsDraw=!0,e||(t.addEventListener("tick",m),e=!0))}});i=b.prototype,i._initArrayTween=function(t,e,n){this._arrayTweens||(this._arrayTweens=[],this._arrayProps={});for(var i,r,s=t.length,a=this._arrayTweens;--s>-1;)i=t[s],r=e[s],i!==r&&a.push({a:t,i:s,s:i,c:r-i});a.length&&(this._arrayProps[n]=t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
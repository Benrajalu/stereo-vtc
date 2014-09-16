/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(e){var t,n,i,r=_gsScope.GreenSockGlobals||_gsScope,o=r.com.greensock,a=2*Math.PI,s=Math.PI/2,l=o._class,c=function(t,n){var i=l("easing."+t,function(){},!0),r=i.prototype=new e;return r.constructor=i,r.getRatio=n,i},u=e.register||function(){},d=function(e,t,n,i){var r=l("easing."+e,{easeOut:new t,easeIn:new n,easeInOut:new i},!0);return u(r,e),r},p=function(e,t,n){this.t=e,this.v=t,n&&(this.next=n,n.prev=this,this.c=n.v-t,this.gap=n.t-e)},f=function(t,n){var i=l("easing."+t,function(e){this._p1=e||0===e?e:1.70158,this._p2=1.525*this._p1},!0),r=i.prototype=new e;return r.constructor=i,r.getRatio=n,r.config=function(e){return new i(e)},i},h=d("Back",f("BackOut",function(e){return(e-=1)*e*((this._p1+1)*e+this._p1)+1}),f("BackIn",function(e){return e*e*((this._p1+1)*e-this._p1)}),f("BackInOut",function(e){return 1>(e*=2)?.5*e*e*((this._p2+1)*e-this._p2):.5*((e-=2)*e*((this._p2+1)*e+this._p2)+2)})),m=l("easing.SlowMo",function(e,t,n){t=t||0===t?t:.7,null==e?e=.7:e>1&&(e=1),this._p=1!==e?t:0,this._p1=(1-e)/2,this._p2=e,this._p3=this._p1+this._p2,this._calcEnd=n===!0},!0),v=m.prototype=new e;return v.constructor=m,v.getRatio=function(e){var t=e+(.5-e)*this._p;return this._p1>e?this._calcEnd?1-(e=1-e/this._p1)*e:t-(e=1-e/this._p1)*e*e*e*t:e>this._p3?this._calcEnd?1-(e=(e-this._p3)/this._p1)*e:t+(e-t)*(e=(e-this._p3)/this._p1)*e*e*e:this._calcEnd?1:t},m.ease=new m(.7,.7),v.config=m.config=function(e,t,n){return new m(e,t,n)},t=l("easing.SteppedEase",function(e){e=e||1,this._p1=1/e,this._p2=e+1},!0),v=t.prototype=new e,v.constructor=t,v.getRatio=function(e){return 0>e?e=0:e>=1&&(e=.999999999),(this._p2*e>>0)*this._p1},v.config=t.config=function(e){return new t(e)},n=l("easing.RoughEase",function(t){t=t||{};for(var n,i,r,o,a,s,l=t.taper||"none",c=[],u=0,d=0|(t.points||20),f=d,h=t.randomize!==!1,m=t.clamp===!0,v=t.template instanceof e?t.template:null,g="number"==typeof t.strength?.4*t.strength:.4;--f>-1;)n=h?Math.random():1/d*f,i=v?v.getRatio(n):n,"none"===l?r=g:"out"===l?(o=1-n,r=o*o*g):"in"===l?r=n*n*g:.5>n?(o=2*n,r=.5*o*o*g):(o=2*(1-n),r=.5*o*o*g),h?i+=Math.random()*r-.5*r:f%2?i+=.5*r:i-=.5*r,m&&(i>1?i=1:0>i&&(i=0)),c[u++]={x:n,y:i};for(c.sort(function(e,t){return e.x-t.x}),s=new p(1,1,null),f=d;--f>-1;)a=c[f],s=new p(a.x,a.y,s);this._prev=new p(0,0,0!==s.t?s:s.next)},!0),v=n.prototype=new e,v.constructor=n,v.getRatio=function(e){var t=this._prev;if(e>t.t){for(;t.next&&e>=t.t;)t=t.next;t=t.prev}else for(;t.prev&&t.t>=e;)t=t.prev;return this._prev=t,t.v+(e-t.t)/t.gap*t.c},v.config=function(e){return new n(e)},n.ease=new n,d("Bounce",c("BounceOut",function(e){return 1/2.75>e?7.5625*e*e:2/2.75>e?7.5625*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}),c("BounceIn",function(e){return 1/2.75>(e=1-e)?1-7.5625*e*e:2/2.75>e?1-(7.5625*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1-(7.5625*(e-=2.25/2.75)*e+.9375):1-(7.5625*(e-=2.625/2.75)*e+.984375)}),c("BounceInOut",function(e){var t=.5>e;return e=t?1-2*e:2*e-1,e=1/2.75>e?7.5625*e*e:2/2.75>e?7.5625*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,t?.5*(1-e):.5*e+.5})),d("Circ",c("CircOut",function(e){return Math.sqrt(1-(e-=1)*e)}),c("CircIn",function(e){return-(Math.sqrt(1-e*e)-1)}),c("CircInOut",function(e){return 1>(e*=2)?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)})),i=function(t,n,i){var r=l("easing."+t,function(e,t){this._p1=e||1,this._p2=t||i,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),o=r.prototype=new e;return o.constructor=r,o.getRatio=n,o.config=function(e,t){return new r(e,t)},r},d("Elastic",i("ElasticOut",function(e){return this._p1*Math.pow(2,-10*e)*Math.sin((e-this._p3)*a/this._p2)+1},.3),i("ElasticIn",function(e){return-(this._p1*Math.pow(2,10*(e-=1))*Math.sin((e-this._p3)*a/this._p2))},.3),i("ElasticInOut",function(e){return 1>(e*=2)?-.5*this._p1*Math.pow(2,10*(e-=1))*Math.sin((e-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(e-=1))*Math.sin((e-this._p3)*a/this._p2)+1},.45)),d("Expo",c("ExpoOut",function(e){return 1-Math.pow(2,-10*e)}),c("ExpoIn",function(e){return Math.pow(2,10*(e-1))-.001}),c("ExpoInOut",function(e){return 1>(e*=2)?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*(e-1)))})),d("Sine",c("SineOut",function(e){return Math.sin(e*s)}),c("SineIn",function(e){return-Math.cos(e*s)+1}),c("SineInOut",function(e){return-.5*(Math.cos(Math.PI*e)-1)})),l("easing.EaseLookup",{find:function(t){return e.map[t]}},!0),u(r.SlowMo,"SlowMo","ease,"),u(n,"RoughEase","ease,"),u(t,"SteppedEase","ease,"),h},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
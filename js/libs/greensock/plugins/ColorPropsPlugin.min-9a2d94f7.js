/*!
 * VERSION: beta 1.2.1
 * DATE: 2013-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=/(\d|\.)+/g,t={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},n=function(e,t,n){return e=0>e?e+1:e>1?e-1:e,0|255*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},i=function(i){if(""===i||null==i||"none"===i)return t.transparent;if(t[i])return t[i];if("number"==typeof i)return[i>>16,255&i>>8,255&i];if("#"===i.charAt(0))return 4===i.length&&(i="#"+i.charAt(1)+i.charAt(1)+i.charAt(2)+i.charAt(2)+i.charAt(3)+i.charAt(3)),i=parseInt(i.substr(1),16),[i>>16,255&i>>8,255&i];if("hsl"===i.substr(0,3)){i=i.match(e);var r=Number(i[0])%360/360,a=Number(i[1])/100,o=Number(i[2])/100,s=.5>=o?o*(a+1):o+a-o*a,l=2*o-s;return i.length>3&&(i[3]=Number(i[3])),i[0]=n(r+1/3,l,s),i[1]=n(r,l,s),i[2]=n(r-1/3,l,s),i}return i.match(e)||t.transparent};_gsScope._gsDefine.plugin({propName:"colorProps",version:"1.2.1",priority:-1,API:2,init:function(e,t){this._target=e;var n,r,a,o;for(n in t)a=i(t[n]),this._firstPT=o={_next:this._firstPT,p:n,f:"function"==typeof e[n],n:n,r:!1},r=i(o.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():e[n]),o.s=Number(r[0]),o.c=Number(a[0])-o.s,o.gs=Number(r[1]),o.gc=Number(a[1])-o.gs,o.bs=Number(r[2]),o.bc=Number(a[2])-o.bs,(o.rgba=r.length>3||a.length>3)&&(o.as=4>r.length?1:Number(r[3]),o.ac=(4>a.length?1:Number(a[3]))-o.as),o._next&&(o._next._prev=o);return!0},set:function(e){for(var t,n=this._firstPT;n;)t=(n.rgba?"rgba(":"rgb(")+(n.s+e*n.c>>0)+", "+(n.gs+e*n.gc>>0)+", "+(n.bs+e*n.bc>>0)+(n.rgba?", "+(n.as+e*n.ac):"")+")",n.f?this._target[n.p](t):this._target[n.p]=t,n=n._next}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
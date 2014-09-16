/*!
 * VERSION: 0.2.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=/[^\d\-\.]/g,t=Math.PI/180,n=/(\d|\.)+/g,r={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},i=function(e){return"number"==typeof e?[e>>16,255&e>>8,255&e]:""===e||null==e||"none"===e||"string"!=typeof e?r.transparent:r[e]?r[e]:"#"===e.charAt(0)?(4===e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),e=parseInt(e.substr(1),16),[e>>16,255&e>>8,255&e]):e.match(n)||r.transparent},a={scaleX:1,scaleY:1,tx:1,ty:1,rotation:1,shortRotation:1,skewX:1,skewY:1,scale:1},o=function(e,t){var n=e.matrix,r=1e-6,i=n.a,a=n.b,o=n.c,s=n.d,l=t?e._gsTransform||{skewY:0}:{skewY:0},c=0>l.scaleX;return l.tx=n.e-(l.ox||0),l.ty=n.f-(l.oy||0),l.scaleX=Math.sqrt(i*i+a*a),l.scaleY=Math.sqrt(s*s+o*o),l.rotation=i||a?Math.atan2(a,i):l.rotation||0,l.skewX=o||s?Math.atan2(o,s)+l.rotation:l.skewX||0,Math.abs(l.skewX)>Math.PI/2&&(c?(l.scaleX*=-1,l.skewX+=0>=l.rotation?Math.PI:-Math.PI,l.rotation+=0>=l.rotation?Math.PI:-Math.PI):(l.scaleY*=-1,l.skewX+=0>=l.skewX?Math.PI:-Math.PI)),r>l.rotation&&l.rotation>-r&&(i||a)&&(l.rotation=0),r>l.skewX&&l.skewX>-r&&(a||o)&&(l.skewX=0),t&&(e._gsTransform=l),l},s=function(e,t){return null==e?t:"string"==typeof e&&1===e.indexOf("=")?parseInt(e.charAt(0)+"1",10)*Number(e.substr(2))+t:Number(e)},l=function(n,r){var i=-1===n.indexOf("rad")?t:1,a=1===n.indexOf("=");return n=Number(n.replace(e,""))*i,a?n+r:n},c=_gsScope._gsDefine.plugin({propName:"raphael",version:"0.2.2",API:2,init:function(t,n,r){if(!t.attr)return!1;this._target=t,this._tween=r,this._props=t._gsProps=t._gsProps||{};var o,s,l,c,u,d,p;for(o in n)l=n[o],"transform"!==o?a[o]||"pivot"===o?this._parseTransform(t,n):(s=t.attr(o),this._firstPT=c={_next:this._firstPT,t:this._props,p:o,b:s,f:!1,n:"raphael_"+o,r:!1,type:0},"fill"===o||"stroke"===o?(u=i(s),d=i(l),c.e=l,c.s=Number(u[0]),c.c=Number(d[0])-c.s,c.gs=Number(u[1]),c.gc=Number(d[1])-c.gs,c.bs=Number(u[2]),c.bc=Number(d[2])-c.bs,u.length>3||d.length>3?(c.as=4>u.length?1:Number(u[3]),c.ac=(4>d.length?1:Number(d[3]))-c.as,c.type=2):c.type=1):(s="string"==typeof s?parseFloat(s.replace(e,"")):Number(s),"string"==typeof l?(p="="===l.charAt(1),l=parseFloat(l.replace(e,""))):p=!1,c.e=l||0===l?p?l+s:l:n[o],!s&&0!==s||!l&&0!==l||!(c.c=p?l:l-s)?(c.type=-1,c.i=n[o],c.s=c.c=0):c.s=s),this._overwriteProps.push("raphael_"+o),c._next&&(c._next._prev=c)):this._parseTransform(t,l);return!0},set:function(e){for(var t,n=this._firstPT;n;)t=n.c*e+n.s,n.r&&(t=Math.round(t)),n.type?1===n.type?n.t[n.p]="rgb("+(t>>0)+", "+(n.gs+e*n.gc>>0)+", "+(n.bs+e*n.bc>>0)+")":2===n.type?n.t[n.p]="rgba("+(t>>0)+", "+(n.gs+e*n.gc>>0)+", "+(n.bs+e*n.bc>>0)+", "+(n.as+e*n.ac)+")":-1===n.type&&(n.t[n.p]=n.i):n.t[n.p]=t,n=n._next;if(this._target.attr(this._props),this._transform){n=this._transform;var r=n.rotation,i=r-n.skewX,a=Math.cos(r)*n.scaleX,o=Math.sin(r)*n.scaleX,s=Math.sin(i)*-n.scaleY,l=Math.cos(i)*n.scaleY,c=1e-6,u=this._pxl,d=this._pyl;c>o&&o>-c&&(o=0),c>s&&s>-c&&(s=0),n.ox=this._pxg-(u*a+d*s),n.oy=this._pyg-(u*o+d*l),this._target.transform("m"+a+","+o+","+s+","+l+","+(n.tx+n.ox)+","+(n.ty+n.oy))}}}),u=c.prototype;u._parseTransform=function(e,n){if(!this._transform){var r,i,c,u,d,p,f,h,m,v=this._transform=o(e,!0),g=1e-6;if("object"==typeof n){if(r={scaleX:s(null!=n.scaleX?n.scaleX:n.scale,v.scaleX),scaleY:s(null!=n.scaleY?n.scaleY:n.scale,v.scaleY),tx:s(n.tx,v.tx),ty:s(n.ty,v.ty)},null!=n.shortRotation){r.rotation="number"==typeof n.shortRotation?n.shortRotation*t:l(n.shortRotation,v.rotation);var y=(r.rotation-v.rotation)%(2*Math.PI);y!==y%Math.PI&&(y+=Math.PI*(0>y?2:-2)),r.rotation=v.rotation+y}else r.rotation=null==n.rotation?v.rotation:"number"==typeof n.rotation?n.rotation*t:l(n.rotation,v.rotation);r.skewX=null==n.skewX?v.skewX:"number"==typeof n.skewX?n.skewX*t:l(n.skewX,v.skewX),r.skewY=null==n.skewY?v.skewY:"number"==typeof n.skewY?n.skewY*t:l(n.skewY,v.skewY),(i=r.skewY-v.skewY)&&(r.skewX+=i,r.rotation+=i),g>r.skewY&&r.skewY>-g&&(r.skewY=0),g>r.skewX&&r.skewX>-g&&(r.skewX=0),g>r.rotation&&r.rotation>-g&&(r.rotation=0),m=n.localPivot||n.globalPivot,"string"==typeof m?(d=m.split(","),p=Number(d[0]),f=Number(d[1])):"object"==typeof m?(p=Number(m.x),f=Number(m.y)):n.localPivot?(d=e.getBBox(!0),p=d.width/2,f=d.height/2):(d=e.getBBox(),p=d.x+d.width/2,f=d.y+d.height/2),n.localPivot?(h=e.matrix,p+=e.attr("x"),f+=e.attr("y"),this._pxl=p,this._pyl=f,this._pxg=p*h.a+f*h.c+h.e-v.tx,this._pyg=p*h.b+f*h.d+h.f-v.ty):(h=e.matrix.invert(),this._pxl=p*h.a+f*h.c+h.e,this._pyl=p*h.b+f*h.d+h.f,this._pxg=p-v.tx,this._pyg=f-v.ty)}else{if("string"!=typeof n)return;d=this._target.transform(),e.transform(n),r=o(e,!1),e.transform(d)}for(c in a)v[c]!==r[c]&&"shortRotation"!==c&&"scale"!==c&&(this._firstPT=u={_next:this._firstPT,t:v,p:c,s:v[c],c:r[c]-v[c],n:c,f:!1,r:!1,b:v[c],e:r[c],type:0},u._next&&(u._next._prev=u),this._overwriteProps.push("raphael_"+c))}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
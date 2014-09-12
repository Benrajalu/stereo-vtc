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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=/[^\d\-\.]/g,t=Math.PI/180,n=/(\d|\.)+/g,r={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},i=function(e){return"number"==typeof e?[e>>16,255&e>>8,255&e]:""===e||null==e||"none"===e||"string"!=typeof e?r.transparent:r[e]?r[e]:"#"===e.charAt(0)?(4===e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),e=parseInt(e.substr(1),16),[e>>16,255&e>>8,255&e]):e.match(n)||r.transparent},o={scaleX:1,scaleY:1,tx:1,ty:1,rotation:1,shortRotation:1,skewX:1,skewY:1,scale:1},a=function(e,t){var n=e.matrix,r=1e-6,i=n.a,o=n.b,a=n.c,s=n.d,l=t?e._gsTransform||{skewY:0}:{skewY:0},u=0>l.scaleX;return l.tx=n.e-(l.ox||0),l.ty=n.f-(l.oy||0),l.scaleX=Math.sqrt(i*i+o*o),l.scaleY=Math.sqrt(s*s+a*a),l.rotation=i||o?Math.atan2(o,i):l.rotation||0,l.skewX=a||s?Math.atan2(a,s)+l.rotation:l.skewX||0,Math.abs(l.skewX)>Math.PI/2&&(u?(l.scaleX*=-1,l.skewX+=0>=l.rotation?Math.PI:-Math.PI,l.rotation+=0>=l.rotation?Math.PI:-Math.PI):(l.scaleY*=-1,l.skewX+=0>=l.skewX?Math.PI:-Math.PI)),r>l.rotation&&l.rotation>-r&&(i||o)&&(l.rotation=0),r>l.skewX&&l.skewX>-r&&(o||a)&&(l.skewX=0),t&&(e._gsTransform=l),l},s=function(e,t){return null==e?t:"string"==typeof e&&1===e.indexOf("=")?parseInt(e.charAt(0)+"1",10)*Number(e.substr(2))+t:Number(e)},l=function(n,r){var i=-1===n.indexOf("rad")?t:1,o=1===n.indexOf("=");return n=Number(n.replace(e,""))*i,o?n+r:n},u=_gsScope._gsDefine.plugin({propName:"raphael",version:"0.2.2",API:2,init:function(t,n,r){if(!t.attr)return!1;this._target=t,this._tween=r,this._props=t._gsProps=t._gsProps||{};var a,s,l,u,c,p,d;for(a in n)l=n[a],"transform"!==a?o[a]||"pivot"===a?this._parseTransform(t,n):(s=t.attr(a),this._firstPT=u={_next:this._firstPT,t:this._props,p:a,b:s,f:!1,n:"raphael_"+a,r:!1,type:0},"fill"===a||"stroke"===a?(c=i(s),p=i(l),u.e=l,u.s=Number(c[0]),u.c=Number(p[0])-u.s,u.gs=Number(c[1]),u.gc=Number(p[1])-u.gs,u.bs=Number(c[2]),u.bc=Number(p[2])-u.bs,c.length>3||p.length>3?(u.as=4>c.length?1:Number(c[3]),u.ac=(4>p.length?1:Number(p[3]))-u.as,u.type=2):u.type=1):(s="string"==typeof s?parseFloat(s.replace(e,"")):Number(s),"string"==typeof l?(d="="===l.charAt(1),l=parseFloat(l.replace(e,""))):d=!1,u.e=l||0===l?d?l+s:l:n[a],!s&&0!==s||!l&&0!==l||!(u.c=d?l:l-s)?(u.type=-1,u.i=n[a],u.s=u.c=0):u.s=s),this._overwriteProps.push("raphael_"+a),u._next&&(u._next._prev=u)):this._parseTransform(t,l);return!0},set:function(e){for(var t,n=this._firstPT;n;)t=n.c*e+n.s,n.r&&(t=Math.round(t)),n.type?1===n.type?n.t[n.p]="rgb("+(t>>0)+", "+(n.gs+e*n.gc>>0)+", "+(n.bs+e*n.bc>>0)+")":2===n.type?n.t[n.p]="rgba("+(t>>0)+", "+(n.gs+e*n.gc>>0)+", "+(n.bs+e*n.bc>>0)+", "+(n.as+e*n.ac)+")":-1===n.type&&(n.t[n.p]=n.i):n.t[n.p]=t,n=n._next;if(this._target.attr(this._props),this._transform){n=this._transform;var r=n.rotation,i=r-n.skewX,o=Math.cos(r)*n.scaleX,a=Math.sin(r)*n.scaleX,s=Math.sin(i)*-n.scaleY,l=Math.cos(i)*n.scaleY,u=1e-6,c=this._pxl,p=this._pyl;u>a&&a>-u&&(a=0),u>s&&s>-u&&(s=0),n.ox=this._pxg-(c*o+p*s),n.oy=this._pyg-(c*a+p*l),this._target.transform("m"+o+","+a+","+s+","+l+","+(n.tx+n.ox)+","+(n.ty+n.oy))}}}),c=u.prototype;c._parseTransform=function(e,n){if(!this._transform){var r,i,u,c,p,d,f,h,m,g=this._transform=a(e,!0),v=1e-6;if("object"==typeof n){if(r={scaleX:s(null!=n.scaleX?n.scaleX:n.scale,g.scaleX),scaleY:s(null!=n.scaleY?n.scaleY:n.scale,g.scaleY),tx:s(n.tx,g.tx),ty:s(n.ty,g.ty)},null!=n.shortRotation){r.rotation="number"==typeof n.shortRotation?n.shortRotation*t:l(n.shortRotation,g.rotation);var y=(r.rotation-g.rotation)%(2*Math.PI);y!==y%Math.PI&&(y+=Math.PI*(0>y?2:-2)),r.rotation=g.rotation+y}else r.rotation=null==n.rotation?g.rotation:"number"==typeof n.rotation?n.rotation*t:l(n.rotation,g.rotation);r.skewX=null==n.skewX?g.skewX:"number"==typeof n.skewX?n.skewX*t:l(n.skewX,g.skewX),r.skewY=null==n.skewY?g.skewY:"number"==typeof n.skewY?n.skewY*t:l(n.skewY,g.skewY),(i=r.skewY-g.skewY)&&(r.skewX+=i,r.rotation+=i),v>r.skewY&&r.skewY>-v&&(r.skewY=0),v>r.skewX&&r.skewX>-v&&(r.skewX=0),v>r.rotation&&r.rotation>-v&&(r.rotation=0),m=n.localPivot||n.globalPivot,"string"==typeof m?(p=m.split(","),d=Number(p[0]),f=Number(p[1])):"object"==typeof m?(d=Number(m.x),f=Number(m.y)):n.localPivot?(p=e.getBBox(!0),d=p.width/2,f=p.height/2):(p=e.getBBox(),d=p.x+p.width/2,f=p.y+p.height/2),n.localPivot?(h=e.matrix,d+=e.attr("x"),f+=e.attr("y"),this._pxl=d,this._pyl=f,this._pxg=d*h.a+f*h.c+h.e-g.tx,this._pyg=d*h.b+f*h.d+h.f-g.ty):(h=e.matrix.invert(),this._pxl=d*h.a+f*h.c+h.e,this._pyl=d*h.b+f*h.d+h.f,this._pxg=d-g.tx,this._pyg=f-g.ty)}else{if("string"!=typeof n)return;p=this._target.transform(),e.transform(n),r=a(e,!1),e.transform(p)}for(u in o)g[u]!==r[u]&&"shortRotation"!==u&&"scale"!==u&&(this._firstPT=c={_next:this._firstPT,t:g,p:u,s:g[u],c:r[u]-g[u],n:u,f:!1,r:!1,b:g[u],e:r[u],type:0},c._next&&(c._next._prev=c),this._overwriteProps.push("raphael_"+u))}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
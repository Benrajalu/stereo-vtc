/*!
 * VERSION: beta 0.2.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(e,t){"object"!=typeof t&&(t={rotation:t}),this.finals={};var n,i,r,a,o,s,l=t.useRadians===!0?2*Math.PI:360,c=1e-6;for(n in t)"useRadians"!==n&&(s=(t[n]+"").split("_"),i=s[0],r=parseFloat("function"!=typeof e[n]?e[n]:e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]()),a=this.finals[n]="string"==typeof i&&"="===i.charAt(1)?r+parseInt(i.charAt(0)+"1",10)*Number(i.substr(2)):Number(i)||0,o=a-r,s.length&&(i=s.join("_"),-1!==i.indexOf("short")&&(o%=l,o!==o%(l/2)&&(o=0>o?o+l:o-l)),-1!==i.indexOf("_cw")&&0>o?o=(o+9999999999*l)%l-(0|o/l)*l:-1!==i.indexOf("ccw")&&o>0&&(o=(o-9999999999*l)%l-(0|o/l)*l)),(o>c||-c>o)&&(this._addTween(e,n,r,r+o,n),this._overwriteProps.push(n)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
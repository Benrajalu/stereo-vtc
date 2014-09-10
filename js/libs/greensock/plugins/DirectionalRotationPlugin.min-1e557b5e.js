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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var n,i,r,s,o,a,l=e.useRadians===!0?2*Math.PI:360,u=1e-6;for(n in e)"useRadians"!==n&&(a=(e[n]+"").split("_"),i=a[0],r=parseFloat("function"!=typeof t[n]?t[n]:t[n.indexOf("set")||"function"!=typeof t["get"+n.substr(3)]?n:"get"+n.substr(3)]()),s=this.finals[n]="string"==typeof i&&"="===i.charAt(1)?r+parseInt(i.charAt(0)+"1",10)*Number(i.substr(2)):Number(i)||0,o=s-r,a.length&&(i=a.join("_"),-1!==i.indexOf("short")&&(o%=l,o!==o%(l/2)&&(o=0>o?o+l:o-l)),-1!==i.indexOf("_cw")&&0>o?o=(o+9999999999*l)%l-(0|o/l)*l:-1!==i.indexOf("ccw")&&o>0&&(o=(o-9999999999*l)%l-(0|o/l)*l)),(o>u||-u>o)&&(this._addTween(t,n,r,r+o,n),this._overwriteProps.push(n)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
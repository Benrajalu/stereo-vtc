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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(e,t){"object"!=typeof t&&(t={rotation:t}),this.finals={};var n,r,i,o,a,s,l=t.useRadians===!0?2*Math.PI:360,c=1e-6;for(n in t)"useRadians"!==n&&(s=(t[n]+"").split("_"),r=s[0],i=parseFloat("function"!=typeof e[n]?e[n]:e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]()),o=this.finals[n]="string"==typeof r&&"="===r.charAt(1)?i+parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)):Number(r)||0,a=o-i,s.length&&(r=s.join("_"),-1!==r.indexOf("short")&&(a%=l,a!==a%(l/2)&&(a=0>a?a+l:a-l)),-1!==r.indexOf("_cw")&&0>a?a=(a+9999999999*l)%l-(0|a/l)*l:-1!==r.indexOf("ccw")&&a>0&&(a=(a-9999999999*l)%l-(0|a/l)*l)),(a>c||-c>a)&&(this._addTween(e,n,i,i+a,n),this._overwriteProps.push(n)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
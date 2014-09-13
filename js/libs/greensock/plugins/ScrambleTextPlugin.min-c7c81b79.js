/*!
 * VERSION: 0.2.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * ScrambleTextPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=function(t){var n=t.nodeType,r="";if(1===n||9===n||11===n){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)r+=e(t)}else if(3===n||4===n)return t.nodeValue;return r},t=function(e,t){for(var n=t.length,r="";--e>-1;)r+=t[0|Math.random()*n];return r},n=function(e){this.chars=e.split(""),this.sets=[],this.length=50;var n;for(n=0;20>n;n++)this.sets[n]=t(80,this.chars);this.grow=function(e){for(n=0;20>n;n++)this.sets[n]+=t(e-this.length,this.chars);this.length=e}},r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=r.toLowerCase(),o={upperCase:new n(r),lowerCase:new n(i),upperAndLowerCase:new n(r+i)},a=_gsScope._gsDefine.plugin({propName:"scrambleText",version:"0.2.1",API:2,overwriteProps:["scrambleText","text"],init:function(t,r,i){if(!("innerHTML"in t))return!1;this._target=t,"object"!=typeof r&&(r={text:r});var a,s,l,u;return this._delimiter=a=r.delimiter||"",this._original=e(t).replace(/\s+/g," ").split("&nbsp;").join("").split(a),this._text=(r.text||r.value||"").replace(/\s+/g," ").split(a),this._hasClass=!1,"string"==typeof r.newClass&&(this._newClass=r.newClass,this._hasClass=!0),"string"==typeof r.oldClass&&(this._oldClass=r.oldClass,this._hasClass=!0),s=this._text.length-this._original.length,this._length=this._original.join(a).length,this._lengthDif=this._text.join(a).length-this._length,this._fillChar=r.fillChar||r.chars&&-1!==r.chars.indexOf(" ")?"&nbsp;":"",this._charSet=u=o[r.chars||"upperCase"]||new n(r.chars),this._speed=.016/(r.speed||1),this._prevScrambleTime=0,this._setIndex=0|20*Math.random(),l=this._length+Math.max(this._lengthDif,0),l>u.length&&u.grow(l),this._chars=u.sets[this._setIndex],this._revealDelay=r.revealDelay||0,this._tweenLength=r.tweenLength!==!1,this._tween=i,!0},set:function(e){var t,n,r,i,o,a,s=this._text.length,l=this._delimiter,u=this._tween._time,c=u-this._prevScrambleTime;this._revealDelay&&(this._tween.vars.runBackwards&&(u=this._tween._duration-u),e=0===u?0:this._revealDelay>u?1e-6:u===this._tween._duration?1:this._tween._ease.getRatio((u-this._revealDelay)/(this._tween._duration-this._revealDelay))),0>e?e=0:e>1&&(e=1),t=0|e*s+.5,n=this._text.slice(0,t).join(l),r=this._original.slice(t).join(l),e&&((c>this._speed||-this._speed>c)&&(this._setIndex=(this._setIndex+(0|19*Math.random()))%20,this._chars=this._charSet.sets[this._setIndex],this._prevScrambleTime+=c),r=this._chars.substr(n.length,0|this._length+(this._tweenLength?1-(e=1-e)*e*e*e:1)*this._lengthDif-n.length+.5)),this._hasClass?(i=this._newClass&&0!==t,o=this._oldClass&&t!==s,a=(i?"<span class='"+this._newClass+"'>":"")+n+(i?"</span>":"")+(o?"<span class='"+this._oldClass+"'>":"")+l+r+(o?"</span>":"")):a=n+l+r,this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==a.indexOf("  ")?a.split("  ").join("&nbsp;&nbsp;"):a}}),s=a.prototype;s._newClass=s._oldClass="";for(s in o)o[s.toLowerCase()]=o[s],o[s.toUpperCase()]=o[s]}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
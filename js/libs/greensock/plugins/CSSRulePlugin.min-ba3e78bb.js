/*!
 * VERSION: beta 0.6.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSRulePlugin",["plugins.TweenPlugin","TweenLite","plugins.CSSPlugin"],function(t,e,n){var i=function(){t.call(this,"cssRule"),this._overwriteProps.length=0},r=window.document,s=n.prototype.setRatio,o=i.prototype=new n;return o._propName="cssRule",o.constructor=i,i.version="0.6.2",i.API=2,i.getRule=function(t){var e,n,i,s,o=r.all?"rules":"cssRules",a=r.styleSheets,l=a.length,u=":"===t.charAt(0);for(t=(u?"":",")+t.toLowerCase()+",",u&&(s=[]);--l>-1;){try{n=a[l][o]}catch(c){console.log(c);continue}for(e=n.length;--e>-1;)if(i=n[e],i.selectorText&&-1!==(","+i.selectorText.split("::").join(":").toLowerCase()+",").indexOf(t)){if(!u)return i.style;s.push(i.style)}}return s},o._onInitTween=function(t,e,i){if(void 0===t.cssText)return!1;var s=t._gsProxy=t._gsProxy||r.createElement("div");return this._ss=t,this._proxy=s.style,s.style.cssText=t.cssText,n.prototype._onInitTween.call(this,s,e,i),!0},o.setRatio=function(t){s.call(this,t),this._ss.cssText=this._proxy.cssText},t.activate([i]),i},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
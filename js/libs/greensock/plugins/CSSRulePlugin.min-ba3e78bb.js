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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSRulePlugin",["plugins.TweenPlugin","TweenLite","plugins.CSSPlugin"],function(e,t,n){var a=function(){e.call(this,"cssRule"),this._overwriteProps.length=0},i=window.document,r=n.prototype.setRatio,o=a.prototype=new n;return o._propName="cssRule",o.constructor=a,a.version="0.6.2",a.API=2,a.getRule=function(e){var t,n,a,r,o=i.all?"rules":"cssRules",s=i.styleSheets,l=s.length,c=":"===e.charAt(0);for(e=(c?"":",")+e.toLowerCase()+",",c&&(r=[]);--l>-1;){try{n=s[l][o]}catch(u){console.log(u);continue}for(t=n.length;--t>-1;)if(a=n[t],a.selectorText&&-1!==(","+a.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!c)return a.style;r.push(a.style)}}return r},o._onInitTween=function(e,t,a){if(void 0===e.cssText)return!1;var r=e._gsProxy=e._gsProxy||i.createElement("div");return this._ss=e,this._proxy=r.style,r.style.cssText=e.cssText,n.prototype._onInitTween.call(this,r,t,a),!0},o.setRatio=function(e){r.call(this,e),this._ss.cssText=this._proxy.cssText},e.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
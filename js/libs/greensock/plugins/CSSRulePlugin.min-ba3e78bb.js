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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSRulePlugin",["plugins.TweenPlugin","TweenLite","plugins.CSSPlugin"],function(e,t,n){var r=function(){e.call(this,"cssRule"),this._overwriteProps.length=0},i=window.document,o=n.prototype.setRatio,a=r.prototype=new n;return a._propName="cssRule",a.constructor=r,r.version="0.6.2",r.API=2,r.getRule=function(e){var t,n,r,o,a=i.all?"rules":"cssRules",s=i.styleSheets,l=s.length,c=":"===e.charAt(0);for(e=(c?"":",")+e.toLowerCase()+",",c&&(o=[]);--l>-1;){try{n=s[l][a]}catch(u){console.log(u);continue}for(t=n.length;--t>-1;)if(r=n[t],r.selectorText&&-1!==(","+r.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)){if(!c)return r.style;o.push(r.style)}}return o},a._onInitTween=function(e,t,r){if(void 0===e.cssText)return!1;var o=e._gsProxy=e._gsProxy||i.createElement("div");return this._ss=e,this._proxy=o.style,o.style.cssText=e.cssText,n.prototype._onInitTween.call(this,o,t,r),!0},a.setRatio=function(e){o.call(this,e),this._ss.cssText=this._proxy.cssText},e.activate([r]),r},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
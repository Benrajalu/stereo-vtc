/*!
 * VERSION: 0.3.3
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(e,t){var n,i,r;if("function"!=typeof e.setAttribute)return!1;this._target=e,this._proxy={},this._start={},this._end={};for(n in t)this._start[n]=this._proxy[n]=i=e.getAttribute(n),r=this._addTween(this._proxy,n,parseFloat(i),t[n],n),this._end[n]=r?r.s+r.c:t[n],this._overwriteProps.push(n);return!0},set:function(e){this._super.setRatio.call(this,e);for(var t,n=this._overwriteProps,i=n.length,r=1===e?this._end:e?this._proxy:this._start;--i>-1;)t=n[i],this._target.setAttribute(t,r[t]+"")}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
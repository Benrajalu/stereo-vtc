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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(e,t){var n,a,i;if("function"!=typeof e.setAttribute)return!1;this._target=e,this._proxy={},this._start={},this._end={};for(n in t)this._start[n]=this._proxy[n]=a=e.getAttribute(n),i=this._addTween(this._proxy,n,parseFloat(a),t[n],n),this._end[n]=i?i.s+i.c:t[n],this._overwriteProps.push(n);return!0},set:function(e){this._super.setRatio.call(this,e);for(var t,n=this._overwriteProps,a=n.length,i=1===e?this._end:e?this._proxy:this._start;--a>-1;)t=n[a],this._target.setAttribute(t,i[t]+"")}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
/*!
 * VERSION: 0.1.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.2",init:function(t,e){var i,n,r=e.length,s=this.a=[];if(this.target=t,this._round=!1,!r)return!1;for(;--r>-1;)i=t[r],n=e[r],i!==n&&s.push({i:r,s:i,c:n-i});return!0},round:function(t){"endArray"in t&&(this._round=!0)},set:function(t){var e,i,n=this.target,r=this.a,s=r.length;if(this._round)for(;--s>-1;)e=r[s],n[e.i]=Math.round(e.s+e.c*t);else for(;--s>-1;)e=r[s],i=e.s+e.c*t,n[e.i]=1e-6>i&&i>-1e-6?0:i}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
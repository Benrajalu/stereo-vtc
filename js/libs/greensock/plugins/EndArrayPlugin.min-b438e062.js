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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.2",init:function(e,t){var n,i,r=t.length,s=this.a=[];if(this.target=e,this._round=!1,!r)return!1;for(;--r>-1;)n=e[r],i=t[r],n!==i&&s.push({i:r,s:n,c:i-n});return!0},round:function(e){"endArray"in e&&(this._round=!0)},set:function(e){var t,n,i=this.target,r=this.a,s=r.length;if(this._round)for(;--s>-1;)t=r[s],i[t.i]=Math.round(t.s+t.c*e);else for(;--s>-1;)t=r[s],n=t.s+t.c*e,i[t.i]=1e-6>n&&n>-1e-6?0:n}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
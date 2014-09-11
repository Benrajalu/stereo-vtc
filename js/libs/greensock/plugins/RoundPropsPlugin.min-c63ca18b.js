/*!
 * VERSION: beta 1.4.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.4.1",priority:-1,API:2,init:function(e,t,n){return this._tween=n,!0}}),t=e.prototype;t._onInitAllProps=function(){for(var e,t,n,i=this._tween,r=i.vars.roundProps instanceof Array?i.vars.roundProps:i.vars.roundProps.split(","),o=r.length,a={},s=i._propLookup.roundProps;--o>-1;)a[r[o]]=1;for(o=r.length;--o>-1;)for(e=r[o],t=i._firstPT;t;)n=t._next,t.pg?t.t._roundProps(a,!0):t.n===e&&(this._add(t.t,e,t.s,t.c),n&&(n._prev=t._prev),t._prev?t._prev._next=n:i._firstPT===t&&(i._firstPT=n),t._next=t._prev=null,i._propLookup[e]=s),t=n;return!1},t._add=function(e,t,n,i){this._addTween(e,t,n,n+i,t,!0),this._overwriteProps.push(t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
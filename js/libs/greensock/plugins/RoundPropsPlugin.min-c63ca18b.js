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
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.4.1",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,n=this._tween,r=n.vars.roundProps instanceof Array?n.vars.roundProps:n.vars.roundProps.split(","),s=r.length,o={},a=n._propLookup.roundProps;--s>-1;)o[r[s]]=1;for(s=r.length;--s>-1;)for(t=r[s],e=n._firstPT;e;)i=e._next,e.pg?e.t._roundProps(o,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:n._firstPT===e&&(n._firstPT=i),e._next=e._prev=null,n._propLookup[t]=a),e=i;return!1},e._add=function(t,e,i,n){this._addTween(t,e,i,i+n,e,!0),this._overwriteProps.push(e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
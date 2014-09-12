/*!
 * VERSION: 0.1.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * PhysicsPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=function(e,t,n,i,r,o){this.p=t,this.f="function"==typeof e[t],this.start=this.value=this.f?e[t.indexOf("set")||"function"!=typeof e["get"+t.substr(3)]?t:"get"+t.substr(3)]():parseFloat(e[t]),this.velocity=n||0,this.v=this.velocity/o,i||0==i?(this.acceleration=i,this.a=this.acceleration/(o*o)):this.acceleration=this.a=0,this.friction=1-(r||0)},t=Math.random(),n=_gsScope._gsDefine.globals.com.greensock.core.Animation._rootFramesTimeline,i=_gsScope._gsDefine.plugin({propName:"physicsProps",version:"0.1.2",API:2,init:function(t,i,r){this._target=t,this._tween=r,this._runBackwards=r.vars.runBackwards===!0,this._step=0;for(var o,a,s=r._timeline,l=0;s._timeline;)s=s._timeline;this._stepsPerTimeUnit=s===n?1:30,this._props=[];for(o in i)a=i[o],(a.velocity||a.acceleration)&&(this._props[l++]=new e(t,o,a.velocity,a.acceleration,a.friction,this._stepsPerTimeUnit),this._overwriteProps[l]=o,a.friction&&(this._hasFriction=!0));return!0},set:function(){var e,t,n,i,r,o,a=this._props.length,s=this._tween._time,l=this._target;if(this._runBackwards&&(s=this._tween._duration-s),this._hasFriction){if(s*=this._stepsPerTimeUnit,n=(0|s)-this._step,i=s%1,n>=0)for(;--a>-1;){for(e=this._props[a],r=n;--r>-1;)e.v+=e.a,e.v*=e.friction,e.value+=e.v;t=e.value+e.v*i,e.r&&(t=Math.round(t)),e.f?l[e.p](t):l[e.p]=t}else for(;--a>-1;){for(e=this._props[a],r=-n;--r>-1;)e.value-=e.v,e.v/=e.friction,e.v-=e.a;t=e.value+e.v*i,e.r&&(t=0|t+(0>t?-.5:.5)),e.f?l[e.p](t):l[e.p]=t}this._step+=n}else for(o=.5*s*s;--a>-1;)e=this._props[a],t=e.start+(e.velocity*s+e.acceleration*o),e.r&&(t=Math.round(t)),e.f?l[e.p](t):l[e.p]=t}}),r=i.prototype;r._kill=function(e){for(var t=this._props.length;--t>-1;)this._props[t].p in e&&this._props.splice(t,1);return this._super._kill(e)},r._roundProps=function(e,t){for(var n=this._props.length;--n>-1;)("physicsProps"in e||this._props[n].p in e)&&(this._props[n].r=t)},i._autoCSS=!0,i._cssRegister=function(){var e=_gsScope._gsDefine.globals.CSSPlugin;if(e){var n=e._internals,r=n._parseToProxy,o=n._setPluginRatio,a=n.CSSPropTween;n._registerComplexSpecialProp("physicsProps",{parser:function(e,n,s,l,c,u){u=new i;var d,p,f={};n.scale&&(n.scaleX=n.scaleY=n.scale,delete n.scale);for(d in n)f[d]=t++;return p=r(e,f,l,c,u),c=new a(e,"physicsProps",0,0,p.pt,2),c.data=p,c.plugin=u,c.setRatio=o,u._onInitTween(p.proxy,n,l._tween),c}})}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
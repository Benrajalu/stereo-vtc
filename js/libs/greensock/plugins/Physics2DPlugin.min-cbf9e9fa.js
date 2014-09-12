/*!
 * VERSION: 0.1.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * Physics2DPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=Math.PI/180,t=function(e,t,n,i,a){this.p=t,this.f="function"==typeof e[t],this.start=this.value=this.f?e[t.indexOf("set")||"function"!=typeof e["get"+t.substr(3)]?t:"get"+t.substr(3)]():parseFloat(e[t]),this.velocity=n||0,this.v=this.velocity/a,i||0===i?(this.acceleration=i,this.a=this.acceleration/(a*a)):this.acceleration=this.a=0},n=Math.random(),i=_gsScope._gsDefine.globals.com.greensock.core.Animation._rootFramesTimeline,a=_gsScope._gsDefine.plugin({propName:"physics2D",version:"0.1.2",API:2,init:function(n,a,r){this._target=n,this._tween=r,this._runBackwards=r.vars.runBackwards===!0,this._step=0;for(var o,s=r._timeline,c=Number(a.angle)||0,l=Number(a.velocity)||0,u=Number(a.acceleration)||0,d=a.xProp||"x",p=a.yProp||"y",f=a.accelerationAngle||0===a.accelerationAngle?Number(a.accelerationAngle):c;s._timeline;)s=s._timeline;return this._stepsPerTimeUnit=o=s===i?1:30,a.gravity&&(u=Number(a.gravity),f=90),c*=e,f*=e,this._friction=1-Number(a.friction||0),this._overwriteProps.push(d),this._overwriteProps.push(p),this._x=new t(n,d,Math.cos(c)*l,Math.cos(f)*u,o),this._y=new t(n,p,Math.sin(c)*l,Math.sin(f)*u,o),this._skipX=this._skipY=!1,!0},set:function(){var e,t,n,i,a,r,o=this._tween._time,s=this._x,c=this._y;if(this._runBackwards===!0&&(o=this._tween._duration-o),1===this._friction)n=.5*o*o,e=s.start+(s.velocity*o+s.acceleration*n),t=c.start+(c.velocity*o+c.acceleration*n);else{if(o*=this._stepsPerTimeUnit,i=r=(0|o)-this._step,a=o%1,r>=0)for(;--r>-1;)s.v+=s.a,c.v+=c.a,s.v*=this._friction,c.v*=this._friction,s.value+=s.v,c.value+=c.v;else for(r=-r;--r>-1;)s.value-=s.v,c.value-=c.v,s.v/=this._friction,c.v/=this._friction,s.v-=s.a,c.v-=c.a;e=s.value+s.v*a,t=c.value+c.v*a,this._step+=i}this._skipX||(s.r&&(e=0|e+(0>e?-.5:.5)),s.f?this._target[s.p](e):this._target[s.p]=e),this._skipY||(c.r&&(t=0|t+(0>t?-.5:.5)),c.f?this._target[c.p](t):this._target[c.p]=t)}}),r=a.prototype;r._kill=function(e){return null!=e[this._x.p]&&(this._skipX=!0),null!=e[this._y.p]&&(this._skipY=!0),this._super._kill(e)},r._roundProps=function(e,t){(e.physics2D||e[this._x.p])&&(this._x.r=t),(e.physics2D||e[this._y.p])&&(this._y.r=t)},a._autoCSS=!0,a._cssRegister=function(){var e=window._gsDefine.globals.CSSPlugin;if(e){var t=e._internals,i=t._parseToProxy,r=t._setPluginRatio,o=t.CSSPropTween;t._registerComplexSpecialProp("physics2D",{parser:function(e,t,s,c,l,u){u=new a;var d,p=t.xProp||"x",f=t.yProp||"y",m={};return m[p]=m[f]=n++,d=i(e,m,c,l,u),l=new o(e,"physics2D",0,0,d.pt,2),l.data=d,l.plugin=u,l.setRatio=r,u._onInitTween(d.proxy,t,c._tween),l}})}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
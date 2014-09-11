/*!
 * VERSION: 0.10.5
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.11.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://www.greensock.com/club/).
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite"],function(e,t){var n,i,r,o,a,s={css:{}},l={css:{}},c={css:{}},u={css:{}},d={},p=document,f=p.documentElement||{},h=[],m=function(){return!1},g=180/Math.PI,v=999999999999999,y=Date.now||function(){return(new Date).getTime()},x=p.all&&!p.addEventListener,b=[],w={},_=0,T=/^(?:a|input|textarea|button|select)$/i,S=0,C=0,N=function(){for(var e=b.length;--e>-1;)b[e]()},P=function(e){b.push(e),1===b.length&&t.ticker.addEventListener("tick",N,this,!1,1)},k=function(e){for(var n=b.length;--n>-1;)b[n]===e&&b.splice(n,1);t.to(E,0,{overwrite:"all",delay:15,onComplete:E})},E=function(){b.length||t.ticker.removeEventListener("tick",N)},M=function(e,t){var n;for(n in t)void 0===e[n]&&(e[n]=t[n]);return e},A=function(){return null!=window.pageYOffset?window.pageYOffset:null!=p.scrollTop?p.scrollTop:f.scrollTop||p.body.scrollTop||0},L=function(){return null!=window.pageXOffset?window.pageXOffset:null!=p.scrollLeft?p.scrollLeft:f.scrollLeft||p.body.scrollLeft||0},D=function(e,t){return e=e||window.event,d.pageX=e.clientX+p.body.scrollLeft+f.scrollLeft,d.pageY=e.clientY+p.body.scrollTop+f.scrollTop,t&&(e.returnValue=!1),d},O=function(e){return e?("string"==typeof e&&(e=t.selector(e)),e.length&&e!==window&&e[0]&&e[0].style&&!e.nodeType&&(e=e[0]),e===window||e.nodeType&&e.style?e:null):e},I=function(e,t){var i,r,o,a=e.style;if(void 0===a[t]){for(o=["O","Moz","ms","Ms","Webkit"],r=5,i=t.charAt(0).toUpperCase()+t.substr(1);--r>-1&&void 0===a[o[r]+i];);if(0>r)return"";n=3===r?"ms":o[r],t=n+i}return t},R=function(e,t,n){var i=e.style;void 0===i[t]&&(t=I(e,t)),null==n?i.removeProperty?i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i.removeAttribute(t):void 0!==i[t]&&(i[t]=n)},H=p.defaultView?p.defaultView.getComputedStyle:m,W=/(?:Left|Right|Width)/i,j=/(?:\d|\-|\+|=|#|\.)*/g,F=function(e,t,n,i,r){if("px"===i||!i)return n;if("auto"===i||!n)return 0;var o,a=W.test(t),s=e,l=Y.style,c=0>n;return c&&(n=-n),"%"===i&&-1!==t.indexOf("border")?o=n/100*(a?e.clientWidth:e.clientHeight):(l.cssText="border:0 solid red;position:"+B(e,"position",!0)+";line-height:0;","%"!==i&&s.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=n+i:(s=e.parentNode||p.body,l[a?"width":"height"]=n+i),s.appendChild(Y),o=parseFloat(Y[a?"offsetWidth":"offsetHeight"]),s.removeChild(Y),0!==o||r||(o=F(e,t,n,i,!0))),c?-o:o},z=function(e,t){if("absolute"!==B(e,"position",!0))return 0;var n="left"===t?"Left":"Top",i=B(e,"margin"+n,!0);return e["offset"+n]-(F(e,t,parseFloat(i),i.replace(j,""))||0)},B=function(e,t,n){var i,r=(e._gsTransform||{})[t];return r||0===r?r:(e.style[t]?r=e.style[t]:(i=H(e))?(r=i.getPropertyValue(t.replace(/([A-Z])/g,"-$1").toLowerCase()),r=r||i.length?r:i[t]):e.currentStyle&&(r=e.currentStyle[t]),"auto"!==r||"top"!==t&&"left"!==t||(r=z(e,t)),n?r:parseFloat(r)||0)},X=function(e,t,n){var i=e.vars,r=i[n],o=e._listeners[t];"function"==typeof r&&r.apply(i[n+"Scope"]||e,i[n+"Params"]||[e.pointerEvent]),o&&e.dispatchEvent(t)},q=function(e,t){var n,i,r,o=O(e);return o?ot(o,t):void 0!==e.left?(r=et(t),{left:e.left-r.x,top:e.top-r.y,width:e.width,height:e.height}):(i=e.min||e.minX||e.minRotation||0,n=e.min||e.minY||0,{left:i,top:n,width:(e.max||e.maxX||e.maxRotation||0)-i,height:(e.max||e.maxY||0)-n})},Y=p.createElement("div"),$=""!==I(Y,"perspective"),V=I(Y,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),G=I(Y,"transform"),U=G.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),Q={},Z={},J=function(){if(!x){var e="http://www.w3.org/2000/svg",t=p.createElementNS(e,"svg"),n=p.createElementNS(e,"rect");return n.setAttributeNS(null,"width","10"),n.setAttributeNS(null,"height","10"),t.appendChild(n),t}}(),K=function(e){if(!e.getBoundingClientRect||!e.parentNode)return{offsetTop:0,offsetLeft:0,offsetParent:f};for(var t,n,i,r=e,o=e.style.cssText;!r.offsetParent&&r.parentNode;)r=r.parentNode;return e.parentNode.insertBefore(J,e),e.parentNode.removeChild(e),J.style.cssText=o,J.style[G]="none",J.setAttribute("class",e.getAttribute("class")),t=J.getBoundingClientRect(),i=r.offsetParent,i?(i===p.body&&f&&(i=f),n=i.getBoundingClientRect()):n={top:-A(),left:-L()},J.parentNode.insertBefore(e,J),e.parentNode.removeChild(J),{offsetLeft:t.left-n.left,offsetTop:t.top-n.top,offsetParent:r.offsetParent||f}},et=function(e,t){if(t=t||{},!e||e===f||!e.parentNode)return{x:0,y:0};var n=H(e),i=V&&n?n.getPropertyValue(V):"50% 50%",r=i.split(" "),o=-1!==i.indexOf("left")?"0%":-1!==i.indexOf("right")?"100%":r[0],a=-1!==i.indexOf("top")?"0%":-1!==i.indexOf("bottom")?"100%":r[1];return("center"===a||null==a)&&(a="50%"),("center"===o||isNaN(parseFloat(o)))&&(o="50%"),t.x=-1!==o.indexOf("%")?e.offsetWidth*parseFloat(o)/100:parseFloat(o),t.y=-1!==a.indexOf("%")?e.offsetHeight*parseFloat(a)/100:parseFloat(a),t},tt=function(e,t,n){var i,r,a,s,l,c;return e!==window&&e&&e.parentNode?(i=H(e),r=i?i.getPropertyValue(U):e.currentStyle?e.currentStyle[G]:"1,0,0,1,0,0",r=(r+"").match(/(?:\-|\b)[\d\-\.e]+\b/g)||[1,0,0,1,0,0],r.length>6&&(r=[r[0],r[1],r[4],r[5],r[12],r[13]]),t&&(a=e.parentNode,c=void 0===e.offsetLeft&&"svg"===e.nodeName.toLowerCase()?K(e):e,s=c.offsetParent,l=a===f||a===p.body,r[4]=Number(r[4])+t.x+(c.offsetLeft||0)-n.x-(l?0:a.scrollLeft)+(s?parseInt(B(s,"borderLeftWidth"),10)||0:0),r[5]=Number(r[5])+t.y+(c.offsetTop||0)-n.y-(l?0:a.scrollTop)+(s?parseInt(B(s,"borderTopWidth"),10)||0:0),s||"fixed"!==B(e,"position",i)||(r[4]+=L(),r[5]+=A()),void 0===o&&p.body&&G&&(o=function(){var e,t,n=p.createElement("div"),i=p.createElement("div");return i.style.position="absolute",p.body.appendChild(n),n.appendChild(i),e=i.offsetParent,n.style[G]="rotate(1deg)",t=i.offsetParent===e,p.body.removeChild(n),t}()),!a||a.offsetParent!==s||o&&"100100"!==tt(a).join("")||(r[4]-=a.offsetLeft||0,r[5]-=a.offsetTop||0)),r):[1,0,0,1,0,0]},nt=function(e,t){for(var n,i,r,o,a,s,l,c,u=et(e,Q),d=et(e.parentNode,Z),p=tt(e,u,d);(e=e.parentNode)&&e.parentNode&&e!==f;)u=d,d=et(e.parentNode,u===Q?Z:Q),l=tt(e,u,d),n=p[0],i=p[1],r=p[2],o=p[3],a=p[4],s=p[5],p[0]=n*l[0]+i*l[2],p[1]=n*l[1]+i*l[3],p[2]=r*l[0]+o*l[2],p[3]=r*l[1]+o*l[3],p[4]=a*l[0]+s*l[2]+l[4],p[5]=a*l[1]+s*l[3]+l[5];return t&&(n=p[0],i=p[1],r=p[2],o=p[3],a=p[4],s=p[5],c=n*o-i*r,p[0]=o/c,p[1]=-i/c,p[2]=-r/c,p[3]=n/c,p[4]=(r*s-o*a)/c,p[5]=-(n*s-i*a)/c),p},it=function(e,t,n){var i=nt(e),r=t.x,o=t.y;return n=n===!0?t:n||{},n.x=r*i[0]+o*i[2]+i[4],n.y=r*i[1]+o*i[3]+i[5],n},rt=function(e,t,n){var i=e.x*t[0]+e.y*t[2]+t[4],r=e.x*t[1]+e.y*t[3]+t[5];return e.x=i*n[0]+r*n[2]+n[4],e.y=i*n[1]+r*n[3]+n[5],e},ot=function(e,t){var n,i,r,o,a,s,l,c,u,d,h;return e===window?(o=A(),i=L(),r=i+(f.clientWidth||e.innerWidth||p.body.clientWidth||0),a=o+((e.innerHeight||0)-20<f.clientHeight?f.clientHeight:e.innerHeight||p.body.clientHeight||0)):(n=et(e),i=-n.x,r=i+e.offsetWidth,o=-n.y,a=o+e.offsetHeight),e===t?{left:i,top:o,width:r-i,height:a-o}:(s=nt(e),l=nt(t,!0),c=rt({x:i,y:o},s,l),u=rt({x:r,y:o},s,l),d=rt({x:r,y:a},s,l),h=rt({x:i,y:a},s,l),i=Math.min(c.x,u.x,d.x,h.x),o=Math.min(c.y,u.y,d.y,h.y),{left:i,top:o,width:Math.max(c.x,u.x,d.x,h.x)-i,height:Math.max(c.y,u.y,d.y,h.y)-o})},at=function(e){return e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0])?!0:!1},st=function(e){var t,n,i,r=[],o=e.length;for(t=0;o>t;t++)if(n=e[t],at(n))for(i=n.length,i=0;n.length>i;i++)r.push(n[i]);else r.push(n);return r},lt="ontouchstart"in f&&"orientation"in window,ct=function(e){for(var t=e.split(","),n=(void 0!==Y.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==Y.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":e).split(","),i={},r=7;--r>-1;)i[t[r]]=n[r],i[n[r]]=t[r];return i}("touchstart,touchmove,touchend,touchcancel"),ut=function(e,t,n){e.addEventListener?e.addEventListener(ct[t]||t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},dt=function(e,t,n){e.removeEventListener?e.removeEventListener(ct[t]||t,n):e.detachEvent&&e.detachEvent("on"+t,n)},pt=function(e){i=e.touches&&e.touches.length>S,dt(e.target,"touchend",pt)},ft=function(e){i=e.touches&&e.touches.length>S,ut(e.target,"touchend",pt)},ht=function(e,t,n,i,r,o){var a,s,l,c={};if(t)if(1!==r&&t instanceof Array)for(c.end=a=[],l=t.length,s=0;l>s;s++)a[s]=t[s]*r;else c.end="function"==typeof t?function(n){return t.call(e,n)*r}:t;return(n||0===n)&&(c.max=n),(i||0===i)&&(c.min=i),o&&(c.velocity=0),c},mt=function(e){var t;return e&&e.getAttribute&&"BODY"!==e.nodeName?"true"===(t=e.getAttribute("data-clickable"))||"false"!==t&&(e.onclick||T.test(e.nodeName+""))?!0:mt(e.parentNode):!1},gt=function(){var e,t=p.createElement("div"),n=p.createElement("div"),i=n.style,r=p.body||Y;return i.display="inline-block",i.position="relative",t.style.cssText=n.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",t.appendChild(n),r.appendChild(t),a=n.offsetHeight+18>t.scrollHeight,i.width="100%",G||(i.paddingRight="500px",e=t.scrollLeft=t.scrollWidth-t.clientWidth,i.left="-90px",e=e!==t.scrollLeft),r.removeChild(t),e}(),vt=function(e,n){e=O(e),n=n||{};var i,r,o,s,l,c,u=p.createElement("div"),d=u.style,f=e.firstChild,h=0,m=0,g=e.scrollTop,v=e.scrollLeft,y=e.scrollWidth,b=e.scrollHeight,w=0,_=0,T=0;$&&n.force3D!==!1?(l="translate3d(",c="px,0px)"):G&&(l="translate(",c="px)"),this.scrollTop=function(e,t){return arguments.length?void this.top(-e,t):-this.top()},this.scrollLeft=function(e,t){return arguments.length?void this.left(-e,t):-this.left()},this.left=function(i,r){if(!arguments.length)return-(e.scrollLeft+m);var o=e.scrollLeft-v,a=m;return(o>2||-2>o)&&!r?(v=e.scrollLeft,t.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-v),void(n.onKill&&n.onKill())):(i=-i,0>i?(m=0|i-.5,i=0):i>_?(m=0|i-_,i=_):m=0,(m||a)&&(l?this._suspendTransforms||(d[G]=l+-m+"px,"+-h+c):d.left=-m+"px",gt&&m+w>=0&&(d.paddingRight=m+w+"px")),e.scrollLeft=0|i,void(v=e.scrollLeft))},this.top=function(i,r){if(!arguments.length)return-(e.scrollTop+h);var o=e.scrollTop-g,a=h;return(o>2||-2>o)&&!r?(g=e.scrollTop,t.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-g),void(n.onKill&&n.onKill())):(i=-i,0>i?(h=0|i-.5,i=0):i>T?(h=0|i-T,i=T):h=0,(h||a)&&(l?this._suspendTransforms||(d[G]=l+-m+"px,"+-h+c):d.top=-h+"px"),e.scrollTop=0|i,void(g=e.scrollTop))},this.maxScrollTop=function(){return T},this.maxScrollLeft=function(){return _},this.disable=function(){for(f=u.firstChild;f;)s=f.nextSibling,e.appendChild(f),f=s;e===u.parentNode&&e.removeChild(u)},this.enable=function(){if(f=e.firstChild,f!==u){for(;f;)s=f.nextSibling,u.appendChild(f),f=s;e.appendChild(u),this.calibrate()}},this.calibrate=function(t){var n,s,l=e.clientWidth===i;g=e.scrollTop,v=e.scrollLeft,(!l||e.clientHeight!==r||u.offsetHeight!==o||y!==e.scrollWidth||b!==e.scrollHeight||t)&&((h||m)&&(n=this.left(),s=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),(!l||t)&&(d.display="block",d.width="auto",d.paddingRight="0px",w=Math.max(0,e.scrollWidth-e.clientWidth),w&&(w+=B(e,"paddingLeft")+(a?B(e,"paddingRight"):0))),d.display="inline-block",d.position="relative",d.overflow="visible",d.width="100%",d.paddingRight=w+"px",a&&(d.paddingBottom=B(e,"paddingBottom",!0)),x&&(d.zoom="1"),i=e.clientWidth,r=e.clientHeight,y=e.scrollWidth,b=e.scrollHeight,_=e.scrollWidth-i,T=e.scrollHeight-r,o=u.offsetHeight,(n||s)&&(this.left(n),this.top(s)))},this.content=u,this.element=e,this._suspendTransforms=!1,this.enable()},yt=function(n,o){e.call(this,n),n=O(n),r||(r=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins.ThrowPropsPlugin),this.vars=o=o||{},this.target=n,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(o.dragResistance)||0,this.edgeResistance=isNaN(o.edgeResistance)?1:parseFloat(o.edgeResistance)||0,this.lockAxis=o.lockAxis;var a,d,f,b,T,N,E,A,L,I,H,W,j,F,z,Y,$,V,G,U,Q,Z,J,K,et,tt,rt=(o.type||(x?"top,left":"x,y")).toLowerCase(),ot=-1!==rt.indexOf("x")||-1!==rt.indexOf("y"),at=-1!==rt.indexOf("rotation"),st=ot?"x":"left",pt=ot?"y":"top",gt=-1!==rt.indexOf("x")||-1!==rt.indexOf("left")||"scroll"===rt,xt=-1!==rt.indexOf("y")||-1!==rt.indexOf("top")||"scroll"===rt,bt=this,wt=O(o.trigger||o.handle||n),_t={},Tt=0,St=function(e){if(V){var i=bt.x,r=bt.y,o=1e-6;o>i&&i>-o&&(i=0),o>r&&r>-o&&(r=0),at?(F.rotation=bt.rotation=bt.x,t.set(n,j)):d?(xt&&d.top(r),gt&&d.left(i)):ot?(xt&&(F.y=r),gt&&(F.x=i),t.set(n,j)):(xt&&(n.style.top=r+"px"),gt&&(n.style.left=i+"px")),A&&!e&&X(bt,"drag","onDrag")}V=!1},Ct=function(e,i){var r;ot?(n._gsTransform||t.set(n,{x:"+=0"}),bt.y=n._gsTransform.y,bt.x=n._gsTransform.x):at?(n._gsTransform||t.set(n,{x:"+=0"}),bt.x=bt.rotation=n._gsTransform.rotation):d?(bt.y=d.top(),bt.x=d.left()):(bt.y=parseInt(n.style.top,10)||0,bt.x=parseInt(n.style.left,10)||0),!U&&!Q||i||(U&&(r=U(bt.x),r!==bt.x&&(bt.x=r,at&&(bt.rotation=r),V=!0)),Q&&(r=Q(bt.y),r!==bt.y&&(bt.y=r,V=!0)),V&&St(!0)),o.onThrowUpdate&&!e&&o.onThrowUpdate.apply(o.onThrowUpdateScope||bt,o.onThrowUpdateParams||h)},Nt=function(){var e,t,i,r;E=!1,d?(d.calibrate(),bt.minX=I=-d.maxScrollLeft(),bt.minY=W=-d.maxScrollTop(),bt.maxX=L=bt.maxY=H=0,E=!0):o.bounds&&(e=q(o.bounds,n.parentNode),at?(bt.minX=I=e.left,bt.maxX=L=e.left+e.width,bt.minY=W=bt.maxY=H=0):void 0!==o.bounds.maxX||void 0!==o.bounds.maxY?(e=o.bounds,bt.minX=I=e.minX,bt.minY=W=e.minY,bt.maxX=L=e.maxX,bt.maxY=H=e.maxY):(t=q(n,n.parentNode),bt.minX=I=B(n,st)+e.left-t.left,bt.minY=W=B(n,pt)+e.top-t.top,bt.maxX=L=I+(e.width-t.width),bt.maxY=H=W+(e.height-t.height)),I>L&&(bt.minX=L,bt.maxX=L=I,I=bt.minX),W>H&&(bt.minY=H,bt.maxY=H=W,W=bt.minY),at&&(bt.minRotation=I,bt.maxRotation=L),E=!0),o.liveSnap&&(i=o.liveSnap===!0?o.snap||{}:o.liveSnap,r=i instanceof Array||"function"==typeof i,at?(U=At(r?i:i.rotation,I,L,1),Q=null):(gt&&(U=At(r?i:i.x||i.left||i.scrollLeft,I,L,d?-1:1)),xt&&(Q=At(r?i:i.y||i.top||i.scrollTop,W,H,d?-1:1))))},Pt=function(e,t){var i,a,s;e&&r?(e===!0&&(i=o.snap||{},a=i instanceof Array||"function"==typeof i,e={resistance:(o.throwResistance||o.resistance||1e3)/(at?10:1)},at?e.rotation=ht(bt,a?i:i.rotation,L,I,1,t):(gt&&(e[st]=ht(bt,a?i:i.x||i.left||i.scrollLeft,L,I,d?-1:1,t||bt.lockAxis&&"x"===K)),xt&&(e[pt]=ht(bt,a?i:i.y||i.top||i.scrollTop,H,W,d?-1:1,t||bt.lockAxis&&"y"===K)))),bt.tween=s=r.to(d||n,{throwProps:e,ease:o.ease||Power3.easeOut,onComplete:o.onThrowComplete,onCompleteParams:o.onThrowCompleteParams,onCompleteScope:o.onThrowCompleteScope||bt,onUpdate:o.fastMode?o.onThrowUpdate:Ct,onUpdateParams:o.fastMode?o.onThrowUpdateParams:null,onUpdateScope:o.onThrowUpdateScope||bt},isNaN(o.maxDuration)?2:o.maxDuration,isNaN(o.minDuration)?.5:o.minDuration,isNaN(o.overshootTolerance)?1-bt.edgeResistance+.2:o.overshootTolerance),o.fastMode||(d&&(d._suspendTransforms=!0),s.render(s.duration(),!0,!0),Ct(!0,!0),bt.endX=bt.x,bt.endY=bt.y,at&&(bt.endRotation=bt.x),s.play(0),Ct(!0,!0),d&&(d._suspendTransforms=!1))):E&&bt.applyBounds()},kt=function(){et=nt(n.parentNode,!0),et[1]||et[2]||1!=et[0]||1!=et[3]||0!=et[4]||0!=et[5]||(et=null)},Et=function(){var e=1-bt.edgeResistance;kt(),d?(Nt(),N=d.top(),T=d.left()):(Mt()?(Ct(!0,!0),Nt()):bt.applyBounds(),at?($=it(n,{x:0,y:0}),Ct(!0,!0),T=bt.x,N=bt.y=Math.atan2($.y-b,f-$.x)*g):(N=B(n,pt),T=B(n,st))),E&&e&&(T>L?T=L+(T-L)/e:I>T&&(T=I-(I-T)/e),at||(N>H?N=H+(N-H)/e:W>N&&(N=W-(W-N)/e)))},Mt=function(){return bt.tween&&bt.tween.isActive()},At=function(e,t,n,i){return"function"==typeof e?function(r){var o=bt.isPressed?1-bt.edgeResistance:1;return e.call(bt,r>n?n+(r-n)*o:t>r?t+(r-t)*o:r)*i}:e instanceof Array?function(i){for(var r,o,a=e.length,s=0,l=v;--a>-1;)r=e[a],o=r-i,0>o&&(o=-o),l>o&&r>=t&&n>=r&&(s=a,l=o);return e[s]}:isNaN(e)?function(e){return e}:function(){return e*i}},Lt=function(e){var i;if(a&&!bt.isPressed&&e){if(tt=Mt(),bt.pointerEvent=e,ct[e.type]?(J=-1!==e.type.indexOf("touch")?wt:p,ut(J,"touchend",Ot),ut(J,"touchmove",Dt),ut(J,"touchcancel",Ot),ut(p,"touchstart",ft)):(J=null,ut(p,"mousemove",Dt),ut(p,"mouseup",Ot)),Z=mt(e.target)&&!o.dragClickables)return void ut(e.target,"change",Ot);x?e=D(e,!0):!d||e.touches&&e.touches.length>S+1||(e.preventDefault(),e.preventManipulation&&e.preventManipulation()),e.changedTouches?(e=z=e.changedTouches[0],Y=e.identifier):e.pointerId?Y=e.pointerId:z=null,S++,P(St),bt.tween&&bt.tween.kill(),t.killTweensOf(d||n,!0,_t),d&&t.killTweensOf(n,!0,{scrollTo:1}),b=bt.pointerY=e.pageY,f=bt.pointerX=e.pageX,Et(),et&&(i=f*et[0]+b*et[2]+et[4],b=f*et[1]+b*et[3]+et[5],f=i),bt.tween=K=null,at||d||o.zIndexBoost===!1||(n.style.zIndex=yt.zIndex++),bt.isPressed=!0,A=!(!o.onDrag&&!bt._listeners.drag),at||R(wt,"cursor",o.cursor||"move"),X(bt,"press","onPress")}},Dt=function(e){if(a&&!i&&bt.isPressed){x?e=D(e,!0):(e.preventDefault(),e.preventManipulation&&e.preventManipulation()),bt.pointerEvent=e;var t,n,r,o,s,l,c,u,d,p=e.changedTouches,h=1-bt.dragResistance,m=1-bt.edgeResistance;if(p){if(e=p[0],e!==z&&e.identifier!==Y){for(s=p.length;--s>-1&&(e=p[s]).identifier!==Y;);if(0>s)return}}else if(e.pointerId&&Y&&e.pointerId!==Y)return;c=bt.pointerX=e.pageX,u=bt.pointerY=e.pageY,at?(o=Math.atan2($.y-e.pageY,e.pageX-$.x)*g,l=bt.y-o,bt.y=o,l>180?N-=360:-180>l&&(N+=360),r=T+(N-o)*h):(et&&(d=c*et[0]+u*et[2]+et[4],u=c*et[1]+u*et[3]+et[5],c=d),n=u-b,t=c-f,2>n&&n>-2&&(n=0),2>t&&t>-2&&(t=0),bt.lockAxis&&(t||n)&&("y"===K||!K&&Math.abs(t)>Math.abs(n)&&gt?(n=0,K="y"):xt&&(t=0,K="x")),r=T+t*h,o=N+n*h),U||Q?(U&&(r=U(r)),Q&&(o=Q(o))):E&&(r>L?r=L+(r-L)*m:I>r&&(r=I+(r-I)*m),at||(o>H?o=H+(o-H)*m:W>o&&(o=W+(o-W)*m))),at||(r=Math.round(r),o=Math.round(o)),(bt.x!==r||bt.y!==o&&!at)&&(bt.x=bt.endX=r,at?bt.endRotation=r:bt.y=bt.endY=o,V=!0,bt.isDragging||(bt.isDragging=!0,X(bt,"dragstart","onDragStart")))}},Ot=function(e,t){if(!(!a||e&&Y&&!t&&e.pointerId&&e.pointerId!==Y)){bt.isPressed=!1;var n,i,r=e,s=bt.isDragging;if(J?(dt(J,"touchend",Ot),dt(J,"touchmove",Dt),dt(J,"touchcancel",Ot),dt(p,"touchstart",ft)):(dt(p,"mouseup",Ot),dt(p,"mousemove",Dt)),V=!1,Z)return e&&dt(e.target,"change",Ot),X(bt,"release","onRelease"),X(bt,"click","onClick"),void(Z=!1);if(k(St),at||R(wt,"cursor",o.cursor||"move"),s&&(Tt=C=y(),bt.isDragging=!1),S--,e){if(x&&(e=D(e,!1)),n=e.changedTouches,n&&(e=n[0],e!==z&&e.identifier!==Y)){for(i=n.length;--i>-1&&(e=n[i]).identifier!==Y;);if(0>i)return}bt.pointerEvent=r,bt.pointerX=e.pageX,bt.pointerY=e.pageY}return r&&!s?(tt&&o.snap&&Pt(o.throwProps),X(bt,"release","onRelease"),X(bt,"click","onClick")):(Pt(o.throwProps),x||!r||!o.dragClickables&&mt(r.target)||!s||(r.preventDefault(),r.preventManipulation&&r.preventManipulation()),X(bt,"release","onRelease")),s&&X(bt,"dragend","onDragEnd"),!0}},It=function(e){(bt.isPressed||20>y()-Tt)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.preventManipulation&&e.preventManipulation())};G=yt.get(this.target),G&&G.kill(),this.startDrag=function(e){Lt(e),bt.isDragging||(bt.isDragging=!0,X(bt,"dragstart","onDragStart"))},this.drag=Dt,this.endDrag=function(e){Ot(e,!0)},this.timeSinceDrag=function(){return bt.isDragging?0:(y()-Tt)/1e3},this.hitTest=function(e,t){return yt.hitTest(bt.target,e,t)},this.applyBounds=function(e){var t,n;return e&&o.bounds!==e?(o.bounds=e,bt.update(!0)):(Ct(!0),Nt(),E&&(t=bt.x,n=bt.y,E&&(t>L?t=L:I>t&&(t=I),n>H?n=H:W>n&&(n=W)),(bt.x!==t||bt.y!==n)&&(bt.x=bt.endX=t,at?bt.endRotation=t:bt.y=bt.endY=n,V=!0,St())),bt)},this.update=function(e){var t=bt.x,n=bt.y;return kt(),e?bt.applyBounds():Ct(!0),bt.isPressed&&(Math.abs(t-bt.x)>.01||Math.abs(n-bt.y)>.01&&!at)&&Et(),bt},this.enable=function(e){var i;return"soft"!==e&&(ut(wt,"mousedown",Lt),ut(wt,"touchstart",Lt),ut(wt,"click",It),at||R(wt,"cursor",o.cursor||"move"),wt.ondragstart=wt.onselectstart=m,R(wt,"userSelect","none"),R(wt,"touchCallout","none"),R(wt,"touchAction","none")),a=!0,r&&"soft"!==e&&r.track(d||n,ot?"x,y":at?"rotation":"top,left"),d&&d.enable(),n._gsDragID=i="d"+_++,w[i]=this,d&&(d.element._gsDragID=i),t.set(n,{x:"+=0"}),this.update(),bt},this.disable=function(e){var t=this.isDragging;return at||R(wt,"cursor",null),"soft"!==e&&(wt.ondragstart=wt.onselectstart=null,R(wt,"userSelect","text"),R(wt,"touchCallout","default"),R(wt,"MSTouchAction","auto"),dt(wt,"mousedown",Lt),dt(wt,"touchstart",Lt),dt(wt,"click",It),J&&(dt(J,"touchcancel",Ot),dt(J,"touchend",Ot),dt(J,"touchmove",Dt)),dt(p,"mouseup",Ot),dt(p,"mousemove",Dt)),a=!1,r&&"soft"!==e&&r.untrack(d||n,ot?"x,y":at?"rotation":"top,left"),d&&d.disable(),k(St),this.isDragging=this.isPressed=Z=!1,t&&X(this,"dragend","onDragEnd"),bt},this.enabled=function(e,t){return arguments.length?e?this.enable(t):this.disable(t):a},this.kill=function(){return t.killTweensOf(d||n,!0,_t),bt.disable(),delete w[n._gsDragID],bt},-1!==rt.indexOf("scroll")&&(d=this.scrollProxy=new vt(n,M({onKill:function(){bt.isPressed&&Ot(null)}},o)),n.style.overflowY=xt&&!lt?"auto":"hidden",n.style.overflowX=gt&&!lt?"auto":"hidden",n=d.content),o.force3D!==!1&&t.set(n,{force3D:!0}),at?_t.rotation=1:(gt&&(_t[st]=1),xt&&(_t[pt]=1)),at?(j=u,F=j.css,j.overwrite=!1):ot&&(j=gt&&xt?s:gt?l:c,F=j.css,j.overwrite=!1),this.enable()},xt=yt.prototype=new e;xt.constructor=yt,xt.pointerX=xt.pointerY=0,xt.isDragging=xt.isPressed=!1,yt.version="0.10.5",yt.zIndex=1e3,ut(p,"touchcancel",function(){}),ut(p,"contextmenu",function(){var e;for(e in w)w[e].isPressed&&w[e].endDrag()}),yt.create=function(e,n){"string"==typeof e&&(e=t.selector(e));for(var i=at(e)?st(e):[e],r=i.length;--r>-1;)i[r]=new yt(i[r],n);return i},yt.get=function(e){return w[(O(e)||{})._gsDragID]},yt.timeSinceDrag=function(){return(y()-C)/1e3};var bt=function(e,t){var n=e.pageX!==t?{left:e.pageX,top:e.pageY,right:e.pageX+1,bottom:e.pageY+1}:e.nodeType||e.left===t||e.top===t?O(e).getBoundingClientRect():e;return n.right===t&&n.width!==t?(n.right=n.left+n.width,n.bottom=n.top+n.height):n.width===t&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n};return yt.hitTest=function(e,t,n){if(e===t)return!1;var i,r,o,a=bt(e),s=bt(t),l=s.left>a.right||s.right<a.left||s.top>a.bottom||s.bottom<a.top;return l||!n?!l:(o=-1!==(n+"").indexOf("%"),n=parseFloat(n)||0,i={left:Math.max(a.left,s.left),top:Math.max(a.top,s.top)},i.width=Math.min(a.right,s.right)-i.left,i.height=Math.min(a.bottom,s.bottom)-i.top,0>i.width||0>i.height?!1:o?(n*=.01,r=i.width*i.height,r>=a.width*a.height*n||r>=s.width*s.height*n):i.width>n&&i.height>n)},yt},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=t())}("Draggable");
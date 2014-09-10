/*!
 * VERSION: beta 0.2.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(t){"use strict";var e=t.GreenSockGlobals||t,n=function(t){var n,i=t.split("."),r=e;for(n=0;i.length>n;n++)r[i[n]]=r=r[i[n]]||{};return r},i=n("com.greensock.utils"),r=function(t){var e=t.nodeType,n="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=r(t)}else if(3===e||4===e)return t.nodeValue;return n},s=document,o=s.defaultView?s.defaultView.getComputedStyle:function(){},a=/([A-Z])/g,l=function(t,e,n,i){var r;return(n=n||o(t,null))?(t=n.getPropertyValue(e.replace(a,"-$1").toLowerCase()),r=t||n.length?t:n[e]):t.currentStyle&&(n=t.currentStyle,r=n[e]),i?r:parseInt(r,10)||0},u=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},c=function(t){var e,n,i,r=[],s=t.length;for(e=0;s>e;e++)if(n=t[e],u(n))for(i=n.length,i=0;n.length>i;i++)r.push(n[i]);else r.push(n);return r},h=")eefec303079ad17405c",p=/(?:<br>|<br\/>|<br \/>)/gi,f=s.all&&!s.addEventListener,d="<div style='position:relative;display:inline-block;"+(f?"*display:inline;*zoom:1;'":"'"),g=function(t){t=t||"";var e=-1!==t.indexOf("++"),n=1;return e&&(t=t.split("++").join("")),function(){return d+(t?" class='"+t+(e?n++:"")+"'>":">")}},m=i.SplitText=e.SplitText=function(t,e){if("string"==typeof t&&(t=m.selector(t)),!t)throw"cannot split a null element.";this.elements=u(t)?c(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=e||{},this.split(e)},v=function(t,e,n,i,a){p.test(t.innerHTML)&&(t.innerHTML=t.innerHTML.replace(p,h));var u,c,f,d,m,v,_,y,x,b,w,T,S,P=r(t),k=e.type||e.split||"chars,words,lines",C=-1!==k.indexOf("lines")?[]:null,N=-1!==k.indexOf("words"),A=-1!==k.indexOf("chars"),D="absolute"===e.position||e.absolute===!0,E=D?"&#173; ":" ",M=-999,O=o(t),R=l(t,"paddingLeft",O),L=l(t,"borderBottomWidth",O)+l(t,"borderTopWidth",O),j=l(t,"borderLeftWidth",O)+l(t,"borderRightWidth",O),X=l(t,"paddingTop",O)+l(t,"paddingBottom",O),F=l(t,"paddingLeft",O)+l(t,"paddingRight",O),z=l(t,"textAlign",O,!0),I=t.clientHeight,H=t.clientWidth,B=P.length,W="</div>",Y=g(e.wordsClass),q=g(e.charsClass),$=-1!==(e.linesClass||"").indexOf("++"),V=e.linesClass;for($&&(V=V.split("++").join("")),f=Y(),d=0;B>d;d++)v=P.charAt(d),")"===v&&P.substr(d,20)===h?(f+=W+"<BR/>",d!==B-1&&(f+=" "+Y()),d+=19):" "===v&&" "!==P.charAt(d-1)&&d!==B-1?(f+=W,d!==B-1&&(f+=E+Y())):f+=A&&" "!==v?q()+v+"</div>":v;for(t.innerHTML=f+W,m=t.getElementsByTagName("*"),B=m.length,_=[],d=0;B>d;d++)_[d]=m[d];if(C||D)for(d=0;B>d;d++)y=_[d],c=y.parentNode===t,(c||D||A&&!N)&&(x=y.offsetTop,C&&c&&x!==M&&"BR"!==y.nodeName&&(u=[],C.push(u),M=x),D&&(y._x=y.offsetLeft,y._y=x,y._w=y.offsetWidth,y._h=y.offsetHeight),C&&(N!==c&&A||(u.push(y),y._x-=R),c&&d&&(_[d-1]._wordEnd=!0)));for(d=0;B>d;d++)y=_[d],c=y.parentNode===t,"BR"!==y.nodeName?(D&&(w=y.style,N||c||(y._x+=y.parentNode._x,y._y+=y.parentNode._y),w.left=y._x+"px",w.top=y._y+"px",w.position="absolute",w.display="block",w.width=y._w+1+"px",w.height=y._h+"px"),N?c?i.push(y):A&&n.push(y):c?(t.removeChild(y),_.splice(d--,1),B--):!c&&A&&(x=!C&&!D&&y.nextSibling,t.appendChild(y),x||t.appendChild(s.createTextNode(" ")),n.push(y))):C||D?(t.removeChild(y),_.splice(d--,1),B--):N||t.appendChild(y);if(C){for(D&&(b=s.createElement("div"),t.appendChild(b),T=b.offsetWidth+"px",x=b.offsetParent===t?0:t.offsetLeft,t.removeChild(b)),w=t.style.cssText,t.style.cssText="display:none;";t.firstChild;)t.removeChild(t.firstChild);for(S=!D||!N&&!A,d=0;C.length>d;d++){for(u=C[d],b=s.createElement("div"),b.style.cssText="display:block;text-align:"+z+";position:"+(D?"absolute;":"relative;"),V&&(b.className=V+($?d+1:"")),a.push(b),B=u.length,m=0;B>m;m++)"BR"!==u[m].nodeName&&(y=u[m],b.appendChild(y),S&&(y._wordEnd||N)&&b.appendChild(s.createTextNode(" ")),D&&(0===m&&(b.style.top=y._y+"px",b.style.left=R+x+"px"),y.style.top="0px",x&&(y.style.left=y._x-x+"px")));N||A||(b.innerHTML=r(b).split(String.fromCharCode(160)).join(" ")),D&&(b.style.width=T,b.style.height=y._h+"px"),t.appendChild(b)}t.style.cssText=w}D&&(I>t.clientHeight&&(t.style.height=I-X+"px",I>t.clientHeight&&(t.style.height=I+L+"px")),H>t.clientWidth&&(t.style.width=H-F+"px",H>t.clientWidth&&(t.style.width=H+j+"px")))},_=m.prototype;_.split=function(t){this.isSplit&&this.revert(),this.vars=t||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var e=0;this.elements.length>e;e++)this._originals[e]=this.elements[e].innerHTML,v(this.elements[e],this.vars,this.chars,this.words,this.lines);return this.isSplit=!0,this},_.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var t=this._originals.length;--t>-1;)this.elements[t].innerHTML=this._originals[t];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},m.selector=t.$||t.jQuery||function(e){return t.$?(m.selector=t.$,t.$(e)):s?s.getElementById("#"===e.charAt(0)?e.substr(1):e):e},m.version="0.2.4"}(_gsScope),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e())}("SplitText");
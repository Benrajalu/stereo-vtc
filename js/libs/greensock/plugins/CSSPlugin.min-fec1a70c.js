/*!
 * VERSION: 1.13.0
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(e,t){var n,r,i,a,o=function(){e.call(this,"css"),this._overwriteProps.length=0,this.setRatio=o.prototype.setRatio},s={},l=o.prototype=new e("css");l.constructor=o,o.version="1.13.0",o.API=2,o.defaultTransformPerspective=0,o.defaultSkewType="compensated",l="px",o.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var c,u,d,p,f,h,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,v=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/[^\d\-\.]/g,b=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,S=/alpha\(opacity *=.+?\)/i,T=/^(rgb|hsl)/,_=/([A-Z])/g,C=/-([a-z])/gi,N=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,P=function(e,t){return t.toUpperCase()},k=/(?:Left|Right|Width)/i,E=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,M=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,A=/,(?=[^\)]*(?:\(|$))/gi,L=Math.PI/180,D=180/Math.PI,O={},I=document,R=I.createElement("div"),W=I.createElement("img"),H=o._internals={_specialProps:s},j=navigator.userAgent,z=function(){var e,t=j.indexOf("Android"),n=I.createElement("div");return d=-1!==j.indexOf("Safari")&&-1===j.indexOf("Chrome")&&(-1===t||Number(j.substr(t+8,1))>3),f=d&&6>Number(j.substr(j.indexOf("Version/")+8,1)),p=-1!==j.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j)&&(h=parseFloat(RegExp.$1)),n.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",e=n.getElementsByTagName("a")[0],e?/^0.55/.test(e.style.opacity):!1}(),F=function(e){return x.test("string"==typeof e?e:(e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(e){window.console&&console.log(e)},q="",$="",X=function(e,t){t=t||R;var n,r,i=t.style;if(void 0!==i[e])return e;for(e=e.charAt(0).toUpperCase()+e.substr(1),n=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===i[n[r]+e];);return r>=0?($=3===r?"ms":n[r],q="-"+$.toLowerCase()+"-",$+e):null},Y=I.defaultView?I.defaultView.getComputedStyle:function(){},V=o.getStyle=function(e,t,n,r,i){var a;return z||"opacity"!==t?(!r&&e.style[t]?a=e.style[t]:(n=n||Y(e))?a=n[t]||n.getPropertyValue(t)||n.getPropertyValue(t.replace(_,"-$1").toLowerCase()):e.currentStyle&&(a=e.currentStyle[t]),null==i||a&&"none"!==a&&"auto"!==a&&"auto auto"!==a?a:i):F(e)},G=H.convertToPixels=function(e,n,r,i,a){if("px"===i||!i)return r;if("auto"===i||!r)return 0;var s,l,c,u=k.test(n),d=e,p=R.style,f=0>r;if(f&&(r=-r),"%"===i&&-1!==n.indexOf("border"))s=r/100*(u?e.clientWidth:e.clientHeight);else{if(p.cssText="border:0 solid red;position:"+V(e,"position")+";line-height:0;","%"!==i&&d.appendChild)p[u?"borderLeftWidth":"borderTopWidth"]=r+i;else{if(d=e.parentNode||I.body,l=d._gsCache,c=t.ticker.frame,l&&u&&l.time===c)return l.width*r/100;p[u?"width":"height"]=r+i}d.appendChild(R),s=parseFloat(R[u?"offsetWidth":"offsetHeight"]),d.removeChild(R),u&&"%"===i&&o.cacheWidths!==!1&&(l=d._gsCache=d._gsCache||{},l.time=c,l.width=100*(s/r)),0!==s||a||(s=G(e,n,r,i,!0))}return f?-s:s},U=H.calculateOffset=function(e,t,n){if("absolute"!==V(e,"position",n))return 0;var r="left"===t?"Left":"Top",i=V(e,"margin"+r,n);return e["offset"+r]-(G(e,t,parseFloat(i),i.replace(b,""))||0)},Q=function(e,t){var n,r,i={};if(t=t||Y(e,null))if(n=t.length)for(;--n>-1;)i[t[n].replace(C,P)]=t.getPropertyValue(t[n]);else for(n in t)i[n]=t[n];else if(t=e.currentStyle||e.style)for(n in t)"string"==typeof n&&void 0===i[n]&&(i[n.replace(C,P)]=t[n]);return z||(i.opacity=F(e)),r=_t(e,t,!1),i.rotation=r.rotation,i.skewX=r.skewX,i.scaleX=r.scaleX,i.scaleY=r.scaleY,i.x=r.x,i.y=r.y,St&&(i.z=r.z,i.rotationX=r.rotationX,i.rotationY=r.rotationY,i.scaleZ=r.scaleZ),i.filters&&delete i.filters,i},Z=function(e,t,n,r,i){var a,o,s,l={},c=e.style;for(o in n)"cssText"!==o&&"length"!==o&&isNaN(o)&&(t[o]!==(a=n[o])||i&&i[o])&&-1===o.indexOf("Origin")&&("number"==typeof a||"string"==typeof a)&&(l[o]="auto"!==a||"left"!==o&&"top"!==o?""!==a&&"auto"!==a&&"none"!==a||"string"!=typeof t[o]||""===t[o].replace(y,"")?a:0:U(e,o),void 0!==c[o]&&(s=new dt(c,o,c[o],s)));if(r)for(o in r)"className"!==o&&(l[o]=r[o]);return{difs:l,firstMPT:s}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],et=function(e,t,n){var r=parseFloat("width"===t?e.offsetWidth:e.offsetHeight),i=K[t],a=i.length;for(n=n||Y(e,null);--a>-1;)r-=parseFloat(V(e,"padding"+i[a],n,!0))||0,r-=parseFloat(V(e,"border"+i[a]+"Width",n,!0))||0;return r},tt=function(e,t){(null==e||""===e||"auto"===e||"auto auto"===e)&&(e="0 0");var n=e.split(" "),r=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":n[0],i=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":n[1];return null==i?i="0":"center"===i&&(i="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),t&&(t.oxp=-1!==r.indexOf("%"),t.oyp=-1!==i.indexOf("%"),t.oxr="="===r.charAt(1),t.oyr="="===i.charAt(1),t.ox=parseFloat(r.replace(y,"")),t.oy=parseFloat(i.replace(y,""))),r+" "+i+(n.length>2?" "+n[2]:"")},nt=function(e,t){return"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2)):parseFloat(e)-parseFloat(t)},rt=function(e,t){return null==e?t:"string"==typeof e&&"="===e.charAt(1)?parseInt(e.charAt(0)+"1",10)*Number(e.substr(2))+t:parseFloat(e)},it=function(e,t,n,r){var i,a,o,s,l=1e-6;return null==e?s=t:"number"==typeof e?s=e:(i=360,a=e.split("_"),o=Number(a[0].replace(y,""))*(-1===e.indexOf("rad")?1:D)-("="===e.charAt(1)?0:t),a.length&&(r&&(r[n]=t+o),-1!==e.indexOf("short")&&(o%=i,o!==o%(i/2)&&(o=0>o?o+i:o-i)),-1!==e.indexOf("_cw")&&0>o?o=(o+9999999999*i)%i-(0|o/i)*i:-1!==e.indexOf("ccw")&&o>0&&(o=(o-9999999999*i)%i-(0|o/i)*i)),s=t+o),l>s&&s>-l&&(s=0),s},at={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ot=function(e,t,n){return e=0>e?e+1:e>1?e-1:e,0|255*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},st=function(e){var t,n,r,i,a,o;return e&&""!==e?"number"==typeof e?[e>>16,255&e>>8,255&e]:(","===e.charAt(e.length-1)&&(e=e.substr(0,e.length-1)),at[e]?at[e]:"#"===e.charAt(0)?(4===e.length&&(t=e.charAt(1),n=e.charAt(2),r=e.charAt(3),e="#"+t+t+n+n+r+r),e=parseInt(e.substr(1),16),[e>>16,255&e>>8,255&e]):"hsl"===e.substr(0,3)?(e=e.match(m),i=Number(e[0])%360/360,a=Number(e[1])/100,o=Number(e[2])/100,n=.5>=o?o*(a+1):o+a-o*a,t=2*o-n,e.length>3&&(e[3]=Number(e[3])),e[0]=ot(i+1/3,t,n),e[1]=ot(i,t,n),e[2]=ot(i-1/3,t,n),e):(e=e.match(m)||at.transparent,e[0]=Number(e[0]),e[1]=Number(e[1]),e[2]=Number(e[2]),e.length>3&&(e[3]=Number(e[3])),e)):at.black},lt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in at)lt+="|"+l+"\\b";lt=RegExp(lt+")","gi");var ct=function(e,t,n,r){if(null==e)return function(e){return e};var i,a=t?(e.match(lt)||[""])[0]:"",o=e.split(a).join("").match(g)||[],s=e.substr(0,e.indexOf(o[0])),l=")"===e.charAt(e.length-1)?")":"",c=-1!==e.indexOf(" ")?" ":",",u=o.length,d=u>0?o[0].replace(m,""):"";return u?i=t?function(e){var t,p,f,h;if("number"==typeof e)e+=d;else if(r&&A.test(e)){for(h=e.replace(A,"|").split("|"),f=0;h.length>f;f++)h[f]=i(h[f]);return h.join(",")}if(t=(e.match(lt)||[a])[0],p=e.split(t).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=n?p[0|(f-1)/2]:o[f];return s+p.join(c)+c+t+l+(-1!==e.indexOf("inset")?" inset":"")}:function(e){var t,a,p;if("number"==typeof e)e+=d;else if(r&&A.test(e)){for(a=e.replace(A,"|").split("|"),p=0;a.length>p;p++)a[p]=i(a[p]);return a.join(",")}if(t=e.match(g)||[],p=t.length,u>p--)for(;u>++p;)t[p]=n?t[0|(p-1)/2]:o[p];return s+t.join(c)+l}:function(e){return e}},ut=function(e){return e=e.split(","),function(t,n,r,i,a,o,s){var l,c=(n+"").split(" ");for(s={},l=0;4>l;l++)s[e[l]]=c[l]=c[l]||c[(l-1)/2>>0];return i.parse(t,s,a,o)}},dt=(H._setPluginRatio=function(e){this.plugin.setRatio(e);for(var t,n,r,i,a=this.data,o=a.proxy,s=a.firstMPT,l=1e-6;s;)t=o[s.v],s.r?t=Math.round(t):l>t&&t>-l&&(t=0),s.t[s.p]=t,s=s._next;if(a.autoRotate&&(a.autoRotate.rotation=o.rotation),1===e)for(s=a.firstMPT;s;){if(n=s.t,n.type){if(1===n.type){for(i=n.xs0+n.s+n.xs1,r=1;n.l>r;r++)i+=n["xn"+r]+n["xs"+(r+1)];n.e=i}}else n.e=n.s+n.xs0;s=s._next}},function(e,t,n,r,i){this.t=e,this.p=t,this.v=n,this.r=i,r&&(r._prev=this,this._next=r)}),pt=(H._parseToProxy=function(e,t,n,r,i,a){var o,s,l,c,u,d=r,p={},f={},h=n._transform,m=O;for(n._transform=null,O=t,r=u=n.parse(e,t,r,i),O=m,a&&(n._transform=h,d&&(d._prev=null,d._prev&&(d._prev._next=null)));r&&r!==d;){if(1>=r.type&&(s=r.p,f[s]=r.s+r.c,p[s]=r.s,a||(c=new dt(r,"s",s,c,r.r),r.c=0),1===r.type))for(o=r.l;--o>0;)l="xn"+o,s=r.p+"_"+l,f[s]=r.data[l],p[s]=r[l],a||(c=new dt(r,l,s,c,r.rxp[l]));r=r._next}return{proxy:p,end:f,firstMPT:c,pt:u}},H.CSSPropTween=function(e,t,r,i,o,s,l,c,u,d,p){this.t=e,this.p=t,this.s=r,this.c=i,this.n=l||t,e instanceof pt||a.push(this.n),this.r=c,this.type=s||0,u&&(this.pr=u,n=!0),this.b=void 0===d?r:d,this.e=void 0===p?r+i:p,o&&(this._next=o,o._prev=this)}),ft=o.parseComplex=function(e,t,n,r,i,a,o,s,l,u){n=n||a||"",o=new pt(e,t,0,0,o,u?2:1,null,!1,s,n,r),r+="";var d,p,f,h,g,y,b,x,w,S,_,C,N=n.split(", ").join(",").split(" "),P=r.split(", ").join(",").split(" "),k=N.length,E=c!==!1;for((-1!==r.indexOf(",")||-1!==n.indexOf(","))&&(N=N.join(" ").replace(A,", ").split(" "),P=P.join(" ").replace(A,", ").split(" "),k=N.length),k!==P.length&&(N=(a||"").split(" "),k=N.length),o.plugin=l,o.setRatio=u,d=0;k>d;d++)if(h=N[d],g=P[d],x=parseFloat(h),x||0===x)o.appendXtra("",x,nt(g,x),g.replace(v,""),E&&-1!==g.indexOf("px"),!0);else if(i&&("#"===h.charAt(0)||at[h]||T.test(h)))C=","===g.charAt(g.length-1)?"),":")",h=st(h),g=st(g),w=h.length+g.length>6,w&&!z&&0===g[3]?(o["xs"+o.l]+=o.l?" transparent":"transparent",o.e=o.e.split(P[d]).join("transparent")):(z||(w=!1),o.appendXtra(w?"rgba(":"rgb(",h[0],g[0]-h[0],",",!0,!0).appendXtra("",h[1],g[1]-h[1],",",!0).appendXtra("",h[2],g[2]-h[2],w?",":C,!0),w&&(h=4>h.length?1:h[3],o.appendXtra("",h,(4>g.length?1:g[3])-h,C,!1)));else if(y=h.match(m)){if(b=g.match(v),!b||b.length!==y.length)return o;for(f=0,p=0;y.length>p;p++)_=y[p],S=h.indexOf(_,f),o.appendXtra(h.substr(f,S-f),Number(_),nt(b[p],_),"",E&&"px"===h.substr(S+_.length,2),0===p),f=S+_.length;o["xs"+o.l]+=h.substr(f)}else o["xs"+o.l]+=o.l?" "+h:h;if(-1!==r.indexOf("=")&&o.data){for(C=o.xs0+o.data.s,d=1;o.l>d;d++)C+=o["xs"+d]+o.data["xn"+d];o.e=C+o["xs"+d]}return o.l||(o.type=-1,o.xs0=o.e),o.xfirst||o},ht=9;for(l=pt.prototype,l.l=l.pr=0;--ht>0;)l["xn"+ht]=0,l["xs"+ht]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(e,t,n,r,i,a){var o=this,s=o.l;return o["xs"+s]+=a&&s?" "+e:e||"",n||0===s||o.plugin?(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=r||"",s>0?(o.data["xn"+s]=t+n,o.rxp["xn"+s]=i,o["xn"+s]=t,o.plugin||(o.xfirst=new pt(o,"xn"+s,t,n,o.xfirst||o,0,o.n,i,o.pr),o.xfirst.xs0=0),o):(o.data={s:t+n},o.rxp={},o.s=t,o.c=n,o.r=i,o)):(o["xs"+s]+=t+(r||""),o)};var mt=function(e,t){t=t||{},this.p=t.prefix?X(e)||e:e,s[e]=s[this.p]=this,this.format=t.formatter||ct(t.defaultValue,t.color,t.collapsible,t.multi),t.parser&&(this.parse=t.parser),this.clrs=t.color,this.multi=t.multi,this.keyword=t.keyword,this.dflt=t.defaultValue,this.pr=t.priority||0},vt=H._registerComplexSpecialProp=function(e,t,n){"object"!=typeof t&&(t={parser:n});var r,i,a=e.split(","),o=t.defaultValue;for(n=n||[o],r=0;a.length>r;r++)t.prefix=0===r&&t.prefix,t.defaultValue=n[r]||o,i=new mt(a[r],t)},gt=function(e){if(!s[e]){var t=e.charAt(0).toUpperCase()+e.substr(1)+"Plugin";vt(e,{parser:function(e,n,r,i,a,o,l){var c=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[t];return c?(c._cssRegister(),s[r].parse(e,n,r,i,a,o,l)):(B("Error: "+t+" js file not loaded."),a)}})}};l=mt.prototype,l.parseComplex=function(e,t,n,r,i,a){var o,s,l,c,u,d,p=this.keyword;if(this.multi&&(A.test(n)||A.test(t)?(s=t.replace(A,"|").split("|"),l=n.replace(A,"|").split("|")):p&&(s=[t],l=[n])),l){for(c=l.length>s.length?l.length:s.length,o=0;c>o;o++)t=s[o]=s[o]||this.dflt,n=l[o]=l[o]||this.dflt,p&&(u=t.indexOf(p),d=n.indexOf(p),u!==d&&(n=-1===d?l:s,n[o]+=" "+p));t=s.join(", "),n=l.join(", ")}return ft(e,this.p,t,n,this.clrs,this.dflt,r,this.pr,i,a)},l.parse=function(e,t,n,r,a,o){return this.parseComplex(e.style,this.format(V(e,this.p,i,!1,this.dflt)),this.format(t),a,o)},o.registerSpecialProp=function(e,t,n){vt(e,{parser:function(e,r,i,a,o,s){var l=new pt(e,i,0,0,o,2,i,!1,n);return l.plugin=s,l.setRatio=t(e,r,a._tween,i),l},priority:n})};var yt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),bt=X("transform"),xt=q+"transform",wt=X("transformOrigin"),St=null!==X("perspective"),Tt=H.Transform=function(){this.skewY=0},_t=H.getTransform=function(e,t,n,r){if(e._gsTransform&&n&&!r)return e._gsTransform;var i,a,s,l,c,u,d,p,f,h,m,v,g,y=n?e._gsTransform||new Tt:new Tt,b=0>y.scaleX,x=2e-5,w=1e5,S=179.99,T=S*L,_=St?parseFloat(V(e,wt,t,!1,"0 0 0").split(" ")[2])||y.zOrigin||0:0;if(bt?i=V(e,xt,t,!0):e.currentStyle&&(i=e.currentStyle.filter.match(E),i=i&&4===i.length?[i[0].substr(4),Number(i[2].substr(4)),Number(i[1].substr(4)),i[3].substr(4),y.x||0,y.y||0].join(","):""),i&&"none"!==i&&"matrix(1, 0, 0, 1, 0, 0)"!==i){for(a=(i||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],s=a.length;--s>-1;)l=Number(a[s]),a[s]=(c=l-(l|=0))?(0|c*w+(0>c?-.5:.5))/w+l:l;if(16===a.length){var C=a[8],N=a[9],P=a[10],k=a[12],M=a[13],A=a[14];if(y.zOrigin&&(A=-y.zOrigin,k=C*A-a[12],M=N*A-a[13],A=P*A+y.zOrigin-a[14]),!n||r||null==y.rotationX){var O,I,R,W,H,j,z,F=a[0],B=a[1],q=a[2],$=a[3],X=a[4],Y=a[5],G=a[6],U=a[7],Q=a[11],Z=Math.atan2(G,P),K=-T>Z||Z>T;y.rotationX=Z*D,Z&&(W=Math.cos(-Z),H=Math.sin(-Z),O=X*W+C*H,I=Y*W+N*H,R=G*W+P*H,C=X*-H+C*W,N=Y*-H+N*W,P=G*-H+P*W,Q=U*-H+Q*W,X=O,Y=I,G=R),Z=Math.atan2(C,F),y.rotationY=Z*D,Z&&(j=-T>Z||Z>T,W=Math.cos(-Z),H=Math.sin(-Z),O=F*W-C*H,I=B*W-N*H,R=q*W-P*H,N=B*H+N*W,P=q*H+P*W,Q=$*H+Q*W,F=O,B=I,q=R),Z=Math.atan2(B,Y),y.rotation=Z*D,Z&&(z=-T>Z||Z>T,W=Math.cos(-Z),H=Math.sin(-Z),F=F*W+X*H,I=B*W+Y*H,Y=B*-H+Y*W,G=q*-H+G*W,B=I),z&&K?y.rotation=y.rotationX=0:z&&j?y.rotation=y.rotationY=0:j&&K&&(y.rotationY=y.rotationX=0),y.scaleX=(0|Math.sqrt(F*F+B*B)*w+.5)/w,y.scaleY=(0|Math.sqrt(Y*Y+N*N)*w+.5)/w,y.scaleZ=(0|Math.sqrt(G*G+P*P)*w+.5)/w,y.skewX=0,y.perspective=Q?1/(0>Q?-Q:Q):0,y.x=k,y.y=M,y.z=A}}else if(!(St&&!r&&a.length&&y.x===a[4]&&y.y===a[5]&&(y.rotationX||y.rotationY)||void 0!==y.x&&"none"===V(e,"display",t))){var J=a.length>=6,et=J?a[0]:1,tt=a[1]||0,nt=a[2]||0,rt=J?a[3]:1;y.x=a[4]||0,y.y=a[5]||0,u=Math.sqrt(et*et+tt*tt),d=Math.sqrt(rt*rt+nt*nt),p=et||tt?Math.atan2(tt,et)*D:y.rotation||0,f=nt||rt?Math.atan2(nt,rt)*D+p:y.skewX||0,h=u-Math.abs(y.scaleX||0),m=d-Math.abs(y.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(b?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(d*=-1,f+=0>=f?180:-180)),v=(p-y.rotation)%180,g=(f-y.skewX)%180,(void 0===y.skewX||h>x||-x>h||m>x||-x>m||v>-S&&S>v&&!1|v*w||g>-S&&S>g&&!1|g*w)&&(y.scaleX=u,y.scaleY=d,y.rotation=p,y.skewX=f),St&&(y.rotationX=y.rotationY=y.z=0,y.perspective=parseFloat(o.defaultTransformPerspective)||0,y.scaleZ=1)}y.zOrigin=_;for(s in y)x>y[s]&&y[s]>-x&&(y[s]=0)}else y={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,perspective:0,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return n&&(e._gsTransform=y),y.xPercent=y.yPercent=0,y},Ct=function(e){var t,n,r=this.data,i=-r.rotation*L,a=i+r.skewX*L,o=1e5,s=(0|Math.cos(i)*r.scaleX*o)/o,l=(0|Math.sin(i)*r.scaleX*o)/o,c=(0|Math.sin(a)*-r.scaleY*o)/o,u=(0|Math.cos(a)*r.scaleY*o)/o,d=this.t.style,p=this.t.currentStyle;if(p){n=l,l=-c,c=-n,t=p.filter,d.filter="";var f,m,v=this.t.offsetWidth,g=this.t.offsetHeight,y="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+s+", M12="+l+", M21="+c+", M22="+u,S=r.x+v*r.xPercent/100,T=r.y+g*r.yPercent/100;if(null!=r.ox&&(f=(r.oxp?.01*v*r.ox:r.ox)-v/2,m=(r.oyp?.01*g*r.oy:r.oy)-g/2,S+=f-(f*s+m*l),T+=m-(f*c+m*u)),y?(f=v/2,m=g/2,w+=", Dx="+(f-(f*s+m*l)+S)+", Dy="+(m-(f*c+m*u)+T)+")"):w+=", sizingMethod='auto expand')",d.filter=-1!==t.indexOf("DXImageTransform.Microsoft.Matrix(")?t.replace(M,w):w+" "+t,(0===e||1===e)&&1===s&&0===l&&0===c&&1===u&&(y&&-1===w.indexOf("Dx=0, Dy=0")||x.test(t)&&100!==parseFloat(RegExp.$1)||-1===t.indexOf("gradient("&&t.indexOf("Alpha"))&&d.removeAttribute("filter")),!y){var _,C,N,P=8>h?1:-1;for(f=r.ieOffsetX||0,m=r.ieOffsetY||0,r.ieOffsetX=Math.round((v-((0>s?-s:s)*v+(0>l?-l:l)*g))/2+S),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>c?-c:c)*v))/2+T),ht=0;4>ht;ht++)C=J[ht],_=p[C],n=-1!==_.indexOf("px")?parseFloat(_):G(this.t,C,parseFloat(_),_.replace(b,""))||0,N=n!==r[C]?2>ht?-r.ieOffsetX:-r.ieOffsetY:2>ht?f-r.ieOffsetX:m-r.ieOffsetY,d[C]=(r[C]=Math.round(n-N*(0===ht||2===ht?1:P)))+"px"}}},Nt=H.set3DTransformRatio=function(e){var t,n,r,i,a,o,s,l,c,u,d,f,h,m,v,g,y,b,x,w,S,T,_,C=this.data,N=this.t.style,P=C.rotation*L,k=C.scaleX,E=C.scaleY,M=C.scaleZ,A=C.x,D=C.y,O=C.z,I=C.perspective;if(!(1!==e&&0!==e||"auto"!==C.force3D||C.rotationY||C.rotationX||1!==M||I||O))return void Pt.call(this,e);if(p){var R=1e-4;R>k&&k>-R&&(k=M=2e-5),R>E&&E>-R&&(E=M=2e-5),!I||C.z||C.rotationX||C.rotationY||(I=0)}if(P||C.skewX)b=Math.cos(P),x=Math.sin(P),t=b,a=x,C.skewX&&(P-=C.skewX*L,b=Math.cos(P),x=Math.sin(P),"simple"===C.skewType&&(w=Math.tan(C.skewX*L),w=Math.sqrt(1+w*w),b*=w,x*=w)),n=-x,o=b;else{if(!(C.rotationY||C.rotationX||1!==M||I))return void(N[bt]=(C.xPercent||C.yPercent?"translate("+C.xPercent+"%,"+C.yPercent+"%) translate3d(":"translate3d(")+A+"px,"+D+"px,"+O+"px)"+(1!==k||1!==E?" scale("+k+","+E+")":""));t=o=1,n=a=0}d=1,r=i=s=l=c=u=f=h=m=0,v=I?-1/I:0,g=C.zOrigin,y=1e5,P=C.rotationY*L,P&&(b=Math.cos(P),x=Math.sin(P),c=d*-x,h=v*-x,r=t*x,s=a*x,d*=b,v*=b,t*=b,a*=b),P=C.rotationX*L,P&&(b=Math.cos(P),x=Math.sin(P),w=n*b+r*x,S=o*b+s*x,T=u*b+d*x,_=m*b+v*x,r=n*-x+r*b,s=o*-x+s*b,d=u*-x+d*b,v=m*-x+v*b,n=w,o=S,u=T,m=_),1!==M&&(r*=M,s*=M,d*=M,v*=M),1!==E&&(n*=E,o*=E,u*=E,m*=E),1!==k&&(t*=k,a*=k,c*=k,h*=k),g&&(f-=g,i=r*f,l=s*f,f=d*f+g),i=(w=(i+=A)-(i|=0))?(0|w*y+(0>w?-.5:.5))/y+i:i,l=(w=(l+=D)-(l|=0))?(0|w*y+(0>w?-.5:.5))/y+l:l,f=(w=(f+=O)-(f|=0))?(0|w*y+(0>w?-.5:.5))/y+f:f,N[bt]=(C.xPercent||C.yPercent?"translate("+C.xPercent+"%,"+C.yPercent+"%) matrix3d(":"matrix3d(")+[(0|t*y)/y,(0|a*y)/y,(0|c*y)/y,(0|h*y)/y,(0|n*y)/y,(0|o*y)/y,(0|u*y)/y,(0|m*y)/y,(0|r*y)/y,(0|s*y)/y,(0|d*y)/y,(0|v*y)/y,i,l,f,I?1+-f/I:1].join(",")+")"},Pt=H.set2DTransformRatio=function(e){var t,n,r,i,a,o=this.data,s=this.t,l=s.style,c=o.x,u=o.y;return o.rotationX||o.rotationY||o.z||o.force3D===!0||"auto"===o.force3D&&1!==e&&0!==e?(this.setRatio=Nt,void Nt.call(this,e)):void(o.rotation||o.skewX?(t=o.rotation*L,n=t-o.skewX*L,r=1e5,i=o.scaleX*r,a=o.scaleY*r,l[bt]=(o.xPercent||o.yPercent?"translate("+o.xPercent+"%,"+o.yPercent+"%) matrix(":"matrix(")+(0|Math.cos(t)*i)/r+","+(0|Math.sin(t)*i)/r+","+(0|Math.sin(n)*-a)/r+","+(0|Math.cos(n)*a)/r+","+c+","+u+")"):l[bt]=(o.xPercent||o.yPercent?"translate("+o.xPercent+"%,"+o.yPercent+"%) matrix(":"matrix(")+o.scaleX+",0,0,"+o.scaleY+","+c+","+u+")")};vt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(e,t,n,r,a,s,l){if(r._transform)return a;var c,u,d,p,f,h,m,v=r._transform=_t(e,i,!0,l.parseTransform),g=e.style,y=1e-6,b=yt.length,x=l,w={};if("string"==typeof x.transform&&bt)d=R.style,d[bt]=x.transform,d.display="block",d.position="absolute",I.body.appendChild(R),c=_t(R,null,!1),I.body.removeChild(R);else if("object"==typeof x){if(c={scaleX:rt(null!=x.scaleX?x.scaleX:x.scale,v.scaleX),scaleY:rt(null!=x.scaleY?x.scaleY:x.scale,v.scaleY),scaleZ:rt(x.scaleZ,v.scaleZ),x:rt(x.x,v.x),y:rt(x.y,v.y),z:rt(x.z,v.z),xPercent:rt(x.xPercent,v.xPercent),yPercent:rt(x.yPercent,v.yPercent),perspective:rt(x.transformPerspective,v.perspective)},m=x.directionalRotation,null!=m)if("object"==typeof m)for(d in m)x[d]=m[d];else x.rotation=m;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(c.x=0,c.xPercent=rt(x.x,v.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(c.y=0,c.yPercent=rt(x.y,v.yPercent)),c.rotation=it("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:v.rotation,v.rotation,"rotation",w),St&&(c.rotationX=it("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":v.rotationX||0,v.rotationX,"rotationX",w),c.rotationY=it("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":v.rotationY||0,v.rotationY,"rotationY",w)),c.skewX=null==x.skewX?v.skewX:it(x.skewX,v.skewX),c.skewY=null==x.skewY?v.skewY:it(x.skewY,v.skewY),(u=c.skewY-v.skewY)&&(c.skewX+=u,c.rotation+=u)}for(St&&null!=x.force3D&&(v.force3D=x.force3D,h=!0),v.skewType=x.skewType||v.skewType||o.defaultSkewType,f=v.force3D||v.z||v.rotationX||v.rotationY||c.z||c.rotationX||c.rotationY||c.perspective,f||null==x.scale||(c.scaleZ=1);--b>-1;)n=yt[b],p=c[n]-v[n],(p>y||-y>p||null!=O[n])&&(h=!0,a=new pt(v,n,v[n],p,a),n in w&&(a.e=w[n]),a.xs0=0,a.plugin=s,r._overwriteProps.push(a.n));return p=x.transformOrigin,(p||St&&f&&v.zOrigin)&&(bt?(h=!0,n=wt,p=(p||V(e,n,i,!1,"50% 50%"))+"",a=new pt(g,n,0,0,a,-1,"transformOrigin"),a.b=g[n],a.plugin=s,St?(d=v.zOrigin,p=p.split(" "),v.zOrigin=(p.length>2&&(0===d||"0px"!==p[2])?parseFloat(p[2]):d)||0,a.xs0=a.e=p[0]+" "+(p[1]||"50%")+" 0px",a=new pt(v,"zOrigin",0,0,a,-1,a.n),a.b=d,a.xs0=a.e=v.zOrigin):a.xs0=a.e=p):tt(p+"",v)),h&&(r._transformType=f||3===this._transformType?3:2),a},prefix:!0}),vt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),vt("borderRadius",{defaultValue:"0px",parser:function(e,t,n,a,o){t=this.format(t);var s,l,c,u,d,p,f,h,m,v,g,y,b,x,w,S,T=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],_=e.style;for(m=parseFloat(e.offsetWidth),v=parseFloat(e.offsetHeight),s=t.split(" "),l=0;T.length>l;l++)this.p.indexOf("border")&&(T[l]=X(T[l])),d=u=V(e,T[l],i,!1,"0px"),-1!==d.indexOf(" ")&&(u=d.split(" "),d=u[0],u=u[1]),p=c=s[l],f=parseFloat(d),y=d.substr((f+"").length),b="="===p.charAt(1),b?(h=parseInt(p.charAt(0)+"1",10),p=p.substr(2),h*=parseFloat(p),g=p.substr((h+"").length-(0>h?1:0))||""):(h=parseFloat(p),g=p.substr((h+"").length)),""===g&&(g=r[n]||y),g!==y&&(x=G(e,"borderLeft",f,y),w=G(e,"borderTop",f,y),"%"===g?(d=100*(x/m)+"%",u=100*(w/v)+"%"):"em"===g?(S=G(e,"borderLeft",1,"em"),d=x/S+"em",u=w/S+"em"):(d=x+"px",u=w+"px"),b&&(p=parseFloat(d)+h+g,c=parseFloat(u)+h+g)),o=ft(_,T[l],d+" "+u,p+" "+c,!1,"0px",o);return o},prefix:!0,formatter:ct("0px 0px 0px 0px",!1,!0)}),vt("backgroundPosition",{defaultValue:"0 0",parser:function(e,t,n,r,a,o){var s,l,c,u,d,p,f="background-position",m=i||Y(e,null),v=this.format((m?h?m.getPropertyValue(f+"-x")+" "+m.getPropertyValue(f+"-y"):m.getPropertyValue(f):e.currentStyle.backgroundPositionX+" "+e.currentStyle.backgroundPositionY)||"0 0"),g=this.format(t);if(-1!==v.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=V(e,"backgroundImage").replace(N,""),p&&"none"!==p)){for(s=v.split(" "),l=g.split(" "),W.setAttribute("src",p),c=2;--c>-1;)v=s[c],u=-1!==v.indexOf("%"),u!==(-1!==l[c].indexOf("%"))&&(d=0===c?e.offsetWidth-W.width:e.offsetHeight-W.height,s[c]=u?parseFloat(v)/100*d+"px":100*(parseFloat(v)/d)+"%");v=s.join(" ")}return this.parseComplex(e.style,v,g,a,o)},formatter:tt}),vt("backgroundSize",{defaultValue:"0 0",formatter:tt}),vt("perspective",{defaultValue:"0px",prefix:!0}),vt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),vt("transformStyle",{prefix:!0}),vt("backfaceVisibility",{prefix:!0}),vt("userSelect",{prefix:!0}),vt("margin",{parser:ut("marginTop,marginRight,marginBottom,marginLeft")}),vt("padding",{parser:ut("paddingTop,paddingRight,paddingBottom,paddingLeft")}),vt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(e,t,n,r,a,o){var s,l,c;return 9>h?(l=e.currentStyle,c=8>h?" ":",",s="rect("+l.clipTop+c+l.clipRight+c+l.clipBottom+c+l.clipLeft+")",t=this.format(t).split(",").join(c)):(s=this.format(V(e,this.p,i,!1,this.dflt)),t=this.format(t)),this.parseComplex(e.style,s,t,a,o)}}),vt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),vt("autoRound,strictUnits",{parser:function(e,t,n,r,i){return i}}),vt("border",{defaultValue:"0px solid #000",parser:function(e,t,n,r,a,o){return this.parseComplex(e.style,this.format(V(e,"borderTopWidth",i,!1,"0px")+" "+V(e,"borderTopStyle",i,!1,"solid")+" "+V(e,"borderTopColor",i,!1,"#000")),this.format(t),a,o)},color:!0,formatter:function(e){var t=e.split(" ");return t[0]+" "+(t[1]||"solid")+" "+(e.match(lt)||["#000"])[0]}}),vt("borderWidth",{parser:ut("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),vt("float,cssFloat,styleFloat",{parser:function(e,t,n,r,i){var a=e.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new pt(a,o,0,0,i,-1,n,!1,0,a[o],t)}});var kt=function(e){var t,n=this.t,r=n.filter||V(this.data,"filter"),i=0|this.s+this.c*e;100===i&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(n.removeAttribute("filter"),t=!V(this.data,"filter")):(n.filter=r.replace(S,""),t=!0)),t||(this.xn1&&(n.filter=r=r||"alpha(opacity="+i+")"),-1===r.indexOf("pacity")?0===i&&this.xn1||(n.filter=r+" alpha(opacity="+i+")"):n.filter=r.replace(x,"opacity="+i))};vt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(e,t,n,r,a,o){var s=parseFloat(V(e,"opacity",i,!1,"1")),l=e.style,c="autoAlpha"===n;return"string"==typeof t&&"="===t.charAt(1)&&(t=("-"===t.charAt(0)?-1:1)*parseFloat(t.substr(2))+s),c&&1===s&&"hidden"===V(e,"visibility",i)&&0!==t&&(s=0),z?a=new pt(l,"opacity",s,t-s,a):(a=new pt(l,"opacity",100*s,100*(t-s),a),a.xn1=c?1:0,l.zoom=1,a.type=2,a.b="alpha(opacity="+a.s+")",a.e="alpha(opacity="+(a.s+a.c)+")",a.data=e,a.plugin=o,a.setRatio=kt),c&&(a=new pt(l,"visibility",0,0,a,-1,null,!1,0,0!==s?"inherit":"hidden",0===t?"hidden":"inherit"),a.xs0="inherit",r._overwriteProps.push(a.n),r._overwriteProps.push(n)),a}});var Et=function(e,t){t&&(e.removeProperty?("ms"===t.substr(0,2)&&(t="M"+t.substr(1)),e.removeProperty(t.replace(_,"-$1").toLowerCase())):e.removeAttribute(t))},Mt=function(e){if(this.t._gsClassPT=this,1===e||0===e){this.t.setAttribute("class",0===e?this.b:this.e);for(var t=this.data,n=this.t.style;t;)t.v?n[t.p]=t.v:Et(n,t.p),t=t._next;1===e&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};vt("className",{parser:function(e,t,r,a,o,s,l){var c,u,d,p,f,h=e.getAttribute("class")||"",m=e.style.cssText;if(o=a._classNamePT=new pt(e,r,0,0,o,2),o.setRatio=Mt,o.pr=-11,n=!0,o.b=h,u=Q(e,i),d=e._gsClassPT){for(p={},f=d.data;f;)p[f.p]=1,f=f._next;d.setRatio(1)}return e._gsClassPT=o,o.e="="!==t.charAt(1)?t:h.replace(RegExp("\\s*\\b"+t.substr(2)+"\\b"),"")+("+"===t.charAt(0)?" "+t.substr(2):""),a._tween._duration&&(e.setAttribute("class",o.e),c=Z(e,u,Q(e),l,p),e.setAttribute("class",h),o.data=c.firstMPT,e.style.cssText=m,o=o.xfirst=a.parse(e,c.difs,o,s)),o}});var At=function(e){if((1===e||0===e)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var t,n,r,i,a=this.t.style,o=s.transform.parse;if("all"===this.e)a.cssText="",i=!0;else for(t=this.e.split(","),r=t.length;--r>-1;)n=t[r],s[n]&&(s[n].parse===o?i=!0:n="transformOrigin"===n?wt:s[n].p),Et(a,n);i&&(Et(a,bt),this.t._gsTransform&&delete this.t._gsTransform)}};for(vt("clearProps",{parser:function(e,t,r,i,a){return a=new pt(e,r,0,0,a,2),a.setRatio=At,a.e=t,a.pr=-10,a.data=i._tween,n=!0,a}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ht=l.length;ht--;)gt(l[ht]);l=o.prototype,l._firstPT=null,l._onInitTween=function(e,t,s){if(!e.nodeType)return!1;this._target=e,this._tween=s,this._vars=t,c=t.autoRound,n=!1,r=t.suffixMap||o.suffixMap,i=Y(e,""),a=this._overwriteProps;var l,p,h,m,v,g,y,b,x,S=e.style;if(u&&""===S.zIndex&&(l=V(e,"zIndex",i),("auto"===l||""===l)&&this._addLazySet(S,"zIndex",0)),"string"==typeof t&&(m=S.cssText,l=Q(e,i),S.cssText=m+";"+t,l=Z(e,l,Q(e)).difs,!z&&w.test(t)&&(l.opacity=parseFloat(RegExp.$1)),t=l,S.cssText=m),this._firstPT=p=this.parse(e,t,null),this._transformType){for(x=3===this._transformType,bt?d&&(u=!0,""===S.zIndex&&(y=V(e,"zIndex",i),("auto"===y||""===y)&&this._addLazySet(S,"zIndex",0)),f&&this._addLazySet(S,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):S.zoom=1,h=p;h&&h._next;)h=h._next;b=new pt(e,"transform",0,0,null,2),this._linkCSSP(b,null,h),b.setRatio=x&&St?Nt:bt?Pt:Ct,b.data=this._transform||_t(e,i,!0),a.pop()}if(n){for(;p;){for(g=p._next,h=m;h&&h.pr>p.pr;)h=h._next;(p._prev=h?h._prev:v)?p._prev._next=p:m=p,(p._next=h)?h._prev=p:v=p,p=g}this._firstPT=m}return!0},l.parse=function(e,t,n,a){var o,l,u,d,p,f,h,m,v,g,y=e.style;for(o in t)f=t[o],l=s[o],l?n=l.parse(e,f,o,this,n,a,t):(p=V(e,o,i)+"",v="string"==typeof f,"color"===o||"fill"===o||"stroke"===o||-1!==o.indexOf("Color")||v&&T.test(f)?(v||(f=st(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),n=ft(y,o,p,f,!0,"transparent",n,0,a)):!v||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),h=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===o||"height"===o?(u=et(e,o,i),h="px"):"left"===o||"top"===o?(u=U(e,o,i),h="px"):(u="opacity"!==o?0:1,h="")),g=v&&"="===f.charAt(1),g?(d=parseInt(f.charAt(0)+"1",10),f=f.substr(2),d*=parseFloat(f),m=f.replace(b,"")):(d=parseFloat(f),m=v?f.substr((d+"").length)||"":""),""===m&&(m=o in r?r[o]:h),f=d||0===d?(g?d+u:d)+m:t[o],h!==m&&""!==m&&(d||0===d)&&u&&(u=G(e,o,u,h),"%"===m?(u/=G(e,o,100,"%")/100,t.strictUnits!==!0&&(p=u+"%")):"em"===m?u/=G(e,o,1,"em"):"px"!==m&&(d=G(e,o,d,m),m="px"),g&&(d||0===d)&&(f=d+u+m)),g&&(d+=u),!u&&0!==u||!d&&0!==d?void 0!==y[o]&&(f||"NaN"!=f+""&&null!=f)?(n=new pt(y,o,d||u||0,0,n,-1,o,!1,0,p,f),n.xs0="none"!==f||"display"!==o&&-1===o.indexOf("Style")?f:p):B("invalid "+o+" tween value: "+t[o]):(n=new pt(y,o,u,d-u,n,0,o,c!==!1&&("px"===m||"zIndex"===o),0,p,f),n.xs0=m)):n=ft(y,o,p,f,!0,null,n,0,a)),a&&n&&!n.plugin&&(n.plugin=a);return n},l.setRatio=function(e){var t,n,r,i=this._firstPT,a=1e-6;if(1!==e||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(e||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;i;){if(t=i.c*e+i.s,i.r?t=Math.round(t):a>t&&t>-a&&(t=0),i.type)if(1===i.type)if(r=i.l,2===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2;else if(3===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2+i.xn2+i.xs3;else if(4===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2+i.xn2+i.xs3+i.xn3+i.xs4;else if(5===r)i.t[i.p]=i.xs0+t+i.xs1+i.xn1+i.xs2+i.xn2+i.xs3+i.xn3+i.xs4+i.xn4+i.xs5;else{for(n=i.xs0+t+i.xs1,r=1;i.l>r;r++)n+=i["xn"+r]+i["xs"+(r+1)];i.t[i.p]=n}else-1===i.type?i.t[i.p]=i.xs0:i.setRatio&&i.setRatio(e);else i.t[i.p]=t+i.xs0;i=i._next}else for(;i;)2!==i.type?i.t[i.p]=i.b:i.setRatio(e),i=i._next;else for(;i;)2!==i.type?i.t[i.p]=i.e:i.setRatio(e),i=i._next},l._enableTransforms=function(e){this._transformType=e||3===this._transformType?3:2,this._transform=this._transform||_t(this._target,i,!0)};var Lt=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(e,t,n){var r=this._firstPT=new pt(e,t,0,0,this._firstPT,2);r.e=n,r.setRatio=Lt,r.data=this},l._linkCSSP=function(e,t,n,r){return e&&(t&&(t._prev=e),e._next&&(e._next._prev=e._prev),e._prev?e._prev._next=e._next:this._firstPT===e&&(this._firstPT=e._next,r=!0),n?n._next=e:r||null!==this._firstPT||(this._firstPT=e),e._next=t,e._prev=n),e},l._kill=function(t){var n,r,i,a=t;if(t.autoAlpha||t.alpha){a={};for(r in t)a[r]=t[r];a.opacity=1,a.autoAlpha&&(a.visibility=1)}return t.className&&(n=this._classNamePT)&&(i=n.xfirst,i&&i._prev?this._linkCSSP(i._prev,n._next,i._prev._prev):i===this._firstPT&&(this._firstPT=n._next),n._next&&this._linkCSSP(n._next,n._next._next,i._prev),this._classNamePT=null),e.prototype._kill.call(this,a)};var Dt=function(e,t,n){var r,i,a,o;if(e.slice)for(i=e.length;--i>-1;)Dt(e[i],t,n);else for(r=e.childNodes,i=r.length;--i>-1;)a=r[i],o=a.type,a.style&&(t.push(Q(a)),n&&n.push(a)),1!==o&&9!==o&&11!==o||!a.childNodes.length||Dt(a,t,n)};return o.cascadeTo=function(e,n,r){var i,a,o,s=t.to(e,n,r),l=[s],c=[],u=[],d=[],p=t._internals.reservedProps;
for(e=s._targets||s.target,Dt(e,c,d),s.render(n,!0),Dt(e,u),s.render(0,!0),s._enabled(!0),i=d.length;--i>-1;)if(a=Z(d[i],c[i],u[i]),a.firstMPT){a=a.difs;for(o in r)p[o]&&(a[o]=r[o]);l.push(t.to(d[i],n,a))}return l},e.activate([o]),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=t())}("CSSPlugin");
var DD_belatedPNG={ns:"DD_belatedPNG",imgSize:{},delay:10,nodesFixed:0,createVmlNameSpace:function(){document.namespaces&&!document.namespaces[this.ns]&&document.namespaces.add(this.ns,"urn:schemas-microsoft-com:vml")},createVmlStyleSheet:function(){var e,t;e=document.createElement("style"),e.setAttribute("media","screen"),document.documentElement.firstChild.insertBefore(e,document.documentElement.firstChild.firstChild),e.styleSheet&&(e=e.styleSheet,e.addRule(this.ns+"\\:*","{behavior:url(#default#VML)}"),e.addRule(this.ns+"\\:shape","position:absolute;"),e.addRule("img."+this.ns+"_sizeFinder","behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;"),this.screenStyleSheet=e,t=document.createElement("style"),t.setAttribute("media","print"),document.documentElement.firstChild.insertBefore(t,document.documentElement.firstChild.firstChild),t=t.styleSheet,t.addRule(this.ns+"\\:*","{display: none !important;}"),t.addRule("img."+this.ns+"_sizeFinder","{display: none !important;}"))},readPropertyChange:function(){var e,t,n;if(e=event.srcElement,e.vmlInitiated){if((-1!=event.propertyName.search("background")||-1!=event.propertyName.search("border"))&&DD_belatedPNG.applyVML(e),"style.display"==event.propertyName){t="none"==e.currentStyle.display?"none":"block";for(n in e.vml)e.vml.hasOwnProperty(n)&&(e.vml[n].shape.style.display=t)}-1!=event.propertyName.search("filter")&&DD_belatedPNG.vmlOpacity(e)}},vmlOpacity:function(e){if(-1!=e.currentStyle.filter.search("lpha")){var t=e.currentStyle.filter;t=parseInt(t.substring(t.lastIndexOf("=")+1,t.lastIndexOf(")")),10)/100,e.vml.color.shape.style.filter=e.currentStyle.filter,e.vml.image.fill.opacity=t}},handlePseudoHover:function(e){setTimeout(function(){DD_belatedPNG.applyVML(e)},1)},fix:function(e){if(this.screenStyleSheet){var t,n;for(t=e.split(","),n=0;n<t.length;n++)this.screenStyleSheet.addRule(t[n],"behavior:expression(DD_belatedPNG.fixPng(this))")}},applyVML:function(e){e.runtimeStyle.cssText="",this.vmlFill(e),this.vmlOffsets(e),this.vmlOpacity(e),e.isImg&&this.copyImageBorders(e)},attachHandlers:function(e){var t,n,i,r,a,o;if(t=this,n={resize:"vmlOffsets",move:"vmlOffsets"},"A"==e.nodeName){r={mouseleave:"handlePseudoHover",mouseenter:"handlePseudoHover",focus:"handlePseudoHover",blur:"handlePseudoHover"};for(a in r)r.hasOwnProperty(a)&&(n[a]=r[a])}for(o in n)n.hasOwnProperty(o)&&(i=function(){t[n[o]](e)},e.attachEvent("on"+o,i));e.attachEvent("onpropertychange",this.readPropertyChange)},giveLayout:function(e){e.style.zoom=1,"static"==e.currentStyle.position&&(e.style.position="relative")},copyImageBorders:function(e){var t,n;t={borderStyle:!0,borderWidth:!0,borderColor:!0};for(n in t)t.hasOwnProperty(n)&&(e.vml.color.shape.style[n]=e.currentStyle[n])},vmlFill:function(e){if(e.currentStyle){var t,n,i,r,a,o;t=e.currentStyle;for(r in e.vml)e.vml.hasOwnProperty(r)&&(e.vml[r].shape.style.zIndex=t.zIndex);e.runtimeStyle.backgroundColor="",e.runtimeStyle.backgroundImage="",n=!0,("none"!=t.backgroundImage||e.isImg)&&(e.isImg?e.vmlBg=e.src:(e.vmlBg=t.backgroundImage,e.vmlBg=e.vmlBg.substr(5,e.vmlBg.lastIndexOf('")')-5)),i=this,i.imgSize[e.vmlBg]||(a=document.createElement("img"),i.imgSize[e.vmlBg]=a,a.className=i.ns+"_sizeFinder",a.runtimeStyle.cssText="behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;",o=function(){this.width=this.offsetWidth,this.height=this.offsetHeight,i.vmlOffsets(e)},a.attachEvent("onload",o),a.src=e.vmlBg,a.removeAttribute("width"),a.removeAttribute("height"),document.body.insertBefore(a,document.body.firstChild)),e.vml.image.fill.src=e.vmlBg,n=!1),e.vml.image.fill.on=!n,e.vml.image.fill.color="none",e.vml.color.shape.style.backgroundColor=t.backgroundColor,e.runtimeStyle.backgroundImage="none",e.runtimeStyle.backgroundColor="transparent"}},vmlOffsets:function(e){var t,n,i,r,a,o,s,l,c,u,d;if(t=e.currentStyle,n={W:e.clientWidth+1,H:e.clientHeight+1,w:this.imgSize[e.vmlBg].width,h:this.imgSize[e.vmlBg].height,L:e.offsetLeft,T:e.offsetTop,bLW:e.clientLeft,bTW:e.clientTop},i=n.L+n.bLW==1?1:0,r=function(e,t,n,i,r,a){e.coordsize=i+","+r,e.coordorigin=a+","+a,e.path="m0,0l"+i+",0l"+i+","+r+"l0,"+r+" xe",e.style.width=i+"px",e.style.height=r+"px",e.style.left=t+"px",e.style.top=n+"px"},r(e.vml.color.shape,n.L+(e.isImg?0:n.bLW),n.T+(e.isImg?0:n.bTW),n.W-1,n.H-1,0),r(e.vml.image.shape,n.L+n.bLW,n.T+n.bTW,n.W,n.H,1),a={X:0,Y:0},e.isImg)a.X=parseInt(t.paddingLeft,10)+1,a.Y=parseInt(t.paddingTop,10)+1;else for(c in a)a.hasOwnProperty(c)&&this.figurePercentage(a,n,c,t["backgroundPosition"+c]);e.vml.image.fill.position=a.X/n.W+","+a.Y/n.H,o=t.backgroundRepeat,s={T:1,R:n.W+i,B:n.H,L:1+i},l={X:{b1:"L",b2:"R",d:"W"},Y:{b1:"T",b2:"B",d:"H"}},"repeat"!=o||e.isImg?(u={T:a.Y,R:a.X+n.w,B:a.Y+n.h,L:a.X},-1!=o.search("repeat-")&&(d=o.split("repeat-")[1].toUpperCase(),u[l[d].b1]=1,u[l[d].b2]=n[l[d].d]),u.B>n.H&&(u.B=n.H),e.vml.image.shape.style.clip="rect("+u.T+"px "+(u.R+i)+"px "+u.B+"px "+(u.L+i)+"px)"):e.vml.image.shape.style.clip="rect("+s.T+"px "+s.R+"px "+s.B+"px "+s.L+"px)"},figurePercentage:function(e,t,n,i){var r,a;switch(a=!0,r="X"==n,i){case"left":case"top":e[n]=0;break;case"center":e[n]=.5;break;case"right":case"bottom":e[n]=1;break;default:-1!=i.search("%")?e[n]=parseInt(i,10)/100:a=!1}return e[n]=Math.ceil(a?t[r?"W":"H"]*e[n]-t[r?"w":"h"]*e[n]:parseInt(i,10)),e[n]%2===0&&e[n]++,e[n]},fixPng:function(e){e.style.behavior="none";var t,n,i,r,a;if("BODY"!=e.nodeName&&"TD"!=e.nodeName&&"TR"!=e.nodeName){if(e.isImg=!1,"IMG"==e.nodeName){if(-1==e.src.toLowerCase().search(/\.png$/))return;e.isImg=!0,e.style.visibility="hidden"}else if(-1==e.currentStyle.backgroundImage.toLowerCase().search(".png"))return;t=DD_belatedPNG,e.vml={color:{},image:{}},n={shape:{},fill:{}};for(r in e.vml)if(e.vml.hasOwnProperty(r)){for(a in n)n.hasOwnProperty(a)&&(i=t.ns+":"+a,e.vml[r][a]=document.createElement(i));e.vml[r].shape.stroked=!1,e.vml[r].shape.appendChild(e.vml[r].fill),e.parentNode.insertBefore(e.vml[r].shape,e)}e.vml.image.shape.fillcolor="none",e.vml.image.fill.type="tile",e.vml.color.fill.on=!1,t.attachHandlers(e),t.giveLayout(e),t.giveLayout(e.offsetParent),e.vmlInitiated=!0,t.applyVML(e)}}};try{document.execCommand("BackgroundImageCache",!1,!0)}catch(r){}DD_belatedPNG.createVmlNameSpace(),DD_belatedPNG.createVmlStyleSheet();
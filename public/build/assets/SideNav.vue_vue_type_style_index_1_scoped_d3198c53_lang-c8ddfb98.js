/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function W(t){return getComputedStyle(t)}function m(t,e){for(var l in e){var s=e[l];typeof s=="number"&&(s=s+"px"),t.style[l]=s}return t}function A(t){var e=document.createElement("div");return e.className=t,e}var C=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function T(t,e){if(!C)throw new Error("No element matching method supported");return C.call(t,e)}function S(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function k(t,e){return Array.prototype.filter.call(t.children,function(l){return T(l,e)})}var g={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},I={x:null,y:null};function O(t,e){var l=t.element.classList,s=g.state.scrolling(e);l.contains(s)?clearTimeout(I[e]):l.add(s)}function N(t,e){I[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(g.state.scrolling(e))},t.settings.scrollingThreshold)}function U(t,e){O(t,e),N(t,e)}var M=function(e){this.element=e,this.handlers={}},K={isEmpty:{configurable:!0}};M.prototype.bind=function(e,l){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(l),this.element.addEventListener(e,l,!1)};M.prototype.unbind=function(e,l){var s=this;this.handlers[e]=this.handlers[e].filter(function(i){return l&&i!==l?!0:(s.element.removeEventListener(e,i,!1),!1)})};M.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};K.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(M.prototype,K);var E=function(){this.eventElements=[]};E.prototype.eventElement=function(e){var l=this.eventElements.filter(function(s){return s.element===e})[0];return l||(l=new M(e),this.eventElements.push(l)),l};E.prototype.bind=function(e,l,s){this.eventElement(e).bind(l,s)};E.prototype.unbind=function(e,l,s){var i=this.eventElement(e);i.unbind(l,s),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)};E.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};E.prototype.once=function(e,l,s){var i=this.eventElement(e),a=function(n){i.unbind(l,a),s(n)};i.bind(l,a)};function P(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function D(t,e,l,s,i){s===void 0&&(s=!0),i===void 0&&(i=!1);var a;if(e==="top")a=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")a=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");j(t,l,a,s,i)}function j(t,e,l,s,i){var a=l[0],n=l[1],o=l[2],r=l[3],c=l[4],p=l[5];s===void 0&&(s=!0),i===void 0&&(i=!1);var b=t.element;t.reach[r]=null,b[o]<1&&(t.reach[r]="start"),b[o]>t[a]-t[n]-1&&(t.reach[r]="end"),e&&(b.dispatchEvent(P("ps-scroll-"+r)),e<0?b.dispatchEvent(P("ps-scroll-"+c)):e>0&&b.dispatchEvent(P("ps-scroll-"+p)),s&&U(t,r)),t.reach[r]&&(e||i)&&b.dispatchEvent(P("ps-"+r+"-reach-"+t.reach[r]))}function d(t){return parseInt(t,10)||0}function $(t){return T(t,"input,[contenteditable]")||T(t,"select,[contenteditable]")||T(t,"textarea,[contenteditable]")||T(t,"button,[contenteditable]")}function q(t){var e=W(t);return d(e.width)+d(e.paddingLeft)+d(e.paddingRight)+d(e.borderLeftWidth)+d(e.borderRightWidth)}var R={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function L(t){var e=t.element,l=Math.floor(e.scrollTop),s=e.getBoundingClientRect();t.containerWidth=Math.round(s.width),t.containerHeight=Math.round(s.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(k(e,g.element.rail("x")).forEach(function(i){return S(i)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(k(e,g.element.rail("y")).forEach(function(i){return S(i)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=x(t,d(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=d((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=x(t,d(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=d(l*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),z(e,t),t.scrollbarXActive?e.classList.add(g.state.active("x")):(e.classList.remove(g.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(g.state.active("y")):(e.classList.remove(g.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function x(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function z(t,e){var l={width:e.railXWidth},s=Math.floor(t.scrollTop);e.isRtl?l.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:l.left=t.scrollLeft,e.isScrollbarXUsingBottom?l.bottom=e.scrollbarXBottom-s:l.top=e.scrollbarXTop+s,m(e.scrollbarXRail,l);var i={top:s,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?i.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:i.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:i.left=e.scrollbarYLeft+t.scrollLeft,m(e.scrollbarYRail,i),m(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),m(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function J(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var l=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,s=l>t.scrollbarYTop?1:-1;t.element.scrollTop+=s*t.containerHeight,L(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var l=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,s=l>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=s*t.containerWidth,L(t),e.stopPropagation()})}function Q(t){B(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),B(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function B(t,e){var l=e[0],s=e[1],i=e[2],a=e[3],n=e[4],o=e[5],r=e[6],c=e[7],p=e[8],b=t.element,Y=null,X=null,h=null;function v(u){u.touches&&u.touches[0]&&(u[i]=u.touches[0].pageY),b[r]=Y+h*(u[i]-X),O(t,c),L(t),u.stopPropagation(),u.type.startsWith("touch")&&u.changedTouches.length>1&&u.preventDefault()}function y(){N(t,c),t[p].classList.remove(g.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",v)}function f(u,w){Y=b[r],w&&u.touches&&(u[i]=u.touches[0].pageY),X=u[i],h=(t[s]-t[l])/(t[a]-t[o]),w?t.event.bind(t.ownerDocument,"touchmove",v):(t.event.bind(t.ownerDocument,"mousemove",v),t.event.once(t.ownerDocument,"mouseup",y),u.preventDefault()),t[p].classList.add(g.state.clicking),u.stopPropagation()}t.event.bind(t[n],"mousedown",function(u){f(u)}),t.event.bind(t[n],"touchstart",function(u){f(u,!0)})}function V(t){var e=t.element,l=function(){return T(e,":hover")},s=function(){return T(t.scrollbarX,":focus")||T(t.scrollbarY,":focus")};function i(a,n){var o=Math.floor(e.scrollTop);if(a===0){if(!t.scrollbarYActive)return!1;if(o===0&&n>0||o>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var r=e.scrollLeft;if(n===0){if(!t.scrollbarXActive)return!1;if(r===0&&a<0||r>=t.contentWidth-t.containerWidth&&a>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(a){if(!(a.isDefaultPrevented&&a.isDefaultPrevented()||a.defaultPrevented)&&!(!l()&&!s())){var n=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(n){if(n.tagName==="IFRAME")n=n.contentDocument.activeElement;else for(;n.shadowRoot;)n=n.shadowRoot.activeElement;if($(n))return}var o=0,r=0;switch(a.which){case 37:a.metaKey?o=-t.contentWidth:a.altKey?o=-t.containerWidth:o=-30;break;case 38:a.metaKey?r=t.contentHeight:a.altKey?r=t.containerHeight:r=30;break;case 39:a.metaKey?o=t.contentWidth:a.altKey?o=t.containerWidth:o=30;break;case 40:a.metaKey?r=-t.contentHeight:a.altKey?r=-t.containerHeight:r=-30;break;case 32:a.shiftKey?r=t.containerHeight:r=-t.containerHeight;break;case 33:r=t.containerHeight;break;case 34:r=-t.containerHeight;break;case 36:r=t.contentHeight;break;case 35:r=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&o!==0||t.settings.suppressScrollY&&r!==0||(e.scrollTop-=r,e.scrollLeft+=o,L(t),i(o,r)&&a.preventDefault())}})}function Z(t){var e=t.element;function l(n,o){var r=Math.floor(e.scrollTop),c=e.scrollTop===0,p=r+e.offsetHeight===e.scrollHeight,b=e.scrollLeft===0,Y=e.scrollLeft+e.offsetWidth===e.scrollWidth,X;return Math.abs(o)>Math.abs(n)?X=c||p:X=b||Y,X?!t.settings.wheelPropagation:!0}function s(n){var o=n.deltaX,r=-1*n.deltaY;return(typeof o>"u"||typeof r>"u")&&(o=-1*n.wheelDeltaX/6,r=n.wheelDeltaY/6),n.deltaMode&&n.deltaMode===1&&(o*=10,r*=10),o!==o&&r!==r&&(o=0,r=n.wheelDelta),n.shiftKey?[-r,-o]:[o,r]}function i(n,o,r){if(!R.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(n))return!1;for(var c=n;c&&c!==e;){if(c.classList.contains(g.element.consuming))return!0;var p=W(c);if(r&&p.overflowY.match(/(scroll|auto)/)){var b=c.scrollHeight-c.clientHeight;if(b>0&&(c.scrollTop>0&&r<0||c.scrollTop<b&&r>0))return!0}if(o&&p.overflowX.match(/(scroll|auto)/)){var Y=c.scrollWidth-c.clientWidth;if(Y>0&&(c.scrollLeft>0&&o<0||c.scrollLeft<Y&&o>0))return!0}c=c.parentNode}return!1}function a(n){var o=s(n),r=o[0],c=o[1];if(!i(n.target,r,c)){var p=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=r*t.settings.wheelSpeed,p=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(r?e.scrollLeft+=r*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,p=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=r*t.settings.wheelSpeed),L(t),p=p||l(r,c),p&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",a):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",a)}function F(t){if(!R.supportsTouch&&!R.supportsIePointer)return;var e=t.element;function l(h,v){var y=Math.floor(e.scrollTop),f=e.scrollLeft,u=Math.abs(h),w=Math.abs(v);if(w>u){if(v<0&&y===t.contentHeight-t.containerHeight||v>0&&y===0)return window.scrollY===0&&v>0&&R.isChrome}else if(u>w&&(h<0&&f===t.contentWidth-t.containerWidth||h>0&&f===0))return!0;return!0}function s(h,v){e.scrollTop-=v,e.scrollLeft-=h,L(t)}var i={},a=0,n={},o=null;function r(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return h.pointerType&&h.pointerType==="pen"&&h.buttons===0?!1:!!(h.targetTouches&&h.targetTouches.length===1||h.pointerType&&h.pointerType!=="mouse"&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE)}function p(h){if(c(h)){var v=r(h);i.pageX=v.pageX,i.pageY=v.pageY,a=new Date().getTime(),o!==null&&clearInterval(o)}}function b(h,v,y){if(!e.contains(h))return!1;for(var f=h;f&&f!==e;){if(f.classList.contains(g.element.consuming))return!0;var u=W(f);if(y&&u.overflowY.match(/(scroll|auto)/)){var w=f.scrollHeight-f.clientHeight;if(w>0&&(f.scrollTop>0&&y<0||f.scrollTop<w&&y>0))return!0}if(v&&u.overflowX.match(/(scroll|auto)/)){var H=f.scrollWidth-f.clientWidth;if(H>0&&(f.scrollLeft>0&&v<0||f.scrollLeft<H&&v>0))return!0}f=f.parentNode}return!1}function Y(h){if(c(h)){var v=r(h),y={pageX:v.pageX,pageY:v.pageY},f=y.pageX-i.pageX,u=y.pageY-i.pageY;if(b(h.target,f,u))return;s(f,u),i=y;var w=new Date().getTime(),H=w-a;H>0&&(n.x=f/H,n.y=u/H,a=w),l(f,u)&&h.preventDefault()}}function X(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval(function(){if(t.isInitialized){clearInterval(o);return}if(!n.x&&!n.y){clearInterval(o);return}if(Math.abs(n.x)<.01&&Math.abs(n.y)<.01){clearInterval(o);return}if(!t.element){clearInterval(o);return}s(n.x*30,n.y*30),n.x*=.8,n.y*=.8},10))}R.supportsTouch?(t.event.bind(e,"touchstart",p),t.event.bind(e,"touchmove",Y),t.event.bind(e,"touchend",X)):R.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",p),t.event.bind(e,"pointermove",Y),t.event.bind(e,"pointerup",X)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",p),t.event.bind(e,"MSPointerMove",Y),t.event.bind(e,"MSPointerUp",X)))}var G=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},tt={"click-rail":J,"drag-thumb":Q,keyboard:V,wheel:Z,touch:F},_=function(e,l){var s=this;if(l===void 0&&(l={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(g.main),this.settings=G();for(var i in l)this.settings[i]=l[i];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var a=function(){return e.classList.add(g.state.focus)},n=function(){return e.classList.remove(g.state.focus)};this.isRtl=W(e).direction==="rtl",this.isRtl===!0&&e.classList.add(g.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,p=null;return e.scrollLeft=-1,p=e.scrollLeft<0,e.scrollLeft=c,p}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new E,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=A(g.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=A(g.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",a),this.event.bind(this.scrollbarX,"blur",n),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var o=W(this.scrollbarXRail);this.scrollbarXBottom=parseInt(o.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=d(o.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=d(o.borderLeftWidth)+d(o.borderRightWidth),m(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=d(o.marginLeft)+d(o.marginRight),m(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=A(g.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=A(g.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",a),this.event.bind(this.scrollbarY,"blur",n),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var r=W(this.scrollbarYRail);this.scrollbarYRight=parseInt(r.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=d(r.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?q(this.scrollbarY):null,this.railBorderYWidth=d(r.borderTopWidth)+d(r.borderBottomWidth),m(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=d(r.marginTop)+d(r.marginBottom),m(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return tt[c](s)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return s.onScroll(c)}),L(this)};_.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,m(this.scrollbarXRail,{display:"block"}),m(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=d(W(this.scrollbarXRail).marginLeft)+d(W(this.scrollbarXRail).marginRight),this.railYMarginHeight=d(W(this.scrollbarYRail).marginTop)+d(W(this.scrollbarYRail).marginBottom),m(this.scrollbarXRail,{display:"none"}),m(this.scrollbarYRail,{display:"none"}),L(this),D(this,"top",0,!1,!0),D(this,"left",0,!1,!0),m(this.scrollbarXRail,{display:""}),m(this.scrollbarYRail,{display:""}))};_.prototype.onScroll=function(e){this.isAlive&&(L(this),D(this,"top",this.element.scrollTop-this.lastScrollTop),D(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};_.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),S(this.scrollbarX),S(this.scrollbarY),S(this.scrollbarXRail),S(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};_.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};export{_ as P};
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/ffg/bp/",n(n.s=5)}([function(t,e,n){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var n,o=t.HTMLElement||t.Element,r=468,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||c,scrollIntoView:o.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(n=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?d.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):i.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?i.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;d.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var n=function(t){for(;t!==e.body&&!1===h(t);)t=t.parentNode||t.host;return t}(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==e.body?(d.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function f(e,n){var o=t.getComputedStyle(e,null)["overflow"+n];return"auto"===o||"scroll"===o}function h(t){var e=u(t,"Y")&&f(t,"Y"),n=u(t,"X")&&f(t,"X");return e||n}function p(e){var n,o,i,l,c=(s()-e.startTime)/r;l=c=c>1?1:c,n=.5*(1-Math.cos(Math.PI*l)),o=e.startX+(e.x-e.startX)*n,i=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,o,i),o===e.x&&i===e.y||t.requestAnimationFrame(p.bind(t,e))}function d(n,o,r){var l,a,u,f,h=s();n===e.body?(l=t,a=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=i.scroll):(l=n,a=n.scrollLeft,u=n.scrollTop,f=c),p({scrollable:l,method:f,startTime:h,startX:a,startY:u,x:o,y:r})}}}}()},function(t,e){window.addEventListener("scroll",function(t){var e=window.pageYOffset,n=document.querySelector(".bp-header__bg");window.innerWidth<800||n&&(n.style.top="-".concat(.3*e,"px"))})},function(t,e){!function(){function t(t){var e,n,o=t.srcElement;"A"!==o.nodeName&&(o=o.parentElement),e=o.getAttribute("href"),n=document.querySelector(e),t.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"})}!function(){for(var e=document.querySelectorAll(".scroll-to"),n=e.length;n--;)e[n].addEventListener("click",t)}()}()},function(t,e,n){var o;const r=function(t,e){if(!t)return;"undefined"!=typeof window&&function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}();e||(e={}),e={minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,...e};let n=[],o=!1;const r=function(t){o=!0};t.addEventListener("mousedown",r);const i=function(t){o=!1,l(t)};t.addEventListener("mouseup",i);const s=function(t){o&&(t.changedTouches=[{clientX:t.clientX,clientY:t.clientY}],c(t))};t.addEventListener("mousemove",s);const l=function(o){if(!n.length)return;const r=o instanceof TouchEvent;let i=[],s=[],l={top:!1,right:!1,bottom:!1,left:!1};for(let t=0;t<n.length;t++)i.push(n[t].x),s.push(n[t].y);const c=i[0],a=i[i.length-1],u=s[0],f=s[s.length-1],h={x:[c,a],y:[u,f]};if(n.length>1){const e={detail:{touch:r,...h}};let n=new CustomEvent("swiperelease",e);t.dispatchEvent(n)}let p=i[0]-i[i.length-1],d="none";d=p>0?"left":"right";let v,m=Math.min(...i),_=Math.max(...i);if(Math.abs(p)>=e.minHorizontal)switch(d){case"left":(v=Math.abs(m-i[i.length-1]))<=e.deltaHorizontal&&(l.left=!0);break;case"right":(v=Math.abs(_-i[i.length-1]))<=e.deltaHorizontal&&(l.right=!0)}if(d="none",d=(p=s[0]-s[s.length-1])>0?"top":"bottom",m=Math.min(...s),_=Math.max(...s),Math.abs(p)>=e.minVertical)switch(d){case"top":(v=Math.abs(m-s[s.length-1]))<=e.deltaVertical&&(l.top=!0);break;case"bottom":(v=Math.abs(_-s[s.length-1]))<=e.deltaVertical&&(l.bottom=!0)}if(n=[],l.top||l.right||l.bottom||l.left){e.lockAxis&&((l.left||l.right)&&Math.abs(c-a)>Math.abs(u-f)?l.top=l.bottom=!1:(l.top||l.bottom)&&Math.abs(c-a)<Math.abs(u-f)&&(l.left=l.right=!1));const n={detail:{directions:l,touch:r,...h}};let o=new CustomEvent("swipe",n);t.dispatchEvent(o)}else{let e=new CustomEvent("swipecancel",{detail:{touch:r,...h}});t.dispatchEvent(e)}},c=function(o){e.preventScroll&&o.preventDefault();let r=o.changedTouches[0];if(n.push({x:r.clientX,y:r.clientY}),n.length>1){const e={detail:{x:[n[0].x,n[n.length-1].x],y:[n[0].y,n[n.length-1].y],touch:o instanceof TouchEvent}};let r=new CustomEvent("swiping",e);t.dispatchEvent(r)}};let a=!1;try{const t=Object.defineProperty({},"passive",{get:function(){a={passive:!e.preventScroll}}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(t){}return t.addEventListener("touchmove",c,a),t.addEventListener("touchend",l),{off:function(){t.removeEventListener("touchmove",c,a),t.removeEventListener("touchend",l),t.removeEventListener("mousedown",r),t.removeEventListener("mouseup",i),t.removeEventListener("mousemove",s)}}};void 0!==t.exports?t.exports=r:void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)},function(t,e){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},function(t,e,n){"use strict";n.r(e);n(1),n(2);var o=n(0),r=n.n(o),i="http://www.w3.org/1999/xhtml",s={svg:"http://www.w3.org/2000/svg",xhtml:i,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},l=function(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),s.hasOwnProperty(e)?{space:s[e],local:t}:t};var c=function(t){var e=l(t);return(e.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===i&&e.documentElement.namespaceURI===i?e.createElement(t):e.createElementNS(n,t)}})(e)};function a(){}var u=function(t){return null==t?a:function(){return this.querySelector(t)}};function f(){return[]}var h=function(t){return new Array(t.length)};function p(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}p.prototype={constructor:p,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var d="$";function v(t,e,n,o,r,i){for(var s,l=0,c=e.length,a=i.length;l<a;++l)(s=e[l])?(s.__data__=i[l],o[l]=s):n[l]=new p(t,i[l]);for(;l<c;++l)(s=e[l])&&(r[l]=s)}function m(t,e,n,o,r,i,s){var l,c,a,u={},f=e.length,h=i.length,v=new Array(f);for(l=0;l<f;++l)(c=e[l])&&(v[l]=a=d+s.call(c,c.__data__,l,e),a in u?r[l]=c:u[a]=c);for(l=0;l<h;++l)(c=u[a=d+s.call(t,i[l],l,i)])?(o[l]=c,c.__data__=i[l],u[a]=null):n[l]=new p(t,i[l]);for(l=0;l<f;++l)(c=e[l])&&u[v[l]]===c&&(r[l]=c)}function _(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}var y=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function g(t){return t.trim().split(/^|\s+/)}function w(t){return t.classList||new b(t)}function b(t){this._node=t,this._names=g(t.getAttribute("class")||"")}function C(t,e){for(var n=w(t),o=-1,r=e.length;++o<r;)n.add(e[o])}function A(t,e){for(var n=w(t),o=-1,r=e.length;++o<r;)n.remove(e[o])}b.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function E(){this.textContent=""}function x(){this.innerHTML=""}function S(){this.nextSibling&&this.parentNode.appendChild(this)}function L(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function T(){return null}function M(){var t=this.parentNode;t&&t.removeChild(this)}function B(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function k(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}var N={},O=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(N={mouseenter:"mouseover",mouseleave:"mouseout"}));function P(t,e,n){return t=X(t,e,n),function(e){var n=e.relatedTarget;n&&(n===this||8&n.compareDocumentPosition(this))||t.call(this,e)}}function X(t,e,n){return function(o){var r=O;O=o;try{t.call(this,this.__data__,e,n)}finally{O=r}}}function Y(t){return function(){var e=this.__on;if(e){for(var n,o=0,r=-1,i=e.length;o<i;++o)n=e[o],t.type&&n.type!==t.type||n.name!==t.name?e[++r]=n:this.removeEventListener(n.type,n.listener,n.capture);++r?e.length=r:delete this.__on}}}function j(t,e,n){var o=N.hasOwnProperty(t.type)?P:X;return function(r,i,s){var l,c=this.__on,a=o(e,i,s);if(c)for(var u=0,f=c.length;u<f;++u)if((l=c[u]).type===t.type&&l.name===t.name)return this.removeEventListener(l.type,l.listener,l.capture),this.addEventListener(l.type,l.listener=a,l.capture=n),void(l.value=e);this.addEventListener(t.type,a,n),l={type:t.type,name:t.name,value:e,listener:a,capture:n},c?c.push(l):this.__on=[l]}}function I(t,e,n){var o=y(t),r=o.CustomEvent;"function"==typeof r?r=new r(e,n):(r=o.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}var V=[null];function z(t,e){this._groups=t,this._parents=e}function q(){return new z([[document.documentElement]],V)}z.prototype=q.prototype={constructor:z,select:function(t){"function"!=typeof t&&(t=u(t));for(var e=this._groups,n=e.length,o=new Array(n),r=0;r<n;++r)for(var i,s,l=e[r],c=l.length,a=o[r]=new Array(c),f=0;f<c;++f)(i=l[f])&&(s=t.call(i,i.__data__,f,l))&&("__data__"in i&&(s.__data__=i.__data__),a[f]=s);return new z(o,this._parents)},selectAll:function(t){var e;"function"!=typeof t&&(t=null==(e=t)?f:function(){return this.querySelectorAll(e)});for(var n=this._groups,o=n.length,r=[],i=[],s=0;s<o;++s)for(var l,c=n[s],a=c.length,u=0;u<a;++u)(l=c[u])&&(r.push(t.call(l,l.__data__,u,c)),i.push(l));return new z(r,i)},filter:function(t){var e;"function"!=typeof t&&(e=t,t=function(){return this.matches(e)});for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i)for(var s,l=n[i],c=l.length,a=r[i]=[],u=0;u<c;++u)(s=l[u])&&t.call(s,s.__data__,u,l)&&a.push(s);return new z(r,this._parents)},data:function(t,e){if(!t)return d=new Array(this.size()),u=-1,this.each(function(t){d[++u]=t}),d;var n,o=e?m:v,r=this._parents,i=this._groups;"function"!=typeof t&&(n=t,t=function(){return n});for(var s=i.length,l=new Array(s),c=new Array(s),a=new Array(s),u=0;u<s;++u){var f=r[u],h=i[u],p=h.length,d=t.call(f,f&&f.__data__,u,r),_=d.length,y=c[u]=new Array(_),g=l[u]=new Array(_);o(f,h,y,g,a[u]=new Array(p),d,e);for(var w,b,C=0,A=0;C<_;++C)if(w=y[C]){for(C>=A&&(A=C+1);!(b=g[A])&&++A<_;);w._next=b||null}}return(l=new z(l,r))._enter=c,l._exit=a,l},enter:function(){return new z(this._enter||this._groups.map(h),this._parents)},exit:function(){return new z(this._exit||this._groups.map(h),this._parents)},join:function(t,e,n){var o=this.enter(),r=this,i=this.exit();return o="function"==typeof t?t(o):o.append(t+""),null!=e&&(r=e(r)),null==n?i.remove():n(i),o&&r?o.merge(r).order():r},merge:function(t){for(var e=this._groups,n=t._groups,o=e.length,r=n.length,i=Math.min(o,r),s=new Array(o),l=0;l<i;++l)for(var c,a=e[l],u=n[l],f=a.length,h=s[l]=new Array(f),p=0;p<f;++p)(c=a[p]||u[p])&&(h[p]=c);for(;l<o;++l)s[l]=e[l];return new z(s,this._parents)},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var o,r=t[e],i=r.length-1,s=r[i];--i>=0;)(o=r[i])&&(s&&4^o.compareDocumentPosition(s)&&s.parentNode.insertBefore(o,s),s=o);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=_);for(var n=this._groups,o=n.length,r=new Array(o),i=0;i<o;++i){for(var s,l=n[i],c=l.length,a=r[i]=new Array(c),u=0;u<c;++u)(s=l[u])&&(a[u]=s);a.sort(e)}return new z(r,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),e=-1;return this.each(function(){t[++e]=this}),t},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var o=t[e],r=0,i=o.length;r<i;++r){var s=o[r];if(s)return s}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,o=e.length;n<o;++n)for(var r,i=e[n],s=0,l=i.length;s<l;++s)(r=i[s])&&t.call(r,r.__data__,s,i);return this},attr:function(t,e){var n=l(t);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((null==e?n.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof e?n.local?function(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}:function(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}:n.local?function(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}:function(t,e){return function(){this.setAttribute(t,e)}})(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof e?function(t,e,n){return function(){var o=e.apply(this,arguments);null==o?this.style.removeProperty(t):this.style.setProperty(t,o,n)}}:function(t,e,n){return function(){this.style.setProperty(t,e,n)}})(t,e,null==n?"":n)):function(t,e){return t.style.getPropertyValue(e)||y(t).getComputedStyle(t,null).getPropertyValue(e)}(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?function(t){return function(){delete this[t]}}:"function"==typeof e?function(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}:function(t,e){return function(){this[t]=e}})(t,e)):this.node()[t]},classed:function(t,e){var n=g(t+"");if(arguments.length<2){for(var o=w(this.node()),r=-1,i=n.length;++r<i;)if(!o.contains(n[r]))return!1;return!0}return this.each(("function"==typeof e?function(t,e){return function(){(e.apply(this,arguments)?C:A)(this,t)}}:e?function(t){return function(){C(this,t)}}:function(t){return function(){A(this,t)}})(n,e))},text:function(t){return arguments.length?this.each(null==t?E:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?x:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(S)},lower:function(){return this.each(L)},append:function(t){var e="function"==typeof t?t:c(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var n="function"==typeof t?t:c(t),o=null==e?T:"function"==typeof e?e:u(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)})},remove:function(){return this.each(M)},clone:function(t){return this.select(t?k:B)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var o,r,i=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}(t+""),s=i.length;if(!(arguments.length<2)){for(l=e?j:Y,null==n&&(n=!1),o=0;o<s;++o)this.each(l(i[o],e,n));return this}var l=this.node().__on;if(l)for(var c,a=0,u=l.length;a<u;++a)for(o=0,c=l[a];o<s;++o)if((r=i[o]).type===c.type&&r.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?function(t,e){return function(){return I(this,t,e.apply(this,arguments))}}:function(t,e){return function(){return I(this,t,e)}})(t,e))}};var H=function(t){return"string"==typeof t?new z([[document.querySelector(t)]],[document.documentElement]):new z([[t]],V)},D=0;function R(){this._="@"+(++D).toString(36)}R.prototype=function(){return new R}.prototype={constructor:R,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};n(3),n(4);var U={select:H,selectAll:function(t){return"string"==typeof t?new z([document.querySelectorAll(t)],[document.documentElement]):new z([null==t?[]:t],V)},event:O},W={anecdoteClass:"anecdote",anecdoteActiveClass:"anectode--active",controlsClass:"anecdote__controls",triggerClass:"anecdote__trigger",navClass:"anecdote__nav-control",navButtonClass:"anecdote__nav-button",closeButtonClass:"anecdote__close",closeButtonIconClass:"fas fa-times",contentsClass:"anecdote__contents",contentsClassActive:"anecdote__contents--active",dotsClass:"anecdote__dots",dotsContainerClass:"anecdote__dots--container",dotClass:"anecdote__dot",dotClassActive:"anecdote__dot--active",dotTextClass:"anecdote__dots--text",infoIcon:{class:"anecdote__icon",src:"assets/icons/anecdote.svg",alt:"anecdote icon"},linkCtaContainerClass:"anecdote__cta--container",linkButtonContainerClass:"anecdote__link--button-container",linkButtonIconClass:"anecdote__link--button-icon",linkButtonClass:"link-button anecdote__link--button",linkButtonText:"",panesClass:"anecdote__panes",paneClass:"anecdote__pane",paneClassActive:"anecdote__pane--active"};function F(){var t=U.select(this.closest(".".concat(W.anecdoteClass)));t.classed(W.anecdoteActiveClass,!t.classed(W.anecdoteActiveClass))}function $(t,e){var n=t.selectAll(".".concat(W.dotClass));n.classed(W.dotClassActive,!1),n.filter(function(t,n){return n===e}).classed(W.dotClassActive,!0),function(t,e){var n=t.selectAll(".".concat(W.paneClass)).size();t.select(".".concat(W.dotTextClass)).html("".concat(e+1," of ").concat(n))}(t,e)}function G(t,e){var n,o=t.selectAll(".".concat(W.paneClass)).classed(W.paneClassActive,!1).filter(function(t,n){return n===e}).classed(W.paneClassActive,!0);t.attr("data-current",e),$(t,e),n=o,U.selectAll(".anecdote__pane").selectAll("a").attr("tabindex",-1),n&&n.selectAll("a").attr("tabindex",0)}function J(t,e){var n=Number(t.attr("data-current")),o=t.selectAll(".".concat(W.paneClass)).size(),r=e?n-1:n+1;r===o&&(r=0),r<0&&(r=o-1),G(t,r)}function K(){var t=U.select(this);!function(t){t.selectAll(".".concat(W.paneClass)).each(function(t,e){U.select(this).attr("data-pane-index",e)})}(t),function(t){var e=t.selectAll(".".concat(W.paneClass)).size();t.select(".".concat(W.panesClass)).style("width","".concat(100*e,"%"))}(t),function(t){t.select(".".concat(W.controlsClass)).append("button").classed(W.closeButtonClass,!0).on("click",F).append("i").classed(W.closeButtonIconClass,!0)}(t),G(t,0),function(t){var e=t.selectAll(".".concat(W.paneClass)).size(),n=t.select(".".concat(W.contentsClass)).insert("div").classed(W.dotsContainerClass,!0),o=n.append("div").classed(W.dotsClass,!0),r=new Array(e);o.selectAll(".".concat(W.dotClass)).data(r).enter().append("button").classed(W.dotClass,!0).on("click",function(e,n){G(t,n)}),n.append("div").classed(W.dotTextClass,!0),$(t,0)}(t),function(t){var e=t.selectAll(".".concat(W.navClass)).append("button").classed(W.navButtonClass,!0);e.append("i").each(function(t,e){var n=0===e?"fa-chevron-left":"fa-chevron-right";U.select(this).classed("fas fa-lg ".concat(n),!0)}),e.each(function(e,n){var o=U.select(this),r=0===n||null;o.on("click",function(e){return J(t,r)})})}(t),function(t){t.select(".anecdote__cta").raise()}(t),function(t){t.selectAll(".".concat(W.paneClass)).on("click",function(e,n){var o=t.selectAll(".".concat(W.paneClass)).size(),r=O.srcElement?O.srcElement:O.target;r&&"A"===r.nodeName||((n+=1)===o&&(n=0),G(t,n))})}(t),function(t){t.node().addEventListener("swipe",function(t){var e,n=U.selectAll(".".concat(W.anecdoteActiveClass)),o=t.detail.directions;if(o.right)e="previous";else if(!o.left)return;n.each(function(){J(U.select(this),e)})})}(t)}function Q(t){var e=t.target,n=U.select(e.closest(".anecdote__pane")),o=U.select(e.closest(".anecdote")),r=Number(n.attr("data-pane-index"));r!==Number(o.attr("data-current"))&&G(o,r)}U.selectAll(".".concat(W.anecdoteClass)).each(K),U.selectAll("button.".concat(W.triggerClass)).on("click",F),window.addEventListener("keydown",function(t){var e,n,o=U.selectAll(".".concat(W.anecdoteActiveClass));switch(t.key){case"Right":case"ArrowRight":e="next";break;case"Left":case"ArrowLeft":e="previous"}e&&(n="previous"===e,o.each(function(){J(U.select(this),n)}))}),U.selectAll(".anecdote__pane").selectAll("a").attr("tabindex",-1).each(function(){this.addEventListener("focus",Q)}),r.a.polyfill()}]);
!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/assets/",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r="http://www.w3.org/1999/xhtml",i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},o=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),i.hasOwnProperty(n)?{space:i[n],local:t}:t};var u=function(t){var n=o(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===r&&n.documentElement.namespaceURI===r?n.createElement(t):n.createElementNS(e,t)}})(n)};function c(){}var a=function(t){return null==t?c:function(){return this.querySelector(t)}};function s(){return[]}var l=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var f=document.documentElement;if(!f.matches){var h=f.webkitMatchesSelector||f.msMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector;l=function(t){return function(){return h.call(this,t)}}}}var p=l,d=function(t){return new Array(t.length)};function _(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}_.prototype={constructor:_,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var v="$";function y(t,n,e,r,i,o){for(var u,c=0,a=n.length,s=o.length;c<s;++c)(u=n[c])?(u.__data__=o[c],r[c]=u):e[c]=new _(t,o[c]);for(;c<a;++c)(u=n[c])&&(i[c]=u)}function m(t,n,e,r,i,o,u){var c,a,s,l={},f=n.length,h=o.length,p=new Array(f);for(c=0;c<f;++c)(a=n[c])&&(p[c]=s=v+u.call(a,a.__data__,c,n),s in l?i[c]=a:l[s]=a);for(c=0;c<h;++c)(a=l[s=v+u.call(t,o[c],c,o)])?(r[c]=a,a.__data__=o[c],l[s]=null):e[c]=new _(t,o[c]);for(c=0;c<f;++c)(a=n[c])&&l[p[c]]===a&&(i[c]=a)}function g(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var w=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function A(t){return t.trim().split(/^|\s+/)}function b(t){return t.classList||new x(t)}function x(t){this._node=t,this._names=A(t.getAttribute("class")||"")}function S(t,n){for(var e=b(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function E(t,n){for(var e=b(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}x.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function N(){this.textContent=""}function M(){this.innerHTML=""}function O(){this.nextSibling&&this.parentNode.appendChild(this)}function P(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function C(){return null}function L(){var t=this.parentNode;t&&t.removeChild(this)}function j(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function B(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}var q={},T=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(q={mouseenter:"mouseover",mouseleave:"mouseout"}));function k(t,n,e){return t=D(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function D(t,n,e){return function(r){var i=T;T=r;try{t.call(this,this.__data__,n,e)}finally{T=i}}}function z(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function H(t,n,e){var r=q.hasOwnProperty(t.type)?k:D;return function(i,o,u){var c,a=this.__on,s=r(n,o,u);if(a)for(var l=0,f=a.length;l<f;++l)if((c=a[l]).type===t.type&&c.name===t.name)return this.removeEventListener(c.type,c.listener,c.capture),this.addEventListener(c.type,c.listener=s,c.capture=e),void(c.value=n);this.addEventListener(t.type,s,e),c={type:t.type,name:t.name,value:n,listener:s,capture:e},a?a.push(c):this.__on=[c]}}function R(t,n,e){var r=w(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var I=[null];function U(t,n){this._groups=t,this._parents=n}function V(){return new U([[document.documentElement]],I)}U.prototype=V.prototype={constructor:U,select:function(t){"function"!=typeof t&&(t=a(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,c=n[i],s=c.length,l=r[i]=new Array(s),f=0;f<s;++f)(o=c[f])&&(u=t.call(o,o.__data__,f,c))&&("__data__"in o&&(u.__data__=o.__data__),l[f]=u);return new U(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=function(t){return null==t?s:function(){return this.querySelectorAll(t)}}(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,c=n[o],a=c.length,l=0;l<a;++l)(u=c[l])&&(r.push(t.call(u,u.__data__,l,c)),i.push(u));return new U(r,i)},filter:function(t){"function"!=typeof t&&(t=p(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],c=u.length,a=r[i]=[],s=0;s<c;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&a.push(o);return new U(r,this._parents)},data:function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?m:y,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,u=new Array(o),c=new Array(o),a=new Array(o),s=0;s<o;++s){var l=r[s],f=i[s],h=f.length,p=t.call(l,l&&l.__data__,s,r),d=p.length,_=c[s]=new Array(d),v=u[s]=new Array(d);e(l,f,_,v,a[s]=new Array(h),p,n);for(var g,w,A=0,b=0;A<d;++A)if(g=_[A]){for(A>=b&&(b=A+1);!(w=v[b])&&++b<d;);g._next=w||null}}return(u=new U(u,r))._enter=c,u._exit=a,u},enter:function(){return new U(this._enter||this._groups.map(d),this._parents)},exit:function(){return new U(this._exit||this._groups.map(d),this._parents)},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),c=0;c<o;++c)for(var a,s=n[c],l=e[c],f=s.length,h=u[c]=new Array(f),p=0;p<f;++p)(a=s[p]||l[p])&&(h[p]=a);for(;c<r;++c)u[c]=n[c];return new U(u,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=g);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,c=e[o],a=c.length,s=i[o]=new Array(a),l=0;l<a;++l)(u=c[l])&&(s[l]=u);s.sort(n)}return new U(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,c=o.length;u<c;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=o(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):function(t,n){return t.style.getPropertyValue(n)||w(t).getComputedStyle(t,null).getPropertyValue(n)}(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=A(t+"");if(arguments.length<2){for(var r=b(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?S:E)(this,t)}}:n?function(t){return function(){S(this,t)}}:function(t){return function(){E(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?N:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?M:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(O)},lower:function(){return this.each(P)},append:function(t){var n="function"==typeof t?t:u(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:u(t),r=null==n?C:"function"==typeof n?n:a(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(L)},clone:function(t){return this.select(t?B:j)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),u=o.length;if(!(arguments.length<2)){for(c=n?H:z,null==e&&(e=!1),r=0;r<u;++r)this.each(c(o[r],n,e));return this}var c=this.node().__on;if(c)for(var a,s=0,l=c.length;s<l;++s)for(r=0,a=c[s];r<u;++r)if((i=o[r]).type===a.type&&i.name===a.name)return a.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return R(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return R(this,t,n)}})(t,n))}};var W=function(t){return"string"==typeof t?new U([[document.querySelector(t)]],[document.documentElement]):new U([[t]],I)},X=0;function $(){this._="@"+(++X).toString(36)}$.prototype=function(){return new $}.prototype={constructor:$,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var F={select:W,selectAll:function(t){return"string"==typeof t?new U([document.querySelectorAll(t)],[document.documentElement]):new U([null==t?[]:t],I)}},G="info-box__close",J=0;function K(t,n){var e=t.selectAll(".anecdote__dot");e.classed("anecdote__dot--active",!1),e.filter(function(t,e){return e===n}).classed("anecdote__dot--active",!0)}function Q(t,n,e){t.select(".anecdote__dots--text").html("".concat(e," of ").concat(n))}function Y(t,n){var e=t.selectAll(".anecdote__pane");e.classed("anecdote__pane--active",!1),e.filter(function(t,e){return e===n}).classed("anecdote__pane--active",!0)}function Z(t){var n=t.select(".anecdote__contents"),e=n.classed("anecdote__content--active");n.classed("anecdote__content--active",!e),e||(!function(t){var n,e=0;t.selectAll(".anecdote__pane").each(function(){var t=this.getBoundingClientRect().height;e=t>e?t:e}),n=Math.ceil(e)+"px",t.select(".anecdote__panes").attr("style","height: ".concat(n))}(t),t.select("."+G).on("click",function(){Z(t)}))}function tt(){var t=F.select(this);!function(t){t.insert("button").classed(G,!0).lower().append("i").classed("fas fa-times",!0)}(t),function(t){var n=t.node().innerHTML;t.selectAll("*").remove(),t.append("div").classed("anecdote__contents",!0).html(n)}(t),function(t){var n=t.append("button").classed("link-button",!0).text("What does this mean to me?");n.lower(),n.on("click",function(){Z(t)})}(t),Y(t,0),function(t){J=t.selectAll(".anecdote__pane").size();var n=t.select(".anecdote__contents").insert("div",".anecdote__cta").classed("anecdote__dots--container",!0),e=n.append("div").classed("anecdote__dots",!0),r=new Array(J);e.selectAll(".anecdote__dot").data(r).enter().append("div").classed("anecdote__dot",!0).on("click",function(n,e){K(t,e),Y(t,e),Q(t,J,e+1)}),n.append("div").classed("anecdote__dots--text",!0)}(t),K(t,0),Q(t,J,1)}F.selectAll(".anecdote").each(tt)}]);
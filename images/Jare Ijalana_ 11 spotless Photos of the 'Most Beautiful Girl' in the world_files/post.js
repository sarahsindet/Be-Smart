!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=31)}({0:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c}));var r=2e4,o={"X-Requested-With":"XMLHttpRequest"},i={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},c={Accept:"application/json"}},1:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t){return t>=200&&t<400};function o(t){return Object.keys(t).map((function(e){var n=t[e];return n instanceof Array?function(t,e){return e.map((function(e){return"".concat(t,"[]=").concat(e)})).join("&")}(e,n):"".concat(e,"=").concat(n)})).join("&")}},2:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c}));var r="2:user_id",o="2:cohort",i="2:key_dfp",c=2232},20:function(t,e,n){},3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));function r(t){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*".concat(t,"\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1"))||null}function o(t){return t?"expires=".concat(function(t){var e=new Date;return e.setTime(e.getTime()+36e5*t),e.toUTCString()}(t),";"):""}function i(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.Site.domain;document.cookie="".concat(t,"=").concat(e,"; ").concat(o(n),"; domain=").concat(r,"; path=/")}},31:function(t,e,n){"use strict";n.r(e);n(20);var r=n(9);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={layout:"default",theme:"default",count:"hidden"};function a(t,e){if(!t||!t.nodeType)throw Error("Incorrect first param $mainContainer (should be a DOM elem)");if(!e||!e.channelid)throw Error("Incorrect second param ytparams. YouTube channelId is required for subscribe button");return!0}function u(t,e,n){Array.prototype.slice.call(t.querySelectorAll(".js-ytsubscribe")).forEach((function(t){var r=t.querySelector(".js-ytsubscribe-container");if(r){var a=document.createElement("div");r.appendChild(a),n?t.classList.add(n):t.style.display="block",window.gapi.ytsubscribe.render(a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},c,{},e))}}))}function d(t){t.target.parentNode.innerHTML='<div class="fb-comments" data-href="'.concat(t.target.dataset.href,'" data-numposts="2" data-colorscheme="light"\n data-mobile="true" data-order-by="reverse_time"></div>'),window.FB&&window.FB.XFBML.parse(t.target.parentNode)}var s=n(5),f=n(7);document.addEventListener("DOMContentLoaded",(function(){var t,e,n;window.Site.youTubeChannelId&&(t=document,e={channelid:window.Site.youTubeChannelId},n="c-article__ytsubscribe--show",a(t,e)&&Object(r.a)("https://apis.google.com/js/platform.js",(function(){u(t,e,n)}))),Object(s.a)();var o=document.querySelector(".js-fb-comments-button");o&&o.addEventListener("click",d);var i=document.querySelector(".js-article-share");if(i){var c=document.querySelector(".js-header"),l=(c?c.firstElementChild.offsetHeight:80)+60,p=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?i.classList.add("l-article__share--top-fixed"):i.classList.remove("l-article__share--top-fixed")}))}),{rootMargin:"0px 0px -".concat(window.innerHeight-l,"px 0px")}),b=i.getBoundingClientRect().bottom,v=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?i.classList.remove("l-article__share--bottom"):i.classList.add("l-article__share--bottom")}))}),{rootMargin:"-".concat(b,"px 0px 0px 0px")});p.observe(i.parentNode),v.observe(i.parentNode)}var y=document.querySelector(".js-article"),h=document.referrer;if(window.Site&&window.Site.analyticsId&&window.Site.analyticsBlockURL&&y&&h&&Object(f.a)(h)){var m=y.dataset.articleId;m&&Object(f.c)(m)}}),!1)},4:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return f}));var r=n(0),o=n(1);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(t,e,n,i){return new Promise((function(c,a){var u=new XMLHttpRequest;u.open(i,t,!0),Object.keys(n).forEach((function(t){return u.setRequestHeader(t,n[t])})),u.onreadystatechange=function(){u.readyState===u.DONE&&(Object(o.b)(u.status)?c(u.responseText):a(u))},u.onerror=a,u.ontimeout=a,u.timeout=r.d,u.send(e)}))},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u(t,Object(o.a)(e),c({},n,{},r.a,{},r.c),"POST")},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d(t,e,c({},n,{},r.b))},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(t,"",c({},e,{},r.a),"GET")}},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var r=["src","srcset","style"];function o(t,e){t.forEach((function(t){var n=e.dataset[t];n&&(e[t]=n,delete e.dataset[t])}))}var i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return t.querySelectorAll(r.map((function(t){return"[data-".concat(t,"]")})).join(","))},c=function(t){return function(e){return i(e).forEach((function(e){return t.observe(e)}))}};function a(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return new IntersectionObserver((function(e){e.filter((function(t){return t.isIntersecting})).forEach(t)}),{threshold:0})}((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.target,i=void 0===n?{}:n;o(r,i),t.unobserve(i)}));return i().forEach((function(e){return t.observe(e)})),t}},7:function(t,e,n){"use strict";function r(t,e){try{return t.getAttribute(e)}catch(t){return null}}var o=function(){return window.innerHeight||document.documentElement.clientHeight};function i(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.getBoundingClientRect().bottom;return n<=o()+e&&n>0}(t,t.clientHeight)}var c=n(4),a=n(2),u=n(3);function d(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return g})),n.d(e,"c",(function(){return m}));var s=Date.now(),f=Object(u.a)(a.d),l=d(document.querySelectorAll("[data-news-type]")),p="Set"in window?new Set:[],b=["/","/latest"],v=window.Site&&window.Site.indexPageURL,y=Object(u.a)("tv_group_edge");function h(){var t=new Set;l.forEach((function(e){i(e)&&d(e.querySelectorAll("[data-variation-id]")).forEach((function(e){var n,o,c=r(e,"data-post-id");!p.has(c)&&i(e)&&(t.add(JSON.stringify({id:c,block:(n=e,o=n.closest("[data-news-type]"),o?o.getAttribute("data-news-type"):"unknown type"),href:e.href,variation_id:r(e,"data-variation-id")})),p.add(c))}))})),t.size&&Object(c.c)(window.Site.analyticsBlockURL,{user_id:f,event:"impression",session_id:s,project_id:window.Site.analyticsId,data:d(t),"tv-group":y||0})}function m(t){Object(c.c)(window.Site.analyticsBlockURL,{user_id:f,event:"read",session_id:s,project_id:window.Site.analyticsId,data:JSON.stringify({id:t}),"tv-group":y||0})}function g(t){if(!v)return!1;var e=document.createElement("a");e.href=v;var n=e.host,r=b.map((function(t){return n+t})),o=document.createElement("a");o.href=t;var i=o.host+o.pathname;return r.includes(i)}},9:function(t,e,n){"use strict";var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(t);return Object.keys(e).forEach((function(t){return n.setAttribute(t,e[t])})),n};e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.head,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=r("script",{src:t,async:o});return i.onload=e,n.appendChild(i),n}}});
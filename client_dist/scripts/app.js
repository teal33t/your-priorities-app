!function(){function n(n,e){if(!e||"function"==typeof e)return n;for(var r in e)n[r]=e[r];return n}function e(n,r){for(var t in r)t in n?e(n[t],r[t]):n[t]=r[t];return n}function r(n,e,r){var t,a=0,u=n.length,o=void 0===u||"[object Array]"!==Object.prototype.toString.apply(n)||"function"==typeof n;if(r)if(o){for(t in n)if(e.apply(n[t],r)===!1)break}else for(;u>a&&e.apply(n[a++],r)!==!1;);else if(o){for(t in n)if(e.call(n[t],t,n[t])===!1)break}else for(;u>a&&e.call(n[a],a,n[a++])!==!1;);return n}function t(n){return"string"==typeof n?n.replace(/[&<>"'\/]/g,function(n){return V[n]}):n}function a(n){var e=function(n){if(window.XMLHttpRequest)return n(null,new XMLHttpRequest);if(window.ActiveXObject)try{return n(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(e){return n(null,new ActiveXObject("Microsoft.XMLHTTP"))}return n(new Error)},r=function(n){if("string"==typeof n)return n;var e=[];for(var r in n)n.hasOwnProperty(r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(n[r]));return e.join("&")},t=function(n){n=n.replace(/\r\n/g,"\n");for(var e="",r=0;r<n.length;r++){var t=n.charCodeAt(r);128>t?e+=String.fromCharCode(t):t>127&&2048>t?(e+=String.fromCharCode(192|t>>6),e+=String.fromCharCode(128|63&t)):(e+=String.fromCharCode(224|t>>12),e+=String.fromCharCode(128|63&t>>6),e+=String.fromCharCode(128|63&t))}return e},a=function(n){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n=t(n);var r,a,u,o,i,s,l,c="",f=0;do r=n.charCodeAt(f++),a=n.charCodeAt(f++),u=n.charCodeAt(f++),o=r>>2,i=(3&r)<<4|a>>4,s=(15&a)<<2|u>>6,l=63&u,isNaN(a)?s=l=64:isNaN(u)&&(l=64),c+=e.charAt(o)+e.charAt(i)+e.charAt(s)+e.charAt(l),r=a=u="",o=i=s=l="";while(f<n.length);return c},u=function(){for(var n=arguments[0],e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])}return n},o=function(n,t,a,i){"function"==typeof a&&(i=a,a={}),a.cache=a.cache||!1,a.data=a.data||{},a.headers=a.headers||{},a.jsonp=a.jsonp||!1,a.async=void 0===a.async?!0:a.async;var s,l=u({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},o.headers,a.headers);if(s="application/json"===l["content-type"]?JSON.stringify(a.data):r(a.data),"GET"===n){var c=[];if(s&&(c.push(s),s=null),a.cache||c.push("_="+(new Date).getTime()),a.jsonp&&(c.push("callback="+a.jsonp),c.push("jsonp="+a.jsonp)),c=c.join("&"),c.length>1&&(t+=t.indexOf("?")>-1?"&"+c:"?"+c),a.jsonp){var f=document.getElementsByTagName("head")[0],p=document.createElement("script");return p.type="text/javascript",p.src=t,void f.appendChild(p)}}e(function(e,r){if(e)return i(e);r.open(n,t,a.async);for(var u in l)l.hasOwnProperty(u)&&r.setRequestHeader(u,l[u]);r.onreadystatechange=function(){if(4===r.readyState){var n=r.responseText||"";if(!i)return;i(r.status,{text:function(){return n},json:function(){return JSON.parse(n)}})}},r.send(s)})},i={authBasic:function(n,e){o.headers.Authorization="Basic "+a(n+":"+e)},connect:function(n,e,r){return o("CONNECT",n,e,r)},del:function(n,e,r){return o("DELETE",n,e,r)},get:function(n,e,r){return o("GET",n,e,r)},head:function(n,e,r){return o("HEAD",n,e,r)},headers:function(n){o.headers=n||{}},isAllowed:function(n,e,r){this.options(n,function(n,t){r(-1!==t.text().indexOf(e))})},options:function(n,e,r){return o("OPTIONS",n,e,r)},patch:function(n,e,r){return o("PATCH",n,e,r)},post:function(n,e,r){return o("POST",n,e,r)},put:function(n,e,r){return o("PUT",n,e,r)},trace:function(n,e,r){return o("TRACE",n,e,r)}},s=n.type?n.type.toLowerCase():"get";i[s](n.url,n,function(e,r){200===e||0===e&&r.text()?n.success(r.json(),e,null):n.error(r.text(),e,null)})}function u(n,e){"function"==typeof n&&(e=n,n={}),n=n||{},B.extend(z,n),delete z.fixLng,"string"==typeof z.ns&&(z.ns={namespaces:[z.ns],defaultNs:z.ns}),"string"==typeof z.fallbackNS&&(z.fallbackNS=[z.fallbackNS]),("string"==typeof z.fallbackLng||"boolean"==typeof z.fallbackLng)&&(z.fallbackLng=[z.fallbackLng]),z.interpolationPrefixEscaped=B.regexEscape(z.interpolationPrefix),z.interpolationSuffixEscaped=B.regexEscape(z.interpolationSuffix),z.lng||(z.lng=B.detectLanguage()),R=B.toLanguages(z.lng),C=R[0],B.log("currentLng set to: "+C),z.useCookie&&B.cookie.read(z.cookieName)!==C&&B.cookie.create(z.cookieName,C,z.cookieExpirationTime,z.cookieDomain),z.detectLngFromLocalStorage&&"undefined"!=typeof document&&window.localstorage&&window.localStorage.setItem("i18next_lng",C);var r=k;n.fixLng&&(r=function(n,e){return e=e||{},e.lng=e.lng||r.lng,k(n,e)},r.lng=C),G.setCurrentLng(C),E&&z.setJqueryExt&&b();var t;if(E&&E.Deferred&&(t=E.Deferred()),!z.resStore){var a=B.toLanguages(z.lng);"string"==typeof z.preload&&(z.preload=[z.preload]);for(var u=0,o=z.preload.length;o>u;u++)for(var i=B.toLanguages(z.preload[u]),s=0,l=i.length;l>s;s++)a.indexOf(i[s])<0&&a.push(i[s]);return P.sync.load(a,z,function(n,a){A=a,F=!0,e&&e(r),t&&t.resolve(r)}),t?t.promise():void 0}return A=z.resStore,F=!0,e&&e(r),t&&t.resolve(r),t?t.promise():void 0}function o(n,e){"string"==typeof n&&(n=[n]);for(var r=0,t=n.length;t>r;r++)z.preload.indexOf(n[r])<0&&z.preload.push(n[r]);return u(e)}function i(n,e,r,t){"string"!=typeof e?(r=e,e=z.ns.defaultNs):z.ns.namespaces.indexOf(e)<0&&z.ns.namespaces.push(e),A[n]=A[n]||{},A[n][e]=A[n][e]||{},t?B.deepExtend(A[n][e],r):B.extend(A[n][e],r)}function s(n,e){"string"!=typeof e&&(e=z.ns.defaultNs),A[n]=A[n]||{},A[n][e]={}}function l(n,e,r,t){"string"!=typeof e?(resource=e,e=z.ns.defaultNs):z.ns.namespaces.indexOf(e)<0&&z.ns.namespaces.push(e),A[n]=A[n]||{},A[n][e]=A[n][e]||{};for(var a=r.split(z.keyseparator),u=0,o=A[z.lng][e];a[u];)u==a.length-1?o[a[u]]=t:(null==o[a[u]]&&(o[a[u]]={}),o=o[a[u]]),u++}function c(n,e,r){"string"!=typeof e?(resource=e,e=z.ns.defaultNs):z.ns.namespaces.indexOf(e)<0&&z.ns.namespaces.push(e);for(var t in r)"string"==typeof r[t]&&l(n,e,t,r[t])}function f(n){z.ns.defaultNs=n}function p(n,e){m([n],e)}function m(n,e){var r={dynamicLoad:z.dynamicLoad,resGetPath:z.resGetPath,getAsync:z.getAsync,customLoad:z.customLoad,ns:{namespaces:n,defaultNs:""}},t=B.toLanguages(z.lng);"string"==typeof z.preload&&(z.preload=[z.preload]);for(var a=0,u=z.preload.length;u>a;a++)for(var o=B.toLanguages(z.preload[a]),i=0,s=o.length;s>i;i++)t.indexOf(o[i])<0&&t.push(o[i]);for(var l=[],c=0,f=t.length;f>c;c++){var p=!1,m=A[t[c]];if(m)for(var d=0,g=n.length;g>d;d++)m[n[d]]||(p=!0);else p=!0;p&&l.push(t[c])}l.length?P.sync._fetch(l,r,function(r,t){var a=n.length*l.length;B.each(n,function(n,r){z.ns.namespaces.indexOf(r)<0&&z.ns.namespaces.push(r),B.each(l,function(n,u){A[u]=A[u]||{},A[u][r]=t[u][r],a--,0===a&&e&&(z.useLocalStorage&&P.sync._storeLocal(A),e())})})}):e&&e()}function d(n,e,r){return"function"==typeof e?(r=e,e={}):e||(e={}),e.lng=n,u(e,r)}function g(){return C}function b(){function n(n,e,r){if(0!==e.length){var t="text";if(0===e.indexOf("[")){var a=e.split("]");e=a[1],t=a[0].substr(1,a[0].length-1)}e.indexOf(";")===e.length-1&&(e=e.substr(0,e.length-2));var u;if("html"===t)u=z.defaultValueFromContent?E.extend({defaultValue:n.html()},r):r,n.html(E.t(e,u));else if("text"===t)u=z.defaultValueFromContent?E.extend({defaultValue:n.text()},r):r,n.text(E.t(e,u));else if("prepend"===t)u=z.defaultValueFromContent?E.extend({defaultValue:n.html()},r):r,n.prepend(E.t(e,u));else if("append"===t)u=z.defaultValueFromContent?E.extend({defaultValue:n.html()},r):r,n.append(E.t(e,u));else if(0===t.indexOf("data-")){var o=t.substr("data-".length);u=z.defaultValueFromContent?E.extend({defaultValue:n.data(o)},r):r;var i=E.t(e,u);n.data(o,i),n.attr(t,i)}else u=z.defaultValueFromContent?E.extend({defaultValue:n.attr(t)},r):r,n.attr(t,E.t(e,u))}}function e(e,r){var t=e.attr(z.selectorAttr);if(t||"undefined"==typeof t||t===!1||(t=e.text()||e.val()),t){var a=e,u=e.data("i18n-target");if(u&&(a=e.find(u)||e),r||z.useDataAttrOptions!==!0||(r=e.data("i18n-options")),r=r||{},t.indexOf(";")>=0){var o=t.split(";");E.each(o,function(e,t){""!==t&&n(a,t,r)})}else n(a,t,r);z.useDataAttrOptions===!0&&e.data("i18n-options",r)}}E.t=E.t||k,E.fn.i18n=function(n){return this.each(function(){e(E(this),n);var r=E(this).find("["+z.selectorAttr+"]");r.each(function(){e(E(this),n)})})}}function h(n,e,r,t){if(!n)return n;if(t=t||e,n.indexOf(t.interpolationPrefix||z.interpolationPrefix)<0)return n;var a=t.interpolationPrefix?B.regexEscape(t.interpolationPrefix):z.interpolationPrefixEscaped,u=t.interpolationSuffix?B.regexEscape(t.interpolationSuffix):z.interpolationSuffixEscaped,o="HTML"+u,i=e.replace&&"object"==typeof e.replace?e.replace:e;return B.each(i,function(e,i){var s=r?r+z.keyseparator+e:e;"object"==typeof i&&null!==i?n=h(n,i,s,t):t.escapeInterpolation||z.escapeInterpolation?(n=n.replace(new RegExp([a,s,o].join(""),"g"),B.regexReplacementEscape(i)),n=n.replace(new RegExp([a,s,u].join(""),"g"),B.regexReplacementEscape(B.escape(i)))):n=n.replace(new RegExp([a,s,u].join(""),"g"),B.regexReplacementEscape(i))}),n}function y(n,e){var r=",",t="{",a="}",u=B.extend({},e);for(delete u.postProcess;-1!=n.indexOf(z.reusePrefix)&&(M++,!(M>z.maxRecursion));){var o=n.lastIndexOf(z.reusePrefix),i=n.indexOf(z.reuseSuffix,o)+z.reuseSuffix.length,s=n.substring(o,i),l=s.replace(z.reusePrefix,"").replace(z.reuseSuffix,"");if(o>=i)return B.error("there is an missing closing in following translation value",n),"";if(-1!=l.indexOf(r)){var c=l.indexOf(r);if(-1!=l.indexOf(t,c)&&-1!=l.indexOf(a,c)){var f=l.indexOf(t,c),p=l.indexOf(a,f)+a.length;try{u=B.extend(u,JSON.parse(l.substring(f,p))),l=l.substring(0,c)}catch(m){}}}var d=O(l,u);n=n.replace(s,B.regexReplacementEscape(d))}return n}function v(n){return n.context&&("string"==typeof n.context||"number"==typeof n.context)}function x(n,e){return void 0!==n.count&&"string"!=typeof n.count&&G.needsPlural(e,n.count)}function N(n){return void 0!==n.indefinite_article&&"string"!=typeof n.indefinite_article&&n.indefinite_article}function w(n,e){e=e||{};var r=L(n,e),t=j(n,e);return void 0!==t||t===r}function k(n,e){return e=e||{},F?(M=0,O.apply(null,arguments)):(B.log("i18next not finished initialization. you might have called t function before loading resources finished."),e.defaultValue||"")}function L(n,e){return void 0!==e.defaultValue?e.defaultValue:n}function S(){for(var n=[],e=1;e<arguments.length;e++)n.push(arguments[e]);return{postProcess:"sprintf",sprintf:n}}function O(n,e){if(e&&"object"!=typeof e?"sprintf"===z.shortcutFunction?e=S.apply(null,arguments):"defaultValue"===z.shortcutFunction&&(e={defaultValue:e}):e=e||{},void 0===n||null===n||""===n)return"";"string"==typeof n&&(n=[n]);var r=n[0];if(n.length>1)for(var t=0;t<n.length&&(r=n[t],!w(r,e));t++);var a,u=L(r,e),o=j(r,e),i=e.lng?B.toLanguages(e.lng,e.fallbackLng):R,s=e.ns||z.ns.defaultNs;r.indexOf(z.nsseparator)>-1&&(a=r.split(z.nsseparator),s=a[0],r=a[1]),void 0===o&&z.sendMissing&&"function"==typeof z.missingKeyHandler&&(e.lng?z.missingKeyHandler(i[0],s,r,u,i):z.missingKeyHandler(z.lng,s,r,u,i));var l=e.postProcess||z.postProcess;void 0!==o&&l&&q[l]&&(o=q[l](o,r,e));var c=u;if(u.indexOf(z.nsseparator)>-1&&(a=u.split(z.nsseparator),c=a[1]),c===r&&z.parseMissingKey&&(u=z.parseMissingKey(u)),void 0===o&&(u=h(u,e),u=y(u,e),l&&q[l])){var f=L(r,e);o=q[l](f,r,e)}return void 0!==o?o:u}function j(n,e){e=e||{};var r,t,a=L(n,e),u=R;if(!A)return a;if("cimode"===u[0].toLowerCase())return a;if(e.lng&&(u=B.toLanguages(e.lng,e.fallbackLng),!A[u[0]])){var o=z.getAsync;z.getAsync=!1,P.sync.load(u,z,function(n,e){B.extend(A,e),z.getAsync=o})}var i=e.ns||z.ns.defaultNs;if(n.indexOf(z.nsseparator)>-1){var s=n.split(z.nsseparator);i=s[0],n=s[1]}if(v(e)){r=B.extend({},e),delete r.context,r.defaultValue=z.contextNotFound;var l=i+z.nsseparator+n+"_"+e.context;if(t=k(l,r),t!=z.contextNotFound)return h(t,{context:e.context})}if(x(e,u[0])){r=B.extend({},e),delete r.count,r.defaultValue=z.pluralNotFound;var c=i+z.nsseparator+n+z.pluralSuffix,f=G.get(u[0],e.count);if(f>=0?c=c+"_"+f:1===f&&(c=i+z.nsseparator+n),t=k(c,r),t!=z.pluralNotFound)return h(t,{count:e.count,interpolationPrefix:e.interpolationPrefix,interpolationSuffix:e.interpolationSuffix})}if(N(e)){var p=B.extend({},e);delete p.indefinite_article,p.defaultValue=z.indefiniteNotFound;var m=i+z.nsseparator+n+(e.count&&!x(e,u[0])||!e.count?z.indefiniteSuffix:"");if(t=k(m,p),t!=z.indefiniteNotFound)return t}for(var d,g=n.split(z.keyseparator),b=0,w=u.length;w>b&&void 0===d;b++){for(var S=u[b],T=0,C=A[S]&&A[S][i];g[T];)C=C&&C[g[T]],T++;if(void 0!==C){var _=Object.prototype.toString.apply(C);if("string"==typeof C)C=h(C,e),C=y(C,e);else if("[object Array]"!==_||z.returnObjectTrees||e.returnObjectTrees){if(null===C&&z.fallbackOnNull===!0)C=void 0;else if(null!==C)if(z.returnObjectTrees||e.returnObjectTrees){if("[object Number]"!==_&&"[object Function]"!==_&&"[object RegExp]"!==_){var E="[object Array]"===_?[]:{};B.each(C,function(r){E[r]=O(i+z.nsseparator+n+z.keyseparator+r,e)}),C=E}}else z.objectTreeKeyHandler&&"function"==typeof z.objectTreeKeyHandler?C=z.objectTreeKeyHandler(n,C,S,i,e):(C="key '"+i+":"+n+" ("+S+")' returned an object instead of string.",B.log(C))}else C=C.join("\n"),C=h(C,e),C=y(C,e);"string"==typeof C&&""===C.trim()&&z.fallbackOnEmpty===!0&&(C=void 0),d=C}}if(void 0===d&&!e.isFallbackLookup&&(z.fallbackToDefaultNS===!0||z.fallbackNS&&z.fallbackNS.length>0)){if(e.isFallbackLookup=!0,z.fallbackNS.length){for(var M=0,F=z.fallbackNS.length;F>M;M++)if(d=j(z.fallbackNS[M]+z.nsseparator+n,e)){var H=d.indexOf(z.nsseparator)>-1?d.split(z.nsseparator)[1]:d,I=a.indexOf(z.nsseparator)>-1?a.split(z.nsseparator)[1]:a;if(H!==I)break}}else d=j(n,e);e.isFallbackLookup=!1}return d}function T(){var n,e=[];if("undefined"!=typeof window&&(!function(){for(var n=window.location.search.substring(1),r=n.split("&"),t=0;t<r.length;t++){var a=r[t].indexOf("=");if(a>0){var u=r[t].substring(0,a),o=r[t].substring(a+1);e[u]=o}}}(),e[z.detectLngQS]&&(n=e[z.detectLngQS])),!n&&"undefined"!=typeof document&&z.useCookie){var r=B.cookie.read(z.cookieName);r&&(n=r)}return!n&&"undefined"!=typeof document&&window.localstorage&&z.detectLngFromLocalStorage&&(n=window.localStorage.getItem("i18next_lng")),n||"undefined"==typeof navigator||(n=navigator.language?navigator.language:navigator.userLanguage),n||(n=z.fallbackLng[0]),n}Array.prototype.indexOf||(Array.prototype.indexOf=function(n){"use strict";if(null==this)throw new TypeError;var e=Object(this),r=e.length>>>0;if(0===r)return-1;var t=0;if(arguments.length>0&&(t=Number(arguments[1]),t!=t?t=0:0!=t&&1/0!=t&&t!=-1/0&&(t=(t>0||-1)*Math.floor(Math.abs(t)))),t>=r)return-1;for(var a=t>=0?t:Math.max(r-Math.abs(t),0);r>a;a++)if(a in e&&e[a]===n)return a;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(n){"use strict";if(null==this)throw new TypeError;var e=Object(this),r=e.length>>>0;if(0===r)return-1;var t=r;arguments.length>1&&(t=Number(arguments[1]),t!=t?t=0:0!=t&&t!=1/0&&t!=-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))));for(var a=t>=0?Math.min(t,r-1):r-Math.abs(t);a>=0;a--)if(a in e&&e[a]===n)return a;return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var C,_=this,E=_.jQuery||_.Zepto,P={},A={},M=0,R=[],F=!1,H={};if("undefined"!=typeof module&&module.exports){if(!E)try{E=require("jquery")}catch(I){}E&&(E.i18n=E.i18n||P),module.exports=P}else E&&(E.i18n=E.i18n||P),_.i18n=_.i18n||P;H={load:function(n,e,r){e.useLocalStorage?H._loadLocal(n,e,function(t,a){for(var u=[],o=0,i=n.length;i>o;o++)a[n[o]]||u.push(n[o]);u.length>0?H._fetch(u,e,function(n,e){B.extend(a,e),H._storeLocal(e),r(null,a)}):r(null,a)}):H._fetch(n,e,function(n,e){r(null,e)})},_loadLocal:function(n,e,r){var t={},a=(new Date).getTime();if(window.localStorage){var u=n.length;B.each(n,function(n,o){var i=window.localStorage.getItem("res_"+o);i&&(i=JSON.parse(i),i.i18nStamp&&i.i18nStamp+e.localStorageExpirationTime>a&&(t[o]=i)),u--,0===u&&r(null,t)})}},_storeLocal:function(n){if(window.localStorage)for(var e in n)n[e].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+e,JSON.stringify(n[e]))},_fetch:function(n,e,r){var t=e.ns,a={};if(e.dynamicLoad){var u=function(n,e){r(null,e)};if("function"==typeof e.customLoad)e.customLoad(n,t.namespaces,e,u);else{var o=h(e.resGetPath,{lng:n.join("+"),ns:t.namespaces.join("+")});B.ajax({url:o,success:function(n){B.log("loaded: "+o),u(null,n)},error:function(n,e,r){B.log("failed loading: "+o),u("failed loading resource.json error: "+r)},dataType:"json",async:e.getAsync})}}else{var i,s=t.namespaces.length*n.length;B.each(t.namespaces,function(t,u){B.each(n,function(n,t){var o=function(n,e){n&&(i=i||[],i.push(n)),a[t]=a[t]||{},a[t][u]=e,s--,0===s&&r(i,a)};"function"==typeof e.customLoad?e.customLoad(t,u,e,o):H._fetchOne(t,u,e,o)})})}},_fetchOne:function(n,e,r,t){var a=h(r.resGetPath,{lng:n,ns:e});B.ajax({url:a,success:function(n){B.log("loaded: "+a),t(null,n)},error:function(n,e,r){if(e&&200==e||n&&n.status&&200==n.status)B.error("There is a typo in: "+a);else if(e&&404==e||n&&n.status&&404==n.status)B.log("Does not exist: "+a);else{var u=e?e:n&&n.status?n.status:null;B.log(u+" when loading "+a)}t(r,{})},dataType:"json",async:r.getAsync})},postMissing:function(n,e,r,t,a){var u={};u[r]=t;var o=[];if("fallback"===z.sendMissingTo&&z.fallbackLng[0]!==!1)for(var i=0;i<z.fallbackLng.length;i++)o.push({lng:z.fallbackLng[i],url:h(z.resPostPath,{lng:z.fallbackLng[i],ns:e})});else if("current"===z.sendMissingTo||"fallback"===z.sendMissingTo&&z.fallbackLng[0]===!1)o.push({lng:n,url:h(z.resPostPath,{lng:n,ns:e})});else if("all"===z.sendMissingTo)for(var i=0,s=a.length;s>i;i++)o.push({lng:a[i],url:h(z.resPostPath,{lng:a[i],ns:e})});for(var l=0,c=o.length;c>l;l++){var f=o[l];B.ajax({url:f.url,type:z.sendType,data:u,success:function(){B.log("posted missing key '"+r+"' to: "+f.url);for(var n=r.split("."),a=0,u=A[f.lng][e];n[a];)u=u[n[a]]=a===n.length-1?t:u[n[a]]||{},a++},error:function(){B.log("failed posting missing key '"+r+"' to: "+f.url)},dataType:"json",async:z.postAsync})}}};var z={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:"translation",fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:H.postMissing,shortcutFunction:"sprintf"},V={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},D={create:function(n,e,r,t){var a;if(r){var u=new Date;u.setTime(u.getTime()+6e4*r),a="; expires="+u.toGMTString()}else a="";t=t?"domain="+t+";":"",document.cookie=n+"="+e+a+";"+t+"path=/"},read:function(n){for(var e=n+"=",r=document.cookie.split(";"),t=0;t<r.length;t++){for(var a=r[t];" "==a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return null},remove:function(n){this.create(n,"",-1)}},K={create:function(){},read:function(){return null},remove:function(){}},B={extend:E?E.extend:n,deepExtend:e,each:E?E.each:r,ajax:E?E.ajax:"undefined"!=typeof document?a:function(){},cookie:"undefined"!=typeof document?D:K,detectLanguage:T,escape:t,log:function(n){z.debug&&"undefined"!=typeof console&&console.log(n)},error:function(n){"undefined"!=typeof console&&console.error(n)},getCountyIndexOfLng:function(n){var e=0;return("nb-NO"===n||"nn-NO"===n)&&(e=1),e},toLanguages:function(n){var e=this.log,r=[],t=z.lngWhitelist||!1,a=function(n){!t||t.indexOf(n)>-1?r.push(n):e("rejecting non-whitelisted language: "+n)};if("string"==typeof n&&n.indexOf("-")>-1){var u=n.split("-");n=z.lowerCaseLng?u[0].toLowerCase()+"-"+u[1].toLowerCase():u[0].toLowerCase()+"-"+u[1].toUpperCase(),"unspecific"!==z.load&&a(n),"current"!==z.load&&a(u[this.getCountyIndexOfLng(n)])}else a(n);for(var o=0;o<z.fallbackLng.length;o++)-1===r.indexOf(z.fallbackLng[o])&&z.fallbackLng[o]&&r.push(z.fallbackLng[o]);return r},regexEscape:function(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(n){return"string"==typeof n?n.replace(/\$/g,"$$$$"):n}};B.applyReplacement=h;var G={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(n){return Number(n>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ak:{name:"Akan",numbers:[1,2],plurals:function(n){return Number(n>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(n){return Number(n>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(n){return Number(0===n?0:1==n?1:2==n?2:n%100>=3&&10>=n%100?3:n%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(n){return Number(n>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ay:{name:"Aymará",numbers:[1],plurals:function(){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(n){return Number(1!=n)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(n){return Number(1==n%10&&11!=n%100?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(n){return Number(1!=n)}},bo:{name:"Tibetan",numbers:[1],plurals:function(){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(n){return Number(n>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(n){return Number(1==n%10&&11!=n%100?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(n){return Number(1!=n)}},cgg:{name:"Chiga",numbers:[1],plurals:function(){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(n){return Number(1==n?0:n>=2&&4>=n?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(n){return Number(1==n?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(n){return Number(1==n?0:2==n?1:8!=n&&11!=n?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(n){return Number(1!=n)}},de:{name:"German",numbers:[1,2],plurals:function(n){return Number(1!=n)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(n){return Number(1!=n)}},en:{name:"English",numbers:[1,2],plurals:function(n){return Number(1!=n)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(n){return Number(1!=n)}},es:{name:"Spanish",numbers:[1,2],plurals:function(n){return Number(1!=n)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(n){return Number(1!=n)}},et:{name:"Estonian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},eu:{name:"Basque",numbers:[1,2],plurals:function(n){return Number(1!=n)}},fa:{name:"Persian",numbers:[1],plurals:function(){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(n){return Number(1!=n)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(n){return Number(n>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(n){return Number(1!=n)}},fr:{name:"French",numbers:[1,2],plurals:function(n){return Number(n>=2)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(n){return Number(1==n?0:2==n?1:7>n?2:11>n?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(n){return Number(1==n||11==n?0:2==n||12==n?1:n>2&&20>n?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(n){return Number(1!=n)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(n){return Number(1!=n)}},gun:{name:"Gun",numbers:[1,2],plurals:function(n){return Number(n>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(n){return Number(1!=n)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(n){return Number(1!=n)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(n){return Number(1!=n)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(n){return Number(1==n%10&&11!=n%100?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(n){return Number(1!=n)}},id:{name:"Indonesian",numbers:[1],plurals:function(){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(n){return Number(1!=n%10||11==n%100)}},it:{name:"Italian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ja:{name:"Japanese",numbers:[1],plurals:function(){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(n){return Number(0!==n)}},ka:{name:"Georgian",numbers:[1],plurals:function(){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ko:{name:"Korean",numbers:[1],plurals:function(){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(n){return Number(1!=n)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(n){return Number(1==n?0:2==n?1:3==n?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(n){return Number(n>1)}},lo:{name:"Lao",numbers:[1],plurals:function(){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(n){return Number(1==n%10&&11!=n%100?0:n%10>=2&&(10>n%100||n%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[1,2,0],plurals:function(n){return Number(1==n%10&&11!=n%100?0:0!==n?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(n){return Number(1!=n)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(n){return Number(n>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(n){return Number(n>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(n){return Number(n>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(n){return Number(1==n||1==n%10?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(n){return Number(1!=n)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(n){return Number(1==n?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ms:{name:"Malay",numbers:[1],plurals:function(){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(n){return Number(1==n?0:0===n||n%100>1&&11>n%100?1:n%100>10&&20>n%100?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(n){return Number(1!=n)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(n){return Number(1!=n)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(n){return Number(1!=n)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(n){return Number(1!=n)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(n){return Number(1!=n)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(n){return Number(1!=n)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(n){return Number(n>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(n){return Number(1!=n)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(n){return Number(1!=n)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(n){return Number(1!=n)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(n){return Number(1==n?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(n){return Number(1!=n)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(n){return Number(1!=n)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(n){return Number(1!=n)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(n){return Number(1==n?0:0===n||n%100>0&&20>n%100?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(n){return Number(1==n%10&&11!=n%100?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(n){return Number(1!=n)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(n){return Number(1!=n)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(n){return Number(1!=n)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(n){return Number(1==n?0:n>=2&&4>=n?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(n){return Number(1==n%100?1:2==n%100?2:3==n%100||4==n%100?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(n){return Number(1!=n)}},son:{name:"Songhay",numbers:[1,2],plurals:function(n){return Number(1!=n)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(n){return Number(1!=n)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(n){return Number(1==n%10&&11!=n%100?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(n){return Number(1!=n)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(n){return Number(1!=n)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(n){return Number(1!=n)}},te:{name:"Telugu",numbers:[1,2],plurals:function(n){return Number(1!=n)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(n){return Number(n>1)}},th:{name:"Thai",numbers:[1],plurals:function(){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(n){return Number(n>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(n){return Number(1!=n)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(n){return Number(n>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(n){return Number(1==n%10&&11!=n%100?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(n){return Number(1!=n)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(n){return Number(n>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(n){return Number(n>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(n){return Number(1!=n)}},zh:{name:"Chinese",numbers:[1],plurals:function(){return 0}}},addRule:function(n,e){G.rules[n]=e},setCurrentLng:function(n){if(!G.currentRule||G.currentRule.lng!==n){var e=n.split("-");G.currentRule={lng:n,rule:G.rules[e[0]]}}},needsPlural:function(n,e){var r,t=n.split("-");return r=G.currentRule&&G.currentRule.lng===n?G.currentRule.rule:G.rules[t[B.getCountyIndexOfLng(n)]],r&&r.numbers.length<=1?!1:1!==this.get(n,e)},get:function(n,e){function r(e,r){var t;if(t=G.currentRule&&G.currentRule.lng===n?G.currentRule.rule:G.rules[e]){var a;a=t.noAbs?t.plurals(r):t.plurals(Math.abs(r));var u=t.numbers[a];return 2===t.numbers.length&&1===t.numbers[0]&&(2===u?u=-1:1===u&&(u=1)),u}return 1===r?"1":"-1"}var t=n.split("-");
return r(t[B.getCountyIndexOfLng(n)],e)}},q={},U=function(n,e){q[n]=e},$=function(){function n(n){return Object.prototype.toString.call(n).slice(8,-1).toLowerCase()}function e(n,e){for(var r=[];e>0;r[--e]=n);return r.join("")}var r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};return r.format=function(r,t){var a,u,o,i,s,l,c,f=1,p=r.length,m="",d=[];for(u=0;p>u;u++)if(m=n(r[u]),"string"===m)d.push(r[u]);else if("array"===m){if(i=r[u],i[2])for(a=t[f],o=0;o<i[2].length;o++){if(!a.hasOwnProperty(i[2][o]))throw $('[sprintf] property "%s" does not exist',i[2][o]);a=a[i[2][o]]}else a=i[1]?t[i[1]]:t[f++];if(/[^s]/.test(i[8])&&"number"!=n(a))throw $("[sprintf] expecting number but found %s",n(a));switch(i[8]){case"b":a=a.toString(2);break;case"c":a=String.fromCharCode(a);break;case"d":a=parseInt(a,10);break;case"e":a=i[7]?a.toExponential(i[7]):a.toExponential();break;case"f":a=i[7]?parseFloat(a).toFixed(i[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=String(a))&&i[7]?a.substring(0,i[7]):a;break;case"u":a=Math.abs(a);break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(i[8])&&i[3]&&a>=0?"+"+a:a,l=i[4]?"0"==i[4]?"0":i[4].charAt(1):" ",c=i[6]-String(a).length,s=i[6]?e(l,c):"",d.push(i[5]?a+s:s+a)}return d.join("")},r.cache={},r.parse=function(n){for(var e=n,r=[],t=[],a=0;e;){if(null!==(r=/^[^\x25]+/.exec(e)))t.push(r[0]);else if(null!==(r=/^\x25{2}/.exec(e)))t.push("%");else{if(null===(r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e)))throw"[sprintf] huh?";if(r[2]){a|=1;var u=[],o=r[2],i=[];if(null===(i=/^([a-z_][a-z_\d]*)/i.exec(o)))throw"[sprintf] huh?";for(u.push(i[1]);""!==(o=o.substring(i[0].length));)if(null!==(i=/^\.([a-z_][a-z_\d]*)/i.exec(o)))u.push(i[1]);else{if(null===(i=/^\[(\d+)\]/.exec(o)))throw"[sprintf] huh?";u.push(i[1])}r[2]=u}else a|=2;if(3===a)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";t.push(r)}e=e.substring(r[0].length)}return t},r}(),J=function(n,e){return e.unshift(n),$.apply(null,e)};U("sprintf",function(n,e,r){return r.sprintf?"[object Array]"===Object.prototype.toString.apply(r.sprintf)?J(n,r.sprintf):"object"==typeof r.sprintf?$(n,r.sprintf):n:n}),P.init=u,P.setLng=d,P.preload=o,P.addResourceBundle=i,P.addResource=l,P.addResources=c,P.removeResourceBundle=s,P.loadNamespace=p,P.loadNamespaces=m,P.setDefaultNamespace=f,P.t=k,P.translate=k,P.exists=w,P.detectLanguage=B.detectLanguage,P.pluralExtensions=G,P.sync=H,P.functions=B,P.lng=g,P.addPostProcessor=U,P.options=z}(),function(n){"use strict";function e(){var e=n.getElementById("splashCore");e&&e.parentNode.removeChild(e),n.body.classList.remove("loading")}var r=window.addEventListener?"addEventListener":"attachEvent",t=window[r],a="attachEvent"==r?"onmessage":"message";t(a,function(n){console.log("parent received message!:  ",n.data)},!1);var u,o;window.app=n.querySelector("#app");var i=function(e){var r=localStorage.getItem("yp-user-locale");r?window.locale=r:window.locale=e,i18n.init({lng:window.locale},function(e){window.app?"function"==typeof window.app._i18nReady?window.app._i18nReady():(console.warn("App has not been upgraded to Polymer object when translation is ready"),setTimeout(function(){"function"==typeof window.app._i18nReady?window.app._i18nReady():console.error("App has not been upgraded to Polymer object when translation is ready")},1e4)):console.error("App not ready when i18n is ready"),window.i18nTranslation=i18n;var r=new CustomEvent("iron-signal",{detail:{name:"yp-18n-ready",data:null}});n.dispatchEvent(r)})},s=function(){o=n.createElement("div"),o.id="splashCore",u=n.createElement("div"),u.id="splashSub",u.innerHTML='<span class="loadingText">Hleð inn...</span><br><span class="loadingHostname">'+window.location.hostname+"</span>",u.innerHTML+='<img width="280px" src="https://s3.amazonaws.com/yrpri-direct-asset/betrireykjavik_merki2_fb400_splash.png">',u.innerHTML+='<img src="https://s3.amazonaws.com/yrpri-direct-asset/heartSpinner.gif">',u.className="js-fade fade-in",o.onclick=e,o.appendChild(u),n.body.appendChild(o),n.title="Betri Reykjavík"},l=function(){o=n.createElement("div"),o.id="splashCore",u=n.createElement("div"),u.id="splashSub",u.innerHTML='<span class="loadingText">Hleð inn...</span><br><span class="loadingHostname">'+window.location.hostname+"</span>",u.innerHTML+='<img src="https://s3.amazonaws.com/yrpri-direct-asset/BI_Splash_1.png">',u.innerHTML+='<img src="https://s3.amazonaws.com/yrpri-direct-asset/heartSpinner.gif">',u.className="js-fade fade-in",o.onclick=e,o.appendChild(u),n.body.appendChild(o),n.title="Betra Ísland"},c=function(){o=n.createElement("div"),o.id="splashCore",u=n.createElement("div"),u.id="splashSub",u.innerHTML='<span class="loadingText">Loading...</span><br><span class="loadingHostname">'+window.location.hostname+"</span>",u.innerHTML+='<img src="https://i.imgur.com/6MWkhrR.png">',u.innerHTML+='<img src="https://s3.amazonaws.com/yrpri-direct-asset/heartSpinner.gif">',u.className="js-fade fade-in",o.onclick=e,o.appendChild(u),n.body.appendChild(o),n.title="Your Priorities"};window.location.hostname.indexOf("betrireykjavik")>-1?(i("is"),s()):window.location.hostname.indexOf("betraisland")>-1?(i("is"),l()):(i("en"),c()),window.addEventListener("WebComponentsReady",function(n){console.log("WebComponentsReady")})}(document);
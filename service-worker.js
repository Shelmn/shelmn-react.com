"use strict";var precacheConfig=[["/index.html","db69e9187e756426d05437631d8834a9"],["/static/css/main.fa488300.css","cbcc627c216c1225c45f9d61a7fec28b"],["/static/js/main.553d383f.js","e35c5cbf6f173cc39d423c2cbccabb75"],["/static/media/Layer_1.1ea3e4bc.png","1ea3e4bcff41ee254ca64bcec57b718c"],["/static/media/Layer_10.087083da.png","087083da96e11f6f15c56122f87eb2e0"],["/static/media/Layer_11.5b83c12b.png","5b83c12b980d8d3a155753f24fa142fb"],["/static/media/Layer_12.0b76404b.png","0b76404bd4ccb5eef3bf86676105e9be"],["/static/media/Layer_13.70770fb6.png","70770fb65e8359f1cccf1bd2f276709b"],["/static/media/Layer_2.e2ce5744.png","e2ce574468bb4c673a2c470db4290e77"],["/static/media/Layer_3.00132e11.png","00132e11c38d95b52a336ea30f5d8065"],["/static/media/Layer_4.ea0e4c80.png","ea0e4c800b220f6b0e703dd32139ae05"],["/static/media/Layer_5.1085246f.png","1085246ffcab2789ab938831af4d5d85"],["/static/media/Layer_6.aa205b49.png","aa205b495eb88c5b07755249e5c7e586"],["/static/media/Layer_7.724d093c.png","724d093cc38f4c02d59d6965647333ae"],["/static/media/Layer_8.bdf98a9d.png","bdf98a9d08761278ab1af67b3eb33888"],["/static/media/Layer_9.6510f51f.png","6510f51f707858df5122c3834898a042"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
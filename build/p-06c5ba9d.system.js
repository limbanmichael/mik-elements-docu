var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="mik";var a=0;var i=false;var s;var o;var l;var f=false;var $=false;var u=false;var c=false;var v=window;var d=document;var h=HTMLElement;var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var g=function(){return!!d.documentElement.attachShadow}();var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,t){return y.set(t.$lazyInstance$=e,t)}));var _=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));return y.set(e,t)}};var R=function(e,t){return t in e};var S=function(e){return console.error(e)};var x=new Map;var N=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=x.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{x.set(i,e)}return e[a]}),S)};var k=new Map;var E=function(){return v.__stencil_cssshim}();var T=[];var j=[];var C=[];var L=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&m.$flags$&4){U(P)}else{m.raf(P)}}}};var A=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){S(e)}}e.length=0};var O=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){S(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var P=function(){a++;A(T);var e=(m.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;O(j,e);O(C,e);if(j.length>0){C.push.apply(C,j);j.length=0}if(i=T.length+j.length+C.length>0){m.raf(P)}else{a=0}};var U=function(e){return Promise.resolve().then(e)};var B=L(j,true);var M={};var I=function(e){return e!=null};var z=function(e){return e.toLowerCase()};var H=function(e){e=typeof e;return e==="object"||e==="function"};var q=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var V=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-a661dc8c.system.js")}return Promise.resolve()}));var W=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));F(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-2ab1fdf1.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var F=function(e){var t=q(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(n){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(v[t].m);s.remove()}}));r.set(a,i);d.head.appendChild(s)}return i}}};var D=function(e,t){if(e!=null&&!H(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var G="hydrated";var Q=new WeakMap;var J=function(e,t,r){var n=k.get(e);if(p&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}k.set(e,n)};var K=function(e,t,r,n){var a=Y(t.$tagName$);var i=k.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=Q.get(e);var o=void 0;if(!s){Q.set(e,s=new Set)}if(!s.has(a)){{if(E){o=E.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var X=function(e,t,r){var n=K(g&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var Y=function(e,t){return"sc-"+e};var Z=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var l;var f=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!H(a)){a=String(a)}if(i&&s){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}s=i}}};$(r);if(t){{o=t.key||undefined}{l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t,f,re)}var c={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{c.$key$=o}{c.$name$=l}return c}));var ee={};var te=function(e){return e&&e.$tag$===ee};var re={forEach:function(e,t){return e.map(ne).forEach(t)},map:function(e,t){return e.map(ne).map(t).map(ae)}};var ne=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ae=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var ie=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var s=e.classList;se(r).forEach((function(e){return s.remove(e)}));se(n).forEach((function(e){return s.add(e)}))}else if(t==="style"){{for(var o in r){if(!n||n[o]==null){if(o.includes("-")){e.style.removeProperty(o)}else{e.style[o]=""}}}}for(var o in n){if(!r||n[o]!==r[o]){if(o.includes("-")){e.style.setProperty(o,n[o])}else{e.style[o]=n[o]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!R(e,t)){if(R(e,z(t))){t=z(t.substring(2))}else{t=z(t[2])+t.substring(3)}if(r){m.rel(e,t,r,false)}if(n){m.ael(e,t,n,false)}}else{var l=R(e,t);var f=H(n);if((l||f&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(e[t]!==$){e[t]=$}}else{e[t]=n}}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!l||i&4||a)&&!f){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var se=function(e){return!e?[]:e.split(/\s+/).filter((function(e){return e}))};var oe=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||M;var s=t.$attrs$||M;{for(n in i){if(!(n in s)){ie(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){ie(a,n,i[n],s[n],r,t.$flags$)}};var le=function(e,t,r,n){var a=t.$children$[r];var i=0;var $;var v;var h;if(!f){u=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(I(a.$text$)){a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=d.createTextNode("")}else{$=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{oe(null,a,c)}if(I(s)&&$["s-si"]!==s){$.classList.add($["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=le(e,a,i,$);if(v){$.appendChild(v)}}}}{a.$elm$["s-hn"]=l;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=o;a.$elm$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){fe(e.$elm$,false)}}}return a.$elm$};var fe=function(e,t){m.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==l&&a["s-ol"]){he(a).insertBefore(a,de(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(t){fe(a,t)}}m.$flags$&=~1};var $e=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&z(s.tagName)===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=le(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,de(t))}}}};var ue=function(e,t,r,n){for(;t<=r;++t){if(I(e[t])){n=e[t].$elm$;be(e[t],true);{$=true;if(n["s-ol"]){n["s-ol"].remove()}else{fe(n,true)}}n.remove()}}};var ce=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var f=t[0];var $=t[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=t[++a]}else if($==null){$=t[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(ve(f,c)){me(f,c);f=t[++a];c=n[++i]}else if(ve($,v)){me($,v);$=t[--l];v=n[--u]}else if(ve(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){fe(f.$elm$.parentNode,false)}me(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=t[++a];v=n[--u]}else if(ve($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){fe($.$elm$.parentNode,false)}me($,c);e.insertBefore($.$elm$,f.$elm$);$=t[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&I(t[o].$key$)&&t[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=le(t&&t[i],r,s,e)}else{me(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=le(t&&t[i],r,i,e);c=n[++i]}if(d){{he(f.$elm$).insertBefore(d,de(f.$elm$))}}}}if(a>l){$e(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){ue(t,a,l)}};var ve=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var de=function(e){return e&&e["s-ol"]||e};var he=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var me=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(!I(t.$text$)){{if(t.$tag$==="slot");else{oe(e,t,c)}}if(I(n)&&I(a)){ce(r,n,t,a)}else if(I(a)){if(I(e.$text$)){r.textContent=""}$e(r,null,t,a,0,a.length-1)}else if(I(n)){ue(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var ge=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ge(t)}}};var pe=[];var ye=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!pe.some((function(e){return e.$nodeToRelocate$===o}))){$=true;o["s-sn"]=f;pe.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){ye(s)}}};var be=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach((function(e){be(e,t)}))}};var we=function(e,t,r,n){l=z(e.tagName);var a=t.$vnode$||{$flags$:0};var i=te(n)?n:Z(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];f=g&&(r.$flags$&1)!==0;u=$=false}me(a,i);{if(u){ye(i.$elm$);for(var c=0;c<pe.length;c++){var v=pe[c];if(!v.$nodeToRelocate$["s-ol"]){var h=d.createTextNode("");h["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=h,v.$nodeToRelocate$)}}m.$flags$|=1;for(var c=0;c<pe.length;c++){var v=pe[c];var p=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var h=v.$nodeToRelocate$["s-ol"];while(h=h.previousSibling){var b=h["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&p===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&p!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){p.insertBefore(v.$nodeToRelocate$,y)}}}m.$flags$&=~1}if($){ge(i.$elm$)}pe.length=0}};var _e=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i=function(){return Re(e,t,r,a,n)};var s;return Ee(s,(function(){return B(i)}))};var Re=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){X(e,r,t.$modeName$)}{{t.$flags$|=4;try{we(e,t,r,n.render())}catch(e){S(e)}t.$flags$&=~4}}if(E){E.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach((function(e){return e()}));e["s-rc"].length=0}Se(e,t)};var Se=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(G)}{ke(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){Ne()}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var xe=function(e,t){{var r=b(e);if(r.$flags$&2){_e(e,r,t,false)}}};var Ne=function(){{d.documentElement.classList.add(G)}{m.$flags$|=2}};var ke=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){S(e)}}return undefined};var Ee=function(e,t){return e&&e.then?e.then(t):t()};var Te=function(e,t){return b(e).$instanceValues$.get(t)};var je=function(e,t,r,n){var a=b(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=D(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((o&(4|2|16))===2){_e(i,a,n,false)}}}};var Ce=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Te(this,n)},set:function(e){je(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;m.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n}))}}return e};var Le=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,o,l;return __generator(this,(function(f){switch(f.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=N(a);if(!s.then)return[3,2];return[4,s];case 1:s=f.sent();f.label=2;case 2:if(!s.isProxied){Ce(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){S(e)}{n.$flags$&=~8}r=Y(a.$tagName$);if(!(!k.has(r)&&s.style))return[3,5];i=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(i,r,false)}))];case 3:i=f.sent();f.label=4;case 4:J(r,i,!!(a.$flags$&1));f.label=5;case 5:o=n.$ancestorComponent$;l=function(){return _e(e,n,a,true)};if(o&&o["s-lr"]===false&&o["s-rc"]){o["s-rc"].push(l)}else{l()}return[2]}}))}))};var Ae=function(e,t){if((m.$flags$&1)===0){var r=b(e);if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Oe(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&a["s-lr"]===false){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{U((function(){return Le(e,r,t)}))}}}};var Oe=function(e,t){t=e["s-cr"]=d.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Pe=function(e){if((m.$flags$&1)===0){var t=b(e);if(E){E.removeHost(e)}}};var Ue=e("b",(function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=d.head;var i=v.customElements;var s=a.querySelector("meta[charset]");var o=d.createElement("style");var l;Object.assign(m,t);m.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){m.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!g&&a.$flags$&1){a.$flags$|=8}var s=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}_(t);if(a.$flags$&1){if(g){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(l){clearTimeout(l);l=null}m.jmp((function(){return Ae(e,a)}))};t.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return Pe(e)}))};t.prototype["s-init"]=function(){var e=b(this);if(e.$lazyInstance$){Se(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){xe(this,a)};t.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!i.get(s)){r.push(s);i.define(s,Ce(o,a,1))}}))}));o.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");a.insertBefore(o,s?s.nextSibling:a.firstChild);m.jmp((function(){return l=setTimeout(Ne,30)}))}));var Be=e("c",(function(e,t,r){var n=Me(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}}));var Me=e("g",(function(e){return b(e).$hostElement$}))}}}));
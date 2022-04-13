(function(){"use strict";var t={2146:function(t,e,n){var r=n(9242),o=n(3396);const i={id:"app"};function u(t,e){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(n,{to:"/"}),(0,o.Wm)(r)])}var a=n(89);const c={},s=(0,a.Z)(c,[["render",u]]);var f=s,l=n(678);const d=t=>((0,o.dD)("data-v-87cf5c96"),t=t(),(0,o.Cn)(),t),p={class:"start"},v={class:"main-content"},h=d((()=>(0,o._)("h1",null," Here you can find pets for each http protocol response status code ",-1))),m=d((()=>(0,o._)("p",null,"Choose a pet:",-1))),g={class:"pets-buttons"},b={class:"dog button"},y=(0,o.Uk)("Dog"),w={class:"cat button"},k=(0,o.Uk)("Cat");function _(t,e){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",v,[h,m,(0,o._)("div",g,[(0,o._)("div",b,[(0,o.Wm)(n,{to:"/dogs"},{default:(0,o.w5)((()=>[y])),_:1})]),(0,o._)("div",w,[(0,o.Wm)(n,{to:"/cats"},{default:(0,o.w5)((()=>[k])),_:1})])])])])}const C={},O=(0,a.Z)(C,[["render",_],["__scopeId","data-v-87cf5c96"]]);var j=O;const E=[{path:"/",name:"start",component:j},{path:"/cats",name:"cats",component:()=>n.e(236).then(n.bind(n,2236))},{path:"/dogs",name:"dogs",component:()=>n.e(600).then(n.bind(n,7600))}],A=(0,l.p7)({history:(0,l.PO)("/http-pets/"),routes:E});var S=A;(0,r.ri)(f).use(S).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{236:"8cb0005b",600:"11e32561"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{236:"91bf2655",600:"34b06e8c"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="http-pets:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/http-pets/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(e(u,a))return o();t(r,a,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={236:1,600:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(e&&e(r);s<u.length;s++)i=u[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunkhttp_pets"]=self["webpackChunkhttp_pets"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2146)}));r=n.O(r)})();
//# sourceMappingURL=app.2ca840ed.js.map
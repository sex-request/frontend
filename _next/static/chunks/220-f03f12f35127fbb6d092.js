(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{2907:function(t,e,r){"use strict";e.default=function(t){var{src:e,sizes:r,unoptimized:s=!1,priority:f=!1,loading:a,lazyBoundary:l="200px",className:d,quality:g,width:y,height:w,objectFit:b,objectPosition:m,onLoadingComplete:B,loader:S=E,placeholder:I="empty",blurDataURL:x}=t;let O=function(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),U=r?"responsive":"intrinsic";"layout"in O&&(O.layout&&(U=O.layout),delete O.layout);let k="";if(function(t){return"object"===typeof t&&(p(t)||function(t){return void 0!==t.src}(t))}(e)){const t=p(e)?e.default:e;if(!t.src)throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`);if(x=x||t.blurDataURL,k=t.src,(!U||"fill"!==U)&&(w=w||t.height,y=y||t.width,!t.height||!t.width))throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`)}e="string"===typeof e?e:k;const R=A(y),L=A(w),z=A(g);let C=!f&&("lazy"===a||"undefined"===typeof a);(e.startsWith("data:")||e.startsWith("blob:"))&&(s=!0,C=!1);"undefined"!==typeof window&&c.has(e)&&(C=!1);0;const[T,j]=u.useIntersection({rootMargin:l,disabled:!C}),M=!C||j;let _,P,N,$={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:b,objectPosition:m};const D="blur"===I?{filter:"blur(20px)",backgroundSize:b||"cover",backgroundImage:`url("${x}")`,backgroundPosition:m||"0% 0%"}:{};if("fill"===U)_={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof R&&"undefined"!==typeof L){const t=L/R,e=isNaN(t)?"100%":100*t+"%";"responsive"===U?(_={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={display:"block",boxSizing:"border-box",paddingTop:e}):"intrinsic"===U?(_={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},P={boxSizing:"border-box",display:"block",maxWidth:"100%"},N=`<svg width="${R}" height="${L}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`):"fixed"===U&&(_={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:R,height:L})}else 0;let q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};M&&(q=v({src:e,unoptimized:s,layout:U,width:R,quality:z,sizes:r,loader:S}));let W=e;return n.default.createElement("div",{style:_},P?n.default.createElement("div",{style:P},N?n.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:`data:image/svg+xml;base64,${o.toBase64(N)}`}):null):null,n.default.createElement("img",Object.assign({},O,q,{decoding:"async","data-nimg":U,className:d,ref:t=>{T(t),function(t,e,r,n,i){if(!t)return;const o=()=>{if(!t.src.startsWith("data:")){("decode"in t?t.decode():Promise.resolve()).catch((()=>{})).then((()=>{if("blur"===n&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),c.add(e),i){const{naturalWidth:e,naturalHeight:r}=t;i({naturalWidth:e,naturalHeight:r})}}))}};t.complete?o():t.onload=o}(t,W,0,I,B)},style:h({},$,D)})),n.default.createElement("noscript",null,n.default.createElement("img",Object.assign({},O,v({src:e,unoptimized:s,layout:U,width:R,quality:z,sizes:r,loader:S}),{decoding:"async","data-nimg":U,style:$,className:d,loading:a||"lazy"}))),f?n.default.createElement(i.default,null,n.default.createElement("link",{key:"__nimg-"+q.src+q.srcSet+q.sizes,rel:"preload",as:"image",href:q.srcSet?void 0:q.src,imagesrcset:q.srcSet,imagesizes:q.sizes})):null)};var n=a(r(6687)),i=a(r(9622)),o=r(7144),s=r(6085),u=r(7257);function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){return t&&t.__esModule?t:{default:t}}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){f(t,e,r[e])}))}return t}const c=new Set;"undefined"===typeof window&&(r.g.__NEXT_IMAGE_IMPORTED=!0);const l=new Map([["default",function({root:t,src:e,width:r,quality:n}){0;return`${t}?url=${encodeURIComponent(e)}&w=${r}&q=${n||75}`}],["imgix",function({root:t,src:e,width:r,quality:n}){const i=new URL(`${t}${B(e)}`),o=i.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),n&&o.set("q",n.toString());return i.href}],["cloudinary",function({root:t,src:e,width:r,quality:n}){let i=["f_auto","c_limit","w_"+r,"q_"+(n||"auto")].join(",")+"/";return`${t}${i}${B(e)}`}],["akamai",function({root:t,src:e,width:r}){return`${t}${B(e)}?imwidth=${r}`}],["custom",function({src:t}){throw new Error(`Image with src "${t}" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`)}]]);function p(t){return void 0!==t.default}const{deviceSizes:d,imageSizes:g,loader:y,path:w,domains:b}={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"http://sex-request.github.io/frontend/",loader:"imgix"}||s.imageConfigDefault,m=[...d,...g];function v({src:t,unoptimized:e,layout:r,width:n,quality:i,sizes:o,loader:s}){if(e)return{src:t,srcSet:void 0,sizes:void 0};const{widths:u,kind:f}=function(t,e,r){if(r&&("fill"===e||"responsive"===e)){const t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let n;n=t.exec(r);n)e.push(parseInt(n[2]));if(e.length){const t=.01*Math.min(...e);return{widths:m.filter((e=>e>=d[0]*t)),kind:"w"}}return{widths:m,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:d,kind:"w"}:{widths:[...new Set([t,2*t].map((t=>m.find((e=>e>=t))||m[m.length-1])))],kind:"x"}}(n,r,o),a=u.length-1;return{sizes:o||"w"!==f?o:"100vw",srcSet:u.map(((e,r)=>`${s({src:t,quality:i,width:e})} ${"w"===f?e:r+1}${f}`)).join(", "),src:s({src:t,quality:i,width:u[a]})}}function A(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function E(t){const e=l.get(y);if(e)return e(h({root:w},t));throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${s.VALID_LOADERS.join(", ")}. Received: ${y}`)}function B(t){return"/"===t[0]?t.slice(1):t}d.sort(((t,e)=>t-e)),m.sort(((t,e)=>t-e))},7257:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function({rootMargin:t,disabled:e}){const r=e||!o,u=n.useRef(),[f,a]=n.useState(!1),h=n.useCallback((e=>{u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(t,e,r){const{id:n,observer:i,elements:o}=function(t){const e=t.rootMargin||"";let r=s.get(e);if(r)return r;const n=new Map,i=new IntersectionObserver((t=>{t.forEach((t=>{const e=n.get(t.target),r=t.isIntersecting||t.intersectionRatio>0;e&&r&&e(r)}))}),t);return s.set(e,r={id:e,observer:i,elements:n}),r}(r);return o.set(t,e),i.observe(t),function(){o.delete(t),i.unobserve(t),0===o.size&&(i.disconnect(),s.delete(n))}}(e,(t=>t&&a(t)),{rootMargin:t}))}),[r,t,f]);return n.useEffect((()=>{if(!o&&!f){const t=i.requestIdleCallback((()=>a(!0)));return()=>i.cancelIdleCallback(t)}}),[f]),[h,f]};var n=r(6687),i=r(7101);const o="undefined"!==typeof IntersectionObserver;const s=new Map},7144:function(t,e,r){"use strict";var n=r(9160).Buffer;Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return"undefined"===typeof window?n.from(t).toString("base64"):window.btoa(t)}},6085:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},6220:function(t,e,r){t.exports=r(2907)},6666:function(t,e){"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,o=f(t),s=o[0],u=o[1],a=new i(function(t,e,r){return 3*(e+r)/4-r}(0,s,u)),h=0,c=u>0?s-4:s;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],a[h++]=e>>16&255,a[h++]=e>>8&255,a[h++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,a[h++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,a[h++]=e>>8&255,a[h++]=255&e);return a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=16383,u=0,f=n-i;u<f;u+=s)o.push(a(t,u,u+s>f?f:u+s));1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return o.join("")};for(var r=[],n=[],i="undefined"!==typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=o.length;s<u;++s)r[s]=o[s],n[o.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function a(t,e,n){for(var i,o,s=[],u=e;u<n;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},9160:function(t,e,r){"use strict";var n=r(6666),i=r(9258),o="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50;var s=2147483647;function u(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}function f(t,e,r){if("number"===typeof t){if("string"===typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return a(t,e,r)}function a(t,e,r){if("string"===typeof t)return function(t,e){"string"===typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|g(t,e),n=u(r),i=n.write(t,e);i!==r&&(n=n.slice(0,i));return n}(t,e);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!==typeof SharedArrayBuffer&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,e,r);var i=function(t){if(f.isBuffer(t)){var e=0|d(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!==typeof t.length||W(t.length)?u(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(i)return i;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return h(t),u(t<0?0:0|d(t))}function l(t){for(var e=t.length<0?0:0|d(t.length),r=u(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,f.prototype),n}function d(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function g(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return $(t).length;default:if(i)return n?-1:N(t).length;e=(""+e).toLowerCase(),i=!0}}function y(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return O(this,e,r);case"ascii":return k(this,e,r);case"latin1":case"binary":return R(this,e,r);case"base64":return x(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,i){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),W(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"===typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"===typeof e)return e&=255,"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){var o,s=1,u=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,f/=2,r/=2}function a(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var h=-1;for(o=r;o<u;o++)if(a(t,o)===a(e,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(r+f>u&&(r=u-f),o=r;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(a(t,o+l)!==a(e,l)){c=!1;break}if(c)return o}return-1}function v(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;n>o/2&&(n=o/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(W(u))return s;t[r+s]=u}return s}function A(t,e,r,n){return D(N(e,t.length-r),t,r,n)}function E(t,e,r,n){return D(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function B(t,e,r,n){return E(t,e,r,n)}function S(t,e,r,n){return D($(e),t,r,n)}function I(t,e,r,n){return D(function(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=(r=t.charCodeAt(s))>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function x(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function O(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,s,u,f,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=r)switch(c){case 1:a<128&&(h=a);break;case 2:128===(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],s=t[i+2],128===(192&o)&&128===(192&s)&&(f=(15&a)<<12|(63&o)<<6|63&s)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],s=t[i+2],u=t[i+3],128===(192&o)&&128===(192&s)&&128===(192&u)&&(f=(15&a)<<18|(63&o)<<12|(63&s)<<6|63&u)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var e=t.length;if(e<=U)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=U));return r}(n)}e.kMaxLength=s,f.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(r){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,e,r){return a(t,e,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,e,r){return function(t,e,r){return h(t),t<=0?u(t):void 0!==e?"string"===typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},f.allocUnsafe=function(t){return c(t)},f.allocUnsafeSlow=function(t){return c(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,e){if(q(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),q(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var o=t[r];if(q(o,Uint8Array)&&(o=f.from(o)),!f.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)w(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},f.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?O(this,0,t):y.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(f.prototype[o]=f.prototype.inspect),f.prototype.compare=function(t,e,r,n,i){if(q(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),u=Math.min(o,s),a=this.slice(n,i),h=t.slice(e,r),c=0;c<u;++c)if(a[c]!==h[c]){o=a[c],s=h[c];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return v(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return B(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function k(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function R(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function L(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=F[t[o]];return i}function z(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function T(t,e,r,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function j(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function M(t,e,r,n,o){return e=+e,r>>>=0,o||j(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function _(t,e,r,n,o){return e=+e,r>>>=0,o||j(t,0,r,8),i.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||C(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||C(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUInt8=function(t,e){return t>>>=0,e||C(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||C(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||C(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||C(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||C(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},f.prototype.readInt8=function(t,e){return t>>>=0,e||C(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||C(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){t>>>=0,e||C(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return t>>>=0,e||C(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||C(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||C(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||C(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||T(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||T(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var i=Math.pow(2,8*r-1);T(this,t,e,r,i-1,-i)}var o=0,s=1,u=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===u&&0!==this[e+o-1]&&(u=1),this[e+o]=(t/s>>0)-u&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var i=Math.pow(2,8*r-1);T(this,t,e,r,i-1,-i)}var o=r-1,s=1,u=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===u&&0!==this[e+o+1]&&(u=1),this[e+o]=(t/s>>0)-u&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||T(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeFloatLE=function(t,e,r){return M(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return M(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return _(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return _(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(!f.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i=n-r;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var o=i-1;o>=0;--o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return i},f.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=f.isBuffer(t)?t:f.from(t,n),u=s.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%u]}return this};var P=/[^+/0-9A-Za-z-_]/g;function N(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function $(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(P,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function D(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function q(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function W(t){return t!==t}var F=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)e[n+i]=t[r]+t[i];return e}()},9258:function(t,e){e.read=function(t,e,r,n,i){var o,s,u=8*i-n-1,f=(1<<u)-1,a=f>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[e+c],c+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[e+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=a}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,u,f,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),(e+=s+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(s++,f/=2),s+c>=h?(u=0,s=h):s+c>=1?(u=(e*f-1)*Math.pow(2,i),s+=c):(u=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&u,p+=d,u/=256,i-=8);for(s=s<<i|u,a+=i;a>0;t[r+p]=255&s,p+=d,s/=256,a-=8);t[r+p-d]|=128*g}}}]);
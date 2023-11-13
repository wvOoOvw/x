/*! For license information please see 709.576f2d53d85fab495a83.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[709],{8709:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var r=n(7629),o=n(3930),i=n(5609),a=n(9403),u=n(3914),c=n(4743),l=n(1575),s=n(7145),f=n(6887),d=n(5742);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function g(){g=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),u=new P(r||[]);return o(a,"_invoke",{value:A(t,n,u)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",y="executing",v="completed",m={};function w(){}function b(){}function x(){}var E={};l(E,a,(function(){return this}));var S=Object.getPrototypeOf,Z=S&&S(S(I([])));Z&&Z!==n&&r.call(Z,a)&&(E=Z);var L=x.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==h(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function A(e,n,r){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=j(u,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?v:p,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function j(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return b.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},O(T.prototype),l(T.prototype,u,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new T(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(L),l(L,c,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=I,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function p(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,u,"next",t)}function u(t){p(i,r,o,a,u,"throw",t)}a(void 0)}))}}function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v.apply(this,arguments)}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||w(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t){var e=t.source,n=e.id,o=e.name,i=e.use,u=e.codeInclued,c=e.codeMain,l=e.codeExclude,f=r.useRef(),h=r.useRef(),g=r.useRef(),p=m(r.useState(!1),2),y=p[0],x=p[1],E=m(r.useState([]),2),S=E[0],Z=E[1],L=function(){(0,d.Rg)(t.source),x(!0),clearTimeout(f.current),f.current=setTimeout((function(){return x(!1)}),500),s.Z.setState((function(t){return t.canvasAnimation=t.canvasAnimation+1,t}))},O=function(e){if(1!=t.setting&&!1!==i&&null===s.Z.state.dialogGlobalSetting&&null===s.Z.state.dialogExample&&null===s.Z.state.dialogLocalStorage&&null===s.Z.state.dialogConsoleTimeAlignment&&null===s.Z.state.dialogPlaygroundAudio&&null===s.Z.state.dialogConsoleAudio&&null===s.Z.state.dialogConsoleGroup&&!S.includes(e.code)){var n=[].concat(function(t){if(Array.isArray(t))return b(t)}(r=S)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||w(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.code]);Z(n),c.includes(n[n.length-1])&&u.every((function(t){return n.includes(t)}))&&l.every((function(t){return!n.includes(t)}))&&L()}var r},T=function(e){if(1!=t.setting&&!1!==i&&null===s.Z.state.dialogGlobalSetting&&null===s.Z.state.dialogExample&&null===s.Z.state.dialogLocalStorage&&null===s.Z.state.dialogConsoleTimeAlignment&&null===s.Z.state.dialogPlaygroundAudio&&null===s.Z.state.dialogConsoleAudio&&null===s.Z.state.dialogConsoleGroup){var n=S.filter((function(t){return!t.includes(e.code)}));Z(n)}},A=function(e){1!=t.setting&&(!0===g.current&&null===s.Z.state.dragTarget&&s.Z.assignState({dragTarget:t.source}),clearInterval(h.current))},j=function(e){1!=t.setting&&(!1!==s.Z.state.consoleExpand&&null!==s.Z.state.consoleCurrent||s.Z.assignState({dragTarget:null}),g.current=void 0,clearInterval(h.current))},C=function(e){1!=t.setting&&(!0===g.current&&null===s.Z.state.dragTarget&&s.Z.assignState({dragTarget:t.source}),clearInterval(h.current))},k=function(e){1!=t.setting&&(!1!==s.Z.state.consoleExpand&&null!==s.Z.state.consoleCurrent||s.Z.assignState({dragTarget:null}),g.current=void 0,clearInterval(h.current))},P={onMouseDown:void 0===window.ontouchstart?function(e){console.log(t.setting),1!=t.setting&&0===e.button&&(!0===i&&L(),g.current=!0,h.current=setTimeout((function(){return s.Z.setState((function(e){return e.dialogPlaygroundAudio=t.source,e}))}),500))}:void 0,onTouchStart:void 0!==window.ontouchstart?function(e){1!=t.setting&&(!0===i&&L(),g.current=!0,h.current=setTimeout((function(){return s.Z.setState((function(e){return e.dialogPlaygroundAudio=t.source,e}))}),500))}:void 0,onContextMenu:function(e){1!=t.setting&&(e.preventDefault(),s.Z.setState((function(e){return e.dialogPlaygroundAudio=t.source,e})))}},I=r.useMemo((function(){return!0===n.includes("M")&&!0===y||!0===n.includes("M")&&!1===y?"contained":!1===n.includes("M")&&!0===y||!1===n.includes("M")&&!1===y?"outlined":void 0}),[y]),N=r.useMemo((function(){return{width:72,height:72,margin:8,borderRadius:12,fontSize:12,boxShadow:"0 4px 8px gray",border:"none",transform:y?"rotate(".concat(Math.random()<.5?45:-45,"deg)"):"rotate(0)",background:"outlined"===I?"#ffffff":void 0,opacity:i?1:.35,cursor:i?"pointer":"default",transition:"0.5s all"}}),[i,y,I,s.Z.state.theme.palette.primary.main]);return r.useEffect((function(){return void 0===window.ontouchstart?(window.addEventListener("mousemove",A),window.addEventListener("mouseup",j),function(){window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",j)}):void 0!==window.ontouchstart?(window.addEventListener("touchmove",C),window.addEventListener("touchend",k),function(){window.removeEventListener("touchmove",C),window.removeEventListener("touchend",k)}):void 0}),[t.setting,t.source]),r.useEffect((function(){return window.addEventListener("keydown",O),window.addEventListener("keyup",T),function(){window.removeEventListener("keydown",O),window.removeEventListener("keyup",T)}}),[t.setting,t.source,S,s.Z.state.dialogGlobalSetting,s.Z.state.dialogExample,s.Z.state.dialogLocalStorage,s.Z.state.dialogConsoleTimeAlignment,s.Z.state.dialogPlaygroundAudio,s.Z.state.dialogConsoleAudio,s.Z.state.dialogConsoleGroup]),r.createElement(a.Z,v({variant:I,style:N},P),o)}const E=s.Z.withBindRender((function(){var t=r.useRef(),e=r.useRef(),n=r.useRef(),h=m(r.useState(!1),2),p=h[0],v=h[1],w=m(r.useState(1),2),b=w[0],E=w[1],S=m(r.useState(!0===s.Z.state.consoleFullScreen&&!0===s.Z.state.consoleExpand),2),Z=S[0],L=S[1],O=m(r.useState(s.Z.state.audio.filter((function(t){return"BassoonStacF1"===t._id}))),2),T=O[0],A=O[1];return r.useEffect((function(){var t=!0===s.Z.state.consoleFullScreen&&!0===s.Z.state.consoleExpand;L(t)}),[s.Z.state.consoleFullScreen,s.Z.state.consoleExpand]),r.useEffect((function(){if(Z)return null;var r=new ResizeObserver((function(){clearTimeout(n.current),n.current=setTimeout((function(){var n=(t.current.offsetWidth-32)/e.current.offsetWidth,r=(t.current.offsetHeight-136)/e.current.offsetHeight,o=Math.min(n,r,1);E(o)}),500)}));return r.observe(t.current),function(){clearTimeout(n.current),r.disconnect()}}),[Z]),r.useEffect(y(g().mark((function t(){var e,n,r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.parse(JSON.stringify(s.Z.state.audio.filter((function(t){return"BassoonStacF1"===t._id})))),s.Z.setState((function(t){return t.loading=t.loading+1,t})),n={index:0,done:!1,next:function(){var t=e[n.index];void 0!==t&&Object.assign(t,s.Z.state.audioSetting.find((function(e){return t.id===e.id}))),void 0===t&&(n.done=!0),n.index=n.index+1}},t.next=5,(0,f.K)(n);case 5:return t.next=7,(0,d.fA)(e);case 7:r=t.sent,A(r),s.Z.setState((function(t){return t.loading=t.loading-1,t}));case 10:case"end":return t.stop()}}),t)}))),[s.Z.state.audioSetting]),r.createElement(l.Z,{tag:"div",restore:!0,animation:[{opacity:0},{opacity:Z?0:1}],style:{width:"100%",height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",transition:"0.5s all"},ref:function(e){return t.current=e}},r.createElement("div",{style:{position:"relative",zIndex:p?1:3,height:"fit-content",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",opacity:p?.2:1,transition:"0.5s all",transform:"scale(".concat(b*s.Z.state.globalSetting.scale,")")},ref:function(t){return e.current=t}},["0","1","2","3","4","5","6","7","8"].map((function(t,e){return r.createElement("div",{key:e,style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},T.filter((function(e){return e.id.split(".")[1].includes(t)})).map((function(t,e){return r.createElement(x,{key:e,source:t,setting:p})})))}))),r.createElement(o.ZP,{container:!0,spacing:1,style:{position:"absolute",zIndex:p?3:1,width:"calc(100% - 32px)",maxWidth:600,height:"fit-content",fontSize:14,flexShrink:0,opacity:p?1:0,transition:"0.5s all"}},r.createElement(o.ZP,{item:!0,xs:12},"Scale",r.createElement("span",{style:{outline:"none",marginLeft:8},contentEditable:"true",onBlur:function(t){return isNaN(t.target.innerText)?t.target.innerText=b:E(t.target.innerText)}},b)),r.createElement(o.ZP,{item:!0,xs:12},r.createElement(i.ZP,{value:b,onChange:function(t,e){E(e)},min:0,max:2,step:.1})),r.createElement(o.ZP,{item:!0,xs:12,style:{display:"flex",justifyContent:"center"}},r.createElement(a.Z,{style:{margin:"0 8px"},variant:"contained",onClick:function(){return v(!1)}},r.createElement(c.Z,{style:{marginRight:4}}),"Save"))),r.createElement("div",{style:{position:"absolute",zIndex:2,width:"100%",height:"100%",top:0,left:0}}),r.createElement(a.Z,{variant:"text",style:{position:"absolute",zIndex:4,bottom:16},onClick:function(){return v((function(t){return!t}))}},r.createElement(u.Z,null)))}),(function(t){return[t.dialogGlobalSetting,t.dialogExample,t.dialogLocalStorage,t.dialogConsoleTimeAlignment,t.dialogPlaygroundAudio,t.dialogConsoleAudio,t.dialogConsoleGroup,t.consoleExpand,t.consoleFullScreen,JSON.stringify(t.dragTarget),JSON.stringify(t.consoleCurrent),JSON.stringify(t.audio),JSON.stringify(t.audioSetting),JSON.stringify(t.globalSetting),JSON.stringify(t.theme)]}))}}]);
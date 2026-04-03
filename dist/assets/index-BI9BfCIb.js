(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function PS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var rh={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function FS(){if(D0)return Uo;D0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var U0;function zS(){return U0||(U0=1,rh.exports=FS()),rh.exports}var St=zS(),sh={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function BS(){if(L0)return se;L0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(O,Y,gt){this.props=O,this.context=Y,this.refs=M,this.updater=gt||b}x.prototype.isReactComponent={},x.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function w(){}w.prototype=x.prototype;function P(O,Y,gt){this.props=O,this.context=Y,this.refs=M,this.updater=gt||b}var N=P.prototype=new w;N.constructor=P,C(N,x.prototype),N.isPureReactComponent=!0;var V=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(O,Y,gt){var Rt=gt.ref;return{$$typeof:o,type:O,key:Y,ref:Rt!==void 0?Rt:null,props:gt}}function dt(O,Y){return D(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function tt(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return Y[gt]})}var Z=/\/+/g;function K(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):Y.toString(36)}function Q(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,Y,gt,Rt,Lt){var at=typeof O;(at==="undefined"||at==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(at){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case o:case e:vt=!0;break;case v:return vt=O._init,L(vt(O._payload),Y,gt,Rt,Lt)}}if(vt)return Lt=Lt(O),vt=Rt===""?"."+K(O,0):Rt,V(Lt)?(gt="",vt!=null&&(gt=vt.replace(Z,"$&/")+"/"),L(Lt,Y,gt,"",function(Kt){return Kt})):Lt!=null&&(H(Lt)&&(Lt=dt(Lt,gt+(Lt.key==null||O&&O.key===Lt.key?"":(""+Lt.key).replace(Z,"$&/")+"/")+vt)),Y.push(Lt)),1;vt=0;var Tt=Rt===""?".":Rt+":";if(V(O))for(var kt=0;kt<O.length;kt++)Rt=O[kt],at=Tt+K(Rt,kt),vt+=L(Rt,Y,gt,at,Lt);else if(kt=E(O),typeof kt=="function")for(O=kt.call(O),kt=0;!(Rt=O.next()).done;)Rt=Rt.value,at=Tt+K(Rt,kt++),vt+=L(Rt,Y,gt,at,Lt);else if(at==="object"){if(typeof O.then=="function")return L(Q(O),Y,gt,Rt,Lt);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(O,Y,gt){if(O==null)return O;var Rt=[],Lt=0;return L(O,Rt,"","",function(at){return Y.call(gt,at,Lt++)}),Rt}function nt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var ft=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Mt={map:F,forEach:function(O,Y,gt){F(O,function(){Y.apply(this,arguments)},gt)},count:function(O){var Y=0;return F(O,function(){Y++}),Y},toArray:function(O){return F(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=S,se.Children=Mt,se.Component=x,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,Y,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=C({},O.props),Lt=O.key;if(Y!=null)for(at in Y.key!==void 0&&(Lt=""+Y.key),Y)!T.call(Y,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Y.ref===void 0||(Rt[at]=Y[at]);var at=arguments.length-2;if(at===1)Rt.children=gt;else if(1<at){for(var vt=Array(at),Tt=0;Tt<at;Tt++)vt[Tt]=arguments[Tt+2];Rt.children=vt}return D(O.type,Lt,Rt)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},se.createElement=function(O,Y,gt){var Rt,Lt={},at=null;if(Y!=null)for(Rt in Y.key!==void 0&&(at=""+Y.key),Y)T.call(Y,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Lt[Rt]=Y[Rt]);var vt=arguments.length-2;if(vt===1)Lt.children=gt;else if(1<vt){for(var Tt=Array(vt),kt=0;kt<vt;kt++)Tt[kt]=arguments[kt+2];Lt.children=Tt}if(O&&O.defaultProps)for(Rt in vt=O.defaultProps,vt)Lt[Rt]===void 0&&(Lt[Rt]=vt[Rt]);return D(O,at,Lt)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:p,render:O}},se.isValidElement=H,se.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:nt}},se.memo=function(O,Y){return{$$typeof:d,type:O,compare:Y===void 0?null:Y}},se.startTransition=function(O){var Y=z.T,gt={};z.T=gt;try{var Rt=O(),Lt=z.S;Lt!==null&&Lt(gt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(I,ft)}catch(at){ft(at)}finally{Y!==null&&gt.types!==null&&(Y.types=gt.types),z.T=Y}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(O){return z.H.use(O)},se.useActionState=function(O,Y,gt){return z.H.useActionState(O,Y,gt)},se.useCallback=function(O,Y){return z.H.useCallback(O,Y)},se.useContext=function(O){return z.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,Y){return z.H.useDeferredValue(O,Y)},se.useEffect=function(O,Y){return z.H.useEffect(O,Y)},se.useEffectEvent=function(O){return z.H.useEffectEvent(O)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(O,Y,gt){return z.H.useImperativeHandle(O,Y,gt)},se.useInsertionEffect=function(O,Y){return z.H.useInsertionEffect(O,Y)},se.useLayoutEffect=function(O,Y){return z.H.useLayoutEffect(O,Y)},se.useMemo=function(O,Y){return z.H.useMemo(O,Y)},se.useOptimistic=function(O,Y){return z.H.useOptimistic(O,Y)},se.useReducer=function(O,Y,gt){return z.H.useReducer(O,Y,gt)},se.useRef=function(O){return z.H.useRef(O)},se.useState=function(O){return z.H.useState(O)},se.useSyncExternalStore=function(O,Y,gt){return z.H.useSyncExternalStore(O,Y,gt)},se.useTransition=function(){return z.H.useTransition()},se.version="19.2.4",se}var N0;function Id(){return N0||(N0=1,sh.exports=BS()),sh.exports}var ko=Id();const Ur=PS(ko);var oh={exports:{}},Lo={},lh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function IS(){return O0||(O0=1,(function(o){function e(L,F){var nt=L.length;L.push(F);t:for(;0<nt;){var ft=nt-1>>>1,Mt=L[ft];if(0<l(Mt,F))L[ft]=F,L[nt]=Mt,nt=ft;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var F=L[0],nt=L.pop();if(nt!==F){L[0]=nt;t:for(var ft=0,Mt=L.length,O=Mt>>>1;ft<O;){var Y=2*(ft+1)-1,gt=L[Y],Rt=Y+1,Lt=L[Rt];if(0>l(gt,nt))Rt<Mt&&0>l(Lt,gt)?(L[ft]=Lt,L[Rt]=nt,ft=Rt):(L[ft]=gt,L[Y]=nt,ft=Y);else if(Rt<Mt&&0>l(Lt,nt))L[ft]=Lt,L[Rt]=nt,ft=Rt;else break t}}return F}function l(L,F){var nt=L.sortIndex-F.sortIndex;return nt!==0?nt:L.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,_=3,E=!1,b=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var F=i(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=L)r(d),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(d)}}function V(L){if(C=!1,N(L),!b)if(i(m)!==null)b=!0,I||(I=!0,tt());else{var F=i(d);F!==null&&Q(V,F.startTime-L)}}var I=!1,z=-1,T=5,D=-1;function dt(){return M?!0:!(o.unstable_now()-D<T)}function H(){if(M=!1,I){var L=o.unstable_now();D=L;var F=!0;try{t:{b=!1,C&&(C=!1,w(z),z=-1),E=!0;var nt=_;try{e:{for(N(L),S=i(m);S!==null&&!(S.expirationTime>L&&dt());){var ft=S.callback;if(typeof ft=="function"){S.callback=null,_=S.priorityLevel;var Mt=ft(S.expirationTime<=L);if(L=o.unstable_now(),typeof Mt=="function"){S.callback=Mt,N(L),F=!0;break e}S===i(m)&&r(m),N(L)}else r(m);S=i(m)}if(S!==null)F=!0;else{var O=i(d);O!==null&&Q(V,O.startTime-L),F=!1}}break t}finally{S=null,_=nt,E=!1}F=void 0}}finally{F?tt():I=!1}}}var tt;if(typeof P=="function")tt=function(){P(H)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,K=Z.port2;Z.port1.onmessage=H,tt=function(){K.postMessage(null)}}else tt=function(){x(H,0)};function Q(L,F){z=x(function(){L(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(L){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var nt=_;_=F;try{return L()}finally{_=nt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var nt=_;_=L;try{return F()}finally{_=nt}},o.unstable_scheduleCallback=function(L,F,nt){var ft=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?ft+nt:ft):nt=ft,L){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=nt+Mt,L={id:v++,callback:F,priorityLevel:L,startTime:nt,expirationTime:Mt,sortIndex:-1},nt>ft?(L.sortIndex=nt,e(d,L),i(m)===null&&L===i(d)&&(C?(w(z),z=-1):C=!0,Q(V,nt-ft))):(L.sortIndex=Mt,e(m,L),b||E||(b=!0,I||(I=!0,tt()))),L},o.unstable_shouldYield=dt,o.unstable_wrapCallback=function(L){var F=_;return function(){var nt=_;_=F;try{return L.apply(this,arguments)}finally{_=nt}}}})(ch)),ch}var P0;function HS(){return P0||(P0=1,lh.exports=IS()),lh.exports}var uh={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function GS(){if(F0)return bn;F0=1;var o=Id();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(m,d,null,v)},bn.flushSync=function(m){var d=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=v,r.d.f()}},bn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},bn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},bn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);r.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},bn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,d){return m(d)},bn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.4",bn}var z0;function VS(){if(z0)return uh.exports;z0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uh.exports=GS(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function kS(){if(B0)return Lo;B0=1;var o=HS(),e=Id(),i=VS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,A=c.child;A;){if(A===a){g=!0,a=c,s=f;break}if(A===s){g=!0,s=c,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,s=c;break}if(A===s){g=!0,s=f,a=c;break}A=A.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Z?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:K(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return K(t(n))}catch{}}return null}var Q=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},ft=[],Mt=-1;function O(t){return{current:t}}function Y(t){0>Mt||(t.current=ft[Mt],ft[Mt]=null,Mt--)}function gt(t,n){Mt++,ft[Mt]=t.current,t.current=n}var Rt=O(null),Lt=O(null),at=O(null),vt=O(null);function Tt(t,n){switch(gt(at,n),gt(Lt,t),gt(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$g(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$g(n),t=t0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Rt),gt(Rt,t)}function kt(){Y(Rt),Y(Lt),Y(at)}function Kt(t){t.memoizedState!==null&&gt(vt,t);var n=Rt.current,a=t0(n,t.type);n!==a&&(gt(Lt,t),gt(Rt,a))}function $t(t){Lt.current===t&&(Y(Rt),Y(Lt)),vt.current===t&&(Y(vt),Ro._currentValue=nt)}var Ke,_e;function pe(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+_e}var we=!1;function oe(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var st=lt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(lt){st=lt}t.call(_t.prototype)}}else{try{throw Error()}catch(lt){st=lt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var B=g.split(`
`),et=A.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===et.length)for(s=B.length-1,c=et.length-1;1<=s&&0<=c&&B[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==et[c]){var ht=`
`+B[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=c);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function Ze(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return pe("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Ze(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var We=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,qt=o.unstable_shouldYield,U=o.unstable_requestPaint,y=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Zt=o.log,te=o.unstable_setDisableYieldValue,bt=null,yt=null;function Pt(t){if(typeof Zt=="function"&&te(t),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(bt,t)}catch{}}var Ot=Math.clz32?Math.clz32:W,Ft=Math.log,ce=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ft(t)/ce|0)|0}var Ct=256,At=262144,zt=4194304;function Et(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=Et(s):(g&=A,g!==0?c=Et(g):a||(a=A&~t,a!==0&&(c=Et(a))))):(A=s&~f,A!==0?c=Et(A):g!==0?c=Et(g):a||(a=s&~t,a!==0&&(c=Et(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,et=t.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Ot(a),_t=1<<ht;A[ht]=0,B[ht]=-1;var st=et[ht];if(st!==null)for(et[ht]=null,ht=0;ht<st.length;ht++){var lt=st[ht];lt!==null&&(lt.lane&=-536870913)}a&=~_t}s!==0&&Gs(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Gs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ot(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Nr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ot(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Qo(t,n){var a=n&-n;return a=(a&42)!==0?1:Or(a),(a&(t.suspendedLanes|n))!==0?0:a}function Or(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wi(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:E0(t.type))}function Fr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var _i=Math.random().toString(36).slice(2),an="__reactFiber$"+_i,hn="__reactProps$"+_i,ki="__reactContainer$"+_i,Ma="__reactEvents$"+_i,Jo="__reactListeners$"+_i,$o="__reactHandles$"+_i,tl="__reactResources$"+_i,nr="__reactMarker$"+_i;function Vs(t){delete t[an],delete t[hn],delete t[Ma],delete t[Jo],delete t[$o]}function ya(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ki]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=o0(t);t!==null;){if(a=t[an])return a;t=o0(t)}return n}t=a,a=t.parentNode}return null}function Ea(t){if(t=t[an]||t[ki]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ir(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function R(t){var n=t[tl];return n||(n=t[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[nr]=!0}var ot=new Set,it={};function J(t,n){Dt(t,n),Dt(t+"Capture",n)}function Dt(t,n){for(it[t]=n,t=0;t<n.length;t++)ot.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Wt={};function jt(t){return We.call(Wt,t)?!0:We.call(Ut,t)?!1:Bt.test(t)?Wt[t]=!0:(Ut[t]=!0,!1)}function ee(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function re(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ht(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Te(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function dn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=qe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wn=/[\n"\\]/g;function ae(t){return t.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(t,n,a,s,c,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?vi(t,g,ue(n)):a!=null?vi(t,g,ue(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ue(A):t.removeAttribute("name")}function Wn(t,n,a,s,c,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Te(t);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Te(t)}function vi(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ne(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function rn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Q(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Te(t)}function Un(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var sn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xi(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||sn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&xi(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&xi(t,f,n[f])}function zr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(t){return Lv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var eu=null;function nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,Ir=null;function Jd(t){var n=Ea(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[hn]||null;if(!c)throw Error(r(90));Dn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&dn(s)}break t;case"textarea":Ne(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qn(t,!!a.multiple,n,!1)}}}var iu=!1;function $d(t,n,a){if(iu)return t(n,a);iu=!0;try{var s=t(n);return s}finally{if(iu=!1,(Br!==null||Ir!==null)&&(Vl(),Br&&(n=Br,t=Ir,Ir=Br=null,Jd(n),t)))for(n=0;n<t.length;n++)Jd(t[n])}}function ks(t,n){var a=t.stateNode;if(a===null)return null;var s=a[hn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(qi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){au=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{au=!1}var ba=null,ru=null,nl=null;function tp(){if(nl)return nl;var t,n=ru,a=n.length,s,c="value"in ba?ba.value:ba.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return nl=c.slice(t,1<s?1-s:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function ep(){return!1}function Fn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:ep,this.isPropagationStopped=ep,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Fn(ar),Ws=S({},ar,{view:0,detail:0}),Nv=Fn(Ws),su,ou,qs,sl=S({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(su=t.screenX-qs.screenX,ou=t.screenY-qs.screenY):ou=su=0,qs=t),su)},movementY:function(t){return"movementY"in t?t.movementY:ou}}),np=Fn(sl),Ov=S({},sl,{dataTransfer:0}),Pv=Fn(Ov),Fv=S({},Ws,{relatedTarget:0}),lu=Fn(Fv),zv=S({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=Fn(zv),Iv=S({},ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hv=Fn(Iv),Gv=S({},ar,{data:0}),ip=Fn(Gv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Xv[t])?!!n[t]:!1}function cu(){return Wv}var qv=S({},Ws,{key:function(t){if(t.key){var n=Vv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yv=Fn(qv),jv=S({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=Fn(jv),Zv=S({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),Kv=Fn(Zv),Qv=S({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=Fn(Qv),$v=S({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=Fn($v),ex=S({},ar,{newState:0,oldState:0}),nx=Fn(ex),ix=[9,13,27,32],uu=qi&&"CompositionEvent"in window,Ys=null;qi&&"documentMode"in document&&(Ys=document.documentMode);var ax=qi&&"TextEvent"in window&&!Ys,rp=qi&&(!uu||Ys&&8<Ys&&11>=Ys),sp=" ",op=!1;function lp(t,n){switch(t){case"keyup":return ix.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function rx(t,n){switch(t){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,sp);case"textInput":return t=n.data,t===sp&&op?null:t;default:return null}}function sx(t,n){if(Hr)return t==="compositionend"||!uu&&lp(t,n)?(t=tp(),nl=ru=ba=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ox[t.type]:n==="textarea"}function fp(t,n,a,s){Br?Ir?Ir.push(s):Ir=[s]:Br=s,n=Zl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var js=null,Zs=null;function lx(t){Yg(t,0)}function ol(t){var n=ir(t);if(dn(n))return t}function hp(t,n){if(t==="change")return n}var dp=!1;if(qi){var fu;if(qi){var hu="oninput"in document;if(!hu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),hu=typeof pp.oninput=="function"}fu=hu}else fu=!1;dp=fu&&(!document.documentMode||9<document.documentMode)}function mp(){js&&(js.detachEvent("onpropertychange",gp),Zs=js=null)}function gp(t){if(t.propertyName==="value"&&ol(Zs)){var n=[];fp(n,Zs,t,nu(t)),$d(lx,n)}}function cx(t,n,a){t==="focusin"?(mp(),js=n,Zs=a,js.attachEvent("onpropertychange",gp)):t==="focusout"&&mp()}function ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Zs)}function fx(t,n){if(t==="click")return ol(n)}function hx(t,n){if(t==="input"||t==="change")return ol(n)}function dx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:dx;function Ks(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!We.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vp(t,n){var a=_p(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function xp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?xp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var px=qi&&"documentMode"in document&&11>=document.documentMode,Gr=null,pu=null,Qs=null,mu=!1;function Mp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||Gr==null||Gr!==Vt(s)||(s=Gr,"selectionStart"in s&&du(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Ks(Qs,s)||(Qs=s,s=Zl(pu,"onSelect"),0<s.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Gr)))}function rr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},gu={},yp={};qi&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function sr(t){if(gu[t])return gu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return gu[t]=n[a];return t}var Ep=sr("animationend"),bp=sr("animationiteration"),Tp=sr("animationstart"),mx=sr("transitionrun"),gx=sr("transitionstart"),_x=sr("transitioncancel"),Ap=sr("transitionend"),Rp=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function Si(t,n){Rp.set(t,n),J(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],kr=0,vu=0;function cl(){for(var t=kr,n=vu=kr=0;n<t;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&Cp(a,c,f)}}function ul(t,n,a,s){ii[kr++]=t,ii[kr++]=n,ii[kr++]=a,ii[kr++]=s,vu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function xu(t,n,a,s){return ul(t,n,a,s),fl(t)}function or(t,n){return ul(t,null,null,n),fl(t)}function Cp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ot(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<So)throw So=0,wf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function vx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new vx(t,n,a,s)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")Su(t)&&(g=1);else if(typeof t=="string")g=ES(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=jn(31,a,n,c),t.elementType=D,t.lanes=f,t;case C:return lr(a.children,c,f,n);case M:g=8,c|=24;break;case x:return t=jn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case V:return t=jn(13,a,n,c),t.elementType=V,t.lanes=f,t;case I:return t=jn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case w:g=9;break t;case N:g=11;break t;case z:g=14;break t;case T:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function lr(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function Mu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Dp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function yu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Up=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Up.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Up.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Wr=[],qr=0,dl=null,Js=0,ri=[],si=0,Ta=null,Di=1,Ui="";function ji(t,n){Wr[qr++]=Js,Wr[qr++]=dl,dl=t,Js=n}function Lp(t,n,a){ri[si++]=Di,ri[si++]=Ui,ri[si++]=Ta,Ta=t;var s=Di;t=Ui;var c=32-Ot(s)-1;s&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Di=1<<32-Ot(n)+c|a<<c|s,Ui=f+t}else Di=1<<f|a<<c|s,Ui=t}function Eu(t){t.return!==null&&(ji(t,1),Lp(t,1,0))}function bu(t){for(;t===dl;)dl=Wr[--qr],Wr[qr]=null,Js=Wr[--qr],Wr[qr]=null;for(;t===Ta;)Ta=ri[--si],ri[si]=null,Ui=ri[--si],ri[si]=null,Di=ri[--si],ri[si]=null}function Np(t,n){ri[si++]=Di,ri[si++]=Ui,ri[si++]=Ta,Di=n.id,Ui=n.overflow,Ta=t}var xn=null,ke=null,Se=!1,Aa=null,oi=!1,Tu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(ai(n,t)),Tu}function Op(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[hn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)ge(yo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),rn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Qg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ra(t,!0)}function Pp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:xn=xn.return}}function Yr(t){if(t!==xn)return!1;if(!Se)return Pp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Xf(t.type,t.memoizedProps)),a=!a),a&&ke&&Ra(t),Pp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=s0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=s0(t)}else n===27?(n=ke,Ga(t.type)?(t=Zf,Zf=null,ke=t):ke=n):ke=xn?ci(t.stateNode.nextSibling):null;return!0}function cr(){ke=xn=null,Se=!1}function Au(){var t=Aa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Aa=null),t}function $s(t){Aa===null?Aa=[t]:Aa.push(t)}var Ru=O(null),ur=null,Zi=null;function Ca(t,n,a){gt(Ru,n._currentValue),n._currentValue=a}function Ki(t){t._currentValue=Ru.current,Y(Ru)}function Cu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function wu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Cu(f.return,a,t),s||(g=null);break t}f=A.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Cu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function jr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var A=c.type;Yn(c.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(c===vt.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}c=c.return}t!==null&&wu(n,t,a,s),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){ur=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Fp(ur,t)}function ml(t,n){return ur===null&&fr(t),Fp(t,n)}function Fp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(t===null)throw Error(r(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return a}var xx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Sx=o.unstable_scheduleCallback,Mx=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new xx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&Sx(Mx,function(){t.controller.abort()})}var eo=null,Uu=0,Zr=0,Kr=null;function yx(t,n){if(eo===null){var a=eo=[];Uu=0,Zr=Pf(),Kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Uu++,n.then(zp,zp),n}function zp(){if(--Uu===0&&eo!==null){Kr!==null&&(Kr.status="fulfilled");var t=eo;eo=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ex(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Bp=L.S;L.S=function(t,n){Mg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yx(t,n),Bp!==null&&Bp(t,n)};var hr=O(null);function Lu(){var t=hr.current;return t!==null?t:Ve.pooledCache}function gl(t,n){n===null?gt(hr,hr.current):gt(hr,n.pool)}function Ip(){var t=Lu();return t===null?null:{parent:on._currentValue,pool:t}}var Qr=Error(r(460)),Nu=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t}throw pr=n,Qr}}function dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,Qr):a}}var pr=null;function Vp(){if(pr===null)throw Error(r(459));var t=pr;return pr=null,t}function kp(t){if(t===Qr||t===_l)throw Error(r(483))}var Jr=null,no=0;function xl(t){var n=no;return no+=1,Jr===null&&(Jr=[]),Gp(Jr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xp(t){function n(j,k){if(t){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function s(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=Yi(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,$,mt){return k===null||k.tag!==6?(k=Mu($,j.mode,mt),k.return=j,k):(k=c(k,$),k.return=j,k)}function B(j,k,$,mt){var Qt=$.type;return Qt===C?ht(j,k,$.props.children,mt,$.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&dr(Qt)===k.type)?(k=c(k,$.props),io(k,$),k.return=j,k):(k=hl($.type,$.key,$.props,null,j.mode,mt),io(k,$),k.return=j,k)}function et(j,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=yu($,j.mode,mt),k.return=j,k):(k=c(k,$.children||[]),k.return=j,k)}function ht(j,k,$,mt,Qt){return k===null||k.tag!==7?(k=lr($,j.mode,mt,Qt),k.return=j,k):(k=c(k,$),k.return=j,k)}function _t(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Mu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return $=hl(k.type,k.key,k.props,null,j.mode,$),io($,k),$.return=j,$;case b:return k=yu(k,j.mode,$),k.return=j,k;case T:return k=dr(k),_t(j,k,$)}if(Q(k)||tt(k))return k=lr(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return _t(j,xl(k),$);if(k.$$typeof===P)return _t(j,ml(j,k),$);Sl(j,k)}return null}function st(j,k,$,mt){var Qt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qt!==null?null:A(j,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Qt?B(j,k,$,mt):null;case b:return $.key===Qt?et(j,k,$,mt):null;case T:return $=dr($),st(j,k,$,mt)}if(Q($)||tt($))return Qt!==null?null:ht(j,k,$,mt,null);if(typeof $.then=="function")return st(j,k,xl($),mt);if($.$$typeof===P)return st(j,k,ml(j,$),mt);Sl(j,$)}return null}function lt(j,k,$,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get($)||null,A(k,j,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case E:return j=j.get(mt.key===null?$:mt.key)||null,B(k,j,mt,Qt);case b:return j=j.get(mt.key===null?$:mt.key)||null,et(k,j,mt,Qt);case T:return mt=dr(mt),lt(j,k,$,mt,Qt)}if(Q(mt)||tt(mt))return j=j.get($)||null,ht(k,j,mt,Qt,null);if(typeof mt.then=="function")return lt(j,k,$,xl(mt),Qt);if(mt.$$typeof===P)return lt(j,k,$,ml(k,mt),Qt);Sl(k,mt)}return null}function Gt(j,k,$,mt){for(var Qt=null,Ae=null,Yt=k,fe=k=0,xe=null;Yt!==null&&fe<$.length;fe++){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=st(j,Yt,$[fe],mt);if(Re===null){Yt===null&&(Yt=xe);break}t&&Yt&&Re.alternate===null&&n(j,Yt),k=f(Re,k,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(fe===$.length)return a(j,Yt),Se&&ji(j,fe),Qt;if(Yt===null){for(;fe<$.length;fe++)Yt=_t(j,$[fe],mt),Yt!==null&&(k=f(Yt,k,fe),Ae===null?Qt=Yt:Ae.sibling=Yt,Ae=Yt);return Se&&ji(j,fe),Qt}for(Yt=s(Yt);fe<$.length;fe++)xe=lt(Yt,j,fe,$[fe],mt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?fe:xe.key),k=f(xe,k,fe),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return t&&Yt.forEach(function(qa){return n(j,qa)}),Se&&ji(j,fe),Qt}function Jt(j,k,$,mt){if($==null)throw Error(r(151));for(var Qt=null,Ae=null,Yt=k,fe=k=0,xe=null,Re=$.next();Yt!==null&&!Re.done;fe++,Re=$.next()){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var qa=st(j,Yt,Re.value,mt);if(qa===null){Yt===null&&(Yt=xe);break}t&&Yt&&qa.alternate===null&&n(j,Yt),k=f(qa,k,fe),Ae===null?Qt=qa:Ae.sibling=qa,Ae=qa,Yt=xe}if(Re.done)return a(j,Yt),Se&&ji(j,fe),Qt;if(Yt===null){for(;!Re.done;fe++,Re=$.next())Re=_t(j,Re.value,mt),Re!==null&&(k=f(Re,k,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&ji(j,fe),Qt}for(Yt=s(Yt);!Re.done;fe++,Re=$.next())Re=lt(Yt,j,fe,Re.value,mt),Re!==null&&(t&&Re.alternate!==null&&Yt.delete(Re.key===null?fe:Re.key),k=f(Re,k,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&Yt.forEach(function(OS){return n(j,OS)}),Se&&ji(j,fe),Qt}function Ge(j,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Qt=$.key;k!==null;){if(k.key===Qt){if(Qt=$.type,Qt===C){if(k.tag===7){a(j,k.sibling),mt=c(k,$.props.children),mt.return=j,j=mt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&dr(Qt)===k.type){a(j,k.sibling),mt=c(k,$.props),io(mt,$),mt.return=j,j=mt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===C?(mt=lr($.props.children,j.mode,mt,$.key),mt.return=j,j=mt):(mt=hl($.type,$.key,$.props,null,j.mode,mt),io(mt,$),mt.return=j,j=mt)}return g(j);case b:t:{for(Qt=$.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),mt=c(k,$.children||[]),mt.return=j,j=mt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}mt=yu($,j.mode,mt),mt.return=j,j=mt}return g(j);case T:return $=dr($),Ge(j,k,$,mt)}if(Q($))return Gt(j,k,$,mt);if(tt($)){if(Qt=tt($),typeof Qt!="function")throw Error(r(150));return $=Qt.call($),Jt(j,k,$,mt)}if(typeof $.then=="function")return Ge(j,k,xl($),mt);if($.$$typeof===P)return Ge(j,k,ml(j,$),mt);Sl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),mt=c(k,$),mt.return=j,j=mt):(a(j,k),mt=Mu($,j.mode,mt),mt.return=j,j=mt),g(j)):a(j,k)}return function(j,k,$,mt){try{no=0;var Qt=Ge(j,k,$,mt);return Jr=null,Qt}catch(Yt){if(Yt===Qr||Yt===_l)throw Yt;var Ae=jn(29,Yt,null,j.mode);return Ae.lanes=mt,Ae.return=j,Ae}finally{}}}var mr=Xp(!0),Wp=Xp(!1),wa=!1;function Ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=fl(t),Cp(t,null,a),n}return ul(t,s,n,a),fl(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Nr(t,a)}}function Fu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var zu=!1;function ro(){if(zu){var t=Kr;if(t!==null)throw t}}function so(t,n,a,s){zu=!1;var c=t.updateQueue;wa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,et=B.next;B.next=null,g===null?f=et:g.next=et,g=B;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==g&&(A===null?ht.firstBaseUpdate=et:A.next=et,ht.lastBaseUpdate=B))}if(f!==null){var _t=c.baseState;g=0,ht=et=B=null,A=f;do{var st=A.lane&-536870913,lt=st!==A.lane;if(lt?(ve&st)===st:(s&st)===st){st!==0&&st===Zr&&(zu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=t,Jt=A;st=n;var Ge=a;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){_t=Gt.call(Ge,_t,st);break t}_t=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,st=typeof Gt=="function"?Gt.call(Ge,_t,st):Gt,st==null)break t;_t=S({},_t,st);break t;case 2:wa=!0}}st=A.callback,st!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(et=ht=lt,B=_t):ht=ht.next=lt,g|=st;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ht===null&&(B=_t),c.baseState=B,c.firstBaseUpdate=et,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Fa|=g,t.lanes=g,t.memoizedState=_t}}function qp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Yp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qp(a[t],n)}var $r=O(null),Ml=O(0);function jp(t,n){t=ra,gt(Ml,t),gt($r,n),ra=t|n.baseLanes}function Bu(){gt(Ml,ra),gt($r,$r.current)}function Iu(){ra=Ml.current,Y($r),Y(Ml)}var Zn=O(null),li=null;function La(t){var n=t.alternate;gt(tn,tn.current&1),gt(Zn,t),li===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(li=t)}function Hu(t){gt(tn,tn.current),gt(Zn,t),li===null&&(li=t)}function Zp(t){t.tag===22?(gt(tn,tn.current),gt(Zn,t),li===null&&(li=t)):Na()}function Na(){gt(tn,tn.current),gt(Zn,Zn.current)}function Kn(t){Y(Zn),li===t&&(li=null),Y(tn)}var tn=O(0);function yl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,le=null,Ie=null,ln=null,El=!1,ts=!1,gr=!1,bl=0,oo=0,es=null,bx=0;function Qe(){throw Error(r(321))}function Gu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Vu(t,n,a,s,c,f){return Qi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Lm:af,gr=!1,f=a(s,c),gr=!1,ts&&(f=Qp(n,a,s,c)),Kp(t),f}function Kp(t){L.H=uo;var n=Ie!==null&&Ie.next!==null;if(Qi=0,ln=Ie=le=null,El=!1,oo=0,es=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&pl(t)&&(cn=!0))}function Qp(t,n,a,s){le=t;var c=0;do{if(ts&&(es=null),oo=0,ts=!1,25<=c)throw Error(r(301));if(c+=1,ln=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Nm,f=n(a,s)}while(ts);return f}function Tx(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(le.flags|=1024),n}function ku(){var t=bl!==0;return bl=0,t}function Xu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}Qi=0,ln=Ie=le=null,ts=!1,oo=bl=0,es=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?le.memoizedState=ln=t:ln=ln.next=t,ln}function en(){if(Ie===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=ln===null?le.memoizedState:ln.next;if(n!==null)ln=n,Ie=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?le.memoizedState=ln=t:ln=ln.next=t}return ln}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,es===null&&(es=[]),t=Gp(es,t,n),n=le,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Lm:af),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===P)return Sn(t)}throw Error(r(438,String(t)))}function qu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=dt;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=en();return Yu(n,Ie,t)}function Yu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=g=null,B=null,et=n,ht=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(ve&_t)===_t:(Qi&_t)===_t){var st=et.revertLane;if(st===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Zr&&(ht=!0);else if((Qi&st)===st){et=et.next,st===Zr&&(ht=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=_t,g=f):B=B.next=_t,le.lanes|=st,Fa|=st;_t=et.action,gr&&a(f,_t),f=et.hasEagerState?et.eagerState:a(f,_t)}else st={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=st,g=f):B=B.next=st,le.lanes|=_t,Fa|=_t;et=et.next}while(et!==null&&et!==n);if(B===null?g=f:B.next=A,!Yn(f,t.memoizedState)&&(cn=!0,ht&&(a=Kr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function ju(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Jp(t,n,a){var s=le,c=en(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Yn((Ie||c).memoizedState,a);if(g&&(c.memoizedState=a,cn=!0),c=c.queue,Qu(em.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,ns(9,{destroy:void 0},tm.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(Qi&127)!==0||$p(s,n,a)}return a}function $p(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Tl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function tm(t,n,a,s){n.value=a,n.getSnapshot=s,nm(n)&&im(t)}function em(t,n,a){return a(function(){nm(n)&&im(t)})}function nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function im(t){var n=or(t,2);n!==null&&Gn(n,t,2)}function Zu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),gr){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function am(t,n,a,s){return t.baseState=a,Yu(t,Ie,typeof s=="function"?s:Ji)}function Ax(t,n,a,s,c){if(Dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rm(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var A=a(c,s),B=L.S;B!==null&&B(g,A),sm(t,n,A)}catch(et){Ku(t,n,et)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,s),sm(t,n,f)}catch(et){Ku(t,n,et)}}function sm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){om(t,n,s)},function(s){return Ku(t,n,s)}):om(t,n,a)}function om(t,n,a){n.status="fulfilled",n.value=a,lm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,rm(t,a)))}function Ku(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,lm(n),n=n.next;while(n!==s)}t.action=null}function lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cm(t,n){return n}function um(t,n){if(Se){var a=Ve.formState;if(a!==null){t:{var s=le;if(Se){if(ke){e:{for(var c=ke,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=ci(c.nextSibling),s=c.data==="F!";break t}}Ra(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},a.queue=s,a=wm.bind(null,le,s),s.dispatch=a,s=Zu(!1),f=nf.bind(null,le,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Ax.bind(null,le,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function fm(t){var n=en();return hm(n,Ie,t)}function hm(t,n,a){if(n=Yu(t,n,cm)[0],t=Rl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=lo(n)}catch(g){throw g===Qr?_l:g}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,ns(9,{destroy:void 0},Rx.bind(null,c,a),null)),[s,f,t]}function Rx(t,n){t.action=n}function dm(t){var n=en(),a=Ie;if(a!==null)return hm(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ns(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=Tl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function pm(){return en().memoizedState}function Cl(t,n,a,s){var c=Ln();le.flags|=t,c.memoizedState=ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function wl(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Ie!==null&&s!==null&&Gu(s,Ie.memoizedState.deps)?c.memoizedState=ns(n,f,a,s):(le.flags|=t,c.memoizedState=ns(1|n,f,a,s))}function mm(t,n){Cl(8390656,8,t,n)}function Qu(t,n){wl(2048,8,t,n)}function Cx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Tl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function gm(t){var n=en().memoizedState;return Cx({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function _m(t,n){return wl(4,2,t,n)}function vm(t,n){return wl(4,4,t,n)}function xm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Sm(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,xm.bind(null,n,t),a)}function Ju(){}function Mm(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Gu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function ym(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Gu(n,s[1]))return s[0];if(s=t(),gr){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s}function $u(t,n,a){return a===void 0||(Qi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Eg(),le.lanes|=t,Fa|=t,a)}function Em(t,n,a,s){return Yn(a,n)?a:$r.current!==null?(t=$u(t,a,s),Yn(t,n)||(cn=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(ve&261930)===0?(cn=!0,t.memoizedState=a):(t=Eg(),le.lanes|=t,Fa|=t,n)}function bm(t,n,a,s,c){var f=F.p;F.p=f!==0&&8>f?f:8;var g=L.T,A={};L.T=A,nf(t,!1,n,a);try{var B=c(),et=L.S;if(et!==null&&et(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Ex(B,s);co(t,n,ht,$n(t))}else co(t,n,s,$n(t))}catch(_t){co(t,n,{then:function(){},status:"rejected",reason:_t},$n())}finally{F.p=f,g!==null&&A.types!==null&&(g.types=A.types),L.T=g}}function wx(){}function tf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Tm(t).queue;bm(t,c,n,nt,a===null?wx:function(){return Am(t),a(s)})}function Tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Am(t){var n=Tm(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},$n())}function ef(){return Sn(Ro)}function Rm(){return en().memoizedState}function Cm(){return en().memoizedState}function Dx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Da(a);var s=Ua(n,t,a);s!==null&&(Gn(s,n,a),ao(s,n,a)),n={cache:Du()},t.payload=n;return}n=n.return}}function Ux(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Dm(n,a):(a=xu(t,n,a,s),a!==null&&(Gn(a,t,s),Um(a,n,s)))}function wm(t,n,a){var s=$n();co(t,n,a,s)}function co(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Dm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(c.hasEagerState=!0,c.eagerState=A,Yn(A,g))return ul(t,n,c,0),Ve===null&&cl(),!1}catch{}finally{}if(a=xu(t,n,c,s),a!==null)return Gn(a,t,s),Um(a,n,s),!0}return!1}function nf(t,n,a,s){if(s={lane:2,revertLane:Pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(r(479))}else n=xu(t,a,s,2),n!==null&&Gn(n,t,2)}function Dl(t){var n=t.alternate;return t===le||n!==null&&n===le}function Dm(t,n){ts=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Um(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Nr(t,a)}}var uo={readContext:Sn,use:Al,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};uo.useEffectEvent=Qe;var Lm={readContext:Sn,use:Al,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:mm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,xm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(gr){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(gr){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Ux.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Zu(t);var n=t.queue,a=wm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(t,n){var a=Ln();return $u(a,t,n)},useTransition:function(){var t=Zu(!1);return t=bm.bind(null,le,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,c=Ln();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ve&127)!==0||$p(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,mm(em.bind(null,s,f,t),[t]),s.flags|=2048,ns(9,{destroy:void 0},tm.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Ve.identifierPrefix;if(Se){var a=Ui,s=Di;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=bx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ef,useFormState:um,useActionState:um,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:qu,useCacheRefresh:function(){return Ln().memoizedState=Dx.bind(null,le)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},af={readContext:Sn,use:Al,useCallback:Mm,useContext:Sn,useEffect:Qu,useImperativeHandle:Sm,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:ym,useReducer:Rl,useRef:pm,useState:function(){return Rl(Ji)},useDebugValue:Ju,useDeferredValue:function(t,n){var a=en();return Em(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Rl(Ji)[0],n=en().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:ef,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=en();return am(a,Ie,t,n)},useMemoCache:qu,useCacheRefresh:Cm};af.useEffectEvent=gm;var Nm={readContext:Sn,use:Al,useCallback:Mm,useContext:Sn,useEffect:Qu,useImperativeHandle:Sm,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:ym,useReducer:ju,useRef:pm,useState:function(){return ju(Ji)},useDebugValue:Ju,useDeferredValue:function(t,n){var a=en();return Ie===null?$u(a,t,n):Em(a,Ie.memoizedState,t,n)},useTransition:function(){var t=ju(Ji)[0],n=en().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:ef,useFormState:dm,useActionState:dm,useOptimistic:function(t,n){var a=en();return Ie!==null?am(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:Cm};Nm.useEffectEvent=gm;function rf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),c=Da(s);c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,s),n!==null&&(Gn(n,t,s),ao(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),c=Da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,s),n!==null&&(Gn(n,t,s),ao(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=Ua(t,s,a),n!==null&&(Gn(n,t,a),ao(n,t,a))}};function Om(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,s)||!Ks(c,f):!0}function Pm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Fm(t){ll(t)}function zm(t){console.error(t)}function Bm(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Im(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function of(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Hm(t){return t=Da(t),t.tag=3,t}function Gm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Im(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Im(n,a,s),typeof c!="function"&&(za===null?za=new Set([this]):za.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Lx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&jr(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?kl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Lf(t,s,c)),!1;case 22:return a.flags|=65536,s===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Lf(t,s,c)),!1}throw Error(r(435,a.tag))}return Lf(t,s,c),kl(),!1}if(Se)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Tu&&(t=Error(r(422),{cause:s}),$s(ai(t,a)))):(s!==Tu&&(n=Error(r(423),{cause:s}),$s(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ai(s,a),c=of(t.stateNode,s,c),Fu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),xo===null?xo=[f]:xo.push(f),Je!==4&&(Je=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=of(a.stateNode,s,t),Fu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Hm(c),Gm(c,t,a,s),Fu(a,c),!1}a=a.return}while(a!==null);return!1}var lf=Error(r(461)),cn=!1;function Mn(t,n,a,s){n.child=t===null?Wp(n,null,a,s):mr(n,t.child,a,s)}function Vm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var A in s)A!=="ref"&&(g[A]=s[A])}else g=s;return fr(n),s=Vu(t,n,a,g,f,c),A=ku(),t!==null&&!cn?(Xu(t,n,c),$i(t,n,c)):(Se&&A&&Eu(n),n.flags|=1,Mn(t,n,s,c),n.child)}function km(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xm(t,n,f,s,c)):(t=hl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!gf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(g,s)&&t.ref===n.ref)return $i(t,n,c)}return n.flags|=1,t=Yi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Xm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ks(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,gf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,$i(t,n,c)}return cf(t,n,a,s,c)}function Wm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return qm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?jp(n,f):Bu(),Zp(n);else return s=n.lanes=536870912,qm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(gl(n,f.cachePool),jp(n,f),Na(),n.memoizedState=null):(t!==null&&gl(n,null),Bu(),Na());return Mn(t,n,c,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qm(t,n,a,s,c){var f=Lu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Bu(),Zp(n),t!==null&&jr(t,n,s,!0),n.childLanes=c,null}function Ll(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ym(t,n,a){return mr(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Nx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=Ll(n,s),n.lanes=536870912,fo(null,t);if(Hu(n),(t=ke)?(t=r0(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Dp(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Ll(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Hu(n),c)if(n.flags&256)n.flags&=-257,n=Ym(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||jr(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(s=Ve,s!==null&&(g=Qo(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,or(t,g),Gn(s,t,g),lf;kl(),n=Ym(t,n,a)}else t=f.treeContext,ke=ci(g.nextSibling),xn=n,Se=!0,Aa=null,oi=!1,t!==null&&Np(n,t),n=Ll(n,s),n.flags|=4096;return n}return t=Yi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function cf(t,n,a,s,c){return fr(n),a=Vu(t,n,a,s,void 0,c),s=ku(),t!==null&&!cn?(Xu(t,n,c),$i(t,n,c)):(Se&&s&&Eu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function jm(t,n,a,s,c,f){return fr(n),n.updateQueue=null,a=Qp(n,s,a,c),Kp(t),s=ku(),t!==null&&!cn?(Xu(t,n,f),$i(t,n,f)):(Se&&s&&Eu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Zm(t,n,a,s,c){if(fr(n),n.stateNode===null){var f=Xr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Ou(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Xr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(rf(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&sf.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=_r(a,A);f.props=B;var et=f.context,ht=a.contextType;g=Xr,typeof ht=="object"&&ht!==null&&(g=Sn(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==g)&&Pm(n,f,s,g),wa=!1;var st=n.memoizedState;f.state=st,so(n,s,f,c),ro(),et=n.memoizedState,A||st!==et||wa?(typeof _t=="function"&&(rf(n,a,_t,s),et=n.memoizedState),(B=wa||Om(n,a,B,s,st,et,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Pu(t,n),g=n.memoizedProps,ht=_r(a,g),f.props=ht,_t=n.pendingProps,st=f.context,et=a.contextType,B=Xr,typeof et=="object"&&et!==null&&(B=Sn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||st!==B)&&Pm(n,f,s,B),wa=!1,st=n.memoizedState,f.state=st,so(n,s,f,c),ro();var lt=n.memoizedState;g!==_t||st!==lt||wa||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof A=="function"&&(rf(n,a,A,s),lt=n.memoizedState),(ht=wa||Om(n,a,ht,s,st,lt,B)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=B,s=ht):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Nl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=mr(n,t.child,null,c),n.child=mr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=$i(t,n,c),t}function Km(t,n,a,s){return cr(),n.flags|=256,Mn(t,n,a,s),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(t){return{baseLanes:t,cachePool:Ip()}}function hf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function Qm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?La(n):Na(),(t=ke)?(t=r0(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Dp(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw Ra(n);return jf(t)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,c?(Na(),c=n.mode,A=Ol({mode:"hidden",children:A},c),s=lr(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=ff(a),s.childLanes=hf(t,g,a),n.memoizedState=uf,fo(null,s)):(La(n),df(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=pf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),A=s.fallback,c=n.mode,s=Ol({mode:"visible",children:s.children},c),A=lr(A,c,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,mr(n,t.child,null,a),s=n.child,s.memoizedState=ff(a),s.childLanes=hf(t,g,a),n.memoizedState=uf,n=fo(null,s));else if(La(n),jf(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var et=g.dgst;g=et,s=Error(r(419)),s.stack="",s.digest=g,$s({value:s,source:null,stack:null}),n=pf(t,n,a)}else if(cn||jr(t,n,a,!1),g=(a&t.childLanes)!==0,cn||g){if(g=Ve,g!==null&&(s=Qo(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,or(t,s),Gn(g,t,s),lf;Yf(A)||kl(),n=pf(t,n,a)}else Yf(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,ke=ci(A.nextSibling),xn=n,Se=!0,Aa=null,oi=!1,t!==null&&Np(n,t),n=df(n,s.children),n.flags|=4096);return n}return c?(Na(),A=s.fallback,c=n.mode,B=t.child,et=B.sibling,s=Yi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,et!==null?A=Yi(et,A):(A=lr(A,c,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,fo(null,s),s=n.child,A=t.child.memoizedState,A===null?A=ff(a):(c=A.cachePool,c!==null?(B=on._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Ip(),A={baseLanes:A.baseLanes|a,cachePool:c}),s.memoizedState=A,s.childLanes=hf(t,g,a),n.memoizedState=uf,fo(t.child,s)):(La(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function df(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function pf(t,n,a){return mr(n,t.child,null,a),t=df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Cu(t.return,n,a)}function mf(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function $m(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,gt(tn,g),Mn(t,n,s,a),s=Se?Js:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,a,n);else if(t.tag===19)Jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&yl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),mf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&yl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}mf(n,!0,a,null,f,s);break;case"together":mf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Ox(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Ca(n,on,t.memoizedState.cache),cr();break;case 27:case 5:Kt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qm(t,n,a):(La(n),t=$i(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(jr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return $m(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Wm(t,n,a,n.pendingProps);case 24:Ca(n,on,t.memoizedState.cache)}return $i(t,n,a)}function tg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!gf(t,a)&&(n.flags&128)===0)return cn=!1,Ox(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Se&&(n.flags&1048576)!==0&&Lp(n,Js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=dr(n.elementType),n.type=t,typeof t=="function")Su(t)?(s=_r(t,s),n.tag=1,n=Zm(null,n,t,s,a)):(n.tag=0,n=cf(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Vm(null,n,t,s,a);break t}else if(c===z){n.tag=14,n=km(null,n,t,s,a);break t}}throw n=K(t)||t,Error(r(306,n,""))}}return n;case 0:return cf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=_r(s,n.pendingProps),Zm(t,n,s,c,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Pu(t,n),so(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ca(n,on,s),s!==f.cache&&wu(n,[on],a,!0),ro(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Km(t,n,s,a);break t}else if(s!==c){c=ai(Error(r(424)),n),$s(c),n=Km(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ke=ci(t.firstChild),xn=n,Se=!0,Aa=null,oi=!0,a=Wp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cr(),s===c){n=$i(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=f0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,s=Kl(at.current).createElement(a),s[an]=n,s[hn]=t,yn(s,a,t),X(s),n.stateNode=s):n.memoizedState=f0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&Se&&(s=n.stateNode=l0(n.type,n.pendingProps,at.current),xn=n,oi=!0,c=ke,Ga(n.type)?(Zf=c,ke=ci(s.firstChild)):ke=c),Mn(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=s=ke)&&(s=uS(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,xn=n,ke=ci(s.firstChild),oi=!1,c=!0):c=!1),c||Ra(n)),Kt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Xf(c,f)?s=null:g!==null&&Xf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Vu(t,n,Tx,null,null,a),Ro._currentValue=c),Nl(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=ke)&&(a=fS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,xn=n,ke=null,t=!0):t=!1),t||Ra(n)),null;case 13:return Qm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=mr(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return Vm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ca(n,n.type,s.value),Mn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,fr(n),c=Sn(c),s=s(c),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return km(t,n,n.type,n.pendingProps,a);case 15:return Xm(t,n,n.type,n.pendingProps,a);case 19:return $m(t,n,a);case 31:return Nx(t,n,a);case 22:return Wm(t,n,a,n.pendingProps);case 24:return fr(n),s=Sn(on),t===null?(c=Lu(),c===null&&(c=Ve,f=Du(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Ou(n),Ca(n,on,c)):((t.lanes&a)!==0&&(Pu(t,n),so(n,null,null,a),ro()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ca(n,on,s)):(s=f.cache,Ca(n,on,s),s!==c.cache&&wu(n,[on],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(t){t.flags|=4}function _f(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Rg())t.flags|=8192;else throw pr=vl,Nu}else t.flags&=-16777217}function eg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!g0(n))if(Rg())t.flags|=8192;else throw pr=vl,Nu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Oe():536870912,t.lanes|=n,ss|=n)}function ho(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Px(t,n,a){var s=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ki(on),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Au())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ta(n),f!==null?(Xe(n),eg(n,f)):(Xe(n),_f(n,c,null,s,a))):f?f!==t.memoizedState?(ta(n),Xe(n),eg(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ta(n),Xe(n),_f(n,c,t,s,a)),null;case 27:if($t(n),a=at.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=Rt.current,Yr(n)?Op(n):(t=l0(c,s,a),n.stateNode=t,ta(n))}return Xe(n),null;case 5:if($t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(f=Rt.current,Yr(n))Op(n);else{var g=Kl(at.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[an]=n,f[hn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ta(n)}}return Xe(n),_f(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=at.current,Yr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Qg(t.nodeValue,a)),t||Ra(n,!0)}else t=Kl(t).createTextNode(s),t[an]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Yr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[an]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=Au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Yr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[an]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=Au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Xe(n),null);case 4:return kt(),t===null&&If(n.stateNode.containerInfo),Xe(n),null;case 10:return Ki(n.type),Xe(n),null;case 19:if(Y(tn),s=n.memoizedState,s===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ho(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=yl(t),f!==null){for(n.flags|=128,ho(s,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wp(a,t),a=a.sibling;return gt(tn,tn.current&1|2),Se&&ji(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>Hl&&(n.flags|=128,c=!0,ho(s,!1),n.lanes=4194304)}else{if(!c)if(t=yl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Se)return Xe(n),null}else 2*y()-s.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,c=!0,ho(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=tn.current,gt(tn,c?a&1|2:a&1),Se&&ji(n,s.treeForkCount),t):(Xe(n),null);case 22:case 23:return Kn(n),Iu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Y(hr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(on),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Fx(t,n){switch(bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(on),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(tn),null;case 4:return kt(),null;case 10:return Ki(n.type),null;case 22:case 23:return Kn(n),Iu(),t!==null&&Y(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(on),null;case 25:return null;default:return null}}function ng(t,n){switch(bu(n),n.tag){case 3:Ki(on),kt();break;case 26:case 27:case 5:$t(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Y(tn);break;case 10:Ki(n.type);break;case 22:case 23:Kn(n),Iu(),t!==null&&Y(hr);break;case 24:Ki(on)}}function po(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(A){Fe(n,n.return,A)}}function Oa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,c=n;var B=a,et=A;try{et()}catch(ht){Fe(c,B,ht)}}}s=s.next}while(s!==f)}}catch(ht){Fe(n,n.return,ht)}}function ig(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Yp(n,a)}catch(s){Fe(t,t.return,s)}}}function ag(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Fe(t,n,c)}}function Li(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function rg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function vf(t,n,a){try{var s=t.stateNode;aS(s,t.type,a,n),s[hn]=n}catch(c){Fe(t,t.return,c)}}function sg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function xf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||sg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Sf(t,n,a),t=t.sibling;t!==null;)Sf(t,n,a),t=t.sibling}function Fl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function og(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[an]=t,n[hn]=a}catch(f){Fe(t,t.return,f)}}var ea=!1,un=!1,Mf=!1,lg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function zx(t,n){if(t=t.containerInfo,Vf=ic,t=Sp(t),du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,B=-1,et=0,ht=0,_t=t,st=null;e:for(;;){for(var lt;_t!==a||c!==0&&_t.nodeType!==3||(A=g+c),_t!==f||s!==0&&_t.nodeType!==3||(B=g+s),_t.nodeType===3&&(g+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)st=_t,_t=lt;for(;;){if(_t===t)break e;if(st===a&&++et===c&&(A=g),st===f&&++ht===s&&(B=g),(lt=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=lt}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:t,selectionRange:a},ic=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=_r(a.type,c);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Fe(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function cg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),s&4&&po(5,a);break;case 1:if(ia(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var c=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}s&64&&ig(a),s&512&&mo(a,a.return);break;case 3:if(ia(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yp(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&s&4&&og(a);case 26:case 5:ia(t,a),n===null&&s&4&&rg(a),s&512&&mo(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),s&4&&hg(t,a);break;case 13:ia(t,a),s&4&&dg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qx.bind(null,a),hS(t,a))));break;case 22:if(s=a.memoizedState!==null||ea,!s){n=n!==null&&n.memoizedState!==null||un,c=ea;var f=un;ea=s,(un=n)&&!f?aa(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ea=c,un=f}break;case 30:break;default:ia(t,a)}}function ug(t){var n=t.alternate;n!==null&&(t.alternate=null,ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,zn=!1;function na(t,n,a){for(a=a.child;a!==null;)fg(t,n,a),a=a.sibling}function fg(t,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:un||Li(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Li(a,n);var s=je,c=zn;Ga(a.type)&&(je=a.stateNode,zn=!1),na(t,n,a),bo(a.stateNode),je=s,zn=c;break;case 5:un||Li(a,n);case 6:if(s=je,c=zn,je=null,na(t,n,a),je=s,zn=c,je!==null)if(zn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:je!==null&&(zn?(t=je,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):i0(je,a.stateNode));break;case 4:s=je,c=zn,je=a.stateNode.containerInfo,zn=!0,na(t,n,a),je=s,zn=c;break;case 0:case 11:case 14:case 15:Oa(2,a,n),un||Oa(4,a,n),na(t,n,a);break;case 1:un||(Li(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&ag(a,n,s)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,na(t,n,a),un=s;break;default:na(t,n,a)}}function hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){Fe(n,n.return,a)}}}function dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){Fe(n,n.return,a)}}function Bx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new lg),n;default:throw Error(r(435,t.tag))}}function zl(t,n){var a=Bx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Yx.bind(null,t,s);s.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){je=A.stateNode,zn=!1;break t}break;case 5:je=A.stateNode,zn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,zn=!0;break t}A=A.return}if(je===null)throw Error(r(160));fg(f,g,c),je=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,t),n=n.sibling}var Mi=null;function pg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),s&4&&(Oa(3,t,t.return),po(3,t),Oa(5,t,t.return));break;case 1:Bn(n,t),In(t),s&512&&(un||a===null||Li(a,a.return)),s&64&&ea&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Mi;if(Bn(n,t),In(t),s&512&&(un||a===null||Li(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[nr]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[an]=t,X(f),s=f;break t;case"link":var g=p0("link","href",c).get(s+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=p0("meta","content",c).get(s+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,X(f),s=f}t.stateNode=s}else m0(c,t.type,t.stateNode);else t.stateNode=d0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?m0(c,t.type,t.stateNode):d0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),s&512&&(un||a===null||Li(a,a.return)),a!==null&&s&4&&vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),s&512&&(un||a===null||Li(a,a.return)),t.flags&32){c=t.stateNode;try{Un(c,"")}catch(Gt){Fe(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,vf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Mf=!0);break;case 6:if(Bn(n,t),In(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){Fe(t,t.return,Gt)}}break;case 3:if($l=null,c=Mi,Mi=Ql(n.containerInfo),Bn(n,t),Mi=c,In(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(Gt){Fe(t,t.return,Gt)}Mf&&(Mf=!1,mg(t));break;case 4:s=Mi,Mi=Ql(t.stateNode.containerInfo),Bn(n,t),In(t),Mi=s;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zl(t,s)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zl(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=ea,ht=un;if(ea=et||c,un=ht||B,Bn(n,t),un=ht,ea=et,In(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ea||un||vr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=B.stateNode;var _t=B.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Gt){Fe(B,B.return,Gt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Gt){Fe(B,B.return,Gt)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;c?a0(lt,!0):a0(B.stateNode,!1)}catch(Gt){Fe(B,B.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,zl(t,a))));break;case 19:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(sg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=xf(t);Fl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Un(g,""),a.flags&=-33);var A=xf(t);Fl(t,A,g);break;case 3:case 4:var B=a.stateNode.containerInfo,et=xf(t);Sf(t,et,B);break;default:throw Error(r(161))}}catch(ht){Fe(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(t,n.alternate,n),n=n.sibling}function vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),vr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ag(n,n.return,a),vr(n);break;case 27:bo(n.stateNode);case 26:case 5:Li(n,n.return),vr(n);break;case 22:n.memoizedState===null&&vr(n);break;case 30:vr(n);break;default:vr(n)}t=t.sibling}}function aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:aa(c,f,a),po(4,f);break;case 1:if(aa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Fe(s,s.return,et)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)qp(B[c],A)}catch(et){Fe(s,s.return,et)}}a&&g&64&&ig(f),mo(f,f.return);break;case 27:og(f);case 26:case 5:aa(c,f,a),a&&s===null&&g&4&&rg(f),mo(f,f.return);break;case 12:aa(c,f,a);break;case 31:aa(c,f,a),a&&g&4&&hg(c,f);break;case 13:aa(c,f,a),a&&g&4&&dg(c,f);break;case 22:f.memoizedState===null&&aa(c,f,a),mo(f,f.return);break;case 30:break;default:aa(c,f,a)}n=n.sibling}}function yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function yi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(t,n,a,s),n=n.sibling}function gg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&po(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(c&2048){yi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Fe(n,n.return,B)}}else yi(t,n,a,s);break;case 31:yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,s):go(t,n):f._visibility&2?yi(t,n,a,s):(f._visibility|=2,is(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&yf(g,n);break;case 24:yi(t,n,a,s),c&2048&&Ef(n.alternate,n);break;default:yi(t,n,a,s)}}function is(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,B=s,et=g.flags;switch(g.tag){case 0:case 11:case 15:is(f,g,A,B,c),po(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?is(f,g,A,B,c):go(f,g):(ht._visibility|=2,is(f,g,A,B,c)),c&&et&2048&&yf(g.alternate,g);break;case 24:is(f,g,A,B,c),c&&et&2048&&Ef(g.alternate,g);break;default:is(f,g,A,B,c)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:go(a,s),c&2048&&yf(s.alternate,s);break;case 24:go(a,s),c&2048&&Ef(s.alternate,s);break;default:go(a,s)}n=n.sibling}}var _o=8192;function as(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)_g(t,n,a),t=t.sibling}function _g(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&_o&&t.memoizedState!==null&&bS(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var s=Mi;Mi=Ql(t.stateNode.containerInfo),as(t,n,a),Mi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=_o,_o=16777216,as(t,n,a),_o=s):as(t,n,a));break;default:as(t,n,a)}}function vg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Sg(s,t)}vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xg(t),t=t.sibling}function xg(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):vo(t);break;default:vo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Sg(s,t)}vg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function Sg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:to(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=t;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(ug(s),s===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var Ix={getCacheForType:function(t){var n=Sn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(on).controller.signal}},Hx=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,me=null,ve=0,Pe=0,Qn=null,Pa=!1,rs=!1,bf=!1,ra=0,Je=0,Fa=0,xr=0,Tf=0,Jn=0,ss=0,xo=null,Hn=null,Af=!1,Il=0,Mg=0,Hl=1/0,Gl=null,za=null,pn=0,Ba=null,os=null,sa=0,Rf=0,Cf=null,yg=null,So=0,wf=null;function $n(){return(De&2)!==0&&ve!==0?ve&-ve:L.T!==null?Pf():wi()}function Eg(){if(Jn===0)if((ve&536870912)===0||Se){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Gn(t,n,a){(t===Ve&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ia(t,ve,Jn,!1)),Cn(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(xr|=a),Je===4&&Ia(t,ve,Jn,!1)),Ni(t))}function bg(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),c=s?kx(t,n):Uf(t,n,!0),f=s;do{if(c===0){rs&&!s&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Gx(a)){c=Uf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;c=xo;var B=A.current.memoizedState.isDehydrated;if(B&&(ls(A,g).flags|=256),g=Uf(A,g,!1),g!==2){if(bf&&!B){A.errorRecoveryDisabledLanes|=f,xr|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ls(t,0),Ia(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(s,n,Jn,!Pa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Il+300-y(),10<c)){if(Ia(s,n,Jn,!Pa),ct(s,0,!0)!==0)break t;sa=n,s.timeoutHandle=e0(Tg.bind(null,s,a,Hn,Gl,Af,n,Jn,xr,ss,Pa,f,"Throttled",-0,0),c);break t}Tg(s,a,Hn,Gl,Af,n,Jn,xr,ss,Pa,f,null,-0,0)}}break}while(!0);Ni(t)}function Tg(t,n,a,s,c,f,g,A,B,et,ht,_t,st,lt){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},_g(n,f,_t);var Gt=(f&62914560)===f?Il-y():(f&4194048)===f?Mg-y():0;if(Gt=TS(_t,Gt),Gt!==null){sa=f,t.cancelPendingCommit=Gt(Ng.bind(null,t,n,f,a,s,c,g,A,B,ht,_t,null,st,lt)),Ia(t,f,g,!et);return}}Ng(t,n,f,a,s,c,g,A,B)}function Gx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,s){n&=~Tf,n&=~xr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Gs(t,a,n)}function Vl(){return(De&6)===0?(Mo(0),!1):!0}function Df(){if(me!==null){if(Pe===0)var t=me.return;else t=me,Zi=ur=null,Wu(t),Jr=null,no=0,t=me;for(;t!==null;)ng(t.alternate,t),t=t.return;me=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,oS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Df(),Ve=t,me=a=Yi(t.current,null),ve=n,Pe=0,Qn=null,Pa=!1,rs=It(t,n),bf=!1,ss=Jn=Tf=xr=Fa=Je=0,Hn=xo=null,Af=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ot(s),f=1<<c;n|=t[c],s&=~f}return ra=n,cl(),a}function Ag(t,n){le=null,L.H=uo,n===Qr||n===_l?(n=Vp(),Pe=3):n===Nu?(n=Vp(),Pe=4):Pe=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,me===null&&(Je=1,Ul(t,ai(n,t.current)))}function Rg(){var t=Zn.current;return t===null?!0:(ve&4194048)===ve?li===null:(ve&62914560)===ve||(ve&536870912)!==0?t===li:!1}function Cg(){var t=L.H;return L.H=uo,t===null?uo:t}function wg(){var t=L.A;return L.A=Ix,t}function kl(){Je=4,Pa||(ve&4194048)!==ve&&Zn.current!==null||(rs=!0),(Fa&134217727)===0&&(xr&134217727)===0||Ve===null||Ia(Ve,ve,Jn,!1)}function Uf(t,n,a){var s=De;De|=2;var c=Cg(),f=wg();(Ve!==t||ve!==n)&&(Gl=null,ls(t,n)),n=!1;var g=Je;t:do try{if(Pe!==0&&me!==null){var A=me,B=Qn;switch(Pe){case 8:Df(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var et=Pe;if(Pe=0,Qn=null,cs(t,A,B,et),a&&rs){g=0;break t}break;default:et=Pe,Pe=0,Qn=null,cs(t,A,B,et)}}Vx(),g=Je;break}catch(ht){Ag(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Zi=ur=null,De=s,L.H=c,L.A=f,me===null&&(Ve=null,ve=0,cl()),g}function Vx(){for(;me!==null;)Dg(me)}function kx(t,n){var a=De;De|=2;var s=Cg(),c=wg();Ve!==t||ve!==n?(Gl=null,Hl=y()+500,ls(t,n)):rs=It(t,n);t:do try{if(Pe!==0&&me!==null){n=me;var f=Qn;e:switch(Pe){case 1:Pe=0,Qn=null,cs(t,n,f,1);break;case 2:case 9:if(Hp(f)){Pe=0,Qn=null,Ug(n);break}n=function(){Pe!==2&&Pe!==9||Ve!==t||(Pe=7),Ni(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Hp(f)?(Pe=0,Qn=null,Ug(n)):(Pe=0,Qn=null,cs(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var A=me;if(g?g0(g):A.stateNode.complete){Pe=0,Qn=null;var B=A.sibling;if(B!==null)me=B;else{var et=A.return;et!==null?(me=et,Xl(et)):me=null}break e}}Pe=0,Qn=null,cs(t,n,f,5);break;case 6:Pe=0,Qn=null,cs(t,n,f,6);break;case 8:Df(),Je=6;break t;default:throw Error(r(462))}}Xx();break}catch(ht){Ag(t,ht)}while(!0);return Zi=ur=null,L.H=s,L.A=c,De=a,me!==null?0:(Ve=null,ve=0,cl(),Je)}function Xx(){for(;me!==null&&!qt();)Dg(me)}function Dg(t){var n=tg(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?Xl(t):me=n}function Ug(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Wu(n);default:ng(a,n),n=me=wp(n,ra),n=tg(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?Xl(t):me=n}function cs(t,n,a,s){Zi=ur=null,Wu(n),Jr=null,no=0;var c=n.return;try{if(Lx(t,c,n,a,ve)){Je=1,Ul(t,ai(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,Ul(t,ai(a,t.current)),me=null;return}n.flags&32768?(Se||s===1?t=!0:rs||(ve&536870912)!==0?t=!1:(Pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Lg(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Lg(n,Pa);return}t=n.return;var a=Px(n.alternate,n,ra);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function Lg(t,n){do{var a=Fx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function Ng(t,n,a,s,c,f,g,A,B){t.cancelPendingCommit=null;do Wl();while(pn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=vu,gi(t,a,f,g,A,B),t===Ve&&(me=Ve=null,ve=0),os=n,Ba=t,sa=a,Rf=f,Cf=c,yg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jx(ut,function(){return Bg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=F.p,F.p=2,g=De,De|=4;try{zx(t,n,a)}finally{De=g,F.p=c,L.T=s}}pn=1,Og(),Pg(),Fg()}}function Og(){if(pn===1){pn=0;var t=Ba,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=F.p;F.p=2;var c=De;De|=4;try{pg(n,t);var f=kf,g=Sp(t.containerInfo),A=f.focusedElem,B=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&xp(A.ownerDocument.documentElement,A)){if(B!==null&&du(A)){var et=B.start,ht=B.end;if(ht===void 0&&(ht=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ht,A.value.length);else{var _t=A.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Gt=A.textContent.length,Jt=Math.min(B.start,Gt),Ge=B.end===void 0?Jt:Math.min(B.end,Gt);!lt.extend&&Jt>Ge&&(g=Ge,Ge=Jt,Jt=g);var j=vp(A,Jt),k=vp(A,Ge);if(j&&k&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=_t.createRange();$.setStart(j.node,j.offset),lt.removeAllRanges(),Jt>Ge?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(_t=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var mt=_t[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ic=!!Vf,kf=Vf=null}finally{De=c,F.p=s,L.T=a}}t.current=n,pn=2}}function Pg(){if(pn===2){pn=0;var t=Ba,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=F.p;F.p=2;var c=De;De|=4;try{cg(t,n.alternate,n)}finally{De=c,F.p=s,L.T=a}}pn=3}}function Fg(){if(pn===4||pn===3){pn=0,U();var t=Ba,n=os,a=sa,s=yg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,os=Ba=null,zg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(za=null),Pr(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=F.p,F.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var A=s[g];f(A.value,{componentStack:A.stack})}}finally{L.T=n,F.p=c}}(sa&3)!==0&&Wl(),Ni(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===wf?So++:(So=0,wf=t):So=0,Mo(0)}}function zg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Wl(){return Og(),Pg(),Fg(),Bg()}function Bg(){if(pn!==5)return!1;var t=Ba,n=Rf;Rf=0;var a=Pr(sa),s=L.T,c=F.p;try{F.p=32>a?32:a,L.T=null,a=Cf,Cf=null;var f=Ba,g=sa;if(pn=0,os=Ba=null,sa=0,(De&6)!==0)throw Error(r(331));var A=De;if(De|=4,xg(f.current),gg(f,f.current,g,a),De=A,Mo(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{F.p=c,L.T=s,zg(t,n)}}function Ig(t,n,a){n=ai(a,n),n=of(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Cn(t,2),Ni(t))}function Fe(t,n,a){if(t.tag===3)Ig(t,t,a);else for(;n!==null;){if(n.tag===3){Ig(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))){t=ai(a,t),a=Hm(2),s=Ua(n,a,2),s!==null&&(Gm(a,s,n,t),Cn(s,2),Ni(s));break}}n=n.return}}function Lf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Hx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(bf=!0,c.add(a),t=Wx.bind(null,t,n,a),n.then(t,t))}function Wx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>y()-Il?(De&2)===0&&ls(t,0):Tf|=a,ss===ve&&(ss=0)),Ni(t)}function Hg(t,n){n===0&&(n=Oe()),t=or(t,n),t!==null&&(Cn(t,n),Ni(t))}function qx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Hg(t,a)}function Yx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Hg(t,a)}function jx(t,n){return ye(t,n)}var ql=null,us=null,Nf=!1,Yl=!1,Of=!1,Ha=0;function Ni(t){t!==us&&t.next===null&&(us===null?ql=us=t:us=us.next=t),Yl=!0,Nf||(Nf=!0,Kx())}function Mo(t,n){if(!Of&&Yl){Of=!0;do for(var a=!1,s=ql;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=c&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Xg(s,f))}else f=ve,f=ct(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,Xg(s,f));s=s.next}while(a);Of=!1}}function Zx(){Gg()}function Gg(){Yl=Nf=!1;var t=0;Ha!==0&&sS()&&(t=Ha);for(var n=y(),a=null,s=ql;s!==null;){var c=s.next,f=Vg(s,n);f===0?(s.next=null,a===null?ql=c:a.next=c,c===null&&(us=a)):(a=s,(t!==0||(f&3)!==0)&&(Yl=!0)),s=c}pn!==0&&pn!==5||Mo(t),Ha!==0&&(Ha=0)}function Vg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Ot(f),A=1<<g,B=c[g];B===-1?((A&a)===0||(A&s)!==0)&&(c[g]=ne(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ve,a=ve,a=ct(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Le(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Le(s),Pr(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=wt;break;default:a=ut}return s=kg.bind(null,t),a=ye(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Le(s),t.callbackPriority=2,t.callbackNode=null,2}function kg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var s=ve;return s=ct(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(bg(t,s,n),Vg(t,y()),t.callbackNode!=null&&t.callbackNode===a?kg.bind(null,t):null)}function Xg(t,n){if(Wl())return null;bg(t,n,!0)}function Kx(){lS(function(){(De&6)!==0?ye(pt,Zx):Gg()})}function Pf(){if(Ha===0){var t=Zr;t===0&&(t=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ha=t}return Ha}function Wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:el(""+t)}function qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Qx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Wg((c[hn]||null).action),g=s.submitter;g&&(n=(n=g[hn]||null)?Wg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new rl("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ha!==0){var B=g?qg(c,g):new FormData(c);tf(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=g?qg(c,g):new FormData(c),tf(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Ff=0;Ff<_u.length;Ff++){var zf=_u[Ff],Jx=zf.toLowerCase(),$x=zf[0].toUpperCase()+zf.slice(1);Si(Jx,"on"+$x)}Si(Ep,"onAnimationEnd"),Si(bp,"onAnimationIteration"),Si(Tp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(mx,"onTransitionRun"),Si(gx,"onTransitionStart"),Si(_x,"onTransitionCancel"),Si(Ap,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Yg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var A=s[g],B=A.instance,et=A.currentTarget;if(A=A.listener,B!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=et;try{f(c)}catch(ht){ll(ht)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(A=s[g],B=A.instance,et=A.currentTarget,A=A.listener,B!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=et;try{f(c)}catch(ht){ll(ht)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var s=t+"__bubble";a.has(s)||(jg(n,t,2,!1),a.add(s))}function Bf(t,n,a){var s=0;n&&(s|=4),jg(a,t,s,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[jl]){t[jl]=!0,ot.forEach(function(a){a!=="selectionchange"&&(tS.has(a)||Bf(a,!1,t),Bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Bf("selectionchange",!1,n))}}function jg(t,n,a,s){switch(E0(n)){case 2:var c=CS;break;case 8:c=wS;break;default:c=th}a=c.bind(null,n,a,t),c=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Hf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var A=s.stateNode.containerInfo;if(A===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;A!==null;){if(g=ya(A),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}A=A.parentNode}}s=s.return}$d(function(){var et=f,ht=nu(a),_t=[];t:{var st=Rp.get(t);if(st!==void 0){var lt=rl,Gt=t;switch(t){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":lt=Yv;break;case"focusin":Gt="focus",lt=lu;break;case"focusout":Gt="blur",lt=lu;break;case"beforeblur":case"afterblur":lt=lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Kv;break;case Ep:case bp:case Tp:lt=Bv;break;case Ap:lt=Jv;break;case"scroll":case"scrollend":lt=Nv;break;case"wheel":lt=tx;break;case"copy":case"cut":case"paste":lt=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=ap;break;case"toggle":case"beforetoggle":lt=nx}var Jt=(n&4)!==0,Ge=!Jt&&(t==="scroll"||t==="scrollend"),j=Jt?st!==null?st+"Capture":null:st;Jt=[];for(var k=et,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||j===null||(mt=ks(k,j),mt!=null&&Jt.push(Eo(k,mt,$))),Ge)break;k=k.return}0<Jt.length&&(st=new lt(st,Gt,null,a,ht),_t.push({event:st,listeners:Jt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",st&&a!==eu&&(Gt=a.relatedTarget||a.fromElement)&&(ya(Gt)||Gt[ki]))break t;if((lt||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Gt=a.relatedTarget||a.toElement,lt=et,Gt=Gt?ya(Gt):null,Gt!==null&&(Ge=u(Gt),Jt=Gt.tag,Gt!==Ge||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(lt=null,Gt=et),lt!==Gt)){if(Jt=np,mt="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=ap,mt="onPointerLeave",j="onPointerEnter",k="pointer"),Ge=lt==null?st:ir(lt),$=Gt==null?st:ir(Gt),st=new Jt(mt,k+"leave",lt,a,ht),st.target=Ge,st.relatedTarget=$,mt=null,ya(ht)===et&&(Jt=new Jt(j,k+"enter",Gt,a,ht),Jt.target=$,Jt.relatedTarget=Ge,mt=Jt),Ge=mt,lt&&Gt)e:{for(Jt=eS,j=lt,k=Gt,$=0,mt=j;mt;mt=Jt(mt))$++;mt=0;for(var Qt=k;Qt;Qt=Jt(Qt))mt++;for(;0<$-mt;)j=Jt(j),$--;for(;0<mt-$;)k=Jt(k),mt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){Jt=j;break e}j=Jt(j),k=Jt(k)}Jt=null}else Jt=null;lt!==null&&Zg(_t,st,lt,Jt,!1),Gt!==null&&Ge!==null&&Zg(_t,Ge,Gt,Jt,!0)}}t:{if(st=et?ir(et):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Ae=hp;else if(up(st))if(dp)Ae=hx;else{Ae=ux;var Yt=cx}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&zr(et.elementType)&&(Ae=hp):Ae=fx;if(Ae&&(Ae=Ae(t,et))){fp(_t,Ae,a,ht);break t}Yt&&Yt(t,st,et),t==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&vi(st,"number",st.value)}switch(Yt=et?ir(et):window,t){case"focusin":(up(Yt)||Yt.contentEditable==="true")&&(Gr=Yt,pu=et,Qs=null);break;case"focusout":Qs=pu=Gr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Mp(_t,a,ht);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Mp(_t,a,ht)}var fe;if(uu)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Hr?lp(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(rp&&a.locale!=="ko"&&(Hr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Hr&&(fe=tp()):(ba=ht,ru="value"in ba?ba.value:ba.textContent,Hr=!0)),Yt=Zl(et,xe),0<Yt.length&&(xe=new ip(xe,t,null,a,ht),_t.push({event:xe,listeners:Yt}),fe?xe.data=fe:(fe=cp(a),fe!==null&&(xe.data=fe)))),(fe=ax?rx(t,a):sx(t,a))&&(xe=Zl(et,"onBeforeInput"),0<xe.length&&(Yt=new ip("onBeforeInput","beforeinput",null,a,ht),_t.push({event:Yt,listeners:xe}),Yt.data=fe)),Qx(_t,t,et,a,ht)}Yg(_t,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ks(t,a),c!=null&&s.unshift(Eo(t,c,f)),c=ks(t,n),c!=null&&s.push(Eo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function eS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zg(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var A=a,B=A.alternate,et=A.stateNode;if(A=A.tag,B!==null&&B===s)break;A!==5&&A!==26&&A!==27||et===null||(B=et,c?(et=ks(a,f),et!=null&&g.unshift(Eo(a,et,B))):c||(et=ks(a,f),et!=null&&g.push(Eo(a,et,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(nS,`
`).replace(iS,"")}function Qg(t,n){return n=Kg(n),Kg(t)===n}function He(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Un(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Un(t,""+s);break;case"className":re(t,"class",s);break;case"tabIndex":re(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":re(t,a,s);break;case"style":Xi(t,s,f);break;case"data":if(n!=="object"){re(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=el(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=el(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=el(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ee(t,"popover",s);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ee(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Uv.get(a)||a,ee(t,a,s))}}function Gf(t,n,a,s,c,f){switch(a){case"style":Xi(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Un(t,s):(typeof s=="number"||typeof s=="bigint")&&Un(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ee(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,g,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var A=f=g=c=null,B=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":g=ht;break;case"checked":B=ht;break;case"defaultChecked":et=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:He(t,n,s,ht,a,null)}}Wn(t,f,A,B,et,g,c,!1);return;case"select":ge("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":s=A;default:He(t,n,c,A,a,null)}n=f,a=g,t.multiple=!!s,n!=null?qn(t,!!s,n,!1):a!=null&&qn(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:He(t,n,g,A,a,null)}rn(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:He(t,n,B,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<yo.length;s++)ge(yo[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,et,s,a,null)}return;default:if(zr(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Gf(t,n,ht,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&He(t,n,A,s,a,null))}function aS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,A=null,B=null,et=null,ht=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=_t;default:s.hasOwnProperty(lt)||He(t,n,lt,null,s,_t)}}for(var st in s){var lt=s[st];if(_t=a[st],s.hasOwnProperty(st)&&(lt!=null||_t!=null))switch(st){case"type":f=lt;break;case"name":c=lt;break;case"checked":et=lt;break;case"defaultChecked":ht=lt;break;case"value":g=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&He(t,n,st,lt,s,_t)}}Dn(t,g,A,B,et,ht,f,c);return;case"select":lt=g=A=st=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:s.hasOwnProperty(f)||He(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==B&&He(t,n,c,f,s,B)}n=A,a=g,s=lt,st!=null?qn(t,!!a,st,!1):!!s!=!!a&&(n!=null?qn(t,!!a,n,!0):qn(t,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(t,n,A,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":st=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&He(t,n,g,c,s,f)}Ne(t,st,lt);return;case"option":for(var Gt in a)if(st=a[Gt],a.hasOwnProperty(Gt)&&st!=null&&!s.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:He(t,n,Gt,null,s,st)}for(B in s)if(st=s[B],lt=a[B],s.hasOwnProperty(B)&&st!==lt&&(st!=null||lt!=null))switch(B){case"selected":t.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:He(t,n,B,st,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)st=a[Jt],a.hasOwnProperty(Jt)&&st!=null&&!s.hasOwnProperty(Jt)&&He(t,n,Jt,null,s,st);for(et in s)if(st=s[et],lt=a[et],s.hasOwnProperty(et)&&st!==lt&&(st!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:He(t,n,et,st,s,lt)}return;default:if(zr(n)){for(var Ge in a)st=a[Ge],a.hasOwnProperty(Ge)&&st!==void 0&&!s.hasOwnProperty(Ge)&&Gf(t,n,Ge,void 0,s,st);for(ht in s)st=s[ht],lt=a[ht],!s.hasOwnProperty(ht)||st===lt||st===void 0&&lt===void 0||Gf(t,n,ht,st,s,lt);return}}for(var j in a)st=a[j],a.hasOwnProperty(j)&&st!=null&&!s.hasOwnProperty(j)&&He(t,n,j,null,s,st);for(_t in s)st=s[_t],lt=a[_t],!s.hasOwnProperty(_t)||st===lt||st==null&&lt==null||He(t,n,_t,st,s,lt)}function Jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,A=c.duration;if(f&&A&&Jg(g)){for(g=0,A=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],et=B.startTime;if(et>A)break;var ht=B.transferSize,_t=B.initiatorType;ht&&Jg(_t)&&(B=B.responseEnd,g+=ht*(B<A?1:(A-et)/(B-et)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vf=null,kf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function $g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Xf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function sS(){var t=window.event;return t&&t.type==="popstate"?t===Wf?!1:(Wf=t,!0):(Wf=null,!1)}var e0=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(cS)}:e0;function cS(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function i0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),ps(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[nr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&bo(t.ownerDocument.body);a=c}while(a);ps(n)}function a0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function uS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[nr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function fS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function r0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Yf(t){return t.data==="$?"||t.data==="$~"}function jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Zf=null;function s0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function o0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function l0(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vs(t)}var ui=new Map,c0=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=F.d;F.d={f:dS,r:pS,D:mS,C:gS,L:_S,m:vS,X:SS,S:xS,M:MS};function dS(){var t=oa.f(),n=Vl();return t||n}function pS(t){var n=Ea(t);n!==null&&n.tag===5&&n.type==="form"?Am(n):oa.r(t)}var fs=typeof document>"u"?null:document;function u0(t,n,a){var s=fs;if(s&&typeof n=="string"&&n){var c=ae(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),c0.has(c)||(c0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),X(n),s.head.appendChild(n)))}}function mS(t){oa.D(t),u0("dns-prefetch",t,null)}function gS(t,n){oa.C(t,n),u0("preconnect",t,n)}function _S(t,n,a){oa.L(t,n,a);var s=fs;if(s&&t&&n){var c='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ae(a.imageSizes)+'"]')):c+='[href="'+ae(t)+'"]';var f=c;switch(n){case"style":f=hs(t);break;case"script":f=ds(t)}ui.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(Ao(f))||(n=s.createElement("link"),yn(n,"link",t),X(n),s.head.appendChild(n)))}}function vS(t,n){oa.m(t,n);var a=fs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ae(s)+'"][href="'+ae(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ds(t)}if(!ui.has(f)&&(t=S({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}s=a.createElement("link"),yn(s,"link",t),X(s),a.head.appendChild(s)}}}function xS(t,n,a){oa.S(t,n,a);var s=fs;if(s&&t){var c=R(s).hoistableStyles,f=hs(t);n=n||"default";var g=c.get(f);if(!g){var A={loading:0,preload:null};if(g=s.querySelector(To(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Kf(t,a);var B=g=s.createElement("link");X(B),yn(B,"link",t),B._p=new Promise(function(et,ht){B.onload=et,B.onerror=ht}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:A},c.set(f,g)}}}function SS(t,n){oa.X(t,n);var a=fs;if(a&&t){var s=R(a).hoistableScripts,c=ds(t),f=s.get(c);f||(f=a.querySelector(Ao(c)),f||(t=S({src:t,async:!0},n),(n=ui.get(c))&&Qf(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function MS(t,n){oa.M(t,n);var a=fs;if(a&&t){var s=R(a).hoistableScripts,c=ds(t),f=s.get(c);f||(f=a.querySelector(Ao(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Qf(t,n),f=a.createElement("script"),X(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function f0(t,n,a,s){var c=(c=at.current)?Ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=R(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var f=R(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(To(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||yS(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=R(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+ae(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function h0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function yS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),X(n),t.head.appendChild(n))}function ds(t){return'[src="'+ae(t)+'"]'}function Ao(t){return"script[async]"+t}function d0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(s)return n.instance=s,X(s),s;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),X(s),yn(s,"style",c),Jl(s,a.precedence,t),n.instance=s;case"stylesheet":c=hs(a.href);var f=t.querySelector(To(c));if(f)return n.state.loading|=4,n.instance=f,X(f),f;s=h0(a),(c=ui.get(c))&&Kf(s,c),f=(t.ownerDocument||t).createElement("link"),X(f);var g=f;return g._p=new Promise(function(A,B){g.onload=A,g.onerror=B}),yn(f,"link",s),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=ds(a.src),(c=t.querySelector(Ao(f)))?(n.instance=c,X(c),c):(s=a,(c=ui.get(f))&&(s=S({},a),Qf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),X(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Jl(s,a.precedence,t));return n.instance}function Jl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var A=s[g];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function p0(t,n,a){if($l===null){var s=new Map,c=$l=new Map;c.set(a,s)}else c=$l,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[nr]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=s.get(g);A?A.push(f):s.set(g,[f])}}return s}function m0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ES(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=hs(s.href),f=n.querySelector(To(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,s=h0(s),(c=ui.get(c))&&Kf(s,c),f=f.createElement("link"),X(f);var g=f;g._p=new Promise(function(A,B){g.onload=A,g.onerror=B}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jf=0;function TS(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Jf===0&&(Jf=62500*rS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Jf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(AS,t),ec=null,tc.call(t))}function AS(t,n){if(!(n.state.loading&4)){var a=ec.get(t);if(a)var s=a.get(null);else{a=new Map,ec.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=tc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:P,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function RS(t,n,a,s,c,f,g,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function _0(t,n,a,s,c,f,g,A,B,et,ht,_t){return t=new RS(t,n,a,g,B,et,ht,_t,A),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Du(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Ou(f),t}function v0(t){return t?(t=Xr,t):Xr}function x0(t,n,a,s,c,f){c=v0(c),s.context===null?s.context=c:s.pendingContext=c,s=Da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ua(t,s,n),a!==null&&(Gn(a,t,n),ao(a,t,n))}function S0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function $f(t,n){S0(t,n),(t=t.alternate)&&S0(t,n)}function M0(t){if(t.tag===13||t.tag===31){var n=or(t,67108864);n!==null&&Gn(n,t,67108864),$f(t,67108864)}}function y0(t){if(t.tag===13||t.tag===31){var n=$n();n=Or(n);var a=or(t,n);a!==null&&Gn(a,t,n),$f(t,n)}}var ic=!0;function CS(t,n,a,s){var c=L.T;L.T=null;var f=F.p;try{F.p=2,th(t,n,a,s)}finally{F.p=f,L.T=c}}function wS(t,n,a,s){var c=L.T;L.T=null;var f=F.p;try{F.p=8,th(t,n,a,s)}finally{F.p=f,L.T=c}}function th(t,n,a,s){if(ic){var c=eh(s);if(c===null)Hf(t,n,s,ac,a),b0(t,s);else if(US(c,t,n,a,s))s.stopPropagation();else if(b0(t,s),n&4&&-1<DS.indexOf(t)){for(;c!==null;){var f=Ea(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Et(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var B=1<<31-Ot(g);A.entanglements[1]|=B,g&=~B}Ni(f),(De&6)===0&&(Hl=y()+500,Mo(0))}}break;case 31:case 13:A=or(f,2),A!==null&&Gn(A,f,2),Vl(),$f(f,2)}if(f=eh(s),f===null&&Hf(t,n,s,ac,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Hf(t,n,s,null,a)}}function eh(t){return t=nu(t),nh(t)}var ac=null;function nh(t){if(ac=null,t=ya(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function E0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case xt:return 8;case ut:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var ih=!1,Va=null,ka=null,Xa=null,Co=new Map,wo=new Map,Wa=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b0(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ea(n),n!==null&&M0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function US(t,n,a,s,c){switch(n){case"focusin":return Va=Do(Va,t,n,a,s,c),!0;case"dragenter":return ka=Do(ka,t,n,a,s,c),!0;case"mouseover":return Xa=Do(Xa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,s,c)),!0}return!1}function T0(t){var n=ya(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){y0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){y0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=eh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);eu=s,a.target.dispatchEvent(s),eu=null}else return n=Ea(a),n!==null&&M0(n),t.blockedOn=a,!1;n.shift()}return!0}function A0(t,n,a){rc(t)&&a.delete(n)}function LS(){ih=!1,Va!==null&&rc(Va)&&(Va=null),ka!==null&&rc(ka)&&(ka=null),Xa!==null&&rc(Xa)&&(Xa=null),Co.forEach(A0),wo.forEach(A0)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,ih||(ih=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,LS)))}var oc=null;function R0(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(nh(s||a)===null)continue;break}var f=Ea(a);f!==null&&(t.splice(n,3),n-=3,tf(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ps(t){function n(B){return sc(B,t)}Va!==null&&sc(Va,t),ka!==null&&sc(ka,t),Xa!==null&&sc(Xa,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<Wa.length;a++){var s=Wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)T0(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[hn]||null;if(typeof f=="function")g||R0(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[hn]||null)A=g.formAction;else if(nh(c)!==null)continue}else A=g.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),R0(a)}}}function C0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ah(t){this._internalRoot=t}lc.prototype.render=ah.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();x0(a,s,t,n,null,null)},lc.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;x0(t.current,2,null,t,null,null),Vl(),n[ki]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=wi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&T0(t)}};var w0=e.version;if(w0!=="19.2.4")throw Error(r(527,w0,"19.2.4"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var NS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{bt=cc.inject(NS),yt=cc}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Fm,f=zm,g=Bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=_0(t,1,!1,null,null,a,s,null,c,f,g,C0),t[ki]=n.current,If(t),new ah(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Fm,g=zm,A=Bm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=_0(t,1,!0,n,a??null,s,c,B,f,g,A,C0),n.context=v0(null),a=n.current,s=$n(),s=Or(s),c=Da(s),c.callback=null,Ua(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ni(n),t[ki]=n.current,If(t),new lc(n)},Lo.version="19.2.4",Lo}var I0;function XS(){if(I0)return oh.exports;I0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),oh.exports=kS(),oh.exports}var WS=XS();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="183",qS=0,H0=1,YS=2,zc=1,jS=2,Go=3,er=0,kn=1,da=2,ma=0,Ds=1,G0=2,V0=3,k0=4,ZS=5,Rr=100,KS=101,QS=102,JS=103,$S=104,tM=200,eM=201,nM=202,iM=203,Wh=204,qh=205,aM=206,rM=207,sM=208,oM=209,lM=210,cM=211,uM=212,fM=213,hM=214,Yh=0,jh=1,Zh=2,Ls=3,Kh=4,Qh=5,Jh=6,$h=7,q_=0,dM=1,pM=2,Ii=0,Y_=1,j_=2,Z_=3,K_=4,Q_=5,J_=6,$_=7,tv=300,Lr=301,Ns=302,fh=303,hh=304,Qc=306,td=1e3,pa=1001,ed=1002,En=1003,mM=1004,uc=1005,Rn=1006,dh=1007,wr=1008,pi=1009,ev=1010,nv=1011,Xo=1012,Gd=1013,Gi=1014,zi=1015,_a=1016,Vd=1017,kd=1018,Wo=1020,iv=35902,av=35899,rv=1021,sv=1022,Ri=1023,va=1026,Dr=1027,ov=1028,Xd=1029,Os=1030,Wd=1031,qd=1033,Bc=33776,Ic=33777,Hc=33778,Gc=33779,nd=35840,id=35841,ad=35842,rd=35843,sd=36196,od=37492,ld=37496,cd=37488,ud=37489,fd=37490,hd=37491,dd=37808,pd=37809,md=37810,gd=37811,_d=37812,vd=37813,xd=37814,Sd=37815,Md=37816,yd=37817,Ed=37818,bd=37819,Td=37820,Ad=37821,Rd=36492,Cd=36494,wd=36495,Dd=36283,Ud=36284,Ld=36285,Nd=36286,gM=3200,_M=0,vM=1,$a="",hi="srgb",Ps="srgb-linear",kc="linear",ze="srgb",ms=7680,X0=519,xM=512,SM=513,MM=514,Yd=515,yM=516,EM=517,jd=518,bM=519,W0=35044,q0="300 es",Bi=2e3,Xc=2001;function TM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function AM(){const o=Wc("canvas");return o.style.display="block",o}const Y0={};function j0(...o){const e="THREE."+o.shift();console.log(e,...o)}function lv(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ie(...o){o=lv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ce(...o){o=lv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function qc(...o){const e=o.join(" ");e in Y0||(Y0[e]=!0,ie(...o))}function RM(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const CM={[Yh]:jh,[Zh]:Jh,[Kh]:$h,[Ls]:Qh,[jh]:Yh,[Jh]:Zh,[$h]:Kh,[Qh]:Ls};class zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,Od=180/Math.PI;function Yo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function wM(o,e){return(o%e+e)%e}function mh(o,e,i){return(1-i)*o+i*e}function No(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,i=0){Be.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,p){let m=r[l+0],d=r[l+1],v=r[l+2],S=r[l+3],_=u[h+0],E=u[h+1],b=u[h+2],C=u[h+3];if(S!==C||m!==_||d!==E||v!==b){let M=m*_+d*E+v*b+S*C;M<0&&(_=-_,E=-E,b=-b,C=-C,M=-M);let x=1-p;if(M<.9995){const w=Math.acos(M),P=Math.sin(w);x=Math.sin(x*w)/P,p=Math.sin(p*w)/P,m=m*x+_*p,d=d*x+E*p,v=v*x+b*p,S=S*x+C*p}else{m=m*x+_*p,d=d*x+E*p,v=v*x+b*p,S=S*x+C*p;const w=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=w,d*=w,v*=w,S*=w}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,u,h){const p=r[l],m=r[l+1],d=r[l+2],v=r[l+3],S=u[h],_=u[h+1],E=u[h+2],b=u[h+3];return e[i]=p*b+v*S+m*E-d*_,e[i+1]=m*b+v*_+d*S-p*E,e[i+2]=d*b+v*E+p*_-m*S,e[i+3]=v*b-p*S-m*_-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(r/2),v=p(l/2),S=p(u/2),_=m(r/2),E=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=_*v*S+d*E*b,this._y=d*E*S-_*v*b,this._z=d*v*b+_*E*S,this._w=d*v*S-_*E*b;break;case"YXZ":this._x=_*v*S+d*E*b,this._y=d*E*S-_*v*b,this._z=d*v*b-_*E*S,this._w=d*v*S+_*E*b;break;case"ZXY":this._x=_*v*S-d*E*b,this._y=d*E*S+_*v*b,this._z=d*v*b+_*E*S,this._w=d*v*S-_*E*b;break;case"ZYX":this._x=_*v*S-d*E*b,this._y=d*E*S+_*v*b,this._z=d*v*b-_*E*S,this._w=d*v*S+_*E*b;break;case"YZX":this._x=_*v*S+d*E*b,this._y=d*E*S+_*v*b,this._z=d*v*b-_*E*S,this._w=d*v*S-_*E*b;break;case"XZY":this._x=_*v*S-d*E*b,this._y=d*E*S-_*v*b,this._z=d*v*b+_*E*S,this._w=d*v*S+_*E*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],_=r+p+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-d)*E,this._z=(h-l)*E}else if(r>p&&r>S){const E=2*Math.sqrt(1+r-p-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+d)/E}else if(p>S){const E=2*Math.sqrt(1+p-r-S);this._w=(u-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-r-p);this._w=(h-l)/E,this._x=(u+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=r*v+h*p+l*d-u*m,this._y=l*v+h*m+u*p-r*d,this._z=u*v+h*d+r*m-l*p,this._w=h*v-r*p-l*m-u*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,h=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Z0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Z0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*r),v=2*(p*i-u*l),S=2*(u*r-h*i);return this.x=i+m*d+h*S-p*v,this.y=r+m*v+p*d-u*S,this.z=l+m*S+u*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*h-r*m,this.z=r*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new rt,Z0=new Bs;class he{constructor(e,i,r,l,u,h,p,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,p,m,d)}set(e,i,r,l,u,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],v=r[4],S=r[7],_=r[2],E=r[5],b=r[8],C=l[0],M=l[3],x=l[6],w=l[1],P=l[4],N=l[7],V=l[2],I=l[5],z=l[8];return u[0]=h*C+p*w+m*V,u[3]=h*M+p*P+m*I,u[6]=h*x+p*N+m*z,u[1]=d*C+v*w+S*V,u[4]=d*M+v*P+S*I,u[7]=d*x+v*N+S*z,u[2]=_*C+E*w+b*V,u[5]=_*M+E*P+b*I,u[8]=_*x+E*N+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-r*u*v+r*p*m+l*u*d-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*h-p*d,_=p*m-v*u,E=d*u-h*m,b=i*S+r*_+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=S*C,e[1]=(l*d-v*r)*C,e[2]=(p*r-l*h)*C,e[3]=_*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-p*i)*C,e[6]=E*C,e[7]=(r*m-d*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,p){const m=Math.cos(u),d=Math.sin(u);return this.set(r*m,r*d,-r*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(_h.makeScale(e,i)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,i){return this.premultiply(_h.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new he,K0=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DM(){const o={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return qc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return qc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ps]:{primaries:e,whitePoint:r,transfer:kc,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const be=DM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Us(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gs;class UM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=Wc("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ga(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LM=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?u.push(vh(l[h].image)):u.push(vh(l[h]))}else u=vh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?UM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let NM=0;const xh=new rt;class On extends zs{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=pa,l=pa,u=Rn,h=wr,p=Ri,m=pi,d=On.DEFAULT_ANISOTROPY,v=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Yo(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=tv;On.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,d=m[0],v=m[4],S=m[8],_=m[1],E=m[5],b=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(S-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(S+C)<.1&&Math.abs(b+M)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(d+1)/2,N=(E+1)/2,V=(x+1)/2,I=(v+_)/4,z=(S+C)/4,T=(b+M)/4;return P>N&&P>V?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=I/r,u=z/r):N>V?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=I/l,u=T/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=z/u,l=T/u),this.set(r,l,u,i),this}let w=Math.sqrt((M-b)*(M-b)+(S-C)*(S-C)+(_-v)*(_-v));return Math.abs(w)<.001&&(w=1),this.x=(M-b)/w,this.y=(S-C)/w,this.z=(_-v)/w,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OM extends zs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new On(l),h=r.count;for(let p=0;p<h;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends OM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class cv extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PM extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(e,i,r,l,u,h,p,m,d,v,S,_,E,b,C,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,p,m,d,v,S,_,E,b,C,M)}set(e,i,r,l,u,h,p,m,d,v,S,_,E,b,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=_,x[3]=E,x[7]=b,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),u=1/_s.setFromMatrixColumn(e,1).length(),h=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const _=h*v,E=h*S,b=p*v,C=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=E+b*d,i[5]=_-C*d,i[9]=-p*m,i[2]=C-_*d,i[6]=b+E*d,i[10]=h*m}else if(e.order==="YXZ"){const _=m*v,E=m*S,b=d*v,C=d*S;i[0]=_+C*p,i[4]=b*p-E,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=E*p-b,i[6]=C+_*p,i[10]=h*m}else if(e.order==="ZXY"){const _=m*v,E=m*S,b=d*v,C=d*S;i[0]=_-C*p,i[4]=-h*S,i[8]=b+E*p,i[1]=E+b*p,i[5]=h*v,i[9]=C-_*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const _=h*v,E=h*S,b=p*v,C=p*S;i[0]=m*v,i[4]=b*d-E,i[8]=_*d+C,i[1]=m*S,i[5]=C*d+_,i[9]=E*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const _=h*m,E=h*d,b=p*m,C=p*d;i[0]=m*v,i[4]=C-_*S,i[8]=b*S+E,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*S+b,i[10]=_-C*S}else if(e.order==="XZY"){const _=h*m,E=h*d,b=p*m,C=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=_*S+C,i[5]=h*v,i[9]=E*S-b,i[2]=b*S-E,i[6]=p*v,i[10]=C*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FM,e,zM)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ya.crossVectors(r,ti),Ya.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ya.crossVectors(r,ti)),Ya.normalize(),fc.crossVectors(ti,Ya),l[0]=Ya.x,l[4]=fc.x,l[8]=ti.x,l[1]=Ya.y,l[5]=fc.y,l[9]=ti.y,l[2]=Ya.z,l[6]=fc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],v=r[1],S=r[5],_=r[9],E=r[13],b=r[2],C=r[6],M=r[10],x=r[14],w=r[3],P=r[7],N=r[11],V=r[15],I=l[0],z=l[4],T=l[8],D=l[12],dt=l[1],H=l[5],tt=l[9],Z=l[13],K=l[2],Q=l[6],L=l[10],F=l[14],nt=l[3],ft=l[7],Mt=l[11],O=l[15];return u[0]=h*I+p*dt+m*K+d*nt,u[4]=h*z+p*H+m*Q+d*ft,u[8]=h*T+p*tt+m*L+d*Mt,u[12]=h*D+p*Z+m*F+d*O,u[1]=v*I+S*dt+_*K+E*nt,u[5]=v*z+S*H+_*Q+E*ft,u[9]=v*T+S*tt+_*L+E*Mt,u[13]=v*D+S*Z+_*F+E*O,u[2]=b*I+C*dt+M*K+x*nt,u[6]=b*z+C*H+M*Q+x*ft,u[10]=b*T+C*tt+M*L+x*Mt,u[14]=b*D+C*Z+M*F+x*O,u[3]=w*I+P*dt+N*K+V*nt,u[7]=w*z+P*H+N*Q+V*ft,u[11]=w*T+P*tt+N*L+V*Mt,u[15]=w*D+P*Z+N*F+V*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],_=e[10],E=e[14],b=e[3],C=e[7],M=e[11],x=e[15],w=m*E-d*_,P=p*E-d*S,N=p*_-m*S,V=h*E-d*v,I=h*_-m*v,z=h*S-p*v;return i*(C*w-M*P+x*N)-r*(b*w-M*V+x*I)+l*(b*P-C*V+x*z)-u*(b*N-C*I+M*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],_=e[10],E=e[11],b=e[12],C=e[13],M=e[14],x=e[15],w=i*p-r*h,P=i*m-l*h,N=i*d-u*h,V=r*m-l*p,I=r*d-u*p,z=l*d-u*m,T=v*C-S*b,D=v*M-_*b,dt=v*x-E*b,H=S*M-_*C,tt=S*x-E*C,Z=_*x-E*M,K=w*Z-P*tt+N*H+V*dt-I*D+z*T;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/K;return e[0]=(p*Z-m*tt+d*H)*Q,e[1]=(l*tt-r*Z-u*H)*Q,e[2]=(C*z-M*I+x*V)*Q,e[3]=(_*I-S*z-E*V)*Q,e[4]=(m*dt-h*Z-d*D)*Q,e[5]=(i*Z-l*dt+u*D)*Q,e[6]=(M*N-b*z-x*P)*Q,e[7]=(v*z-_*N+E*P)*Q,e[8]=(h*tt-p*dt+d*T)*Q,e[9]=(r*dt-i*tt-u*T)*Q,e[10]=(b*I-C*N+x*w)*Q,e[11]=(S*N-v*I-E*w)*Q,e[12]=(p*D-h*H-m*T)*Q,e[13]=(i*H-r*D+l*T)*Q,e[14]=(C*P-b*V-M*w)*Q,e[15]=(v*V-S*P+_*w)*Q,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,p=e.y,m=e.z,d=u*h,v=u*p;return this.set(d*h+r,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+r,v*m-l*h,0,d*m-l*p,v*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,p=i._z,m=i._w,d=u+u,v=h+h,S=p+p,_=u*d,E=u*v,b=u*S,C=h*v,M=h*S,x=p*S,w=m*d,P=m*v,N=m*S,V=r.x,I=r.y,z=r.z;return l[0]=(1-(C+x))*V,l[1]=(E+N)*V,l[2]=(b-P)*V,l[3]=0,l[4]=(E-N)*I,l[5]=(1-(_+x))*I,l[6]=(M+w)*I,l[7]=0,l[8]=(b+P)*z,l[9]=(M-w)*z,l[10]=(1-(_+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let h=_s.set(l[0],l[1],l[2]).length();const p=_s.set(l[4],l[5],l[6]).length(),m=_s.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Ei.copy(this);const d=1/h,v=1/p,S=1/m;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=S,Ei.elements[9]*=S,Ei.elements[10]*=S,i.setFromRotationMatrix(Ei),r.x=h,r.y=p,r.z=m,this}makePerspective(e,i,r,l,u,h,p=Bi,m=!1){const d=this.elements,v=2*u/(i-e),S=2*u/(r-l),_=(i+e)/(i-e),E=(r+l)/(r-l);let b,C;if(m)b=u/(h-u),C=h*u/(h-u);else if(p===Bi)b=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(p===Xc)b=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=S,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,u,h,p=Bi,m=!1){const d=this.elements,v=2/(i-e),S=2/(r-l),_=-(i+e)/(i-e),E=-(r+l)/(r-l);let b,C;if(m)b=1/(h-u),C=h/(h-u);else if(p===Bi)b=-2/(h-u),C=-(h+u)/(h-u);else if(p===Xc)b=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=S,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new rt,Ei=new $e,FM=new rt(0,0,0),zM=new rt(1,1,1),Ya=new rt,fc=new rt,ti=new rt,J0=new $e,$0=new Bs;class xa{constructor(e=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return $0.setFromEuler(this),this.setFromQuaternion($0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BM=0;const t_=new rt,vs=new Bs,la=new $e,hc=new rt,Oo=new rt,IM=new rt,HM=new Bs,e_=new rt(1,0,0),n_=new rt(0,1,0),i_=new rt(0,0,1),a_={type:"added"},GM={type:"removed"},xs={type:"childadded",child:null},Sh={type:"childremoved",child:null};class Pn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new rt,i=new xa,r=new Bs,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new he}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(n_,e)}rotateZ(e){return this.rotateOnAxis(i_,e)}translateOnAxis(e,i){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(n_,e)}translateZ(e){return this.translateOnAxis(i_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?hc.copy(e):hc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Oo,hc,this.up):la.lookAt(hc,Oo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(la),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(GM),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,IM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),S=h(e.shapes),_=h(e.skeletons),E=h(e.animations),b=h(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new rt(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),x=this._getHandJoint(d,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],_=v.position.distanceTo(S.position),E=.02,b=.005;d.inputState.pinching&&_>E+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=E-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new dc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},pc={h:0,s:0,l:0};function yh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=wM(e,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=yh(h,u,e+1/3),this.g=yh(h,u,e),this.b=yh(h,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&ie("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ie("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=fv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return be.workingToColorSpace(An.copy(this),e),Math.round(Me(An.r*255,0,255))*65536+Math.round(Me(An.g*255,0,255))*256+Math.round(Me(An.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,u=An.b,h=Math.max(r,l,u),p=Math.min(r,l,u);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case r:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-r)/S+2;break;case u:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=hi){be.workingToColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(pc);const r=mh(ja.h,pc.h,i),l=mh(ja.s,pc.s,i),u=mh(ja.l,pc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Ue;Ue.NAMES=fv;class Kd{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=i}clone(){return new Kd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kM extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bi=new rt,ca=new rt,Eh=new rt,ua=new rt,Ss=new rt,Ms=new rt,r_=new rt,bh=new rt,Th=new rt,Ah=new rt,Rh=new nn,Ch=new nn,wh=new nn;class Ai{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){bi.subVectors(l,i),ca.subVectors(r,i),Eh.subVectors(e,i);const h=bi.dot(bi),p=bi.dot(ca),m=bi.dot(Eh),d=ca.dot(ca),v=ca.dot(Eh),S=h*d-p*p;if(S===0)return u.set(0,0,0),null;const _=1/S,E=(d*m-p*v)*_,b=(h*v-p*m)*_;return u.set(1-E-b,b,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,u,h,p,m){return this.getBarycoord(e,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(h,ua.y),m.addScaledVector(p,ua.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,r),wh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Rh,u.x),h.addScaledVector(Ch,u.y),h.addScaledVector(wh,u.z),h}static isFrontFacing(e,i,r,l){return bi.subVectors(r,i),ca.subVectors(e,i),bi.cross(ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),bi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,p;Ss.subVectors(l,r),Ms.subVectors(u,r),bh.subVectors(e,r);const m=Ss.dot(bh),d=Ms.dot(bh);if(m<=0&&d<=0)return i.copy(r);Th.subVectors(e,l);const v=Ss.dot(Th),S=Ms.dot(Th);if(v>=0&&S<=v)return i.copy(l);const _=m*S-v*d;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(Ss,h);Ah.subVectors(e,u);const E=Ss.dot(Ah),b=Ms.dot(Ah);if(b>=0&&E<=b)return i.copy(u);const C=E*d-m*b;if(C<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(r).addScaledVector(Ms,p);const M=v*b-E*S;if(M<=0&&S-v>=0&&E-b>=0)return r_.subVectors(u,l),p=(S-v)/(S-v+(E-b)),i.copy(l).addScaledVector(r_,p);const x=1/(M+C+_);return h=C*x,p=_*x,i.copy(r).addScaledVector(Ss,h).addScaledVector(Ms,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=u.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ti):Ti.fromBufferAttribute(u,h),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mc.copy(r.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),gc.subVectors(this.max,Po),ys.subVectors(e.a,Po),Es.subVectors(e.b,Po),bs.subVectors(e.c,Po),Za.subVectors(Es,ys),Ka.subVectors(bs,Es),Sr.subVectors(ys,bs);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Sr.z,Sr.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Sr.z,0,-Sr.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Sr.y,Sr.x,0];return!Dh(i,ys,Es,bs,gc)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,ys,Es,bs,gc))?!1:(_c.crossVectors(Za,Ka),i=[_c.x,_c.y,_c.z],Dh(i,ys,Es,bs,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Ti=new rt,mc=new jo,ys=new rt,Es=new rt,bs=new rt,Za=new rt,Ka=new rt,Sr=new rt,Po=new rt,gc=new rt,_c=new rt,Mr=new rt;function Dh(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){Mr.fromArray(o,u);const p=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),d=i.dot(Mr),v=r.dot(Mr);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const fn=new rt,vc=new Be;let XM=0;class ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=W0,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W0&&(e.usage=this.usage),e}}class hv extends ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class dv extends ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ci extends ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}const WM=new jo,Fo=new rt,Uh=new rt;class Zo{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):WM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Uh)),this.expandByPoint(Fo.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qM=0;const fi=new $e,Lh=new Pn,Ts=new rt,ei=new jo,zo=new jo,vn=new rt;class Xn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(TM(e)?dv:hv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ci(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const p=i[u];zo.setFromBufferAttribute(p),this.morphTargetsRelative?(vn.addVectors(ei.min,zo.min),ei.expandByPoint(vn),vn.addVectors(ei.max,zo.max),ei.expandByPoint(vn)):(ei.expandByPoint(zo.min),ei.expandByPoint(zo.max))}ei.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const p=i[u],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)vn.fromBufferAttribute(p,d),m&&(Ts.fromBufferAttribute(e,d),vn.add(Ts)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new rt,m[T]=new rt;const d=new rt,v=new rt,S=new rt,_=new Be,E=new Be,b=new Be,C=new rt,M=new rt;function x(T,D,dt){d.fromBufferAttribute(r,T),v.fromBufferAttribute(r,D),S.fromBufferAttribute(r,dt),_.fromBufferAttribute(u,T),E.fromBufferAttribute(u,D),b.fromBufferAttribute(u,dt),v.sub(d),S.sub(d),E.sub(_),b.sub(_);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(S,-E.y).multiplyScalar(H),M.copy(S).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(H),p[T].add(C),p[D].add(C),p[dt].add(C),m[T].add(M),m[D].add(M),m[dt].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,D=w.length;T<D;++T){const dt=w[T],H=dt.start,tt=dt.count;for(let Z=H,K=H+tt;Z<K;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new rt,N=new rt,V=new rt,I=new rt;function z(T){V.fromBufferAttribute(l,T),I.copy(V);const D=p[T];P.copy(D),P.sub(V.multiplyScalar(V.dot(D))).normalize(),N.crossVectors(I,D);const H=N.dot(m[T])<0?-1:1;h.setXYZW(T,P.x,P.y,P.z,H)}for(let T=0,D=w.length;T<D;++T){const dt=w[T],H=dt.start,tt=dt.count;for(let Z=H,K=H+tt;Z<K;Z+=3)z(e.getX(Z+0)),z(e.getX(Z+1)),z(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const l=new rt,u=new rt,h=new rt,p=new rt,m=new rt,d=new rt,v=new rt,S=new rt;if(e)for(let _=0,E=e.count;_<E;_+=3){const b=e.getX(_+0),C=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),p.add(v),m.add(v),d.add(v),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),S.subVectors(l,u),v.cross(S),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,_=new d.constructor(m.length*v);let E=0,b=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*v;for(let x=0;x<v;x++)_[b++]=d[E++]}return new ni(_,v,S)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,r);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const m=[],d=u[p];for(let v=0,S=d.length;v<S;v++){const _=d[v],E=e(_,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,_=d.length;S<_;S++){const E=d[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const u=e.morphAttributes;for(const d in u){const v=[],S=u[d];for(let _=0,E=S.length;_<E;_++)v.push(S[_].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let YM=0;class Is extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Ds,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wh&&(r.blendSrc=this.blendSrc),this.blendDst!==qh&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ha=new rt,Nh=new rt,xc=new rt,Qa=new rt,Oh=new rt,Sc=new rt,Ph=new rt;class Qd{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nh.copy(e).add(i).multiplyScalar(.5),xc.copy(i).sub(e).normalize(),Qa.copy(this.origin).sub(Nh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(xc),p=Qa.dot(this.direction),m=-Qa.dot(xc),d=Qa.lengthSq(),v=Math.abs(1-h*h);let S,_,E,b;if(v>0)if(S=h*m-p,_=h*p-m,b=u*v,S>=0)if(_>=-b)if(_<=b){const C=1/v;S*=C,_*=C,E=S*(S+h*_+2*p)+_*(h*S+_+2*m)+d}else _=u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;else _=-u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;else _<=-b?(S=Math.max(0,-(-h*u+p)),_=S>0?-u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+d):_<=b?(S=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+d):(S=Math.max(0,-(h*u+p)),_=S>0?u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+d);else _=h>0?-u:u,S=Math.max(0,-(h*_+p)),E=-S*S+_*(_+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Nh).addScaledVector(xc,_),E}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const r=ha.dot(this.direction),l=ha.dot(ha)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,_=this.origin;return d>=0?(r=(e.min.x-_.x)*d,l=(e.max.x-_.x)*d):(r=(e.max.x-_.x)*d,l=(e.min.x-_.x)*d),v>=0?(u=(e.min.y-_.y)*v,h=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,h=(e.min.y-_.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(p=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,r,l,u){Oh.subVectors(i,e),Sc.subVectors(r,e),Ph.crossVectors(Oh,Sc);let h=this.direction.dot(Ph),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Qa.subVectors(this.origin,e);const m=p*this.direction.dot(Sc.crossVectors(Qa,Sc));if(m<0)return null;const d=p*this.direction.dot(Oh.cross(Qa));if(d<0||m+d>h)return null;const v=-p*Qa.dot(Ph);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pv extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const s_=new $e,yr=new Qd,Mc=new Zo,o_=new rt,yc=new rt,Ec=new rt,bc=new rt,Fh=new rt,Tc=new rt,l_=new rt,Ac=new rt;class Sa extends Pn{constructor(e=new Xn,i=new pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Tc.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const v=p[m],S=u[m];v!==0&&(Fh.fromBufferAttribute(S,e),h?Tc.addScaledVector(Fh,v):Tc.addScaledVector(Fh.sub(i),v))}i.add(Tc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(u),yr.copy(e.ray).recast(e.near),!(Mc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Mc,o_)===null||yr.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(s_.copy(u).invert(),yr.copy(e.ray).applyMatrix4(s_),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,yr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,p=u.index,m=u.attributes.position,d=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,_=u.groups,E=u.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,C=_.length;b<C;b++){const M=_[b],x=h[M.materialIndex],w=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=w,V=P;N<V;N+=3){const I=p.getX(N),z=p.getX(N+1),T=p.getX(N+2);l=Rc(this,x,e,r,d,v,S,I,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let M=b,x=C;M<x;M+=3){const w=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=Rc(this,h,e,r,d,v,S,w,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=_.length;b<C;b++){const M=_[b],x=h[M.materialIndex],w=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=w,V=P;N<V;N+=3){const I=N,z=N+1,T=N+2;l=Rc(this,x,e,r,d,v,S,I,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=b,x=C;M<x;M+=3){const w=M,P=M+1,N=M+2;l=Rc(this,h,e,r,d,v,S,w,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function jM(o,e,i,r,l,u,h,p){let m;if(e.side===kn?m=r.intersectTriangle(h,u,l,!0,p):m=r.intersectTriangle(l,u,h,e.side===er,p),m===null)return null;Ac.copy(p),Ac.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Ac);return d<i.near||d>i.far?null:{distance:d,point:Ac.clone(),object:o}}function Rc(o,e,i,r,l,u,h,p,m,d){o.getVertexPosition(p,yc),o.getVertexPosition(m,Ec),o.getVertexPosition(d,bc);const v=jM(o,e,i,r,yc,Ec,bc,l_);if(v){const S=new rt;Ai.getBarycoord(l_,yc,Ec,bc,S),l&&(v.uv=Ai.getInterpolatedAttribute(l,p,m,d,S,new Be)),u&&(v.uv1=Ai.getInterpolatedAttribute(u,p,m,d,S,new Be)),h&&(v.normal=Ai.getInterpolatedAttribute(h,p,m,d,S,new rt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new rt,materialIndex:0};Ai.getNormal(yc,Ec,bc,_.normal),v.face=_,v.barycoord=S}return v}class ZM extends On{constructor(e=null,i=1,r=1,l,u,h,p,m,d=En,v=En,S,_){super(null,h,p,m,d,v,l,u,S,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new rt,KM=new rt,QM=new he;class Ar{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=zh.subVectors(r,i).cross(KM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(zh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||QM.getNormalMatrix(e),l=this.coplanarPoint(zh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Zo,JM=new Be(.5,.5),Cc=new rt;class mv{constructor(e=new Ar,i=new Ar,r=new Ar,l=new Ar,u=new Ar,h=new Ar){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Bi,r=!1){const l=this.planes,u=e.elements,h=u[0],p=u[1],m=u[2],d=u[3],v=u[4],S=u[5],_=u[6],E=u[7],b=u[8],C=u[9],M=u[10],x=u[11],w=u[12],P=u[13],N=u[14],V=u[15];if(l[0].setComponents(d-h,E-v,x-b,V-w).normalize(),l[1].setComponents(d+h,E+v,x+b,V+w).normalize(),l[2].setComponents(d+p,E+S,x+C,V+P).normalize(),l[3].setComponents(d-p,E-S,x-C,V-P).normalize(),r)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(d-m,E-_,x-M,V-N).normalize();else if(l[4].setComponents(d-m,E-_,x-M,V-N).normalize(),i===Bi)l[5].setComponents(d+m,E+_,x+M,V+N).normalize();else if(i===Xc)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=JM.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gv extends Is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new rt,jc=new rt,c_=new $e,Bo=new Qd,wc=new Zo,Bh=new rt,u_=new rt;class $M extends Pn{constructor(e=new Xn,i=new gv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Yc.fromBufferAttribute(i,l-1),jc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Yc.distanceTo(jc);e.setAttribute("lineDistance",new Ci(r,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(l),wc.radius+=u,e.ray.intersectsSphere(wc)===!1)return;c_.copy(l).invert(),Bo.copy(e.ray).applyMatrix4(c_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const E=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=E,M=b-1;C<M;C+=d){const x=v.getX(C),w=v.getX(C+1),P=Dc(this,e,Bo,m,x,w,C);P&&i.push(P)}if(this.isLineLoop){const C=v.getX(b-1),M=v.getX(E),x=Dc(this,e,Bo,m,C,M,b-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let C=E,M=b-1;C<M;C+=d){const x=Dc(this,e,Bo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Dc(this,e,Bo,m,b-1,E,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function Dc(o,e,i,r,l,u,h){const p=o.geometry.attributes.position;if(Yc.fromBufferAttribute(p,l),jc.fromBufferAttribute(p,u),i.distanceSqToSegment(Yc,jc,Bh,u_)>r)return;Bh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Bh);if(!(d<e.near||d>e.far))return{distance:d,point:u_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const f_=new rt,h_=new rt;class ty extends $M{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)f_.fromBufferAttribute(i,l),h_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+f_.distanceTo(h_);e.setAttribute("lineDistance",new Ci(r,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pd extends Is{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const d_=new $e,Fd=new Qd,Uc=new Zo,Lc=new rt;class p_ extends Pn{constructor(e=new Xn,i=new Pd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=u,e.ray.intersectsSphere(Uc)===!1)return;d_.copy(l).invert(),Fd.copy(e.ray).applyMatrix4(d_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=r.index,S=r.attributes.position;if(d!==null){const _=Math.max(0,h.start),E=Math.min(d.count,h.start+h.count);for(let b=_,C=E;b<C;b++){const M=d.getX(b);Lc.fromBufferAttribute(S,M),m_(Lc,M,m,l,e,i,this)}}else{const _=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let b=_,C=E;b<C;b++)Lc.fromBufferAttribute(S,b),m_(Lc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function m_(o,e,i,r,l,u,h){const p=Fd.distanceSqToPoint(o);if(p<i){const m=new rt;Fd.closestPointToPoint(o,m),m.applyMatrix4(r);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;u.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class _v extends On{constructor(e=[],i=Lr,r,l,u,h,p,m,d,v){super(e,i,r,l,u,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qo extends On{constructor(e,i,r=Gi,l,u,h,p=En,m=En,d,v=va,S=1){if(v!==va&&v!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:S};super(_,l,u,h,p,m,v,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ey extends qo{constructor(e,i=Gi,r=Lr,l,u,h=En,p=En,m,d=va){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,r,l,u,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Xn{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const p=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],d=[],v=[],S=[];let _=0,E=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ci(d,3)),this.setAttribute("normal",new Ci(v,3)),this.setAttribute("uv",new Ci(S,2));function b(C,M,x,w,P,N,V,I,z,T,D){const dt=N/z,H=V/T,tt=N/2,Z=V/2,K=I/2,Q=z+1,L=T+1;let F=0,nt=0;const ft=new rt;for(let Mt=0;Mt<L;Mt++){const O=Mt*H-Z;for(let Y=0;Y<Q;Y++){const gt=Y*dt-tt;ft[C]=gt*w,ft[M]=O*P,ft[x]=K,d.push(ft.x,ft.y,ft.z),ft[C]=0,ft[M]=0,ft[x]=I>0?1:-1,v.push(ft.x,ft.y,ft.z),S.push(Y/z),S.push(1-Mt/T),F+=1}}for(let Mt=0;Mt<T;Mt++)for(let O=0;O<z;O++){const Y=_+O+Q*Mt,gt=_+O+Q*(Mt+1),Rt=_+(O+1)+Q*(Mt+1),Lt=_+(O+1)+Q*Mt;m.push(Y,gt,Lt),m.push(gt,Rt,Lt),nt+=6}p.addGroup(E,nt,D),E+=nt,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jc extends Xn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,v=m+1,S=e/p,_=i/m,E=[],b=[],C=[],M=[];for(let x=0;x<v;x++){const w=x*_-h;for(let P=0;P<d;P++){const N=P*S-u;b.push(N,-w,0),C.push(0,0,1),M.push(P/p),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<p;w++){const P=w+d*x,N=w+d*(x+1),V=w+1+d*(x+1),I=w+1+d*x;E.push(P,N,I),E.push(N,V,I)}this.setIndex(E),this.setAttribute("position",new Ci(b,3)),this.setAttribute("normal",new Ci(C,3)),this.setAttribute("uv",new Ci(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Fs(o[i]);for(const l in r)e[l]=r[l]}return e}function ny(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function xv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const iy={clone:Fs,merge:Nn};var ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class sy extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oy extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nc=new rt,Oc=new Bs,Oi=new rt;class Sv extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nc,Oc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Oc,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Nc,Oc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Oc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new rt,g_=new Be,__=new Be;class di extends Sv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,g_,__),i.subVectors(__,g_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ph*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/d,l*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Mv extends Sv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,h=u+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const As=-90,Rs=1;class cy extends Pn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(As,Rs,e,i);l.layers=this.layers,this.add(l);const u=new di(As,Rs,e,i);u.layers=this.layers,this.add(u);const h=new di(As,Rs,e,i);h.layers=this.layers,this.add(h);const p=new di(As,Rs,e,i);p.layers=this.layers,this.add(p);const m=new di(As,Rs,e,i);m.layers=this.layers,this.add(m);const d=new di(As,Rs,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,p,m]=i;for(const d of i)this.remove(d);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,p,m,d,v]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,_,E),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class uy extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function v_(o,e,i,r){const l=fy(r);switch(i){case rv:return o*e;case ov:return o*e/l.components*l.byteLength;case Xd:return o*e/l.components*l.byteLength;case Os:return o*e*2/l.components*l.byteLength;case Wd:return o*e*2/l.components*l.byteLength;case sv:return o*e*3/l.components*l.byteLength;case Ri:return o*e*4/l.components*l.byteLength;case qd:return o*e*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case id:case rd:return Math.max(o,16)*Math.max(e,8)/4;case nd:case ad:return Math.max(o,8)*Math.max(e,8)/2;case sd:case od:case cd:case ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ld:case fd:case hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rd:case Cd:case wd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dd:case Ud:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ld:case Nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fy(o){switch(o){case pi:case ev:return{byteLength:1,components:1};case Xo:case nv:case _a:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case Gi:case Gd:case zi:return{byteLength:4,components:1};case iv:case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function hy(o){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function r(p,m,d){const v=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,v);else{S.sort((E,b)=>E.start-b.start);let _=0;for(let E=1;E<S.length;E++){const b=S[_],C=S[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,S[_]=C)}S.length=_+1;for(let E=0,b=S.length;E<b;E++){const C=S[E];o.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:u,update:h}}var dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,By=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ME=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ub=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:dy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:Sy,batching_pars_vertex:My,batching_vertex:yy,begin_vertex:Ey,beginnormal_vertex:by,bsdfs:Ty,iridescence_fragment:Ay,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Uy,color_fragment:Ly,color_pars_fragment:Ny,color_pars_vertex:Oy,color_vertex:Py,common:Fy,cube_uv_reflection_fragment:zy,defaultnormal_vertex:By,displacementmap_pars_vertex:Iy,displacementmap_vertex:Hy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Vy,colorspace_fragment:ky,colorspace_pars_fragment:Xy,envmap_fragment:Wy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Yy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:rE,envmap_vertex:Zy,fog_vertex:Ky,fog_pars_vertex:Qy,fog_fragment:Jy,fog_pars_fragment:$y,gradientmap_pars_fragment:tE,lightmap_pars_fragment:eE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:aE,lights_toon_fragment:sE,lights_toon_pars_fragment:oE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:uE,lights_physical_pars_fragment:fE,lights_fragment_begin:hE,lights_fragment_maps:dE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:vE,map_fragment:xE,map_pars_fragment:SE,map_particle_fragment:ME,map_particle_pars_fragment:yE,metalnessmap_fragment:EE,metalnessmap_pars_fragment:bE,morphinstance_vertex:TE,morphcolor_vertex:AE,morphnormal_vertex:RE,morphtarget_pars_vertex:CE,morphtarget_vertex:wE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:LE,normal_pars_vertex:NE,normal_vertex:OE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:FE,clearcoat_normal_fragment_maps:zE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:IE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:kE,dithering_fragment:XE,dithering_pars_fragment:WE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:ZE,shadowmap_vertex:KE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:$E,skinning_vertex:tb,skinnormal_vertex:eb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:ab,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:fb,background_vert:hb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:vb,depth_frag:xb,distance_vert:Sb,distance_frag:Mb,equirect_vert:yb,equirect_frag:Eb,linedashed_vert:bb,linedashed_frag:Tb,meshbasic_vert:Ab,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:wb,meshmatcap_vert:Db,meshmatcap_frag:Ub,meshnormal_vert:Lb,meshnormal_frag:Nb,meshphong_vert:Ob,meshphong_frag:Pb,meshphysical_vert:Fb,meshphysical_frag:zb,meshtoon_vert:Bb,meshtoon_frag:Ib,points_vert:Hb,points_frag:Gb,shadow_vert:Vb,shadow_frag:kb,sprite_vert:Xb,sprite_frag:Wb},Nt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Fi={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Fi.physical={uniforms:Nn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Pc={r:0,b:0,g:0},br=new xa,qb=new $e;function Yb(o,e,i,r,l,u){const h=new Ue(0);let p=l===!0?0:1,m,d,v=null,S=0,_=null;function E(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const N=w.backgroundBlurriness>0;P=e.get(P,N)}return P}function b(w){let P=!1;const N=E(w);N===null?M(h,p):N&&N.isColor&&(M(N,1),P=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(w,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===Qc)?(d===void 0&&(d=new Sa(new Ko(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Fs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),br.copy(P.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(br)),d.material.toneMapped=be.getTransfer(N.colorSpace)!==ze,(v!==N||S!==N.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,v=N,S=N.version,_=o.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Sa(new Jc(2,2),new Vi({name:"BackgroundMaterial",uniforms:Fs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=be.getTransfer(N.colorSpace)!==ze,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||S!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=N,S=N.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,P){w.getRGB(Pc,xv(o)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,P,u)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,P=1){h.set(w),p=P,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,M(h,p)},render:b,addToRenderList:C,dispose:x}}function jb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,h=!1;function p(H,tt,Z,K,Q){let L=!1;const F=S(H,K,Z,tt);u!==F&&(u=F,d(u.object)),L=E(H,K,Z,Q),L&&b(H,K,Z,Q),Q!==null&&e.update(Q,o.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,N(H,tt,Z,K),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function S(H,tt,Z,K){const Q=K.wireframe===!0;let L=r[tt.id];L===void 0&&(L={},r[tt.id]=L);const F=H.isInstancedMesh===!0?H.id:0;let nt=L[F];nt===void 0&&(nt={},L[F]=nt);let ft=nt[Z.id];ft===void 0&&(ft={},nt[Z.id]=ft);let Mt=ft[Q];return Mt===void 0&&(Mt=_(m()),ft[Q]=Mt),Mt}function _(H){const tt=[],Z=[],K=[];for(let Q=0;Q<i;Q++)tt[Q]=0,Z[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:Z,attributeDivisors:K,object:H,attributes:{},index:null}}function E(H,tt,Z,K){const Q=u.attributes,L=tt.attributes;let F=0;const nt=Z.getAttributes();for(const ft in nt)if(nt[ft].location>=0){const O=Q[ft];let Y=L[ft];if(Y===void 0&&(ft==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),ft==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;F++}return u.attributesNum!==F||u.index!==K}function b(H,tt,Z,K){const Q={},L=tt.attributes;let F=0;const nt=Z.getAttributes();for(const ft in nt)if(nt[ft].location>=0){let O=L[ft];O===void 0&&(ft==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),ft==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),Q[ft]=Y,F++}u.attributes=Q,u.attributesNum=F,u.index=K}function C(){const H=u.newAttributes;for(let tt=0,Z=H.length;tt<Z;tt++)H[tt]=0}function M(H){x(H,0)}function x(H,tt){const Z=u.newAttributes,K=u.enabledAttributes,Q=u.attributeDivisors;Z[H]=1,K[H]===0&&(o.enableVertexAttribArray(H),K[H]=1),Q[H]!==tt&&(o.vertexAttribDivisor(H,tt),Q[H]=tt)}function w(){const H=u.newAttributes,tt=u.enabledAttributes;for(let Z=0,K=tt.length;Z<K;Z++)tt[Z]!==H[Z]&&(o.disableVertexAttribArray(Z),tt[Z]=0)}function P(H,tt,Z,K,Q,L,F){F===!0?o.vertexAttribIPointer(H,tt,Z,Q,L):o.vertexAttribPointer(H,tt,Z,K,Q,L)}function N(H,tt,Z,K){C();const Q=K.attributes,L=Z.getAttributes(),F=tt.defaultAttributeValues;for(const nt in L){const ft=L[nt];if(ft.location>=0){let Mt=Q[nt];if(Mt===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(Mt=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(Mt=H.instanceColor)),Mt!==void 0){const O=Mt.normalized,Y=Mt.itemSize,gt=e.get(Mt);if(gt===void 0)continue;const Rt=gt.buffer,Lt=gt.type,at=gt.bytesPerElement,vt=Lt===o.INT||Lt===o.UNSIGNED_INT||Mt.gpuType===Gd;if(Mt.isInterleavedBufferAttribute){const Tt=Mt.data,kt=Tt.stride,Kt=Mt.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<ft.locationSize;$t++)x(ft.location+$t,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<ft.locationSize;$t++)M(ft.location+$t);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let $t=0;$t<ft.locationSize;$t++)P(ft.location+$t,Y/ft.locationSize,Lt,O,kt*at,(Kt+Y/ft.locationSize*$t)*at,vt)}else{if(Mt.isInstancedBufferAttribute){for(let Tt=0;Tt<ft.locationSize;Tt++)x(ft.location+Tt,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Tt=0;Tt<ft.locationSize;Tt++)M(ft.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<ft.locationSize;Tt++)P(ft.location+Tt,Y/ft.locationSize,Lt,O,Y*at,Y/ft.locationSize*Tt*at,vt)}}else if(F!==void 0){const O=F[nt];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(ft.location,O);break;case 3:o.vertexAttrib3fv(ft.location,O);break;case 4:o.vertexAttrib4fv(ft.location,O);break;default:o.vertexAttrib1fv(ft.location,O)}}}}w()}function V(){D();for(const H in r){const tt=r[H];for(const Z in tt){const K=tt[Z];for(const Q in K){const L=K[Q];for(const F in L)v(L[F].object),delete L[F];delete K[Q]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const tt=r[H.id];for(const Z in tt){const K=tt[Z];for(const Q in K){const L=K[Q];for(const F in L)v(L[F].object),delete L[F];delete K[Q]}}delete r[H.id]}function z(H){for(const tt in r){const Z=r[tt];for(const K in Z){const Q=Z[K];if(Q[H.id]===void 0)continue;const L=Q[H.id];for(const F in L)v(L[F].object),delete L[F];delete Q[H.id]}}}function T(H){for(const tt in r){const Z=r[tt],K=H.isInstancedMesh===!0?H.id:0,Q=Z[K];if(Q!==void 0){for(const L in Q){const F=Q[L];for(const nt in F)v(F[nt].object),delete F[nt];delete Q[L]}delete Z[K],Object.keys(Z).length===0&&delete r[tt]}}}function D(){dt(),h=!0,u!==l&&(u=l,d(u.object))}function dt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:dt,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:w}}function Zb(o,e,i){let r;function l(d){r=d}function u(d,v){o.drawArrays(r,d,v),i.update(v,r,1)}function h(d,v,S){S!==0&&(o.drawArraysInstanced(r,d,v,S),i.update(v,r,S))}function p(d,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,v,0,S);let E=0;for(let b=0;b<S;b++)E+=v[b];i.update(E,r,1)}function m(d,v,S,_){if(S===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<d.length;b++)h(d[b],v[b],_[b]);else{E.multiDrawArraysInstancedWEBGL(r,d,0,v,0,_,0,S);let b=0;for(let C=0;C<S;C++)b+=v[C]*_[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Kb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ri&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==pi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==zi&&!T)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(ie("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:N,maxSamples:V,samples:I}}function Qb(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new Ar,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||r!==0||l;return l=_,r=S.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,_){i=v(S,_,0)},this.setState=function(S,_,E){const b=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,x=o.get(S);if(!l||b===null||b.length===0||u&&!M)u?v(null):d();else{const w=u?0:r,P=w*4;let N=x.clippingState||null;m.value=N,N=v(b,_,P,E);for(let V=0;V!==P;++V)N[V]=i[V];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,_,E,b){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const x=E+C*4,w=_.matrixWorldInverse;p.getNormalMatrix(w),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,N=E;P!==C;++P,N+=4)h.copy(S[P]).applyMatrix4(w,p),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const tr=4,x_=[.125,.215,.35,.446,.526,.582],Cr=20,Jb=256,Io=new Mv,S_=new Ue;let Ih=null,Hh=0,Gh=0,Vh=!1;const $b=new rt;class M_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:p=$b}=u;Ih=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Hh,Gh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Lr||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:_a,format:Ri,colorSpace:Ps,depthBuffer:!1},l=y_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tT(u)),this._blurMaterial=nT(u,e,i),this._ggxMaterial=eT(u,e,i)}return l}_compileMaterial(e){const i=new Sa(new Xn,e);this._renderer.compile(i,Io)}_sceneToCubeUV(e,i,r,l,u){const m=new di(90,1,i,r),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,E=S.toneMapping;S.getClearColor(S_),S.toneMapping=Ii,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sa(new Ko,new pv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,x=!0):(M.color.copy(S_),x=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,d[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):N===1?(m.up.set(0,0,d[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,d[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const V=this._cubeSize;Cs(l,N*V,P>2?V:0,V,V),S.setRenderTarget(l),x&&S.render(C,m),S.render(e,m)}S.toneMapping=E,S.autoClear=_,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Lr||e.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Io)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),_=0+d*1.25,E=S*_,{_lodMax:b}=this,C=this._sizeLods[r],M=3*C*(r>b-tr?r-b+tr:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=b-i,Cs(u,M,x,3*C,2*C),l.setRenderTarget(u),l.render(p,Io),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Cs(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(p,Io)}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const _=d.uniforms,E=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Cr-1),C=u/b,M=isFinite(u)?1+Math.floor(v*C):Cr;M>Cr&&ie(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const x=[];let w=0;for(let z=0;z<Cr;++z){const T=z/C,D=Math.exp(-T*T/2);x.push(D),z===0?w+=D:z<M&&(w+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/w;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=h==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=b,_.mipInt.value=P-r;const N=this._sizeLods[l],V=3*N*(l>P-tr?l-P+tr:0),I=4*(this._cubeSize-N);Cs(i,V,I,3*N,2*N),m.setRenderTarget(i),m.render(S,Io)}}function tT(o){const e=[],i=[],r=[];let l=o;const u=o-tr+1+x_.length;for(let h=0;h<u;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-tr?m=x_[h-o+tr-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,_=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,b=6,C=3,M=2,x=1,w=new Float32Array(C*b*E),P=new Float32Array(M*b*E),N=new Float32Array(x*b*E);for(let I=0;I<E;I++){const z=I%3*2/3-1,T=I>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];w.set(D,C*b*I),P.set(_,M*b*I);const dt=[I,I,I,I,I,I];N.set(dt,x*b*I)}const V=new Xn;V.setAttribute("position",new ni(w,C)),V.setAttribute("uv",new ni(P,M)),V.setAttribute("faceIndex",new ni(N,x)),r.push(new Sa(V,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function y_(o,e,i){const r=new Hi(o,e,i);return r.texture.mapping=Qc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function eT(o,e,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function nT(o,e,i){const r=new Float32Array(Cr),l=new rt(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function E_(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function b_(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ev extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new _v(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ma});u.uniforms.tEquirect.value=i;const h=new Sa(l,u),p=i.minFilter;return i.minFilter===wr&&(i.minFilter=Rn),new cy(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}function iT(o){let e=new WeakMap,i=new WeakMap,r=null;function l(_,E=!1){return _==null?null:E?h(_):u(_)}function u(_){if(_&&_.isTexture){const E=_.mapping;if(E===fh||E===hh)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new Ev(b.height);return C.fromEquirectangularTexture(o,_),e.set(_,C),_.addEventListener("dispose",d),p(C.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const E=_.mapping,b=E===fh||E===hh,C=E===Lr||E===Ns;if(b||C){let M=i.get(_);const x=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new M_(o)),M=b?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return b&&w&&w.height>0||C&&w&&m(w)?(r===null&&(r=new M_(o)),M=b?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",v),M.texture):null}}}return _}function p(_,E){return E===fh?_.mapping=Lr:E===hh&&(_.mapping=Ns),_}function m(_){let E=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&E++;return E===b}function d(_){const E=_.target;E.removeEventListener("dispose",d);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function v(_){const E=_.target;E.removeEventListener("dispose",v);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function S(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function aT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&qc("WebGLRenderer: "+r+" extension not supported."),l}}}function rT(o,e,i,r){const l={},u=new WeakMap;function h(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",h),delete l[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(S,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function d(S){const _=[],E=S.index,b=S.attributes.position;let C=0;if(b===void 0)return;if(E!==null){const w=E.array;C=E.version;for(let P=0,N=w.length;P<N;P+=3){const V=w[P+0],I=w[P+1],z=w[P+2];_.push(V,I,I,z,z,V)}}else{const w=b.array;C=b.version;for(let P=0,N=w.length/3-1;P<N;P+=3){const V=P+0,I=P+1,z=P+2;_.push(V,I,I,z,z,V)}}const M=new(b.count>=65535?dv:hv)(_,1);M.version=C;const x=u.get(S);x&&e.remove(x),u.set(S,M)}function v(S){const _=u.get(S);if(_){const E=S.index;E!==null&&_.version<E.version&&d(S)}else d(S);return u.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function sT(o,e,i){let r;function l(_){r=_}let u,h;function p(_){u=_.type,h=_.bytesPerElement}function m(_,E){o.drawElements(r,E,u,_*h),i.update(E,r,1)}function d(_,E,b){b!==0&&(o.drawElementsInstanced(r,E,u,_*h,b),i.update(E,r,b))}function v(_,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,_,0,b);let M=0;for(let x=0;x<b;x++)M+=E[x];i.update(M,r,1)}function S(_,E,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)d(_[x]/h,E[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,_,0,C,0,b);let x=0;for(let w=0;w<b;w++)x+=E[w]*C[w];i.update(x,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function oT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function lT(o,e,i){const r=new WeakMap,l=new nn;function u(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let _=r.get(p);if(_===void 0||_.count!==S){let dt=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",dt)};var E=dt;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let V=p.attributes.position.count*N,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*I*4*S),T=new cv(z,V,I,S);T.type=zi,T.needsUpdate=!0;const D=N*4;for(let H=0;H<S;H++){const tt=x[H],Z=w[H],K=P[H],Q=V*I*4*H;for(let L=0;L<tt.count;L++){const F=L*D;b===!0&&(l.fromBufferAttribute(tt,L),z[Q+F+0]=l.x,z[Q+F+1]=l.y,z[Q+F+2]=l.z,z[Q+F+3]=0),C===!0&&(l.fromBufferAttribute(Z,L),z[Q+F+4]=l.x,z[Q+F+5]=l.y,z[Q+F+6]=l.z,z[Q+F+7]=0),M===!0&&(l.fromBufferAttribute(K,L),z[Q+F+8]=l.x,z[Q+F+9]=l.y,z[Q+F+10]=l.z,z[Q+F+11]=K.itemSize===4?l.w:1)}}_={count:S,texture:T,size:new Be(V,I)},r.set(p,_),p.addEventListener("dispose",dt)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function cT(o,e,i,r,l){let u=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,_=e.get(d,S);if(u.get(_)!==v&&(e.update(_),u.set(_,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;u.get(E)!==v&&(E.update(),u.set(E,v))}return _}function p(){u=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const uT={[Y_]:"LINEAR_TONE_MAPPING",[j_]:"REINHARD_TONE_MAPPING",[Z_]:"CINEON_TONE_MAPPING",[K_]:"ACES_FILMIC_TONE_MAPPING",[J_]:"AGX_TONE_MAPPING",[$_]:"NEUTRAL_TONE_MAPPING",[Q_]:"CUSTOM_TONE_MAPPING"};function fT(o,e,i,r,l){const u=new Hi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Hi(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),p=new Xn;p.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const m=new sy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Sa(p,m),v=new Mv(-1,1,1,-1,0,1);let S=null,_=null,E=!1,b,C=null,M=[],x=!1;this.setSize=function(w,P){u.setSize(w,P),h.setSize(w,P);for(let N=0;N<M.length;N++){const V=M[N];V.setSize&&V.setSize(w,P)}},this.setEffects=function(w){M=w,x=M.length>0&&M[0].isRenderPass===!0;const P=u.width,N=u.height;for(let V=0;V<M.length;V++){const I=M[V];I.setSize&&I.setSize(P,N)}},this.begin=function(w,P){if(E||w.toneMapping===Ii&&M.length===0)return!1;if(C=P,P!==null){const N=P.width,V=P.height;(u.width!==N||u.height!==V)&&this.setSize(N,V)}return x===!1&&w.setRenderTarget(u),b=w.toneMapping,w.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(w,P){w.toneMapping=b,E=!0;let N=u,V=h;for(let I=0;I<M.length;I++){const z=M[I];if(z.enabled!==!1&&(z.render(w,V,N,P),z.needsSwap!==!1)){const T=N;N=V,V=T}}if(S!==w.outputColorSpace||_!==w.toneMapping){S=w.outputColorSpace,_=w.toneMapping,m.defines={},be.getTransfer(S)===ze&&(m.defines.SRGB_TRANSFER="");const I=uT[_];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(C),w.render(d,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),p.dispose(),m.dispose()}}const bv=new On,zd=new qo(1,1),Tv=new cv,Av=new PM,Rv=new _v,T_=[],A_=[],R_=new Float32Array(16),C_=new Float32Array(9),w_=new Float32Array(4);function Hs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=T_[l];if(u===void 0&&(u=new Float32Array(l),T_[l]=u),e!==0){r.toArray(u,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(u,p)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function tu(o,e){let i=A_[e];i===void 0&&(i=new Int32Array(e),A_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function hT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function gT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;w_.set(r),o.uniformMatrix2fv(this.addr,!1,w_),gn(i,r)}}function _T(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;C_.set(r),o.uniformMatrix3fv(this.addr,!1,C_),gn(i,r)}}function vT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;R_.set(r),o.uniformMatrix4fv(this.addr,!1,R_),gn(i,r)}}function xT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function ET(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function RT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(zd.compareFunction=i.isReversedDepthBuffer()?jd:Yd,u=zd):u=bv,i.setTexture2D(e||u,l)}function CT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Av,l)}function wT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Rv,l)}function DT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Tv,l)}function UT(o){switch(o){case 5126:return hT;case 35664:return dT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return yT;case 5125:return ET;case 36294:return bT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return DT}}function LT(o,e){o.uniform1fv(this.addr,e)}function NT(o,e){const i=Hs(e,this.size,2);o.uniform2fv(this.addr,i)}function OT(o,e){const i=Hs(e,this.size,3);o.uniform3fv(this.addr,i)}function PT(o,e){const i=Hs(e,this.size,4);o.uniform4fv(this.addr,i)}function FT(o,e){const i=Hs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function zT(o,e){const i=Hs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function BT(o,e){const i=Hs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function IT(o,e){o.uniform1iv(this.addr,e)}function HT(o,e){o.uniform2iv(this.addr,e)}function GT(o,e){o.uniform3iv(this.addr,e)}function VT(o,e){o.uniform4iv(this.addr,e)}function kT(o,e){o.uniform1uiv(this.addr,e)}function XT(o,e){o.uniform2uiv(this.addr,e)}function WT(o,e){o.uniform3uiv(this.addr,e)}function qT(o,e){o.uniform4uiv(this.addr,e)}function YT(o,e,i){const r=this.cache,l=e.length,u=tu(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=zd:h=bv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,u[p])}function jT(o,e,i){const r=this.cache,l=e.length,u=tu(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Av,u[h])}function ZT(o,e,i){const r=this.cache,l=e.length,u=tu(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Rv,u[h])}function KT(o,e,i){const r=this.cache,l=e.length,u=tu(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Tv,u[h])}function QT(o){switch(o){case 5126:return LT;case 35664:return NT;case 35665:return OT;case 35666:return PT;case 35674:return FT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return IT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return kT;case 36294:return XT;case 36295:return WT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return KT}}class JT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=UT(i.type)}}class $T{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=QT(i.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function D_(o,e){o.seq.push(e),o.map[e.id]=e}function e1(o,e,i){const r=o.name,l=r.length;for(kh.lastIndex=0;;){const u=kh.exec(r),h=kh.lastIndex;let p=u[1];const m=u[2]==="]",d=u[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){D_(i,d===void 0?new JT(p,o,e):new $T(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new t1(p),D_(i,S)),i=S}}}class Vc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);e1(p,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function U_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const n1=37297;let i1=0;function a1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const p=h+1;r.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const L_=new he;function r1(o){be._getMatrix(L_,be.workingColorSpace,o);const e=`mat3( ${L_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case kc:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function N_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+a1(o.getShaderSource(e),p)}else return u}function s1(o,e){const i=r1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const o1={[Y_]:"Linear",[j_]:"Reinhard",[Z_]:"Cineon",[K_]:"ACESFilmic",[J_]:"AgX",[$_]:"Neutral",[Q_]:"Custom"};function l1(o,e){const i=o1[e];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new rt;function c1(){be.getLuminanceCoefficients(Fc);const o=Fc.x.toFixed(4),e=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function f1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function h1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Vo(o){return o!==""}function O_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(o){return o.replace(d1,m1)}const p1=new Map;function m1(o,e){let i=de[e];if(i===void 0){const r=p1.get(e);if(r!==void 0)i=de[r],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bd(i)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(o){return o.replace(g1,_1)}function _1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function z_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const v1={[zc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function x1(o){return v1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S1={[Lr]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Qc]:"ENVMAP_TYPE_CUBE_UV"};function M1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":S1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const y1={[Ns]:"ENVMAP_MODE_REFRACTION"};function E1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":y1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b1={[q_]:"ENVMAP_BLENDING_MULTIPLY",[dM]:"ENVMAP_BLENDING_MIX",[pM]:"ENVMAP_BLENDING_ADD"};function T1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":b1[o.combine]||"ENVMAP_BLENDING_NONE"}function A1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function R1(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=x1(i),d=M1(i),v=E1(i),S=T1(i),_=A1(i),E=u1(i),b=f1(u),C=l.createProgram();let M,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),x.length>0&&(x+=`
`)):(M=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),x=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ii?"#define TONE_MAPPING":"",i.toneMapping!==Ii?de.tonemapping_pars_fragment:"",i.toneMapping!==Ii?l1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,s1("linearToOutputTexel",i.outputColorSpace),c1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Bd(h),h=O_(h,i),h=P_(h,i),p=Bd(p),p=O_(p,i),p=P_(p,i),h=F_(h),p=F_(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=w+M+h,N=w+x+p,V=U_(l,l.VERTEX_SHADER,P),I=U_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,V),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(H){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(C)||"",Z=l.getShaderInfoLog(V)||"",K=l.getShaderInfoLog(I)||"",Q=tt.trim(),L=Z.trim(),F=K.trim();let nt=!0,ft=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,I);else{const Mt=N_(l,V,"vertex"),O=N_(l,I,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+Mt+`
`+O)}else Q!==""?ie("WebGLProgram: Program Info Log:",Q):(L===""||F==="")&&(ft=!1);ft&&(H.diagnostics={runnable:nt,programLog:Q,vertexShader:{log:L,prefix:M},fragmentShader:{log:F,prefix:x}})}l.deleteShader(V),l.deleteShader(I),T=new Vc(l,C),D=h1(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let dt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return dt===!1&&(dt=l.getProgramParameter(C,n1)),dt},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=I,this}let C1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new D1(e),i.set(e,r)),r}}class D1{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}}function U1(o,e,i,r,l,u){const h=new uv,p=new w1,m=new Set,d=[],v=new Map,S=r.logarithmicDepthBuffer;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,D,dt,H,tt){const Z=H.fog,K=tt.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,F=e.get(T.envMap||Q,L),nt=F&&F.mapping===Qc?F.image.height:null,ft=E[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const Mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,O=Mt!==void 0?Mt.length:0;let Y=0;K.morphAttributes.position!==void 0&&(Y=1),K.morphAttributes.normal!==void 0&&(Y=2),K.morphAttributes.color!==void 0&&(Y=3);let gt,Rt,Lt,at;if(ft){const Ee=Fi[ft];gt=Ee.vertexShader,Rt=Ee.fragmentShader}else gt=T.vertexShader,Rt=T.fragmentShader,p.update(T),Lt=p.getVertexShaderID(T),at=p.getFragmentShaderID(T);const vt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),kt=tt.isInstancedMesh===!0,Kt=tt.isBatchedMesh===!0,$t=!!T.map,Ke=!!T.matcap,_e=!!F,pe=!!T.aoMap,we=!!T.lightMap,oe=!!T.bumpMap,Ze=!!T.normalMap,G=!!T.displacementMap,We=!!T.emissiveMap,ye=!!T.metalnessMap,Le=!!T.roughnessMap,qt=T.anisotropy>0,U=T.clearcoat>0,y=T.dispersion>0,q=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ut=qt&&!!T.anisotropyMap,Xt=U&&!!T.clearcoatMap,wt=U&&!!T.clearcoatNormalMap,Zt=U&&!!T.clearcoatRoughnessMap,te=q&&!!T.iridescenceMap,bt=q&&!!T.iridescenceThicknessMap,yt=pt&&!!T.sheenColorMap,Pt=pt&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ft=!!T.specularColorMap,ce=!!T.specularIntensityMap,W=xt&&!!T.transmissionMap,Ct=xt&&!!T.thicknessMap,At=!!T.gradientMap,zt=!!T.alphaMap,Et=T.alphaTest>0,ct=!!T.alphaHash,It=!!T.extensions;let ne=Ii;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Oe={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Lt,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&tt._colorsTexture!==null,instancing:kt,instancingColor:kt&&tt.instanceColor!==null,instancingMorph:kt&&tt.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ps,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Ke,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:nt,aoMap:pe,lightMap:we,bumpMap:oe,normalMap:Ze,displacementMap:G,emissiveMap:We,normalMapObjectSpace:Ze&&T.normalMapType===vM,normalMapTangentSpace:Ze&&T.normalMapType===_M,metalnessMap:ye,roughnessMap:Le,anisotropy:qt,anisotropyMap:ut,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:y,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:yt,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Ft,specularIntensityMap:ce,transmission:xt,transmissionMap:W,thicknessMap:Ct,gradientMap:At,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:zt,alphaTest:Et,alphaHash:ct,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:we&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Ze&&b(T.normalMap.channel),displacementMapUv:G&&b(T.displacementMap.channel),emissiveMapUv:We&&b(T.emissiveMap.channel),metalnessMapUv:ye&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:ut&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Ot&&b(T.specularMap.channel),specularColorMapUv:Ft&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Ct&&b(T.thicknessMap.channel),alphaMapUv:zt&&b(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ze||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!K.attributes.uv&&($t||zt),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&Ze===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Tt,skinning:tt.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&dt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:We&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===da,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function M(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const dt in T.defines)D.push(dt),D.push(T.defines[dt]);return T.isRawShaderMaterial===!1&&(x(D,T),w(D,T),D.push(o.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function x(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function w(T,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),T.push(h.mask)}function P(T){const D=E[T.type];let dt;if(D){const H=Fi[D];dt=iy.clone(H.uniforms)}else dt=T.uniforms;return dt}function N(T,D){let dt=v.get(D);return dt!==void 0?++dt.usedTimes:(dt=new R1(o,D,T,l),d.push(dt),v.set(D,dt)),dt}function V(T){if(--T.usedTimes===0){const D=d.indexOf(T);d[D]=d[d.length-1],d.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:V,releaseShaderCache:I,programs:d,dispose:z}}function L1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function r(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function N1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function B_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function I_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,b,C,M,x){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:E,material:b,materialVariant:h(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:x},o[e]=w):(w.id=_.id,w.object=_,w.geometry=E,w.material=b,w.materialVariant=h(_),w.groupOrder=C,w.renderOrder=_.renderOrder,w.z=M,w.group=x),e++,w}function m(_,E,b,C,M,x){const w=p(_,E,b,C,M,x);b.transmission>0?r.push(w):b.transparent===!0?l.push(w):i.push(w)}function d(_,E,b,C,M,x){const w=p(_,E,b,C,M,x);b.transmission>0?r.unshift(w):b.transparent===!0?l.unshift(w):i.unshift(w)}function v(_,E){i.length>1&&i.sort(_||N1),r.length>1&&r.sort(E||B_),l.length>1&&l.sort(E||B_)}function S(){for(let _=e,E=o.length;_<E;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:d,finish:S,sort:v}}function O1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new I_,o.set(r,[h])):l>=u.length?(h=new I_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function P1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ue};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function F1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let z1=0;function B1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function I1(o){const e=new P1,i=F1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new rt);const l=new rt,u=new $e,h=new $e;function p(d){let v=0,S=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let E=0,b=0,C=0,M=0,x=0,w=0,P=0,N=0,V=0,I=0,z=0;d.sort(B1);for(let D=0,dt=d.length;D<dt;D++){const H=d[D],tt=H.color,Z=H.intensity,K=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Os?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=tt.r*Z,S+=tt.g*Z,_+=tt.b*Z;else if(H.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(H.sh.coefficients[L],Z);z++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,nt=i.get(H);nt.shadowIntensity=F.intensity,nt.shadowBias=F.bias,nt.shadowNormalBias=F.normalBias,nt.shadowRadius=F.radius,nt.shadowMapSize=F.mapSize,r.directionalShadow[E]=nt,r.directionalShadowMap[E]=Q,r.directionalShadowMatrix[E]=H.shadow.matrix,w++}r.directional[E]=L,E++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(tt).multiplyScalar(Z),L.distance=K,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,r.spot[C]=L;const F=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,F.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[C]=F.matrix,H.castShadow){const nt=i.get(H);nt.shadowIntensity=F.intensity,nt.shadowBias=F.bias,nt.shadowNormalBias=F.normalBias,nt.shadowRadius=F.radius,nt.shadowMapSize=F.mapSize,r.spotShadow[C]=nt,r.spotShadowMap[C]=Q,N++}C++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy(tt).multiplyScalar(Z),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=L,M++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const F=H.shadow,nt=i.get(H);nt.shadowIntensity=F.intensity,nt.shadowBias=F.bias,nt.shadowNormalBias=F.normalBias,nt.shadowRadius=F.radius,nt.shadowMapSize=F.mapSize,nt.shadowCameraNear=F.camera.near,nt.shadowCameraFar=F.camera.far,r.pointShadow[b]=nt,r.pointShadowMap[b]=Q,r.pointShadowMatrix[b]=H.shadow.matrix,P++}r.point[b]=L,b++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(Z),L.groundColor.copy(H.groundColor).multiplyScalar(Z),r.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==w||T.numPointShadows!==P||T.numSpotShadows!==N||T.numSpotMaps!==V||T.numLightProbes!==z)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,T.directionalLength=E,T.pointLength=b,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=w,T.numPointShadows=P,T.numSpotShadows=N,T.numSpotMaps=V,T.numLightProbes=z,r.version=z1++)}function m(d,v){let S=0,_=0,E=0,b=0,C=0;const M=v.matrixWorldInverse;for(let x=0,w=d.length;x<w;x++){const P=d[x];if(P.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(P.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:r}}function H_(o){const e=new I1(o),i=[],r=[];function l(v){d.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function p(){e.setup(i)}function m(v){e.setupView(i,v)}const d={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:h}}function H1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let p;return h===void 0?(p=new H_(o),e.set(l,[p])):u>=h.length?(p=new H_(o),h.push(p)):p=h[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k1=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],X1=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],G_=new $e,Ho=new rt,Xh=new rt;function W1(o,e,i){let r=new mv;const l=new Be,u=new Be,h=new nn,p=new oy,m=new ly,d={},v=i.maxTextureSize,S={[er]:kn,[kn]:er,[da]:da},_=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:G1,fragmentShader:V1}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const b=new Xn;b.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Sa(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let x=this.type;this.render=function(I,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===jS&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);const D=o.getRenderTarget(),dt=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(ma),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const Z=x!==this.type;Z&&z.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Q=>Q.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Q=I.length;K<Q;K++){const L=I[K],F=L.shadow;if(F===void 0){ie("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const nt=F.getFrameExtents();l.multiply(nt),u.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/nt.x),l.x=u.x*nt.x,F.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/nt.y),l.y=u.y*nt.y,F.mapSize.y=u.y));const ft=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ft,F.map===null||Z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Go){if(L.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Hi(l.x,l.y,{format:Os,type:_a,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new qo(l.x,l.y,zi),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=va,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En}else L.isPointLight?(F.map=new Ev(l.x),F.map.depthTexture=new ey(l.x,Gi)):(F.map=new Hi(l.x,l.y),F.map.depthTexture=new qo(l.x,l.y,Gi)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=va,this.type===zc?(F.map.depthTexture.compareFunction=ft?jd:Yd,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En);F.camera.updateProjectionMatrix()}const Mt=F.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Mt;O++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,O),o.clear();else{O===0&&(o.setRenderTarget(F.map),o.clear());const Y=F.getViewport(O);h.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),tt.viewport(h)}if(L.isPointLight){const Y=F.camera,gt=F.matrix,Rt=L.distance||Y.far;Rt!==Y.far&&(Y.far=Rt,Y.updateProjectionMatrix()),Ho.setFromMatrixPosition(L.matrixWorld),Y.position.copy(Ho),Xh.copy(Y.position),Xh.add(k1[O]),Y.up.copy(X1[O]),Y.lookAt(Xh),Y.updateMatrixWorld(),gt.makeTranslation(-Ho.x,-Ho.y,-Ho.z),G_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(G_,Y.coordinateSystem,Y.reversedDepth)}else F.updateMatrices(L);r=F.getFrustum(),N(z,T,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===Go&&w(F,T),F.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,dt,H)};function w(I,z){const T=e.update(C);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Hi(l.x,l.y,{format:Os,type:_a})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,T,_,C,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,T,E,C,null)}function P(I,z,T,D){let dt=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)dt=H;else if(dt=T.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const tt=dt.uuid,Z=z.uuid;let K=d[tt];K===void 0&&(K={},d[tt]=K);let Q=K[Z];Q===void 0&&(Q=dt.clone(),K[Z]=Q,z.addEventListener("dispose",V)),dt=Q}if(dt.visible=z.visible,dt.wireframe=z.wireframe,D===Go?dt.side=z.shadowSide!==null?z.shadowSide:z.side:dt.side=z.shadowSide!==null?z.shadowSide:S[z.side],dt.alphaMap=z.alphaMap,dt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,dt.map=z.map,dt.clipShadows=z.clipShadows,dt.clippingPlanes=z.clippingPlanes,dt.clipIntersection=z.clipIntersection,dt.displacementMap=z.displacementMap,dt.displacementScale=z.displacementScale,dt.displacementBias=z.displacementBias,dt.wireframeLinewidth=z.wireframeLinewidth,dt.linewidth=z.linewidth,T.isPointLight===!0&&dt.isMeshDistanceMaterial===!0){const tt=o.properties.get(dt);tt.light=T}return dt}function N(I,z,T,D,dt){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&dt===Go)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const Z=e.update(I),K=I.material;if(Array.isArray(K)){const Q=Z.groups;for(let L=0,F=Q.length;L<F;L++){const nt=Q[L],ft=K[nt.materialIndex];if(ft&&ft.visible){const Mt=P(I,ft,D,dt);I.onBeforeShadow(o,I,z,T,Z,Mt,nt),o.renderBufferDirect(T,null,Z,Mt,I,nt),I.onAfterShadow(o,I,z,T,Z,Mt,nt)}}}else if(K.visible){const Q=P(I,K,D,dt);I.onBeforeShadow(o,I,z,T,Z,Q,null),o.renderBufferDirect(T,null,Z,Q,I,null),I.onAfterShadow(o,I,z,T,Z,Q,null)}}const tt=I.children;for(let Z=0,K=tt.length;Z<K;Z++)N(tt[Z],z,T,D,dt)}function V(I){I.target.removeEventListener("dispose",V);for(const T in d){const D=d[T],dt=I.target.uuid;dt in D&&(D[dt].dispose(),delete D[dt])}}}function q1(o,e){function i(){let W=!1;const Ct=new nn;let At=null;const zt=new nn(0,0,0,0);return{setMask:function(Et){At!==Et&&!W&&(o.colorMask(Et,Et,Et,Et),At=Et)},setLocked:function(Et){W=Et},setClear:function(Et,ct,It,ne,Oe){Oe===!0&&(Et*=ne,ct*=ne,It*=ne),Ct.set(Et,ct,It,ne),zt.equals(Ct)===!1&&(o.clearColor(Et,ct,It,ne),zt.copy(Ct))},reset:function(){W=!1,At=null,zt.set(-1,0,0,0)}}}function r(){let W=!1,Ct=!1,At=null,zt=null,Et=null;return{setReversed:function(ct){if(Ct!==ct){const It=e.get("EXT_clip_control");ct?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ct=ct;const ne=Et;Et=null,this.setClear(ne)}},getReversed:function(){return Ct},setTest:function(ct){ct?vt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ct){At!==ct&&!W&&(o.depthMask(ct),At=ct)},setFunc:function(ct){if(Ct&&(ct=CM[ct]),zt!==ct){switch(ct){case Yh:o.depthFunc(o.NEVER);break;case jh:o.depthFunc(o.ALWAYS);break;case Zh:o.depthFunc(o.LESS);break;case Ls:o.depthFunc(o.LEQUAL);break;case Kh:o.depthFunc(o.EQUAL);break;case Qh:o.depthFunc(o.GEQUAL);break;case Jh:o.depthFunc(o.GREATER);break;case $h:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=ct}},setLocked:function(ct){W=ct},setClear:function(ct){Et!==ct&&(Et=ct,Ct&&(ct=1-ct),o.clearDepth(ct))},reset:function(){W=!1,At=null,zt=null,Et=null,Ct=!1}}}function l(){let W=!1,Ct=null,At=null,zt=null,Et=null,ct=null,It=null,ne=null,Oe=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ee){Ct!==Ee&&!W&&(o.stencilMask(Ee),Ct=Ee)},setFunc:function(Ee,Cn,gi){(At!==Ee||zt!==Cn||Et!==gi)&&(o.stencilFunc(Ee,Cn,gi),At=Ee,zt=Cn,Et=gi)},setOp:function(Ee,Cn,gi){(ct!==Ee||It!==Cn||ne!==gi)&&(o.stencilOp(Ee,Cn,gi),ct=Ee,It=Cn,ne=gi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Oe!==Ee&&(o.clearStencil(Ee),Oe=Ee)},reset:function(){W=!1,Ct=null,At=null,zt=null,Et=null,ct=null,It=null,ne=null,Oe=null}}}const u=new i,h=new r,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},_=new WeakMap,E=[],b=null,C=!1,M=null,x=null,w=null,P=null,N=null,V=null,I=null,z=new Ue(0,0,0),T=0,D=!1,dt=null,H=null,tt=null,Z=null,K=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(nt)[1]),L=F>=1):nt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),L=F>=2);let ft=null,Mt={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),gt=new nn().fromArray(O),Rt=new nn().fromArray(Y);function Lt(W,Ct,At,zt){const Et=new Uint8Array(4),ct=o.createTexture();o.bindTexture(W,ct),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<At;It++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Ct+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return ct}const at={};at[o.TEXTURE_2D]=Lt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=Lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=Lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=Lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Ls),oe(!1),Ze(H0),vt(o.CULL_FACE),pe(ma);function vt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Tt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function kt(W,Ct){return S[W]!==Ct?(o.bindFramebuffer(W,Ct),S[W]=Ct,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ct),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(W,Ct){let At=E,zt=!1;if(W){At=_.get(Ct),At===void 0&&(At=[],_.set(Ct,At));const Et=W.textures;if(At.length!==Et.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,It=Et.length;ct<It;ct++)At[ct]=o.COLOR_ATTACHMENT0+ct;At.length=Et.length,zt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,zt=!0);zt&&o.drawBuffers(At)}function $t(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const Ke={[Rr]:o.FUNC_ADD,[KS]:o.FUNC_SUBTRACT,[QS]:o.FUNC_REVERSE_SUBTRACT};Ke[JS]=o.MIN,Ke[$S]=o.MAX;const _e={[tM]:o.ZERO,[eM]:o.ONE,[nM]:o.SRC_COLOR,[Wh]:o.SRC_ALPHA,[lM]:o.SRC_ALPHA_SATURATE,[sM]:o.DST_COLOR,[aM]:o.DST_ALPHA,[iM]:o.ONE_MINUS_SRC_COLOR,[qh]:o.ONE_MINUS_SRC_ALPHA,[oM]:o.ONE_MINUS_DST_COLOR,[rM]:o.ONE_MINUS_DST_ALPHA,[cM]:o.CONSTANT_COLOR,[uM]:o.ONE_MINUS_CONSTANT_COLOR,[fM]:o.CONSTANT_ALPHA,[hM]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Ct,At,zt,Et,ct,It,ne,Oe,Ee){if(W===ma){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),W!==ZS){if(W!==M||Ee!==D){if((x!==Rr||N!==Rr)&&(o.blendEquation(o.FUNC_ADD),x=Rr,N=Rr),Ee)switch(W){case Ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case G0:o.blendFunc(o.ONE,o.ONE);break;case V0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case k0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case G0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case V0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}w=null,P=null,V=null,I=null,z.set(0,0,0),T=0,M=W,D=Ee}return}Et=Et||Ct,ct=ct||At,It=It||zt,(Ct!==x||Et!==N)&&(o.blendEquationSeparate(Ke[Ct],Ke[Et]),x=Ct,N=Et),(At!==w||zt!==P||ct!==V||It!==I)&&(o.blendFuncSeparate(_e[At],_e[zt],_e[ct],_e[It]),w=At,P=zt,V=ct,I=It),(ne.equals(z)===!1||Oe!==T)&&(o.blendColor(ne.r,ne.g,ne.b,Oe),z.copy(ne),T=Oe),M=W,D=!1}function we(W,Ct){W.side===da?Tt(o.CULL_FACE):vt(o.CULL_FACE);let At=W.side===kn;Ct&&(At=!At),oe(At),W.blending===Ds&&W.transparent===!1?pe(ma):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const zt=W.stencilWrite;p.setTest(zt),zt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){dt!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),dt=W)}function Ze(W){W!==qS?(vt(o.CULL_FACE),W!==H&&(W===H0?o.cullFace(o.BACK):W===YS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),H=W}function G(W){W!==tt&&(L&&o.lineWidth(W),tt=W)}function We(W,Ct,At){W?(vt(o.POLYGON_OFFSET_FILL),(Z!==Ct||K!==At)&&(Z=Ct,K=At,h.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,At))):Tt(o.POLYGON_OFFSET_FILL)}function ye(W){W?vt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Le(W){W===void 0&&(W=o.TEXTURE0+Q-1),ft!==W&&(o.activeTexture(W),ft=W)}function qt(W,Ct,At){At===void 0&&(ft===null?At=o.TEXTURE0+Q-1:At=ft);let zt=Mt[At];zt===void 0&&(zt={type:void 0,texture:void 0},Mt[At]=zt),(zt.type!==W||zt.texture!==Ct)&&(ft!==At&&(o.activeTexture(At),ft=At),o.bindTexture(W,Ct||at[W]),zt.type=W,zt.texture=Ct)}function U(){const W=Mt[ft];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function wt(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Zt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function bt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function yt(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Pt(W){Rt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Ot(W,Ct){let At=d.get(Ct);At===void 0&&(At=new WeakMap,d.set(Ct,At));let zt=At.get(W);zt===void 0&&(zt=o.getUniformBlockIndex(Ct,W.name),At.set(W,zt))}function Ft(W,Ct){const zt=d.get(Ct).get(W);m.get(Ct)!==zt&&(o.uniformBlockBinding(Ct,zt,W.__bindingPointIndex),m.set(Ct,zt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ft=null,Mt={},S={},_=new WeakMap,E=[],b=null,C=!1,M=null,x=null,w=null,P=null,N=null,V=null,I=null,z=new Ue(0,0,0),T=0,D=!1,dt=null,H=null,tt=null,Z=null,K=null,gt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:vt,disable:Tt,bindFramebuffer:kt,drawBuffers:Kt,useProgram:$t,setBlending:pe,setMaterial:we,setFlipSided:oe,setCullFace:Ze,setLineWidth:G,setPolygonOffset:We,setScissorTest:ye,activeTexture:Le,bindTexture:qt,unbindTexture:U,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:te,texImage3D:bt,updateUBOMapping:Ot,uniformBlockBinding:Ft,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xt,scissor:yt,viewport:Pt,reset:ce}}function Y1(o,e,i,r,l,u,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Be,v=new WeakMap;let S;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,y){return E?new OffscreenCanvas(U,y):Wc("canvas")}function C(U,y,q){let pt=1;const xt=qt(U);if((xt.width>q||xt.height>q)&&(pt=q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);S===void 0&&(S=b(ut,Xt));const wt=y?b(ut,Xt):S;return wt.width=ut,wt.height=Xt,wt.getContext("2d").drawImage(U,0,0,ut,Xt),ie("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Xt+")."),wt}else return"data"in U&&ie("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,y,q,pt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=y;if(y===o.RED&&(q===o.FLOAT&&(ut=o.R32F),q===o.HALF_FLOAT&&(ut=o.R16F),q===o.UNSIGNED_BYTE&&(ut=o.R8)),y===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.R8UI),q===o.UNSIGNED_SHORT&&(ut=o.R16UI),q===o.UNSIGNED_INT&&(ut=o.R32UI),q===o.BYTE&&(ut=o.R8I),q===o.SHORT&&(ut=o.R16I),q===o.INT&&(ut=o.R32I)),y===o.RG&&(q===o.FLOAT&&(ut=o.RG32F),q===o.HALF_FLOAT&&(ut=o.RG16F),q===o.UNSIGNED_BYTE&&(ut=o.RG8)),y===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),q===o.UNSIGNED_INT&&(ut=o.RG32UI),q===o.BYTE&&(ut=o.RG8I),q===o.SHORT&&(ut=o.RG16I),q===o.INT&&(ut=o.RG32I)),y===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),q===o.UNSIGNED_INT&&(ut=o.RGB32UI),q===o.BYTE&&(ut=o.RGB8I),q===o.SHORT&&(ut=o.RGB16I),q===o.INT&&(ut=o.RGB32I)),y===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),q===o.BYTE&&(ut=o.RGBA8I),q===o.SHORT&&(ut=o.RGBA16I),q===o.INT&&(ut=o.RGBA32I)),y===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),y===o.RGBA){const Xt=xt?kc:be.getTransfer(pt);q===o.FLOAT&&(ut=o.RGBA32F),q===o.HALF_FLOAT&&(ut=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ut=Xt===ze?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function N(U,y){let q;return U?y===null||y===Gi||y===Wo?q=o.DEPTH24_STENCIL8:y===zi?q=o.DEPTH32F_STENCIL8:y===Xo&&(q=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===Wo?q=o.DEPTH_COMPONENT24:y===zi?q=o.DEPTH_COMPONENT32F:y===Xo&&(q=o.DEPTH_COMPONENT16),q}function V(U,y){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function I(U){const y=U.target;y.removeEventListener("dispose",I),T(y),y.isVideoTexture&&v.delete(y)}function z(U){const y=U.target;y.removeEventListener("dispose",z),dt(y)}function T(U){const y=r.get(U);if(y.__webglInit===void 0)return;const q=U.source,pt=_.get(q);if(pt){const xt=pt[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(pt).length===0&&_.delete(q)}r.remove(U)}function D(U){const y=r.get(U);o.deleteTexture(y.__webglTexture);const q=U.source,pt=_.get(q);delete pt[y.__cacheKey],h.memory.textures--}function dt(U){const y=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(y.__webglFramebuffer[pt]))for(let xt=0;xt<y.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(y.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(y.__webglFramebuffer[pt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[pt])}else{if(Array.isArray(y.__webglFramebuffer))for(let pt=0;pt<y.__webglFramebuffer.length;pt++)o.deleteFramebuffer(y.__webglFramebuffer[pt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pt=0;pt<y.__webglColorRenderbuffer.length;pt++)y.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[pt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=U.textures;for(let pt=0,xt=q.length;pt<xt;pt++){const ut=r.get(q[pt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(q[pt])}r.remove(U)}let H=0;function tt(){H=0}function Z(){const U=H;return U>=l.maxTextures&&ie("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function K(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function Q(U,y){const q=r.get(U);if(U.isVideoTexture&&ye(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const pt=U.image;if(pt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{at(q,U,y);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+y)}function L(U,y){const q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){at(q,U,y);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+y)}function F(U,y){const q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){at(q,U,y);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+y)}function nt(U,y){const q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){vt(q,U,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+y)}const ft={[td]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[ed]:o.MIRRORED_REPEAT},Mt={[En]:o.NEAREST,[mM]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[Rn]:o.LINEAR,[dh]:o.LINEAR_MIPMAP_NEAREST,[wr]:o.LINEAR_MIPMAP_LINEAR},O={[xM]:o.NEVER,[bM]:o.ALWAYS,[SM]:o.LESS,[Yd]:o.LEQUAL,[MM]:o.EQUAL,[jd]:o.GEQUAL,[yM]:o.GREATER,[EM]:o.NOTEQUAL};function Y(U,y){if(y.type===zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===dh||y.magFilter===uc||y.magFilter===wr||y.minFilter===Rn||y.minFilter===dh||y.minFilter===uc||y.minFilter===wr)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ft[y.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ft[y.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ft[y.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Mt[y.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Mt[y.minFilter]),y.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==uc&&y.minFilter!==wr||y.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function gt(U,y){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",I));const pt=y.source;let xt=_.get(pt);xt===void 0&&(xt={},_.set(pt,xt));const ut=K(y);if(ut!==U.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),xt[ut].usedTimes++;const Xt=xt[U.__cacheKey];Xt!==void 0&&(xt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(y)),U.__cacheKey=ut,U.__webglTexture=xt[ut].texture}return q}function Rt(U,y,q){return Math.floor(Math.floor(U/q)/y)}function Lt(U,y,q,pt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,q,pt,y.data);else{ut.sort((bt,yt)=>bt.start-yt.start);let Xt=0;for(let bt=1;bt<ut.length;bt++){const yt=ut[Xt],Pt=ut[bt],Ot=yt.start+yt.count,Ft=Rt(Pt.start,y.width,4),ce=Rt(yt.start,y.width,4);Pt.start<=Ot+1&&Ft===ce&&Rt(Pt.start+Pt.count-1,y.width,4)===Ft?yt.count=Math.max(yt.count,Pt.start+Pt.count-yt.start):(++Xt,ut[Xt]=Pt)}ut.length=Xt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let bt=0,yt=ut.length;bt<yt;bt++){const Pt=ut[bt],Ot=Math.floor(Pt.start/4),Ft=Math.ceil(Pt.count/4),ce=Ot%y.width,W=Math.floor(Ot/y.width),Ct=Ft,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Ct,At,q,pt,y.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function at(U,y,q){let pt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=gt(U,y),ut=y.source;i.bindTexture(pt,U.__webglTexture,o.TEXTURE0+q);const Xt=r.get(ut);if(ut.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+q);const wt=be.getPrimaries(be.workingColorSpace),Zt=y.colorSpace===$a?null:be.getPrimaries(y.colorSpace),te=y.colorSpace===$a||wt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let bt=C(y.image,!1,l.maxTextureSize);bt=Le(y,bt);const yt=u.convert(y.format,y.colorSpace),Pt=u.convert(y.type);let Ot=P(y.internalFormat,yt,Pt,y.colorSpace,y.isVideoTexture);Y(pt,y);let Ft;const ce=y.mipmaps,W=y.isVideoTexture!==!0,Ct=Xt.__version===void 0||xt===!0,At=ut.dataReady,zt=V(y,bt);if(y.isDepthTexture)Ot=N(y.format===Dr,y.type),Ct&&(W?i.texStorage2D(o.TEXTURE_2D,1,Ot,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,bt.width,bt.height,0,yt,Pt,null));else if(y.isDataTexture)if(ce.length>0){W&&Ct&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,ce[0].width,ce[0].height);for(let Et=0,ct=ce.length;Et<ct;Et++)Ft=ce[Et],W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,yt,Pt,Ft.data):i.texImage2D(o.TEXTURE_2D,Et,Ot,Ft.width,Ft.height,0,yt,Pt,Ft.data);y.generateMipmaps=!1}else W?(Ct&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,bt.width,bt.height),At&&Lt(y,bt,yt,Pt)):i.texImage2D(o.TEXTURE_2D,0,Ot,bt.width,bt.height,0,yt,Pt,bt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,ce[0].width,ce[0].height,bt.depth);for(let Et=0,ct=ce.length;Et<ct;Et++)if(Ft=ce[Et],y.format!==Ri)if(yt!==null)if(W){if(At)if(y.layerUpdates.size>0){const It=v_(Ft.width,Ft.height,y.format,y.type);for(const ne of y.layerUpdates){const Oe=Ft.data.subarray(ne*It/Ft.data.BYTES_PER_ELEMENT,(ne+1)*It/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ne,Ft.width,Ft.height,1,yt,Oe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,yt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Ot,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,yt,Pt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Ot,Ft.width,Ft.height,bt.depth,0,yt,Pt,Ft.data)}else{W&&Ct&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,ce[0].width,ce[0].height);for(let Et=0,ct=ce.length;Et<ct;Et++)Ft=ce[Et],y.format!==Ri?yt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,yt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Ot,Ft.width,Ft.height,0,Ft.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,yt,Pt,Ft.data):i.texImage2D(o.TEXTURE_2D,Et,Ot,Ft.width,Ft.height,0,yt,Pt,Ft.data)}else if(y.isDataArrayTexture)if(W){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,bt.width,bt.height,bt.depth),At)if(y.layerUpdates.size>0){const Et=v_(bt.width,bt.height,y.format,y.type);for(const ct of y.layerUpdates){const It=bt.data.subarray(ct*Et/bt.data.BYTES_PER_ELEMENT,(ct+1)*Et/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,bt.width,bt.height,1,yt,Pt,It)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,yt,Pt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,bt.width,bt.height,bt.depth,0,yt,Pt,bt.data);else if(y.isData3DTexture)W?(Ct&&i.texStorage3D(o.TEXTURE_3D,zt,Ot,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,yt,Pt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,bt.width,bt.height,bt.depth,0,yt,Pt,bt.data);else if(y.isFramebufferTexture){if(Ct)if(W)i.texStorage2D(o.TEXTURE_2D,zt,Ot,bt.width,bt.height);else{let Et=bt.width,ct=bt.height;for(let It=0;It<zt;It++)i.texImage2D(o.TEXTURE_2D,It,Ot,Et,ct,0,yt,Pt,null),Et>>=1,ct>>=1}}else if(ce.length>0){if(W&&Ct){const Et=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,zt,Ot,Et.width,Et.height)}for(let Et=0,ct=ce.length;Et<ct;Et++)Ft=ce[Et],W?At&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,yt,Pt,Ft):i.texImage2D(o.TEXTURE_2D,Et,Ot,yt,Pt,Ft);y.generateMipmaps=!1}else if(W){if(Ct){const Et=qt(bt);i.texStorage2D(o.TEXTURE_2D,zt,Ot,Et.width,Et.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt,Pt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,yt,Pt,bt);M(y)&&x(pt),Xt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function vt(U,y,q){if(y.image.length!==6)return;const pt=gt(U,y),xt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+q);const ut=r.get(xt);if(xt.version!==ut.__version||pt===!0){i.activeTexture(o.TEXTURE0+q);const Xt=be.getPrimaries(be.workingColorSpace),wt=y.colorSpace===$a?null:be.getPrimaries(y.colorSpace),Zt=y.colorSpace===$a||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,bt=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!te&&!bt?yt[ct]=C(y.image[ct],!0,l.maxCubemapSize):yt[ct]=bt?y.image[ct].image:y.image[ct],yt[ct]=Le(y,yt[ct]);const Pt=yt[0],Ot=u.convert(y.format,y.colorSpace),Ft=u.convert(y.type),ce=P(y.internalFormat,Ot,Ft,y.colorSpace),W=y.isVideoTexture!==!0,Ct=ut.__version===void 0||pt===!0,At=xt.dataReady;let zt=V(y,Pt);Y(o.TEXTURE_CUBE_MAP,y);let Et;if(te){W&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,Pt.width,Pt.height);for(let ct=0;ct<6;ct++){Et=yt[ct].mipmaps;for(let It=0;It<Et.length;It++){const ne=Et[It];y.format!==Ri?Ot!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,ne.width,ne.height,Ot,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ce,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,ne.width,ne.height,Ot,Ft,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ce,ne.width,ne.height,0,Ot,Ft,ne.data)}}}else{if(Et=y.mipmaps,W&&Ct){Et.length>0&&zt++;const ct=qt(yt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(bt){W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Ot,Ft,yt[ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,yt[ct].width,yt[ct].height,0,Ot,Ft,yt[ct].data);for(let It=0;It<Et.length;It++){const Oe=Et[It].image[ct].image;W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,Oe.width,Oe.height,Ot,Ft,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ce,Oe.width,Oe.height,0,Ot,Ft,Oe.data)}}else{W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ot,Ft,yt[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Ot,Ft,yt[ct]);for(let It=0;It<Et.length;It++){const ne=Et[It];W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,Ot,Ft,ne.image[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ce,Ot,Ft,ne.image[ct])}}}M(y)&&x(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Tt(U,y,q,pt,xt,ut){const Xt=u.convert(q.format,q.colorSpace),wt=u.convert(q.type),Zt=P(q.internalFormat,Xt,wt,q.colorSpace),te=r.get(y),bt=r.get(q);if(bt.__renderTarget=y,!te.__hasExternalTextures){const yt=Math.max(1,y.width>>ut),Pt=Math.max(1,y.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Zt,yt,Pt,y.depth,0,Xt,wt,null):i.texImage2D(xt,ut,Zt,yt,Pt,0,Xt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,bt.__webglTexture,0,G(y)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,bt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(U,y,q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),y.depthBuffer){const pt=y.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ut=N(y.stencilBuffer,xt),Xt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),ut,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),ut,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ut,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const pt=y.textures;for(let xt=0;xt<pt.length;xt++){const ut=pt[xt],Xt=u.convert(ut.format,ut.colorSpace),wt=u.convert(ut.type),Zt=P(ut.internalFormat,Xt,wt,ut.colorSpace);We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Zt,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Zt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(U,y,q){const pt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(y.depthTexture);if(xt.__renderTarget=y,(!xt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y.depthTexture);const te=u.convert(y.depthTexture.format),bt=u.convert(y.depthTexture.type);let yt;y.depthTexture.format===va?yt=o.DEPTH_COMPONENT24:y.depthTexture.format===Dr&&(yt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,yt,y.width,y.height,0,te,bt,null)}}else Q(y.depthTexture,0);const ut=xt.__webglTexture,Xt=G(y),wt=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Zt=y.depthTexture.format===Dr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===va)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,ut,0);else if(y.depthTexture.format===Dr)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,ut,0);else throw new Error("Unknown depthTexture format")}function $t(U){const y=r.get(U),q=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),pt){const xt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),y.__depthDisposeCallback=xt}y.__boundDepthTexture=pt}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Kt(y.__webglFramebuffer[pt],U,pt);else{const pt=U.texture.mipmaps;pt&&pt.length>0?Kt(y.__webglFramebuffer[0],U,0):Kt(y.__webglFramebuffer,U,0)}else if(q){y.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[pt]),y.__webglDepthbuffer[pt]===void 0)y.__webglDepthbuffer[pt]=o.createRenderbuffer(),kt(y.__webglDepthbuffer[pt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),kt(y.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(U,y,q){const pt=r.get(U);y!==void 0&&Tt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&$t(U)}function _e(U){const y=U.texture,q=r.get(U),pt=r.get(y);U.addEventListener("dispose",z);const xt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=y.version,h.memory.textures++),ut){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<y.mipmaps.length;Zt++)q.__webglFramebuffer[wt][Zt]=o.createFramebuffer()}else q.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<y.mipmaps.length;wt++)q.__webglFramebuffer[wt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,Zt=xt.length;wt<Zt;wt++){const te=r.get(xt[wt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&We(U)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<xt.length;wt++){const Zt=xt[wt];q.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const te=u.convert(Zt.format,Zt.colorSpace),bt=u.convert(Zt.type),yt=P(Zt.internalFormat,te,bt,Zt.colorSpace,U.isXRRenderTarget===!0),Pt=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,yt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y);for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[wt][Zt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else Tt(q.__webglFramebuffer[wt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(y)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,Zt=xt.length;wt<Zt;wt++){const te=xt[wt],bt=r.get(te);let yt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(yt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(yt,bt.__webglTexture),Y(yt,te),Tt(q.__webglFramebuffer,U,te,o.COLOR_ATTACHMENT0+wt,yt,0),M(te)&&x(yt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,pt.__webglTexture),Y(wt,y),y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Zt],U,y,o.COLOR_ATTACHMENT0,wt,Zt);else Tt(q.__webglFramebuffer,U,y,o.COLOR_ATTACHMENT0,wt,0);M(y)&&x(wt),i.unbindTexture()}U.depthBuffer&&$t(U)}function pe(U){const y=U.textures;for(let q=0,pt=y.length;q<pt;q++){const xt=y[q];if(M(xt)){const ut=w(U),Xt=r.get(xt).__webglTexture;i.bindTexture(ut,Xt),x(ut),i.unbindTexture()}}}const we=[],oe=[];function Ze(U){if(U.samples>0){if(We(U)===!1){const y=U.textures,q=U.width,pt=U.height;let xt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(U),wt=y.length>1;if(wt)for(let te=0;te<y.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<y.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const bt=r.get(y[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,q,pt,0,0,q,pt,xt,o.NEAREST),m===!0&&(we.length=0,oe.length=0,we.push(o.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(ut),oe.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let te=0;te<y.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const bt=r.get(y[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const y=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function We(U){const y=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(U){const y=h.render.frame;v.get(U)!==y&&(v.set(U,y),U.update())}function Le(U,y){const q=U.colorSpace,pt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Ps&&q!==$a&&(be.getTransfer(q)===ze?(pt!==Ri||xt!==pi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),y}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=tt,this.setTexture2D=Q,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=nt,this.rebindTextures=Ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function j1(o,e){function i(r,l=$a){let u;const h=be.getTransfer(l);if(r===pi)return o.UNSIGNED_BYTE;if(r===Vd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===iv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===av)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ev)return o.BYTE;if(r===nv)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Gd)return o.INT;if(r===Gi)return o.UNSIGNED_INT;if(r===zi)return o.FLOAT;if(r===_a)return o.HALF_FLOAT;if(r===rv)return o.ALPHA;if(r===sv)return o.RGB;if(r===Ri)return o.RGBA;if(r===va)return o.DEPTH_COMPONENT;if(r===Dr)return o.DEPTH_STENCIL;if(r===ov)return o.RED;if(r===Xd)return o.RED_INTEGER;if(r===Os)return o.RG;if(r===Wd)return o.RG_INTEGER;if(r===qd)return o.RGBA_INTEGER;if(r===Bc||r===Ic||r===Hc||r===Gc)if(h===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nd||r===id||r===ad||r===rd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===nd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===id)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===sd||r===od)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ld)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===cd)return u.COMPRESSED_R11_EAC;if(r===ud)return u.COMPRESSED_SIGNED_R11_EAC;if(r===fd)return u.COMPRESSED_RG11_EAC;if(r===hd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===Md||r===yd||r===Ed||r===bd||r===Td||r===Ad)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===dd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===md)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_d)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rd||r===Cd||r===wd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Rd)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dd||r===Ud||r===Ld||r===Nd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Dd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new vv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Vi({vertexShader:Z1,fragmentShader:K1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Sa(new Jc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J1 extends zs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,_=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",M=new Q1,x={},w=i.getContextAttributes();let P=null,N=null;const V=[],I=[],z=new Be;let T=null;const D=new di;D.viewport=new nn;const dt=new di;dt.viewport=new nn;const H=[D,dt],tt=new uy;let Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let vt=V[at];return vt===void 0&&(vt=new Mh,V[at]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(at){let vt=V[at];return vt===void 0&&(vt=new Mh,V[at]=vt),vt.getGripSpace()},this.getHand=function(at){let vt=V[at];return vt===void 0&&(vt=new Mh,V[at]=vt),vt.getHandSpace()};function Q(at){const vt=I.indexOf(at.inputSource);if(vt===-1)return;const Tt=V[vt];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,d||h),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function L(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",F);for(let at=0;at<V.length;at++){const vt=I[at];vt!==null&&(I[at]=null,V[at].disconnect(vt))}Z=null,K=null,M.reset();for(const at in x)delete x[at];e.setRenderTarget(P),E=null,_=null,S=null,l=null,N=null,Lt.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,r.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,r.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",L),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,kt=null,Kt=null;w.depth&&(Kt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=w.stencil?Dr:va,kt=w.stencil?Wo:Gi);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:u};S=this.getBinding(),_=S.createProjectionLayer($t),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Hi(_.textureWidth,_.textureHeight,{format:Ri,type:pi,depthTexture:new qo(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Hi(E.framebufferWidth,E.framebufferHeight,{format:Ri,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Lt.setContext(l),Lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(at){for(let vt=0;vt<at.removed.length;vt++){const Tt=at.removed[vt],kt=I.indexOf(Tt);kt>=0&&(I[kt]=null,V[kt].disconnect(Tt))}for(let vt=0;vt<at.added.length;vt++){const Tt=at.added[vt];let kt=I.indexOf(Tt);if(kt===-1){for(let $t=0;$t<V.length;$t++)if($t>=I.length){I.push(Tt),kt=$t;break}else if(I[$t]===null){I[$t]=Tt,kt=$t;break}if(kt===-1)break}const Kt=V[kt];Kt&&Kt.connect(Tt)}}const nt=new rt,ft=new rt;function Mt(at,vt,Tt){nt.setFromMatrixPosition(vt.matrixWorld),ft.setFromMatrixPosition(Tt.matrixWorld);const kt=nt.distanceTo(ft),Kt=vt.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,Ke=Kt[14]/(Kt[10]-1),_e=Kt[14]/(Kt[10]+1),pe=(Kt[9]+1)/Kt[5],we=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Ze=($t[8]+1)/$t[0],G=Ke*oe,We=Ke*Ze,ye=kt/(-oe+Ze),Le=ye*-oe;if(vt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Le),at.translateZ(ye),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Kt[10]===-1)at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const qt=Ke+ye,U=_e+ye,y=G-Le,q=We+(kt-Le),pt=pe*_e/U*qt,xt=we*_e/U*qt;at.projectionMatrix.makePerspective(y,q,pt,xt,qt,U),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function O(at,vt){vt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(vt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let vt=at.near,Tt=at.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),tt.near=dt.near=D.near=vt,tt.far=dt.far=D.far=Tt,(Z!==tt.near||K!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),Z=tt.near,K=tt.far),tt.layers.mask=at.layers.mask|6,D.layers.mask=tt.layers.mask&-5,dt.layers.mask=tt.layers.mask&-3;const kt=at.parent,Kt=tt.cameras;O(tt,kt);for(let $t=0;$t<Kt.length;$t++)O(Kt[$t],kt);Kt.length===2?Mt(tt,D,dt):tt.projectionMatrix.copy(D.projectionMatrix),Y(at,tt,kt)};function Y(at,vt,Tt){Tt===null?at.matrix.copy(vt.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(vt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Od*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(at){m=at,_!==null&&(_.fixedFoveation=at),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function(at){return x[at]};let gt=null;function Rt(at,vt){if(v=vt.getViewerPose(d||h),b=vt,v!==null){const Tt=v.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let kt=!1;Tt.length!==tt.cameras.length&&(tt.cameras.length=0,kt=!0);for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e];let we=null;if(E!==null)we=E.getViewport(pe);else{const Ze=S.getViewSubImage(_,pe);we=Ze.viewport,_e===0&&(e.setRenderTargetTextures(N,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(N))}let oe=H[_e];oe===void 0&&(oe=new di,oe.layers.enable(_e),oe.viewport=new nn,H[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(we.x,we.y,we.width,we.height),_e===0&&(tt.matrix.copy(oe.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),kt===!0&&tt.cameras.push(oe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const _e=S.getDepthInformation(Tt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(Kt&&Kt.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e].camera;if(pe){let we=x[pe];we||(we=new vv,x[pe]=we);const oe=S.getCameraImage(pe);we.sourceTexture=oe}}}}for(let Tt=0;Tt<V.length;Tt++){const kt=I[Tt],Kt=V[Tt];kt!==null&&Kt!==void 0&&Kt.update(kt,vt,d||h)}gt&&gt(at,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Lt=new yv;Lt.setAnimationLoop(Rt),this.setAnimationLoop=function(at){gt=at},this.dispose=function(){}}}const Tr=new xa,$1=new $e;function tA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,xv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,w,P,N){x.isMeshBasicMaterial?u(M,x):x.isMeshLambertMaterial?(u(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(M,x),S(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(M,x),_(M,x),x.isMeshPhysicalMaterial&&E(M,x,N)):x.isMeshMatcapMaterial?(u(M,x),b(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),C(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?m(M,x,w,P):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const w=e.get(x),P=w.envMap,N=w.envMapRotation;P&&(M.envMap.value=P,Tr.copy(N),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),M.envMapRotation.value.setFromMatrix4($1.makeRotationFromEuler(Tr)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,w,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*w,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,w){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const w=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function eA(o,e,i,r){let l={},u={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const N=P.program;r.uniformBlockBinding(w,N)}function d(w,P){let N=l[w.id];N===void 0&&(b(w),N=v(w),l[w.id]=N,w.addEventListener("dispose",M));const V=P.program;r.updateUBOMapping(w,V);const I=e.render.frame;u[w.id]!==I&&(_(w),u[w.id]=I)}function v(w){const P=S();w.__bindingPointIndex=P;const N=o.createBuffer(),V=w.__size,I=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,V,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function S(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const P=l[w.id],N=w.uniforms,V=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,z=N.length;I<z;I++){const T=Array.isArray(N[I])?N[I]:[N[I]];for(let D=0,dt=T.length;D<dt;D++){const H=T[D];if(E(H,I,D,V)===!0){const tt=H.__offset,Z=Array.isArray(H.value)?H.value:[H.value];let K=0;for(let Q=0;Q<Z.length;Q++){const L=Z[Q],F=C(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,tt+K,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,K),K+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(w,P,N,V){const I=w.value,z=P+"_"+N;if(V[z]===void 0)return typeof I=="number"||typeof I=="boolean"?V[z]=I:V[z]=I.clone(),!0;{const T=V[z];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return V[z]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(w){const P=w.uniforms;let N=0;const V=16;for(let z=0,T=P.length;z<T;z++){const D=Array.isArray(P[z])?P[z]:[P[z]];for(let dt=0,H=D.length;dt<H;dt++){const tt=D[dt],Z=Array.isArray(tt.value)?tt.value:[tt.value];for(let K=0,Q=Z.length;K<Q;K++){const L=Z[K],F=C(L),nt=N%V,ft=nt%F.boundary,Mt=nt+ft;N+=ft,Mt!==0&&V-Mt<F.storage&&(N+=V-Mt),tt.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=N,N+=F.storage}}}const I=N%V;return I>0&&(N+=V-I),w.__size=N,w.__cache={},this}function C(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",w),P}function M(w){const P=w.target;P.removeEventListener("dispose",M);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const w in l)o.deleteBuffer(l[w]);h=[],l={},u={}}return{bind:m,update:d,dispose:x}}const nA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function iA(){return Pi===null&&(Pi=new ZM(nA,16,16,Os,_a),Pi.name="DFG_LUT",Pi.minFilter=Rn,Pi.magFilter=Rn,Pi.wrapS=pa,Pi.wrapT=pa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class aA{constructor(e={}){const{canvas:i=AM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:E=pi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=h;const C=E,M=new Set([qd,Wd,Xd]),x=new Set([pi,Gi,Xo,Wo,Vd,kd]),w=new Uint32Array(4),P=new Int32Array(4);let N=null,V=null;const I=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let dt=!1;this._outputColorSpace=hi;let H=0,tt=0,Z=null,K=-1,Q=null;const L=new nn,F=new nn;let nt=null;const ft=new Ue(0);let Mt=0,O=i.width,Y=i.height,gt=1,Rt=null,Lt=null;const at=new nn(0,0,O,Y),vt=new nn(0,0,O,Y);let Tt=!1;const kt=new mv;let Kt=!1,$t=!1;const Ke=new $e,_e=new rt,pe=new nn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ze(){return Z===null?gt:1}let G=r;function We(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hd}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),G===null){const X="webgl2";if(G=We(X,R),G===null)throw We(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ce("WebGLRenderer: "+R.message),R}let ye,Le,qt,U,y,q,pt,xt,ut,Xt,wt,Zt,te,bt,yt,Pt,Ot,Ft,ce,W,Ct,At,zt;function Et(){ye=new aT(G),ye.init(),Ct=new j1(G,ye),Le=new Kb(G,ye,e,Ct),qt=new q1(G,ye),Le.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),U=new oT(G),y=new L1,q=new Y1(G,ye,qt,y,Le,Ct,U),pt=new iT(D),xt=new hy(G),At=new jb(G,xt),ut=new rT(G,xt,U,At),Xt=new cT(G,ut,xt,At,U),Ft=new lT(G,Le,q),yt=new Qb(y),wt=new U1(D,pt,ye,Le,At,yt),Zt=new tA(D,y),te=new O1,bt=new H1(ye),Ot=new Yb(D,pt,qt,Xt,b,m),Pt=new W1(D,Xt,Le),zt=new eA(G,U,Le,qt),ce=new Zb(G,ye,U),W=new sT(G,ye,U),U.programs=wt.programs,D.capabilities=Le,D.extensions=ye,D.properties=y,D.renderLists=te,D.shadowMap=Pt,D.state=qt,D.info=U}Et(),C!==pi&&(T=new fT(C,i.width,i.height,l,u));const ct=new J1(D,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,X,ot=!0){if(ct.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=X,i.width=Math.floor(R*gt),i.height=Math.floor(X*gt),ot===!0&&(i.style.width=R+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(O*gt,Y*gt).floor()},this.setDrawingBufferSize=function(R,X,ot){O=R,Y=X,gt=ot,i.width=Math.floor(R*ot),i.height=Math.floor(X*ot),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(C===pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,X,ot,it){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,X,ot,it),qt.viewport(L.copy(at).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,X,ot,it){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,X,ot,it),qt.scissor(F.copy(vt).multiplyScalar(gt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){qt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){Lt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ot=!0){let it=0;if(R){let J=!1;if(Z!==null){const Dt=Z.texture.format;J=M.has(Dt)}if(J){const Dt=Z.texture.type,Bt=x.has(Dt),Ut=Ot.getClearColor(),Wt=Ot.getClearAlpha(),jt=Ut.r,ee=Ut.g,re=Ut.b;Bt?(w[0]=jt,w[1]=ee,w[2]=re,w[3]=Wt,G.clearBufferuiv(G.COLOR,0,w)):(P[0]=jt,P[1]=ee,P[2]=re,P[3]=Wt,G.clearBufferiv(G.COLOR,0,P))}else it|=G.COLOR_BUFFER_BIT}X&&(it|=G.DEPTH_BUFFER_BIT),ot&&(it|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&G.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Ot.dispose(),te.dispose(),bt.dispose(),y.dispose(),pt.dispose(),Xt.dispose(),At.dispose(),zt.dispose(),wt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Or),ct.removeEventListener("sessionend",Pr),wi.stop()};function It(R){R.preventDefault(),j0("WebGLRenderer: Context Lost."),dt=!0}function ne(){j0("WebGLRenderer: Context Restored."),dt=!1;const R=U.autoReset,X=Pt.enabled,ot=Pt.autoUpdate,it=Pt.needsUpdate,J=Pt.type;Et(),U.autoReset=R,Pt.enabled=X,Pt.autoUpdate=ot,Pt.needsUpdate=it,Pt.type=J}function Oe(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const X=R.target;X.removeEventListener("dispose",Ee),Cn(X)}function Cn(R){gi(R),y.remove(R)}function gi(R){const X=y.get(R).programs;X!==void 0&&(X.forEach(function(ot){wt.releaseProgram(ot)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ot,it,J,Dt){X===null&&(X=we);const Bt=J.isMesh&&J.matrixWorld.determinant()<0,Ut=tl(R,X,ot,it,J);qt.setMaterial(it,Bt);let Wt=ot.index,jt=1;if(it.wireframe===!0){if(Wt=ut.getWireframeAttribute(ot),Wt===void 0)return;jt=2}const ee=ot.drawRange,re=ot.attributes.position;let Ht=ee.start*jt,ue=(ee.start+ee.count)*jt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*jt),ue=Math.min(ue,(Dt.start+Dt.count)*jt)),Wt!==null?(Ht=Math.max(Ht,0),ue=Math.min(ue,Wt.count)):re!=null&&(Ht=Math.max(Ht,0),ue=Math.min(ue,re.count));const qe=ue-Ht;if(qe<0||qe===1/0)return;At.setup(J,it,Ut,ot,Wt);let Ye,Te=ce;if(Wt!==null&&(Ye=xt.get(Wt),Te=W,Te.setIndex(Ye)),J.isMesh)it.wireframe===!0?(qt.setLineWidth(it.wireframeLinewidth*Ze()),Te.setMode(G.LINES)):Te.setMode(G.TRIANGLES);else if(J.isLine){let dn=it.linewidth;dn===void 0&&(dn=1),qt.setLineWidth(dn*Ze()),J.isLineSegments?Te.setMode(G.LINES):J.isLineLoop?Te.setMode(G.LINE_LOOP):Te.setMode(G.LINE_STRIP)}else J.isPoints?Te.setMode(G.POINTS):J.isSprite&&Te.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)qc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Te.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const dn=J._multiDrawStarts,Vt=J._multiDrawCounts,wn=J._multiDrawCount,ae=Wt?xt.get(Wt).bytesPerElement:1,Dn=y.get(it).currentProgram.getUniforms();for(let Wn=0;Wn<wn;Wn++)Dn.setValue(G,"_gl_DrawID",Wn),Te.render(dn[Wn]/ae,Vt[Wn])}else if(J.isInstancedMesh)Te.renderInstances(Ht,qe,J.count);else if(ot.isInstancedBufferGeometry){const dn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Vt=Math.min(ot.instanceCount,dn);Te.renderInstances(Ht,qe,Vt)}else Te.render(Ht,qe)};function Gs(R,X,ot){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Ma(R,X,ot),R.side=er,R.needsUpdate=!0,Ma(R,X,ot),R.side=da):Ma(R,X,ot)}this.compile=function(R,X,ot=null){ot===null&&(ot=R),V=bt.get(ot),V.init(X),z.push(V),ot.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(V.pushLight(J),J.castShadow&&V.pushShadow(J))}),R!==ot&&R.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(V.pushLight(J),J.castShadow&&V.pushShadow(J))}),V.setupLights();const it=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Dt=J.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Ut=Dt[Bt];Gs(Ut,ot,J),it.add(Ut)}else Gs(Dt,ot,J),it.add(Dt)}),V=z.pop(),it},this.compileAsync=function(R,X,ot=null){const it=this.compile(R,X,ot);return new Promise(J=>{function Dt(){if(it.forEach(function(Bt){y.get(Bt).currentProgram.isReady()&&it.delete(Bt)}),it.size===0){J(R);return}setTimeout(Dt,10)}ye.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Nr=null;function Qo(R){Nr&&Nr(R)}function Or(){wi.stop()}function Pr(){wi.start()}const wi=new yv;wi.setAnimationLoop(Qo),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Nr=R,ct.setAnimationLoop(R),R===null?wi.stop():wi.start()},ct.addEventListener("sessionstart",Or),ct.addEventListener("sessionend",Pr),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(dt===!0)return;const ot=ct.enabled===!0&&ct.isPresenting===!0,it=T!==null&&(Z===null||ot)&&T.begin(D,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(X),X=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,Z),V=bt.get(R,z.length),V.init(X),z.push(V),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),kt.setFromProjectionMatrix(Ke,Bi,X.reversedDepth),$t=this.localClippingEnabled,Kt=yt.init(this.clippingPlanes,$t),N=te.get(R,I.length),N.init(),I.push(N),ct.enabled===!0&&ct.isPresenting===!0){const Bt=D.xr.getDepthSensingMesh();Bt!==null&&Fr(Bt,X,-1/0,D.sortObjects)}Fr(R,X,0,D.sortObjects),N.finish(),D.sortObjects===!0&&N.sort(Rt,Lt),oe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,oe&&Ot.addToRenderList(N,R),this.info.render.frame++,Kt===!0&&yt.beginShadows();const J=V.state.shadowsArray;if(Pt.render(J,R,X),Kt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const Bt=N.opaque,Ut=N.transmissive;if(V.setupLights(),X.isArrayCamera){const Wt=X.cameras;if(Ut.length>0)for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt];an(Bt,Ut,R,re)}oe&&Ot.render(R);for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt];_i(N,R,re,re.viewport)}}else Ut.length>0&&an(Bt,Ut,R,X),oe&&Ot.render(R),_i(N,R,X)}Z!==null&&tt===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),it&&T.end(D),R.isScene===!0&&R.onAfterRender(D,R,X),At.resetDefaultState(),K=-1,Q=null,z.pop(),z.length>0?(V=z[z.length-1],Kt===!0&&yt.setGlobalState(D.clippingPlanes,V.state.camera)):V=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function Fr(R,X,ot,it){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)V.pushLight(R),R.castShadow&&V.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||kt.intersectsSprite(R)){it&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const Bt=Xt.update(R),Ut=R.material;Ut.visible&&N.push(R,Bt,Ut,ot,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||kt.intersectsObject(R))){const Bt=Xt.update(R),Ut=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),pe.copy(Bt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ut)){const Wt=Bt.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt],Ht=Ut[re.materialIndex];Ht&&Ht.visible&&N.push(R,Bt,Ht,ot,pe.z,re)}}else Ut.visible&&N.push(R,Bt,Ut,ot,pe.z,null)}}const Dt=R.children;for(let Bt=0,Ut=Dt.length;Bt<Ut;Bt++)Fr(Dt[Bt],X,ot,it)}function _i(R,X,ot,it){const{opaque:J,transmissive:Dt,transparent:Bt}=R;V.setupLightsView(ot),Kt===!0&&yt.setGlobalState(D.clippingPlanes,ot),it&&qt.viewport(L.copy(it)),J.length>0&&hn(J,X,ot),Dt.length>0&&hn(Dt,X,ot),Bt.length>0&&hn(Bt,X,ot),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function an(R,X,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[it.id]===void 0){const Ht=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[it.id]=new Hi(1,1,{generateMipmaps:!0,type:Ht?_a:pi,minFilter:wr,samples:Math.max(4,Le.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=V.state.transmissionRenderTarget[it.id],Bt=it.viewport||L;Dt.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);const Ut=D.getRenderTarget(),Wt=D.getActiveCubeFace(),jt=D.getActiveMipmapLevel();D.setRenderTarget(Dt),D.getClearColor(ft),Mt=D.getClearAlpha(),Mt<1&&D.setClearColor(16777215,.5),D.clear(),oe&&Ot.render(ot);const ee=D.toneMapping;D.toneMapping=Ii;const re=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),V.setupLightsView(it),Kt===!0&&yt.setGlobalState(D.clippingPlanes,it),hn(R,ot,it),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ue=0,qe=X.length;ue<qe;ue++){const Ye=X[ue],{object:Te,geometry:dn,material:Vt,group:wn}=Ye;if(Vt.side===da&&Te.layers.test(it.layers)){const ae=Vt.side;Vt.side=kn,Vt.needsUpdate=!0,ki(Te,ot,it,dn,Vt,wn),Vt.side=ae,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}D.setRenderTarget(Ut,Wt,jt),D.setClearColor(ft,Mt),re!==void 0&&(it.viewport=re),D.toneMapping=ee}function hn(R,X,ot){const it=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Dt=R.length;J<Dt;J++){const Bt=R[J],{object:Ut,geometry:Wt,group:jt}=Bt;let ee=Bt.material;ee.allowOverride===!0&&it!==null&&(ee=it),Ut.layers.test(ot.layers)&&ki(Ut,X,ot,Wt,ee,jt)}}function ki(R,X,ot,it,J,Dt){R.onBeforeRender(D,X,ot,it,J,Dt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(D,X,ot,it,R,Dt),J.transparent===!0&&J.side===da&&J.forceSinglePass===!1?(J.side=kn,J.needsUpdate=!0,D.renderBufferDirect(ot,X,it,J,R,Dt),J.side=er,J.needsUpdate=!0,D.renderBufferDirect(ot,X,it,J,R,Dt),J.side=da):D.renderBufferDirect(ot,X,it,J,R,Dt),R.onAfterRender(D,X,ot,it,J,Dt)}function Ma(R,X,ot){X.isScene!==!0&&(X=we);const it=y.get(R),J=V.state.lights,Dt=V.state.shadowsArray,Bt=J.state.version,Ut=wt.getParameters(R,J.state,Dt,X,ot),Wt=wt.getProgramCacheKey(Ut);let jt=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,it.fog=X.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=pt.get(R.envMap||it.environment,ee),it.envMapRotation=it.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Ee),jt=new Map,it.programs=jt);let re=jt.get(Wt);if(re!==void 0){if(it.currentProgram===re&&it.lightsStateVersion===Bt)return $o(R,Ut),re}else Ut.uniforms=wt.getUniforms(R),R.onBeforeCompile(Ut,D),re=wt.acquireProgram(Ut,Wt),jt.set(Wt,re),it.uniforms=Ut.uniforms;const Ht=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=yt.uniform),$o(R,Ut),it.needsLights=Vs(R),it.lightsStateVersion=Bt,it.needsLights&&(Ht.ambientLightColor.value=J.state.ambient,Ht.lightProbe.value=J.state.probe,Ht.directionalLights.value=J.state.directional,Ht.directionalLightShadows.value=J.state.directionalShadow,Ht.spotLights.value=J.state.spot,Ht.spotLightShadows.value=J.state.spotShadow,Ht.rectAreaLights.value=J.state.rectArea,Ht.ltc_1.value=J.state.rectAreaLTC1,Ht.ltc_2.value=J.state.rectAreaLTC2,Ht.pointLights.value=J.state.point,Ht.pointLightShadows.value=J.state.pointShadow,Ht.hemisphereLights.value=J.state.hemi,Ht.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ht.spotLightMatrix.value=J.state.spotLightMatrix,Ht.spotLightMap.value=J.state.spotLightMap,Ht.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=re,it.uniformsList=null,re}function Jo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Vc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function $o(R,X){const ot=y.get(R);ot.outputColorSpace=X.outputColorSpace,ot.batching=X.batching,ot.batchingColor=X.batchingColor,ot.instancing=X.instancing,ot.instancingColor=X.instancingColor,ot.instancingMorph=X.instancingMorph,ot.skinning=X.skinning,ot.morphTargets=X.morphTargets,ot.morphNormals=X.morphNormals,ot.morphColors=X.morphColors,ot.morphTargetsCount=X.morphTargetsCount,ot.numClippingPlanes=X.numClippingPlanes,ot.numIntersection=X.numClipIntersection,ot.vertexAlphas=X.vertexAlphas,ot.vertexTangents=X.vertexTangents,ot.toneMapping=X.toneMapping}function tl(R,X,ot,it,J){X.isScene!==!0&&(X=we),q.resetTextureUnits();const Dt=X.fog,Bt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?X.environment:null,Ut=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ps,Wt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,jt=pt.get(it.envMap||Bt,Wt),ee=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ht=!!ot.morphAttributes.position,ue=!!ot.morphAttributes.normal,qe=!!ot.morphAttributes.color;let Ye=Ii;it.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const Te=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,dn=Te!==void 0?Te.length:0,Vt=y.get(it),wn=V.state.lights;if(Kt===!0&&($t===!0||R!==Q)){const sn=R===Q&&it.id===K;yt.setState(it,R,sn)}let ae=!1;it.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==wn.state.version||Vt.outputColorSpace!==Ut||J.isBatchedMesh&&Vt.batching===!1||!J.isBatchedMesh&&Vt.batching===!0||J.isBatchedMesh&&Vt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Vt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Vt.instancing===!1||!J.isInstancedMesh&&Vt.instancing===!0||J.isSkinnedMesh&&Vt.skinning===!1||!J.isSkinnedMesh&&Vt.skinning===!0||J.isInstancedMesh&&Vt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Vt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Vt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Vt.instancingMorph===!1&&J.morphTexture!==null||Vt.envMap!==jt||it.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==yt.numPlanes||Vt.numIntersection!==yt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==re||Vt.morphTargets!==Ht||Vt.morphNormals!==ue||Vt.morphColors!==qe||Vt.toneMapping!==Ye||Vt.morphTargetsCount!==dn)&&(ae=!0):(ae=!0,Vt.__version=it.version);let Dn=Vt.currentProgram;ae===!0&&(Dn=Ma(it,X,J));let Wn=!1,vi=!1,qn=!1;const Ne=Dn.getUniforms(),rn=Vt.uniforms;if(qt.useProgram(Dn.program)&&(Wn=!0,vi=!0,qn=!0),it.id!==K&&(K=it.id,vi=!0),Wn||Q!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ne.setValue(G,"projectionMatrix",R.projectionMatrix),Ne.setValue(G,"viewMatrix",R.matrixWorldInverse);const xi=Ne.map.cameraPosition;xi!==void 0&&xi.setValue(G,_e.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Ne.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ne.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,vi=!0,qn=!0)}if(Vt.needsLights&&(wn.state.directionalShadowMap.length>0&&Ne.setValue(G,"directionalShadowMap",wn.state.directionalShadowMap,q),wn.state.spotShadowMap.length>0&&Ne.setValue(G,"spotShadowMap",wn.state.spotShadowMap,q),wn.state.pointShadowMap.length>0&&Ne.setValue(G,"pointShadowMap",wn.state.pointShadowMap,q)),J.isSkinnedMesh){Ne.setOptional(G,J,"bindMatrix"),Ne.setOptional(G,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ne.setValue(G,"boneTexture",sn.boneTexture,q))}J.isBatchedMesh&&(Ne.setOptional(G,J,"batchingTexture"),Ne.setValue(G,"batchingTexture",J._matricesTexture,q),Ne.setOptional(G,J,"batchingIdTexture"),Ne.setValue(G,"batchingIdTexture",J._indirectTexture,q),Ne.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&Ne.setValue(G,"batchingColorTexture",J._colorsTexture,q));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ft.update(J,ot,Dn),(vi||Vt.receiveShadow!==J.receiveShadow)&&(Vt.receiveShadow=J.receiveShadow,Ne.setValue(G,"receiveShadow",J.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=iA()),vi&&(Ne.setValue(G,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&nr(rn,qn),Dt&&it.fog===!0&&Zt.refreshFogUniforms(rn,Dt),Zt.refreshMaterialUniforms(rn,it,gt,Y,V.state.transmissionRenderTarget[R.id]),Vc.upload(G,Jo(Vt),rn,q)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Vc.upload(G,Jo(Vt),rn,q),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ne.setValue(G,"center",J.center),Ne.setValue(G,"modelViewMatrix",J.modelViewMatrix),Ne.setValue(G,"normalMatrix",J.normalMatrix),Ne.setValue(G,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const sn=it.uniformsGroups;for(let xi=0,Xi=sn.length;xi<Xi;xi++){const zr=sn[xi];zt.update(zr,Dn),zt.bind(zr,Dn)}}return Dn}function nr(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Vs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,X,ot){const it=y.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=X,y.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ot=y.get(R);ot.__webglFramebuffer=X,ot.__useDefaultFramebuffer=X===void 0};const ya=G.createFramebuffer();this.setRenderTarget=function(R,X=0,ot=0){Z=R,H=X,tt=ot;let it=null,J=!1,Dt=!1;if(R){const Ut=y.get(R);if(Ut.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Ut.__webglFramebuffer),L.copy(R.viewport),F.copy(R.scissor),nt=R.scissorTest,qt.viewport(L),qt.scissor(F),qt.setScissorTest(nt),K=-1;return}else if(Ut.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ut.__hasExternalTextures)q.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Ut.__boundDepthTexture!==ee){if(ee!==null&&y.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const jt=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[X])?it=jt[X][ot]:it=jt[X],J=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?it=y.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?it=jt[ot]:it=jt,L.copy(R.viewport),F.copy(R.scissor),nt=R.scissorTest}else L.copy(at).multiplyScalar(gt).floor(),F.copy(vt).multiplyScalar(gt).floor(),nt=Tt;if(ot!==0&&(it=ya),qt.bindFramebuffer(G.FRAMEBUFFER,it)&&qt.drawBuffers(R,it),qt.viewport(L),qt.scissor(F),qt.setScissorTest(nt),J){const Ut=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,ot)}else if(Dt){const Ut=X;for(let Wt=0;Wt<R.textures.length;Wt++){const jt=y.get(R.textures[Wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,ot,Ut)}}else if(R!==null&&ot!==0){const Ut=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ut.__webglTexture,ot)}K=-1},this.readRenderTargetPixels=function(R,X,ot,it,J,Dt,Bt,Ut=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);try{const jt=R.textures[Ut],ee=jt.format,re=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ut),!Le.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(re)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-it&&ot>=0&&ot<=R.height-J&&G.readPixels(X,ot,it,J,Ct.convert(ee),Ct.convert(re),Dt)}finally{const jt=Z!==null?y.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,X,ot,it,J,Dt,Bt,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt)if(X>=0&&X<=R.width-it&&ot>=0&&ot<=R.height-J){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);const jt=R.textures[Ut],ee=jt.format,re=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ut),!Le.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels(X,ot,it,J,Ct.convert(ee),Ct.convert(re),0);const ue=Z!==null?y.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,ue);const qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await RM(G,qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(Ht),G.deleteSync(qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ot=0){const it=Math.pow(2,-ot),J=Math.floor(R.image.width*it),Dt=Math.floor(R.image.height*it),Bt=X!==null?X.x:0,Ut=X!==null?X.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Bt,Ut,J,Dt),qt.unbindTexture()};const Ea=G.createFramebuffer(),ir=G.createFramebuffer();this.copyTextureToTexture=function(R,X,ot=null,it=null,J=0,Dt=0){let Bt,Ut,Wt,jt,ee,re,Ht,ue,qe;const Ye=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(ot!==null)Bt=ot.max.x-ot.min.x,Ut=ot.max.y-ot.min.y,Wt=ot.isBox3?ot.max.z-ot.min.z:1,jt=ot.min.x,ee=ot.min.y,re=ot.isBox3?ot.min.z:0;else{const rn=Math.pow(2,-J);Bt=Math.floor(Ye.width*rn),Ut=Math.floor(Ye.height*rn),R.isDataArrayTexture?Wt=Ye.depth:R.isData3DTexture?Wt=Math.floor(Ye.depth*rn):Wt=1,jt=0,ee=0,re=0}it!==null?(Ht=it.x,ue=it.y,qe=it.z):(Ht=0,ue=0,qe=0);const Te=Ct.convert(X.format),dn=Ct.convert(X.type);let Vt;X.isData3DTexture?(q.setTexture3D(X,0),Vt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Vt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Vt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const wn=G.getParameter(G.UNPACK_ROW_LENGTH),ae=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Dn=G.getParameter(G.UNPACK_SKIP_PIXELS),Wn=G.getParameter(G.UNPACK_SKIP_ROWS),vi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,re);const qn=R.isDataArrayTexture||R.isData3DTexture,Ne=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const rn=y.get(R),Un=y.get(X),sn=y.get(rn.__renderTarget),xi=y.get(Un.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,sn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Xi=0;Xi<Wt;Xi++)qn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(R).__webglTexture,J,re+Xi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(X).__webglTexture,Dt,qe+Xi)),G.blitFramebuffer(jt,ee,Bt,Ut,Ht,ue,Bt,Ut,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||y.has(R)){const rn=y.get(R),Un=y.get(X);qt.bindFramebuffer(G.READ_FRAMEBUFFER,Ea),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ir);for(let sn=0;sn<Wt;sn++)qn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,J,re+sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,J),Ne?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,Dt,qe+sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,Dt),J!==0?G.blitFramebuffer(jt,ee,Bt,Ut,Ht,ue,Bt,Ut,G.COLOR_BUFFER_BIT,G.NEAREST):Ne?G.copyTexSubImage3D(Vt,Dt,Ht,ue,qe+sn,jt,ee,Bt,Ut):G.copyTexSubImage2D(Vt,Dt,Ht,ue,jt,ee,Bt,Ut);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Vt,Dt,Ht,ue,qe,Bt,Ut,Wt,Te,dn,Ye.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Vt,Dt,Ht,ue,qe,Bt,Ut,Wt,Te,Ye.data):G.texSubImage3D(Vt,Dt,Ht,ue,qe,Bt,Ut,Wt,Te,dn,Ye):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,Bt,Ut,Te,dn,Ye.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,Ye.width,Ye.height,Te,Ye.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,Bt,Ut,Te,dn,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,wn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ae),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Dn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,vi),Dt===0&&X.generateMipmaps&&G.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){H=0,tt=0,Z=null,qt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}function rA(){const o=ko.useRef(null);return ko.useEffect(()=>{const e=o.current;if(!e)return;const i=new kM;i.fog=new Kd(15265535,.015);const r=new di(70,window.innerWidth/window.innerHeight,.1,100);r.position.z=22;const l=new aA({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(window.innerWidth,window.innerHeight),e.appendChild(l.domElement);const u=window.innerWidth<768,h=u?170:360,p=new Float32Array(h*3),m=new Float32Array(h*3),d=u?25:36;for(let Z=0;Z<h;Z+=1){const K=Z*3;p[K]=(Math.random()-.5)*d,p[K+1]=(Math.random()-.5)*d,p[K+2]=(Math.random()-.5)*d*.35,m[K]=(Math.random()-.5)*.0044,m[K+1]=(Math.random()-.5)*.0044,m[K+2]=(Math.random()-.5)*.0022}const v=new Xn;v.setAttribute("position",new ni(p,3));const S=new Pd({color:5993215,size:u?.1:.12,transparent:!0,opacity:.9,sizeAttenuation:!0}),_=new p_(v,S);i.add(_);const E=new Xn,b=new gv({color:8084735,transparent:!0,opacity:.28}),C=u?260:900,M=new Float32Array(C*6);E.setAttribute("position",new ni(M,3));const x=new ty(E,b);i.add(x);const w=new Xn,P=u?160:320,N=new Float32Array(P*3);for(let Z=0;Z<P;Z+=1){const K=Z*3;N[K]=(Math.random()-.5)*d*2.3,N[K+1]=(Math.random()-.5)*d*2.1,N[K+2]=-8-Math.random()*20}w.setAttribute("position",new ni(N,3));const V=new Pd({color:16777215,size:u?.035:.045,transparent:!0,opacity:.62}),I=new p_(w,V);i.add(I);const z=new Be(0,0),T=Z=>{z.x=Z.clientX/window.innerWidth*2-1,z.y=-(Z.clientY/window.innerHeight)*2+1};window.addEventListener("pointermove",T);const D=d*.5;let dt;const H=()=>{const Z=v.getAttribute("position"),K=Z.array;for(let F=0;F<h;F+=1){const nt=F*3;K[nt]+=m[nt],K[nt+1]+=m[nt+1],K[nt+2]+=m[nt+2],Math.abs(K[nt])>D&&(m[nt]*=-1),Math.abs(K[nt+1])>D&&(m[nt+1]*=-1),Math.abs(K[nt+2])>D*.5&&(m[nt+2]*=-1)}Z.needsUpdate=!0;let Q=0;for(let F=0;F<h;F+=1){const nt=F*3;for(let ft=F+1;ft<h;ft+=1){const Mt=ft*3,O=K[nt]-K[Mt],Y=K[nt+1]-K[Mt+1],gt=K[nt+2]-K[Mt+2];if(O*O+Y*Y+gt*gt<8.6&&Q<C){const Lt=Q*6;M[Lt]=K[nt],M[Lt+1]=K[nt+1],M[Lt+2]=K[nt+2],M[Lt+3]=K[Mt],M[Lt+4]=K[Mt+1],M[Lt+5]=K[Mt+2],Q+=1}}}x.geometry.setDrawRange(0,Q*2),x.geometry.attributes.position.needsUpdate=!0;const L=performance.now()*.001;_.rotation.y+=75e-5,_.rotation.x+=12e-5,S.color.setHSL(.66+Math.sin(L*.2)*.04,.85,.66),b.color.setHSL(.74+Math.sin(L*.18)*.05,.86,.62),S.opacity=.78+Math.sin(L*1.4)*.12,b.opacity=.24+Math.sin(L*1.15)*.07,V.opacity=.5+Math.sin(L*.95)*.12,I.rotation.y-=15e-5,i.rotation.y+=z.x*45e-5,i.rotation.x+=z.y*3e-4,l.render(i,r),dt=window.requestAnimationFrame(H)};H();const tt=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",tt),()=>{window.cancelAnimationFrame(dt),window.removeEventListener("resize",tt),window.removeEventListener("pointermove",T),v.dispose(),S.dispose(),E.dispose(),b.dispose(),w.dispose(),V.dispose(),l.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement)}},[]),St.jsx("div",{className:"three-bg",ref:o,"aria-hidden":"true"})}var Cv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V_=Ur.createContext&&Ur.createContext(Cv),sA=["attr","size","title"];function oA(o,e){if(o==null)return{};var i,r,l=lA(o,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);for(r=0;r<u.length;r++)i=u[r],e.indexOf(i)===-1&&{}.propertyIsEnumerable.call(o,i)&&(l[i]=o[i])}return l}function lA(o,e){if(o==null)return{};var i={};for(var r in o)if({}.hasOwnProperty.call(o,r)){if(e.indexOf(r)!==-1)continue;i[r]=o[r]}return i}function Zc(){return Zc=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)({}).hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Zc.apply(null,arguments)}function k_(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Kc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?k_(Object(i),!0).forEach(function(r){cA(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):k_(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function cA(o,e,i){return(e=uA(e))in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function uA(o){var e=fA(o,"string");return typeof e=="symbol"?e:e+""}function fA(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function wv(o){return o&&o.map((e,i)=>Ur.createElement(e.tag,Kc({key:i},e.attr),wv(e.child)))}function mi(o){return e=>Ur.createElement(hA,Zc({attr:Kc({},o.attr)},e),wv(o.child))}function hA(o){var e=i=>{var{attr:r,size:l,title:u}=o,h=oA(o,sA),p=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),Ur.createElement("svg",Zc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Kc(Kc({color:o.color||i.color},i.style),o.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&Ur.createElement("title",null,u),o.children)};return V_!==void 0?Ur.createElement(V_.Consumer,null,i=>e(i)):e(Cv)}function dA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function pA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(o)}function mA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(o)}function gA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function _A(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(o)}function X_(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(o)}function vA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(o)}function xA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(o)}function SA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function W_(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function Dv(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"},child:[]}]})(o)}function MA(o){return mi({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"},child:[]},{tag:"path",attr:{d:"M9 13a4.5 4.5 0 0 0 3-4"},child:[]},{tag:"path",attr:{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"},child:[]},{tag:"path",attr:{d:"M3.477 10.896a4 4 0 0 1 .585-.396"},child:[]},{tag:"path",attr:{d:"M6 18a4 4 0 0 1-1.967-.516"},child:[]},{tag:"path",attr:{d:"M12 13h4"},child:[]},{tag:"path",attr:{d:"M12 18h6a2 2 0 0 1 2 2v1"},child:[]},{tag:"path",attr:{d:"M12 8h8"},child:[]},{tag:"path",attr:{d:"M16 8V5a2 2 0 0 1 2-2"},child:[]},{tag:"circle",attr:{cx:"16",cy:"13",r:".5"},child:[]},{tag:"circle",attr:{cx:"18",cy:"3",r:".5"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:".5"},child:[]},{tag:"circle",attr:{cx:"20",cy:"8",r:".5"},child:[]}]})(o)}const yA={"Programlama Dilleri":["Java","C#"],Frontend:["HTML","CSS","JavaScript","React","Tailwind CSS","Bootstrap","jQuery"],Backend:[".NET MVC","C#"],Veritabanı:["MSSQL"],Araçlar:["Git","GitHub","Visual Studio","VS Code"]},EA=["Analitik düşünme","Güçlü problem çözme","Hızlı öğrenme","Takım çalışması","İletişim becerileri","Yaratıcı düşünme"],bA=[{role:"Freelance Yazılım Geliştirici",place:"Uzaktan",period:"2024 - Günümüz",text:"Modern frontend teknolojileri ile UI odaklı projeler geliştirdim, GitHub portfolyomu aktif olarak büyüttüm. Ayrıca yapay zekâ destekli uygulamalar, akıllı otomasyon çözümleri ve kullanıcı ihtiyaçlarına göre özelleştirilmiş AI entegrasyonları üzerinde çalışıyorum.",stack:["React","Tailwind CSS","Python","LLM","Prompt Engineering","API Entegrasyonu"]},{role:"Frontend Developer",company:"ANTTECH Yazılım",place:"Antalya",period:"Kasım 2023 - Eylül 2024",text:"Kullanıcı deneyimine odaklanan responsive arayüzler geliştirdim ve ekip geliştirme süreçlerine aktif katkıda bulundum.",stack:["HTML5","CSS3","SASS","Bootstrap","JavaScript"]},{role:"Software Developer",company:"VAV Technology",place:"Antalya",period:"2021 - 2023",text:"C# ve .NET MVC tabanlı projelerde backend, veritabanı ve arayüz geliştirme görevlerini üstlendim.",stack:["C#",".NET MVC","MSSQL","HTML","CSS","JavaScript"]}],TA=[{title:"Doğalgaz Alarm Sistemi",description:"Arduino ve MQ-4 gaz sensörü kullanılarak metan gazı tespit eden ve eşik aşımında sesli-görsel uyarı veren sistem.",tags:["Arduino","MQ-4","Sensör","Alarm"]},{title:"Koçak Baklava Web Sitesi",description:"HTML, CSS, Bootstrap ve JavaScript ile geliştirilmiş modern, mobil uyumlu ve kullanıcı dostu kurumsal web sitesi.",tags:["HTML","CSS","Bootstrap","JavaScript"]},{title:"Mağaza Stok Takip Sistemi",description:"C# WinForms ve MSSQL ile geliştirilen masaüstü stok takip uygulaması. CRUD işlemleri ve ürün yönetimi içerir.",tags:["C#","WinForms","MSSQL","ADO.NET"]}],AA=[{name:"fundamintemur",url:"https://github.com/fundamintemur",note:"Tüm açık kaynak ve portfolyo reposu."}],RA=o=>o==="Programlama Dilleri"?St.jsx(W_,{}):o==="Frontend"?St.jsx(SA,{}):o==="Backend"?St.jsx(Dv,{}):o==="Veritabanı"?St.jsx(xA,{}):o==="Araçlar"?St.jsx(dA,{}):St.jsx(W_,{});function ws({id:o,title:e,subtitle:i,children:r}){return St.jsxs("section",{id:o,className:"section",children:[St.jsxs("div",{className:"section-head",children:[St.jsx("p",{className:"section-subtitle",children:i}),St.jsx("h2",{children:e})]}),r]})}function CA(){const[o,e]=ko.useState(!1),i=()=>{e(!1)};return St.jsxs("div",{className:"page-wrap",children:[St.jsx(rA,{}),St.jsxs("div",{className:"page",children:[St.jsxs("header",{className:"hero",id:"home",children:[St.jsxs("nav",{className:"nav",children:[St.jsx("a",{href:"#home",className:"brand",children:"Funda Mintemur"}),St.jsxs("button",{type:"button",className:`hamburger ${o?"active":""}`,"aria-label":"Menüyü aç/kapat","aria-expanded":o,onClick:()=>e(r=>!r),children:[St.jsx("span",{}),St.jsx("span",{}),St.jsx("span",{})]}),St.jsxs("div",{className:`menu ${o?"open":""}`,children:[St.jsx("a",{href:"#about",onClick:i,children:"Hakkımda"}),St.jsx("a",{href:"#skills",onClick:i,children:"Yetenekler"}),St.jsx("a",{href:"#experience",onClick:i,children:"Deneyim"}),St.jsx("a",{href:"#projects",onClick:i,children:"Projeler"}),St.jsx("a",{href:"#contact",onClick:i,children:"İletişim"})]})]}),St.jsxs("div",{className:"hero-grid",children:[St.jsxs("div",{children:[St.jsx("p",{className:"badge",children:"Bilgisayar Mühendisi | Frontend Developer"}),St.jsx("h1",{children:"Merhaba, ben Funda Mintemur"}),St.jsx("p",{className:"lead",children:"Modern, responsive ve kullanıcı dostu web uygulamaları geliştiriyorum."}),St.jsxs("div",{className:"hero-buttons",children:[St.jsx("a",{href:"#projects",className:"btn btn-primary",children:"Projeleri Gör"}),St.jsx("a",{href:"#contact",className:"btn btn-secondary",children:"Benimle İletişime Geç"})]})]}),St.jsxs("div",{className:"hero-card",children:[St.jsx("img",{src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",alt:"Yazılım geliştirme temalı masa görüntüsü",loading:"lazy"}),St.jsx("p",{children:"Antalya, Türkiye"})]})]})]}),St.jsxs("main",{children:[St.jsx(ws,{id:"about",title:"Hakkımda",subtitle:"Kısaca Ben",children:St.jsx("p",{className:"card",children:"Bilgisayar mühendisliği eğitimi ile yazılım geliştirme alanında güçlü bir temel oluşturdum. Çalışan kod yazmanın ötesinde, kullanıcıların keyifle kullanacağı çözümler üretmeye odaklanırım. Teknik problemleri sabırla analiz eder, sürdürülebilir çözümler geliştiririm."})}),St.jsxs(ws,{id:"skills",title:"Teknik Yetenekler",subtitle:"Neler Kullanıyorum",children:[St.jsx("div",{className:"grid-two",children:Object.entries(yA).map(([r,l])=>St.jsxs("article",{className:"card",children:[St.jsx("span",{className:"card-icon",children:RA(r)}),St.jsx("h3",{children:r}),St.jsx("div",{className:"chips",children:l.map(u=>St.jsx("span",{children:u},u))})]},r))}),St.jsxs("article",{className:"card",children:[St.jsx("span",{className:"card-icon",children:St.jsx(MA,{})}),St.jsx("h3",{children:"Kişisel Beceriler"}),St.jsx("div",{className:"chips",children:EA.map(r=>St.jsx("span",{children:r},r))})]})]}),St.jsx(ws,{id:"experience",title:"İş Deneyimi",subtitle:"Kariyer Yolculuğu",children:St.jsx("div",{className:"timeline",children:bA.map(r=>St.jsxs("article",{className:"card",children:[St.jsx("span",{className:"card-icon",children:St.jsx(Dv,{})}),St.jsxs("h3",{children:[r.role,r.company?` - ${r.company}`:""]}),St.jsxs("p",{className:"muted",children:[r.place," | ",r.period]}),St.jsx("p",{children:r.text}),St.jsx("div",{className:"chips",children:r.stack.map(l=>St.jsx("span",{children:l},l))})]},`${r.role}-${r.period}`))})}),St.jsx(ws,{id:"projects",title:"Projeler",subtitle:"Öne Çıkan Çalışmalar",children:St.jsx("div",{className:"grid-three",children:TA.map(r=>St.jsxs("article",{className:"card",children:[St.jsx("span",{className:"card-icon",children:St.jsx(vA,{})}),St.jsx("h3",{children:r.title}),St.jsx("p",{children:r.description}),St.jsx("div",{className:"chips",children:r.tags.map(l=>St.jsx("span",{children:l},l))})]},r.title))})}),St.jsx(ws,{id:"github",title:"GitHub Projeleri",subtitle:"Kodlarımı İnceleyin",children:St.jsx("div",{className:"grid-two",children:AA.map(r=>St.jsxs("article",{className:"card",children:[St.jsx("span",{className:"card-icon",children:St.jsx(X_,{})}),St.jsx("h3",{children:r.name}),St.jsx("p",{children:r.note}),St.jsx("a",{className:"inline-link",href:r.url,target:"_blank",rel:"noreferrer",children:"GitHub Profiline Git"})]},r.name))})}),St.jsx(ws,{id:"contact",title:"İletişim",subtitle:"Birlikte Çalışalım",children:St.jsxs("div",{className:"grid-two",children:[St.jsxs("article",{className:"card",children:[St.jsx("span",{className:"card-icon",children:St.jsx(gA,{})}),St.jsx("h3",{children:"İletişim Bilgileri"}),St.jsxs("ul",{className:"contact-list",children:[St.jsxs("li",{className:"contact-item",children:[St.jsx("span",{className:"contact-label",children:"E-posta"}),St.jsx("a",{className:"contact-link",href:"mailto:mintemurfunda3@gmail.com",children:"mintemurfunda3@gmail.com"})]}),St.jsxs("li",{className:"contact-item",children:[St.jsxs("span",{className:"contact-label",children:[St.jsx(mA,{className:"inline-ico"}),"Konum"]}),St.jsx("span",{className:"contact-value",children:"Antalya, Türkiye"})]})]})]}),St.jsxs("article",{className:"card",children:[St.jsx("span",{className:"card-icon",children:St.jsx(pA,{})}),St.jsx("h3",{children:"Sosyal Medya"}),St.jsxs("ul",{className:"contact-list",children:[St.jsx("li",{className:"contact-item",children:St.jsxs("a",{className:"social-link",href:"https://github.com/fundamintemur",target:"_blank",rel:"noreferrer",children:[St.jsx(X_,{className:"inline-ico"}),"GitHub"]})}),St.jsx("li",{className:"contact-item",children:St.jsxs("a",{className:"social-link",href:"https://www.linkedin.com/in/funda-mintemur-172036191/",target:"_blank",rel:"noreferrer",children:[St.jsx(_A,{className:"inline-ico"}),"LinkedIn"]})})]})]})]})})]})]})]})}WS.createRoot(document.getElementById("root")).render(St.jsx(ko.StrictMode,{children:St.jsx(CA,{})}));

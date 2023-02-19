(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Kr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Vr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?ds(r):Vr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(K(e))return e}}const fs=/;(?![^(]*\))/g,cs=/:([^]+)/,us=/\/\*.*?\*\//gs;function ds(e){const t={};return e.replace(us,"").split(fs).forEach(n=>{if(n){const r=n.split(cs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qr(e){let t="";if(te(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=qr(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ms="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ps=Kr(ms);function ji(e){return!!e||e===""}function hs(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Un(e[r],t[r]);return n}function Un(e,t){if(e===t)return!0;let n=Ma(e),r=Ma(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ht(e),r=Ht(t),n||r)return e===t;if(n=M(e),r=M(t),n||r)return n&&r?hs(e,t):!1;if(n=K(e),r=K(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Un(e[o],t[o]))return!1}}return String(e)===String(t)}function Di(e,t){return e.findIndex(n=>Un(n,t))}const ln=e=>te(e)?e:e==null?"":M(e)||K(e)&&(e.toString===Hi||!L(e.toString))?JSON.stringify(e,zi,2):String(e),zi=(e,t)=>t&&t.__v_isRef?zi(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Yn(t)?{[`Set(${t.size})`]:[...t.values()]}:K(t)&&!M(t)&&!Ui(t)?String(t):t,q={},yt=[],Ce=()=>{},gs=()=>!1,vs=/^on[^a-z]/,Bn=e=>vs.test(e),Xr=e=>e.startsWith("onUpdate:"),le=Object.assign,Jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bs=Object.prototype.hasOwnProperty,z=(e,t)=>bs.call(e,t),M=Array.isArray,xt=e=>Qt(e)==="[object Map]",Yn=e=>Qt(e)==="[object Set]",Ma=e=>Qt(e)==="[object Date]",L=e=>typeof e=="function",te=e=>typeof e=="string",Ht=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",$i=e=>K(e)&&L(e.then)&&L(e.catch),Hi=Object.prototype.toString,Qt=e=>Hi.call(e),ys=e=>Qt(e).slice(8,-1),Ui=e=>Qt(e)==="[object Object]",Gr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xs=/-(\w)/g,Re=Wn(e=>e.replace(xs,(t,n)=>n?n.toUpperCase():"")),ws=/\B([A-Z])/g,Ct=Wn(e=>e.replace(ws,"-$1").toLowerCase()),Kn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),sr=Wn(e=>e?`on${Kn(e)}`:""),Nn=(e,t)=>!Object.is(e,t),On=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},yr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fa;const _s=()=>Fa||(Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let we;class ks{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function As(e,t=we){t&&t.active&&t.effects.push(e)}function Os(){return we}const Zr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bi=e=>(e.w&Je)>0,Yi=e=>(e.n&Je)>0,Es=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},Cs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Bi(a)&&!Yi(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},xr=new WeakMap;let Ft=0,Je=1;const wr=30;let ke;const ut=Symbol(""),_r=Symbol("");class Qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,As(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,qe=!0,Je=1<<++Ft,Ft<=wr?Es(this):Ra(this),this.fn()}finally{Ft<=wr&&Cs(this),Je=1<<--Ft,ke=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Wi=[];function Pt(){Wi.push(qe),qe=!1}function Tt(){const e=Wi.pop();qe=e===void 0?!0:e}function de(e,t,n){if(qe&&ke){let r=xr.get(e);r||xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Zr()),Ki(a)}}function Ki(e,t){let n=!1;Ft<=wr?Yi(e)||(e.n|=Je,n=!Bi(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function ze(e,t,n,r,a,i){const o=xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?Gr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),xt(e)&&s.push(o.get(_r)));break;case"delete":M(e)||(s.push(o.get(ut)),xt(e)&&s.push(o.get(_r)));break;case"set":xt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&kr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);kr(Zr(l))}}function kr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&La(r);for(const r of n)r.computed||La(r)}function La(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ps=Kr("__proto__,__v_isRef,__isVue"),Vi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht)),Ts=ea(),Ss=ea(!1,!0),Is=ea(!0),ja=Ns();function Ns(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pt();const r=H(this)[t].apply(this,n);return Tt(),r}}),e}function Ms(e){const t=H(this);return de(t,"has",e),t.hasOwnProperty(e)}function ea(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Xs:Zi:t?Gi:Ji).get(r))return r;const o=M(r);if(!e){if(o&&z(ja,a))return Reflect.get(ja,a,i);if(a==="hasOwnProperty")return Ms}const s=Reflect.get(r,a,i);return(Ht(a)?Vi.has(a):Ps(a))||(e||de(r,"get",a),t)?s:se(s)?o&&Gr(a)?s:s.value:K(s)?e?Qi(s):ra(s):s}}const Fs=qi(),Rs=qi(!0);function qi(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&se(o)&&!se(a))return!1;if(!e&&(!Ar(a)&&!Ut(a)&&(o=H(o),a=H(a)),!M(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=M(n)&&Gr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Nn(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Ls(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function js(e,t){const n=Reflect.has(e,t);return(!Ht(t)||!Vi.has(t))&&de(e,"has",t),n}function Ds(e){return de(e,"iterate",M(e)?"length":ut),Reflect.ownKeys(e)}const Xi={get:Ts,set:Fs,deleteProperty:Ls,has:js,ownKeys:Ds},zs={get:Is,set(e,t){return!0},deleteProperty(e,t){return!0}},$s=le({},Xi,{get:Ss,set:Rs}),ta=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Vn(a),s=r?ta:n?oa:ia;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function un(e,t=!1){return e=e.__v_raw,!t&&de(H(e),"iterate",ut),Reflect.get(e,"size",e)}function Da(e){e=H(e);const t=H(this);return Vn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function za(e,t){t=H(t);const n=H(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Nn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function $a(e){const t=H(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Ha(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?ta:e?oa:ia;return!e&&de(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function mn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ta:t?oa:ia;return!t&&de(i,"iterate",l?_r:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Hs(){const e={get(i){return fn(this,i)},get size(){return un(this)},has:cn,add:Da,set:za,delete:$a,clear:Ha,forEach:dn(!1,!1)},t={get(i){return fn(this,i,!1,!0)},get size(){return un(this)},has:cn,add:Da,set:za,delete:$a,clear:Ha,forEach:dn(!1,!0)},n={get(i){return fn(this,i,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:dn(!0,!1)},r={get(i){return fn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=mn(i,!1,!1),n[i]=mn(i,!0,!1),t[i]=mn(i,!1,!0),r[i]=mn(i,!0,!0)}),[e,n,t,r]}const[Us,Bs,Ys,Ws]=Hs();function na(e,t){const n=t?e?Ws:Ys:e?Bs:Us;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Ks={get:na(!1,!1)},Vs={get:na(!1,!0)},qs={get:na(!0,!1)},Ji=new WeakMap,Gi=new WeakMap,Zi=new WeakMap,Xs=new WeakMap;function Js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gs(e){return e.__v_skip||!Object.isExtensible(e)?0:Js(ys(e))}function ra(e){return Ut(e)?e:aa(e,!1,Xi,Ks,Ji)}function Zs(e){return aa(e,!1,$s,Vs,Gi)}function Qi(e){return aa(e,!0,zs,qs,Zi)}function aa(e,t,n,r,a){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Gs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return Ut(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Ar(e){return!!(e&&e.__v_isShallow)}function eo(e){return wt(e)||Ut(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function to(e){return Mn(e,"__v_skip",!0),e}const ia=e=>K(e)?ra(e):e,oa=e=>K(e)?Qi(e):e;function Qs(e){qe&&ke&&(e=H(e),Ki(e.dep||(e.dep=Zr())))}function el(e,t){e=H(e);const n=e.dep;n&&kr(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function tl(e){return se(e)?e.value:e}const nl={get:(e,t,n)=>tl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function no(e){return wt(e)?e:new Proxy(e,nl)}var ro;class rl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ro]=!1,this._dirty=!0,this.effect=new Qr(t,()=>{this._dirty||(this._dirty=!0,el(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Qs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ro="__v_isReadonly";function al(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new rl(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){qn(i,t,n)}return a}function Pe(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&$i(i)&&i.catch(o=>{qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}il(e,n,a,r)}function il(e,t,n,r=!0){console.error(e)}let Bt=!1,Or=!1;const ae=[];let Me=0;const _t=[];let De=null,it=0;const ao=Promise.resolve();let sa=null;function ol(e){const t=sa||ao;return e?t.then(this?e.bind(this):e):t}function sl(e){let t=Me+1,n=ae.length;for(;t<n;){const r=t+n>>>1;Yt(ae[r])<e?t=r+1:n=r}return t}function la(e){(!ae.length||!ae.includes(e,Bt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ae.push(e):ae.splice(sl(e.id),0,e),io())}function io(){!Bt&&!Or&&(Or=!0,sa=ao.then(so))}function ll(e){const t=ae.indexOf(e);t>Me&&ae.splice(t,1)}function fl(e){M(e)?_t.push(...e):(!De||!De.includes(e,e.allowRecurse?it+1:it))&&_t.push(e),io()}function Ua(e,t=Bt?Me+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function oo(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,De){De.push(...t);return}for(De=t,De.sort((n,r)=>Yt(n)-Yt(r)),it=0;it<De.length;it++)De[it]();De=null,it=0}}const Yt=e=>e.id==null?1/0:e.id,cl=(e,t)=>{const n=Yt(e)-Yt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function so(e){Or=!1,Bt=!0,ae.sort(cl);const t=Ce;try{for(Me=0;Me<ae.length;Me++){const n=ae[Me];n&&n.active!==!1&&Xe(n,null,14)}}finally{Me=0,ae.length=0,oo(),Bt=!1,sa=null,(ae.length||_t.length)&&so()}}function ul(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(k=>te(k)?k.trim():k)),m&&(a=n.map(yr))}let s,l=r[s=sr(t)]||r[s=sr(Re(t))];!l&&i&&(l=r[s=sr(Ct(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function lo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=lo(c,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(K(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):le(o,i),K(e)&&r.set(e,o),o)}function Xn(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Ct(t))||z(e,t))}let be=null,fo=null;function Fn(e){const t=be;return be=e,fo=e&&e.type.__scopeId||null,t}function dl(e,t=be,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Za(-1);const i=Fn(t);let o;try{o=e(...a)}finally{Fn(i),r._d&&Za(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function lr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:R,inheritAttrs:N}=e;let $,w;const C=Fn(e);try{if(n.shapeFlag&4){const j=a||r;$=Ne(d.call(j,j,m,i,k,v,R)),w=l}else{const j=t;$=Ne(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),w=t.props?l:ml(l)}}catch(j){jt.length=0,qn(j,e,1),$=pe(Wt)}let E=$;if(w&&N!==!1){const j=Object.keys(w),{shapeFlag:U}=E;j.length&&U&7&&(o&&j.some(Xr)&&(w=pl(w,o)),E=At(E,w))}return n.dirs&&(E=At(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),$=E,Fn(C),$}const ml=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},pl=(e,t)=>{const n={};for(const r in e)(!Xr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function hl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Xn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ba(r,o,c):!0:!!o;return!1}function Ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function gl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const vl=e=>e.__isSuspense;function bl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):fl(e)}function yl(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){const r=ee||be;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const pn={};function Cn(e,t,n){return co(e,t,n)}function co(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=Os()===(ee==null?void 0:ee.scope)?ee:null;let l,c=!1,d=!1;if(se(e)?(l=()=>e.value,c=Ar(e)):wt(e)?(l=()=>e,r=!0):M(e)?(d=!0,c=e.some(E=>wt(E)||Ar(E)),l=()=>e.map(E=>{if(se(E))return E.value;if(wt(E))return lt(E);if(L(E))return Xe(E,s,2)})):L(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Pe(e,s,3,[v])}:l=Ce,t&&r){const E=l;l=()=>lt(E())}let m,v=E=>{m=w.onStop=()=>{Xe(E,s,4)}},k;if(Vt)if(v=Ce,t?n&&Pe(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=vf();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Ce;let R=d?new Array(e.length).fill(pn):pn;const N=()=>{if(w.active)if(t){const E=w.run();(r||c||(d?E.some((j,U)=>Nn(j,R[U])):Nn(E,R)))&&(m&&m(),Pe(t,s,3,[E,R===pn?void 0:d&&R[0]===pn?[]:R,v]),R=E)}else w.run()};N.allowRecurse=!!t;let $;a==="sync"?$=N:a==="post"?$=()=>ue(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),$=()=>la(N));const w=new Qr(l,$);t?n?N():R=w.run():a==="post"?ue(w.run.bind(w),s&&s.suspense):w.run();const C=()=>{w.stop(),s&&s.scope&&Jr(s.scope.effects,w)};return k&&k.push(C),C}function xl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?uo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ee;Ot(this);const s=co(a,i.bind(r),n);return o?Ot(o):dt(),s}function uo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function lt(e,t){if(!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))lt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)lt(e[n],t);else if(Yn(e)||xt(e))e.forEach(n=>{lt(n,t)});else if(Ui(e))for(const n in e)lt(e[n],t);return e}function fa(e){return L(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader,mo=e=>e.type.__isKeepAlive;function wl(e,t){po(e,"a",t)}function _l(e,t){po(e,"da",t)}function po(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Jn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)mo(a.parent.vnode)&&kl(r,t,n,a),a=a.parent}}function kl(e,t,n,r){const a=Jn(t,e,r,!0);ho(()=>{Jr(r[t],a)},n)}function Jn(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Pt(),Ot(n);const s=Pe(t,n,e,o);return dt(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ee)=>(!Vt||e==="sp")&&Jn(e,(...r)=>t(...r),n),Al=Be("bm"),Ol=Be("m"),El=Be("bu"),Cl=Be("u"),Pl=Be("bum"),ho=Be("um"),Tl=Be("sp"),Sl=Be("rtg"),Il=Be("rtc");function Nl(e,t=ee){Jn("ec",e,t)}function Ya(e,t){const n=be;if(n===null)return e;const r=Qn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=q]=t[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&lt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Pt(),Pe(l,n,8,[e.el,s,e,t]),Tt())}}const go="components";function Ml(e,t){return Rl(go,e,!0,t)||e}const Fl=Symbol();function Rl(e,t,n=!0,r=!1){const a=be||ee;if(a){const i=a.type;if(e===go){const s=pf(i,!1);if(s&&(s===t||s===Re(t)||s===Kn(Re(t))))return i}const o=Wa(a[e]||i[e],t)||Wa(a.appContext[e],t);return!o&&r?i:o}}function Wa(e,t){return e&&(e[t]||e[Re(t)]||e[Kn(Re(t))])}function Ll(e,t,n,r){let a;const i=n&&n[r];if(M(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(K(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Er=e=>e?Eo(e)?Qn(e)||e.proxy:Er(e.parent):null,Lt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$emit:e=>e.emit,$options:e=>ca(e),$forceUpdate:e=>e.f||(e.f=()=>la(e.update)),$nextTick:e=>e.n||(e.n=ol.bind(e.proxy)),$watch:e=>xl.bind(e)}),fr=(e,t)=>e!==q&&!e.__isScriptSetup&&z(e,t),jl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(fr(r,t))return o[t]=1,r[t];if(a!==q&&z(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&z(c,t))return o[t]=3,i[t];if(n!==q&&z(n,t))return o[t]=4,n[t];Cr&&(o[t]=0)}}const d=Lt[t];let m,v;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&z(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return fr(a,t)?(a[t]=n,!0):r!==q&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&z(e,o)||fr(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(Lt,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Cr=!0;function Dl(e){const t=ca(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:R,activated:N,deactivated:$,beforeDestroy:w,beforeUnmount:C,destroyed:E,unmounted:j,render:U,renderTracked:fe,renderTriggered:re,errorCaptured:ye,serverPrefetch:ge,expose:Le,inheritAttrs:It,components:rn,directives:an,filters:ar}=t;if(c&&zl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const Y=o[G];L(Y)&&(r[G]=Y.bind(n))}if(a){const G=a.call(n,n);K(G)&&(e.data=ra(G))}if(Cr=!0,i)for(const G in i){const Y=i[G],et=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ce,on=!L(Y)&&L(Y.set)?Y.set.bind(n):Ce,tt=ve({get:et,set:on});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Te=>tt.value=Te})}if(s)for(const G in s)vo(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{yl(Y,G[Y])})}d&&Ka(d,e,"c");function ie(G,Y){M(Y)?Y.forEach(et=>G(et.bind(n))):Y&&G(Y.bind(n))}if(ie(Al,m),ie(Ol,v),ie(El,k),ie(Cl,R),ie(wl,N),ie(_l,$),ie(Nl,ye),ie(Il,fe),ie(Sl,re),ie(Pl,C),ie(ho,j),ie(Tl,ge),M(Le))if(Le.length){const G=e.exposed||(e.exposed={});Le.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:et=>n[Y]=et})})}else e.exposed||(e.exposed={});U&&e.render===Ce&&(e.render=U),It!=null&&(e.inheritAttrs=It),rn&&(e.components=rn),an&&(e.directives=an)}function zl(e,t,n=Ce,r=!1){M(e)&&(e=Pr(e));for(const a in e){const i=e[a];let o;K(i)?"default"in i?o=En(i.from||a,i.default,!0):o=En(i.from||a):o=En(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ka(e,t,n){Pe(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vo(e,t,n,r){const a=r.includes(".")?uo(n,r):()=>n[r];if(te(e)){const i=t[e];L(i)&&Cn(a,i)}else if(L(e))Cn(a,e.bind(n));else if(K(e))if(M(e))e.forEach(i=>vo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Cn(a,i,e)}}function ca(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Rn(l,c,o,!0)),Rn(l,t,o)),K(t)&&i.set(t,l),l}function Rn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Rn(e,i,n,!0),a&&a.forEach(o=>Rn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$l[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $l={data:Va,props:at,emits:at,methods:at,computed:at,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:at,directives:at,watch:Ul,provide:Va,inject:Hl};function Va(e,t){return t?e?function(){return le(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Hl(e,t){return at(Pr(e),Pr(t))}function Pr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function at(e,t){return e?le(le(Object.create(null),e),t):t}function Ul(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function Bl(e,t,n,r=!1){const a={},i={};Mn(i,Zn,1),e.propsDefaults=Object.create(null),bo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Zs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Yl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Xn(e.emitsOptions,v))continue;const k=t[v];if(l)if(z(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const R=Re(v);a[R]=Tr(l,s,R,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{bo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=Ct(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Tr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function bo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(An(l))continue;const c=t[l];let d;a&&z(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Xn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Tr(a,l,m,c[m],e,!z(c,m))}}return o}function Tr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ot(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function yo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=yo(m,t,!0);le(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return K(e)&&r.set(e,yt),yt;if(M(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);qa(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Re(d);if(qa(m)){const v=i[d],k=o[m]=M(v)||L(v)?{type:v}:Object.assign({},v);if(k){const R=Ga(Boolean,k.type),N=Ga(String,k.type);k[0]=R>-1,k[1]=N<0||R<N,(R>-1||z(k,"default"))&&s.push(m)}}}const c=[o,s];return K(e)&&r.set(e,c),c}function qa(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ja(e,t){return Xa(e)===Xa(t)}function Ga(e,t){return M(t)?t.findIndex(n=>Ja(n,e)):L(t)&&Ja(t,e)?0:-1}const xo=e=>e[0]==="_"||e==="$stable",ua=e=>M(e)?e.map(Ne):[Ne(e)],Wl=(e,t,n)=>{if(t._n)return t;const r=dl((...a)=>ua(t(...a)),n);return r._c=!1,r},wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(xo(a))continue;const i=e[a];if(L(i))t[a]=Wl(a,i,r);else if(i!=null){const o=ua(i);t[a]=()=>o}}},_o=(e,t)=>{const n=ua(t);e.slots.default=()=>n},Kl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Mn(t,"_",n)):wo(t,e.slots={})}else e.slots={},t&&_o(e,t);Mn(e.slots,Zn,1)},Vl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,wo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!xo(s)&&!(s in o)&&delete a[s]};function ko(){return{app:null,config:{isNativeTag:gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ql=0;function Xl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!K(a)&&(a=null);const i=ko(),o=new Set;let s=!1;const l=i.app={_uid:ql++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=pe(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,Qn(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Sr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,k)=>Sr(v,t&&(M(t)?t[k]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?Qn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,z(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),L(l))Xe(l,s,12,[o,d]);else{const v=te(l),k=se(l);if(v||k){const R=()=>{if(e.f){const N=v?z(m,l)?m[l]:d[l]:l.value;a?M(N)&&Jr(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,z(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,ue(R,n)):R()}}}const ue=bl;function Jl(e){return Gl(e)}function Gl(e,t){const n=_s();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ce,insertStaticContent:R}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Mt(f,u)&&(g=sn(f),Te(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case Gn:$(f,u,p,g);break;case Wt:w(f,u,p,g);break;case cr:f==null&&C(u,p,g,A);break;case _e:rn(f,u,p,g,h,x,A,y,_);break;default:P&1?U(f,u,p,g,h,x,A,y,_):P&6?an(f,u,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,_,ht)}S!=null&&h&&Sr(S,f&&f.ref,x,u||f,!u)},$=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},w=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},C=(f,u,p,g)=>{[f.el,f.anchor]=R(f.children,u,p,g,f.el,f.anchor)},E=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},j=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?fe(u,p,g,h,x,A,y,_):ge(f,u,h,x,A,y,_)},fe=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:S,props:P,shapeFlag:I,transition:F,dirs:D}=f;if(_=f.el=o(f.type,x,P&&P.is,P),I&8?d(_,f.children):I&16&&ye(f.children,_,null,g,h,x&&S!=="foreignObject",A,y),D&&nt(f,null,g,"created"),re(_,f,f.scopeId,A,g),P){for(const B in P)B!=="value"&&!An(B)&&i(_,B,null,P[B],x,f.children,g,h,je);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ie(b,g,f)}D&&nt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||W||D)&&ue(()=>{b&&Ie(b,g,f),W&&F.enter(_),D&&nt(f,null,g,"mounted")},h)},re=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;re(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ye=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Ve(f[b]):Ne(f[b]);N(null,S,u,p,g,h,x,A,y)}},ge=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const P=f.props||q,I=u.props||q;let F;p&&rt(p,!1),(F=I.onVnodeBeforeUpdate)&&Ie(F,p,u,f),S&&nt(u,f,p,"beforeUpdate"),p&&rt(p,!0);const D=h&&u.type!=="foreignObject";if(b?Le(f.dynamicChildren,b,y,p,g,D,x):A||Y(f,u,y,null,p,g,D,x,!1),_>0){if(_&16)It(y,u,P,I,p,g,h);else if(_&2&&P.class!==I.class&&i(y,"class",null,I.class,h),_&4&&i(y,"style",P.style,I.style,h),_&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Q=W[B],xe=P[Q],gt=I[Q];(gt!==xe||Q==="value")&&i(y,Q,xe,gt,h,f.children,p,g,je)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&It(y,u,P,I,p,g,h);((F=I.onVnodeUpdated)||S)&&ue(()=>{F&&Ie(F,p,u,f),S&&nt(u,f,p,"updated")},g)},Le=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===_e||!Mt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,g,h,x,A,!0)}},It=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==q)for(const y in p)!An(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,je);for(const y in g){if(An(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,je)}"value"in g&&i(f,"value",p.value,g.value)}},rn=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:I,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(S,p,g),ye(u.children,p,S,h,x,A,y,_)):P>0&&P&64&&I&&f.dynamicChildren?(Le(f.dynamicChildren,I,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&Ao(f,u,!0)):Y(f,u,p,S,h,x,A,y,_)},an=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):ar(u,p,g,h,x,A,_):Ca(f,u,_)},ar=(f,u,p,g,h,x,A)=>{const y=f.component=ff(f,g,h);if(mo(f)&&(y.ctx.renderer=ht),cf(y),y.asyncDep){if(h&&h.registerDep(y,ie),!f.el){const _=y.subTree=pe(Wt);w(null,_,u,p)}return}ie(y,f,u,p,h,x,A)},Ca=(f,u,p)=>{const g=u.component=f.component;if(hl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,ll(g.update),g.update();else u.el=f.el,g.vnode=u},ie=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:I,parent:F,vnode:D}=f,W=S,B;rt(f,!1),S?(S.el=D.el,G(f,S,A)):S=D,P&&On(P),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Ie(B,F,S,D),rt(f,!0);const Q=lr(f),xe=f.subTree;f.subTree=Q,N(xe,Q,m(xe.el),sn(xe),f,h,x),S.el=Q.el,W===null&&gl(f,Q.el),I&&ue(I,h),(B=S.props&&S.props.onVnodeUpdated)&&ue(()=>Ie(B,F,S,D),h)}else{let S;const{el:P,props:I}=u,{bm:F,m:D,parent:W}=f,B=Pn(u);if(rt(f,!1),F&&On(F),!B&&(S=I&&I.onVnodeBeforeMount)&&Ie(S,W,u),rt(f,!0),P&&or){const Q=()=>{f.subTree=lr(f),or(P,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=lr(f);N(null,Q,p,g,f,h,x),u.el=Q.el}if(D&&ue(D,h),!B&&(S=I&&I.onVnodeMounted)){const Q=u;ue(()=>Ie(S,W,Q),h)}(u.shapeFlag&256||W&&Pn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Qr(y,()=>la(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,rt(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Yl(f,u.props,g,p),Vl(f,u.children,p),Pt(),Ua(),Tt()},Y=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:I,shapeFlag:F}=u;if(I>0){if(I&128){on(b,P,p,g,h,x,A,y,_);return}else if(I&256){et(b,P,p,g,h,x,A,y,_);return}}F&8?(S&16&&je(b,h,x),P!==b&&d(p,P)):S&16?F&16?on(b,P,p,g,h,x,A,y,_):je(b,h,x,!0):(S&8&&d(p,""),F&16&&ye(P,p,g,h,x,A,y,_))},et=(f,u,p,g,h,x,A,y,_)=>{f=f||yt,u=u||yt;const b=f.length,S=u.length,P=Math.min(b,S);let I;for(I=0;I<P;I++){const F=u[I]=_?Ve(u[I]):Ne(u[I]);N(f[I],F,p,null,h,x,A,y,_)}b>S?je(f,h,x,!0,!1,P):ye(u,p,g,h,x,A,y,_,P)},on=(f,u,p,g,h,x,A,y,_)=>{let b=0;const S=u.length;let P=f.length-1,I=S-1;for(;b<=P&&b<=I;){const F=f[b],D=u[b]=_?Ve(u[b]):Ne(u[b]);if(Mt(F,D))N(F,D,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=I;){const F=f[P],D=u[I]=_?Ve(u[I]):Ne(u[I]);if(Mt(F,D))N(F,D,p,null,h,x,A,y,_);else break;P--,I--}if(b>P){if(b<=I){const F=I+1,D=F<S?u[F].el:g;for(;b<=I;)N(null,u[b]=_?Ve(u[b]):Ne(u[b]),p,D,h,x,A,y,_),b++}}else if(b>I)for(;b<=P;)Te(f[b],h,x,!0),b++;else{const F=b,D=b,W=new Map;for(b=D;b<=I;b++){const me=u[b]=_?Ve(u[b]):Ne(u[b]);me.key!=null&&W.set(me.key,b)}let B,Q=0;const xe=I-D+1;let gt=!1,Sa=0;const Nt=new Array(xe);for(b=0;b<xe;b++)Nt[b]=0;for(b=F;b<=P;b++){const me=f[b];if(Q>=xe){Te(me,h,x,!0);continue}let Se;if(me.key!=null)Se=W.get(me.key);else for(B=D;B<=I;B++)if(Nt[B-D]===0&&Mt(me,u[B])){Se=B;break}Se===void 0?Te(me,h,x,!0):(Nt[Se-D]=b+1,Se>=Sa?Sa=Se:gt=!0,N(me,u[Se],p,null,h,x,A,y,_),Q++)}const Ia=gt?Zl(Nt):yt;for(B=Ia.length-1,b=xe-1;b>=0;b--){const me=D+b,Se=u[me],Na=me+1<S?u[me+1].el:g;Nt[b]===0?N(null,Se,p,Na,h,x,A,y,_):gt&&(B<0||b!==Ia[B]?tt(Se,p,Na,2):B--)}}},tt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){tt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,ht);return}if(A===_e){r(x,u,p);for(let P=0;P<_.length;P++)tt(_[P],u,p,g);r(f.anchor,u,p);return}if(A===cr){E(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),h);else{const{leave:P,delayLeave:I,afterLeave:F}=y,D=()=>r(x,u,p),W=()=>{P(x,()=>{D(),F&&F()})};I?I(x,D,W):W()}else r(x,u,p)},Te=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:I}=f;if(y!=null&&Sr(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const F=S&1&&I,D=!Pn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Ie(W,u,f),S&6)ls(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}F&&nt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,ht,g):b&&(x!==_e||P>0&&P&64)?je(b,u,p,!1,!0):(x===_e&&P&384||!h&&S&16)&&je(_,u,p),g&&Pa(f)}(D&&(W=A&&A.onVnodeUnmounted)||F)&&ue(()=>{W&&Ie(W,u,f),F&&nt(f,null,u,"unmounted")},p)},Pa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===_e){ss(p,g);return}if(u===cr){j(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},ss=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},ls=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&On(g),h.stop(),x&&(x.active=!1,Te(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Te(f[A],u,p,g,h)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ta=(f,u,p)=>{f==null?u._vnode&&Te(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ua(),oo(),u._vnode=f},ht={p:N,um:Te,m:tt,r:Pa,mt:ar,mc:ye,pc:Y,pbc:Le,n:sn,o:e};let ir,or;return t&&([ir,or]=t(ht)),{render:Ta,hydrate:ir,createApp:Xl(Ta,ir)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ao(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||Ao(o,s)),s.type===Gn&&(s.el=o.el)}}function Zl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ql=e=>e.__isTeleport,_e=Symbol(void 0),Gn=Symbol(void 0),Wt=Symbol(void 0),cr=Symbol(void 0),jt=[];let Oe=null;function ur(e=!1){jt.push(Oe=e?null:[])}function ef(){jt.pop(),Oe=jt[jt.length-1]||null}let Kt=1;function Za(e){Kt+=e}function tf(e){return e.dynamicChildren=Kt>0?Oe||yt:null,ef(),Kt>0&&Oe&&Oe.push(e),e}function dr(e,t,n,r,a,i){return tf(V(e,t,n,r,a,i,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",Oo=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||se(e)||L(e)?{i:be,r:e,k:t,f:!!n}:e:null;function V(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oo(t),ref:t&&Tn(t),scopeId:fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:be};return s?(da(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Kt>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const pe=nf;function nf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Fl)&&(e=Wt),Ir(e)){const s=At(e,t,!0);return n&&da(s,n),Kt>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(hf(e)&&(e=e.__vccOpts),t){t=rf(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=qr(s)),K(l)&&(eo(l)&&!M(l)&&(l=le({},l)),t.style=Vr(l))}const o=te(e)?1:vl(e)?128:Ql(e)?64:K(e)?4:L(e)?2:0;return V(e,t,n,r,a,o,i,!0)}function rf(e){return e?eo(e)||Zn in e?le({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?of(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Oo(s),ref:t&&t.ref?n&&a?M(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function af(e=" ",t=0){return pe(Gn,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?pe(Wt):M(e)?pe(_e,null,e.slice()):typeof e=="object"?Ve(e):pe(Gn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function da(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),da(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Zn in t)?t._ctx=be:a===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[af(t)]):n=8);e.children=t,e.shapeFlag|=n}function of(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qr([t.class,r.class]));else if(a==="style")t.style=Vr([t.style,r.style]);else if(Bn(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Pe(e,t,7,[n,r])}const sf=ko();let lf=0;function ff(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||sf,i={uid:lf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yo(r,a),emitsOptions:lo(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ul.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const Ot=e=>{ee=e,e.scope.on()},dt=()=>{ee&&ee.scope.off(),ee=null};function Eo(e){return e.vnode.shapeFlag&4}let Vt=!1;function cf(e,t=!1){Vt=t;const{props:n,children:r}=e.vnode,a=Eo(e);Bl(e,n,a,t),Kl(e,r);const i=a?uf(e,t):void 0;return Vt=!1,i}function uf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=to(new Proxy(e.ctx,jl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?mf(e):null;Ot(e),Pt();const i=Xe(r,e,0,[e.props,a]);if(Tt(),dt(),$i(i)){if(i.then(dt,dt),t)return i.then(o=>{Qa(e,o,t)}).catch(o=>{qn(o,e,0)});e.asyncDep=i}else Qa(e,i,t)}else Co(e,t)}function Qa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=no(t)),Co(e,n)}let ei;function Co(e,t,n){const r=e.type;if(!e.render){if(!t&&ei&&!r.render){const a=r.template||ca(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=ei(a,c)}}e.render=r.render||Ce}Ot(e),Pt(),Dl(e),Tt(),dt()}function df(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function mf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=df(e))},slots:e.slots,emit:e.emit,expose:t}}function Qn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(no(to(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}}))}function pf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function hf(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>al(e,t,Vt);function Po(e,t,n){const r=arguments.length;return r===2?K(t)&&!M(t)?Ir(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),pe(e,t,n))}const gf=Symbol(""),vf=()=>En(gf),bf="3.2.47",yf="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,ti=ot&&ot.createElement("template"),xf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(yf,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ti.innerHTML=r?`<svg>${e}</svg>`:e;const s=ti.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _f(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Nr(r,i,"");for(const i in n)Nr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ni=/\s*!important$/;function Nr(e,t,n){if(M(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kf(e,t);ni.test(n)?e.setProperty(Ct(r),n.replace(ni,""),"important"):e[r]=n}}const ri=["Webkit","Moz","ms"],mr={};function kf(e,t){const n=mr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return mr[t]=r;r=Kn(r);for(let a=0;a<ri.length;a++){const i=ri[a]+r;if(i in e)return mr[t]=i}return t}const ai="http://www.w3.org/1999/xlink";function Af(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ai,t.slice(6,t.length)):e.setAttributeNS(ai,t,n);else{const i=ps(t);n==null||i&&!ji(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Of(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ji(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function st(e,t,n,r){e.addEventListener(t,n,r)}function Ef(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Pf(t);if(r){const c=i[t]=If(r,a);st(e,s,c,l)}else o&&(Ef(e,s,o,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function Pf(e){let t;if(ii.test(e)){t={};let r;for(;r=e.match(ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let pr=0;const Tf=Promise.resolve(),Sf=()=>pr||(Tf.then(()=>pr=0),pr=Date.now());function If(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Nf(r,n.value),t,5,[r])};return n.value=e,n.attached=Sf(),n}function Nf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const oi=/^on[a-z]/,Mf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?wf(e,r,a):t==="style"?_f(e,n,r):Bn(t)?Xr(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ff(e,t,r,a))?Of(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Af(e,t,r,a))};function Ff(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&oi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oi.test(t)&&te(n)?!1:t in e}const Ln=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>On(t,n):t};function Rf(e){e.target.composing=!0}function si(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Lf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ln(a);const i=r||a.props&&a.props.type==="number";st(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=yr(s)),e._assign(s)}),n&&st(e,"change",()=>{e.value=e.value.trim()}),t||(st(e,"compositionstart",Rf),st(e,"compositionend",si),st(e,"change",si))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ln(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&yr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},jf={deep:!0,created(e,t,n){e._assign=Ln(n),st(e,"change",()=>{const r=e._modelValue,a=Df(e),i=e.checked,o=e._assign;if(M(r)){const s=Di(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(Yn(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(To(e,i))})},mounted:li,beforeUpdate(e,t,n){e._assign=Ln(n),li(e,t,n)}};function li(e,{value:t,oldValue:n},r){e._modelValue=t,M(t)?e.checked=Di(t,r.props.value)>-1:Yn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Un(t,To(e,!0)))}function Df(e){return"_value"in e?e._value:e.value}function To(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const zf=le({patchProp:Mf},xf);let fi;function $f(){return fi||(fi=Jl(zf))}const Hf=(...e)=>{const t=$f().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Uf(e){return te(e)?document.querySelector(e):e}const Bf="/vue-todo-app/assets/avatar-9981efd4.png",Yf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Wf={data(){return{task:[{Title:"Kapan turu?",done:!0},{Title:"Yoa",done:!1}],newTitle:""}},methods:{newTask(){this.task.push({Title:this.newTitle,done:!1})},deleteTask(e){this.task.splice(e,1)}},computed:{total(){return this.task.filter(e=>e).length},ongoing(){return this.task.filter(e=>!e.done).length},completed(){return this.task.filter(e=>e.done).length}},beforeMount(){const e=localStorage.getItem("tasks");e&&(this.task=JSON.parse(e))},watch:{task:{handler(e,t){localStorage.setItem("tasks",JSON.stringify(this.task))},deep:!0}}},Kf=V("div",{class:"profile"},[V("div",{class:"circle-avatar"},[V("img",{src:Bf,alt:""})]),V("div",{class:"user-name"},"@HelloWorld")],-1),Vf={class:"status"},qf={class:"total"},Xf=V("span",{class:"title"},"Total",-1),Jf={id:"total"},Gf={class:"ongoing"},Zf=V("span",{class:"title"},"Ongoing",-1),Qf={id:"ongoing"},ec={class:"completed"},tc=V("span",{class:"title"},"Completed",-1),nc={id:"completed"},rc={class:"header"},ac={class:"task"},ic={class:"task-item"},oc={class:"title"},sc={class:"checkbox"},lc=["onUpdate:modelValue"];function fc(e,t,n,r,a,i){const o=Ml("font-awesome-icon");return ur(),dr(_e,null,[V("aside",null,[Kf,V("div",Vf,[V("div",qf,[Xf,V("span",Jf,ln(i.total),1)]),V("div",Gf,[Zf,V("span",Qf,ln(i.ongoing),1)]),V("div",ec,[tc,V("span",nc,ln(i.completed),1)])])]),V("main",null,[V("div",rc,[V("button",{class:"add-task",role:"button",onClick:t[0]||(t[0]=(...s)=>i.newTask&&i.newTask(...s))},"Add Task"),Ya(V("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>a.newTitle=s),placeholder:"Task Title"},null,512),[[Lf,a.newTitle]])]),V("div",ac,[(ur(!0),dr(_e,null,Ll(a.task,(s,l)=>(ur(),dr("div",ic,[V("div",oc,ln(s.Title),1),V("div",sc,[Ya(V("input",{type:"checkbox","onUpdate:modelValue":c=>s.done=c},null,8,lc),[[jf,s.done]]),pe(o,{icon:"fa-solid fa-trash",class:"task-delete",onClick:c=>i.deleteTask(l)},null,8,["onClick"]),pe(o,{icon:"fa-solid fa-list-check",class:"task-list"})])]))),256))])])],64)}const cc=Yf(Wf,[["render",fc]]);function ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ci(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function uc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ui(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dc(e,t,n){return t&&ui(e.prototype,t),n&&ui(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ma(e,t){return pc(e)||gc(e,t)||So(e,t)||bc()}function en(e){return mc(e)||hc(e)||So(e)||vc()}function mc(e){if(Array.isArray(e))return Mr(e)}function pc(e){if(Array.isArray(e))return e}function hc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function So(e,t){if(e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var di=function(){},pa={},Io={},No=null,Mo={mark:di,measure:di};try{typeof window<"u"&&(pa=window),typeof document<"u"&&(Io=document),typeof MutationObserver<"u"&&(No=MutationObserver),typeof performance<"u"&&(Mo=performance)}catch{}var yc=pa.navigator||{},mi=yc.userAgent,pi=mi===void 0?"":mi,Ge=pa,J=Io,hi=No,hn=Mo;Ge.document;var Ye=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Fo=~pi.indexOf("MSIE")||~pi.indexOf("Trident/"),gn,vn,bn,yn,xn,$e="___FONT_AWESOME___",Fr=16,Ro="fa",Lo="svg-inline--fa",mt="data-fa-i2svg",Rr="data-fa-pseudo-element",xc="data-fa-pseudo-element-pending",ha="data-prefix",ga="data-icon",gi="fontawesome-i2svg",wc="async",_c=["HTML","HEAD","STYLE","SCRIPT"],jo=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",va=[X,Z];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var qt=tn((gn={},ne(gn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(gn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),gn)),Xt=tn((vn={},ne(vn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(vn,Z,{solid:"fass",regular:"fasr"}),vn)),Jt=tn((bn={},ne(bn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(bn,Z,{fass:"fa-solid",fasr:"fa-regular"}),bn)),kc=tn((yn={},ne(yn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(yn,Z,{"fa-solid":"fass","fa-regular":"fasr"}),yn)),Ac=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Do="fa-layers-text",Oc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ec=tn((xn={},ne(xn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(xn,Z,{900:"fass",400:"fasr"}),xn)),zo=[1,2,3,4,5,6,7,8,9,10],Cc=zo.concat([11,12,13,14,15,16,17,18,19,20]),Pc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Xt[X]).map(Gt.add.bind(Gt));Object.keys(Xt[Z]).map(Gt.add.bind(Gt));var Tc=[].concat(va,en(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(zo.map(function(e){return"".concat(e,"x")})).concat(Cc.map(function(e){return"w-".concat(e)})),Dt=Ge.FontAwesomeConfig||{};function Sc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ic(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Nc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Nc.forEach(function(e){var t=ma(e,2),n=t[0],r=t[1],a=Ic(Sc(n));a!=null&&(Dt[r]=a)})}var $o={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ro,replacementClass:Lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var Et=O(O({},$o),Dt);Et.autoReplaceSvg||(Et.observeMutations=!1);var T={};Object.keys($o).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Et[e]=n,zt.forEach(function(r){return r(T)})},get:function(){return Et[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Et.cssPrefix=t,zt.forEach(function(n){return n(T)})},get:function(){return Et.cssPrefix}});Ge.FontAwesomeConfig=T;var zt=[];function Mc(e){return zt.push(e),function(){zt.splice(zt.indexOf(e),1)}}var Ke=Fr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fc(e){if(!(!e||!Ye)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Rc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=Rc[Math.random()*62|0];return t}function St(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ba(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ho(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ho(e[n]),'" ')},"").trim()}function er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ya(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function jc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Dc(e){var t=e.transform,n=e.width,r=n===void 0?Fr:n,a=e.height,i=a===void 0?Fr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Fo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var zc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Uo(){var e=Ro,t=Lo,n=T.cssPrefix,r=T.replacementClass,a=zc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var vi=!1;function hr(){T.autoAddCss&&!vi&&(Fc(Uo()),vi=!0)}var $c={mixout:function(){return{dom:{css:Uo,insertCss:hr}}},hooks:function(){return{beforeDOMElementCreation:function(){hr()},beforeI2svg:function(){hr()}}}},He=Ge||{};He[$e]||(He[$e]={});He[$e].styles||(He[$e].styles={});He[$e].hooks||(He[$e].hooks={});He[$e].shims||(He[$e].shims=[]);var Ee=He[$e],Bo=[],Hc=function e(){J.removeEventListener("DOMContentLoaded",e),Dn=1,Bo.map(function(t){return t()})},Dn=!1;Ye&&(Dn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Dn||J.addEventListener("DOMContentLoaded",Hc));function Uc(e){Ye&&(Dn?setTimeout(e,0):Bo.push(e))}function nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ho(e):"<".concat(t," ").concat(Lc(r),">").concat(i.map(nn).join(""),"</").concat(t,">")}function bi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Bc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},gr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Bc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Yc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Lr(e){var t=Yc(e);return t.length===1?t[0].toString(16):null}function Wc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function jr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yi(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,yi(t)):Ee.styles[e]=O(O({},Ee.styles[e]||{}),i),e==="fas"&&jr("fa",t)}var wn,_n,kn,vt=Ee.styles,Kc=Ee.shims,Vc=(wn={},ne(wn,X,Object.values(Jt[X])),ne(wn,Z,Object.values(Jt[Z])),wn),xa=null,Yo={},Wo={},Ko={},Vo={},qo={},qc=(_n={},ne(_n,X,Object.keys(qt[X])),ne(_n,Z,Object.keys(qt[Z])),_n);function Xc(e){return~Tc.indexOf(e)}function Jc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xc(a)?a:null}var Xo=function(){var t=function(i){return gr(vt,function(o,s,l){return o[l]=gr(s,i,{}),o},{})};Yo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Wo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||T.autoFetchSvg,r=gr(Kc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ko=r.names,Vo=r.unicodes,xa=tr(T.styleDefault,{family:T.familyDefault})};Mc(function(e){xa=tr(e.styleDefault,{family:T.familyDefault})});Xo();function wa(e,t){return(Yo[e]||{})[t]}function Gc(e,t){return(Wo[e]||{})[t]}function ct(e,t){return(qo[e]||{})[t]}function Jo(e){return Ko[e]||{prefix:null,iconName:null}}function Zc(e){var t=Vo[e],n=wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return xa}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=qt[r][e],i=Xt[r][e]||Xt[r][a],o=e in Ee.styles?e:null;return i||o||null}var xi=(kn={},ne(kn,X,Object.keys(Jt[X])),ne(kn,Z,Object.keys(Jt[Z])),kn);function nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,X,"".concat(T.cssPrefix,"-").concat(X)),ne(t,Z,"".concat(T.cssPrefix,"-").concat(Z)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return xi[X].includes(c)}))&&(s=X),(e.includes(i[Z])||e.some(function(c){return xi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Jc(T.cssPrefix,d);if(vt[d]?(d=Vc[s].includes(d)?kc[s][d]:d,o=d,c.prefix=d):qc[s].indexOf(d)>-1?(o=d,c.prefix=tr(d,{family:s})):m?c.iconName=m:d!==T.replacementClass&&d!==i[X]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Jo(c.iconName):{},k=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!vt.far&&vt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},_a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(vt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ze()||"fas"),l}var Qc=function(){function e(){uc(this,e),this.definitions={}}return dc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),jr(s,o[s]);var l=Jt[X][s];l&&jr(l,o[s]),Xo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),wi=[],bt={},kt={},eu=Object.keys(kt);function tu(e,t){var n=t.mixoutsTo;return wi=e,bt={},Object.keys(kt).forEach(function(r){eu.indexOf(r)===-1&&delete kt[r]}),wi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function Dr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function zr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(t)return t=ct(n,t)||t,bi(Go.definitions,n,t)||bi(Ee.styles,n,t)}var Go=new Qc,nu=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,pt("noAuto")},ru={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(pt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Uc(function(){iu({autoReplaceSvgRoot:n}),pt("watch",t)})}},au={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=tr(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Ac))){var a=nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:ct(i,t)||t}}}},he={noAuto:nu,config:T,dom:ru,parse:au,library:Go,findIconDefinition:zr,toHtml:nn},iu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ee.styles).length>0||T.autoFetchSvg)&&Ye&&T.autoReplaceSvg&&he.dom.i2svg({node:r})};function rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ou(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=er(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function su(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ka(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,R=r.found?r:n,N=R.width,$=R.height,w=a==="fak",C=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat($)})},j=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/$*16*.0625,"em")}:{};k&&(E.attributes[mt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete E.attributes.title);var U=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),fe=r.found&&n.found?Ue("generateAbstractMask",U)||{children:[],attributes:{}}:Ue("generateAbstractIcon",U)||{children:[],attributes:{}},re=fe.children,ye=fe.attributes;return U.children=re,U.attributes=ye,s?su(U):ou(U)}function _i(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[mt]="");var d=O({},o.styles);ya(a)&&(d.transform=Dc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=er(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function lu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=Ee.styles;function $r(e){var t=e[0],n=e[1],r=e.slice(4),a=ma(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var fu={found:!1,width:512,height:512};function cu(e,t){!jo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Jo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r($r(o))}cu(e,t),r(O(O({},fu),{},{icon:T.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var ki=function(){},Ur=T.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:ki,measure:ki},Rt='FA "6.3.0"',uu=function(t){return Ur.mark("".concat(Rt," ").concat(t," begins")),function(){return Zo(t)}},Zo=function(t){Ur.mark("".concat(Rt," ").concat(t," ends")),Ur.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},Aa={begin:uu,end:Zo},Sn=function(){};function Ai(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function du(e){var t=e.getAttribute?e.getAttribute(ha):null,n=e.getAttribute?e.getAttribute(ga):null;return t&&n}function mu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function pu(){if(T.autoReplaceSvg===!0)return In.replace;var e=In[T.autoReplaceSvg];return e||In.replace}function hu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function gu(e){return J.createElement(e)}function Qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?hu:gu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Qo(o,{ceFn:r}))}),a}function vu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Qo(a),n)}),n.getAttribute(mt)===null&&T.keepOriginalSource){var r=J.createComment(vu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ba(n).indexOf(T.replacementClass))return In.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nn(s)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=o}};function Oi(e){e()}function es(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=Oi;T.mutateApproach===wc&&(r=Ge.requestAnimationFrame||Oi),r(function(){var a=pu(),i=Aa.begin("mutate");e.map(a),i(),n()})}}var Oa=!1;function ts(){Oa=!0}function Br(){Oa=!1}var zn=null;function Ei(e){if(hi&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;zn=new hi(function(c){if(!Oa){var d=Ze();St(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ai(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ai(m.target)&&~Pc.indexOf(m.attributeName))if(m.attributeName==="class"&&du(m.target)){var v=nr(ba(m.target)),k=v.prefix,R=v.iconName;m.target.setAttribute(ha,k||d),R&&m.target.setAttribute(ga,R)}else mu(m.target)&&a(m.target)})}}),Ye&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bu(){zn&&zn.disconnect()}function yu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function xu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=nr(ba(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Gc(a.prefix,e.innerText)||wa(a.prefix,Lr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function wu(e){var t=St(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function _u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=xu(e),r=n.iconName,a=n.prefix,i=n.rest,o=wu(e),s=Dr("parseNodeAttributes",{},e),l=t.styleParser?yu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ku=Ee.styles;function ns(e){var t=T.autoReplaceSvg==="nest"?Ci(e,{styleParser:!1}):Ci(e);return~t.extra.classes.indexOf(Do)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Qe=new Set;va.map(function(e){Qe.add("fa-".concat(e))});Object.keys(qt[X]).map(Qe.add.bind(Qe));Object.keys(qt[Z]).map(Qe.add.bind(Qe));Qe=en(Qe);function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(gi,"-").concat(m))},a=function(m){return n.remove("".concat(gi,"-").concat(m))},i=T.autoFetchSvg?Qe:va.map(function(d){return"fa-".concat(d)}).concat(Object.keys(ku));i.includes("fa")||i.push("fa");var o=[".".concat(Do,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Aa.begin("onTree"),c=s.reduce(function(d,m){try{var v=ns(m);v&&d.push(v)}catch(k){jo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){es(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Au(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ns(e).then(function(n){n&&es([n],t)})}function Ou(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Eu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,R=k===void 0?null:k,N=n.classes,$=N===void 0?[]:N,w=n.attributes,C=w===void 0?{}:w,E=n.styles,j=E===void 0?{}:E;if(t){var U=t.prefix,fe=t.iconName,re=t.icon;return rr(O({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?C["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(R||Zt()):(C["aria-hidden"]="true",C.focusable="false")),ka({icons:{main:$r(re),mask:l?$r(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:fe,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:C,styles:j,classes:$}})})}},Cu={mixout:function(){return{icon:Ou(Eu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Pi,n.nodeCallback=Au,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Pi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,R){Promise.all([Hr(a,s),d.iconName?Hr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var $=ma(N,2),w=$[0],C=$[1];k([n,ka({icons:{main:w,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=er(s);l.length>0&&(a.style=l);var c;return ya(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Pu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return rr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(en(i)).join(" ")},children:o}]})}}}},Tu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return rr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),lu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(en(s))}})})}}}},Su={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return rr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),_i({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(T.cssPrefix,"-layers-text")].concat(en(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Fo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_i({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Iu=new RegExp('"',"ug"),Ti=[1105920,1112319];function Nu(e){var t=e.replace(Iu,""),n=Wc(t,0),r=n>=Ti[0]&&n<=Ti[1],a=t.length===2?t[0]===t[1]:!1;return{value:Lr(a?t[0]:t),isSecondary:r||a}}function Si(e,t){var n="".concat(xc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=St(e.children),o=i.filter(function(re){return re.getAttribute(Rr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Oc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xt[v][l[2].toLowerCase()]:Ec[v][c],R=Nu(m),N=R.value,$=R.isSecondary,w=l[0].startsWith("FontAwesome"),C=wa(k,N),E=C;if(w){var j=Zc(N);j.iconName&&j.prefix&&(C=j.iconName,k=j.prefix)}if(C&&!$&&(!o||o.getAttribute(ha)!==k||o.getAttribute(ga)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var U=_u(),fe=U.extra;fe.attributes[Rr]=t,Hr(C,k).then(function(re){var ye=ka(O(O({},U),{},{icons:{main:re,mask:_a()},prefix:k,iconName:E,extra:fe,watchable:!0})),ge=J.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=ye.map(function(Le){return nn(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Mu(e){return Promise.all([Si(e,"::before"),Si(e,"::after")])}function Fu(e){return e.parentNode!==document.head&&!~_c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ii(e){if(Ye)return new Promise(function(t,n){var r=St(e.querySelectorAll("*")).filter(Fu).map(Mu),a=Aa.begin("searchPseudoElements");ts(),Promise.all(r).then(function(){a(),Br(),t()}).catch(function(){a(),Br(),n()})})}var Ru={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ii,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;T.searchPseudoElements&&Ii(a)}}},Ni=!1,Lu={mixout:function(){return{dom:{unwatch:function(){ts(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){Ei(Dr("mutationObserverCallbacks",{}))},noAuto:function(){bu()},watch:function(n){var r=n.observeMutationsRoot;Ni?Br():Ei(Dr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ju={mixout:function(){return{parse:{transform:function(n){return Mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Mi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},br={x:0,y:0,width:"100%",height:"100%"};function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Du(e){return e.tag==="g"?e.children:[e]}var zu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?nr(a.split(" ").map(function(o){return o.trim()})):_a();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=jc({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:O(O({},br),{},{fill:"white"})},N=d.children?{children:d.children.map(Fi)}:{},$={tag:"g",attributes:O({},k.inner),children:[Fi(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},w={tag:"g",attributes:O({},k.outer),children:[$]},C="mask-".concat(s||Zt()),E="clip-".concat(s||Zt()),j={tag:"mask",attributes:O(O({},br),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Du(v)},j]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(C,")")},br)}),{children:r,attributes:a}}}},$u={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Hu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Uu=[$c,Cu,Pu,Tu,Su,Ru,Lu,ju,zu,$u,Hu];tu(Uu,{mixoutsTo:he});he.noAuto;var rs=he.config,Bu=he.library;he.dom;var $n=he.parse;he.findIconDefinition;he.toHtml;var Yu=he.icon;he.layer;var Wu=he.text;he.counter;var Ku={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Vu={prefix:"fas",iconName:"s",icon:[320,512,[115],"53","M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9 .6 2.9 .8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9l-.2 0 0 0c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3C5.1 440.8-3.9 422.7 1.6 405.9s23.7-25.8 40.5-20.3c4.9 1.6 10.2 3.4 15.9 5.4c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1 .7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5L2.1 133.9C9.4 91.4 37.4 62.2 73.9 46.6c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.1 22.7c-11.2-3-48.2-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z"]},qu={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};function Ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ri(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ju(e,t){if(e==null)return{};var n=Xu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Yr(e){return Gu(e)||Zu(e)||Qu(e)||ed()}function Gu(e){if(Array.isArray(e))return Wr(e)}function Zu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qu(e,t){if(e){if(typeof e=="string")return Wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wr(e,t)}}function Wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ed(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};(function(e){(function(t){var n=function(w,C,E){if(!c(C)||m(C)||v(C)||k(C)||l(C))return C;var j,U=0,fe=0;if(d(C))for(j=[],fe=C.length;U<fe;U++)j.push(n(w,C[U],E));else{j={};for(var re in C)Object.prototype.hasOwnProperty.call(C,re)&&(j[w(re,E)]=n(w,C[re],E))}return j},r=function(w,C){C=C||{};var E=C.separator||"_",j=C.split||/(?=[A-Z])/;return w.split(j).join(E)},a=function(w){return R(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var C=a(w);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(w,C){return r(w,C).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},R=function(w){return w=w-0,w===w},N=function(w,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?w:function(j,U){return E(j,w,U)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,C){return n(N(a,C),w)},decamelizeKeys:function(w,C){return n(N(o,C),w,C)},pascalizeKeys:function(w,C){return n(N(i,C),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(td)})(as);var nd=as.exports,rd=["class","style"];function ad(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=nd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function id(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ea(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=id(d);break;case"style":l.style=ad(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ju(n,rd);return Po(e.tag,Ae(Ae(Ae({},t),{},{class:a.class,style:Ae(Ae({},a.style),o)},a.attrs),s),r)}var is=!1;try{is=!0}catch{}function od(){if(!is&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $t(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function sd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Li(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($n.icon)return $n.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ld=fa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Li(t.icon)}),i=ve(function(){return $t("classes",sd(t))}),o=ve(function(){return $t("transform",typeof t.transform=="string"?$n.transform(t.transform):t.transform)}),s=ve(function(){return $t("mask",Li(t.mask))}),l=ve(function(){return Yu(a.value,Ae(Ae(Ae(Ae({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Cn(l,function(d){if(!d)return od("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ve(function(){return l.value?Ea(l.value.abstract[0],{},r):null});return function(){return c.value}}});fa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=rs.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Yr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Po("div",{class:i.value},r.default?r.default():[])}}});fa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=rs.familyPrefix,i=ve(function(){return $t("classes",[].concat(Yr(t.counter?["".concat(a,"-layers-counter")]:[]),Yr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return $t("transform",typeof t.transform=="string"?$n.transform(t.transform):t.transform)}),s=ve(function(){var c=Wu(t.value.toString(),Ae(Ae({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return Ea(s.value,{},r)});return function(){return l.value}}});Bu.add(Vu,Ku,qu);const os=Hf(cc);os.component("font-awesome-icon",ld);os.mount("#app");

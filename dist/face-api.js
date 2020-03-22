(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.faceapi = global.faceapi || {}));
}(this, (function (exports) { 'use strict';

  /**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   */
  var t=function(e,n){return (t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);})(e,n)};function e(e,n){function r(){this.constructor=e;}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r);}function n(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t));}catch(t){a(t);}}function s(t){try{u(r.throw(t));}catch(t){a(t);}}function u(t){t.done?o(t.value):new n((function(e){e(t.value);})).then(i,s);}u((r=r.apply(t,e||[])).next());}))}function r(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i);}catch(t){a=[6,t],r=0;}finally{n=o=0;}if(5&a[0])throw a[1];return {value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var o=function(){function t(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags();}return t.prototype.setPlatform=function(t,e){null!=this.platform&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e;},t.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){var r=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+r+"."),this.set(t,r);}},t.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},t.prototype.getNumber=function(t){return this.get(t)},t.prototype.getBool=function(t){return this.get(t)},t.prototype.getFlags=function(){return this.flags},Object.defineProperty(t.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),t.prototype.set=function(t,e){if(null==this.flagRegistry[t])throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e);},t.prototype.evaluateFlag=function(t){if(null==this.flagRegistry[t])throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},t.prototype.setFlags=function(t){this.flags=Object.assign({},t);},t.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags();},t.prototype.populateURLFlags=function(){var t=this;if(void 0!==this.global&&void 0!==this.global.location&&void 0!==this.global.location.search){var e,n,r=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return a(n,e[0],e[1]),e.join("=")})),n);if("tfjsflags"in r)r.tfjsflags.split(",").forEach((function(e){var n=e.split(":"),r=n[0],o=n[1];t.urlFlags[r]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return "true"===e;if(""+ +e===e)return +e;throw new Error("Could not parse value flag value "+e+" for flag "+t+".")}(r,o);}));}},t}();function a(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"");}function i(){return s}var s=null;var u=new Map,c=new Map;function l(t,e){var n=g(t,e);return u.get(n)}function h(t){return c.get(t)}function f(t){for(var e=u.entries(),n=[];;){var r=e.next(),o=r.done,a=r.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===t&&n.push(s);}return n}function d(t){var e=t.kernelName,n=t.backendName,r=g(e,n);if(u.has(r))throw new Error("The kernel '"+e+"' for backend '"+n+"' is already registered");u.set(r,t);}function p(t){var e=t.kernelName;c.has(e)&&console.warn("Overriding the gradient for '"+e+"'"),c.set(e,t);}function v(t,e){var n=g(t,e);if(!u.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is not registered");u.delete(n);}function m(t){if(!c.has(t))throw new Error("The gradient '"+t+"' for backend is not registered");c.delete(t);}function g(t,e){return e+"_"+t}function y(t){for(var e=t.length,n=0,r=0;e>0;)r=Math.random()*e|0,n=t[--e],t[e]=t[r],t[r]=n;}function x(t,e,n){return Math.max(t,Math.min(e,n))}function b(t){return t%2==0?t:t+1}function w(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e}function C(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function E(t,e,n){void 0===n&&(n=""),C(S(t,e),(function(){return n+" Shapes "+t+" and "+e+" must match"}));}function R(t){C(null!=t,(function(){return "The input to the tensor constructor must be a non-null value."}));}function I(t,e,n){if(void 0===e&&(e=[]),void 0===n&&(n=!1),null==e&&(e=[]),Array.isArray(t)||V(t)&&!n)for(var r=0;r<t.length;++r)I(t[r],e,n);else e.push(t);return e}function k(t){if(0===t.length)return 1;for(var e=t[0],n=1;n<t.length;n++)e*=t[n];return e}function S(t,e){if(t===e)return !0;if(null==t||null==e)return !1;if(t.length!==e.length)return !1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return !1;return !0}function A(t){return t%1==0}function D(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return -1;var e=Math.exp(2*t);return (e-1)/(e+1)}function T(t){var e=Math.ceil(Math.sqrt(t));return [e,Math.ceil(t/e)]}function N(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function F(t,e,n){return void 0===e&&(e=function(t){return 0}),new Promise((function(r,o){var a=0,i=function(){if(t())r();else {a++;var s=e(a);null!=n&&a>=n?o():setTimeout(i,s);}};i();}))}function _(t,e){for(var n=1,r=-1,o=0;o<t.length;++o)if(t[o]>=0)n*=t[o];else if(-1===t[o]){if(-1!==r)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o;}else if(t[o]<0)throw Error("Shapes can not be < 0. Found "+t[o]+" at dim "+o);if(-1===r){if(e>0&&e!==n)throw Error("Size("+e+") must match the product of shape "+t);return t}if(0===n)throw Error("Cannot infer the missing size in ["+t+"] when there are 0 elements");if(e%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+n);var a=t.slice();return a[r]=e/n,a}function O(t,e){var n=e.length;return C((t=null==t?e.map((function(t,e){return e})):[].concat(t)).every((function(t){return t>=-n&&t<n})),(function(){return "All values in axis param must be in range [-"+n+", "+n+") but got axis "+t})),C(t.every((function(t){return A(t)})),(function(){return "All values in axis param must be integers but got axis "+t})),t.map((function(t){return t<0?n+t:t}))}function M(t,e){for(var n=[],r=[],o=null!=e&&Array.isArray(e)&&0===e.length,a=null==e||o?null:O(e,t).sort(),i=0,s=0;s<t.length;++s){if(null!=a){if(a[i]===s&&1!==t[s])throw new Error("Can't squeeze axis "+s+" since its dim '"+t[s]+"' is not 1");(null==a[i]||a[i]>s)&&1===t[s]&&(n.push(t[s]),r.push(s)),a[i]<=s&&i++;}1!==t[s]&&(n.push(t[s]),r.push(s));}return {newShape:n,keptDims:r}}function B(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else {if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e);}return n}function P(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else {if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e);}return n}function L(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+e+" being uploaded contains "+r+".")}}function W(t){return "bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function U(t,e){return "complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function V(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function z(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)}function G(t){if(null==t)return 0;var e=0;return t.forEach((function(t){return e+=t.length})),e}function H(t){return "string"==typeof t||t instanceof String}function q(t){return "boolean"==typeof t}function K(t){return "number"==typeof t}function j(t){return Array.isArray(t)?j(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array?"int32":K(t)?"float32":H(t)?"string":q(t)?"bool":"float32"}function X(t){return !!(t&&t.constructor&&t.call&&t.apply)}function Y(t,e){for(var n=e;n<t;++n)if(t%n==0)return n;return t}function $(t){var e=t.length;if(e<2)return [];var n=new Array(e-1);n[e-2]=t[e-1];for(var r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function Q(t,e,n){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=I(t)),n&&L(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){for(var r=new Uint8Array(t.length),o=0;o<r.length;++o)0!==Math.round(t[o])&&(r[o]=1);return r}throw new Error("Unknown data type "+e)}function J(t,e){if(0===t.length)return e[0];var n=t.reduce((function(t,e){return t*e}));if(0===n)return [];if(n!==e.length)throw new Error("["+t+"] does not match the input size.");return function t(e,n,r){var o=new Array;if(1===n.length)for(var a=n[0],i=0;i<a;i++)o[i]=r[e+i];else {a=n[0];var s=n.slice(1),u=s.reduce((function(t,e){return t*e}));for(i=0;i<a;i++)o[i]=t(e+i*u,s,r);}return o}(0,t,e)}function Z(t,e){for(var n=tt(t,e),r=0;r<n.length;r++)n[r]=1;return n}function tt(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}function et(){return i().platform.now()}function nt(t){t.forEach((function(e){C(Number.isInteger(e)&&e>=0,(function(){return "Tensor must have a shape comprised of positive integers but got shape ["+t+"]."}));}));}function rt(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",i().platform.encode(t,e)}function ot(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",i().platform.decode(t,e)}function at(t,e,n){if(0===e)return 0;if(1===e)return t[0];for(var r=t[t.length-1],o=0;o<t.length-1;++o)r+=n[o]*t[o];return r}function it(t,e,n){if(0===e)return [];if(1===e)return [t];for(var r=new Array(e),o=0;o<r.length-1;++o)r[o]=Math.floor(t/n[o]),t-=r[o]*n[o];return r[r.length-1]=t,r}var st=Object.freeze({shuffle:y,clamp:x,nearestLargerEven:b,sum:w,randUniform:function(t,e){var n=Math.random();return e*n+(1-n)*t},distSquared:function(t,e){for(var n=0,r=0;r<t.length;r++){var o=Number(t[r])-Number(e[r]);n+=o*o;}return n},assert:C,assertShapesMatch:E,assertNonNull:R,flatten:I,sizeFromShape:k,isScalarShape:function(t){return 0===t.length},arraysEqual:S,isInt:A,tanh:D,sizeToSquarishShape:T,createShuffledIndices:function(t){for(var e=new Uint32Array(t),n=0;n<t;++n)e[n]=n;return y(e),e},rightPad:N,repeatedTry:F,inferFromImplicitShape:_,parseAxisParam:O,squeezeShape:M,getTypedArrayFromDType:B,getArrayFromDType:P,checkConversionForErrors:L,isValidDtype:W,hasEncodingLoss:U,isTypedArray:V,bytesPerElement:z,bytesFromStringArray:G,isString:H,isBoolean:q,isNumber:K,inferDtype:j,isFunction:X,nearestDivisor:Y,computeStrides:$,toTypedArray:Q,toNestedArray:J,makeOnesTypedArray:Z,makeZerosTypedArray:tt,now:et,assertNonNegativeIntegerDimensions:nt,fetch:function(t,e){return i().platform.fetch(t,e)},encodeString:rt,decodeString:ot,locToIndex:at,indexToLoc:it}),ut=function(){function t(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new ct);}return t.prototype.profileKernel=function(t,e,n){var r,o=this,a=this.backendTimer.time((function(){r=n();}));return r.forEach((function(n){n.data().then((function(r){!function(t,e,n){if("float32"!==e)return !1;for(var r=0;r<t.length;r++){var o=t[r];if(isNaN(o)||!isFinite(o))return console.warn("Found "+o+" in the result of '"+n+"'"),!0}}(r,n.dtype,t),a.then((function(a){var i="";null!=a.getExtraProfileInfo&&(i=a.getExtraProfileInfo()),o.logger.logKernelProfile(t,n,r,a.kernelMs,e,i);}));}));})),r},t}();var ct=function(){function t(){}return t.prototype.logKernelProfile=function(t,e,n,r,o,a){var i="number"==typeof r?N(r+"ms",9):r.error,s=N(t,25),u=e.rank,c=e.size,l=N(e.shape.toString(),14),h="";for(var f in o){var d=o[f].shape||e.shape,p=d.length;h+=f+": "+p+"D "+(p>0?d:"")+" ";}console.log("%c"+s+"\t%c"+i+"\t%c"+u+"D "+l+"\t%c"+c+"\t%c"+h+"\t%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue");},t}();var lt=20,ht=3,ft=7;function dt(t,e,n,r){var o=$(e),a=function(t,e,n,r){var o=k(e),a=r[r.length-1],i=new Array(a).fill(0),s=e.length,u="complex64"===n?mt(t):t;if(s>1)for(var c=0;c<o/a;c++)for(var l=c*a,h=0;h<a;h++)i[h]=Math.max(i[h],pt(u[l+h],0,n).length);return i}(t,e,n,o),i=e.length,s=function t(e,n,r,o,a,i){void 0===i&&(i=!0);var s="complex64"===r?2:1,u=n[0],c=n.length;if(0===c){return "complex64"===r?[pt(mt(e)[0],0,r)]:"bool"===r?[vt(e[0])]:[e[0].toString()]}if(1===c){if(u>lt){var l=ht*s,h=Array.from(e.slice(0,l)),f=Array.from(e.slice((u-ht)*s,u*s));return "complex64"===r&&(h=mt(h),f=mt(f)),["["+h.map((function(t,e){return pt(t,a[e],r)})).join(", ")+", ..., "+f.map((function(t,e){return pt(t,a[u-ht+e],r)})).join(", ")+"]"]}return ["["+("complex64"===r?mt(e):Array.from(e)).map((function(t,e){return pt(t,a[e],r)})).join(", ")+"]"]}var d=n.slice(1),p=o.slice(1),v=o[0]*s,m=[];if(u>lt){for(var g=0;g<ht;g++){var y=(x=g*v)+v;m.push.apply(m,t(e.slice(x,y),d,r,p,a,!1));}m.push("...");for(g=u-ht;g<u;g++){y=(x=g*v)+v;m.push.apply(m,t(e.slice(x,y),d,r,p,a,g===u-1));}}else for(g=0;g<u;g++){var x;y=(x=g*v)+v;m.push.apply(m,t(e.slice(x,y),d,r,p,a,g===u-1));}var b=2===c?",":"";m[0]="["+m[0]+b;for(g=1;g<m.length-1;g++)m[g]=" "+m[g]+b;var w=",\n";for(g=2;g<c;g++)w+="\n";return m[m.length-1]=" "+m[m.length-1]+"]"+(i?"":w),m}(t,e,n,o,a),u=["Tensor"];return r&&(u.push("  dtype: "+n),u.push("  rank: "+i),u.push("  shape: ["+e+"]"),u.push("  values:")),u.push(s.map((function(t){return "    "+t})).join("\n")),u.join("\n")}function pt(t,e,n){return N(Array.isArray(t)?parseFloat(t[0].toFixed(ft))+" + "+parseFloat(t[1].toFixed(ft))+"j":H(t)?"'"+t+"'":"bool"===n?vt(t):parseFloat(t.toFixed(ft)).toString(),e)}function vt(t){return 0===t?"false":"true"}function mt(t){for(var e=[],n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var gt=function(){function t(t,e,n){var r=this;if(this.dtype=e,this.shape=t.slice(),this.size=k(t),null!=n){var o=n.length;C(o===this.size,(function(){return "Length of values '"+o+"' does not match the size inferred by the shape '"+r.size+"'."}));}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||P(e,this.size),this.strides=$(t);}return t.prototype.set=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];0===n.length&&(n=[0]),C(n.length===this.rank,(function(){return "The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"}));var o=this.locToIndex(n);this.values[o]=t;},t.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];0===t.length&&(t=[0]);for(var n=0,r=0,o=t;r<o.length;r++){var a=o[r];if(a<0||a>=this.shape[n]){var i="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(i)}n++;}for(var s=t[t.length-1],u=0;u<t.length-1;++u)s+=this.strides[u]*t[u];return this.values[s]},t.prototype.locToIndex=function(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},t.prototype.indexToLoc=function(t){if(0===this.rank)return [];if(1===this.rank)return [t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.toTensor=function(){return yt().makeTensor(this.values,this.shape,this.dtype)},t}(),yt=null,xt=null,bt=null;var wt=function(){function t(t,e,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=k(t),this.strides=$(t),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher";}return t.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},t.prototype.asScalar=function(){return this.throwIfDisposed(),C(1===this.size,(function(){return "The array must have only 1 element."})),this.reshape([])},t.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},t.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},t.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},t.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),this.reshape([t,e,n,r])},t.prototype.as5D=function(t,e,n,r,o){return this.throwIfDisposed(),this.reshape([t,e,n,r,o])},t.prototype.asType=function(t){return this.throwIfDisposed(),xt.cast(this,t)},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.buffer=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return [4,this.data()];case 1:return t=e.sent(),[2,xt.buffer(this.shape,this.dtype,t)]}}))}))},t.prototype.bufferSync=function(){return xt.buffer(this.shape,this.dtype,this.dataSync())},t.prototype.array=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return [4,this.data()];case 1:return t=e.sent(),[2,J(this.shape,t)]}}))}))},t.prototype.arraySync=function(){return J(this.shape,this.dataSync())},t.prototype.data=function(){return n(this,void 0,void 0,(function(){var t,e;return r(this,(function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=yt().read(this.dataId),"string"!==this.dtype?[3,2]:[4,t];case 1:e=n.sent();try{return [2,e.map((function(t){return ot(t)}))]}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return [2,t]}}))}))},t.prototype.dataSync=function(){this.throwIfDisposed();var t=yt().readSync(this.dataId);if("string"===this.dtype)try{return t.map((function(t){return ot(t)}))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},t.prototype.bytes=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,yt().read(this.dataId)];case 1:return t=e.sent(),"string"===this.dtype?[2,t]:[2,new Uint8Array(t.buffer)]}}))}))},t.prototype.dispose=function(){this.isDisposed||(yt().disposeTensor(this),this.isDisposedInternal=!0);},Object.defineProperty(t.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),t.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},t.prototype.toFloat=function(){return this.asType("float32")},t.prototype.toInt=function(){return this.asType("int32")},t.prototype.toBool=function(){return this.asType("bool")},t.prototype.print=function(t){return void 0===t&&(t=!1),xt.print(this,t)},t.prototype.reshape=function(t){return this.throwIfDisposed(),xt.reshape(this,t)},t.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},t.prototype.expandDims=function(t){return void 0===t&&(t=0),xt.expandDims(this,t)},t.prototype.cumsum=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=!1),xt.cumsum(this,t,e,n)},t.prototype.squeeze=function(t){return this.throwIfDisposed(),xt.squeeze(this,t)},t.prototype.clone=function(){return this.throwIfDisposed(),xt.clone(this)},t.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),xt.oneHot(this,t,e,n)},t.prototype.toString=function(t){return void 0===t&&(t=!1),dt(this.dataSync(),this.shape,this.dtype,t)},t.prototype.tile=function(t){return this.throwIfDisposed(),xt.tile(this,t)},t.prototype.gather=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),xt.gather(this,t,e)},t.prototype.matMul=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n=!1),this.throwIfDisposed(),xt.matMul(this,t,e,n)},t.prototype.dot=function(t){return this.throwIfDisposed(),xt.dot(this,t)},t.prototype.norm=function(t,e,n){return void 0===t&&(t="euclidean"),void 0===e&&(e=null),void 0===n&&(n=!1),this.throwIfDisposed(),xt.norm(this,t,e,n)},t.prototype.slice=function(t,e){return this.throwIfDisposed(),xt.slice(this,t,e)},t.prototype.reverse=function(t){return this.throwIfDisposed(),xt.reverse(this,t)},t.prototype.concat=function(e,n){return void 0===n&&(n=0),this.throwIfDisposed(),e instanceof t&&(e=[e]),xt.concat([this].concat(e),n)},t.prototype.split=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),xt.split(this,t,e)},t.prototype.stack=function(t,e){return void 0===e&&(e=0),xt.stack([this,t],e)},t.prototype.unstack=function(t){return void 0===t&&(t=0),xt.unstack(this,t)},t.prototype.pad=function(t,e){return void 0===e&&(e=0),xt.pad(this,t,e)},t.prototype.batchNormalization=function(t,e,n,r,o){return void 0===n&&(n=.001),bt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,o,r,n)},t.prototype.batchNorm=function(t,e,n,r,o){return void 0===o&&(o=.001),this.throwIfDisposed(),xt.batchNorm(this,t,e,n,r,o)},t.prototype.all=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.all(this,t,e)},t.prototype.any=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.any(this,t,e)},t.prototype.logSumExp=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.logSumExp(this,t,e)},t.prototype.sum=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.sum(this,t,e)},t.prototype.prod=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.prod(this,t,e)},t.prototype.mean=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.mean(this,t,e)},t.prototype.min=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.min(this,t,e)},t.prototype.max=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),xt.max(this,t,e)},t.prototype.argMin=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),xt.argMin(this,t)},t.prototype.argMax=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),xt.argMax(this,t)},t.prototype.cast=function(t){return this.throwIfDisposed(),xt.cast(this,t)},t.prototype.add=function(t){return this.throwIfDisposed(),xt.add(this,t)},t.prototype.addStrict=function(t){return this.throwIfDisposed(),xt.addStrict(this,t)},t.prototype.atan2=function(t){return this.throwIfDisposed(),xt.atan2(this,t)},t.prototype.sub=function(t){return this.throwIfDisposed(),xt.sub(this,t)},t.prototype.subStrict=function(t){return this.throwIfDisposed(),xt.subStrict(this,t)},t.prototype.pow=function(t){return this.throwIfDisposed(),xt.pow(this,t)},t.prototype.powStrict=function(t){return this.throwIfDisposed(),xt.powStrict(this,t)},t.prototype.mul=function(t){return this.throwIfDisposed(),xt.mul(this,t)},t.prototype.mulStrict=function(t){return this.throwIfDisposed(),xt.mulStrict(this,t)},t.prototype.div=function(t){return this.throwIfDisposed(),xt.div(this,t)},t.prototype.divNoNan=function(t){return this.throwIfDisposed(),xt.divNoNan(this,t)},t.prototype.floorDiv=function(t){return this.throwIfDisposed(),xt.floorDiv(this,t)},t.prototype.divStrict=function(t){return this.throwIfDisposed(),xt.divStrict(this,t)},t.prototype.minimum=function(t){return this.throwIfDisposed(),xt.minimum(this,t)},t.prototype.minimumStrict=function(t){return this.throwIfDisposed(),xt.minimumStrict(this,t)},t.prototype.maximum=function(t){return this.throwIfDisposed(),xt.maximum(this,t)},t.prototype.maximumStrict=function(t){return this.throwIfDisposed(),xt.maximumStrict(this,t)},t.prototype.mod=function(t){return this.throwIfDisposed(),xt.mod(this,t)},t.prototype.modStrict=function(t){return this.throwIfDisposed(),xt.modStrict(this,t)},t.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),xt.squaredDifferenceStrict(this,t)},t.prototype.transpose=function(t){return this.throwIfDisposed(),xt.transpose(this,t)},t.prototype.notEqual=function(t){return this.throwIfDisposed(),xt.notEqual(this,t)},t.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),xt.notEqualStrict(this,t)},t.prototype.less=function(t){return this.throwIfDisposed(),xt.less(this,t)},t.prototype.lessStrict=function(t){return this.throwIfDisposed(),xt.lessStrict(this,t)},t.prototype.equal=function(t){return this.throwIfDisposed(),xt.equal(this,t)},t.prototype.equalStrict=function(t){return this.throwIfDisposed(),xt.equalStrict(this,t)},t.prototype.lessEqual=function(t){return this.throwIfDisposed(),xt.lessEqual(this,t)},t.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),xt.lessEqualStrict(this,t)},t.prototype.greater=function(t){return this.throwIfDisposed(),xt.greater(this,t)},t.prototype.greaterStrict=function(t){return this.throwIfDisposed(),xt.greaterStrict(this,t)},t.prototype.greaterEqual=function(t){return this.throwIfDisposed(),xt.greaterEqual(this,t)},t.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),xt.greaterEqualStrict(this,t)},t.prototype.logicalAnd=function(t){return this.throwIfDisposed(),xt.logicalAnd(this,t)},t.prototype.logicalOr=function(t){return this.throwIfDisposed(),xt.logicalOr(this,t)},t.prototype.logicalNot=function(){return this.throwIfDisposed(),xt.logicalNot(this)},t.prototype.logicalXor=function(t){return this.throwIfDisposed(),xt.logicalXor(this,t)},t.prototype.where=function(t,e){return this.throwIfDisposed(),xt.where(t,this,e)},t.prototype.neg=function(){return this.throwIfDisposed(),xt.neg(this)},t.prototype.ceil=function(){return this.throwIfDisposed(),xt.ceil(this)},t.prototype.floor=function(){return this.throwIfDisposed(),xt.floor(this)},t.prototype.sign=function(){return this.throwIfDisposed(),xt.sign(this)},t.prototype.isNaN=function(){return this.throwIfDisposed(),xt.isNaN(this)},t.prototype.isInf=function(){return this.throwIfDisposed(),xt.isInf(this)},t.prototype.isFinite=function(){return this.throwIfDisposed(),xt.isFinite(this)},t.prototype.exp=function(){return this.throwIfDisposed(),xt.exp(this)},t.prototype.expm1=function(){return this.throwIfDisposed(),xt.expm1(this)},t.prototype.log=function(){return this.throwIfDisposed(),xt.log(this)},t.prototype.log1p=function(){return this.throwIfDisposed(),xt.log1p(this)},t.prototype.sqrt=function(){return this.throwIfDisposed(),xt.sqrt(this)},t.prototype.rsqrt=function(){return this.throwIfDisposed(),xt.rsqrt(this)},t.prototype.square=function(){return this.throwIfDisposed(),xt.square(this)},t.prototype.reciprocal=function(){return this.throwIfDisposed(),xt.reciprocal(this)},t.prototype.abs=function(){return this.throwIfDisposed(),xt.abs(this)},t.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),xt.clipByValue(this,t,e)},t.prototype.relu=function(){return this.throwIfDisposed(),xt.relu(this)},t.prototype.relu6=function(){return this.throwIfDisposed(),xt.relu6(this)},t.prototype.elu=function(){return this.throwIfDisposed(),xt.elu(this)},t.prototype.selu=function(){return this.throwIfDisposed(),xt.selu(this)},t.prototype.leakyRelu=function(t){return void 0===t&&(t=.2),this.throwIfDisposed(),xt.leakyRelu(this,t)},t.prototype.prelu=function(t){return this.throwIfDisposed(),xt.prelu(this,t)},t.prototype.sigmoid=function(){return this.throwIfDisposed(),xt.sigmoid(this)},t.prototype.logSigmoid=function(){return this.throwIfDisposed(),xt.logSigmoid(this)},t.prototype.softplus=function(){return this.throwIfDisposed(),xt.softplus(this)},t.prototype.zerosLike=function(){return this.throwIfDisposed(),xt.zerosLike(this)},t.prototype.onesLike=function(){return this.throwIfDisposed(),xt.onesLike(this)},t.prototype.sin=function(){return this.throwIfDisposed(),xt.sin(this)},t.prototype.cos=function(){return this.throwIfDisposed(),xt.cos(this)},t.prototype.tan=function(){return this.throwIfDisposed(),xt.tan(this)},t.prototype.asin=function(){return this.throwIfDisposed(),xt.asin(this)},t.prototype.acos=function(){return this.throwIfDisposed(),xt.acos(this)},t.prototype.atan=function(){return this.throwIfDisposed(),xt.atan(this)},t.prototype.sinh=function(){return this.throwIfDisposed(),xt.sinh(this)},t.prototype.cosh=function(){return this.throwIfDisposed(),xt.cosh(this)},t.prototype.tanh=function(){return this.throwIfDisposed(),xt.tanh(this)},t.prototype.asinh=function(){return this.throwIfDisposed(),xt.asinh(this)},t.prototype.acosh=function(){return this.throwIfDisposed(),xt.acosh(this)},t.prototype.atanh=function(){return this.throwIfDisposed(),xt.atanh(this)},t.prototype.erf=function(){return this.throwIfDisposed(),xt.erf(this)},t.prototype.round=function(){return this.throwIfDisposed(),xt.round(this)},t.prototype.step=function(t){return void 0===t&&(t=0),this.throwIfDisposed(),xt.step(this,t)},t.prototype.softmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),xt.softmax(this,t)},t.prototype.logSoftmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),xt.logSoftmax(this,t)},t.prototype.resizeBilinear=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),xt.image.resizeBilinear(this,t,e)},t.prototype.resizeNearestNeighbor=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),xt.image.resizeNearestNeighbor(this,t,e)},t.prototype.conv1d=function(t,e,n,r,o,a){return void 0===r&&(r="NWC"),void 0===o&&(o=1),this.throwIfDisposed(),xt.conv1d(this,t,e,n,r,o,a)},t.prototype.conv2d=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),xt.conv2d(this,t,e,n,r,o,a)},t.prototype.conv2dTranspose=function(t,e,n,r,o){return this.throwIfDisposed(),xt.conv2dTranspose(this,t,e,n,r,o)},t.prototype.depthwiseConv2D=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),xt.depthwiseConv2d(this,t,e,n,r,o,a)},t.prototype.separableConv2d=function(t,e,n,r,o,a){return void 0===o&&(o=[1,1]),void 0===a&&(a="NHWC"),this.throwIfDisposed(),xt.separableConv2d(this,t,e,n,r,o,a)},t.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),xt.avgPool(this,t,e,n,r)},t.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),xt.maxPool(this,t,e,n,r)},t.prototype.localResponseNormalization=function(t,e,n,r){return void 0===t&&(t=5),void 0===e&&(e=1),void 0===n&&(n=1),void 0===r&&(r=.5),xt.localResponseNormalization(this,t,e,n,r)},t.prototype.pool=function(t,e,n,r,o){return this.throwIfDisposed(),xt.pool(this,t,e,n,r,o)},t.prototype.variable=function(t,e,n){return void 0===t&&(t=!0),this.throwIfDisposed(),yt().makeVariable(this,t,e,n)},t.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),xt.unsortedSegmentSum(this,t,e)},t.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),xt.batchToSpaceND(this,t,e)},t.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),xt.spaceToBatchND(this,t,e)},t.prototype.topk=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=!0),this.throwIfDisposed(),xt.topk(this,t,e)},t.prototype.stridedSlice=function(t,e,n,r,o,a,i,s){return void 0===r&&(r=0),void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),this.throwIfDisposed(),xt.stridedSlice(this,t,e,n,r,o,a,i,s)},t.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),xt.depthToSpace(this,t,e)},t.prototype.fft=function(){return this.throwIfDisposed(),xt.spectral.fft(this)},t.prototype.ifft=function(){return this.throwIfDisposed(),xt.spectral.ifft(this)},t.prototype.rfft=function(){return this.throwIfDisposed(),xt.spectral.rfft(this)},t.prototype.irfft=function(){return this.throwIfDisposed(),xt.spectral.irfft(this)},t}();Object.defineProperty(wt,Symbol.hasInstance,{value:function(t){return !!t&&null!=t.dataId&&null!=t.shape&&null!=t.dtype}});var Ct,Et,Rt,It,kt,St=function(t){function n(e,n,r,o){var a=t.call(this,e.shape,e.dtype,e.dataId,o)||this;return a.trainable=n,a.name=r,a}return e(n,t),n.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!S(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");yt().disposeTensor(this),this.dataId=t.dataId,yt().incRef(this,null);},n.prototype.dispose=function(){yt().disposeVariable(this),this.isDisposedInternal=!0;},n}(wt);Object.defineProperty(St,Symbol.hasInstance,{value:function(t){return t instanceof wt&&null!=t.assign&&t.assign instanceof Function}}),function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6";}(Ct||(Ct={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64";}(Et||(Et={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64";}(Rt||(Rt={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64";}(It||(It={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64";}(kt||(kt={}));var At={float32:It,int32:Et,bool:Rt,complex64:kt};function Dt(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return "string";throw new Error("Can not upcast "+t+" with "+e)}return At[t][e]}function Tt(t){return Dt(t,"int32")}function Nt(t,e){if(t.dtype===e.dtype)return [t,e];var n=Dt(t.dtype,e.dtype);return [t.cast(n),e.cast(n)]}function Ft(t,e){C(t.dtype===e.dtype,(function(){return "The dtypes of the first("+t.dtype+") and second("+e.dtype+") input must match"}));}function _t(t){var e=[];return function t(e,n,r){if(null==e)return;if(e instanceof wt)return void n.push(e);if(o=e,!Array.isArray(o)&&"object"!=typeof o)return;var o;var a=e;for(var i in a){var s=a[i];r.has(s)||(r.add(s),t(s,n,r));}}(t,e,new Set),e}var Ot,Mt=Object.freeze({makeTypesMatch:Nt,assertTypesMatch:Ft,isTensorInList:function(t,e){return e.some((function(e){return e.id===t.id}))},getTensorsInContainer:_t}),Bt=function(){function t(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null};}return t.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose();},t}(),Pt=function(){function t(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Bt;}return t.prototype.ready=function(){return n(this,void 0,void 0,(function(){var t,e,n;return r(this,(function(r){switch(r.label){case 0:if(null!=this.pendingBackendInit)return [2,this.pendingBackendInit.then((function(){}))];if(null!=this.backendInstance)return [2];t=this.getSortedBackends(),e=0,r.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return r.sent()?[4,this.setBackend(n)]:[3,4];case 3:return r.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}}))}))},Object.defineProperty(t.prototype,"backend",{get:function(){if(null!=this.pendingBackendInit)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(null==this.backendInstance){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e);}return this.backendInstance},enumerable:!0,configurable:!0}),t.prototype.backendNames=function(){return Object.keys(this.registryFactory)},t.prototype.findBackend=function(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;if(this.initializeBackend(t).asyncInit)return null}return this.registry[t]},t.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},t.prototype.registerBackend=function(t,e,n){return void 0===n&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},t.prototype.setBackend=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:if(null==this.registryFactory[t])throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,null!=this.registry[t]?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=r.sent(),[3,3];case 2:o=n,r.label=3;case 3:if(!o)return [2,!1];r.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new ut(this.backendInstance),[2,!0]}}))}))},t.prototype.setupRegisteredKernels=function(){var t=this;f(this.backendName).forEach((function(e){null!=e.setupFunc&&e.setupFunc(t.backendInstance);}));},t.prototype.disposeRegisteredKernels=function(t){var e=this;f(t).forEach((function(n){null!=n.disposeFunc&&n.disposeFunc(e.registry[t]);}));},t.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(null==n)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var r=n.factory();if(Promise.resolve(r)===r){var o=++this.pendingBackendInitId,a=r.then((function(n){return !(o<e.pendingBackendInitId)&&(e.registry[t]=n,e.pendingBackendInit=null,!0)})).catch((function(n){return !(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(n.stack||n.message),!1)}));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(e){return console.warn("Initialization of backend "+t+" failed"),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}},t.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null);},t.prototype.getSortedBackends=function(){var t=this;if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority}))},t.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],r=this.initializeBackend(n),o=r.success,a=r.asyncInit;if(a||o)return {name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},t.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),r=n.backend,o=this.readSync(e);r.disposeData(e),n.backend=t,t.move(e,o,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++;},t.prototype.tidy=function(t,e){var n,r=this,o=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t;}else {if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t;}return this.scopedRun((function(){return r.startScope(o)}),(function(){return r.endScope(n)}),(function(){return (n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n}))},t.prototype.scopedRun=function(t,e,n){t();try{var r=n();return e(),r}catch(t){throw e(),t}},t.prototype.nextTensorId=function(){return t.nextTensorId++},t.prototype.nextVariableId=function(){return t.nextVariableId++},t.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],(function(t){return {x:function(){return t.toFloat()}}}),[]),e},t.prototype.runKernel=function(t,e,n,r,o){return this.runKernelFunc(null,e,null,t,n,r,o)},t.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},t.prototype.checkKernelForMemLeak=function(t,e,n){var r=this.backend.numDataIds(),o=0;n.forEach((function(t){o+="complex64"===t.dtype?3:1;}));var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-e-o-a;if(i>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+i+" data ids) after running '"+t+"'")},t.prototype.runKernelFunc=function(t,e,n,r,o,a,i){var s,u=this;void 0===a&&(a=[]),void 0===i&&(i=[]);var c=[],h=this.isTapeOn();null==r&&(r=null!=this.state.activeScope?this.state.activeScope.name:"");var f,d=function(t){h&&(c=t.map((function(t){return u.keep(u.clone(t))})));},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=l(r,this.backendName);return f=null!=g?function(){var t=u.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:o,backend:u.backend});var n=Array.isArray(m)?m:[m];u.shouldCheckForMemLeaks()&&u.checkKernelForMemLeak(r,t,n);var s=n.map((function(t){var e=t.dataId,n=t.shape,r=t.dtype;return u.makeTensorFromDataId(e,n,r)})),c=s.filter((function(t,e){return i[e]}));return d((a||[]).slice().concat(c)),s}:function(){var e=u.backend.numDataIds();m=u.tidy((function(){return t(u.backend,d)}));var n=Array.isArray(m)?m:[m];return u.shouldCheckForMemLeaks()&&u.checkKernelForMemLeak(r,e,n),n},this.scopedRun((function(){return u.state.kernelDepth++}),(function(){return u.state.kernelDepth--}),(function(){s=u.ENV.getBool("DEBUG")?u.profiler.profileKernel(r,e,(function(){return f()})):f();})),h&&this.addTapeNode(r,e,s,n,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:r,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map((function(t){return e[t].shape})),outputShapes:s.map((function(t){return t.shape}))}),Array.isArray(m)?s:s[0]},t.prototype.makeTensor=function(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;var o=t;"string"===n&&H(t[0])&&(o=t.map((function(t){return rt(t)})));var a=r.write(o,e,n),i=new wt(e,n,a,this.nextTensorId());if(this.incRef(i,r),"string"===n){var s=this.state.tensorInfo.get(a),u=G(o);this.state.numBytes+=u-s.bytes,s.bytes=u;}return i},t.prototype.makeTensorFromDataId=function(t,e,n,r){var o=new wt(e,n=n||"float32",t,this.nextTensorId());return this.incRef(o,r),o},t.prototype.makeVariable=function(t,e,n,r){void 0===e&&(e=!0),n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.asType(r));var o=new St(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[o.name])throw new Error("Variable with name "+o.name+" was already registered");return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o},t.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;var r=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(r=t.size*z(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r,refCount:0}),this.state.numBytes+=r;}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof St||this.track(t);},t.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--;}},t.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e);}},t.prototype.disposeVariable=function(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name];},t.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},t.prototype.profile=function(t){return n(this,void 0,void 0,(function(){var e,n;return r(this,(function(r){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map((function(t){return t.totalBytesSnapshot}))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]}))}))},t.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&0===this.state.kernelDepth},t.prototype.addTapeNode=function(t,e,n,r,o){var a=this,i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:o},s=h(t);null!=s&&(r=s.gradFunc),null!=r&&(i.gradient=function(t){return t=t.map((function(t,e){if(null==t){var r=n[e],o=tt(r.size,r.dtype);return a.makeTensor(o,r.shape,r.dtype)}return t})),r(t.length>1?t:t[0],o)}),this.state.activeTape.push(i);},t.prototype.keep=function(t){return t.kept=!0,t},t.prototype.startTape=function(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++;},t.prototype.endTape=function(){this.state.gradientDepth--;},t.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e;},t.prototype.endScope=function(t){for(var e=this,n=_t(t),r=new Set(n.map((function(t){return t.id}))),o=0;o<this.state.activeScope.track.length;o++){var a=this.state.activeScope.track[o];a.kept||r.has(a.id)||a.dispose();}var i=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach((function(t){t.kept||t.scopeId!==i.id||e.track(t);}));},t.prototype.gradients=function(t,e,n,r){var o=this;if(void 0===r&&(r=!1),C(e.length>0,(function(){return "gradients() received an empty list of xs."})),null!=n&&"float32"!==n.dtype)throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var a=this.scopedRun((function(){return o.startTape()}),(function(){return o.endTape()}),(function(){return o.tidy("forward",t)}));C(a instanceof wt,(function(){return "The result y returned by f() must be a tensor."}));var i=function(t,e,n){for(var r={},o={},a=0;a<e.length;a++)r[e[a].id]=!0;for(a=0;a<t.length;a++){var i=(p=t[a]).inputs;for(var s in i){for(var u=i[s],c=!1,l=0;l<e.length;l++)if(r[u.id]){p.outputs.forEach((function(t){return r[t.id]=!0})),c=!0,o[p.id]=!0;break}if(c)break}}var h={};h[n.id]=!0;var f={};for(a=t.length-1;a>=0;a--)for(i=(p=t[a]).inputs,l=0;l<p.outputs.length;l++)if(h[p.outputs[l].id]){for(var s in i)h[i[s].id]=!0,f[p.id]=!0;break}var d=[];for(a=0;a<t.length;a++){var p;if(o[(p=t[a]).id]&&f[p.id]){var v={};for(var s in p.inputs){var m=p.inputs[s];r[m.id]&&(v[s]=m);}var g=Object.assign({},p);g.inputs=v,g.outputs=p.outputs,d.push(g);}}return d}(this.state.activeTape,e,a);if(!r&&0===i.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(function(){var t,r,s={};s[a.id]=null==n?(t=a.shape,r=Z(k(t),"float32"),Lt.makeTensor(r,t,"float32")):n,function(t,e,n){for(var r=function(r){var o=e[r],a=[];if(o.outputs.forEach((function(e){var n=t[e.id];null!=n?a.push(n):a.push(null);})),null==o.gradient)throw new Error("Cannot compute gradient: gradient function not found for "+o.kernelName+".");var i=o.gradient(a),s=function(e){if(!(e in i))throw new Error("Cannot backprop through input "+e+". Available gradients found: "+Object.keys(i)+".");var r=n((function(){return i[e]()}));if("float32"!==r.dtype)throw new Error("Error in gradient for op "+o.kernelName+". The gradient of input "+e+" must have 'float32' dtype, but has '"+r.dtype+"'");var a=o.inputs[e];if(!S(r.shape,a.shape))throw new Error("Error in gradient for op "+o.kernelName+". The gradient of input '"+e+"' has shape '"+r.shape+"', which does not match the shape of the input '"+a.shape+"'");if(null==t[a.id])t[a.id]=r;else {var s=t[a.id];t[a.id]=s.add(r),s.dispose();}};for(var u in o.inputs)s(u);},o=e.length-1;o>=0;o--)r(o);}(s,i,(function(t){return o.tidy(t)}));var u=e.map((function(t){return s[t.id]}));return 0===o.state.gradientDepth&&(o.state.activeTape.forEach((function(t){for(var e=0,n=t.saved;e<n.length;e++){n[e].dispose();}})),o.state.activeTape=null),{value:a,grads:u}}))},t.prototype.customGrad=function(t){var e=this;return C(X(t),(function(){return "The f passed in customGrad(f) must be a function."})),function(){for(var n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];C(r.every((function(t){return t instanceof wt})),(function(){return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"}));var a={};return r.forEach((function(t,e){a[e]=t;})),e.runKernelFunc((function(e,o){return C((n=t.apply(void 0,r.concat([o]))).value instanceof wt,(function(){return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"})),C(X(n.gradFunc),(function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."})),n.value}),a,(function(t,e){var o=n.gradFunc(t,e),a=Array.isArray(o)?o:[o];C(a.length===r.length,(function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."})),C(a.every((function(t){return t instanceof wt})),(function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."}));var i={};return a.forEach((function(t,e){i[e]=function(){return t};})),i}))}},t.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},t.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},t.prototype.time=function(t){return n(this,void 0,void 0,(function(){var e,n;return r(this,(function(r){switch(r.label){case 0:return e=et(),[4,this.backend.time(t)];case 1:return (n=r.sent()).wallMs=et()-e,[2,n]}}))}))},t.prototype.track=function(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(t.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),t.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Bt,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null;},t.nextTensorId=0,t.nextVariableId=0,t}();var Lt=function(){var t=function(){if(null==Ot){var t=void 0;if("undefined"!=typeof window)t=window;else if("undefined"!=typeof global)t=global;else if("undefined"!=typeof process)t=process;else {if("undefined"==typeof self)throw new Error("Could not find a global object");t=self;}Ot=t;}return Ot}();if(null==t._tfengine){var e=new o(t);t._tfengine=new Pt(e);}return function(t){s=t;}(t._tfengine.ENV),yt=function(){return t._tfengine},t._tfengine}();function Wt(){return "undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var Ut=i();Ut.registerFlag("DEBUG",(function(){return !1}),(function(t){t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");})),Ut.registerFlag("IS_BROWSER",(function(){return Wt()})),Ut.registerFlag("IS_NODE",(function(){return "undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node})),Ut.registerFlag("IS_CHROME",(function(){return "undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})),Ut.registerFlag("PROD",(function(){return !1})),Ut.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(function(){return Ut.getBool("DEBUG")})),Ut.registerFlag("DEPRECATION_WARNINGS_ENABLED",(function(){return !0})),Ut.registerFlag("IS_TEST",(function(){return !1}));var Vt,zt,Gt,Ht={},qt={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Kt(t,e){Ht[t]=e;}function jt(t){t in Ht||(Ht[t]=function(t){if(1!==t&&2!==t)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var e=function(t){if("undefined"!=typeof OffscreenCanvas&&2===t)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(t);if(e.addEventListener("webglcontextlost",(function(e){e.preventDefault(),delete Ht[t];}),!1),1===t)return e.getContext("webgl",qt)||e.getContext("experimental-webgl",qt);return e.getContext("webgl2",qt)}(t));var e=Ht[t];return e.isContextLost()?(delete Ht[t],jt(t)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Ht[t])}function Xt(t,e){return [e,t]}function Yt(t){var e=k(t);return T(Math.ceil(e/4))}function $t(t,e){return [Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function Qt(t,e){var n,r,o,a,s,u,c,l,h,f=t;return 2===i().getNumber("WEBGL_VERSION")?(n=f.R32F,r=f.R16F,o=f.RGBA16F,a=f.RGBA32F,s=f.RED,u=4,c=1,l=f.HALF_FLOAT,h=f.FLOAT):(n=t.RGBA,r=t.RGBA,o=t.RGBA,a=f.RGBA,s=t.RGBA,u=4,c=4,l=null!=e?e.HALF_FLOAT_OES:null,h=t.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:s,downloadTextureFormat:t.RGBA,downloadUnpackNumChannels:u,defaultNumChannels:c,textureTypeHalfFloat:l,textureTypeFloat:h}}function Jt(t,e,n){var r=n();return e&&function(t){var e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+ne(t,e))}(t),r}!function(t){t[t.DENSE=0]="DENSE",t[t.SHARED_BATCH=1]="SHARED_BATCH";}(Vt||(Vt={})),function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD";}(zt||(zt={})),function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16";}(Gt||(Gt={}));var Zt=5.96e-8,te=65504;function ee(t){return !!(i().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===t||Zt<Math.abs(t)&&Math.abs(t)<te)}function ne(t,e){switch(e){case t.NO_ERROR:return "NO_ERROR";case t.INVALID_ENUM:return "INVALID_ENUM";case t.INVALID_VALUE:return "INVALID_VALUE";case t.INVALID_OPERATION:return "INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return "INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return "OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return "CONTEXT_LOST_WEBGL";default:return "Unknown error code "+e}}function re(t,e,n){return ke(t,e,(function(){return t.getExtension(n)}),'Extension "'+n+'" not supported on this browser.')}function oe(t,e,n){var r=ke(t,e,(function(){return t.createShader(t.VERTEX_SHADER)}),"Unable to create vertex WebGLShader.");if(Jt(t,e,(function(){return t.shaderSource(r,n)})),Jt(t,e,(function(){return t.compileShader(r)})),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw console.log(t.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function ae(t,e,n){var r=ke(t,e,(function(){return t.createShader(t.FRAGMENT_SHADER)}),"Unable to create fragment WebGLShader.");if(Jt(t,e,(function(){return t.shaderSource(r,n)})),Jt(t,e,(function(){return t.compileShader(r)})),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw function(t,e){var n=ue.exec(e);if(null==n)return console.log("Couldn't parse line number in error: "+e),void console.log(t);for(var r=+n[1],o=t.split("\n"),a=o.length.toString().length+2,i=o.map((function(t,e){return N((e+1).toString(),a)+t})),s=0,u=0;u<i.length;u++)s=Math.max(i[u].length,s);var c=i.slice(0,r-1),l=i.slice(r-1,r),h=i.slice(r);console.log(c.join("\n")),console.log(e.split("\n")[0]),console.log("%c "+N(l[0],s),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(h.join("\n"));}(n,t.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var ie,se,ue=/ERROR: [0-9]+:([0-9]+):/g;function ce(t,e){return ke(t,e,(function(){return t.createProgram()}),"Unable to create WebGLProgram.")}function le(t,e,n){if(Jt(t,e,(function(){return t.linkProgram(n)})),!1===t.getProgramParameter(n,t.LINK_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}function he(t,e,n){if(Jt(t,e,(function(){return t.validateProgram(n)})),!1===t.getProgramParameter(n,t.VALIDATE_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function fe(t,e,n){var r=ke(t,e,(function(){return t.createBuffer()}),"Unable to create WebGLBuffer");return Jt(t,e,(function(){return t.bindBuffer(t.ARRAY_BUFFER,r)})),Jt(t,e,(function(){return t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)})),r}function de(t,e,n){var r=ke(t,e,(function(){return t.createBuffer()}),"Unable to create WebGLBuffer");return Jt(t,e,(function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r)})),Jt(t,e,(function(){return t.bufferData(t.ELEMENT_ARRAY_BUFFER,n,t.STATIC_DRAW)})),r}function pe(t,e){return ke(t,e,(function(){return t.createTexture()}),"Unable to create WebGLTexture.")}function ve(t,e){var n=i().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){var r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(t>n||e>n){r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+n+"x"+n+"]")+".")}}function me(t,e){return ke(t,e,(function(){return t.createFramebuffer()}),"Unable to create WebGLFramebuffer.")}function ge(t,e,n,r,o,a,i,s){var u=t.getAttribLocation(n,r);return -1!==u&&(Jt(t,e,(function(){return t.bindBuffer(t.ARRAY_BUFFER,o)})),Jt(t,e,(function(){return t.vertexAttribPointer(u,a,t.FLOAT,!1,i,s)})),Jt(t,e,(function(){return t.enableVertexAttribArray(u)})),!0)}function ye(t,e,n,r){Se(t,r),Jt(t,e,(function(){return t.activeTexture(t.TEXTURE0+r)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,n)}));}function xe(t,e,n,r){return ke(t,e,(function(){return t.getUniformLocation(n,r)}),'uniform "'+r+'" not present in program.')}function be(t,e,n){return t.getUniformLocation(e,n)}function we(t,e,n,r,o,a){Jt(t,e,(function(){return ye(t,e,r,a)})),Jt(t,e,(function(){return t.uniform1i(o,a)}));}function Ce(t,e,n,r){Jt(t,e,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,r)})),Jt(t,e,(function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}));}function Ee(t,e,n){Jt(t,e,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,n)})),Jt(t,e,(function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0)}));}function Re(t){var e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Ie(t,e))}function Ie(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return "FRAMEBUFFER_UNSUPPORTED";default:return "unknown error "+e}}function ke(t,e,n,r){var o=Jt(t,e,(function(){return n()}));if(null==o)throw new Error(r);return o}function Se(t,e){var n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=e+t.TEXTURE0;if(r<t.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function Ae(t,e){return void 0===e&&(e=2),k(t.slice(0,t.length-e))}function De(t){if(0===t.length)throw Error("Cannot get rows and columns of an empty shape array.");return [t.length>1?t[t.length-2]:1,t[t.length-1]]}function Te(t){var e=[1,1,1];return 0===t.length||1===t.length&&1===t[0]||(e=[Ae(t)].concat(De(t))),e}function Ne(t,e){var n;void 0===e&&(e=!1);var r=i().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e&&(r*=2,1===(t=t.map((function(e,n){return n>=t.length-2?b(t[n]):t[n]}))).length&&(t=[2,t[0]])),2!==t.length){var o=M(t);t=o.newShape;}var a=k(t);if(t.length<=1&&a<=r)return [1,a];if(2===t.length&&t[0]<=r&&t[1]<=r)return t;if(3===t.length&&t[0]*t[1]<=r&&t[2]<=r)return [t[0]*t[1],t[2]];if(3===t.length&&t[0]<=r&&t[1]*t[2]<=r)return [t[0],t[1]*t[2]];if(4===t.length&&t[0]*t[1]*t[2]<=r&&t[3]<=r)return [t[0]*t[1]*t[2],t[3]];if(4===t.length&&t[0]<=r&&t[1]*t[2]*t[3]<=r)return [t[0],t[1]*t[2]*t[3]];if(e){var s=Ae(t),u=2,c=2;return t.length&&(u=(n=De(t))[0],c=n[1]),T(a=s*(u/2)*(c/2)).map((function(t){return 2*t}))}return T(a)}function Fe(t){return t%2==0}function _e(t,e){if(S(t=t.slice(-2),e=e.slice(-2)))return !0;if(!t.length||!e.length)return !0;if(0===t[0]||0===t[1]||0===e[0]||0===e[1])return !0;if(t.length!==e.length){var n=t.slice(-1)[0],r=e.slice(-1)[0];if(n===r)return !0;if(Fe(n)&&Fe(r)&&(1===t[0]||1===e[0]))return !0}return t[1]===e[1]&&Fe(t[0])&&Fe(e[0])}function Oe(t){if(null==ie){var e=jt(t);ie=e.getParameter(e.MAX_TEXTURE_SIZE);}return ie}function Me(t){if(null==se){var e=jt(t);se=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);}return Math.min(16,se)}function Be(t){if(0===t)return 0;var e=jt(t);return Pe(e,"EXT_disjoint_timer_query_webgl2")&&2===t?2:Pe(e,"EXT_disjoint_timer_query")?1:0}function Pe(t,e){return null!=t.getExtension(e)}function Le(t){try{if(null!=jt(t))return !0}catch(t){return !1}return !1}function We(t){if(0===t)return !1;var e=jt(t);if(1===t){if(!Pe(e,"OES_texture_float"))return !1}else if(!Pe(e,"EXT_color_buffer_float"))return !1;return Ve(e)}function Ue(t){if(0===t)return !1;var e=jt(t);if(1!==t){if(Pe(e,"EXT_color_buffer_float"))return Ve(e);if(Pe(e,"EXT_color_buffer_half_float")){var n=e.getExtension("EXT_color_buffer_half_float");return function(t,e){var n=Qt(t,e),r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);var o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0);var a=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(r),t.deleteFramebuffer(o),a}(e,n)}return !1}return !!Pe(e,"OES_texture_float")&&(!!Pe(e,"WEBGL_color_buffer_float")&&Ve(e))}function Ve(t){var e=Qt(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);var r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);var o=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(r),o}function ze(t){return 2===t&&null!=jt(t).fenceSync}var Ge=Object.freeze({callAndCheck:Jt,canBeRepresented:ee,getWebGLErrorMessage:ne,getExtensionOrThrow:re,createVertexShader:oe,createFragmentShader:ae,createProgram:ce,linkProgram:le,validateProgram:he,createStaticVertexBuffer:fe,createStaticIndexBuffer:de,getNumChannels:function(){return 2===i().getNumber("WEBGL_VERSION")?1:4},createTexture:pe,validateTextureSize:ve,createFramebuffer:me,bindVertexBufferToProgramAttribute:ge,bindTextureUnit:ye,unbindTextureUnit:function(t,e,n){Se(t,n),Jt(t,e,(function(){return t.activeTexture(t.TEXTURE0+n)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)}));},getProgramUniformLocationOrThrow:xe,getProgramUniformLocation:be,bindTextureToProgramUniformSampler:we,bindCanvasToFramebuffer:function(t,e){Jt(t,e,(function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)})),Jt(t,e,(function(){return t.viewport(0,0,t.canvas.width,t.canvas.height)})),Jt(t,e,(function(){return t.scissor(0,0,t.canvas.width,t.canvas.height)}));},bindColorTextureToFramebuffer:Ce,unbindColorTextureFromFramebuffer:Ee,validateFramebuffer:Re,getFramebufferErrorMessage:Ie,getBatchDim:Ae,getRowsCols:De,getShapeAs3D:Te,getTextureShapeFromLogicalShape:Ne,isReshapeFree:_e,getWebGLMaxTextureSize:Oe,resetMaxTextureSize:function(){ie=null;},resetMaxTexturesInShader:function(){se=null;},getMaxTexturesInShader:Me,getWebGLDisjointQueryTimerVersion:Be,hasExtension:Pe,isWebGLVersionEnabled:Le,isCapableOfRenderingToFloatTexture:We,isDownloadFloatTextureEnabled:Ue,isWebGLFenceEnabled:ze}),He=i();function qe(){i().set("PROD",!0);}function Ke(){i().set("DEBUG",!0);}function je(){i().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.");}function Xe(t){i().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().");}function Ye(){Lt.disposeVariables();}function $e(){return Lt}function Qe(){return Lt.memory()}function Je(t){return Lt.profile(t)}function Ze(t,e){return Lt.tidy(t,e)}function tn(t){_t(t).forEach((function(t){return t.dispose()}));}function en(t){return Lt.keep(t)}function nn(t){return Lt.time(t)}function rn(t){return Lt.setBackend(t)}function on(){return Lt.ready()}function an(){return Lt.backendName}function sn(t){Lt.removeBackend(t);}function un(t){return Lt.findBackend(t)}function cn(t){return Lt.findBackendFactory(t)}function ln(t,e,n){return void 0===n&&(n=1),Lt.registerBackend(t,e,n)}function hn(){return Lt.backend}function fn(t,e){i().setPlatform(t,e);}function dn(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i().getBool("IS_TEST")||console.warn.apply(console,t);}function pn(t,e){var n=t;if(V(t))return "string"===e?[]:[t.length];if(!Array.isArray(t))return [];for(var r=[];Array.isArray(n)||V(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&i().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){if(r=r||[],!Array.isArray(e)&&!V(e))return void C(0===n.length,(function(){return "Element arr["+r.join("][")+"] is a primitive, but should be an array/TypedArray of "+n[0]+" elements"}));C(n.length>0,(function(){return "Element arr["+r.join("][")+"] should be a primitive, but is an array of "+e.length+" elements"})),C(e.length===n[0],(function(){return "Element arr["+r.join("][")+"] should have "+n[0]+" elements, but has "+e.length+" elements"}));for(var o=n.slice(1),a=0;a<e.length;++a)t(e[a],o,r.concat(a));}(t,r,[]),r}function vn(t,e,n,r){if(null!=t&&("numeric"!==t&&t!==e||"numeric"===t&&"string"===e))throw new Error("Argument '"+n+"' passed to '"+r+"' must be "+t+" tensor, but got "+e+" tensor")}function mn(t,e,n,r){if(void 0===r&&(r="numeric"),t instanceof wt)return vn(r,t.dtype,e,n),t;var o=j(t);if("string"!==o&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),vn(r,o,e,n),null==t||!V(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){var a=null==t?"null":t.constructor.name;throw new Error("Argument '"+e+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+a+"'")}var s=pn(t,o);V(t)||Array.isArray(t)||(t=[t]);var u="string"!==o?Q(t,o,i().getBool("DEBUG")):I(t,[],!0);return Lt.makeTensor(u,s,o)}function gn(t,e,n,r){if(void 0===r&&(r="numeric"),!Array.isArray(t))throw new Error("Argument "+e+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return t.map((function(t,r){return mn(t,e+"["+r+"]",n)}),r)}function yn(t,e){for(var n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return !1;return !0}function xn(t,e,n){for(var r=t.length+e.length,o=[],a=0,i=0,s=0;s<r;s++)-1===n.indexOf(s)?o.push(t[a++]):o.push(e[i++]);return o}function bn(t,e){for(var n=[],r=t.length,o=0;o<r;o++)-1===e.indexOf(o)&&n.push(t[o]);return [n,e.map((function(e){return t[e]}))]}function wn(t,e){return xn(t,e.map((function(t){return 1})),e)}function Cn(t,e,n){C(yn(e,n),(function(){return t+" supports only inner-most axes for now. Got axes "+e+" and rank-"+n+" input."}));}function En(t,e){if(yn(t,e))return null;for(var n=[],r=0;r<e;++r)-1===t.indexOf(r)&&n.push(r);return t.forEach((function(t){return n.push(t)})),n}function Rn(t){return t.map((function(t,e){return [e,t]})).sort((function(t,e){return t[1]-e[1]})).map((function(t){return t[0]}))}function In(t,e){for(var n=[],r=e-t;r<e;++r)n.push(r);return n}function kn(t,e){var n=t[0].length;t.forEach((function(t,e){C(t.length===n,(function(){return "Error in concat"+n+"D: rank of tensors["+e+"] must be the same as the rank of the rest ("+n+")"}));})),C(e>=0&&e<n,(function(){return "Error in concat"+n+"D: axis must be between 0 and "+(n-1)+"."}));var r=t[0];t.forEach((function(t,o){for(var a=0;a<n;a++)C(a===e||t[a]===r[a],(function(){return "Error in concat"+n+"D: Shape of tensors["+o+"] ("+t+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+o+"."}));}));}function Sn(t,e){for(var n=t[0].slice(),r=1;r<t.length;r++)n[e]+=t[r][e];return n}function An(t){var e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var n=e[0],r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];Lt.startScope(n);try{var o=r.apply(void 0,t);return o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),Lt.endScope(o),o}catch(t){throw Lt.endScope(null),t}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}He.registerFlag("HAS_WEBGL",(function(){return He.getNumber("WEBGL_VERSION")>0})),He.registerFlag("WEBGL_VERSION",(function(){return Le(2)?2:Le(1)?1:0})),He.registerFlag("WEBGL_BUFFER_SUPPORTED",(function(){return 2===He.get("WEBGL_VERSION")})),He.registerFlag("WEBGL_CPU_FORWARD",(function(){return !0})),He.registerFlag("WEBGL_FORCE_F16_TEXTURES",(function(){return !1})),He.registerFlag("WEBGL_PACK",(function(){return He.getBool("HAS_WEBGL")})),He.registerFlag("WEBGL_PACK_NORMALIZATION",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_CLIP",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_DEPTHWISECONV",(function(){return !1})),He.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_PACK_REDUCE",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_LAZILY_UNPACK",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_CONV_IM2COL",(function(){return He.getBool("WEBGL_PACK")})),He.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(function(){return Oe(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(function(){return Me(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(function(){var t=He.getNumber("WEBGL_VERSION");return 0===t?0:Be(t)})),He.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(function(){return He.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(t=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))));var t;})),He.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(function(){return We(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(function(){return !He.getBool("WEBGL_FORCE_F16_TEXTURES")&&He.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")})),He.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(function(){return Ue(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_FENCE_API_ENABLED",(function(){return ze(He.getNumber("WEBGL_VERSION"))})),He.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(function(){return He.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0})),bt=Xe;var Dn=An({complex_:function(t,e){var n=mn(t,"real","complex"),r=mn(e,"imag","complex");return E(n.shape,r.shape,"real and imag shapes, "+n.shape+" and "+r.shape+", must match in call to tf.complex()."),Lt.runKernelFunc((function(t){return t.complex(n,r)}),{$real:n,$imag:r})}}),Tn=An({real_:function(t){var e=mn(t,"input","real");return Lt.runKernelFunc((function(t){return t.real(e)}),{$input:e})}}),Nn=An({imag_:function(t){var e=mn(t,"input","imag");return Lt.runKernelFunc((function(t){return t.imag(e)}),{$input:e})}});function Fn(t,e,n){return _n(t,e,pn(t,n),n)}function _n(t,e,n,r){if(null==r&&(r=j(t)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!V(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){nt(e);var o=k(e),a=k(n);C(o===a,(function(){return "Based on the provided shape, ["+e+"], the tensor should have "+o+" values but has "+a}));for(var s=0;s<n.length;++s){var u=n[s],c=s!==n.length-1||u!==k(e.slice(s));C(n[s]===e[s]||!c,(function(){return "Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+e+"). "}));}}return V(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==r?Q(t,r,i().getBool("DEBUG")):I(t,[],!0),Lt.makeTensor(t,e,r)}function On(t,e){if((V(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&V(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return _n(t,[],[],e)}function Mn(t,e){R(t);var n=pn(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return _n(t,null,n,e)}function Bn(t,e,n){if(R(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");var r=pn(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return _n(t,e,r,n)}function Pn(t,e,n){if(R(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");var r=pn(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return _n(t,e,r,n)}function Ln(t,e,n){if(R(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");var r=pn(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return _n(t,e,r,n)}function Wn(t,e,n){if(R(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");var r=pn(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return _n(t,e,r,n)}function Un(t,e,n){if(R(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");var r=pn(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return _n(t,e=e||r,r,n)}function Vn(t,e,n,r){return void 0===e&&(e=!0),Lt.makeVariable(t,e,n,r)}function zn(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=zn(t,"float32"),r=Gn(t,"float32");return Dn(n,r)}var o=Z(k(t),e);return Lt.makeTensor(o,t,e)}function Gn(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=Gn(t,"float32"),r=Gn(t,"float32");return Dn(n,r)}var o=tt(k(t),e);return Lt.makeTensor(o,t,e)}function Hn(t,e,n){return Lt.runKernelFunc((function(r){return r.fill(t,e,n)}),{})}function qn(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");return Lt.runKernelFunc((function(r){return r.linspace(t,e,n)}),{})}function Kn(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r="float32"),0===n)throw new Error("Cannot have a step of zero");if(t===e||t<e&&n<0||e<t&&n>1)return Gn([0],r);var o=tt(Math.abs(Math.ceil((e-t)/n)),r);e<t&&1===n&&(n=-1),o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Mn(o,r)}var jn=An({onesLike_:function(t){var e=mn(t,"x","onesLike");if("complex64"===e.dtype){var n=jn(Tn(e)),r=Xn(Nn(e));return Dn(n,r)}return Lt.runKernelFunc((function(t){return t.onesLike(e)}),{$x:e},(function(t,e){return {$x:function(){return Xn(t)}}}))}}),Xn=An({zerosLike_:function(t){var e=mn(t,"x","zerosLike");return Lt.runKernelFunc((function(t){return t.zerosLike(e)}),{$x:e},(function(t,e){return {$x:function(){return Xn(t)}}}))}});var Yn=An({concat_:function(t,e){void 0===e&&(e=0),C(t.length>=1,(function(){return "Pass at least one tensor to concat"}));var n=gn(t,"tensors","concat");"complex64"===n[0].dtype&&n.forEach((function(t){if("complex64"!==t.dtype)throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype "+t.dtype+". ")})),e=O(e,n[0].shape)[0];var r=Sn(n.map((function(t){return t.shape})),e);if(0===k(r))return Fn([],r);if(1===(n=n.filter((function(t){return t.size>0}))).length)return n[0];var o=n.map((function(t){return t.shape}));kn(o,e);var a=n,i={axis:e};return Lt.runKernelFunc((function(t){return t.concat(n,e)}),a,(function(t){var n=o.map((function(t){return t[e]}));return tr(t,n,e).map((function(t){return function(){return t}}))}),"Concat",i)}}),$n=An({concat1d_:function(t){return Yn(t,0)}}),Qn=An({concat2d_:function(t,e){return Yn(t,e)}}),Jn=An({concat3d_:function(t,e){return Yn(t,e)}}),Zn=An({concat4d_:function(t,e){return Yn(t,e)}}),tr=An({split_:function(t,e,n){void 0===n&&(n=0);var r,o=mn(t,"x","split");return n=O(n,o.shape)[0],"number"==typeof e?(C(o.shape[n]%e==0,(function(){return "Number of splits must evenly divide the axis."})),r=new Array(e).fill(o.shape[n]/e)):(C(o.shape[n]===e.reduce((function(t,e){return t+e})),(function(){return "The sum of sizes must match the size of the axis dimension."})),r=e),Lt.runKernelFunc((function(t){return t.split(o,r,n)}),{$x:o},(function(t){return {$x:function(){return Yn(t,n)}}}))}});function er(t,e){return t(e={exports:{}},e.exports),e.exports}var nr=er((function(t){!function(t,e,n){function r(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e);}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null;}function o(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function a(t,e){var n=new r(t),a=e&&e.state,i=n.next;return i.int32=function(){return 4294967296*n.next()|0},i.double=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.alea=a;}(0,t,!1);})),rr=er((function(t){!function(t,e,n){function r(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next();}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xor128=a;}(0,t,!1);})),or=er((function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next();}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xorwow=a;}(0,t,!1);})),ar=er((function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.x,o=e.i;return t=r[o],n=(t^=t>>>7)^t<<24,n^=(t=r[o+1&7])^t>>>10,n^=(t=r[o+3&7])^t>>>3,n^=(t=r[o+4&7])^t<<7,t=r[o+7&7],n^=(t^=t<<13)^t<<9,r[o]=n,e.i=o+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next();}(e,t);}function o(t,e){return e.x=t.x.slice(),e.i=t.i,e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.x&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xorshift7=a;}(0,t,!1);})),ir=er((function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.w,o=e.X,a=e.i;return e.w=r=r+1640531527|0,n=o[a+34&127],t=o[a=a+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=o[a]=n^t,e.i=a,n+(r^r>>>16)|0},function(t,e){var n,r,o,a,i,s=[],u=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,u=Math.max(u,e.length)),o=0,a=-32;a<u;++a)e&&(r^=e.charCodeAt((a+32)%e.length)),0===a&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(i=i+1640531527|0,o=0==(n=s[127&a]^=r+i)?o+1:0);for(o>=128&&(s[127&(e&&e.length||0)]=-1),o=127,a=512;a>0;--a)r=s[o+34&127],n=s[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[o]=r^n;t.w=i,t.X=s,t.i=o;}(e,t);}function o(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.X&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.xor4096=a;}(0,t,!1);})),sr=er((function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,o=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^o,e.a=o-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next();}function o(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n((function(){return a})):this.tychei=a;}(0,t,!1);})),ur=er((function(t){!function(e,n){var r,o=this,a=256,i=6,s="random",u=n.pow(a,i),c=n.pow(2,52),l=2*c,h=a-1;function f(t,h,f){var g=[],y=v(function t(e,n){var r,o=[],a=typeof e;if(n&&"object"==a)for(r in e)try{o.push(t(e[r],n-1));}catch(t){}return o.length?o:"string"==a?e:e+"\0"}((h=1==h?{entropy:!0}:h||{}).entropy?[t,m(e)]:null==t?function(){try{var t;return r&&(t=r.randomBytes)?t=t(a):(t=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(t)),m(t)}catch(t){var n=o.navigator,i=n&&n.plugins;return [+new Date,o,i,o.screen,m(e)]}}():t,3),g),x=new d(g),b=function(){for(var t=x.g(i),e=u,n=0;t<c;)t=(t+n)*a,e*=a,n=x.g(1);for(;t>=l;)t/=2,e/=2,n>>>=1;return (t+n)/e};return b.int32=function(){return 0|x.g(4)},b.quick=function(){return x.g(4)/4294967296},b.double=b,v(m(x.S),e),(h.pass||f||function(t,e,r,o){return o&&(o.S&&p(o,x),t.state=function(){return p(x,{})}),r?(n[s]=t,e):t})(b,y,"global"in h?h.global:this==n,h.state)}function d(t){var e,n=t.length,r=this,o=0,i=r.i=r.j=0,s=r.S=[];for(n||(t=[n++]);o<a;)s[o]=o++;for(o=0;o<a;o++)s[o]=s[i=h&i+t[o%n]+(e=s[o])],s[i]=e;(r.g=function(t){for(var e,n=0,o=r.i,i=r.j,s=r.S;t--;)e=s[o=h&o+1],n=n*a+s[h&(s[o]=s[i=h&i+e])+(s[i]=e)];return r.i=o,r.j=i,n})(a);}function p(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function v(t,e){for(var n,r=t+"",o=0;o<r.length;)e[h&o]=h&(n^=19*e[h&o])+r.charCodeAt(o++);return m(e)}function m(t){return String.fromCharCode.apply(0,t)}if(n["seed"+s]=f,v(n.random(),e),t.exports){t.exports=f;try{r=require("crypto");}catch(t){}}}([],Math);}));ur.alea=nr,ur.xor128=rr,ur.xorwow=or,ur.xorshift7=ar,ur.xor4096=ir,ur.tychei=sr;var cr=ur.alea,lr=function(){function t(t,e,n,r,o){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=o||Math.random();this.random=cr(a.toString());}return t.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,r=!1;!r;){var o=void 0,a=void 0,i=void 0;do{i=(o=2*this.random()-1)*o+(a=2*this.random()-1)*a;}while(i>=1||0===i);var s=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*o*s,n=this.mean+this.stdDev*a*s,this.truncated&&!this.isValidTruncated(e)||(r=!0);}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},t.prototype.convertValue=function(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)},t.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},t}(),hr=function(){function t(t,e,n,r){this.alpha=t,this.beta=1/e,this.dtype=n;var o=r||Math.random();this.randu=cr(o.toString()),this.randn=new lr(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d);}return t.prototype.nextValue=function(){for(var t,e,n,r,o,a;;){do{r=this.randn.nextValue(),a=1+this.c*r;}while(a<=0);if(a*=a*a,e=1-.331*(t=r*r)*t,n=.5*t+this.d*(1-a+Math.log(a)),(o=this.randu())<e||Math.log(o)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},t.prototype.convertValue=function(t){return "float32"===this.dtype?t:Math.round(t)},t}(),fr=function(){function t(t,e,n,r){var o=this;if(void 0===t&&(t=0),void 0===e&&(e=1),this.canReturnFloat=function(){return null==o.dtype||"float32"===o.dtype},this.min=t,this.range=e-t,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=cr(r);}return t.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},t.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},t}();function dr(t,e,n){return void 0===e&&(e="float32"),e=e||"float32",nt(t),new gt(t,e,n)}function pr(t,e){void 0===e&&(e=!1),console.log(t.toString(e));}var vr=An({batchToSpaceND_:function(t,e,n){var r=mn(t,"x","batchToSpaceND"),o=e.reduce((function(t,e){return t*e}));return C(r.rank>=1+e.length,(function(){return "input rank is "+r.rank+" but should be > than blockShape.length "+e.length})),C(n.length===e.length,(function(){return "crops.length is "+n.length+" but should be equal to blockShape.length  "+e.length})),C(r.shape[0]%o==0,(function(){return "input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+e.join(" * ")+" === "+o})),Lt.runKernelFunc((function(t){return t.batchToSpaceND(r,e,n)}),{$x:r},(function(t){return {$x:function(){return t.spaceToBatchND(e,n)}}}))}}),mr=An({broadcastTo_:function(t,e){var n=mn(t,"broadcastTo","x"),r=n.shape;if(e.some((function(t){return !(t>0)||t%1!=0})))throw new Error("broadcastTo(): Invalid broadcast shape ["+e+"].");if(e.length<n.rank)throw new Error("broadcastTo(): shape.length="+e.length+" < input.rank="+n.rank+".");if(e.length>n.rank){for(var o=n.shape.slice();o.length<e.length;)o.unshift(1);n=n.reshape(o);}for(var a=Array.from(e),i=e.length-1;i>=0;i--)if(n.shape[i]===e[i])a[i]=1;else if(1!==n.shape[i])throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+e+"].");var s=a.map((function(t,e){return t>1?e:-1})).filter((function(t){return t>=0}));return 0===s.length?n.clone():Lt.runKernelFunc((function(t){return t.tile(n,a)}),{input:n},(function(t){return {input:function(){return t.sum(s,!0)}}}))}}),gr=An({cast_:function(t,e){var n=mn(t,"x","cast");if(!W(e))throw new Error("Failed to cast to unknown dtype "+e);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");var r={dtype:e};return Lt.runKernelFunc((function(t){return t.cast(n,e)}),{x:n},(function(t){return {x:function(){return t.clone()}}}),"Cast",r)}}),yr=An({clone_:function(t){var e=mn(t,"x","clone",null);return Lt.runKernelFunc((function(){return Lt.makeTensorFromDataId(e.dataId,e.shape,e.dtype)}),{$x:e},(function(t){return {$x:function(){return t.toFloat()}}}))}}),xr=An({cumsum_:function(t,e,n,r){void 0===e&&(e=0),void 0===n&&(n=!1),void 0===r&&(r=!1);var o=mn(t,"x","cumsum"),a=En([e|=0],o.rank),i=o;null!=a&&(i=o.transpose(a));var s=In(1,o.rank)[0],u=Lt.runKernelFunc((function(t){return t.cumsum(i,s,n,r)}),{permutedX:i},(function(t){return {permutedX:function(){return t.cumsum(e,n,!r)}}}));return null!=a&&(u=u.transpose(a)),u}}),br=An({depthToSpace_:function(t,e,n){void 0===n&&(n="NHWC");var r=mn(t,"x","depthToSpace"),o="NHWC"===n?r.shape[1]:r.shape[2],a="NHWC"===n?r.shape[2]:r.shape[3],i="NHWC"===n?r.shape[3]:r.shape[1];return C(o*e>=0,(function(){return "Negative dimension size caused by overflow when multiplying\n      "+o+" and "+e+"  for depthToSpace with input shape\n      "+r.shape})),C(a*e>=0,(function(){return "Negative dimension size caused by overflow when multiplying\n      "+a+" and "+e+" for depthToSpace with input shape\n          "+r.shape})),C(i%(e*e)==0,(function(){return "Dimension size must be evenly divisible by "+e*e+" but is "+i+" for depthToSpace with input shape "+r.shape})),Lt.runKernelFunc((function(t){return t.depthToSpace(r,e,n)}),{$x:r})}}),wr=An({expandDims_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","expandDims",null);C(e<=n.rank,(function(){return "Axis must be <= rank of the tensor"}));var r=n.shape.slice();return e<0&&(C(-(n.rank+1)<=e,(function(){return "Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"})),e=n.rank+e+1),r.splice(e,0,1),Or(n,r)}}),Cr=An({eye_:function(t,e,n,r){void 0===r&&(r="float32"),null==e&&(e=t);for(var o=dr([t,e],r),a=t<=e?t:e,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(t,e);if(null==n)return s;if(1===n.length)return Lr(wr(s,0),[n[0],1,1]);if(2===n.length)return Lr(wr(wr(s,0),0),[n[0],n[1],1,1]);if(3===n.length)return Lr(wr(wr(wr(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}}),Er=An({multinomial_:function(t,e,n,r){void 0===r&&(r=!1);var o=mn(t,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);n=n||Math.random();var s=1===i?o.as2D(1,-1):o,u=Lt.runKernelFunc((function(t){return t.multinomial(s,r,e,n)}),{logits2D:s});return 1===i?u.as1D():u}}),Rr=An({oneHot_:function(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r=0),e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);var o=mn(t,"indices","oneHot","int32"),a=o.shape.concat([e]);return o=o.flatten(),Lt.runKernelFunc((function(t){return t.oneHot(o,e,n,r)}),{$indices:o},(function(t){return {$indices:function(){return Gn(o.shape,"float32")}}})).reshape(a)}}),Ir=An({pad_:function(t,e,n){void 0===n&&(n=0);var r=mn(t,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:e,constantValue:n};return Lt.runKernelFunc((function(t){return t.pad(r,e,n)}),{x:r},(function(t){var n=e.map((function(t){return t[0]}));return {x:function(){return t.slice(n,r.shape)}}}),"PadV2",o)}}),kr=An({pad1d_:function(t,e,n){return void 0===n&&(n=0),C(2===e.length,(function(){return "Invalid number of paddings. Must be length of 2."})),Ir(t,[e],n)}}),Sr=An({pad2d_:function(t,e,n){return void 0===n&&(n=0),C(2===e.length&&2===e[0].length&&2===e[1].length,(function(){return "Invalid number of paddings. Must be length of 2 each."})),Ir(t,e,n)}}),Ar=An({pad3d_:function(t,e,n){return void 0===n&&(n=0),C(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,(function(){return "Invalid number of paddings. Must be length of 2 each."})),Ir(t,e,n)}}),Dr=An({pad4d_:function(t,e,n){return void 0===n&&(n=0),C(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,(function(){return "Invalid number of paddings. Must be length of 2 each."})),Ir(t,e,n)}}),Tr=An({rand_:function(t,e,n){var r=k(t),o=null;if(null==n||"float32"===n)o=new Float32Array(r);else if("int32"===n)o=new Int32Array(r);else {if("bool"!==n)throw new Error("Unknown data type "+n);o=new Uint8Array(r);}for(var a=0;a<r;a++)o[a]=e();return Lt.makeTensor(o,t,n)}}),Nr=An({randomNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new lr(e,n,r,!1,o),i=dr(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Fr=An({randomGamma_:function(t,e,n,r,o){if(void 0===n&&(n=1),void 0===r&&(r="float32"),null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error("Unsupported data type "+r);for(var a=new hr(e,n,r,o),i=dr(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),_r=An({randomUniform_:function(t,e,n,r,o){void 0===e&&(e=0),void 0===n&&(n=1),void 0===r&&(r="float32");for(var a=dr(t,r),i=new fr(e,n,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Or=An({reshape_:function(t,e){var n=mn(t,"x","reshape",null);e=_(e,n.size),C(n.size===k(e),(function(){return "new shape and old shape must have the same number of elements."}));var r={shape:e};return Lt.runKernelFunc((function(t){return t.reshape(n,e)}),{x:n},(function(t){return {x:function(){return t.reshape(n.shape)}}}),"Reshape",r)}}),Mr=An({spaceToBatchND_:function(t,e,n){var r=mn(t,"x","spaceToBatchND");return C(r.rank>=1+e.length,(function(){return "input rank "+r.rank+" should be > than [blockShape] "+e.length})),C(n.length===e.length,(function(){return "paddings.shape[0] "+n.length+" must be equal to [blockShape] "+e.length})),C(r.shape.reduce((function(t,r,o){return o>0&&o<=e.length?t&&(r+n[o-1][0]+n[o-1][1])%e[o-1]==0:t}),!0),(function(){return "input spatial dimensions "+r.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+e.toString()})),Lt.runKernelFunc((function(t){return t.spaceToBatchND(r,e,n)}),{$x:r},(function(t){return {$x:function(){return t.batchToSpaceND(e,n)}}}))}}),Br=An({squeeze_:function(t,e){var n=mn(t,"x","squeeze");return Or(n,M(n.shape,e).newShape)}}),Pr=An({stack_:function(t,e){void 0===e&&(e=0);var n=gn(t,"tensors","stack");if(C(n.length>=1,(function(){return "Pass at least one tensor to tf.stack"})),1===n.length)return n[0].expandDims(e);var r=n[0].rank,o=n[0].shape,a=n[0].dtype;C(e<=r,(function(){return "Axis must be <= rank of the tensor"})),n.forEach((function(t){E(o,t.shape,"All tensors passed to stack must have matching shapes");})),n.forEach((function(t){C(a===t.dtype,(function(){return "All tensors passed to stack must have matching dtypes"}));}));var i=n.map((function(t){return t.expandDims(e)}));return Yn(i,e)}}),Lr=An({tile_:function(t,e){var n=mn(t,"x","tile",null);C(n.rank===e.length,(function(){return "Error in transpose: rank of input "+n.rank+" must match length of reps "+e+"."}));var r=[n],o={reps:e};return Lt.runKernelFunc((function(t,r){var o=t.tile(n,e);return r([n]),o}),{x:n},(function(t,n){var r=n[0];return {x:function(){var n=Xn(r);if(1===r.rank)for(var o=0;o<e[0];++o)n=n.add(t.slice([o*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(o=0;o<e[0];++o)for(var a=0;a<e[1];++a)n=n.add(t.slice([o*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(o=0;o<e[0];++o)for(a=0;a<e[1];++a)for(var i=0;i<e[2];++i)n=n.add(t.slice([o*r.shape[0],a*r.shape[1],i*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else {if(4!==r.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(o=0;o<e[0];++o)for(a=0;a<e[1];++a)for(i=0;i<e[2];++i)for(var s=0;s<e[3];++s)n=n.add(t.slice([o*r.shape[0],a*r.shape[1],i*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));}return n}}}),"Tile",o,r)}}),Wr=An({truncatedNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new lr(e,n,r,!0,o),i=dr(t,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ur=An({unstack_:function(t,e){void 0===e&&(e=0),e=e||0;var n=mn(t,"x","unstack");C(e>=-n.shape.length&&e<n.shape.length,(function(){return "Axis = "+e+" is not in [-"+n.shape.length+", "+n.shape.length+")"})),e<0&&(e+=n.shape.length);var r={axis:e};return Lt.runKernelFunc((function(t){return t.unstack(n,e)}),{x:n},(function(t){return {x:function(){return Pr(t,e)}}}),"Unpack",r)}}),Vr=function(t,e){return n(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"x","setdiff1d"),o=mn(e,"y","setdiff1d"),C(n.dtype===o.dtype,(function(){return "x and y should have the same dtype, but got x ("+n.dtype+") and y ("+o.dtype+")."})),C(1===n.rank,(function(){return "x should be 1D tensor, but got x ("+n.shape+")."})),C(1===o.rank,(function(){return "y should be 1D tensor, but got y ("+o.shape+")."})),[4,n.data()];case 1:return a=r.sent(),[4,o.data()];case 2:for(i=r.sent(),s=new Set(i),u=0,h=0;h<a.length;h++)s.has(a[h])||u++;for(c=new gt([u],n.dtype),l=new gt([u],"int32"),h=0,f=0;h<a.length;h++)s.has(a[h])||(c.values[f]=a[h],l.values[f]=h,f++);return [2,[c.toTensor(),l.toTensor()]]}}))}))};function zr(t,e,n,r){void 0===r&&(r=!0);var o=[];if(r)(o=o.concat(e.slice(0))).push(t[0]/n),o=o.concat(t.slice(1));else {o=o.concat(t[0]);for(var a=e.length,i=0;i<a;++i)o=o.concat([t[i+1]/e[i],e[i]]);o=o.concat(t.slice(a+1));}return o}function Gr(t,e,n){void 0===n&&(n=!0);var r=[];if(n){r.push(e);for(var o=e+1;o<t;++o)o<=2*e?(r.push(o),r.push(o-(e+1))):r.push(o);}else {var a=[],i=[];for(o=1;o<t;++o)o>=2*e+1||o%2==1?i.push(o):a.push(o);r.push.apply(r,a),r.push(0),r.push.apply(r,i);}return r}function Hr(t,e,n,r){void 0===r&&(r=!0);var o=[];r?o.push(t[0]/n):o.push(t[0]*n);for(var a=1;a<t.length;++a)a<=e.length?r?o.push(e[a-1]*t[a]):o.push(t[a]/e[a-1]):o.push(t[a]);return o}function qr(t,e){for(var n=[0],r=0;r<e;++r)n.push(t[r][0]);return n}function Kr(t,e,n){for(var r=t.slice(0,1),o=0;o<n;++o)r.push(t[o+1]-e[o][0]-e[o][1]);return r}function jr(t,e){if(t.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+t.rank+".");if(e.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if("int32"!==e.dtype)throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+e.dtype+".");if(e.shape[e.rank-1]>t.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+e.shape[e.rank-1]+" vs. "+t.rank);if(0===t.size)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+t.shape+".");for(var n=e.shape,r=n[n.length-1],o=1,a=0;a<n.length-1;++a)o*=n[a];var i=t.shape,s=n.slice();s.pop();var u=1;for(a=r;a<t.rank;++a)u*=i[a],s.push(i[a]);var c=$(t.shape).map((function(t){return t/u})).concat([1]).slice(0,r);return [s,o,u,c]}var Xr=Object.freeze({prepareAndValidate:jr}),Yr=30;function $r(t){return t<=Yr?t:Y(t,Math.floor(Math.sqrt(t)))}function Qr(t,e,n){var r=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+", indices.shape: "+e.shape+", shape: "+t+", sliceDim: "+r+", and batchDim: "+o+".";if(n.rank<o)throw new Error(a+" update.rank < "+o+". ");if(t.length<r+(n.rank-o))throw new Error(a+" Output shape length < "+(r+(n.rank-o)));if(n.rank!==o+t.length-r)throw new Error(a+" update.rank != "+(o+t.length-r));for(var i=0;i<o;++i)if(n.shape[i]!==e.shape[i])throw new Error(a+" updates.shape["+i+"] ("+n.shape[i]+") != indices.shape["+i+"] ("+e.shape[i]+").");for(i=0;i<n.rank-o;++i)if(n.shape[i+o]!==t[i+r])throw new Error(a+" updates.shape["+(i+o)+"] ("+n.shape[i+o]+") != shape["+(i+o)+"] ("+t[i+o]+")")}function Jr(t,e,n){if(e.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(t.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+t.rank+".");if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}Qr(n,e,t);}function Zr(t,e,n){for(var r=e.shape.length,o=r>1?e.shape[r-1]:1,a=n.length,i=1,s=o;s<a;++s)i*=n[s];var u=o<1?1:o;return {sliceRank:o,numUpdates:k(e.shape)/u,sliceSize:i,strides:$(n.slice(0,o)).concat([1]),outputSize:k(n)}}var to=Object.freeze({validateUpdateShape:Qr,validateInput:Jr,calculateShapes:Zr});function eo(t,e,n){C(t.rank===e.length,(function(){return "Error in slice"+t.rank+"D: Length of begin "+e+" must match the rank of the array ("+t.rank+")."})),C(t.rank===n.length,(function(){return "Error in slice"+t.rank+"D: Length of size "+n+" must match the rank of the array ("+t.rank+")."}));for(var r=function(r){C(e[r]+n[r]<=t.shape[r],(function(){return "Error in slice"+t.rank+"D: begin["+r+"] + size["+r+"] ("+(e[r]+n[r])+") would overflow input.shape["+r+"] ("+t.shape[r]+")"}));},o=0;o<t.rank;++o)r(o);}function no(t){for(var e=[],n=0;t>0;)1&t&&e.push(n),t/=2,n++;return e}function ro(t,e,n){for(var r=[],o=0;o<t.length;o++)r[o]=Math.ceil((e[o]-t[o])/n[o]);return r}function oo(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=x(0,a,s-1)}function ao(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return a<0&&(a+=s),a=i>0?x(0,a,s):x(-1,a,s-1)}function io(t,e,n){for(var r=n.length,o=0;o<n.length;o++)if(n[o]>1){r=o;break}for(o=r+1;o<n.length;o++)if(e[o]>0||n[o]!==t[o])return !1;return !0}function so(t,e){for(var n=t.length>0?t[t.length-1]:1,r=0;r<t.length-1;r++)n+=t[r]*e[r];return n}var uo=Object.freeze({assertParamsValid:eo,maskToAxes:no,computeOutShape:ro,startForAxis:oo,stopForAxis:ao,isSliceContinous:io,computeFlatOffset:so});function co(t){return C(X(t),(function(){return "The f passed in grad(f) must be a function"})),function(e,n){var r=mn(e,"x","tf.grad",null),o=null!=n?mn(n,"dy","tf.grad"):null;return Lt.tidy((function(){var e=Lt.gradients((function(){return t(r)}),[r],o),n=e.value,a=e.grads;return null!=o&&E(n.shape,o.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),mo(a),a[0]}))}}function lo(t){return C(X(t),(function(){return "The f passed in grads(f) must be a function"})),function(e,n){C(Array.isArray(e),(function(){return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"}));var r=gn(e,"args","tf.grads",null),o=null!=n?mn(n,"dy","tf.grads"):null;return Lt.tidy((function(){var e=Lt.gradients((function(){return t.apply(void 0,r)}),r,o),n=e.value,a=e.grads;return null!=o&&E(n.shape,o.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),mo(a),a}))}}function ho(t){return C(X(t),(function(){return "The f passed in valueAndGrad(f) must be a function"})),function(e,n){C(e instanceof wt,(function(){return "The x passed in valueAndGrad(f)(x) must be a tensor"})),C(null==n||n instanceof wt,(function(){return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor"}));var r=Lt.gradients((function(){return t(e)}),[e],n),o=r.grads,a=r.value;return mo(o),{grad:o[0],value:a}}}function fo(t){return C(X(t),(function(){return "The f passed in valueAndGrads(f) must be a function"})),function(e,n){C(Array.isArray(e)&&e.every((function(t){return t instanceof wt})),(function(){return "The args passed in valueAndGrads(f)(args) must be array of tensors"})),C(null==n||n instanceof wt,(function(){return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor"}));var r=Lt.gradients((function(){return t.apply(void 0,e)}),e,n);return null!=n&&E(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),mo(r.grads),r}}function po(t,e){C(X(t),(function(){return "The f passed in variableGrads(f) must be a function"})),C(null==e||Array.isArray(e)&&e.every((function(t){return t instanceof St})),(function(){return "The varList passed in variableGrads(f, varList) must be an array of variables"}));var n=null!=e;if(!n)for(var r in e=[],Lt.registeredVariables)e.push(Lt.registeredVariables[r]);var o=n?e.filter((function(t){return !t.trainable})):null,a=e.length;C((e=e.filter((function(t){return t.trainable}))).length>0,(function(){return "variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."}));var i=Lt.gradients(t,e,null,!0),s=i.value,u=i.grads;C(u.some((function(t){return null!=t})),(function(){return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."})),C(0===s.rank,(function(){return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"}));var c={};return e.forEach((function(t,e){null!=u[e]&&(c[t.name]=u[e]);})),null!=o&&o.forEach((function(t){return c[t.name]=null})),{value:s,grads:c}}function vo(t){return Lt.customGrad(t)}function mo(t){if(t.filter((function(t){return null==t})).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}var go=An({softmax_:function(t,e){void 0===e&&(e=-1);var n=mn(t,"logits","softmax","float32");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+e);return Lt.runKernelFunc((function(t,r){var o=t.softmax(n,e);return r([o]),o}),{logits:n},(function(t,n){var r=n[0],o=t.mul(r);return {logits:function(){return o.sub(o.sum([e],!0).mul(r))}}}),"Softmax",{dim:e},[],[!0])}}),yo=An({logSoftmax_:function(t,e){void 0===e&&(e=-1);var n=mn(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and axis was "+e);return vo((function(t,n){var r=t.max(e,!0),o=t.sub(r),a=o.toFloat().sub(o.exp().sum(e,!0).log());n([a]);return {value:a,gradFunc:function(t,n){var r=n[0].exp();return t.sub(t.sum(e,!0).mul(r))}}}))(n)}}),xo=function(){function t(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0;}return t.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},t.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e);},t.prototype.has=function(t){return this.data.has(t)},t.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},t.prototype.numDataIds=function(){return this.dataIdsCount},t}(),bo=function(){function t(){}return t.prototype.time=function(t){return wo("time")},t.prototype.read=function(t){return wo("read")},t.prototype.readSync=function(t){return wo("readSync")},t.prototype.numDataIds=function(){return wo("numDataIds")},t.prototype.disposeData=function(t){return wo("disposeData")},t.prototype.write=function(t,e,n){return wo("write")},t.prototype.move=function(t,e,n,r){return wo("move")},t.prototype.memory=function(){return wo("memory")},t.prototype.floatPrecision=function(){return wo("floatPrecision")},t.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},t.prototype.batchMatMul=function(t,e,n,r){return wo("batchMatMul")},t.prototype.fusedBatchMatMul=function(t){t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights;return wo("fusedBatchMatMul")},t.prototype.slice=function(t,e,n){return wo("slice")},t.prototype.stridedSlice=function(t,e,n,r){return wo("stridedSlice")},t.prototype.unstack=function(t,e){return wo("unstack")},t.prototype.reverse=function(t,e){return wo("reverse")},t.prototype.concat=function(t,e){return wo("concat")},t.prototype.neg=function(t){return wo("neg")},t.prototype.add=function(t,e){return wo("add")},t.prototype.addN=function(t){return wo("addN")},t.prototype.subtract=function(t,e){return wo("subtract")},t.prototype.multiply=function(t,e){return wo("multiply")},t.prototype.realDivide=function(t,e){return wo("realDivide")},t.prototype.floorDiv=function(t,e){return wo("floorDiv")},t.prototype.sum=function(t,e){return wo("sum")},t.prototype.prod=function(t,e){return wo("prod")},t.prototype.unsortedSegmentSum=function(t,e,n){return wo("unsortedSegmentSum")},t.prototype.argMin=function(t,e){return wo("argMin")},t.prototype.argMax=function(t,e){return wo("argMax")},t.prototype.equal=function(t,e){return wo("equal")},t.prototype.notEqual=function(t,e){return wo("notEqual")},t.prototype.less=function(t,e){return wo("less")},t.prototype.lessEqual=function(t,e){return wo("lessEqual")},t.prototype.greater=function(t,e){return wo("greater")},t.prototype.greaterEqual=function(t,e){return wo("greaterEqual")},t.prototype.logicalNot=function(t){return wo("logicalNot")},t.prototype.logicalAnd=function(t,e){return wo("logicalAnd")},t.prototype.logicalOr=function(t,e){return wo("logicalOr")},t.prototype.where=function(t){return wo("where")},t.prototype.select=function(t,e,n){return wo("select")},t.prototype.topk=function(t,e,n){return wo("topk")},t.prototype.min=function(t,e){return wo("min")},t.prototype.minimum=function(t,e){return wo("minimum")},t.prototype.mod=function(t,e){return wo("mod")},t.prototype.max=function(t,e){return wo("max")},t.prototype.maximum=function(t,e){return wo("maximum")},t.prototype.all=function(t,e){return wo("all")},t.prototype.any=function(t,e){return wo("any")},t.prototype.squaredDifference=function(t,e){return wo("squaredDifference")},t.prototype.ceil=function(t){return wo("ceil")},t.prototype.floor=function(t){return wo("floor")},t.prototype.round=function(t){return wo("round")},t.prototype.sign=function(t){return wo("sign")},t.prototype.isNaN=function(t){return wo("isNaN")},t.prototype.isInf=function(t){return wo("isInf")},t.prototype.isFinite=function(t){return wo("isFinite")},t.prototype.pow=function(t,e){return wo("pow")},t.prototype.exp=function(t){return wo("exp")},t.prototype.expm1=function(t){return wo("expm1")},t.prototype.softmax=function(t,e){return wo("softmax")},t.prototype.log=function(t){return wo("log")},t.prototype.log1p=function(t){return wo("log1p")},t.prototype.sqrt=function(t){return wo("sqrt")},t.prototype.rsqrt=function(t){return wo("rsqrt")},t.prototype.square=function(t){return wo("square")},t.prototype.reciprocal=function(t){return wo("reciprocal")},t.prototype.relu=function(t){return wo("relu")},t.prototype.relu6=function(t){return wo("relu6")},t.prototype.prelu=function(t,e){return wo("prelu")},t.prototype.elu=function(t){return wo("elu")},t.prototype.eluDer=function(t,e){return wo("eluDer")},t.prototype.selu=function(t){return wo("selu")},t.prototype.int=function(t){return wo("int")},t.prototype.clip=function(t,e,n){return wo("clip")},t.prototype.abs=function(t){return wo("abs")},t.prototype.complexAbs=function(t){return wo("complexAbs")},t.prototype.sigmoid=function(t){return wo("sigmoid")},t.prototype.softplus=function(t){return wo("softplus")},t.prototype.sin=function(t){return wo("sin")},t.prototype.cos=function(t){return wo("cos")},t.prototype.tan=function(t){return wo("tan")},t.prototype.asin=function(t){return wo("asin")},t.prototype.acos=function(t){return wo("acos")},t.prototype.atan=function(t){return wo("atan")},t.prototype.atan2=function(t,e){return wo("atan2")},t.prototype.sinh=function(t){return wo("sinh")},t.prototype.cosh=function(t){return wo("cosh")},t.prototype.tanh=function(t){return wo("tanh")},t.prototype.asinh=function(t){return wo("asinh")},t.prototype.acosh=function(t){return wo("acosh")},t.prototype.atanh=function(t){return wo("atanh")},t.prototype.erf=function(t){return wo("erf")},t.prototype.step=function(t,e){return wo("step")},t.prototype.fusedConv2d=function(t){t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights;return wo("fusedConv2d")},t.prototype.conv2d=function(t,e,n){return wo("conv2d")},t.prototype.conv2dDerInput=function(t,e,n){return wo("conv2dDerInput")},t.prototype.conv2dDerFilter=function(t,e,n){return wo("conv2dDerFilter")},t.prototype.fusedDepthwiseConv2D=function(t){t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights;return wo("fusedDepthwiseConv2D")},t.prototype.depthwiseConv2D=function(t,e,n){return wo("depthwiseConv2D")},t.prototype.depthwiseConv2DDerInput=function(t,e,n){return wo("depthwiseConv2DDerInput")},t.prototype.depthwiseConv2DDerFilter=function(t,e,n){return wo("depthwiseConv2DDerFilter")},t.prototype.conv3d=function(t,e,n){return wo("conv3d")},t.prototype.conv3dDerInput=function(t,e,n){return wo("conv3dDerInput")},t.prototype.conv3dDerFilter=function(t,e,n){return wo("conv3dDerFilter")},t.prototype.maxPool=function(t,e){return wo("maxPool")},t.prototype.maxPoolBackprop=function(t,e,n,r){return wo("maxPoolBackprop")},t.prototype.avgPool=function(t,e){return wo("avgPool")},t.prototype.avgPoolBackprop=function(t,e,n){return wo("avgPoolBackprop")},t.prototype.avgPool3d=function(t,e){return wo("avgPool3d")},t.prototype.avgPool3dBackprop=function(t,e,n){return wo("avgPool3dBackprop")},t.prototype.maxPool3d=function(t,e){return wo("maxPool3d")},t.prototype.maxPool3dBackprop=function(t,e,n,r){return wo("maxPool3dBackprop")},t.prototype.reshape=function(t,e){return wo("reshape")},t.prototype.cast=function(t,e){return wo("cast")},t.prototype.tile=function(t,e){return wo("tile")},t.prototype.pad=function(t,e,n){return wo("pad")},t.prototype.transpose=function(t,e){return wo("transpose")},t.prototype.gather=function(t,e,n){return wo("gather")},t.prototype.gatherND=function(t,e){return wo("gatherND")},t.prototype.scatterND=function(t,e,n){return wo("scatterND")},t.prototype.batchToSpaceND=function(t,e,n){return wo("batchToSpaceND")},t.prototype.spaceToBatchND=function(t,e,n){return wo("spaceToBatchND")},t.prototype.resizeBilinear=function(t,e,n,r){return wo("resizeBilinear")},t.prototype.resizeBilinearBackprop=function(t,e,n){return wo("resizeBilinearBackprop")},t.prototype.resizeNearestNeighbor=function(t,e,n,r){return wo("resizeNearestNeighbor")},t.prototype.resizeNearestNeighborBackprop=function(t,e,n){return wo("resizeNearestNeighborBackprop")},t.prototype.batchNormalization=function(t,e,n,r,o,a){return wo("batchNormalization")},t.prototype.localResponseNormalization4D=function(t,e,n,r,o){return wo("localResponseNormalization4D")},t.prototype.LRNGrad=function(t,e,n,r,o,a,i){return wo("LRNGrad")},t.prototype.multinomial=function(t,e,n,r){return wo("multinomial")},t.prototype.oneHot=function(t,e,n,r){return wo("oneHot")},t.prototype.cumsum=function(t,e,n,r){return wo("cumsum")},t.prototype.nonMaxSuppression=function(t,e,n,r,o){return wo("nonMaxSuppression")},t.prototype.fft=function(t){return wo("fft")},t.prototype.ifft=function(t){return wo("ifft")},t.prototype.complex=function(t,e){return wo("complex")},t.prototype.real=function(t){return wo("real")},t.prototype.imag=function(t){return wo("imag")},t.prototype.cropAndResize=function(t,e,n,r,o,a){return wo("cropAndResize")},t.prototype.depthToSpace=function(t,e,n){return wo("depthToSpace")},t.prototype.split=function(t,e,n){return wo("split")},t.prototype.sparseToDense=function(t,e,n,r){return wo("sparseToDense")},t.prototype.diag=function(t){return wo("diag")},t.prototype.fill=function(t,e,n){return wo("fill")},t.prototype.onesLike=function(t){return wo("onesLike")},t.prototype.zerosLike=function(t){return wo("zerosLike")},t.prototype.linspace=function(t,e,n){return wo("linspace")},t.prototype.dispose=function(){return wo("dispose")},t}();function wo(t){throw new Error("'"+t+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function Co(t,e){for(var n=t.length,r=[],o=0;o<n;o++){var a=n-1-o,i=t[a]||1;(e[e.length-1-o]||1)>1&&1===i&&r.unshift(a);}return r}function Eo(t,e){for(var n=[],r=0;r<e.length;r++){var o=t[t.length-r-1],a=e.length-r-1,i=e[a];(null==o||1===o&&i>1)&&n.unshift(a);}return n}function Ro(t,e){for(var n=[],r=Math.max(t.length,e.length),o=0;o<r;o++){var a=t[t.length-o-1];null==a&&(a=1);var i=e[e.length-o-1];if(null==i&&(i=1),1===a)n.unshift(i);else if(1===i)n.unshift(a);else {if(a!==i)throw Error("Operands could not be broadcast together with shapes "+t+" and "+e+".");n.unshift(a);}}return n}function Io(t,e,n,r,o,a,i){void 0===i&&(i="channelsLast");var s,u=To(e),c=u[0],l=u[1];if("channelsLast"===i)s=[c,l,t[3],t[3]];else {if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);s=[c,l,t[1],t[1]];}return So(t,s,n,r,o,a,!1,i)}function ko(t,e,n,r,o,a,i){void 0===i&&(i="NDHWC");var s,u,c=No(e),l=c[0],h=c[1],f=c[2];if("NDHWC"===i)u="channelsLast",s=[l,h,f,t[4],t[4]];else {if("NCDHW"!==i)throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,t[1],t[1]];}return Ao(t,s,n,r,o,!1,u,a)}function So(t,e,n,r,o,a,i,s){void 0===i&&(i=!1),void 0===s&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if("channelsLast"===s)c=t[0],l=t[1],h=t[2],f=t[3];else {if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);c=t[0],f=t[1],l=t[2],h=t[3];}var d,p=e[0],v=e[1],m=e[3],g=To(n),y=g[0],x=g[1],b=To(r),w=b[0],E=b[1],R=Fo(p,w),I=Fo(v,E),k=function(t,e,n,r,o,a,i,s){var u,c,l;if("number"==typeof t){u={top:t,bottom:t,left:t,right:t,type:0===t?"VALID":"NUMBER"};var h=function(t,e,n,r,o){null==r&&(r=Do(t,e,n));var a=t[0],i=t[1],s=_o((a-e+2*r)/n+1,o);C(A(s),(function(){return "The output # of rows ("+s+") must be an integer. Change the stride and/or zero pad parameters"}));var u=_o((i-e+2*r)/n+1,o);return C(A(u),(function(){return "The output # of columns ("+u+") must be an integer. Change the stride and/or zero pad parameters"})),[s,u]}([e,n],a,r,t,s);c=h[0],l=h[1];}else if("same"===t){c=Math.ceil(e/r),l=Math.ceil(n/o);var f=Math.max(0,(c-1)*r+a-e),d=Math.max(0,(l-1)*o+i-n),p=Math.floor(f/2),v=f-p,m=Math.floor(d/2);u={top:p,bottom:v,left:m,right:d-m,type:"SAME"};}else {if("valid"!==t)throw Error("Unknown padding parameter: "+t);u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-a+1)/r),l=Math.ceil((n-i+1)/o);}return {padInfo:u,outHeight:c,outWidth:l}}(o,l,h,y,x,R,I,a),S=k.padInfo,D=k.outHeight,T=k.outWidth,N=i?m*f:m;return "channelsFirst"===s?d=[c,N,D,T]:"channelsLast"===s&&(d=[c,D,T,N]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:D,outWidth:T,outChannels:N,padInfo:S,strideHeight:y,strideWidth:x,filterHeight:p,filterWidth:v,effectiveFilterHeight:R,effectiveFilterWidth:I,dilationHeight:w,dilationWidth:E,inShape:t,outShape:d,filterShape:e}}function Ao(t,e,n,r,o,a,i,s){void 0===a&&(a=!1),void 0===i&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],d=u[4];if("channelsLast"===i)c=t[0],l=t[1],h=t[2],f=t[3],d=t[4];else {if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);c=t[0],d=t[1],l=t[2],h=t[3],f=t[4];}var p,v=e[0],m=e[1],g=e[2],y=e[4],x=No(n),b=x[0],w=x[1],E=x[2],R=No(r),I=R[0],k=R[1],S=R[2],D=Fo(v,I),T=Fo(m,k),N=Fo(g,S),F=function(t,e,n,r,o,a,i,s,u,c,l){var h,f,d,p;if("number"==typeof t){h={top:t,bottom:t,left:t,right:t,front:t,back:t,type:0===t?"VALID":"NUMBER"};var v=function(t,e,n,r,o,a){null==o&&(o=Do(t,e,r));var i=t[0],s=t[1],u=t[2],c=_o((i-e+2*o)/r+1,a);C(A(c),(function(){return "The output # of depths ("+c+") must be an integer. Change the stride and/or zero pad parameters"}));var l=_o((s-e+2*o)/r+1,a);C(A(l),(function(){return "The output # of rows ("+l+") must be an integer. Change the stride and/or zero pad parameters"}));var h=_o((u-e+2*o)/r+1,a);return C(A(h),(function(){return "The output # of columns ("+h+") must be an integer. Change the stride and/or zero pad parameters"})),[c,l,h,n]}([e,n,r,1],s,1,o,t,l);f=v[0],d=v[1],p=v[2];}else if("same"===t){f=Math.ceil(e/o),d=Math.ceil(n/a),p=Math.ceil(r/i);var m=(f-1)*o+s-e,g=(d-1)*a+u-n,y=(p-1)*i+c-r,x=Math.floor(m/2),b=m-x,w=Math.floor(g/2),E=g-w,R=Math.floor(y/2);h={top:w,bottom:E,left:R,right:y-R,front:x,back:b,type:"SAME"};}else {if("valid"!==t)throw Error("Unknown padding parameter: "+t);h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},f=Math.ceil((e-s+1)/o),d=Math.ceil((n-u+1)/a),p=Math.ceil((r-c+1)/i);}return {padInfo:h,outDepth:f,outHeight:d,outWidth:p}}(o,l,h,f,b,w,E,D,T,N,s),_=F.padInfo,O=F.outDepth,M=F.outHeight,B=F.outWidth,P=a?y*d:y;return "channelsFirst"===i?p=[c,P,O,M,B]:"channelsLast"===i&&(p=[c,O,M,B,P]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:d,outDepth:O,outHeight:M,outWidth:B,outChannels:P,padInfo:_,strideDepth:b,strideHeight:w,strideWidth:E,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:D,effectiveFilterHeight:T,effectiveFilterWidth:N,dilationDepth:I,dilationHeight:k,dilationWidth:S,inShape:t,outShape:p,filterShape:e}}function Do(t,e,n,r){void 0===r&&(r=1);var o=Fo(e,r);return Math.floor((t[0]*(n-1)-n+o)/2)}function To(t){return "number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function No(t){return "number"==typeof t?[t,t,t]:t}function Fo(t,e){return e<=1?t:t+(t-1)*(e-1)}function _o(t,e){if(!e)return t;switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+e)}}function Oo(t){var e=To(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function Mo(t,e){return Oo(t)||Oo(e)}function Bo(t){if("NHWC"===t)return "channelsLast";if("NCHW"===t)return "channelsFirst";throw new Error("Unknown dataFormat "+t)}function Po(t,e,n){if("complex64"===e){if("complex64"===t.dtype)return t.clone();var r=Gn(t.shape),o=t.toFloat(),a=n.complex(o,r);return r.dispose(),o.dispose(),a}if(!U(t.dtype,e))return Lt.makeTensorFromDataId(t.dataId,t.shape,e);if("complex64"===t.dtype){var i=n.real(t);a=i.cast(e);return i.dispose(),a}if("int32"===e)return n.int(t);if("bool"===e){var s=On(0,t.dtype);a=n.notEqual(t,s);return s.dispose(),a}throw new Error("Error in Cast: failed to cast "+t.dtype+" to "+e)}function Lo(t,e){return Lt.makeTensorFromDataId(t.dataId,e,t.dtype)}function Wo(t,e,n){var r=(e-t)/(n-1),o=tt(n,"float32");o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+r;return Mn(o,"float32")}var Uo=Object.freeze({castTensor:Po,reshapeTensor:Lo,linspaceImpl:Wo,upcastType:Dt,axesAreInnerMostDims:yn,combineLocations:xn,computeOutAndReduceShapes:bn,expandShapeToKeepDim:wn,assertAxesAreInnerMostDims:Cn,getAxesPermutation:En,getUndoAxesPermutation:Rn,getInnerMostAxes:In,getBroadcastDims:Co,getReductionAxes:Eo,assertAndGetBroadcastShape:Ro,assertParamsConsistent:kn,computeOutShape:Sn,computePool2DInfo:Io,computePool3DInfo:ko,computeConv2DInfo:So,computeConv3DInfo:Ao,computeDefaultPad:Do,tupleValuesAreOne:Oo,eitherStridesOrDilationsAreOne:Mo,convertConv2DDataFormat:Bo,PARALLELIZE_THRESHOLD:Yr,computeOptimalWindowSize:$r});function Vo(t,e){if(t.length!==e.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+t.length+", imag: "+e.length+".");for(var n=new Float32Array(2*t.length),r=0;r<n.length;r+=2)n[r]=t[r/2],n[r+1]=e[r/2];return n}function zo(t,e){return {real:t[2*e],imag:t[2*e+1]}}function Go(t,e,n,r){t[2*r]=e,t[2*r+1]=n;}function Ho(t,e,n){var r=(n?2:-2)*Math.PI*(t/e);return {real:Math.cos(r),imag:Math.sin(r)}}function qo(t,e,n){var r=function(t,e,n){return function(t,e,n){var r=0,o=t.length,a=0,i=!1;for(;r<o;){var s=n(e,t[a=r+(o-r>>>1)]);s>0?r=a+1:(o=a,i=!s);}return i?r:-r-1}(t,e,n||Ko)}(t,e,n),o=r<0?-(r+1):r;t.splice(o,0,e);}function Ko(t,e){return t>e?1:t<e?-1:0}function jo(t,e,n,r,o){return Yo(t,e,n,r,o,0).selectedIndices}function Xo(t,e,n,r,o,a){var i=Yo(t,e,n,r,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Yo(t,e,n,r,o,a,i,s){void 0===s&&(s=!1);for(var u=Array.from(e).map((function(t,e){return {score:t,boxIndex:e,suppressBeginIndex:0}})).filter((function(t){return t.score>o})).sort(Jo),c=a>0?-.5/a:0,l=[],h=[];l.length<n&&u.length>0;){var f=u.pop(),d=f.score,p=f.boxIndex,v=f.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var y=$o(t,p,l[g]);if(y>=r){m=!0;break}if(f.score=f.score*Qo(r,c,y),f.score<=o)break}f.suppressBeginIndex=l.length,m||(f.score===d?(l.push(p),h.push(f.score)):f.score>o&&qo(u,f,Jo));}var x=l.length;return s&&(l.fill(0,x),h.fill(0,x)),{selectedIndices:Mn(l,"int32"),selectedScores:Mn(h,"float32"),numValidOutputs:On(x,"int32")}}function $o(t,e,n){var r=t.subarray(4*e,4*e+4),o=t.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(h-c)*(f-l);if(d<=0||p<=0)return 0;var v=Math.max(a,c),m=Math.max(i,l),g=Math.min(s,h),y=Math.min(u,f),x=Math.max(g-v,0)*Math.max(y-m,0);return x/(d+p-x)}function Qo(t,e,n){var r=Math.exp(e*n*n);return n<=t?r:0}function Jo(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}function Zo(t,e,n){var r=new Array(t.rank).fill(0),o=t.shape.slice();return e.map((function(e){o[n]=e;var a=t.slice(r,o);return r[n]+=e,a}))}function ta(t,e){for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];var o=dr(n,t.dtype);for(r=0;r<o.values.length;++r){for(var a=o.indexToLoc(r),i=new Array(t.rank),s=0;s<i.length;s++)i[s]=a[s]%t.shape[s];var u=t.locToIndex(i);o.values[r]=t.values[u];}return o.toTensor()}function ea(t,e,n,r,o){for(var a=e[e.length-1],i=[t.length/a,a],s=i[0],u=i[1],c=B(n,s*r),l=B("int32",s*r),h=0;h<s;h++){for(var f=h*u,d=t.subarray(f,f+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort((function(t,e){return e.value-t.value}));var m=h*r,g=c.subarray(m,m+r),y=l.subarray(m,m+r);for(v=0;v<r;v++)g[v]=p[v].value,y[v]=p[v].index;}var x=e.slice();return x[x.length-1]=r,[Fn(c,x,n),Fn(l,x,"int32")]}function na(t,e){for(var n=[],r=0;r<e.length;r++)e[r]&&n.push(r);var o=dr(t,"int32"),a=dr([n.length,t.length],"int32");for(r=0;r<n.length;r++){var i=o.indexToLoc(n[r]),s=r*t.length;a.values.set(i,s);}return a.toTensor()}var ra=function(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((function(t,e){return "T"+e}));var n=[];this.variableNames.forEach((function(t){n.push("float v"+t+" = get"+t+"AtOutCoords();");}));var r=this.variableNames.map((function(t){return "v"+t})).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        float result = "+r+";\n        setOutput(result);\n      }\n    ";},oa=function(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((function(t,e){return "T"+e}));var n=[];this.variableNames.forEach((function(t){n.push("vec4 v"+t+" = get"+t+"AtOutCoords();");}));var r=this.variableNames.map((function(t){return "v"+t})).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        vec4 result = "+r+";\n        setOutput(result);\n      }\n    ";},aa=function(t,e,n){this.variableNames=["A"];var r=t.windowSize,o=t.batchSize,a=t.inSize,i=Math.ceil(a/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s="max"===e?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+r+";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < "+r+"; i++) {\n          int inIdx = "+u+";\n          float candidate = getA(batch, inIdx);\n          if (candidate "+s+" bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";};function ia(t,e){return ["x","y","z","w","u","v"].slice(0,e).map((function(e){return t+"."+e}))}function sa(t,e){return 1===e?[t]:ia(t,e)}function ua(){var t,e,n,r,o,a,s,u,c,l;return 2===i().getNumber("WEBGL_VERSION")?(t="#version 300 es",e="in",n="out",r="in",o="texture",a="outputColor",s="out vec4 outputColor;",u="\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",c="",l="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(t="",e="attribute",n="varying",r="varying",o="texture2D",a="gl_FragColor",s="",u="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",c="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",l="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:t,attribute:e,varyingVs:n,varyingFs:r,texture2D:o,output:a,defineOutput:s,defineSpecialNaN:u,defineSpecialInf:c,defineRound:l}}function ca(t,e,n){void 0===n&&(n="index");var r=$(e);return r.map((function(e,o){return "int "+t[o]+" = "+n+" / "+e+"; "+(o===r.length-1?"int "+t[o+1]+" = "+n+" - "+t[o]+" * "+e:"index -= "+t[o]+" * "+e)+";"})).join("")}function la(t){var e=$(t).map((function(t){return t.toString()}));return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * "+e[0]+" + coords.y * "+e[1]+" + coords.z;\n  }\n"}var ha="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";function fa(t,e,n,r){var o=[];t.forEach((function(t){var e=k(t.shapeInfo.logicalShape);t.shapeInfo.isUniform?o.push("uniform float "+t.name+(e>1?"["+e+"]":"")+";"):(o.push("uniform sampler2D "+t.name+";"),o.push("uniform int offset"+t.name+";"));}));var a,i,s=o.join("\n"),u=t.map((function(t){return function(t,e,n){void 0===n&&(n=!1);var r="";r+=n?pa(t):da(t);var o=t.shapeInfo.logicalShape,a=e.logicalShape;o.length<=a.length&&(r+=n?function(t,e){var n,r=t.name,o=r.charAt(0).toUpperCase()+r.slice(1),a="get"+o+"AtOutCoords",i=t.shapeInfo.logicalShape.length,s=e.logicalShape.length,u=Co(t.shapeInfo.logicalShape,e.logicalShape),c=wa(s),l=s-i,h=["x","y","z","w","u","v"];n=0===i?"":s<2&&u.length>=1?"coords = 0;":u.map((function(t){return "coords."+h[t+l]+" = 0;"})).join("\n");var f="";f=s<2&&i>0?"coords":t.shapeInfo.logicalShape.map((function(t,e){return "coords."+h[e+l]})).join(", ");var d="return outputValue;",p=1===k(t.shapeInfo.logicalShape),v=1===k(e.logicalShape);if(1!==i||p||v){if(p&&!v)d=1===s?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){var m=i-2,g=i-1;u.indexOf(m)>-1&&u.indexOf(g)>-1?d="return vec4(outputValue.x);":u.indexOf(m)>-1?d="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(g)>-1&&(d="return vec4(outputValue.xx, outputValue.zz);");}}else d="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return "\n    vec4 "+a+"() {\n      "+c+" coords = getOutputCoords();\n      "+n+"\n      vec4 outputValue = get"+o+"("+f+");\n      "+d+"\n    }\n  "}(t,e):function(t,e){var n=t.name,r=n.charAt(0).toUpperCase()+n.slice(1),o="get"+r+"AtOutCoords",a=e.texShape,i=t.shapeInfo.texShape,s=t.shapeInfo.logicalShape.length,u=e.logicalShape.length;if(!t.shapeInfo.isUniform&&s===u&&null==t.shapeInfo.flatOffset&&S(i,a))return "\n      float "+o+"() {\n        return sampleTexture("+n+", resultUV);\n      }\n    ";var c,l=wa(u),h=Co(t.shapeInfo.logicalShape,e.logicalShape),f=u-s,d=["x","y","z","w","u","v"];c=0===s?"":u<2&&h.length>=1?"coords = 0;":h.map((function(t){return "coords."+d[t+f]+" = 0;"})).join("\n");var p="";p=u<2&&s>0?"coords":t.shapeInfo.logicalShape.map((function(t,e){return "coords."+d[e+f]})).join(", ");return "\n    float "+o+"() {\n      "+l+" coords = getOutputCoords();\n      "+c+"\n      return get"+r+"("+p+");\n    }\n  "}(t,e));return r}(t,e,r)})).join("\n"),c=e.texShape,l=ua(),h=function(t){return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return "+t.texture2D+"(textureSampler, uv).r;\n    }\n  "}(l),f=function(t){return t.version+"\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    "+t.varyingFs+" vec2 resultUV;\n    "+t.defineOutput+"\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    "+t.defineSpecialNaN+"\n    "+t.defineSpecialInf+"\n    "+t.defineRound+"\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    "+va+"\n    "+ma+"\n    "+ga+"\n  "}(l);return e.isPacked?(a=function(t,e){switch(t.length){case 0:return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(1===n[0])return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * "+n[1]+".0);\n      }\n    ";if(1===n[1])return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * "+n[0]+".0);\n      }\n    ";return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      return 2 * (resTexRC.x * "+n[1]+" + resTexRC.y);\n    }\n  "}(0,e);case 2:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(S(t,e))return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2("+n[0]+", "+n[1]+"));\n      }\n    ";var r=Math.ceil(t[1]/2);return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=t,r=e,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=Math.ceil(n[2]/2),i=a*Math.ceil(n[1]/2),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+o[0]+", "+o[1]+"));\n      int index = resTexRC.x * "+o[1]+" + resTexRC.y;\n\n      int b = index / "+i+";\n      index -= b * "+i+";\n\n      int r = 2 * (index / "+a+");\n      int c = imod(index, "+a+") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";default:return function(t,e){for(var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(t[t.length-1]/2),o=r*Math.ceil(t[t.length-2]/2),a=o,i="",s="b, r, c",u=2;u<t.length-1;u++)a*=t[t.length-u-1],i="\n      int b"+u+" = index / "+a+";\n      index -= b"+u+" * "+a+";\n    "+i,s="b"+u+", "+s;return "\n    ivec"+t.length+" getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n\n      "+i+"\n\n      int b = index / "+o+";\n      index -= b * "+o+";\n\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec"+t.length+"("+s+");\n    }\n  "}(t,e)}var n,r,o,a,i;}(e.logicalShape,c),i=function(t){return "\n    void setOutput(vec4 val) {\n      "+t.output+" = val;\n    }\n  "}(l)):(a=function(t,e){switch(t.length){case 0:return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){if(1===e[0])return "\n      int getOutputCoords() {\n        return int(resultUV.x * "+e[1]+".0);\n      }\n    ";if(1===e[1])return "\n      int getOutputCoords() {\n        return int(resultUV.y * "+e[0]+".0);\n      }\n    ";return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      return resTexRC.x * "+e[1]+" + resTexRC.y;\n    }\n  "}(0,e);case 2:return function(t,e){if(S(t,e))return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2("+e[0]+", "+e[1]+"));\n      }\n    ";if(1===t[1])return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";if(1===t[0])return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      int r = index / "+t[1]+";\n      int c = index - r * "+t[1]+";\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=e,r=ca(["r","c","d"],t),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      "+r+"\n      return ivec3(r, c, d);\n    }\n  ";case 4:return function(t,e){var n=ca(["r","c","d","d2"],t);return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      "+n+"\n      return ivec4(r, c, d, d2);\n    }\n  "}(t,e);case 5:return function(t,e){var n=ca(["r","c","d","d2","d3"],t);return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2("+e[0]+",\n                             "+e[1]+"));\n\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  "}(t,e);case 6:return function(t,e){var n=ca(["r","c","d","d2","d3","d4"],t);return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  "}(t,e);default:throw new Error(t.length+"-D output sampling is not yet supported")}var n,r;}(e.logicalShape,c),i=function(t){return "\n    void setOutput(float val) {\n      "+t.output+" = vec4(val, 0, 0, 0);\n    }\n  "}(l)),r&&(f+=ya),[f,h,i,s,a,u,n].join("\n")}function da(t){var e=t.shapeInfo.logicalShape;switch(e.length){case 0:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return "float "+n+"() {return "+e+";}";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===o&&1===a)return "\n      float "+n+"() {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=t.shapeInfo.texShape,s=i[0],u=i[1],c=xa(e);return "\n    float "+n+"() {\n      vec2 uv = uvFromFlat("+s+", "+u+", "+c+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return "\n      float "+n+"(int index) {\n        "+ba(t)+"\n      }\n    ";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===a&&1===o)return "\n      float "+n+"(int index) {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=xa(e);if(1===a)return "\n      float "+n+"(int index) {\n        vec2 uv = vec2(0.5, (float(index + "+i+") + 0.5) / "+o+".0);\n        return sampleTexture("+e+", uv);\n      }\n    ";if(1===o)return "\n      float "+n+"(int index) {\n        vec2 uv = vec2((float(index + "+i+") + 0.5) / "+a+".0, 0.5);\n        return sampleTexture("+e+", uv);\n      }\n    ";return "\n    float "+n+"(int index) {\n      vec2 uv = uvFromFlat("+o+", "+a+", index + "+i+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape;if(null!=o&&S(e,o)){var a=o[0],i=o[1];return "\n    float "+r+"(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n      return sampleTexture("+n+", uv);\n    }\n  "}var s=M(e),u=s.newShape,c=s.keptDims,l=u;if(l.length<e.length){var h=Ca(t,l);return "\n      "+da(h)+"\n      float "+r+"(int row, int col) {\n        return "+r+"("+Ea(["row","col"],c)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2("+e[1]+", 1)));\n        "+ba(t)+"\n      }\n    ";var f=o[0],d=o[1],p=xa(n);if(1===d)return "\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+p+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / "+f+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";if(1===f)return "\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+p+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2((index + 0.5) / "+d+".0, 0.5);\n      return sampleTexture("+n+", uv);\n    }\n  ";return "\n  float "+r+"(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * "+e[1]+" + col + "+p+";\n    vec2 uv = uvFromFlat("+f+", "+d+", index);\n    return sampleTexture("+n+", uv);\n  }\n"}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[1]*e[2],a=e[2],i=M(e),s=i.newShape,u=i.keptDims,c=s;if(c.length<e.length){var l=Ca(t,c);return "\n        "+da(l)+"\n        float "+r+"(int row, int col, int depth) {\n          return "+r+"("+Ea(["row","col","depth"],u)+");\n        }\n      "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3("+o+", "+a+", 1)));\n        "+ba(t)+"\n      }\n    ";var h=t.shapeInfo.texShape,f=h[0],d=h[1],p=t.shapeInfo.flatOffset;if(d===o&&null==p)return "\n        float "+r+"(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2("+a+", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2("+d+".0, "+f+".0);\n          return sampleTexture("+n+", uv);\n        }\n      ";if(d===a&&null==p)return "\n    float "+r+"(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2("+e[1]+", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+d+".0, "+f+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";var v=xa(n);return "\n      float "+r+"(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * "+o+" + col * "+a+" + depth + "+v+";\n        vec2 uv = uvFromFlat("+f+", "+d+", index);\n        return sampleTexture("+n+", uv);\n      }\n  "}(t);case 4:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[3],a=e[2]*o,i=e[1]*a,s=M(e),u=s.newShape,c=s.keptDims;if(u.length<e.length){var l=Ca(t,u);return "\n      "+da(l)+"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        return "+r+"("+Ea(["row","col","depth","depth2"],c)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4("+i+", "+a+", "+o+", 1)));\n        "+ba(t)+"\n      }\n    ";var h=t.shapeInfo.flatOffset,f=t.shapeInfo.texShape,d=f[0],p=f[1];if(p===i&&null==h)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3("+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+p+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(p===o&&null==h)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3("+e[1]*e[2]+", "+e[2]+", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+p+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var v=xa(n);return "\n    float "+r+"(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+i+" + col * "+a+" +\n          depth * "+o+" + depth2;\n      vec2 uv = uvFromFlat("+d+", "+p+", index + "+v+");\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 5:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[4],a=e[3]*o,i=e[2]*a,s=e[1]*i,u=M(e),c=u.newShape,l=u.keptDims;if(c.length<e.length){var h=Ca(t,c);return "\n      "+da(h)+"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        return "+r+"("+Ea(["row","col","depth","depth2","depth3"],l)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+s+", "+i+", "+a+", "+o+")) +\n          depth3;\n        "+ba(t)+"\n      }\n    ";var f=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,p=d[0],v=d[1];if(v===s&&null==f)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4("+i+", "+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+v+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(v===o&&null==f)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]+",\n               "+e[2]*e[3]+", "+e[3]+", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+v+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var m=xa(n);return "\n    float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+s+" + col * "+i+" + depth * "+a+" +\n          depth2 * "+o+" + depth3 + "+m+";\n      vec2 uv = uvFromFlat("+p+", "+v+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 6:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=M(e),a=o.newShape,i=o.keptDims;if(a.length<e.length){var s=Ca(t,a);return "\n      "+da(s)+"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return "+r+"("+Ea(["row","col","depth","depth2","depth3","depth4"],i)+");\n      }\n    "}var u=e[5],c=e[4]*u,l=e[3]*c,h=e[2]*l,f=e[1]*h;if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4("+f+", "+h+", "+l+", "+c+")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2("+u+", 1)));\n        "+ba(t)+"\n      }\n    ";var d=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,v=p[0],m=p[1];if(m===f&&null==d)return "\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4("+h+", "+l+", "+c+", "+u+")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(m===u&&null==d)return "\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]*e[4]+",\n               "+e[2]*e[3]*e[4]+",\n               "+e[3]*e[4]+",\n               "+e[4]+")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var g=xa(n);return "\n    float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+f+" + col * "+h+" + depth * "+l+" +\n          depth2 * "+c+" + depth3 * "+u+" + depth4 + "+g+";\n      vec2 uv = uvFromFlat("+v+", "+m+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);default:throw new Error(e.length+"-D input sampling is not yet supported")}}function pa(t){var e,n,r;switch(t.shapeInfo.logicalShape.length){case 0:return e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=ua(),"\n    vec4 "+n+"() {\n      return "+r.texture2D+"("+e+", halfCR);\n    }\n  ";case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=t.shapeInfo.texShape,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=ua();return "\n    vec4 "+n+"(int index) {\n      vec2 uv = packedUVfrom1D(\n        "+o[0]+", "+o[1]+", index);\n      return "+a.texture2D+"("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=o[0],i=o[1],s=ua();if(null!=o&&S(e,o))return "\n      vec4 "+r+"(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n\n        return "+s.texture2D+"("+n+", uv);\n      }\n    ";var u=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],c=Math.ceil(e[1]/2);return "\n    vec4 "+r+"(int row, int col) {\n      vec2 uv = packedUVfrom2D("+c+", "+u[0]+", "+u[1]+", row, col);\n      return "+s.texture2D+"("+n+", uv);\n    }\n  "}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(1===e[0]){var i=e.slice(1),s=Ca(t,i);return "\n        "+pa(s)+"\n        vec4 "+r+"(int b, int row, int col) {\n          return "+r+"("+Ea(["b","row","col"],[1,2])+");\n        }\n      "}var u=a[0],c=a[1],l=Math.ceil(e[2]/2),h=l*Math.ceil(e[1]/2),f=ua();return "\n    vec4 "+r+"(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        "+u+", "+c+", "+h+", "+l+", b, row, col);\n      return "+f.texture2D+"("+n+", uv);\n    }\n  "}(t);default:return function(t){for(var e=t.shapeInfo.logicalShape,n=e.length,r=t.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),a=t.shapeInfo.texShape,i=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],s=i[0],u=i[1],c=Math.ceil(e[n-1]/2),l=c*Math.ceil(e[n-2]/2),h="int b, int row, int col",f="b * "+l+" + (row / 2) * "+c+" + (col / 2)",d=2;d<n-1;d++)h="int b"+d+", "+h,l*=e[n-d-1],f="b"+d+" * "+l+" + "+f;var p=ua();return "\n    vec4 "+o+"("+h+") {\n      int index = "+f+";\n      int texR = index / "+u+";\n      int texC = index - texR * "+u+";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+u+", "+s+");\n      return "+p.texture2D+"("+r+", uv);\n    }\n  "}(t)}}var va="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",ma="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",ga="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",ya="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function xa(t){return "offset"+t}function ba(t){var e=t.name,n=k(t.shapeInfo.logicalShape);return n<2?"return "+e+";":"\n    for (int i = 0; i < "+n+"; i++) {\n      if (i == index) {\n        return "+e+"[i];\n      }\n    }\n  "}function wa(t){if(t<=1)return "int";if(2===t)return "ivec2";if(3===t)return "ivec3";if(4===t)return "ivec4";if(5===t)return "ivec5";if(6===t)return "ivec6";throw Error("GPU for rank "+t+" is not yet supported")}function Ca(t,e){var n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function Ea(t,e){return e.map((function(e){return t[e]})).join(", ")}var Ra=function(t,e,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,C(t.length>2,(function(){return "Packed arg"+(n.charAt(0).toUpperCase()+n.slice(1))+" supports only inputs with rank above 2."}));var o=t[t.length-1],a=Math.ceil(o/e);this.outputShape=t.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=wa(c),h=sa("coords",c);if(1===a){var f=wa(s=c+1);i="\n        "+f+" sourceLocR = "+f+"("+h.join()+", 0);\n        ++"+h[c-1]+";\n        "+f+" sourceLocG = "+f+"("+h.join()+", 0);\n        ++"+h[c-2]+";\n        "+f+" sourceLocA = "+f+"("+h.join()+", 0);\n        --"+h[c-1]+";\n        "+f+" sourceLocB = "+f+"("+h.join()+", 0);\n        --"+h[c-2]+";";}else s=c,i="\n        "+l+" sourceLocR = coords;\n        ++"+h[c-1]+";\n        "+l+" sourceLocG = coords;\n        ++"+h[c-2]+";\n        "+l+" sourceLocA = coords;\n        --"+h[c-1]+";\n        "+l+" sourceLocB = coords;\n        --"+h[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map((function(t){return "int "+t})),m=sa("sourceLocR",s-1).concat("inIdx.r"),g=sa("sourceLocG",s-1).concat("inIdx.g"),y=sa("sourceLocB",s-1).concat("inIdx.b"),x=sa("sourceLocA",s-1).concat("inIdx.a"),b="max"===n?"greaterThan":"lessThan",w=r?"":"\n          inIdx = round(vec4(getBestIndicesAChannel("+m.join()+"),\n                             getBestIndicesAChannel("+g.join()+"),\n                             getBestIndicesAChannel("+y.join()+"),\n                             getBestIndicesAChannel("+x.join()+")));",E="vec4(\n            getAChannel("+m.join()+"),\n            hasNextCol ? getAChannel("+g.join()+") : 0.,\n            hasNextRow ? getAChannel("+y.join()+") : 0.,\n            hasNextRow && hasNextCol ? getAChannel("+x.join()+") : 0.)",R=r?"":"\n      float getBestIndicesAChannel("+v.join()+") {\n        return getChannel(getBestIndicesA("+d.join()+"),\n                                          vec2("+d.slice(-2).join()+"));\n      }";this.userCode="\n      float getAChannel("+v.join()+") {\n        return getChannel(getA("+d.join()+"),\n                               vec2("+d.slice(-2).join()+"));\n      }\n      "+R+"\n      void main() {\n        "+l+" coords = getOutputCoords();\n        bool hasNextCol = "+h[c-1]+" < "+(u[c-1]-1)+";\n        bool hasNextRow = "+h[c-2]+" < "+(u[c-2]-1)+";\n        "+i+"\n        ivec4 srcIdx = ivec4(sourceLocR"+p+", sourceLocG"+p+",\n          sourceLocB"+p+", sourceLocA"+p+") * "+e+";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = "+E+";\n\n        for (int i = 0; i < "+e+"; i++) {\n          inIdx = srcIdx;\n          "+w+"\n          vec4 candidate = "+E+";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4("+b+"(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ";},Ia=function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=t.dilationHeight,i=t.dilationWidth,s=t.effectiveFilterHeight,u=t.effectiveFilterWidth,c=s-1-t.padInfo.top,l=u-1-t.padInfo.left,h=1/(e*n);this.userCode="\n      const ivec2 pads = ivec2("+c+", "+l+");\n      const float avgMultiplier = float("+h+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+s+";\n            wR += "+a+") {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+u+";\n            wC+= "+i+") {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},ka=function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,h=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=l-1-t.padInfo.front,p=h-1-t.padInfo.top,v=f-1-t.padInfo.left,m=1/(e*n*r);this.userCode="\n      const ivec3 pads = ivec3("+d+", "+p+", "+v+");\n      const float avgMultiplier = float("+m+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+l+";\n            wD += "+s+") {\n          float dyD = float(dyDCorner + wD) / "+o+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+h+";\n              wR += "+u+") {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+f+";\n                wC += "+c+") {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Sa=function(t,e,n,r,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],Ro(t,e),Ro(t,n);var i="0.0";null!=r&&(Ro(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";null!=o&&(Ro(t,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = "+i+";\n        float scale = "+s+";\n        float inv = scale * inversesqrt(variance + float("+a+"));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ";},Aa=function(t,e,n,r,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Ro(t,e),Ro(t,n);var i="vec4(0.0)";null!=r&&(Ro(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";null!=o&&(Ro(t,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        vec4 offset = "+i+";\n        vec4 scale = "+s+";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4("+a+"));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ";},Da="return areal * breal - aimag * bimag;",Ta="return areal * bimag + aimag * breal;",Na=function(t,e,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Ro(e,n),this.userCode="\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        "+t+"\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ";},Fa="return a + b;",_a="return a - b;",Oa="return a * b;",Ma="return (a < 0.) ? b * a : a;",Ba=function(t,e,n){this.variableNames=["A","B"],this.outputShape=Ro(e,n),this.userCode="\n      float binaryOperation(float a, float b) {\n        "+t+"\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";},Pa="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n",La=function(t,e,n,r){void 0===r&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Ro(e,n);var o=this.outputShape.length,a="";if(r)if(0===o||1===k(this.outputShape))a="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else if(a="\n          "+wa(o)+" coords = getOutputCoords();\n        ",1===o)a+="\n            result.y = (coords + 1) >= "+this.outputShape[0]+" ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";else {var i=sa("coords",o);a+="\n            bool nextRowOutOfBounds =\n              ("+i[o-2]+" + 1) >= "+this.outputShape[o-2]+";\n            bool nextColOutOfBounds =\n              ("+i[o-1]+" + 1) >= "+this.outputShape[o-1]+";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ";}this.userCode="\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        "+t+"\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        "+a+"\n\n        setOutput(result);\n      }\n    ";},Wa=function(){function t(t){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e);}},t}(),Ua=function(){function t(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e);}},t}(),Va=function(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ";},za=function(t){this.outputShape=[],this.outputShape=Sn(t,1),this.variableNames=t.map((function(t,e){return "T"+e}));var e=new Array(t.length-1);e[0]=t[0][1];for(var n=1;n<e.length;n++)e[n]=e[n-1]+t[n][1];var r=["if (yC < "+e[0]+") setOutput(getT0(yR, yC));"];for(n=1;n<e.length;n++){var o=e[n-1];r.push("else if (yC < "+e[n]+") setOutput(getT"+n+"(yR, yC-"+o+"));");}var a=e.length,i=e[e.length-1];r.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        "+r.join("\n        ")+"\n      }\n    ";},Ga=function(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Sn(t,e);var n=this.outputShape,r=n.length,o=wa(r),a=sa("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=t.map((function(t,e){return "T"+e}));var s=new Array(t.length-1);s[0]=t[0][e];for(var u=1;u<s.length;u++)s[u]=s[u-1]+t[u][e];var c=i[e],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+") {\n        return getChannel(\n            getT0("+h+"), vec2("+l.join()+"));\n        }";for(u=1;u<s.length;u++){var d=s[u-1];f+="\n        if ("+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+") {\n          return getChannel(\n            getT"+u+"("+Ha(i,c,d)+"),\n            vec2("+Ha(l,c,d)+"));\n        }";}var p=s.length,v=s[s.length-1];f+="\n        return getChannel(\n          getT"+p+"("+Ha(i,c,v)+"),\n          vec2("+Ha(l,c,v)+"));",this.userCode="\n      float getValue("+i.map((function(t){return "int "+t}))+") {\n        "+f+"\n      }\n\n      void main() {\n        "+o+" coords = getOutputCoords();\n        vec4 result = vec4(getValue("+a+"), 0., 0., 0.);\n\n        "+a[r-1]+" = "+a[r-1]+" + 1;\n        if ("+a[r-1]+" < "+n[r-1]+") {\n          result.g = getValue("+a+");\n        }\n\n        "+a[r-2]+" = "+a[r-2]+" + 1;\n        if ("+a[r-2]+" < "+n[r-2]+") {\n          result.a = getValue("+a+");\n        }\n\n        "+a[r-1]+" = "+a[r-1]+" - 1;\n        if ("+a[r-2]+" < "+n[r-2]+" &&\n            "+a[r-1]+" < "+n[r-1]+") {\n          result.b = getValue("+a+");\n        }\n        setOutput(result);\n      }\n    ";};function Ha(t,e,n){var r=t.indexOf(e);return t.map((function(t,e){return e===r?t+" - "+n:t})).join()}var qa=function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a="channelsLast"===t.dataFormat;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              if ("+a+") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Ka=function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a="channelsLast"===t.dataFormat,i=e-1-t.padInfo.top,s=n-1-t.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords["+l+"];\n\n        ivec2 dyCorner = ivec2(coords["+u+"], coords["+c+"]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n\n              if ("+a+") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},ja=function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.padInfo.front,a=t.padInfo.top,i=t.padInfo.left;this.userCode="\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yF = 0; yF < "+t.outDepth+"; yF++) {\n            int xF = wF + yF * "+e+" - "+o+";\n\n            if (xF < 0 || xF >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n              int xR = wR + yR * "+n+" - "+a+";\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n                int xC = wC + yC * "+r+" - "+i+";\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Xa=function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=e-1-t.padInfo.front,u=n-1-t.padInfo.top,c=r-1-t.padInfo.left;this.userCode="\n      const ivec3 pads = ivec3("+s+", "+u+", "+c+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+e+"; wF++) {\n          float dyF = float(dyFCorner + wF) / "+o+".0;\n\n          if (dyF < 0.0 || dyF >= "+t.outDepth+".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = "+e+" - 1 - wF;\n\n          for (int wR = 0; wR < "+n+"; wR++) {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = "+n+" - 1 - wR;\n\n            for (int wC = 0; wC < "+r+"; wC++) {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = "+r+" - 1 - wC;\n\n              for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Ya=function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a=t.outChannels/t.inChannels;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * "+a+" + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},$a=function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=e-1-t.padInfo.top,i=n-1-t.padInfo.left,s=t.outChannels/t.inChannels;this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < "+s+"; dm++) {\n              int d2 = d1 * "+s+" + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Qa=function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.outputShape=t.outShape;var o=t.padInfo.top,a=t.padInfo.left,i=t.strideHeight,s=t.strideWidth,u=t.dilationHeight,c=t.dilationWidth,l=t.filterHeight,h=t.filterWidth,f=4*Math.floor(t.inChannels/4),d=t.inChannels%4,p="channelsLast"===t.dataFormat,v=p?1:2,m=p?2:3,g=p?3:1,y="",x="";n&&(y=r?"float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"\n          float activation(float x) {\n            "+n+"\n          }\n        ",x="result = activation(result);");var b=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+y+"\n\n      const ivec2 strides = ivec2("+i+", "+s+");\n      const ivec2 pads = ivec2("+o+", "+a+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords["+g+"];\n\n        ivec2 xRCCorner =\n            ivec2(coords["+v+"], coords["+m+"]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+l+"; wR++) {\n          int xR = xRCorner + wR * "+u+";\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+h+"; wC++) {\n            int xC = xCCorner + wC * "+c+";\n\n            if (xC < 0 || xC >= "+t.inWidth+") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < "+f+"; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if ("+p+") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if ("+(1===d)+") {\n\n              if ("+p+") {\n                dotProd +=\n                    getX(batch, xR, xC, "+f+") *\n                    getW(wR, wC, "+f+", d2);\n              } else {\n                dotProd +=\n                    getX(batch, "+f+", xR, xC) *\n                    getW(wR, wC, "+f+", d2);\n              }\n\n            } else if ("+(2===d)+") {\n              vec2 wValues = vec2(\n                getW(wR, wC, "+f+", d2),\n                getW(wR, wC, "+f+" + 1, d2)\n              );\n\n              if ("+p+") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, "+f+"),\n                  getX(batch, xR, xC, "+f+" + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, "+f+", xR, xC),\n                  getX(batch, "+f+" + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if ("+(3===d)+") {\n              vec3 wValues = vec3(\n                getW(wR, wC, "+f+", d2),\n                getW(wR, wC, "+f+" + 1, d2),\n                getW(wR, wC, "+f+" + 2, d2)\n              );\n\n              if ("+p+") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, "+f+"),\n                  getX(batch, xR, xC, "+f+" + 1),\n                  getX(batch, xR, xC, "+f+" + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, "+f+", xR, xC),\n                  getX(batch, "+f+" + 1, xR, xC),\n                  getX(batch, "+f+" + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        "+b+"\n        "+x+"\n        setOutput(result);\n      }\n    ";},Ja=function(t){this.variableNames=["x","W"],this.outputShape=t.outShape;var e=t.padInfo.front,n=t.padInfo.top,r=t.padInfo.left,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,l=t.filterDepth,h=t.filterHeight,f=t.filterWidth,d=4*Math.floor(t.inChannels/4),p=t.inChannels%4;this.userCode="\n      const ivec3 strides = ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+e+", "+n+", "+r+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+l+"; wF++) {\n          int xF = xFCorner + wF * "+s+";\n\n          if (xF < 0 || xF >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+"; wR++) {\n            int xR = xRCorner + wR * "+u+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+f+"; wC++) {\n              int xC = xCCorner + wC * "+c+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < "+d+"; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if ("+(1===p)+") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, "+d+") *\n                  getW(wF, wR, wC, "+d+", d2);\n              } else if ("+(2===p)+") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, "+d+"),\n                  getX(batch, xF, xR, xC, "+d+" + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, "+d+", d2),\n                  getW(wF, wR, wC, "+d+" + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if ("+(3===p)+") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, "+d+"),\n                  getX(batch, xF, xR, xC, "+d+" + 1),\n                  getX(batch, xF, xR, xC, "+d+" + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, "+d+", d2),\n                  getW(wF, wR, wC, "+d+" + 1, d2),\n                  getW(wF, wR, wC, "+d+" + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Za=function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.outputShape=t.outShape;var o=t.inHeight,a=t.inWidth,i=t.padInfo.top,s=t.padInfo.left,u=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,h=t.dilationWidth,f=t.filterHeight,d=t.filterWidth,p=t.outChannels/t.inChannels,v="",m="";n&&(v=r?"float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"\n          float activation(float x) {\n            "+n+"\n          }\n        ",m="result = activation(result);");var g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+v+"\n\n      const ivec2 strides = ivec2("+u+", "+c+");\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / "+p+";\n        int q = d2 - d1 * "+p+";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < "+f+"; wR++) {\n          int xR = xRCorner + wR * "+l+";\n\n          if (xR < 0 || xR >= "+o+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+d+"; wC++) {\n            int xC = xCCorner + wC * "+h+";\n\n            if (xC < 0 || xC >= "+a+") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        "+g+"\n        "+m+"\n        setOutput(result);\n      }\n    ";},ti=function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.outShape;for(var o=t.inHeight,a=t.inWidth,i=t.padInfo.top,s=t.padInfo.left,u=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,h=t.dilationWidth,f=t.filterHeight,d=t.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<f;m++)for(var g=0;g<d;g++)v+="\n          vec4 xTexelR"+m+"C"+2*g+" = vec4(0.);\n          vec4 wR"+m+"C"+g+" = vec4(0.);\n          vec4 xR"+m+"C"+g+" = vec4(0.);";for(m=0;m<f;m++)for(var y=0;y<p;y++){if(v+="\n          xR = xRCorner + "+m*l+";\n          xC = xCCorner + "+(g=2*y)*h+";\n        ",1===c){if(g<d&&(v+=s%2==1?"\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < "+o+" && xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= "+a+") {\n                    xTexelR"+m+"C"+g+".zw = vec2(0.);\n                  }\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < "+o+" && xCOffset >= 0 && xCOffset < "+a+") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if(xCOffset + 1 >= "+a+") {\n                    previous.zw = vec2(0.);\n                  }\n\n                  xR"+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+".xy);\n                } else {\n                  xR"+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+".xy);\n                }\n              ":"\n                if(xR >= 0 && xR < "+o+" && xC >= 0 && xC < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                xR"+m+"C"+g+" = xTexelR"+m+"C"+g+";\n              ",g+1<d)){var x=s%2==0?b(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(v+="\n                  xCOffset = xC + "+s%2+" + "+x+";\n\n                  if(xR >= 0 && xR < "+o+" &&\n                    xCOffset >= 0 && xCOffset < "+a+") {\n                    xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n                ",h>1&&(v+="\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < "+o+" &&\n                      xCOffset >= 0 && xCOffset < "+a+") {\n                      xTexelR"+m+"C"+g+" = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR"+m+"C"+g+" = vec4(0.);\n                    }\n                  "),v+="\n                  xR"+m+"C"+(g+1)+" = vec4(\n                    xTexelR"+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+".xy);\n                "):v+="\n                  xCOffset = xC + "+x+";\n\n                  if(xR >= 0 && xR < "+o+" &&\n                    xCOffset >= 0 && xCOffset < "+a+") {\n                    xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR"+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+";\n                ";}}else g<d&&(v+="\n              if(xR >= 0 && xR < "+o+") {\n            ",s%2==1?(v+="\n                xCOffset = xC + 1 - "+c+";\n                if(xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < "+a+") {\n                  xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR"+m+"C"+(g+2)+" = vec4(0.);\n                }\n\n                xR"+m+"C"+g+" = vec4(\n                  xTexelR"+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+".zw);\n              ",g+1<d&&(v+="\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + "+c+";\n                  if(xCOffset >= 0 && xCOffset < "+a+") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR"+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+".xy, final.xy);\n                ")):(v+="\n                if(xC >= 0 && xC < "+a+") {\n                  xTexelR"+m+"C"+g+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+m+"C"+g+" = vec4(0.);\n                }\n\n                xCOffset = xC + "+c+";\n                if(xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+m+"C"+(g+2)+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+m+"C"+(g+2)+" = vec4(0.);\n                }\n\n                xR"+m+"C"+g+" = vec4(\n                  xTexelR"+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+".xy);\n              ",g+1<d&&(v+="\n                  xR"+m+"C"+(g+1)+" = vec4(\n                    xTexelR"+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+".zw);\n                ")),v+="}");g<d&&(v+="\n            vec4 wTexelR"+m+"C"+g+" = getW("+m+", "+g+", d1, q);\n            wR"+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+".xz);\n          ",g+1<d&&(v+="\n              vec4 wTexelR"+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+", d1, q);\n              wR"+m+"C"+(g+1)+" =\n                vec4(wTexelR"+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"));}for(m=0;m<f;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var w="",C="";n&&(w=r?"vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"vec4 activation(vec4 x) {\n          "+n+"\n        }",C="result = activation(result);");var E=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+w+"\n\n      const ivec2 strides = ivec2("+u+", "+c+");\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        "+v+"\n\n        vec4 result = dotProd;\n        "+E+"\n        "+C+"\n        setOutput(result);\n      }\n    ";},ei=function(t,e,n,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=t[0],i=t[1],s=t[2],u=t[3],c=e[0],l=n[0],h=n[1];this.outputShape=[c,l,h,u];var f="bilinear"===r?1:0,d=[i-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],y=m[1],x=m[2],b=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=b[0],C=b[1],E=b[2];this.userCode="\n      const float height_ratio = float("+g+");\n      const float width_ratio = float("+w+");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= "+a+") {\n          return;\n        }\n\n        float height_scale = "+y+";\n        float width_scale = "+C+";\n\n        float in_y = "+x+";\n        if( in_y < 0.0 || in_y > "+p+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n        float in_x = "+E+";\n        if( in_x < 0.0 || in_x > "+v+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if("+f+" == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ";},ni=function(t,e,n){this.variableNames=["x"],this.outputShape=t;var r=t.length,o=t[t.length-1],a=n?"<":">";this.userCode="\n      int getIndex(int i) {\n        "+(n?"return "+o+" -i - 1;":"return i;")+"\n      }\n\n      void main() {\n        "+wa(r)+" coords = getOutputCoords();\n        int end = "+ri(r,"coords")+";\n        float val = 0.0;\n        for (int i = "+o+" - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx "+a+" end) {\n            continue;\n          }\n          if (idx == end && "+e+") {\n            continue;\n          }\n          "+ri(r,"coords")+" = idx;\n          val += getX("+function(t,e){if(1===t)return ""+e;if(2===t)return e+".x, "+e+".y";if(3===t)return e+".x, "+e+".y, "+e+".z";if(4===t)return e+".x, "+e+".y, "+e+".z, "+e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}(r,"coords")+");\n        }\n        setOutput(val);\n      }\n    ";};function ri(t,e){if(1===t)return ""+e;if(2===t)return e+".y";if(3===t)return e+".z";if(4===t)return e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}var oi=function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Vt.DENSE;var e=Yt(t),n=ua();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+ca(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        "+n.output+" = result;\n      }\n    ";},ai=function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Vt.DENSE;var e=Yt(t),n=ua();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+ca(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        "+n.output+" = result;\n      }\n    ";},ii=function(){function t(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode="\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = "+this.getHeightCoordString()+";\n      int w = "+this.getWidthCoordString()+";\n      int d = "+this.getDepthCoordString()+";\n\n      int in_h = h / "+e+";\n      int offset_h = imod(h, "+e+");\n      int in_w = w / "+e+";\n      int offset_w = imod(w, "+e+");\n      int offset_d = (offset_h * "+e+" + offset_w) *\n        "+this.getOutputDepthSize()+";\n      int in_d = d + offset_d;\n\n      float result = "+this.getInputSamplingString()+";\n      setOutput(result);\n    }\n  ";}return t.prototype.getHeightCoordString=function(){return "NHWC"===this.dataFormat?"coords[1]":"coords[2]"},t.prototype.getWidthCoordString=function(){return "NHWC"===this.dataFormat?"coords[2]":"coords[3]"},t.prototype.getDepthCoordString=function(){return "NHWC"===this.dataFormat?"coords[3]":"coords[1]"},t.prototype.getOutputDepthSize=function(){return "NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]},t.prototype.getInputSamplingString=function(){return "NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},t}(),si=function(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ";},ui=function(t){this.variableNames=["A"],this.outTexUsage=zt.DOWNLOAD;var e=ua();this.outputShape=t,this.userCode="\n      "+ha+"\n\n      void main() {\n        float x = getAAtOutCoords();\n        "+e.output+" = encode_float(x);\n      }\n    ";},ci=function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=zt.DOWNLOAD;var e=ua();this.outputShape=t,this.userCode="\n      "+ha+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        "+e.output+" = encode_float(x);\n      }\n    ";},li=function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"];var r=ua(),o=e[0],a=e[1];this.outputShape=t;var i="result";n&&(i="floor(result * 255. + 0.5)"),this.userCode="\n      "+la(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / "+a+";\n        int c = imod(flatIndex, "+a+");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n        vec4 values = "+r.texture2D+"(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        "+r.output+" = vec4("+i+", 0., 0., 0.);\n      }\n    ";},hi=function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=ua(),o=e[0],a=e[1];this.outputShape=t;var i="",s="result";n&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+="\n          localCoords = coords;\n          if(localCoords[2] + "+c+" < "+t[2]+") {\n            localCoords[2] += "+c+";\n            if(localCoords[1] + "+u+" < "+t[1]+") {\n              localCoords[1] += "+u+";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / "+a+";\n              c = imod(flatIndex, "+a+");\n              uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n              values = "+r.texture2D+"(A, uv);\n\n              if(offset == 0) {\n                result["+l+"] = values[0];\n              } else if(offset == 1) {\n                result["+l+"] = values[1];\n              } else if(offset == 2) {\n                result["+l+"] = values[2];\n              } else {\n                result["+l+"] = values[3];\n              }\n            }\n          }\n        ";}this.userCode="\n      "+la(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        "+i+"\n\n        "+r.output+" = "+s+";\n      }\n    ";},fi="return real * expR - imag * expI;",di="return real * expI + imag * expR;",pi=function(t,e,n){this.variableNames=["real","imag"];var r=e[1];this.outputShape=e;var o=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=n?r+".0":"1.0";this.userCode="\n      const float exponentMultiplier = "+o+";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        "+t+"\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float("+r+");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < "+r+"; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / "+a+";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ";},vi=function(){function t(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode="\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.valueLoc&&(e.valueLoc=n.getUniformLocationNoThrow(r,"value")),n.gl.uniform1f(e.valueLoc,t);}},t}(),mi=function(t,e,n){this.variableNames=["A","indices"];var r=t.slice();r[n]=e,this.outputShape=r,this.rank=r.length;var o=wa(this.rank),a=function(t,e){var n=t.length;if(n>4)throw Error("Gather for rank "+n+" is not yet supported");if(1===n)return "int(getIndices(resRC))";for(var r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[],a=0;a<t.length;a++)a===e?o.push("int(getIndices("+r[a]+"))"):o.push(""+r[a]);return o.join()}(t,n);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";};var gi=function(t,e,n){this.sliceDim=t,this.strides=e,this.variableNames=["x","indices"],this.outputShape=n;var r=wa(e.length),o=wa(n.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode="\n        "+r+" strides = "+r+"("+this.strides+");\n         void main() {\n          "+o+" coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < "+this.sliceDim+"; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * "+a+";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      ";};function yi(t,e){var n=ua();return oe(t,e,n.version+"\n    precision highp float;\n    "+n.attribute+" vec3 clipSpacePos;\n    "+n.attribute+" vec2 uv;\n    "+n.varyingVs+" vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")}function xi(t,e){return fe(t,e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function bi(t,e){return de(t,e,new Uint16Array([0,1,2,2,1,3]))}function wi(t,e,n,r,o,a,i){ve(n,r);var s=pe(t,e),u=t.TEXTURE_2D;return Jt(t,e,(function(){return t.bindTexture(u,s)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_MIN_FILTER,t.NEAREST)})),Jt(t,e,(function(){return t.texParameteri(u,t.TEXTURE_MAG_FILTER,t.NEAREST)})),Jt(t,e,(function(){return t.texImage2D(u,0,o,n,r,0,a,i,null)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)})),s}function Ci(t,e,n,r,o){var a=Xt(n,r);return wi(t,e,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,t.FLOAT)}function Ei(t,e,n,r,o){var a=Xt(n,r);return wi(t,e,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Ri(t,e,n,r,o){var a=Xt(n,r);return wi(t,e,a[0],a[1],t.RGBA,t.RGBA,t.UNSIGNED_BYTE)}function Ii(t,e,n,r,o){var a=$t(n,r);return wi(t,e,a[0],a[1],o.internalFormatPackedFloat,t.RGBA,t.FLOAT)}function ki(t,e,n,r,o){var a=$t(n,r);return wi(t,e,a[0],a[1],o.internalFormatPackedHalfFloat,t.RGBA,o.textureTypeHalfFloat)}function Si(t,e,n,r){return Jt(t,e,(function(){return t.bindBuffer(t.ARRAY_BUFFER,r)})),ge(t,e,n,"clipSpacePos",r,3,20,0)&&ge(t,e,n,"uv",r,2,20,12)}function Ai(t,e,n,r,o,a,i){var s,u,c;Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,n)})),a instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=t.UNSIGNED_BYTE,c=t.RGBA):(s=new Float32Array(r*o*4),u=t.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Jt(t,e,(function(){return t.texImage2D(t.TEXTURE_2D,0,c,r,o,0,t.RGBA,u,s)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)}));}function Di(t,e,n,r){Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,n)})),r.data instanceof Uint8Array?Jt(t,e,(function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r.width,r.height,0,t.RGBA,t.UNSIGNED_BYTE,r.data)})):Jt(t,e,(function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)})),Jt(t,e,(function(){return t.bindTexture(t.TEXTURE_2D,null)}));}function Ti(t,e,n,r,o){var a=t.createBuffer();Jt(t,e,(function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,a)}));var i=16*n*r;return Jt(t,e,(function(){return t.bufferData(t.PIXEL_PACK_BUFFER,i,t.STREAM_READ)})),Jt(t,e,(function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,0)})),Jt(t,e,(function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,null)})),a}function Ni(t,e,n){var r=t,o=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,e),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function Fi(t,e,n,r,o){var a=Xt(n,r),i=a[0],s=a[1],u=new Uint8Array(n*r*4);return Jt(t,e,(function(){return t.readPixels(0,0,i,s,o.downloadTextureFormat,t.UNSIGNED_BYTE,u)})),new Float32Array(u.buffer)}function _i(t,e,n,r,o,a,i,s){var u=t,c=new Float32Array(function(t,e){var n=$t(t,e);return n[0]*n[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Oi(t,e,n,r){var o=new Float32Array(n*r*4);return Jt(t,e,(function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,o)})),o}var Mi=Object.freeze({createVertexShader:yi,createVertexBuffer:xi,createIndexBuffer:bi,createFloat32MatrixTexture:Ci,createFloat16MatrixTexture:Ei,createUnsignedBytesMatrixTexture:Ri,createPackedMatrixTexture:Ii,createFloat16PackedMatrixTexture:ki,bindVertexProgramAttributeStreams:Si,uploadDenseMatrixToTexture:Ai,uploadPixelDataToTexture:Di,createBufferFromOutputTexture:Ti,downloadFloat32MatrixFromBuffer:Ni,downloadByteEncodedFloatMatrixFromOutputTexture:Fi,downloadPackedMatrixFromBuffer:_i,downloadMatrixFromPackedOutputTexture:Oi}),Bi=function(){function t(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=i().getNumber("WEBGL_VERSION");null!=t?(this.gl=t,Kt(e,t)):this.gl=jt(e);var n="WEBGL_color_buffer_float";if(1===i().getNumber("WEBGL_VERSION")){if(this.textureFloatExtension=re(this.gl,this.debug,"OES_texture_float"),Pe(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=re(this.gl,this.debug,"OES_texture_half_float");else if(i().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),Pe(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=re(this.gl,this.debug,"EXT_color_buffer_half_float");else if(i().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",Pe(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else {if(!Pe(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float");}this.vertexBuffer=xi(this.gl,this.debug),this.indexBuffer=bi(this.gl,this.debug),this.framebuffer=me(this.gl,this.debug),this.textureConfig=Qt(this.gl,this.textureHalfFloatExtension);}return Object.defineProperty(t.prototype,"debug",{get:function(){return i().getBool("DEBUG")},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){var t=this;if(!this.disposed){null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;Jt(e,this.debug,(function(){return e.finish()})),Jt(e,this.debug,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)})),Jt(e,this.debug,(function(){return e.deleteFramebuffer(t.framebuffer)})),Jt(e,this.debug,(function(){return e.bindBuffer(e.ARRAY_BUFFER,null)})),Jt(e,this.debug,(function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)})),Jt(e,this.debug,(function(){return e.deleteBuffer(t.indexBuffer)})),this.disposed=!0;}},t.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),Ci(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Ei(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Ri(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Di(this.gl,this.debug,t,e);},t.prototype.uploadDenseMatrixToTexture=function(t,e,n,r){this.throwIfDisposed(),Ai(this.gl,this.debug,t,e,n,r,this.textureConfig);},t.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),ki(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Ii(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Ee(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Jt(this.gl,this.debug,(function(){return e.gl.deleteTexture(t)}));},t.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,(function(){return Fi(r.gl,r.debug,e,n,r.textureConfig)}))},t.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,r,o,a){return _i(this.gl,t,0,0,0,o,a,this.textureConfig)},t.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Ni(this.gl,t,e)},t.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var r=Ti(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r},t.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},t.prototype.createFence=function(t){var e,n,r=this;if(i().getBool("WEBGL_FENCE_API_ENABLED")){var o=t,a=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var t=o.clientWaitSync(a,0,0);return t===o.ALREADY_SIGNALED||t===o.CONDITION_SATISFIED},e=a;}else i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return r.isQueryAvailable(e,i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return !0};return {query:e,isFencePassed:n}},t.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,(function(){return Oi(r.gl,r.debug,e,n)}))},t.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=ae(e,this.debug,t),r=yi(e,this.debug),o=ce(e,this.debug);return Jt(e,this.debug,(function(){return e.attachShader(o,r)})),Jt(e,this.debug,(function(){return e.attachShader(o,n)})),le(e,this.debug,o),this.debug&&he(e,this.debug,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=Si(e,this.debug,this.program,this.vertexBuffer)),o},t.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),null!=t&&Jt(this.gl,this.debug,(function(){return e.gl.deleteProgram(t)}));},t.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,null!=this.program&&this.debug&&he(this.gl,this.debug,this.program),Jt(this.gl,this.debug,(function(){return e.gl.useProgram(t)}));},t.prototype.getUniformLocation=function(t,e,n){return void 0===n&&(n=!0),this.throwIfDisposed(),n?xe(this.gl,this.debug,t,e):be(this.gl,t,e)},t.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),Jt(this.gl,this.debug,(function(){return n.gl.getAttribLocation(t,e)}))},t.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},t.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),we(this.gl,this.debug,this.program,t,e,n);},t.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e);},t.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var r=$t(e,n),o=r[0],a=r[1];this.setOutputMatrixTextureDriver(t,o,a);},t.prototype.setOutputMatrixWriteRegion=function(t,e,n,r){this.setOutputMatrixWriteRegionDriver(n,t,r,e);},t.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},t.prototype.debugValidate=function(){null!=this.program&&he(this.gl,this.debug,this.program),Re(this.gl);},t.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),Jt(t,this.debug,(function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}));},t.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),Jt(this.gl,this.debug,(function(){return t.gl.finish()}));},t.prototype.getQueryTimerExtension=function(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=re(this.gl,this.debug,2===i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},t.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},t.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},t.prototype.beginQuery=function(){if(2===i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),o=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,o),o},t.prototype.endQuery=function(){if(2!==i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT);}else {var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT);}},t.prototype.waitForQueryAndGetTime=function(t){return n(this,void 0,void 0,(function(){var e=this;return r(this,(function(n){switch(n.label){case 0:return [4,F((function(){return e.disposed||e.isQueryAvailable(t,i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}))];case 1:return n.sent(),[2,this.getQueryTime(t,i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}}))}))},t.prototype.getQueryTime=function(t,e){if(0===e)return null;if(2===e){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(t,r.QUERY_RESULT_EXT)/1e6},t.prototype.isQueryAvailable=function(t,e){if(0===e)return !0;if(2===e){var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}o=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,r.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint},t.prototype.pollFence=function(t){var e=this;return new Promise((function(n){e.addItemToPoll((function(){return t.isFencePassed()}),(function(){return n()}));}))},t.prototype.pollItems=function(){for(var t=function(t){for(var e=0;e<t.length;++e){if(!t[e]())break}return e-1}(this.itemsToPoll.map((function(t){return t.isDoneFn}))),e=0;e<=t;++e){(0, this.itemsToPoll[e].resolveFn)();}this.itemsToPoll=this.itemsToPoll.slice(t+1);},t.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||F((function(){return n.pollItems(),0===n.itemsToPoll.length}));},t.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Ce(this.gl,this.debug,t,this.framebuffer),this.debug&&Re(this.gl);},t.prototype.unbindTextureToFrameBuffer=function(){null!=this.outputTexture?(Ce(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Re(this.gl)):Ee(this.gl,this.debug,this.framebuffer);},t.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},t.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var r=this.gl;Ce(r,this.debug,t,this.framebuffer),this.debug&&Re(r),this.outputTexture=t,Jt(r,this.debug,(function(){return r.viewport(0,0,e,n)})),Jt(r,this.debug,(function(){return r.scissor(0,0,e,n)}));},t.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,r){var o=this;this.throwIfDisposed(),Jt(this.gl,this.debug,(function(){return o.gl.scissor(t,e,n,r)}));},t.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},t.prototype.throwIfNoProgram=function(){if(null==this.program)throw new Error("No GPU program is currently set.")},t}();function Pi(t,e){if(t.length!==e.length)throw Error("Binary was compiled with "+t.length+" inputs, but was executed with "+e.length+" inputs");t.forEach((function(t,n){var r=t.logicalShape,o=e[n],a=o.shape;if(!S(r,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+r+" and "+a+" must match");if(!t.isUniform||!o.isUniform){var i=t.texShape,s=o.isUniform?null:o.texData.texShape;if(!S(i,s))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+i+" and "+s+" must match")}}));}var Li=function(t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;for(var r=n.filterWidth,o=n.inChannels,a=n.strideWidth,i=n.strideHeight,s=n.padInfo,u=n.outWidth,c=n.dilationWidth,l=n.dilationHeight,h=n.dataFormat,f=s.left,d=s.top,p=o*r,v=ua(),m="channelsLast"===h,g=m?0:1,y=m?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+="\n          blockIndex = rc.y + "+w+";\n          pos = rc.x + "+b+";\n\n          if(blockIndex < "+t[1]+" && pos < "+t[0]+") {\n            offsetY = int(blockIndex / ("+u+")) * "+i+" - "+d+";\n            d0 = offsetY + "+l+" * (pos / "+p+");\n\n            if(d0 < "+e[g]+" && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), "+u+".) * "+a+". - "+f+".);\n              d1 = offsetX + "+c+" * (int(mod(float(pos), "+p+".) / "+o+".));\n\n              if(d1 < "+e[y]+" && d1 >= 0) {\n\n                ch = int(mod(float(pos), "+o+".));\n\n                if ("+m+") {\n                  innerDims = vec2(d1, ch);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";this.userCode="\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        "+x+"\n\n        "+v.output+" = result;\n      }\n    ";},Wi=function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[];var a,i=e,s=t[3]-1;this.outputShape=t;var u="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+u+")":1===o?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -"+i+"; j <= "+i+"; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  "+s+") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * "+a+";\n        setOutput(val);\n      }\n    ";},Ui=function(t,e,n,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=n,this.alpha=r,this.beta=o,this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < "+this.depth+"; ++d) {\n          int depthBegin = int(max(0.0, float(d - "+e+")));\n          int depthEnd = int(min(float("+this.depth+"),\n              float(d + "+e+" + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = "+this.depth+";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float("+r+") * norm + float("+n+");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float("+r+")\n                * float("+o+")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * "+o+");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ";},Vi=function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=e,s=t[3]-1;this.outputShape=t;var u="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+u+")":1===o?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < "+this.outputShape[3]+";\n        bool hasNextRow = c < "+this.outputShape[2]+";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - "+i+";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - "+i+"; j <= "+i+"; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2("+s+"));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * "+a+";\n        setOutput(result);\n      }\n    ";},zi=function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideHeight,n=t.strideWidth,r=t.dilationHeight,o=t.effectiveFilterHeight,a=t.effectiveFilterWidth,i=o-1-t.padInfo.top,s=a-1-t.padInfo.left,u=o*a-1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+o+";\n          wR += "+r+") {\n          float dyR = float(dyRCorner + wR) / "+e+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+a+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+n+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = "+u+" - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * "+a+" + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Gi=function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.dilationDepth,a=t.dilationHeight,i=t.dilationWidth,s=t.effectiveFilterDepth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=s-1-t.padInfo.front,h=u-1-t.padInfo.top,f=c-1-t.padInfo.left,d=s*u*c-1;this.userCode="\n      const ivec3 pads = ivec3("+l+", "+h+", "+f+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+s+";\n           wD += "+o+") {\n          float dyD = float(dyDCorner + wD) / "+e+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+u+";\n              wR += "+a+") {\n            float dyR = float(dyRCorner + wR) / "+n+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+c+";\n                wC += "+i+") {\n              float dyC = float(dyCCorner + wC) / "+r+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = "+d+" -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * "+u+" * "+c+" +\n                  wR * "+c+" + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";},Hi=function(t,e,n,r,o,a,i){void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===a&&(a=null),void 0===i&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;var s=n?t[1]:t[2],u=Math.ceil(s/2),c=n?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?"vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          "+a+"\n        }":"vec4 activation(vec4 x) {\n          "+a+"\n        }",p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+d+"\n\n      const float sharedDimension = "+u+".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < "+u+"; i++) {\n          vec4 a = getMatrixA(rc.x, "+c+");\n          vec4 b = getMatrixB(rc.x, "+l+");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += ("+h[0]+" * "+f[0]+");\n          result += ("+h[1]+" * "+f[1]+");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        "+v+"\n\n        "+p+"\n\n        setOutput(result);\n      }\n    ";},qi=function(){function t(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode="\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < "+(e-1)+"; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float("+(e-1)+"));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.seedLoc&&(e.seedLoc=n.getUniformLocation(r,"seed")),n.gl.uniform1f(e.seedLoc,t);}},t}(),Ki=function(t,e,n,r){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float("+r+"), float("+n+"),\n                      float(index == coords.y)));\n      }\n    ";},ji=function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t;var e=t.length;if(0===e)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else {var n=sa("rc",e),r=wa(e),o=function(t,e,n){if(1===t)return "rc > "+e[0];for(var r="",o=t-2;o<t;o++)r+=n[o]+" >= "+e[o],o<t-1&&(r+="||");return r}(e,t,n),a=function(t,e,n,r){if(1===t)return "";var o=r.slice(-2);return "\n    int r = "+o[0]+";\n    int c = "+o[1]+";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= "+e+";\n    bool rEdge = rp1 >= "+n+";\n  "}(e,t[t.length-1],t[t.length-2],n),i=function(t,e){var n=t.length,r=function(t,e){for(var n=[],r=0;r<=1;r++)for(var o=0;o<=1;o++){for(var a=(0===r?"r":"rp1")+", "+(0===o?"c":"cp1"),i=2;i<t;i++)a=e[e.length-1-i]+","+a;n.push(a);}return n}(n,e);return 1===n?"getA(rc),\n            rc + 1 >= "+t[0]+" ? 0. : getA(rc + 1),\n            0, 0":"getA("+r[0]+"),\n          cEdge ? 0. : getA("+r[1]+"),\n          rEdge ? 0. : getA("+r[2]+"),\n          rEdge || cEdge ? 0. : getA("+r[3]+")"}(t,n);this.userCode="\n        void main() {\n          "+r+" rc = getOutputCoords();\n\n          if("+o+") {\n            setOutput(vec4(0));\n          } else {\n            "+a+"\n\n            setOutput(vec4("+i+"));\n          }\n        }\n      ";}};var Xi=function(t,e,n){this.variableNames=["x"],this.outputShape=e.map((function(e,n){return e[0]+t[n]+e[1]}));var r=t.length,o=wa(r),a=e.map((function(t){return t[0]})).join(","),i=e.map((function(e,n){return e[0]+t[n]})).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?"\n      "+o+" start = "+o+"("+a+");\n      "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float("+n+"));\n        } else {\n          "+o+" coords = outC - start;\n          setOutput(getX("+s+"));\n        }\n      }\n    ":"\n        int start = "+a+";\n        int end = "+i+";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float("+n+"));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";},Yi=function(t,e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((function(e,n){return e[0]+t[n]+e[1]}));for(var r=t.length,o=wa(r),a=e.map((function(t){return t[0]})).join(","),i=e.map((function(e,n){return e[0]+t[n]})).join(","),s=sa("rc",r),u=sa("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=1===r?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[r-1]+" += 1;\n       if("+c+") {\n      ",1===r?"":"}\n       rc = outputLoc;\n       "+s[r-2]+" += 1;\n       if("+s[r-2]+" < "+this.outputShape[r-2]+") {",1===r?"":"  "+s[r-1]+" += 1;\n         if("+c+") {"],f=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=1===r?2:4;p<v;p++)d+="\n        "+h[p]+"\n        if ("+f+") {\n          result["+p+"] = float("+n+");\n        } else {\n          "+o+" source = rc - start;\n          result["+p+"] = getChannel(getX("+u.join()+"), "+l+");\n        }\n      ";d+=1===r?"} ":"}}",this.userCode="\n      const "+o+" start = "+o+"("+a+");\n      const "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        "+d+"\n        setOutput(result);\n      }\n    ";},$i=function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideHeight,a=t.strideWidth,i=t.dilationHeight,s=t.dilationWidth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=t.padInfo.top,h=t.padInfo.left;this.outputShape=t.outShape;var f="avg"===e,d="0.0";if(f||(d="-1.0 / 1e-20"),n)this.userCode="\n        const ivec2 strides = ivec2("+o+", "+a+");\n        const ivec2 pads = ivec2("+l+", "+h+");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < "+u+";\n              wR += "+i+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+c+";\n                wC += "+s+") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * "+c+" + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else {var p=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(p="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g="\n      if ("+f+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec2 strides = ivec2("+o+", "+a+");\n      const ivec2 pads = ivec2("+l+", "+h+");\n      const float initializationValue = "+d+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+d+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < "+u+";\n            wR += "+i+") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+v+"; wC += 4) {\n            int xC = xCCorner + wC * "+s+";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              getValue(batch, xR, xC + 2 * "+s+", d),\n              getValue(batch, xR, xC + 3 * "+s+", d)\n            );\n\n            "+g+"\n          }\n\n          int xC = xCCorner + "+v+";\n          if ("+(1===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(2===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(3===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+s+", d),\n              getValue(batch, xR, xC + 2 * "+s+", d),\n              initializationValue\n            );\n\n            "+g+"\n          }\n        }\n        setOutput("+p+");\n      }\n    ";}},Qi=function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,h=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,v=t.padInfo.left;this.outputShape=t.outShape;var m="avg"===e,g="0.0";if(m||(g="-1.0 / 1e-20"),n)this.userCode="\n        const ivec3 strides =\n            ivec3("+o+", "+a+", "+i+");\n        const ivec3 pads = ivec3("+d+", "+p+", "+v+");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < "+l+";\n              wD += "+s+") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int wR = 0; wR < "+h+";\n                wR += "+u+") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int wC = 0; wC < "+f+";\n                  wC += "+c+") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * "+h+" * "+f+" +\n                      wR * "+f+" + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else {var y=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(y="avgValue / count");var x=4*Math.floor(r/4),b=r%4,w="\n      if ("+m+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec3 strides =\n        ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+d+", "+p+", "+v+");\n      const float initializationValue = "+g+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+g+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < "+l+";\n            wD += "+s+") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+";\n            wR += "+u+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+x+"; wC += 4) {\n              int xC = xCCorner + wC * "+c+";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+c+", ch),\n                getValue(batch, xD, xR, xC + 3 * "+c+", ch)\n              );\n\n              "+w+"\n            }\n\n            int xC = xCCorner + "+x+";\n            if ("+(1===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(2===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(3===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+c+", ch),\n                initializationValue\n              );\n\n              "+w+"\n            }\n          }\n          setOutput("+y+");\n        }\n      }\n    ";}},Ji=function(t,e){this.variableNames=["x"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=Math.ceil(o/n);this.outputShape=[r,a];var i="0.0",s="";"prod"===e?i="1.0":"min"===e?(i="1.0 / 1e-20",s="min"):"max"===e&&(i="-1.0 / 1e-20",s="max");var u=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"sum"===e?u="sumValue":"prod"===e?u="prodValue":"all"===e?u="allValue":"any"===e&&(u="anyValue");var c=4*Math.floor(n/4),l=n%4,h="\n      if ("+("sum"===e)+") {\n        sumValue += dot(values, ones);\n      } else if ("+("prod"===e)+") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = "+s+"(values, minMaxValue);\n      }\n    ",f="vec4";"all"===e?(i="1.0",h="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",f="bvec4"):"any"===e&&(i="0.0",h="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",f="bvec4");var d="";o%n>0&&(d="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      "),this.userCode="\n      const float initializationValue = "+i+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        "+d+"\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+n+";\n\n        vec4 minMaxValue = vec4("+i+");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < "+c+"; i += 4) {\n          int inIdx = inOffset + i;\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          "+h+"\n        }\n\n        int inIdx = inOffset + "+c+";\n        if ("+(1===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(2===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(3===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          "+h+"\n        }\n        setOutput("+u+");\n      }\n    ";},Zi=function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;for(var n="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),n+="\n        "+o+"\n        "+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+"\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result["+r+"] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        "+(r>0?"}":"")+"\n      ";}this.userCode="\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      "+ca(["r","c","d"],e)+"\n      return ivec3(r, c, d);\n    }\n  \n      "+la(t)+"\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = "+t[1]+";\n        int cols = "+t[2]+";\n\n        "+n+"\n\n        setOutput(result);\n      }\n    ";};var ts=function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,s=i[1],u=i[2],c=[n&&s>1?o-1:o,n&&u>1?a-1:a],l=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+f+");\n\n        const float invHeightScale = float("+d+");\n        const float invWidthScale = float("+p+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), "+(o-1)+".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), "+(a-1)+".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";},es=function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/c[0]+",\n          "+u[1]/c[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";},ns=function(t,e,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          "+u[0]/c[0]+",\n          "+u[1]/c[1]+",\n          "+u[1]/c[1]+");\n      const vec3 inputShapeRC = vec3("+a+".0, "+i+".0,\n                                     "+i+".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < "+(s-1)+";\n        bool hasNextRow = coords.z < "+(n-1)+";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ";},rs=function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,s=i[1],u=i[2],c=[n&&s>1?o-1:o,n&&u>1?a-1:a],l=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+f+");\n\n        const float invHeightScale = float("+d+");\n        const float invWidthScale = float("+p+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float("+c[0]+") *\n                (float(dyR) / float("+l[0]+"));\n\n            float sourceFracCol =\n                float("+c[1]+") *\n                  (float(dyC) / float("+l[1]+"));\n\n            int sourceNearestRow = int(min(\n                float(int("+o+") - 1),\n                "+n+" ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int("+a+") - 1),\n                "+n+" ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";},os=function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],s=t[3];this.outputShape=[o,e,n,s];var u=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n],l=r?"0.5":"0.0";this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/c[0]+",\n          "+u[1]/c[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + "+l+")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";},as=function(t,e){this.variableNames=["x"];var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=t,1!==n){var r=t.map((function(n,r){return function(n){return -1!==e.indexOf(n)&&1!==t[n]?t[n]+" - coords["+n+"] - 1":"coords["+n+"]"}(r)})).join(","),o=wa(n);this.userCode="\n      void main() {\n        "+o+" coords = getOutputCoords();\n        setOutput(getX("+r+"));\n      }\n    ";}else this.userCode="\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX("+t[0]+" - coord - 1));\n        }\n      ";},is=function(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");this.outputShape=t;var r=sa("rc",n),o=r[n-1]+" + 1 < "+this.outputShape[n-1],a=r[n-2]+" + 1 < "+this.outputShape[n-2],i=wa(n);function s(n){var r=t.map((function(r,o){return function(n,r){return -1!==e.indexOf(n)&&1!==t[n]?t[n]+" - "+r[n]+" - 1":""+r[n]}(o,n)}));return "getChannel(getX("+r.join(",")+"), vec2("+r.slice(-2).join(",")+"))"}this.userCode=1===n?"\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX("+t[0]+" - rc - 1),\n            "+t[0]+" - rc - 1);\n          if("+o+"){\n              result.g = getChannel(getX("+t[0]+" - (rc  + 1) - 1),\n                "+t[0]+" - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      ":"\n        void main() {\n          "+i+" rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = "+function(t){return s(t)}(r.slice())+";\n          if("+o+"){\n            result.g = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",s(t)}(r.slice())+";\n          }\n          if("+a+") {\n            result.b = "+function(t){return t[n-2]="("+t[n-2]+" + 1)",s(t)}(r.slice())+";\n            if("+o+") {\n              result.a = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",t[n-2]="("+t[n-2]+" + 1)",s(t)}(r.slice())+";\n            }\n          }\n          setOutput(result);\n        }\n    ";},ss=function(t,e,n,r,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=wa(o.length),u=wa(a.length),c="";1===n?c="i":2===n&&(c="i, j");var l="getIndices("+c+")",h="";1===r?h="i":2===r&&(h="i, coords[1]");var f="getUpdates("+h+")",d=e>1?"strides[j]":"strides";this.userCode="\n        "+s+" strides = "+s+"("+o+");\n\n        void main() {\n          "+u+" coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < "+t+"; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < "+e+"; j++) {\n              int index = round("+l+");\n              flattenedIndex += index * "+d+";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += "+f+";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      ";},us=function(t,e){this.variableNames=["x","segmentIds"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=t.numSegments,i=a*Math.ceil(o/n);this.outputShape=[r,i];var s=4*Math.floor(n/4),u=n%4,c="\n        sumValue += dot(values, segFilter);\n    ",l="";o%n>0&&(l="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      ");var h="";o%n>0&&(h="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return -1.0;\n        }\n      "),this.userCode="\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        "+l+"\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        "+h+"\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          "+a+")) * float("+n+"));\n        int currentSeg = int(mod(float(outIdx), float("+a+")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < "+s+"; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          "+c+"\n        }\n\n        int inIdx = inOffset + "+s+";\n        if ("+(1===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          "+c+"\n        } else if ("+(2===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          "+c+"\n        } else if ("+(3===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          "+c+"\n        }\n        setOutput(sumValue);\n      }\n    ";},cs=function(t,e,n){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=e,n>4)throw Error("Where for rank "+n+" is not yet supported");if(1===n)o="resRC",r="resRC";else {for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<e.length;u++)s.push(""+a[u]),u<t&&i.push(""+a[u]);r=i.join(),o=s.join();}var c=wa(n);this.userCode="\n      void main() {\n        "+c+" resRC = getOutputCoords();\n        float cVal = getC("+r+");\n        if (cVal >= 1.0) {\n          setOutput(getA("+o+"));\n        } else {\n          setOutput(getB("+o+"));\n        }\n      }\n    ";},ls=function(){function t(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=wa(this.rank),r="uniform int start["+this.rank+"];",o=function(t){if(1===t)return "sourceLoc";if(t<=6)return hs.slice(0,t).map((function(t){return "sourceLoc."+t})).join(",");throw Error("Slicing for rank "+t+" is not yet supported")}(this.rank);e="\n        "+n+" sourceLoc;\n        "+n+" coords = getOutputCoords();\n        "+t.map((function(t,e){return "sourceLoc."+hs[e]+" = start["+e+"] + coords."+hs[e]+";"})).join("\n")+"\n      ",this.userCode="\n      "+r+"\n      void main() {\n        "+e+"\n        setOutput(getSource("+o+"));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t);}},t}(),hs=["x","y","z","w","u","v"];var fs=function(){function t(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=wa(this.rank),n=sa("coords",this.rank),r=sa("sourceLoc",this.rank),o=1===this.rank?"sourceLoc":"vec2("+r.slice(-2).join()+")",a="getChannel(getSource("+r.join()+"), "+o+")",i="\n      result.x = "+a+";\n      if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n        ++"+r[this.rank-1]+";\n        result.y = "+a+";\n        --"+r[this.rank-1]+";\n      }\n    ",s=1===this.rank?"":"\n      --"+n[this.rank-1]+";\n      if (++"+n[this.rank-2]+" < "+t[this.rank-2]+") {\n        ++"+r[this.rank-2]+";\n        result.z = "+a+";\n        if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n          ++"+r[this.rank-1]+";\n          result.w = "+a+";\n        }\n      }\n    ",u=this.rank<=4?"sourceLoc = coords +\n            "+e+"("+t.map((function(t,e){return "start["+e+"]"})).join()+");":t.map((function(t,e){return r[e]+" = "+n[e]+" + start["+e+"];"})).join("\n");this.userCode="\n      uniform int start["+this.rank+"];\n      void main() {\n        "+e+" coords = getOutputCoords();\n        "+e+" sourceLoc;\n        "+u+"\n        vec4 result = vec4(0.);\n        "+i+"\n        "+s+"\n        setOutput(result);\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t);}},t}(),ds=function(t,e,n){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=wa(n.length),a=wa(n.length),i="";if(1===r)i="coords * strides + begin";else {var s=0;i=n.map((function(t,e){return s++,1===n.length?"coords * strides["+e+"] + begin["+e+"]":"coords["+(s-1)+"] * strides["+e+"] + begin["+e+"]"})).join(",");}this.userCode="\n      "+o+" begin = "+o+"("+t+");\n      "+o+" strides = "+o+"("+e+");\n\n      void main() {\n        "+a+" coords = getOutputCoords();\n        setOutput(getX("+i+"));\n      }\n    ";},ps=function(){function t(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={};}return t.prototype.acquireTexture=function(t,e,n){var r,o=vs(e,n),a=ms(t,o,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var i=this.freeTextures[a].shift();return this.usedTextures[a].push(i),i}return this.numUsedTextures++,this.log(),o===Gt.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===Gt.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===Gt.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===Gt.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===Gt.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(r),r},t.prototype.releaseTexture=function(t,e,n,r){if(null!=this.freeTextures){var o=ms(e,vs(n,r),r);o in this.freeTextures||(this.freeTextures[o]=[]),this.freeTextures[o].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[o],i=a.indexOf(t);if(i<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(i,1),this.log();}},t.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")");}},t.prototype.getNumUsedTextures=function(){return this.numUsedTextures},t.prototype.getNumFreeTextures=function(){return this.numFreeTextures},t.prototype.dispose=function(){var t=this;if(null!=this.freeTextures){for(var e in this.freeTextures)this.freeTextures[e].forEach((function(e){t.gpgpu.deleteMatrixTexture(e);}));for(var e in this.usedTextures)this.usedTextures[e].forEach((function(e){t.gpgpu.deleteMatrixTexture(e);}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0;}},t}();function vs(t,e){if(t===zt.UPLOAD)return Gt.PACKED_2X2_FLOAT32;if(t===zt.RENDER||null==t)return function(t){return i().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?Gt.PACKED_2X2_FLOAT32:Gt.UNPACKED_FLOAT32:t?Gt.PACKED_2X2_FLOAT16:Gt.UNPACKED_FLOAT16}(e);if(t===zt.DOWNLOAD||t===zt.PIXELS)return Gt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+t)}function ms(t,e,n){return t[0]+"_"+t[1]+"_"+e+"_"+n}var gs=function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[r]*e[r];this.outputShape=n,this.rank=n.length;var o=wa(this.rank),a=function(t){var e=t.length;if(e>5)throw Error("Tile for rank "+e+" is not yet supported");if(1===e)return "imod(resRC, "+t[0]+")";for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[],o=0;o<t.length;o++)r.push("imod("+n[o]+", "+t[o]+")");return r.join()}(t);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";};var ys=function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];this.outputShape=n,this.rank=n.length;var o=wa(this.rank),a=function(t){var e=t.length;if(e>6)throw Error("Transpose for rank "+e+" is not yet supported");for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(e),o=0;o<t.length;o++)r[t[o]]=n[o];return r.join()}(e);this.userCode="\n    void main() {\n      "+o+" resRC = getOutputCoords();\n      setOutput(getA("+a+"));\n    }\n    ";};var xs=function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=wa(this.rank),a=ia("rc",this.rank),i=new Array(this.rank);for(r=0;r<e.length;r++)i[e[r]]=a[r];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+n[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode="\n    void main() {\n      "+o+" rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = "+c+";\n      if("+u+") {\n        result[1] = "+c+";\n      }\n      --"+a[this.rank-1]+";\n      if(++"+a[this.rank-2]+" < "+n[this.rank-2]+") {\n        result[2] = "+c+";\n        if("+u+") {\n          result[3] = "+c+";\n        }\n      }\n      setOutput(result);\n    }\n    ";},bs=1.7580993408473768,ws=1.0507009873554805,Cs=function(t,e){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      float unaryOperation(float x) {\n        "+e+"\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";},Es="if (isnan(x)) return x;",Rs="return x;",Is="return abs(x);",ks=Es+"\n  return (x < 0.0) ? 0.0 : x;\n",Ss=Es+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",As="return (x >= 0.0) ? x : (exp(x) - 1.0);",Ds="\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = "+bs+";\n  float scale = "+ws+";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";var Ts="return -x;",Ns="return ceil(x);",Fs="return floor(x);",_s="return exp(x);",Os="return exp(x) - 1.0;",Ms=Es+"\n  return sin(x);\n",Bs=Es+"\n  return cos(x);\n",Ps=Es+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n",Ls=Es+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n",Ws=Es+"\n  return atan(x);\n",Us=Es+"return log(x + sqrt(x * x + 1.0));",Vs=Es+"\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));",zs=Es+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;",Gs="return x;",Hs="return x;",qs="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",Ks="\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",js="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",Xs=function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode="\n      vec4 unaryOperation(vec4 x) {\n        "+e+"\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";},Ys=function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t;var e=t.length,n=sa("rc",e),r=wa(e),o=function(t,e){if(1===t)return "rc";for(var n="",r=0;r<t;r++)n+=e[r],r<t-1&&(n+=",");return n}(e,n),a=n.slice(-2),i=e<=1?"rc":"vec2("+a.join(",")+")";this.userCode="\n      void main() {\n        "+r+" rc = getOutputCoords();\n        vec4 packedInput = getA("+o+");\n\n        setOutput(getChannel(packedInput, "+i+"));\n      }\n    ";},$s={};function Qs(t,e){if(void 0===e&&(e=!1),"linear"===t)return e?Hs:Rs;if("relu"===t)return e?qs:ks;if("elu"===t)return e?js:As;if("relu6"===t)return e?Ks:Ss;if("prelu"===t)return e?Pa:Ma;throw new Error("Activation "+t+" has not been implemented for the WebGL backend.")}var Js=600;var Zs=function(t){function o(e){var n,r=t.call(this)||this;if(r.pendingRead=new WeakMap,r.pendingDisposal=new WeakSet,r.dataRefCount=new WeakMap,r.numBytesInGPU=0,r.uploadWaitMs=0,r.downloadWaitMs=0,r.warnedAboutMemory=!1,r.pendingDeletes=0,r.disposed=!1,!i().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(null==e){var o=jt(i().getNumber("WEBGL_VERSION"));r.binaryCache=(n=i().getNumber("WEBGL_VERSION"))in $s?$s[n]:($s[n]={},$s[n]),r.gpgpu=new Bi(o),r.canvas=o.canvas,r.gpgpuCreatedLocally=!0;}else r.gpgpu=e,r.binaryCache={},r.gpgpuCreatedLocally=!1,r.canvas=e.gl.canvas;return r.textureManager=new ps(r.gpgpu),r.numMBBeforeWarning=null==i().global.screen?1024:i().global.screen.height*i().global.screen.width*window.devicePixelRatio*Js/1024/1024,r.texData=new xo(r,Lt),r}return e(o,t),o.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},o.prototype.write=function(t,e,n){if(i().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===n&&null!=t)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var r={};return this.texData.set(r,{shape:e,dtype:n,values:t,usage:zt.UPLOAD}),r},o.prototype.move=function(t,e,n,r){if(i().getBool("DEBUG")&&this.checkNumericalProblems(e),"complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:n,dtype:r,values:e,usage:zt.UPLOAD});},o.prototype.readSync=function(t){var e=this.texData.get(t),n=e.values,r=e.dtype,o=e.complexTensors,a=e.slice,i=e.shape,s=e.isPacked;if(null!=a){var u=void 0;u=s?new Xs(i,Gs):new Cs(i,Gs);var c=this.runWebGLProgram(u,[{dataId:t,shape:i,dtype:r}],r),l=this.readSync(c.dataId);return this.disposeData(c.dataId),l}if(null!=n)return this.convertAndCacheOnCPU(t);if("string"===r)return n;var h,f,d=null!=this.activeTimers;(d&&(h=et()),"complex64"===r)?f=Vo(o.real.dataSync(),o.imag.dataSync()):f=this.getValuesFromTexture(t);return d&&(this.downloadWaitMs+=et()-h),this.convertAndCacheOnCPU(t,f)},o.prototype.read=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,s,u,c,l,h,f,d,p,v,m,g,y,x,b,w,C,E,R;return r(this,(function(r){switch(r.label){case 0:if(this.pendingRead.has(t))return e=this.pendingRead.get(t),[2,new Promise((function(t){return e.push(t)}))];if(n=this.texData.get(t),o=n.values,a=n.shape,s=n.slice,u=n.dtype,c=n.complexTensors,l=n.isPacked,null!=s)return h=void 0,h=l?new Xs(a,Gs):new Cs(a,Gs),f=this.runWebGLProgram(h,[{dataId:t,shape:a,dtype:u}],u),d=this.read(f.dataId),this.disposeData(f.dataId),[2,d];if(null!=o)return [2,this.convertAndCacheOnCPU(t)];if(!i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===i().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,"complex64"!==u&&i().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(t),m=this.texData.get(v.dataId),p=(R=this.gpgpu).createBufferFromTexture.apply(R,[m.texture].concat(Yt(a)))),this.pendingRead.set(t,[]),"complex64"===u?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:r.sent(),r.label=2;case 2:return "complex64"!==u?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=r.sent(),x=y[0],b=y[1],g=Vo(x,b),[3,5];case 4:null==p?g=this.getValuesFromTexture(t):(w=k(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),r.label=5;case 5:return null!=v&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(t,g),E=this.pendingRead.get(t),this.pendingRead.delete(t),E.forEach((function(t){return t(C)})),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t),this.pendingDeletes--),[2,C]}}))}))},o.prototype.checkNumericalProblems=function(t){if(null!=t)for(var e=0;e<t.length;e++){var n=t[e];if(!ee(n)){if(i().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error("The value "+n+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");throw Error("The value "+n+" cannot be represented on this device.")}}},o.prototype.getValuesFromTexture=function(t){var e,n=this.texData.get(t),r=n.shape,o=n.dtype,a=n.isPacked,s=k(r);if(i().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var u=this.decode(t),c=this.texData.get(u.dataId),l=(e=this.gpgpu).downloadMatrixFromPackedTexture.apply(e,[c.texture].concat(Yt(r))).subarray(0,s);return this.disposeData(u.dataId),l}var h=i().getBool("WEBGL_PACK")&&!0===a,f=h?Te(r):r,d=h?new ci(f):new ui(f),p=this.runWebGLProgram(d,[{shape:f,dtype:o,dataId:t}],"float32"),v=this.texData.get(p.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,s);return this.disposeData(p.dataId),m},o.prototype.time=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,s,u,c;return r(this,(function(r){switch(r.label){case 0:return e=this.activeTimers,n=[],o=!1,null==this.programTimersStack?(this.programTimersStack=n,o=!0):this.activeTimers.push(n),this.activeTimers=n,t(),a=I(this.activeTimers.map((function(t){return t.query}))).filter((function(t){return null!=t})),s=I(this.activeTimers.map((function(t){return t.name}))).filter((function(t){return null!=t})),this.activeTimers=e,o&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=r.sent(),u.kernelMs=w(c),u.getExtraProfileInfo=function(){return c.map((function(t,e){return {name:s[e],ms:t}})).map((function(t){return t.name+": "+t.ms})).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},r.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}}))}))},o.prototype.memory=function(){return {unreliable:!1,numBytesInGPU:this.numBytesInGPU}},o.prototype.startTimer=function(){return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:et(),endMs:null}},o.prototype.endTimer=function(t){return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=et(),t)},o.prototype.getQueryTime=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){return i().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(e=t).endMs-e.startMs]}))}))},o.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t)){if(this.pendingRead.has(t))return this.pendingDisposal.add(t),void this.pendingDeletes++;if(this.texData.has(t)){this.releaseGPUData(t);var e=this.texData.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.texData.delete(t);}}},o.prototype.releaseGPUData=function(t){var e=this.texData.get(t),n=e.texture,r=e.dtype,o=e.texShape,a=e.usage,i=e.isPacked,s=e.slice,u=s&&s.origDataId||t,c=this.dataRefCount.get(u);c>1?this.dataRefCount.set(u,c-1):(this.dataRefCount.delete(u),null!=n&&(this.numBytesInGPU-=this.computeBytes(o,r),this.textureManager.releaseTexture(n,o,a,i)));var l=this.texData.get(t);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null;},o.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},o.prototype.getDataInfo=function(t){return this.texData.get(t)},o.prototype.getCPUBackend=function(){return i().getBool("WEBGL_CPU_FORWARD")?(null==this.cpuBackend&&(this.cpuBackend=Lt.findBackend("cpu")),this.cpuBackend):null},o.prototype.shouldExecuteOnCPU=function(t,e){var n=this;return void 0===e&&(e=128),null!=this.getCPUBackend()&&t.every((function(t){return null==n.texData.get(t.dataId).texture&&t.size<e}))},o.prototype.getGPGPUContext=function(){return this.gpgpu},o.prototype.complex=function(t,e){var n=this.makeOutput(t.shape,"complex64");return this.texData.get(n.dataId).complexTensors={real:Lt.keep(t.clone()),imag:Lt.keep(e.clone())},n},o.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},o.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},o.prototype.slice=function(t,e,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,e,n);if(0===k(n))return Fn([],n,t.dtype);var r=this.texData.get(t.dataId).isPacked,o=io(t.shape,e,n);if(r||!o){var a=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fs(n):new ls(n),s=a.getCustomSetupFunc(e);return this.compileAndRun(a,[t],null,s)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,e,n)},o.prototype.shallowSlice=function(t,e,n){var r=this.texData.get(t.dataId),o=this.makeOutput(n,t.dtype),a=this.texData.get(o.dataId);Object.assign(a,r),a.shape=n,a.dtype=t.dtype;var i=so(e,t.strides);r.slice&&(i+=r.slice.flatOffset),a.slice={flatOffset:i,origDataId:r.slice&&r.slice.origDataId||t.dataId};var s=this.dataRefCount.get(a.slice.origDataId)||1;return this.dataRefCount.set(a.slice.origDataId,s+1),o},o.prototype.stridedSlice=function(t,e,n,r){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,e,n,r);var o=ro(e,n,r);if(o.some((function(t){return 0===t})))return Fn([],o);var a=new ds(e,r,o);return this.compileAndRun(a,[t])},o.prototype.reverse=function(t,e){var n=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new is(t.shape,e):new as(t.shape,e);return this.compileAndRun(n,[t])},o.prototype.concat=function(t,e){if("complex64"===t[0].dtype){var n=t.map((function(t){return Tn(t)})),r=t.map((function(t){return Nn(t)}));return Dn(this.concat(n,e),this.concat(r,e))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,e);if(1===t.length)return t[0];if(t.length>i().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var o=Math.floor(t.length/2),a=this.concat(t.slice(0,o),e),s=this.concat(t.slice(o),e);return this.concat([a,s],e)}if(i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var u=new Ga(t.map((function(t){return t.shape})),e);return this.compileAndRun(u,t)}var c=Sn(t.map((function(t){return t.shape})),e),l=t.map((function(t){return t.as2D(-1,k(t.shape.slice(e)))})),h=new za(l.map((function(t){return t.shape})));return this.compileAndRun(h,l).reshape(c)},o.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Ts,t.dtype);var e=new Cs(t.shape,Ts);return this.compileAndRun(e,[t])},o.prototype.batchMatMul=function(t,e,n,r){var o=n?t.shape[2]:t.shape[1],a=r?e.shape[1]:e.shape[2],i=n?t.shape[1]:t.shape[2],s=t.shape[0];if((1===o||1===a)&&i>1e3){n&&(t=t.transpose([0,2,1])),r&&(e=e.transpose([0,2,1]));var u=1===a?t:t.as3D(s,i,1),c=1===a?2:1,l=1===a?e.as3D(s,1,i):e;return this.multiply(u,l).sum(c,!0)}var h=Dt(t.dtype,e.dtype),f=new Hi(t.shape,[s,o,a],n,r);return this.compileAndRun(f,[t,e],h)},o.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,s=t.preluActivationWeights,u=r?e.shape[2]:e.shape[1],c=o?n.shape[1]:n.shape[2],l=e.shape[0],h=Dt(e.dtype,n.dtype),f=null!=a,d=null!=s,p=i?Qs(i,!0):null,v=new Hi(e.shape,[l,u,c],r,o,f,p,d),m=[e,n];return a&&m.push(a),s&&m.push(s),this.compileAndRun(v,m,h)},o.prototype.multiply=function(t,e){if("complex64"===t.dtype){var n=this.texData.get(t.dataId),r=this.texData.get(e.dataId),o=new Na(Da,t.shape,e.shape),a=new Na(Ta,t.shape,e.shape),s=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag),this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)],u=this.compileAndRun(o,s),c=this.compileAndRun(a,s),l=this.complex(u,c);return u.dispose(),c.dispose(),l}if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.multiply(t,e);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,Oa,t.dtype);var h=new Ba(Oa,t.shape,e.shape);return this.compileAndRun(h,[t,e],t.dtype)},o.prototype.batchNormalization=function(t,e,n,r,o,a){var s=[t,e,n],u=null;null!=a&&(u=a.shape,s.push(a));var c=null;if(null!=o&&(c=o.shape,s.push(o)),i().getBool("WEBGL_PACK_NORMALIZATION")){var l=new Aa(t.shape,e.shape,n.shape,u,c,r);return this.compileAndRun(l,s)}var h=new Sa(t.shape,e.shape,n.shape,u,c,r);return this.compileAndRun(h,s)},o.prototype.localResponseNormalization4D=function(t,e,n,r,o){var a=i().getBool("WEBGL_PACK_NORMALIZATION")?new Vi(t.shape,e,n,r,o):new Wi(t.shape,e,n,r,o);return this.compileAndRun(a,[t])},o.prototype.LRNGrad=function(t,e,n,r,o,a,i){var s=new Ui(e.shape,r,o,a,i);return this.compileAndRun(s,[e,n,t])},o.prototype.tile=function(t,e){if("string"===t.dtype){var n=this.readSync(t.dataId).map((function(t){return ot(t)}));return ta(dr(t.shape,t.dtype,n),e)}var r=new gs(t.shape,e);return this.compileAndRun(r,[t])},o.prototype.pad=function(t,e,n){var r=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Yi(t.shape,e,n):new Xi(t.shape,e,n);return this.compileAndRun(r,[t])},o.prototype.transpose=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,e);var n=i().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xs(t.shape,e):new ys(t.shape,e);return this.compileAndRun(n,[t])},o.prototype.gather=function(t,e,n){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.gather(t,e,n);var r=new mi(t.shape,e.size,n);return this.compileAndRun(r,[t,e])},o.prototype.batchToSpaceND=function(t,e,n){C(t.rank<=4,(function(){return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"}));var r=e.reduce((function(t,e){return t*e})),o=zr(t.shape,e,r),a=Gr(o.length,e.length),i=Hr(t.shape,e,r),s=qr(n,e.length),u=Kr(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(s,u)},o.prototype.spaceToBatchND=function(t,e,n){C(t.rank<=4,(function(){return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"}));var r=e.reduce((function(t,e){return t*e})),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),s=zr(i.shape,e,r,!1),u=Gr(s.length,e.length,!1),c=Hr(i.shape,e,r,!1);return i.reshape(s).transpose(u).reshape(c)},o.prototype.reduce=function(t,e,n){var r=t.shape[0],o=t.shape[1],a=$r(o),i=new Ji({windowSize:a,inSize:o,batchSize:r},e),s=this.compileAndRun(i,[t],n);return 1===s.shape[1]?s:this.reduce(s,e,n)},o.prototype.argReduce=function(t,e,n){void 0===n&&(n=null);var r=t.shape[0],o=t.shape[1];null!=n&&(r=n.shape[0],o=n.shape[1]);var a=$r(o),i=new aa({windowSize:a,inSize:o,batchSize:r},e,null==n),s=[t];null!=n&&s.push(n);var u=this.compileAndRun(i,s,"int32");return 1===u.shape[1]?u:this.argReduce(t,e,u)},o.prototype.argReducePacked=function(t,e,n){void 0===n&&(n=null);var r=null!=n?n.shape:t.shape,o=$r(r[r.length-1]),a=new Ra(r,o,e,null==n),i=null==n?[t]:[t,n],s=this.compileAndRun(a,i,"int32");return s.rank===t.rank?this.argReducePacked(t,e,s):s},o.prototype.sum=function(t,e){Cn("sum",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o),i=Tt(t.dtype);return this.reduce(a,"sum",i).reshape(r)},o.prototype.prod=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,e);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o),i=Tt(t.dtype);return this.reduce(a,"prod",i).reshape(r)},o.prototype.unsortedSegmentSum=function(t,e,n){var r=0,o=En([r],t.rank),a=t;null!=o&&(a=t.transpose(o),r=In(1,t.rank)[0]);var i=function(t,e,n){for(var r=[],o=t.length,a=0;a<o;a++)a!==e?r.push(t[a]):r.push(n);return r}(a.shape,r,n),s=k([a.shape[r]]),u=a.as2D(-1,s),c=Tt(t.dtype),l=this.segOpCompute(u,"unsortedSegmentSum",e,c,n).reshape(i);return null!=o&&(l=l.transpose(Rn(o))),l},o.prototype.segOpCompute=function(t,e,n,r,o){var a=t.shape[0],i=t.shape[1],s=function(t,e){var n,r=!1;for(t<=Yr?(n=t,r=!0):n=Y(t,Math.floor(Math.sqrt(t)));!r;)n>e||n===t?r=!0:n=Y(t,n+1);return n}(i,o),u=new us({windowSize:s,inSize:i,batchSize:a,numSegments:o},e),c=this.compileAndRun(u,[t,n],r);return c.shape[1]===o?c:(n=Kn(0,o).tile([i/s]),this.segOpCompute(c,e,n,r,o))},o.prototype.argMinMaxReduce=function(t,e,n){var r=[e];if(Cn("arg"+n.charAt(0).toUpperCase()+n.slice(1),r,t.rank),!i().getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var o=bn(t.shape,r),a=o[0],s=k(o[1]),u=t.as2D(-1,s);return this.argReduce(u,n).reshape(a)}return this.argReducePacked(t,n)},o.prototype.argMin=function(t,e){return this.argMinMaxReduce(t,e,"min")},o.prototype.argMax=function(t,e){return this.argMinMaxReduce(t,e,"max")},o.prototype.cumsum=function(t,e,n,r){if(e!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+e);var o=new ni(t.shape,n,r);return this.compileAndRun(o,[t])},o.prototype.equal=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(equal(a, b));\n","bool");var n=new Ba("return float(a == b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.notEqual=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(notEqual(a, b));\n","bool");var n=new Ba("return float(a != b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.less=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.less(t,e);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThan(a, b));\n","bool");var n=new Ba("return float(a < b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.lessEqual=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThanEqual(a, b));\n","bool");var n=new Ba("return float(a <= b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.greater=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.greater(t,e);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThan(a, b));\n","bool");var n=new Ba("return float(a > b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.greaterEqual=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThanEqual(a, b));\n","bool");var n=new Ba("return float(a >= b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.logicalNot=function(t){var e=new Cs(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(e,[t])},o.prototype.logicalAnd=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n","bool");var n=new Ba("return float(a >= 1.0 && b >= 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.logicalOr=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n","bool");var n=new Ba("return float(a >= 1.0 || b >= 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.select=function(t,e,n){var r=new cs(t.rank,e.shape,e.rank);return this.compileAndRun(r,[t,e,n],Dt(e.dtype,n.dtype))},o.prototype.where=function(t){dn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var e=t.dataSync();return na(t.shape,e)},o.prototype.topk=function(t,e,n){return ea(t.dataSync(),t.shape,t.dtype,e)},o.prototype.min=function(t,e){Cn("min",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"min",a.dtype).reshape(r)},o.prototype.minimum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.minimum(t,e);var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new Ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.mod=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new Ba("if (b == 0.0) return NAN;\n  return mod(a, b);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.max=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,e);Cn("max",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"max",a.dtype).reshape(r)},o.prototype.maximum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.maximum(t,e);var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new Ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.all=function(t,e){Cn("all",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"all",a.dtype).reshape(r)},o.prototype.any=function(t,e){Cn("any",e,t.rank);var n=bn(t.shape,e),r=n[0],o=k(n[1]),a=t.as2D(-1,o);return this.reduce(a,"any",a.dtype).reshape(r)},o.prototype.realDivide=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS")){return this.packedBinaryOp(t,e,"\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n","float32",!0)}var n=new Ba("\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",t.shape,e.shape);return this.compileAndRun(n,[t,e],"float32")},o.prototype.floorDiv=function(t,e){if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n","int32");var n=new Ba("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",t.shape,e.shape);return this.compileAndRun(n,[t,e],"int32")},o.prototype.add=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,Fa);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.add(t,e);var n=Dt(t.dtype,e.dtype);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,Fa,n);var r=new Ba(Fa,t.shape,e.shape);return this.compileAndRun(r,[t,e],n)},o.prototype.packedUnaryOp=function(t,e,n){var r=new Xs(t.shape,e);return this.compileAndRun(r,[t],n)},o.prototype.packedBinaryOp=function(t,e,n,r,o){void 0===o&&(o=!1);var a=new La(n,t.shape,e.shape,o);return this.compileAndRun(a,[t,e],r)},o.prototype.complexSeparableBinaryOp=function(t,e,n){var r=this,o=this.texData.get(t.dataId),a=this.texData.get(e.dataId),i=[[o.complexTensors.real,a.complexTensors.real],[o.complexTensors.imag,a.complexTensors.imag]].map((function(o){var a=o[0],i=o[1],s=r.makeComplexComponentTensorInfo(t,a),u=r.makeComplexComponentTensorInfo(e,i),c=new Ba(n,t.shape,e.shape);return r.compileAndRun(c,[s,u],Dt(a.dtype,i.dtype))})),s=i[0],u=i[1],c=this.complex(s,u);return s.dispose(),u.dispose(),c},o.prototype.makeComplexComponentTensorInfo=function(t,e){return {dataId:e.dataId,dtype:e.dtype,shape:t.shape}},o.prototype.addN=function(t){if(1===t.length)return t[0];if(t.length>i().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var e=Math.floor(t.length/2),n=this.addN(t.slice(0,e)),r=this.addN(t.slice(e));return this.addN([n,r])}var o=t.map((function(t){return t.dtype})).reduce((function(t,e){return Dt(t,e)})),a=t.map((function(t){return t.shape})),s=i().getBool("WEBGL_PACK")?new oa(t[0].shape,a):new ra(t[0].shape,a);return this.compileAndRun(s,t,o)},o.prototype.subtract=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,_a);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.subtract(t,e);var n=Dt(t.dtype,e.dtype);if(i().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,_a,t.dtype);var r=new Ba(_a,t.shape,e.shape);return this.compileAndRun(r,[t,e],n)},o.prototype.pow=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new Ba("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",t.shape,e.shape),r=Dt(t.dtype,e.dtype);return this.compileAndRun(n,[t,e],r)},o.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Ns,t.dtype);var e=new Cs(t.shape,Ns);return this.compileAndRun(e,[t])},o.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Fs,t.dtype);var e=new Cs(t.shape,Fs);return this.compileAndRun(e,[t])},o.prototype.sign=function(t){var e=new Cs(t.shape,"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");return this.compileAndRun(e,[t])},o.prototype.isNaN=function(t){var e=new Cs(t.shape,"return float(isnan(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.isInf=function(t){var e=new Cs(t.shape,"return float(isinf(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.isFinite=function(t){var e=new Cs(t.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.round=function(t){var e=new Cs(t.shape,"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");return this.compileAndRun(e,[t])},o.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,_s,t.dtype);var e=new Cs(t.shape,_s);return this.compileAndRun(e,[t])},o.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Os,t.dtype);var e=new Cs(t.shape,Os);return this.compileAndRun(e,[t])},o.prototype.softmax=function(t,e){var n=O([e],t.shape),r=this.max(t,n),o=wn(r.shape,n),a=this.subtract(t,r.reshape(o)),i=this.exp(a),s=this.sum(i,n).reshape(o);return this.realDivide(i,s)},o.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,"\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n",t.dtype);var e=new Cs(t.shape,"if (x < 0.0) return NAN;\n  return log(x);");return this.compileAndRun(e,[t])},o.prototype.log1p=function(t){var e=new Cs(t.shape,"return log(1.0 + x);");return this.compileAndRun(e,[t])},o.prototype.sqrt=function(t){var e=new Cs(t.shape,"return sqrt(x);");return this.compileAndRun(e,[t])},o.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var e=new Cs(t.shape,"return inversesqrt(x);");return this.compileAndRun(e,[t])},o.prototype.reciprocal=function(t){var e=new Cs(t.shape,"return 1.0 / x;");return this.compileAndRun(e,[t])},o.prototype.relu=function(t){var e;return e=i().getBool("WEBGL_PACK")?new Xs(t.shape,qs):new Cs(t.shape,ks),this.compileAndRun(e,[t])},o.prototype.relu6=function(t){var e;return e=i().getBool("WEBGL_PACK")?new Xs(t.shape,Ks):new Cs(t.shape,Ss),this.compileAndRun(e,[t])},o.prototype.prelu=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La(Pa,t.shape,e.shape):new Ba(Ma,t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.elu=function(t){if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,js,t.dtype);var e=new Cs(t.shape,As);return this.compileAndRun(e,[t])},o.prototype.eluDer=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",t.shape,e.shape):new Ba("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.selu=function(t){var e=new Cs(t.shape,Ds);return this.compileAndRun(e,[t])},o.prototype.int=function(t){var e=new Cs(t.shape,"return float(int(x));");return this.compileAndRun(e,[t],"int32")},o.prototype.clip=function(t,e,n){var r,o=(r=i().getBool("WEBGL_PACK_CLIP")?new Ua(t.shape):new Wa(t.shape)).getCustomSetupFunc(e,n);return this.compileAndRun(r,[t],null,o)},o.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(i().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Is,t.dtype);var e=new Cs(t.shape,Is);return this.compileAndRun(e,[t])},o.prototype.complexAbs=function(t){var e=this.texData.get(t.dataId),n=new Va(t.shape),r=[this.makeComplexComponentTensorInfo(t,e.complexTensors.real),this.makeComplexComponentTensorInfo(t,e.complexTensors.imag)];return this.compileAndRun(n,r)},o.prototype.sigmoid=function(t){var e=new Cs(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(e,[t])},o.prototype.softplus=function(t){var e=new Cs(t.shape,"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");return this.compileAndRun(e,[t])},o.prototype.sin=function(t){var e=new Cs(t.shape,Ms);return this.compileAndRun(e,[t])},o.prototype.cos=function(t){var e=new Cs(t.shape,Bs);return this.compileAndRun(e,[t])},o.prototype.tan=function(t){var e=new Cs(t.shape,"return tan(x);");return this.compileAndRun(e,[t])},o.prototype.asin=function(t){var e=new Cs(t.shape,Ps);return this.compileAndRun(e,[t])},o.prototype.acos=function(t){var e=new Cs(t.shape,Ls);return this.compileAndRun(e,[t])},o.prototype.atan=function(t){var e=new Cs(t.shape,Ws);return this.compileAndRun(e,[t])},o.prototype.atan2=function(t,e){var n=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new Ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.sinh=function(t){var e=new Cs(t.shape,"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},o.prototype.cosh=function(t){var e=new Cs(t.shape,"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},o.prototype.tanh=function(t){var e=new Cs(t.shape,"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");return this.compileAndRun(e,[t])},o.prototype.asinh=function(t){var e=new Cs(t.shape,Us);return this.compileAndRun(e,[t])},o.prototype.acosh=function(t){var e=new Cs(t.shape,Vs);return this.compileAndRun(e,[t])},o.prototype.atanh=function(t){var e=new Cs(t.shape,zs);return this.compileAndRun(e,[t])},o.prototype.erf=function(t){var e=new Cs(t.shape,'\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n');return this.compileAndRun(e,[t])},o.prototype.step=function(t,e){var n=new Cs(t.shape,function(t){return void 0===t&&(t=0),Es+"\n    return x > 0.0 ? 1.0 : float("+t+");\n  "}(e));return this.compileAndRun(n,[t])},o.prototype.conv2dByMatMul=function(t,e,n,r,o,a){var s=t.shape,u=this.texData.get(t.dataId),c=n.inChannels,l=s[0]*s[1]*s[2],h=n.outChannels,f="channelsLast"===n.dataFormat,d=(1===l||1===h)&&c>1e3,p=s[2]%2!=0&&!!u.isPacked;if(d||!i().getBool("WEBGL_LAZILY_UNPACK")||!i().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!p){var v=f?s[0]*s[1]*s[2]:s[0]*s[2]*s[3],m=this.reshape(t,[1,v,n.inChannels]),g=this.reshape(e,[1,n.inChannels,n.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b:g,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:a}),n.outShape)}var y=f?s[0]*s[1]*(s[2]+1):s[0]*s[2]*(s[3]+1),x={dataId:t.dataId,shape:[1,y,n.inChannels],dtype:t.dtype},b=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,C(_e(u.shape,x.shape),(function(){return "packed reshape "+u.shape+" to "+x.shape+" isn't free"}));var w=this.reshape(e,[1,n.inChannels,n.outChannels]),E=this.fusedBatchMatMul({a:x,b:w,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:a}),R=this.texData.get(E.dataId);return C(R.isPacked,(function(){return "batchMatMul result is expected to be packed"})),u.shape=b,R.shape=n.outShape,Lt.makeTensorFromDataId(E.dataId,n.outShape,E.dtype)},o.prototype.conv2dWithIm2Row=function(t,e,n,r,o,a){var i=n.filterWidth,s=n.filterHeight,u=n.inChannels,c=n.outWidth,l=n.outHeight,h="channelsLast"===n.dataFormat,f=i*s*u,d=l*c,p=[f,d],v=t.squeeze([0]),m=e.reshape([1,f,-1]),g=new Li(p,v.shape,n),y=this.compileAndRun(g,[v]).reshape([1,p[0],p[1]]),x=null!=r,b=null!=a,w=o?Qs(o,!0):null,C=new Hi(y.shape,[1,d,n.outChannels],!0,!1,x,w,b),E=[y,m];r&&E.push(r),b&&E.push(a);var R=this.compileAndRun(C,E);return h?R.reshape([1,l,c,n.outChannels]):R.reshape([1,n.outChannels,l,c])},o.prototype.fusedConv2d=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,s=t.preluActivationWeights;if(1===r.filterHeight&&1===r.filterWidth&&1===r.dilationHeight&&1===r.dilationWidth&&1===r.strideHeight&&1===r.strideWidth&&("SAME"===r.padInfo.type||"VALID"===r.padInfo.type))return this.conv2dByMatMul(e,n,r,o,a,s);if(i().getBool("WEBGL_CONV_IM2COL")&&1===e.shape[0])return this.conv2dWithIm2Row(e,n,r,o,a,s);var u=null!=o,c=null!=s,l=a?Qs(a,!1):null,h=new Qa(r,u,l,c),f=[e,n];return o&&f.push(o),s&&f.push(s),this.compileAndRun(h,f)},o.prototype.conv2d=function(t,e,n){if(1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type))return this.conv2dByMatMul(t,e,n);if(i().getBool("WEBGL_CONV_IM2COL")&&1===t.shape[0])return this.conv2dWithIm2Row(t,e,n);var r=new Qa(n);return this.compileAndRun(r,[t,e])},o.prototype.conv2dDerInput=function(t,e,n){var r=new Ka(n);return this.compileAndRun(r,[t,e])},o.prototype.conv2dDerFilter=function(t,e,n){var r=new qa(n);return this.compileAndRun(r,[t,e])},o.prototype.fusedDepthwiseConv2D=function(t){var e,n=t.input,r=t.filter,o=t.convInfo,a=t.bias,s=t.activation,u=t.preluActivationWeights,c=i().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1,l=s?Qs(s,c):null,h=[n,r],f=null!=a,d=null!=u;return f&&h.push(a),d&&h.push(u),c?(e=new ti(o,f,l,d),this.compileAndRun(e,h)):(e=new Za(o,f,l,d),this.compileAndRun(e,h))},o.prototype.depthwiseConv2D=function(t,e,n){var r;return i().getBool("WEBGL_PACK_DEPTHWISECONV")&&n.strideWidth<=2&&n.outChannels/n.inChannels==1?(r=new ti(n),this.compileAndRun(r,[t,e])):(r=new Za(n),this.compileAndRun(r,[t,e]))},o.prototype.depthwiseConv2DDerInput=function(t,e,n){var r=new $a(n);return this.compileAndRun(r,[t,e])},o.prototype.depthwiseConv2DDerFilter=function(t,e,n){var r=new Ya(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3d=function(t,e,n){var r=new Ja(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3dDerInput=function(t,e,n){var r=new Xa(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3dDerFilter=function(t,e,n){var r=new ja(n);return this.compileAndRun(r,[t,e])},o.prototype.maxPool=function(t,e){var n=new $i(e,"max",!1);return this.compileAndRun(n,[t])},o.prototype.avgPool=function(t,e){var n=new $i(e,"avg",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.maxPoolBackprop=function(t,e,n,r){var o=new $i(r,"max",!0),a=this.compileAndRun(o,[e]),i=new zi(r),s=this.compileAndRun(i,[t,a],e.dtype);return a.dispose(),s},o.prototype.avgPoolBackprop=function(t,e,n){var r=new Ia(n);return this.compileAndRun(r,[t],e.dtype)},o.prototype.cast=function(t,e){return Po(t,e,this)},o.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),s=t.shape.slice();s[e]=1;var u=new Array(n);for(a=0;a<u.length;a++)i[e]=a,u[a]=this.slice(t,i,s).reshape(r);return u},o.prototype.avgPool3d=function(t,e){var n=new Qi(e,"avg",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.avgPool3dBackprop=function(t,e,n){var r=new ka(n);return this.compileAndRun(r,[t],e.dtype)},o.prototype.maxPool3d=function(t,e){var n=new Qi(e,"max",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.maxPool3dBackprop=function(t,e,n,r){var o=new Qi(r,"max",!0),a=this.compileAndRun(o,[e]),i=new Gi(r),s=this.compileAndRun(i,[t,a],e.dtype);return a.dispose(),s},o.prototype.reshape=function(t,e){var n=this.texData.get(t.dataId);if(n.isPacked&&!_e(t.shape,e)&&(null===n.texture||!_e(n.shape,e))){var r=this.packedReshape(t,e);return Lt.makeTensorFromDataId(r.dataId,r.shape,r.dtype)}return Lo(t,e)},o.prototype.resizeBilinear=function(t,e,n,r){var o=i().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ns(t.shape,e,n,r):new es(t.shape,e,n,r);return this.compileAndRun(o,[t],"float32")},o.prototype.resizeBilinearBackprop=function(t,e,n){var r=new ts(t,e,n);return this.compileAndRun(r,[t])},o.prototype.resizeNearestNeighbor=function(t,e,n,r){var o=new os(t.shape,e,n,r);return this.compileAndRun(o,[t])},o.prototype.resizeNearestNeighborBackprop=function(t,e,n){var r=new rs(t,e,n);return this.compileAndRun(r,[t])},o.prototype.multinomial=function(t,e,n,r){var o=e?t:go(t),a=o.shape[0],i=o.shape[1],s=new qi(a,i,n),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[o],"int32",u)},o.prototype.oneHot=function(t,e,n,r){var o=new Ki(t.size,e,n,r);return this.compileAndRun(o,[t])},o.prototype.diag=function(t){var e=new si(t.size);return this.compileAndRun(e,[t])},o.prototype.nonMaxSuppression=function(t,e,n,r,o){return dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),jo(t.dataSync(),e.dataSync(),n,r,o)},o.prototype.cropAndResize=function(t,e,n,r,o,a){var i=new ei(t.shape,e.shape,r,o,a);return this.compileAndRun(i,[t,e,n],"float32")},o.prototype.depthToSpace=function(t,e,n){C(e>1,(function(){return "blockSize should be > 1 for depthToSpace, but was: "+e}));var r=t.shape[0],o="NHWC"===n?t.shape[1]:t.shape[2],a="NHWC"===n?t.shape[2]:t.shape[3],i="NHWC"===n?t.shape[3]:t.shape[1],s=o*e,u=a*e,c=i/(e*e),l=new ii("NHWC"===n?[r,s,u,c]:[r,c,s,u],e,n);return this.compileAndRun(l,[t])},o.prototype.split=function(t,e,n){return Zo(t,e,n)},o.prototype.scatterND=function(t,e,n){var r=Zr(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,s=r.strides,u=r.outputSize,c=[u/i,i],l=t.reshape([a,o]),h=e.reshape([a,i]);if(0===u)return Lo(Fn([]),n);var f=On(0),d=new ss(a,o,l.rank,h.rank,s,c);return this.compileAndRun(d,[h,l,f]).reshape(n)},o.prototype.sparseToDense=function(t,e,n,r){var o=Zr(0,t,n),a=o.sliceRank,i=o.numUpdates,s=o.strides,u=o.outputSize,c=new ss(i,a,t.rank,e.rank,s,[u,1],!1);return this.compileAndRun(c,[e,t,r]).reshape(n)},o.prototype.fft=function(t){return this.fftImpl(t,!1)},o.prototype.ifft=function(t){return this.fftImpl(t,!0)},o.prototype.fftImpl=function(t,e){var n=this.texData.get(t.dataId),r=new pi(fi,t.shape,e),o=new pi(di,t.shape,e),a=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag)],i=this.compileAndRun(r,a),s=this.compileAndRun(o,a),u=this.complex(i,s).as2D(t.shape[0],t.shape[1]);return i.dispose(),s.dispose(),u},o.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=jr(t,e),a=o[0],i=o[1],s=o[2],u=o[3],c=e.reshape([i,r]),l=t.reshape([t.size/s,s]),h=new gi(r,u,[i,s]);return this.compileAndRun(h,[l,c]).reshape(a)},o.prototype.fill=function(t,e,n){if("string"===(n=n||j(e))){var r=P(n,k(t));return r.fill(e),Lt.makeTensor(r,t,n,this)}var o=new vi(t,e),a=o.getCustomSetupFunc(e);return this.compileAndRun(o,[],n,a)},o.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},o.prototype.zerosLike=function(t){return this.fill(t.shape,"string"===t.dtype?"":0,t.dtype)},o.prototype.linspace=function(t,e,n){return Wo(t,e,n)},o.prototype.makeTensorInfo=function(t,e){var n=this.write(null,t,e);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:e}},o.prototype.makeOutput=function(t,e){var n=this.makeTensorInfo(t,e).dataId;return Lt.makeTensorFromDataId(n,t,e,this)},o.prototype.unpackTensor=function(t){var e=new Ys(t.shape);return this.runWebGLProgram(e,[t],t.dtype)},o.prototype.packTensor=function(t){var e=new ji(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)},o.prototype.packedReshape=function(t,e){var n=[Ae(t.shape)].concat(De(t.shape)),r={dtype:t.dtype,shape:n,dataId:t.dataId},o=[Ae(e)].concat(De(e)),a=new Zi(o,n),i=this.runWebGLProgram(a,[r],t.dtype,null,!0);return {dataId:i.dataId,shape:e,dtype:i.dtype}},o.prototype.decode=function(t){var e,n=this.texData.get(t),r=n.isPacked,o=n.shape,a=n.dtype,i=Te(o);e=r?new ai(i):new oi(i);return {dtype:a,shape:o,dataId:this.runWebGLProgram(e,[{shape:i,dtype:a,dataId:t}],a,null,!0).dataId}},o.prototype.runWebGLProgram=function(t,e,n,r,o){var a=this;void 0===o&&(o=!1);var s=this.makeTensorInfo(t.outputShape,n),u=this.texData.get(s.dataId);if(t.packedOutput&&(u.isPacked=!0),t.outPackingScheme===Vt.DENSE){var c=Yt(t.outputShape);u.texShape=c.map((function(t){return 2*t}));}if(null!=t.outTexUsage&&(u.usage=t.outTexUsage),0===k(s.shape))return u.values=B(s.dtype,0),s;var l=[],h=e.map((function(e){if("complex64"===e.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var n=a.texData.get(e.dataId);if(null==n.texture){if(!t.packedInputs&&k(e.shape)<=i().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return {shape:e.shape,texData:null,isUniform:!0,uniformValues:n.values};t.packedInputs&&(n.isPacked=!0,n.shape=e.shape);}else if(!!n.isPacked!=!!t.packedInputs)e=n.isPacked?a.unpackTensor(e):a.packTensor(e),l.push(e),n=a.texData.get(e.dataId);else if(n.isPacked&&!_e(n.shape,e.shape)){var r=e,o=e.shape;e.shape=n.shape,e=a.packedReshape(e,o),l.push(e),n=a.texData.get(e.dataId),r.shape=o;}return a.uploadToGPU(e.dataId),{shape:e.shape,texData:n,isUniform:!1}}));this.uploadToGPU(s.dataId);var f,d={shape:s.shape,texData:u,isUniform:!1},p=function(t,e,n){var r="";e.concat(n).forEach((function(t){var e=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0,n=t.isUniform?"uniform":t.texData.texShape;r+=t.shape+"_"+n+"_"+e;}));var o=t.userCode,a=t.constructor.name;return a+="_"+r+"_"+o}(t,h,d),v=this.getAndSaveBinary(p,(function(){return function(t,e,n,r){var o=e.userCode,a=n.map((function(t,n){var r={logicalShape:t.shape,texShape:t.isUniform?null:t.texData.texShape,isUniform:t.isUniform,isPacked:!t.isUniform&&t.texData.isPacked,flatOffset:null};return null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0&&(r.flatOffset=t.texData.slice.flatOffset),{name:e.variableNames[n],shapeInfo:r}})),s=a.map((function(t){return t.shapeInfo})),u={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},c=fa(a,u,o,e.packedInputs),l=t.createProgram(c),h=null,f=t.getUniformLocation(l,"NAN",!1);1===i().getNumber("WEBGL_VERSION")&&(h=t.getUniformLocation(l,"INFINITY",!1));for(var d={},p=0;p<e.variableNames.length;p++){var v=e.variableNames[p];d[v]=t.getUniformLocation(l,v,!1),d["offset"+v]=t.getUniformLocation(l,"offset"+v,!1);}return {program:e,source:c,webGLProgram:l,uniformLocations:d,inShapeInfos:s,outShapeInfo:u,infLoc:h,nanLoc:f}}(a.gpgpu,t,h,d)})),m=null!=this.activeTimers;if(m&&(f=this.startTimer()),function(t,e,n,r,o){Pi(e.inShapeInfos,n),Pi([e.outShapeInfo],[r]);var a=r.texData.texture,s=r.texData.texShape;r.texData.isPacked?t.setOutputPackedMatrixTexture(a,s[0],s[1]):t.setOutputMatrixTexture(a,s[0],s[1]),t.setProgram(e.webGLProgram),1===i().getNumber("WEBGL_VERSION")&&null!==e.infLoc&&t.gl.uniform1f(e.infLoc,1/0),null!==e.nanLoc&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach((function(n,r){var o=e.program.variableNames[r],a=e.uniformLocations[o],i=e.uniformLocations["offset"+o];if(null!=a)if(n.isUniform)if(k(n.shape)<2)t.gl.uniform1f(a,n.uniformValues[0]);else {var s=n.uniformValues;s instanceof Float32Array||(s=new Float32Array(s)),t.gl.uniform1fv(a,s);}else null!=n.texData.slice&&null!=i&&t.gl.uniform1i(i,n.texData.slice.flatOffset),t.setInputMatrixTexture(n.texData.texture,a,r);})),null!=o&&o(t,e.webGLProgram),t.executeProgram();}(this.gpgpu,v,h,d,r),l.forEach((function(t){return a.disposeData(t.dataId)})),m&&(f=this.endTimer(f),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(f)})),!i().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&!1===o){var g=this.unpackTensor(s);return this.disposeData(s.dataId),g}return s},o.prototype.compileAndRun=function(t,e,n,r,o){void 0===o&&(o=!1),n=n||e[0].dtype;var a=this.runWebGLProgram(t,e,n,r,o);return Lt.makeTensorFromDataId(a.dataId,a.shape,a.dtype)},o.prototype.getAndSaveBinary=function(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]},o.prototype.getTextureManager=function(){return this.textureManager},o.prototype.dispose=function(){var t=this;if(!this.disposed){if(!i().getBool("IS_TEST"))Object.keys(this.binaryCache).forEach((function(e){t.gpgpu.deleteProgram(t.binaryCache[e].webGLProgram),delete t.binaryCache[e];}));this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0;}},o.prototype.floatPrecision=function(){var t=this;return null==this.floatPrecisionValue&&(this.floatPrecisionValue=Ze((function(){if(!i().get("WEBGL_RENDER_FLOAT32_ENABLED")){var e=i().getBool("DEBUG");i().set("DEBUG",!1);var n=t.abs(On(1e-8)).dataSync()[0];if(i().set("DEBUG",e),n>0)return 32}return 16}))),this.floatPrecisionValue},o.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},o.prototype.uploadToGPU=function(t){var e,n=this.texData.get(t),r=n.shape,o=n.dtype,a=n.values,i=n.texture,s=n.usage,u=n.isPacked;if(null==i){var c,l=null!=this.activeTimers;l&&(c=et());var h=n.texShape;if(null==h&&(h=Ne(r,u),n.texShape=h),null!=a){var f=Te(r),d=void 0,p=h[1],v=h[0],m=a instanceof Uint8Array;u?(p=(e=$t(h[0],h[1]))[0],v=e[1],d=new hi(f,[v,p],m)):d=new li(f,[v,p],m);var g=this.makeTensorInfo([v,p],o);this.texData.get(g.dataId).usage=m?zt.PIXELS:zt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),p,v,a);var y=this.runWebGLProgram(d,[g],o,null,!0),x=this.texData.get(y.dataId);n.texture=x.texture,n.texShape=x.texShape,n.isPacked=x.isPacked,n.usage=x.usage,this.disposeData(g.dataId),this.texData.delete(y.dataId),n.values=null,l&&(this.uploadWaitMs+=et()-c);}else {var b=this.acquireTexture(h,s,o,u);n.texture=b;}}},o.prototype.convertAndCacheOnCPU=function(t,e){var n=this.texData.get(t),r=n.dtype;return this.releaseGPUData(t),null!=e&&(n.values=function(t,e){if("float32"===e||"complex64"===e)return t;if("int32"===e||"bool"===e){for(var n="int32"===e?new Int32Array(t.length):new Uint8Array(t.length),r=0;r<n.length;++r)n[r]=Math.round(t[r]);return n}throw new Error("Unknown dtype "+e)}(e,r)),n.values},o.prototype.acquireTexture=function(t,e,n,r){if(this.numBytesInGPU+=this.computeBytes(t,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+o+" MB, most likely due to a memory leak");}return this.textureManager.acquireTexture(t,e,r)},o.prototype.computeBytes=function(t,e){return t[0]*t[1]*z(e)},o}(bo);Wt()&&Lt.registerBackend("webgl",(function(){return new Zs}),2);var tu=An({square_:function(t){var e=mn(t,"x","square"),n=[e];return Lt.runKernelFunc((function(t,n){return n([e]),t.square(e)}),{x:e},null,"Square",{},n,[])}}),eu="SquaredDifference";var nu=An({squaredDifference_:function(t,e){var n,r=mn(t,"a","squaredDifference"),o=mn(e,"b","squaredDifference");n=Nt(r,o),r=n[0],o=n[1],Ro(r.shape,o.shape);var a={a:r,b:o},i=[r,o];return Lt.runKernelFunc((function(t,e){var n=t.squaredDifference(r,o);return e([r,o]),n}),a,(function(t,e){var n=e[0],r=e[1],o=On(2);return {a:function(){return t.mul(n.sub(r).mul(o))},b:function(){return t.mul(r.sub(n).mul(o))}}}),eu,{},i,[])}});var ru=An({abs_:function(t){var e=mn(t,"x","abs");return "complex64"===e.dtype?Lt.runKernelFunc((function(t){return t.complexAbs(e)}),{$x:e}):Lt.runKernelFunc((function(t,n){var r=t.abs(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return t.mul(n.toFloat().step(-1))}}}),"Abs")}}),ou=An({acos_:function(t){var e=mn(t,"x","acos");return Lt.runKernelFunc((function(t,n){var r=t.acos(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.divStrict(On(1).sub(n.toFloat().square()).sqrt()).neg()}}}))}}),au=An({acosh_:function(t){var e=mn(t,"x","acosh");return Lt.runKernelFunc((function(t,n){var r=t.acosh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.divStrict(n.toFloat().square().sub(1).sqrt())}}}))}}),iu=An({asin_:function(t){var e=mn(t,"x","asin");return Lt.runKernelFunc((function(t,n){var r=t.asin(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.divStrict(On(1).sub(n.toFloat().square()).sqrt())}}}))}}),su=An({asinh_:function(t){var e=mn(t,"x","asinh");return Lt.runKernelFunc((function(t,n){var r=t.asinh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.divStrict(On(1).add(n.toFloat().square()).sqrt())}}}))}}),uu=An({atan_:function(t){var e=mn(t,"x","atan");return Lt.runKernelFunc((function(t,n){var r=t.atan(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat().square().add(1))}}}))}}),cu=An({atanh_:function(t){var e=mn(t,"x","atanh");return Lt.runKernelFunc((function(t,n){var r=t.atanh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.div(On(1).sub(n.toFloat().square()))}}}))}}),lu=An({ceil_:function(t){var e=mn(t,"x","ceil");return Lt.runKernelFunc((function(t){return t.ceil(e)}),{$x:e},(function(t){return {$x:function(){return Xn(t)}}}))}}),hu=An({clipByValue_:function(t,e,n){var r=mn(t,"x","clipByValue");C(e<=n,(function(){return "Error in clip: min ("+e+") must be less than or equal to max ("+n+")."}));var o=[r],a={min:e,max:n};return Lt.runKernelFunc((function(t,o){var a=t.clip(r,e,n);return o([r]),a}),{x:r},(function(t,r){var o=r[0];return {x:function(){return t.where(o.greaterEqual(e).logicalAnd(o.lessEqual(n)),Xn(t))}}}),"ClipByValue",a,o)}}),fu=An({cos_:function(t){var e=mn(t,"x","cos"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.cos(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return n.toFloat().sin().neg().mul(t)}}}),"Cos",{},n)}}),du=An({cosh_:function(t){var e=mn(t,"x","cosh");return Lt.runKernelFunc((function(t,n){var r=t.cosh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return n.toFloat().sinh().mulStrict(t)}}}))}}),pu=An({erf_:function(t){var e=mn(t,"x","erf");return C("int32"===e.dtype||"float32"===e.dtype,(function(){return "Input dtype must be `int32` or `float32`."})),"int32"===e.dtype&&(e=e.toFloat()),Lt.runKernelFunc((function(t,n){var r=t.erf(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.mul(n.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}}))}}),vu=An({exp_:function(t){var e=mn(t,"x","exp");return Lt.runKernelFunc((function(t,n){var r=t.exp(e);return n([r]),r}),{x:e},(function(t,e){return {x:function(){return t.mulStrict(e[0])}}}),"Exp",{},[],[!0])}}),mu=An({expm1_:function(t){var e=mn(t,"x","expm1");return Lt.runKernelFunc((function(t,n){var r=t.expm1(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.mul(n.exp())}}}))}}),gu=An({floor_:function(t){var e=mn(t,"x","floor");return Lt.runKernelFunc((function(t){return t.floor(e)}),{$x:e},(function(t){return {$x:function(){return Xn(t)}}}))}}),yu=An({log_:function(t){var e=mn(t,"x","log"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.log(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return t.div(n.toFloat())}}}),"Log",{},n)}}),xu=An({log1p_:function(t){var e=mn(t,"x","log1p");return Lt.runKernelFunc((function(t,n){var r=t.log1p(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.div(n.add(1))}}}))}}),bu=An({logSigmoid_:function(t){var e=mn(t,"x","logSigmoid");return Lt.runKernelFunc((function(t,n){var r=t.softplus(e.neg()).neg();return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.mul(n.neg().sigmoid())}}}))}}),wu=An({neg_:function(t){var e=mn(t,"x","neg"),n=[e];return Lt.runKernelFunc((function(t){return t.neg(e)}),{x:e},(function(t){return {x:function(){return t.neg()}}}),"Neg",{},n)}}),Cu=An({reciprocal_:function(t){var e=mn(t,"x","reciprocal");return Lt.runKernelFunc((function(t,n){var r=t.reciprocal(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.div(n.square().neg())}}}))}}),Eu=An({round_:function(t){var e=mn(t,"x","round");return Lt.runKernelFunc((function(t){return t.round(e)}),{$x:e},(function(t){return {$x:function(){return Xn(t)}}}))}}),Ru=An({rsqrt_:function(t){var e=mn(t,"x","rsqrt"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.rsqrt(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return t.div(n.pow(1.5).mul(2)).neg()}}}),"Rsqrt",{},n)}}),Iu=An({sigmoid_:function(t){var e=mn(t,"x","sigmoid");return Lt.runKernelFunc((function(t,n){var r=t.sigmoid(e);return n([r]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return t.mul(n.mul(On(1).sub(n)))}}}),"Sigmoid")}}),ku=An({sign_:function(t){var e=mn(t,"x","sign");return Lt.runKernelFunc((function(t){return t.sign(e)}),{$x:e},(function(t){return {$x:function(){return Xn(t)}}}))}}),Su=An({isNaN_:function(t){var e=mn(t,"x","isNaN");return Lt.runKernelFunc((function(t){return t.isNaN(e)}),{$x:e},(function(t){return {$x:function(){return Xn(t)}}}))}}),Au=An({isInf_:function(t){var e=mn(t,"x","isInf");return Lt.runKernelFunc((function(t){return t.isInf(e)}),{$x:e},(function(t){return {$x:function(){return Xn(t)}}}))}}),Du=An({isFinite_:function(t){var e=mn(t,"x","isFinite");return Lt.runKernelFunc((function(t){return t.isFinite(e)}),{$x:e},(function(t){return {$x:function(){return Xn(t)}}}))}}),Tu=An({sin_:function(t){var e=mn(t,"x","sin"),n=[e];return Lt.runKernelFunc((function(t,n){var r=t.sin(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return n.toFloat().cos().mul(t)}}}),"Sin",{},n)}}),Nu=An({sinh_:function(t){var e=mn(t,"x","sinh");return Lt.runKernelFunc((function(t,n){var r=t.sinh(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return n.toFloat().cosh().mulStrict(t)}}}))}}),Fu=An({softplus_:function(t){var e=mn(t,"x","softplus");return Lt.runKernelFunc((function(t,n){var r=t.softplus(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.mul(n.sigmoid())}}}))}}),_u=An({sqrt_:function(t){var e=mn(t,"x","sqrt");return Lt.runKernelFunc((function(t,n){var r=t.sqrt(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat().sqrt().mul(2))}}}))}}),Ou=An({step_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","step");return Lt.runKernelFunc((function(t){return t.step(n,e)}),{$x:n},(function(t){return {$x:function(){return Xn(t)}}}))}}),Mu=An({tan_:function(t){var e=mn(t,"x","tan");return Lt.runKernelFunc((function(t,n){var r=t.tan(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return t.div(n.cos().square())}}}))}}),Bu=An({tanh_:function(t){var e=mn(t,"x","tanh");return Lt.runKernelFunc((function(t,n){var r=t.tanh(e);return n([r]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return On(1).sub(n.square()).mulStrict(t)}}}),"Tanh",{},null,[!0])}});function Pu(t,e,n,r,o,a){var i,s,u=mn(t,"x","batchNorm"),c=mn(e,"mean","batchNorm"),l=mn(n,"variance","batchNorm");return null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(2===u.rank,(function(){return "Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),C(2===c.rank||1===c.rank,(function(){return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."})),C(2===l.rank||1===l.rank,(function(){return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."})),null!=i&&C(2===i.rank||1===i.rank,(function(){return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."})),null!=s&&C(2===s.rank||1===s.rank,(function(){return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."})),Uu(u,c,l,s,i,a)}function Lu(t,e,n,r,o,a){var i,s,u=mn(t,"x","batchNorm"),c=mn(e,"mean","batchNorm"),l=mn(n,"variance","batchNorm");return null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(3===u.rank,(function(){return "Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),C(3===c.rank||1===c.rank,(function(){return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."})),C(3===l.rank||1===l.rank,(function(){return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."})),null!=i&&C(3===i.rank||1===i.rank,(function(){return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."})),null!=s&&C(3===s.rank||1===s.rank,(function(){return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."})),Uu(u,c,l,s,i,a)}function Wu(t,e,n,r,o,a){var i,s,u=mn(t,"x","batchNorm"),c=mn(e,"mean","batchNorm"),l=mn(n,"variance","batchNorm");return null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(4===u.rank,(function(){return "Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."})),C(4===c.rank||1===c.rank,(function(){return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."})),C(4===l.rank||1===l.rank,(function(){return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."})),null!=i&&C(4===i.rank||1===i.rank,(function(){return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."})),null!=s&&C(4===s.rank||1===s.rank,(function(){return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."})),Uu(u,c,l,s,i,a)}function Uu(t,e,n,r,o,a){null==a&&(a=.001);var i,s,u,c=mn(t,"x","batchNorm"),l=mn(e,"mean","batchNorm"),h=mn(n,"variance","batchNorm");null!=o&&(i=mn(o,"scale","batchNorm")),null!=r&&(s=mn(r,"offset","batchNorm")),C(l.rank===h.rank,(function(){return "Batch normalization gradient requires mean and variance to have equal ranks."})),C(null==s||l.rank===s.rank,(function(){return "Batch normalization gradient requires mean and offset to have equal ranks."})),C(null==i||l.rank===i.rank,(function(){return "Batch normalization gradient requires mean and scale to have equal ranks."})),u=0===c.rank||1===c.rank?c.as4D(1,1,1,c.size):2===c.rank?c.as4D(1,1,c.shape[0],c.shape[1]):3===c.rank?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return Lt.runKernelFunc((function(t,e){var n=t.batchNormalization(u,Vu(l),Vu(h),a,Vu(i),Vu(s));return e([c,l,h,i]),n}),{x:c,mean:l,variance:h,scale:i,offset:s},(function(t,e){var n=e,r=n[0],o=n[1],i=n[2],s=n[3],c=null==s?On(1):s,l=Eo(o.shape,u.shape),h=[];if(1===o.rank){for(var f=0;f<u.shape.length-1;++f)h.push(u.shape[f]);h.push(1);}var d=r.sub(o),p=t.mul(c),v=Ru(i.add(On(a))),m=v.mul(v).mul(v).mul(On(-.5));return {x:function(){return 1===o.rank?t.mul(Lr(v.as4D(1,1,1,o.shape[0]),h)).mul(c).reshape(r.shape):t.mul(v).mul(c).reshape(r.shape)},mean:function(){var t=v.mul(On(-1)).mul(p);return 1===o.rank&&(t=t.sum(l)),t.reshape(o.shape)},variance:function(){var t=m.mul(d).mul(p);return 1===o.rank&&(t=t.sum(l)),t.reshape(o.shape)},scale:function(){var e=d.mul(v),n=t.mul(e);return 1===o.rank&&(n=n.sum(l)),n.reshape(o.shape)},offset:function(){var e=t;return 1===o.rank&&(e=e.sum(l)),e.reshape(o.shape)}}}),"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Vu(t){return null==t?null:0===t.rank?t.as1D():1===t.rank?t:2===t.rank?t.as4D(1,1,t.shape[0],t.shape[1]):3===t.rank?t.as4D(1,t.shape[0],t.shape[1],t.shape[2]):t}function zu(){Xe("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon");}var Gu=An({batchNormalization2d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),zu(),Pu(t,e,n,a,o,r)}}),Hu=An({batchNormalization3d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),zu(),Lu(t,e,n,a,o,r)}}),qu=An({batchNormalization4d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),zu(),Wu(t,e,n,a,o,r)}}),Ku=An({batchNormalization_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),zu(),Uu(t,e,n,a,o,r)}}),ju=An({batchNorm_:Uu}),Xu=An({batchNorm2d_:Pu}),Yu=An({batchNorm3d_:Lu}),$u=An({batchNorm4d_:Wu});var Qu=An({logicalAnd_:function(t,e){var n=mn(t,"a","logicalAnd","bool"),r=mn(e,"b","logicalAnd","bool");return Ro(n.shape,r.shape),Lt.runKernelFunc((function(t){return t.logicalAnd(n,r)}),{a:n,b:r},null,"LogicalAnd")}}),Ju=An({logicalNot_:function(t){var e=mn(t,"x","logicalNot","bool");return Lt.runKernelFunc((function(t){return t.logicalNot(e)}),{$x:e})}}),Zu=An({logicalOr_:function(t,e){var n=mn(t,"a","logicalOr","bool"),r=mn(e,"b","logicalOr","bool");return Ro(n.shape,r.shape),Lt.runKernelFunc((function(t){return t.logicalOr(n,r)}),{$a:n,$b:r})}}),tc=An({logicalXor_:function(t,e){var n=mn(t,"a","logicalXor","bool"),r=mn(e,"b","logicalXor","bool");return Ro(n.shape,r.shape),Zu(t,e).logicalAnd(Qu(t,e).logicalNot())}}),ec=An({where_:function(t,e,n){var r=mn(e,"a","where"),o=mn(n,"b","where"),a=mn(t,"condition","where","bool");return E(r.shape,o.shape,"Error in where: "),1===a.rank?C(a.shape[0]===r.shape[0],(function(){return "The first dimension of `a` must match the size of `condition`."})):E(a.shape,o.shape,"Error in where: "),Lt.runKernelFunc((function(t,e){var n=t.select(a,r,o);return e([a]),n}),{$condition:a,$a:r,$b:o},(function(t,e){var n=e[0];return {$condition:function(){return Xn(n).toFloat()},$a:function(){return t.mul(n.cast(t.dtype))},$b:function(){return t.mul(n.logicalNot().cast(t.dtype))}}}))}}),nc=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:return [4,(e=mn(t,"condition","whereAsync","bool")).data()];case 1:return n=r.sent(),o=na(e.shape,n),t!==e&&e.dispose(),[2,o]}}))}))};var rc=An({add_:function(t,e){var n,r=mn(t,"a","add"),o=mn(e,"b","add");n=Nt(r,o),r=n[0],o=n[1];var a=Ro(r.shape,o.shape);return Lt.runKernelFunc((function(t){return t.add(r,o)}),{a:r,b:o},(function(t){return {a:function(){var e=t,n=Eo(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},b:function(){var e=t,n=Eo(o.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(o.shape)}}}),"Add")}}),oc=An({addN_:function(t){C(Array.isArray(t),(function(){return "The argument passed to tf.addN() must be a list of tensors"})),C(t.length>=1,(function(){return "Must pass at least one tensor to tf.addN(), but got "+t.length}));var e=t.map((function(t,e){return mn(t,"tensors"+e,"addN")})),n=e[0];e.forEach((function(t){if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),e.forEach((function(t){if(!S(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));var r=e;return Lt.runKernelFunc((function(t){return t.addN(e)}),r,(function(t){var n={};return e.forEach((function(e,r){n[r]=function(){return t.clone()};})),n}),"AddN")}}),ac=An({addStrict_:function(t,e){var n=mn(t,"a","addStrict"),r=mn(e,"b","addStrict");return E(n.shape,r.shape,"Error in addStrict: "),n.add(r)}}),ic=An({atan2_:function(t,e){var n,r=mn(t,"a","atan2"),o=mn(e,"b","atan2");n=Nt(r,o),r=n[0],o=n[1];var a=Ro(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.atan2(r,o);return e([r,o]),n}),{$a:r,$b:o},(function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=rc(n.square(),r.square()),o=t.mul(r.div(e)),i=Eo(n.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(n.shape)},$b:function(){var e=rc(n.square(),r.square()),o=wu(t.mul(n.div(e))),i=Eo(r.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(r.shape)}}}))}}),sc=An({div_:function(t,e){var n,r=mn(t,"a","div"),o=mn(e,"b","div");if(n=Nt(r,o),r=n[0],o=n[1],"int32"===r.dtype&&"int32"===o.dtype)return lc(r,o);var a=Ro(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.realDivide(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return {a:function(){var e=t.div(r.toFloat()),o=Eo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=Eo(r.shape,a);o.length>0&&(e=e.sum(o).reshape(r.shape));var i=r.square();return e.div(i.toFloat()).neg()}}}),"Div")}}),uc=An({divNoNan_:function(t,e){var n,r=mn(t,"a","div"),o=mn(e,"b","div");r=(n=Nt(r,o))[0],o=n[1];var a=sc(r,o),i=Xn(a),s=o.equal(i);return ec(s,i,a)}}),cc=An({divStrict_:function(t,e){var n=mn(t,"a","div"),r=mn(e,"b","div");return E(n.shape,r.shape,"Error in divideStrict: "),n.div(r)}}),lc=An({floorDiv_:function(t,e){var n,r=mn(t,"a","floorDiv"),o=mn(e,"b","floorDiv");n=Nt(r,o),r=n[0],o=n[1];var a=Ro(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.floorDiv(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return {a:function(){var e=t.div(r.toFloat()),o=Eo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=Eo(r.shape,a);o.length>0&&(e=e.sum(o).reshape(r.shape));var i=r.square();return e.div(i.toFloat()).neg()}}}),"FloorDiv")}}),hc=An({maximum_:function(t,e){var n,r=mn(t,"a","maximum"),o=mn(e,"b","maximum");return n=Nt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),Ro(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.maximum(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return {a:function(){return t.mul(n.greaterEqual(r).toFloat())},b:function(){return t.mul(n.less(r).toFloat())}}}),"Maximum")}}),fc=An({maximumStrict_:function(t,e){var n=mn(t,"a","maximumStrict"),r=mn(e,"b","maximumStrict");return E(n.shape,r.shape,"Error in maximumStrict: "),n.maximum(r)}}),dc=An({minimum_:function(t,e){var n,r=mn(t,"a","minimum"),o=mn(e,"b","minimum");return n=Nt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),Ro(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.minimum(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return {a:function(){return t.mul(n.lessEqual(r).toFloat())},b:function(){return t.mul(n.greater(r).toFloat())}}}),"Minimum")}}),pc=An({minimumStrict_:function(t,e){var n=mn(t,"a","minimumStrict"),r=mn(e,"b","minimumStrict");return E(n.shape,r.shape,"Error in minimumStrict: "),n.minimum(r)}}),vc=An({mod_:function(t,e){var n,r=mn(t,"a","mod"),o=mn(e,"b","mod");n=Nt(r,o),r=n[0],o=n[1];var a=Ro(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.mod(r,o);return e([r,o]),n}),{$a:r,$b:o},(function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=Eo(n.shape,a);return e.length>0?t.sum(e).reshape(n.shape):t},$b:function(){var e=t.mul(n.div(r).floor().neg()),o=Eo(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}}))}}),mc=An({modStrict_:function(t,e){var n=mn(t,"a","modStrict"),r=mn(e,"b","modStrict");return E(n.shape,r.shape,"Error in modStrict: "),n.mod(r)}}),gc=An({mul_:function(t,e){var n,r=mn(t,"a","mul"),o=mn(e,"b","mul");n=Nt(r,o),r=n[0],o=n[1];var a=Ro(r.shape,o.shape);return Lt.runKernelFunc((function(t,e){var n=t.multiply(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return {a:function(){var e=t.mul(r.toFloat()),o=Eo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=Eo(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}}),"Mul")}}),yc=An({mulStrict_:function(t,e){var n=mn(t,"a","mul"),r=mn(e,"b","mul");return E(n.shape,r.shape,"Error in multiplyStrict: "),n.mul(r)}}),xc=An({pow_:function(t,e){var n,r=mn(t,"base","pow"),o=mn(e,"exp","pow");n=Nt(r,o),r=n[0],o=n[1];var a=Ro(r.shape,o.shape),i=[r,o];return Lt.runKernelFunc((function(t,e){var n=t.pow(r,o);return e([r,o,n]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1],o=e[2];return {a:function(){var e=r.toFloat(),o=t.mul(e.mul(n.pow(e.sub(On(1))))),i=Eo(n.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(n.shape)},b:function(){var e=n.greater(0),i=n.log().where(e,Xn(n)),s=t.mul(o.mul(i)),u=Eo(r.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)}}}),"Pow",{},i,[!0])}}),bc=An({powStrict_:function(t,e){return E(t.shape,e.shape,"Error in powStrict: "),t.pow(e)}}),wc=An({squaredDifferenceStrict_:function(t,e){var n=mn(t,"a","squaredDifferenceStrict"),r=mn(e,"b","squaredDifferenceStrict");return E(n.shape,r.shape,"Error in squaredDifferenceStrict: "),n.squaredDifference(r)}}),Cc=An({sub_:function(t,e){var n,r=mn(t,"a","sub"),o=mn(e,"b","sub");n=Nt(r,o),r=n[0],o=n[1];var a=Ro(r.shape,o.shape);return Lt.runKernelFunc((function(t){return t.subtract(r,o)}),{a:r,b:o},(function(t){return {a:function(){var e=t,n=Eo(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},b:function(){var e=t,n=Eo(o.shape,a);return n.length>0&&(e=e.sum(n)),e.neg().reshape(o.shape)}}}),"Sub")}}),Ec=An({subStrict_:function(t,e){var n=mn(t,"a","subStrict"),r=mn(e,"b","subStrict");return E(n.shape,r.shape,"Error in subStrict: "),n.sub(r)}});var Rc=An({equal_:function(t,e){var n,r=mn(t,"a","equal"),o=mn(e,"b","equal");return n=Nt(r,o),r=n[0],o=n[1],Ro(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.equal(r,o)}),{$a:r,$b:o})}}),Ic=An({equalStrict_:function(t,e){var n=mn(t,"a","equalStrict"),r=mn(e,"b","equalStrict");return E(n.shape,r.shape,"Error in equalStrict: "),n.equal(r)}}),kc=An({greater_:function(t,e){var n,r=mn(t,"a","greater"),o=mn(e,"b","greater");return n=Nt(r,o),r=n[0],o=n[1],Ro(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.greater(r,o)}),{a:r,b:o},null,"Greater")}}),Sc=An({greaterEqual_:function(t,e){var n,r=mn(t,"a","greaterEqual"),o=mn(e,"b","greaterEqual");return n=Nt(r,o),r=n[0],o=n[1],Ro(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.greaterEqual(r,o);return e([r,o]),n}),{a:r,b:o},(function(t,e){var n=e[0],r=e[1];return {a:function(){return Xn(n)},b:function(){return Xn(r)}}}),"GreaterEqual")}}),Ac=An({greaterEqualStrict_:function(t,e){var n=mn(t,"a","greaterEqualStrict"),r=mn(e,"b","greaterEqualStrict");return E(n.shape,r.shape,"Error in greaterEqualStrict: "),n.greaterEqual(r)}}),Dc=An({greaterStrict_:function(t,e){var n=mn(t,"a","greaterStrict"),r=mn(e,"b","greaterStrict");return E(n.shape,r.shape,"Error in greaterStrict: "),n.greater(r)}}),Tc=An({less_:function(t,e){var n,r=mn(t,"a","less"),o=mn(e,"b","less");return n=Nt(r,o),r=n[0],o=n[1],Ro(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.less(r,o)}),{a:r,b:o},null,"Less")}}),Nc=An({lessEqual_:function(t,e){var n,r=mn(t,"a","lessEqual"),o=mn(e,"b","lessEqual");return n=Nt(r,o),r=n[0],o=n[1],Ro(r.shape,o.shape),Lt.runKernelFunc((function(t,e){var n=t.lessEqual(r,o);return e([r,o]),n}),{a:r,b:o},null,"LessEqual")}}),Fc=An({lessEqualStrict_:function(t,e){var n=mn(t,"a","lessEqualStrict"),r=mn(e,"b","lessEqualStrict");return E(n.shape,r.shape,"Error in lessEqualStrict: "),n.lessEqual(r)}}),_c=An({lessStrict_:function(t,e){var n=mn(t,"a","lessStrict"),r=mn(e,"b","lessStrict");return E(n.shape,r.shape,"Error in lessStrict: "),n.less(r)}}),Oc=An({notEqual_:function(t,e){var n,r=mn(t,"a","notEqual"),o=mn(e,"b","notEqual");return n=Nt(r,o),r=n[0],o=n[1],Ro(r.shape,o.shape),Lt.runKernelFunc((function(t){return t.notEqual(r,o)}),{a:r,b:o},null,"NotEqual")}}),Mc=An({notEqualStrict_:function(t,e){var n=mn(t,"a","notEqualStrict"),r=mn(e,"b","notEqualStrict");return E(n.shape,r.shape,"Error in notEqualStrict: "),n.notEqual(r)}});function Bc(t,e){for(var n=[],r=t;r<e;++r)n.push(r);return n}function Pc(t){for(var e=[],n=0;n<t.length;++n)for(var r=0;r<t[n].length;++r)e.push(t[n][r]);return e}var Lc=An({gather_:function(t,e,n){void 0===n&&(n=0);var r=mn(t,"x","gather"),o=mn(e,"indices","gather","int32");n=O(n,r.shape)[0];var a=function(t,e,n){for(var r=t.shape[n],o=[],a=1,i=1,s=0;s<n;s++)o.push(t.shape[s]),a*=t.shape[s];for(s=0;s<e.rank;s++)o.push(e.shape[s]);for(s=n+1;s<t.rank;s++)o.push(t.shape[s]),i*=t.shape[s];return {batchSize:a,sliceSize:i,dimSize:r,outputShape:o}}(r,o,n);return Lt.runKernelFunc((function(t,e){var a=t.gather(r,o.flatten(),n);return e([o]),a}),{x:r,indices:o},(function(t,e){var o=e[0];return {x:function(){var e=r.shape,a=o.size,i=e.slice(0,n),s=i.length,u=e.slice(n,e.length).slice(1),c=u.length,l=Bc(0,s),h=Bc(s+1,s+1+c),f=Pc([i,[a],u]),d=t.reshape(f),p=o.reshape([a]),v=Pc([[s],l,h]),m=d.transpose(v),g=Wc(m,p,r.shape[n]),y=Rn(v);return g=g.transpose(y)},indices:function(){return o}}}),"Gather",{axis:n}).reshape(a.outputShape)}}),Wc=An({unsortedSegmentSum_:function(t,e,n){var r=mn(t,"x","unsortedSegmentSum"),o=mn(e,"segmentIds","unsortedSegmentSum","int32");return C(A(n),(function(){return "numSegments must be of dtype int"})),Lt.runKernelFunc((function(t,e){var a=t.unsortedSegmentSum(r,o,n);return e([o]),a}),{$x:r},(function(t,e){var n=e[0];return {$x:function(){return function(t,e){for(var n=hc(e,Xn(e)),r=Lc(t,n),o=Sc(e,On(0,"int32")),a=r.rank-o.rank,i=0;i<a;++i)o=wr(o,i+1);o=Qu(o,zn(r.shape,"bool"));var s=Xn(r);return ec(o,r,s)}(t,n)}}}))}});var Uc=function(t,e,o){return n(this,void 0,void 0,(function(){var n,a,i,s,u,c,l,h,f,d,p,v,m;return r(this,(function(r){switch(r.label){case 0:for(n=mn(t,"tensor","boolMask"),a=mn(e,"mask","boolMask","bool"),i=null==o?0:o,s=a.rank,u=n.shape,C(s>0,(function(){return "mask cannot be scalar"})),E(u.slice(i,i+s),a.shape,"mask's shape must match the first K dimensions of tensor's shape,"),c=1,l=i;l<i+s;l++)c*=u[l];return h=u.slice(0,i).concat([c],u.slice(i+s)),f=n.reshape(h),d=a.reshape([-1]),[4,nc(d)];case 1:return p=r.sent(),v=p.squeeze([1]),m=Lc(f,v,i),t!==n&&n.dispose(),e!==a&&a.dispose(),v.dispose(),f.dispose(),d.dispose(),p.dispose(),[2,m]}}))}))};function Vc(t,e,n,r,o,a,i){void 0===a&&(a="NHWC"),C(t.length===e.rank,(function(){return "Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"}));var s=t,u=e,c=!1;3===e.rank&&(c=!0,u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]),s=[1,t[0],t[1],t[2]]),C(4===s.length,(function(){return "Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."})),C(4===u.rank,(function(){return "Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank})),C(4===n.rank,(function(){return "Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank}));var l="NHWC"===a?s[3]:s[1],h="NHWC"===a?u.shape[3]:u.shape[1];C(l===n.shape[2],(function(){return "Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+n.shape[2]+"."})),C(h===n.shape[3],(function(){return "Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+n.shape[3]+"."})),null!=i&&C(A(o),(function(){return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var f=Bo(a),d=So(s,n.shape,r,1,o,i,!1,f),p=Lt.runKernelFunc((function(t,e){var r=t.conv2dDerInput(u,n,d);return e([n,u]),r}),{dy4D:u,filter:n},(function(t,e){var n=e[0],s=e[1];return {dy4D:function(){return qc(t,n,r,o,a,1,i)},filter:function(){return jc(t,s,n.shape,r,o,a,i)}}}));return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function zc(t){var e=function(t){return "number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function Gc(t,e,n,r,o){C(t.length===e.rank,(function(){return "Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"}));var a=t,i=e,s=!1;4===e.rank&&(s=!0,i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]),a=[1,t[0],t[1],t[2],t[3]]);var u=a[4],c=i.shape[4];C(5===a.length,(function(){return "Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."})),C(5===i.rank,(function(){return "Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank})),C(5===n.rank,(function(){return "Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank})),C(u===n.shape[3],(function(){return "Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+n.shape[3]+"."})),C(c===n.shape[4],(function(){return "Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+n.shape[4]+"."}));var l=Ao(a,n.shape,r,1,o),h=Lt.runKernelFunc((function(t){return t.conv3dDerInput(i,n,l)}),{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var Hc=An({conv1d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NWC"),void 0===a&&(a=1);var s=mn(t,"x","conv1d"),u=mn(e,"filter","conv1d"),c=s,l=!1;2===s.rank&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),C(3===c.rank,(function(){return "Error in conv1d: input must be rank 3, but got rank "+c.rank+"."})),C(3===u.rank,(function(){return "Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."})),null!=i&&C(A(r),(function(){return "Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."})),C(c.shape[2]===u.shape[1],(function(){return "Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."})),C(Mo(n,a),(function(){return "Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+a+"'"})),C("NWC"===o,(function(){return "Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."}));var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=qc(f,h,[1,n],r,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),qc=An({conv2d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NHWC"),void 0===a&&(a=[1,1]);var s=mn(t,"x","conv2d"),u=mn(e,"filter","conv2d"),c=s,l=!1;3===s.rank&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),C(4===c.rank,(function(){return "Error in conv2d: input must be rank 4, but got rank "+c.rank+"."})),C(4===u.rank,(function(){return "Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."})),null!=i&&C(A(r),(function(){return "Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}));var h="NHWC"===o?c.shape[3]:c.shape[1];C(h===u.shape[2],(function(){return "Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."})),C(Mo(n,a),(function(){return "Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}));var f=Bo(o),d=So(c.shape,u.shape,n,a,r,i,!1,f),p=[u,c],v=Lt.runKernelFunc((function(t,e){var n=t.conv2d(c,u,d);return e([u,c]),n}),{x:c,filter:u},(function(t,e){var i=e,s=i[0],u=i[1];return C(Oo(a),(function(){return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"})),{x:function(){return Xc(u.shape,t,s,n,r,o)},filter:function(){return jc(u,t,s.shape,n,r,o)}}}),"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Kc=An({conv3d_:function(t,e,n,r,o,a){void 0===o&&(o="NDHWC"),void 0===a&&(a=[1,1,1]);var i=mn(t,"x","conv3d"),s=mn(e,"filter","conv3d"),u=i,c=!1;4===i.rank&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),C(5===u.rank,(function(){return "Error in conv3d: input must be rank 5, but got rank "+u.rank+"."})),C(5===s.rank,(function(){return "Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."})),C(u.shape[4]===s.shape[3],(function(){return "Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."})),C(function(t,e){return zc(t)||zc(e)}(n,a),(function(){return "Error in conv3D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"})),C("NDHWC"===o,(function(){return "Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."}));var l=Ao(u.shape,s.shape,n,a,r),h=Lt.runKernelFunc((function(t,e){var n=t.conv3d(u,s,l);return e([u,s]),n}),{x:u,$filter:s},(function(t,e){C(zc(a),(function(){return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}));var o=e[0],i=e[1];return {x:function(){return Gc(o.shape,t,i,n,r)},$filter:function(){return function(t,e,n,r,o){var a=t;4===t.rank&&(a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]));var i=e;4===i.rank&&(i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]));C(5===a.rank,(function(){return "Error in conv3dDerFilter: input must be rank 5, but got shape "+a.shape+"."})),C(5===i.rank,(function(){return "Error in conv3dDerFilter: dy must be rank 5, but got shape "+i.shape+"."})),C(5===n.length,(function(){return "Error in conv3dDerFilter: filterShape must be length 5, but got "+n+"."})),C(a.shape[4]===n[3],(function(){return "Error in conv3dDerFilter: depth of input "+a.shape[4]+") must match input depth in filter ("+n[3]+"."})),C(i.shape[4]===n[4],(function(){return "Error in conv3dDerFilter: depth of dy ("+i.shape[4]+") must match output depth for filter ("+n[4]+")."}));var s=Ao(a.shape,n,r,1,o);return Lt.runKernelFunc((function(t){return t.conv3dDerFilter(a,i,s)}),{x5D:a,dy5D:i})}(o,t,i.shape,n,r)}}}));return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),jc=An({conv2dDerFilter_:function(t,e,n,r,o,a,i){void 0===a&&(a="NHWC");var s=t;3===t.rank&&(s=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var u=e;3===u.rank&&(u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),C(4===s.rank,(function(){return "Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."})),C(4===u.rank,(function(){return "Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."})),C(4===n.length,(function(){return "Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."}));var c="NHWC"===a?s.shape[3]:s.shape[1],l="NHWC"===a?u.shape[3]:u.shape[1];C(c===n[2],(function(){return "Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+n[2]+"."})),C(l===n[3],(function(){return "Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+n[3]+")."})),null!=i&&C(A(o),(function(){return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var h=Bo(a),f=So(s.shape,n,r,1,o,i,!1,h);return Lt.runKernelFunc((function(t){return t.conv2dDerFilter(s,u,f)}),{x4D:s,dy4D:u})}}),Xc=An({conv2dDerInput_:Vc}),Yc=An({depthwiseConv2d_:function(t,e,n,r,o,a,i){void 0===a&&(a=[1,1]);var s=mn(t,"x","depthwiseConv2d"),u=mn(e,"filter","depthwiseConv2d"),c=s,l=!1;3===s.rank&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),C(4===c.rank,(function(){return "Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."})),C(4===u.rank,(function(){return "Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."})),C(c.shape[3]===u.shape[2],(function(){return "Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."})),null==a&&(a=[1,1]),C(Mo(n,a),(function(){return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"})),null!=i&&C(A(r),(function(){return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}));var h=So(c.shape,u.shape,n,a,r,i,!0),f=[c,u],d=Lt.runKernelFunc((function(t,e){var n=t.depthwiseConv2D(c,u,h);return e([c,u]),n}),{x:c,filter:u},(function(t,e){C(Oo(a),(function(){return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"}));var n=e[0],r=e[1];return {x:function(){return $c(n.shape,t,r,h)},filter:function(){return Qc(n,t,r.shape,h)}}}),"DepthwiseConv2dNative",h,f);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),$c=An({depthwiseConv2dDerInput_:function(t,e,n,r){var o=e,a=!1;3===e.rank&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=Lt.runKernelFunc((function(t){return t.depthwiseConv2DDerInput(o,n,r)}),{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Qc=An({depthwiseConv2dDerFilter_:function(t,e,n,r){var o=t;3===t.rank&&(o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=e;return 3===a.rank&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),Lt.runKernelFunc((function(t){return t.depthwiseConv2DDerFilter(o,a,r)}),{x4D:o,dy4D:a})}}),Jc=An({separableConv2d_:function(t,e,n,r,o,a,i){void 0===a&&(a=[1,1]),void 0===i&&(i="NHWC");var s=mn(t,"x","separableConv2d"),u=mn(e,"depthwiseFilter","separableConv2d"),c=mn(n,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(3===s.rank&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),"NCHW"===i)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");C(4===l.rank,(function(){return "Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."})),C(4===u.rank,(function(){return "Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."})),C(4===c.rank,(function(){return "Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."})),C(1===c.shape[0],(function(){return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."})),C(1===c.shape[1],(function(){return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."}));var f=u.shape[2],d=u.shape[3];C(c.shape[2]===f*d,(function(){return "Error in separableConv2d: the third dimension of pointwise filter must be "+f*d+", but got "+c.shape[2]+"."}));var p=Yc(l,u,r,o,i,a),v=qc(p,c,1,"valid",i);return h?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Zc=An({conv2dTranspose_:function(t,e,n,r,o,a){return Vc(n,mn(t,"x","conv2dTranspose"),mn(e,"filter","conv2dTranspose"),r,o,"NHWC",a)}}),tl=An({conv3dTranspose_:function(t,e,n,r,o){return Gc(n,mn(t,"x","conv3dTranspose"),mn(e,"filter","conv3dTranspose"),r,o)}});var el=An({matMul_:function(t,e,n,r){var o;void 0===n&&(n=!1),void 0===r&&(r=!1);var a=mn(t,"a","matMul"),i=mn(e,"b","matMul");o=Nt(a,i),a=o[0],i=o[1];var s=n?a.shape[a.rank-2]:a.shape[a.rank-1],u=r?i.shape[i.rank-1]:i.shape[i.rank-2],c=n?a.shape[a.rank-1]:a.shape[a.rank-2],l=r?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),d=k(h),p=k(f);C(a.rank>=2&&i.rank>=2&&a.rank===i.rank,(function(){return "Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."})),C(S(h,f),(function(){return "Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."})),C(s===u,(function(){return "Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+n+" and transposeB="+r+" must match."}));var v=a.shape.slice(0,-2).concat([c,l]),m=n?a.as3D(d,s,c):a.as3D(d,c,s),g=r?i.as3D(p,l,u):i.as3D(p,u,l),y={transposeA:n,transposeB:r};return Lt.runKernelFunc((function(t,e){var o=t.batchMatMul(m,g,n,r);return e([m,g]),o}),{a:m,b:g},(function(t,e){var o=e,a=o[0],i=o[1];return n||r?!n&&r?{a:function(){return t.matMul(i,!1,!1)},b:function(){return t.matMul(a,!0,!1)}}:n&&!r?{a:function(){return i.matMul(t,!1,!0)},b:function(){return a.matMul(t,!1,!1)}}:{a:function(){return i.matMul(t,!0,!0)},b:function(){return t.matMul(a,!0,!0)}}:{a:function(){return t.matMul(i,!1,!0)},b:function(){return a.matMul(t,!0,!1)}}}),"BatchMatMul",y).reshape(v)}}),nl=An({dot_:function(t,e){var n=mn(t,"t1","dot"),r=mn(e,"t2","dot");C(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),(function(){return "Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+r.rank+"."}));var o=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];return C(o===a,(function(){return "Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."})),1===n.rank&&1===r.rank?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():1===n.rank&&2===r.rank?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():2===n.rank&&1===r.rank?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),rl=An({outerProduct_:function(t,e){var n=mn(t,"v1","outerProduct"),r=mn(e,"v2","outerProduct");return C(1===n.rank&&1===r.rank,(function(){return "Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+r.rank+"."})),n.as2D(-1,1).matMul(r.as2D(1,-1))}});var ol=An({reverse_:function(t,e){var n=mn(t,"x","reverse");if(0===n.rank)return n.clone();var r=O(e,n.shape);return Lt.runKernelFunc((function(t){return t.reverse(n,r)}),{$x:n},(function(t){return {$x:function(){return t.reverse(r)}}})).reshapeAs(n)}}),al=An({reverse1d_:function(t){var e=mn(t,"x","reverse");return C(1===e.rank,(function(){return "Error in reverse1D: x must be rank 1 but got rank "+e.rank+"."})),ol(e,0)}}),il=An({reverse2d_:function(t,e){var n=mn(t,"x","reverse");return C(2===n.rank,(function(){return "Error in reverse2D: x must be rank 2 but got rank "+n.rank+"."})),ol(n,e)}}),sl=An({reverse3d_:function(t,e){var n=mn(t,"x","reverse");return C(3===n.rank,(function(){return "Error in reverse3D: x must be rank 3 but got rank "+n.rank+"."})),ol(n,e)}}),ul=An({reverse4d_:function(t,e){var n=mn(t,"x","reverse");return C(4===n.rank,(function(){return "Error in reverse4D: x must be rank 4 but got rank "+n.rank+"."})),ol(n,e)}});function cl(t,e,n,r,o,a){var i=mn(t,"x","maxPool"),s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),null==r&&(r=[1,1]),C(4===s.rank,(function(){return "Error in maxPool: input must be rank 4 but got rank "+s.rank+"."})),C(Mo(n,r),(function(){return "Error in maxPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"})),null!=a&&C(A(o),(function(){return "Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var c=Io(s.shape,e,n,r,o,a);if(1===c.filterWidth&&1===c.filterHeight&&S(c.inShape,c.outShape))return i.clone();var l=[s],h=Lt.runKernelFunc((function(t,e){var n=t.maxPool(s,c);return e([s,n]),n}),{x:s},(function(t,a){var i=a[0],s=a[1];return {x:function(){return function(t,e,n,r,o,a,i,s){var u=mn(t,"dy","maxPoolBackprop"),c=mn(e,"input","maxPoolBackprop"),l=mn(n,"output","maxPoolBackprop");C(c.rank===u.rank,(function(){return "Rank of input ("+c.rank+") does not match rank of dy ("+u.rank+")"})),null==a&&(a=[1,1]);C(Mo(o,a),(function(){return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"})),C(4===u.rank,(function(){return "Error in maxPoolBackprop: dy must be rank 4 but got rank "+u.rank+"."})),C(4===c.rank,(function(){return "Error in maxPoolBackprop: input must be rank 4 but got rank "+c.rank+"."})),null!=s&&C(A(i),(function(){return "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+i+"."}));var h=Io(c.shape,r,o,a,i,s);return Lt.runKernelFunc((function(t){return t.maxPoolBackprop(u,c,l,h)}),{$dy:u,$input:c})}(t,i,s,e,n,r,o)}}}),"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function ll(t,e,n,r,o,a){var i=mn(t,"x","avgPool","float32");null==r&&(r=[1,1]),C(Mo(n,r),(function(){return "Error in avgPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"}));var s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),C(4===s.rank,(function(){return "Error in avgPool: x must be rank 4 but got rank "+s.rank+"."})),null!=a&&C(A(o),(function(){return "Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var c=Io(s.shape,e,n,r,o,a);if(1===c.filterWidth&&1===c.filterHeight&&S(c.inShape,c.outShape))return i.clone();var l=Lt.runKernelFunc((function(t){return t.avgPool(s,c)}),{x:s},(function(t){return {x:function(){return function(t,e,n,r,o,a){var i=mn(t,"dy","avgPoolBackprop"),s=mn(e,"input","avgPoolBackprop");C(s.rank===i.rank,(function(){return "Rank of input ("+s.rank+") does not match rank of dy ("+i.rank+")"})),null==o&&(o=[1,1]);C(Mo(r,o),(function(){return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"}));var u=s,c=i,l=!1;3===s.rank&&(l=!0,u=s.as4D(1,s.shape[0],s.shape[1],s.shape[2]),c=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));C(4===c.rank,(function(){return "Error in avgPoolBackprop: dy must be rank 4 but got rank "+c.rank+"."})),C(4===u.rank,(function(){return "Error in avgPoolBackprop: input must be rank 4 but got rank "+u.rank+"."}));var h=Io(u.shape,n,r,o,a),f=Lt.runKernelFunc((function(t){return t.avgPoolBackprop(c,u,h)}),{dy4D:c,input4D:u});if(l)return f.as3D(f.shape[1],f.shape[2],f.shape[3]);return f}(t,s,e,n,r,o)}}}),"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var hl=An({maxPool_:function(t,e,n,r,o){return cl(t,e,n,1,r,o)}}),fl=An({avgPool_:function(t,e,n,r,o){return ll(t,e,n,1,r,o)}}),dl=An({pool_:function(t,e,n,r,o,a){null==o&&(o=[1,1]),null==a&&(a=1),0===r&&(r="valid");var i=mn(t,"x","maxPool"),s=i,u=!1;3===i.rank&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),C(Mo(a,o),(function(){return "Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"}));var c,l=Io(s.shape,e,a,o,r),h=[l.dilationHeight,l.dilationWidth];c="same"===r?function(t,e){var n=t.map((function(t,n){return t+(t-1)*(e[n]-1)})).map((function(t){return t-1})),r=n.map((function(t){return Math.floor(t/2)})),o=n.map((function(t,e){return t-r[e]}));return n.map((function(t,e){return [r[e],o[e]]}))}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=1===h[0]&&1===h[1],d=function(t,e,n){var r=n.map((function(t){return t[0]})),o=n.map((function(t){return t[1]})),a=t.concat(r,o),i=e.map((function(t,e){return (t-a[e]%t)%t})),s=o.map((function(t,e){return t+i[e]})),u=e.map((function(t,e){return [r[e],s[e]]})),c=e.map((function(t,e){return [0,i[e]]}));return [u,c]}([l.inHeight,l.inWidth],h,c),p=d[0],v=d[1],m=f?r:"valid",g=f?s:Mr(s,h,p),y=("avg"===n?function(){return ll(g,e,a,1,m)}:function(){return cl(g,e,a,1,m)})(),x=f?y:vr(y,h,v);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),pl=An({maxPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var s=mn(t,"x","maxPool3d"),u=s,c=!1;4===s.rank&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),null==i&&(i=[1,1,1]),C(5===u.rank,(function(){return "Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."})),C("NDHWC"===a,(function(){return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a})),C(Mo(n,i),(function(){return "Error in maxPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"})),null!=o&&C(A(r),(function(){return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=ko(u.shape,e,n,i,r,o,a),h=Lt.runKernelFunc((function(t,e){var n=t.maxPool3d(u,l);return e([u,n]),n}),{x:u},(function(t,a){var s=a[0],u=a[1];return {x:function(){return function(t,e,n,r,o,a,i,s){var u=mn(t,"dy","maxPool3dBackprop"),c=mn(e,"input","maxPool3dBackprop"),l=mn(n,"output","maxPool3dBackprop"),h=u,f=c,d=l,p=!1;4===c.rank&&(p=!0,h=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]),f=c.as5D(1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]),d=l.as5D(1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]));C(5===h.rank,(function(){return "Error in maxPool3dBackprop: dy must be rank 5 but got rank "+h.rank+"."})),C(5===f.rank,(function(){return "Error in maxPool3dBackprop: input must be rank 5 but got rank "+f.rank+"."})),C(5===d.rank,(function(){return "Error in maxPool3dBackprop: output must be rank 5 but got rank "+d.rank+"."})),null==a&&(a=[1,1,1]);C(Mo(o,a),(function(){return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"})),null!=s&&C(A(i),(function(){return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+i+"."}));var v=ko(f.shape,r,o,a,i,s),m=Lt.runKernelFunc((function(t){return t.maxPool3dBackprop(h,f,d,v)}),{dy5D:h,input5D:f});if(p)return m.as4D(m.shape[1],m.shape[2],m.shape[3],m.shape[4]);return m}(t,s,u,e,n,i,r,o)}}}));return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),vl=An({avgPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var s=mn(t,"x","avgPool3d","float32"),u=s,c=!1;4===s.rank&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),null==i&&(i=[1,1,1]),C(5===u.rank,(function(){return "Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."})),C("NDHWC"===a,(function(){return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a})),C(Mo(n,i),(function(){return "Error in avgPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"})),null!=o&&C(A(r),(function(){return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=ko(u.shape,e,n,i,r,o,a),h=Lt.runKernelFunc((function(t){return t.avgPool3d(u,l)}),{x:u},(function(t){return {x:function(){return function(t,e,n,r,o,a,i){var s=mn(t,"dy","avgPool3dBackprop"),u=mn(e,"input","avgPool3dBackprop"),c=s,l=u,h=!1;4===u.rank&&(h=!0,c=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]),l=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]));C(5===c.rank,(function(){return "Error in avgPool3dBackprop: dy must be rank 5 but got rank "+c.rank+"."})),C(5===l.rank,(function(){return "Error in avgPool3dBackprop: input must be rank 5 but got rank "+l.rank+"."})),null==o&&(o=[1,1,1]);C(Mo(r,o),(function(){return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"})),null!=i&&C(A(a),(function(){return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."}));var f=ko(l.shape,n,r,o,a,i),d=Lt.runKernelFunc((function(t){return t.avgPool3dBackprop(c,l,f)}),{dy5D:c,input5D:l});if(h)return d.as4D(d.shape[1],d.shape[2],d.shape[3],d.shape[4]);return d}(t,u,e,n,i,r,o)}}}));return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}});var ml=An({slice_:function(t,e,n){var r,o,a=mn(t,"x","slice");if(0===a.rank)throw new Error("Slicing scalar is not possible");(r="number"==typeof e?[e].concat(new Array(a.rank-1).fill(0)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(0)):e.slice()).forEach((function(t){C(-1!==t,(function(){return "slice() does not support negative begin indexing."}));})),o=(o=null==n?new Array(a.rank).fill(-1):"number"==typeof n?[n].concat(new Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(-1)):n).map((function(t,e){return t>=0?t:(C(-1===t,(function(){return "Negative size values should be exactly -1 but got "+t+" for the slice() size at index "+e+"."})),a.shape[e]-r[e])})),eo(a,r,o);var i=a.shape,s={begin:r,size:o};return Lt.runKernelFunc((function(t){return t.slice(a,r,o)}),{x:a},(function(t){for(var e=[],n=0;n<t.rank;n++)e.push([r[n],i[n]-r[n]-o[n]]);return {x:function(){return t.pad(e)}}}),"Slice",s)}}),gl=An({slice1d_:function(t,e,n){var r=mn(t,"x","slice1d");return C(1===r.rank,(function(){return "slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"})),ml(r,[e],[n])}}),yl=An({slice2d_:function(t,e,n){var r=mn(t,"x","slice2d");return C(2===r.rank,(function(){return "slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"})),ml(r,e,n)}}),xl=An({slice3d_:function(t,e,n){var r=mn(t,"x","slice3d");return C(3===r.rank,(function(){return "slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"})),ml(r,e,n)}}),bl=An({slice4d_:function(t,e,n){var r=mn(t,"x","slice4d");return C(4===r.rank,(function(){return "slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"})),ml(r,e,n)}});function wl(t,e,n,r,o){return e.rank<n.rank&&(e=e.reshape(wn(e.shape,r))),t.rank<n.rank&&(t=t.reshape(wn(t.shape,r))),{x:function(){var r=t.mul(n.equal(e).cast(t.dtype));return null==o?r:r.transpose(o)}}}var Cl=An({all_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","all","bool"),o=O(e,r.shape),a=o,i=En(a,r.rank);null!=i&&(r=r.transpose(i),a=In(a.length,r.rank));var s=Lt.runKernelFunc((function(t){return t.all(r,a)}),{$x:r});if(n){var u=wn(s.shape,o);return s.reshape(u)}return s}}),El=An({any_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","any","bool"),o=O(e,r.shape),a=o,i=En(a,r.rank);null!=i&&(r=r.transpose(i),a=In(a.length,r.rank));var s=Lt.runKernelFunc((function(t){return t.any(r,a)}),{$x:r});if(n){var u=wn(s.shape,o);return s.reshape(u)}return s}}),Rl=An({argMax_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","argMax");null==e&&(e=0);var r=O(e,n.shape),o=En(r,n.rank);null!=o&&(n=n.transpose(o),r=In(r.length,n.rank));var a={axis:r[0]},i=[n];return Lt.runKernelFunc((function(t,e){var o=t.argMax(n,r[0]);return e([n]),o}),{x:n},(function(t,e){var n=e[0];return {x:function(){return Xn(n)}}}),"ArgMax",a,i)}}),Il=An({argMin_:function(t,e){void 0===e&&(e=0);var n=mn(t,"x","argMin");null==e&&(e=0);var r=O(e,n.shape),o=En(r,n.rank);return null!=o&&(n=n.transpose(o),r=In(r.length,n.rank)),Lt.runKernelFunc((function(t,e){var o=t.argMin(n,r[0]);return e([n]),o}),{$x:n},(function(t,e){var n=e[0];return {$x:function(){return Xn(n)}}}))}}),kl=An({logSumExp_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","logSumExp"),o=O(e,r.shape),a=r.max(o,!0),i=r.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(n){var u=wn(s.shape,o);return s.reshape(u)}return s}}),Sl=An({max_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","max"),o=r,a=O(e,r.shape),i=a,s=En(i,r.rank);null!=s&&(r=r.transpose(s),i=In(i.length,r.rank));var u=[r],c=Lt.runKernelFunc((function(t,e){var n=t.max(r,i);return e([o,n]),n}),{x:r},(function(t,e){return wl(t,e[1],e[0],a,s)}),"Max",{axes:i},u,[!0]);if(n){var l=wn(c.shape,a);c=c.reshape(l);}return c}}),Al=An({mean_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","mean"),o=O(e,r.shape),a=k(bn(r.shape,o)[1]);return vo((function(t){var r=On(a);return {value:(r.dtype===t.dtype?t:t.cast(r.dtype)).div(r).sum(e,n),gradFunc:function(e){var n=t.shape.slice();return o.forEach((function(t){n[t]=1;})),e.reshape(n).mul(zn(t.shape,"float32")).div(a)}}}))(r)}}),Dl=An({min_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","min"),o=r,a=O(e,r.shape),i=a,s=En(i,r.rank);null!=s&&(r=r.transpose(s),i=In(i.length,r.rank));var u=[r],c=Lt.runKernelFunc((function(t,e){var n=t.min(r,i);return e([o,n]),n}),{x:r},(function(t,e){return wl(t,e[1],e[0],a,s)}),"Min",{axes:i},u,[!0]);if(n){var l=wn(c.shape,a);c=c.reshape(l);}return c}}),Tl=An({moments_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=O(e,(t=mn(t,"x","moments")).shape),o=t.mean(r,n),a=o.shape;n||(a=wn(o.shape,r));var i=t.toFloat().sub(o.reshape(a)).square();return {mean:o,variance:i.mean(r,n)}}}),Nl=An({sum_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","sum");"bool"===r.dtype&&(r=r.toInt());var o=O(e,r.shape);return vo((function(t){var e=En(o,t.rank),r=o,a=t;null!=e&&(a=t.transpose(e),r=In(r.length,t.rank));var i=function(e){var n=t.shape.slice();return o.forEach((function(t){n[t]=1;})),e.reshape(n).mul(zn(t.shape,"float32"))},s={axes:r},u=Lt.runKernelFunc((function(t){return t.sum(a,r)}),{x:a},(function(t){return {x:function(){return i(t)}}}),"Sum",s);if(n){var c=wn(u.shape,o);u=u.reshape(c);}return {value:u,gradFunc:i}}))(r)}}),Fl=An({prod_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=mn(t,"x","prod");"bool"===r.dtype&&(r=r.toInt());var o=O(e,r.shape),a=En(o,r.rank),i=o,s=r;null!=a&&(s=r.transpose(a),i=In(i.length,r.rank));var u=Lt.runKernelFunc((function(t){return t.prod(s,i)}),{permutedX:s});if(n){var c=wn(u.shape,o);u=u.reshape(c);}return u}});var _l=An({elu_:function(t){var e=mn(t,"x","elu");return Lt.runKernelFunc((function(t,n){var r=t.elu(e);return n([r]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){return Lt.runKernelFunc((function(e){return e.eluDer(t,n)}),{dy:t,y:n})}}}))}}),Ol=An({leakyRelu_:function(t,e){void 0===e&&(e=.2);var n=mn(t,"x","leakyRelu");return hc(On(e).mul(n),n)}}),Ml=An({prelu_:function(t,e){var n=mn(t,"x","prelu"),r=mn(e,"alpha","prelu");return Lt.runKernelFunc((function(t,e){var o=t.prelu(n,r);return e([n,r]),o}),{x:n,alpha:r},(function(t,e){var n=e[0],r=e[1],o=n.greater(0);return {x:function(){return ec(o,t,t.mul(r))},alpha:function(){var e=ec(o,Xn(t),t.mul(n)),a=Eo(r.shape,t.shape);return a.length>0&&(e=e.sum(a)),e.reshape(r.shape)}}}),"Prelu")}}),Bl=An({relu_:function(t){var e=mn(t,"x","relu");return "bool"===e.dtype?e.toInt():Lt.runKernelFunc((function(t,n){var r=t.relu(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0];return {x:function(){return t.mulStrict(n.step().toFloat())}}}),"Relu")}}),Pl=An({relu6_:function(t){var e=mn(t,"x","relu6");return "bool"===e.dtype?e.toInt():Lt.runKernelFunc((function(t,n){var r=t.relu6(e);return n([e]),r}),{x:e},(function(t,e){var n=e[0],r=n.lessEqual(6).mul(n.step());return {x:function(){return t.mulStrict(r.toFloat())}}}),"Relu6")}}),Ll=An({selu_:function(t){var e=mn(t,"x","selu");return Lt.runKernelFunc((function(t,n){var r=t.selu(e);return n([e]),r}),{$x:e},(function(t,e){var n=e[0];return {$x:function(){var e=n.greater(On(0)),r=On(bs),o=On(ws),a=t.mul(o),i=t.mul(r).mul(n.toFloat().exp());return ec(e,a,i)}}}))}});var Wl=An({transpose_:function(t,e){var n=mn(t,"x","transpose");if(null==e&&(e=n.shape.map((function(t,e){return e})).reverse()),C(n.rank===e.length,(function(){return "Error in transpose: rank of input "+n.rank+" must match length of perm "+e+"."})),e.forEach((function(t){C(t>=0&&t<n.rank,(function(){return "All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+e}));})),n.rank<=1)return n.clone();var r={perm:e};return Lt.runKernelFunc((function(t){return t.transpose(n,e)}),{x:n},(function(t){var n=Rn(e);return {x:function(){return t.transpose(n)}}}),"Transpose",r)}});var Ul=An({localResponseNormalization_:function(t,e,n,r,o){void 0===e&&(e=5),void 0===n&&(n=1),void 0===r&&(r=1),void 0===o&&(o=.5);var a=mn(t,"x","localResponseNormalization");C(4===a.rank||3===a.rank,(function(){return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank "+a.rank+"."})),C(A(e),(function(){return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+e+"."}));var i=a,s=!1;3===a.rank&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=Lt.runKernelFunc((function(t,a){var s=t.localResponseNormalization4D(i,e,n,r,o);return a([i,s]),s}),{x4D:i},(function(t,a){var i=a[0],s=a[1];return {x4D:function(){return Lt.runKernelFunc((function(a){return a.LRNGrad(t,i,s,e,n,r,o)}),{})}}}));return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}});var Vl=An({norm_:function(t,e,n,r){void 0===e&&(e="euclidean"),void 0===n&&(n=null),void 0===r&&(r=!1);var o=function t(e,n,r){void 0===r&&(r=null);if(0===e.rank)return e.abs();if(1!==e.rank&&null===r)return t(e.reshape([-1]),n,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return e.abs().sum(r);if(n===1/0)return e.abs().max(r);if(n===-1/0)return e.abs().min(r);if("euclidean"===n||2===n)return e.abs().pow(On(2,"int32")).sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}if(Array.isArray(r)&&2===r.length){if(1===n)return e.abs().sum(r[0]).max(r[1]-1);if(n===1/0)return e.abs().sum(r[1]).max(r[0]);if(n===-1/0)return e.abs().sum(r[1]).min(r[0]);if("fro"===n||"euclidean"===n)return e.square().sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}throw new Error("Error in norm: invalid axis: "+r)}(t=mn(t,"x","norm"),e,n),a=o.shape;if(r){var i=O(n,t.shape);a=wn(o.shape,i);}return o.reshape(a)}});var zl=An({basicLSTMCell_:function(t,e,n,r,o,a){var i=mn(t,"forgetBias","basicLSTMCell"),s=mn(e,"lstmKernel","basicLSTMCell"),u=mn(n,"lstmBias","basicLSTMCell"),c=mn(r,"data","basicLSTMCell"),l=mn(o,"c","basicLSTMCell"),h=mn(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),d=f.shape[0],p=f.shape[1]/4,v=[d,p],m=f.slice([0,0],v),g=f.slice([0,p],v),y=f.slice([0,2*p],v),x=f.slice([0,3*p],v),b=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return [b,w]}}),Gl=An({multiRNNCell_:function(t,e,n,r){for(var o=mn(e,"data","multiRNNCell"),a=gn(n,"c","multiRNNCell"),i=gn(r,"h","multiRNNCell"),s=o,u=[],c=0;c<t.length;c++){var l=t[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1];}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return [h,f]}});var Hl=An({movingAverage_:function(t,e,n,r,o){void 0===o&&(o=!0);var a=mn(t,"v","movingAverage"),i=mn(e,"x","movingAverage"),s=mn(n,"decay","movingAverage");Ft(a,i),C(S(a.shape,i.shape),(function(){return "Shape mismatch in v and x"}));var u=On(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){C(null!=r,(function(){return "When using zeroDebias: true, step is required."}));var h=mn(r,"step","movingAverage");l=l.div(u.sub(xc(s,h)));}return a.add(l)}});var ql=An({stridedSlice_:function(t,e,n,r,o,a,i,s,u){if(void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),void 0===u&&(u=0),null==r&&(r=new Array(e.length)),0!==i)throw new Error("ellipsis mask is not yet supported");var c=mn(t,"x","stridedSlice"),l=no(s),h=c.shape.slice();l.forEach((function(t){e[t]=0,n[t]=1,h.splice(t,0,1);})),c=c.reshape(h);for(var f=0;f<c.rank;f++)e[f]=oo(o,e,r,c.shape,f),n[f]=ao(a,n,r,c.shape,f),r[f]=r[f]||1;var d=no(u);d.forEach((function(t){n[t]=e[t]+1,r[t]=1;}));var p=ro(e,n,r),v=p.filter((function(t,e){return -1===d.indexOf(e)}));return r.every((function(t){return 1===t}))?ml(c,e,p).reshape(v):Lt.runKernelFunc((function(t){return t.stridedSlice(c,e,n,r)}),{$x:c}).reshape(v)}});var Kl=An({topk_:function(t,e,n){void 0===e&&(e=1),void 0===n&&(n=!0);var r=mn(t,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(e>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+e);var a=Lt.runKernelFunc((function(t){return t.topk(r,e,n)}),{$x:r});return {values:a[0],indices:a[1]}}});var jl=An({scatterND_:function(t,e,n){var r=mn(t,"indices","scatterND","int32"),o=mn(e,"updates","scatterND");return Jr(o,r,n),Lt.runKernelFunc((function(t){return t.scatterND(r,o,n)}),{indices:r,updates:o},null,"ScatterNd",{shape:n})}});var Xl=An({fft_:function(t){C("complex64"===t.dtype,(function(){return "The dtype for tf.spectral.fft() must be complex64 but got "+t.dtype+"."}));var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return Lt.runKernelFunc((function(t){return t.fft(r)}),{input:t}).reshape(t.shape)}}),Yl=An({ifft_:function(t){C("complex64"===t.dtype,(function(){return "The dtype for tf.spectral.ifft() must be complex64 but got "+t.dtype+"."}));var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return Lt.runKernelFunc((function(t){return t.ifft(r)}),{input:t}).reshape(t.shape)}}),$l=An({rfft_:function(t,e){C("float32"===t.dtype,(function(){return "The dtype for rfft() must be real value but got "+t.dtype}));var n,r=t.shape[t.shape.length-1],o=t.size/r;if(null!=e&&e<r){var a=t.shape.map((function(t){return 0})),i=t.shape.map((function(t){return t}));i[t.shape.length-1]=e,n=t.slice(a,i),r=e;}else if(null!=e&&e>r){var s=t.shape.map((function(t){return t}));s[t.shape.length-1]=e-r,n=t.concat(Gn(s),t.shape.length-1),r=e;}else n=t;var u=n.zerosLike(),c=Dn(n,u).as2D(o,r),l=Xl(c),h=Math.floor(r/2)+1,f=Tn(l),d=Nn(l),p=f.split([h,r-h],f.shape.length-1),v=d.split([h,r-h],d.shape.length-1),m=n.shape.slice();return m[n.shape.length-1]=h,Dn(p[0],v[0]).reshape(m)}}),Ql=An({irfft_:function(t){var e=t.shape[t.shape.length-1],n=t.size/e;if(e<=2){var r=t.as2D(n,e),o=Yl(r);return Tn(o)}var a=[n,2*(e-1)],i=Tn(t).as2D(n,e),s=Nn(t).as2D(n,e),u=i.slice([0,1],[n,e-2]).reverse(1),c=s.slice([0,1],[n,e-2]).reverse(1).mul(On(-1)),l=i.concat(u,1),h=s.concat(c,1);return r=Dn(l,h).as2D(a[0],a[1]),o=Yl(r),Tn(o)}}),Jl=Object.freeze({fft:Xl,ifft:Yl,rfft:$l,irfft:Ql});var Zl=An({sparseToDense_:function(t,e,n,r){void 0===r&&(r=0);var o=mn(t,"sparseIndices","sparseToDense","int32"),a=mn(e,"sparseValues","sparseToDense"),i=mn(r,"defaultValue","sparseToDense",a.dtype);return function(t,e,n,r){if("int32"!==t.dtype)throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+t.shape+".");var o=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error("outputShape has incorrect number of elements:, "+n.length+", should be: "+a+".");var i=e.size;if(0!==e.rank&&(1!==e.rank||i!==o))throw new Error("sparseValues has incorrect shape "+e.shape+", should be [] or ["+o+"]");if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,n,i),Lt.runKernelFunc((function(t){return t.sparseToDense(o,a,n,i)}),{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}});var th=An({gatherND_:function(t,e){var n=mn(e,"indices","gatherND","int32"),r=mn(t,"x","gatherND");return Lt.runKernelFunc((function(t){return t.gatherND(r,n)}),{x:r,indices:n},null,"GatherNd")}});var eh=An({diag_:function(t){var e=mn(t,"x","diag").flatten(),n=t.shape.concat(t.shape);return Lt.runKernelFunc((function(t){return t.diag(e)}),{$x:e}).reshape(n)}});var nh=An({dropout_:function(t,e,n,r){var o=mn(t,"x","dropout");if(C("float32"===o.dtype,(function(){return "x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."})),C(e>=0&&e<1,(function(){return "rate must be a float in the range [0, 1), but got "+e+"."})),0===e)return t instanceof wt?o.clone():o;var a=function(t,e){if(null==e)return t.shape.slice();if(S(t.shape,e))return e;if(t.shape.length===e.length){for(var n=[],r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}(o,n),i=1-e,s=_r(a,0,1,"float32",r).add(i).floor().div(i);return o.mul(s)}});function rh(t,e,n){for(var r=1-t%2,o=new Float32Array(t),a=0;a<t;++a){var i=2*Math.PI*a/(t+r-1);o[a]=e-n*Math.cos(i);}return Mn(o,"float32")}var oh=An({hannWindow_:function(t){return rh(t,.5,.5)}}),ah=An({hammingWindow_:function(t){return rh(t,.54,.46)}}),ih=An({frame_:function(t,e,n,r,o){void 0===r&&(r=!1),void 0===o&&(o=0);for(var a=0,i=[];a+e<=t.size;)i.push(ml(t,a,e)),a+=n;if(r)for(;a<t.size;){var s=a+e-t.size,u=Yn([ml(t,a,e-s),Hn([s],o)]);i.push(u),a+=n;}return 0===i.length?Bn([],[0,e]):Yn(i).as2D(i.length,e)}}),sh=An({stft_:function(t,e,n,r,o){var a;void 0===o&&(o=oh),null==r&&(a=e,r=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=ih(t,e,n),s=gc(i,o(e)),u=[],c=0;c<i.shape[0];c++)u.push($l(s.slice([c,0],[1,e]),r));return Yn(u)}}),uh=Object.freeze({hannWindow:oh,hammingWindow:ah,frame:ih,stft:sh});var ch,lh=function(t,e,o){return void 0===o&&(o=1),n(this,void 0,void 0,(function(){var n,a,i,s,u,c,l,h,f,d,p,v,m,g;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"predictions","inTopK"),a=mn(e,"targets","inTopK"),C(n.rank>1,(function(){return "inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank})),C(n.rank-1===a.rank,(function(){return "predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+a.rank})),E(n.shape.slice(0,n.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=n.shape[n.shape.length-1],C(o>0&&o<=i,(function(){return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+o})),[4,n.data()];case 1:return s=r.sent(),[4,a.data()];case 2:for(u=r.sent(),c=[s.length/i,i],h=c[1],f=B("bool",l=c[0]),d=0;d<l;d++){for(p=d*h,v=s.subarray(p,p+h),m=[],g=0;g<v.length;g++)m.push({value:v[g],index:g});for(m.sort((function(t,e){return e.value-t.value})),f[d]=0,g=0;g<o;g++)if(m[g].index===u[d]){f[d]=1;break}}return t!==n&&n.dispose(),e!==a&&a.dispose(),[2,Fn(f,a.shape,"bool")]}}))}))};!function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";}(ch||(ch={}));var hh=An({absoluteDifference_:function(t,e,n,r){void 0===r&&(r=ch.SUM_BY_NONZERO_WEIGHTS);var o=mn(t,"labels","absoluteDifference"),a=mn(e,"predictions","absoluteDifference"),i=null;null!=n&&(i=mn(n,"weights","absoluteDifference")),E(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return fh(s,i,r)}}),fh=An({computeWeightedLoss_:function(t,e,n){void 0===n&&(n=ch.SUM_BY_NONZERO_WEIGHTS);var r=mn(t,"losses","computeWeightedLoss"),o=null;null!=e&&(o=mn(e,"weights","computeWeightedLoss"));var a=null==o?r:r.mul(o);if(n===ch.NONE)return a;if(n===ch.SUM)return a.sum();if(n===ch.MEAN){if(null==o)return a.mean();var i=r.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(On(i)):s}if(n===ch.SUM_BY_NONZERO_WEIGHTS){if(null==o)return a.sum().div(On(r.size));var u=o.mul(zn(r.shape)).notEqual(On(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+n)}}),dh=An({cosineDistance_:function(t,e,n,r,o){void 0===o&&(o=ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"labels","cosineDistance"),i=mn(e,"predictions","cosineDistance"),s=null;null!=r&&(s=mn(r,"weights","cosineDistance")),E(a.shape,i.shape,"Error in cosineDistance: ");var u=On(1).sub(a.mul(i).sum(n,!0));return fh(u,s,o)}}),ph=An({hingeLoss_:function(t,e,n,r){void 0===r&&(r=ch.SUM_BY_NONZERO_WEIGHTS);var o=mn(t,"labels","hingeLoss"),a=mn(e,"predictions","hingeLoss"),i=null;null!=n&&(i=mn(n,"weights","hingeLoss")),E(o.shape,a.shape,"Error in hingeLoss: ");var s=On(1);o=On(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return fh(u,i,r)}}),vh=An({huberLoss_:function(t,e,n,r,o){void 0===r&&(r=1),void 0===o&&(o=ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"labels","huberLoss"),i=mn(e,"predictions","huberLoss"),s=null;null!=n&&(s=mn(n,"weights","huberLoss")),E(a.shape,i.shape,"Error in huberLoss: ");var u=On(r),c=i.sub(a).abs(),l=dc(c,u),h=c.sub(l),f=On(.5).mul(l.square()).add(u.mul(h));return fh(f,s,o)}}),mh=An({logLoss_:function(t,e,n,r,o){void 0===r&&(r=1e-7),void 0===o&&(o=ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"labels","logLoss"),i=mn(e,"predictions","logLoss"),s=null;null!=n&&(s=mn(n,"weights","logLoss")),E(a.shape,i.shape,"Error in logLoss: ");var u=On(1),c=On(r),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return fh(l,s,o)}}),gh=An({meanSquaredError_:function(t,e,n,r){void 0===r&&(r=ch.SUM_BY_NONZERO_WEIGHTS);var o=mn(t,"labels","meanSquaredError"),a=mn(e,"predictions","meanSquaredError"),i=null;null!=n&&(i=mn(n,"weights","meanSquaredError")),E(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return fh(s,i,r)}}),yh=An({sigmoidCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"multiClassLabels","sigmoidCrossEntropy"),i=mn(e,"logits","sigmoidCrossEntropy"),s=null;if(null!=n&&(s=mn(n,"weights","sigmoidCrossEntropy")),E(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=On(r),c=On(1),l=On(.5);a=a.mul(c.sub(u)).add(l.mul(u));}var h=function(t,e){var n=mn(t,"labels","sigmoidCrossEntropyWithLogits"),r=mn(e,"logits","sigmoidCrossEntropyWithLogits");E(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");var o=r.relu(),a=r.mul(n),i=r.abs().neg().exp().log1p();return o.sub(a).add(i)}(a,i);return fh(h,s,o)}}),xh=An({softmaxCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=ch.SUM_BY_NONZERO_WEIGHTS);var a=mn(t,"onehotLabels","softmaxCrossEntropy"),i=mn(e,"logits","softmaxCrossEntropy"),s=null;if(null!=n&&(s=mn(n,"weights","softmaxCrossEntropy")),E(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){var u=On(r),c=On(1),l=On(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l));}var h=function(t,e,n){if(void 0===n&&(n=-1),-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+e.rank+" and dim was "+n);return vo((function(t,e,r){var o=e.logSumExp([n],!0),a=e.toFloat().sub(o);r([t,a]);return {value:a.mul(t).neg().sum([n]),gradFunc:function(t,e){var r=e[0],o=e[1],a=wn(t.shape,[n]);return [t.reshape(a).mul(r.toFloat().sub(o.exp())),t.reshape(a).mul(o.exp().sub(r.toFloat()))]}}}))(t,e)}(a,i);return fh(h,s,o)}}),bh=Object.freeze({get Reduction(){return ch},absoluteDifference:hh,computeWeightedLoss:fh,cosineDistance:dh,hingeLoss:ph,huberLoss:vh,logLoss:mh,meanSquaredError:gh,sigmoidCrossEntropy:yh,softmaxCrossEntropy:xh});function wh(t,e){return void 0===e&&(e=!1),Lt.tidy((function(){if(2!==t.shape.length)throw new Error("qr2d() requires a 2D Tensor, but got a "+t.shape.length+"D Tensor.");for(var n=t.shape[0],r=t.shape[1],o=Cr(n),a=t.clone(),i=Bn([[1]],[1,1]),s=i.clone(),u=n>=r?r:n,c=function(t){var e,u=a,c=s,l=o;e=Lt.tidy((function(){var e=a.slice([t,t],[n-t,1]),u=e.norm(),c=a.slice([t,t],[1,1]),l=Bn([[-1]]).where(c.greater(0),Bn([[1]])),h=c.sub(l.mul(u)),f=e.div(h);s=1===f.shape[0]?i.clone():i.concat(f.slice([1,0],[f.shape[0]-1,f.shape[1]]),0);var d=l.matMul(h).div(u).neg(),p=a.slice([t,0],[n-t,r]),v=d.mul(s);if(0===t)a=p.sub(v.matMul(s.transpose().matMul(p)));else {var m=p.sub(v.matMul(s.transpose().matMul(p)));a=a.slice([0,0],[t,r]).concat(m,0);}var g=o.slice([0,t],[n,o.shape[1]-t]);if(0===t)o=g.sub(g.matMul(s).matMul(v.transpose()));else {var y=g.sub(g.matMul(s).matMul(v.transpose()));o=o.slice([0,0],[n,t]).concat(y,1);}return [s,a,o]})),s=e[0],a=e[1],o=e[2],tn([u,c,l]);},l=0;l<u;++l)c(l);return !e&&n>r&&(o=o.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[o,a]}))}var Ch=An({bandPart_:function(t,e,n){if(e%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+e+".");if(n%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+n+".");var r=mn(t,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,a=r.shape.slice(-2),i=a[0],s=a[1];if(!(e<=i))throw new Error("bandPart(): numLower ("+e+") must not be greater than the number of rows ("+i+").");if(!(n<=s))throw new Error("bandPart(): numUpper ("+n+") must not be greater than the number of columns ("+s+").");e<0&&(e=i),n<0&&(n=s);var u=Kn(0,i,1,"int32").reshape([-1,1]),c=Kn(0,s,1,"int32"),l=Cc(u,c),h=Qu(l.lessEqual(On(+e,"int32")),l.greaterEqual(On(-n,"int32"))),f=Gn([i,s],r.dtype);return Pr(Ur(r.reshape([-1,i,s])).map((function(t){return ec(h,t,f)}))).reshape(o)}}),Eh=An({gramSchmidt_:function(t){var e;if(Array.isArray(t)){e=!1,C(null!=t&&t.length>0,(function(){return "Gram-Schmidt process: input must not be null, undefined, or empty"}));for(var n=t[0].shape[0],r=function(e){C(t[e].shape[0]===n,(function(){return "Gram-Schmidt: Non-unique lengths found in the input vectors: ("+t[e].shape[0]+" vs. "+n+")"}));},o=1;o<t.length;++o)r(o);}else e=!0,t=tr(t,t.shape[0],0).map((function(t){return Br(t,[0])}));C(t.length<=t[0].shape[0],(function(){return "Gram-Schmidt: Number of vectors ("+t.length+") exceeds number of dimensions ("+t[0].shape[0]+")."}));var a=[],i=t,s=function(t){a.push(Lt.tidy((function(){var e=i[t];if(t>0)for(var n=0;n<t;++n){var r=Nl(a[n].mulStrict(e)).mul(a[n]);e=e.sub(r);}return e.div(Vl(e,"euclidean"))})));};for(o=0;o<t.length;++o)s(o);return e?Pr(a,0):a}}),Rh=An({qr_:function(t,e){if(void 0===e&&(e=!1),t.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+t.rank);if(2===t.rank)return wh(t,e);var n=t.shape.slice(0,t.shape.length-2).reduce((function(t,e){return t*e})),r=Ur(t.reshape([n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),o=[],a=[];return r.forEach((function(t){var n=wh(t,e),r=n[0],i=n[1];o.push(r),a.push(i);})),[Pr(o,0).reshape(t.shape),Pr(a,0).reshape(t.shape)]}}),Ih=Object.freeze({bandPart:Ch,gramSchmidt:Eh,qr:Rh});function kh(t,e,n,r,o,a){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY),null==a&&(a=0);var i=t.shape[0];return n=Math.min(n,i),C(0<=r&&r<=1,(function(){return "iouThreshold must be in [0, 1], but was '"+r+"'"})),C(2===t.rank,(function(){return "boxes must be a 2D tensor, but was of rank '"+t.rank+"'"})),C(4===t.shape[1],(function(){return "boxes must have 4 columns, but 2nd dimension was "+t.shape[1]})),C(1===e.rank,(function(){return "scores must be a 1D tensor"})),C(e.shape[0]===i,(function(){return "scores has incompatible shape with boxes. Expected "+i+", but was "+e.shape[0]})),C(0<=a&&a<=1,(function(){return "softNmsSigma must be in [0, 1], but was '"+a+"'"})),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o,softNmsSigma:a}}var Sh=An({resizeBilinear_:function(t,e,n){void 0===n&&(n=!1);var r=mn(t,"images","resizeBilinear");C(3===r.rank||4===r.rank,(function(){return "Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."})),C(2===e.length,(function(){return "Error in resizeBilinear: new shape must 2D, but got shape "+e+"."}));var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],s=e[1],u=Lt.runKernelFunc((function(t,e){return e([o]),t.resizeBilinear(o,i,s,n)}),{x:o},(function(t,e){return {x:function(){return Lt.runKernelFunc((function(r){return r.resizeBilinearBackprop(t,e[0],n)}),{})}}}),"ResizeBilinear",{alignCorners:n,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Ah=An({resizeNearestNeighbor_:function(t,e,n){void 0===n&&(n=!1);var r=mn(t,"images","resizeNearestNeighbor");C(3===r.rank||4===r.rank,(function(){return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."})),C(2===e.length,(function(){return "Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."})),C("float32"===r.dtype||"int32"===r.dtype,(function(){return "`images` must have `int32` or `float32` as dtype"}));var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],s=e[1],u=Lt.runKernelFunc((function(t,e){return e([o]),t.resizeNearestNeighbor(o,i,s,n)}),{batchImages:o},(function(t,e){return {batchImages:function(){return Lt.runKernelFunc((function(r){return r.resizeNearestNeighborBackprop(t,e[0],n)}),{})}}}));return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Dh=An({nonMaxSuppression_:function(t,e,n,r,o){void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY);var a=mn(t,"boxes","nonMaxSuppression"),i=mn(e,"scores","nonMaxSuppression"),s=kh(a,i,n,r,o);n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:n,iouThreshold:r,scoreThreshold:o};return Lt.runKernelFunc((function(t){return t.nonMaxSuppression(a,i,n,r,o)}),{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Th=function(t,e,o,a,i){return void 0===a&&(a=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),n(this,void 0,void 0,(function(){var n,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"boxes","nonMaxSuppressionAsync"),s=mn(e,"scores","nonMaxSuppressionAsync"),u=kh(n,s,o,a,i),o=u.maxOutputSize,a=u.iouThreshold,i=u.scoreThreshold,[4,Promise.all([n.data(),s.data()])];case 1:return c=r.sent(),l=c[0],h=c[1],f=jo(l,h,o,a,i),n!==t&&n.dispose(),s!==e&&s.dispose(),[2,f]}}))}))},Nh=An({nonMaxSuppressionWithScore_:function(t,e,n,r,o,a){void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY),void 0===a&&(a=0);var i=mn(t,"boxes","nonMaxSuppression"),s=mn(e,"scores","nonMaxSuppression"),u=kh(i,s,n,r,o,a),c={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=Lt.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return {selectedIndices:l[0],selectedScores:l[1]}}}),Fh=function(t,e,o,a,i,s){return void 0===a&&(a=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),void 0===s&&(s=0),n(this,void 0,void 0,(function(){var n,u,c,l,h,f,d;return r(this,(function(r){switch(r.label){case 0:return n=mn(t,"boxes","nonMaxSuppressionAsync"),u=mn(e,"scores","nonMaxSuppressionAsync"),c=kh(n,u,o,a,i,s),o=c.maxOutputSize,a=c.iouThreshold,i=c.scoreThreshold,s=c.softNmsSigma,[4,Promise.all([n.data(),u.data()])];case 1:return l=r.sent(),h=l[0],f=l[1],d=Xo(h,f,o,a,i,s),n!==t&&n.dispose(),u!==e&&u.dispose(),[2,d]}}))}))},_h=An({cropAndResize_:function(t,e,n,r,o,a){var i=mn(t,"image","cropAndResize"),s=mn(e,"boxes","cropAndResize","float32"),u=mn(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return C(4===i.rank,(function(){return "Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."})),C(2===s.rank&&4===s.shape[1],(function(){return "Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."})),C(1===u.rank&&u.shape[0]===c,(function(){return "Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."})),C(2===r.length,(function(){return "Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."})),C(r[0]>=1&&r[1]>=1,(function(){return "cropSize must be atleast [1,1], but was "+r})),C("bilinear"===o||"nearest"===o,(function(){return "method must be bilinear or nearest, but was "+o})),Lt.runKernelFunc((function(t,e){return t.cropAndResize(i,s,u,r,o,a)}),{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:r})}}),Oh=Object.freeze({resizeBilinear:Sh,resizeNearestNeighbor:Ah,nonMaxSuppression:Dh,nonMaxSuppressionAsync:Th,nonMaxSuppressionWithScore:Nh,nonMaxSuppressionWithScoreAsync:Fh,cropAndResize:_h}),Mh=function(t,e){return !(t>0)||"linear"===e},Bh=function(t,e,n){if(null==n||"linear"===n)return t;if("relu"===n)return t.mul(e.step());throw new Error("Gradient for activation "+n+" has not been implemented yet.")},Ph=function(t,e){var n=e,r=Eo(t.shape,e.shape);return r.length>0&&(n=n.sum(r)),n.reshape(t.shape)},Lh=function(t,e,n){if("linear"===e)return t;if("relu"===e)return Bl(t);if("elu"===e)return _l(t);if("relu6"===e)return Pl(t);if("prelu"===e)return Ml(t,n);throw new Error("Unknown fused activation "+e+".")};var Wh=An({fusedMatMul_:function(t){var e,n=t.a,r=t.b,o=t.transposeA,a=void 0!==o&&o,i=t.transposeB,s=void 0!==i&&i,u=t.bias,c=t.activation,l=void 0===c?"linear":c,h=t.preluActivationWeights;if(!1===Mh(Lt.state.gradientDepth,l)){var f=el(n,r,a,s);return null!=u&&(f=rc(f,u)),Lh(f,l,h)}var d=mn(n,"a","fused matMul"),p=mn(r,"b","fused matMul");e=Nt(d,p),d=e[0],p=e[1];var v=a?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],y=s?p.shape[p.rank-2]:p.shape[p.rank-1],x=d.shape.slice(0,-2),b=p.shape.slice(0,-2),w=k(x),E=k(b);C(d.rank>=2&&p.rank>=2&&d.rank===p.rank,(function(){return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."})),C(S(x,b),(function(){return "Error in fused matMul: outer dimensions ("+x+") and ("+b+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."})),C(v===m,(function(){return "Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."}));var R,I,A=d.shape.slice(0,-2).concat([g,y]),D=a?d.as3D(w,v,g):d.as3D(w,g,v),T=s?p.as3D(E,y,m):p.as3D(E,m,y);null!=u&&Ro(A,(R=Nt(R=mn(u,"bias","fused matMul"),d)[0]).shape),null!=h&&(I=mn(h,"prelu weights","fused matMul"));var N={a:D,b:T};null!=u&&(N.bias=R),null!=h&&(N.preluActivationWeights=I);var F=[D,T];return Lt.runKernelFunc((function(t,e){var n=t.fusedBatchMatMul({a:D,b:T,transposeA:a,transposeB:s,bias:R,activation:l,preluActivationWeights:I});return e([D,T,n]),n}),N,(function(t,e){var n=e[0],r=e[1],o=e[2],i=Bh(t,o,l),c={};return null!=u&&(c={bias:function(){return Ph(R,i)}}),a||s?!a&&s?Object.assign({a:function(){return i.matMul(r,!1,!1)},b:function(){return i.matMul(n,!0,!1)}},c):a&&!s?Object.assign({a:function(){return r.matMul(i,!1,!0)},b:function(){return n.matMul(i,!1,!1)}},c):Object.assign({a:function(){return r.matMul(i,!0,!0)},b:function(){return i.matMul(n,!0,!0)}},c):Object.assign({a:function(){return i.matMul(r,!1,!0)},b:function(){return n.matMul(i,!0,!1)}},c)}),"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},F,[!0]).reshape(A)}}),Uh=An({fusedConv2d_:function(t){var e=t.x,n=t.filter,r=t.strides,o=t.pad,a=t.dataFormat,i=void 0===a?"NHWC":a,s=t.dilations,u=void 0===s?[1,1]:s,c=t.dimRoundingMode,l=t.bias,h=t.activation,f=void 0===h?"linear":h,d=t.preluActivationWeights;if(f=f||"linear",!1===Mh(Lt.state.gradientDepth,f)){var p=qc(e,n,r,o,i,u,c);return null!=l&&(p=rc(p,l)),Lh(p,f,d)}var v=mn(e,"x","conv2d"),m=mn(n,"filter","conv2d"),g=v,y=!1;3===v.rank&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),C(4===g.rank,(function(){return "Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."})),C(4===m.rank,(function(){return "Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."})),null!=c&&C(A(o),(function(){return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."})),C(g.shape[3]===m.shape[2],(function(){return "Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."})),C(Mo(r,u),(function(){return "Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),C("NHWC"===i,(function(){return "Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."}));var x,b,w=So(g.shape,m.shape,r,u,o,c);null!=l&&(x=Nt(x=mn(l,"bias","fused conv2d"),v)[0],Ro(w.outShape,x.shape)),null!=d&&(b=mn(d,"prelu weights","fused conv2d"));var E={x:g,filter:m};null!=l&&(E.bias=x),null!=d&&(E.preluActivationWeights=b);var R=[m,g],I=Lt.runKernelFunc((function(t,e){var n=t.fusedConv2d({input:g,filter:m,convInfo:w,bias:x,activation:f,preluActivationWeights:b});return e([m,g,n]),n}),E,(function(t,e){var n=e,a=n[0],i=n[1],s=n[2],c=Bh(t,s,f);C(Oo(u),(function(){return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"}));var h={};return null!=l&&(h={bias:function(){return Ph(x,c)}}),Object.assign({x:function(){return Xc(i.shape,c,a,r,o)},filter:function(){return jc(i,c,a.shape,r,o)}},h)}),"FusedConv2D",{convInfo:w,activation:f},R,[!0]);return y?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),Vh=An({fusedDepthwiseConv2d_:function(t){var e=t.x,n=t.filter,r=t.strides,o=t.pad,a=t.dataFormat,i=void 0===a?"NHWC":a,s=t.dilations,u=void 0===s?[1,1]:s,c=t.dimRoundingMode,l=t.bias,h=t.activation,f=void 0===h?"linear":h,d=t.preluActivationWeights;if(!1===Mh(Lt.state.gradientDepth,f)){var p=Yc(e,n,r,o,i,u,c);return null!=l&&(p=rc(p,l)),Lh(p,f,d)}var v=mn(e,"x","depthwiseConv2d"),m=mn(n,"filter","depthwiseConv2d"),g=v,y=!1;3===v.rank&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),C(4===g.rank,(function(){return "Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."})),C(4===m.rank,(function(){return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."})),C(g.shape[3]===m.shape[2],(function(){return "Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."})),null==u&&(u=[1,1]),C(Mo(r,u),(function(){return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),null!=c&&C(A(o),(function(){return "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."}));var x,b,w=So(g.shape,m.shape,r,u,o,c,!0);null!=l&&(x=Nt(x=mn(l,"bias","fused conv2d"),v)[0],Ro(w.outShape,x.shape)),null!=d&&(b=mn(d,"prelu weights","fused depthwiseConv2d"));var E={x:g,filter:m};null!=l&&(E.bias=x),null!=d&&(E.preluActivationWeights=b);var R=[m,g],I=Lt.runKernelFunc((function(t,e){var n=t.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:x,activation:f,preluActivationWeights:b});return e([m,g,n]),n}),E,(function(t,e){C(Oo(u),(function(){return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"}));var n=e[0],r=e[1],o=e[2],a=Bh(t,o,f),i={};return null!=l&&(i={bias:function(){return Ph(x,a)}}),Object.assign({x:function(){return $c(r.shape,a,n,w)},filter:function(){return Qc(r,a,n.shape,w)}},i)}),"FusedDepthwiseConv2D",{convInfo:w,activation:f},R,[!0]);return y?I.as3D(I.shape[1],I.shape[2],I.shape[3]):I}}),zh=Object.freeze({matMul:Wh,conv2d:Uh,depthwiseConv2d:Vh}),Gh=Object.freeze({image:Oh,linalg:Ih,losses:bh,spectral:Jl,fused:zh,signal:uh,square:tu,squaredDifference:nu,conv1d:Hc,conv2d:qc,conv3d:Kc,depthwiseConv2d:Yc,separableConv2d:Jc,conv2dTranspose:Zc,conv3dTranspose:tl,op:An,batchNormalization2d:Gu,batchNormalization3d:Hu,batchNormalization4d:qu,batchNormalization:Ku,batchNorm:ju,batchNorm2d:Xu,batchNorm3d:Yu,batchNorm4d:$u,booleanMaskAsync:Uc,complex:Dn,real:Tn,imag:Nn,concat:Yn,concat1d:$n,concat2d:Qn,concat3d:Jn,concat4d:Zn,split:tr,matMul:el,dot:nl,outerProduct:rl,reverse:ol,reverse1d:al,reverse2d:il,reverse3d:sl,reverse4d:ul,maxPool:hl,avgPool:fl,pool:dl,maxPool3d:pl,avgPool3d:vl,slice:ml,slice1d:gl,slice2d:yl,slice3d:xl,slice4d:bl,abs:ru,acos:ou,acosh:au,asin:iu,asinh:su,atan:uu,atanh:cu,ceil:lu,clipByValue:hu,cos:fu,cosh:du,erf:pu,exp:vu,expm1:mu,floor:gu,log:yu,log1p:xu,logSigmoid:bu,neg:wu,reciprocal:Cu,round:Eu,rsqrt:Ru,sigmoid:Iu,sign:ku,isNaN:Su,isInf:Au,isFinite:Du,sin:Tu,sinh:Nu,softplus:Fu,sqrt:_u,step:Ou,tan:Mu,tanh:Bu,all:Cl,any:El,argMax:Rl,argMin:Il,logSumExp:kl,max:Sl,mean:Al,min:Dl,moments:Tl,sum:Nl,prod:Fl,equal:Rc,equalStrict:Ic,greater:kc,greaterEqual:Sc,greaterEqualStrict:Ac,greaterStrict:Dc,less:Tc,lessEqual:Nc,lessEqualStrict:Fc,lessStrict:_c,notEqual:Oc,notEqualStrict:Mc,add:rc,addN:oc,addStrict:ac,atan2:ic,div:sc,divNoNan:uc,divStrict:cc,floorDiv:lc,maximum:hc,maximumStrict:fc,minimum:dc,minimumStrict:pc,mod:vc,modStrict:mc,mul:gc,mulStrict:yc,pow:xc,powStrict:bc,squaredDifferenceStrict:wc,sub:Cc,subStrict:Ec,elu:_l,leakyRelu:Ol,prelu:Ml,relu:Bl,relu6:Pl,selu:Ll,logicalAnd:Qu,logicalNot:Ju,logicalOr:Zu,logicalXor:tc,where:ec,whereAsync:nc,buffer:dr,print:pr,batchToSpaceND:vr,broadcastTo:mr,cast:gr,clone:yr,cumsum:xr,depthToSpace:br,expandDims:wr,eye:Cr,multinomial:Er,oneHot:Rr,pad:Ir,pad1d:kr,pad2d:Sr,pad3d:Ar,pad4d:Dr,rand:Tr,randomNormal:Nr,randomGamma:Fr,randomUniform:_r,reshape:Or,spaceToBatchND:Mr,squeeze:Br,stack:Pr,tile:Lr,truncatedNormal:Wr,unstack:Ur,setdiff1dAsync:Vr,fill:Hn,linspace:qn,ones:zn,range:Kn,scalar:On,tensor:Fn,tensor1d:Mn,tensor2d:Bn,tensor3d:Pn,tensor4d:Ln,tensor5d:Wn,tensor6d:Un,variable:Vn,zeros:Gn,onesLike:jn,zerosLike:Xn,transpose:Wl,softmax:go,logSoftmax:yo,localResponseNormalization:Ul,norm:Vl,gather:Lc,unsortedSegmentSum:Wc,basicLSTMCell:zl,multiRNNCell:Gl,movingAverage:Hl,stridedSlice:ql,topk:Kl,scatterND:jl,fft:Xl,ifft:Yl,rfft:$l,irfft:Ql,sparseToDense:Zl,gatherND:th,diag:eh,dropout:nh,hannWindow:oh,hammingWindow:ah,frame:ih,stft:sh,inTopKAsync:lh});function Hh(t,e){Array.isArray(t)||(t=[t]),t.forEach((function(t){null!=t&&C("complex64"!==t.dtype,(function(){return e+" does not support complex64 tensors."}));}));}function qh(t,e,n,r){if("linear"===n)return t.linear(e);if("relu"===n)return t.relu(e);if("elu"===n)return t.elu(e);if("relu6"===n)return t.relu6(e);if("prelu"===n)return t.prelu(e,r);throw new Error("Activation "+n+" has not been implemented for the CPU backend.")}var Kh=function(t){function o(){var e=t.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new xo(e,Lt),e}return e(o,t),o.prototype.write=function(t,e,n){this.firstUse&&(this.firstUse=!1,i().get("IS_NODE")&&dn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));var r={};return this.data.set(r,{values:t,dtype:n}),r},o.prototype.move=function(t,e,n,r){this.data.set(t,{values:e,dtype:r});},o.prototype.numDataIds=function(){return this.data.numDataIds()},o.prototype.read=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){return [2,this.readSync(t)]}))}))},o.prototype.readSync=function(t){var e=this.data.get(t),n=e.dtype,r=e.complexTensors;return "complex64"===n?Vo(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.data.get(t).values},o.prototype.bufferSync=function(t){var e=this.readSync(t.dataId),n=e;if("string"===t.dtype)try{n=e.map((function(t){return ot(t)}));}catch(t){throw new Error("Failed to decode encoded string bytes into utf-8")}return dr(t.shape,t.dtype,n)},o.prototype.makeOutput=function(t,e,n){var r=this.write(t,e,n);return Lt.makeTensorFromDataId(r,e,n,this)},o.prototype.disposeData=function(t){if(this.data.has(t)){var e=this.data.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.data.delete(t);}},o.prototype.time=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){return e=et(),t(),[2,{kernelMs:et()-e}]}))}))},o.prototype.memory=function(){return {unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},o.prototype.complex=function(t,e){var n=this.makeOutput(null,t.shape,"complex64");return this.data.get(n.dataId).complexTensors={real:Lt.keep(t.clone()),imag:Lt.keep(e.clone())},n},o.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},o.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},o.prototype.slice=function(t,e,n){if(Hh(t,"slice"),io(t.shape,e,n)){var r=so(e,t.strides),o=k(n);return Fn(this.readSync(t.dataId).subarray(r,r+o),n,t.dtype)}for(var a=dr(n,t.dtype),i=this.bufferSync(t),s=0;s<a.size;++s){var u=a.indexToLoc(s).map((function(t,n){return t+e[n]}));a.values[s]=i.get.apply(i,u);}return a.toTensor()},o.prototype.stridedSlice=function(t,e,n,r){Hh(t,"stridedSlice");var o=ro(e,n,r);if(o.some((function(t){return 0===t})))return Fn([],o);for(var a=dr(o,t.dtype),i=this.bufferSync(t),s=0;s<a.size;s++){for(var u=a.indexToLoc(s),c=new Array(u.length),l=0;l<c.length;l++)c[l]=u[l]*r[l]+e[l];a.set.apply(a,[i.get.apply(i,c)].concat(u));}return a.toTensor()},o.prototype.diag=function(t){for(var e=this.readSync(t.dataId),n=dr([t.size,t.size],t.dtype),r=n.values,o=0;o<e.length;o++)r[o*t.size+o]=e[o];return n.toTensor()},o.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),s=t.shape.slice();s[e]=1;var u=new Array(n);for(a=0;a<u.length;a++)i[e]=a,u[a]=this.slice(t,i,s).reshape(r);return u},o.prototype.reverse=function(t,e){Hh(t,"reverse");for(var n=dr(t.shape,t.dtype),r=this.bufferSync(t),o=function(o){var a=n.indexToLoc(o),i=a.slice();e.forEach((function(e){return i[e]=t.shape[e]-1-i[e]})),n.set.apply(n,[r.get.apply(r,i)].concat(a));},a=0;a<n.size;a++)o(a);return n.toTensor()},o.prototype.concat=function(t,e){var n=this;if("complex64"===t[0].dtype){var r=t.map((function(t){return Tn(t)})),o=t.map((function(t){return Nn(t)}));return Dn(this.concat(r,e),this.concat(o,e))}var a=t.map((function(t){var n=k(t.shape.slice(e));return t.as2D(-1,n)})),i=Sn(a.map((function(t){return t.shape})),1),s=dr(i,t[0].dtype).values;if(1===a[0].shape[0]){var u=0;a.forEach((function(t){s.set(n.readSync(t.dataId),u),u+=t.size;}));}else {var c=0;a.forEach((function(t){for(var e=n.readSync(t.dataId),r=0,o=0;o<t.shape[0];++o)for(var a=o*i[1]+c,u=0;u<t.shape[1];++u)s[a+u]=e[r++];c+=t.shape[1];}));}var l=Sn(t.map((function(t){return t.shape})),e);return Fn(s,l,t[0].dtype)},o.prototype.neg=function(t){return Hh(t,"neg"),this.multiply(On(-1),t)},o.prototype.add=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),(function(t,e,n,r){return {real:t+n,imag:e+r}})):this.broadcastedBinaryOp(t,e,Dt(t.dtype,e.dtype),(function(t,e){return t+e}))},o.prototype.addN=function(t){var e=this;Hh(t,"addN");for(var n=t.map((function(t){return e.readSync(t.dataId)})),r=dr(t[0].shape,t[0].dtype),o=r.values,a=0;a<t.length;a++)for(var i=n[a],s=0;s<o.length;s++)o[s]+=i[s];return r.toTensor()},o.prototype.softmax=function(t,e){var n=O([e],t.shape),r=this.max(t,n),o=wn(r.shape,n),a=this.subtract(t,r.reshape(o)),i=this.exp(a),s=this.sum(i,n).reshape(o);return this.realDivide(i,s)},o.prototype.subtract=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),(function(t,e,n,r){return {real:t-n,imag:e-r}})):this.broadcastedBinaryOp(t,e,Dt(t.dtype,e.dtype),(function(t,e){return t-e}))},o.prototype.pow=function(t,e){return Hh([t,e],"pow"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.pow(t,e)}))},o.prototype.batchMatMul=function(t,e,n,r){Hh([t,e],"matMul");for(var o=n?t.shape[1]:t.shape[2],a=n?t.shape[2]:t.shape[1],i=r?e.shape[1]:e.shape[2],s=t.shape[0],u=this.readSync(t.dataId),c=this.readSync(e.dataId),l=n?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],h=l[0],f=l[1],d=l[2],p=r?[1,e.strides[1],e.strides[0]]:[e.strides[1],1,e.strides[0]],v=p[0],m=p[1],g=p[2],y=a*i,x=dr([s,a,i],t.dtype),b=x.values,w=this.blockSize,C=0;C<s;C++)for(var E=0;E<a;E+=w)for(var R=0;R<i;R+=w)for(var I=0;I<o;I+=w)for(var k=Math.min(E+w,a),S=Math.min(R+w,i),A=Math.min(I+w,o),D=E;D<k;D++)for(var T=R;T<S;T++){for(var N=0,F=I;F<A;F++)N+=u[C*h+D*f+F*d]*c[F*v+T*m+C*g];b[C*y+(D*i+T)]+=N;}return x.toTensor()},o.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,s=t.preluActivationWeights,u=this.batchMatMul(e,n,r,o);return a&&(u=this.add(u,a)),i&&(u=qh(this,u,i,s)),u},o.prototype.multiply=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),(function(t,e,n,r){return {real:t*n-e*r,imag:t*r+e*n}})):this.broadcastedBinaryOp(t,e,Dt(t.dtype,e.dtype),(function(t,e){return t*e}))},o.prototype.realDivide=function(t,e){Hh([t,e],"realDivide");return this.broadcastedBinaryOp(t,e,"float32",(function(t,e){return t/e}))},o.prototype.floorDiv=function(t,e){Hh([t,e],"floorDiv");return this.broadcastedBinaryOp(t,e,"int32",(function(t,e){return Math.floor(t/e)}))},o.prototype.sum=function(t,e){Hh(t,"sum"),Cn("sum",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,Dt(t.dtype,"int32")),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=0,f=0;f<i;++f)h+=u[l+f];s[c]=h;}return a},o.prototype.prod=function(t,e){Hh(t,"sum");for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,Dt(t.dtype,"int32")),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=1,f=0;f<i;++f)h*=u[l+f];s[c]=h;}return a},o.prototype.unsortedSegmentSum=function(t,e,n){Hh(t,"unsortedSegmentSum");for(var r=[],o=t.rank-e.rank,a=0;a<o;++a)e=e.expandDims(a+1);for(a=0;a<n;++a){var i=On(a,"int32"),s=Rc(i,e).asType("float32").mul(t).sum(0);r.push(s);}return Pr(r)},o.prototype.argMin=function(t,e){Hh(t,"argMin");var n=[e];Cn("argMin",n,t.rank);for(var r=bn(t.shape,n),o=r[0],a=r[1],i=Gn(o,"int32"),s=k(a),u=this.readSync(i.dataId),c=this.readSync(t.dataId),l=0;l<u.length;++l){for(var h=l*s,f=c[h],d=0,p=0;p<s;++p){var v=c[h+p];v<f&&(f=v,d=p);}u[l]=d;}return i},o.prototype.argMax=function(t,e){Hh(t,"argMax");var n=[e];Cn("argMax",n,t.rank);for(var r=bn(t.shape,n),o=r[0],a=r[1],i=Gn(o,"int32"),s=k(a),u=this.readSync(i.dataId),c=this.readSync(t.dataId),l=0;l<u.length;++l){for(var h=l*s,f=c[h],d=0,p=0;p<s;++p){var v=c[h+p];v>f&&(f=v,d=p);}u[l]=d;}return i},o.prototype.cumsum=function(t,e,n,r){if(Hh(t,"cumsum"),e!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+e);for(var o=Dt(t.dtype,"int32"),a=Gn(t.shape,o),i=this.readSync(a.dataId),s=this.readSync(t.dataId),u=t.shape[t.rank-1],c=r?function(t,e){return t+u-e-1}:function(t,e){return t+e},l=0;l<s.length;l+=u)for(var h=0;h<u;h++){var f=c(l,h);if(0===h)i[f]=n?0:s[f];else {var d=c(l,h-1);i[f]=n?s[d]+i[d]:s[f]+i[d];}}return a},o.prototype.equal=function(t,e){return Hh([t,e],"equal"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t===e?1:0}))},o.prototype.notEqual=function(t,e){return Hh([t,e],"notEqual"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t!==e?1:0}))},o.prototype.less=function(t,e){return Hh([t,e],"less"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t<e?1:0}))},o.prototype.lessEqual=function(t,e){return Hh([t,e],"lessEqual"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t<=e?1:0}))},o.prototype.greater=function(t,e){return Hh([t,e],"greater"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t>e?1:0}))},o.prototype.greaterEqual=function(t,e){return Hh([t,e],"greaterEqual"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t>=e?1:0}))},o.prototype.logicalNot=function(t){Hh(t,"logicalNot");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)n[r]=e[r]?0:1;return this.makeOutput(n,t.shape,"bool")},o.prototype.logicalAnd=function(t,e){return Hh([t,e],"logicalAnd"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t&&e}))},o.prototype.logicalOr=function(t,e){return Hh([t,e],"logicalOr"),this.broadcastedBinaryOp(t,e,"bool",(function(t,e){return t||e}))},o.prototype.select=function(t,e,n){Hh([t,e,n],"select");for(var r=this.readSync(t.dataId),o=this.readSync(e.dataId),a=this.readSync(n.dataId),i=Gn(e.shape,Dt(e.dtype,n.dtype)),s=this.readSync(i.dataId),u=0,c=0===t.rank||t.rank>1||1===e.rank?1:k(e.shape.slice(1)),l=0;l<r.length;l++)for(var h=0;h<c;h++)1===r[l]?s[u++]=o[l]:s[u++]=a[l];return i},o.prototype.where=function(t){Hh([t],"where");var e=this.readSync(t.dataId);return na(t.shape,e)},o.prototype.topk=function(t,e,n){return Hh(t,"topk"),ea(this.readSync(t.dataId),t.shape,t.dtype,e)},o.prototype.min=function(t,e){Hh(t,"min"),Cn("min",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];d<h&&(h=d);}s[c]=h;}return a},o.prototype.minimum=function(t,e){return Hh([t,e],"minimum"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.min(t,e)}))},o.prototype.mod=function(t,e){return Hh([t,e],"mod"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){var n=t%e;return t<0&&e<0||t>=0&&e>=0?n:(n+e)%e}))},o.prototype.max=function(t,e){Hh(t,"max"),Cn("max",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];d>h&&(h=d);}s[c]=h;}return a},o.prototype.maximum=function(t,e){return Hh([t,e],"maximum"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.max(t,e)}))},o.prototype.all=function(t,e){Hh(t,"all"),Cn("all",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];h=h&&d;}s[c]=h;}return a},o.prototype.any=function(t,e){Hh(t,"any"),Cn("any",e,t.rank);for(var n=bn(t.shape,e),r=n[0],o=n[1],a=Gn(r,t.dtype),i=k(o),s=this.readSync(a.dataId),u=this.readSync(t.dataId),c=0;c<s.length;++c){for(var l=c*i,h=u[l],f=0;f<i;++f){var d=u[l+f];h=h||d;}s[c]=h;}return a},o.prototype.squaredDifference=function(t,e){return Hh([t,e],"squaredDifference"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){var n=t-e;return n*n}))},o.prototype.ceil=function(t){Hh(t,"ceil");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.ceil(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.floor=function(t){Hh(t,"floor");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.floor(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.sign=function(t){Hh(t,"x");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)e[r]<0?n[r]=-1:e[r]>0?n[r]=1:n[r]=0;return this.makeOutput(n,t.shape,"float32")},o.prototype.isNaN=function(t){Hh(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isNaN(e[r])&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.isInf=function(t){Hh(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Math.abs(e[r])===1/0&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.isFinite=function(t){Hh(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isFinite(e[r])&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.round=function(t){Hh(t,"round");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=Math.floor(e[r]);e[r]-o<.5?n[r]=Math.floor(e[r]):e[r]-o>.5?n[r]=Math.ceil(e[r]):n[r]=o%2==0?o:o+1;}return this.makeOutput(n,t.shape,"float32")},o.prototype.exp=function(t){Hh(t,"exp");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.exp(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.expm1=function(t){Hh(t,"expm1");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.expm1(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.log=function(t){Hh(t,"log");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.log1p=function(t){Hh(t,"log1p");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log1p(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.sqrt=function(t){Hh(t,"sqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.sqrt(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.rsqrt=function(t){Hh(t,"rsqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=1/Math.sqrt(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.reciprocal=function(t){Hh(t,"reciprocal");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=1/e[r];return this.makeOutput(n,t.shape,"float32")},o.prototype.linear=function(t){return t},o.prototype.relu=function(t){Hh(t,"relu");for(var e=Gn(t.shape,t.dtype),n=this.readSync(e.dataId),r=this.readSync(t.dataId),o=0;o<r.length;++o)n[o]=Math.max(0,r[o]);return e},o.prototype.relu6=function(t){Hh(t,"relu");for(var e=Gn(t.shape,t.dtype),n=this.readSync(e.dataId),r=this.readSync(t.dataId),o=0;o<r.length;++o)n[o]=Math.min(Math.max(0,r[o]),6);return e},o.prototype.prelu=function(t,e){return Hh([t,e],"prelu"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return t<0?e*t:t}))},o.prototype.elu=function(t){Hh(t,"elu");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=n[r];e[r]=o>=0?o:Math.exp(o)-1;}return this.makeOutput(e,t.shape,"float32")},o.prototype.eluDer=function(t,e){Hh([t,e],"eluDer");for(var n=new Float32Array(e.size),r=this.readSync(e.dataId),o=this.readSync(t.dataId),a=0;a<r.length;++a){var i=r[a];n[a]=i>=1?o[a]:o[a]*(i+1);}return this.makeOutput(n,e.shape,"float32")},o.prototype.selu=function(t){Hh(t,"selu");for(var e=bs,n=ws,r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>=0?n*i:e*(Math.exp(i)-1);}return this.makeOutput(r,t.shape,"float32")},o.prototype.clip=function(t,e,n){Hh(t,"clip");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>n?n:i<e?e:i;}return this.makeOutput(r,t.shape,"float32")},o.prototype.abs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.abs(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.complexAbs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<t.size;++r){var o=n[2*r],a=n[2*r+1];e[r]=Math.hypot(o,a);}return this.makeOutput(e,t.shape,"float32")},o.prototype.int=function(t){Hh(t,"int");for(var e=new Int32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=n[r];return this.makeOutput(e,t.shape,"int32")},o.prototype.sigmoid=function(t){Hh(t,"sigmoid");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=1/(1+Math.exp(-n[r]));return this.makeOutput(e,t.shape,"float32")},o.prototype.softplus=function(t){Hh(t,"softplus");for(var e=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o]>-e,i=r[o]<e,s=Math.exp(r[o]),u=void 0;u=i?s:a?r[o]:Math.log(1+s),n[o]=u;}return this.makeOutput(n,t.shape,"float32")},o.prototype.sin=function(t){Hh(t,"sin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sin(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.cos=function(t){Hh(t,"cos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cos(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.tan=function(t){Hh(t,"tan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.tan(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.asin=function(t){Hh(t,"asin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asin(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.acos=function(t){Hh(t,"acos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acos(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atan=function(t){Hh(t,"atan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atan(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atan2=function(t,e){return Hh([t,e],"atan2"),this.broadcastedBinaryOp(t,e,t.dtype,(function(t,e){return Math.atan2(t,e)}))},o.prototype.sinh=function(t){Hh(t,"sinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sinh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.cosh=function(t){Hh(t,"cosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cosh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.tanh=function(t){Hh(t,"tanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=D(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.asinh=function(t){Hh(t,"asinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asinh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.acosh=function(t){Hh(t,"acosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acosh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atanh=function(t){Hh(t,"atanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atanh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.erf=function(t){Hh(t,"erf");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=Math.sign(n[r]),a=Math.abs(n[r]),i=1/(1+.3275911*a);e[r]=o*(1-((((1.061405429*i-1.453152027)*i+1.421413741)*i-.284496736)*i+.254829592)*i*Math.exp(-a*a));}return this.makeOutput(e,t.shape,"float32")},o.prototype.step=function(t,e){void 0===e&&(e=0),Hh(t,"step");for(var n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o];isNaN(a)?n[o]=NaN:n[o]=a>0?1:e;}return this.makeOutput(n,t.shape,"float32")},o.prototype.fusedConv2d=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,i=t.preluActivationWeights,s=this.conv2d(e,n,r);return o&&(s=this.add(s,o)),a&&(s=qh(this,s,a,i)),s},o.prototype.conv2d=function(t,e,n){Hh([t,e],"conv2d");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,c="channelsLast"===n.dataFormat,l=dr(n.outShape,t.dtype),h=t.strides[0],f=c?t.strides[1]:t.strides[2],d=c?t.strides[2]:1,p=c?1:t.strides[1],v=l.strides[0],m=c?l.strides[1]:l.strides[2],g=c?l.strides[2]:1,y=c?1:l.strides[1],x=this.readSync(t.dataId),b=this.readSync(e.dataId),w=l.values,C=0;C<n.batchSize;++C)for(var E=C*h,R=C*v,I=0;I<n.outHeight;++I)for(var k=R+I*m,S=I*n.strideHeight-u,A=0;A<r;A++){var D=S+A*a;if(!(D<0||D>=n.inHeight))for(var T=A*e.strides[0],N=E+D*f,F=0;F<n.outWidth;++F)for(var _=k+F*g,O=F*n.strideWidth-s,M=0;M<o;M++){var B=O+M*i;if(!(B<0||B>=n.inWidth))for(var P=N+B*d,L=T+M*e.strides[1],W=0;W<n.inChannels;++W){for(var U=x[P+W*p],V=0;V<n.outChannels;++V)w[_+V*y]+=U*b[L+V];L+=n.outChannels;}}}return l.toTensor()},o.prototype.conv3d=function(t,e,n){for(var r=n.filterDepth,o=n.filterHeight,a=n.filterWidth,i=n.dilationDepth,s=n.dilationHeight,u=n.dilationWidth,c=n.padInfo.front,l=n.padInfo.left,h=n.padInfo.top,f=dr(n.outShape,t.dtype),d=this.readSync(t.dataId),p=this.readSync(e.dataId),v=f.values,m=0;m<n.batchSize;++m)for(var g=m*t.strides[0],y=m*f.strides[0],x=0;x<n.outDepth;++x)for(var b=y+x*f.strides[1],w=x*n.strideDepth-c,C=0;C<r;C++){var E=w+C*i;if(!(E<0||E>=n.inDepth))for(var R=C*e.strides[0],I=g+E*t.strides[1],k=0;k<n.outHeight;++k)for(var S=b+k*f.strides[2],A=k*n.strideHeight-h,D=0;D<o;D++){var T=A+D*s;if(!(T<0||T>=n.inHeight))for(var N=R+D*e.strides[1],F=I+T*t.strides[2],_=0;_<n.outWidth;++_)for(var O=S+_*n.outChannels,M=_*n.strideWidth-l,B=0;B<a;B++){var P=M+B*u;if(!(P<0||P>=n.inWidth))for(var L=N+B*e.strides[2],W=F+P*n.inChannels,U=L,V=0;V<n.inChannels;++V){for(var z=d[W+V],G=0;G<n.outChannels;++G)v[O+G]+=z*p[U+G];U+=n.outChannels;}}}}return f.toTensor()},o.prototype.conv2dDerInput=function(t,e,n){Hh([t,e],"conv2dDerInput");for(var r=dr(n.inShape,"float32"),o=r.values,a=this.readSync(t.dataId),i=this.readSync(e.dataId),s=e.strides,u=s[0],c=s[1],l=s[2],h=n.batchSize,f=n.filterHeight,d=n.filterWidth,p=n.inChannels,v=n.inHeight,m=n.inWidth,g=n.outChannels,y=n.outHeight,x=n.outWidth,b=n.strideHeight,w=n.strideWidth,C=n.dataFormat,E=f-1-n.padInfo.top,R=d-1-n.padInfo.left,I="channelsLast"===C,k=r.strides[0],S=I?r.strides[1]:r.strides[2],A=I?r.strides[2]:1,D=I?1:r.strides[1],T=t.strides[0],N=I?t.strides[1]:t.strides[2],F=I?t.strides[2]:1,_=I?1:t.strides[1],O=0;O<h;++O)for(var M=0;M<p;++M)for(var B=0;B<v;++B)for(var P=B-E,L=Math.max(0,Math.ceil(P/b)),W=Math.min(y,(f+P)/b),U=0;U<m;++U){for(var V=U-R,z=Math.max(0,Math.ceil(V/w)),G=Math.min(x,(d+V)/w),H=0,q=L;q<W;++q)for(var K=q*b-P,j=z;j<G;++j)for(var X=T*O+N*q+F*j,Y=u*(f-1-K)+c*(d-1-(j*w-V))+l*M,$=0;$<g;++$){H+=a[X+_*$]*i[Y+$];}o[k*O+S*B+A*U+D*M]=H;}return r.toTensor()},o.prototype.conv3dDerInput=function(t,e,n){for(var r=dr(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],c=a[3],l=this.readSync(t.dataId),h=t.strides,f=h[0],d=h[1],p=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=n.batchSize,E=n.filterDepth,R=n.filterHeight,I=n.filterWidth,k=n.inChannels,S=n.inDepth,A=n.inHeight,D=n.inWidth,T=n.outChannels,N=n.outDepth,F=n.outHeight,_=n.outWidth,O=n.strideDepth,M=n.strideHeight,B=n.strideWidth,P=E-1-n.padInfo.front,L=R-1-n.padInfo.top,W=I-1-n.padInfo.left,U=0;U<C;++U)for(var V=0;V<k;++V)for(var z=0;z<S;++z)for(var G=z-P,H=Math.max(0,Math.ceil(G/O)),q=Math.min(N,(E+G)/O),K=0;K<A;++K)for(var j=K-L,X=Math.max(0,Math.ceil(j/M)),Y=Math.min(F,(R+j)/M),$=0;$<D;++$){for(var Q=$-W,J=Math.max(0,Math.ceil(Q/B)),Z=Math.min(_,(I+Q)/B),tt=0,et=H;et<q;++et)for(var nt=et*O-G,rt=X;rt<Y;++rt)for(var ot=rt*M-j,at=J;at<Z;++at)for(var it=f*U+d*et+p*rt+v*at,st=y*(E-1-nt)+x*(R-1-ot)+b*(I-1-(at*B-Q))+w*V,ut=0;ut<T;++ut){tt+=l[it+ut]*m[st+ut];}o[i*U+s*z+u*K+c*$+V]=tt;}return r.toTensor()},o.prototype.conv2dDerFilter=function(t,e,n){Hh([t,e],"conv2dDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s="channelsLast"===n.dataFormat,u=dr(n.filterShape,"float32"),c=n.padInfo.left,l=n.padInfo.top,h=this.bufferSync(t),f=this.bufferSync(e),d=0;d<a;++d)for(var p=Math.max(0,Math.ceil((l-d)/r)),v=Math.min(n.outHeight,(n.inHeight+l-d)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((c-m)/o)),y=Math.min(n.outWidth,(n.inWidth+c-m)/o),x=0;x<n.inChannels;++x)for(var b=0;b<n.outChannels;++b){for(var w=0,C=0;C<n.batchSize;++C)for(var E=p;E<v;++E)for(var R=d+E*r-l,I=g;I<y;++I){var k=m+I*o-c;w+=s?h.get(C,R,k,x)*f.get(C,E,I,b):h.get(C,x,R,k)*f.get(C,b,E,I);}u.set(w,d,m,x,b);}return u.toTensor()},o.prototype.conv3dDerFilter=function(t,e,n){for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,s=n.filterHeight,u=n.filterWidth,c=dr(n.filterShape,"float32"),l=c.values,h=c.strides,f=h[0],d=h[1],p=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=this.readSync(t.dataId),E=t.strides,R=E[0],I=E[1],k=E[2],S=E[3],A=n.padInfo.front,D=n.padInfo.left,T=n.padInfo.top,N=0;N<i;++N)for(var F=Math.max(0,Math.ceil((A-N)/r)),_=Math.min(n.outDepth,(n.inDepth+A-N)/r),O=N*f,M=0;M<s;++M)for(var B=Math.max(0,Math.ceil((T-M)/o)),P=Math.min(n.outHeight,(n.inHeight+T-M)/o),L=M*d+O,W=0;W<u;++W)for(var U=Math.max(0,Math.ceil((D-W)/a)),V=Math.min(n.outWidth,(n.inWidth+D-W)/a),z=W*p+L,G=0;G<n.inChannels;++G)for(var H=G*v+z,q=0;q<n.outChannels;++q){for(var K=0,j=0;j<n.batchSize;++j)for(var X=j*R,Y=j*y,$=F;$<_;++$)for(var Q=(N+$*r-A)*I+X,J=$*x+Y,Z=B;Z<P;++Z)for(var tt=(M+Z*o-T)*k+Q,et=Z*b+J,nt=U;nt<V;++nt){var rt=nt*w+et;K+=C[(W+nt*a-D)*S+tt+G]*m[rt+q];}l[H+q]=K;}return c.toTensor()},o.prototype.fusedDepthwiseConv2D=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,i=t.preluActivationWeights,s=this.depthwiseConv2D(e,n,r);return o&&(s=this.add(s,o)),a&&(s=qh(this,s,a,i)),s},o.prototype.depthwiseConv2D=function(t,e,n){Hh([t,e],"depthwiseConv2D");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,c=n.outChannels/n.inChannels,l=dr(n.outShape,t.dtype),h=this.readSync(t.dataId),f=this.readSync(e.dataId),d=l.values,p=0;p<n.batchSize;++p)for(var v=p*t.strides[0],m=p*l.strides[0],g=0;g<n.outHeight;++g)for(var y=m+g*l.strides[1],x=g*n.strideHeight-s,b=0;b<r;++b){var w=x+b*a;if(!(w<0||w>=n.inHeight))for(var C=b*e.strides[0],E=v+w*t.strides[1],R=0;R<n.outWidth;++R)for(var I=y+R*l.strides[2],k=R*n.strideWidth-u,S=0;S<o;++S){var A=k+S*i;if(!(A<0||A>=n.inWidth))for(var D=C+S*e.strides[1],T=E+A*n.inChannels,N=I,F=D,_=0;_<n.inChannels;++_){for(var O=h[T+_],M=0;M<c;++M)d[N+M]+=O*f[F+M];N+=c,F+=c;}}}return l.toTensor()},o.prototype.depthwiseConv2DDerInput=function(t,e,n){Hh([t,e],"depthwiseConv2DDerInput");for(var r=dr(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],c=this.readSync(t.dataId),l=t.strides,h=l[0],f=l[1],d=l[2],p=this.readSync(e.dataId),v=e.strides,m=v[0],g=v[1],y=v[2],x=n.batchSize,b=n.filterHeight,w=n.filterWidth,C=n.inChannels,E=n.inHeight,R=n.inWidth,I=n.outChannels,k=n.outHeight,S=n.outWidth,A=n.strideHeight,D=n.strideWidth,T=b-1-n.padInfo.top,N=w-1-n.padInfo.left,F=I/C,_=0;_<x;++_)for(var O=0;O<C;++O)for(var M=0;M<E;++M)for(var B=M-T,P=Math.max(0,Math.ceil(B/A)),L=Math.min(k,(b+B)/A),W=0;W<R;++W){for(var U=W-N,V=Math.max(0,Math.ceil(U/D)),z=Math.min(S,(w+U)/D),G=0,H=P;H<L;++H)for(var q=H*A-B,K=V;K<z;++K)for(var j=h*_+f*H+d*K,X=m*(b-1-q)+g*(w-1-(K*D-U))+y*O,Y=0;Y<F;++Y){G+=c[j+(O*F+Y)]*p[X+Y];}o[i*_+s*M+u*W+O]=G;}return r.toTensor()},o.prototype.depthwiseConv2DDerFilter=function(t,e,n){Hh([t,e],"depthwiseConv2DDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=dr(n.filterShape,"float32"),u=n.padInfo.left,c=n.padInfo.top,l=n.outChannels/n.inChannels,h=this.bufferSync(t),f=this.bufferSync(e),d=0;d<a;++d)for(var p=Math.max(0,Math.ceil((c-d)/r)),v=Math.min(n.outHeight,(n.inHeight+c-d)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((u-m)/o)),y=Math.min(n.outWidth,(n.inWidth+u-m)/o),x=0;x<n.outChannels;++x){for(var b=Math.trunc(x/l),w=x%l,C=0,E=0;E<n.batchSize;++E)for(var R=p;R<v;++R)for(var I=d+R*r-c,k=g;k<y;++k){var S=m+k*o-u;C+=h.get(E,I,S,b)*f.get(E,R,k,x);}s.set(C,d,m,b,w);}return s.toTensor()},o.prototype.tile=function(t,e){return Hh(t,"tile"),ta(this.bufferSync(t),e)},o.prototype.pad=function(t,e,n){Hh(t,"pad");var r=e.map((function(e,n){return e[0]+t.shape[n]+e[1]})),o=e.map((function(t){return t[0]})),a=this.bufferSync(t),i=dr(r,t.dtype);0!==n&&i.values.fill(n);for(var s=0;s<t.size;s++){var u=a.indexToLoc(s),c=u.map((function(t,e){return t+o[e]}));i.set.apply(i,[a.get.apply(a,u)].concat(c));}return i.toTensor()},o.prototype.transpose=function(t,e){Hh(t,"transpose");for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[e[r]];var o=this.readSync(t.dataId),a=dr(n,t.dtype),i=this.bufferSync(t);for(r=0;r<t.size;++r){for(var s=i.indexToLoc(r),u=new Array(s.length),c=0;c<u.length;c++)u[c]=s[e[c]];var l=a.locToIndex(u);a.values[l]=o[r];}return a.toTensor()},o.prototype.gather=function(t,e,n){Hh([t,e],"gather");var r=t.shape.slice(),o=this.readSync(e.dataId);r[n]=o.length;for(var a=dr(r,t.dtype),i=this.bufferSync(t),s=0;s<a.size;++s){var u=a.indexToLoc(s),c=u.slice();c[n]=o[u[n]];var l=i.locToIndex(c);a.values[s]=i.values[l];}return a.toTensor()},o.prototype.batchToSpaceND=function(t,e,n){Hh([t],"batchToSpaceND");var r=e.reduce((function(t,e){return t*e})),o=zr(t.shape,e,r),a=Gr(o.length,e.length),i=Hr(t.shape,e,r),s=qr(n,e.length),u=Kr(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(s,u)},o.prototype.spaceToBatchND=function(t,e,n){Hh([t],"spaceToBatchND");var r=e.reduce((function(t,e){return t*e})),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),s=zr(i.shape,e,r,!1),u=Gr(s.length,e.length,!1),c=Hr(i.shape,e,r,!1);return i.reshape(s).transpose(u).reshape(c)},o.prototype.pool=function(t,e,n){Hh(t,"pool");for(var r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=e.padInfo.top,l=e.padInfo.left,h="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,f=this.readSync(t.dataId),d=dr(e.outShape,t.dtype),p=d.values,v=e.outShape[1]*e.outShape[2]*e.outShape[3],m=e.outShape[2]*e.outShape[3],g=e.outShape[3],y=0;y<e.batchSize;++y)for(var x=y*v,b=y*t.strides[0],w=0;w<e.inChannels;++w)for(var C=0;C<e.outHeight;++C)for(var E=C*r-c,R=Math.max(0,E),I=Math.min(e.inHeight,s+E),k=x+C*m,S=0;S<e.outWidth;++S){for(var A=S*o-l,D=Math.max(0,A),T=Math.min(e.inWidth,u+A),N=h,F=0,_=0,O=R;O<I;O+=a){for(var M=b+O*t.strides[1],B=D;B<T;B+=i){var P=f[M+B*t.strides[2]+w];"max"===n&&P>N?N=P:"avg"===n&&(F+=P,_++);}if(isNaN(N))break}p[k+S*g+w]="avg"===n?F/_:N;}return d.toTensor()},o.prototype.maxPool=function(t,e){return this.pool(t,e,"max")},o.prototype.maxPoolPositions=function(t,e){for(var n=dr(e.outShape,"int32"),r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=e.padInfo.top,l=e.padInfo.left,h=this.bufferSync(t),f=0;f<e.batchSize;++f)for(var d=0;d<e.inChannels;++d)for(var p=0;p<e.outHeight;++p){for(var v=p*r-c,m=v;m<0;)m+=a;for(var g=Math.min(e.inHeight,s+v),y=0;y<e.outWidth;++y){for(var x=y*o-l,b=x;b<0;)b+=i;for(var w=Math.min(e.inWidth,u+x),C=Number.NEGATIVE_INFINITY,E=-1,R=m;R<g;R+=a)for(var I=R-v,k=b;k<w;k+=i){var S=k-x,A=h.get(f,R,k,d);A>C&&(C=A,E=I*u+S);}n.set(E,f,p,y,d);}}return n.toTensor()},o.prototype.maxPoolBackprop=function(t,e,n,r){Hh([e,n],"maxPoolBackprop");for(var o=this.maxPoolPositions(e,r),a=r.strideHeight,i=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,h=l-1-r.padInfo.left,f=c-1-r.padInfo.top,d=dr(e.shape,"float32"),p=this.bufferSync(o),v=this.bufferSync(t),m=0;m<r.batchSize;++m)for(var g=0;g<r.inChannels;++g)for(var y=0;y<r.inHeight;++y)for(var x=0;x<r.inWidth;++x){for(var b=y-f,w=x-h,C=0,E=0;E<c;E+=s){var R=(b+E)/a;if(!(R<0||R>=r.outHeight||Math.floor(R)!==R))for(var I=0;I<l;I+=u){var k=(w+I)/i;if(!(k<0||k>=r.outWidth||Math.floor(k)!==k)){var S=c*l-1-p.get(m,R,k,g)===E*l+I?1:0;if(0!==S)C+=v.get(m,R,k,g)*S;}}}d.set(C,m,y,x,g);}return d.toTensor()},o.prototype.avgPoolBackprop=function(t,e,n){Hh([t,e],"avgPoolBackprop");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=l-1-n.padInfo.left,f=c-1-n.padInfo.top,d=dr(e.shape,"float32"),p=1/(a*i),v=this.bufferSync(t),m=0;m<n.batchSize;++m)for(var g=0;g<n.inChannels;++g)for(var y=0;y<n.inHeight;++y)for(var x=0;x<n.inWidth;++x){for(var b=y-f,w=x-h,C=0,E=0;E<c;E+=s){var R=(b+E)/r;if(!(R<0||R>=n.outHeight||Math.floor(R)!==R))for(var I=0;I<l;I+=u){var k=(w+I)/o;if(!(k<0||k>=n.outWidth||Math.floor(k)!==k))C+=v.get(m,R,k,g);}}d.set(C*p,m,y,x,g);}return d.toTensor()},o.prototype.pool3d=function(t,e,n){Hh(t,"pool3d");for(var r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,s=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.front,d=e.padInfo.top,p=e.padInfo.left,v="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=this.readSync(t.dataId),g=dr(e.outShape,t.dtype),y=g.values,x=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],b=e.outShape[2]*e.outShape[3]*e.outShape[4],w=e.outShape[3]*e.outShape[4],C=e.outShape[4],E=0;E<e.batchSize;++E)for(var R=E*x,I=E*t.strides[0],k=0;k<e.inChannels;++k)for(var S=0;S<e.outDepth;++S){for(var A=S*r-f,D=A;D<0;)D+=i;for(var T=Math.min(e.inDepth,c+A),N=R+S*b,F=0;F<e.outHeight;++F){for(var _=F*o-d,O=_;O<0;)O+=s;for(var M=Math.min(e.inHeight,l+_),B=N+F*w,P=0;P<e.outWidth;++P){for(var L=P*a-p,W=L;W<0;)W+=u;for(var U=Math.min(e.inWidth,h+L),V=B+P*C,z=v,G=0,H=0,q=D;q<T;q+=i){for(var K=I+q*t.strides[1],j=O;j<M;j+=s){for(var X=K+j*t.strides[2],Y=W;Y<U;Y+=u){var $=m[X+Y*t.strides[3]+k];if("max"===n&&$>z?z=$:"avg"===n&&(G+=$,H++),isNaN(z))break}if(isNaN(z))break}if(isNaN(z))break}y[V+k]="avg"===n?G/H:z;}}}return g.toTensor()},o.prototype.avgPool3d=function(t,e){return Hh(t,"avgPool3d"),this.pool3d(t,e,"avg").toFloat()},o.prototype.avgPool3dBackprop=function(t,e,n){Hh([t,e],"avgPool3dBackprop");for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,s=n.filterHeight,u=n.filterWidth,c=n.dilationDepth,l=n.dilationHeight,h=n.dilationWidth,f=n.effectiveFilterDepth,d=n.effectiveFilterHeight,p=n.effectiveFilterWidth,v=f-1-n.padInfo.front,m=p-1-n.padInfo.left,g=d-1-n.padInfo.top,y=dr(e.shape,"float32"),x=1/(i*s*u),b=this.bufferSync(t),w=0;w<n.batchSize;++w)for(var C=0;C<n.inChannels;++C)for(var E=0;E<n.inDepth;++E)for(var R=0;R<n.inHeight;++R)for(var I=0;I<n.inWidth;++I){for(var k=E-v,S=R-g,A=I-m,D=0,T=0;T<f;T+=c){var N=(k+T)/r;if(!(N<0||N>=n.outDepth||Math.floor(N)!==N))for(var F=0;F<d;F+=l){var _=(S+F)/o;if(!(_<0||_>=n.outHeight||Math.floor(_)!==_))for(var O=0;O<p;O+=h){var M=(A+O)/a;if(!(M<0||M>=n.outWidth||Math.floor(M)!==M))D+=b.get(w,N,_,M,C);}}}y.set(D*x,w,E,R,I,C);}return y.toTensor()},o.prototype.maxPool3d=function(t,e){return Hh(t,"maxPool3d"),this.pool3d(t,e,"max").toFloat()},o.prototype.maxPool3dPositions=function(t,e){for(var n=dr(e.outShape,"int32"),r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,s=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.front,d=e.padInfo.top,p=e.padInfo.left,v=this.bufferSync(t),m=0;m<e.batchSize;++m)for(var g=0;g<e.inChannels;++g)for(var y=0;y<e.outDepth;++y){for(var x=y*r-f,b=x;b<0;)b+=i;for(var w=Math.min(e.inDepth,c+x),C=0;C<e.outHeight;++C){for(var E=C*o-d,R=E;R<0;)R+=s;for(var I=Math.min(e.inHeight,l+E),k=0;k<e.outWidth;++k){for(var S=k*a-p,A=S;A<0;)A+=u;for(var D=Math.min(e.inWidth,h+S),T=Number.NEGATIVE_INFINITY,N=-1,F=b;F<w;F+=i)for(var _=F-x,O=R;O<I;O+=s)for(var M=O-E,B=A;B<D;B+=u){var P=B-S,L=v.get(m,F,O,B,g);L>=T&&(T=L,N=_*l*h+M*l+P);}n.set(N,m,y,C,k,g);}}}return n.toTensor()},o.prototype.maxPool3dBackprop=function(t,e,n,r){Hh([e,n],"maxPool3dBackprop");for(var o=this.maxPool3dPositions(e,r),a=r.strideDepth,i=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,h=r.effectiveFilterDepth,f=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=h-1-r.padInfo.front,v=d-1-r.padInfo.left,m=f-1-r.padInfo.top,g=dr(e.shape,"float32"),y=this.bufferSync(o),x=this.bufferSync(t),b=0;b<r.batchSize;++b)for(var w=0;w<r.inChannels;++w)for(var C=0;C<r.inDepth;++C)for(var E=0;E<r.inHeight;++E)for(var R=0;R<r.inWidth;++R){for(var I=C-p,k=E-m,S=R-v,A=0,D=0;D<h;D+=u){var T=(I+D)/a;if(!(T<0||T>=r.outDepth||Math.floor(T)!==T))for(var N=0;N<f;N+=c){var F=(k+N)/i;if(!(F<0||F>=r.outHeight||Math.floor(F)!==F))for(var _=0;_<d;_+=l){var O=(S+_)/s;if(!(O<0||O>=r.outWidth||Math.floor(O)!==O)){var M=h*f*d-1-y.get(b,T,F,O,w)===D*f*d+N*d+_?1:0;if(0!==M)A+=x.get(b,T,F,O,w)*M;}}}}g.set(A,b,C,E,R,w);}return g.toTensor()},o.prototype.cast=function(t,e){return Po(t,e,this)},o.prototype.reshape=function(t,e){return Lo(t,e)},o.prototype.avgPool=function(t,e){return Hh(t,"avgPool"),this.pool(t,e,"avg").toFloat()},o.prototype.resizeBilinear=function(t,e,n,r){Hh(t,"resizeBilinear");for(var o=t.shape,a=o[0],i=o[1],s=o[2],u=o[3],c=this.readSync(t.dataId),l=new Float32Array(k([a,e,n,u])),h=[r&&e>1?i-1:i,r&&n>1?s-1:s],f=[r&&e>1?e-1:e,r&&n>1?n-1:n],d=0,p=h[0]/f[0],v=h[1]/f[1],m=0;m<a;m++)for(var g=0;g<e;g++)for(var y=p*g,x=Math.floor(y),b=y-x,w=Math.min(i-1,Math.ceil(y)),C=m*t.strides[0]+x*t.strides[1],E=m*t.strides[0]+w*t.strides[1],R=0;R<n;R++)for(var I=v*R,S=Math.floor(I),A=I-S,D=Math.min(s-1,Math.ceil(I)),T=C+S*t.strides[2],N=E+S*t.strides[2],F=C+D*t.strides[2],_=E+D*t.strides[2],O=0;O<u;O++){var M=c[T+O],B=c[N+O],P=M+(c[F+O]-M)*A,L=P+(B+(c[_+O]-B)*A-P)*b;l[d++]=L;}return Fn(l,[a,e,n,u])},o.prototype.resizeBilinearBackprop=function(t,e,n){Hh([t,e],"resizeBilinearBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=t.shape,c=u[1],l=u[2],h=new Float32Array(o*a*i*s),f=[n&&c>1?a-1:a,n&&l>1?i-1:i],d=[n&&c>1?c-1:c,n&&l>1?l-1:l],p=f[0]/d[0],v=f[1]/d[1],m=this.readSync(t.dataId),g=0,y=0;y<o;y++)for(var x=y*e.strides[0],b=0;b<c;b++)for(var w=b*p,C=Math.floor(w),E=Math.min(Math.ceil(w),a-1),R=x+C*e.strides[1],I=x+E*e.strides[1],k=w-C,S=1-k,A=0;A<l;A++)for(var D=A*v,T=Math.floor(D),N=Math.min(Math.ceil(D),i-1),F=D-T,_=1-F,O=R+T*e.strides[2],M=R+N*e.strides[2],B=I+T*e.strides[2],P=I+N*e.strides[2],L=S*_,W=S*F,U=k*_,V=k*F,z=0;z<s;z++){var G=m[g++];h[O+z]+=G*L,h[M+z]+=G*W,h[B+z]+=G*U,h[P+z]+=G*V;}return Ln(h,[o,i,a,s],e.dtype)},o.prototype.resizeNearestNeighbor=function(t,e,n,r){Hh(t,"resizeNearestNeighbor");for(var o=t.shape,a=o[0],i=o[1],s=o[2],u=o[3],c=this.readSync(t.dataId),l=new Float32Array(a*e*n*u),h=[r&&e>1?i-1:i,r&&n>1?s-1:s],f=[r&&e>1?e-1:e,r&&n>1?n-1:n],d=h[0]/f[0],p=h[1]/f[1],v=0,m=0;m<a;m++)for(var g=m*t.strides[0],y=0;y<e;y++)for(var x=d*y,b=g+Math.min(i-1,r?Math.round(x):Math.floor(x))*t.strides[1],w=0;w<n;w++)for(var C=p*w,E=b+Math.min(s-1,r?Math.round(C):Math.floor(C))*t.strides[2],R=0;R<u;R++){var I=c[E+R];l[v++]=I;}return Fn(l,[a,e,n,u],t.dtype)},o.prototype.resizeNearestNeighborBackprop=function(t,e,n){Hh([t,e],"resizeNearestNeighborBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=t.shape,c=u[1],l=u[2],h=new Float32Array(o*a*i*s),f=this.readSync(t.dataId),d=[n&&c>1?a-1:a,n&&l>1?i-1:i],p=[n&&c>1?c-1:c,n&&l>1?l-1:l],v=d[0]/p[0],m=d[1]/p[1],g=1/v,y=1/m,x=2*Math.ceil(g)+2,b=2*Math.ceil(y)+2,w=0;w<o;w++)for(var C=w*e.strides[0],E=0;E<a;E++)for(var R=C+E*e.strides[1],I=Math.floor(E*g),k=Math.floor(I-x/2),S=0;S<i;S++)for(var A=R+S*e.strides[2],D=Math.floor(S*y),T=Math.floor(D-b/2),N=0;N<s;N++){for(var F=0,_=0;_<x;_++){var O=_+k;if(!(O<0||O>=c)){var M=C+O*t.strides[1],B=O*v;if(E===Math.min(a-1,n?Math.round(B):Math.floor(B)))for(var P=0;P<b;P++){var L=P+T;if(!(L<0||L>=l)){var W=M+L*t.strides[2],U=L*m;S===Math.min(i-1,n?Math.round(U):Math.floor(U))&&(F+=f[W+N]);}}}}h[A+N]=F;}return Ln(h,e.shape,e.dtype)},o.prototype.batchNormalization=function(t,e,n,r,o,a){Hh([t,e,n,o,a],"batchNorm");for(var i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=o?this.readSync(o.dataId):new Float32Array([1]),l=a?this.readSync(a.dataId):new Float32Array([0]),h=new Float32Array(i.length),f=l.length,d=c.length,p=u.length,v=s.length,m=0,g=0,y=0,x=0,b=0;b<i.length;++b)h[b]=l[m++]+(i[b]-s[g++])*c[y++]/Math.sqrt(u[x++]+r),m>=f&&(m=0),g>=v&&(g=0),y>=d&&(y=0),x>=p&&(x=0);return Ln(h,t.shape)},o.prototype.localResponseNormalization4D=function(t,e,n,r,o){Hh(t,"localResponseNormalization4D");var a=t.shape[3],i=a-1,s=this.readSync(t.dataId),u=t.size,c=new Float32Array(u);function l(t){for(var n=t%a,r=t-n+Math.max(0,n-e),o=t-n+Math.min(n+e,i),u=0;r<=o;r++){var c=s[r];u+=c*c;}return u}for(var h=0;h<u;h++){var f=l(h),d=s[h]*Math.pow(n+r*f,-o);c[h]=d;}return Ln(c,t.shape)},o.prototype.LRNGrad=function(t,e,n,r,o,a,i){Hh(t,"LRNGrad");for(var s=t.shape[3],u=this.readSync(t.dataId),c=this.readSync(e.dataId),l=this.readSync(n.dataId),h=new Float32Array(t.size),f=t.size,d=0;d<f;d++){for(var p=d%s,v=d-p+Math.max(0,p-r),m=d-p+Math.min(s,p+r+1),g=0,y=v;y<m;y++)g+=Math.pow(c[y],2);g=a*g+o;for(y=v;y<m;y++){var x=-2*a*i*c[y]*l[d]/g;d===y&&(x+=Math.pow(g,-i)),x*=u[d],h[y]+=x;}}return Ln(h,t.shape)},o.prototype.multinomial=function(t,e,n,r){Hh(t,"multinomial");for(var o=e?t:go(t),a=o.shape[0],i=o.shape[1],s=Gn([a,n],"int32"),u=this.readSync(s.dataId),c=this.readSync(o.dataId),l=0;l<a;++l){var h=l*i,f=new Float32Array(i-1);f[0]=c[h];for(var d=1;d<f.length;++d)f[d]=f[d-1]+c[h+d];for(var p=cr(r.toString()),v=l*n,m=0;m<n;++m){var g=p();u[v+m]=f.length;for(var y=0;y<f.length;y++)if(g<f[y]){u[v+m]=y;break}}}return s},o.prototype.oneHot=function(t,e,n,r){Hh(t,"oneHot");var o=new Float32Array(t.size*e);o.fill(r);for(var a=this.readSync(t.dataId),i=0;i<t.size;++i)a[i]>=0&&a[i]<e&&(o[i*e+a[i]]=n);return Bn(o,[t.size,e],"int32")},o.prototype.nonMaxSuppression=function(t,e,n,r,o){return Hh(t,"nonMaxSuppression"),jo(this.readSync(t.dataId),this.readSync(e.dataId),n,r,o)},o.prototype.fft=function(t){return this.fftBatch(t,!1)},o.prototype.ifft=function(t){return this.fftBatch(t,!0)},o.prototype.fftBatch=function(t,e){for(var n=t.shape[0],r=t.shape[1],o=dr(t.shape,"float32"),a=dr(t.shape,"float32"),i=Tn(t).as2D(n,r),s=Nn(t).as2D(n,r),u=0;u<n;u++)for(var c=i.slice([u,0],[1,r]),l=s.slice([u,0],[1,r]),h=Dn(c,l),f=this.readSync(this.fftImpl(h,e).dataId),d=0;d<r;d++){var p=zo(f,d);o.values[u*r+d]=p.real,a.values[u*r+d]=p.imag;}return Dn(o.toTensor(),a.toTensor()).as2D(n,r)},o.prototype.fftImpl=function(t,e){var n=t.as1D(),r=n.size;if(this.isExponentOf2(r)){var o=this.fftRadix2(n,r,e).as2D(t.shape[0],t.shape[1]);return e&&(o=Dn(Tn(o).div(On(r)),Nn(o).div(On(r)))),o}var a=this.readSync(t.dataId),i=function(t){for(var e=new Float32Array(t.length/2),n=new Float32Array(t.length/2),r=0;r<t.length;r+=2)e[r/2]=t[r],n[r/2]=t[r+1];return {real:e,imag:n}}(this.fourierTransformByMatmul(a,r,e));return Dn(i.real,i.imag).as2D(t.shape[0],t.shape[1])},o.prototype.isExponentOf2=function(t){return 0==(t&t-1)},o.prototype.fftRadix2=function(t,e,n){if(1===e)return t;var r=this.readSync(t.dataId),o=e/2,a=function(t){for(var e=Math.ceil(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=0;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return {real:n,imag:r}}(r),i=Dn(a.real,a.imag).as1D(),s=function(t){for(var e=Math.floor(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=2;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return {real:n,imag:r}}(r),u=Dn(s.real,s.imag).as1D();i=this.fftRadix2(i,o,n),u=this.fftRadix2(u,o,n);var c=function(t,e){for(var n=new Float32Array(t/2),r=new Float32Array(t/2),o=0;o<Math.ceil(t/2);o++){var a=(e?2:-2)*Math.PI*(o/t);n[o]=Math.cos(a),r[o]=Math.sin(a);}return {real:n,imag:r}}(e,n),l=Dn(c.real,c.imag).mul(u),h=i.add(l),f=i.sub(l),d=Tn(h).concat(Tn(f)),p=Nn(h).concat(Nn(f));return Dn(d,p).as1D()},o.prototype.fourierTransformByMatmul=function(t,e,n){for(var r=new Float32Array(2*e),o=0;o<e;o++){for(var a=0,i=0,s=0;s<e;s++){var u=Ho(o*s,e,n),c=zo(t,s);a+=c.real*u.real-c.imag*u.imag,i+=c.real*u.imag+c.imag*u.real;}n&&(a/=e,i/=e),Go(r,a,i,o);}return r},o.prototype.depthToSpace=function(t,e,n){C("NHWC"===n,(function(){return "Only NHWC dataFormat supported on CPU for depthToSpace. Got "+n})),C(e>1,(function(){return "blockSize should be > 1 for depthToSpace, but was: "+e}));for(var r=t.shape[0],o=t.shape[1],a=t.shape[2],i=t.shape[3],s=o*e,u=a*e,c=i/(e*e),l=this.readSync(t.dataId),h=new Float32Array(r*s*u*c),f=0,d=0;d<r;++d)for(var p=0;p<s;++p)for(var v=Math.floor(p/e),m=p%e,g=0;g<u;++g)for(var y=Math.floor(g/e),x=(m*e+g%e)*c,b=0;b<c;++b){var w=b+x+i*(y+a*(v+o*d));h[f++]=l[w];}return Ln(h,[r,s,u,c])},o.prototype.broadcastedBinaryOp=function(t,e,n,r){var o=Ro(t.shape,e.shape),a=dr(o,n),i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=Co(t.shape,o),c=Co(e.shape,o),l=a.values;if(u.length+c.length===0)for(var h=0;h<l.length;++h)l[h]=r(i[h%i.length],s[h%s.length]);else {var f=this.bufferSync(t),d=this.bufferSync(e),p=function(n){var o=a.indexToLoc(n),h=o.slice(-t.rank);u.forEach((function(t){return h[t]=0}));var p=f.locToIndex(h),v=o.slice(-e.rank);c.forEach((function(t){return v[t]=0}));var m=d.locToIndex(v);l[n]=r(i[p],s[m]);};for(h=0;h<l.length;++h)p(h);}return a.toTensor()},o.prototype.broadcastedBinaryComplexOp=function(t,e,n){var r=Ro(t.shape,e.shape),o=dr(r,"float32"),a=dr(r,"float32"),i=this.readSync(t.dataId),s=this.readSync(e.dataId),u=Co(t.shape,r),c=Co(e.shape,r),l=o.values,h=a.values;if(u.length+c.length===0)for(var f=0;f<l.length;f++){var d=f%i.length,p=f%s.length,v=n(i[2*d],i[2*d+1],s[2*p],s[2*p+1]);l[f]=v.real,h[f]=v.imag;}else {var m=this.bufferSync(this.data.get(t.dataId).complexTensors.real),g=this.bufferSync(this.data.get(e.dataId).complexTensors.real),y=function(r){var a=o.indexToLoc(r),f=a.slice(-t.rank);u.forEach((function(t){return f[t]=0}));var d=m.locToIndex(f),p=a.slice(-e.rank);c.forEach((function(t){return p[t]=0}));var v=g.locToIndex(p),y=n(i[2*d],i[2*d+1],s[2*v],s[2*v+1]);l[r]=y.real,h[r]=y.imag;};for(f=0;f<l.length;f++)y(f);}return this.complex(o.toTensor(),a.toTensor())},o.prototype.split=function(t,e,n){return Zo(t,e,n)},o.prototype.dispose=function(){},o.prototype.floatPrecision=function(){return 32},o.prototype.epsilon=function(){return 1e-7},o.prototype.cropAndResize=function(t,e,n,r,o,a){for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=e.shape[0],f=r[0],d=r[1],p=dr([h,f,d,l],"float32"),v=this.readSync(e.dataId),m=this.readSync(n.dataId),g=this.readSync(t.dataId),y=t.strides,x=p.strides,b=0;b<h;b++){var w=4*b,C=v[w],E=v[w+1],R=v[w+2],I=v[w+3],k=m[b];if(!(k>=s))for(var S=f>1?(R-C)*(u-1)/(f-1):0,A=d>1?(I-E)*(c-1)/(d-1):0,D=0;D<f;D++){var T=f>1?C*(u-1)+D*S:.5*(C+R)*(u-1);if(T<0||T>u-1)for(var N=0;N<d;N++)for(var F=0;F<l;F++){var _=F+N*x[2]+D*x[1]+b*x[0];p.values[_]=a;}else if("bilinear"===o){var O=Math.floor(T),M=Math.ceil(T),B=T-O;for(N=0;N<d;N++){if((q=d>1?E*(c-1)+N*A:.5*(E+I)*(c-1))<0||q>c-1)for(F=0;F<l;F++){_=F+N*x[2]+D*x[1]+b*x[0];p.values[_]=a;}else {var P=Math.floor(q),L=Math.ceil(q),W=q-P;for(F=0;F<l;F++){var U=g[_=F+P*y[2]+O*y[1]+k*y[0]],V=g[_=F+L*y[2]+O*y[1]+k*y[0]],z=g[_=F+P*y[2]+M*y[1]+k*y[0]],G=U+(V-U)*W,H=z+(g[_=F+L*y[2]+M*y[1]+k*y[0]]-z)*W;_=F+N*x[2]+D*x[1]+b*x[0],p.values[_]=G+(H-G)*B;}}}}else for(N=0;N<d;++N){var q;if((q=d>1?E*(c-1)+N*A:.5*(E+I)*(c-1))<0||q>c-1)for(F=0;F<l;F++){_=F+N*x[2]+D*x[1]+b*x[0];p.values[_]=a;}else {var K=Math.round(q),j=Math.round(T);for(F=0;F<l;F++){var X=F+K*y[2]+j*y[1]+k*y[0],Y=F+N*x[2]+D*x[1]+b*x[0];p.values[Y]=g[X];}}}}}return p.toTensor()},o.prototype.sparseToDense=function(t,e,n,r){var o=Zr(0,t,n),a=o.sliceRank,i=o.numUpdates,s=o.sliceSize,u=o.strides,c=o.outputSize;return this.scatter(t,e,n,c,s,i,a,u,r,!1)},o.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=jr(t,e),a=o[0],i=o[1],s=o[2],u=o[3];if(0===i)return Fn([],a,t.dtype);for(var c=new gt([i,s],t.dtype),l=this.readSync(e.dataId),h=this.readSync(t.dataId),f=0;f<i;f++){for(var d=[],p=0,v=0;v<r;v++){var m=l[f*r+v];p+=m*u[v],d.push(m);}if(p<0||p>=t.size/s)throw new Error("Invalid indices: "+d+" does not index into "+t.shape);for(var g=0;g<s;g++)c.values[f*s+g]=h[p*s+g];}return c.toTensor().reshape(a)},o.prototype.scatterND=function(t,e,n){var r=Zr(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,s=r.strides,u=r.outputSize,c=On(0);return this.scatter(t,e,n,u,i,a,o,s,c,!0)},o.prototype.fill=function(t,e,n){var r=P(n=n||j(e),k(t));return r.fill(e),Lt.makeTensor(r,t,n,this)},o.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},o.prototype.zerosLike=function(t){var e=P(t.dtype,k(t.shape));return this.makeOutput(e,t.shape,t.dtype)},o.prototype.linspace=function(t,e,n){return Wo(t,e,n)},o.prototype.scatter=function(t,e,n,r,o,a,i,s,u,c){var l=[r/o,o],h=this.readSync(t.dataId),f=this.readSync(e.dataId);if(0===r)return Fn([],n,e.dtype);var d=new gt(l,e.dtype);d.values.fill(this.readSync(u.dataId)[0]);for(var p=0;p<a;p++){for(var v=[],m=0,g=0;g<i;g++){var y=h[p*i+g];v.push(y),m+=y*s[g];}if(m<0||m>=r/o)throw new Error("Invalid indices: "+v+" does not index into "+n);for(var x=0;x<o;x++)c?d.values[m*o+x]+=f[p*o+x]:d.values[m*o+x]=0===e.rank?f[0]:f[p*o+x];}return d.toTensor().reshape(n)},o}(bo);Lt.registerBackend("cpu",(function(){return new Kh}),1);for(var jh=0,Xh=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=t.attrs,o=e,a=o.boxes,i=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=n;Hh(a,"NonMaxSuppressionWithScore");var d=Xo(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return [d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e.x,o=n;Hh(r,"square");for(var a=o.data.get(r.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u;}return {dataId:o.write(i,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:eu,backendName:"cpu",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e,o=r.a,a=r.b,i=n;Hh([o,a],eu);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(t,e,n,r,o,a){var i=Ro(t,e),s=i.length,u=$(i),c=B(o,k(i)),l=t.length,h=e.length,f=$(t),d=$(e),p=Co(t,i),v=Co(e,i);if(p.length+v.length===0)for(var m=0;m<c.length;++m)c[m]=a(n[m%n.length],r[m%r.length]);else {var g=function(t){var e=it(t,s,u),o=e.slice(-l);p.forEach((function(t){return o[t]=0}));var i=at(o,l,f),m=e.slice(-h);v.forEach((function(t){return m[t]=0}));var g=at(m,h,d);c[t]=a(n[i],r[g]);};for(m=0;m<c.length;++m)g(m);}return [c,i]}(o.shape,a.shape,s,u,o.dtype,(function(t,e){var n=t-e;return n*n})),l=c[0],h=c[1];return {dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];jh<Xh.length;jh++){d(Xh[jh]);}var Yh,$h=function(t){this.variableNames=["A"];var e=ua(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+r+".0, "+n+".0);\n\n        vec4 values = "+e.texture2D+"(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";},Qh=function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var e=ua(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2("+r+".0, "+n+".0);\n            vec4 values = "+e.texture2D+"(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        "+e.output+" = result;\n      }\n    ";};for(var Jh=0,Zh=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=t.attrs,o=e.pixels,a=r.numChannels,s="undefined"!=typeof HTMLVideoElement&&o instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&o instanceof HTMLImageElement,c=s?[o.videoWidth,o.videoHeight]:[o.width,o.height],l=c[0],h=c[1],f=[h,l],d=[h,l,a];(u||s)&&(null==Yh&&(Yh=document.createElement("canvas").getContext("2d")),Yh.canvas.width=l,Yh.canvas.height=h,Yh.drawImage(o,0,0,l,h),o=Yh.canvas);var p=n.makeTensorInfo(f,"int32");n.texData.get(p.dataId).usage=zt.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(p.dataId),o);var v=i().getBool("WEBGL_PACK")?new Qh(d):new $h(d),m=n.runWebGLProgram(v,[p],"int32");return n.disposeData(p.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=t.attrs;dn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=e,a=o.boxes,i=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=n,d=Xo(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return [d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e.x,o=n,a=new Cs(r.shape,"return x * x;");return o.runWebGLProgram(a,[r],r.dtype)}},{kernelName:eu,backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e,o=r.a,a=r.b,s=n,u=i().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new La("return (a - b) * (a - b);",o.shape,a.shape):new Ba("return (a - b) * (a - b);",o.shape,a.shape);return s.compileAndRun(u,[o,a])}}];Jh<Zh.length;Jh++){d(Zh[Jh]);}for(var tf=0,ef=[{kernelName:"Square",gradFunc:function(t,e){var n=e[0];return {x:function(){return t.mul(n.toFloat().mul(2))}}}},{kernelName:eu,gradFunc:function(t,e){var n=e[0],r=e[1],o=On(2);return {a:function(){return gc(t,gc(o,Cc(n,r)))},b:function(){return gc(t,gc(o,Cc(r,n)))}}}}];tf<ef.length;tf++){p(ef[tf]);}var nf=function(){function t(){}return t.prototype.fetch=function(t,e){return fetch(t,e)},t.prototype.now=function(){return performance.now()},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},t}();i().get("IS_BROWSER")&&i().setPlatform("browser",new nf);var rf,of=function(){return require("node-fetch")},af=function(){function t(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder;}return t.prototype.fetch=function(t,e){return null!=i().global.fetch?i().global.fetch(t,e):(null==rf&&(rf=of()),rf(t,e))},t.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)},t}();i().get("IS_NODE")&&i().setPlatform("node",new af);var sf={float32:4,int32:4,uint16:2,uint8:1,bool:1},uf=4;function cf(t,e){for(var n={},r=0,o=function(e){var o=e.name,a=e.dtype,i=e.shape,s=k(i),u=void 0;if("quantization"in e){var c=e.quantization;if("uint8"!==c.dtype&&"uint16"!==c.dtype)throw new Error("Weight "+e.name+" has unknown quantization dtype "+c.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var l=sf[c.dtype],h=t.slice(r,r+s*l),f="uint8"===c.dtype?new Uint8Array(h):new Uint16Array(h);if("float32"===a)u=Float32Array.from(f,(function(t){return t*c.scale+c.min}));else {if("int32"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=Int32Array.from(f,(function(t){return Math.round(t*c.scale+c.min)}));}r+=s*l;}else if("string"===a){var d=k(e.shape);u=[];for(var p=0;p<d;p++){var v=new Uint32Array(t.slice(r,r+uf))[0];r+=uf;var m=new Uint8Array(t.slice(r,r+v));u.push(m),r+=v;}}else {var g=sf[a];h=t.slice(r,r+s*g);if("float32"===a)u=new Float32Array(h);else if("int32"===a)u=new Int32Array(h);else {if("bool"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=new Uint8Array(h);}r+=s*g;}n[o]=Fn(u,i,a);},a=0,i=e;a<i.length;a++){o(i[a]);}return n}function lf(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));var e=0,n=[];t.forEach((function(t){if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)}));var r=new Uint8Array(e),o=0;return n.forEach((function(t){r.set(new Uint8Array(t.buffer),o),o+=t.byteLength;})),r.buffer}var hf="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function ff(t){return hf?Buffer.byteLength(t):new Blob([t]).size}function df(t){var e=0;t.forEach((function(t){e+=t.byteLength;}));var n=new Uint8Array(e),r=0;return t.forEach((function(t){n.set(new Uint8Array(t),r),r+=t.byteLength;})),n.buffer}function pf(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);var e=t.split("/");return e[e.length-1]}function vf(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return {dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:ff(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:ff(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}var mf=function(){function t(){this.saveRouters=[],this.loadRouters=[];}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerSaveRouter=function(e){t.getInstance().saveRouters.push(e);},t.registerLoadRouter=function(e){t.getInstance().loadRouters.push(e);},t.getSaveHandlers=function(e){return t.getHandlers(e,"save")},t.getLoadHandlers=function(e,n){return t.getHandlers(e,"load",n)},t.getHandlers=function(e,n,r){var o=[];return ("load"===n?t.getInstance().loadRouters:t.getInstance().saveRouters).forEach((function(t){var n=t(e,r);null!==n&&o.push(n);})),o},t}(),gf="://",yf=function(){function t(){this.managers={};}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerManager=function(e,n){C(null!=e,(function(){return "scheme must not be undefined or null."})),e.endsWith(gf)&&(e=e.slice(0,e.indexOf(gf))),C(e.length>0,(function(){return "scheme must not be an empty string."}));var r=t.getInstance();C(null==r.managers[e],(function(){return "A model store manager is already registered for scheme '"+e+"'."})),r.managers[e]=n;},t.getManager=function(t){var e=this.getInstance().managers[t];if(null==e)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},t.getSchemes=function(){return Object.keys(this.getInstance().managers)},t}();function xf(t){if(-1===t.indexOf(gf))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+yf.getSchemes().join(","));return {scheme:t.split(gf)[0],path:t.split(gf)[1]}}function bf(t,e,o){return void 0===o&&(o=!1),n(this,void 0,void 0,(function(){var n,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return C(t!==e,(function(){return "Old path and new path are the same: '"+t+"'"})),C((n=mf.getLoadHandlers(t)).length>0,(function(){return "Copying failed because no load handler is found for source URL "+t+"."})),C(n.length<2,(function(){return "Copying failed because more than one ("+n.length+") load handlers for source URL "+t+"."})),a=n[0],C((i=mf.getSaveHandlers(e)).length>0,(function(){return "Copying failed because no save handler is found for destination URL "+e+"."})),C(i.length<2,(function(){return "Copying failed because more than one ("+n.length+") save handlers for destination URL "+e+"."})),s=i[0],u=xf(t).scheme,c=xf(t).path,l=u===xf(t).scheme,[4,a.load()];case 1:return h=r.sent(),o&&l?[4,yf.getManager(u).removeModel(c)]:[3,3];case 2:r.sent(),r.label=3;case 3:return [4,s.save(h)];case 4:return f=r.sent(),!o||l?[3,6]:[4,yf.getManager(u).removeModel(c)];case 5:r.sent(),r.label=6;case 6:return [2,f.modelArtifactsInfo]}}))}))}var wf="models_store",Cf="model_info_store";function Ef(){if(!i().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var t=window||self,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Rf(t){var e=t.result;e.createObjectStore(wf,{keyPath:"modelPath"}),e.createObjectStore(Cf,{keyPath:"modelPath"});}var If=function(){function t(t){if(this.indexedDB=Ef(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t;}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return [2,this.databaseAction(this.modelPath,t)]}))}))},t.prototype.load=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){return [2,this.databaseAction(this.modelPath)]}))}))},t.prototype.databaseAction=function(t,e){var n=this;return new Promise((function(t,r){var o=n.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Rf(o)},o.onsuccess=function(){var a=o.result;if(null==e){var i=a.transaction(wf,"readonly"),s=i.objectStore(wf).get(n.modelPath);s.onsuccess=function(){if(null==s.result)return a.close(),r(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));t(s.result.modelArtifacts);},s.onerror=function(t){return a.close(),r(s.error)},i.oncomplete=function(){return a.close()};}else {var u,c=vf(e),l=a.transaction(Cf,"readwrite"),h=l.objectStore(Cf),f=h.put({modelPath:n.modelPath,modelArtifactsInfo:c});f.onsuccess=function(){var o=(u=a.transaction(wf,"readwrite")).objectStore(wf).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:c});o.onsuccess=function(){return t({modelArtifactsInfo:c})},o.onerror=function(t){var e=(h=l.objectStore(Cf)).delete(n.modelPath);e.onsuccess=function(){return a.close(),r(o.error)},e.onerror=function(t){return a.close(),r(o.error)};};},f.onerror=function(t){return a.close(),r(f.error)},l.oncomplete=function(){null==u?a.close():u.oncomplete=function(){return a.close()};};}},o.onerror=function(t){return r(o.error)};}))},t.URL_SCHEME="indexeddb://",t}(),kf=function(t){return i().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(If.URL_SCHEME)?(e=t.slice(If.URL_SCHEME.length),new If(e)):null;var e;};mf.registerSaveRouter(kf),mf.registerLoadRouter(kf);var Sf=function(){function t(){this.indexedDB=Ef();}return t.prototype.listModels=function(){return n(this,void 0,void 0,(function(){var t=this;return r(this,(function(e){return [2,new Promise((function(e,n){var r=t.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=function(){return Rf(r)},r.onsuccess=function(){var t=r.result,o=t.transaction(Cf,"readonly"),a=o.objectStore(Cf).getAll();a.onsuccess=function(){for(var t={},n=0,r=a.result;n<r.length;n++){var o=r[n];t[o.modelPath]=o.modelArtifactsInfo;}e(t);},a.onerror=function(e){return t.close(),n(a.error)},o.oncomplete=function(){return t.close()};},r.onerror=function(t){return n(r.error)};}))]}))}))},t.prototype.removeModel=function(t){return n(this,void 0,void 0,(function(){var e=this;return r(this,(function(n){var r;return t=(r=t).startsWith(If.URL_SCHEME)?r.slice(If.URL_SCHEME.length):r,[2,new Promise((function(n,r){var o=e.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Rf(o)},o.onsuccess=function(){var e,a=o.result,i=a.transaction(Cf,"readwrite"),s=i.objectStore(Cf),u=s.get(t);u.onsuccess=function(){if(null==u.result)return a.close(),r(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var o=s.delete(t),i=function(){var o=(e=a.transaction(wf,"readwrite")).objectStore(wf).delete(t);o.onsuccess=function(){return n(u.result.modelArtifactsInfo)},o.onerror=function(t){return r(u.error)};};o.onsuccess=i,o.onerror=function(t){return i(),a.close(),r(u.error)};},u.onerror=function(t){return a.close(),r(u.error)},i.oncomplete=function(){null==e?a.close():e.oncomplete=function(){return a.close()};};},o.onerror=function(t){return r(o.error)};}))]}))}))},t}();if(i().getBool("IS_BROWSER"))try{yf.registerManager(If.URL_SCHEME,new Sf);}catch(t){}var Af="/",Df="tensorflowjs_models",Tf="info",Nf="model_topology",Ff="weight_specs",_f="weight_data",Of="model_metadata";function Mf(t){return {info:[Df,t,Tf].join(Af),topology:[Df,t,Nf].join(Af),weightSpecs:[Df,t,Ff].join(Af),weightData:[Df,t,_f].join(Af),modelMetadata:[Df,t,Of].join(Af)}}function Bf(t){var e=t.split(Af);if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join(Af)}var Pf=function(){function t(t){if(!i().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Mf(this.modelPath);}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(r){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=vf(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(t){if(hf)return Buffer.from(t).toString("base64");for(var e=new Uint8Array(t),n="",r=0,o=e.length;r<o;r++)n+=String.fromCharCode(e[r]);return btoa(n)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return [2]}))}))},t.prototype.load=function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i,s;return r(this,(function(r){if(null==(t=JSON.parse(this.LS.getItem(this.keys.info))))throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},null==(n=JSON.parse(this.LS.getItem(this.keys.topology))))throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,null==(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,null!=(a=this.LS.getItem(this.keys.modelMetadata))&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),null==(s=this.LS.getItem(this.keys.weightData)))throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(t){if(hf){var e=Buffer.from(t,"base64");return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}for(var n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r.set([n.charCodeAt(o)],o);return r.buffer}(s),[2,e]}))}))},t.URL_SCHEME="localstorage://",t}(),Lf=function(t){return i().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Pf.URL_SCHEME)?(e=t.slice(Pf.URL_SCHEME.length),new Pf(e)):null;var e;};mf.registerSaveRouter(Lf),mf.registerLoadRouter(Lf);var Wf=function(){function t(){C(i().getBool("IS_BROWSER"),(function(){return "Current environment is not a web browser"})),C("undefined"==typeof window||void 0!==window.localStorage,(function(){return "Current browser does not appear to support localStorage"})),this.LS=window.localStorage;}return t.prototype.listModels=function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i;return r(this,(function(r){for(t={},e=Df+Af,n=Af+Tf,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=Bf(a),t[i]=JSON.parse(this.LS.getItem(a)));return [2,t]}))}))},t.prototype.removeModel=function(t){return n(this,void 0,void 0,(function(){var e,n;return r(this,(function(r){var o;if(t=(o=t).startsWith(Pf.URL_SCHEME)?o.slice(Pf.URL_SCHEME.length):o,e=Mf(t),null==this.LS.getItem(e.info))throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]}))}))},t}();if(i().getBool("IS_BROWSER"))try{yf.registerManager(Pf.URL_SCHEME,new Wf);}catch(t){}var Uf="model",Vf=".json",zf=".weights.bin";function Gf(t){return new Promise((function(t){return setTimeout(t)})).then(t)}var Hf=function(){function t(e){if(!i().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(t.URL_SCHEME)&&(e=e.slice(t.URL_SCHEME.length)),null!=e&&0!==e.length||(e=Uf),this.modelTopologyFileName=e+Vf,this.weightDataFileName=e+zf;}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,i,s;return r(this,(function(r){switch(r.label){case 0:if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return [3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Gf((function(){return i.dispatchEvent(new MouseEvent("click"))}))];case 2:return r.sent(),null==t.weightData?[3,4]:((s=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Gf((function(){return s.dispatchEvent(new MouseEvent("click"))}))]);case 3:r.sent(),r.label=4;case 4:return [2,{modelArtifactsInfo:vf(t)}]}}))}))},t.URL_SCHEME="downloads://",t}(),qf=function(){function t(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t;}return t.prototype.load=function(){return n(this,void 0,void 0,(function(){var t,e,n=this;return r(this,(function(r){return t=this.files[0],e=this.files.slice(1),[2,new Promise((function(r,o){var a=new FileReader;a.onload=function(a){var i=JSON.parse(a.target.result),s=i.modelTopology;if(null!=s){0===e.length&&r({modelTopology:s});var u=i.weightsManifest;if(null!=u){var c;try{c=n.checkManifestAndWeightFiles(u,e);}catch(t){return void o(t)}var l=[],h=[],f=[];u.forEach((function(t){t.paths.forEach((function(t){h.push(t),f.push(null);})),l.push.apply(l,t.weights);})),u.forEach((function(t){t.paths.forEach((function(t){var e=new FileReader;e.onload=function(e){var n=e.target.result,o=h.indexOf(t);f[o]=n,-1===f.indexOf(null)&&r({modelTopology:s,weightSpecs:l,weightData:df(f),format:i.format,generatedBy:i.generatedBy,convertedBy:i.convertedBy,userDefinedMetadata:i.userDefinedMetadata});},e.onerror=function(e){return o("Failed to weights data from file of path '"+t+"'.")},e.readAsArrayBuffer(c[t]);}));}));}else o(new Error("weightManifest field is missing from file "+t.name));}else o(new Error("modelTopology field is missing from file "+t.name));},a.onerror=function(e){return o("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},a.readAsText(t);}))]}))}))},t.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],r=e.map((function(t){return pf(t.name)})),o={},a=0,i=t;a<i.length;a++){i[a].paths.forEach((function(t){var a=pf(t);if(-1!==n.indexOf(a))throw new Error("Duplicate file basename found in weights manifest: '"+a+"'");if(n.push(a),-1===r.indexOf(a))throw new Error("Weight file with basename '"+a+"' is not provided.");o[t]=e[r.indexOf(a)];}));}if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return o},t}();function Kf(t,e,n,r){!function(t){C(null!=t&&Array.isArray(t)&&t.length>0,(function(){return "promises must be a none empty array"}));}(t),function(t,e){C(t>=0&&t<=1,(function(){return "Progress fraction must be in range [0, 1], but got startFraction "+t})),C(e>=0&&e<=1,(function(){return "Progress fraction must be in range [0, 1], but got endFraction "+e})),C(e>=t,(function(){return "startFraction must be no more than endFraction, but got startFraction "+t+" and endFraction "+e}));}(n=null==n?0:n,r=null==r?1:r);var o=0;return Promise.all(t.map((function(a){return a.then((function(a){var i=n+ ++o/t.length*(r-n);return e(i),a})),a})))}function jf(t,e){return n(this,void 0,void 0,(function(){var n,o,a,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return null==e&&(e={}),n=null==e.fetchFunc?i().platform.fetch:e.fetchFunc,o=t.map((function(t){return n(t,e.requestInit,{isBinary:!0})})),a=0,s=.5,null!=e.onProgress?[3,2]:[4,Promise.all(o)];case 1:return u=r.sent(),[3,4];case 2:return [4,Kf(o,e.onProgress,a,s)];case 3:u=r.sent(),r.label=4;case 4:return c=u.map((function(t){return t.arrayBuffer()})),l=.5,h=1,null!=e.onProgress?[3,6]:[4,Promise.all(c)];case 5:return f=r.sent(),[3,8];case 6:return [4,Kf(c,e.onProgress,l,h)];case 7:f=r.sent(),r.label=8;case 8:return [2,f]}}))}))}function Xf(t){var e=this;return function(o,a,i){return void 0===a&&(a=""),n(e,void 0,void 0,(function(){var e,n,s,u,c,l,h,f,d,p;return r(this,(function(r){switch(r.label){case 0:if(e=o.map((function(){return !1})),n={},s=null!=i?i.map((function(){return !1})):[],u=[],o.forEach((function(t,r){var o=0;t.weights.forEach((function(t){var a="quantization"in t?t.quantization.dtype:t.dtype,c=sf[a]*k(t.shape),l=function(){e[r]=!0,null==n[r]&&(n[r]=[]),n[r].push({manifestEntry:t,groupOffset:o,sizeBytes:c});};null!=i?i.forEach((function(e,n){e===t.name&&(l(),s[n]=!0);})):l(),u.push(t.name),o+=c;}));})),!s.every((function(t){return t})))throw c=i.filter((function(t,e){return !s[e]})),new Error("Could not find weights in manifest with names: "+c.join(", ")+". \nManifest JSON has weights with names: "+u.join(", ")+".");return l=e.reduce((function(t,e,n){return e&&t.push(n),t}),[]),h=[],l.forEach((function(t){o[t].paths.forEach((function(t){var e=a+(a.endsWith("/")?"":"/")+t;h.push(e);}));})),[4,t(h)];case 1:return f=r.sent(),d={},p=0,l.forEach((function(t){for(var e=o[t].paths.length,r=0,a=0;a<e;a++)r+=f[p+a].byteLength;for(var i=new ArrayBuffer(r),s=new Uint8Array(i),u=0,c=0;c<e;c++){var l=new Uint8Array(f[p+c]);s.set(l,u),u+=l.byteLength;}n[t].forEach((function(t){var e=cf(i.slice(t.groupOffset,t.groupOffset+t.sizeBytes),[t.manifestEntry]);for(var n in e)d[n]=e[n];})),p+=e;})),[2,d]}}))}))}}mf.registerSaveRouter((function(t){return i().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Hf.URL_SCHEME)?function(t){void 0===t&&(t="model");return new Hf(t)}(t.slice(Hf.URL_SCHEME.length)):null}));var Yf=function(){function t(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,null!=e.fetchFunc?(C("function"==typeof e.fetchFunc,(function(){return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"})),this.fetch=e.fetchFunc):this.fetch=i().platform.fetch,C(null!=t&&t.length>0,(function(){return "URL path for http must not be null, undefined or empty."})),Array.isArray(t)&&C(2===t.length,(function(){return "URL paths for http must have a length of 2, (actual length is "+t.length+")."})),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{};}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a;return r(this,(function(r){switch(r.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return (e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=r.sent()).ok)return [2,{modelArtifactsInfo:vf(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}}))}))},t.prototype.load=function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:return [4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=r.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");r.label=2;case 2:return r.trys.push([2,4,,5]),[4,t.json()];case 3:return e=r.sent(),[3,5];case 4:throw r.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,null==o&&null==a)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return null==a?[3,7]:[4,this.loadWeights(a)];case 6:f=r.sent(),l=f[0],h=f[1],r.label=7;case 7:return [2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}}))}))},t.prototype.loadWeights=function(t){return n(this,void 0,void 0,(function(){var e,n,o,a,i,s,u,c,l,h,f;return r(this,(function(r){switch(r.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(t){var e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),o=n>e?t.substring(n):"";return [r+"/",o]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach((function(t){t.paths.forEach((function(t){h.push(i+t+a);}));})),[4,jf(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=r.sent(),[2,[s,df(f)]]}}))}))},t.URL_SCHEME_REGEX=/^https?:\/\//,t}();function $f(t){return null!=t.match(Yf.URL_SCHEME_REGEX)}var Qf=function(t,e){if("undefined"==typeof fetch)return null;return (Array.isArray(t)?t.every((function(t){return $f(t)})):$f(t))?Jf(t,{onProgress:e}):null};function Jf(t,e){return new Yf(t,e)}mf.registerSaveRouter(Qf),mf.registerLoadRouter(Qf);var Zf=function(){function t(t){this.modelArtifacts=t;}return t.prototype.load=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){return [2,this.modelArtifacts]}))}))},t}(),td=function(){function t(t){this.saveHandler=t;}return t.prototype.save=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){return [2,this.saveHandler(t)]}))}))},t}();var ed=Object.freeze({browserFiles:function(t){return new qf(t)},browserHTTPRequest:function(t,e){return Jf(t,e)},concatenateArrayBuffers:df,decodeWeights:cf,encodeWeights:function(t,e){return n(this,void 0,void 0,(function(){var o,a,i,s,u,c=this;return r(this,(function(l){switch(l.label){case 0:for(o=[],a=[],i=Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t),s=function(s){var u=i[s],l=Array.isArray(t)?t[s].tensor:t[u];if("float32"!==l.dtype&&"int32"!==l.dtype&&"bool"!==l.dtype&&"string"!==l.dtype)throw new Error("Unsupported dtype in weight '"+u+"': "+l.dtype);var h={name:u,shape:l.shape,dtype:l.dtype};if("string"===l.dtype){var f=new Promise((function(t){return n(c,void 0,void 0,(function(){var e,n,o,a,i,s,u;return r(this,(function(r){switch(r.label){case 0:return [4,l.bytes()];case 1:for(e=r.sent(),n=e.reduce((function(t,e){return t+e.length}),0)+uf*e.length,o=new Uint8Array(n),a=0,i=0;i<e.length;i++)s=e[i],u=new Uint8Array(new Uint32Array([s.length]).buffer),o.set(u,a),a+=uf,o.set(s,a),a+=s.length;return t(o),[2]}}))}))}));a.push(f);}else a.push(l.data());null!=e&&(h.group=e),o.push(h);},u=0;u<i.length;++u)s(u);return [4,Promise.all(a)];case 1:return [2,{data:lf(l.sent()),specs:o}]}}))}))},fromMemory:function(t,e,n,r){return 1===arguments.length?null!=t.modelTopology||null!=t.weightSpecs?new Zf(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Zf({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Zf({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))},getLoadHandlers:function(t,e){return mf.getLoadHandlers(t,e)},getModelArtifactsInfoForJSON:vf,getSaveHandlers:function(t){return mf.getSaveHandlers(t)},http:Jf,isHTTPScheme:$f,loadWeights:function(t,e,o,a){return void 0===e&&(e=""),n(this,void 0,void 0,(function(){return r(this,(function(n){return [2,Xf((function(t){return jf(t,{requestInit:a})}))(t,e,o)]}))}))},registerLoadRouter:function(t){return mf.registerLoadRouter(t)},registerSaveRouter:function(t){return mf.registerSaveRouter(t)},weightsLoaderFactory:Xf,withSaveHandler:function(t){return new td(t)},copyModel:function(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){return [2,bf(t,e,!1)]}))}))},listModels:function(){return n(this,void 0,void 0,(function(){var t,e,n,o,a,i,s;return r(this,(function(r){switch(r.label){case 0:t=yf.getSchemes(),e={},n=0,o=t,r.label=1;case 1:return n<o.length?(a=o[n],[4,yf.getManager(a).listModels()]):[3,4];case 2:for(s in i=r.sent())e[a+gf+s]=i[s];r.label=3;case 3:return n++,[3,1];case 4:return [2,e]}}))}))},moveModel:function(t,e){return n(this,void 0,void 0,(function(){return r(this,(function(n){return [2,bf(t,e,!0)]}))}))},removeModel:function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){return e=xf(t),[2,yf.getManager(e.scheme).removeModel(e.path)]}))}))}});var nd,rd=An({confusionMatrix_:function(t,e,n){var r=mn(t,"labels","confusionMatrix"),o=mn(e,"predictions","confusionMatrix");C(null==n||n>0&&Number.isInteger(n),(function(){return "If provided, numClasses must be a positive integer, but got "+n})),C(1===r.rank,(function(){return "Expected the rank of labels to be 1, but got "+r.rank})),C(1===o.rank,(function(){return "Expected the rank of predictions to be 1, but got "+o.rank})),C(r.shape[0]===o.shape[0],(function(){return "Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."})),C(n>0&&Number.isInteger(n),(function(){return "numClasses is required to be a positive integer, but got "+n}));var a=Rr(r.asType("int32"),n),i=Rr(o.asType("int32"),n);return a.transpose().matMul(i).asType("int32")}}),od=Object.freeze({confusionMatrix:rd});var ad=An({fromPixels_:function(t,e){if(void 0===e&&(e=3),e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n=!1,r=!1,o=!1,a=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)o=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)a=!0;else {if(null==t.getContext)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);i=!0;}if(o){if(o&&t.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")}if(null!=l("FromPixels",Lt.backendName))return Lt.runKernel("FromPixels",{pixels:t},{numChannels:e});var s,u,c=o?[t.videoWidth,t.videoHeight]:[t.width,t.height],h=c[0],f=c[1];if(i?s=t.getContext("2d").getImageData(0,0,h,f).data:r||n?s=t.data:(a||o)&&(null==nd&&(nd=document.createElement("canvas").getContext("2d")),nd.canvas.width=h,nd.canvas.height=f,nd.drawImage(t,0,0,h,f),s=nd.getImageData(0,0,h,f).data),4===e)u=new Int32Array(s);else {var d=h*f;u=new Int32Array(d*e);for(var p=0;p<d;p++)for(var v=0;v<e;++v)u[p*e+v]=s[4*p+v];}return Pn(u,[f,h,e],"int32")}}),id=Object.freeze({toPixels:function(t,e){return n(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h,f,d,p,v,m,g,y,x,b,w,C,E,R,I;return r(this,(function(r){switch(r.label){case 0:if(n=mn(t,"img","toPixels"),t instanceof wt||(n=n.toInt()),2!==n.rank&&3!==n.rank)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+n.rank+".");if(o=n.shape.slice(0,2),a=o[0],i=o[1],(s=2===n.rank?1:n.shape[2])>4||2===s)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+s);return [4,n.data()];case 1:return u=r.sent(),c=n.min(),l=n.max(),[4,Promise.all([c.data(),l.data()])];case 2:if(h=r.sent(),f=h[0],d=h[1],p=f[0],v=d[0],c.dispose(),l.dispose(),"float32"===n.dtype){if(p<0||v>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+v+"].")}else {if("int32"!==n.dtype)throw new Error("Unsupported type for toPixels: "+n.dtype+". Please use float32 or int32 tensors.");if(p<0||v>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+v+"].")}for(m="float32"===n.dtype?255:1,g=new Uint8ClampedArray(i*a*4),y=0;y<a*i;++y)x=void 0,b=void 0,w=void 0,C=void 0,1===s?(x=u[y]*m,b=u[y]*m,w=u[y]*m,C=255):3===s?(x=u[3*y]*m,b=u[3*y+1]*m,w=u[3*y+2]*m,C=255):4===s&&(x=u[4*y]*m,b=u[4*y+1]*m,w=u[4*y+2]*m,C=u[4*y+3]*m),g[(E=4*y)+0]=Math.round(x),g[E+1]=Math.round(b),g[E+2]=Math.round(w),g[E+3]=Math.round(C);return null!=e&&(e.width=i,e.height=a,R=e.getContext("2d"),I=new ImageData(g,i,a),R.putImageData(I,0,0)),n!==t&&n.dispose(),[2,g]}}))}))},fromPixels:ad}),sd=function(){function t(){}return t.prototype.getClassName=function(){return this.constructor.className},t.fromConfig=function(t,e){return new t(e)},t}(),ud=function(){function t(){this.classNameMap={};}return t.getMap=function(){return null==t.instance&&(t.instance=new t),t.instance},t.register=function(e){t.getMap().classNameMap[e.className]=[e,e.fromConfig];},t}();function cd(t){C(null!=t.className,(function(){return "Class being registered does not have the static className property defined."})),C("string"==typeof t.className,(function(){return "className is required to be a string, but got type "+typeof t.className})),C(t.className.length>0,(function(){return "Class being registered has an empty-string as its className, which is disallowed."})),ud.register(t);}var ld=Object.freeze({Serializable:sd,SerializationMap:ud,registerClass:cd}),hd=.001,fd=.1;function dd(){return 32===Lt.backend.floatPrecision()?hd:fd}function pd(t,e,n){var r=!0;if((V(t)||V(e))&&(r=!1),V(t)&&V(e)&&(r=!0),r){var o=t.constructor.name,a=e.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(t)&&Array.isArray(e)){var i=pn(t),s=pn(e);if(!S(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=V(t)?t:I(t),c=V(e)?e:I(e);if(u.length!==c.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+c.length+".\nActual:   "+u+".\nExpected: "+c+".");for(var l=0;l<c.length;++l){var h=u[l],f=c[l];if(!n(h,f))throw new Error("Arrays differ: actual["+l+"] = "+h+", expected["+l+"] = "+f+".\nActual:   "+u+".\nExpected: "+c+".")}}function vd(t,e,n){return !isFinite(t)&&!isFinite(e)||!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}var md=Object.freeze({TEST_EPSILON_FLOAT16:fd,expectArraysClose:function(t,e,n){return null==n&&(n=dd()),pd(t,e,(function(t,e){return vd(t,e,n)}))},testEpsilon:dd,expectPromiseToFail:function(t,e){t().then((function(){return e.fail()}),(function(){return e()}));},expectArraysEqual:function(t,e){var n="string"==typeof e||"number"==typeof e||"boolean"==typeof e?[e]:e;return H(t)||H(t[0])||H(e)||H(e[0])?pd(t,n,(function(t,e){return t==e})):pd(t,e,(function(t,e){return vd(t,e,0)}))},expectNumbersClose:function(t,e,n){if(null==n&&(n=dd()),!vd(t,e,n))throw new Error("Numbers differ: actual === "+t+", expected === "+e)},expectValuesInRange:function(t,e,n){for(var r=0;r<t.length;r++)if(t[r]<e||t[r]>n)throw new Error("Value out of range:"+t[r]+" low: "+e+", high: "+n)},expectArrayBuffersEqual:function(t,e){expect(new Float32Array(t)).toEqual(new Float32Array(e));}}),gd="1.7.0";var yd=Object.freeze({gpgpu_util:Mi,webgl_util:Ge,forceHalfFloat:function(){i().set("WEBGL_FORCE_F16_TEXTURES",!0);},MathBackendWebGL:Zs,setWebGLContext:Kt,GPGPUContext:Bi}),xd=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.minimize=function(t,e,n){void 0===e&&(e=!1);var r=this.computeGradients(t,n),o=r.value,a=r.grads;if(null!=n){var i=n.map((function(t){return {name:t.name,tensor:a[t.name]}}));this.applyGradients(i);}else this.applyGradients(a);return tn(a),e?o:(o.dispose(),null)},Object.defineProperty(o.prototype,"iterations",{get:function(){return null==this.iterations_&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),o.prototype.incrementIterations=function(){this.iterations_=this.iterations+1;},o.prototype.computeGradients=function(t,e){return po(t,e)},o.prototype.dispose=function(){null!=this.iterations_&&tn(this.iterations_);},o.prototype.saveIterations=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){return null==this.iterations_&&(this.iterations_=0),[2,{name:"iter",tensor:On(this.iterations_,"int32")}]}))}))},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}))}))},o.prototype.extractIterations=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return e=this,[4,t[0].tensor.data()];case 1:return e.iterations_=n.sent()[0],[2,t.slice(1)]}}))}))},o}(sd);Object.defineProperty(xd,Symbol.hasInstance,{value:function(t){return null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients}});var bd=function(t){function o(e,n,r){void 0===r&&(r=null);var o=t.call(this)||this;return o.learningRate=e,o.rho=n,o.epsilon=r,o.accumulatedGrads=[],o.accumulatedUpdates=[],null==r&&(o.epsilon=Lt.backend.epsilon()),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];null==e.accumulatedGrads[r]&&(e.accumulatedGrads[r]={originalName:n+"/accum_grad",variable:Ze((function(){return Xn(o).variable(!1)}))}),null==e.accumulatedUpdates[r]&&(e.accumulatedUpdates[r]={originalName:n+"/accum_var",variable:Ze((function(){return Xn(o).variable(!1)}))});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable,s=e.accumulatedUpdates[r].variable;Ze((function(){var t=i.mul(e.rho).add(a.square().mul(1-e.rho)),n=s.add(e.epsilon).sqrt().div(i.add(e.epsilon).sqrt()).mul(a),r=s.mul(e.rho).add(n.square().mul(1-e.rho));i.assign(t),s.assign(r);var u=n.mul(-e.learningRate).add(o);o.assign(u);}));}})),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedUpdates&&(tn(this.accumulatedGrads.map((function(t){return t.variable}))),tn(this.accumulatedUpdates.map((function(t){return t.variable}))));},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map((function(t){return {name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return [4,this.extractIterations(t)];case 1:return t=n.sent(),e=t.length/2,this.accumulatedGrads=t.slice(0,e).map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),this.accumulatedUpdates=t.slice(e,2*e).map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return {learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.rho,e.epsilon)},o.className="Adadelta",o}(xd);cd(bd);var wd=function(t){function o(e,n){void 0===n&&(n=.1);var r=t.call(this)||this;return r.learningRate=e,r.initialAccumulatorValue=n,r.accumulatedGrads=[],r}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];if(null==e.accumulatedGrads[r]){e.accumulatedGrads[r]={originalName:n+"/accumulator",variable:Ze((function(){return Hn(o.shape,e.initialAccumulatorValue).variable(!1)}))};}var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable;Ze((function(){var t=i.add(a.square());i.assign(t);var n=a.div(t.add(Lt.backend.epsilon()).sqrt()).mul(-e.learningRate).add(o);o.assign(n);}));}})),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedGrads&&tn(this.accumulatedGrads.map((function(t){return t.variable})));},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()].concat(this.accumulatedGrads.map((function(t){return {name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:return t=e.sent(),this.accumulatedGrads=t.map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return {learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},o.fromConfig=function(t,e){return new t(e.learningRate,e.initialAccumulatorValue)},o.className="Adagrad",o}(xd);cd(wd);var Cd=function(t){function o(e,n,r,o){void 0===o&&(o=null);var a=t.call(this)||this;return a.learningRate=e,a.beta1=n,a.beta2=r,a.epsilon=o,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],Ze((function(){a.accBeta1=On(n).variable(),a.accBeta2=On(r).variable();})),null==o&&(a.epsilon=Lt.backend.epsilon()),a}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t);Ze((function(){var r=Cc(1,e.accBeta1),o=Cc(1,e.accBeta2);n.forEach((function(n,a){var i=Lt.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Ze((function(){return Xn(i).variable(!1)}))}),null==e.accumulatedSecondMoment[a]&&(e.accumulatedSecondMoment[a]={originalName:n+"/v",variable:Ze((function(){return Xn(i).variable(!1)}))});var s=Array.isArray(t)?t[a].tensor:t[n];if(null!=s){var u=e.accumulatedFirstMoment[a].variable,c=e.accumulatedSecondMoment[a].variable,l=u.mul(e.beta1).add(s.mul(1-e.beta1)),h=c.mul(e.beta2).add(s.square().mul(1-e.beta2)),f=l.div(r),d=h.div(o);u.assign(l),c.assign(h);var p=f.div(d.sqrt().add(e.epsilon)).mul(-e.learningRate).add(i);i.assign(p);}})),e.accBeta1.assign(e.accBeta1.mul(e.beta1)),e.accBeta2.assign(e.accBeta2.mul(e.beta2));})),this.incrementIterations();},o.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&tn(this.accumulatedFirstMoment.map((function(t){return t.variable}))),null!=this.accumulatedSecondMoment&&tn(this.accumulatedSecondMoment.map((function(t){return t.variable})));},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map((function(t){return {name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){var e,n=this;return r(this,(function(r){switch(r.label){case 0:return [4,this.extractIterations(t)];case 1:return t=r.sent(),Ze((function(){n.accBeta1.assign(xc(n.beta1,n.iterations_+1)),n.accBeta2.assign(xc(n.beta2,n.iterations_+1));})),e=t.length/2,this.accumulatedFirstMoment=t.slice(0,e).map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),this.accumulatedSecondMoment=t.slice(e,2*e).map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)},o.className="Adam",o}(xd);cd(Cd);var Ed=function(t){function o(e,n,r,o,a){void 0===o&&(o=null),void 0===a&&(a=0);var i=t.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=r,i.epsilon=o,i.decay=a,i.accumulatedFirstMoment=[],i.accumulatedWeightedInfNorm=[],Ze((function(){i.iteration=On(0).variable(),i.accBeta1=On(n).variable();})),null==o&&(i.epsilon=Lt.backend.epsilon()),i}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t);Ze((function(){var r=Cc(1,e.accBeta1),o=sc(-e.learningRate,e.iteration.mul(e.decay).add(1));n.forEach((function(n,a){var i=Lt.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Xn(i).variable(!1)}),null==e.accumulatedWeightedInfNorm[a]&&(e.accumulatedWeightedInfNorm[a]={originalName:n+"/v",variable:Xn(i).variable(!1)});var s=Array.isArray(t)?t[a].tensor:t[n];if(null!=s){var u=e.accumulatedFirstMoment[a].variable,c=e.accumulatedWeightedInfNorm[a].variable,l=u.mul(e.beta1).add(s.mul(1-e.beta1)),h=c.mul(e.beta2),f=s.abs(),d=h.maximum(f);u.assign(l),c.assign(d);var p=o.div(r).mul(l.div(d.add(e.epsilon))).add(i);i.assign(p);}})),e.iteration.assign(e.iteration.add(1)),e.accBeta1.assign(e.accBeta1.mul(e.beta1));})),this.incrementIterations();},o.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&tn(this.accumulatedFirstMoment.map((function(t){return t.variable}))),null!=this.accumulatedWeightedInfNorm&&tn(this.accumulatedWeightedInfNorm.map((function(t){return t.variable})));},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("getWeights() is not implemented for Adamax yet.")}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(t){throw new Error("setWeights() is not implemented for Adamax yet.")}))}))},o.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)},o.className="Adamax",o}(xd);cd(Ed);var Rd=function(t){function o(e){var n=t.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Array.isArray(t)?t[r].tensor:t[n];if(null!=o){var a=Lt.registeredVariables[n];Ze((function(){var t=e.c.mul(o).add(a);a.assign(t);}));}})),this.incrementIterations();},o.prototype.setLearningRate=function(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=en(On(-t));},o.prototype.dispose=function(){this.c.dispose();},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()]]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:if(0!==(t=e.sent()).length)throw new Error("SGD optimizer does not have settable weights.");return [2]}}))}))},o.prototype.getConfig=function(){return {learningRate:this.learningRate}},o.fromConfig=function(t,e){return new t(e.learningRate)},o.className="SGD",o}(xd);cd(Rd);var Id=function(t){function o(e,n,r){void 0===r&&(r=!1);var o=t.call(this,e)||this;return o.learningRate=e,o.momentum=n,o.useNesterov=r,o.accumulations=[],o.m=On(o.momentum),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];if(null==e.accumulations[r]){e.accumulations[r]={originalName:n+"/momentum",variable:Ze((function(){return Xn(o).variable(!1)}))};}var a=e.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[n];null!=i&&Ze((function(){var t,n=e.m.mul(a).add(i);t=e.useNesterov?e.c.mul(i.add(n.mul(e.m))).add(o):e.c.mul(n).add(o),a.assign(n),o.assign(t);}));})),this.incrementIterations();},o.prototype.dispose=function(){this.m.dispose(),null!=this.accumulations&&tn(this.accumulations.map((function(t){return t.variable})));},o.prototype.setMomentum=function(t){this.momentum=t;},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()].concat(this.accumulations.map((function(t){return {name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:return t=e.sent(),this.accumulations=t.map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}}))}))},o.prototype.getConfig=function(){return {learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},o.fromConfig=function(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)},o.className="Momentum",o}(Rd);cd(Id);var kd=function(t){function o(e,n,r,o,a){void 0===n&&(n=.9),void 0===r&&(r=0),void 0===o&&(o=null),void 0===a&&(a=!1);var i=t.call(this)||this;if(i.learningRate=e,i.decay=n,i.momentum=r,i.epsilon=o,i.accumulatedMeanSquares=[],i.accumulatedMoments=[],i.accumulatedMeanGrads=[],i.centered=a,null==o&&(i.epsilon=Lt.backend.epsilon()),null==e)throw new Error("learningRate for RMSPropOptimizer must be defined.");return i}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t)).forEach((function(n,r){var o=Lt.registeredVariables[n];null==e.accumulatedMeanSquares[r]&&(e.accumulatedMeanSquares[r]={originalName:n+"/rms",variable:Ze((function(){return Xn(o).variable(!1)}))}),null==e.accumulatedMoments[r]&&(e.accumulatedMoments[r]={originalName:n+"/momentum",variable:Ze((function(){return Xn(o).variable(!1)}))}),null==e.accumulatedMeanGrads[r]&&e.centered&&(e.accumulatedMeanGrads[r]={originalName:n+"/mg",variable:Ze((function(){return Xn(o).variable(!1)}))});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedMeanSquares[r].variable,s=e.accumulatedMoments[r].variable;Ze((function(){var t=i.mul(e.decay).add(a.square().mul(1-e.decay));if(e.centered){var n=e.accumulatedMeanGrads[r].variable,u=n.mul(e.decay).add(a.mul(1-e.decay)),c=s.mul(e.momentum).add(a.mul(e.learningRate).div(t.sub(u.square().add(e.epsilon)).sqrt()));i.assign(t),n.assign(u),s.assign(c);var l=o.sub(c);o.assign(l);}else {var h=i.mul(e.decay).add(a.square().mul(1-e.decay));c=s.mul(e.momentum).add(a.mul(e.learningRate).div(h.add(e.epsilon).sqrt()));i.assign(h),s.assign(c);l=o.sub(c);o.assign(l);}}));}})),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedMeanSquares&&tn(this.accumulatedMeanSquares.map((function(t){return t.variable}))),null!=this.accumulatedMeanGrads&&this.centered&&tn(this.accumulatedMeanGrads.map((function(t){return t.variable}))),null!=this.accumulatedMoments&&tn(this.accumulatedMoments.map((function(t){return t.variable})));},o.prototype.getWeights=function(){return n(this,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map((function(t){return {name:t.originalName,tensor:t.variable}})))]}}))}))},o.prototype.setWeights=function(t){return n(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return [4,this.extractIterations(t)];case 1:return t=n.sent(),e=this.centered?t.length/3:t.length/2,this.accumulatedMeanSquares=t.slice(0,e).map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),this.accumulatedMoments=t.slice(e,2*e).map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map((function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}))),[2]}}))}))},o.prototype.getConfig=function(){return {learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},o.fromConfig=function(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)},o.className="RMSProp",o}(xd);cd(kd);var Sd=function(){function t(){}return t.sgd=function(t){return new Rd(t)},t.momentum=function(t,e,n){return void 0===n&&(n=!1),new Id(t,e,n)},t.rmsprop=function(t,e,n,r,o){return void 0===e&&(e=.9),void 0===n&&(n=0),void 0===r&&(r=null),void 0===o&&(o=!1),new kd(t,e,n,r,o)},t.adam=function(t,e,n,r){return void 0===t&&(t=.001),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),new Cd(t,e,n,r)},t.adadelta=function(t,e,n){return void 0===t&&(t=.001),void 0===e&&(e=.95),void 0===n&&(n=null),new bd(t,e,n)},t.adamax=function(t,e,n,r,o){return void 0===t&&(t=.002),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),void 0===o&&(o=0),new Ed(t,e,n,r,o)},t.adagrad=function(t,e){return void 0===e&&(e=.1),new wd(t,e)},t}(),Ad={sgd:Sd.sgd,momentum:Sd.momentum,adadelta:Sd.adadelta,adagrad:Sd.adagrad,rmsprop:Sd.rmsprop,adamax:Sd.adamax,adam:Sd.adam},Dd="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:function(t){return t()};function Td(){return new Promise((function(t){return Dd((function(){return t()}))}))}wt.prototype.squaredDifference=function(t){return nu(this,t)},xt=Gh;

  var tfCore_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AdadeltaOptimizer: bd,
    AdagradOptimizer: wd,
    AdamOptimizer: Cd,
    AdamaxOptimizer: Ed,
    DataStorage: xo,
    get ENV () { return s; },
    Environment: o,
    KernelBackend: bo,
    MomentumOptimizer: Id,
    Optimizer: xd,
    RMSPropOptimizer: kd,
    get Rank () { return Ct; },
    get Reduction () { return ch; },
    SGDOptimizer: Rd,
    Tensor: wt,
    TensorBuffer: gt,
    Variable: St,
    abs: ru,
    acos: ou,
    acosh: au,
    add: rc,
    addN: oc,
    addStrict: ac,
    all: Cl,
    any: El,
    argMax: Rl,
    argMin: Il,
    asin: iu,
    asinh: su,
    atan: uu,
    atan2: ic,
    atanh: cu,
    avgPool: fl,
    avgPool3d: vl,
    backend: hn,
    backend_util: Uo,
    basicLSTMCell: zl,
    batchNorm: ju,
    batchNorm2d: Xu,
    batchNorm3d: Yu,
    batchNorm4d: $u,
    batchNormalization: Ku,
    batchNormalization2d: Gu,
    batchNormalization3d: Hu,
    batchNormalization4d: qu,
    batchToSpaceND: vr,
    booleanMaskAsync: Uc,
    broadcastTo: mr,
    browser: id,
    buffer: dr,
    cast: gr,
    ceil: lu,
    clipByValue: hu,
    clone: yr,
    complex: Dn,
    concat: Yn,
    concat1d: $n,
    concat2d: Qn,
    concat3d: Jn,
    concat4d: Zn,
    conv1d: Hc,
    conv2d: qc,
    conv2dTranspose: Zc,
    conv3d: Kc,
    conv3dTranspose: tl,
    cos: fu,
    cosh: du,
    cumsum: xr,
    customGrad: vo,
    deprecationWarn: Xe,
    depthToSpace: br,
    depthwiseConv2d: Yc,
    diag: eh,
    disableDeprecationWarnings: je,
    dispose: tn,
    disposeVariables: Ye,
    div: sc,
    divNoNan: uc,
    divStrict: cc,
    dot: nl,
    dropout: nh,
    elu: _l,
    enableDebugMode: Ke,
    enableProdMode: qe,
    engine: $e,
    env: i,
    equal: Rc,
    equalStrict: Ic,
    erf: pu,
    exp: vu,
    expandDims: wr,
    expm1: mu,
    eye: Cr,
    fft: Xl,
    fill: Hn,
    findBackend: un,
    findBackendFactory: cn,
    floor: gu,
    floorDiv: lc,
    frame: ih,
    fused: zh,
    gather: Lc,
    gatherND: th,
    gather_util: Xr,
    getBackend: an,
    getGradient: h,
    getKernel: l,
    getKernelsForBackend: f,
    grad: co,
    grads: lo,
    greater: kc,
    greaterEqual: Sc,
    greaterEqualStrict: Ac,
    greaterStrict: Dc,
    hammingWindow: ah,
    hannWindow: oh,
    ifft: Yl,
    imag: Nn,
    image: Oh,
    inTopKAsync: lh,
    io: ed,
    irfft: Ql,
    isFinite: Du,
    isInf: Au,
    isNaN: Su,
    keep: en,
    leakyRelu: Ol,
    less: Tc,
    lessEqual: Nc,
    lessEqualStrict: Fc,
    lessStrict: _c,
    linalg: Ih,
    linspace: qn,
    localResponseNormalization: Ul,
    log: yu,
    log1p: xu,
    logSigmoid: bu,
    logSoftmax: yo,
    logSumExp: kl,
    logicalAnd: Qu,
    logicalNot: Ju,
    logicalOr: Zu,
    logicalXor: tc,
    losses: bh,
    matMul: el,
    math: od,
    max: Sl,
    maxPool: hl,
    maxPool3d: pl,
    maximum: hc,
    maximumStrict: fc,
    mean: Al,
    memory: Qe,
    min: Dl,
    minimum: dc,
    minimumStrict: pc,
    mod: vc,
    modStrict: mc,
    moments: Tl,
    movingAverage: Hl,
    mul: gc,
    mulStrict: yc,
    multiRNNCell: Gl,
    multinomial: Er,
    neg: wu,
    nextFrame: Td,
    norm: Vl,
    notEqual: Oc,
    notEqualStrict: Mc,
    oneHot: Rr,
    ones: zn,
    onesLike: jn,
    op: An,
    outerProduct: rl,
    pad: Ir,
    pad1d: kr,
    pad2d: Sr,
    pad3d: Ar,
    pad4d: Dr,
    pool: dl,
    pow: xc,
    powStrict: bc,
    prelu: Ml,
    print: pr,
    prod: Fl,
    profile: Je,
    rand: Tr,
    randomGamma: Fr,
    randomNormal: Nr,
    randomUniform: _r,
    range: Kn,
    ready: on,
    real: Tn,
    reciprocal: Cu,
    registerBackend: ln,
    registerGradient: p,
    registerKernel: d,
    relu: Bl,
    relu6: Pl,
    removeBackend: sn,
    reshape: Or,
    reverse: ol,
    reverse1d: al,
    reverse2d: il,
    reverse3d: sl,
    reverse4d: ul,
    rfft: $l,
    round: Eu,
    rsqrt: Ru,
    scalar: On,
    scatterND: jl,
    scatter_util: to,
    selu: Ll,
    separableConv2d: Jc,
    serialization: ld,
    setBackend: rn,
    setPlatform: fn,
    setdiff1dAsync: Vr,
    sigmoid: Iu,
    sign: ku,
    signal: uh,
    sin: Tu,
    sinh: Nu,
    slice: ml,
    slice1d: gl,
    slice2d: yl,
    slice3d: xl,
    slice4d: bl,
    slice_util: uo,
    softmax: go,
    softplus: Fu,
    spaceToBatchND: Mr,
    sparseToDense: Zl,
    spectral: Jl,
    split: tr,
    sqrt: _u,
    square: tu,
    squaredDifference: nu,
    squaredDifferenceStrict: wc,
    squeeze: Br,
    stack: Pr,
    step: Ou,
    stft: sh,
    stridedSlice: ql,
    sub: Cc,
    subStrict: Ec,
    sum: Nl,
    sumOutType: Tt,
    tan: Mu,
    tanh: Bu,
    tensor: Fn,
    tensor1d: Mn,
    tensor2d: Bn,
    tensor3d: Pn,
    tensor4d: Ln,
    tensor5d: Wn,
    tensor6d: Un,
    tensor_util: Mt,
    test_util: md,
    tidy: Ze,
    tile: Lr,
    time: nn,
    topk: Kl,
    train: Ad,
    transpose: Wl,
    truncatedNormal: Wr,
    unregisterGradient: m,
    unregisterKernel: v,
    unsortedSegmentSum: Wc,
    unstack: Ur,
    util: st,
    valueAndGrad: ho,
    valueAndGrads: fo,
    variable: Vn,
    variableGrads: po,
    version_core: gd,
    webgl: yd,
    where: ec,
    whereAsync: nc,
    zeros: Gn,
    zerosLike: Xn
  });

  function drawContour(ctx, points, isClosed) {
      if (isClosed === void 0) { isClosed = false; }
      ctx.beginPath();
      points.slice(1).forEach(function (_a, prevIdx) {
          var x = _a.x, y = _a.y;
          var from = points[prevIdx];
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(x, y);
      });
      if (isClosed) {
          var from = points[points.length - 1];
          var to = points[0];
          if (!from || !to) {
              return;
          }
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
      }
      ctx.stroke();
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var Dimensions = /** @class */ (function () {
      function Dimensions(width, height) {
          if (!isValidNumber(width) || !isValidNumber(height)) {
              throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({ width: width, height: height }));
          }
          this._width = width;
          this._height = height;
      }
      Object.defineProperty(Dimensions.prototype, "width", {
          get: function () { return this._width; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Dimensions.prototype, "height", {
          get: function () { return this._height; },
          enumerable: true,
          configurable: true
      });
      Dimensions.prototype.reverse = function () {
          return new Dimensions(1 / this.width, 1 / this.height);
      };
      return Dimensions;
  }());

  function isTensor(tensor, dim) {
      return tensor instanceof wt && tensor.shape.length === dim;
  }
  function isTensor1D(tensor) {
      return isTensor(tensor, 1);
  }
  function isTensor2D(tensor) {
      return isTensor(tensor, 2);
  }
  function isTensor3D(tensor) {
      return isTensor(tensor, 3);
  }
  function isTensor4D(tensor) {
      return isTensor(tensor, 4);
  }
  function isFloat(num) {
      return num % 1 !== 0;
  }
  function isEven(num) {
      return num % 2 === 0;
  }
  function round(num, prec) {
      if (prec === void 0) { prec = 2; }
      var f = Math.pow(10, prec);
      return Math.floor(num * f) / f;
  }
  function isDimensions(obj) {
      return obj && obj.width && obj.height;
  }
  function computeReshapedDimensions(_a, inputSize) {
      var width = _a.width, height = _a.height;
      var scale = inputSize / Math.max(height, width);
      return new Dimensions(Math.round(width * scale), Math.round(height * scale));
  }
  function getCenterPoint(pts) {
      return pts.reduce(function (sum, pt) { return sum.add(pt); }, new Point(0, 0))
          .div(new Point(pts.length, pts.length));
  }
  function range(num, start, step) {
      return Array(num).fill(0).map(function (_, i) { return start + (i * step); });
  }
  function isValidNumber(num) {
      return !!num && num !== Infinity && num !== -Infinity && !isNaN(num) || num === 0;
  }
  function isValidProbablitiy(num) {
      return isValidNumber(num) && 0 <= num && num <= 1.0;
  }

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isTensor: isTensor,
    isTensor1D: isTensor1D,
    isTensor2D: isTensor2D,
    isTensor3D: isTensor3D,
    isTensor4D: isTensor4D,
    isFloat: isFloat,
    isEven: isEven,
    round: round,
    isDimensions: isDimensions,
    computeReshapedDimensions: computeReshapedDimensions,
    getCenterPoint: getCenterPoint,
    range: range,
    isValidNumber: isValidNumber,
    isValidProbablitiy: isValidProbablitiy
  });

  var Point = /** @class */ (function () {
      function Point(x, y) {
          this._x = x;
          this._y = y;
      }
      Object.defineProperty(Point.prototype, "x", {
          get: function () { return this._x; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Point.prototype, "y", {
          get: function () { return this._y; },
          enumerable: true,
          configurable: true
      });
      Point.prototype.add = function (pt) {
          return new Point(this.x + pt.x, this.y + pt.y);
      };
      Point.prototype.sub = function (pt) {
          return new Point(this.x - pt.x, this.y - pt.y);
      };
      Point.prototype.mul = function (pt) {
          return new Point(this.x * pt.x, this.y * pt.y);
      };
      Point.prototype.div = function (pt) {
          return new Point(this.x / pt.x, this.y / pt.y);
      };
      Point.prototype.abs = function () {
          return new Point(Math.abs(this.x), Math.abs(this.y));
      };
      Point.prototype.magnitude = function () {
          return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
      };
      Point.prototype.floor = function () {
          return new Point(Math.floor(this.x), Math.floor(this.y));
      };
      return Point;
  }());

  var Box = /** @class */ (function () {
      function Box(_box, allowNegativeDimensions) {
          if (allowNegativeDimensions === void 0) { allowNegativeDimensions = true; }
          var box = (_box || {});
          var isBbox = [box.left, box.top, box.right, box.bottom].every(isValidNumber);
          var isRect = [box.x, box.y, box.width, box.height].every(isValidNumber);
          if (!isRect && !isBbox) {
              throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(box));
          }
          var _a = isRect
              ? [box.x, box.y, box.width, box.height]
              : [box.left, box.top, box.right - box.left, box.bottom - box.top], x = _a[0], y = _a[1], width = _a[2], height = _a[3];
          Box.assertIsValidBox({ x: x, y: y, width: width, height: height }, 'Box.constructor', allowNegativeDimensions);
          this._x = x;
          this._y = y;
          this._width = width;
          this._height = height;
      }
      Box.isRect = function (rect) {
          return !!rect && [rect.x, rect.y, rect.width, rect.height].every(isValidNumber);
      };
      Box.assertIsValidBox = function (box, callee, allowNegativeDimensions) {
          if (allowNegativeDimensions === void 0) { allowNegativeDimensions = false; }
          if (!Box.isRect(box)) {
              throw new Error(callee + " - invalid box: " + JSON.stringify(box) + ", expected object with properties x, y, width, height");
          }
          if (!allowNegativeDimensions && (box.width < 0 || box.height < 0)) {
              throw new Error(callee + " - width (" + box.width + ") and height (" + box.height + ") must be positive numbers");
          }
      };
      Object.defineProperty(Box.prototype, "x", {
          get: function () { return this._x; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "y", {
          get: function () { return this._y; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "width", {
          get: function () { return this._width; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "height", {
          get: function () { return this._height; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "left", {
          get: function () { return this.x; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "top", {
          get: function () { return this.y; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "right", {
          get: function () { return this.x + this.width; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "bottom", {
          get: function () { return this.y + this.height; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "area", {
          get: function () { return this.width * this.height; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "topLeft", {
          get: function () { return new Point(this.left, this.top); },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "topRight", {
          get: function () { return new Point(this.right, this.top); },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "bottomLeft", {
          get: function () { return new Point(this.left, this.bottom); },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Box.prototype, "bottomRight", {
          get: function () { return new Point(this.right, this.bottom); },
          enumerable: true,
          configurable: true
      });
      Box.prototype.round = function () {
          var _a = [this.x, this.y, this.width, this.height]
              .map(function (val) { return Math.round(val); }), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
          return new Box({ x: x, y: y, width: width, height: height });
      };
      Box.prototype.floor = function () {
          var _a = [this.x, this.y, this.width, this.height]
              .map(function (val) { return Math.floor(val); }), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
          return new Box({ x: x, y: y, width: width, height: height });
      };
      Box.prototype.toSquare = function () {
          var _a = this, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
          var diff = Math.abs(width - height);
          if (width < height) {
              x -= (diff / 2);
              width += diff;
          }
          if (height < width) {
              y -= (diff / 2);
              height += diff;
          }
          return new Box({ x: x, y: y, width: width, height: height });
      };
      Box.prototype.rescale = function (s) {
          var scaleX = isDimensions(s) ? s.width : s;
          var scaleY = isDimensions(s) ? s.height : s;
          return new Box({
              x: this.x * scaleX,
              y: this.y * scaleY,
              width: this.width * scaleX,
              height: this.height * scaleY
          });
      };
      Box.prototype.pad = function (padX, padY) {
          var _a = [
              this.x - (padX / 2),
              this.y - (padY / 2),
              this.width + padX,
              this.height + padY
          ], x = _a[0], y = _a[1], width = _a[2], height = _a[3];
          return new Box({ x: x, y: y, width: width, height: height });
      };
      Box.prototype.clipAtImageBorders = function (imgWidth, imgHeight) {
          var _a = this, x = _a.x, y = _a.y, right = _a.right, bottom = _a.bottom;
          var clippedX = Math.max(x, 0);
          var clippedY = Math.max(y, 0);
          var newWidth = right - clippedX;
          var newHeight = bottom - clippedY;
          var clippedWidth = Math.min(newWidth, imgWidth - clippedX);
          var clippedHeight = Math.min(newHeight, imgHeight - clippedY);
          return (new Box({ x: clippedX, y: clippedY, width: clippedWidth, height: clippedHeight })).floor();
      };
      Box.prototype.shift = function (sx, sy) {
          var _a = this, width = _a.width, height = _a.height;
          var x = this.x + sx;
          var y = this.y + sy;
          return new Box({ x: x, y: y, width: width, height: height });
      };
      Box.prototype.padAtBorders = function (imageHeight, imageWidth) {
          var w = this.width + 1;
          var h = this.height + 1;
          var dx = 1;
          var dy = 1;
          var edx = w;
          var edy = h;
          var x = this.left;
          var y = this.top;
          var ex = this.right;
          var ey = this.bottom;
          if (ex > imageWidth) {
              edx = -ex + imageWidth + w;
              ex = imageWidth;
          }
          if (ey > imageHeight) {
              edy = -ey + imageHeight + h;
              ey = imageHeight;
          }
          if (x < 1) {
              edy = 2 - x;
              x = 1;
          }
          if (y < 1) {
              edy = 2 - y;
              y = 1;
          }
          return { dy: dy, edy: edy, dx: dx, edx: edx, y: y, ey: ey, x: x, ex: ex, w: w, h: h };
      };
      Box.prototype.calibrate = function (region) {
          return new Box({
              left: this.left + (region.left * this.width),
              top: this.top + (region.top * this.height),
              right: this.right + (region.right * this.width),
              bottom: this.bottom + (region.bottom * this.height)
          }).toSquare().round();
      };
      return Box;
  }());

  var BoundingBox = /** @class */ (function (_super) {
      __extends(BoundingBox, _super);
      function BoundingBox(left, top, right, bottom, allowNegativeDimensions) {
          if (allowNegativeDimensions === void 0) { allowNegativeDimensions = false; }
          return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, allowNegativeDimensions) || this;
      }
      return BoundingBox;
  }(Box));

  var ObjectDetection = /** @class */ (function () {
      function ObjectDetection(score, classScore, className, relativeBox, imageDims) {
          this._imageDims = new Dimensions(imageDims.width, imageDims.height);
          this._score = score;
          this._classScore = classScore;
          this._className = className;
          this._box = new Box(relativeBox).rescale(this._imageDims);
      }
      Object.defineProperty(ObjectDetection.prototype, "score", {
          get: function () { return this._score; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ObjectDetection.prototype, "classScore", {
          get: function () { return this._classScore; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ObjectDetection.prototype, "className", {
          get: function () { return this._className; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ObjectDetection.prototype, "box", {
          get: function () { return this._box; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ObjectDetection.prototype, "imageDims", {
          get: function () { return this._imageDims; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ObjectDetection.prototype, "imageWidth", {
          get: function () { return this.imageDims.width; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ObjectDetection.prototype, "imageHeight", {
          get: function () { return this.imageDims.height; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ObjectDetection.prototype, "relativeBox", {
          get: function () { return new Box(this._box).rescale(this.imageDims.reverse()); },
          enumerable: true,
          configurable: true
      });
      ObjectDetection.prototype.forSize = function (width, height) {
          return new ObjectDetection(this.score, this.classScore, this.className, this.relativeBox, { width: width, height: height });
      };
      return ObjectDetection;
  }());

  var FaceDetection = /** @class */ (function (_super) {
      __extends(FaceDetection, _super);
      function FaceDetection(score, relativeBox, imageDims) {
          return _super.call(this, score, score, '', relativeBox, imageDims) || this;
      }
      FaceDetection.prototype.forSize = function (width, height) {
          var _a = _super.prototype.forSize.call(this, width, height), score = _a.score, relativeBox = _a.relativeBox, imageDims = _a.imageDims;
          return new FaceDetection(score, relativeBox, imageDims);
      };
      return FaceDetection;
  }(ObjectDetection));

  function iou(box1, box2, isIOU) {
      if (isIOU === void 0) { isIOU = true; }
      var width = Math.max(0.0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
      var height = Math.max(0.0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
      var interSection = width * height;
      return isIOU
          ? interSection / (box1.area + box2.area - interSection)
          : interSection / Math.min(box1.area, box2.area);
  }

  function minBbox(pts) {
      var xs = pts.map(function (pt) { return pt.x; });
      var ys = pts.map(function (pt) { return pt.y; });
      var minX = xs.reduce(function (min, x) { return x < min ? x : min; }, Infinity);
      var minY = ys.reduce(function (min, y) { return y < min ? y : min; }, Infinity);
      var maxX = xs.reduce(function (max, x) { return max < x ? x : max; }, 0);
      var maxY = ys.reduce(function (max, y) { return max < y ? y : max; }, 0);
      return new BoundingBox(minX, minY, maxX, maxY);
  }

  function nonMaxSuppression(boxes, scores, iouThreshold, isIOU) {
      if (isIOU === void 0) { isIOU = true; }
      var indicesSortedByScore = scores
          .map(function (score, boxIndex) { return ({ score: score, boxIndex: boxIndex }); })
          .sort(function (c1, c2) { return c1.score - c2.score; })
          .map(function (c) { return c.boxIndex; });
      var pick = [];
      var _loop_1 = function () {
          var curr = indicesSortedByScore.pop();
          pick.push(curr);
          var indices = indicesSortedByScore;
          var outputs = [];
          for (var i = 0; i < indices.length; i++) {
              var idx = indices[i];
              var currBox = boxes[curr];
              var idxBox = boxes[idx];
              outputs.push(iou(currBox, idxBox, isIOU));
          }
          indicesSortedByScore = indicesSortedByScore.filter(function (_, j) { return outputs[j] <= iouThreshold; });
      };
      while (indicesSortedByScore.length > 0) {
          _loop_1();
      }
      return pick;
  }

  function normalize(x, meanRgb) {
      return Ze(function () {
          var r = meanRgb[0], g = meanRgb[1], b = meanRgb[2];
          var avg_r = Hn(__spreadArrays(x.shape.slice(0, 3), [1]), r);
          var avg_g = Hn(__spreadArrays(x.shape.slice(0, 3), [1]), g);
          var avg_b = Hn(__spreadArrays(x.shape.slice(0, 3), [1]), b);
          var avg_rgb = Yn([avg_r, avg_g, avg_b], 3);
          return Cc(x, avg_rgb);
      });
  }

  /**
   * Pads the smaller dimension of an image tensor with zeros, such that width === height.
   *
   * @param imgTensor The image tensor.
   * @param isCenterImage (optional, default: false) If true, add an equal amount of padding on
   * both sides of the minor dimension oof the image.
   * @returns The padded tensor with width === height.
   */
  function padToSquare(imgTensor, isCenterImage) {
      if (isCenterImage === void 0) { isCenterImage = false; }
      return Ze(function () {
          var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
          if (height === width) {
              return imgTensor;
          }
          var dimDiff = Math.abs(height - width);
          var paddingAmount = Math.round(dimDiff * (isCenterImage ? 0.5 : 1));
          var paddingAxis = height > width ? 2 : 1;
          var createPaddingTensor = function (paddingAmount) {
              var paddingTensorShape = imgTensor.shape.slice();
              paddingTensorShape[paddingAxis] = paddingAmount;
              return Hn(paddingTensorShape, 0);
          };
          var paddingTensorAppend = createPaddingTensor(paddingAmount);
          var remainingPaddingAmount = dimDiff - paddingTensorAppend.shape[paddingAxis];
          var paddingTensorPrepend = isCenterImage && remainingPaddingAmount
              ? createPaddingTensor(remainingPaddingAmount)
              : null;
          var tensorsToStack = [
              paddingTensorPrepend,
              imgTensor,
              paddingTensorAppend
          ]
              .filter(function (t) { return !!t; })
              .map(function (t) { return t.toFloat(); });
          return Yn(tensorsToStack, paddingAxis);
      });
  }

  function shuffleArray(inputArray) {
      var array = inputArray.slice();
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var x = array[i];
          array[i] = array[j];
          array[j] = x;
      }
      return array;
  }

  function sigmoid(x) {
      return 1 / (1 + Math.exp(-x));
  }
  function inverseSigmoid(x) {
      return Math.log(x / (1 - x));
  }

  var Rect = /** @class */ (function (_super) {
      __extends(Rect, _super);
      function Rect(x, y, width, height, allowNegativeDimensions) {
          if (allowNegativeDimensions === void 0) { allowNegativeDimensions = false; }
          return _super.call(this, { x: x, y: y, width: width, height: height }, allowNegativeDimensions) || this;
      }
      return Rect;
  }(Box));

  // face alignment constants
  var relX = 0.5;
  var relY = 0.43;
  var relScale = 0.45;
  var FaceLandmarks = /** @class */ (function () {
      function FaceLandmarks(relativeFaceLandmarkPositions, imgDims, shift) {
          if (shift === void 0) { shift = new Point(0, 0); }
          var width = imgDims.width, height = imgDims.height;
          this._imgDims = new Dimensions(width, height);
          this._shift = shift;
          this._positions = relativeFaceLandmarkPositions.map(function (pt) { return pt.mul(new Point(width, height)).add(shift); });
      }
      Object.defineProperty(FaceLandmarks.prototype, "shift", {
          get: function () { return new Point(this._shift.x, this._shift.y); },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FaceLandmarks.prototype, "imageWidth", {
          get: function () { return this._imgDims.width; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FaceLandmarks.prototype, "imageHeight", {
          get: function () { return this._imgDims.height; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FaceLandmarks.prototype, "positions", {
          get: function () { return this._positions; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FaceLandmarks.prototype, "relativePositions", {
          get: function () {
              var _this = this;
              return this._positions.map(function (pt) { return pt.sub(_this._shift).div(new Point(_this.imageWidth, _this.imageHeight)); });
          },
          enumerable: true,
          configurable: true
      });
      FaceLandmarks.prototype.forSize = function (width, height) {
          return new this.constructor(this.relativePositions, { width: width, height: height });
      };
      FaceLandmarks.prototype.shiftBy = function (x, y) {
          return new this.constructor(this.relativePositions, this._imgDims, new Point(x, y));
      };
      FaceLandmarks.prototype.shiftByPoint = function (pt) {
          return this.shiftBy(pt.x, pt.y);
      };
      /**
       * Aligns the face landmarks after face detection from the relative positions of the faces
       * bounding box, or it's current shift. This function should be used to align the face images
       * after face detection has been performed, before they are passed to the face recognition net.
       * This will make the computed face descriptor more accurate.
       *
       * @param detection (optional) The bounding box of the face or the face detection result. If
       * no argument was passed the position of the face landmarks are assumed to be relative to
       * it's current shift.
       * @returns The bounding box of the aligned face.
       */
      FaceLandmarks.prototype.align = function (detection, options) {
          if (options === void 0) { options = {}; }
          if (detection) {
              var box = detection instanceof FaceDetection
                  ? detection.box.floor()
                  : new Box(detection);
              return this.shiftBy(box.x, box.y).align(null, options);
          }
          var _a = Object.assign({}, { useDlibAlignment: false, minBoxPadding: 0.2 }, options), useDlibAlignment = _a.useDlibAlignment, minBoxPadding = _a.minBoxPadding;
          if (useDlibAlignment) {
              return this.alignDlib();
          }
          return this.alignMinBbox(minBoxPadding);
      };
      FaceLandmarks.prototype.alignDlib = function () {
          var centers = this.getRefPointsForAlignment();
          var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
          var distToMouth = function (pt) { return mouthCenter.sub(pt).magnitude(); };
          var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
          var size = Math.floor(eyeToMouthDist / relScale);
          var refPoint = getCenterPoint(centers);
          // TODO: pad in case rectangle is out of image bounds
          var x = Math.floor(Math.max(0, refPoint.x - (relX * size)));
          var y = Math.floor(Math.max(0, refPoint.y - (relY * size)));
          return new Rect(x, y, Math.min(size, this.imageWidth + x), Math.min(size, this.imageHeight + y));
      };
      FaceLandmarks.prototype.alignMinBbox = function (padding) {
          var box = minBbox(this.positions);
          return box.pad(box.width * padding, box.height * padding);
      };
      FaceLandmarks.prototype.getRefPointsForAlignment = function () {
          throw new Error('getRefPointsForAlignment not implemented by base class');
      };
      return FaceLandmarks;
  }());

  var FaceLandmarks5 = /** @class */ (function (_super) {
      __extends(FaceLandmarks5, _super);
      function FaceLandmarks5() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      FaceLandmarks5.prototype.getRefPointsForAlignment = function () {
          var pts = this.positions;
          return [
              pts[0],
              pts[1],
              getCenterPoint([pts[3], pts[4]])
          ];
      };
      return FaceLandmarks5;
  }(FaceLandmarks));

  var FaceLandmarks68 = /** @class */ (function (_super) {
      __extends(FaceLandmarks68, _super);
      function FaceLandmarks68() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      FaceLandmarks68.prototype.getJawOutline = function () {
          return this.positions.slice(0, 17);
      };
      FaceLandmarks68.prototype.getLeftEyeBrow = function () {
          return this.positions.slice(17, 22);
      };
      FaceLandmarks68.prototype.getRightEyeBrow = function () {
          return this.positions.slice(22, 27);
      };
      FaceLandmarks68.prototype.getNose = function () {
          return this.positions.slice(27, 36);
      };
      FaceLandmarks68.prototype.getLeftEye = function () {
          return this.positions.slice(36, 42);
      };
      FaceLandmarks68.prototype.getRightEye = function () {
          return this.positions.slice(42, 48);
      };
      FaceLandmarks68.prototype.getMouth = function () {
          return this.positions.slice(48, 68);
      };
      FaceLandmarks68.prototype.getRefPointsForAlignment = function () {
          return [
              this.getLeftEye(),
              this.getRightEye(),
              this.getMouth()
          ].map(getCenterPoint);
      };
      return FaceLandmarks68;
  }(FaceLandmarks));

  var FaceMatch = /** @class */ (function () {
      function FaceMatch(label, distance) {
          this._label = label;
          this._distance = distance;
      }
      Object.defineProperty(FaceMatch.prototype, "label", {
          get: function () { return this._label; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FaceMatch.prototype, "distance", {
          get: function () { return this._distance; },
          enumerable: true,
          configurable: true
      });
      FaceMatch.prototype.toString = function (withDistance) {
          if (withDistance === void 0) { withDistance = true; }
          return "" + this.label + (withDistance ? " (" + round(this.distance) + ")" : '');
      };
      return FaceMatch;
  }());

  var LabeledBox = /** @class */ (function (_super) {
      __extends(LabeledBox, _super);
      function LabeledBox(box, label) {
          var _this = _super.call(this, box) || this;
          _this._label = label;
          return _this;
      }
      LabeledBox.assertIsValidLabeledBox = function (box, callee) {
          Box.assertIsValidBox(box, callee);
          if (!isValidNumber(box.label)) {
              throw new Error(callee + " - expected property label (" + box.label + ") to be a number");
          }
      };
      Object.defineProperty(LabeledBox.prototype, "label", {
          get: function () { return this._label; },
          enumerable: true,
          configurable: true
      });
      return LabeledBox;
  }(Box));

  var LabeledFaceDescriptors = /** @class */ (function () {
      function LabeledFaceDescriptors(label, descriptors) {
          if (!(typeof label === 'string')) {
              throw new Error('LabeledFaceDescriptors - constructor expected label to be a string');
          }
          if (!Array.isArray(descriptors) || descriptors.some(function (desc) { return !(desc instanceof Float32Array); })) {
              throw new Error('LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array');
          }
          this._label = label;
          this._descriptors = descriptors;
      }
      Object.defineProperty(LabeledFaceDescriptors.prototype, "label", {
          get: function () { return this._label; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(LabeledFaceDescriptors.prototype, "descriptors", {
          get: function () { return this._descriptors; },
          enumerable: true,
          configurable: true
      });
      LabeledFaceDescriptors.prototype.toJSON = function () {
          return {
              label: this.label,
              descriptors: this.descriptors.map(function (d) { return Array.from(d); })
          };
      };
      LabeledFaceDescriptors.fromJSON = function (json) {
          var descriptors = json.descriptors.map(function (d) {
              return new Float32Array(d);
          });
          return new LabeledFaceDescriptors(json.label, descriptors);
      };
      return LabeledFaceDescriptors;
  }());

  var PredictedBox = /** @class */ (function (_super) {
      __extends(PredictedBox, _super);
      function PredictedBox(box, label, score, classScore) {
          var _this = _super.call(this, box, label) || this;
          _this._score = score;
          _this._classScore = classScore;
          return _this;
      }
      PredictedBox.assertIsValidPredictedBox = function (box, callee) {
          LabeledBox.assertIsValidLabeledBox(box, callee);
          if (!isValidProbablitiy(box.score)
              || !isValidProbablitiy(box.classScore)) {
              throw new Error(callee + " - expected properties score (" + box.score + ") and (" + box.classScore + ") to be a number between [0, 1]");
          }
      };
      Object.defineProperty(PredictedBox.prototype, "score", {
          get: function () { return this._score; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(PredictedBox.prototype, "classScore", {
          get: function () { return this._classScore; },
          enumerable: true,
          configurable: true
      });
      return PredictedBox;
  }(LabeledBox));

  function isWithFaceDetection(obj) {
      return obj['detection'] instanceof FaceDetection;
  }
  function extendWithFaceDetection(sourceObj, detection) {
      var extension = { detection: detection };
      return Object.assign({}, sourceObj, extension);
  }

  function createBrowserEnv() {
      var fetch = window['fetch'] || function () {
          throw new Error('fetch - missing fetch implementation for browser environment');
      };
      var readFile = function () {
          throw new Error('readFile - filesystem not available for browser environment');
      };
      return {
          Canvas: HTMLCanvasElement,
          CanvasRenderingContext2D: CanvasRenderingContext2D,
          Image: HTMLImageElement,
          ImageData: ImageData,
          Video: HTMLVideoElement,
          createCanvasElement: function () { return document.createElement('canvas'); },
          createImageElement: function () { return document.createElement('img'); },
          fetch: fetch,
          readFile: readFile
      };
  }

  function createFileSystem(fs) {
      var requireFsError = '';
      if (!fs) {
          try {
              fs = require('fs');
          }
          catch (err) {
              requireFsError = err.toString();
          }
      }
      var readFile = fs
          ? function (filePath) {
              return new Promise(function (res, rej) {
                  fs.readFile(filePath, function (err, buffer) {
                      return err ? rej(err) : res(buffer);
                  });
              });
          }
          : function () {
              throw new Error("readFile - failed to require fs in nodejs environment with error: " + requireFsError);
          };
      return {
          readFile: readFile
      };
  }

  function createNodejsEnv() {
      var Canvas = global['Canvas'] || global['HTMLCanvasElement'];
      var Image = global['Image'] || global['HTMLImageElement'];
      var createCanvasElement = function () {
          if (Canvas) {
              return new Canvas();
          }
          throw new Error('createCanvasElement - missing Canvas implementation for nodejs environment');
      };
      var createImageElement = function () {
          if (Image) {
              return new Image();
          }
          throw new Error('createImageElement - missing Image implementation for nodejs environment');
      };
      var fetch = global['fetch'] || function () {
          throw new Error('fetch - missing fetch implementation for nodejs environment');
      };
      var fileSystem = createFileSystem();
      return __assign({ Canvas: Canvas || /** @class */ (function () {
              function Canvas() {
              }
              return Canvas;
          }()), CanvasRenderingContext2D: global['CanvasRenderingContext2D'] || /** @class */ (function () {
              function class_1() {
              }
              return class_1;
          }()), Image: Image || /** @class */ (function () {
              function Image() {
              }
              return Image;
          }()), ImageData: global['ImageData'] || /** @class */ (function () {
              function class_2() {
              }
              return class_2;
          }()), Video: global['HTMLVideoElement'] || /** @class */ (function () {
              function class_3() {
              }
              return class_3;
          }()), createCanvasElement: createCanvasElement,
          createImageElement: createImageElement,
          fetch: fetch }, fileSystem);
  }

  function isBrowser() {
      return typeof window === 'object'
          && typeof document !== 'undefined'
          && typeof HTMLImageElement !== 'undefined'
          && typeof HTMLCanvasElement !== 'undefined'
          && typeof HTMLVideoElement !== 'undefined'
          && typeof ImageData !== 'undefined'
          && typeof CanvasRenderingContext2D !== 'undefined';
  }

  function isNodejs() {
      return typeof global === 'object'
          && typeof require === 'function'
          && typeof module !== 'undefined'
          // issues with gatsby.js: module.exports is undefined
          // && !!module.exports
          && typeof process !== 'undefined' && !!process.version;
  }

  var environment;
  function getEnv() {
      if (!environment) {
          throw new Error('getEnv - environment is not defined, check isNodejs() and isBrowser()');
      }
      return environment;
  }
  function setEnv(env) {
      environment = env;
  }
  function initialize() {
      // check for isBrowser() first to prevent electron renderer process
      // to be initialized with wrong environment due to isNodejs() returning true
      if (isBrowser()) {
          setEnv(createBrowserEnv());
      }
      if (isNodejs()) {
          setEnv(createNodejsEnv());
      }
  }
  function monkeyPatch(env) {
      if (!environment) {
          initialize();
      }
      if (!environment) {
          throw new Error('monkeyPatch - environment is not defined, check isNodejs() and isBrowser()');
      }
      var _a = env.Canvas, Canvas = _a === void 0 ? environment.Canvas : _a, _b = env.Image, Image = _b === void 0 ? environment.Image : _b;
      environment.Canvas = Canvas;
      environment.Image = Image;
      environment.createCanvasElement = env.createCanvasElement || (function () { return new Canvas(); });
      environment.createImageElement = env.createImageElement || (function () { return new Image(); });
      environment.ImageData = env.ImageData || environment.ImageData;
      environment.Video = env.Video || environment.Video;
      environment.fetch = env.fetch || environment.fetch;
      environment.readFile = env.readFile || environment.readFile;
  }
  var env = {
      getEnv: getEnv,
      setEnv: setEnv,
      initialize: initialize,
      createBrowserEnv: createBrowserEnv,
      createFileSystem: createFileSystem,
      createNodejsEnv: createNodejsEnv,
      monkeyPatch: monkeyPatch,
      isBrowser: isBrowser,
      isNodejs: isNodejs
  };
  initialize();

  function resolveInput(arg) {
      if (!env.isNodejs() && typeof arg === 'string') {
          return document.getElementById(arg);
      }
      return arg;
  }

  function getContext2dOrThrow(canvasArg) {
      var _a = env.getEnv(), Canvas = _a.Canvas, CanvasRenderingContext2D = _a.CanvasRenderingContext2D;
      if (canvasArg instanceof CanvasRenderingContext2D) {
          return canvasArg;
      }
      var canvas = resolveInput(canvasArg);
      if (!(canvas instanceof Canvas)) {
          throw new Error('resolveContext2d - expected canvas to be of instance of Canvas');
      }
      var ctx = canvas.getContext('2d');
      if (!ctx) {
          throw new Error('resolveContext2d - canvas 2d context is null');
      }
      return ctx;
  }

  var AnchorPosition;
  (function (AnchorPosition) {
      AnchorPosition["TOP_LEFT"] = "TOP_LEFT";
      AnchorPosition["TOP_RIGHT"] = "TOP_RIGHT";
      AnchorPosition["BOTTOM_LEFT"] = "BOTTOM_LEFT";
      AnchorPosition["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
  })(AnchorPosition || (AnchorPosition = {}));
  var DrawTextFieldOptions = /** @class */ (function () {
      function DrawTextFieldOptions(options) {
          if (options === void 0) { options = {}; }
          var anchorPosition = options.anchorPosition, backgroundColor = options.backgroundColor, fontColor = options.fontColor, fontSize = options.fontSize, fontStyle = options.fontStyle, padding = options.padding;
          this.anchorPosition = anchorPosition || AnchorPosition.TOP_LEFT;
          this.backgroundColor = backgroundColor || 'rgba(0, 0, 0, 0.5)';
          this.fontColor = fontColor || 'rgba(255, 255, 255, 1)';
          this.fontSize = fontSize || 14;
          this.fontStyle = fontStyle || 'Georgia';
          this.padding = padding || 4;
      }
      return DrawTextFieldOptions;
  }());
  var DrawTextField = /** @class */ (function () {
      function DrawTextField(text, anchor, options) {
          if (options === void 0) { options = {}; }
          this.text = typeof text === 'string'
              ? [text]
              : (text instanceof DrawTextField ? text.text : text);
          this.anchor = anchor;
          this.options = new DrawTextFieldOptions(options);
      }
      DrawTextField.prototype.measureWidth = function (ctx) {
          var padding = this.options.padding;
          return this.text.map(function (l) { return ctx.measureText(l).width; }).reduce(function (w0, w1) { return w0 < w1 ? w1 : w0; }, 0) + (2 * padding);
      };
      DrawTextField.prototype.measureHeight = function () {
          var _a = this.options, fontSize = _a.fontSize, padding = _a.padding;
          return this.text.length * fontSize + (2 * padding);
      };
      DrawTextField.prototype.getUpperLeft = function (ctx, canvasDims) {
          var anchorPosition = this.options.anchorPosition;
          var isShiftLeft = anchorPosition === AnchorPosition.BOTTOM_RIGHT || anchorPosition === AnchorPosition.TOP_RIGHT;
          var isShiftTop = anchorPosition === AnchorPosition.BOTTOM_LEFT || anchorPosition === AnchorPosition.BOTTOM_RIGHT;
          var textFieldWidth = this.measureWidth(ctx);
          var textFieldHeight = this.measureHeight();
          var x = (isShiftLeft ? this.anchor.x - textFieldWidth : this.anchor.x);
          var y = isShiftTop ? this.anchor.y - textFieldHeight : this.anchor.y;
          // adjust anchor if text box exceeds canvas borders
          if (canvasDims) {
              var width = canvasDims.width, height = canvasDims.height;
              var newX = Math.max(Math.min(x, width - textFieldWidth), 0);
              var newY = Math.max(Math.min(y, height - textFieldHeight), 0);
              return { x: newX, y: newY };
          }
          return { x: x, y: y };
      };
      DrawTextField.prototype.draw = function (canvasArg) {
          var canvas = resolveInput(canvasArg);
          var ctx = getContext2dOrThrow(canvas);
          var _a = this.options, backgroundColor = _a.backgroundColor, fontColor = _a.fontColor, fontSize = _a.fontSize, fontStyle = _a.fontStyle, padding = _a.padding;
          ctx.font = fontSize + "px " + fontStyle;
          var maxTextWidth = this.measureWidth(ctx);
          var textHeight = this.measureHeight();
          ctx.fillStyle = backgroundColor;
          var upperLeft = this.getUpperLeft(ctx, canvas);
          ctx.fillRect(upperLeft.x, upperLeft.y, maxTextWidth, textHeight);
          ctx.fillStyle = fontColor;
          this.text.forEach(function (textLine, i) {
              var x = padding + upperLeft.x;
              var y = padding + upperLeft.y + ((i + 1) * fontSize);
              ctx.fillText(textLine, x, y);
          });
      };
      return DrawTextField;
  }());

  var DrawBoxOptions = /** @class */ (function () {
      function DrawBoxOptions(options) {
          if (options === void 0) { options = {}; }
          var boxColor = options.boxColor, lineWidth = options.lineWidth, label = options.label, drawLabelOptions = options.drawLabelOptions;
          this.boxColor = boxColor || 'rgba(0, 0, 255, 1)';
          this.lineWidth = lineWidth || 2;
          this.label = label;
          var defaultDrawLabelOptions = {
              anchorPosition: AnchorPosition.BOTTOM_LEFT,
              backgroundColor: this.boxColor
          };
          this.drawLabelOptions = new DrawTextFieldOptions(Object.assign({}, defaultDrawLabelOptions, drawLabelOptions));
      }
      return DrawBoxOptions;
  }());
  var DrawBox = /** @class */ (function () {
      function DrawBox(box, options) {
          if (options === void 0) { options = {}; }
          this.box = new Box(box);
          this.options = new DrawBoxOptions(options);
      }
      DrawBox.prototype.draw = function (canvasArg) {
          var ctx = getContext2dOrThrow(canvasArg);
          var _a = this.options, boxColor = _a.boxColor, lineWidth = _a.lineWidth;
          var _b = this.box, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
          ctx.strokeStyle = boxColor;
          ctx.lineWidth = lineWidth;
          ctx.strokeRect(x, y, width, height);
          var label = this.options.label;
          if (label) {
              new DrawTextField([label], { x: x - (lineWidth / 2), y: y }, this.options.drawLabelOptions).draw(canvasArg);
          }
      };
      return DrawBox;
  }());

  function drawDetections(canvasArg, detections) {
      var detectionsArray = Array.isArray(detections) ? detections : [detections];
      detectionsArray.forEach(function (det) {
          var score = det instanceof FaceDetection
              ? det.score
              : (isWithFaceDetection(det) ? det.detection.score : undefined);
          var box = det instanceof FaceDetection
              ? det.box
              : (isWithFaceDetection(det) ? det.detection.box : new Box(det));
          var label = score ? "" + round(score) : undefined;
          new DrawBox(box, { label: label }).draw(canvasArg);
      });
  }

  function isMediaLoaded(media) {
      var _a = env.getEnv(), Image = _a.Image, Video = _a.Video;
      return (media instanceof Image && media.complete)
          || (media instanceof Video && media.readyState >= 3);
  }

  function awaitMediaLoaded(media) {
      return new Promise(function (resolve, reject) {
          if (media instanceof env.getEnv().Canvas || isMediaLoaded(media)) {
              return resolve();
          }
          function onLoad(e) {
              if (!e.currentTarget)
                  return;
              e.currentTarget.removeEventListener('load', onLoad);
              e.currentTarget.removeEventListener('error', onError);
              resolve(e);
          }
          function onError(e) {
              if (!e.currentTarget)
                  return;
              e.currentTarget.removeEventListener('load', onLoad);
              e.currentTarget.removeEventListener('error', onError);
              reject(e);
          }
          media.addEventListener('load', onLoad);
          media.addEventListener('error', onError);
      });
  }

  function bufferToImage(buf) {
      return new Promise(function (resolve, reject) {
          if (!(buf instanceof Blob)) {
              return reject('bufferToImage - expected buf to be of type: Blob');
          }
          var reader = new FileReader();
          reader.onload = function () {
              if (typeof reader.result !== 'string') {
                  return reject('bufferToImage - expected reader.result to be a string, in onload');
              }
              var img = env.getEnv().createImageElement();
              img.onload = function () { return resolve(img); };
              img.onerror = reject;
              img.src = reader.result;
          };
          reader.onerror = reject;
          reader.readAsDataURL(buf);
      });
  }

  function getMediaDimensions(input) {
      var _a = env.getEnv(), Image = _a.Image, Video = _a.Video;
      if (input instanceof Image) {
          return new Dimensions(input.naturalWidth, input.naturalHeight);
      }
      if (input instanceof Video) {
          return new Dimensions(input.videoWidth, input.videoHeight);
      }
      return new Dimensions(input.width, input.height);
  }

  function createCanvas(_a) {
      var width = _a.width, height = _a.height;
      var createCanvasElement = env.getEnv().createCanvasElement;
      var canvas = createCanvasElement();
      canvas.width = width;
      canvas.height = height;
      return canvas;
  }
  function createCanvasFromMedia(media, dims) {
      var ImageData = env.getEnv().ImageData;
      if (!(media instanceof ImageData) && !isMediaLoaded(media)) {
          throw new Error('createCanvasFromMedia - media has not finished loading yet');
      }
      var _a = dims || getMediaDimensions(media), width = _a.width, height = _a.height;
      var canvas = createCanvas({ width: width, height: height });
      if (media instanceof ImageData) {
          getContext2dOrThrow(canvas).putImageData(media, 0, 0);
      }
      else {
          getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
      }
      return canvas;
  }

  function imageTensorToCanvas(imgTensor, canvas) {
      return __awaiter(this, void 0, void 0, function () {
          var targetCanvas, _a, height, width, numChannels, imgTensor3D;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      targetCanvas = canvas || env.getEnv().createCanvasElement();
                      _a = imgTensor.shape.slice(isTensor4D(imgTensor) ? 1 : 0), height = _a[0], width = _a[1], numChannels = _a[2];
                      imgTensor3D = Ze(function () { return imgTensor.as3D(height, width, numChannels).toInt(); });
                      return [4 /*yield*/, id.toPixels(imgTensor3D, targetCanvas)];
                  case 1:
                      _b.sent();
                      imgTensor3D.dispose();
                      return [2 /*return*/, targetCanvas];
              }
          });
      });
  }

  function isMediaElement(input) {
      var _a = env.getEnv(), Image = _a.Image, Canvas = _a.Canvas, Video = _a.Video;
      return input instanceof Image
          || input instanceof Canvas
          || input instanceof Video;
  }

  function imageToSquare(input, inputSize, centerImage) {
      if (centerImage === void 0) { centerImage = false; }
      var _a = env.getEnv(), Image = _a.Image, Canvas = _a.Canvas;
      if (!(input instanceof Image || input instanceof Canvas)) {
          throw new Error('imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement');
      }
      var dims = getMediaDimensions(input);
      var scale = inputSize / Math.max(dims.height, dims.width);
      var width = scale * dims.width;
      var height = scale * dims.height;
      var targetCanvas = createCanvas({ width: inputSize, height: inputSize });
      var inputCanvas = input instanceof Canvas ? input : createCanvasFromMedia(input);
      var offset = Math.abs(width - height) / 2;
      var dx = centerImage && width < height ? offset : 0;
      var dy = centerImage && height < width ? offset : 0;
      getContext2dOrThrow(targetCanvas).drawImage(inputCanvas, dx, dy, width, height);
      return targetCanvas;
  }

  var NetInput = /** @class */ (function () {
      function NetInput(inputs, treatAsBatchInput) {
          var _this = this;
          if (treatAsBatchInput === void 0) { treatAsBatchInput = false; }
          this._imageTensors = [];
          this._canvases = [];
          this._treatAsBatchInput = false;
          this._inputDimensions = [];
          if (!Array.isArray(inputs)) {
              throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + inputs);
          }
          this._treatAsBatchInput = treatAsBatchInput;
          this._batchSize = inputs.length;
          inputs.forEach(function (input, idx) {
              if (isTensor3D(input)) {
                  _this._imageTensors[idx] = input;
                  _this._inputDimensions[idx] = input.shape;
                  return;
              }
              if (isTensor4D(input)) {
                  var batchSize = input.shape[0];
                  if (batchSize !== 1) {
                      throw new Error("NetInput - tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                  }
                  _this._imageTensors[idx] = input;
                  _this._inputDimensions[idx] = input.shape.slice(1);
                  return;
              }
              var canvas = input instanceof env.getEnv().Canvas ? input : createCanvasFromMedia(input);
              _this._canvases[idx] = canvas;
              _this._inputDimensions[idx] = [canvas.height, canvas.width, 3];
          });
      }
      Object.defineProperty(NetInput.prototype, "imageTensors", {
          get: function () {
              return this._imageTensors;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "canvases", {
          get: function () {
              return this._canvases;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "isBatchInput", {
          get: function () {
              return this.batchSize > 1 || this._treatAsBatchInput;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "batchSize", {
          get: function () {
              return this._batchSize;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "inputDimensions", {
          get: function () {
              return this._inputDimensions;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "inputSize", {
          get: function () {
              return this._inputSize;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "reshapedInputDimensions", {
          get: function () {
              var _this = this;
              return range(this.batchSize, 0, 1).map(function (_, batchIdx) { return _this.getReshapedInputDimensions(batchIdx); });
          },
          enumerable: true,
          configurable: true
      });
      NetInput.prototype.getInput = function (batchIdx) {
          return this.canvases[batchIdx] || this.imageTensors[batchIdx];
      };
      NetInput.prototype.getInputDimensions = function (batchIdx) {
          return this._inputDimensions[batchIdx];
      };
      NetInput.prototype.getInputHeight = function (batchIdx) {
          return this._inputDimensions[batchIdx][0];
      };
      NetInput.prototype.getInputWidth = function (batchIdx) {
          return this._inputDimensions[batchIdx][1];
      };
      NetInput.prototype.getReshapedInputDimensions = function (batchIdx) {
          if (typeof this.inputSize !== 'number') {
              throw new Error('getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet');
          }
          var width = this.getInputWidth(batchIdx);
          var height = this.getInputHeight(batchIdx);
          return computeReshapedDimensions({ width: width, height: height }, this.inputSize);
      };
      /**
       * Create a batch tensor from all input canvases and tensors
       * with size [batchSize, inputSize, inputSize, 3].
       *
       * @param inputSize Height and width of the tensor.
       * @param isCenterImage (optional, default: false) If true, add an equal amount of padding on
       * both sides of the minor dimension oof the image.
       * @returns The batch tensor.
       */
      NetInput.prototype.toBatchTensor = function (inputSize, isCenterInputs) {
          var _this = this;
          if (isCenterInputs === void 0) { isCenterInputs = true; }
          this._inputSize = inputSize;
          return Ze(function () {
              var inputTensors = range(_this.batchSize, 0, 1).map(function (batchIdx) {
                  var input = _this.getInput(batchIdx);
                  if (input instanceof wt) {
                      var imgTensor = isTensor4D(input) ? input : input.expandDims();
                      imgTensor = padToSquare(imgTensor, isCenterInputs);
                      if (imgTensor.shape[1] !== inputSize || imgTensor.shape[2] !== inputSize) {
                          imgTensor = Oh.resizeBilinear(imgTensor, [inputSize, inputSize]);
                      }
                      return imgTensor.as3D(inputSize, inputSize, 3);
                  }
                  if (input instanceof env.getEnv().Canvas) {
                      return id.fromPixels(imageToSquare(input, inputSize, isCenterInputs));
                  }
                  throw new Error("toBatchTensor - at batchIdx " + batchIdx + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + input);
              });
              var batchTensor = Pr(inputTensors.map(function (t) { return t.toFloat(); })).as4D(_this.batchSize, inputSize, inputSize, 3);
              return batchTensor;
          });
      };
      return NetInput;
  }());

  /**
   * Validates the input to make sure, they are valid net inputs and awaits all media elements
   * to be finished loading.
   *
   * @param input The input, which can be a media element or an array of different media elements.
   * @returns A NetInput instance, which can be passed into one of the neural networks.
   */
  function toNetInput(inputs) {
      return __awaiter(this, void 0, void 0, function () {
          var inputArgArray, getIdxHint, inputArray;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (inputs instanceof NetInput) {
                          return [2 /*return*/, inputs];
                      }
                      inputArgArray = Array.isArray(inputs)
                          ? inputs
                          : [inputs];
                      if (!inputArgArray.length) {
                          throw new Error('toNetInput - empty array passed as input');
                      }
                      getIdxHint = function (idx) { return Array.isArray(inputs) ? " at input index " + idx + ":" : ''; };
                      inputArray = inputArgArray.map(resolveInput);
                      inputArray.forEach(function (input, i) {
                          if (!isMediaElement(input) && !isTensor3D(input) && !isTensor4D(input)) {
                              if (typeof inputArgArray[i] === 'string') {
                                  throw new Error("toNetInput -" + getIdxHint(i) + " string passed, but could not resolve HTMLElement for element id " + inputArgArray[i]);
                              }
                              throw new Error("toNetInput -" + getIdxHint(i) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
                          }
                          if (isTensor4D(input)) {
                              // if tf.Tensor4D is passed in the input array, the batch size has to be 1
                              var batchSize = input.shape[0];
                              if (batchSize !== 1) {
                                  throw new Error("toNetInput -" + getIdxHint(i) + " tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                              }
                          }
                      });
                      // wait for all media elements being loaded
                      return [4 /*yield*/, Promise.all(inputArray.map(function (input) { return isMediaElement(input) && awaitMediaLoaded(input); }))];
                  case 1:
                      // wait for all media elements being loaded
                      _a.sent();
                      return [2 /*return*/, new NetInput(inputArray, Array.isArray(inputs))];
              }
          });
      });
  }

  /**
   * Extracts the image regions containing the detected faces.
   *
   * @param input The image that face detection has been performed on.
   * @param detections The face detection results or face bounding boxes for that image.
   * @returns The Canvases of the corresponding image region for each detected face.
   */
  function extractFaces(input, detections) {
      return __awaiter(this, void 0, void 0, function () {
          var Canvas, canvas, netInput, tensorOrCanvas, _a, ctx, boxes;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      Canvas = env.getEnv().Canvas;
                      canvas = input;
                      if (!!(input instanceof Canvas)) return [3 /*break*/, 5];
                      return [4 /*yield*/, toNetInput(input)];
                  case 1:
                      netInput = _b.sent();
                      if (netInput.batchSize > 1) {
                          throw new Error('extractFaces - batchSize > 1 not supported');
                      }
                      tensorOrCanvas = netInput.getInput(0);
                      if (!(tensorOrCanvas instanceof Canvas)) return [3 /*break*/, 2];
                      _a = tensorOrCanvas;
                      return [3 /*break*/, 4];
                  case 2: return [4 /*yield*/, imageTensorToCanvas(tensorOrCanvas)];
                  case 3:
                      _a = _b.sent();
                      _b.label = 4;
                  case 4:
                      canvas = _a;
                      _b.label = 5;
                  case 5:
                      ctx = getContext2dOrThrow(canvas);
                      boxes = detections.map(function (det) { return det instanceof FaceDetection
                          ? det.forSize(canvas.width, canvas.height).box.floor()
                          : det; })
                          .map(function (box) { return box.clipAtImageBorders(canvas.width, canvas.height); });
                      return [2 /*return*/, boxes.map(function (_a) {
                              var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                              var faceImg = createCanvas({ width: width, height: height });
                              getContext2dOrThrow(faceImg)
                                  .putImageData(ctx.getImageData(x, y, width, height), 0, 0);
                              return faceImg;
                          })];
              }
          });
      });
  }

  /**
   * Extracts the tensors of the image regions containing the detected faces.
   * Useful if you want to compute the face descriptors for the face images.
   * Using this method is faster then extracting a canvas for each face and
   * converting them to tensors individually.
   *
   * @param imageTensor The image tensor that face detection has been performed on.
   * @param detections The face detection results or face bounding boxes for that image.
   * @returns Tensors of the corresponding image region for each detected face.
   */
  function extractFaceTensors(imageTensor, detections) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              if (!isTensor3D(imageTensor) && !isTensor4D(imageTensor)) {
                  throw new Error('extractFaceTensors - expected image tensor to be 3D or 4D');
              }
              if (isTensor4D(imageTensor) && imageTensor.shape[0] > 1) {
                  throw new Error('extractFaceTensors - batchSize > 1 not supported');
              }
              return [2 /*return*/, Ze(function () {
                      var _a = imageTensor.shape.slice(isTensor4D(imageTensor) ? 1 : 0), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                      var boxes = detections.map(function (det) { return det instanceof FaceDetection
                          ? det.forSize(imgWidth, imgHeight).box
                          : det; })
                          .map(function (box) { return box.clipAtImageBorders(imgWidth, imgHeight); });
                      var faceTensors = boxes.map(function (_a) {
                          var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                          return xl(imageTensor.as3D(imgHeight, imgWidth, numChannels), [y, x, 0], [height, width, numChannels]);
                      });
                      return faceTensors;
                  })];
          });
      });
  }

  function fetchOrThrow(url, init) {
      return __awaiter(this, void 0, void 0, function () {
          var fetch, res;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      fetch = env.getEnv().fetch;
                      return [4 /*yield*/, fetch(url, init)];
                  case 1:
                      res = _a.sent();
                      if (!(res.status < 400)) {
                          throw new Error("failed to fetch: (" + res.status + ") " + res.statusText + ", from url: " + res.url);
                      }
                      return [2 /*return*/, res];
              }
          });
      });
  }

  function fetchImage(uri) {
      return __awaiter(this, void 0, void 0, function () {
          var res, blob;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4 /*yield*/, fetchOrThrow(uri)];
                  case 1:
                      res = _a.sent();
                      return [4 /*yield*/, (res).blob()];
                  case 2:
                      blob = _a.sent();
                      if (!blob.type.startsWith('image/')) {
                          throw new Error("fetchImage - expected blob type to be of type image/*, instead have: " + blob.type + ", for url: " + res.url);
                      }
                      return [2 /*return*/, bufferToImage(blob)];
              }
          });
      });
  }

  function fetchJson(uri) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4 /*yield*/, fetchOrThrow(uri)];
                  case 1: return [2 /*return*/, (_a.sent()).json()];
              }
          });
      });
  }

  function fetchNetWeights(uri) {
      return __awaiter(this, void 0, void 0, function () {
          var _a;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      _a = Float32Array.bind;
                      return [4 /*yield*/, fetchOrThrow(uri)];
                  case 1: return [4 /*yield*/, (_b.sent()).arrayBuffer()];
                  case 2: return [2 /*return*/, new (_a.apply(Float32Array, [void 0, _b.sent()]))()];
              }
          });
      });
  }

  function getModelUris(uri, defaultModelName) {
      var defaultManifestFilename = defaultModelName + "-weights_manifest.json";
      if (!uri) {
          return {
              modelBaseUri: '',
              manifestUri: defaultManifestFilename
          };
      }
      if (uri === '/') {
          return {
              modelBaseUri: '/',
              manifestUri: "/" + defaultManifestFilename
          };
      }
      var protocol = uri.startsWith('http://') ? 'http://' : uri.startsWith('https://') ? 'https://' : '';
      uri = uri.replace(protocol, '');
      var parts = uri.split('/').filter(function (s) { return s; });
      var manifestFile = uri.endsWith('.json')
          ? parts[parts.length - 1]
          : defaultManifestFilename;
      var modelBaseUri = protocol + (uri.endsWith('.json') ? parts.slice(0, parts.length - 1) : parts).join('/');
      modelBaseUri = uri.startsWith('/') ? "/" + modelBaseUri : modelBaseUri;
      return {
          modelBaseUri: modelBaseUri,
          manifestUri: modelBaseUri === '/' ? "/" + manifestFile : modelBaseUri + "/" + manifestFile
      };
  }

  function loadWeightMap(uri, defaultModelName) {
      return __awaiter(this, void 0, void 0, function () {
          var _a, manifestUri, modelBaseUri, manifest;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      _a = getModelUris(uri, defaultModelName), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                      return [4 /*yield*/, fetchJson(manifestUri)];
                  case 1:
                      manifest = _b.sent();
                      return [2 /*return*/, ed.loadWeights(manifest, modelBaseUri)];
              }
          });
      });
  }

  function matchDimensions(input, reference, useMediaDimensions) {
      if (useMediaDimensions === void 0) { useMediaDimensions = false; }
      var _a = useMediaDimensions
          ? getMediaDimensions(reference)
          : reference, width = _a.width, height = _a.height;
      input.width = width;
      input.height = height;
      return { width: width, height: height };
  }

  var NeuralNetwork = /** @class */ (function () {
      function NeuralNetwork(_name) {
          this._name = _name;
          this._params = undefined;
          this._paramMappings = [];
      }
      Object.defineProperty(NeuralNetwork.prototype, "params", {
          get: function () { return this._params; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NeuralNetwork.prototype, "paramMappings", {
          get: function () { return this._paramMappings; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NeuralNetwork.prototype, "isLoaded", {
          get: function () { return !!this.params; },
          enumerable: true,
          configurable: true
      });
      NeuralNetwork.prototype.getParamFromPath = function (paramPath) {
          var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
          return obj[objProp];
      };
      NeuralNetwork.prototype.reassignParamFromPath = function (paramPath, tensor) {
          var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
          obj[objProp].dispose();
          obj[objProp] = tensor;
      };
      NeuralNetwork.prototype.getParamList = function () {
          var _this = this;
          return this._paramMappings.map(function (_a) {
              var paramPath = _a.paramPath;
              return ({
                  path: paramPath,
                  tensor: _this.getParamFromPath(paramPath)
              });
          });
      };
      NeuralNetwork.prototype.getTrainableParams = function () {
          return this.getParamList().filter(function (param) { return param.tensor instanceof St; });
      };
      NeuralNetwork.prototype.getFrozenParams = function () {
          return this.getParamList().filter(function (param) { return !(param.tensor instanceof St); });
      };
      NeuralNetwork.prototype.variable = function () {
          var _this = this;
          this.getFrozenParams().forEach(function (_a) {
              var path = _a.path, tensor = _a.tensor;
              _this.reassignParamFromPath(path, tensor.variable());
          });
      };
      NeuralNetwork.prototype.freeze = function () {
          var _this = this;
          this.getTrainableParams().forEach(function (_a) {
              var path = _a.path, variable = _a.tensor;
              var tensor = Fn(variable.dataSync());
              variable.dispose();
              _this.reassignParamFromPath(path, tensor);
          });
      };
      NeuralNetwork.prototype.dispose = function (throwOnRedispose) {
          if (throwOnRedispose === void 0) { throwOnRedispose = true; }
          this.getParamList().forEach(function (param) {
              if (throwOnRedispose && param.tensor.isDisposed) {
                  throw new Error("param tensor has already been disposed for path " + param.path);
              }
              param.tensor.dispose();
          });
          this._params = undefined;
      };
      NeuralNetwork.prototype.serializeParams = function () {
          return new Float32Array(this.getParamList()
              .map(function (_a) {
              var tensor = _a.tensor;
              return Array.from(tensor.dataSync());
          })
              .reduce(function (flat, arr) { return flat.concat(arr); }));
      };
      NeuralNetwork.prototype.load = function (weightsOrUrl) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (weightsOrUrl instanceof Float32Array) {
                              this.extractWeights(weightsOrUrl);
                              return [2 /*return*/];
                          }
                          return [4 /*yield*/, this.loadFromUri(weightsOrUrl)];
                      case 1:
                          _a.sent();
                          return [2 /*return*/];
                  }
              });
          });
      };
      NeuralNetwork.prototype.loadFromUri = function (uri) {
          return __awaiter(this, void 0, void 0, function () {
              var weightMap;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (uri && typeof uri !== 'string') {
                              throw new Error(this._name + ".loadFromUri - expected model uri");
                          }
                          return [4 /*yield*/, loadWeightMap(uri, this.getDefaultModelName())];
                      case 1:
                          weightMap = _a.sent();
                          this.loadFromWeightMap(weightMap);
                          return [2 /*return*/];
                  }
              });
          });
      };
      NeuralNetwork.prototype.loadFromDisk = function (filePath) {
          return __awaiter(this, void 0, void 0, function () {
              var readFile, _a, manifestUri, modelBaseUri, fetchWeightsFromDisk, loadWeights, manifest, _b, _c, weightMap;
              return __generator(this, function (_d) {
                  switch (_d.label) {
                      case 0:
                          if (filePath && typeof filePath !== 'string') {
                              throw new Error(this._name + ".loadFromDisk - expected model file path");
                          }
                          readFile = env.getEnv().readFile;
                          _a = getModelUris(filePath, this.getDefaultModelName()), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                          fetchWeightsFromDisk = function (filePaths) { return Promise.all(filePaths.map(function (filePath) { return readFile(filePath).then(function (buf) { return buf.buffer; }); })); };
                          loadWeights = ed.weightsLoaderFactory(fetchWeightsFromDisk);
                          _c = (_b = JSON).parse;
                          return [4 /*yield*/, readFile(manifestUri)];
                      case 1:
                          manifest = _c.apply(_b, [(_d.sent()).toString()]);
                          return [4 /*yield*/, loadWeights(manifest, modelBaseUri)];
                      case 2:
                          weightMap = _d.sent();
                          this.loadFromWeightMap(weightMap);
                          return [2 /*return*/];
                  }
              });
          });
      };
      NeuralNetwork.prototype.loadFromWeightMap = function (weightMap) {
          var _a = this.extractParamsFromWeigthMap(weightMap), paramMappings = _a.paramMappings, params = _a.params;
          this._paramMappings = paramMappings;
          this._params = params;
      };
      NeuralNetwork.prototype.extractWeights = function (weights) {
          var _a = this.extractParams(weights), paramMappings = _a.paramMappings, params = _a.params;
          this._paramMappings = paramMappings;
          this._params = params;
      };
      NeuralNetwork.prototype.traversePropertyPath = function (paramPath) {
          if (!this.params) {
              throw new Error("traversePropertyPath - model has no loaded params");
          }
          var result = paramPath.split('/').reduce(function (res, objProp) {
              if (!res.nextObj.hasOwnProperty(objProp)) {
                  throw new Error("traversePropertyPath - object does not have property " + objProp + ", for path " + paramPath);
              }
              return { obj: res.nextObj, objProp: objProp, nextObj: res.nextObj[objProp] };
          }, { nextObj: this.params });
          var obj = result.obj, objProp = result.objProp;
          if (!obj || !objProp || !(obj[objProp] instanceof wt)) {
              throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
          }
          return { obj: obj, objProp: objProp };
      };
      return NeuralNetwork;
  }());

  function depthwiseSeparableConv(x, params, stride) {
      return Ze(function () {
          var out = Jc(x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
          out = rc(out, params.bias);
          return out;
      });
  }

  function denseBlock3(x, denseBlockParams, isFirstLayer) {
      if (isFirstLayer === void 0) { isFirstLayer = false; }
      return Ze(function () {
          var out1 = Bl(isFirstLayer
              ? rc(qc(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
              : depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
          var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
          var in3 = Bl(rc(out1, out2));
          var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
          return Bl(rc(out1, rc(out2, out3)));
      });
  }
  function denseBlock4(x, denseBlockParams, isFirstLayer, isScaleDown) {
      if (isFirstLayer === void 0) { isFirstLayer = false; }
      if (isScaleDown === void 0) { isScaleDown = true; }
      return Ze(function () {
          var out1 = Bl(isFirstLayer
              ? rc(qc(x, denseBlockParams.conv0.filters, isScaleDown ? [2, 2] : [1, 1], 'same'), denseBlockParams.conv0.bias)
              : depthwiseSeparableConv(x, denseBlockParams.conv0, isScaleDown ? [2, 2] : [1, 1]));
          var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
          var in3 = Bl(rc(out1, out2));
          var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
          var in4 = Bl(rc(out1, rc(out2, out3)));
          var out4 = depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1]);
          return Bl(rc(out1, rc(out2, rc(out3, out4))));
      });
  }

  function convLayer(x, params, padding, withRelu) {
      if (padding === void 0) { padding = 'same'; }
      if (withRelu === void 0) { withRelu = false; }
      return Ze(function () {
          var out = rc(qc(x, params.filters, [1, 1], padding), params.bias);
          return withRelu ? Bl(out) : out;
      });
  }

  function disposeUnusedWeightTensors(weightMap, paramMappings) {
      Object.keys(weightMap).forEach(function (path) {
          if (!paramMappings.some(function (pm) { return pm.originalPath === path; })) {
              weightMap[path].dispose();
          }
      });
  }

  function extractConvParamsFactory(extractWeights, paramMappings) {
      return function (channelsIn, channelsOut, filterSize, mappedPrefix) {
          var filters = Ln(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
          var bias = Mn(extractWeights(channelsOut));
          paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
          return { filters: filters, bias: bias };
      };
  }

  function extractFCParamsFactory(extractWeights, paramMappings) {
      return function (channelsIn, channelsOut, mappedPrefix) {
          var fc_weights = Bn(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
          var fc_bias = Mn(extractWeights(channelsOut));
          paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
          return {
              weights: fc_weights,
              bias: fc_bias
          };
      };
  }

  var SeparableConvParams = /** @class */ (function () {
      function SeparableConvParams(depthwise_filter, pointwise_filter, bias) {
          this.depthwise_filter = depthwise_filter;
          this.pointwise_filter = pointwise_filter;
          this.bias = bias;
      }
      return SeparableConvParams;
  }());

  function extractSeparableConvParamsFactory(extractWeights, paramMappings) {
      return function (channelsIn, channelsOut, mappedPrefix) {
          var depthwise_filter = Ln(extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1]);
          var pointwise_filter = Ln(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut]);
          var bias = Mn(extractWeights(channelsOut));
          paramMappings.push({ paramPath: mappedPrefix + "/depthwise_filter" }, { paramPath: mappedPrefix + "/pointwise_filter" }, { paramPath: mappedPrefix + "/bias" });
          return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
      };
  }
  function loadSeparableConvParamsFactory(extractWeightEntry) {
      return function (prefix) {
          var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
          var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
          var bias = extractWeightEntry(prefix + "/bias", 1);
          return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
      };
  }

  function extractWeightEntryFactory(weightMap, paramMappings) {
      return function (originalPath, paramRank, mappedPath) {
          var tensor = weightMap[originalPath];
          if (!isTensor(tensor, paramRank)) {
              throw new Error("expected weightMap[" + originalPath + "] to be a Tensor" + paramRank + "D, instead have " + tensor);
          }
          paramMappings.push({ originalPath: originalPath, paramPath: mappedPath || originalPath });
          return tensor;
      };
  }

  function extractWeightsFactory(weights) {
      var remainingWeights = weights;
      function extractWeights(numWeights) {
          var ret = remainingWeights.slice(0, numWeights);
          remainingWeights = remainingWeights.slice(numWeights);
          return ret;
      }
      function getRemainingWeights() {
          return remainingWeights;
      }
      return {
          extractWeights: extractWeights,
          getRemainingWeights: getRemainingWeights
      };
  }

  function extractorsFactory(extractWeights, paramMappings) {
      var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
      var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
      function extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
          if (isFirstLayer === void 0) { isFirstLayer = false; }
          var conv0 = isFirstLayer
              ? extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv0")
              : extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/conv0");
          var conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv1");
          var conv2 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv2");
          return { conv0: conv0, conv1: conv1, conv2: conv2 };
      }
      function extractDenseBlock4Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
          if (isFirstLayer === void 0) { isFirstLayer = false; }
          var _a = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer), conv0 = _a.conv0, conv1 = _a.conv1, conv2 = _a.conv2;
          var conv3 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv3");
          return { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3 };
      }
      return {
          extractDenseBlock3Params: extractDenseBlock3Params,
          extractDenseBlock4Params: extractDenseBlock4Params
      };
  }

  function extractParams(weights) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var extractDenseBlock4Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock4Params;
      var dense0 = extractDenseBlock4Params(3, 32, 'dense0', true);
      var dense1 = extractDenseBlock4Params(32, 64, 'dense1');
      var dense2 = extractDenseBlock4Params(64, 128, 'dense2');
      var dense3 = extractDenseBlock4Params(128, 256, 'dense3');
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return {
          paramMappings: paramMappings,
          params: { dense0: dense0, dense1: dense1, dense2: dense2, dense3: dense3 }
      };
  }

  function loadConvParamsFactory(extractWeightEntry) {
      return function (prefix) {
          var filters = extractWeightEntry(prefix + "/filters", 4);
          var bias = extractWeightEntry(prefix + "/bias", 1);
          return { filters: filters, bias: bias };
      };
  }

  function loadParamsFactory(weightMap, paramMappings) {
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      var extractConvParams = loadConvParamsFactory(extractWeightEntry);
      var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
      function extractDenseBlock3Params(prefix, isFirstLayer) {
          if (isFirstLayer === void 0) { isFirstLayer = false; }
          var conv0 = isFirstLayer
              ? extractConvParams(prefix + "/conv0")
              : extractSeparableConvParams(prefix + "/conv0");
          var conv1 = extractSeparableConvParams(prefix + "/conv1");
          var conv2 = extractSeparableConvParams(prefix + "/conv2");
          return { conv0: conv0, conv1: conv1, conv2: conv2 };
      }
      function extractDenseBlock4Params(prefix, isFirstLayer) {
          if (isFirstLayer === void 0) { isFirstLayer = false; }
          var conv0 = isFirstLayer
              ? extractConvParams(prefix + "/conv0")
              : extractSeparableConvParams(prefix + "/conv0");
          var conv1 = extractSeparableConvParams(prefix + "/conv1");
          var conv2 = extractSeparableConvParams(prefix + "/conv2");
          var conv3 = extractSeparableConvParams(prefix + "/conv3");
          return { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3 };
      }
      return {
          extractDenseBlock3Params: extractDenseBlock3Params,
          extractDenseBlock4Params: extractDenseBlock4Params
      };
  }

  function extractParamsFromWeigthMap(weightMap) {
      var paramMappings = [];
      var extractDenseBlock4Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock4Params;
      var params = {
          dense0: extractDenseBlock4Params('dense0', true),
          dense1: extractDenseBlock4Params('dense1'),
          dense2: extractDenseBlock4Params('dense2'),
          dense3: extractDenseBlock4Params('dense3')
      };
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: params, paramMappings: paramMappings };
  }

  var FaceFeatureExtractor = /** @class */ (function (_super) {
      __extends(FaceFeatureExtractor, _super);
      function FaceFeatureExtractor() {
          return _super.call(this, 'FaceFeatureExtractor') || this;
      }
      FaceFeatureExtractor.prototype.forwardInput = function (input) {
          var params = this.params;
          if (!params) {
              throw new Error('FaceFeatureExtractor - load model before inference');
          }
          return Ze(function () {
              var batchTensor = input.toBatchTensor(112, true);
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(On(255));
              var out = denseBlock4(normalized, params.dense0, true);
              out = denseBlock4(out, params.dense1);
              out = denseBlock4(out, params.dense2);
              out = denseBlock4(out, params.dense3);
              out = fl(out, [7, 7], [2, 2], 'valid');
              return out;
          });
      };
      FaceFeatureExtractor.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      FaceFeatureExtractor.prototype.getDefaultModelName = function () {
          return 'face_feature_extractor_model';
      };
      FaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return extractParamsFromWeigthMap(weightMap);
      };
      FaceFeatureExtractor.prototype.extractParams = function (weights) {
          return extractParams(weights);
      };
      return FaceFeatureExtractor;
  }(NeuralNetwork));

  function fullyConnectedLayer(x, params) {
      return Ze(function () {
          return rc(el(x, params.weights), params.bias);
      });
  }

  function extractParams$1(weights, channelsIn, channelsOut) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
      var fc = extractFCParams(channelsIn, channelsOut, 'fc');
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return {
          paramMappings: paramMappings,
          params: { fc: fc }
      };
  }

  function extractParamsFromWeigthMap$1(weightMap) {
      var paramMappings = [];
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      function extractFcParams(prefix) {
          var weights = extractWeightEntry(prefix + "/weights", 2);
          var bias = extractWeightEntry(prefix + "/bias", 1);
          return { weights: weights, bias: bias };
      }
      var params = {
          fc: extractFcParams('fc')
      };
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: params, paramMappings: paramMappings };
  }

  function seperateWeightMaps(weightMap) {
      var featureExtractorMap = {};
      var classifierMap = {};
      Object.keys(weightMap).forEach(function (key) {
          var map = key.startsWith('fc') ? classifierMap : featureExtractorMap;
          map[key] = weightMap[key];
      });
      return { featureExtractorMap: featureExtractorMap, classifierMap: classifierMap };
  }

  var FaceProcessor = /** @class */ (function (_super) {
      __extends(FaceProcessor, _super);
      function FaceProcessor(_name, faceFeatureExtractor) {
          var _this = _super.call(this, _name) || this;
          _this._faceFeatureExtractor = faceFeatureExtractor;
          return _this;
      }
      Object.defineProperty(FaceProcessor.prototype, "faceFeatureExtractor", {
          get: function () {
              return this._faceFeatureExtractor;
          },
          enumerable: true,
          configurable: true
      });
      FaceProcessor.prototype.runNet = function (input) {
          var _this = this;
          var params = this.params;
          if (!params) {
              throw new Error(this._name + " - load model before inference");
          }
          return Ze(function () {
              var bottleneckFeatures = input instanceof NetInput
                  ? _this.faceFeatureExtractor.forwardInput(input)
                  : input;
              return fullyConnectedLayer(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc);
          });
      };
      FaceProcessor.prototype.dispose = function (throwOnRedispose) {
          if (throwOnRedispose === void 0) { throwOnRedispose = true; }
          this.faceFeatureExtractor.dispose(throwOnRedispose);
          _super.prototype.dispose.call(this, throwOnRedispose);
      };
      FaceProcessor.prototype.loadClassifierParams = function (weights) {
          var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
          this._params = params;
          this._paramMappings = paramMappings;
      };
      FaceProcessor.prototype.extractClassifierParams = function (weights) {
          return extractParams$1(weights, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
      };
      FaceProcessor.prototype.extractParamsFromWeigthMap = function (weightMap) {
          var _a = seperateWeightMaps(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
          this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
          return extractParamsFromWeigthMap$1(classifierMap);
      };
      FaceProcessor.prototype.extractParams = function (weights) {
          var cIn = this.getClassifierChannelsIn();
          var cOut = this.getClassifierChannelsOut();
          var classifierWeightSize = (cOut * cIn) + cOut;
          var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
          var classifierWeights = weights.slice(weights.length - classifierWeightSize);
          this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
          return this.extractClassifierParams(classifierWeights);
      };
      return FaceProcessor;
  }(NeuralNetwork));

  var FACE_EXPRESSION_LABELS = ['neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'];
  var FaceExpressions = /** @class */ (function () {
      function FaceExpressions(probabilities) {
          var _this = this;
          if (probabilities.length !== 7) {
              throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + probabilities.length);
          }
          FACE_EXPRESSION_LABELS.forEach(function (expression, idx) {
              _this[expression] = probabilities[idx];
          });
      }
      FaceExpressions.prototype.asSortedArray = function () {
          var _this = this;
          return FACE_EXPRESSION_LABELS
              .map(function (expression) { return ({ expression: expression, probability: _this[expression] }); })
              .sort(function (e0, e1) { return e1.probability - e0.probability; });
      };
      return FaceExpressions;
  }());

  var FaceExpressionNet = /** @class */ (function (_super) {
      __extends(FaceExpressionNet, _super);
      function FaceExpressionNet(faceFeatureExtractor) {
          if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor(); }
          return _super.call(this, 'FaceExpressionNet', faceFeatureExtractor) || this;
      }
      FaceExpressionNet.prototype.forwardInput = function (input) {
          var _this = this;
          return Ze(function () { return go(_this.runNet(input)); });
      };
      FaceExpressionNet.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      FaceExpressionNet.prototype.predictExpressions = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var netInput, out, probabilitesByBatch, predictionsByBatch;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, toNetInput(input)];
                      case 1:
                          netInput = _a.sent();
                          return [4 /*yield*/, this.forwardInput(netInput)];
                      case 2:
                          out = _a.sent();
                          return [4 /*yield*/, Promise.all(Ur(out).map(function (t) { return __awaiter(_this, void 0, void 0, function () {
                                  var data;
                                  return __generator(this, function (_a) {
                                      switch (_a.label) {
                                          case 0: return [4 /*yield*/, t.data()];
                                          case 1:
                                              data = _a.sent();
                                              t.dispose();
                                              return [2 /*return*/, data];
                                      }
                                  });
                              }); }))];
                      case 3:
                          probabilitesByBatch = _a.sent();
                          out.dispose();
                          predictionsByBatch = probabilitesByBatch
                              .map(function (probabilites) { return new FaceExpressions(probabilites); });
                          return [2 /*return*/, netInput.isBatchInput
                                  ? predictionsByBatch
                                  : predictionsByBatch[0]];
                  }
              });
          });
      };
      FaceExpressionNet.prototype.getDefaultModelName = function () {
          return 'face_expression_model';
      };
      FaceExpressionNet.prototype.getClassifierChannelsIn = function () {
          return 256;
      };
      FaceExpressionNet.prototype.getClassifierChannelsOut = function () {
          return 7;
      };
      return FaceExpressionNet;
  }(FaceProcessor));

  function isWithFaceExpressions(obj) {
      return obj['expressions'] instanceof FaceExpressions;
  }
  function extendWithFaceExpressions(sourceObj, expressions) {
      var extension = { expressions: expressions };
      return Object.assign({}, sourceObj, extension);
  }

  function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, textFieldAnchor) {
      if (minConfidence === void 0) { minConfidence = 0.1; }
      var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
      faceExpressionsArray.forEach(function (e) {
          var expr = e instanceof FaceExpressions
              ? e
              : (isWithFaceExpressions(e) ? e.expressions : undefined);
          if (!expr) {
              throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof');
          }
          var sorted = expr.asSortedArray();
          var resultsToDisplay = sorted.filter(function (expr) { return expr.probability > minConfidence; });
          var anchor = isWithFaceDetection(e)
              ? e.detection.box.bottomLeft
              : (textFieldAnchor || new Point(0, 0));
          var drawTextField = new DrawTextField(resultsToDisplay.map(function (expr) { return expr.expression + " (" + round(expr.probability) + ")"; }), anchor);
          drawTextField.draw(canvasArg);
      });
  }

  function isWithFaceLandmarks(obj) {
      return isWithFaceDetection(obj)
          && obj['landmarks'] instanceof FaceLandmarks
          && obj['unshiftedLandmarks'] instanceof FaceLandmarks
          && obj['alignedRect'] instanceof FaceDetection;
  }
  function extendWithFaceLandmarks(sourceObj, unshiftedLandmarks) {
      var shift = sourceObj.detection.box;
      var landmarks = unshiftedLandmarks.shiftBy(shift.x, shift.y);
      var rect = landmarks.align();
      var imageDims = sourceObj.detection.imageDims;
      var alignedRect = new FaceDetection(sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims);
      var extension = {
          landmarks: landmarks,
          unshiftedLandmarks: unshiftedLandmarks,
          alignedRect: alignedRect
      };
      return Object.assign({}, sourceObj, extension);
  }

  var DrawFaceLandmarksOptions = /** @class */ (function () {
      function DrawFaceLandmarksOptions(options) {
          if (options === void 0) { options = {}; }
          var _a = options.drawLines, drawLines = _a === void 0 ? true : _a, _b = options.drawPoints, drawPoints = _b === void 0 ? true : _b, lineWidth = options.lineWidth, lineColor = options.lineColor, pointSize = options.pointSize, pointColor = options.pointColor;
          this.drawLines = drawLines;
          this.drawPoints = drawPoints;
          this.lineWidth = lineWidth || 1;
          this.pointSize = pointSize || 2;
          this.lineColor = lineColor || 'rgba(0, 255, 255, 1)';
          this.pointColor = pointColor || 'rgba(255, 0, 255, 1)';
      }
      return DrawFaceLandmarksOptions;
  }());
  var DrawFaceLandmarks = /** @class */ (function () {
      function DrawFaceLandmarks(faceLandmarks, options) {
          if (options === void 0) { options = {}; }
          this.faceLandmarks = faceLandmarks;
          this.options = new DrawFaceLandmarksOptions(options);
      }
      DrawFaceLandmarks.prototype.draw = function (canvasArg) {
          var ctx = getContext2dOrThrow(canvasArg);
          var _a = this.options, drawLines = _a.drawLines, drawPoints = _a.drawPoints, lineWidth = _a.lineWidth, lineColor = _a.lineColor, pointSize = _a.pointSize, pointColor = _a.pointColor;
          if (drawLines && this.faceLandmarks instanceof FaceLandmarks68) {
              ctx.strokeStyle = lineColor;
              ctx.lineWidth = lineWidth;
              drawContour(ctx, this.faceLandmarks.getJawOutline());
              drawContour(ctx, this.faceLandmarks.getLeftEyeBrow());
              drawContour(ctx, this.faceLandmarks.getRightEyeBrow());
              drawContour(ctx, this.faceLandmarks.getNose());
              drawContour(ctx, this.faceLandmarks.getLeftEye(), true);
              drawContour(ctx, this.faceLandmarks.getRightEye(), true);
              drawContour(ctx, this.faceLandmarks.getMouth(), true);
          }
          if (drawPoints) {
              ctx.strokeStyle = pointColor;
              ctx.fillStyle = pointColor;
              var drawPoint = function (pt) {
                  ctx.beginPath();
                  ctx.arc(pt.x, pt.y, pointSize, 0, 2 * Math.PI);
                  ctx.fill();
              };
              this.faceLandmarks.positions.forEach(drawPoint);
          }
      };
      return DrawFaceLandmarks;
  }());
  function drawFaceLandmarks(canvasArg, faceLandmarks) {
      var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
      faceLandmarksArray.forEach(function (f) {
          var landmarks = f instanceof FaceLandmarks
              ? f
              : (isWithFaceLandmarks(f) ? f.landmarks : undefined);
          if (!landmarks) {
              throw new Error('drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof');
          }
          new DrawFaceLandmarks(landmarks).draw(canvasArg);
      });
  }



  var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    drawContour: drawContour,
    drawDetections: drawDetections,
    drawFaceExpressions: drawFaceExpressions,
    DrawBoxOptions: DrawBoxOptions,
    DrawBox: DrawBox,
    DrawFaceLandmarksOptions: DrawFaceLandmarksOptions,
    DrawFaceLandmarks: DrawFaceLandmarks,
    drawFaceLandmarks: drawFaceLandmarks,
    get AnchorPosition () { return AnchorPosition; },
    DrawTextFieldOptions: DrawTextFieldOptions,
    DrawTextField: DrawTextField
  });

  function extractorsFactory$1(extractWeights, paramMappings) {
      var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
      var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
      function extractReductionBlockParams(channelsIn, channelsOut, mappedPrefix) {
          var separable_conv0 = extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/separable_conv0");
          var separable_conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/separable_conv1");
          var expansion_conv = extractConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/expansion_conv");
          return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, expansion_conv: expansion_conv };
      }
      function extractMainBlockParams(channels, mappedPrefix) {
          var separable_conv0 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv0");
          var separable_conv1 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv1");
          var separable_conv2 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv2");
          return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, separable_conv2: separable_conv2 };
      }
      return {
          extractConvParams: extractConvParams,
          extractSeparableConvParams: extractSeparableConvParams,
          extractReductionBlockParams: extractReductionBlockParams,
          extractMainBlockParams: extractMainBlockParams
      };
  }
  function extractParams$2(weights, numMainBlocks) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var _b = extractorsFactory$1(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractSeparableConvParams = _b.extractSeparableConvParams, extractReductionBlockParams = _b.extractReductionBlockParams, extractMainBlockParams = _b.extractMainBlockParams;
      var entry_flow_conv_in = extractConvParams(3, 32, 3, 'entry_flow/conv_in');
      var entry_flow_reduction_block_0 = extractReductionBlockParams(32, 64, 'entry_flow/reduction_block_0');
      var entry_flow_reduction_block_1 = extractReductionBlockParams(64, 128, 'entry_flow/reduction_block_1');
      var entry_flow = {
          conv_in: entry_flow_conv_in,
          reduction_block_0: entry_flow_reduction_block_0,
          reduction_block_1: entry_flow_reduction_block_1
      };
      var middle_flow = {};
      range(numMainBlocks, 0, 1).forEach(function (idx) {
          middle_flow["main_block_" + idx] = extractMainBlockParams(128, "middle_flow/main_block_" + idx);
      });
      var exit_flow_reduction_block = extractReductionBlockParams(128, 256, 'exit_flow/reduction_block');
      var exit_flow_separable_conv = extractSeparableConvParams(256, 512, 'exit_flow/separable_conv');
      var exit_flow = {
          reduction_block: exit_flow_reduction_block,
          separable_conv: exit_flow_separable_conv
      };
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return {
          paramMappings: paramMappings,
          params: { entry_flow: entry_flow, middle_flow: middle_flow, exit_flow: exit_flow }
      };
  }

  function loadParamsFactory$1(weightMap, paramMappings) {
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      var extractConvParams = loadConvParamsFactory(extractWeightEntry);
      var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
      function extractReductionBlockParams(mappedPrefix) {
          var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
          var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
          var expansion_conv = extractConvParams(mappedPrefix + "/expansion_conv");
          return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, expansion_conv: expansion_conv };
      }
      function extractMainBlockParams(mappedPrefix) {
          var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
          var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
          var separable_conv2 = extractSeparableConvParams(mappedPrefix + "/separable_conv2");
          return { separable_conv0: separable_conv0, separable_conv1: separable_conv1, separable_conv2: separable_conv2 };
      }
      return {
          extractConvParams: extractConvParams,
          extractSeparableConvParams: extractSeparableConvParams,
          extractReductionBlockParams: extractReductionBlockParams,
          extractMainBlockParams: extractMainBlockParams
      };
  }
  function extractParamsFromWeigthMap$2(weightMap, numMainBlocks) {
      var paramMappings = [];
      var _a = loadParamsFactory$1(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractSeparableConvParams = _a.extractSeparableConvParams, extractReductionBlockParams = _a.extractReductionBlockParams, extractMainBlockParams = _a.extractMainBlockParams;
      var entry_flow_conv_in = extractConvParams('entry_flow/conv_in');
      var entry_flow_reduction_block_0 = extractReductionBlockParams('entry_flow/reduction_block_0');
      var entry_flow_reduction_block_1 = extractReductionBlockParams('entry_flow/reduction_block_1');
      var entry_flow = {
          conv_in: entry_flow_conv_in,
          reduction_block_0: entry_flow_reduction_block_0,
          reduction_block_1: entry_flow_reduction_block_1
      };
      var middle_flow = {};
      range(numMainBlocks, 0, 1).forEach(function (idx) {
          middle_flow["main_block_" + idx] = extractMainBlockParams("middle_flow/main_block_" + idx);
      });
      var exit_flow_reduction_block = extractReductionBlockParams('exit_flow/reduction_block');
      var exit_flow_separable_conv = extractSeparableConvParams('exit_flow/separable_conv');
      var exit_flow = {
          reduction_block: exit_flow_reduction_block,
          separable_conv: exit_flow_separable_conv
      };
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: { entry_flow: entry_flow, middle_flow: middle_flow, exit_flow: exit_flow }, paramMappings: paramMappings };
  }

  function conv(x, params, stride) {
      return rc(qc(x, params.filters, stride, 'same'), params.bias);
  }
  function reductionBlock(x, params, isActivateInput) {
      if (isActivateInput === void 0) { isActivateInput = true; }
      var out = isActivateInput ? Bl(x) : x;
      out = depthwiseSeparableConv(out, params.separable_conv0, [1, 1]);
      out = depthwiseSeparableConv(Bl(out), params.separable_conv1, [1, 1]);
      out = hl(out, [3, 3], [2, 2], 'same');
      out = rc(out, conv(x, params.expansion_conv, [2, 2]));
      return out;
  }
  function mainBlock(x, params) {
      var out = depthwiseSeparableConv(Bl(x), params.separable_conv0, [1, 1]);
      out = depthwiseSeparableConv(Bl(out), params.separable_conv1, [1, 1]);
      out = depthwiseSeparableConv(Bl(out), params.separable_conv2, [1, 1]);
      out = rc(out, x);
      return out;
  }
  var TinyXception = /** @class */ (function (_super) {
      __extends(TinyXception, _super);
      function TinyXception(numMainBlocks) {
          var _this = _super.call(this, 'TinyXception') || this;
          _this._numMainBlocks = numMainBlocks;
          return _this;
      }
      TinyXception.prototype.forwardInput = function (input) {
          var _this = this;
          var params = this.params;
          if (!params) {
              throw new Error('TinyXception - load model before inference');
          }
          return Ze(function () {
              var batchTensor = input.toBatchTensor(112, true);
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(On(256));
              var out = Bl(conv(normalized, params.entry_flow.conv_in, [2, 2]));
              out = reductionBlock(out, params.entry_flow.reduction_block_0, false);
              out = reductionBlock(out, params.entry_flow.reduction_block_1);
              range(_this._numMainBlocks, 0, 1).forEach(function (idx) {
                  out = mainBlock(out, params.middle_flow["main_block_" + idx]);
              });
              out = reductionBlock(out, params.exit_flow.reduction_block);
              out = Bl(depthwiseSeparableConv(out, params.exit_flow.separable_conv, [1, 1]));
              return out;
          });
      };
      TinyXception.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      TinyXception.prototype.getDefaultModelName = function () {
          return 'tiny_xception_model';
      };
      TinyXception.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return extractParamsFromWeigthMap$2(weightMap, this._numMainBlocks);
      };
      TinyXception.prototype.extractParams = function (weights) {
          return extractParams$2(weights, this._numMainBlocks);
      };
      return TinyXception;
  }(NeuralNetwork));

  function extractParams$3(weights) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
      var age = extractFCParams(512, 1, 'fc/age');
      var gender = extractFCParams(512, 2, 'fc/gender');
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return {
          paramMappings: paramMappings,
          params: { fc: { age: age, gender: gender } }
      };
  }

  function extractParamsFromWeigthMap$3(weightMap) {
      var paramMappings = [];
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      function extractFcParams(prefix) {
          var weights = extractWeightEntry(prefix + "/weights", 2);
          var bias = extractWeightEntry(prefix + "/bias", 1);
          return { weights: weights, bias: bias };
      }
      var params = {
          fc: {
              age: extractFcParams('fc/age'),
              gender: extractFcParams('fc/gender')
          }
      };
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: params, paramMappings: paramMappings };
  }

  (function (Gender) {
      Gender["FEMALE"] = "female";
      Gender["MALE"] = "male";
  })(exports.Gender || (exports.Gender = {}));

  var AgeGenderNet = /** @class */ (function (_super) {
      __extends(AgeGenderNet, _super);
      function AgeGenderNet(faceFeatureExtractor) {
          if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new TinyXception(2); }
          var _this = _super.call(this, 'AgeGenderNet') || this;
          _this._faceFeatureExtractor = faceFeatureExtractor;
          return _this;
      }
      Object.defineProperty(AgeGenderNet.prototype, "faceFeatureExtractor", {
          get: function () {
              return this._faceFeatureExtractor;
          },
          enumerable: true,
          configurable: true
      });
      AgeGenderNet.prototype.runNet = function (input) {
          var _this = this;
          var params = this.params;
          if (!params) {
              throw new Error(this._name + " - load model before inference");
          }
          return Ze(function () {
              var bottleneckFeatures = input instanceof NetInput
                  ? _this.faceFeatureExtractor.forwardInput(input)
                  : input;
              var pooled = fl(bottleneckFeatures, [7, 7], [2, 2], 'valid').as2D(bottleneckFeatures.shape[0], -1);
              var age = fullyConnectedLayer(pooled, params.fc.age).as1D();
              var gender = fullyConnectedLayer(pooled, params.fc.gender);
              return { age: age, gender: gender };
          });
      };
      AgeGenderNet.prototype.forwardInput = function (input) {
          var _this = this;
          return Ze(function () {
              var _a = _this.runNet(input), age = _a.age, gender = _a.gender;
              return { age: age, gender: go(gender) };
          });
      };
      AgeGenderNet.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      AgeGenderNet.prototype.predictAgeAndGender = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var netInput, out, ages, genders, ageAndGenderTensors, predictionsByBatch;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, toNetInput(input)];
                      case 1:
                          netInput = _a.sent();
                          return [4 /*yield*/, this.forwardInput(netInput)];
                      case 2:
                          out = _a.sent();
                          ages = Ur(out.age);
                          genders = Ur(out.gender);
                          ageAndGenderTensors = ages.map(function (ageTensor, i) { return ({
                              ageTensor: ageTensor,
                              genderTensor: genders[i]
                          }); });
                          return [4 /*yield*/, Promise.all(ageAndGenderTensors.map(function (_a) {
                                  var ageTensor = _a.ageTensor, genderTensor = _a.genderTensor;
                                  return __awaiter(_this, void 0, void 0, function () {
                                      var age, probMale, isMale, gender, genderProbability;
                                      return __generator(this, function (_b) {
                                          switch (_b.label) {
                                              case 0: return [4 /*yield*/, ageTensor.data()];
                                              case 1:
                                                  age = (_b.sent())[0];
                                                  return [4 /*yield*/, genderTensor.data()];
                                              case 2:
                                                  probMale = (_b.sent())[0];
                                                  isMale = probMale > 0.5;
                                                  gender = isMale ? exports.Gender.MALE : exports.Gender.FEMALE;
                                                  genderProbability = isMale ? probMale : (1 - probMale);
                                                  ageTensor.dispose();
                                                  genderTensor.dispose();
                                                  return [2 /*return*/, { age: age, gender: gender, genderProbability: genderProbability }];
                                          }
                                      });
                                  });
                              }))];
                      case 3:
                          predictionsByBatch = _a.sent();
                          out.age.dispose();
                          out.gender.dispose();
                          return [2 /*return*/, netInput.isBatchInput
                                  ? predictionsByBatch
                                  : predictionsByBatch[0]];
                  }
              });
          });
      };
      AgeGenderNet.prototype.getDefaultModelName = function () {
          return 'age_gender_model';
      };
      AgeGenderNet.prototype.dispose = function (throwOnRedispose) {
          if (throwOnRedispose === void 0) { throwOnRedispose = true; }
          this.faceFeatureExtractor.dispose(throwOnRedispose);
          _super.prototype.dispose.call(this, throwOnRedispose);
      };
      AgeGenderNet.prototype.loadClassifierParams = function (weights) {
          var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
          this._params = params;
          this._paramMappings = paramMappings;
      };
      AgeGenderNet.prototype.extractClassifierParams = function (weights) {
          return extractParams$3(weights);
      };
      AgeGenderNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
          var _a = seperateWeightMaps(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
          this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
          return extractParamsFromWeigthMap$3(classifierMap);
      };
      AgeGenderNet.prototype.extractParams = function (weights) {
          var classifierWeightSize = (512 * 1 + 1) + (512 * 2 + 2);
          var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
          var classifierWeights = weights.slice(weights.length - classifierWeightSize);
          this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
          return this.extractClassifierParams(classifierWeights);
      };
      return AgeGenderNet;
  }(NeuralNetwork));

  var FaceLandmark68NetBase = /** @class */ (function (_super) {
      __extends(FaceLandmark68NetBase, _super);
      function FaceLandmark68NetBase() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      FaceLandmark68NetBase.prototype.postProcess = function (output, inputSize, originalDimensions) {
          var inputDimensions = originalDimensions.map(function (_a) {
              var width = _a.width, height = _a.height;
              var scale = inputSize / Math.max(height, width);
              return {
                  width: width * scale,
                  height: height * scale
              };
          });
          var batchSize = inputDimensions.length;
          return Ze(function () {
              var createInterleavedTensor = function (fillX, fillY) {
                  return Pr([
                      Hn([68], fillX),
                      Hn([68], fillY)
                  ], 1).as2D(1, 136).as1D();
              };
              var getPadding = function (batchIdx, cond) {
                  var _a = inputDimensions[batchIdx], width = _a.width, height = _a.height;
                  return cond(width, height) ? Math.abs(width - height) / 2 : 0;
              };
              var getPaddingX = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return w < h; }); };
              var getPaddingY = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return h < w; }); };
              var landmarkTensors = output
                  .mul(Hn([batchSize, 136], inputSize))
                  .sub(Pr(Array.from(Array(batchSize), function (_, batchIdx) {
                  return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
              })))
                  .div(Pr(Array.from(Array(batchSize), function (_, batchIdx) {
                  return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
              })));
              return landmarkTensors;
          });
      };
      FaceLandmark68NetBase.prototype.forwardInput = function (input) {
          var _this = this;
          return Ze(function () {
              var out = _this.runNet(input);
              return _this.postProcess(out, input.inputSize, input.inputDimensions.map(function (_a) {
                  var height = _a[0], width = _a[1];
                  return ({ height: height, width: width });
              }));
          });
      };
      FaceLandmark68NetBase.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      FaceLandmark68NetBase.prototype.detectLandmarks = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var netInput, landmarkTensors, landmarksForBatch;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, toNetInput(input)];
                      case 1:
                          netInput = _a.sent();
                          landmarkTensors = Ze(function () { return Ur(_this.forwardInput(netInput)); });
                          return [4 /*yield*/, Promise.all(landmarkTensors.map(function (landmarkTensor, batchIdx) { return __awaiter(_this, void 0, void 0, function () {
                                  var landmarksArray, _a, _b, xCoords, yCoords;
                                  return __generator(this, function (_c) {
                                      switch (_c.label) {
                                          case 0:
                                              _b = (_a = Array).from;
                                              return [4 /*yield*/, landmarkTensor.data()];
                                          case 1:
                                              landmarksArray = _b.apply(_a, [_c.sent()]);
                                              xCoords = landmarksArray.filter(function (_, i) { return isEven(i); });
                                              yCoords = landmarksArray.filter(function (_, i) { return !isEven(i); });
                                              return [2 /*return*/, new FaceLandmarks68(Array(68).fill(0).map(function (_, i) { return new Point(xCoords[i], yCoords[i]); }), {
                                                      height: netInput.getInputHeight(batchIdx),
                                                      width: netInput.getInputWidth(batchIdx),
                                                  })];
                                      }
                                  });
                              }); }))];
                      case 2:
                          landmarksForBatch = _a.sent();
                          landmarkTensors.forEach(function (t) { return t.dispose(); });
                          return [2 /*return*/, netInput.isBatchInput
                                  ? landmarksForBatch
                                  : landmarksForBatch[0]];
                  }
              });
          });
      };
      FaceLandmark68NetBase.prototype.getClassifierChannelsOut = function () {
          return 136;
      };
      return FaceLandmark68NetBase;
  }(FaceProcessor));

  var FaceLandmark68Net = /** @class */ (function (_super) {
      __extends(FaceLandmark68Net, _super);
      function FaceLandmark68Net(faceFeatureExtractor) {
          if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor(); }
          return _super.call(this, 'FaceLandmark68Net', faceFeatureExtractor) || this;
      }
      FaceLandmark68Net.prototype.getDefaultModelName = function () {
          return 'face_landmark_68_model';
      };
      FaceLandmark68Net.prototype.getClassifierChannelsIn = function () {
          return 256;
      };
      return FaceLandmark68Net;
  }(FaceLandmark68NetBase));

  function extractParamsFromWeigthMapTiny(weightMap) {
      var paramMappings = [];
      var extractDenseBlock3Params = loadParamsFactory(weightMap, paramMappings).extractDenseBlock3Params;
      var params = {
          dense0: extractDenseBlock3Params('dense0', true),
          dense1: extractDenseBlock3Params('dense1'),
          dense2: extractDenseBlock3Params('dense2')
      };
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: params, paramMappings: paramMappings };
  }

  function extractParamsTiny(weights) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var extractDenseBlock3Params = extractorsFactory(extractWeights, paramMappings).extractDenseBlock3Params;
      var dense0 = extractDenseBlock3Params(3, 32, 'dense0', true);
      var dense1 = extractDenseBlock3Params(32, 64, 'dense1');
      var dense2 = extractDenseBlock3Params(64, 128, 'dense2');
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return {
          paramMappings: paramMappings,
          params: { dense0: dense0, dense1: dense1, dense2: dense2 }
      };
  }

  var TinyFaceFeatureExtractor = /** @class */ (function (_super) {
      __extends(TinyFaceFeatureExtractor, _super);
      function TinyFaceFeatureExtractor() {
          return _super.call(this, 'TinyFaceFeatureExtractor') || this;
      }
      TinyFaceFeatureExtractor.prototype.forwardInput = function (input) {
          var params = this.params;
          if (!params) {
              throw new Error('TinyFaceFeatureExtractor - load model before inference');
          }
          return Ze(function () {
              var batchTensor = input.toBatchTensor(112, true);
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(On(255));
              var out = denseBlock3(normalized, params.dense0, true);
              out = denseBlock3(out, params.dense1);
              out = denseBlock3(out, params.dense2);
              out = fl(out, [14, 14], [2, 2], 'valid');
              return out;
          });
      };
      TinyFaceFeatureExtractor.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      TinyFaceFeatureExtractor.prototype.getDefaultModelName = function () {
          return 'face_feature_extractor_tiny_model';
      };
      TinyFaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return extractParamsFromWeigthMapTiny(weightMap);
      };
      TinyFaceFeatureExtractor.prototype.extractParams = function (weights) {
          return extractParamsTiny(weights);
      };
      return TinyFaceFeatureExtractor;
  }(NeuralNetwork));

  var FaceLandmark68TinyNet = /** @class */ (function (_super) {
      __extends(FaceLandmark68TinyNet, _super);
      function FaceLandmark68TinyNet(faceFeatureExtractor) {
          if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new TinyFaceFeatureExtractor(); }
          return _super.call(this, 'FaceLandmark68TinyNet', faceFeatureExtractor) || this;
      }
      FaceLandmark68TinyNet.prototype.getDefaultModelName = function () {
          return 'face_landmark_68_tiny_model';
      };
      FaceLandmark68TinyNet.prototype.getClassifierChannelsIn = function () {
          return 128;
      };
      return FaceLandmark68TinyNet;
  }(FaceLandmark68NetBase));

  var FaceLandmarkNet = /** @class */ (function (_super) {
      __extends(FaceLandmarkNet, _super);
      function FaceLandmarkNet() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return FaceLandmarkNet;
  }(FaceLandmark68Net));

  function scale(x, params) {
      return rc(gc(x, params.weights), params.biases);
  }

  function convLayer$1(x, params, strides, withRelu, padding) {
      if (padding === void 0) { padding = 'same'; }
      var _a = params.conv, filters = _a.filters, bias = _a.bias;
      var out = qc(x, filters, strides, padding);
      out = rc(out, bias);
      out = scale(out, params.scale);
      return withRelu ? Bl(out) : out;
  }
  function conv$1(x, params) {
      return convLayer$1(x, params, [1, 1], true);
  }
  function convNoRelu(x, params) {
      return convLayer$1(x, params, [1, 1], false);
  }
  function convDown(x, params) {
      return convLayer$1(x, params, [2, 2], true, 'valid');
  }

  function extractorsFactory$2(extractWeights, paramMappings) {
      function extractFilterValues(numFilterValues, numFilters, filterSize) {
          var weights = extractWeights(numFilterValues);
          var depth = weights.length / (numFilters * filterSize * filterSize);
          if (isFloat(depth)) {
              throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
          }
          return Ze(function () { return Wl(Ln(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]); });
      }
      function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
          var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
          var bias = Mn(extractWeights(numFilters));
          paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
          return { filters: filters, bias: bias };
      }
      function extractScaleLayerParams(numWeights, mappedPrefix) {
          var weights = Mn(extractWeights(numWeights));
          var biases = Mn(extractWeights(numWeights));
          paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/biases" });
          return {
              weights: weights,
              biases: biases
          };
      }
      function extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
          var conv = extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv");
          var scale = extractScaleLayerParams(numFilters, mappedPrefix + "/scale");
          return { conv: conv, scale: scale };
      }
      function extractResidualLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix, isDown) {
          if (isDown === void 0) { isDown = false; }
          var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize, mappedPrefix + "/conv1");
          var conv2 = extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv2");
          return { conv1: conv1, conv2: conv2 };
      }
      return {
          extractConvLayerParams: extractConvLayerParams,
          extractResidualLayerParams: extractResidualLayerParams
      };
  }
  function extractParams$4(weights) {
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var paramMappings = [];
      var _b = extractorsFactory$2(extractWeights, paramMappings), extractConvLayerParams = _b.extractConvLayerParams, extractResidualLayerParams = _b.extractResidualLayerParams;
      var conv32_down = extractConvLayerParams(4704, 32, 7, 'conv32_down');
      var conv32_1 = extractResidualLayerParams(9216, 32, 3, 'conv32_1');
      var conv32_2 = extractResidualLayerParams(9216, 32, 3, 'conv32_2');
      var conv32_3 = extractResidualLayerParams(9216, 32, 3, 'conv32_3');
      var conv64_down = extractResidualLayerParams(36864, 64, 3, 'conv64_down', true);
      var conv64_1 = extractResidualLayerParams(36864, 64, 3, 'conv64_1');
      var conv64_2 = extractResidualLayerParams(36864, 64, 3, 'conv64_2');
      var conv64_3 = extractResidualLayerParams(36864, 64, 3, 'conv64_3');
      var conv128_down = extractResidualLayerParams(147456, 128, 3, 'conv128_down', true);
      var conv128_1 = extractResidualLayerParams(147456, 128, 3, 'conv128_1');
      var conv128_2 = extractResidualLayerParams(147456, 128, 3, 'conv128_2');
      var conv256_down = extractResidualLayerParams(589824, 256, 3, 'conv256_down', true);
      var conv256_1 = extractResidualLayerParams(589824, 256, 3, 'conv256_1');
      var conv256_2 = extractResidualLayerParams(589824, 256, 3, 'conv256_2');
      var conv256_down_out = extractResidualLayerParams(589824, 256, 3, 'conv256_down_out');
      var fc = Ze(function () { return Wl(Bn(extractWeights(256 * 128), [128, 256]), [1, 0]); });
      paramMappings.push({ paramPath: "fc" });
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      var params = {
          conv32_down: conv32_down,
          conv32_1: conv32_1,
          conv32_2: conv32_2,
          conv32_3: conv32_3,
          conv64_down: conv64_down,
          conv64_1: conv64_1,
          conv64_2: conv64_2,
          conv64_3: conv64_3,
          conv128_down: conv128_down,
          conv128_1: conv128_1,
          conv128_2: conv128_2,
          conv256_down: conv256_down,
          conv256_1: conv256_1,
          conv256_2: conv256_2,
          conv256_down_out: conv256_down_out,
          fc: fc
      };
      return { params: params, paramMappings: paramMappings };
  }

  function extractorsFactory$3(weightMap, paramMappings) {
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      function extractScaleLayerParams(prefix) {
          var weights = extractWeightEntry(prefix + "/scale/weights", 1);
          var biases = extractWeightEntry(prefix + "/scale/biases", 1);
          return { weights: weights, biases: biases };
      }
      function extractConvLayerParams(prefix) {
          var filters = extractWeightEntry(prefix + "/conv/filters", 4);
          var bias = extractWeightEntry(prefix + "/conv/bias", 1);
          var scale = extractScaleLayerParams(prefix);
          return { conv: { filters: filters, bias: bias }, scale: scale };
      }
      function extractResidualLayerParams(prefix) {
          return {
              conv1: extractConvLayerParams(prefix + "/conv1"),
              conv2: extractConvLayerParams(prefix + "/conv2")
          };
      }
      return {
          extractConvLayerParams: extractConvLayerParams,
          extractResidualLayerParams: extractResidualLayerParams
      };
  }
  function extractParamsFromWeigthMap$4(weightMap) {
      var paramMappings = [];
      var _a = extractorsFactory$3(weightMap, paramMappings), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
      var conv32_down = extractConvLayerParams('conv32_down');
      var conv32_1 = extractResidualLayerParams('conv32_1');
      var conv32_2 = extractResidualLayerParams('conv32_2');
      var conv32_3 = extractResidualLayerParams('conv32_3');
      var conv64_down = extractResidualLayerParams('conv64_down');
      var conv64_1 = extractResidualLayerParams('conv64_1');
      var conv64_2 = extractResidualLayerParams('conv64_2');
      var conv64_3 = extractResidualLayerParams('conv64_3');
      var conv128_down = extractResidualLayerParams('conv128_down');
      var conv128_1 = extractResidualLayerParams('conv128_1');
      var conv128_2 = extractResidualLayerParams('conv128_2');
      var conv256_down = extractResidualLayerParams('conv256_down');
      var conv256_1 = extractResidualLayerParams('conv256_1');
      var conv256_2 = extractResidualLayerParams('conv256_2');
      var conv256_down_out = extractResidualLayerParams('conv256_down_out');
      var fc = weightMap['fc'];
      paramMappings.push({ originalPath: 'fc', paramPath: 'fc' });
      if (!isTensor2D(fc)) {
          throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc);
      }
      var params = {
          conv32_down: conv32_down,
          conv32_1: conv32_1,
          conv32_2: conv32_2,
          conv32_3: conv32_3,
          conv64_down: conv64_down,
          conv64_1: conv64_1,
          conv64_2: conv64_2,
          conv64_3: conv64_3,
          conv128_down: conv128_down,
          conv128_1: conv128_1,
          conv128_2: conv128_2,
          conv256_down: conv256_down,
          conv256_1: conv256_1,
          conv256_2: conv256_2,
          conv256_down_out: conv256_down_out,
          fc: fc
      };
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: params, paramMappings: paramMappings };
  }

  function residual(x, params) {
      var out = conv$1(x, params.conv1);
      out = convNoRelu(out, params.conv2);
      out = rc(out, x);
      out = Bl(out);
      return out;
  }
  function residualDown(x, params) {
      var out = convDown(x, params.conv1);
      out = convNoRelu(out, params.conv2);
      var pooled = fl(x, 2, 2, 'valid');
      var zeros = Gn(pooled.shape);
      var isPad = pooled.shape[3] !== out.shape[3];
      var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
      if (isAdjustShape) {
          var padShapeX = __spreadArrays(out.shape);
          padShapeX[1] = 1;
          var zerosW = Gn(padShapeX);
          out = Yn([out, zerosW], 1);
          var padShapeY = __spreadArrays(out.shape);
          padShapeY[2] = 1;
          var zerosH = Gn(padShapeY);
          out = Yn([out, zerosH], 2);
      }
      pooled = isPad ? Yn([pooled, zeros], 3) : pooled;
      out = rc(pooled, out);
      out = Bl(out);
      return out;
  }

  var FaceRecognitionNet = /** @class */ (function (_super) {
      __extends(FaceRecognitionNet, _super);
      function FaceRecognitionNet() {
          return _super.call(this, 'FaceRecognitionNet') || this;
      }
      FaceRecognitionNet.prototype.forwardInput = function (input) {
          var params = this.params;
          if (!params) {
              throw new Error('FaceRecognitionNet - load model before inference');
          }
          return Ze(function () {
              var batchTensor = input.toBatchTensor(150, true).toFloat();
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(On(256));
              var out = convDown(normalized, params.conv32_down);
              out = hl(out, 3, 2, 'valid');
              out = residual(out, params.conv32_1);
              out = residual(out, params.conv32_2);
              out = residual(out, params.conv32_3);
              out = residualDown(out, params.conv64_down);
              out = residual(out, params.conv64_1);
              out = residual(out, params.conv64_2);
              out = residual(out, params.conv64_3);
              out = residualDown(out, params.conv128_down);
              out = residual(out, params.conv128_1);
              out = residual(out, params.conv128_2);
              out = residualDown(out, params.conv256_down);
              out = residual(out, params.conv256_1);
              out = residual(out, params.conv256_2);
              out = residualDown(out, params.conv256_down_out);
              var globalAvg = out.mean([1, 2]);
              var fullyConnected = el(globalAvg, params.fc);
              return fullyConnected;
          });
      };
      FaceRecognitionNet.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      FaceRecognitionNet.prototype.computeFaceDescriptor = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, toNetInput(input)];
                      case 1:
                          netInput = _a.sent();
                          faceDescriptorTensors = Ze(function () { return Ur(_this.forwardInput(netInput)); });
                          return [4 /*yield*/, Promise.all(faceDescriptorTensors.map(function (t) { return t.data(); }))];
                      case 2:
                          faceDescriptorsForBatch = _a.sent();
                          faceDescriptorTensors.forEach(function (t) { return t.dispose(); });
                          return [2 /*return*/, netInput.isBatchInput
                                  ? faceDescriptorsForBatch
                                  : faceDescriptorsForBatch[0]];
                  }
              });
          });
      };
      FaceRecognitionNet.prototype.getDefaultModelName = function () {
          return 'face_recognition_model';
      };
      FaceRecognitionNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return extractParamsFromWeigthMap$4(weightMap);
      };
      FaceRecognitionNet.prototype.extractParams = function (weights) {
          return extractParams$4(weights);
      };
      return FaceRecognitionNet;
  }(NeuralNetwork));

  function createFaceRecognitionNet(weights) {
      var net = new FaceRecognitionNet();
      net.extractWeights(weights);
      return net;
  }

  function extendWithFaceDescriptor(sourceObj, descriptor) {
      var extension = { descriptor: descriptor };
      return Object.assign({}, sourceObj, extension);
  }

  function isWithAge(obj) {
      return typeof obj['age'] === 'number';
  }
  function extendWithAge(sourceObj, age) {
      var extension = { age: age };
      return Object.assign({}, sourceObj, extension);
  }

  function isWithGender(obj) {
      return (obj['gender'] === exports.Gender.MALE || obj['gender'] === exports.Gender.FEMALE)
          && isValidProbablitiy(obj['genderProbability']);
  }
  function extendWithGender(sourceObj, gender, genderProbability) {
      var extension = { gender: gender, genderProbability: genderProbability };
      return Object.assign({}, sourceObj, extension);
  }

  var MtcnnOptions = /** @class */ (function () {
      function MtcnnOptions(_a) {
          var _b = _a === void 0 ? {} : _a, minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
          this._name = 'MtcnnOptions';
          this._minFaceSize = minFaceSize || 20;
          this._scaleFactor = scaleFactor || 0.709;
          this._maxNumScales = maxNumScales || 10;
          this._scoreThresholds = scoreThresholds || [0.6, 0.7, 0.7];
          this._scaleSteps = scaleSteps;
          if (typeof this._minFaceSize !== 'number' || this._minFaceSize < 0) {
              throw new Error(this._name + " - expected minFaceSize to be a number > 0");
          }
          if (typeof this._scaleFactor !== 'number' || this._scaleFactor <= 0 || this._scaleFactor >= 1) {
              throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
          }
          if (typeof this._maxNumScales !== 'number' || this._maxNumScales < 0) {
              throw new Error(this._name + " - expected maxNumScales to be a number > 0");
          }
          if (!Array.isArray(this._scoreThresholds)
              || this._scoreThresholds.length !== 3
              || this._scoreThresholds.some(function (th) { return typeof th !== 'number'; })) {
              throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
          }
          if (this._scaleSteps
              && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function (th) { return typeof th !== 'number'; }))) {
              throw new Error(this._name + " - expected scaleSteps to be an array of numbers");
          }
      }
      Object.defineProperty(MtcnnOptions.prototype, "minFaceSize", {
          get: function () { return this._minFaceSize; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(MtcnnOptions.prototype, "scaleFactor", {
          get: function () { return this._scaleFactor; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(MtcnnOptions.prototype, "maxNumScales", {
          get: function () { return this._maxNumScales; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(MtcnnOptions.prototype, "scoreThresholds", {
          get: function () { return this._scoreThresholds; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(MtcnnOptions.prototype, "scaleSteps", {
          get: function () { return this._scaleSteps; },
          enumerable: true,
          configurable: true
      });
      return MtcnnOptions;
  }());

  function extractorsFactory$4(extractWeights, paramMappings) {
      function extractDepthwiseConvParams(numChannels, mappedPrefix) {
          var filters = Ln(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
          var batch_norm_scale = Mn(extractWeights(numChannels));
          var batch_norm_offset = Mn(extractWeights(numChannels));
          var batch_norm_mean = Mn(extractWeights(numChannels));
          var batch_norm_variance = Mn(extractWeights(numChannels));
          paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/batch_norm_scale" }, { paramPath: mappedPrefix + "/batch_norm_offset" }, { paramPath: mappedPrefix + "/batch_norm_mean" }, { paramPath: mappedPrefix + "/batch_norm_variance" });
          return {
              filters: filters,
              batch_norm_scale: batch_norm_scale,
              batch_norm_offset: batch_norm_offset,
              batch_norm_mean: batch_norm_mean,
              batch_norm_variance: batch_norm_variance
          };
      }
      function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, isPointwiseConv) {
          var filters = Ln(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
          var bias = Mn(extractWeights(channelsOut));
          paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/" + (isPointwiseConv ? 'batch_norm_offset' : 'bias') });
          return { filters: filters, bias: bias };
      }
      function extractPointwiseConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
          var _a = extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, true), filters = _a.filters, bias = _a.bias;
          return {
              filters: filters,
              batch_norm_offset: bias
          };
      }
      function extractConvPairParams(channelsIn, channelsOut, mappedPrefix) {
          var depthwise_conv = extractDepthwiseConvParams(channelsIn, mappedPrefix + "/depthwise_conv");
          var pointwise_conv = extractPointwiseConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/pointwise_conv");
          return { depthwise_conv: depthwise_conv, pointwise_conv: pointwise_conv };
      }
      function extractMobilenetV1Params() {
          var conv_0 = extractPointwiseConvParams(3, 32, 3, 'mobilenetv1/conv_0');
          var conv_1 = extractConvPairParams(32, 64, 'mobilenetv1/conv_1');
          var conv_2 = extractConvPairParams(64, 128, 'mobilenetv1/conv_2');
          var conv_3 = extractConvPairParams(128, 128, 'mobilenetv1/conv_3');
          var conv_4 = extractConvPairParams(128, 256, 'mobilenetv1/conv_4');
          var conv_5 = extractConvPairParams(256, 256, 'mobilenetv1/conv_5');
          var conv_6 = extractConvPairParams(256, 512, 'mobilenetv1/conv_6');
          var conv_7 = extractConvPairParams(512, 512, 'mobilenetv1/conv_7');
          var conv_8 = extractConvPairParams(512, 512, 'mobilenetv1/conv_8');
          var conv_9 = extractConvPairParams(512, 512, 'mobilenetv1/conv_9');
          var conv_10 = extractConvPairParams(512, 512, 'mobilenetv1/conv_10');
          var conv_11 = extractConvPairParams(512, 512, 'mobilenetv1/conv_11');
          var conv_12 = extractConvPairParams(512, 1024, 'mobilenetv1/conv_12');
          var conv_13 = extractConvPairParams(1024, 1024, 'mobilenetv1/conv_13');
          return {
              conv_0: conv_0,
              conv_1: conv_1,
              conv_2: conv_2,
              conv_3: conv_3,
              conv_4: conv_4,
              conv_5: conv_5,
              conv_6: conv_6,
              conv_7: conv_7,
              conv_8: conv_8,
              conv_9: conv_9,
              conv_10: conv_10,
              conv_11: conv_11,
              conv_12: conv_12,
              conv_13: conv_13
          };
      }
      function extractPredictionLayerParams() {
          var conv_0 = extractPointwiseConvParams(1024, 256, 1, 'prediction_layer/conv_0');
          var conv_1 = extractPointwiseConvParams(256, 512, 3, 'prediction_layer/conv_1');
          var conv_2 = extractPointwiseConvParams(512, 128, 1, 'prediction_layer/conv_2');
          var conv_3 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_3');
          var conv_4 = extractPointwiseConvParams(256, 128, 1, 'prediction_layer/conv_4');
          var conv_5 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_5');
          var conv_6 = extractPointwiseConvParams(256, 64, 1, 'prediction_layer/conv_6');
          var conv_7 = extractPointwiseConvParams(64, 128, 3, 'prediction_layer/conv_7');
          var box_encoding_0_predictor = extractConvParams(512, 12, 1, 'prediction_layer/box_predictor_0/box_encoding_predictor');
          var class_predictor_0 = extractConvParams(512, 9, 1, 'prediction_layer/box_predictor_0/class_predictor');
          var box_encoding_1_predictor = extractConvParams(1024, 24, 1, 'prediction_layer/box_predictor_1/box_encoding_predictor');
          var class_predictor_1 = extractConvParams(1024, 18, 1, 'prediction_layer/box_predictor_1/class_predictor');
          var box_encoding_2_predictor = extractConvParams(512, 24, 1, 'prediction_layer/box_predictor_2/box_encoding_predictor');
          var class_predictor_2 = extractConvParams(512, 18, 1, 'prediction_layer/box_predictor_2/class_predictor');
          var box_encoding_3_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_3/box_encoding_predictor');
          var class_predictor_3 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_3/class_predictor');
          var box_encoding_4_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_4/box_encoding_predictor');
          var class_predictor_4 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_4/class_predictor');
          var box_encoding_5_predictor = extractConvParams(128, 24, 1, 'prediction_layer/box_predictor_5/box_encoding_predictor');
          var class_predictor_5 = extractConvParams(128, 18, 1, 'prediction_layer/box_predictor_5/class_predictor');
          var box_predictor_0 = {
              box_encoding_predictor: box_encoding_0_predictor,
              class_predictor: class_predictor_0
          };
          var box_predictor_1 = {
              box_encoding_predictor: box_encoding_1_predictor,
              class_predictor: class_predictor_1
          };
          var box_predictor_2 = {
              box_encoding_predictor: box_encoding_2_predictor,
              class_predictor: class_predictor_2
          };
          var box_predictor_3 = {
              box_encoding_predictor: box_encoding_3_predictor,
              class_predictor: class_predictor_3
          };
          var box_predictor_4 = {
              box_encoding_predictor: box_encoding_4_predictor,
              class_predictor: class_predictor_4
          };
          var box_predictor_5 = {
              box_encoding_predictor: box_encoding_5_predictor,
              class_predictor: class_predictor_5
          };
          return {
              conv_0: conv_0,
              conv_1: conv_1,
              conv_2: conv_2,
              conv_3: conv_3,
              conv_4: conv_4,
              conv_5: conv_5,
              conv_6: conv_6,
              conv_7: conv_7,
              box_predictor_0: box_predictor_0,
              box_predictor_1: box_predictor_1,
              box_predictor_2: box_predictor_2,
              box_predictor_3: box_predictor_3,
              box_predictor_4: box_predictor_4,
              box_predictor_5: box_predictor_5
          };
      }
      return {
          extractMobilenetV1Params: extractMobilenetV1Params,
          extractPredictionLayerParams: extractPredictionLayerParams
      };
  }
  function extractParams$5(weights) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var _b = extractorsFactory$4(extractWeights, paramMappings), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
      var mobilenetv1 = extractMobilenetV1Params();
      var prediction_layer = extractPredictionLayerParams();
      var extra_dim = Pn(extractWeights(5118 * 4), [1, 5118, 4]);
      var output_layer = {
          extra_dim: extra_dim
      };
      paramMappings.push({ paramPath: 'output_layer/extra_dim' });
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return {
          params: {
              mobilenetv1: mobilenetv1,
              prediction_layer: prediction_layer,
              output_layer: output_layer
          },
          paramMappings: paramMappings
      };
  }

  function extractorsFactory$5(weightMap, paramMappings) {
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      function extractPointwiseConvParams(prefix, idx, mappedPrefix) {
          var filters = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/weights", 4, mappedPrefix + "/filters");
          var batch_norm_offset = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/convolution_bn_offset", 1, mappedPrefix + "/batch_norm_offset");
          return { filters: filters, batch_norm_offset: batch_norm_offset };
      }
      function extractConvPairParams(idx) {
          var mappedPrefix = "mobilenetv1/conv_" + idx;
          var prefixDepthwiseConv = "MobilenetV1/Conv2d_" + idx + "_depthwise";
          var mappedPrefixDepthwiseConv = mappedPrefix + "/depthwise_conv";
          var mappedPrefixPointwiseConv = mappedPrefix + "/pointwise_conv";
          var filters = extractWeightEntry(prefixDepthwiseConv + "/depthwise_weights", 4, mappedPrefixDepthwiseConv + "/filters");
          var batch_norm_scale = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/gamma", 1, mappedPrefixDepthwiseConv + "/batch_norm_scale");
          var batch_norm_offset = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/beta", 1, mappedPrefixDepthwiseConv + "/batch_norm_offset");
          var batch_norm_mean = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_mean", 1, mappedPrefixDepthwiseConv + "/batch_norm_mean");
          var batch_norm_variance = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_variance", 1, mappedPrefixDepthwiseConv + "/batch_norm_variance");
          return {
              depthwise_conv: {
                  filters: filters,
                  batch_norm_scale: batch_norm_scale,
                  batch_norm_offset: batch_norm_offset,
                  batch_norm_mean: batch_norm_mean,
                  batch_norm_variance: batch_norm_variance
              },
              pointwise_conv: extractPointwiseConvParams('MobilenetV1', idx, mappedPrefixPointwiseConv)
          };
      }
      function extractMobilenetV1Params() {
          return {
              conv_0: extractPointwiseConvParams('MobilenetV1', 0, 'mobilenetv1/conv_0'),
              conv_1: extractConvPairParams(1),
              conv_2: extractConvPairParams(2),
              conv_3: extractConvPairParams(3),
              conv_4: extractConvPairParams(4),
              conv_5: extractConvPairParams(5),
              conv_6: extractConvPairParams(6),
              conv_7: extractConvPairParams(7),
              conv_8: extractConvPairParams(8),
              conv_9: extractConvPairParams(9),
              conv_10: extractConvPairParams(10),
              conv_11: extractConvPairParams(11),
              conv_12: extractConvPairParams(12),
              conv_13: extractConvPairParams(13)
          };
      }
      function extractConvParams(prefix, mappedPrefix) {
          var filters = extractWeightEntry(prefix + "/weights", 4, mappedPrefix + "/filters");
          var bias = extractWeightEntry(prefix + "/biases", 1, mappedPrefix + "/bias");
          return { filters: filters, bias: bias };
      }
      function extractBoxPredictorParams(idx) {
          var box_encoding_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + idx + "/box_encoding_predictor");
          var class_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/ClassPredictor", "prediction_layer/box_predictor_" + idx + "/class_predictor");
          return { box_encoding_predictor: box_encoding_predictor, class_predictor: class_predictor };
      }
      function extractPredictionLayerParams() {
          return {
              conv_0: extractPointwiseConvParams('Prediction', 0, 'prediction_layer/conv_0'),
              conv_1: extractPointwiseConvParams('Prediction', 1, 'prediction_layer/conv_1'),
              conv_2: extractPointwiseConvParams('Prediction', 2, 'prediction_layer/conv_2'),
              conv_3: extractPointwiseConvParams('Prediction', 3, 'prediction_layer/conv_3'),
              conv_4: extractPointwiseConvParams('Prediction', 4, 'prediction_layer/conv_4'),
              conv_5: extractPointwiseConvParams('Prediction', 5, 'prediction_layer/conv_5'),
              conv_6: extractPointwiseConvParams('Prediction', 6, 'prediction_layer/conv_6'),
              conv_7: extractPointwiseConvParams('Prediction', 7, 'prediction_layer/conv_7'),
              box_predictor_0: extractBoxPredictorParams(0),
              box_predictor_1: extractBoxPredictorParams(1),
              box_predictor_2: extractBoxPredictorParams(2),
              box_predictor_3: extractBoxPredictorParams(3),
              box_predictor_4: extractBoxPredictorParams(4),
              box_predictor_5: extractBoxPredictorParams(5)
          };
      }
      return {
          extractMobilenetV1Params: extractMobilenetV1Params,
          extractPredictionLayerParams: extractPredictionLayerParams
      };
  }
  function extractParamsFromWeigthMap$5(weightMap) {
      var paramMappings = [];
      var _a = extractorsFactory$5(weightMap, paramMappings), extractMobilenetV1Params = _a.extractMobilenetV1Params, extractPredictionLayerParams = _a.extractPredictionLayerParams;
      var extra_dim = weightMap['Output/extra_dim'];
      paramMappings.push({ originalPath: 'Output/extra_dim', paramPath: 'output_layer/extra_dim' });
      if (!isTensor3D(extra_dim)) {
          throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + extra_dim);
      }
      var params = {
          mobilenetv1: extractMobilenetV1Params(),
          prediction_layer: extractPredictionLayerParams(),
          output_layer: {
              extra_dim: extra_dim
          }
      };
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: params, paramMappings: paramMappings };
  }

  function pointwiseConvLayer(x, params, strides) {
      return Ze(function () {
          var out = qc(x, params.filters, strides, 'same');
          out = rc(out, params.batch_norm_offset);
          return hu(out, 0, 6);
      });
  }

  var epsilon = 0.0010000000474974513;
  function depthwiseConvLayer(x, params, strides) {
      return Ze(function () {
          var out = Yc(x, params.filters, strides, 'same');
          out = ju(out, params.batch_norm_mean, params.batch_norm_variance, params.batch_norm_offset, params.batch_norm_scale, epsilon);
          return hu(out, 0, 6);
      });
  }
  function getStridesForLayerIdx(layerIdx) {
      return [2, 4, 6, 12].some(function (idx) { return idx === layerIdx; }) ? [2, 2] : [1, 1];
  }
  function mobileNetV1(x, params) {
      return Ze(function () {
          var conv11 = null;
          var out = pointwiseConvLayer(x, params.conv_0, [2, 2]);
          var convPairParams = [
              params.conv_1,
              params.conv_2,
              params.conv_3,
              params.conv_4,
              params.conv_5,
              params.conv_6,
              params.conv_7,
              params.conv_8,
              params.conv_9,
              params.conv_10,
              params.conv_11,
              params.conv_12,
              params.conv_13
          ];
          convPairParams.forEach(function (param, i) {
              var layerIdx = i + 1;
              var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
              out = depthwiseConvLayer(out, param.depthwise_conv, depthwiseConvStrides);
              out = pointwiseConvLayer(out, param.pointwise_conv, [1, 1]);
              if (layerIdx === 11) {
                  conv11 = out;
              }
          });
          if (conv11 === null) {
              throw new Error('mobileNetV1 - output of conv layer 11 is null');
          }
          return {
              out: out,
              conv11: conv11
          };
      });
  }

  function nonMaxSuppression$1(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
      var numBoxes = boxes.shape[0];
      var outputSize = Math.min(maxOutputSize, numBoxes);
      var candidates = scores
          .map(function (score, boxIndex) { return ({ score: score, boxIndex: boxIndex }); })
          .filter(function (c) { return c.score > scoreThreshold; })
          .sort(function (c1, c2) { return c2.score - c1.score; });
      var suppressFunc = function (x) { return x <= iouThreshold ? 1 : 0; };
      var selected = [];
      candidates.forEach(function (c) {
          if (selected.length >= outputSize) {
              return;
          }
          var originalScore = c.score;
          for (var j = selected.length - 1; j >= 0; --j) {
              var iou = IOU(boxes, c.boxIndex, selected[j]);
              if (iou === 0.0) {
                  continue;
              }
              c.score *= suppressFunc(iou);
              if (c.score <= scoreThreshold) {
                  break;
              }
          }
          if (originalScore === c.score) {
              selected.push(c.boxIndex);
          }
      });
      return selected;
  }
  function IOU(boxes, i, j) {
      var boxesData = boxes.arraySync();
      var yminI = Math.min(boxesData[i][0], boxesData[i][2]);
      var xminI = Math.min(boxesData[i][1], boxesData[i][3]);
      var ymaxI = Math.max(boxesData[i][0], boxesData[i][2]);
      var xmaxI = Math.max(boxesData[i][1], boxesData[i][3]);
      var yminJ = Math.min(boxesData[j][0], boxesData[j][2]);
      var xminJ = Math.min(boxesData[j][1], boxesData[j][3]);
      var ymaxJ = Math.max(boxesData[j][0], boxesData[j][2]);
      var xmaxJ = Math.max(boxesData[j][1], boxesData[j][3]);
      var areaI = (ymaxI - yminI) * (xmaxI - xminI);
      var areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
      if (areaI <= 0 || areaJ <= 0) {
          return 0.0;
      }
      var intersectionYmin = Math.max(yminI, yminJ);
      var intersectionXmin = Math.max(xminI, xminJ);
      var intersectionYmax = Math.min(ymaxI, ymaxJ);
      var intersectionXmax = Math.min(xmaxI, xmaxJ);
      var intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0.0) *
          Math.max(intersectionXmax - intersectionXmin, 0.0);
      return intersectionArea / (areaI + areaJ - intersectionArea);
  }

  function getCenterCoordinatesAndSizesLayer(x) {
      var vec = Ur(Wl(x, [1, 0]));
      var sizes = [
          Cc(vec[2], vec[0]),
          Cc(vec[3], vec[1])
      ];
      var centers = [
          rc(vec[0], sc(sizes[0], On(2))),
          rc(vec[1], sc(sizes[1], On(2)))
      ];
      return {
          sizes: sizes,
          centers: centers
      };
  }
  function decodeBoxesLayer(x0, x1) {
      var _a = getCenterCoordinatesAndSizesLayer(x0), sizes = _a.sizes, centers = _a.centers;
      var vec = Ur(Wl(x1, [1, 0]));
      var div0_out = sc(gc(vu(sc(vec[2], On(5))), sizes[0]), On(2));
      var add0_out = rc(gc(sc(vec[0], On(10)), sizes[0]), centers[0]);
      var div1_out = sc(gc(vu(sc(vec[3], On(5))), sizes[1]), On(2));
      var add1_out = rc(gc(sc(vec[1], On(10)), sizes[1]), centers[1]);
      return Wl(Pr([
          Cc(add0_out, div0_out),
          Cc(add1_out, div1_out),
          rc(add0_out, div0_out),
          rc(add1_out, div1_out)
      ]), [1, 0]);
  }
  function outputLayer(boxPredictions, classPredictions, params) {
      return Ze(function () {
          var batchSize = boxPredictions.shape[0];
          var boxes = decodeBoxesLayer(Or(Lr(params.extra_dim, [batchSize, 1, 1]), [-1, 4]), Or(boxPredictions, [-1, 4]));
          boxes = Or(boxes, [batchSize, (boxes.shape[0] / batchSize), 4]);
          var scoresAndClasses = Iu(ml(classPredictions, [0, 0, 1], [-1, -1, -1]));
          var scores = ml(scoresAndClasses, [0, 0, 0], [-1, -1, 1]);
          scores = Or(scores, [batchSize, scores.shape[1]]);
          var boxesByBatch = Ur(boxes);
          var scoresByBatch = Ur(scores);
          return {
              boxes: boxesByBatch,
              scores: scoresByBatch
          };
      });
  }

  function boxPredictionLayer(x, params) {
      return Ze(function () {
          var batchSize = x.shape[0];
          var boxPredictionEncoding = Or(convLayer(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
          var classPrediction = Or(convLayer(x, params.class_predictor), [batchSize, -1, 3]);
          return {
              boxPredictionEncoding: boxPredictionEncoding,
              classPrediction: classPrediction
          };
      });
  }

  function predictionLayer(x, conv11, params) {
      return Ze(function () {
          var conv0 = pointwiseConvLayer(x, params.conv_0, [1, 1]);
          var conv1 = pointwiseConvLayer(conv0, params.conv_1, [2, 2]);
          var conv2 = pointwiseConvLayer(conv1, params.conv_2, [1, 1]);
          var conv3 = pointwiseConvLayer(conv2, params.conv_3, [2, 2]);
          var conv4 = pointwiseConvLayer(conv3, params.conv_4, [1, 1]);
          var conv5 = pointwiseConvLayer(conv4, params.conv_5, [2, 2]);
          var conv6 = pointwiseConvLayer(conv5, params.conv_6, [1, 1]);
          var conv7 = pointwiseConvLayer(conv6, params.conv_7, [2, 2]);
          var boxPrediction0 = boxPredictionLayer(conv11, params.box_predictor_0);
          var boxPrediction1 = boxPredictionLayer(x, params.box_predictor_1);
          var boxPrediction2 = boxPredictionLayer(conv1, params.box_predictor_2);
          var boxPrediction3 = boxPredictionLayer(conv3, params.box_predictor_3);
          var boxPrediction4 = boxPredictionLayer(conv5, params.box_predictor_4);
          var boxPrediction5 = boxPredictionLayer(conv7, params.box_predictor_5);
          var boxPredictions = Yn([
              boxPrediction0.boxPredictionEncoding,
              boxPrediction1.boxPredictionEncoding,
              boxPrediction2.boxPredictionEncoding,
              boxPrediction3.boxPredictionEncoding,
              boxPrediction4.boxPredictionEncoding,
              boxPrediction5.boxPredictionEncoding
          ], 1);
          var classPredictions = Yn([
              boxPrediction0.classPrediction,
              boxPrediction1.classPrediction,
              boxPrediction2.classPrediction,
              boxPrediction3.classPrediction,
              boxPrediction4.classPrediction,
              boxPrediction5.classPrediction
          ], 1);
          return {
              boxPredictions: boxPredictions,
              classPredictions: classPredictions
          };
      });
  }

  var SsdMobilenetv1Options = /** @class */ (function () {
      function SsdMobilenetv1Options(_a) {
          var _b = _a === void 0 ? {} : _a, minConfidence = _b.minConfidence, maxResults = _b.maxResults;
          this._name = 'SsdMobilenetv1Options';
          this._minConfidence = minConfidence || 0.5;
          this._maxResults = maxResults || 100;
          if (typeof this._minConfidence !== 'number' || this._minConfidence <= 0 || this._minConfidence >= 1) {
              throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
          }
          if (typeof this._maxResults !== 'number') {
              throw new Error(this._name + " - expected maxResults to be a number");
          }
      }
      Object.defineProperty(SsdMobilenetv1Options.prototype, "minConfidence", {
          get: function () { return this._minConfidence; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(SsdMobilenetv1Options.prototype, "maxResults", {
          get: function () { return this._maxResults; },
          enumerable: true,
          configurable: true
      });
      return SsdMobilenetv1Options;
  }());

  var SsdMobilenetv1 = /** @class */ (function (_super) {
      __extends(SsdMobilenetv1, _super);
      function SsdMobilenetv1() {
          return _super.call(this, 'SsdMobilenetv1') || this;
      }
      SsdMobilenetv1.prototype.forwardInput = function (input) {
          var params = this.params;
          if (!params) {
              throw new Error('SsdMobilenetv1 - load model before inference');
          }
          return Ze(function () {
              var batchTensor = input.toBatchTensor(512, false).toFloat();
              var x = Cc(gc(batchTensor, On(0.007843137718737125)), On(1));
              var features = mobileNetV1(x, params.mobilenetv1);
              var _a = predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
              return outputLayer(boxPredictions, classPredictions, params.output_layer);
          });
      };
      SsdMobilenetv1.prototype.forward = function (input) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      SsdMobilenetv1.prototype.locateFaces = function (input, options) {
          if (options === void 0) { options = {}; }
          return __awaiter(this, void 0, void 0, function () {
              var _a, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i, scoresData, _c, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, boxesData, results;
              return __generator(this, function (_e) {
                  switch (_e.label) {
                      case 0:
                          _a = new SsdMobilenetv1Options(options), maxResults = _a.maxResults, minConfidence = _a.minConfidence;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1:
                          netInput = _e.sent();
                          _b = this.forwardInput(netInput), _boxes = _b.boxes, _scores = _b.scores;
                          boxes = _boxes[0];
                          scores = _scores[0];
                          for (i = 1; i < _boxes.length; i++) {
                              _boxes[i].dispose();
                              _scores[i].dispose();
                          }
                          _d = (_c = Array).from;
                          return [4 /*yield*/, scores.data()];
                      case 2:
                          scoresData = _d.apply(_c, [_e.sent()]);
                          iouThreshold = 0.5;
                          indices = nonMaxSuppression$1(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                          reshapedDims = netInput.getReshapedInputDimensions(0);
                          inputSize = netInput.inputSize;
                          padX = inputSize / reshapedDims.width;
                          padY = inputSize / reshapedDims.height;
                          boxesData = boxes.arraySync();
                          results = indices
                              .map(function (idx) {
                              var _a = [
                                  Math.max(0, boxesData[idx][0]),
                                  Math.min(1.0, boxesData[idx][2])
                              ].map(function (val) { return val * padY; }), top = _a[0], bottom = _a[1];
                              var _b = [
                                  Math.max(0, boxesData[idx][1]),
                                  Math.min(1.0, boxesData[idx][3])
                              ].map(function (val) { return val * padX; }), left = _b[0], right = _b[1];
                              return new FaceDetection(scoresData[idx], new Rect(left, top, right - left, bottom - top), {
                                  height: netInput.getInputHeight(0),
                                  width: netInput.getInputWidth(0)
                              });
                          });
                          boxes.dispose();
                          scores.dispose();
                          return [2 /*return*/, results];
                  }
              });
          });
      };
      SsdMobilenetv1.prototype.getDefaultModelName = function () {
          return 'ssd_mobilenetv1_model';
      };
      SsdMobilenetv1.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return extractParamsFromWeigthMap$5(weightMap);
      };
      SsdMobilenetv1.prototype.extractParams = function (weights) {
          return extractParams$5(weights);
      };
      return SsdMobilenetv1;
  }(NeuralNetwork));

  function createSsdMobilenetv1(weights) {
      var net = new SsdMobilenetv1();
      net.extractWeights(weights);
      return net;
  }
  function createFaceDetectionNet(weights) {
      return createSsdMobilenetv1(weights);
  }
  // alias for backward compatibily
  var FaceDetectionNet = /** @class */ (function (_super) {
      __extends(FaceDetectionNet, _super);
      function FaceDetectionNet() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return FaceDetectionNet;
  }(SsdMobilenetv1));

  var IOU_THRESHOLD = 0.4;
  var BOX_ANCHORS = [
      new Point(0.738768, 0.874946),
      new Point(2.42204, 2.65704),
      new Point(4.30971, 7.04493),
      new Point(10.246, 4.59428),
      new Point(12.6868, 11.8741)
  ];
  var BOX_ANCHORS_SEPARABLE = [
      new Point(1.603231, 2.094468),
      new Point(6.041143, 7.080126),
      new Point(2.882459, 3.518061),
      new Point(4.266906, 5.178857),
      new Point(9.041765, 10.66308)
  ];
  var MEAN_RGB_SEPARABLE = [117.001, 114.697, 97.404];
  var DEFAULT_MODEL_NAME = 'tiny_yolov2_model';
  var DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model';

  var isNumber = function (arg) { return typeof arg === 'number'; };
  function validateConfig(config) {
      if (!config) {
          throw new Error("invalid config: " + config);
      }
      if (typeof config.withSeparableConvs !== 'boolean') {
          throw new Error("config.withSeparableConvs has to be a boolean, have: " + config.withSeparableConvs);
      }
      if (!isNumber(config.iouThreshold) || config.iouThreshold < 0 || config.iouThreshold > 1.0) {
          throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + config.iouThreshold);
      }
      if (!Array.isArray(config.classes)
          || !config.classes.length
          || !config.classes.every(function (c) { return typeof c === 'string'; })) {
          throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(config.classes));
      }
      if (!Array.isArray(config.anchors)
          || !config.anchors.length
          || !config.anchors.map(function (a) { return a || {}; }).every(function (a) { return isNumber(a.x) && isNumber(a.y); })) {
          throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(config.anchors));
      }
      if (config.meanRgb && (!Array.isArray(config.meanRgb)
          || config.meanRgb.length !== 3
          || !config.meanRgb.every(isNumber))) {
          throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(config.meanRgb));
      }
  }

  function leaky(x) {
      return Ze(function () {
          var min = gc(x, On(0.10000000149011612));
          return rc(Bl(Cc(x, min)), min);
          //return tf.maximum(x, min)
      });
  }

  function convWithBatchNorm(x, params) {
      return Ze(function () {
          var out = Ir(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
          out = qc(out, params.conv.filters, [1, 1], 'valid');
          out = Cc(out, params.bn.sub);
          out = gc(out, params.bn.truediv);
          out = rc(out, params.conv.bias);
          return leaky(out);
      });
  }

  function depthwiseSeparableConv$1(x, params) {
      return Ze(function () {
          var out = Ir(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
          out = Jc(out, params.depthwise_filter, params.pointwise_filter, [1, 1], 'valid');
          out = rc(out, params.bias);
          return leaky(out);
      });
  }

  function extractorsFactory$6(extractWeights, paramMappings) {
      var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
      function extractBatchNormParams(size, mappedPrefix) {
          var sub = Mn(extractWeights(size));
          var truediv = Mn(extractWeights(size));
          paramMappings.push({ paramPath: mappedPrefix + "/sub" }, { paramPath: mappedPrefix + "/truediv" });
          return { sub: sub, truediv: truediv };
      }
      function extractConvWithBatchNormParams(channelsIn, channelsOut, mappedPrefix) {
          var conv = extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv");
          var bn = extractBatchNormParams(channelsOut, mappedPrefix + "/bn");
          return { conv: conv, bn: bn };
      }
      var extractSeparableConvParams = extractSeparableConvParamsFactory(extractWeights, paramMappings);
      return {
          extractConvParams: extractConvParams,
          extractConvWithBatchNormParams: extractConvWithBatchNormParams,
          extractSeparableConvParams: extractSeparableConvParams
      };
  }
  function extractParams$6(weights, config, boxEncodingSize, filterSizes) {
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var paramMappings = [];
      var _b = extractorsFactory$6(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractConvWithBatchNormParams = _b.extractConvWithBatchNormParams, extractSeparableConvParams = _b.extractSeparableConvParams;
      var params;
      if (config.withSeparableConvs) {
          var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
          var conv0 = config.isFirstLayerConv2d
              ? extractConvParams(s0, s1, 3, 'conv0')
              : extractSeparableConvParams(s0, s1, 'conv0');
          var conv1 = extractSeparableConvParams(s1, s2, 'conv1');
          var conv2 = extractSeparableConvParams(s2, s3, 'conv2');
          var conv3 = extractSeparableConvParams(s3, s4, 'conv3');
          var conv4 = extractSeparableConvParams(s4, s5, 'conv4');
          var conv5 = extractSeparableConvParams(s5, s6, 'conv5');
          var conv6 = s7 ? extractSeparableConvParams(s6, s7, 'conv6') : undefined;
          var conv7 = s8 ? extractSeparableConvParams(s7, s8, 'conv7') : undefined;
          var conv8 = extractConvParams(s8 || s7 || s6, 5 * boxEncodingSize, 1, 'conv8');
          params = { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3, conv4: conv4, conv5: conv5, conv6: conv6, conv7: conv7, conv8: conv8 };
      }
      else {
          var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
          var conv0 = extractConvWithBatchNormParams(s0, s1, 'conv0');
          var conv1 = extractConvWithBatchNormParams(s1, s2, 'conv1');
          var conv2 = extractConvWithBatchNormParams(s2, s3, 'conv2');
          var conv3 = extractConvWithBatchNormParams(s3, s4, 'conv3');
          var conv4 = extractConvWithBatchNormParams(s4, s5, 'conv4');
          var conv5 = extractConvWithBatchNormParams(s5, s6, 'conv5');
          var conv6 = extractConvWithBatchNormParams(s6, s7, 'conv6');
          var conv7 = extractConvWithBatchNormParams(s7, s8, 'conv7');
          var conv8 = extractConvParams(s8, 5 * boxEncodingSize, 1, 'conv8');
          params = { conv0: conv0, conv1: conv1, conv2: conv2, conv3: conv3, conv4: conv4, conv5: conv5, conv6: conv6, conv7: conv7, conv8: conv8 };
      }
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return { params: params, paramMappings: paramMappings };
  }

  function extractorsFactory$7(weightMap, paramMappings) {
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      function extractBatchNormParams(prefix) {
          var sub = extractWeightEntry(prefix + "/sub", 1);
          var truediv = extractWeightEntry(prefix + "/truediv", 1);
          return { sub: sub, truediv: truediv };
      }
      function extractConvParams(prefix) {
          var filters = extractWeightEntry(prefix + "/filters", 4);
          var bias = extractWeightEntry(prefix + "/bias", 1);
          return { filters: filters, bias: bias };
      }
      function extractConvWithBatchNormParams(prefix) {
          var conv = extractConvParams(prefix + "/conv");
          var bn = extractBatchNormParams(prefix + "/bn");
          return { conv: conv, bn: bn };
      }
      var extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry);
      return {
          extractConvParams: extractConvParams,
          extractConvWithBatchNormParams: extractConvWithBatchNormParams,
          extractSeparableConvParams: extractSeparableConvParams
      };
  }
  function extractParamsFromWeigthMap$6(weightMap, config) {
      var paramMappings = [];
      var _a = extractorsFactory$7(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractConvWithBatchNormParams = _a.extractConvWithBatchNormParams, extractSeparableConvParams = _a.extractSeparableConvParams;
      var params;
      if (config.withSeparableConvs) {
          var numFilters = (config.filterSizes && config.filterSizes.length || 9);
          params = {
              conv0: config.isFirstLayerConv2d ? extractConvParams('conv0') : extractSeparableConvParams('conv0'),
              conv1: extractSeparableConvParams('conv1'),
              conv2: extractSeparableConvParams('conv2'),
              conv3: extractSeparableConvParams('conv3'),
              conv4: extractSeparableConvParams('conv4'),
              conv5: extractSeparableConvParams('conv5'),
              conv6: numFilters > 7 ? extractSeparableConvParams('conv6') : undefined,
              conv7: numFilters > 8 ? extractSeparableConvParams('conv7') : undefined,
              conv8: extractConvParams('conv8')
          };
      }
      else {
          params = {
              conv0: extractConvWithBatchNormParams('conv0'),
              conv1: extractConvWithBatchNormParams('conv1'),
              conv2: extractConvWithBatchNormParams('conv2'),
              conv3: extractConvWithBatchNormParams('conv3'),
              conv4: extractConvWithBatchNormParams('conv4'),
              conv5: extractConvWithBatchNormParams('conv5'),
              conv6: extractConvWithBatchNormParams('conv6'),
              conv7: extractConvWithBatchNormParams('conv7'),
              conv8: extractConvParams('conv8')
          };
      }
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: params, paramMappings: paramMappings };
  }

  (function (TinyYolov2SizeType) {
      TinyYolov2SizeType[TinyYolov2SizeType["XS"] = 224] = "XS";
      TinyYolov2SizeType[TinyYolov2SizeType["SM"] = 320] = "SM";
      TinyYolov2SizeType[TinyYolov2SizeType["MD"] = 416] = "MD";
      TinyYolov2SizeType[TinyYolov2SizeType["LG"] = 608] = "LG";
  })(exports.TinyYolov2SizeType || (exports.TinyYolov2SizeType = {}));
  var TinyYolov2Options = /** @class */ (function () {
      function TinyYolov2Options(_a) {
          var _b = _a === void 0 ? {} : _a, inputSize = _b.inputSize, scoreThreshold = _b.scoreThreshold;
          this._name = 'TinyYolov2Options';
          this._inputSize = inputSize || 416;
          this._scoreThreshold = scoreThreshold || 0.5;
          if (typeof this._inputSize !== 'number' || this._inputSize % 32 !== 0) {
              throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
          }
          if (typeof this._scoreThreshold !== 'number' || this._scoreThreshold <= 0 || this._scoreThreshold >= 1) {
              throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1");
          }
      }
      Object.defineProperty(TinyYolov2Options.prototype, "inputSize", {
          get: function () { return this._inputSize; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(TinyYolov2Options.prototype, "scoreThreshold", {
          get: function () { return this._scoreThreshold; },
          enumerable: true,
          configurable: true
      });
      return TinyYolov2Options;
  }());

  var TinyYolov2Base = /** @class */ (function (_super) {
      __extends(TinyYolov2Base, _super);
      function TinyYolov2Base(config) {
          var _this = _super.call(this, 'TinyYolov2') || this;
          validateConfig(config);
          _this._config = config;
          return _this;
      }
      Object.defineProperty(TinyYolov2Base.prototype, "config", {
          get: function () {
              return this._config;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(TinyYolov2Base.prototype, "withClassScores", {
          get: function () {
              return this.config.withClassScores || this.config.classes.length > 1;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(TinyYolov2Base.prototype, "boxEncodingSize", {
          get: function () {
              return 5 + (this.withClassScores ? this.config.classes.length : 0);
          },
          enumerable: true,
          configurable: true
      });
      TinyYolov2Base.prototype.runTinyYolov2 = function (x, params) {
          var out = convWithBatchNorm(x, params.conv0);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv1);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv2);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv3);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv4);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv5);
          out = hl(out, [2, 2], [1, 1], 'same');
          out = convWithBatchNorm(out, params.conv6);
          out = convWithBatchNorm(out, params.conv7);
          return convLayer(out, params.conv8, 'valid', false);
      };
      TinyYolov2Base.prototype.runMobilenet = function (x, params) {
          var out = this.config.isFirstLayerConv2d
              ? leaky(convLayer(x, params.conv0, 'valid', false))
              : depthwiseSeparableConv$1(x, params.conv0);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv1);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv2);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv3);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv4);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv5);
          out = hl(out, [2, 2], [1, 1], 'same');
          out = params.conv6 ? depthwiseSeparableConv$1(out, params.conv6) : out;
          out = params.conv7 ? depthwiseSeparableConv$1(out, params.conv7) : out;
          return convLayer(out, params.conv8, 'valid', false);
      };
      TinyYolov2Base.prototype.forwardInput = function (input, inputSize) {
          var _this = this;
          var params = this.params;
          if (!params) {
              throw new Error('TinyYolov2 - load model before inference');
          }
          return Ze(function () {
              var batchTensor = input.toBatchTensor(inputSize, false).toFloat();
              batchTensor = _this.config.meanRgb
                  ? normalize(batchTensor, _this.config.meanRgb)
                  : batchTensor;
              batchTensor = batchTensor.div(On(256));
              return _this.config.withSeparableConvs
                  ? _this.runMobilenet(batchTensor, params)
                  : _this.runTinyYolov2(batchTensor, params);
          });
      };
      TinyYolov2Base.prototype.forward = function (input, inputSize) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(), inputSize])];
                      case 2: return [2 /*return*/, _b.sent()];
                  }
              });
          });
      };
      TinyYolov2Base.prototype.detect = function (input, forwardParams) {
          if (forwardParams === void 0) { forwardParams = {}; }
          return __awaiter(this, void 0, void 0, function () {
              var _a, inputSize, scoreThreshold, netInput, out, out0, inputDimensions, results, boxes, scores, classScores, classNames, indices, detections;
              var _this = this;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = new TinyYolov2Options(forwardParams), inputSize = _a.inputSize, scoreThreshold = _a.scoreThreshold;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1:
                          netInput = _b.sent();
                          return [4 /*yield*/, this.forwardInput(netInput, inputSize)];
                      case 2:
                          out = _b.sent();
                          out0 = Ze(function () { return Ur(out)[0].expandDims(); });
                          inputDimensions = {
                              width: netInput.getInputWidth(0),
                              height: netInput.getInputHeight(0)
                          };
                          return [4 /*yield*/, this.extractBoxes(out0, netInput.getReshapedInputDimensions(0), scoreThreshold)];
                      case 3:
                          results = _b.sent();
                          out.dispose();
                          out0.dispose();
                          boxes = results.map(function (res) { return res.box; });
                          scores = results.map(function (res) { return res.score; });
                          classScores = results.map(function (res) { return res.classScore; });
                          classNames = results.map(function (res) { return _this.config.classes[res.label]; });
                          indices = nonMaxSuppression(boxes.map(function (box) { return box.rescale(inputSize); }), scores, this.config.iouThreshold, true);
                          detections = indices.map(function (idx) {
                              return new ObjectDetection(scores[idx], classScores[idx], classNames[idx], boxes[idx], inputDimensions);
                          });
                          return [2 /*return*/, detections];
                  }
              });
          });
      };
      TinyYolov2Base.prototype.getDefaultModelName = function () {
          return '';
      };
      TinyYolov2Base.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return extractParamsFromWeigthMap$6(weightMap, this.config);
      };
      TinyYolov2Base.prototype.extractParams = function (weights) {
          var filterSizes = this.config.filterSizes || TinyYolov2Base.DEFAULT_FILTER_SIZES;
          var numFilters = filterSizes ? filterSizes.length : undefined;
          if (numFilters !== 7 && numFilters !== 8 && numFilters !== 9) {
              throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + numFilters + " filterSizes in config");
          }
          return extractParams$6(weights, this.config, this.boxEncodingSize, filterSizes);
      };
      TinyYolov2Base.prototype.extractBoxes = function (outputTensor, inputBlobDimensions, scoreThreshold) {
          return __awaiter(this, void 0, void 0, function () {
              var width, height, inputSize, correctionFactorX, correctionFactorY, numCells, numBoxes, _a, boxesTensor, scoresTensor, classScoresTensor, results, scoresData, boxesData, row, col, anchor, score, ctX, ctY, width_1, height_1, x, y, pos, _b, classScore, label, _c;
              var _this = this;
              return __generator(this, function (_d) {
                  switch (_d.label) {
                      case 0:
                          width = inputBlobDimensions.width, height = inputBlobDimensions.height;
                          inputSize = Math.max(width, height);
                          correctionFactorX = inputSize / width;
                          correctionFactorY = inputSize / height;
                          numCells = outputTensor.shape[1];
                          numBoxes = this.config.anchors.length;
                          _a = Ze(function () {
                              var reshaped = outputTensor.reshape([numCells, numCells, numBoxes, _this.boxEncodingSize]);
                              var boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, numBoxes, 4]);
                              var scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, numBoxes, 1]);
                              var classScores = _this.withClassScores
                                  ? go(reshaped.slice([0, 0, 0, 5], [numCells, numCells, numBoxes, _this.config.classes.length]), 3)
                                  : On(0);
                              return [boxes, scores, classScores];
                          }), boxesTensor = _a[0], scoresTensor = _a[1], classScoresTensor = _a[2];
                          results = [];
                          return [4 /*yield*/, scoresTensor.array()];
                      case 1:
                          scoresData = _d.sent();
                          return [4 /*yield*/, boxesTensor.array()];
                      case 2:
                          boxesData = _d.sent();
                          row = 0;
                          _d.label = 3;
                      case 3:
                          if (!(row < numCells)) return [3 /*break*/, 12];
                          col = 0;
                          _d.label = 4;
                      case 4:
                          if (!(col < numCells)) return [3 /*break*/, 11];
                          anchor = 0;
                          _d.label = 5;
                      case 5:
                          if (!(anchor < numBoxes)) return [3 /*break*/, 10];
                          score = sigmoid(scoresData[row][col][anchor][0]);
                          if (!(!scoreThreshold || score > scoreThreshold)) return [3 /*break*/, 9];
                          ctX = ((col + sigmoid(boxesData[row][col][anchor][0])) / numCells) * correctionFactorX;
                          ctY = ((row + sigmoid(boxesData[row][col][anchor][1])) / numCells) * correctionFactorY;
                          width_1 = ((Math.exp(boxesData[row][col][anchor][2]) * this.config.anchors[anchor].x) / numCells) * correctionFactorX;
                          height_1 = ((Math.exp(boxesData[row][col][anchor][3]) * this.config.anchors[anchor].y) / numCells) * correctionFactorY;
                          x = (ctX - (width_1 / 2));
                          y = (ctY - (height_1 / 2));
                          pos = { row: row, col: col, anchor: anchor };
                          if (!this.withClassScores) return [3 /*break*/, 7];
                          return [4 /*yield*/, this.extractPredictedClass(classScoresTensor, pos)];
                      case 6:
                          _c = _d.sent();
                          return [3 /*break*/, 8];
                      case 7:
                          _c = { classScore: 1, label: 0 };
                          _d.label = 8;
                      case 8:
                          _b = _c, classScore = _b.classScore, label = _b.label;
                          results.push(__assign({ box: new BoundingBox(x, y, x + width_1, y + height_1), score: score, classScore: score * classScore, label: label }, pos));
                          _d.label = 9;
                      case 9:
                          anchor++;
                          return [3 /*break*/, 5];
                      case 10:
                          col++;
                          return [3 /*break*/, 4];
                      case 11:
                          row++;
                          return [3 /*break*/, 3];
                      case 12:
                          boxesTensor.dispose();
                          scoresTensor.dispose();
                          classScoresTensor.dispose();
                          return [2 /*return*/, results];
                  }
              });
          });
      };
      TinyYolov2Base.prototype.extractPredictedClass = function (classesTensor, pos) {
          return __awaiter(this, void 0, void 0, function () {
              var row, col, anchor, classesData;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          row = pos.row, col = pos.col, anchor = pos.anchor;
                          return [4 /*yield*/, classesTensor.array()];
                      case 1:
                          classesData = _a.sent();
                          return [2 /*return*/, Array(this.config.classes.length).fill(0)
                                  .map(function (_, i) { return classesData[row][col][anchor][i]; })
                                  .map(function (classScore, label) { return ({
                                  classScore: classScore,
                                  label: label
                              }); })
                                  .reduce(function (max, curr) { return max.classScore > curr.classScore ? max : curr; })];
                  }
              });
          });
      };
      TinyYolov2Base.DEFAULT_FILTER_SIZES = [
          3, 16, 32, 64, 128, 256, 512, 1024, 1024
      ];
      return TinyYolov2Base;
  }(NeuralNetwork));

  var TinyYolov2 = /** @class */ (function (_super) {
      __extends(TinyYolov2, _super);
      function TinyYolov2(withSeparableConvs) {
          if (withSeparableConvs === void 0) { withSeparableConvs = true; }
          var _this = this;
          var config = Object.assign({}, {
              withSeparableConvs: withSeparableConvs,
              iouThreshold: IOU_THRESHOLD,
              classes: ['face']
          }, withSeparableConvs
              ? {
                  anchors: BOX_ANCHORS_SEPARABLE,
                  meanRgb: MEAN_RGB_SEPARABLE
              }
              : {
                  anchors: BOX_ANCHORS,
                  withClassScores: true
              });
          _this = _super.call(this, config) || this;
          return _this;
      }
      Object.defineProperty(TinyYolov2.prototype, "withSeparableConvs", {
          get: function () {
              return this.config.withSeparableConvs;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(TinyYolov2.prototype, "anchors", {
          get: function () {
              return this.config.anchors;
          },
          enumerable: true,
          configurable: true
      });
      TinyYolov2.prototype.locateFaces = function (input, forwardParams) {
          return __awaiter(this, void 0, void 0, function () {
              var objectDetections;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.detect(input, forwardParams)];
                      case 1:
                          objectDetections = _a.sent();
                          return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                  }
              });
          });
      };
      TinyYolov2.prototype.getDefaultModelName = function () {
          return this.withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME;
      };
      TinyYolov2.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
      };
      return TinyYolov2;
  }(TinyYolov2Base));

  function createTinyYolov2(weights, withSeparableConvs) {
      if (withSeparableConvs === void 0) { withSeparableConvs = true; }
      var net = new TinyYolov2(withSeparableConvs);
      net.extractWeights(weights);
      return net;
  }

  var TinyFaceDetectorOptions = /** @class */ (function (_super) {
      __extends(TinyFaceDetectorOptions, _super);
      function TinyFaceDetectorOptions() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this._name = 'TinyFaceDetectorOptions';
          return _this;
      }
      return TinyFaceDetectorOptions;
  }(TinyYolov2Options));

  var ComposableTask = /** @class */ (function () {
      function ComposableTask() {
      }
      ComposableTask.prototype.then = function (onfulfilled) {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = onfulfilled;
                          return [4 /*yield*/, this.run()];
                      case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                  }
              });
          });
      };
      ComposableTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  throw new Error('ComposableTask - run is not implemented');
              });
          });
      };
      return ComposableTask;
  }());

  function extractAllFacesAndComputeResults(parentResults, input, computeResults, extractedFaces, getRectForAlignment) {
      if (getRectForAlignment === void 0) { getRectForAlignment = function (_a) {
          var alignedRect = _a.alignedRect;
          return alignedRect;
      }; }
      return __awaiter(this, void 0, void 0, function () {
          var faceBoxes, faces, _a, _b, results;
          return __generator(this, function (_c) {
              switch (_c.label) {
                  case 0:
                      faceBoxes = parentResults.map(function (parentResult) {
                          return isWithFaceLandmarks(parentResult)
                              ? getRectForAlignment(parentResult)
                              : parentResult.detection;
                      });
                      _a = extractedFaces;
                      if (_a) return [3 /*break*/, 5];
                      if (!(input instanceof wt)) return [3 /*break*/, 2];
                      return [4 /*yield*/, extractFaceTensors(input, faceBoxes)];
                  case 1:
                      _b = _c.sent();
                      return [3 /*break*/, 4];
                  case 2: return [4 /*yield*/, extractFaces(input, faceBoxes)];
                  case 3:
                      _b = _c.sent();
                      _c.label = 4;
                  case 4:
                      _a = (_b);
                      _c.label = 5;
                  case 5:
                      faces = _a;
                      return [4 /*yield*/, computeResults(faces)];
                  case 6:
                      results = _c.sent();
                      faces.forEach(function (f) { return f instanceof wt && f.dispose(); });
                      return [2 /*return*/, results];
              }
          });
      });
  }
  function extractSingleFaceAndComputeResult(parentResult, input, computeResult, extractedFaces, getRectForAlignment) {
      return __awaiter(this, void 0, void 0, function () {
          var _this = this;
          return __generator(this, function (_a) {
              return [2 /*return*/, extractAllFacesAndComputeResults([parentResult], input, function (faces) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                      return [2 /*return*/, computeResult(faces[0])];
                  }); }); }, extractedFaces, getRectForAlignment)];
          });
      });
  }

  function bgrToRgbTensor(tensor) {
      return Ze(function () { return Pr(Ur(tensor, 3).reverse(), 3); });
  }

  var CELL_STRIDE = 2;
  var CELL_SIZE = 12;

  function extractorsFactory$8(extractWeights, paramMappings) {
      var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
      var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
      function extractPReluParams(size, paramPath) {
          var alpha = Mn(extractWeights(size));
          paramMappings.push({ paramPath: paramPath });
          return alpha;
      }
      function extractSharedParams(numFilters, mappedPrefix, isRnet) {
          if (isRnet === void 0) { isRnet = false; }
          var conv1 = extractConvParams(numFilters[0], numFilters[1], 3, mappedPrefix + "/conv1");
          var prelu1_alpha = extractPReluParams(numFilters[1], mappedPrefix + "/prelu1_alpha");
          var conv2 = extractConvParams(numFilters[1], numFilters[2], 3, mappedPrefix + "/conv2");
          var prelu2_alpha = extractPReluParams(numFilters[2], mappedPrefix + "/prelu2_alpha");
          var conv3 = extractConvParams(numFilters[2], numFilters[3], isRnet ? 2 : 3, mappedPrefix + "/conv3");
          var prelu3_alpha = extractPReluParams(numFilters[3], mappedPrefix + "/prelu3_alpha");
          return { conv1: conv1, prelu1_alpha: prelu1_alpha, conv2: conv2, prelu2_alpha: prelu2_alpha, conv3: conv3, prelu3_alpha: prelu3_alpha };
      }
      function extractPNetParams() {
          var sharedParams = extractSharedParams([3, 10, 16, 32], 'pnet');
          var conv4_1 = extractConvParams(32, 2, 1, 'pnet/conv4_1');
          var conv4_2 = extractConvParams(32, 4, 1, 'pnet/conv4_2');
          return __assign(__assign({}, sharedParams), { conv4_1: conv4_1, conv4_2: conv4_2 });
      }
      function extractRNetParams() {
          var sharedParams = extractSharedParams([3, 28, 48, 64], 'rnet', true);
          var fc1 = extractFCParams(576, 128, 'rnet/fc1');
          var prelu4_alpha = extractPReluParams(128, 'rnet/prelu4_alpha');
          var fc2_1 = extractFCParams(128, 2, 'rnet/fc2_1');
          var fc2_2 = extractFCParams(128, 4, 'rnet/fc2_2');
          return __assign(__assign({}, sharedParams), { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
      }
      function extractONetParams() {
          var sharedParams = extractSharedParams([3, 32, 64, 64], 'onet');
          var conv4 = extractConvParams(64, 128, 2, 'onet/conv4');
          var prelu4_alpha = extractPReluParams(128, 'onet/prelu4_alpha');
          var fc1 = extractFCParams(1152, 256, 'onet/fc1');
          var prelu5_alpha = extractPReluParams(256, 'onet/prelu5_alpha');
          var fc2_1 = extractFCParams(256, 2, 'onet/fc2_1');
          var fc2_2 = extractFCParams(256, 4, 'onet/fc2_2');
          var fc2_3 = extractFCParams(256, 10, 'onet/fc2_3');
          return __assign(__assign({}, sharedParams), { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
      }
      return {
          extractPNetParams: extractPNetParams,
          extractRNetParams: extractRNetParams,
          extractONetParams: extractONetParams
      };
  }
  function extractParams$7(weights) {
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var paramMappings = [];
      var _b = extractorsFactory$8(extractWeights, paramMappings), extractPNetParams = _b.extractPNetParams, extractRNetParams = _b.extractRNetParams, extractONetParams = _b.extractONetParams;
      var pnet = extractPNetParams();
      var rnet = extractRNetParams();
      var onet = extractONetParams();
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings };
  }

  function extractorsFactory$9(weightMap, paramMappings) {
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      function extractConvParams(prefix) {
          var filters = extractWeightEntry(prefix + "/weights", 4, prefix + "/filters");
          var bias = extractWeightEntry(prefix + "/bias", 1);
          return { filters: filters, bias: bias };
      }
      function extractFCParams(prefix) {
          var weights = extractWeightEntry(prefix + "/weights", 2);
          var bias = extractWeightEntry(prefix + "/bias", 1);
          return { weights: weights, bias: bias };
      }
      function extractPReluParams(paramPath) {
          return extractWeightEntry(paramPath, 1);
      }
      function extractSharedParams(prefix) {
          var conv1 = extractConvParams(prefix + "/conv1");
          var prelu1_alpha = extractPReluParams(prefix + "/prelu1_alpha");
          var conv2 = extractConvParams(prefix + "/conv2");
          var prelu2_alpha = extractPReluParams(prefix + "/prelu2_alpha");
          var conv3 = extractConvParams(prefix + "/conv3");
          var prelu3_alpha = extractPReluParams(prefix + "/prelu3_alpha");
          return { conv1: conv1, prelu1_alpha: prelu1_alpha, conv2: conv2, prelu2_alpha: prelu2_alpha, conv3: conv3, prelu3_alpha: prelu3_alpha };
      }
      function extractPNetParams() {
          var sharedParams = extractSharedParams('pnet');
          var conv4_1 = extractConvParams('pnet/conv4_1');
          var conv4_2 = extractConvParams('pnet/conv4_2');
          return __assign(__assign({}, sharedParams), { conv4_1: conv4_1, conv4_2: conv4_2 });
      }
      function extractRNetParams() {
          var sharedParams = extractSharedParams('rnet');
          var fc1 = extractFCParams('rnet/fc1');
          var prelu4_alpha = extractPReluParams('rnet/prelu4_alpha');
          var fc2_1 = extractFCParams('rnet/fc2_1');
          var fc2_2 = extractFCParams('rnet/fc2_2');
          return __assign(__assign({}, sharedParams), { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
      }
      function extractONetParams() {
          var sharedParams = extractSharedParams('onet');
          var conv4 = extractConvParams('onet/conv4');
          var prelu4_alpha = extractPReluParams('onet/prelu4_alpha');
          var fc1 = extractFCParams('onet/fc1');
          var prelu5_alpha = extractPReluParams('onet/prelu5_alpha');
          var fc2_1 = extractFCParams('onet/fc2_1');
          var fc2_2 = extractFCParams('onet/fc2_2');
          var fc2_3 = extractFCParams('onet/fc2_3');
          return __assign(__assign({}, sharedParams), { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
      }
      return {
          extractPNetParams: extractPNetParams,
          extractRNetParams: extractRNetParams,
          extractONetParams: extractONetParams
      };
  }
  function extractParamsFromWeigthMap$7(weightMap) {
      var paramMappings = [];
      var _a = extractorsFactory$9(weightMap, paramMappings), extractPNetParams = _a.extractPNetParams, extractRNetParams = _a.extractRNetParams, extractONetParams = _a.extractONetParams;
      var pnet = extractPNetParams();
      var rnet = extractRNetParams();
      var onet = extractONetParams();
      disposeUnusedWeightTensors(weightMap, paramMappings);
      return { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings };
  }

  function getSizesForScale(scale, _a) {
      var height = _a[0], width = _a[1];
      return {
          height: Math.floor(height * scale),
          width: Math.floor(width * scale)
      };
  }

  function pyramidDown(minFaceSize, scaleFactor, dims) {
      var height = dims[0], width = dims[1];
      var m = CELL_SIZE / minFaceSize;
      var scales = [];
      var minLayer = Math.min(height, width) * m;
      var exp = 0;
      while (minLayer >= 12) {
          scales.push(m * Math.pow(scaleFactor, exp));
          minLayer = minLayer * scaleFactor;
          exp += 1;
      }
      return scales;
  }

  var MtcnnBox = /** @class */ (function (_super) {
      __extends(MtcnnBox, _super);
      function MtcnnBox(left, top, right, bottom) {
          return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, true) || this;
      }
      return MtcnnBox;
  }(Box));

  function normalize$1(x) {
      return Ze(function () { return gc(Cc(x, On(127.5)), On(0.0078125)); });
  }

  function prelu(x, alpha) {
      return Ze(function () {
          return rc(Bl(x), gc(alpha, wu(Bl(wu(x)))));
      });
  }

  function sharedLayer(x, params, isPnet) {
      if (isPnet === void 0) { isPnet = false; }
      return Ze(function () {
          var out = convLayer(x, params.conv1, 'valid');
          out = prelu(out, params.prelu1_alpha);
          out = hl(out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
          out = convLayer(out, params.conv2, 'valid');
          out = prelu(out, params.prelu2_alpha);
          out = isPnet ? out : hl(out, [3, 3], [2, 2], 'valid');
          out = convLayer(out, params.conv3, 'valid');
          out = prelu(out, params.prelu3_alpha);
          return out;
      });
  }

  function PNet(x, params) {
      return Ze(function () {
          var out = sharedLayer(x, params, true);
          var conv = convLayer(out, params.conv4_1, 'valid');
          var max = wr(Sl(conv, 3), 3);
          var prob = go(Cc(conv, max), 3);
          var regions = convLayer(out, params.conv4_2, 'valid');
          return { prob: prob, regions: regions };
      });
  }

  function rescaleAndNormalize(x, scale) {
      return Ze(function () {
          var _a = getSizesForScale(scale, x.shape.slice(1)), height = _a.height, width = _a.width;
          var resized = Oh.resizeBilinear(x, [height, width]);
          var normalized = normalize$1(resized);
          return Wl(normalized, [0, 2, 1, 3]);
      });
  }
  function extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold) {
      // TODO: fix this!, maybe better to use tf.gather here
      var indices = [];
      var scoresData = scoresTensor.arraySync();
      for (var y = 0; y < scoresTensor.shape[0]; y++) {
          for (var x = 0; x < scoresTensor.shape[1]; x++) {
              if (scoresData[y][x] >= scoreThreshold) {
                  indices.push(new Point(x, y));
              }
          }
      }
      var boundingBoxes = indices.map(function (idx) {
          var cell = new BoundingBox(Math.round((idx.y * CELL_STRIDE + 1) / scale), Math.round((idx.x * CELL_STRIDE + 1) / scale), Math.round((idx.y * CELL_STRIDE + CELL_SIZE) / scale), Math.round((idx.x * CELL_STRIDE + CELL_SIZE) / scale));
          var score = scoresData[idx.y][idx.x];
          var regionsData = regionsTensor.arraySync();
          var region = new MtcnnBox(regionsData[idx.y][idx.x][0], regionsData[idx.y][idx.x][1], regionsData[idx.y][idx.x][2], regionsData[idx.y][idx.x][3]);
          return {
              cell: cell,
              score: score,
              region: region
          };
      });
      return boundingBoxes;
  }
  function stage1(imgTensor, scales, scoreThreshold, params, stats) {
      stats.stage1 = [];
      var pnetOutputs = scales.map(function (scale) { return Ze(function () {
          var statsForScale = { scale: scale };
          var resized = rescaleAndNormalize(imgTensor, scale);
          var ts = Date.now();
          var _a = PNet(resized, params), prob = _a.prob, regions = _a.regions;
          statsForScale.pnet = Date.now() - ts;
          var scoresTensor = Ur(Ur(prob, 3)[1])[0];
          var regionsTensor = Ur(regions)[0];
          return {
              scoresTensor: scoresTensor,
              regionsTensor: regionsTensor,
              scale: scale,
              statsForScale: statsForScale
          };
      }); });
      var boxesForScale = pnetOutputs.map(function (_a) {
          var scoresTensor = _a.scoresTensor, regionsTensor = _a.regionsTensor, scale = _a.scale, statsForScale = _a.statsForScale;
          var boundingBoxes = extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold);
          scoresTensor.dispose();
          regionsTensor.dispose();
          if (!boundingBoxes.length) {
              stats.stage1.push(statsForScale);
              return [];
          }
          var ts = Date.now();
          var indices = nonMaxSuppression(boundingBoxes.map(function (bbox) { return bbox.cell; }), boundingBoxes.map(function (bbox) { return bbox.score; }), 0.5);
          statsForScale.nms = Date.now() - ts;
          statsForScale.numBoxes = indices.length;
          stats.stage1.push(statsForScale);
          return indices.map(function (boxIdx) { return boundingBoxes[boxIdx]; });
      });
      var allBoxes = boxesForScale.reduce(function (all, boxes) { return all.concat(boxes); }, []);
      var finalBoxes = [];
      var finalScores = [];
      if (allBoxes.length > 0) {
          var ts = Date.now();
          var indices = nonMaxSuppression(allBoxes.map(function (bbox) { return bbox.cell; }), allBoxes.map(function (bbox) { return bbox.score; }), 0.7);
          stats.stage1_nms = Date.now() - ts;
          finalScores = indices.map(function (idx) { return allBoxes[idx].score; });
          finalBoxes = indices
              .map(function (idx) { return allBoxes[idx]; })
              .map(function (_a) {
              var cell = _a.cell, region = _a.region;
              return new BoundingBox(cell.left + (region.left * cell.width), cell.top + (region.top * cell.height), cell.right + (region.right * cell.width), cell.bottom + (region.bottom * cell.height)).toSquare().round();
          });
      }
      return {
          boxes: finalBoxes,
          scores: finalScores
      };
  }

  function extractImagePatches(img, boxes, _a) {
      var width = _a.width, height = _a.height;
      return __awaiter(this, void 0, void 0, function () {
          var imgCtx, bitmaps, imagePatchesDatas;
          var _this = this;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      imgCtx = getContext2dOrThrow(img);
                      return [4 /*yield*/, Promise.all(boxes.map(function (box) { return __awaiter(_this, void 0, void 0, function () {
                              var _a, y, ey, x, ex, fromX, fromY, imgData;
                              return __generator(this, function (_b) {
                                  _a = box.padAtBorders(img.height, img.width), y = _a.y, ey = _a.ey, x = _a.x, ex = _a.ex;
                                  fromX = x - 1;
                                  fromY = y - 1;
                                  imgData = imgCtx.getImageData(fromX, fromY, (ex - fromX), (ey - fromY));
                                  return [2 /*return*/, env.isNodejs() ? createCanvasFromMedia(imgData) : createImageBitmap(imgData)];
                              });
                          }); }))];
                  case 1:
                      bitmaps = _b.sent();
                      imagePatchesDatas = [];
                      bitmaps.forEach(function (bmp) {
                          var patch = createCanvas({ width: width, height: height });
                          var patchCtx = getContext2dOrThrow(patch);
                          patchCtx.drawImage(bmp, 0, 0, width, height);
                          var data = patchCtx.getImageData(0, 0, width, height).data;
                          var currData = [];
                          // RGBA -> BGR
                          for (var i = 0; i < data.length; i += 4) {
                              currData.push(data[i + 2]);
                              currData.push(data[i + 1]);
                              currData.push(data[i]);
                          }
                          imagePatchesDatas.push(currData);
                      });
                      return [2 /*return*/, imagePatchesDatas.map(function (data) {
                              var t = Ze(function () {
                                  var imagePatchTensor = Wl(Ln(data, [1, width, height, 3]), [0, 2, 1, 3]).toFloat();
                                  return normalize$1(imagePatchTensor);
                              });
                              return t;
                          })];
              }
          });
      });
  }

  function RNet(x, params) {
      return Ze(function () {
          var convOut = sharedLayer(x, params);
          var vectorized = Or(convOut, [convOut.shape[0], params.fc1.weights.shape[0]]);
          var fc1 = fullyConnectedLayer(vectorized, params.fc1);
          var prelu4 = prelu(fc1, params.prelu4_alpha);
          var fc2_1 = fullyConnectedLayer(prelu4, params.fc2_1);
          var max = wr(Sl(fc2_1, 1), 1);
          var prob = go(Cc(fc2_1, max), 1);
          var regions = fullyConnectedLayer(prelu4, params.fc2_2);
          var scores = Ur(prob, 1)[1];
          return { scores: scores, regions: regions };
      });
  }

  function stage2(img, inputBoxes, scoreThreshold, params, stats) {
      return __awaiter(this, void 0, void 0, function () {
          var ts, rnetInputs, rnetOuts, scoresTensor, scores, _a, _b, indices, filteredBoxes, filteredScores, finalBoxes, finalScores, indicesNms, regions_1;
          return __generator(this, function (_c) {
              switch (_c.label) {
                  case 0:
                      ts = Date.now();
                      return [4 /*yield*/, extractImagePatches(img, inputBoxes, { width: 24, height: 24 })];
                  case 1:
                      rnetInputs = _c.sent();
                      stats.stage2_extractImagePatches = Date.now() - ts;
                      ts = Date.now();
                      rnetOuts = rnetInputs.map(function (rnetInput) {
                          var out = RNet(rnetInput, params);
                          rnetInput.dispose();
                          return out;
                      });
                      stats.stage2_rnet = Date.now() - ts;
                      scoresTensor = rnetOuts.length > 1
                          ? Yn(rnetOuts.map(function (out) { return out.scores; }))
                          : rnetOuts[0].scores;
                      _b = (_a = Array).from;
                      return [4 /*yield*/, scoresTensor.data()];
                  case 2:
                      scores = _b.apply(_a, [_c.sent()]);
                      scoresTensor.dispose();
                      indices = scores
                          .map(function (score, idx) { return ({ score: score, idx: idx }); })
                          .filter(function (c) { return c.score > scoreThreshold; })
                          .map(function (_a) {
                          var idx = _a.idx;
                          return idx;
                      });
                      filteredBoxes = indices.map(function (idx) { return inputBoxes[idx]; });
                      filteredScores = indices.map(function (idx) { return scores[idx]; });
                      finalBoxes = [];
                      finalScores = [];
                      if (filteredBoxes.length > 0) {
                          ts = Date.now();
                          indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7);
                          stats.stage2_nms = Date.now() - ts;
                          regions_1 = indicesNms.map(function (idx) {
                              var regionsData = rnetOuts[indices[idx]].regions.arraySync();
                              return new MtcnnBox(regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
                          });
                          finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                          finalBoxes = indicesNms.map(function (idx, i) { return filteredBoxes[idx].calibrate(regions_1[i]); });
                      }
                      rnetOuts.forEach(function (t) {
                          t.regions.dispose();
                          t.scores.dispose();
                      });
                      return [2 /*return*/, {
                              boxes: finalBoxes,
                              scores: finalScores
                          }];
              }
          });
      });
  }

  function ONet(x, params) {
      return Ze(function () {
          var out = sharedLayer(x, params);
          out = hl(out, [2, 2], [2, 2], 'same');
          out = convLayer(out, params.conv4, 'valid');
          out = prelu(out, params.prelu4_alpha);
          var vectorized = Or(out, [out.shape[0], params.fc1.weights.shape[0]]);
          var fc1 = fullyConnectedLayer(vectorized, params.fc1);
          var prelu5 = prelu(fc1, params.prelu5_alpha);
          var fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1);
          var max = wr(Sl(fc2_1, 1), 1);
          var prob = go(Cc(fc2_1, max), 1);
          var regions = fullyConnectedLayer(prelu5, params.fc2_2);
          var points = fullyConnectedLayer(prelu5, params.fc2_3);
          var scores = Ur(prob, 1)[1];
          return { scores: scores, regions: regions, points: points };
      });
  }

  function stage3(img, inputBoxes, scoreThreshold, params, stats) {
      return __awaiter(this, void 0, void 0, function () {
          var ts, onetInputs, onetOuts, scoresTensor, scores, _a, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;
          return __generator(this, function (_c) {
              switch (_c.label) {
                  case 0:
                      ts = Date.now();
                      return [4 /*yield*/, extractImagePatches(img, inputBoxes, { width: 48, height: 48 })];
                  case 1:
                      onetInputs = _c.sent();
                      stats.stage3_extractImagePatches = Date.now() - ts;
                      ts = Date.now();
                      onetOuts = onetInputs.map(function (onetInput) {
                          var out = ONet(onetInput, params);
                          onetInput.dispose();
                          return out;
                      });
                      stats.stage3_onet = Date.now() - ts;
                      scoresTensor = onetOuts.length > 1
                          ? Yn(onetOuts.map(function (out) { return out.scores; }))
                          : onetOuts[0].scores;
                      _b = (_a = Array).from;
                      return [4 /*yield*/, scoresTensor.data()];
                  case 2:
                      scores = _b.apply(_a, [_c.sent()]);
                      scoresTensor.dispose();
                      indices = scores
                          .map(function (score, idx) { return ({ score: score, idx: idx }); })
                          .filter(function (c) { return c.score > scoreThreshold; })
                          .map(function (_a) {
                          var idx = _a.idx;
                          return idx;
                      });
                      filteredRegions = indices.map(function (idx) {
                          var regionsData = onetOuts[idx].regions.arraySync();
                          return new MtcnnBox(regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
                      });
                      filteredBoxes = indices
                          .map(function (idx, i) { return inputBoxes[idx].calibrate(filteredRegions[i]); });
                      filteredScores = indices.map(function (idx) { return scores[idx]; });
                      finalBoxes = [];
                      finalScores = [];
                      points = [];
                      if (filteredBoxes.length > 0) {
                          ts = Date.now();
                          indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7, false);
                          stats.stage3_nms = Date.now() - ts;
                          finalBoxes = indicesNms.map(function (idx) { return filteredBoxes[idx]; });
                          finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                          points = indicesNms.map(function (idx, i) {
                              return Array(5).fill(0).map(function (_, ptIdx) {
                                  var pointsData = onetOuts[idx].points.arraySync();
                                  return new Point(((pointsData[0][ptIdx] * (finalBoxes[i].width + 1)) + finalBoxes[i].left), ((pointsData[0][ptIdx + 5] * (finalBoxes[i].height + 1)) + finalBoxes[i].top));
                              });
                          });
                      }
                      onetOuts.forEach(function (t) {
                          t.regions.dispose();
                          t.scores.dispose();
                          t.points.dispose();
                      });
                      return [2 /*return*/, {
                              boxes: finalBoxes,
                              scores: finalScores,
                              points: points
                          }];
              }
          });
      });
  }

  var Mtcnn = /** @class */ (function (_super) {
      __extends(Mtcnn, _super);
      function Mtcnn() {
          return _super.call(this, 'Mtcnn') || this;
      }
      Mtcnn.prototype.load = function (weightsOrUrl) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  console.warn('mtcnn is deprecated and will be removed soon');
                  return [2 /*return*/, _super.prototype.load.call(this, weightsOrUrl)];
              });
          });
      };
      Mtcnn.prototype.loadFromDisk = function (filePath) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  console.warn('mtcnn is deprecated and will be removed soon');
                  return [2 /*return*/, _super.prototype.loadFromDisk.call(this, filePath)];
              });
          });
      };
      Mtcnn.prototype.forwardInput = function (input, forwardParams) {
          if (forwardParams === void 0) { forwardParams = {}; }
          return __awaiter(this, void 0, void 0, function () {
              var params, inputCanvas, stats, tsTotal, imgTensor, onReturn, _a, height, width, _b, minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps, scales, ts, out1, out2, out3, results;
              return __generator(this, function (_c) {
                  switch (_c.label) {
                      case 0:
                          params = this.params;
                          if (!params) {
                              throw new Error('Mtcnn - load model before inference');
                          }
                          inputCanvas = input.canvases[0];
                          if (!inputCanvas) {
                              throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.');
                          }
                          stats = {};
                          tsTotal = Date.now();
                          imgTensor = Ze(function () {
                              return bgrToRgbTensor(wr(id.fromPixels(inputCanvas)).toFloat());
                          });
                          onReturn = function (results) {
                              // dispose tensors on return
                              imgTensor.dispose();
                              stats.total = Date.now() - tsTotal;
                              return results;
                          };
                          _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                          _b = new MtcnnOptions(forwardParams), minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
                          scales = (scaleSteps || pyramidDown(minFaceSize, scaleFactor, [height, width]))
                              .filter(function (scale) {
                              var sizes = getSizesForScale(scale, [height, width]);
                              return Math.min(sizes.width, sizes.height) > CELL_SIZE;
                          })
                              .slice(0, maxNumScales);
                          stats.scales = scales;
                          stats.pyramid = scales.map(function (scale) { return getSizesForScale(scale, [height, width]); });
                          ts = Date.now();
                          return [4 /*yield*/, stage1(imgTensor, scales, scoreThresholds[0], params.pnet, stats)];
                      case 1:
                          out1 = _c.sent();
                          stats.total_stage1 = Date.now() - ts;
                          if (!out1.boxes.length) {
                              return [2 /*return*/, onReturn({ results: [], stats: stats })];
                          }
                          stats.stage2_numInputBoxes = out1.boxes.length;
                          // using the inputCanvas to extract and resize the image patches, since it is faster
                          // than doing this on the gpu
                          ts = Date.now();
                          return [4 /*yield*/, stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)];
                      case 2:
                          out2 = _c.sent();
                          stats.total_stage2 = Date.now() - ts;
                          if (!out2.boxes.length) {
                              return [2 /*return*/, onReturn({ results: [], stats: stats })];
                          }
                          stats.stage3_numInputBoxes = out2.boxes.length;
                          ts = Date.now();
                          return [4 /*yield*/, stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)];
                      case 3:
                          out3 = _c.sent();
                          stats.total_stage3 = Date.now() - ts;
                          results = out3.boxes.map(function (box, idx) { return extendWithFaceLandmarks(extendWithFaceDetection({}, new FaceDetection(out3.scores[idx], new Rect(box.left / width, box.top / height, box.width / width, box.height / height), {
                              height: height,
                              width: width
                          })), new FaceLandmarks5(out3.points[idx].map(function (pt) { return pt.sub(new Point(box.left, box.top)).div(new Point(box.width, box.height)); }), { width: box.width, height: box.height })); });
                          return [2 /*return*/, onReturn({ results: results, stats: stats })];
                  }
              });
          });
      };
      Mtcnn.prototype.forward = function (input, forwardParams) {
          if (forwardParams === void 0) { forwardParams = {}; }
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(),
                              forwardParams])];
                      case 2: return [2 /*return*/, (_b.sent()).results];
                  }
              });
          });
      };
      Mtcnn.prototype.forwardWithStats = function (input, forwardParams) {
          if (forwardParams === void 0) { forwardParams = {}; }
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent(),
                              forwardParams])];
                  }
              });
          });
      };
      Mtcnn.prototype.getDefaultModelName = function () {
          return 'mtcnn_model';
      };
      Mtcnn.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return extractParamsFromWeigthMap$7(weightMap);
      };
      Mtcnn.prototype.extractParams = function (weights) {
          return extractParams$7(weights);
      };
      return Mtcnn;
  }(NeuralNetwork));

  var IOU_THRESHOLD$1 = 0.4;
  var BOX_ANCHORS$1 = [
      new Point(1.603231, 2.094468),
      new Point(6.041143, 7.080126),
      new Point(2.882459, 3.518061),
      new Point(4.266906, 5.178857),
      new Point(9.041765, 10.66308)
  ];
  var MEAN_RGB = [117.001, 114.697, 97.404];

  var TinyFaceDetector = /** @class */ (function (_super) {
      __extends(TinyFaceDetector, _super);
      function TinyFaceDetector() {
          var _this = this;
          var config = {
              withSeparableConvs: true,
              iouThreshold: IOU_THRESHOLD$1,
              classes: ['face'],
              anchors: BOX_ANCHORS$1,
              meanRgb: MEAN_RGB,
              isFirstLayerConv2d: true,
              filterSizes: [3, 16, 32, 64, 128, 256, 512]
          };
          _this = _super.call(this, config) || this;
          return _this;
      }
      Object.defineProperty(TinyFaceDetector.prototype, "anchors", {
          get: function () {
              return this.config.anchors;
          },
          enumerable: true,
          configurable: true
      });
      TinyFaceDetector.prototype.locateFaces = function (input, forwardParams) {
          return __awaiter(this, void 0, void 0, function () {
              var objectDetections;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.detect(input, forwardParams)];
                      case 1:
                          objectDetections = _a.sent();
                          return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                  }
              });
          });
      };
      TinyFaceDetector.prototype.getDefaultModelName = function () {
          return 'tiny_face_detector_model';
      };
      TinyFaceDetector.prototype.extractParamsFromWeigthMap = function (weightMap) {
          return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
      };
      return TinyFaceDetector;
  }(TinyYolov2Base));

  var nets = {
      ssdMobilenetv1: new SsdMobilenetv1(),
      tinyFaceDetector: new TinyFaceDetector(),
      tinyYolov2: new TinyYolov2(),
      mtcnn: new Mtcnn(),
      faceLandmark68Net: new FaceLandmark68Net(),
      faceLandmark68TinyNet: new FaceLandmark68TinyNet(),
      faceRecognitionNet: new FaceRecognitionNet(),
      faceExpressionNet: new FaceExpressionNet(),
      ageGenderNet: new AgeGenderNet()
  };
  /**
   * Attempts to detect all faces in an image using SSD Mobilenetv1 Network.
   *
   * @param input The input image.
   * @param options (optional, default: see SsdMobilenetv1Options constructor for default parameters).
   * @returns Bounding box of each face with score.
   */
  var ssdMobilenetv1 = function (input, options) {
      return nets.ssdMobilenetv1.locateFaces(input, options);
  };
  /**
   * Attempts to detect all faces in an image using the Tiny Face Detector.
   *
   * @param input The input image.
   * @param options (optional, default: see TinyFaceDetectorOptions constructor for default parameters).
   * @returns Bounding box of each face with score.
   */
  var tinyFaceDetector = function (input, options) {
      return nets.tinyFaceDetector.locateFaces(input, options);
  };
  /**
   * Attempts to detect all faces in an image using the Tiny Yolov2 Network.
   *
   * @param input The input image.
   * @param options (optional, default: see TinyYolov2Options constructor for default parameters).
   * @returns Bounding box of each face with score.
   */
  var tinyYolov2 = function (input, options) {
      return nets.tinyYolov2.locateFaces(input, options);
  };
  /**
   * Attempts to detect all faces in an image and the 5 point face landmarks
   * of each detected face using the MTCNN Network.
   *
   * @param input The input image.
   * @param options (optional, default: see MtcnnOptions constructor for default parameters).
   * @returns Bounding box of each face with score and 5 point face landmarks.
   */
  var mtcnn = function (input, options) {
      return nets.mtcnn.forward(input, options);
  };
  /**
   * Detects the 68 point face landmark positions of the face shown in an image.
   *
   * @param inputs The face image extracted from the bounding box of a face. Can
   * also be an array of input images, which will be batch processed.
   * @returns 68 point face landmarks or array thereof in case of batch input.
   */
  var detectFaceLandmarks = function (input) {
      return nets.faceLandmark68Net.detectLandmarks(input);
  };
  /**
   * Detects the 68 point face landmark positions of the face shown in an image
   * using a tinier version of the 68 point face landmark model, which is slightly
   * faster at inference, but also slightly less accurate.
   *
   * @param inputs The face image extracted from the bounding box of a face. Can
   * also be an array of input images, which will be batch processed.
   * @returns 68 point face landmarks or array thereof in case of batch input.
   */
  var detectFaceLandmarksTiny = function (input) {
      return nets.faceLandmark68TinyNet.detectLandmarks(input);
  };
  /**
   * Computes a 128 entry vector (face descriptor / face embeddings) from the face shown in an image,
   * which uniquely represents the features of that persons face. The computed face descriptor can
   * be used to measure the similarity between faces, by computing the euclidean distance of two
   * face descriptors.
   *
   * @param inputs The face image extracted from the aligned bounding box of a face. Can
   * also be an array of input images, which will be batch processed.
   * @returns Face descriptor with 128 entries or array thereof in case of batch input.
   */
  var computeFaceDescriptor = function (input) {
      return nets.faceRecognitionNet.computeFaceDescriptor(input);
  };
  /**
   * Recognizes the facial expressions from a face image.
   *
   * @param inputs The face image extracted from the bounding box of a face. Can
   * also be an array of input images, which will be batch processed.
   * @returns Facial expressions with corresponding probabilities or array thereof in case of batch input.
   */
  var recognizeFaceExpressions = function (input) {
      return nets.faceExpressionNet.predictExpressions(input);
  };
  /**
   * Predicts age and gender from a face image.
   *
   * @param inputs The face image extracted from the bounding box of a face. Can
   * also be an array of input images, which will be batch processed.
   * @returns Predictions with age, gender and gender probability or array thereof in case of batch input.
   */
  var predictAgeAndGender = function (input) {
      return nets.ageGenderNet.predictAgeAndGender(input);
  };
  var loadSsdMobilenetv1Model = function (url) { return nets.ssdMobilenetv1.load(url); };
  var loadTinyFaceDetectorModel = function (url) { return nets.tinyFaceDetector.load(url); };
  var loadMtcnnModel = function (url) { return nets.mtcnn.load(url); };
  var loadTinyYolov2Model = function (url) { return nets.tinyYolov2.load(url); };
  var loadFaceLandmarkModel = function (url) { return nets.faceLandmark68Net.load(url); };
  var loadFaceLandmarkTinyModel = function (url) { return nets.faceLandmark68TinyNet.load(url); };
  var loadFaceRecognitionModel = function (url) { return nets.faceRecognitionNet.load(url); };
  var loadFaceExpressionModel = function (url) { return nets.faceExpressionNet.load(url); };
  var loadAgeGenderModel = function (url) { return nets.ageGenderNet.load(url); };
  // backward compatibility
  var loadFaceDetectionModel = loadSsdMobilenetv1Model;
  var locateFaces = ssdMobilenetv1;
  var detectLandmarks = detectFaceLandmarks;

  var PredictFaceExpressionsTaskBase = /** @class */ (function (_super) {
      __extends(PredictFaceExpressionsTaskBase, _super);
      function PredictFaceExpressionsTaskBase(parentTask, input, extractedFaces) {
          var _this = _super.call(this) || this;
          _this.parentTask = parentTask;
          _this.input = input;
          _this.extractedFaces = extractedFaces;
          return _this;
      }
      return PredictFaceExpressionsTaskBase;
  }(ComposableTask));
  var PredictAllFaceExpressionsTask = /** @class */ (function (_super) {
      __extends(PredictAllFaceExpressionsTask, _super);
      function PredictAllFaceExpressionsTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictAllFaceExpressionsTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResults, faceExpressionsByFace;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResults = _a.sent();
                          return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return __awaiter(_this, void 0, void 0, function () {
                                  return __generator(this, function (_a) {
                                      switch (_a.label) {
                                          case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets.faceExpressionNet.predictExpressions(face); }))];
                                          case 1: return [2 /*return*/, _a.sent()];
                                      }
                                  });
                              }); }, this.extractedFaces)];
                      case 2:
                          faceExpressionsByFace = _a.sent();
                          return [2 /*return*/, parentResults.map(function (parentResult, i) { return extendWithFaceExpressions(parentResult, faceExpressionsByFace[i]); })];
                  }
              });
          });
      };
      PredictAllFaceExpressionsTask.prototype.withAgeAndGender = function () {
          return new PredictAllAgeAndGenderTask(this, this.input);
      };
      return PredictAllFaceExpressionsTask;
  }(PredictFaceExpressionsTaskBase));
  var PredictSingleFaceExpressionsTask = /** @class */ (function (_super) {
      __extends(PredictSingleFaceExpressionsTask, _super);
      function PredictSingleFaceExpressionsTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictSingleFaceExpressionsTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResult, faceExpressions;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResult = _a.sent();
                          if (!parentResult) {
                              return [2 /*return*/];
                          }
                          return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.faceExpressionNet.predictExpressions(face); }, this.extractedFaces)];
                      case 2:
                          faceExpressions = _a.sent();
                          return [2 /*return*/, extendWithFaceExpressions(parentResult, faceExpressions)];
                  }
              });
          });
      };
      PredictSingleFaceExpressionsTask.prototype.withAgeAndGender = function () {
          return new PredictSingleAgeAndGenderTask(this, this.input);
      };
      return PredictSingleFaceExpressionsTask;
  }(PredictFaceExpressionsTaskBase));
  var PredictAllFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
      __extends(PredictAllFaceExpressionsWithFaceAlignmentTask, _super);
      function PredictAllFaceExpressionsWithFaceAlignmentTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
          return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
      };
      PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
          return new ComputeAllFaceDescriptorsTask(this, this.input);
      };
      return PredictAllFaceExpressionsWithFaceAlignmentTask;
  }(PredictAllFaceExpressionsTask));
  var PredictSingleFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
      __extends(PredictSingleFaceExpressionsWithFaceAlignmentTask, _super);
      function PredictSingleFaceExpressionsWithFaceAlignmentTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
          return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
      };
      PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
          return new ComputeSingleFaceDescriptorTask(this, this.input);
      };
      return PredictSingleFaceExpressionsWithFaceAlignmentTask;
  }(PredictSingleFaceExpressionsTask));

  var PredictAgeAndGenderTaskBase = /** @class */ (function (_super) {
      __extends(PredictAgeAndGenderTaskBase, _super);
      function PredictAgeAndGenderTaskBase(parentTask, input, extractedFaces) {
          var _this = _super.call(this) || this;
          _this.parentTask = parentTask;
          _this.input = input;
          _this.extractedFaces = extractedFaces;
          return _this;
      }
      return PredictAgeAndGenderTaskBase;
  }(ComposableTask));
  var PredictAllAgeAndGenderTask = /** @class */ (function (_super) {
      __extends(PredictAllAgeAndGenderTask, _super);
      function PredictAllAgeAndGenderTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictAllAgeAndGenderTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResults, ageAndGenderByFace;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResults = _a.sent();
                          return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return __awaiter(_this, void 0, void 0, function () {
                                  return __generator(this, function (_a) {
                                      switch (_a.label) {
                                          case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets.ageGenderNet.predictAgeAndGender(face); }))];
                                          case 1: return [2 /*return*/, _a.sent()];
                                      }
                                  });
                              }); }, this.extractedFaces)];
                      case 2:
                          ageAndGenderByFace = _a.sent();
                          return [2 /*return*/, parentResults.map(function (parentResult, i) {
                                  var _a = ageAndGenderByFace[i], age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                                  return extendWithAge(extendWithGender(parentResult, gender, genderProbability), age);
                              })];
                  }
              });
          });
      };
      PredictAllAgeAndGenderTask.prototype.withFaceExpressions = function () {
          return new PredictAllFaceExpressionsTask(this, this.input);
      };
      return PredictAllAgeAndGenderTask;
  }(PredictAgeAndGenderTaskBase));
  var PredictSingleAgeAndGenderTask = /** @class */ (function (_super) {
      __extends(PredictSingleAgeAndGenderTask, _super);
      function PredictSingleAgeAndGenderTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictSingleAgeAndGenderTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResult, _a, age, gender, genderProbability;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResult = _b.sent();
                          if (!parentResult) {
                              return [2 /*return*/];
                          }
                          return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.ageGenderNet.predictAgeAndGender(face); }, this.extractedFaces)];
                      case 2:
                          _a = _b.sent(), age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                          return [2 /*return*/, extendWithAge(extendWithGender(parentResult, gender, genderProbability), age)];
                  }
              });
          });
      };
      PredictSingleAgeAndGenderTask.prototype.withFaceExpressions = function () {
          return new PredictSingleFaceExpressionsTask(this, this.input);
      };
      return PredictSingleAgeAndGenderTask;
  }(PredictAgeAndGenderTaskBase));
  var PredictAllAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
      __extends(PredictAllAgeAndGenderWithFaceAlignmentTask, _super);
      function PredictAllAgeAndGenderWithFaceAlignmentTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
          return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
      };
      PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
          return new ComputeAllFaceDescriptorsTask(this, this.input);
      };
      return PredictAllAgeAndGenderWithFaceAlignmentTask;
  }(PredictAllAgeAndGenderTask));
  var PredictSingleAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
      __extends(PredictSingleAgeAndGenderWithFaceAlignmentTask, _super);
      function PredictSingleAgeAndGenderWithFaceAlignmentTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
          return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
      };
      PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
          return new ComputeSingleFaceDescriptorTask(this, this.input);
      };
      return PredictSingleAgeAndGenderWithFaceAlignmentTask;
  }(PredictSingleAgeAndGenderTask));

  var ComputeFaceDescriptorsTaskBase = /** @class */ (function (_super) {
      __extends(ComputeFaceDescriptorsTaskBase, _super);
      function ComputeFaceDescriptorsTaskBase(parentTask, input) {
          var _this = _super.call(this) || this;
          _this.parentTask = parentTask;
          _this.input = input;
          return _this;
      }
      return ComputeFaceDescriptorsTaskBase;
  }(ComposableTask));
  var ComputeAllFaceDescriptorsTask = /** @class */ (function (_super) {
      __extends(ComputeAllFaceDescriptorsTask, _super);
      function ComputeAllFaceDescriptorsTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ComputeAllFaceDescriptorsTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResults, descriptors;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResults = _a.sent();
                          return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return Promise.all(faces.map(function (face) {
                                  return nets.faceRecognitionNet.computeFaceDescriptor(face);
                              })); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                      case 2:
                          descriptors = _a.sent();
                          return [2 /*return*/, descriptors.map(function (descriptor, i) { return extendWithFaceDescriptor(parentResults[i], descriptor); })];
                  }
              });
          });
      };
      ComputeAllFaceDescriptorsTask.prototype.withFaceExpressions = function () {
          return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
      };
      ComputeAllFaceDescriptorsTask.prototype.withAgeAndGender = function () {
          return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
      };
      return ComputeAllFaceDescriptorsTask;
  }(ComputeFaceDescriptorsTaskBase));
  var ComputeSingleFaceDescriptorTask = /** @class */ (function (_super) {
      __extends(ComputeSingleFaceDescriptorTask, _super);
      function ComputeSingleFaceDescriptorTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ComputeSingleFaceDescriptorTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResult, descriptor;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResult = _a.sent();
                          if (!parentResult) {
                              return [2 /*return*/];
                          }
                          return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.faceRecognitionNet.computeFaceDescriptor(face); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                      case 2:
                          descriptor = _a.sent();
                          return [2 /*return*/, extendWithFaceDescriptor(parentResult, descriptor)];
                  }
              });
          });
      };
      ComputeSingleFaceDescriptorTask.prototype.withFaceExpressions = function () {
          return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
      };
      ComputeSingleFaceDescriptorTask.prototype.withAgeAndGender = function () {
          return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
      };
      return ComputeSingleFaceDescriptorTask;
  }(ComputeFaceDescriptorsTaskBase));

  var DetectFaceLandmarksTaskBase = /** @class */ (function (_super) {
      __extends(DetectFaceLandmarksTaskBase, _super);
      function DetectFaceLandmarksTaskBase(parentTask, input, useTinyLandmarkNet) {
          var _this = _super.call(this) || this;
          _this.parentTask = parentTask;
          _this.input = input;
          _this.useTinyLandmarkNet = useTinyLandmarkNet;
          return _this;
      }
      Object.defineProperty(DetectFaceLandmarksTaskBase.prototype, "landmarkNet", {
          get: function () {
              return this.useTinyLandmarkNet
                  ? nets.faceLandmark68TinyNet
                  : nets.faceLandmark68Net;
          },
          enumerable: true,
          configurable: true
      });
      return DetectFaceLandmarksTaskBase;
  }(ComposableTask));
  var DetectAllFaceLandmarksTask = /** @class */ (function (_super) {
      __extends(DetectAllFaceLandmarksTask, _super);
      function DetectAllFaceLandmarksTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      DetectAllFaceLandmarksTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResults, detections, faces, _a, faceLandmarksByFace;
              var _this = this;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResults = _b.sent();
                          detections = parentResults.map(function (res) { return res.detection; });
                          if (!(this.input instanceof wt)) return [3 /*break*/, 3];
                          return [4 /*yield*/, extractFaceTensors(this.input, detections)];
                      case 2:
                          _a = _b.sent();
                          return [3 /*break*/, 5];
                      case 3: return [4 /*yield*/, extractFaces(this.input, detections)];
                      case 4:
                          _a = _b.sent();
                          _b.label = 5;
                      case 5:
                          faces = _a;
                          return [4 /*yield*/, Promise.all(faces.map(function (face) { return _this.landmarkNet.detectLandmarks(face); }))];
                      case 6:
                          faceLandmarksByFace = _b.sent();
                          faces.forEach(function (f) { return f instanceof wt && f.dispose(); });
                          return [2 /*return*/, parentResults.map(function (parentResult, i) {
                                  return extendWithFaceLandmarks(parentResult, faceLandmarksByFace[i]);
                              })];
                  }
              });
          });
      };
      DetectAllFaceLandmarksTask.prototype.withFaceExpressions = function () {
          return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
      };
      DetectAllFaceLandmarksTask.prototype.withAgeAndGender = function () {
          return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
      };
      DetectAllFaceLandmarksTask.prototype.withFaceDescriptors = function () {
          return new ComputeAllFaceDescriptorsTask(this, this.input);
      };
      return DetectAllFaceLandmarksTask;
  }(DetectFaceLandmarksTaskBase));
  var DetectSingleFaceLandmarksTask = /** @class */ (function (_super) {
      __extends(DetectSingleFaceLandmarksTask, _super);
      function DetectSingleFaceLandmarksTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      DetectSingleFaceLandmarksTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var parentResult, detection, faces, _a, landmarks;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0: return [4 /*yield*/, this.parentTask];
                      case 1:
                          parentResult = _b.sent();
                          if (!parentResult) {
                              return [2 /*return*/];
                          }
                          detection = parentResult.detection;
                          if (!(this.input instanceof wt)) return [3 /*break*/, 3];
                          return [4 /*yield*/, extractFaceTensors(this.input, [detection])];
                      case 2:
                          _a = _b.sent();
                          return [3 /*break*/, 5];
                      case 3: return [4 /*yield*/, extractFaces(this.input, [detection])];
                      case 4:
                          _a = _b.sent();
                          _b.label = 5;
                      case 5:
                          faces = _a;
                          return [4 /*yield*/, this.landmarkNet.detectLandmarks(faces[0])];
                      case 6:
                          landmarks = _b.sent();
                          faces.forEach(function (f) { return f instanceof wt && f.dispose(); });
                          return [2 /*return*/, extendWithFaceLandmarks(parentResult, landmarks)];
                  }
              });
          });
      };
      DetectSingleFaceLandmarksTask.prototype.withFaceExpressions = function () {
          return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
      };
      DetectSingleFaceLandmarksTask.prototype.withAgeAndGender = function () {
          return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
      };
      DetectSingleFaceLandmarksTask.prototype.withFaceDescriptor = function () {
          return new ComputeSingleFaceDescriptorTask(this, this.input);
      };
      return DetectSingleFaceLandmarksTask;
  }(DetectFaceLandmarksTaskBase));

  var DetectFacesTaskBase = /** @class */ (function (_super) {
      __extends(DetectFacesTaskBase, _super);
      function DetectFacesTaskBase(input, options) {
          if (options === void 0) { options = new SsdMobilenetv1Options(); }
          var _this = _super.call(this) || this;
          _this.input = input;
          _this.options = options;
          return _this;
      }
      return DetectFacesTaskBase;
  }(ComposableTask));
  var DetectAllFacesTask = /** @class */ (function (_super) {
      __extends(DetectAllFacesTask, _super);
      function DetectAllFacesTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      DetectAllFacesTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var _a, input, options, faceDetectionFunction;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this, input = _a.input, options = _a.options;
                          if (!(options instanceof MtcnnOptions)) return [3 /*break*/, 2];
                          return [4 /*yield*/, nets.mtcnn.forward(input, options)];
                      case 1: return [2 /*return*/, (_b.sent())
                              .map(function (result) { return result.detection; })];
                      case 2:
                          faceDetectionFunction = options instanceof TinyFaceDetectorOptions
                              ? function (input) { return nets.tinyFaceDetector.locateFaces(input, options); }
                              : (options instanceof SsdMobilenetv1Options
                                  ? function (input) { return nets.ssdMobilenetv1.locateFaces(input, options); }
                                  : (options instanceof TinyYolov2Options
                                      ? function (input) { return nets.tinyYolov2.locateFaces(input, options); }
                                      : null));
                          if (!faceDetectionFunction) {
                              throw new Error('detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options');
                          }
                          return [2 /*return*/, faceDetectionFunction(input)];
                  }
              });
          });
      };
      DetectAllFacesTask.prototype.runAndExtendWithFaceDetections = function () {
          var _this = this;
          return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
              var detections;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.run()];
                      case 1:
                          detections = _a.sent();
                          return [2 /*return*/, res(detections.map(function (detection) { return extendWithFaceDetection({}, detection); }))];
                  }
              });
          }); });
      };
      DetectAllFacesTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
          if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
          return new DetectAllFaceLandmarksTask(this.runAndExtendWithFaceDetections(), this.input, useTinyLandmarkNet);
      };
      DetectAllFacesTask.prototype.withFaceExpressions = function () {
          return new PredictAllFaceExpressionsTask(this.runAndExtendWithFaceDetections(), this.input);
      };
      DetectAllFacesTask.prototype.withAgeAndGender = function () {
          return new PredictAllAgeAndGenderTask(this.runAndExtendWithFaceDetections(), this.input);
      };
      return DetectAllFacesTask;
  }(DetectFacesTaskBase));
  var DetectSingleFaceTask = /** @class */ (function (_super) {
      __extends(DetectSingleFaceTask, _super);
      function DetectSingleFaceTask() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      DetectSingleFaceTask.prototype.run = function () {
          return __awaiter(this, void 0, void 0, function () {
              var faceDetections, faceDetectionWithHighestScore;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, new DetectAllFacesTask(this.input, this.options)];
                      case 1:
                          faceDetections = _a.sent();
                          faceDetectionWithHighestScore = faceDetections[0];
                          faceDetections.forEach(function (faceDetection) {
                              if (faceDetection.score > faceDetectionWithHighestScore.score) {
                                  faceDetectionWithHighestScore = faceDetection;
                              }
                          });
                          return [2 /*return*/, faceDetectionWithHighestScore];
                  }
              });
          });
      };
      DetectSingleFaceTask.prototype.runAndExtendWithFaceDetection = function () {
          var _this = this;
          return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
              var detection;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, this.run()];
                      case 1:
                          detection = _a.sent();
                          return [2 /*return*/, res(detection ? extendWithFaceDetection({}, detection) : undefined)];
                  }
              });
          }); });
      };
      DetectSingleFaceTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
          if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
          return new DetectSingleFaceLandmarksTask(this.runAndExtendWithFaceDetection(), this.input, useTinyLandmarkNet);
      };
      DetectSingleFaceTask.prototype.withFaceExpressions = function () {
          return new PredictSingleFaceExpressionsTask(this.runAndExtendWithFaceDetection(), this.input);
      };
      DetectSingleFaceTask.prototype.withAgeAndGender = function () {
          return new PredictSingleAgeAndGenderTask(this.runAndExtendWithFaceDetection(), this.input);
      };
      return DetectSingleFaceTask;
  }(DetectFacesTaskBase));

  function detectSingleFace(input, options) {
      if (options === void 0) { options = new SsdMobilenetv1Options(); }
      return new DetectSingleFaceTask(input, options);
  }
  function detectAllFaces(input, options) {
      if (options === void 0) { options = new SsdMobilenetv1Options(); }
      return new DetectAllFacesTask(input, options);
  }

  // export allFaces API for backward compatibility
  function allFacesSsdMobilenetv1(input, minConfidence) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      console.warn('allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead');
                      return [4 /*yield*/, detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? { minConfidence: minConfidence } : {}))
                              .withFaceLandmarks()
                              .withFaceDescriptors()];
                  case 1: return [2 /*return*/, _a.sent()];
              }
          });
      });
  }
  function allFacesTinyYolov2(input, forwardParams) {
      if (forwardParams === void 0) { forwardParams = {}; }
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      console.warn('allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead');
                      return [4 /*yield*/, detectAllFaces(input, new TinyYolov2Options(forwardParams))
                              .withFaceLandmarks()
                              .withFaceDescriptors()];
                  case 1: return [2 /*return*/, _a.sent()];
              }
          });
      });
  }
  function allFacesMtcnn(input, forwardParams) {
      if (forwardParams === void 0) { forwardParams = {}; }
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      console.warn('allFacesMtcnn is deprecated and will be removed soon, use the high level api instead');
                      return [4 /*yield*/, detectAllFaces(input, new MtcnnOptions(forwardParams))
                              .withFaceLandmarks()
                              .withFaceDescriptors()];
                  case 1: return [2 /*return*/, _a.sent()];
              }
          });
      });
  }
  var allFaces = allFacesSsdMobilenetv1;

  function euclideanDistance(arr1, arr2) {
      if (arr1.length !== arr2.length)
          throw new Error('euclideanDistance: arr1.length !== arr2.length');
      var desc1 = Array.from(arr1);
      var desc2 = Array.from(arr2);
      return Math.sqrt(desc1
          .map(function (val, i) { return val - desc2[i]; })
          .reduce(function (res, diff) { return res + Math.pow(diff, 2); }, 0));
  }

  var FaceMatcher = /** @class */ (function () {
      function FaceMatcher(inputs, distanceThreshold) {
          if (distanceThreshold === void 0) { distanceThreshold = 0.6; }
          this._distanceThreshold = distanceThreshold;
          var inputArray = Array.isArray(inputs) ? inputs : [inputs];
          if (!inputArray.length) {
              throw new Error("FaceRecognizer.constructor - expected atleast one input");
          }
          var count = 1;
          var createUniqueLabel = function () { return "person " + count++; };
          this._labeledDescriptors = inputArray.map(function (desc) {
              if (desc instanceof LabeledFaceDescriptors) {
                  return desc;
              }
              if (desc instanceof Float32Array) {
                  return new LabeledFaceDescriptors(createUniqueLabel(), [desc]);
              }
              if (desc.descriptor && desc.descriptor instanceof Float32Array) {
                  return new LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor]);
              }
              throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
          });
      }
      Object.defineProperty(FaceMatcher.prototype, "labeledDescriptors", {
          get: function () { return this._labeledDescriptors; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FaceMatcher.prototype, "distanceThreshold", {
          get: function () { return this._distanceThreshold; },
          enumerable: true,
          configurable: true
      });
      FaceMatcher.prototype.computeMeanDistance = function (queryDescriptor, descriptors) {
          return descriptors
              .map(function (d) { return euclideanDistance(d, queryDescriptor); })
              .reduce(function (d1, d2) { return d1 + d2; }, 0)
              / (descriptors.length || 1);
      };
      FaceMatcher.prototype.matchDescriptor = function (queryDescriptor) {
          var _this = this;
          return this.labeledDescriptors
              .map(function (_a) {
              var descriptors = _a.descriptors, label = _a.label;
              return new FaceMatch(label, _this.computeMeanDistance(queryDescriptor, descriptors));
          })
              .reduce(function (best, curr) { return best.distance < curr.distance ? best : curr; });
      };
      FaceMatcher.prototype.findBestMatch = function (queryDescriptor) {
          var bestMatch = this.matchDescriptor(queryDescriptor);
          return bestMatch.distance < this.distanceThreshold
              ? bestMatch
              : new FaceMatch('unknown', bestMatch.distance);
      };
      FaceMatcher.prototype.toJSON = function () {
          return {
              distanceThreshold: this.distanceThreshold,
              labeledDescriptors: this.labeledDescriptors.map(function (ld) { return ld.toJSON(); })
          };
      };
      FaceMatcher.fromJSON = function (json) {
          var labeledDescriptors = json.labeledDescriptors
              .map(function (ld) { return LabeledFaceDescriptors.fromJSON(ld); });
          return new FaceMatcher(labeledDescriptors, json.distanceThreshold);
      };
      return FaceMatcher;
  }());

  function createMtcnn(weights) {
      var net = new Mtcnn();
      net.extractWeights(weights);
      return net;
  }

  function createTinyFaceDetector(weights) {
      var net = new TinyFaceDetector();
      net.extractWeights(weights);
      return net;
  }

  function resizeResults(results, dimensions) {
      var _a = new Dimensions(dimensions.width, dimensions.height), width = _a.width, height = _a.height;
      if (width <= 0 || height <= 0) {
          throw new Error("resizeResults - invalid dimensions: " + JSON.stringify({ width: width, height: height }));
      }
      if (Array.isArray(results)) {
          return results.map(function (obj) { return resizeResults(obj, { width: width, height: height }); });
      }
      if (isWithFaceLandmarks(results)) {
          var resizedDetection = results.detection.forSize(width, height);
          var resizedLandmarks = results.unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height);
          return extendWithFaceLandmarks(extendWithFaceDetection(results, resizedDetection), resizedLandmarks);
      }
      if (isWithFaceDetection(results)) {
          return extendWithFaceDetection(results, results.detection.forSize(width, height));
      }
      if (results instanceof FaceLandmarks || results instanceof FaceDetection) {
          return results.forSize(width, height);
      }
      return results;
  }

  exports.AgeGenderNet = AgeGenderNet;
  exports.BoundingBox = BoundingBox;
  exports.Box = Box;
  exports.ComposableTask = ComposableTask;
  exports.ComputeAllFaceDescriptorsTask = ComputeAllFaceDescriptorsTask;
  exports.ComputeFaceDescriptorsTaskBase = ComputeFaceDescriptorsTaskBase;
  exports.ComputeSingleFaceDescriptorTask = ComputeSingleFaceDescriptorTask;
  exports.DetectAllFaceLandmarksTask = DetectAllFaceLandmarksTask;
  exports.DetectAllFacesTask = DetectAllFacesTask;
  exports.DetectFaceLandmarksTaskBase = DetectFaceLandmarksTaskBase;
  exports.DetectFacesTaskBase = DetectFacesTaskBase;
  exports.DetectSingleFaceLandmarksTask = DetectSingleFaceLandmarksTask;
  exports.DetectSingleFaceTask = DetectSingleFaceTask;
  exports.Dimensions = Dimensions;
  exports.FACE_EXPRESSION_LABELS = FACE_EXPRESSION_LABELS;
  exports.FaceDetection = FaceDetection;
  exports.FaceDetectionNet = FaceDetectionNet;
  exports.FaceExpressionNet = FaceExpressionNet;
  exports.FaceExpressions = FaceExpressions;
  exports.FaceLandmark68Net = FaceLandmark68Net;
  exports.FaceLandmark68TinyNet = FaceLandmark68TinyNet;
  exports.FaceLandmarkNet = FaceLandmarkNet;
  exports.FaceLandmarks = FaceLandmarks;
  exports.FaceLandmarks5 = FaceLandmarks5;
  exports.FaceLandmarks68 = FaceLandmarks68;
  exports.FaceMatch = FaceMatch;
  exports.FaceMatcher = FaceMatcher;
  exports.FaceRecognitionNet = FaceRecognitionNet;
  exports.LabeledBox = LabeledBox;
  exports.LabeledFaceDescriptors = LabeledFaceDescriptors;
  exports.Mtcnn = Mtcnn;
  exports.MtcnnOptions = MtcnnOptions;
  exports.NetInput = NetInput;
  exports.NeuralNetwork = NeuralNetwork;
  exports.ObjectDetection = ObjectDetection;
  exports.Point = Point;
  exports.PredictedBox = PredictedBox;
  exports.Rect = Rect;
  exports.SsdMobilenetv1 = SsdMobilenetv1;
  exports.SsdMobilenetv1Options = SsdMobilenetv1Options;
  exports.TinyFaceDetector = TinyFaceDetector;
  exports.TinyFaceDetectorOptions = TinyFaceDetectorOptions;
  exports.TinyYolov2 = TinyYolov2;
  exports.TinyYolov2Options = TinyYolov2Options;
  exports.allFaces = allFaces;
  exports.allFacesMtcnn = allFacesMtcnn;
  exports.allFacesSsdMobilenetv1 = allFacesSsdMobilenetv1;
  exports.allFacesTinyYolov2 = allFacesTinyYolov2;
  exports.awaitMediaLoaded = awaitMediaLoaded;
  exports.bufferToImage = bufferToImage;
  exports.computeFaceDescriptor = computeFaceDescriptor;
  exports.createCanvas = createCanvas;
  exports.createCanvasFromMedia = createCanvasFromMedia;
  exports.createFaceDetectionNet = createFaceDetectionNet;
  exports.createFaceRecognitionNet = createFaceRecognitionNet;
  exports.createMtcnn = createMtcnn;
  exports.createSsdMobilenetv1 = createSsdMobilenetv1;
  exports.createTinyFaceDetector = createTinyFaceDetector;
  exports.createTinyYolov2 = createTinyYolov2;
  exports.detectAllFaces = detectAllFaces;
  exports.detectFaceLandmarks = detectFaceLandmarks;
  exports.detectFaceLandmarksTiny = detectFaceLandmarksTiny;
  exports.detectLandmarks = detectLandmarks;
  exports.detectSingleFace = detectSingleFace;
  exports.draw = index$1;
  exports.env = env;
  exports.euclideanDistance = euclideanDistance;
  exports.extendWithAge = extendWithAge;
  exports.extendWithFaceDescriptor = extendWithFaceDescriptor;
  exports.extendWithFaceDetection = extendWithFaceDetection;
  exports.extendWithFaceExpressions = extendWithFaceExpressions;
  exports.extendWithFaceLandmarks = extendWithFaceLandmarks;
  exports.extendWithGender = extendWithGender;
  exports.extractFaceTensors = extractFaceTensors;
  exports.extractFaces = extractFaces;
  exports.fetchImage = fetchImage;
  exports.fetchJson = fetchJson;
  exports.fetchNetWeights = fetchNetWeights;
  exports.fetchOrThrow = fetchOrThrow;
  exports.getContext2dOrThrow = getContext2dOrThrow;
  exports.getMediaDimensions = getMediaDimensions;
  exports.imageTensorToCanvas = imageTensorToCanvas;
  exports.imageToSquare = imageToSquare;
  exports.inverseSigmoid = inverseSigmoid;
  exports.iou = iou;
  exports.isMediaElement = isMediaElement;
  exports.isMediaLoaded = isMediaLoaded;
  exports.isWithAge = isWithAge;
  exports.isWithFaceDetection = isWithFaceDetection;
  exports.isWithFaceExpressions = isWithFaceExpressions;
  exports.isWithFaceLandmarks = isWithFaceLandmarks;
  exports.isWithGender = isWithGender;
  exports.loadAgeGenderModel = loadAgeGenderModel;
  exports.loadFaceDetectionModel = loadFaceDetectionModel;
  exports.loadFaceExpressionModel = loadFaceExpressionModel;
  exports.loadFaceLandmarkModel = loadFaceLandmarkModel;
  exports.loadFaceLandmarkTinyModel = loadFaceLandmarkTinyModel;
  exports.loadFaceRecognitionModel = loadFaceRecognitionModel;
  exports.loadMtcnnModel = loadMtcnnModel;
  exports.loadSsdMobilenetv1Model = loadSsdMobilenetv1Model;
  exports.loadTinyFaceDetectorModel = loadTinyFaceDetectorModel;
  exports.loadTinyYolov2Model = loadTinyYolov2Model;
  exports.loadWeightMap = loadWeightMap;
  exports.locateFaces = locateFaces;
  exports.matchDimensions = matchDimensions;
  exports.minBbox = minBbox;
  exports.mtcnn = mtcnn;
  exports.nets = nets;
  exports.nonMaxSuppression = nonMaxSuppression;
  exports.normalize = normalize;
  exports.padToSquare = padToSquare;
  exports.predictAgeAndGender = predictAgeAndGender;
  exports.recognizeFaceExpressions = recognizeFaceExpressions;
  exports.resizeResults = resizeResults;
  exports.resolveInput = resolveInput;
  exports.shuffleArray = shuffleArray;
  exports.sigmoid = sigmoid;
  exports.ssdMobilenetv1 = ssdMobilenetv1;
  exports.tf = tfCore_esm;
  exports.tinyFaceDetector = tinyFaceDetector;
  exports.tinyYolov2 = tinyYolov2;
  exports.toNetInput = toNetInput;
  exports.utils = index;
  exports.validateConfig = validateConfig;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=face-api.js.map

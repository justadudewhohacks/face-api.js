(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.faceapi = global.faceapi || {}));
}(this, (function (exports) { 'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
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
  var t=function(e,n){return (t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);})(e,n)};function e(e,n){function r(){this.constructor=e;}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r);}function n(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{s(r.next(t));}catch(t){a(t);}}function u(t){try{s(r.throw(t));}catch(t){a(t);}}function s(t){t.done?o(t.value):new n(function(e){e(t.value);}).then(i,u);}s((r=r.apply(t,e||[])).next());})}function r(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i);}catch(t){a=[6,t],r=0;}finally{n=o=0;}if(5&a[0])throw a[1];return {value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var o=function(){function t(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags();}return t.prototype.setPlatform=function(t,e){null!=this.platform&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e;},t.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){var r=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+r+"."),this.set(t,r);}},t.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},t.prototype.getNumber=function(t){return this.get(t)},t.prototype.getBool=function(t){return this.get(t)},t.prototype.getFlags=function(){return this.flags},Object.defineProperty(t.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),t.prototype.set=function(t,e){if(null==this.flagRegistry[t])throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e);},t.prototype.evaluateFlag=function(t){if(null==this.flagRegistry[t])throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},t.prototype.setFlags=function(t){this.flags=Object.assign({},t);},t.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags();},t.prototype.populateURLFlags=function(){var t=this;if(void 0!==this.global&&void 0!==this.global.location&&void 0!==this.global.location.search){var e,n,r=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return function(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"");}(n,e[0],e[1]),e.join("=")}),n);if("tfjsflags"in r)r.tfjsflags.split(",").forEach(function(e){var n=e.split(":"),r=n[0],o=n[1];t.urlFlags[r]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return "true"===e;if(""+ +e===e)return +e;throw new Error("Could not parse value flag value "+e+" for flag "+t+".")}(r,o);});}},t}();function a(){return i}var i=null;var u=new Map;function s(t,e){var n=f(t,e);return u.get(n)}function c(t){for(var e=u.entries(),n=[];;){var r=e.next(),o=r.done,a=r.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===t&&n.push(s);}return n}function l(t){var e=t.kernelName,n=t.backendName,r=f(e,n);if(u.has(r))throw new Error("The kernel '"+e+"' for backend '"+n+"' is already registered");u.set(r,t);}function h(t,e){var n=f(t,e);if(!u.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is not registered");u.delete(n);}function f(t,e){return e+"_"+t}function p(t){for(var e=t.length,n=0,r=0;e>0;)r=Math.random()*e|0,n=t[--e],t[e]=t[r],t[r]=n;}function d(t,e,n){return Math.max(t,Math.min(e,n))}function v(t){return t%2==0?t:t+1}function m(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e}function g(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function y(t,e,n){void 0===n&&(n=""),g(C(t,e),function(){return n+" Shapes "+t+" and "+e+" must match"});}function x(t){g(null!=t,function(){return "The input to the tensor constructor must be a non-null value."});}function b(t,e,n){if(void 0===e&&(e=[]),void 0===n&&(n=!1),null==e&&(e=[]),Array.isArray(t)||B(t)&&!n)for(var r=0;r<t.length;++r)b(t[r],e,n);else e.push(t);return e}function w(t){if(0===t.length)return 1;for(var e=t[0],n=1;n<t.length;n++)e*=t[n];return e}function C(t,e){if(t===e)return !0;if(null==t||null==e)return !1;if(t.length!==e.length)return !1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return !1;return !0}function E(t){return t%1==0}function R(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return -1;var e=Math.exp(2*t);return (e-1)/(e+1)}function I(t){var e=Math.ceil(Math.sqrt(t));return [e,Math.ceil(t/e)]}function k(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function S(t,e,n){return void 0===e&&(e=function(t){return 0}),new Promise(function(r,o){var a=0,i=function(){if(t())r();else{var u=e(++a);null!=n&&a>=n?o():setTimeout(i,u);}};i();})}function A(t,e){for(var n=1,r=-1,o=0;o<t.length;++o)if(t[o]>=0)n*=t[o];else if(-1===t[o]){if(-1!==r)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o;}else if(t[o]<0)throw Error("Shapes can not be < 0. Found "+t[o]+" at dim "+o);if(-1===r){if(e>0&&e!==n)throw Error("Size("+e+") must match the product of shape "+t);return t}if(0===n)throw Error("Cannot infer the missing size in ["+t+"] when there are 0 elements");if(e%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+n);var a=t.slice();return a[r]=e/n,a}function D(t,e){var n=e.length;return g((t=null==t?e.map(function(t,e){return e}):[].concat(t)).every(function(t){return t>=-n&&t<n}),function(){return "All values in axis param must be in range [-"+n+", "+n+") but got axis "+t}),g(t.every(function(t){return E(t)}),function(){return "All values in axis param must be integers but got axis "+t}),t.map(function(t){return t<0?n+t:t})}function T(t,e){for(var n=[],r=[],o=null!=e&&Array.isArray(e)&&0===e.length,a=null==e||o?null:D(e,t).sort(),i=0,u=0;u<t.length;++u){if(null!=a){if(a[i]===u&&1!==t[u])throw new Error("Can't squeeze axis "+u+" since its dim '"+t[u]+"' is not 1");(null==a[i]||a[i]>u)&&1===t[u]&&(n.push(t[u]),r.push(u)),a[i]<=u&&i++;}1!==t[u]&&(n.push(t[u]),r.push(u));}return {newShape:n,keptDims:r}}function N(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e);}return n}function F(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e);}return n}function _(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+e+" being uploaded contains "+r+".")}}function O(t){return "bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function M(t,e){return "complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))}function B(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function P(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)}function L(t){if(null==t)return 0;var e=0;return t.forEach(function(t){return e+=t.length}),e}function W(t){return "string"==typeof t||t instanceof String}function U(t){return "boolean"==typeof t}function V(t){return "number"==typeof t}function z(t){return Array.isArray(t)?z(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array?"int32":V(t)?"float32":W(t)?"string":U(t)?"bool":"float32"}function G(t){return !!(t&&t.constructor&&t.call&&t.apply)}function H(t,e){for(var n=e;n<t;++n)if(t%n==0)return n;return t}function q(t){var e=t.length;if(e<2)return [];var n=new Array(e-1);n[e-2]=t[e-1];for(var r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function K(t,e,n){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=b(t)),n&&_(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){for(var r=new Uint8Array(t.length),o=0;o<r.length;++o)0!==Math.round(t[o])&&(r[o]=1);return r}throw new Error("Unknown data type "+e)}function j(t,e){if(0===t.length)return e[0];var n=t.reduce(function(t,e){return t*e});if(0===n)return [];if(n!==e.length)throw new Error("["+t+"] does not match the input size.");return function t(e,n,r){var o=new Array;if(1===n.length)for(var a=n[0],i=0;i<a;i++)o[i]=r[e+i];else{a=n[0];var u=n.slice(1),s=u.reduce(function(t,e){return t*e});for(i=0;i<a;i++)o[i]=t(e+i*s,u,r);}return o}(0,t,e)}function X(t,e){for(var n=$(t,e),r=0;r<n.length;r++)n[r]=1;return n}function $(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}function Y(){return a().platform.now()}function Q(t){t.forEach(function(e){g(Number.isInteger(e)&&e>=0,function(){return "Tensor must have a shape comprised of positive integers but got shape ["+t+"]."});});}function J(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",a().platform.encode(t,e)}function Z(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",a().platform.decode(t,e)}var tt=Object.freeze({shuffle:p,clamp:d,nearestLargerEven:v,sum:m,randUniform:function(t,e){var n=Math.random();return e*n+(1-n)*t},distSquared:function(t,e){for(var n=0,r=0;r<t.length;r++){var o=Number(t[r])-Number(e[r]);n+=o*o;}return n},assert:g,assertShapesMatch:y,assertNonNull:x,flatten:b,sizeFromShape:w,isScalarShape:function(t){return 0===t.length},arraysEqual:C,isInt:E,tanh:R,sizeToSquarishShape:I,createShuffledIndices:function(t){for(var e=new Uint32Array(t),n=0;n<t;++n)e[n]=n;return p(e),e},rightPad:k,repeatedTry:S,inferFromImplicitShape:A,parseAxisParam:D,squeezeShape:T,getTypedArrayFromDType:N,getArrayFromDType:F,checkConversionForErrors:_,isValidDtype:O,hasEncodingLoss:M,isTypedArray:B,bytesPerElement:P,bytesFromStringArray:L,isString:W,isBoolean:U,isNumber:V,inferDtype:z,isFunction:G,nearestDivisor:H,computeStrides:q,toTypedArray:K,toNestedArray:j,makeOnesTypedArray:X,makeZerosTypedArray:$,now:Y,assertNonNegativeIntegerDimensions:Q,fetch:function(t,e){return a().platform.fetch(t,e)},encodeString:J,decodeString:Z}),et=function(){function t(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new nt);}return t.prototype.profileKernel=function(t,e,n){var r,o=this,a=this.backendTimer.time(function(){r=n();});return r.forEach(function(n){n.data().then(function(r){!function(t,e,n){if("float32"!==e)return !1;for(var r=0;r<t.length;r++){var o=t[r];if(isNaN(o)||!isFinite(o))return console.warn("Found "+o+" in the result of '"+n+"'"),!0}}(r,n.dtype,t),a.then(function(a){var i="";null!=a.getExtraProfileInfo&&(i=a.getExtraProfileInfo()),o.logger.logKernelProfile(t,n,r,a.kernelMs,e,i);});});}),r},t}();var nt=function(){function t(){}return t.prototype.logKernelProfile=function(t,e,n,r,o,a){var i=k(r+"ms",9),u=k(t,25),s=e.rank,c=e.size,l=k(e.shape.toString(),14),h="";for(var f in o){var p=o[f].shape,d=p.length;h+=f+": "+d+"D "+(d>0?p:"")+" ";}console.log("%c"+u+"\t%c"+i+"\t%c"+s+"D "+l+"\t%c"+c+"\t%c"+h+"\t%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue");},t}();var rt=20,ot=3,at=7;function it(t,e,n,r){var o=q(e),a=function(t,e,n,r){var o=w(e),a=r[r.length-1],i=new Array(a).fill(0),u=e.length,s="complex64"===n?ct(t):t;if(u>1)for(var c=0;c<o/a;c++)for(var l=c*a,h=0;h<a;h++)i[h]=Math.max(i[h],ut(s[l+h],0,n).length);return i}(t,e,n,o),i=e.length,u=function t(e,n,r,o,a,i){void 0===i&&(i=!0);var u="complex64"===r?2:1;var s=n[0];var c=n.length;if(0===c){if("complex64"===r){var l=ct(e);return [ut(l[0],0,r)]}return "bool"===r?[st(e[0])]:[e[0].toString()]}if(1===c){if(s>rt){var h=ot*u,f=Array.from(e.slice(0,h)),p=Array.from(e.slice((s-ot)*u,s*u));return "complex64"===r&&(f=ct(f),p=ct(p)),["["+f.map(function(t,e){return ut(t,a[e],r)}).join(", ")+", ..., "+p.map(function(t,e){return ut(t,a[s-ot+e],r)}).join(", ")+"]"]}var d="complex64"===r?ct(e):Array.from(e);return ["["+d.map(function(t,e){return ut(t,a[e],r)}).join(", ")+"]"]}var v=n.slice(1);var m=o.slice(1);var g=o[0]*u;var y=[];if(s>rt){for(var x=0;x<ot;x++){var b=x*g,w=b+g;y.push.apply(y,t(e.slice(b,w),v,r,m,a,!1));}y.push("...");for(var x=s-ot;x<s;x++){var b=x*g,w=b+g;y.push.apply(y,t(e.slice(b,w),v,r,m,a,x===s-1));}}else for(var x=0;x<s;x++){var b=x*g,w=b+g;y.push.apply(y,t(e.slice(b,w),v,r,m,a,x===s-1));}var C=2===c?",":"";y[0]="["+y[0]+C;for(var x=1;x<y.length-1;x++)y[x]=" "+y[x]+C;var E=",\n";for(var x=2;x<c;x++)E+="\n";y[y.length-1]=" "+y[y.length-1]+"]"+(i?"":E);return y}(t,e,n,o,a),s=["Tensor"];return r&&(s.push("  dtype: "+n),s.push("  rank: "+i),s.push("  shape: ["+e+"]"),s.push("  values:")),s.push(u.map(function(t){return "    "+t}).join("\n")),s.join("\n")}function ut(t,e,n){return k(Array.isArray(t)?parseFloat(t[0].toFixed(at))+" + "+parseFloat(t[1].toFixed(at))+"j":W(t)?"'"+t+"'":"bool"===n?st(t):parseFloat(t.toFixed(at)).toString(),e)}function st(t){return 0===t?"false":"true"}function ct(t){for(var e=[],n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}var lt=function(){function t(t,e,n){var r=this;if(this.dtype=e,this.shape=t.slice(),this.size=w(t),null!=n){var o=n.length;g(o===this.size,function(){return "Length of values '"+o+"' does not match the size inferred by the shape '"+r.size+"'."});}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||F(e,this.size),this.strides=q(t);}return t.prototype.set=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];0===n.length&&(n=[0]),g(n.length===this.rank,function(){return "The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var o=this.locToIndex(n);this.values[o]=t;},t.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];0===t.length&&(t=[0]);for(var n=0,r=0,o=t;r<o.length;r++){var a=o[r];if(a<0||a>=this.shape[n]){var i="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(i)}n++;}for(var u=t[t.length-1],s=0;s<t.length-1;++s)u+=this.strides[s]*t[s];return this.values[u]},t.prototype.locToIndex=function(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},t.prototype.indexToLoc=function(t){if(0===this.rank)return [];if(1===this.rank)return [t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.toTensor=function(){return ht().makeTensor(this.values,this.shape,this.dtype)},t}(),ht=null,ft=null,pt=null;var dt=function(){function t(t,e,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=w(t),this.strides=q(t),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher";}return t.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},t.prototype.asScalar=function(){return this.throwIfDisposed(),g(1===this.size,function(){return "The array must have only 1 element."}),this.reshape([])},t.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},t.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},t.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},t.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),this.reshape([t,e,n,r])},t.prototype.as5D=function(t,e,n,r,o){return this.throwIfDisposed(),this.reshape([t,e,n,r,o])},t.prototype.asType=function(t){return this.throwIfDisposed(),ft.cast(this,t)},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.buffer=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return [4,this.data()];case 1:return t=e.sent(),[2,ft.buffer(this.shape,this.dtype,t)]}})})},t.prototype.bufferSync=function(){return ft.buffer(this.shape,this.dtype,this.dataSync())},t.prototype.array=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return [4,this.data()];case 1:return t=e.sent(),[2,j(this.shape,t)]}})})},t.prototype.arraySync=function(){return j(this.shape,this.dataSync())},t.prototype.data=function(){return n(this,void 0,void 0,function(){var t,e;return r(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=ht().read(this.dataId),"string"!==this.dtype?[3,2]:[4,t];case 1:e=n.sent();try{return [2,e.map(function(t){return Z(t)})]}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return [2,t]}})})},t.prototype.dataSync=function(){this.throwIfDisposed();var t=ht().readSync(this.dataId);if("string"===this.dtype)try{return t.map(function(t){return Z(t)})}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},t.prototype.bytes=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,ht().read(this.dataId)];case 1:return t=e.sent(),"string"===this.dtype?[2,t]:[2,new Uint8Array(t.buffer)]}})})},t.prototype.dispose=function(){this.isDisposed||(ht().disposeTensor(this),this.isDisposedInternal=!0);},Object.defineProperty(t.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),t.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},t.prototype.toFloat=function(){return this.asType("float32")},t.prototype.toInt=function(){return this.asType("int32")},t.prototype.toBool=function(){return this.asType("bool")},t.prototype.print=function(t){return void 0===t&&(t=!1),ft.print(this,t)},t.prototype.reshape=function(t){return this.throwIfDisposed(),ft.reshape(this,t)},t.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},t.prototype.expandDims=function(t){return void 0===t&&(t=0),ft.expandDims(this,t)},t.prototype.cumsum=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=!1),ft.cumsum(this,t,e,n)},t.prototype.squeeze=function(t){return this.throwIfDisposed(),ft.squeeze(this,t)},t.prototype.clone=function(){return this.throwIfDisposed(),ft.clone(this)},t.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),ft.oneHot(this,t,e,n)},t.prototype.toString=function(t){return void 0===t&&(t=!1),it(this.dataSync(),this.shape,this.dtype,t)},t.prototype.tile=function(t){return this.throwIfDisposed(),ft.tile(this,t)},t.prototype.gather=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),ft.gather(this,t,e)},t.prototype.matMul=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n=!1),this.throwIfDisposed(),ft.matMul(this,t,e,n)},t.prototype.dot=function(t){return this.throwIfDisposed(),ft.dot(this,t)},t.prototype.norm=function(t,e,n){return void 0===t&&(t="euclidean"),void 0===e&&(e=null),void 0===n&&(n=!1),this.throwIfDisposed(),ft.norm(this,t,e,n)},t.prototype.slice=function(t,e){return this.throwIfDisposed(),ft.slice(this,t,e)},t.prototype.reverse=function(t){return this.throwIfDisposed(),ft.reverse(this,t)},t.prototype.concat=function(e,n){return void 0===n&&(n=0),this.throwIfDisposed(),e instanceof t&&(e=[e]),ft.concat([this].concat(e),n)},t.prototype.split=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),ft.split(this,t,e)},t.prototype.stack=function(t,e){return void 0===e&&(e=0),ft.stack([this,t],e)},t.prototype.unstack=function(t){return void 0===t&&(t=0),ft.unstack(this,t)},t.prototype.pad=function(t,e){return void 0===e&&(e=0),ft.pad(this,t,e)},t.prototype.batchNormalization=function(t,e,n,r,o){return void 0===n&&(n=.001),pt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,o,r,n)},t.prototype.batchNorm=function(t,e,n,r,o){return void 0===o&&(o=.001),this.throwIfDisposed(),ft.batchNorm(this,t,e,n,r,o)},t.prototype.all=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.all(this,t,e)},t.prototype.any=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.any(this,t,e)},t.prototype.logSumExp=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.logSumExp(this,t,e)},t.prototype.sum=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.sum(this,t,e)},t.prototype.prod=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.prod(this,t,e)},t.prototype.mean=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.mean(this,t,e)},t.prototype.min=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.min(this,t,e)},t.prototype.max=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),ft.max(this,t,e)},t.prototype.argMin=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),ft.argMin(this,t)},t.prototype.argMax=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),ft.argMax(this,t)},t.prototype.cast=function(t){return this.throwIfDisposed(),ft.cast(this,t)},t.prototype.add=function(t){return this.throwIfDisposed(),ft.add(this,t)},t.prototype.addStrict=function(t){return this.throwIfDisposed(),ft.addStrict(this,t)},t.prototype.atan2=function(t){return this.throwIfDisposed(),ft.atan2(this,t)},t.prototype.sub=function(t){return this.throwIfDisposed(),ft.sub(this,t)},t.prototype.subStrict=function(t){return this.throwIfDisposed(),ft.subStrict(this,t)},t.prototype.pow=function(t){return this.throwIfDisposed(),ft.pow(this,t)},t.prototype.powStrict=function(t){return this.throwIfDisposed(),ft.powStrict(this,t)},t.prototype.mul=function(t){return this.throwIfDisposed(),ft.mul(this,t)},t.prototype.mulStrict=function(t){return this.throwIfDisposed(),ft.mulStrict(this,t)},t.prototype.div=function(t){return this.throwIfDisposed(),ft.div(this,t)},t.prototype.divNoNan=function(t){return this.throwIfDisposed(),ft.divNoNan(this,t)},t.prototype.floorDiv=function(t){return this.throwIfDisposed(),ft.floorDiv(this,t)},t.prototype.divStrict=function(t){return this.throwIfDisposed(),ft.divStrict(this,t)},t.prototype.minimum=function(t){return this.throwIfDisposed(),ft.minimum(this,t)},t.prototype.minimumStrict=function(t){return this.throwIfDisposed(),ft.minimumStrict(this,t)},t.prototype.maximum=function(t){return this.throwIfDisposed(),ft.maximum(this,t)},t.prototype.maximumStrict=function(t){return this.throwIfDisposed(),ft.maximumStrict(this,t)},t.prototype.mod=function(t){return this.throwIfDisposed(),ft.mod(this,t)},t.prototype.modStrict=function(t){return this.throwIfDisposed(),ft.modStrict(this,t)},t.prototype.squaredDifference=function(t){return this.throwIfDisposed(),ft.squaredDifference(this,t)},t.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),ft.squaredDifferenceStrict(this,t)},t.prototype.transpose=function(t){return this.throwIfDisposed(),ft.transpose(this,t)},t.prototype.notEqual=function(t){return this.throwIfDisposed(),ft.notEqual(this,t)},t.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),ft.notEqualStrict(this,t)},t.prototype.less=function(t){return this.throwIfDisposed(),ft.less(this,t)},t.prototype.lessStrict=function(t){return this.throwIfDisposed(),ft.lessStrict(this,t)},t.prototype.equal=function(t){return this.throwIfDisposed(),ft.equal(this,t)},t.prototype.equalStrict=function(t){return this.throwIfDisposed(),ft.equalStrict(this,t)},t.prototype.lessEqual=function(t){return this.throwIfDisposed(),ft.lessEqual(this,t)},t.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),ft.lessEqualStrict(this,t)},t.prototype.greater=function(t){return this.throwIfDisposed(),ft.greater(this,t)},t.prototype.greaterStrict=function(t){return this.throwIfDisposed(),ft.greaterStrict(this,t)},t.prototype.greaterEqual=function(t){return this.throwIfDisposed(),ft.greaterEqual(this,t)},t.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),ft.greaterEqualStrict(this,t)},t.prototype.logicalAnd=function(t){return this.throwIfDisposed(),ft.logicalAnd(this,t)},t.prototype.logicalOr=function(t){return this.throwIfDisposed(),ft.logicalOr(this,t)},t.prototype.logicalNot=function(){return this.throwIfDisposed(),ft.logicalNot(this)},t.prototype.logicalXor=function(t){return this.throwIfDisposed(),ft.logicalXor(this,t)},t.prototype.where=function(t,e){return this.throwIfDisposed(),ft.where(t,this,e)},t.prototype.neg=function(){return this.throwIfDisposed(),ft.neg(this)},t.prototype.ceil=function(){return this.throwIfDisposed(),ft.ceil(this)},t.prototype.floor=function(){return this.throwIfDisposed(),ft.floor(this)},t.prototype.sign=function(){return this.throwIfDisposed(),ft.sign(this)},t.prototype.isNaN=function(){return this.throwIfDisposed(),ft.isNaN(this)},t.prototype.isInf=function(){return this.throwIfDisposed(),ft.isInf(this)},t.prototype.isFinite=function(){return this.throwIfDisposed(),ft.isFinite(this)},t.prototype.exp=function(){return this.throwIfDisposed(),ft.exp(this)},t.prototype.expm1=function(){return this.throwIfDisposed(),ft.expm1(this)},t.prototype.log=function(){return this.throwIfDisposed(),ft.log(this)},t.prototype.log1p=function(){return this.throwIfDisposed(),ft.log1p(this)},t.prototype.sqrt=function(){return this.throwIfDisposed(),ft.sqrt(this)},t.prototype.rsqrt=function(){return this.throwIfDisposed(),ft.rsqrt(this)},t.prototype.square=function(){return this.throwIfDisposed(),ft.square(this)},t.prototype.reciprocal=function(){return this.throwIfDisposed(),ft.reciprocal(this)},t.prototype.abs=function(){return this.throwIfDisposed(),ft.abs(this)},t.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),ft.clipByValue(this,t,e)},t.prototype.relu=function(){return this.throwIfDisposed(),ft.relu(this)},t.prototype.relu6=function(){return this.throwIfDisposed(),ft.relu6(this)},t.prototype.elu=function(){return this.throwIfDisposed(),ft.elu(this)},t.prototype.selu=function(){return this.throwIfDisposed(),ft.selu(this)},t.prototype.leakyRelu=function(t){return void 0===t&&(t=.2),this.throwIfDisposed(),ft.leakyRelu(this,t)},t.prototype.prelu=function(t){return this.throwIfDisposed(),ft.prelu(this,t)},t.prototype.sigmoid=function(){return this.throwIfDisposed(),ft.sigmoid(this)},t.prototype.logSigmoid=function(){return this.throwIfDisposed(),ft.logSigmoid(this)},t.prototype.softplus=function(){return this.throwIfDisposed(),ft.softplus(this)},t.prototype.zerosLike=function(){return this.throwIfDisposed(),ft.zerosLike(this)},t.prototype.onesLike=function(){return this.throwIfDisposed(),ft.onesLike(this)},t.prototype.sin=function(){return this.throwIfDisposed(),ft.sin(this)},t.prototype.cos=function(){return this.throwIfDisposed(),ft.cos(this)},t.prototype.tan=function(){return this.throwIfDisposed(),ft.tan(this)},t.prototype.asin=function(){return this.throwIfDisposed(),ft.asin(this)},t.prototype.acos=function(){return this.throwIfDisposed(),ft.acos(this)},t.prototype.atan=function(){return this.throwIfDisposed(),ft.atan(this)},t.prototype.sinh=function(){return this.throwIfDisposed(),ft.sinh(this)},t.prototype.cosh=function(){return this.throwIfDisposed(),ft.cosh(this)},t.prototype.tanh=function(){return this.throwIfDisposed(),ft.tanh(this)},t.prototype.asinh=function(){return this.throwIfDisposed(),ft.asinh(this)},t.prototype.acosh=function(){return this.throwIfDisposed(),ft.acosh(this)},t.prototype.atanh=function(){return this.throwIfDisposed(),ft.atanh(this)},t.prototype.erf=function(){return this.throwIfDisposed(),ft.erf(this)},t.prototype.round=function(){return this.throwIfDisposed(),ft.round(this)},t.prototype.step=function(t){return void 0===t&&(t=0),this.throwIfDisposed(),ft.step(this,t)},t.prototype.softmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),ft.softmax(this,t)},t.prototype.logSoftmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),ft.logSoftmax(this,t)},t.prototype.resizeBilinear=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),ft.image.resizeBilinear(this,t,e)},t.prototype.resizeNearestNeighbor=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),ft.image.resizeNearestNeighbor(this,t,e)},t.prototype.conv1d=function(t,e,n,r,o,a){return void 0===r&&(r="NWC"),void 0===o&&(o=1),this.throwIfDisposed(),ft.conv1d(this,t,e,n,r,o,a)},t.prototype.conv2d=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),ft.conv2d(this,t,e,n,r,o,a)},t.prototype.conv2dTranspose=function(t,e,n,r,o){return this.throwIfDisposed(),ft.conv2dTranspose(this,t,e,n,r,o)},t.prototype.depthwiseConv2D=function(t,e,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),ft.depthwiseConv2d(this,t,e,n,r,o,a)},t.prototype.separableConv2d=function(t,e,n,r,o,a){return void 0===o&&(o=[1,1]),void 0===a&&(a="NHWC"),this.throwIfDisposed(),ft.separableConv2d(this,t,e,n,r,o,a)},t.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),ft.avgPool(this,t,e,n,r)},t.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),ft.maxPool(this,t,e,n,r)},t.prototype.localResponseNormalization=function(t,e,n,r){return void 0===t&&(t=5),void 0===e&&(e=1),void 0===n&&(n=1),void 0===r&&(r=.5),ft.localResponseNormalization(this,t,e,n,r)},t.prototype.pool=function(t,e,n,r,o){return this.throwIfDisposed(),ft.pool(this,t,e,n,r,o)},t.prototype.variable=function(t,e,n){return void 0===t&&(t=!0),this.throwIfDisposed(),ht().makeVariable(this,t,e,n)},t.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),ft.unsortedSegmentSum(this,t,e)},t.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),ft.batchToSpaceND(this,t,e)},t.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),ft.spaceToBatchND(this,t,e)},t.prototype.topk=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=!0),this.throwIfDisposed(),ft.topk(this,t,e)},t.prototype.stridedSlice=function(t,e,n,r,o,a,i,u){return void 0===r&&(r=0),void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===u&&(u=0),this.throwIfDisposed(),ft.stridedSlice(this,t,e,n,r,o,a,i,u)},t.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),ft.depthToSpace(this,t,e)},t.prototype.fft=function(){return this.throwIfDisposed(),ft.spectral.fft(this)},t.prototype.ifft=function(){return this.throwIfDisposed(),ft.spectral.ifft(this)},t.prototype.rfft=function(){return this.throwIfDisposed(),ft.spectral.rfft(this)},t.prototype.irfft=function(){return this.throwIfDisposed(),ft.spectral.irfft(this)},t}();Object.defineProperty(dt,Symbol.hasInstance,{value:function(t){return !!t&&null!=t.dataId&&null!=t.shape&&null!=t.dtype}});var vt,mt,gt,yt,xt,bt=function(t){function n(e,n,r,o){var a=t.call(this,e.shape,e.dtype,e.dataId,o)||this;return a.trainable=n,a.name=r,a}return e(n,t),n.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!C(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");ht().disposeTensor(this),this.dataId=t.dataId,ht().incRef(this,null);},n.prototype.dispose=function(){ht().disposeVariable(this),this.isDisposedInternal=!0;},n}(dt);Object.defineProperty(bt,Symbol.hasInstance,{value:function(t){return t instanceof dt&&null!=t.assign&&t.assign instanceof Function}}),function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6";}(vt||(vt={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64";}(mt||(mt={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64";}(gt||(gt={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64";}(yt||(yt={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64";}(xt||(xt={}));var wt={float32:yt,int32:mt,bool:gt,complex64:xt};function Ct(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return "string";throw new Error("Can not upcast "+t+" with "+e)}return wt[t][e]}function Et(t){return Ct(t,"int32")}function Rt(t,e){if(t.dtype===e.dtype)return [t,e];var n=Ct(t.dtype,e.dtype);return [t.cast(n),e.cast(n)]}function It(t,e){g(t.dtype===e.dtype,function(){return "The dtypes of the first("+t.dtype+") and second("+e.dtype+") input must match"});}function kt(t){var e=[];return function t(e,n,r){if(null==e)return;if(e instanceof dt)return void n.push(e);if(o=e,!Array.isArray(o)&&"object"!=typeof o)return;var o;var a=e;for(var i in a){var u=a[i];r.has(u)||(r.add(u),t(u,n,r));}}(t,e,new Set),e}var St,At=Object.freeze({makeTypesMatch:Rt,assertTypesMatch:It,isTensorInList:function(t,e){for(var n=0;n<e.length;n++)if(e[n].id===t.id)return !0;return !1},getTensorsInContainer:kt}),Dt=function(){function t(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null};}return t.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose();},t}(),Tt=function(){function t(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Dt;}return t.prototype.ready=function(){return n(this,void 0,void 0,function(){var t,e,n;return r(this,function(r){switch(r.label){case 0:if(null!=this.pendingBackendInit)return [2,this.pendingBackendInit.then(function(){})];if(null!=this.backendInstance)return [2];t=this.getSortedBackends(),e=0,r.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return r.sent()?[4,this.setBackend(n)]:[3,4];case 3:return r.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(t.prototype,"backend",{get:function(){if(null!=this.pendingBackendInit)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() before calling other methods");if(null==this.backendInstance){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() before calling other methods");this.setBackend(e);}return this.backendInstance},enumerable:!0,configurable:!0}),t.prototype.backendNames=function(){return Object.keys(this.registryFactory)},t.prototype.findBackend=function(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;if(this.initializeBackend(t).asyncInit)return null}return this.registry[t]},t.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},t.prototype.registerBackend=function(t,e,n){return void 0===n&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},t.prototype.setBackend=function(t){return n(this,void 0,void 0,function(){var e,n,o;return r(this,function(r){switch(r.label){case 0:if(null==this.registryFactory[t])throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,null!=this.registry[t]?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=r.sent(),[3,3];case 2:o=n,r.label=3;case 3:if(!o)return [2,!1];r.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new et(this.backendInstance),[2,!0]}})})},t.prototype.setupRegisteredKernels=function(){var t=this;c(this.backendName).forEach(function(e){null!=e.setupFunc&&e.setupFunc(t.backendInstance);});},t.prototype.disposeRegisteredKernels=function(t){var e=this;c(t).forEach(function(n){null!=n.disposeFunc&&n.disposeFunc(e.registry[t]);});},t.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(null==n)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var r=n.factory();if(Promise.resolve(r)===r){var o=++this.pendingBackendInitId,a=r.then(function(n){return !(o<e.pendingBackendInitId)&&(e.registry[t]=n,e.pendingBackendInit=null,!0)}).catch(function(n){return !(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(n.stack||n.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(e){return console.warn("Initialization of backend "+t+" failed"),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}},t.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null);},t.prototype.getSortedBackends=function(){var t=this;if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},t.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],r=this.initializeBackend(n),o=r.success,a=r.asyncInit;if(a||o)return {name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},t.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),r=n.backend,o=this.readSync(e);r.disposeData(e),n.backend=t,t.move(e,o,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++;},t.prototype.tidy=function(t,e){var n,r=this,o=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t;}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t;}return this.scopedRun(function(){return r.startScope(o)},function(){return r.endScope(n)},function(){return (n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},t.prototype.scopedRun=function(t,e,n){t();try{var r=n();return e(),r}catch(t){throw e(),t}},t.prototype.nextTensorId=function(){return t.nextTensorId++},t.prototype.nextVariableId=function(){return t.nextVariableId++},t.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(t){return {x:function(){return t.toFloat()}}},[]),e},t.prototype.runKernel=function(t,e,n,r,o){return this.runKernelFunc(null,e,null,t,n,r,o)},t.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},t.prototype.checkKernelForMemLeak=function(t,e,n){var r=this.backend.numDataIds(),o=0;n.forEach(function(t){o+="complex64"===t.dtype?3:1;});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-e-o-a;if(i>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+i+" data ids) after running '"+t+"'")},t.prototype.runKernelFunc=function(t,e,n,r,o,a,i){var u,c=this;void 0===a&&(a=[]),void 0===i&&(i=[]);var l,h=[],f=this.isTapeOn(),p=null!=this.state.activeScope?this.state.activeScope.name:"",d=function(t){f&&(h=t.map(function(t){return c.keep(c.clone(t))}));},v=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var g,y=s(r,this.backendName);return l=null!=y?function(){var t=c.backend.numDataIds();g=y.kernelFunc({inputs:e,attrs:o,backend:c.backend});var n=Array.isArray(g)?g:[g];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(p,t,n);var r=n.map(function(t){var e=t.dataId,n=t.shape,r=t.dtype;return c.makeTensorFromDataId(e,n,r)}),u=r.filter(function(t,e){return i[e]});return d(a.slice().concat(u)),r}:function(){var e=c.backend.numDataIds();g=c.tidy(function(){return t(c.backend,d)});var n=Array.isArray(g)?g:[g];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(p,e,n),n},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(p,e,function(){return l()}):l();}),f&&this.addTapeNode(p,e,u,n,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:p,bytesAdded:this.state.numBytes-v,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(t){return e[t].shape}),outputShapes:u.map(function(t){return t.shape})}),Array.isArray(g)?u:u[0]},t.prototype.makeTensor=function(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;var o=t;"string"===n&&W(t[0])&&(o=t.map(function(t){return J(t)}));var a=r.write(o,e,n),i=new dt(e,n,a,this.nextTensorId());if(this.incRef(i,r),"string"===n){var u=this.state.tensorInfo.get(a),s=L(o);this.state.numBytes+=s-u.bytes,u.bytes=s;}return i},t.prototype.makeTensorFromDataId=function(t,e,n,r){var o=new dt(e,n=n||"float32",t,this.nextTensorId());return this.incRef(o,r),o},t.prototype.makeVariable=function(t,e,n,r){void 0===e&&(e=!0),n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.asType(r));var o=new bt(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[o.name])throw new Error("Variable with name "+o.name+" was already registered");return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o},t.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;var r=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(r=t.size*P(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r,refCount:0}),this.state.numBytes+=r;}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof bt||this.track(t);},t.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--;}},t.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e);}},t.prototype.disposeVariable=function(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name];},t.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},t.prototype.profile=function(t){return n(this,void 0,void 0,function(){var e,n;return r(this,function(r){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(t){return t.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},t.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&0===this.state.kernelDepth},t.prototype.addTapeNode=function(t,e,n,r,o){var a=this,i={id:this.state.nextTapeNodeId++,name:t,inputs:e,outputs:n,saved:o};null!=r&&(i.gradient=function(t){return t=t.map(function(t,e){if(null==t){var r=n[e],o=$(r.size,r.dtype);return a.makeTensor(o,r.shape,r.dtype)}return t}),r(t.length>1?t:t[0],o)}),this.state.activeTape.push(i);},t.prototype.keep=function(t){return t.kept=!0,t},t.prototype.startTape=function(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++;},t.prototype.endTape=function(){this.state.gradientDepth--;},t.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e;},t.prototype.endScope=function(t){for(var e=this,n=kt(t),r=new Set(n.map(function(t){return t.id})),o=0;o<this.state.activeScope.track.length;o++){var a=this.state.activeScope.track[o];a.kept||r.has(a.id)||a.dispose();}var i=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(t){t.kept||t.scopeId!==i.id||e.track(t);});},t.prototype.gradients=function(t,e,n,r){var o=this;if(void 0===r&&(r=!1),g(e.length>0,function(){return "gradients() received an empty list of xs."}),null!=n&&"float32"!==n.dtype)throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var a=this.scopedRun(function(){return o.startTape()},function(){return o.endTape()},function(){return o.tidy("forward",t)});g(a instanceof dt,function(){return "The result y returned by f() must be a tensor."});var i=function(t,e,n){for(var r={},o={},a=0;a<e.length;a++)r[e[a].id]=!0;for(a=0;a<t.length;a++){var i=(d=t[a]).inputs;for(var u in i){for(var s=i[u],c=!1,l=0;l<e.length;l++)if(r[s.id]){d.outputs.forEach(function(t){return r[t.id]=!0}),c=!0,o[d.id]=!0;break}if(c)break}}var h={};h[n.id]=!0;var f={};for(a=t.length-1;a>=0;a--)for(i=(d=t[a]).inputs,l=0;l<d.outputs.length;l++)if(h[d.outputs[l].id]){for(var u in i)h[i[u].id]=!0,f[d.id]=!0;break}var p=[];for(a=0;a<t.length;a++){var d;if(o[(d=t[a]).id]&&f[d.id]){var v={};for(var u in d.inputs){var m=d.inputs[u];r[m.id]&&(v[u]=m);}var g=Object.assign({},d);g.inputs=v,g.outputs=d.outputs,p.push(g);}}return p}(this.state.activeTape,e,a);if(!r&&0===i.length&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var t,r,u={};u[a.id]=null==n?(t=a.shape,r=X(w(t),"float32"),Nt.makeTensor(r,t,"float32")):n,function(t,e,n){for(var r=function(r){var o=e[r],a=[];if(o.outputs.forEach(function(e){var n=t[e.id];null!=n?a.push(n):a.push(null);}),null==o.gradient)throw new Error("Cannot compute gradient: gradient function not found for "+o.name+".");var i=o.gradient(a),u=function(e){if(!(e in i))throw new Error("Cannot backprop through input "+e+". Available gradients found: "+Object.keys(i)+".");var r=n(function(){return i[e]()});if("float32"!==r.dtype)throw new Error("Error in gradient for op "+o.name+". The gradient of input "+e+" must have 'float32' dtype, but has '"+r.dtype+"'");var a=o.inputs[e];if(!C(r.shape,a.shape))throw new Error("Error in gradient for op "+o.name+". The gradient of input '"+e+"' has shape '"+r.shape+"', which does not match the shape of the input '"+a.shape+"'");if(null==t[a.id])t[a.id]=r;else{var u=t[a.id];t[a.id]=u.add(r),u.dispose();}};for(var s in o.inputs)u(s);},o=e.length-1;o>=0;o--)r(o);}(u,i,function(t){return o.tidy(t)});var s=e.map(function(t){return u[t.id]});return 0===o.state.gradientDepth&&(o.state.activeTape.forEach(function(t){for(var e=0,n=t.saved;e<n.length;e++){n[e].dispose();}}),o.state.activeTape=null),{value:a,grads:s}})},t.prototype.customGrad=function(t){var e=this;return g(G(t),function(){return "The f passed in customGrad(f) must be a function."}),function(){for(var n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];g(r.every(function(t){return t instanceof dt}),function(){return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return r.forEach(function(t,e){a[e]=t;}),e.runKernelFunc(function(e,o){return g((n=t.apply(void 0,r.concat([o]))).value instanceof dt,function(){return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),g(G(n.gradFunc),function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},a,function(t,e){var o=n.gradFunc(t,e),a=Array.isArray(o)?o:[o];g(a.length===r.length,function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),g(a.every(function(t){return t instanceof dt}),function(){return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var i={};return a.forEach(function(t,e){i[e]=function(){return t};}),i})}},t.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},t.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},t.prototype.time=function(t){return n(this,void 0,void 0,function(){var e,n;return r(this,function(r){switch(r.label){case 0:return e=Y(),[4,this.backend.time(t)];case 1:return (n=r.sent()).wallMs=Y()-e,[2,n]}})})},t.prototype.track=function(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(t.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),t.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Dt,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null;},t.nextTensorId=0,t.nextVariableId=0,t}();var Nt=function(){var t=function(){if(null==St){var t=void 0;if("undefined"!=typeof window)t=window;else if("undefined"!=typeof global)t=global;else if("undefined"!=typeof process)t=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");t=self;}St=t;}return St}();if(null==t._tfengine){var e=new o(t);t._tfengine=new Tt(e);}return function(t){i=t;}(t._tfengine.ENV),ht=function(){return t._tfengine},t._tfengine}();function Ft(){return "undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var _t=a();_t.registerFlag("DEBUG",function(){return !1},function(t){t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");}),_t.registerFlag("IS_BROWSER",function(){return Ft()}),_t.registerFlag("IS_NODE",function(){return "undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node}),_t.registerFlag("IS_CHROME",function(){return "undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),_t.registerFlag("PROD",function(){return !1}),_t.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return _t.getBool("DEBUG")}),_t.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return !0}),_t.registerFlag("IS_TEST",function(){return !1});var Ot,Mt,Bt,Pt={},Lt={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Wt(t,e){Pt[t]=e;}function Ut(t){t in Pt||(Pt[t]=function(t){if(1!==t&&2!==t)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var e=function(t){if("undefined"!=typeof OffscreenCanvas&&2===t)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(t);if(e.addEventListener("webglcontextlost",function(e){e.preventDefault(),delete Pt[t];},!1),1===t)return e.getContext("webgl",Lt)||e.getContext("experimental-webgl",Lt);return e.getContext("webgl2",Lt)}(t));var e=Pt[t];return e.isContextLost()?(delete Pt[t],Ut(t)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Pt[t])}function Vt(t,e){return [e,t]}function zt(t){var e=w(t);return I(Math.ceil(e/4))}function Gt(t,e){return [Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function Ht(t,e){var n,r,o,i,u,s,c,l,h,f=t;return 2===a().getNumber("WEBGL_VERSION")?(n=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,u=f.RED,s=4,c=1,l=f.HALF_FLOAT,h=f.FLOAT):(n=t.RGBA,r=t.RGBA,o=t.RGBA,i=f.RGBA,u=t.RGBA,s=4,c=4,l=null!=e?e.HALF_FLOAT_OES:null,h=t.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:u,downloadTextureFormat:t.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:c,textureTypeHalfFloat:l,textureTypeFloat:h}}function qt(t,e,n){var r=n();return e&&function(t){var e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+$t(t,e))}(t),r}!function(t){t[t.DENSE=0]="DENSE",t[t.SHARED_BATCH=1]="SHARED_BATCH";}(Ot||(Ot={})),function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD";}(Mt||(Mt={})),function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16";}(Bt||(Bt={}));var Kt=5.96e-8,jt=65504;function Xt(t){return !!(a().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===t||Kt<Math.abs(t)&&Math.abs(t)<jt)}function $t(t,e){switch(e){case t.NO_ERROR:return "NO_ERROR";case t.INVALID_ENUM:return "INVALID_ENUM";case t.INVALID_VALUE:return "INVALID_VALUE";case t.INVALID_OPERATION:return "INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return "INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return "OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return "CONTEXT_LOST_WEBGL";default:return "Unknown error code "+e}}function Yt(t,e,n){return xe(t,e,function(){return t.getExtension(n)},'Extension "'+n+'" not supported on this browser.')}function Qt(t,e,n){var r=xe(t,e,function(){return t.createShader(t.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(qt(t,e,function(){return t.shaderSource(r,n)}),qt(t,e,function(){return t.compileShader(r)}),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw console.log(t.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Jt(t,e,n){var r=xe(t,e,function(){return t.createShader(t.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(qt(t,e,function(){return t.shaderSource(r,n)}),qt(t,e,function(){return t.compileShader(r)}),!1===t.getShaderParameter(r,t.COMPILE_STATUS))throw function(t,e){var n=ee.exec(e);if(null==n)return console.log("Couldn't parse line number in error: "+e),void console.log(t);for(var r=+n[1],o=t.split("\n"),a=o.length.toString().length+2,i=o.map(function(t,e){return k((e+1).toString(),a)+t}),u=0,s=0;s<i.length;s++)u=Math.max(i[s].length,u);var c=i.slice(0,r-1),l=i.slice(r-1,r),h=i.slice(r);console.log(c.join("\n")),console.log(e.split("\n")[0]),console.log("%c "+k(l[0],u),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(h.join("\n"));}(n,t.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var Zt,te,ee=/ERROR: [0-9]+:([0-9]+):/g;function ne(t,e){return xe(t,e,function(){return t.createProgram()},"Unable to create WebGLProgram.")}function re(t,e,n){if(qt(t,e,function(){return t.linkProgram(n)}),!1===t.getProgramParameter(n,t.LINK_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}function oe(t,e,n){if(qt(t,e,function(){return t.validateProgram(n)}),!1===t.getProgramParameter(n,t.VALIDATE_STATUS))throw console.log(t.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function ae(t,e,n){var r=xe(t,e,function(){return t.createBuffer()},"Unable to create WebGLBuffer");return qt(t,e,function(){return t.bindBuffer(t.ARRAY_BUFFER,r)}),qt(t,e,function(){return t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)}),r}function ie(t,e,n){var r=xe(t,e,function(){return t.createBuffer()},"Unable to create WebGLBuffer");return qt(t,e,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r)}),qt(t,e,function(){return t.bufferData(t.ELEMENT_ARRAY_BUFFER,n,t.STATIC_DRAW)}),r}function ue(t,e){return xe(t,e,function(){return t.createTexture()},"Unable to create WebGLTexture.")}function se(t,e){var n=a().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){var r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(t>n||e>n){r="["+t+"x"+e+"]";throw new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+n+"x"+n+"]")+".")}}function ce(t,e){return xe(t,e,function(){return t.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function le(t,e,n,r,o,a,i,u){var s=t.getAttribLocation(n,r);return -1!==s&&(qt(t,e,function(){return t.bindBuffer(t.ARRAY_BUFFER,o)}),qt(t,e,function(){return t.vertexAttribPointer(s,a,t.FLOAT,!1,i,u)}),qt(t,e,function(){return t.enableVertexAttribArray(s)}),!0)}function he(t,e,n,r){be(t,r),qt(t,e,function(){return t.activeTexture(t.TEXTURE0+r)}),qt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,n)});}function fe(t,e,n,r){return xe(t,e,function(){return t.getUniformLocation(n,r)},'uniform "'+r+'" not present in program.')}function pe(t,e,n){return t.getUniformLocation(e,n)}function de(t,e,n,r,o,a){qt(t,e,function(){return he(t,e,r,a)}),qt(t,e,function(){return t.uniform1i(o,a)});}function ve(t,e,n,r){qt(t,e,function(){return t.bindFramebuffer(t.FRAMEBUFFER,r)}),qt(t,e,function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)});}function me(t,e,n){qt(t,e,function(){return t.bindFramebuffer(t.FRAMEBUFFER,n)}),qt(t,e,function(){return t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0)});}function ge(t){var e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+ye(t,e))}function ye(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return "FRAMEBUFFER_UNSUPPORTED";default:return "unknown error "+e}}function xe(t,e,n,r){var o=qt(t,e,function(){return n()});if(null==o)throw new Error(r);return o}function be(t,e){var n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=e+t.TEXTURE0;if(r<t.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function we(t,e){return void 0===e&&(e=2),w(t.slice(0,t.length-e))}function Ce(t){if(0===t.length)throw Error("Cannot get rows and columns of an empty shape array.");return [t.length>1?t[t.length-2]:1,t[t.length-1]]}function Ee(t){var e=[1,1,1];return 0===t.length||1===t.length&&1===t[0]||(e=[we(t)].concat(Ce(t))),e}function Re(t,e){var n;void 0===e&&(e=!1);var r=a().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e&&(r*=2,1===(t=t.map(function(e,n){return n>=t.length-2?v(t[n]):t[n]})).length&&(t=[2,t[0]])),2!==t.length){var o=T(t);t=o.newShape;}var i=w(t);if(t.length<=1&&i<=r)return [1,i];if(2===t.length&&t[0]<=r&&t[1]<=r)return t;if(3===t.length&&t[0]*t[1]<=r&&t[2]<=r)return [t[0]*t[1],t[2]];if(3===t.length&&t[0]<=r&&t[1]*t[2]<=r)return [t[0],t[1]*t[2]];if(4===t.length&&t[0]*t[1]*t[2]<=r&&t[3]<=r)return [t[0]*t[1]*t[2],t[3]];if(4===t.length&&t[0]<=r&&t[1]*t[2]*t[3]<=r)return [t[0],t[1]*t[2]*t[3]];if(e){var u=we(t),s=2,c=2;return t.length&&(s=(n=Ce(t))[0],c=n[1]),I(i=u*(s/2)*(c/2)).map(function(t){return 2*t})}return I(i)}function Ie(t){return t%2==0}function ke(t,e){if(C(t=t.slice(-2),e=e.slice(-2)))return !0;if(!t.length||!e.length)return !0;if(0===t[0]||0===t[1]||0===e[0]||0===e[1])return !0;if(t.length!==e.length){var n=t.slice(-1)[0],r=e.slice(-1)[0];if(n===r)return !0;if(Ie(n)&&Ie(r)&&(1===t[0]||1===e[0]))return !0}return t[1]===e[1]&&Ie(t[0])&&Ie(e[0])}function Se(t){if(null==Zt){var e=Ut(t);Zt=e.getParameter(e.MAX_TEXTURE_SIZE);}return Zt}function Ae(t){if(null==te){var e=Ut(t);te=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);}return Math.min(16,te)}function De(t){if(0===t)return 0;var e=Ut(t);return Te(e,"EXT_disjoint_timer_query_webgl2")&&2===t?2:Te(e,"EXT_disjoint_timer_query")?1:0}function Te(t,e){return null!=t.getExtension(e)}function Ne(t){try{if(null!=Ut(t))return !0}catch(t){return !1}return !1}function Fe(t){if(0===t)return !1;var e=Ut(t);if(1===t){if(!Te(e,"OES_texture_float"))return !1}else if(!Te(e,"EXT_color_buffer_float"))return !1;return Oe(e)}function _e(t){if(0===t)return !1;var e=Ut(t);if(1!==t){if(Te(e,"EXT_color_buffer_float"))return Oe(e);if(Te(e,"EXT_color_buffer_half_float")){var n=e.getExtension("EXT_color_buffer_half_float");return function(t,e){var n=Ht(t,e),r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);var o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0);var a=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(r),t.deleteFramebuffer(o),a}(e,n)}return !1}return !!Te(e,"OES_texture_float")&&(!!Te(e,"WEBGL_color_buffer_float")&&Oe(e))}function Oe(t){var e=Ht(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);var r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);var o=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(r),o}function Me(t){return 2===t&&null!=Ut(t).fenceSync}var Be=Object.freeze({callAndCheck:qt,canBeRepresented:Xt,getWebGLErrorMessage:$t,getExtensionOrThrow:Yt,createVertexShader:Qt,createFragmentShader:Jt,createProgram:ne,linkProgram:re,validateProgram:oe,createStaticVertexBuffer:ae,createStaticIndexBuffer:ie,getNumChannels:function(){return 2===a().getNumber("WEBGL_VERSION")?1:4},createTexture:ue,validateTextureSize:se,createFramebuffer:ce,bindVertexBufferToProgramAttribute:le,bindTextureUnit:he,unbindTextureUnit:function(t,e,n){be(t,n),qt(t,e,function(){return t.activeTexture(t.TEXTURE0+n)}),qt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)});},getProgramUniformLocationOrThrow:fe,getProgramUniformLocation:pe,bindTextureToProgramUniformSampler:de,bindCanvasToFramebuffer:function(t,e){qt(t,e,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),qt(t,e,function(){return t.viewport(0,0,t.canvas.width,t.canvas.height)}),qt(t,e,function(){return t.scissor(0,0,t.canvas.width,t.canvas.height)});},bindColorTextureToFramebuffer:ve,unbindColorTextureFromFramebuffer:me,validateFramebuffer:ge,getFramebufferErrorMessage:ye,getBatchDim:we,getRowsCols:Ce,getShapeAs3D:Ee,getTextureShapeFromLogicalShape:Re,isReshapeFree:ke,getWebGLMaxTextureSize:Se,resetMaxTextureSize:function(){Zt=null;},resetMaxTexturesInShader:function(){te=null;},getMaxTexturesInShader:Ae,getWebGLDisjointQueryTimerVersion:De,hasExtension:Te,isWebGLVersionEnabled:Ne,isCapableOfRenderingToFloatTexture:Fe,isDownloadFloatTextureEnabled:_e,isWebGLFenceEnabled:Me}),Pe=a();function Le(){a().set("PROD",!0);}function We(){a().set("DEBUG",!0);}function Ue(){a().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.");}function Ve(t){a().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().");}function ze(){Nt.disposeVariables();}function Ge(){return Nt}function He(){return Nt.memory()}function qe(t){return Nt.profile(t)}function Ke(t,e){return Nt.tidy(t,e)}function je(t){kt(t).forEach(function(t){return t.dispose()});}function Xe(t){return Nt.keep(t)}function $e(t){return Nt.time(t)}function Ye(t){return Nt.setBackend(t)}function Qe(){return Nt.ready()}function Je(){return Nt.backendName}function Ze(t){Nt.removeBackend(t);}function tn(t){return Nt.findBackend(t)}function en(t){return Nt.findBackendFactory(t)}function nn(t,e,n){return void 0===n&&(n=1),Nt.registerBackend(t,e,n)}function rn(){return Nt.backend}function on(t,e){a().setPlatform(t,e);}function an(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];a().getBool("IS_TEST")||console.warn.apply(console,t);}function un(t,e){var n=t;if(B(t))return "string"===e?[]:[t.length];if(!Array.isArray(t))return [];for(var r=[];Array.isArray(n)||B(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&a().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){r=r||[];if(!Array.isArray(e)&&!B(e))return void g(0===n.length,function(){return "Element arr["+r.join("][")+"] is a primitive, but should be an array/TypedArray of "+n[0]+" elements"});g(n.length>0,function(){return "Element arr["+r.join("][")+"] should be a primitive, but is an array of "+e.length+" elements"});g(e.length===n[0],function(){return "Element arr["+r.join("][")+"] should have "+n[0]+" elements, but has "+e.length+" elements"});var o=n.slice(1);for(var a=0;a<e.length;++a)t(e[a],o,r.concat(a));}(t,r,[]),r}function sn(t,e,n,r){if(null!=t&&("numeric"!==t&&t!==e||"numeric"===t&&"string"===e))throw new Error("Argument '"+n+"' passed to '"+r+"' must be "+t+" tensor, but got "+e+" tensor")}function cn(t,e,n,r){if(void 0===r&&(r="numeric"),t instanceof dt)return sn(r,t.dtype,e,n),t;var o=z(t);if("string"!==o&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),sn(r,o,e,n),null==t||!B(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){var i=null==t?"null":t.constructor.name;throw new Error("Argument '"+e+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+i+"'")}var u=un(t,o);B(t)||Array.isArray(t)||(t=[t]);var s="string"!==o?K(t,o,a().getBool("DEBUG")):b(t,[],!0);return Nt.makeTensor(s,u,o)}function ln(t,e,n,r){if(void 0===r&&(r="numeric"),!Array.isArray(t))throw new Error("Argument "+e+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return t.map(function(t,r){return cn(t,e+"["+r+"]",n)},r)}function hn(t,e){for(var n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return !1;return !0}function fn(t,e,n){for(var r=t.length+e.length,o=[],a=0,i=0,u=0;u<r;u++)-1===n.indexOf(u)?o.push(t[a++]):o.push(e[i++]);return o}function pn(t,e){for(var n=[],r=t.length,o=0;o<r;o++)-1===e.indexOf(o)&&n.push(t[o]);return [n,e.map(function(e){return t[e]})]}function dn(t,e){return fn(t,e.map(function(t){return 1}),e)}function vn(t,e,n){g(hn(e,n),function(){return t+" supports only inner-most axes for now. Got axes "+e+" and rank-"+n+" input."});}function mn(t,e){if(hn(t,e))return null;for(var n=[],r=0;r<e;++r)-1===t.indexOf(r)&&n.push(r);return t.forEach(function(t){return n.push(t)}),n}function gn(t){return t.map(function(t,e){return [e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function yn(t,e){for(var n=[],r=e-t;r<e;++r)n.push(r);return n}function xn(t,e){var n=t[0].length;t.forEach(function(t,e){g(t.length===n,function(){return "Error in concat"+n+"D: rank of tensors["+e+"] must be the same as the rank of the rest ("+n+")"});}),g(e>=0&&e<n,function(){return "Error in concat"+n+"D: axis must be between 0 and "+(n-1)+"."});var r=t[0];t.forEach(function(t,o){for(var a=0;a<n;a++)g(a===e||t[a]===r[a],function(){return "Error in concat"+n+"D: Shape of tensors["+o+"] ("+t+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+o+"."});});}function bn(t,e){for(var n=t[0].slice(),r=1;r<t.length;r++)n[e]+=t[r][e];return n}function wn(t){var e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var n=e[0],r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];Nt.startScope(n);try{var o=r.apply(void 0,t);return o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),Nt.endScope(o),o}catch(t){throw Nt.endScope(null),t}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}Pe.registerFlag("HAS_WEBGL",function(){return Pe.getNumber("WEBGL_VERSION")>0}),Pe.registerFlag("WEBGL_VERSION",function(){return Ne(2)?2:Ne(1)?1:0}),Pe.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return 2===Pe.get("WEBGL_VERSION")}),Pe.registerFlag("WEBGL_CPU_FORWARD",function(){return !0}),Pe.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return !1}),Pe.registerFlag("WEBGL_PACK",function(){return Pe.getBool("HAS_WEBGL")}),Pe.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_PACK_CLIP",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return !1}),Pe.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_PACK_REDUCE",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_LAZILY_UNPACK",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_CONV_IM2COL",function(){return Pe.getBool("WEBGL_PACK")}),Pe.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Se(Pe.getNumber("WEBGL_VERSION"))}),Pe.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Ae(Pe.getNumber("WEBGL_VERSION"))}),Pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var t=Pe.getNumber("WEBGL_VERSION");return 0===t?0:De(t)}),Pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return Pe.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(t=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))));var t;}),Pe.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Fe(Pe.getNumber("WEBGL_VERSION"))}),Pe.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return !Pe.getBool("WEBGL_FORCE_F16_TEXTURES")&&Pe.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),Pe.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return _e(Pe.getNumber("WEBGL_VERSION"))}),Pe.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Me(Pe.getNumber("WEBGL_VERSION"))}),Pe.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return Pe.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),pt=Ve;var Cn=wn({complex_:function(t,e){var n=cn(t,"real","complex"),r=cn(e,"imag","complex");return y(n.shape,r.shape,"real and imag shapes, "+n.shape+" and "+r.shape+", must match in call to tf.complex()."),Nt.runKernelFunc(function(t){return t.complex(n,r)},{$real:n,$imag:r})}}),En=wn({real_:function(t){var e=cn(t,"input","real");return Nt.runKernelFunc(function(t){return t.real(e)},{$input:e})}}),Rn=wn({imag_:function(t){var e=cn(t,"input","imag");return Nt.runKernelFunc(function(t){return t.imag(e)},{$input:e})}});function In(t,e,n){return kn(t,e,un(t,n),n)}function kn(t,e,n,r){if(null==r&&(r=z(t)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!B(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){Q(e);var o=w(e),i=w(n);g(o===i,function(){return "Based on the provided shape, ["+e+"], the tensor should have "+o+" values but has "+i});for(var u=0;u<n.length;++u){var s=n[u],c=u!==n.length-1||s!==w(e.slice(u));g(n[u]===e[u]||!c,function(){return "Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+e+"). "});}}return B(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==r?K(t,r,a().getBool("DEBUG")):b(t,[],!0),Nt.makeTensor(t,e,r)}function Sn(t,e){if((B(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&B(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return kn(t,[],[],e)}function An(t,e){x(t);var n=un(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return kn(t,null,n,e)}function Dn(t,e,n){if(x(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");var r=un(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return kn(t,e,r,n)}function Tn(t,e,n){if(x(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");var r=un(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return kn(t,e,r,n)}function Nn(t,e,n){if(x(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");var r=un(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return kn(t,e,r,n)}function Fn(t,e,n){if(x(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");var r=un(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return kn(t,e,r,n)}function _n(t,e,n){if(x(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");var r=un(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return kn(t,e=e||r,r,n)}function On(t,e,n,r){return void 0===e&&(e=!0),Nt.makeVariable(t,e,n,r)}function Mn(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=Mn(t,"float32"),r=Bn(t,"float32");return Cn(n,r)}var o=X(w(t),e);return Nt.makeTensor(o,t,e)}function Bn(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=Bn(t,"float32"),r=Bn(t,"float32");return Cn(n,r)}var o=$(w(t),e);return Nt.makeTensor(o,t,e)}function Pn(t,e,n){return Nt.runKernelFunc(function(r){return r.fill(t,e,n)},{})}function Ln(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");return Nt.runKernelFunc(function(r){return r.linspace(t,e,n)},{})}function Wn(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r="float32"),0===n)throw new Error("Cannot have a step of zero");if(t===e||t<e&&n<0||e<t&&n>1)return Bn([0],r);var o=$(Math.abs(Math.ceil((e-t)/n)),r);e<t&&1===n&&(n=-1),o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return An(o,r)}var Un=wn({onesLike_:function(t){var e=cn(t,"x","onesLike");if("complex64"===e.dtype){var n=Un(En(e)),r=Vn(Rn(e));return Cn(n,r)}return Nt.runKernelFunc(function(t){return t.onesLike(e)},{$x:e},function(t,e){return {$x:function(){return Vn(t)}}})}}),Vn=wn({zerosLike_:function(t){var e=cn(t,"x","zerosLike");return Nt.runKernelFunc(function(t){return t.zerosLike(e)},{$x:e},function(t,e){return {$x:function(){return Vn(t)}}})}});var zn=wn({concat_:function(t,e){void 0===e&&(e=0),g(t.length>=1,function(){return "Pass at least one tensor to concat"});var n=ln(t,"tensors","concat");"complex64"===n[0].dtype&&n.forEach(function(t){if("complex64"!==t.dtype)throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype "+t.dtype+". ")}),e=D(e,n[0].shape)[0];var r=bn(n.map(function(t){return t.shape}),e);if(0===w(r))return In([],r);if(1===(n=n.filter(function(t){return t.size>0})).length)return n[0];var o=n.map(function(t){return t.shape});xn(o,e);var a=n,i={axis:e};return Nt.runKernelFunc(function(t){return t.concat(n,e)},a,function(t){var n=o.map(function(t){return t[e]});return jn(t,n,e).map(function(t){return function(){return t}})},"Concat",i)}}),Gn=wn({concat1d_:function(t){return zn(t,0)}}),Hn=wn({concat2d_:function(t,e){return zn(t,e)}}),qn=wn({concat3d_:function(t,e){return zn(t,e)}}),Kn=wn({concat4d_:function(t,e){return zn(t,e)}}),jn=wn({split_:function(t,e,n){void 0===n&&(n=0);var r,o=cn(t,"x","split");return n=D(n,o.shape)[0],"number"==typeof e?(g(o.shape[n]%e==0,function(){return "Number of splits must evenly divide the axis."}),r=new Array(e).fill(o.shape[n]/e)):(g(o.shape[n]===e.reduce(function(t,e){return t+e}),function(){return "The sum of sizes must match the size of the axis dimension."}),r=e),Nt.runKernelFunc(function(t){return t.split(o,r,n)},{$x:o},function(t){return {$x:function(){return zn(t,n)}}})}});function Xn(t,e){return t(e={exports:{}},e.exports),e.exports}var $n=Xn(function(t){!function(t,e,n){function r(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e);}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null;}function o(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function a(t,e){var n=new r(t),a=e&&e.state,i=n.next;return i.int32=function(){return 4294967296*n.next()|0},i.double=function(){return i()+1.1102230246251565e-16*(2097152*i()|0)},i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.alea=a;}(0,t,!1);}),Yn=Xn(function(t){!function(t,e,n){function r(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next();}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a;}(0,t,!1);}),Qn=Xn(function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next();}function o(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a;}(0,t,!1);}),Jn=Xn(function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.x,o=e.i;return t=r[o],n=(t^=t>>>7)^t<<24,n^=(t=r[o+1&7])^t>>>10,n^=(t=r[o+3&7])^t>>>3,n^=(t=r[o+4&7])^t<<7,t=r[o+7&7],n^=(t^=t<<13)^t<<9,r[o]=n,e.i=o+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next();}(e,t);}function o(t,e){return e.x=t.x.slice(),e.i=t.i,e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.x&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a;}(0,t,!1);}),Zn=Xn(function(t){!function(t,e,n){function r(t){var e=this;e.next=function(){var t,n,r=e.w,o=e.X,a=e.i;return e.w=r=r+1640531527|0,n=o[a+34&127],t=o[a=a+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=o[a]=n^t,e.i=a,n+(r^r>>>16)|0},function(t,e){var n,r,o,a,i,u=[],s=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,s=Math.max(s,e.length)),o=0,a=-32;a<s;++a)e&&(r^=e.charCodeAt((a+32)%e.length)),0===a&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(i=i+1640531527|0,o=0==(n=u[127&a]^=r+i)?o+1:0);for(o>=128&&(u[127&(e&&e.length||0)]=-1),o=127,a=512;a>0;--a)r=u[o+34&127],n=u[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,u[o]=r^n;t.w=i,t.X=u,t.i=o;}(e,t);}function o(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function a(t,e){null==t&&(t=+new Date);var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&(a.X&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a;}(0,t,!1);}),tr=Xn(function(t){!function(t,e,n){function r(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,o=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^o,e.a=o-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next();}function o(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function a(t,e){var n=new r(t),a=e&&e.state,i=function(){return (n.next()>>>0)/4294967296};return i.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===t);return t},i.int32=n.next,i.quick=i,a&&("object"==typeof a&&o(a,n),i.state=function(){return o(n,{})}),i}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a;}(0,t,!1);}),er=Xn(function(t){!function(e,n){var r,o=this,a=256,i=6,u="random",s=n.pow(a,i),c=n.pow(2,52),l=2*c,h=a-1;function f(t,h,f){var g=[],y=v(function t(e,n){var r,o=[],a=typeof e;if(n&&"object"==a)for(r in e)try{o.push(t(e[r],n-1));}catch(t){}return o.length?o:"string"==a?e:e+"\0"}((h=1==h?{entropy:!0}:h||{}).entropy?[t,m(e)]:null==t?function(){try{var t;return r&&(t=r.randomBytes)?t=t(a):(t=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(t)),m(t)}catch(t){var n=o.navigator,i=n&&n.plugins;return [+new Date,o,i,o.screen,m(e)]}}():t,3),g),x=new p(g),b=function(){for(var t=x.g(i),e=s,n=0;t<c;)t=(t+n)*a,e*=a,n=x.g(1);for(;t>=l;)t/=2,e/=2,n>>>=1;return (t+n)/e};return b.int32=function(){return 0|x.g(4)},b.quick=function(){return x.g(4)/4294967296},b.double=b,v(m(x.S),e),(h.pass||f||function(t,e,r,o){return o&&(o.S&&d(o,x),t.state=function(){return d(x,{})}),r?(n[u]=t,e):t})(b,y,"global"in h?h.global:this==n,h.state)}function p(t){var e,n=t.length,r=this,o=0,i=r.i=r.j=0,u=r.S=[];for(n||(t=[n++]);o<a;)u[o]=o++;for(o=0;o<a;o++)u[o]=u[i=h&i+t[o%n]+(e=u[o])],u[i]=e;(r.g=function(t){for(var e,n=0,o=r.i,i=r.j,u=r.S;t--;)e=u[o=h&o+1],n=n*a+u[h&(u[o]=u[i=h&i+e])+(u[i]=e)];return r.i=o,r.j=i,n})(a);}function d(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function v(t,e){for(var n,r=t+"",o=0;o<r.length;)e[h&o]=h&(n^=19*e[h&o])+r.charCodeAt(o++);return m(e)}function m(t){return String.fromCharCode.apply(0,t)}if(n["seed"+u]=f,v(n.random(),e),t.exports){t.exports=f;try{r=require("crypto");}catch(t){}}}([],Math);});er.alea=$n,er.xor128=Yn,er.xorwow=Qn,er.xorshift7=Jn,er.xor4096=Zn,er.tychei=tr;var nr=er.alea,rr=function(){function t(t,e,n,r,o){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=o||Math.random();this.random=nr(a.toString());}return t.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,r=!1;!r;){var o=void 0,a=void 0,i=void 0;do{i=(o=2*this.random()-1)*o+(a=2*this.random()-1)*a;}while(i>=1||0===i);var u=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*o*u,n=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(r=!0);}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},t.prototype.convertValue=function(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)},t.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},t}(),or=function(){function t(t,e,n,r){this.alpha=t,this.beta=1/e,this.dtype=n;var o=r||Math.random();this.randu=nr(o.toString()),this.randn=new rr(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d);}return t.prototype.nextValue=function(){for(var t,e,n,r,o,a;;){do{r=this.randn.nextValue(),a=1+this.c*r;}while(a<=0);if(a*=a*a,e=1-.331*(t=r*r)*t,n=.5*t+this.d*(1-a+Math.log(a)),(o=this.randu())<e||Math.log(o)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},t.prototype.convertValue=function(t){return "float32"===this.dtype?t:Math.round(t)},t}(),ar=function(){function t(t,e,n,r){var o=this;if(void 0===t&&(t=0),void 0===e&&(e=1),this.canReturnFloat=function(){return null==o.dtype||"float32"===o.dtype},this.min=t,this.range=e-t,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=nr(r);}return t.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},t.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},t}();function ir(t,e,n){return void 0===e&&(e="float32"),e=e||"float32",Q(t),new lt(t,e,n)}function ur(t,e){void 0===e&&(e=!1),console.log(t.toString(e));}var sr=wn({batchToSpaceND_:function(t,e,n){var r=cn(t,"x","batchToSpaceND"),o=e.reduce(function(t,e){return t*e});return g(r.rank>=1+e.length,function(){return "input rank is "+r.rank+" but should be > than blockShape.length "+e.length}),g(n.length===e.length,function(){return "crops.length is "+n.length+" but should be equal to blockShape.length  "+e.length}),g(r.shape[0]%o==0,function(){return "input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+e.join(" * ")+" === "+o}),Nt.runKernelFunc(function(t){return t.batchToSpaceND(r,e,n)},{$x:r},function(t){return {$x:function(){return t.spaceToBatchND(e,n)}}})}}),cr=wn({broadcastTo_:function(t,e){var n=cn(t,"broadcastTo","x"),r=n.shape;if(e.some(function(t){return !(t>0)||t%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+e+"].");if(e.length<n.rank)throw new Error("broadcastTo(): shape.length="+e.length+" < input.rank="+n.rank+".");if(e.length>n.rank){for(var o=n.shape.slice();o.length<e.length;)o.unshift(1);n=n.reshape(o);}for(var a=Array.from(e),i=e.length-1;i>=0;i--)if(n.shape[i]===e[i])a[i]=1;else if(1!==n.shape[i])throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+e+"].");var u=a.map(function(t,e){return t>1?e:-1}).filter(function(t){return t>=0});return 0===u.length?n.clone():Nt.runKernelFunc(function(t){return t.tile(n,a)},{input:n},function(t){return {input:function(){return t.sum(u,!0)}}})}}),lr=wn({cast_:function(t,e){var n=cn(t,"x","cast");if(!O(e))throw new Error("Failed to cast to unknown dtype "+e);if("string"===e&&"string"!==n.dtype||"string"!==e&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");var r={dtype:e};return Nt.runKernelFunc(function(t){return t.cast(n,e)},{x:n},function(t){return {x:function(){return t.clone()}}},"Cast",r)}}),hr=wn({clone_:function(t){var e=cn(t,"x","clone",null);return Nt.runKernelFunc(function(){return Nt.makeTensorFromDataId(e.dataId,e.shape,e.dtype)},{$x:e},function(t){return {$x:function(){return t.toFloat()}}})}}),fr=wn({cumsum_:function(t,e,n,r){void 0===e&&(e=0),void 0===n&&(n=!1),void 0===r&&(r=!1);var o=cn(t,"x","cumsum"),a=mn([e|=0],o.rank),i=o;null!=a&&(i=o.transpose(a));var u=yn(1,o.rank)[0],s=Nt.runKernelFunc(function(t){return t.cumsum(i,u,n,r)},{permutedX:i},function(t){return {permutedX:function(){return t.cumsum(e,n,!r)}}});return null!=a&&(s=s.transpose(a)),s}}),pr=wn({depthToSpace_:function(t,e,n){void 0===n&&(n="NHWC");var r=cn(t,"x","depthToSpace"),o="NHWC"===n?r.shape[1]:r.shape[2],a="NHWC"===n?r.shape[2]:r.shape[3],i="NHWC"===n?r.shape[3]:r.shape[1];return g(o*e>=0,function(){return "Negative dimension size caused by overflow when multiplying\n      "+o+" and "+e+"  for depthToSpace with input shape\n      "+r.shape}),g(a*e>=0,function(){return "Negative dimension size caused by overflow when multiplying\n      "+a+" and "+e+" for depthToSpace with input shape\n          "+r.shape}),g(i%(e*e)==0,function(){return "Dimension size must be evenly divisible by "+e*e+" but is "+i+" for depthToSpace with input shape "+r.shape}),Nt.runKernelFunc(function(t){return t.depthToSpace(r,e,n)},{$x:r})}}),dr=wn({expandDims_:function(t,e){void 0===e&&(e=0);var n=cn(t,"x","expandDims",null);g(e<=n.rank,function(){return "Axis must be <= rank of the tensor"});var r=n.shape.slice();return e<0&&(g(-(n.rank+1)<=e,function(){return "Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"}),e=n.rank+e+1),r.splice(e,0,1),Sr(n,r)}}),vr=wn({eye_:function(t,e,n,r){void 0===r&&(r="float32"),null==e&&(e=t);for(var o=ir([t,e],r),a=t<=e?t:e,i=0;i<a;++i)o.set(1,i,i);var u=o.toTensor().as2D(t,e);if(null==n)return u;if(1===n.length)return Nr(dr(u,0),[n[0],1,1]);if(2===n.length)return Nr(dr(dr(u,0),0),[n[0],n[1],1,1]);if(3===n.length)return Nr(dr(dr(dr(u,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}}),mr=wn({multinomial_:function(t,e,n,r){void 0===r&&(r=!1);var o=cn(t,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);n=n||Math.random();var u=1===i?o.as2D(1,-1):o,s=Nt.runKernelFunc(function(t){return t.multinomial(u,r,e,n)},{logits2D:u});return 1===i?s.as1D():s}}),gr=wn({oneHot_:function(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r=0),e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);var o=cn(t,"indices","oneHot","int32"),a=o.shape.concat([e]);return o=o.flatten(),Nt.runKernelFunc(function(t){return t.oneHot(o,e,n,r)},{$indices:o},function(t){return {$indices:function(){return Bn(o.shape,"float32")}}}).reshape(a)}}),yr=wn({pad_:function(t,e,n){void 0===n&&(n=0);var r=cn(t,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:e,constantValue:n};return Nt.runKernelFunc(function(t){return t.pad(r,e,n)},{x:r},function(t){var n=e.map(function(t){return t[0]});return {x:function(){return t.slice(n,r.shape)}}},"PadV2",o)}}),xr=wn({pad1d_:function(t,e,n){return void 0===n&&(n=0),g(2===e.length,function(){return "Invalid number of paddings. Must be length of 2."}),yr(t,[e],n)}}),br=wn({pad2d_:function(t,e,n){return void 0===n&&(n=0),g(2===e.length&&2===e[0].length&&2===e[1].length,function(){return "Invalid number of paddings. Must be length of 2 each."}),yr(t,e,n)}}),wr=wn({pad3d_:function(t,e,n){return void 0===n&&(n=0),g(3===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length,function(){return "Invalid number of paddings. Must be length of 2 each."}),yr(t,e,n)}}),Cr=wn({pad4d_:function(t,e,n){return void 0===n&&(n=0),g(4===e.length&&2===e[0].length&&2===e[1].length&&2===e[2].length&&2===e[3].length,function(){return "Invalid number of paddings. Must be length of 2 each."}),yr(t,e,n)}}),Er=wn({rand_:function(t,e,n){var r=w(t),o=null;if(null==n||"float32"===n)o=new Float32Array(r);else if("int32"===n)o=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);o=new Uint8Array(r);}for(var a=0;a<r;a++)o[a]=e();return Nt.makeTensor(o,t,n)}}),Rr=wn({randomNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new rr(e,n,r,!1,o),i=ir(t,r),u=0;u<i.values.length;u++)i.values[u]=a.nextValue();return i.toTensor()}}),Ir=wn({randomGamma_:function(t,e,n,r,o){if(void 0===n&&(n=1),void 0===r&&(r="float32"),null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error("Unsupported data type "+r);for(var a=new or(e,n,r,o),i=ir(t,r),u=0;u<i.values.length;u++)i.values[u]=a.nextValue();return i.toTensor()}}),kr=wn({randomUniform_:function(t,e,n,r,o){void 0===e&&(e=0),void 0===n&&(n=1),void 0===r&&(r="float32");for(var a=ir(t,r),i=new ar(e,n,null,o),u=0;u<a.values.length;u++)a.values[u]=i.nextValue();return a.toTensor()}}),Sr=wn({reshape_:function(t,e){var n=cn(t,"x","reshape",null);e=A(e,n.size),g(n.size===w(e),function(){return "new shape and old shape must have the same number of elements."});var r={shape:e};return Nt.runKernelFunc(function(t){return t.reshape(n,e)},{x:n},function(t){return {x:function(){return t.reshape(n.shape)}}},"Reshape",r)}}),Ar=wn({spaceToBatchND_:function(t,e,n){var r=cn(t,"x","spaceToBatchND");return g(r.rank>=1+e.length,function(){return "input rank "+r.rank+" should be > than [blockShape] "+e.length}),g(n.length===e.length,function(){return "paddings.shape[0] "+n.length+" must be equal to [blockShape] "+e.length}),g(r.shape.reduce(function(t,r,o){return o>0&&o<=e.length?t&&(r+n[o-1][0]+n[o-1][1])%e[o-1]==0:t},!0),function(){return "input spatial dimensions "+r.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+e.toString()}),Nt.runKernelFunc(function(t){return t.spaceToBatchND(r,e,n)},{$x:r},function(t){return {$x:function(){return t.batchToSpaceND(e,n)}}})}}),Dr=wn({squeeze_:function(t,e){var n=cn(t,"x","squeeze");return Sr(n,T(n.shape,e).newShape)}}),Tr=wn({stack_:function(t,e){void 0===e&&(e=0);var n=ln(t,"tensors","stack");if(g(n.length>=1,function(){return "Pass at least one tensor to tf.stack"}),1===n.length)return n[0].expandDims(e);var r=n[0].rank,o=n[0].shape,a=n[0].dtype;g(e<=r,function(){return "Axis must be <= rank of the tensor"}),n.forEach(function(t){y(o,t.shape,"All tensors passed to stack must have matching shapes");}),n.forEach(function(t){g(a===t.dtype,function(){return "All tensors passed to stack must have matching dtypes"});});var i=n.map(function(t){return t.expandDims(e)});return zn(i,e)}}),Nr=wn({tile_:function(t,e){var n=cn(t,"x","tile",null);return g(n.rank===e.length,function(){return "Error in transpose: rank of input "+n.rank+" must match length of reps "+e+"."}),Nt.runKernelFunc(function(t,r){var o=t.tile(n,e);return r([n]),o},{$x:n},function(t,n){var r=n[0];return {$x:function(){var n=Vn(r);if(1===r.rank)for(var o=0;o<e[0];++o)n=n.add(t.slice([o*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(o=0;o<e[0];++o)for(var a=0;a<e[1];++a)n=n.add(t.slice([o*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(o=0;o<e[0];++o)for(a=0;a<e[1];++a)for(var i=0;i<e[2];++i)n=n.add(t.slice([o*r.shape[0],a*r.shape[1],i*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(4!==r.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+r.rank+" tensors yet.");for(o=0;o<e[0];++o)for(a=0;a<e[1];++a)for(i=0;i<e[2];++i)for(var u=0;u<e[3];++u)n=n.add(t.slice([o*r.shape[0],a*r.shape[1],i*r.shape[2],u*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));}return n}}})}}),Fr=wn({truncatedNormal_:function(t,e,n,r,o){if(void 0===e&&(e=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new rr(e,n,r,!0,o),i=ir(t,r),u=0;u<i.values.length;u++)i.values[u]=a.nextValue();return i.toTensor()}}),_r=wn({unstack_:function(t,e){void 0===e&&(e=0),e=e||0;var n=cn(t,"x","unstack");return g(e>=-n.shape.length&&e<n.shape.length,function(){return "Axis = "+e+" is not in [-"+n.shape.length+", "+n.shape.length+")"}),e<0&&(e+=n.shape.length),Nt.runKernelFunc(function(t){return t.unstack(n,e)},{$x:n},function(t){return {$x:function(){return Tr(t,e)}}})}}),Or=function(t,e){return n(this,void 0,void 0,function(){var n,o,a,i,u,s,c,l,h,f;return r(this,function(r){switch(r.label){case 0:return n=cn(t,"x","setdiff1d"),o=cn(e,"y","setdiff1d"),g(n.dtype===o.dtype,function(){return "x and y should have the same dtype, but got x ("+n.dtype+") and y ("+o.dtype+")."}),g(1===n.rank,function(){return "x should be 1D tensor, but got x ("+n.shape+")."}),g(1===o.rank,function(){return "y should be 1D tensor, but got y ("+o.shape+")."}),[4,n.data()];case 1:return a=r.sent(),[4,o.data()];case 2:for(i=r.sent(),u=new Set(i),s=0,h=0;h<a.length;h++)u.has(a[h])||s++;for(c=new lt([s],n.dtype),l=new lt([s],"int32"),h=0,f=0;h<a.length;h++)u.has(a[h])||(c.values[f]=a[h],l.values[f]=h,f++);return [2,[c.toTensor(),l.toTensor()]]}})})};function Mr(t,e,n,r){void 0===r&&(r=!0);var o=[];if(r)(o=o.concat(e.slice(0))).push(t[0]/n),o=o.concat(t.slice(1));else{o=o.concat(t[0]);for(var a=e.length,i=0;i<a;++i)o=o.concat([t[i+1]/e[i],e[i]]);o=o.concat(t.slice(a+1));}return o}function Br(t,e,n){void 0===n&&(n=!0);var r=[];if(n){r.push(e);for(var o=e+1;o<t;++o)o<=2*e?(r.push(o),r.push(o-(e+1))):r.push(o);}else{var a=[],i=[];for(o=1;o<t;++o)o>=2*e+1||o%2==1?i.push(o):a.push(o);r.push.apply(r,a),r.push(0),r.push.apply(r,i);}return r}function Pr(t,e,n,r){void 0===r&&(r=!0);var o=[];r?o.push(t[0]/n):o.push(t[0]*n);for(var a=1;a<t.length;++a)a<=e.length?r?o.push(e[a-1]*t[a]):o.push(t[a]/e[a-1]):o.push(t[a]);return o}function Lr(t,e){for(var n=[0],r=0;r<e;++r)n.push(t[r][0]);return n}function Wr(t,e,n){for(var r=t.slice(0,1),o=0;o<n;++o)r.push(t[o+1]-e[o][0]-e[o][1]);return r}function Ur(t,e){if(t.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+t.rank+".");if(e.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if("int32"!==e.dtype)throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+e.dtype+".");if(e.shape[e.rank-1]>t.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+e.shape[e.rank-1]+" vs. "+t.rank);if(0===t.size)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+t.shape+".");for(var n=e.shape,r=n[n.length-1],o=1,a=0;a<n.length-1;++a)o*=n[a];var i=t.shape,u=n.slice();u.pop();var s=1;for(a=r;a<t.rank;++a)s*=i[a],u.push(i[a]);var c=q(t.shape).map(function(t){return t/s}).concat([1]).slice(0,r);return [u,o,s,c]}var Vr=30;function zr(t){return t<=Vr?t:H(t,Math.floor(Math.sqrt(t)))}function Gr(t,e,n){if(e.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(t.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+t.rank+".");if("int32"!==e.dtype)throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(0===n.length){if(0===e.size)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(0===t.size)throw new Error("Updates specified for empty output. updates shape: "+t.shape)}!function(t,e,n){var r=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+", indices.shape: "+e.shape+", shape: "+t+", sliceDim: "+r+", and batchDim: "+o+".";if(n.rank<o)throw new Error(a+" update.rank < "+o+". ");if(t.length<r+(n.rank-o))throw new Error(a+" Output shape length < "+(r+(n.rank-o)));if(n.rank!==o+t.length-r)throw new Error(a+" update.rank != "+(o+t.length-r));for(var i=0;i<o;++i)if(n.shape[i]!==e.shape[i])throw new Error(a+" updates.shape["+i+"] ("+n.shape[i]+") != indices.shape["+i+"] ("+e.shape[i]+").");for(i=0;i<n.rank-o;++i)if(n.shape[i+o]!==t[i+r])throw new Error(a+" updates.shape["+(i+o)+"] ("+n.shape[i+o]+") != shape["+(i+o)+"] ("+t[i+o]+")")}(n,e,t);}function Hr(t,e,n){for(var r=e.rank>1?e.shape[e.rank-1]:1,o=n.length,a=1,i=r;i<o;++i)a*=n[i];var u=r<1?1:r;return {sliceRank:r,numUpdates:e.size/u,sliceSize:a,strides:q(n.slice(0,r)).concat([1]),outputSize:w(n)}}function qr(t,e,n){g(t.rank===e.length,function(){return "Error in slice"+t.rank+"D: Length of begin "+e+" must match the rank of the array ("+t.rank+")."}),g(t.rank===n.length,function(){return "Error in slice"+t.rank+"D: Length of size "+n+" must match the rank of the array ("+t.rank+")."});for(var r=function(r){g(e[r]+n[r]<=t.shape[r],function(){return "Error in slice"+t.rank+"D: begin["+r+"] + size["+r+"] ("+(e[r]+n[r])+") would overflow input.shape["+r+"] ("+t.shape[r]+")"});},o=0;o<t.rank;++o)r(o);}function Kr(t){for(var e=[],n=0;t>0;)1&t&&e.push(n),t/=2,n++;return e}function jr(t,e,n){for(var r=[],o=0;o<t.length;o++)r[o]=Math.ceil((e[o]-t[o])/n[o]);return r}function Xr(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var u=r[o];return a<0&&(a+=u),a=d(0,a,u-1)}function $r(t,e,n,r,o){var a=e[o],i=n[o]||1;(t&1<<o||null==a)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var u=r[o];return a<0&&(a+=u),a=i>0?d(0,a,u):d(-1,a,u-1)}function Yr(t,e,n){for(var r=n.length,o=0;o<n.length;o++)if(n[o]>1){r=o;break}for(o=r+1;o<n.length;o++)if(e[o]>0||n[o]!==t[o])return !1;return !0}function Qr(t,e){for(var n=t.length>0?t[t.length-1]:1,r=0;r<t.length-1;r++)n+=t[r]*e[r];return n}var Jr=Object.freeze({assertParamsValid:qr,maskToAxes:Kr,computeOutShape:jr,startForAxis:Xr,stopForAxis:$r,isSliceContinous:Yr,computeFlatOffset:Qr});function Zr(t){return g(G(t),function(){return "The f passed in grad(f) must be a function"}),function(e,n){var r=cn(e,"x","tf.grad",null),o=null!=n?cn(n,"dy","tf.grad"):null;return Nt.tidy(function(){var e=Nt.gradients(function(){return t(r)},[r],o),n=e.value,a=e.grads;return null!=o&&y(n.shape,o.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),ao(a),a[0]})}}function to(t){return g(G(t),function(){return "The f passed in grads(f) must be a function"}),function(e,n){g(Array.isArray(e),function(){return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"});var r=ln(e,"args","tf.grads",null),o=null!=n?cn(n,"dy","tf.grads"):null;return Nt.tidy(function(){var e=Nt.gradients(function(){return t.apply(void 0,r)},r,o),n=e.value,a=e.grads;return null!=o&&y(n.shape,o.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),ao(a),a})}}function eo(t){return g(G(t),function(){return "The f passed in valueAndGrad(f) must be a function"}),function(e,n){g(e instanceof dt,function(){return "The x passed in valueAndGrad(f)(x) must be a tensor"}),g(null==n||n instanceof dt,function(){return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor"});var r=Nt.gradients(function(){return t(e)},[e],n),o=r.grads,a=r.value;return ao(o),{grad:o[0],value:a}}}function no(t){return g(G(t),function(){return "The f passed in valueAndGrads(f) must be a function"}),function(e,n){g(Array.isArray(e)&&e.every(function(t){return t instanceof dt}),function(){return "The args passed in valueAndGrads(f)(args) must be array of tensors"}),g(null==n||n instanceof dt,function(){return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor"});var r=Nt.gradients(function(){return t.apply(void 0,e)},e,n);return null!=n&&y(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),ao(r.grads),r}}function ro(t,e){g(G(t),function(){return "The f passed in variableGrads(f) must be a function"}),g(null==e||Array.isArray(e)&&e.every(function(t){return t instanceof bt}),function(){return "The varList passed in variableGrads(f, varList) must be an array of variables"});var n=null!=e;if(!n)for(var r in e=[],Nt.registeredVariables)e.push(Nt.registeredVariables[r]);var o=n?e.filter(function(t){return !t.trainable}):null,a=e.length;g((e=e.filter(function(t){return t.trainable})).length>0,function(){return "variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=Nt.gradients(t,e,null,!0),u=i.value,s=i.grads;g(s.some(function(t){return null!=t}),function(){return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),g(0===u.rank,function(){return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+u.rank+" tensor"});var c={};return e.forEach(function(t,e){null!=s[e]&&(c[t.name]=s[e]);}),null!=o&&o.forEach(function(t){return c[t.name]=null}),{value:u,grads:c}}function oo(t){return Nt.customGrad(t)}function ao(t){if(t.filter(function(t){return null==t}).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}var io=wn({softmax_:function(t,e){void 0===e&&(e=-1);var n=cn(t,"logits","softmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+e);return oo(function(t,n){var r=t.logSumExp([e],!0),o=t.toFloat().sub(r).exp();return n([o]),{value:o,gradFunc:function(t,n){var r=n[0],o=t.mul(r);return o.sub(o.sum([e],!0).mul(r))}}})(n)}}),uo=wn({logSoftmax_:function(t,e){void 0===e&&(e=-1);var n=cn(t,"logits","logSoftmax");if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and axis was "+e);return oo(function(t,n){var r=t.max(e,!0),o=t.sub(r),a=o.toFloat().sub(o.exp().sum(e,!0).log());return n([a]),{value:a,gradFunc:function(t,n){var r=n[0].exp();return t.sub(t.sum(e,!0).mul(r))}}})(n)}}),so=function(){function t(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0;}return t.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},t.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e);},t.prototype.has=function(t){return this.data.has(t)},t.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},t.prototype.numDataIds=function(){return this.dataIdsCount},t}(),co=function(){function t(){}return t.prototype.time=function(t){return lo("time")},t.prototype.read=function(t){return lo("read")},t.prototype.readSync=function(t){return lo("readSync")},t.prototype.numDataIds=function(){return lo("numDataIds")},t.prototype.disposeData=function(t){return lo("disposeData")},t.prototype.write=function(t,e,n){return lo("write")},t.prototype.move=function(t,e,n,r){return lo("move")},t.prototype.memory=function(){return lo("memory")},t.prototype.floatPrecision=function(){return lo("floatPrecision")},t.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},t.prototype.batchMatMul=function(t,e,n,r){return lo("batchMatMul")},t.prototype.fusedBatchMatMul=function(t){t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights;return lo("fusedBatchMatMul")},t.prototype.slice=function(t,e,n){return lo("slice")},t.prototype.stridedSlice=function(t,e,n,r){return lo("stridedSlice")},t.prototype.unstack=function(t,e){return lo("unstack")},t.prototype.reverse=function(t,e){return lo("reverse")},t.prototype.concat=function(t,e){return lo("concat")},t.prototype.neg=function(t){return lo("neg")},t.prototype.add=function(t,e){return lo("add")},t.prototype.addN=function(t){return lo("addN")},t.prototype.subtract=function(t,e){return lo("subtract")},t.prototype.multiply=function(t,e){return lo("multiply")},t.prototype.realDivide=function(t,e){return lo("realDivide")},t.prototype.floorDiv=function(t,e){return lo("floorDiv")},t.prototype.sum=function(t,e){return lo("sum")},t.prototype.prod=function(t,e){return lo("prod")},t.prototype.unsortedSegmentSum=function(t,e,n){return lo("unsortedSegmentSum")},t.prototype.argMin=function(t,e){return lo("argMin")},t.prototype.argMax=function(t,e){return lo("argMax")},t.prototype.equal=function(t,e){return lo("equal")},t.prototype.notEqual=function(t,e){return lo("notEqual")},t.prototype.less=function(t,e){return lo("less")},t.prototype.lessEqual=function(t,e){return lo("lessEqual")},t.prototype.greater=function(t,e){return lo("greater")},t.prototype.greaterEqual=function(t,e){return lo("greaterEqual")},t.prototype.logicalNot=function(t){return lo("logicalNot")},t.prototype.logicalAnd=function(t,e){return lo("logicalAnd")},t.prototype.logicalOr=function(t,e){return lo("logicalOr")},t.prototype.where=function(t){return lo("where")},t.prototype.select=function(t,e,n){return lo("select")},t.prototype.topk=function(t,e,n){return lo("topk")},t.prototype.min=function(t,e){return lo("min")},t.prototype.minimum=function(t,e){return lo("minimum")},t.prototype.mod=function(t,e){return lo("mod")},t.prototype.max=function(t,e){return lo("max")},t.prototype.maximum=function(t,e){return lo("maximum")},t.prototype.all=function(t,e){return lo("all")},t.prototype.any=function(t,e){return lo("any")},t.prototype.squaredDifference=function(t,e){return lo("squaredDifference")},t.prototype.ceil=function(t){return lo("ceil")},t.prototype.floor=function(t){return lo("floor")},t.prototype.round=function(t){return lo("round")},t.prototype.sign=function(t){return lo("sign")},t.prototype.isNaN=function(t){return lo("isNaN")},t.prototype.isInf=function(t){return lo("isInf")},t.prototype.isFinite=function(t){return lo("isFinite")},t.prototype.pow=function(t,e){return lo("pow")},t.prototype.exp=function(t){return lo("exp")},t.prototype.expm1=function(t){return lo("expm1")},t.prototype.log=function(t){return lo("log")},t.prototype.log1p=function(t){return lo("log1p")},t.prototype.sqrt=function(t){return lo("sqrt")},t.prototype.rsqrt=function(t){return lo("rsqrt")},t.prototype.square=function(t){return lo("square")},t.prototype.reciprocal=function(t){return lo("reciprocal")},t.prototype.relu=function(t){return lo("relu")},t.prototype.relu6=function(t){return lo("relu6")},t.prototype.prelu=function(t,e){return lo("prelu")},t.prototype.elu=function(t){return lo("elu")},t.prototype.eluDer=function(t,e){return lo("eluDer")},t.prototype.selu=function(t){return lo("selu")},t.prototype.int=function(t){return lo("int")},t.prototype.clip=function(t,e,n){return lo("clip")},t.prototype.abs=function(t){return lo("abs")},t.prototype.complexAbs=function(t){return lo("complexAbs")},t.prototype.sigmoid=function(t){return lo("sigmoid")},t.prototype.softplus=function(t){return lo("softplus")},t.prototype.sin=function(t){return lo("sin")},t.prototype.cos=function(t){return lo("cos")},t.prototype.tan=function(t){return lo("tan")},t.prototype.asin=function(t){return lo("asin")},t.prototype.acos=function(t){return lo("acos")},t.prototype.atan=function(t){return lo("atan")},t.prototype.atan2=function(t,e){return lo("atan2")},t.prototype.sinh=function(t){return lo("sinh")},t.prototype.cosh=function(t){return lo("cosh")},t.prototype.tanh=function(t){return lo("tanh")},t.prototype.asinh=function(t){return lo("asinh")},t.prototype.acosh=function(t){return lo("acosh")},t.prototype.atanh=function(t){return lo("atanh")},t.prototype.erf=function(t){return lo("erf")},t.prototype.step=function(t,e){return lo("step")},t.prototype.fusedConv2d=function(t){t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights;return lo("fusedConv2d")},t.prototype.conv2d=function(t,e,n){return lo("conv2d")},t.prototype.conv2dDerInput=function(t,e,n){return lo("conv2dDerInput")},t.prototype.conv2dDerFilter=function(t,e,n){return lo("conv2dDerFilter")},t.prototype.fusedDepthwiseConv2D=function(t){t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights;return lo("fusedDepthwiseConv2D")},t.prototype.depthwiseConv2D=function(t,e,n){return lo("depthwiseConv2D")},t.prototype.depthwiseConv2DDerInput=function(t,e,n){return lo("depthwiseConv2DDerInput")},t.prototype.depthwiseConv2DDerFilter=function(t,e,n){return lo("depthwiseConv2DDerFilter")},t.prototype.conv3d=function(t,e,n){return lo("conv3d")},t.prototype.conv3dDerInput=function(t,e,n){return lo("conv3dDerInput")},t.prototype.conv3dDerFilter=function(t,e,n){return lo("conv3dDerFilter")},t.prototype.maxPool=function(t,e){return lo("maxPool")},t.prototype.maxPoolBackprop=function(t,e,n,r){return lo("maxPoolBackprop")},t.prototype.avgPool=function(t,e){return lo("avgPool")},t.prototype.avgPoolBackprop=function(t,e,n){return lo("avgPoolBackprop")},t.prototype.avgPool3d=function(t,e){return lo("avgPool3d")},t.prototype.avgPool3dBackprop=function(t,e,n){return lo("avgPool3dBackprop")},t.prototype.maxPool3d=function(t,e){return lo("maxPool3d")},t.prototype.maxPool3dBackprop=function(t,e,n,r){return lo("maxPool3dBackprop")},t.prototype.reshape=function(t,e){return lo("reshape")},t.prototype.cast=function(t,e){return lo("cast")},t.prototype.tile=function(t,e){return lo("tile")},t.prototype.pad=function(t,e,n){return lo("pad")},t.prototype.transpose=function(t,e){return lo("transpose")},t.prototype.gather=function(t,e,n){return lo("gather")},t.prototype.gatherND=function(t,e){return lo("gatherND")},t.prototype.scatterND=function(t,e,n){return lo("scatterND")},t.prototype.batchToSpaceND=function(t,e,n){return lo("batchToSpaceND")},t.prototype.spaceToBatchND=function(t,e,n){return lo("spaceToBatchND")},t.prototype.resizeBilinear=function(t,e,n,r){return lo("resizeBilinear")},t.prototype.resizeBilinearBackprop=function(t,e,n){return lo("resizeBilinearBackprop")},t.prototype.resizeNearestNeighbor=function(t,e,n,r){return lo("resizeNearestNeighbor")},t.prototype.resizeNearestNeighborBackprop=function(t,e,n){return lo("resizeNearestNeighborBackprop")},t.prototype.batchNormalization=function(t,e,n,r,o,a){return lo("batchNormalization")},t.prototype.localResponseNormalization4D=function(t,e,n,r,o){return lo("localResponseNormalization4D")},t.prototype.LRNGrad=function(t,e,n,r,o,a,i){return lo("LRNGrad")},t.prototype.multinomial=function(t,e,n,r){return lo("multinomial")},t.prototype.oneHot=function(t,e,n,r){return lo("oneHot")},t.prototype.cumsum=function(t,e,n,r){return lo("cumsum")},t.prototype.nonMaxSuppression=function(t,e,n,r,o){return lo("nonMaxSuppression")},t.prototype.fft=function(t){return lo("fft")},t.prototype.ifft=function(t){return lo("ifft")},t.prototype.complex=function(t,e){return lo("complex")},t.prototype.real=function(t){return lo("real")},t.prototype.imag=function(t){return lo("imag")},t.prototype.cropAndResize=function(t,e,n,r,o,a){return lo("cropAndResize")},t.prototype.depthToSpace=function(t,e,n){return lo("depthToSpace")},t.prototype.split=function(t,e,n){return lo("split")},t.prototype.sparseToDense=function(t,e,n,r){return lo("sparseToDense")},t.prototype.diag=function(t){return lo("diag")},t.prototype.fill=function(t,e,n){return lo("fill")},t.prototype.onesLike=function(t){return lo("onesLike")},t.prototype.zerosLike=function(t){return lo("zerosLike")},t.prototype.linspace=function(t,e,n){return lo("linspace")},t.prototype.dispose=function(){return lo("dispose")},t}();function lo(t){throw new Error("'"+t+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function ho(t,e){for(var n=t.length,r=[],o=0;o<n;o++){var a=n-1-o,i=t[a]||1;(e[e.length-1-o]||1)>1&&1===i&&r.unshift(a);}return r}function fo(t,e){for(var n=[],r=0;r<e.length;r++){var o=t[t.length-r-1],a=e.length-r-1,i=e[a];(null==o||1===o&&i>1)&&n.unshift(a);}return n}function po(t,e){for(var n=[],r=Math.max(t.length,e.length),o=0;o<r;o++){var a=t[t.length-o-1];null==a&&(a=1);var i=e[e.length-o-1];if(null==i&&(i=1),1===a)n.unshift(i);else if(1===i)n.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+t+" and "+e+".");n.unshift(a);}}return n}function vo(t,e,n,r,o,a,i){void 0===i&&(i="channelsLast");var u,s=bo(e),c=s[0],l=s[1];if("channelsLast"===i)u=[c,l,t[3],t[3]];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);u=[c,l,t[1],t[1]];}return go(t,u,n,r,o,a,!1,i)}function mo(t,e,n,r,o,a,i){void 0===i&&(i="NDHWC");var u,s,c=wo(e),l=c[0],h=c[1],f=c[2];if("NDHWC"===i)s="channelsLast",u=[l,h,f,t[4],t[4]];else{if("NCDHW"!==i)throw new Error("Unknown dataFormat "+i);s="channelsFirst",u=[l,h,f,t[1],t[1]];}return yo(t,u,n,r,o,!1,s,a)}function go(t,e,n,r,o,a,i,u){void 0===i&&(i=!1),void 0===u&&(u="channelsLast");var s=[-1,-1,-1,-1],c=s[0],l=s[1],h=s[2],f=s[3];if("channelsLast"===u)c=t[0],l=t[1],h=t[2],f=t[3];else{if("channelsFirst"!==u)throw new Error("Unknown dataFormat "+u);c=t[0],f=t[1],l=t[2],h=t[3];}var p,d=e[0],v=e[1],m=e[3],y=bo(n),x=y[0],b=y[1],w=bo(r),C=w[0],R=w[1],I=Co(d,C),k=Co(v,R),S=function(t,e,n,r,o,a,i,u){var s,c,l;if("number"==typeof t){var h=0===t?"VALID":"NUMBER";s={top:t,bottom:t,left:t,right:t,type:h};var f=function(t,e,n,r,o){null==r&&(r=xo(t,e,n));var a=t[0],i=t[1],u=Eo((a-e+2*r)/n+1,o);g(E(u),function(){return "The output # of rows ("+u+") must be an integer. Change the stride and/or zero pad parameters"});var s=Eo((i-e+2*r)/n+1,o);return g(E(s),function(){return "The output # of columns ("+s+") must be an integer. Change the stride and/or zero pad parameters"}),[u,s]}([e,n],a,r,t,u);c=f[0],l=f[1];}else if("same"===t){c=Math.ceil(e/r),l=Math.ceil(n/o);var p=Math.max(0,(c-1)*r+a-e),d=Math.max(0,(l-1)*o+i-n),v=Math.floor(p/2),m=p-v,y=Math.floor(d/2),x=d-y;s={top:v,bottom:m,left:y,right:x,type:"SAME"};}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);s={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-a+1)/r),l=Math.ceil((n-i+1)/o);}return {padInfo:s,outHeight:c,outWidth:l}}(o,l,h,x,b,I,k,a),A=S.padInfo,D=S.outHeight,T=S.outWidth,N=i?m*f:m;return "channelsFirst"===u?p=[c,N,D,T]:"channelsLast"===u&&(p=[c,D,T,N]),{batchSize:c,dataFormat:u,inHeight:l,inWidth:h,inChannels:f,outHeight:D,outWidth:T,outChannels:N,padInfo:A,strideHeight:x,strideWidth:b,filterHeight:d,filterWidth:v,effectiveFilterHeight:I,effectiveFilterWidth:k,dilationHeight:C,dilationWidth:R,inShape:t,outShape:p,filterShape:e}}function yo(t,e,n,r,o,a,i,u){void 0===a&&(a=!1),void 0===i&&(i="channelsLast");var s=[-1,-1,-1,-1,-1],c=s[0],l=s[1],h=s[2],f=s[3],p=s[4];if("channelsLast"===i)c=t[0],l=t[1],h=t[2],f=t[3],p=t[4];else{if("channelsFirst"!==i)throw new Error("Unknown dataFormat "+i);c=t[0],p=t[1],l=t[2],h=t[3],f=t[4];}var d,v=e[0],m=e[1],y=e[2],x=e[4],b=wo(n),w=b[0],C=b[1],R=b[2],I=wo(r),k=I[0],S=I[1],A=I[2],D=Co(v,k),T=Co(m,S),N=Co(y,A),F=function(t,e,n,r,o,a,i,u,s,c,l){var h,f,p,d;if("number"==typeof t){var v=0===t?"VALID":"NUMBER";h={top:t,bottom:t,left:t,right:t,front:t,back:t,type:v};var m=function(t,e,n,r,o,a){null==o&&(o=xo(t,e,r));var i=t[0],u=t[1],s=t[2],c=Eo((i-e+2*o)/r+1,a);g(E(c),function(){return "The output # of depths ("+c+") must be an integer. Change the stride and/or zero pad parameters"});var l=Eo((u-e+2*o)/r+1,a);g(E(l),function(){return "The output # of rows ("+l+") must be an integer. Change the stride and/or zero pad parameters"});var h=Eo((s-e+2*o)/r+1,a);return g(E(h),function(){return "The output # of columns ("+h+") must be an integer. Change the stride and/or zero pad parameters"}),[c,l,h,n]}([e,n,r,1],u,1,o,t,l);f=m[0],p=m[1],d=m[2];}else if("same"===t){f=Math.ceil(e/o),p=Math.ceil(n/a),d=Math.ceil(r/i);var y=(f-1)*o+u-e,x=(p-1)*a+s-n,b=(d-1)*i+c-r,w=Math.floor(y/2),C=y-w,R=Math.floor(x/2),I=x-R,k=Math.floor(b/2),S=b-k;h={top:R,bottom:I,left:k,right:S,front:w,back:C,type:"SAME"};}else{if("valid"!==t)throw Error("Unknown padding parameter: "+t);h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},f=Math.ceil((e-u+1)/o),p=Math.ceil((n-s+1)/a),d=Math.ceil((r-c+1)/i);}return {padInfo:h,outDepth:f,outHeight:p,outWidth:d}}(o,l,h,f,w,C,R,D,T,N,u),_=F.padInfo,O=F.outDepth,M=F.outHeight,B=F.outWidth,P=a?x*p:x;return "channelsFirst"===i?d=[c,P,O,M,B]:"channelsLast"===i&&(d=[c,O,M,B,P]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:p,outDepth:O,outHeight:M,outWidth:B,outChannels:P,padInfo:_,strideDepth:w,strideHeight:C,strideWidth:R,filterDepth:v,filterHeight:m,filterWidth:y,effectiveFilterDepth:D,effectiveFilterHeight:T,effectiveFilterWidth:N,dilationDepth:k,dilationHeight:S,dilationWidth:A,inShape:t,outShape:d,filterShape:e}}function xo(t,e,n,r){void 0===r&&(r=1);var o=Co(e,r);return Math.floor((t[0]*(n-1)-n+o)/2)}function bo(t){return "number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function wo(t){return "number"==typeof t?[t,t,t]:t}function Co(t,e){return e<=1?t:t+(t-1)*(e-1)}function Eo(t,e){if(!e)return t;switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error("Unknown roundingMode "+e)}}function Ro(t){var e=bo(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function Io(t,e){return Ro(t)||Ro(e)}function ko(t){if("NHWC"===t)return "channelsLast";if("NCHW"===t)return "channelsFirst";throw new Error("Unknown dataFormat "+t)}function So(t,e,n){if("complex64"===e){if("complex64"===t.dtype)return t.clone();var r=Bn(t.shape),o=t.toFloat(),a=n.complex(o,r);return r.dispose(),o.dispose(),a}if(!M(t.dtype,e))return Nt.makeTensorFromDataId(t.dataId,t.shape,e);if("complex64"===t.dtype){var i=n.real(t);a=i.cast(e);return i.dispose(),a}if("int32"===e)return n.int(t);if("bool"===e){var u=Sn(0,t.dtype);a=n.notEqual(t,u);return u.dispose(),a}throw new Error("Error in Cast: failed to cast "+t.dtype+" to "+e)}function Ao(t,e){return Nt.makeTensorFromDataId(t.dataId,e,t.dtype)}function Do(t,e,n){var r=(e-t)/(n-1),o=$(n,"float32");o[0]=t;for(var a=1;a<o.length;a++)o[a]=o[a-1]+r;return An(o,"float32")}var To=Object.freeze({castTensor:So,reshapeTensor:Ao,linspaceImpl:Do,upcastType:Ct,axesAreInnerMostDims:hn,combineLocations:fn,computeOutAndReduceShapes:pn,expandShapeToKeepDim:dn,assertAxesAreInnerMostDims:vn,getAxesPermutation:mn,getUndoAxesPermutation:gn,getInnerMostAxes:yn,getBroadcastDims:ho,getReductionAxes:fo,assertAndGetBroadcastShape:po,assertParamsConsistent:xn,computeOutShape:bn,computePool2DInfo:vo,computePool3DInfo:mo,computeConv2DInfo:go,computeConv3DInfo:yo,computeDefaultPad:xo,tupleValuesAreOne:Ro,eitherStridesOrDilationsAreOne:Io,convertConv2DDataFormat:ko});function No(t,e){if(t.length!==e.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+t.length+", imag: "+e.length+".");for(var n=new Float32Array(2*t.length),r=0;r<n.length;r+=2)n[r]=t[r/2],n[r+1]=e[r/2];return n}function Fo(t,e){return {real:t[2*e],imag:t[2*e+1]}}function _o(t,e,n,r){t[2*r]=e,t[2*r+1]=n;}function Oo(t,e,n){var r=(n?2:-2)*Math.PI*(t/e);return {real:Math.cos(r),imag:Math.sin(r)}}function Mo(t,e,n,r,o){for(var a=Array.from(e).map(function(t,e){return {score:t,boxIndex:e}}).filter(function(t){return t.score>o}).sort(function(t,e){return e.score-t.score}),i=[],u=0;u<a.length;u++){var s=a[u],c=s.score,l=s.boxIndex;if(c<o)break;for(var h=!1,f=i.length-1;f>=0;--f){if(Bo(t,l,i[f])>=r){h=!0;break}}if(!h&&(i.push(l),i.length>=n))break}return An(i,"int32")}function Bo(t,e,n){var r=t.subarray(4*e,4*e+4),o=t.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),u=Math.max(r[0],r[2]),s=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),p=(u-a)*(s-i),d=(h-c)*(f-l);if(p<=0||d<=0)return 0;var v=Math.max(a,c),m=Math.max(i,l),g=Math.min(u,h),y=Math.min(s,f),x=Math.max(g-v,0)*Math.max(y-m,0);return x/(p+d-x)}function Po(t,e,n){var r=new Array(t.rank).fill(0),o=t.shape.slice();return e.map(function(e){o[n]=e;var a=t.slice(r,o);return r[n]+=e,a})}function Lo(t,e){for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];var o=ir(n,t.dtype);for(r=0;r<o.values.length;++r){for(var a=o.indexToLoc(r),i=new Array(t.rank),u=0;u<i.length;u++)i[u]=a[u]%t.shape[u];var s=t.locToIndex(i);o.values[r]=t.values[s];}return o.toTensor()}function Wo(t,e,n,r,o){for(var a=e[e.length-1],i=[t.length/a,a],u=i[0],s=i[1],c=N(n,u*r),l=N("int32",u*r),h=0;h<u;h++){for(var f=h*s,p=t.subarray(f,f+s),d=[],v=0;v<p.length;v++)d.push({value:p[v],index:v});d.sort(function(t,e){return e.value-t.value});var m=h*r,g=c.subarray(m,m+r),y=l.subarray(m,m+r);for(v=0;v<r;v++)g[v]=d[v].value,y[v]=d[v].index;}var x=e.slice();return x[x.length-1]=r,[In(c,x,n),In(l,x,"int32")]}function Uo(t,e){for(var n=[],r=0;r<e.length;r++)e[r]&&n.push(r);var o=ir(t,"int32"),a=ir([n.length,t.length],"int32");for(r=0;r<n.length;r++){var i=o.indexToLoc(n[r]),u=r*t.length;a.values.set(i,u);}return a.toTensor()}var Vo=function(){return function(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map(function(t,e){return "T"+e});var n=[];this.variableNames.forEach(function(t){n.push("float v"+t+" = get"+t+"AtOutCoords();");});var r=this.variableNames.map(function(t){return "v"+t}).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        float result = "+r+";\n        setOutput(result);\n      }\n    ";}}(),zo=function(){return function(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map(function(t,e){return "T"+e});var n=[];this.variableNames.forEach(function(t){n.push("vec4 v"+t+" = get"+t+"AtOutCoords();");});var r=this.variableNames.map(function(t){return "v"+t}).join(" + ");this.userCode="\n      void main() {\n        "+n.join("\n        ")+"\n\n        vec4 result = "+r+";\n        setOutput(result);\n      }\n    ";}}(),Go=function(){return function(t,e,n){this.variableNames=["A"];var r=t.windowSize,o=t.batchSize,a=t.inSize,i=Math.ceil(a/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var u="max"===e?">":"<",s=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+r+";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < "+r+"; i++) {\n          int inIdx = "+s+";\n          float candidate = getA(batch, inIdx);\n          if (candidate "+u+" bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";}}();function Ho(t,e){return ["x","y","z","w","u","v"].slice(0,e).map(function(e){return t+"."+e})}function qo(t,e){return 1===e?[t]:Ho(t,e)}function Ko(){var t,e,n,r,o,i,u,s,c,l;return 2===a().getNumber("WEBGL_VERSION")?(t="#version 300 es",e="in",n="out",r="in",o="texture",i="outputColor",u="out vec4 outputColor;",s="\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",c="",l="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(t="",e="attribute",n="varying",r="varying",o="texture2D",i="gl_FragColor",u="",s="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",c="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",l="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:t,attribute:e,varyingVs:n,varyingFs:r,texture2D:o,output:i,defineOutput:u,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}function jo(t,e,n){void 0===n&&(n="index");var r=q(e);return r.map(function(e,o){return "int "+t[o]+" = "+n+" / "+e+"; "+(o===r.length-1?"int "+t[o+1]+" = "+n+" - "+t[o]+" * "+e:"index -= "+t[o]+" * "+e)+";"}).join("")}function Xo(t){var e=q(t).map(function(t){return t.toString()});return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * "+e[0]+" + coords.y * "+e[1]+" + coords.z;\n  }\n"}var $o="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n";function Yo(t,e,n,r){var o=[];t.forEach(function(t){var e=w(t.shapeInfo.logicalShape);t.shapeInfo.isUniform?o.push("uniform float "+t.name+(e>1?"["+e+"]":"")+";"):(o.push("uniform sampler2D "+t.name+";"),o.push("uniform int offset"+t.name+";"));});var a,i,u=o.join("\n"),s=t.map(function(t){return function(t,e,n){void 0===n&&(n=!1);var r="";r+=n?Jo(t):Qo(t);var o=t.shapeInfo.logicalShape,a=e.logicalShape;o.length<=a.length&&(r+=n?function(t,e){var n,r=t.name,o=r.charAt(0).toUpperCase()+r.slice(1),a="get"+o+"AtOutCoords",i=t.shapeInfo.logicalShape.length,u=e.logicalShape.length,s=ho(t.shapeInfo.logicalShape,e.logicalShape),c=aa(u),l=u-i,h=["x","y","z","w","u","v"];n=0===i?"":u<2&&s.length>=1?"coords = 0;":s.map(function(t){return "coords."+h[t+l]+" = 0;"}).join("\n");var f="";f=u<2&&i>0?"coords":t.shapeInfo.logicalShape.map(function(t,e){return "coords."+h[e+l]}).join(", ");var p="return outputValue;",d=1===w(t.shapeInfo.logicalShape),v=1===w(e.logicalShape);if(1!==i||d||v){if(d&&!v)p=1===u?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(s.length){var m=i-2,g=i-1;s.indexOf(m)>-1&&s.indexOf(g)>-1?p="return vec4(outputValue.x);":s.indexOf(m)>-1?p="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":s.indexOf(g)>-1&&(p="return vec4(outputValue.xx, outputValue.zz);");}}else p="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return "\n    vec4 "+a+"() {\n      "+c+" coords = getOutputCoords();\n      "+n+"\n      vec4 outputValue = get"+o+"("+f+");\n      "+p+"\n    }\n  "}(t,e):function(t,e){var n=t.name,r=n.charAt(0).toUpperCase()+n.slice(1),o="get"+r+"AtOutCoords",a=e.texShape,i=t.shapeInfo.texShape,u=t.shapeInfo.logicalShape.length,s=e.logicalShape.length;if(!t.shapeInfo.isUniform&&u===s&&null==t.shapeInfo.flatOffset&&C(i,a))return "\n      float "+o+"() {\n        return sampleTexture("+n+", resultUV);\n      }\n    ";var c,l=aa(s),h=ho(t.shapeInfo.logicalShape,e.logicalShape),f=s-u,p=["x","y","z","w","u","v"];c=0===u?"":s<2&&h.length>=1?"coords = 0;":h.map(function(t){return "coords."+p[t+f]+" = 0;"}).join("\n");var d="";d=s<2&&u>0?"coords":t.shapeInfo.logicalShape.map(function(t,e){return "coords."+p[e+f]}).join(", ");return "\n    float "+o+"() {\n      "+l+" coords = getOutputCoords();\n      "+c+"\n      return get"+r+"("+d+");\n    }\n  "}(t,e));return r}(t,e,r)}).join("\n"),c=e.texShape,l=Ko(),h=function(t){return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return "+t.texture2D+"(textureSampler, uv).r;\n    }\n  "}(l),f=function(t){return t.version+"\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    "+t.varyingFs+" vec2 resultUV;\n    "+t.defineOutput+"\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    "+t.defineSpecialNaN+"\n    "+t.defineSpecialInf+"\n    "+t.defineRound+"\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    "+Zo+"\n    "+ta+"\n    "+ea+"\n  "}(l);return e.isPacked?(a=function(t,e){switch(t.length){case 0:return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(1===n[0])return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * "+n[1]+".0);\n      }\n    ";if(1===n[1])return "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * "+n[0]+".0);\n      }\n    ";return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      return 2 * (resTexRC.x * "+n[1]+" + resTexRC.y);\n    }\n  "}(0,e);case 2:return function(t,e){var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(C(t,e))return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2("+n[0]+", "+n[1]+"));\n      }\n    ";var r=Math.ceil(t[1]/2);return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=t,r=e,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=Math.ceil(n[2]/2),i=a*Math.ceil(n[1]/2),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+o[0]+", "+o[1]+"));\n      int index = resTexRC.x * "+o[1]+" + resTexRC.y;\n\n      int b = index / "+i+";\n      index -= b * "+i+";\n\n      int r = 2 * (index / "+a+");\n      int c = imod(index, "+a+") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";default:return function(t,e){for(var n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],r=Math.ceil(t[t.length-1]/2),o=r*Math.ceil(t[t.length-2]/2),a=o,i="",u="b, r, c",s=2;s<t.length-1;s++)a*=t[t.length-s-1],i="\n      int b"+s+" = index / "+a+";\n      index -= b"+s+" * "+a+";\n    "+i,u="b"+s+", "+u;return "\n    ivec"+t.length+" getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n\n      "+i+"\n\n      int b = index / "+o+";\n      index -= b * "+o+";\n\n      int r = 2 * (index / "+r+");\n      int c = imod(index, "+r+") * 2;\n\n      return ivec"+t.length+"("+u+");\n    }\n  "}(t,e)}var n,r,o,a,i;}(e.logicalShape,c),i=function(t){return "\n    void setOutput(vec4 val) {\n      "+t.output+" = val;\n    }\n  "}(l)):(a=function(t,e){switch(t.length){case 0:return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";case 1:return function(t,e){if(1===e[0])return "\n      int getOutputCoords() {\n        return int(resultUV.x * "+e[1]+".0);\n      }\n    ";if(1===e[1])return "\n      int getOutputCoords() {\n        return int(resultUV.y * "+e[0]+".0);\n      }\n    ";return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      return resTexRC.x * "+e[1]+" + resTexRC.y;\n    }\n  "}(0,e);case 2:return function(t,e){if(C(t,e))return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2("+e[0]+", "+e[1]+"));\n      }\n    ";if(1===t[1])return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";if(1===t[0])return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+e[0]+", "+e[1]+"));\n        int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      int r = index / "+t[1]+";\n      int c = index - r * "+t[1]+";\n      return ivec2(r, c);\n    }\n  "}(t,e);case 3:return n=e,r=jo(["r","c","d"],t),"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+n[0]+", "+n[1]+"));\n      int index = resTexRC.x * "+n[1]+" + resTexRC.y;\n      "+r+"\n      return ivec3(r, c, d);\n    }\n  ";case 4:return function(t,e){var n=jo(["r","c","d","d2"],t);return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n      "+n+"\n      return ivec4(r, c, d, d2);\n    }\n  "}(t,e);case 5:return function(t,e){var n=jo(["r","c","d","d2","d3"],t);return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2("+e[0]+",\n                             "+e[1]+"));\n\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  "}(t,e);case 6:return function(t,e){var n=jo(["r","c","d","d2","d3","d4"],t);return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+e[0]+", "+e[1]+"));\n      int index = resTexRC.x * "+e[1]+" + resTexRC.y;\n\n      "+n+"\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  "}(t,e);default:throw new Error(t.length+"-D output sampling is not yet supported")}var n,r;}(e.logicalShape,c),i=function(t){return "\n    void setOutput(float val) {\n      "+t.output+" = vec4(val, 0, 0, 0);\n    }\n  "}(l)),r&&(f+=na),[f,h,i,u,a,s,n].join("\n")}function Qo(t){var e=t.shapeInfo.logicalShape;switch(e.length){case 0:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return "float "+n+"() {return "+e+";}";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===o&&1===a)return "\n      float "+n+"() {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=t.shapeInfo.texShape,u=i[0],s=i[1],c=ra(e);return "\n    float "+n+"() {\n      vec2 uv = uvFromFlat("+u+", "+s+", "+c+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1);if(t.shapeInfo.isUniform)return "\n      float "+n+"(int index) {\n        "+oa(t)+"\n      }\n    ";var r=t.shapeInfo.texShape,o=r[0],a=r[1];if(1===a&&1===o)return "\n      float "+n+"(int index) {\n        return sampleTexture("+e+", halfCR);\n      }\n    ";var i=ra(e);if(1===a)return "\n      float "+n+"(int index) {\n        vec2 uv = vec2(0.5, (float(index + "+i+") + 0.5) / "+o+".0);\n        return sampleTexture("+e+", uv);\n      }\n    ";if(1===o)return "\n      float "+n+"(int index) {\n        vec2 uv = vec2((float(index + "+i+") + 0.5) / "+a+".0, 0.5);\n        return sampleTexture("+e+", uv);\n      }\n    ";return "\n    float "+n+"(int index) {\n      vec2 uv = uvFromFlat("+o+", "+a+", index + "+i+");\n      return sampleTexture("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape;if(null!=o&&C(e,o)){var a=o[0],i=o[1];return "\n    float "+r+"(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n      return sampleTexture("+n+", uv);\n    }\n  "}var u=T(e),s=u.newShape,c=u.keptDims,l=s;if(l.length<e.length){var h=ia(t,l);return "\n      "+Qo(h)+"\n      float "+r+"(int row, int col) {\n        return "+r+"("+ua(["row","col"],c)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2("+e[1]+", 1)));\n        "+oa(t)+"\n      }\n    ";var f=o[0],p=o[1],d=ra(n);if(1===p)return "\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+d+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / "+f+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";if(1===f)return "\n    float "+r+"(int row, int col) {\n      float index = dot(vec3(row, col, "+d+"), vec3("+e[1]+", 1, 1));\n      vec2 uv = vec2((index + 0.5) / "+p+".0, 0.5);\n      return sampleTexture("+n+", uv);\n    }\n  ";return "\n  float "+r+"(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * "+e[1]+" + col + "+d+";\n    vec2 uv = uvFromFlat("+f+", "+p+", index);\n    return sampleTexture("+n+", uv);\n  }\n"}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[1]*e[2],a=e[2],i=T(e),u=i.newShape,s=i.keptDims,c=u;if(c.length<e.length){var l=ia(t,c);return "\n        "+Qo(l)+"\n        float "+r+"(int row, int col, int depth) {\n          return "+r+"("+ua(["row","col","depth"],s)+");\n        }\n      "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3("+o+", "+a+", 1)));\n        "+oa(t)+"\n      }\n    ";var h=t.shapeInfo.texShape,f=h[0],p=h[1],d=t.shapeInfo.flatOffset;if(p===o&&null==d)return "\n        float "+r+"(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2("+a+", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2("+p+".0, "+f+".0);\n          return sampleTexture("+n+", uv);\n        }\n      ";if(p===a&&null==d)return "\n    float "+r+"(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2("+e[1]+", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+p+".0, "+f+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ";var v=ra(n);return "\n      float "+r+"(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * "+o+" + col * "+a+" + depth + "+v+";\n        vec2 uv = uvFromFlat("+f+", "+p+", index);\n        return sampleTexture("+n+", uv);\n      }\n  "}(t);case 4:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[3],a=e[2]*o,i=e[1]*a,u=T(e),s=u.newShape,c=u.keptDims;if(s.length<e.length){var l=ia(t,s);return "\n      "+Qo(l)+"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        return "+r+"("+ua(["row","col","depth","depth2"],c)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4("+i+", "+a+", "+o+", 1)));\n        "+oa(t)+"\n      }\n    ";var h=t.shapeInfo.flatOffset,f=t.shapeInfo.texShape,p=f[0],d=f[1];if(d===i&&null==h)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3("+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+d+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(d===o&&null==h)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3("+e[1]*e[2]+", "+e[2]+", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+d+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var v=ra(n);return "\n    float "+r+"(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+i+" + col * "+a+" +\n          depth * "+o+" + depth2;\n      vec2 uv = uvFromFlat("+p+", "+d+", index + "+v+");\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 5:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[4],a=e[3]*o,i=e[2]*a,u=e[1]*i,s=T(e),c=s.newShape,l=s.keptDims;if(c.length<e.length){var h=ia(t,c);return "\n      "+Qo(h)+"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        return "+r+"("+ua(["row","col","depth","depth2","depth3"],l)+");\n      }\n    "}if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+u+", "+i+", "+a+", "+o+")) +\n          depth3;\n        "+oa(t)+"\n      }\n    ";var f=t.shapeInfo.flatOffset,p=t.shapeInfo.texShape,d=p[0],v=p[1];if(v===u&&null==f)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4("+i+", "+a+", "+o+", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+v+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(v===o&&null==f)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]+",\n               "+e[2]*e[3]+", "+e[3]+", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+v+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var m=ra(n);return "\n    float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+u+" + col * "+i+" + depth * "+a+" +\n          depth2 * "+o+" + depth3 + "+m+";\n      vec2 uv = uvFromFlat("+d+", "+v+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);case 6:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=T(e),a=o.newShape,i=o.keptDims;if(a.length<e.length){var u=ia(t,a);return "\n      "+Qo(u)+"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return "+r+"("+ua(["row","col","depth","depth2","depth3","depth4"],i)+");\n      }\n    "}var s=e[5],c=e[4]*s,l=e[3]*c,h=e[2]*l,f=e[1]*h;if(t.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4("+f+", "+h+", "+l+", "+c+")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2("+s+", 1)));\n        "+oa(t)+"\n      }\n    ";var p=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,v=d[0],m=d[1];if(m===f&&null==p)return "\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4("+h+", "+l+", "+c+", "+s+")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";if(m===s&&null==p)return "\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4("+e[1]*e[2]*e[3]*e[4]+",\n               "+e[2]*e[3]*e[4]+",\n               "+e[3]*e[4]+",\n               "+e[4]+")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+m+".0, "+v+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ";var g=ra(n);return "\n    float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * "+f+" + col * "+h+" + depth * "+l+" +\n          depth2 * "+c+" + depth3 * "+s+" + depth4 + "+g+";\n      vec2 uv = uvFromFlat("+v+", "+m+", index);\n      return sampleTexture("+n+", uv);\n    }\n  "}(t);default:throw new Error(e.length+"-D input sampling is not yet supported")}}function Jo(t){var e,n,r;switch(t.shapeInfo.logicalShape.length){case 0:return e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=Ko(),"\n    vec4 "+n+"() {\n      return "+r.texture2D+"("+e+", halfCR);\n    }\n  ";case 1:return function(t){var e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),r=t.shapeInfo.texShape,o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],a=Ko();return "\n    vec4 "+n+"(int index) {\n      vec2 uv = packedUVfrom1D(\n        "+o[0]+", "+o[1]+", index);\n      return "+a.texture2D+"("+e+", uv);\n    }\n  "}(t);case 2:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=o[0],i=o[1],u=Ko();if(null!=o&&C(e,o))return "\n      vec4 "+r+"(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2("+i+".0, "+a+".0);\n\n        return "+u.texture2D+"("+n+", uv);\n      }\n    ";var s=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],c=Math.ceil(e[1]/2);return "\n    vec4 "+r+"(int row, int col) {\n      vec2 uv = packedUVfrom2D("+c+", "+s[0]+", "+s[1]+", row, col);\n      return "+u.texture2D+"("+n+", uv);\n    }\n  "}(t);case 3:return function(t){var e=t.shapeInfo.logicalShape,n=t.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,a=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(1===e[0]){var i=e.slice(1),u=ia(t,i);return "\n        "+Jo(u)+"\n        vec4 "+r+"(int b, int row, int col) {\n          return "+r+"("+ua(["b","row","col"],[1,2])+");\n        }\n      "}var s=a[0],c=a[1],l=Math.ceil(e[2]/2),h=l*Math.ceil(e[1]/2),f=Ko();return "\n    vec4 "+r+"(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        "+s+", "+c+", "+h+", "+l+", b, row, col);\n      return "+f.texture2D+"("+n+", uv);\n    }\n  "}(t);default:return function(t){for(var e=t.shapeInfo.logicalShape,n=e.length,r=t.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),a=t.shapeInfo.texShape,i=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],u=i[0],s=i[1],c=Math.ceil(e[n-1]/2),l=c*Math.ceil(e[n-2]/2),h="int b, int row, int col",f="b * "+l+" + (row / 2) * "+c+" + (col / 2)",p=2;p<n-1;p++)h="int b"+p+", "+h,l*=e[n-p-1],f="b"+p+" * "+l+" + "+f;var d=Ko();return "\n    vec4 "+o+"("+h+") {\n      int index = "+f+";\n      int texR = index / "+s+";\n      int texC = index - texR * "+s+";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+s+", "+u+");\n      return "+d.texture2D+"("+r+", uv);\n    }\n  "}(t)}}var Zo="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",ta="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",ea="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",na="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function ra(t){return "offset"+t}function oa(t){var e=t.name,n=w(t.shapeInfo.logicalShape);return n<2?"return "+e+";":"\n    for (int i = 0; i < "+n+"; i++) {\n      if (i == index) {\n        return "+e+"[i];\n      }\n    }\n  "}function aa(t){if(t<=1)return "int";if(2===t)return "ivec2";if(3===t)return "ivec3";if(4===t)return "ivec4";if(5===t)return "ivec5";if(6===t)return "ivec6";throw Error("GPU for rank "+t+" is not yet supported")}function ia(t,e){var n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function ua(t,e){return e.map(function(e){return t[e]}).join(", ")}var sa=function(){return function(t,e,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,g(t.length>2,function(){return "Packed arg"+(n.charAt(0).toUpperCase()+n.slice(1))+" supports only inputs with rank above 2."});var o=t[t.length-1],a=Math.ceil(o/e);this.outputShape=t.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push("bestIndicesA");var i,u,s=this.outputShape,c=s.length,l=aa(c),h=qo("coords",c);if(1===a){var f=aa(u=c+1);i="\n        "+f+" sourceLocR = "+f+"("+h.join()+", 0);\n        ++"+h[c-1]+";\n        "+f+" sourceLocG = "+f+"("+h.join()+", 0);\n        ++"+h[c-2]+";\n        "+f+" sourceLocA = "+f+"("+h.join()+", 0);\n        --"+h[c-1]+";\n        "+f+" sourceLocB = "+f+"("+h.join()+", 0);\n        --"+h[c-2]+";";}else u=c,i="\n        "+l+" sourceLocR = coords;\n        ++"+h[c-1]+";\n        "+l+" sourceLocG = coords;\n        ++"+h[c-2]+";\n        "+l+" sourceLocA = coords;\n        --"+h[c-1]+";\n        "+l+" sourceLocB = coords;\n        --"+h[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,u),d="."+p[u-1],v=p.map(function(t){return "int "+t}),m=qo("sourceLocR",u-1).concat("inIdx.r"),y=qo("sourceLocG",u-1).concat("inIdx.g"),x=qo("sourceLocB",u-1).concat("inIdx.b"),b=qo("sourceLocA",u-1).concat("inIdx.a"),w="max"===n?"greaterThan":"lessThan",C=r?"":"\n          inIdx = round(vec4(getBestIndicesAChannel("+m.join()+"),\n                             getBestIndicesAChannel("+y.join()+"),\n                             getBestIndicesAChannel("+x.join()+"),\n                             getBestIndicesAChannel("+b.join()+")));",E="vec4(\n            getAChannel("+m.join()+"),\n            hasNextCol ? getAChannel("+y.join()+") : 0.,\n            hasNextRow ? getAChannel("+x.join()+") : 0.,\n            hasNextRow && hasNextCol ? getAChannel("+b.join()+") : 0.)",R=r?"":"\n      float getBestIndicesAChannel("+v.join()+") {\n        return getChannel(getBestIndicesA("+p.join()+"),\n                                          vec2("+p.slice(-2).join()+"));\n      }";this.userCode="\n      float getAChannel("+v.join()+") {\n        return getChannel(getA("+p.join()+"),\n                               vec2("+p.slice(-2).join()+"));\n      }\n      "+R+"\n      void main() {\n        "+l+" coords = getOutputCoords();\n        bool hasNextCol = "+h[c-1]+" < "+(s[c-1]-1)+";\n        bool hasNextRow = "+h[c-2]+" < "+(s[c-2]-1)+";\n        "+i+"\n        ivec4 srcIdx = ivec4(sourceLocR"+d+", sourceLocG"+d+",\n          sourceLocB"+d+", sourceLocA"+d+") * "+e+";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = "+E+";\n\n        for (int i = 0; i < "+e+"; i++) {\n          inIdx = srcIdx;\n          "+C+"\n          vec4 candidate = "+E+";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4("+w+"(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ";}}(),ca=function(){return function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=t.dilationHeight,i=t.dilationWidth,u=t.effectiveFilterHeight,s=t.effectiveFilterWidth,c=u-1-t.padInfo.top,l=s-1-t.padInfo.left,h=1/(e*n);this.userCode="\n      const ivec2 pads = ivec2("+c+", "+l+");\n      const float avgMultiplier = float("+h+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+u+";\n            wR += "+a+") {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+s+";\n            wC+= "+i+") {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),la=function(){return function(t){this.variableNames=["dy"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,u=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,h=t.effectiveFilterHeight,f=t.effectiveFilterWidth,p=l-1-t.padInfo.front,d=h-1-t.padInfo.top,v=f-1-t.padInfo.left,m=1/(e*n*r);this.userCode="\n      const ivec3 pads = ivec3("+p+", "+d+", "+v+");\n      const float avgMultiplier = float("+m+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+l+";\n            wD += "+u+") {\n          float dyD = float(dyDCorner + wD) / "+o+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+h+";\n              wR += "+s+") {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+f+";\n                wC += "+c+") {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),ha=function(){return function(t,e,n,r,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],po(t,e),po(t,n);var i="0.0";null!=r&&(po(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var u="1.0";null!=o&&(po(t,o),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = "+i+";\n        float scale = "+u+";\n        float inv = scale * inversesqrt(variance + float("+a+"));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ";}}(),fa=function(){return function(t,e,n,r,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],po(t,e),po(t,n);var i="vec4(0.0)";null!=r&&(po(t,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var u="vec4(1.0)";null!=o&&(po(t,o),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=t,this.userCode="\n      void main() {\n        vec4 offset = "+i+";\n        vec4 scale = "+u+";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4("+a+"));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ";}}(),pa="return areal * breal - aimag * bimag;",da="return areal * bimag + aimag * breal;",va=function(){return function(t,e,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=po(e,n),this.userCode="\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        "+t+"\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ";}}(),ma="return a + b;",ga="return a - b;",ya="return a * b;",xa="return (a < 0.) ? b * a : a;",ba=function(){return function(t,e,n){this.variableNames=["A","B"],this.outputShape=po(e,n),this.userCode="\n      float binaryOperation(float a, float b) {\n        "+t+"\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";}}(),wa="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n",Ca=function(){return function(t,e,n,r){void 0===r&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=po(e,n);var o=this.outputShape.length,a="";if(r)if(0===o||1===w(this.outputShape))a="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else if(a="\n          "+aa(o)+" coords = getOutputCoords();\n        ",1===o)a+="\n            result.y = (coords + 1) >= "+this.outputShape[0]+" ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";else{var i=qo("coords",o);a+="\n            bool nextRowOutOfBounds =\n              ("+i[o-2]+" + 1) >= "+this.outputShape[o-2]+";\n            bool nextColOutOfBounds =\n              ("+i[o-1]+" + 1) >= "+this.outputShape[o-1]+";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ";}this.userCode="\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        "+t+"\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        "+a+"\n\n        setOutput(result);\n      }\n    ";}}(),Ea=function(){function t(t){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e);}},t}(),Ra=function(){function t(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode="\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(r,o){null==n.minLoc&&(n.minLoc=r.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=r.getUniformLocationNoThrow(o,"maxVal")),r.gl.uniform1f(n.minLoc,t),r.gl.uniform1f(n.maxLoc,e);}},t}(),Ia=function(){return function(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ";}}(),ka=function(){return function(t){this.outputShape=[],this.outputShape=bn(t,1),this.variableNames=t.map(function(t,e){return "T"+e});var e=new Array(t.length-1);e[0]=t[0][1];for(var n=1;n<e.length;n++)e[n]=e[n-1]+t[n][1];var r=["if (yC < "+e[0]+") setOutput(getT0(yR, yC));"];for(n=1;n<e.length;n++){var o=e[n-1];r.push("else if (yC < "+e[n]+") setOutput(getT"+n+"(yR, yC-"+o+"));");}var a=e.length,i=e[e.length-1];r.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        "+r.join("\n        ")+"\n      }\n    ";}}(),Sa=function(){return function(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=bn(t,e);var n=this.outputShape,r=n.length,o=aa(r),a=qo("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=t.map(function(t,e){return "T"+e});var u=new Array(t.length-1);u[0]=t[0][e];for(var s=1;s<u.length;s++)u[s]=u[s-1]+t[s][e];var c=i[e],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+u[0]+") {\n        return getChannel(\n            getT0("+h+"), vec2("+l.join()+"));\n        }";for(s=1;s<u.length;s++){var p=u[s-1];f+="\n        if ("+c+" < "+u[s]+"  && "+c+" >= "+u[s-1]+") {\n          return getChannel(\n            getT"+s+"("+Aa(i,c,p)+"),\n            vec2("+Aa(l,c,p)+"));\n        }";}var d=u.length,v=u[u.length-1];f+="\n        return getChannel(\n          getT"+d+"("+Aa(i,c,v)+"),\n          vec2("+Aa(l,c,v)+"));",this.userCode="\n      float getValue("+i.map(function(t){return "int "+t})+") {\n        "+f+"\n      }\n\n      void main() {\n        "+o+" coords = getOutputCoords();\n        vec4 result = vec4(getValue("+a+"), 0., 0., 0.);\n\n        "+a[r-1]+" = "+a[r-1]+" + 1;\n        if ("+a[r-1]+" < "+n[r-1]+") {\n          result.g = getValue("+a+");\n        }\n\n        "+a[r-2]+" = "+a[r-2]+" + 1;\n        if ("+a[r-2]+" < "+n[r-2]+") {\n          result.a = getValue("+a+");\n        }\n\n        "+a[r-1]+" = "+a[r-1]+" - 1;\n        if ("+a[r-2]+" < "+n[r-2]+" &&\n            "+a[r-1]+" < "+n[r-1]+") {\n          result.b = getValue("+a+");\n        }\n        setOutput(result);\n      }\n    ";}}();function Aa(t,e,n){var r=t.indexOf(e);return t.map(function(t,e){return e===r?t+" - "+n:t}).join()}var Da=function(){return function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a="channelsLast"===t.dataFormat;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              if ("+a+") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Ta=function(){return function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a="channelsLast"===t.dataFormat,i=e-1-t.padInfo.top,u=n-1-t.padInfo.left,s=a?1:2,c=a?2:3,l=a?3:1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+u+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords["+l+"];\n\n        ivec2 dyCorner = ivec2(coords["+s+"], coords["+c+"]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n\n              if ("+a+") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Na=function(){return function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.padInfo.front,a=t.padInfo.top,i=t.padInfo.left;this.userCode="\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yF = 0; yF < "+t.outDepth+"; yF++) {\n            int xF = wF + yF * "+e+" - "+o+";\n\n            if (xF < 0 || xF >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n              int xR = wR + yR * "+n+" - "+a+";\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n                int xC = wC + yC * "+r+" - "+i+";\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Fa=function(){return function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterDepth,n=t.filterHeight,r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,u=e-1-t.padInfo.front,s=n-1-t.padInfo.top,c=r-1-t.padInfo.left;this.userCode="\n      const ivec3 pads = ivec3("+u+", "+s+", "+c+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+e+"; wF++) {\n          float dyF = float(dyFCorner + wF) / "+o+".0;\n\n          if (dyF < 0.0 || dyF >= "+t.outDepth+".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = "+e+" - 1 - wF;\n\n          for (int wR = 0; wR < "+n+"; wR++) {\n            float dyR = float(dyRCorner + wR) / "+a+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = "+n+" - 1 - wR;\n\n            for (int wC = 0; wC < "+r+"; wC++) {\n              float dyC = float(dyCCorner + wC) / "+i+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = "+r+" - 1 - wC;\n\n              for (int d2 = 0; d2 < "+t.outChannels+"; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),_a=function(){return function(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;var e=t.strideHeight,n=t.strideWidth,r=t.padInfo.top,o=t.padInfo.left,a=t.outChannels/t.inChannels;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * "+a+" + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < "+t.batchSize+"; b++) {\n          for (int yR = 0; yR < "+t.outHeight+"; yR++) {\n            int xR = wR + yR * "+e+" - "+r+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+t.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Oa=function(){return function(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;var e=t.filterHeight,n=t.filterWidth,r=t.strideHeight,o=t.strideWidth,a=e-1-t.padInfo.top,i=n-1-t.padInfo.left,u=t.outChannels/t.inChannels;this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < "+e+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+e+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < "+u+"; dm++) {\n              int d2 = d1 * "+u+" + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Ma=function(){return function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.outputShape=t.outShape;var o=t.padInfo.top,a=t.padInfo.left,i=t.strideHeight,u=t.strideWidth,s=t.dilationHeight,c=t.dilationWidth,l=t.filterHeight,h=t.filterWidth,f=4*Math.floor(t.inChannels/4),p=t.inChannels%4,d="channelsLast"===t.dataFormat,v=d?1:2,m=d?2:3,g=d?3:1,y="",x="";n&&(y=r?"float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"\n          float activation(float x) {\n            "+n+"\n          }\n        ",x="result = activation(result);");var b=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+y+"\n\n      const ivec2 strides = ivec2("+i+", "+u+");\n      const ivec2 pads = ivec2("+o+", "+a+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords["+g+"];\n\n        ivec2 xRCCorner =\n            ivec2(coords["+v+"], coords["+m+"]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+l+"; wR++) {\n          int xR = xRCorner + wR * "+s+";\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+h+"; wC++) {\n            int xC = xCCorner + wC * "+c+";\n\n            if (xC < 0 || xC >= "+t.inWidth+") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < "+f+"; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if ("+d+") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if ("+(1===p)+") {\n\n              if ("+d+") {\n                dotProd +=\n                    getX(batch, xR, xC, "+f+") *\n                    getW(wR, wC, "+f+", d2);\n              } else {\n                dotProd +=\n                    getX(batch, "+f+", xR, xC) *\n                    getW(wR, wC, "+f+", d2);\n              }\n\n            } else if ("+(2===p)+") {\n              vec2 wValues = vec2(\n                getW(wR, wC, "+f+", d2),\n                getW(wR, wC, "+f+" + 1, d2)\n              );\n\n              if ("+d+") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, "+f+"),\n                  getX(batch, xR, xC, "+f+" + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, "+f+", xR, xC),\n                  getX(batch, "+f+" + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if ("+(3===p)+") {\n              vec3 wValues = vec3(\n                getW(wR, wC, "+f+", d2),\n                getW(wR, wC, "+f+" + 1, d2),\n                getW(wR, wC, "+f+" + 2, d2)\n              );\n\n              if ("+d+") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, "+f+"),\n                  getX(batch, xR, xC, "+f+" + 1),\n                  getX(batch, xR, xC, "+f+" + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, "+f+", xR, xC),\n                  getX(batch, "+f+" + 1, xR, xC),\n                  getX(batch, "+f+" + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        "+b+"\n        "+x+"\n        setOutput(result);\n      }\n    ";}}(),Ba=function(){return function(t){this.variableNames=["x","W"],this.outputShape=t.outShape;var e=t.padInfo.front,n=t.padInfo.top,r=t.padInfo.left,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,u=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.filterDepth,h=t.filterHeight,f=t.filterWidth,p=4*Math.floor(t.inChannels/4),d=t.inChannels%4;this.userCode="\n      const ivec3 strides = ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+e+", "+n+", "+r+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < "+l+"; wF++) {\n          int xF = xFCorner + wF * "+u+";\n\n          if (xF < 0 || xF >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+"; wR++) {\n            int xR = xRCorner + wR * "+s+";\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+f+"; wC++) {\n              int xC = xCCorner + wC * "+c+";\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < "+p+"; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if ("+(1===d)+") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, "+p+") *\n                  getW(wF, wR, wC, "+p+", d2);\n              } else if ("+(2===d)+") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, "+p+"),\n                  getX(batch, xF, xR, xC, "+p+" + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, "+p+", d2),\n                  getW(wF, wR, wC, "+p+" + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if ("+(3===d)+") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, "+p+"),\n                  getX(batch, xF, xR, xC, "+p+" + 1),\n                  getX(batch, xF, xR, xC, "+p+" + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, "+p+", d2),\n                  getW(wF, wR, wC, "+p+" + 1, d2),\n                  getW(wF, wR, wC, "+p+" + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Pa=function(){return function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.outputShape=t.outShape;var o=t.inHeight,a=t.inWidth,i=t.padInfo.top,u=t.padInfo.left,s=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,h=t.dilationWidth,f=t.filterHeight,p=t.filterWidth,d=t.outChannels/t.inChannels,v="",m="";n&&(v=r?"float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"\n          float activation(float x) {\n            "+n+"\n          }\n        ",m="result = activation(result);");var g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+v+"\n\n      const ivec2 strides = ivec2("+s+", "+c+");\n      const ivec2 pads = ivec2("+i+", "+u+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / "+d+";\n        int q = d2 - d1 * "+d+";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < "+f+"; wR++) {\n          int xR = xRCorner + wR * "+l+";\n\n          if (xR < 0 || xR >= "+o+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+p+"; wC++) {\n            int xC = xCCorner + wC * "+h+";\n\n            if (xC < 0 || xC >= "+a+") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        "+g+"\n        "+m+"\n        setOutput(result);\n      }\n    ";}}(),La=function(){return function(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=null),void 0===r&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.outShape;for(var o=t.inHeight,a=t.inWidth,i=t.padInfo.top,u=t.padInfo.left,s=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,h=t.dilationWidth,f=t.filterHeight,p=t.filterWidth,d=p,m="int xR; int xC; int xCOffset;",g=0;g<f;g++)for(var y=0;y<p;y++)m+="\n          vec4 xTexelR"+g+"C"+2*y+" = vec4(0.);\n          vec4 wR"+g+"C"+y+" = vec4(0.);\n          vec4 xR"+g+"C"+y+" = vec4(0.);";for(g=0;g<f;g++)for(var x=0;x<d;x++){if(m+="\n          xR = xRCorner + "+g*l+";\n          xC = xCCorner + "+(y=2*x)*h+";\n        ",1===c){if(y<p&&(m+=u%2==1?"\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < "+o+" && xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+g+"C"+y+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+g+"C"+y+" = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < "+o+" && xCOffset >= 0 && xCOffset < "+a+") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n                  xR"+g+"C"+y+" = vec4(previous.zw, xTexelR"+g+"C"+y+".xy);\n                } else {\n                  xR"+g+"C"+y+" = vec4(0, 0, xTexelR"+g+"C"+y+".xy);\n                }\n              ":"\n                if(xR >= 0 && xR < "+o+" && xC >= 0 && xC < "+a+") {\n                  xTexelR"+g+"C"+y+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+g+"C"+y+" = vec4(0.);\n                }\n\n                xR"+g+"C"+y+" = xTexelR"+g+"C"+y+";\n              ",y+1<p)){var b=u%2==0?v(h):h;h%2==0&&u%2==1||h%2!=0&&u%2!=1?(m+="\n                  xCOffset = xC + "+u%2+" + "+b+";\n\n                  if(xR >= 0 && xR < "+o+" &&\n                    xCOffset >= 0 && xCOffset < "+a+") {\n                    xTexelR"+g+"C"+(y+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n                ",h>1&&(m+="\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < "+o+" &&\n                      xCOffset >= 0 && xCOffset < "+a+") {\n                      xTexelR"+g+"C"+y+" = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR"+g+"C"+y+" = vec4(0.);\n                    }\n                  "),m+="\n                  xR"+g+"C"+(y+1)+" = vec4(\n                    xTexelR"+g+"C"+y+".zw, xTexelR"+g+"C"+(y+2)+".xy);\n                "):m+="\n                  xCOffset = xC + "+b+";\n\n                  if(xR >= 0 && xR < "+o+" &&\n                    xCOffset >= 0 && xCOffset < "+a+") {\n                    xTexelR"+g+"C"+(y+2)+" = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR"+g+"C"+(y+1)+" = xTexelR"+g+"C"+(y+2)+";\n                ";}}else y<p&&(m+="\n              if(xR >= 0 && xR < "+o+") {\n            ",u%2==1?(m+="\n                xCOffset = xC + 1 - "+c+";\n                if(xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+g+"C"+y+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+g+"C"+y+" = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < "+a+") {\n                  xTexelR"+g+"C"+(y+2)+" = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR"+g+"C"+(y+2)+" = vec4(0.);\n                }\n\n                xR"+g+"C"+y+" = vec4(\n                  xTexelR"+g+"C"+y+".zw, xTexelR"+g+"C"+(y+2)+".zw);\n              ",y+1<p&&(m+="\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + "+c+";\n                  if(xCOffset >= 0 && xCOffset < "+a+") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR"+g+"C"+(y+1)+" = vec4(xTexelR"+g+"C"+(y+2)+".xy, final.xy);\n                ")):(m+="\n                if(xC >= 0 && xC < "+a+") {\n                  xTexelR"+g+"C"+y+" = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR"+g+"C"+y+" = vec4(0.);\n                }\n\n                xCOffset = xC + "+c+";\n                if(xCOffset >= 0 && xCOffset < "+a+") {\n                  xTexelR"+g+"C"+(y+2)+" = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR"+g+"C"+(y+2)+" = vec4(0.);\n                }\n\n                xR"+g+"C"+y+" = vec4(\n                  xTexelR"+g+"C"+y+".xy, xTexelR"+g+"C"+(y+2)+".xy);\n              ",y+1<p&&(m+="\n                  xR"+g+"C"+(y+1)+" = vec4(\n                    xTexelR"+g+"C"+y+".zw, xTexelR"+g+"C"+(y+2)+".zw);\n                ")),m+="}");y<p&&(m+="\n            vec4 wTexelR"+g+"C"+y+" = getW("+g+", "+y+", d1, q);\n            wR"+g+"C"+y+" = vec4(wTexelR"+g+"C"+y+".xz, wTexelR"+g+"C"+y+".xz);\n          ",y+1<p&&(m+="\n              vec4 wTexelR"+g+"C"+(y+1)+" = getW("+g+", "+(y+1)+", d1, q);\n              wR"+g+"C"+(y+1)+" =\n                vec4(wTexelR"+g+"C"+(y+1)+".xz, wTexelR"+g+"C"+(y+1)+".xz);"));}for(g=0;g<f;g++)for(y=0;y<p;y++)m+="dotProd += xR"+g+"C"+y+" * wR"+g+"C"+y+";";var w="",C="";n&&(w=r?"vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          "+n+"\n        }":"vec4 activation(vec4 x) {\n          "+n+"\n        }",C="result = activation(result);");var E=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+w+"\n\n      const ivec2 strides = ivec2("+s+", "+c+");\n      const ivec2 pads = ivec2("+i+", "+u+");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        "+m+"\n\n        vec4 result = dotProd;\n        "+E+"\n        "+C+"\n        setOutput(result);\n      }\n    ";}}(),Wa=function(){return function(t,e,n,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=t[0],i=t[1],u=t[2],s=t[3],c=e[0],l=n[0],h=n[1];this.outputShape=[c,l,h,s];var f="bilinear"===r?1:0,p=[i-1+".0",u-1+".0"],d=p[0],v=p[1],m=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=m[0],y=m[1],x=m[2],b=h>1?[""+(u-1)/(h-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=b[0],C=b[1],E=b[2];this.userCode="\n      const float height_ratio = float("+g+");\n      const float width_ratio = float("+w+");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= "+a+") {\n          return;\n        }\n\n        float height_scale = "+y+";\n        float width_scale = "+C+";\n\n        float in_y = "+x+";\n        if( in_y < 0.0 || in_y > "+d+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n        float in_x = "+E+";\n        if( in_x < 0.0 || in_x > "+v+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if("+f+" == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ";}}(),Ua=function(){return function(t,e,n){this.variableNames=["x"],this.outputShape=t;var r=t.length,o=t[t.length-1],a=n?"<":">";this.userCode="\n      int getIndex(int i) {\n        "+(n?"return "+o+" -i - 1;":"return i;")+"\n      }\n\n      void main() {\n        "+aa(r)+" coords = getOutputCoords();\n        int end = "+Va(r,"coords")+";\n        float val = 0.0;\n        for (int i = "+o+" - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx "+a+" end) {\n            continue;\n          }\n          if (idx == end && "+e+") {\n            continue;\n          }\n          "+Va(r,"coords")+" = idx;\n          val += getX("+function(t,e){if(1===t)return ""+e;if(2===t)return e+".x, "+e+".y";if(3===t)return e+".x, "+e+".y, "+e+".z";if(4===t)return e+".x, "+e+".y, "+e+".z, "+e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}(r,"coords")+");\n        }\n        setOutput(val);\n      }\n    ";}}();function Va(t,e){if(1===t)return ""+e;if(2===t)return e+".y";if(3===t)return e+".z";if(4===t)return e+".w";throw Error("Cumulative sum for rank "+t+" is not yet supported")}var za=function(){return function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Ot.DENSE;var e=zt(t),n=Ko();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+jo(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        "+n.output+" = result;\n      }\n    ";}}(),Ga=function(){return function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Ot.DENSE;var e=zt(t),n=Ko();this.outputShape=t,this.userCode="\n      ivec3 outCoordsFromFlatIndex(int index) {\n        "+jo(["r","c","d"],t)+"\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2("+e[0]+", "+e[1]+"));\n        int index = 4 * (resTexRC.x * "+e[1]+" + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        "+n.output+" = result;\n      }\n    ";}}(),Ha=function(){function t(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode="\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = "+this.getHeightCoordString()+";\n      int w = "+this.getWidthCoordString()+";\n      int d = "+this.getDepthCoordString()+";\n\n      int in_h = h / "+e+";\n      int offset_h = imod(h, "+e+");\n      int in_w = w / "+e+";\n      int offset_w = imod(w, "+e+");\n      int offset_d = (offset_h * "+e+" + offset_w) *\n        "+this.getOutputDepthSize()+";\n      int in_d = d + offset_d;\n\n      float result = "+this.getInputSamplingString()+";\n      setOutput(result);\n    }\n  ";}return t.prototype.getHeightCoordString=function(){return "NHWC"===this.dataFormat?"coords[1]":"coords[2]"},t.prototype.getWidthCoordString=function(){return "NHWC"===this.dataFormat?"coords[2]":"coords[3]"},t.prototype.getDepthCoordString=function(){return "NHWC"===this.dataFormat?"coords[3]":"coords[1]"},t.prototype.getOutputDepthSize=function(){return "NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]},t.prototype.getInputSamplingString=function(){return "NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},t}(),qa=function(){return function(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ";}}(),Ka=function(){return function(t){this.variableNames=["A"],this.outTexUsage=Mt.DOWNLOAD;var e=Ko();this.outputShape=t,this.userCode="\n      "+$o+"\n\n      void main() {\n        float x = getAAtOutCoords();\n        "+e.output+" = encode_float(x);\n      }\n    ";}}(),ja=function(){return function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Mt.DOWNLOAD;var e=Ko();this.outputShape=t,this.userCode="\n      "+$o+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        "+e.output+" = encode_float(x);\n      }\n    ";}}(),Xa=function(){return function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"];var r=Ko(),o=e[0],a=e[1];this.outputShape=t;var i="result";n&&(i="floor(result * 255. + 0.5)"),this.userCode="\n      "+Xo(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / "+a+";\n        int c = imod(flatIndex, "+a+");\n        vec2 uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n        vec4 values = "+r.texture2D+"(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        "+r.output+" = vec4("+i+", 0., 0., 0.);\n      }\n    ";}}(),$a=function(){return function(t,e,n){void 0===n&&(n=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=Ko(),o=e[0],a=e[1];this.outputShape=t;var i="",u="result";n&&(u="floor(result * 255. + 0.5)");for(var s=0;s<=1;s++)for(var c=0;c<=1;c++){var l=2*s+c;i+="\n          localCoords = coords;\n          if(localCoords[2] + "+c+" < "+t[2]+") {\n            localCoords[2] += "+c+";\n            if(localCoords[1] + "+s+" < "+t[1]+") {\n              localCoords[1] += "+s+";\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / "+a+";\n              c = imod(flatIndex, "+a+");\n              uv = (vec2(c, r) + halfCR) / vec2("+a+".0, "+o+".0);\n              values = "+r.texture2D+"(A, uv);\n\n              if(offset == 0) {\n                result["+l+"] = values[0];\n              } else if(offset == 1) {\n                result["+l+"] = values[1];\n              } else if(offset == 2) {\n                result["+l+"] = values[2];\n              } else {\n                result["+l+"] = values[3];\n              }\n            }\n          }\n        ";}this.userCode="\n      "+Xo(t)+"\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        "+i+"\n\n        "+r.output+" = "+u+";\n      }\n    ";}}(),Ya="return real * expR - imag * expI;",Qa="return real * expI + imag * expR;",Ja=function(){return function(t,e,n){this.variableNames=["real","imag"];var r=e[1];this.outputShape=e;var o=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=n?r+".0":"1.0";this.userCode="\n      const float exponentMultiplier = "+o+";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        "+t+"\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float("+r+");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < "+r+"; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / "+a+";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ";}}(),Za=function(){function t(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode="\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.valueLoc&&(e.valueLoc=n.getUniformLocationNoThrow(r,"value")),n.gl.uniform1f(e.valueLoc,t);}},t}(),ti=function(){return function(t,e,n){this.variableNames=["A","indices"];var r=t.slice();r[n]=e,this.outputShape=r,this.rank=r.length;var o=aa(this.rank),a=function(t,e){var n=t.length;if(n>4)throw Error("Gather for rank "+n+" is not yet supported");if(1===n)return "int(getIndices(resRC))";for(var r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[],a=0;a<t.length;a++)a===e?o.push("int(getIndices("+r[a]+"))"):o.push(""+r[a]);return o.join()}(t,n);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";}}();var ei=function(){return function(t,e,n){this.sliceDim=t,this.strides=e,this.variableNames=["x","indices"],this.outputShape=n;var r=aa(e.length),o=aa(n.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode="\n        "+r+" strides = "+r+"("+this.strides+");\n         void main() {\n          "+o+" coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < "+this.sliceDim+"; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * "+a+";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      ";}}();function ni(t,e){var n=Ko();return Qt(t,e,n.version+"\n    precision highp float;\n    "+n.attribute+" vec3 clipSpacePos;\n    "+n.attribute+" vec2 uv;\n    "+n.varyingVs+" vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")}function ri(t,e){return ae(t,e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function oi(t,e){return ie(t,e,new Uint16Array([0,1,2,2,1,3]))}function ai(t,e,n,r,o,a,i){se(n,r);var u=ue(t,e),s=t.TEXTURE_2D;return qt(t,e,function(){return t.bindTexture(s,u)}),qt(t,e,function(){return t.texParameteri(s,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)}),qt(t,e,function(){return t.texParameteri(s,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}),qt(t,e,function(){return t.texParameteri(s,t.TEXTURE_MIN_FILTER,t.NEAREST)}),qt(t,e,function(){return t.texParameteri(s,t.TEXTURE_MAG_FILTER,t.NEAREST)}),qt(t,e,function(){return t.texImage2D(s,0,o,n,r,0,a,i,null)}),qt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)}),u}function ii(t,e,n,r,o){var a=Vt(n,r);return ai(t,e,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,t.FLOAT)}function ui(t,e,n,r,o){var a=Vt(n,r);return ai(t,e,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function si(t,e,n,r,o){var a=Vt(n,r);return ai(t,e,a[0],a[1],t.RGBA,t.RGBA,t.UNSIGNED_BYTE)}function ci(t,e,n,r,o){var a=Gt(n,r);return ai(t,e,a[0],a[1],o.internalFormatPackedFloat,t.RGBA,t.FLOAT)}function li(t,e,n,r,o){var a=Gt(n,r);return ai(t,e,a[0],a[1],o.internalFormatPackedHalfFloat,t.RGBA,o.textureTypeHalfFloat)}function hi(t,e,n,r){return qt(t,e,function(){return t.bindBuffer(t.ARRAY_BUFFER,r)}),le(t,e,n,"clipSpacePos",r,3,20,0)&&le(t,e,n,"uv",r,2,20,12)}function fi(t,e,n,r,o,a,i){var u,s,c;qt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,n)}),a instanceof Uint8Array?(u=new Uint8Array(r*o*4),s=t.UNSIGNED_BYTE,c=t.RGBA):(u=new Float32Array(r*o*4),s=t.FLOAT,c=i.internalFormatPackedFloat),u.set(a),qt(t,e,function(){return t.texImage2D(t.TEXTURE_2D,0,c,r,o,0,t.RGBA,s,u)}),qt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)});}function pi(t,e,n,r){qt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,n)}),r.data instanceof Uint8Array?qt(t,e,function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,r.width,r.height,0,t.RGBA,t.UNSIGNED_BYTE,r.data)}):qt(t,e,function(){return t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)}),qt(t,e,function(){return t.bindTexture(t.TEXTURE_2D,null)});}function di(t,e,n,r,o){var a=t.createBuffer();qt(t,e,function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,a)});var i=16*n*r;return qt(t,e,function(){return t.bufferData(t.PIXEL_PACK_BUFFER,i,t.STREAM_READ)}),qt(t,e,function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,0)}),qt(t,e,function(){return t.bindBuffer(t.PIXEL_PACK_BUFFER,null)}),a}function vi(t,e,n){var r=t,o=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,e),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function mi(t,e,n,r,o){var a=Vt(n,r),i=a[0],u=a[1],s=new Uint8Array(n*r*4);return qt(t,e,function(){return t.readPixels(0,0,i,u,o.downloadTextureFormat,t.UNSIGNED_BYTE,s)}),new Float32Array(s.buffer)}function gi(t,e,n,r,o,a,i,u){var s=t,c=new Float32Array(function(t,e){var n=Gt(t,e);return n[0]*n[1]*4}(a,i));return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,c),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),c}function yi(t,e,n,r){var o=new Float32Array(n*r*4);return qt(t,e,function(){return t.readPixels(0,0,r,n,t.RGBA,t.FLOAT,o)}),o}var xi=Object.freeze({createVertexShader:ni,createVertexBuffer:ri,createIndexBuffer:oi,createFloat32MatrixTexture:ii,createFloat16MatrixTexture:ui,createUnsignedBytesMatrixTexture:si,createPackedMatrixTexture:ci,createFloat16PackedMatrixTexture:li,bindVertexProgramAttributeStreams:hi,uploadDenseMatrixToTexture:fi,uploadPixelDataToTexture:pi,createBufferFromOutputTexture:di,downloadFloat32MatrixFromBuffer:vi,downloadByteEncodedFloatMatrixFromOutputTexture:mi,downloadPackedMatrixFromBuffer:gi,downloadMatrixFromPackedOutputTexture:yi}),bi=function(){function t(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=a().getNumber("WEBGL_VERSION");null!=t?(this.gl=t,Wt(e,t)):this.gl=Ut(e);var n="WEBGL_color_buffer_float";if(1===a().getNumber("WEBGL_VERSION")){if(this.textureFloatExtension=Yt(this.gl,this.debug,"OES_texture_float"),Te(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Yt(this.gl,this.debug,"OES_texture_half_float");else if(a().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),Te(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Yt(this.gl,this.debug,"EXT_color_buffer_half_float");else if(a().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",Te(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!Te(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float");}this.vertexBuffer=ri(this.gl,this.debug),this.indexBuffer=oi(this.gl,this.debug),this.framebuffer=ce(this.gl,this.debug),this.textureConfig=Ht(this.gl,this.textureHalfFloatExtension);}return Object.defineProperty(t.prototype,"debug",{get:function(){return a().getBool("DEBUG")},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){var t=this;if(!this.disposed){null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;qt(e,this.debug,function(){return e.finish()}),qt(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),qt(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),qt(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),qt(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),qt(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0;}},t.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),ii(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),ui(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),si(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),pi(this.gl,this.debug,t,e);},t.prototype.uploadDenseMatrixToTexture=function(t,e,n,r){this.throwIfDisposed(),fi(this.gl,this.debug,t,e,n,r,this.textureConfig);},t.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),li(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),ci(this.gl,this.debug,t,e,this.textureConfig)},t.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(me(this.gl,this.debug,this.framebuffer),this.outputTexture=null),qt(this.gl,this.debug,function(){return e.gl.deleteTexture(t)});},t.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,function(){return mi(r.gl,r.debug,e,n,r.textureConfig)})},t.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,r,o,a){return gi(this.gl,t,0,0,0,o,a,this.textureConfig)},t.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return vi(this.gl,t,e)},t.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var r=di(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r},t.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},t.prototype.createFence=function(t){var e,n,r=this;if(a().getBool("WEBGL_FENCE_API_ENABLED")){var o=t,i=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var t=o.clientWaitSync(i,0,0);return t===o.ALREADY_SIGNALED||t===o.CONDITION_SATISFIED},e=i;}else a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return r.isQueryAvailable(e,a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return !0};return {query:e,isFencePassed:n}},t.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var r=this;return this.downloadMatrixDriver(t,function(){return yi(r.gl,r.debug,e,n)})},t.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Jt(e,this.debug,t),r=ni(e,this.debug),o=ne(e,this.debug);return qt(e,this.debug,function(){return e.attachShader(o,r)}),qt(e,this.debug,function(){return e.attachShader(o,n)}),re(e,this.debug,o),this.debug&&oe(e,this.debug,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=hi(e,this.debug,this.program,this.vertexBuffer)),o},t.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),null!=t&&qt(this.gl,this.debug,function(){return e.gl.deleteProgram(t)});},t.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,null!=this.program&&this.debug&&oe(this.gl,this.debug,this.program),qt(this.gl,this.debug,function(){return e.gl.useProgram(t)});},t.prototype.getUniformLocation=function(t,e,n){return void 0===n&&(n=!0),this.throwIfDisposed(),n?fe(this.gl,this.debug,t,e):pe(this.gl,t,e)},t.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),qt(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},t.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},t.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),de(this.gl,this.debug,this.program,t,e,n);},t.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e);},t.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var r=Gt(e,n),o=r[0],a=r[1];this.setOutputMatrixTextureDriver(t,o,a);},t.prototype.setOutputMatrixWriteRegion=function(t,e,n,r){this.setOutputMatrixWriteRegionDriver(n,t,r,e);},t.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},t.prototype.debugValidate=function(){null!=this.program&&oe(this.gl,this.debug,this.program),ge(this.gl);},t.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),qt(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)});},t.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),qt(this.gl,this.debug,function(){return t.gl.finish()});},t.prototype.getQueryTimerExtension=function(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=Yt(this.gl,this.debug,2===a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},t.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},t.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},t.prototype.beginQuery=function(){if(2===a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),o=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,o),o},t.prototype.endQuery=function(){if(2!==a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT);}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT);}},t.prototype.waitForQueryAndGetTime=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(n){switch(n.label){case 0:return [4,S(function(){return e.disposed||e.isQueryAvailable(t,a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},t.prototype.getQueryTime=function(t,e){if(0===e)return null;if(2===e){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(t,r.QUERY_RESULT_EXT)/1e6},t.prototype.isQueryAvailable=function(t,e){if(0===e)return !0;if(2===e){var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}o=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,r.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint},t.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()});})},t.prototype.pollItems=function(){for(var t=function(t){for(var e=0;e<t.length;++e){var n=t[e]();if(!n)break}return e-1}(this.itemsToPoll.map(function(t){return t.isDoneFn})),e=0;e<=t;++e){(0, this.itemsToPoll[e].resolveFn)();}this.itemsToPoll=this.itemsToPoll.slice(t+1);},t.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||S(function(){return n.pollItems(),0===n.itemsToPoll.length});},t.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),ve(this.gl,this.debug,t,this.framebuffer),this.debug&&ge(this.gl);},t.prototype.unbindTextureToFrameBuffer=function(){null!=this.outputTexture?(ve(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&ge(this.gl)):me(this.gl,this.debug,this.framebuffer);},t.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},t.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var r=this.gl;ve(r,this.debug,t,this.framebuffer),this.debug&&ge(r),this.outputTexture=t,qt(r,this.debug,function(){return r.viewport(0,0,e,n)}),qt(r,this.debug,function(){return r.scissor(0,0,e,n)});},t.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,r){var o=this;this.throwIfDisposed(),qt(this.gl,this.debug,function(){return o.gl.scissor(t,e,n,r)});},t.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},t.prototype.throwIfNoProgram=function(){if(null==this.program)throw new Error("No GPU program is currently set.")},t}();function wi(t,e){if(t.length!==e.length)throw Error("Binary was compiled with "+t.length+" inputs, but was executed with "+e.length+" inputs");t.forEach(function(t,n){var r=t.logicalShape,o=e[n],a=o.shape;if(!C(r,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+r+" and "+a+" must match");if(!t.isUniform||!o.isUniform){var i=t.texShape,u=o.isUniform?null:o.texData.texShape;if(!C(i,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+i+" and "+u+" must match")}});}var Ci=function(){return function(t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;for(var r=n.filterWidth,o=n.inChannels,a=n.strideWidth,i=n.strideHeight,u=n.padInfo,s=n.outWidth,c=n.dilationWidth,l=n.dilationHeight,h=n.dataFormat,f=u.left,p=u.top,d=o*r,v=Ko(),m="channelsLast"===h,g=m?0:1,y=m?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+="\n          blockIndex = rc.y + "+w+";\n          pos = rc.x + "+b+";\n\n          if(blockIndex < "+t[1]+" && pos < "+t[0]+") {\n            offsetY = int(blockIndex / ("+s+")) * "+i+" - "+p+";\n            d0 = offsetY + "+l+" * (pos / "+d+");\n\n            if(d0 < "+e[g]+" && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), "+s+".) * "+a+". - "+f+".);\n              d1 = offsetX + "+c+" * (int(mod(float(pos), "+d+".) / "+o+".));\n\n              if(d1 < "+e[y]+" && d1 >= 0) {\n\n                ch = int(mod(float(pos), "+o+".));\n\n                if ("+m+") {\n                  innerDims = vec2(d1, ch);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result["+(2*b+w)+"] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";this.userCode="\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        "+x+"\n\n        "+v.output+" = result;\n      }\n    ";}}(),Ei=function(){return function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[];var a,i=e,u=t[3]-1;this.outputShape=t;var s="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+s+")":1===o?"1.0/("+s+")":"exp(log("+s+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -"+i+"; j <= "+i+"; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  "+u+") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * "+a+";\n        setOutput(val);\n      }\n    ";}}(),Ri=function(){return function(t,e,n,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=n,this.alpha=r,this.beta=o,this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < "+this.depth+"; ++d) {\n          int depthBegin = int(max(0.0, float(d - "+e+")));\n          int depthEnd = int(min(float("+this.depth+"),\n              float(d + "+e+" + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = "+this.depth+";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float("+r+") * norm + float("+n+");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float("+r+")\n                * float("+o+")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * "+o+");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ";}}(),Ii=function(){return function(t,e,n,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=e,u=t[3]-1;this.outputShape=t;var s="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+s+")":1===o?"1.0/("+s+")":"exp(log("+s+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < "+this.outputShape[3]+";\n        bool hasNextRow = c < "+this.outputShape[2]+";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - "+i+";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - "+i+"; j <= "+i+"; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2("+u+"));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * "+a+";\n        setOutput(result);\n      }\n    ";}}(),ki=function(){return function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideHeight,n=t.strideWidth,r=t.dilationHeight,o=t.effectiveFilterHeight,a=t.effectiveFilterWidth,i=o-1-t.padInfo.top,u=a-1-t.padInfo.left,s=o*a-1;this.userCode="\n      const ivec2 pads = ivec2("+i+", "+u+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+o+";\n          wR += "+r+") {\n          float dyR = float(dyRCorner + wR) / "+e+".0;\n\n          if (dyR < 0.0 || dyR >= "+t.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+a+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+n+".0;\n\n            if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = "+s+" - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * "+a+" + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Si=function(){return function(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;var e=t.strideDepth,n=t.strideHeight,r=t.strideWidth,o=t.dilationDepth,a=t.dilationHeight,i=t.dilationWidth,u=t.effectiveFilterDepth,s=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=u-1-t.padInfo.front,h=s-1-t.padInfo.top,f=c-1-t.padInfo.left,p=u*s*c-1;this.userCode="\n      const ivec3 pads = ivec3("+l+", "+h+", "+f+");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < "+u+";\n           wD += "+o+") {\n          float dyD = float(dyDCorner + wD) / "+e+".0;\n\n          if (dyD < 0.0 || dyD >= "+t.outDepth+".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < "+s+";\n              wR += "+a+") {\n            float dyR = float(dyRCorner + wR) / "+n+".0;\n\n            if (dyR < 0.0 || dyR >= "+t.outHeight+".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < "+c+";\n                wC += "+i+") {\n              float dyC = float(dyCCorner + wC) / "+r+".0;\n\n              if (dyC < 0.0 || dyC >= "+t.outWidth+".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = "+p+" -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * "+s+" * "+c+" +\n                  wR * "+c+" + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Ai=function(){return function(t,e,n,r,o,a,i){void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===a&&(a=null),void 0===i&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;var u=n?t[1]:t[2],s=Math.ceil(u/2),c=n?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",d="";a&&(p=i?"vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          "+a+"\n        }":"vec4 activation(vec4 x) {\n          "+a+"\n        }",d="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode="\n      "+p+"\n\n      const float sharedDimension = "+s+".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < "+s+"; i++) {\n          vec4 a = getMatrixA(rc.x, "+c+");\n          vec4 b = getMatrixB(rc.x, "+l+");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += ("+h[0]+" * "+f[0]+");\n          result += ("+h[1]+" * "+f[1]+");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        "+v+"\n\n        "+d+"\n\n        setOutput(result);\n      }\n    ";}}(),Di=function(){function t(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode="\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < "+(e-1)+"; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float("+(e-1)+"));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,r){null==e.seedLoc&&(e.seedLoc=n.getUniformLocation(r,"seed")),n.gl.uniform1f(e.seedLoc,t);}},t}(),Ti=function(){return function(t,e,n,r){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float("+r+"), float("+n+"),\n                      float(index == coords.y)));\n      }\n    ";}}(),Ni=function(){return function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t;var e=t.length;if(0===e)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{var n=qo("rc",e),r=aa(e),o=function(t,e,n){if(1===t)return "rc > "+e[0];for(var r="",o=t-2;o<t;o++)r+=n[o]+" >= "+e[o],o<t-1&&(r+="||");return r}(e,t,n),a=function(t,e,n,r){if(1===t)return "";var o=r.slice(-2);return "\n    int r = "+o[0]+";\n    int c = "+o[1]+";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= "+e+";\n    bool rEdge = rp1 >= "+n+";\n  "}(e,t[t.length-1],t[t.length-2],n),i=function(t,e){var n=t.length,r=function(t,e){for(var n=[],r=0;r<=1;r++)for(var o=0;o<=1;o++){for(var a=(0===r?"r":"rp1")+", "+(0===o?"c":"cp1"),i=2;i<t;i++)a=e[e.length-1-i]+","+a;n.push(a);}return n}(n,e);return 1===n?"getA(rc),\n            rc + 1 >= "+t[0]+" ? 0. : getA(rc + 1),\n            0, 0":"getA("+r[0]+"),\n          cEdge ? 0. : getA("+r[1]+"),\n          rEdge ? 0. : getA("+r[2]+"),\n          rEdge || cEdge ? 0. : getA("+r[3]+")"}(t,n);this.userCode="\n        void main() {\n          "+r+" rc = getOutputCoords();\n\n          if("+o+") {\n            setOutput(vec4(0));\n          } else {\n            "+a+"\n\n            setOutput(vec4("+i+"));\n          }\n        }\n      ";}}}();var Fi=function(){return function(t,e,n){this.variableNames=["x"],this.outputShape=e.map(function(e,n){return e[0]+t[n]+e[1]});var r=t.length,o=aa(r),a=e.map(function(t){return t[0]}).join(","),i=e.map(function(e,n){return e[0]+t[n]}).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?"\n      "+o+" start = "+o+"("+a+");\n      "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float("+n+"));\n        } else {\n          "+o+" coords = outC - start;\n          setOutput(getX("+u+"));\n        }\n      }\n    ":"\n        int start = "+a+";\n        int end = "+i+";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float("+n+"));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";}}(),_i=function(){return function(t,e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map(function(e,n){return e[0]+t[n]+e[1]});for(var r=t.length,o=aa(r),a=e.map(function(t){return t[0]}).join(","),i=e.map(function(e,n){return e[0]+t[n]}).join(","),u=qo("rc",r),s=qo("source",r),c=u[r-1]+" < "+this.outputShape[r-1],l=1===r?"source":"vec2("+s.slice(-2).join()+")",h=[o+" rc = outputLoc;",u[r-1]+" += 1;\n       if("+c+") {\n      ",1===r?"":"}\n       rc = outputLoc;\n       "+u[r-2]+" += 1;\n       if("+u[r-2]+" < "+this.outputShape[r-2]+") {",1===r?"":"  "+u[r-1]+" += 1;\n         if("+c+") {"],f=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",d=0,v=1===r?2:4;d<v;d++)p+="\n        "+h[d]+"\n        if ("+f+") {\n          result["+d+"] = float("+n+");\n        } else {\n          "+o+" source = rc - start;\n          result["+d+"] = getChannel(getX("+s.join()+"), "+l+");\n        }\n      ";p+=1===r?"} ":"}}",this.userCode="\n      const "+o+" start = "+o+"("+a+");\n      const "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        "+p+"\n        setOutput(result);\n      }\n    ";}}(),Oi=function(){return function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideHeight,a=t.strideWidth,i=t.dilationHeight,u=t.dilationWidth,s=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=t.padInfo.top,h=t.padInfo.left;this.outputShape=t.outShape;var f="avg"===e,p="0.0";if(f||(p="-1.0 / 1e-20"),n)this.userCode="\n        const ivec2 strides = ivec2("+o+", "+a+");\n        const ivec2 pads = ivec2("+l+", "+h+");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < "+s+";\n              wR += "+i+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+c+";\n                wC += "+u+") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= "+t.inWidth+") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * "+c+" + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var d=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(d="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g="\n      if ("+f+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec2 strides = ivec2("+o+", "+a+");\n      const ivec2 pads = ivec2("+l+", "+h+");\n      const float initializationValue = "+p+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+p+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < "+s+";\n            wR += "+i+") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= "+t.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+v+"; wC += 4) {\n            int xC = xCCorner + wC * "+u+";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+u+", d),\n              getValue(batch, xR, xC + 2 * "+u+", d),\n              getValue(batch, xR, xC + 3 * "+u+", d)\n            );\n\n            "+g+"\n          }\n\n          int xC = xCCorner + "+v+";\n          if ("+(1===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(2===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+u+", d),\n              initializationValue,\n              initializationValue\n            );\n\n            "+g+"\n          } else if ("+(3===m)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + "+u+", d),\n              getValue(batch, xR, xC + 2 * "+u+", d),\n              initializationValue\n            );\n\n            "+g+"\n          }\n        }\n        setOutput("+d+");\n      }\n    ";}}}(),Mi=function(){return function(t,e,n){if(this.variableNames=["x"],"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");var r=t.filterWidth,o=t.strideDepth,a=t.strideHeight,i=t.strideWidth,u=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,h=t.effectiveFilterHeight,f=t.effectiveFilterWidth,p=t.padInfo.front,d=t.padInfo.top,v=t.padInfo.left;this.outputShape=t.outShape;var m="avg"===e,g="0.0";if(m||(g="-1.0 / 1e-20"),n)this.userCode="\n        const ivec3 strides =\n            ivec3("+o+", "+a+", "+i+");\n        const ivec3 pads = ivec3("+p+", "+d+", "+v+");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < "+l+";\n              wD += "+u+") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= "+t.inDepth+") {\n              continue;\n            }\n\n            for (int wR = 0; wR < "+h+";\n                wR += "+s+") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= "+t.inHeight+") {\n                continue;\n              }\n\n              for (int wC = 0; wC < "+f+";\n                  wC += "+c+") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= "+t.inWidth+") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * "+h+" * "+f+" +\n                      wR * "+f+" + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var y=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===e&&(y="avgValue / count");var x=4*Math.floor(r/4),b=r%4,w="\n      if ("+m+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec3 strides =\n        ivec3("+o+", "+a+", "+i+");\n      const ivec3 pads = ivec3("+p+", "+d+", "+v+");\n      const float initializationValue = "+g+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= "+t.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+g+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < "+l+";\n            wD += "+u+") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= "+t.inDepth+") {\n            continue;\n          }\n\n          for (int wR = 0; wR < "+h+";\n            wR += "+s+") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+t.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+x+"; wC += 4) {\n              int xC = xCCorner + wC * "+c+";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+c+", ch),\n                getValue(batch, xD, xR, xC + 3 * "+c+", ch)\n              );\n\n              "+w+"\n            }\n\n            int xC = xCCorner + "+x+";\n            if ("+(1===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(2===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              "+w+"\n            } else if ("+(3===b)+") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + "+c+", ch),\n                getValue(batch, xD, xR, xC + 2 * "+c+", ch),\n                initializationValue\n              );\n\n              "+w+"\n            }\n          }\n          setOutput("+y+");\n        }\n      }\n    ";}}}(),Bi=function(){return function(t,e){this.variableNames=["x"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=Math.ceil(o/n);this.outputShape=[r,a];var i="0.0",u="";"prod"===e?i="1.0":"min"===e?(i="1.0 / 1e-20",u="min"):"max"===e&&(i="-1.0 / 1e-20",u="max");var s=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"sum"===e?s="sumValue":"prod"===e?s="prodValue":"all"===e?s="allValue":"any"===e&&(s="anyValue");var c=4*Math.floor(n/4),l=n%4,h="\n      if ("+("sum"===e)+") {\n        sumValue += dot(values, ones);\n      } else if ("+("prod"===e)+") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = "+u+"(values, minMaxValue);\n      }\n    ",f="vec4";"all"===e?(i="1.0",h="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",f="bvec4"):"any"===e&&(i="0.0",h="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",f="bvec4");var p="";o%n>0&&(p="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      "),this.userCode="\n      const float initializationValue = "+i+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        "+p+"\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+n+";\n\n        vec4 minMaxValue = vec4("+i+");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < "+c+"; i += 4) {\n          int inIdx = inOffset + i;\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          "+h+"\n        }\n\n        int inIdx = inOffset + "+c+";\n        if ("+(1===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(2===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          "+h+"\n        } else if ("+(3===l)+") {\n          "+f+" values = "+f+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          "+h+"\n        }\n        setOutput("+s+");\n      }\n    ";}}(),Pi=function(){return function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;for(var n="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),n+="\n        "+o+"\n        "+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+"\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result["+r+"] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        "+(r>0?"}":"")+"\n      ";}this.userCode="\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      "+jo(["r","c","d"],e)+"\n      return ivec3(r, c, d);\n    }\n  \n      "+Xo(t)+"\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = "+t[1]+";\n        int cols = "+t[2]+";\n\n        "+n+"\n\n        setOutput(result);\n      }\n    ";}}();var Li=function(){return function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,u=i[1],s=i[2],c=[n&&u>1?o-1:o,n&&s>1?a-1:a],l=[n&&u>1?u-1:u,n&&s>1?s-1:s],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,v=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+f+");\n\n        const float invHeightScale = float("+p+");\n        const float invWidthScale = float("+d+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+u+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+s+") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), "+(o-1)+".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), "+(a-1)+".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";}}(),Wi=function(){return function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],u=t[3];this.outputShape=[o,e,n,u];var s=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+s[0]/c[0]+",\n          "+s[1]/c[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";}}(),Ui=function(){return function(t,e,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=t[0],a=t[1],i=t[2],u=t[3];this.outputShape=[o,e,n,u];var s=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n];this.userCode="\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          "+s[0]/c[0]+",\n          "+s[1]/c[1]+",\n          "+s[1]/c[1]+");\n      const vec3 inputShapeRC = vec3("+a+".0, "+i+".0,\n                                     "+i+".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < "+(u-1)+";\n        bool hasNextRow = coords.z < "+(n-1)+";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ";}}(),Vi=function(){return function(t,e,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var r=e.shape,o=r[1],a=r[2],i=t.shape,u=i[1],s=i[2],c=[n&&u>1?o-1:o,n&&s>1?a-1:a],l=[n&&u>1?u-1:u,n&&s>1?s-1:s],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,v=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+h+");\n        const float widthScale = float("+f+");\n\n        const float invHeightScale = float("+p+");\n        const float invWidthScale = float("+d+");\n\n        const int winHeight = int("+v+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+u+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+s+") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float("+c[0]+") *\n                (float(dyR) / float("+l[0]+"));\n\n            float sourceFracCol =\n                float("+c[1]+") *\n                  (float(dyC) / float("+l[1]+"));\n\n            int sourceNearestRow = int(min(\n                float(int("+o+") - 1),\n                "+n+" ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int("+a+") - 1),\n                "+n+" ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";}}(),zi=function(){return function(t,e,n,r){this.variableNames=["A"],this.outputShape=[];var o=t[0],a=t[1],i=t[2],u=t[3];this.outputShape=[o,e,n,u];var s=[r&&e>1?a-1:a,r&&n>1?i-1:i],c=[r&&e>1?e-1:e,r&&n>1?n-1:n],l=r?"0.5":"0.0";this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+s[0]/c[0]+",\n          "+s[1]/c[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + "+l+")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";}}(),Gi=function(){return function(t,e){this.variableNames=["x"];var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=t,1!==n){var r=t.map(function(n,r){return function(n){return -1!==e.indexOf(n)&&1!==t[n]?t[n]+" - coords["+n+"] - 1":"coords["+n+"]"}(r)}).join(","),o=aa(n);this.userCode="\n      void main() {\n        "+o+" coords = getOutputCoords();\n        setOutput(getX("+r+"));\n      }\n    ";}else this.userCode="\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX("+t[0]+" - coord - 1));\n        }\n      ";}}(),Hi=function(){return function(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var n=t.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");this.outputShape=t;var r=qo("rc",n),o=r[n-1]+" + 1 < "+this.outputShape[n-1],a=r[n-2]+" + 1 < "+this.outputShape[n-2],i=aa(n);function u(n){var r=t.map(function(r,o){return function(n,r){return -1!==e.indexOf(n)&&1!==t[n]?t[n]+" - "+r[n]+" - 1":""+r[n]}(o,n)});return "getChannel(getX("+r.join(",")+"), vec2("+r.slice(-2).join(",")+"))"}this.userCode=1===n?"\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX("+t[0]+" - rc - 1),\n            "+t[0]+" - rc - 1);\n          if("+o+"){\n              result.g = getChannel(getX("+t[0]+" - (rc  + 1) - 1),\n                "+t[0]+" - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      ":"\n        void main() {\n          "+i+" rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = "+function(t){return u(t)}(r.slice())+";\n          if("+o+"){\n            result.g = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",u(t)}(r.slice())+";\n          }\n          if("+a+") {\n            result.b = "+function(t){return t[n-2]="("+t[n-2]+" + 1)",u(t)}(r.slice())+";\n            if("+o+") {\n              result.a = "+function(t){return t[n-1]="("+t[n-1]+" + 1)",t[n-2]="("+t[n-2]+" + 1)",u(t)}(r.slice())+";\n            }\n          }\n          setOutput(result);\n        }\n    ";}}(),qi=function(){return function(t,e,n,r,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var u=aa(o.length),s=aa(a.length),c="";1===n?c="i":2===n&&(c="i, j");var l="getIndices("+c+")",h="";1===r?h="i":2===r&&(h="i, coords[1]");var f="getUpdates("+h+")",p=e>1?"strides[j]":"strides";this.userCode="\n        "+u+" strides = "+u+"("+o+");\n\n        void main() {\n          "+s+" coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < "+t+"; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < "+e+"; j++) {\n              int index = round("+l+");\n              flattenedIndex += index * "+p+";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += "+f+";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      ";}}(),Ki=function(){return function(t,e){this.variableNames=["x","segmentIds"];var n=t.windowSize,r=t.batchSize,o=t.inSize,a=t.numSegments,i=a*Math.ceil(o/n);this.outputShape=[r,i];var u=4*Math.floor(n/4),s=n%4,c="\n        sumValue += dot(values, segFilter);\n    ",l="";o%n>0&&(l="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      ");var h="";o%n>0&&(h="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return -1.0;\n        }\n      "),this.userCode="\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        "+l+"\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        "+h+"\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          "+a+")) * float("+n+"));\n        int currentSeg = int(mod(float(outIdx), float("+a+")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < "+u+"; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          "+c+"\n        }\n\n        int inIdx = inOffset + "+u+";\n        if ("+(1===s)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          "+c+"\n        } else if ("+(2===s)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          "+c+"\n        } else if ("+(3===s)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          "+c+"\n        }\n        setOutput(sumValue);\n      }\n    ";}}(),ji=function(){return function(t,e,n){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=e,n>4)throw Error("Where for rank "+n+" is not yet supported");if(1===n)o="resRC",r="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],u=[],s=0;s<e.length;s++)u.push(""+a[s]),s<t&&i.push(""+a[s]);r=i.join(),o=u.join();}var c=aa(n);this.userCode="\n      void main() {\n        "+c+" resRC = getOutputCoords();\n        float cVal = getC("+r+");\n        if (cVal >= 1.0) {\n          setOutput(getA("+o+"));\n        } else {\n          setOutput(getB("+o+"));\n        }\n      }\n    ";}}(),Xi=function(){function t(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=aa(this.rank),r="uniform int start["+this.rank+"];",o=function(t){if(1===t)return "sourceLoc";if(t<=6)return $i.slice(0,t).map(function(t){return "sourceLoc."+t}).join(",");throw Error("Slicing for rank "+t+" is not yet supported")}(this.rank);e="\n        "+n+" sourceLoc;\n        "+n+" coords = getOutputCoords();\n        "+t.map(function(t,e){return "sourceLoc."+$i[e]+" = start["+e+"] + coords."+$i[e]+";"}).join("\n")+"\n      ",this.userCode="\n      "+r+"\n      void main() {\n        "+e+"\n        setOutput(getSource("+o+"));\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t);}},t}(),$i=["x","y","z","w","u","v"];var Yi=function(){function t(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=aa(this.rank),n=qo("coords",this.rank),r=qo("sourceLoc",this.rank),o=1===this.rank?"sourceLoc":"vec2("+r.slice(-2).join()+")",a="getChannel(getSource("+r.join()+"), "+o+")",i="\n      result.x = "+a+";\n      if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n        ++"+r[this.rank-1]+";\n        result.y = "+a+";\n        --"+r[this.rank-1]+";\n      }\n    ",u=1===this.rank?"":"\n      --"+n[this.rank-1]+";\n      if (++"+n[this.rank-2]+" < "+t[this.rank-2]+") {\n        ++"+r[this.rank-2]+";\n        result.z = "+a+";\n        if (++"+n[this.rank-1]+" < "+t[this.rank-1]+") {\n          ++"+r[this.rank-1]+";\n          result.w = "+a+";\n        }\n      }\n    ",s=this.rank<=4?"sourceLoc = coords +\n            "+e+"("+t.map(function(t,e){return "start["+e+"]"}).join()+");":t.map(function(t,e){return r[e]+" = "+n[e]+" + start["+e+"];"}).join("\n");this.userCode="\n      uniform int start["+this.rank+"];\n      void main() {\n        "+e+" coords = getOutputCoords();\n        "+e+" sourceLoc;\n        "+s+"\n        vec4 result = vec4(0.);\n        "+i+"\n        "+u+"\n        setOutput(result);\n      }\n    ";}return t.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,r){null==e.startLoc&&(e.startLoc=n.getUniformLocationNoThrow(r,"start"),null==e.startLoc)||n.gl.uniform1iv(e.startLoc,t);}},t}(),Qi=function(){return function(t,e,n){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=aa(n.length),a=aa(n.length),i="";if(1===r)i="coords * strides + begin";else{var u=0;i=n.map(function(t,e){return u++,1===n.length?"coords * strides["+e+"] + begin["+e+"]":"coords["+(u-1)+"] * strides["+e+"] + begin["+e+"]"}).join(",");}this.userCode="\n      "+o+" begin = "+o+"("+t+");\n      "+o+" strides = "+o+"("+e+");\n\n      void main() {\n        "+a+" coords = getOutputCoords();\n        setOutput(getX("+i+"));\n      }\n    ";}}(),Ji=function(){function t(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={};}return t.prototype.acquireTexture=function(t,e,n){var r,o=Zi(e,n),a=tu(t,o,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var i=this.freeTextures[a].shift();return this.usedTextures[a].push(i),i}return this.numUsedTextures++,this.log(),o===Bt.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===Bt.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===Bt.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===Bt.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===Bt.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(r),r},t.prototype.releaseTexture=function(t,e,n,r){if(null!=this.freeTextures){var o=tu(e,Zi(n,r),r);o in this.freeTextures||(this.freeTextures[o]=[]),this.freeTextures[o].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[o],i=a.indexOf(t);if(i<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(i,1),this.log();}},t.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")");}},t.prototype.getNumUsedTextures=function(){return this.numUsedTextures},t.prototype.getNumFreeTextures=function(){return this.numFreeTextures},t.prototype.dispose=function(){var t=this;if(null!=this.freeTextures){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(e){t.gpgpu.deleteMatrixTexture(e);});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(e){t.gpgpu.deleteMatrixTexture(e);});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0;}},t}();function Zi(t,e){if(t===Mt.UPLOAD)return Bt.PACKED_2X2_FLOAT32;if(t===Mt.RENDER||null==t)return function(t){return a().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?Bt.PACKED_2X2_FLOAT32:Bt.UNPACKED_FLOAT32:t?Bt.PACKED_2X2_FLOAT16:Bt.UNPACKED_FLOAT16}(e);if(t===Mt.DOWNLOAD||t===Mt.PIXELS)return Bt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+t)}function tu(t,e,n){return t[0]+"_"+t[1]+"_"+e+"_"+n}var eu=function(){return function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[r]*e[r];this.outputShape=n,this.rank=n.length;var o=aa(this.rank),a=function(t){var e=t.length;if(e>5)throw Error("Tile for rank "+e+" is not yet supported");if(1===e)return "imod(resRC, "+t[0]+")";for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[],o=0;o<t.length;o++)r.push("imod("+n[o]+", "+t[o]+")");return r.join()}(t);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";}}();var nu=function(){return function(t,e){this.variableNames=["A"];for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];this.outputShape=n,this.rank=n.length;var o=aa(this.rank),a=function(t){var e=t.length;if(e>6)throw Error("Transpose for rank "+e+" is not yet supported");for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(e),o=0;o<t.length;o++)r[t[o]]=n[o];return r.join()}(e);this.userCode="\n    void main() {\n      "+o+" resRC = getOutputCoords();\n      setOutput(getA("+a+"));\n    }\n    ";}}();var ru=function(){return function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t[e[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=aa(this.rank),a=Ho("rc",this.rank),i=new Array(this.rank);for(r=0;r<e.length;r++)i[e[r]]=a[r];var u="vec2("+i.slice(-2).join()+")",s="++"+a[this.rank-1]+" < "+n[this.rank-1],c="getChannel(getA("+i.join()+"), "+u+")";this.userCode="\n    void main() {\n      "+o+" rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = "+c+";\n      if("+s+") {\n        result[1] = "+c+";\n      }\n      --"+a[this.rank-1]+";\n      if(++"+a[this.rank-2]+" < "+n[this.rank-2]+") {\n        result[2] = "+c+";\n        if("+s+") {\n          result[3] = "+c+";\n        }\n      }\n      setOutput(result);\n    }\n    ";}}(),ou=1.7580993408473768,au=1.0507009873554805,iu=function(){return function(t,e){this.variableNames=["A"],this.outputShape=t,this.userCode="\n      float unaryOperation(float x) {\n        "+e+"\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";}}(),uu="if (isnan(x)) return x;",su="return x;",cu="return abs(x);",lu=uu+"\n  return (x < 0.0) ? 0.0 : x;\n",hu=uu+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",fu="return (x >= 0.0) ? x : (exp(x) - 1.0);",pu="\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = "+ou+";\n  float scale = "+au+";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";var du="return -x;",vu="return ceil(x);",mu="return floor(x);",gu="return exp(x);",yu="return exp(x) - 1.0;",xu=uu+"\n  return sin(x);\n",bu=uu+"\n  return cos(x);\n",wu=uu+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n",Cu=uu+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n",Eu=uu+"\n  return atan(x);\n",Ru=uu+"return log(x + sqrt(x * x + 1.0));",Iu=uu+"\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));",ku=uu+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;",Su="return x;",Au="return x;",Du="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",Tu="\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",Nu="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",Fu=function(){return function(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode="\n      vec4 unaryOperation(vec4 x) {\n        "+e+"\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";}}(),_u=function(){return function(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t;var e=t.length,n=qo("rc",e),r=aa(e),o=function(t,e){if(1===t)return "rc";for(var n="",r=0;r<t;r++)n+=e[r],r<t-1&&(n+=",");return n}(e,n),a=n.slice(-2),i=e<=1?"rc":"vec2("+a.join(",")+")";this.userCode="\n      void main() {\n        "+r+" rc = getOutputCoords();\n        vec4 packedInput = getA("+o+");\n\n        setOutput(getChannel(packedInput, "+i+"));\n      }\n    ";}}(),Ou={};function Mu(t,e){if(void 0===e&&(e=!1),"linear"===t)return e?Au:su;if("relu"===t)return e?Du:lu;if("elu"===t)return e?Nu:fu;if("relu6"===t)return e?Tu:hu;if("prelu"===t)return e?wa:xa;throw new Error("Activation "+t+" has not been implemented for the WebGL backend.")}var Bu=600;var Pu=function(t){function o(e){var n,r=t.call(this)||this;if(r.pendingRead=new WeakMap,r.pendingDisposal=new WeakSet,r.dataRefCount=new WeakMap,r.numBytesInGPU=0,r.uploadWaitMs=0,r.downloadWaitMs=0,r.warnedAboutMemory=!1,r.pendingDeletes=0,r.disposed=!1,!a().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(null==e){var o=Ut(a().getNumber("WEBGL_VERSION"));r.binaryCache=(n=a().getNumber("WEBGL_VERSION"))in Ou?Ou[n]:(Ou[n]={},Ou[n]),r.gpgpu=new bi(o),r.canvas=o.canvas,r.gpgpuCreatedLocally=!0;}else r.gpgpu=e,r.binaryCache={},r.gpgpuCreatedLocally=!1,r.canvas=e.gl.canvas;return r.textureManager=new Ji(r.gpgpu),r.numMBBeforeWarning=null==a().global.screen?1024:a().global.screen.height*a().global.screen.width*window.devicePixelRatio*Bu/1024/1024,r.texData=new so(r,Nt),r}return e(o,t),o.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},o.prototype.write=function(t,e,n){if(a().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===n&&null!=t)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var r={};return this.texData.set(r,{shape:e,dtype:n,values:t,usage:Mt.UPLOAD}),r},o.prototype.move=function(t,e,n,r){if(a().getBool("DEBUG")&&this.checkNumericalProblems(e),"complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:n,dtype:r,values:e,usage:Mt.UPLOAD});},o.prototype.readSync=function(t){var e=this.texData.get(t),n=e.values,r=e.dtype,o=e.complexTensors,a=e.slice,i=e.shape,u=e.isPacked;if(null!=a){var s=void 0;s=u?new Fu(i,Su):new iu(i,Su);var c=this.runWebGLProgram(s,[{dataId:t,shape:i,dtype:r}],r),l=this.readSync(c.dataId);return this.disposeData(c.dataId),l}if(null!=n)return this.convertAndCacheOnCPU(t);if("string"===r)return n;var h,f,p=null!=this.activeTimers;(p&&(h=Y()),"complex64"===r)?f=No(o.real.dataSync(),o.imag.dataSync()):f=this.getValuesFromTexture(t);return p&&(this.downloadWaitMs+=Y()-h),this.convertAndCacheOnCPU(t,f)},o.prototype.read=function(t){return n(this,void 0,void 0,function(){var e,n,o,i,u,s,c,l,h,f,p,d,v,m,g,y,x,b,C,E,R,I;return r(this,function(r){switch(r.label){case 0:if(this.pendingRead.has(t))return e=this.pendingRead.get(t),[2,new Promise(function(t){return e.push(t)})];if(n=this.texData.get(t),o=n.values,i=n.shape,u=n.slice,s=n.dtype,c=n.complexTensors,l=n.isPacked,null!=u)return h=void 0,h=l?new Fu(i,Su):new iu(i,Su),f=this.runWebGLProgram(h,[{dataId:t,shape:i,dtype:s}],s),p=this.read(f.dataId),this.disposeData(f.dataId),[2,p];if(null!=o)return [2,this.convertAndCacheOnCPU(t)];if(!a().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===a().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,"complex64"!==s&&a().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(t),m=this.texData.get(v.dataId),d=(I=this.gpgpu).createBufferFromTexture.apply(I,[m.texture].concat(zt(i)))),this.pendingRead.set(t,[]),"complex64"===s?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:r.sent(),r.label=2;case 2:return "complex64"!==s?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=r.sent(),x=y[0],b=y[1],g=No(x,b),[3,5];case 4:null==d?g=this.getValuesFromTexture(t):(C=w(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,C)),r.label=5;case 5:return null!=v&&this.disposeData(v.dataId),E=this.convertAndCacheOnCPU(t,g),R=this.pendingRead.get(t),this.pendingRead.delete(t),R.forEach(function(t){return t(E)}),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t),this.pendingDeletes--),[2,E]}})})},o.prototype.checkNumericalProblems=function(t){if(null!=t)for(var e=0;e<t.length;e++){var n=t[e];if(!Xt(n)){if(a().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error("The value "+n+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");throw Error("The value "+n+" cannot be represented on this device.")}}},o.prototype.getValuesFromTexture=function(t){var e,n=this.texData.get(t),r=n.shape,o=n.dtype,i=n.isPacked,u=w(r);if(a().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var s=this.decode(t),c=this.texData.get(s.dataId),l=(e=this.gpgpu).downloadMatrixFromPackedTexture.apply(e,[c.texture].concat(zt(r))).subarray(0,u);return this.disposeData(s.dataId),l}var h=a().getBool("WEBGL_PACK")&&!0===i,f=h?Ee(r):r,p=h?new ja(f):new Ka(f),d=this.runWebGLProgram(p,[{shape:f,dtype:o,dataId:t}],"float32"),v=this.texData.get(d.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(d.dataId),m},o.prototype.time=function(t){return n(this,void 0,void 0,function(){var e,n,o,a,i,u,s;return r(this,function(r){switch(r.label){case 0:return e=this.activeTimers,n=[],o=!1,null==this.programTimersStack?(this.programTimersStack=n,o=!0):this.activeTimers.push(n),this.activeTimers=n,t(),a=b(this.activeTimers.map(function(t){return t.query})).filter(function(t){return null!=t}),i=b(this.activeTimers.map(function(t){return t.name})).filter(function(t){return null!=t}),this.activeTimers=e,o&&(this.programTimersStack=null),[4,Promise.all(a)];case 1:return u=r.sent(),s={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:m(u),getExtraProfileInfo:function(){return u.map(function(t,e){return {name:i[e],ms:t}}).map(function(t){return t.name+": "+t.ms}).join(", ")},wallMs:null},this.uploadWaitMs=0,this.downloadWaitMs=0,[2,s]}})})},o.prototype.memory=function(){return {unreliable:!1,numBytesInGPU:this.numBytesInGPU}},o.prototype.startTimer=function(){return a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?this.gpgpu.beginQuery():{startMs:Y(),endMs:null}},o.prototype.endTimer=function(t){return a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(this.gpgpu.endQuery(),t):(t.endMs=Y(),t)},o.prototype.getQueryTime=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return a().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(e=t).endMs-e.startMs]})})},o.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t)){if(this.pendingRead.has(t))return this.pendingDisposal.add(t),void this.pendingDeletes++;if(this.texData.has(t)){this.releaseGPUData(t);var e=this.texData.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.texData.delete(t);}}},o.prototype.releaseGPUData=function(t){var e=this.texData.get(t),n=e.texture,r=e.dtype,o=e.texShape,a=e.usage,i=e.isPacked,u=e.slice,s=u&&u.origDataId||t,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),null!=n&&(this.numBytesInGPU-=this.computeBytes(o,r),this.textureManager.releaseTexture(n,o,a,i)));var l=this.texData.get(t);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null;},o.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},o.prototype.getDataInfo=function(t){return this.texData.get(t)},o.prototype.getCPUBackend=function(){return a().getBool("WEBGL_CPU_FORWARD")?(null==this.cpuBackend&&(this.cpuBackend=Nt.findBackend("cpu")),this.cpuBackend):null},o.prototype.shouldExecuteOnCPU=function(t,e){var n=this;return void 0===e&&(e=128),null!=this.getCPUBackend()&&t.every(function(t){return null==n.texData.get(t.dataId).texture&&t.size<e})},o.prototype.getGPGPUContext=function(){return this.gpgpu},o.prototype.complex=function(t,e){var n=this.makeOutput(t.shape,"complex64");return this.texData.get(n.dataId).complexTensors={real:Nt.keep(t.clone()),imag:Nt.keep(e.clone())},n},o.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},o.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},o.prototype.slice=function(t,e,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,e,n);if(0===w(n))return In([],n,t.dtype);var r=this.texData.get(t.dataId).isPacked,o=Yr(t.shape,e,n);if(r||!o){var i=a().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Yi(n):new Xi(n),u=i.getCustomSetupFunc(e);return this.compileAndRun(i,[t],null,u)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,e,n)},o.prototype.shallowSlice=function(t,e,n){var r=this.texData.get(t.dataId),o=this.makeOutput(n,t.dtype),a=this.texData.get(o.dataId);Object.assign(a,r),a.shape=n,a.dtype=t.dtype;var i=Qr(e,t.strides);r.slice&&(i+=r.slice.flatOffset),a.slice={flatOffset:i,origDataId:r.slice&&r.slice.origDataId||t.dataId};var u=this.dataRefCount.get(a.slice.origDataId)||1;return this.dataRefCount.set(a.slice.origDataId,u+1),o},o.prototype.stridedSlice=function(t,e,n,r){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,e,n,r);var o=jr(e,n,r);if(o.some(function(t){return 0===t}))return In([],o);var a=new Qi(e,r,o);return this.compileAndRun(a,[t])},o.prototype.reverse=function(t,e){var n=a().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Hi(t.shape,e):new Gi(t.shape,e);return this.compileAndRun(n,[t])},o.prototype.concat=function(t,e){if("complex64"===t[0].dtype){var n=t.map(function(t){return En(t)}),r=t.map(function(t){return Rn(t)});return Cn(this.concat(n,e),this.concat(r,e))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,e);if(1===t.length)return t[0];if(t.length>a().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var o=Math.floor(t.length/2),i=this.concat(t.slice(0,o),e),u=this.concat(t.slice(o),e);return this.concat([i,u],e)}if(a().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var s=new Sa(t.map(function(t){return t.shape}),e);return this.compileAndRun(s,t)}var c=bn(t.map(function(t){return t.shape}),e),l=t.map(function(t){return t.as2D(-1,w(t.shape.slice(e)))}),h=new ka(l.map(function(t){return t.shape}));return this.compileAndRun(h,l).reshape(c)},o.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,du,t.dtype);var e=new iu(t.shape,du);return this.compileAndRun(e,[t])},o.prototype.batchMatMul=function(t,e,n,r){var o=n?t.shape[2]:t.shape[1],a=r?e.shape[1]:e.shape[2],i=n?t.shape[1]:t.shape[2],u=t.shape[0];if((1===o||1===a)&&i>1e3){n&&(t=t.transpose([0,2,1])),r&&(e=e.transpose([0,2,1]));var s=1===a?t:t.as3D(u,i,1),c=1===a?2:1,l=1===a?e.as3D(u,1,i):e;return this.multiply(s,l).sum(c,!0)}var h=Ct(t.dtype,e.dtype),f=new Ai(t.shape,[u,o,a],n,r);return this.compileAndRun(f,[t,e],h)},o.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,u=t.preluActivationWeights,s=r?e.shape[2]:e.shape[1],c=o?n.shape[1]:n.shape[2],l=e.shape[0],h=Ct(e.dtype,n.dtype),f=null!=a,p=null!=u,d=i?Mu(i,!0):null,v=new Ai(e.shape,[l,s,c],r,o,f,d,p),m=[e,n];return a&&m.push(a),u&&m.push(u),this.compileAndRun(v,m,h)},o.prototype.multiply=function(t,e){if("complex64"===t.dtype){var n=this.texData.get(t.dataId),r=this.texData.get(e.dataId),o=new va(pa,t.shape,e.shape),i=new va(da,t.shape,e.shape),u=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag),this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)],s=this.compileAndRun(o,u),c=this.compileAndRun(i,u),l=this.complex(s,c);return s.dispose(),c.dispose(),l}if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.multiply(t,e);if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,ya,t.dtype);var h=new ba(ya,t.shape,e.shape);return this.compileAndRun(h,[t,e],t.dtype)},o.prototype.batchNormalization=function(t,e,n,r,o,i){var u=[t,e,n],s=null;null!=i&&(s=i.shape,u.push(i));var c=null;if(null!=o&&(c=o.shape,u.push(o)),a().getBool("WEBGL_PACK_NORMALIZATION")){var l=new fa(t.shape,e.shape,n.shape,s,c,r);return this.compileAndRun(l,u)}var h=new ha(t.shape,e.shape,n.shape,s,c,r);return this.compileAndRun(h,u)},o.prototype.localResponseNormalization4D=function(t,e,n,r,o){var i=a().getBool("WEBGL_PACK_NORMALIZATION")?new Ii(t.shape,e,n,r,o):new Ei(t.shape,e,n,r,o);return this.compileAndRun(i,[t])},o.prototype.LRNGrad=function(t,e,n,r,o,a,i){var u=new Ri(e.shape,r,o,a,i);return this.compileAndRun(u,[e,n,t])},o.prototype.tile=function(t,e){if("string"===t.dtype){var n=this.readSync(t.dataId).map(function(t){return Z(t)});return Lo(ir(t.shape,t.dtype,n),e)}var r=new eu(t.shape,e);return this.compileAndRun(r,[t])},o.prototype.pad=function(t,e,n){var r=a().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _i(t.shape,e,n):new Fi(t.shape,e,n);return this.compileAndRun(r,[t])},o.prototype.transpose=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,e);var n=a().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ru(t.shape,e):new nu(t.shape,e);return this.compileAndRun(n,[t])},o.prototype.gather=function(t,e,n){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.gather(t,e,n);var r=new ti(t.shape,e.size,n);return this.compileAndRun(r,[t,e])},o.prototype.batchToSpaceND=function(t,e,n){g(t.rank<=4,function(){return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var r=e.reduce(function(t,e){return t*e}),o=Mr(t.shape,e,r),a=Br(o.length,e.length),i=Pr(t.shape,e,r),u=Lr(n,e.length),s=Wr(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(u,s)},o.prototype.spaceToBatchND=function(t,e,n){g(t.rank<=4,function(){return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var r=e.reduce(function(t,e){return t*e}),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),u=Mr(i.shape,e,r,!1),s=Br(u.length,e.length,!1),c=Pr(i.shape,e,r,!1);return i.reshape(u).transpose(s).reshape(c)},o.prototype.reduce=function(t,e,n){var r=t.shape[0],o=t.shape[1],a=zr(o),i=new Bi({windowSize:a,inSize:o,batchSize:r},e),u=this.compileAndRun(i,[t],n);return 1===u.shape[1]?u:this.reduce(u,e,n)},o.prototype.argReduce=function(t,e,n){void 0===n&&(n=null);var r=t.shape[0],o=t.shape[1];null!=n&&(r=n.shape[0],o=n.shape[1]);var a=zr(o),i=new Go({windowSize:a,inSize:o,batchSize:r},e,null==n),u=[t];null!=n&&u.push(n);var s=this.compileAndRun(i,u,"int32");return 1===s.shape[1]?s:this.argReduce(t,e,s)},o.prototype.argReducePacked=function(t,e,n){void 0===n&&(n=null);var r=null!=n?n.shape:t.shape,o=zr(r[r.length-1]),a=new sa(r,o,e,null==n),i=null==n?[t]:[t,n],u=this.compileAndRun(a,i,"int32");return u.rank===t.rank?this.argReducePacked(t,e,u):u},o.prototype.sum=function(t,e){vn("sum",e,t.rank);var n=pn(t.shape,e),r=n[0],o=w(n[1]),a=t.as2D(-1,o),i=Et(t.dtype);return this.reduce(a,"sum",i).reshape(r)},o.prototype.prod=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,e);var n=pn(t.shape,e),r=n[0],o=w(n[1]),a=t.as2D(-1,o),i=Et(t.dtype);return this.reduce(a,"prod",i).reshape(r)},o.prototype.unsortedSegmentSum=function(t,e,n){var r=0,o=mn([r],t.rank),a=t;null!=o&&(a=t.transpose(o),r=yn(1,t.rank)[0]);var i=function(t,e,n){for(var r=[],o=t.length,a=0;a<o;a++)a!==e?r.push(t[a]):r.push(n);return r}(a.shape,r,n),u=w([a.shape[r]]),s=a.as2D(-1,u),c=Et(t.dtype),l=this.segOpCompute(s,"unsortedSegmentSum",e,c,n).reshape(i);return null!=o&&(l=l.transpose(gn(o))),l},o.prototype.segOpCompute=function(t,e,n,r,o){var a=t.shape[0],i=t.shape[1],u=function(t,e){var n,r=!1;for(t<=Vr?(n=t,r=!0):n=H(t,Math.floor(Math.sqrt(t)));!r;)n>e||n===t?r=!0:n=H(t,n+1);return n}(i,o),s=new Ki({windowSize:u,inSize:i,batchSize:a,numSegments:o},e),c=this.compileAndRun(s,[t,n],r);return c.shape[1]===o?c:(n=Wn(0,o).tile([i/u]),this.segOpCompute(c,e,n,r,o))},o.prototype.argMinMaxReduce=function(t,e,n){var r=[e];if(vn("arg"+n.charAt(0).toUpperCase()+n.slice(1),r,t.rank),!a().getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var o=pn(t.shape,r),i=o[0],u=w(o[1]),s=t.as2D(-1,u);return this.argReduce(s,n).reshape(i)}return this.argReducePacked(t,n)},o.prototype.argMin=function(t,e){return this.argMinMaxReduce(t,e,"min")},o.prototype.argMax=function(t,e){return this.argMinMaxReduce(t,e,"max")},o.prototype.cumsum=function(t,e,n,r){if(e!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+e);var o=new Ua(t.shape,n,r);return this.compileAndRun(o,[t])},o.prototype.equal=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(equal(a, b));\n","bool");var n=new ba("return float(a == b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.notEqual=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(notEqual(a, b));\n","bool");var n=new ba("return float(a != b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.less=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.less(t,e);if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThan(a, b));\n","bool");var n=new ba("return float(a < b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.lessEqual=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(lessThanEqual(a, b));\n","bool");var n=new ba("return float(a <= b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.greater=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.greater(t,e);if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThan(a, b));\n","bool");var n=new ba("return float(a > b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.greaterEqual=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(greaterThanEqual(a, b));\n","bool");var n=new ba("return float(a >= b);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.logicalNot=function(t){var e=new iu(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(e,[t])},o.prototype.logicalAnd=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n","bool");var n=new ba("return float(a >= 1.0 && b >= 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.logicalOr=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n","bool");var n=new ba("return float(a >= 1.0 || b >= 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e],"bool")},o.prototype.select=function(t,e,n){var r=new ji(t.rank,e.shape,e.rank);return this.compileAndRun(r,[t,e,n],Ct(e.dtype,n.dtype))},o.prototype.where=function(t){an("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var e=t.dataSync();return Uo(t.shape,e)},o.prototype.topk=function(t,e,n){return Wo(t.dataSync(),t.shape,t.dtype,e)},o.prototype.min=function(t,e){vn("min",e,t.rank);var n=pn(t.shape,e),r=n[0],o=w(n[1]),a=t.as2D(-1,o);return this.reduce(a,"min",a.dtype).reshape(r)},o.prototype.minimum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.minimum(t,e);var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.mod=function(t,e){var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new ba("if (b == 0.0) return NAN;\n  return mod(a, b);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.max=function(t,e){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,e);vn("max",e,t.rank);var n=pn(t.shape,e),r=n[0],o=w(n[1]),a=t.as2D(-1,o);return this.reduce(a,"max",a.dtype).reshape(r)},o.prototype.maximum=function(t,e){if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.maximum(t,e);var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.all=function(t,e){vn("all",e,t.rank);var n=pn(t.shape,e),r=n[0],o=w(n[1]),a=t.as2D(-1,o);return this.reduce(a,"all",a.dtype).reshape(r)},o.prototype.any=function(t,e){vn("any",e,t.rank);var n=pn(t.shape,e),r=n[0],o=w(n[1]),a=t.as2D(-1,o);return this.reduce(a,"any",a.dtype).reshape(r)},o.prototype.squaredDifference=function(t,e){var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca("return (a - b) * (a - b);",t.shape,e.shape):new ba("return (a - b) * (a - b);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.realDivide=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS")){return this.packedBinaryOp(t,e,"\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n","float32",!0)}var n=new ba("\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",t.shape,e.shape);return this.compileAndRun(n,[t,e],"float32")},o.prototype.floorDiv=function(t,e){if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n","int32");var n=new ba("\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",t.shape,e.shape);return this.compileAndRun(n,[t,e],"int32")},o.prototype.add=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,ma);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.add(t,e);var n=Ct(t.dtype,e.dtype);if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,ma,n);var r=new ba(ma,t.shape,e.shape);return this.compileAndRun(r,[t,e],n)},o.prototype.packedUnaryOp=function(t,e,n){var r=new Fu(t.shape,e);return this.compileAndRun(r,[t],n)},o.prototype.packedBinaryOp=function(t,e,n,r,o){void 0===o&&(o=!1);var a=new Ca(n,t.shape,e.shape,o);return this.compileAndRun(a,[t,e],r)},o.prototype.complexSeparableBinaryOp=function(t,e,n){var r=this,o=this.texData.get(t.dataId),a=this.texData.get(e.dataId),i=[[o.complexTensors.real,a.complexTensors.real],[o.complexTensors.imag,a.complexTensors.imag]].map(function(o){var a=o[0],i=o[1],u=r.makeComplexComponentTensorInfo(t,a),s=r.makeComplexComponentTensorInfo(e,i),c=new ba(n,t.shape,e.shape);return r.compileAndRun(c,[u,s],Ct(a.dtype,i.dtype))}),u=i[0],s=i[1],c=this.complex(u,s);return u.dispose(),s.dispose(),c},o.prototype.makeComplexComponentTensorInfo=function(t,e){return {dataId:e.dataId,dtype:e.dtype,shape:t.shape}},o.prototype.addN=function(t){if(1===t.length)return t[0];if(t.length>a().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var e=Math.floor(t.length/2),n=this.addN(t.slice(0,e)),r=this.addN(t.slice(e));return this.addN([n,r])}var o=t.map(function(t){return t.dtype}).reduce(function(t,e){return Ct(t,e)}),i=t.map(function(t){return t.shape}),u=a().getBool("WEBGL_PACK")?new zo(t[0].shape,i):new Vo(t[0].shape,i);return this.compileAndRun(u,t,o)},o.prototype.subtract=function(t,e){if("complex64"===t.dtype&&"complex64"===e.dtype)return this.complexSeparableBinaryOp(t,e,ga);if(this.shouldExecuteOnCPU([t,e]))return this.cpuBackend.subtract(t,e);var n=Ct(t.dtype,e.dtype);if(a().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,e,ga,t.dtype);var r=new ba(ga,t.shape,e.shape);return this.compileAndRun(r,[t,e],n)},o.prototype.pow=function(t,e){var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new ba("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",t.shape,e.shape),r=Ct(t.dtype,e.dtype);return this.compileAndRun(n,[t,e],r)},o.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,vu,t.dtype);var e=new iu(t.shape,vu);return this.compileAndRun(e,[t])},o.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,mu,t.dtype);var e=new iu(t.shape,mu);return this.compileAndRun(e,[t])},o.prototype.sign=function(t){var e=new iu(t.shape,"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");return this.compileAndRun(e,[t])},o.prototype.isNaN=function(t){var e=new iu(t.shape,"return float(isnan(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.isInf=function(t){var e=new iu(t.shape,"return float(isinf(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.isFinite=function(t){var e=new iu(t.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(e,[t],"bool")},o.prototype.round=function(t){var e=new iu(t.shape,"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");return this.compileAndRun(e,[t])},o.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,gu,t.dtype);var e=new iu(t.shape,gu);return this.compileAndRun(e,[t])},o.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,yu,t.dtype);var e=new iu(t.shape,yu);return this.compileAndRun(e,[t])},o.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,"\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n",t.dtype);var e=new iu(t.shape,"if (x < 0.0) return NAN;\n  return log(x);");return this.compileAndRun(e,[t])},o.prototype.log1p=function(t){var e=new iu(t.shape,"return log(1.0 + x);");return this.compileAndRun(e,[t])},o.prototype.sqrt=function(t){var e=new iu(t.shape,"return sqrt(x);");return this.compileAndRun(e,[t])},o.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var e=new iu(t.shape,"return inversesqrt(x);");return this.compileAndRun(e,[t])},o.prototype.reciprocal=function(t){var e=new iu(t.shape,"return 1.0 / x;");return this.compileAndRun(e,[t])},o.prototype.relu=function(t){var e;return e=a().getBool("WEBGL_PACK")?new Fu(t.shape,Du):new iu(t.shape,lu),this.compileAndRun(e,[t])},o.prototype.relu6=function(t){var e;return e=a().getBool("WEBGL_PACK")?new Fu(t.shape,Tu):new iu(t.shape,hu),this.compileAndRun(e,[t])},o.prototype.prelu=function(t,e){var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca(wa,t.shape,e.shape):new ba(xa,t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.elu=function(t){if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Nu,t.dtype);var e=new iu(t.shape,fu);return this.compileAndRun(e,[t])},o.prototype.eluDer=function(t,e){var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",t.shape,e.shape):new ba("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.selu=function(t){var e=new iu(t.shape,pu);return this.compileAndRun(e,[t])},o.prototype.int=function(t){var e=new iu(t.shape,"return float(int(x));");return this.compileAndRun(e,[t],"int32")},o.prototype.clip=function(t,e,n){var r,o=(r=a().getBool("WEBGL_PACK_CLIP")?new Ra(t.shape):new Ea(t.shape)).getCustomSetupFunc(e,n);return this.compileAndRun(r,[t],null,o)},o.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(a().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,cu,t.dtype);var e=new iu(t.shape,cu);return this.compileAndRun(e,[t])},o.prototype.complexAbs=function(t){var e=this.texData.get(t.dataId),n=new Ia(t.shape),r=[this.makeComplexComponentTensorInfo(t,e.complexTensors.real),this.makeComplexComponentTensorInfo(t,e.complexTensors.imag)];return this.compileAndRun(n,r)},o.prototype.sigmoid=function(t){var e=new iu(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(e,[t])},o.prototype.softplus=function(t){var e=new iu(t.shape,"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");return this.compileAndRun(e,[t])},o.prototype.sin=function(t){var e=new iu(t.shape,xu);return this.compileAndRun(e,[t])},o.prototype.cos=function(t){var e=new iu(t.shape,bu);return this.compileAndRun(e,[t])},o.prototype.tan=function(t){var e=new iu(t.shape,"return tan(x);");return this.compileAndRun(e,[t])},o.prototype.asin=function(t){var e=new iu(t.shape,wu);return this.compileAndRun(e,[t])},o.prototype.acos=function(t){var e=new iu(t.shape,Cu);return this.compileAndRun(e,[t])},o.prototype.atan=function(t){var e=new iu(t.shape,Eu);return this.compileAndRun(e,[t])},o.prototype.atan2=function(t,e){var n=a().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ca("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",t.shape,e.shape):new ba("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",t.shape,e.shape);return this.compileAndRun(n,[t,e])},o.prototype.sinh=function(t){var e=new iu(t.shape,"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},o.prototype.cosh=function(t){var e=new iu(t.shape,"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");return this.compileAndRun(e,[t])},o.prototype.tanh=function(t){var e=new iu(t.shape,"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");return this.compileAndRun(e,[t])},o.prototype.asinh=function(t){var e=new iu(t.shape,Ru);return this.compileAndRun(e,[t])},o.prototype.acosh=function(t){var e=new iu(t.shape,Iu);return this.compileAndRun(e,[t])},o.prototype.atanh=function(t){var e=new iu(t.shape,ku);return this.compileAndRun(e,[t])},o.prototype.erf=function(t){var e=new iu(t.shape,'\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n');return this.compileAndRun(e,[t])},o.prototype.step=function(t,e){var n=new iu(t.shape,function(t){return void 0===t&&(t=0),uu+"\n    return x > 0.0 ? 1.0 : float("+t+");\n  "}(e));return this.compileAndRun(n,[t])},o.prototype.conv2dByMatMul=function(t,e,n,r,o,i){var u=t.shape,s=this.texData.get(t.dataId),c=n.inChannels,l=u[0]*u[1]*u[2],h=n.outChannels,f="channelsLast"===n.dataFormat,p=(1===l||1===h)&&c>1e3,d=u[2]%2!=0&&!!s.isPacked;if(p||!a().getBool("WEBGL_LAZILY_UNPACK")||!a().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!d){var v=f?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],m=this.reshape(t,[1,v,n.inChannels]),y=this.reshape(e,[1,n.inChannels,n.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b:y,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:i}),n.outShape)}var x=f?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),b={dataId:t.dataId,shape:[1,x,n.inChannels],dtype:t.dtype},w=s.shape;s.shape=s.shape.slice(),s.shape[s.shape.length-2]++,g(ke(s.shape,b.shape),function(){return "packed reshape "+s.shape+" to "+b.shape+" isn't free"});var C=this.reshape(e,[1,n.inChannels,n.outChannels]),E=this.fusedBatchMatMul({a:b,b:C,transposeA:!1,transposeB:!1,bias:r,activation:o,preluActivationWeights:i}),R=this.texData.get(E.dataId);return g(R.isPacked,function(){return "batchMatMul result is expected to be packed"}),s.shape=w,R.shape=n.outShape,Nt.makeTensorFromDataId(E.dataId,n.outShape,E.dtype)},o.prototype.conv2dWithIm2Row=function(t,e,n,r,o,a){var i=n.filterWidth,u=n.filterHeight,s=n.inChannels,c=n.outWidth,l=n.outHeight,h="channelsLast"===n.dataFormat,f=i*u*s,p=l*c,d=[f,p],v=t.squeeze([0]),m=e.reshape([1,f,-1]),g=new Ci(d,v.shape,n),y=this.compileAndRun(g,[v]).reshape([1,d[0],d[1]]),x=null!=r,b=null!=a,w=o?Mu(o,!0):null,C=new Ai(y.shape,[1,p,n.outChannels],!0,!1,x,w,b),E=[y,m];r&&E.push(r),b&&E.push(a);var R=this.compileAndRun(C,E);return h?R.reshape([1,l,c,n.outChannels]):R.reshape([1,n.outChannels,l,c])},o.prototype.fusedConv2d=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,i=t.activation,u=t.preluActivationWeights;if(1===r.filterHeight&&1===r.filterWidth&&1===r.dilationHeight&&1===r.dilationWidth&&1===r.strideHeight&&1===r.strideWidth&&("SAME"===r.padInfo.type||"VALID"===r.padInfo.type))return this.conv2dByMatMul(e,n,r,o,i,u);if(a().getBool("WEBGL_CONV_IM2COL")&&1===e.shape[0])return this.conv2dWithIm2Row(e,n,r,o,i,u);var s=null!=o,c=null!=u,l=i?Mu(i,!1):null,h=new Ma(r,s,l,c),f=[e,n];return o&&f.push(o),u&&f.push(u),this.compileAndRun(h,f)},o.prototype.conv2d=function(t,e,n){if(1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type))return this.conv2dByMatMul(t,e,n);if(a().getBool("WEBGL_CONV_IM2COL")&&1===t.shape[0])return this.conv2dWithIm2Row(t,e,n);var r=new Ma(n);return this.compileAndRun(r,[t,e])},o.prototype.conv2dDerInput=function(t,e,n){var r=new Ta(n);return this.compileAndRun(r,[t,e])},o.prototype.conv2dDerFilter=function(t,e,n){var r=new Da(n);return this.compileAndRun(r,[t,e])},o.prototype.fusedDepthwiseConv2D=function(t){var e,n=t.input,r=t.filter,o=t.convInfo,i=t.bias,u=t.activation,s=t.preluActivationWeights,c=a().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1,l=u?Mu(u,c):null,h=[n,r],f=null!=i,p=null!=s;return f&&h.push(i),p&&h.push(s),c?(e=new La(o,f,l,p),this.compileAndRun(e,h)):(e=new Pa(o,f,l,p),this.compileAndRun(e,h))},o.prototype.depthwiseConv2D=function(t,e,n){var r;return a().getBool("WEBGL_PACK_DEPTHWISECONV")&&n.strideWidth<=2&&n.outChannels/n.inChannels==1?(r=new La(n),this.compileAndRun(r,[t,e])):(r=new Pa(n),this.compileAndRun(r,[t,e]))},o.prototype.depthwiseConv2DDerInput=function(t,e,n){var r=new Oa(n);return this.compileAndRun(r,[t,e])},o.prototype.depthwiseConv2DDerFilter=function(t,e,n){var r=new _a(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3d=function(t,e,n){var r=new Ba(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3dDerInput=function(t,e,n){var r=new Fa(n);return this.compileAndRun(r,[t,e])},o.prototype.conv3dDerFilter=function(t,e,n){var r=new Na(n);return this.compileAndRun(r,[t,e])},o.prototype.maxPool=function(t,e){var n=new Oi(e,"max",!1);return this.compileAndRun(n,[t])},o.prototype.avgPool=function(t,e){var n=new Oi(e,"avg",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.maxPoolBackprop=function(t,e,n,r){var o=new Oi(r,"max",!0),a=this.compileAndRun(o,[e]),i=new ki(r),u=this.compileAndRun(i,[t,a],e.dtype);return a.dispose(),u},o.prototype.avgPoolBackprop=function(t,e,n){var r=new ca(n);return this.compileAndRun(r,[t],e.dtype)},o.prototype.cast=function(t,e){return So(t,e,this)},o.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),u=t.shape.slice();u[e]=1;var s=new Array(n);for(a=0;a<s.length;a++)i[e]=a,s[a]=this.slice(t,i,u).reshape(r);return s},o.prototype.avgPool3d=function(t,e){var n=new Mi(e,"avg",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.avgPool3dBackprop=function(t,e,n){var r=new la(n);return this.compileAndRun(r,[t],e.dtype)},o.prototype.maxPool3d=function(t,e){var n=new Mi(e,"max",!1);return this.compileAndRun(n,[t],"float32")},o.prototype.maxPool3dBackprop=function(t,e,n,r){var o=new Mi(r,"max",!0),a=this.compileAndRun(o,[e]),i=new Si(r),u=this.compileAndRun(i,[t,a],e.dtype);return a.dispose(),u},o.prototype.reshape=function(t,e){var n=this.texData.get(t.dataId);if(n.isPacked&&!ke(t.shape,e)&&(null===n.texture||!ke(n.shape,e))){var r=this.packedReshape(t,e);return Nt.makeTensorFromDataId(r.dataId,r.shape,r.dtype)}return Ao(t,e)},o.prototype.resizeBilinear=function(t,e,n,r){var o=a().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Ui(t.shape,e,n,r):new Wi(t.shape,e,n,r);return this.compileAndRun(o,[t],"float32")},o.prototype.resizeBilinearBackprop=function(t,e,n){var r=new Li(t,e,n);return this.compileAndRun(r,[t])},o.prototype.resizeNearestNeighbor=function(t,e,n,r){var o=new zi(t.shape,e,n,r);return this.compileAndRun(o,[t])},o.prototype.resizeNearestNeighborBackprop=function(t,e,n){var r=new Vi(t,e,n);return this.compileAndRun(r,[t])},o.prototype.multinomial=function(t,e,n,r){var o=e?t:io(t),a=o.shape[0],i=o.shape[1],u=new Di(a,i,n),s=u.getCustomSetupFunc(r);return this.compileAndRun(u,[o],"int32",s)},o.prototype.oneHot=function(t,e,n,r){var o=new Ti(t.size,e,n,r);return this.compileAndRun(o,[t])},o.prototype.diag=function(t){var e=new qa(t.size);return this.compileAndRun(e,[t])},o.prototype.nonMaxSuppression=function(t,e,n,r,o){return an("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Mo(t.dataSync(),e.dataSync(),n,r,o)},o.prototype.cropAndResize=function(t,e,n,r,o,a){var i=new Wa(t.shape,e.shape,r,o,a);return this.compileAndRun(i,[t,e,n],"float32")},o.prototype.depthToSpace=function(t,e,n){g(e>1,function(){return "blockSize should be > 1 for depthToSpace, but was: "+e});var r=t.shape[0],o="NHWC"===n?t.shape[1]:t.shape[2],a="NHWC"===n?t.shape[2]:t.shape[3],i="NHWC"===n?t.shape[3]:t.shape[1],u=o*e,s=a*e,c=i/(e*e),l=new Ha("NHWC"===n?[r,u,s,c]:[r,c,u,s],e,n);return this.compileAndRun(l,[t])},o.prototype.split=function(t,e,n){return Po(t,e,n)},o.prototype.scatterND=function(t,e,n){var r=Hr(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,u=r.strides,s=r.outputSize,c=[s/i,i],l=t.reshape([a,o]),h=e.reshape([a,i]);if(0===s)return Ao(In([]),n);var f=Sn(0),p=new qi(a,o,l.rank,h.rank,u,c);return this.compileAndRun(p,[h,l,f]).reshape(n)},o.prototype.sparseToDense=function(t,e,n,r){var o=Hr(0,t,n),a=o.sliceRank,i=o.numUpdates,u=o.strides,s=o.outputSize,c=new qi(i,a,t.rank,e.rank,u,[s,1],!1);return this.compileAndRun(c,[e,t,r]).reshape(n)},o.prototype.fft=function(t){return this.fftImpl(t,!1)},o.prototype.ifft=function(t){return this.fftImpl(t,!0)},o.prototype.fftImpl=function(t,e){var n=this.texData.get(t.dataId),r=new Ja(Ya,t.shape,e),o=new Ja(Qa,t.shape,e),a=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag)],i=this.compileAndRun(r,a),u=this.compileAndRun(o,a),s=this.complex(i,u).as2D(t.shape[0],t.shape[1]);return i.dispose(),u.dispose(),s},o.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=Ur(t,e),a=o[0],i=o[1],u=o[2],s=o[3],c=e.reshape([i,r]),l=t.reshape([t.size/u,u]),h=new ei(r,s,[i,u]);return this.compileAndRun(h,[l,c]).reshape(a)},o.prototype.fill=function(t,e,n){if("string"===(n=n||z(e))){var r=F(n,w(t));return r.fill(e),Nt.makeTensor(r,t,n,this)}var o=new Za(t,e),a=o.getCustomSetupFunc(e);return this.compileAndRun(o,[],n,a)},o.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},o.prototype.zerosLike=function(t){return this.fill(t.shape,"string"===t.dtype?"":0,t.dtype)},o.prototype.linspace=function(t,e,n){return Do(t,e,n)},o.prototype.makeTensorInfo=function(t,e){var n=this.write(null,t,e);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:e}},o.prototype.makeOutput=function(t,e){var n=this.makeTensorInfo(t,e).dataId;return Nt.makeTensorFromDataId(n,t,e,this)},o.prototype.unpackTensor=function(t){var e=new _u(t.shape);return this.runWebGLProgram(e,[t],t.dtype)},o.prototype.packTensor=function(t){var e=new Ni(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)},o.prototype.packedReshape=function(t,e){var n=[we(t.shape)].concat(Ce(t.shape)),r={dtype:t.dtype,shape:n,dataId:t.dataId},o=[we(e)].concat(Ce(e)),a=new Pi(o,n),i=this.runWebGLProgram(a,[r],t.dtype,null,!0);return {dataId:i.dataId,shape:e,dtype:i.dtype}},o.prototype.decode=function(t){var e,n=this.texData.get(t),r=n.isPacked,o=n.shape,a=n.dtype,i=Ee(o);e=r?new Ga(i):new za(i);return {dtype:a,shape:o,dataId:this.runWebGLProgram(e,[{shape:i,dtype:a,dataId:t}],a,null,!0).dataId}},o.prototype.runWebGLProgram=function(t,e,n,r,o){var i=this;void 0===o&&(o=!1);var u=this.makeTensorInfo(t.outputShape,n),s=this.texData.get(u.dataId);if(t.packedOutput&&(s.isPacked=!0),t.outPackingScheme===Ot.DENSE){var c=zt(t.outputShape);s.texShape=c.map(function(t){return 2*t});}if(null!=t.outTexUsage&&(s.usage=t.outTexUsage),0===w(u.shape))return s.values=N(u.dtype,0),u;var l=[],h=e.map(function(e){if("complex64"===e.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var n=i.texData.get(e.dataId);if(null==n.texture){if(!t.packedInputs&&w(e.shape)<=a().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return {shape:e.shape,texData:null,isUniform:!0,uniformValues:n.values};t.packedInputs&&(n.isPacked=!0,n.shape=e.shape);}else if(!!n.isPacked!=!!t.packedInputs)e=n.isPacked?i.unpackTensor(e):i.packTensor(e),l.push(e),n=i.texData.get(e.dataId);else if(n.isPacked&&!ke(n.shape,e.shape)){var r=e,o=e.shape;e.shape=n.shape,e=i.packedReshape(e,o),l.push(e),n=i.texData.get(e.dataId),r.shape=o;}return i.uploadToGPU(e.dataId),{shape:e.shape,texData:n,isUniform:!1}});this.uploadToGPU(u.dataId);var f,p={shape:u.shape,texData:s,isUniform:!1},d=function(t,e,n){var r="";e.concat(n).forEach(function(t){var e=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0,n=t.isUniform?"uniform":t.texData.texShape;r+=t.shape+"_"+n+"_"+e;});var o=t.userCode,a=t.constructor.name;return a+="_"+r+"_"+o}(t,h,p),v=this.getAndSaveBinary(d,function(){return function(t,e,n,r){var o=e.userCode,i=n.map(function(t,n){var r={logicalShape:t.shape,texShape:t.isUniform?null:t.texData.texShape,isUniform:t.isUniform,isPacked:!t.isUniform&&t.texData.isPacked,flatOffset:null};return null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0&&(r.flatOffset=t.texData.slice.flatOffset),{name:e.variableNames[n],shapeInfo:r}}),u=i.map(function(t){return t.shapeInfo}),s={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},c=Yo(i,s,o,e.packedInputs),l=t.createProgram(c),h=null,f=t.getUniformLocation(l,"NAN",!1);1===a().getNumber("WEBGL_VERSION")&&(h=t.getUniformLocation(l,"INFINITY",!1));for(var p={},d=0;d<e.variableNames.length;d++){var v=e.variableNames[d];p[v]=t.getUniformLocation(l,v,!1),p["offset"+v]=t.getUniformLocation(l,"offset"+v,!1);}return {program:e,source:c,webGLProgram:l,uniformLocations:p,inShapeInfos:u,outShapeInfo:s,infLoc:h,nanLoc:f}}(i.gpgpu,t,h,p)}),m=null!=this.activeTimers;if(m&&(f=this.startTimer()),function(t,e,n,r,o){wi(e.inShapeInfos,n),wi([e.outShapeInfo],[r]);var i=r.texData.texture,u=r.texData.texShape;r.texData.isPacked?t.setOutputPackedMatrixTexture(i,u[0],u[1]):t.setOutputMatrixTexture(i,u[0],u[1]),t.setProgram(e.webGLProgram),1===a().getNumber("WEBGL_VERSION")&&null!==e.infLoc&&t.gl.uniform1f(e.infLoc,1/0),null!==e.nanLoc&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach(function(n,r){var o=e.program.variableNames[r],a=e.uniformLocations[o],i=e.uniformLocations["offset"+o];if(null!=a)if(n.isUniform)if(w(n.shape)<2)t.gl.uniform1f(a,n.uniformValues[0]);else{var u=n.uniformValues;u instanceof Float32Array||(u=new Float32Array(u)),t.gl.uniform1fv(a,u);}else null!=n.texData.slice&&null!=i&&t.gl.uniform1i(i,n.texData.slice.flatOffset),t.setInputMatrixTexture(n.texData.texture,a,r);}),null!=o&&o(t,e.webGLProgram),t.executeProgram();}(this.gpgpu,v,h,p,r),l.forEach(function(t){return i.disposeData(t.dataId)}),m&&(f=this.endTimer(f),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(f)})),!a().getBool("WEBGL_LAZILY_UNPACK")&&s.isPacked&&!1===o){var g=this.unpackTensor(u);return this.disposeData(u.dataId),g}return u},o.prototype.compileAndRun=function(t,e,n,r,o){void 0===o&&(o=!1),n=n||e[0].dtype;var a=this.runWebGLProgram(t,e,n,r,o);return Nt.makeTensorFromDataId(a.dataId,a.shape,a.dtype)},o.prototype.getAndSaveBinary=function(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]},o.prototype.getTextureManager=function(){return this.textureManager},o.prototype.dispose=function(){this.disposed||(this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0);},o.prototype.floatPrecision=function(){var t=this;return null==this.floatPrecisionValue&&(this.floatPrecisionValue=Ke(function(){if(!a().get("WEBGL_RENDER_FLOAT32_ENABLED")){var e=a().getBool("DEBUG");a().set("DEBUG",!1);var n=t.abs(Sn(1e-8)).dataSync()[0];if(a().set("DEBUG",e),n>0)return 32}return 16})),this.floatPrecisionValue},o.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},o.prototype.uploadToGPU=function(t){var e,n=this.texData.get(t),r=n.shape,o=n.dtype,a=n.values,i=n.texture,u=n.usage,s=n.isPacked;if(null==i){var c,l=null!=this.activeTimers;l&&(c=Y());var h=n.texShape;if(null==h&&(h=Re(r,s),n.texShape=h),null!=a){var f=Ee(r),p=void 0,d=h[1],v=h[0],m=a instanceof Uint8Array;s?(d=(e=Gt(h[0],h[1]))[0],v=e[1],p=new $a(f,[v,d],m)):p=new Xa(f,[v,d],m);var g=this.makeTensorInfo([v,d],o);this.texData.get(g.dataId).usage=m?Mt.PIXELS:Mt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),d,v,a);var y=this.runWebGLProgram(p,[g],o,null,!0),x=this.texData.get(y.dataId);n.texture=x.texture,n.texShape=x.texShape,n.isPacked=x.isPacked,n.usage=x.usage,this.disposeData(g.dataId),this.texData.delete(y.dataId),n.values=null,l&&(this.uploadWaitMs+=Y()-c);}else{var b=this.acquireTexture(h,u,o,s);n.texture=b;}}},o.prototype.convertAndCacheOnCPU=function(t,e){var n=this.texData.get(t),r=n.dtype;return this.releaseGPUData(t),null!=e&&(n.values=function(t,e){if("float32"===e||"complex64"===e)return t;if("int32"===e||"bool"===e){for(var n="int32"===e?new Int32Array(t.length):new Uint8Array(t.length),r=0;r<n.length;++r)n[r]=Math.round(t[r]);return n}throw new Error("Unknown dtype "+e)}(e,r)),n.values},o.prototype.acquireTexture=function(t,e,n,r){if(this.numBytesInGPU+=this.computeBytes(t,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var o=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+o+" MB, most likely due to a memory leak");}return this.textureManager.acquireTexture(t,e,r)},o.prototype.computeBytes=function(t,e){return t[0]*t[1]*P(e)},o}(co);Ft()&&Nt.registerBackend("webgl",function(){return new Pu},2);var Lu=wn({square_:function(t){var e=cn(t,"x","square"),n=[e];return Nt.runKernelFunc(function(t,n){return n([e]),t.square(e)},{x:e},function(t,e){var n=e[0];return {x:function(){return t.mul(n.toFloat().mul(2))}}},"Square",{},n,[])}});var Wu=wn({abs_:function(t){var e=cn(t,"x","abs");return "complex64"===e.dtype?Nt.runKernelFunc(function(t){return t.complexAbs(e)},{$x:e}):Nt.runKernelFunc(function(t,n){var r=t.abs(e);return n([e]),r},{x:e},function(t,e){var n=e[0];return {x:function(){return t.mul(n.toFloat().step(-1))}}},"Abs")}}),Uu=wn({acos_:function(t){var e=cn(t,"x","acos");return Nt.runKernelFunc(function(t,n){var r=t.acos(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(Sn(1).sub(n.toFloat().square()).sqrt()).neg()}}})}}),Vu=wn({acosh_:function(t){var e=cn(t,"x","acosh");return Nt.runKernelFunc(function(t,n){var r=t.acosh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(n.toFloat().square().sub(1).sqrt())}}})}}),zu=wn({asin_:function(t){var e=cn(t,"x","asin");return Nt.runKernelFunc(function(t,n){var r=t.asin(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(Sn(1).sub(n.toFloat().square()).sqrt())}}})}}),Gu=wn({asinh_:function(t){var e=cn(t,"x","asinh");return Nt.runKernelFunc(function(t,n){var r=t.asinh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.divStrict(Sn(1).add(n.toFloat().square()).sqrt())}}})}}),Hu=wn({atan_:function(t){var e=cn(t,"x","atan");return Nt.runKernelFunc(function(t,n){var r=t.atan(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat().square().add(1))}}})}}),qu=wn({atanh_:function(t){var e=cn(t,"x","atanh");return Nt.runKernelFunc(function(t,n){var r=t.atanh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(Sn(1).sub(n.toFloat().square()))}}})}}),Ku=wn({ceil_:function(t){var e=cn(t,"x","ceil");return Nt.runKernelFunc(function(t){return t.ceil(e)},{$x:e},function(t){return {$x:function(){return Vn(t)}}})}}),ju=wn({clipByValue_:function(t,e,n){var r=cn(t,"x","clipByValue");g(e<=n,function(){return "Error in clip: min ("+e+") must be less than or equal to max ("+n+")."});var o=[r],a={min:e,max:n};return Nt.runKernelFunc(function(t,o){var a=t.clip(r,e,n);return o([r]),a},{x:r},function(t,r){var o=r[0];return {x:function(){return t.where(o.greaterEqual(e).logicalAnd(o.lessEqual(n)),Vn(t))}}},"ClipByValue",a,o)}}),Xu=wn({cos_:function(t){var e=cn(t,"x","cos");return Nt.runKernelFunc(function(t,n){var r=t.cos(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().sin().neg().mul(t)}}})}}),$u=wn({cosh_:function(t){var e=cn(t,"x","cosh");return Nt.runKernelFunc(function(t,n){var r=t.cosh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().sinh().mulStrict(t)}}})}}),Yu=wn({erf_:function(t){var e=cn(t,"x","erf");return g("int32"===e.dtype||"float32"===e.dtype,function(){return "Input dtype must be `int32` or `float32`."}),"int32"===e.dtype&&(e=e.toFloat()),Nt.runKernelFunc(function(t,n){var r=t.erf(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Qu=wn({exp_:function(t){var e=cn(t,"x","exp");return Nt.runKernelFunc(function(t,n){var r=t.exp(e);return n([r]),r},{$x:e},function(t,e){return {$x:function(){return t.mulStrict(e[0])}}})}}),Ju=wn({expm1_:function(t){var e=cn(t,"x","expm1");return Nt.runKernelFunc(function(t,n){var r=t.expm1(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.exp())}}})}}),Zu=wn({floor_:function(t){var e=cn(t,"x","floor");return Nt.runKernelFunc(function(t){return t.floor(e)},{$x:e},function(t){return {$x:function(){return Vn(t)}}})}}),ts=wn({log_:function(t){var e=cn(t,"x","log");return Nt.runKernelFunc(function(t,n){var r=t.log(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat())}}})}}),es=wn({log1p_:function(t){var e=cn(t,"x","log1p");return Nt.runKernelFunc(function(t,n){var r=t.log1p(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.add(1))}}})}}),ns=wn({logSigmoid_:function(t){var e=cn(t,"x","logSigmoid");return Nt.runKernelFunc(function(t,n){var r=t.softplus(e.neg()).neg();return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.neg().sigmoid())}}})}}),rs=wn({neg_:function(t){var e=cn(t,"x","neg");return Nt.runKernelFunc(function(t){return t.neg(e)},{$x:e},function(t){return {$x:function(){return t.neg()}}})}}),os=wn({reciprocal_:function(t){var e=cn(t,"x","reciprocal");return Nt.runKernelFunc(function(t,n){var r=t.reciprocal(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.square().neg())}}})}}),as=wn({round_:function(t){var e=cn(t,"x","round");return Nt.runKernelFunc(function(t){return t.round(e)},{$x:e},function(t){return {$x:function(){return Vn(t)}}})}}),is=wn({rsqrt_:function(t){var e=cn(t,"x","rsqrt");return Nt.runKernelFunc(function(t,n){var r=t.rsqrt(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.pow(1.5).mul(2)).neg()}}})}}),us=wn({sigmoid_:function(t){var e=cn(t,"x","sigmoid");return Nt.runKernelFunc(function(t,n){var r=t.sigmoid(e);return n([r]),r},{x:e},function(t,e){var n=e[0];return {x:function(){return t.mul(n.mul(Sn(1).sub(n)))}}},"Sigmoid")}}),ss=wn({sign_:function(t){var e=cn(t,"x","sign");return Nt.runKernelFunc(function(t){return t.sign(e)},{$x:e},function(t){return {$x:function(){return Vn(t)}}})}}),cs=wn({isNaN_:function(t){var e=cn(t,"x","isNaN");return Nt.runKernelFunc(function(t){return t.isNaN(e)},{$x:e},function(t){return {$x:function(){return Vn(t)}}})}}),ls=wn({isInf_:function(t){var e=cn(t,"x","isInf");return Nt.runKernelFunc(function(t){return t.isInf(e)},{$x:e},function(t){return {$x:function(){return Vn(t)}}})}}),hs=wn({isFinite_:function(t){var e=cn(t,"x","isFinite");return Nt.runKernelFunc(function(t){return t.isFinite(e)},{$x:e},function(t){return {$x:function(){return Vn(t)}}})}}),fs=wn({sin_:function(t){var e=cn(t,"x","sin");return Nt.runKernelFunc(function(t,n){var r=t.sin(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().cos().mul(t)}}})}}),ps=wn({sinh_:function(t){var e=cn(t,"x","sinh");return Nt.runKernelFunc(function(t,n){var r=t.sinh(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return n.toFloat().cosh().mulStrict(t)}}})}}),ds=wn({softplus_:function(t){var e=cn(t,"x","softplus");return Nt.runKernelFunc(function(t,n){var r=t.softplus(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.mul(n.sigmoid())}}})}}),vs=wn({sqrt_:function(t){var e=cn(t,"x","sqrt");return Nt.runKernelFunc(function(t,n){var r=t.sqrt(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.toFloat().sqrt().mul(2))}}})}}),ms=wn({step_:function(t,e){void 0===e&&(e=0);var n=cn(t,"x","step");return Nt.runKernelFunc(function(t){return t.step(n,e)},{$x:n},function(t){return {$x:function(){return Vn(t)}}})}}),gs=wn({tan_:function(t){var e=cn(t,"x","tan");return Nt.runKernelFunc(function(t,n){var r=t.tan(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return t.div(n.cos().square())}}})}}),ys=wn({tanh_:function(t){var e=cn(t,"x","tanh");return Nt.runKernelFunc(function(t,n){var r=t.tanh(e);return n([r]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return Sn(1).sub(n.square()).mulStrict(t)}}})}});function xs(t,e,n,r,o,a){var i,u,s=cn(t,"x","batchNorm"),c=cn(e,"mean","batchNorm"),l=cn(n,"variance","batchNorm");return null!=o&&(i=cn(o,"scale","batchNorm")),null!=r&&(u=cn(r,"offset","batchNorm")),g(2===s.rank,function(){return "Error in batchNorm3D: x must be rank 3 but got rank "+s.rank+"."}),g(2===c.rank||1===c.rank,function(){return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),g(2===l.rank||1===l.rank,function(){return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),null!=i&&g(2===i.rank||1===i.rank,function(){return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),null!=u&&g(2===u.rank||1===u.rank,function(){return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+u.rank+"."}),Cs(s,c,l,u,i,a)}function bs(t,e,n,r,o,a){var i,u,s=cn(t,"x","batchNorm"),c=cn(e,"mean","batchNorm"),l=cn(n,"variance","batchNorm");return null!=o&&(i=cn(o,"scale","batchNorm")),null!=r&&(u=cn(r,"offset","batchNorm")),g(3===s.rank,function(){return "Error in batchNorm3D: x must be rank 3 but got rank "+s.rank+"."}),g(3===c.rank||1===c.rank,function(){return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),g(3===l.rank||1===l.rank,function(){return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),null!=i&&g(3===i.rank||1===i.rank,function(){return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),null!=u&&g(3===u.rank||1===u.rank,function(){return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+u.rank+"."}),Cs(s,c,l,u,i,a)}function ws(t,e,n,r,o,a){var i,u,s=cn(t,"x","batchNorm"),c=cn(e,"mean","batchNorm"),l=cn(n,"variance","batchNorm");return null!=o&&(i=cn(o,"scale","batchNorm")),null!=r&&(u=cn(r,"offset","batchNorm")),g(4===s.rank,function(){return "Error in batchNorm4D: x must be rank 4 but got rank "+s.rank+"."}),g(4===c.rank||1===c.rank,function(){return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),g(4===l.rank||1===l.rank,function(){return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),null!=i&&g(4===i.rank||1===i.rank,function(){return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),null!=u&&g(4===u.rank||1===u.rank,function(){return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+u.rank+"."}),Cs(s,c,l,u,i,a)}function Cs(t,e,n,r,o,a){null==a&&(a=.001);var i,u,s,c=cn(t,"x","batchNorm"),l=cn(e,"mean","batchNorm"),h=cn(n,"variance","batchNorm");null!=o&&(i=cn(o,"scale","batchNorm")),null!=r&&(u=cn(r,"offset","batchNorm")),g(l.rank===h.rank,function(){return "Batch normalization gradient requires mean and variance to have equal ranks."}),g(null==u||l.rank===u.rank,function(){return "Batch normalization gradient requires mean and offset to have equal ranks."}),g(null==i||l.rank===i.rank,function(){return "Batch normalization gradient requires mean and scale to have equal ranks."}),s=0===c.rank||1===c.rank?c.as4D(1,1,1,c.size):2===c.rank?c.as4D(1,1,c.shape[0],c.shape[1]):3===c.rank?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return Nt.runKernelFunc(function(t,e){var n=t.batchNormalization(s,Es(l),Es(h),a,Es(i),Es(u));return e([c,l,h,i]),n},{x:c,mean:l,variance:h,scale:i,offset:u},function(t,e){var n=e,r=n[0],o=n[1],i=n[2],u=n[3],c=null==u?Sn(1):u,l=fo(o.shape,s.shape),h=[];if(1===o.rank){for(var f=0;f<s.shape.length-1;++f)h.push(s.shape[f]);h.push(1);}var p=r.sub(o),d=t.mul(c),v=is(i.add(Sn(a))),m=v.mul(v).mul(v).mul(Sn(-.5));return {x:function(){return 1===o.rank?t.mul(Nr(v.as4D(1,1,1,o.shape[0]),h)).mul(c).reshape(r.shape):t.mul(v).mul(c).reshape(r.shape)},mean:function(){var t=v.mul(Sn(-1)).mul(d);return 1===o.rank&&(t=t.sum(l)),t.reshape(o.shape)},variance:function(){var t=m.mul(p).mul(d);return 1===o.rank&&(t=t.sum(l)),t.reshape(o.shape)},scale:function(){var e=p.mul(v),n=t.mul(e);return 1===o.rank&&(n=n.sum(l)),n.reshape(o.shape)},offset:function(){var e=t;return 1===o.rank&&(e=e.sum(l)),e.reshape(o.shape)}}},"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Es(t){return null==t?null:0===t.rank?t.as1D():1===t.rank?t:2===t.rank?t.as4D(1,1,t.shape[0],t.shape[1]):3===t.rank?t.as4D(1,t.shape[0],t.shape[1],t.shape[2]):t}function Rs(){Ve("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon");}var Is=wn({batchNormalization2d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Rs(),xs(t,e,n,a,o,r)}}),ks=wn({batchNormalization3d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Rs(),bs(t,e,n,a,o,r)}}),Ss=wn({batchNormalization4d_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Rs(),ws(t,e,n,a,o,r)}}),As=wn({batchNormalization_:function(t,e,n,r,o,a){return void 0===r&&(r=.001),Rs(),Cs(t,e,n,a,o,r)}}),Ds=wn({batchNorm_:Cs}),Ts=wn({batchNorm2d_:xs}),Ns=wn({batchNorm3d_:bs}),Fs=wn({batchNorm4d_:ws});var _s=wn({logicalAnd_:function(t,e){var n=cn(t,"a","logicalAnd","bool"),r=cn(e,"b","logicalAnd","bool");return po(n.shape,r.shape),Nt.runKernelFunc(function(t){return t.logicalAnd(n,r)},{$a:n,$b:r})}}),Os=wn({logicalNot_:function(t){var e=cn(t,"x","logicalNot","bool");return Nt.runKernelFunc(function(t){return t.logicalNot(e)},{$x:e})}}),Ms=wn({logicalOr_:function(t,e){var n=cn(t,"a","logicalOr","bool"),r=cn(e,"b","logicalOr","bool");return po(n.shape,r.shape),Nt.runKernelFunc(function(t){return t.logicalOr(n,r)},{$a:n,$b:r})}}),Bs=wn({logicalXor_:function(t,e){var n=cn(t,"a","logicalXor","bool"),r=cn(e,"b","logicalXor","bool");return po(n.shape,r.shape),Ms(t,e).logicalAnd(_s(t,e).logicalNot())}}),Ps=wn({where_:function(t,e,n){var r=cn(e,"a","where"),o=cn(n,"b","where"),a=cn(t,"condition","where","bool");return y(r.shape,o.shape,"Error in where: "),1===a.rank?g(a.shape[0]===r.shape[0],function(){return "The first dimension of `a` must match the size of `condition`."}):y(a.shape,o.shape,"Error in where: "),Nt.runKernelFunc(function(t,e){var n=t.select(a,r,o);return e([a]),n},{$condition:a,$a:r,$b:o},function(t,e){var n=e[0];return {$condition:function(){return Vn(n).toFloat()},$a:function(){return t.mul(n.cast(t.dtype))},$b:function(){return t.mul(n.logicalNot().cast(t.dtype))}}})}}),Ls=function(t){return n(this,void 0,void 0,function(){var e,n,o;return r(this,function(r){switch(r.label){case 0:return [4,(e=cn(t,"condition","whereAsync","bool")).data()];case 1:return n=r.sent(),o=Uo(e.shape,n),t!==e&&e.dispose(),[2,o]}})})};var Ws=wn({add_:function(t,e){var n,r=cn(t,"a","add"),o=cn(e,"b","add");n=Rt(r,o),r=n[0],o=n[1];var a=po(r.shape,o.shape);return Nt.runKernelFunc(function(t){return t.add(r,o)},{a:r,b:o},function(t){return {a:function(){var e=t,n=fo(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},b:function(){var e=t,n=fo(o.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(o.shape)}}},"Add")}}),Us=wn({addN_:function(t){g(Array.isArray(t),function(){return "The argument passed to tf.addN() must be a list of tensors"}),g(t.length>=1,function(){return "Must pass at least one tensor to tf.addN(), but got "+t.length});var e=t.map(function(t,e){return cn(t,"tensors"+e,"addN")}),n=e[0];e.forEach(function(t){if(t.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(function(t){if(!C(t.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=e;return Nt.runKernelFunc(function(t){return t.addN(e)},r,function(t){var n={};return e.forEach(function(e,r){n[r]=function(){return t.clone()};}),n},"AddN")}}),Vs=wn({addStrict_:function(t,e){var n=cn(t,"a","addStrict"),r=cn(e,"b","addStrict");return y(n.shape,r.shape,"Error in addStrict: "),n.add(r)}}),zs=wn({atan2_:function(t,e){var n,r=cn(t,"a","atan2"),o=cn(e,"b","atan2");n=Rt(r,o),r=n[0],o=n[1];var a=po(r.shape,o.shape);return Nt.runKernelFunc(function(t,e){var n=t.atan2(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=Ws(n.square(),r.square()),o=t.mul(r.div(e)),i=fo(n.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(n.shape)},$b:function(){var e=Ws(n.square(),r.square()),o=rs(t.mul(n.div(e))),i=fo(r.shape,a);return i.length>0&&(o=o.sum(i)),o.reshape(r.shape)}}})}}),Gs=wn({div_:function(t,e){var n,r=cn(t,"a","div"),o=cn(e,"b","div");if(n=Rt(r,o),r=n[0],o=n[1],"int32"===r.dtype&&"int32"===o.dtype)return Ks(r,o);var a=po(r.shape,o.shape);return Nt.runKernelFunc(function(t,e){var n=t.realDivide(r,o);return e([r,o]),n},{a:r,b:o},function(t,e){var n=e[0],r=e[1];return {a:function(){var e=t.div(r.toFloat()),o=fo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=fo(r.shape,a);o.length>0&&(e=e.sum(o).reshape(r.shape));var i=r.square();return e.div(i.toFloat()).neg()}}},"Div")}}),Hs=wn({divNoNan_:function(t,e){var n,r=cn(t,"a","div"),o=cn(e,"b","div");r=(n=Rt(r,o))[0],o=n[1];var a=Gs(r,o),i=Vn(a),u=o.equal(i);return Ps(u,i,a)}}),qs=wn({divStrict_:function(t,e){var n=cn(t,"a","div"),r=cn(e,"b","div");return y(n.shape,r.shape,"Error in divideStrict: "),n.div(r)}}),Ks=wn({floorDiv_:function(t,e){var n,r=cn(t,"a","floorDiv"),o=cn(e,"b","floorDiv");n=Rt(r,o),r=n[0],o=n[1];var a=po(r.shape,o.shape);return Nt.runKernelFunc(function(t,e){var n=t.floorDiv(r,o);return e([r,o]),n},{a:r,b:o},function(t,e){var n=e[0],r=e[1];return {a:function(){var e=t.div(r.toFloat()),o=fo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=fo(r.shape,a);o.length>0&&(e=e.sum(o).reshape(r.shape));var i=r.square();return e.div(i.toFloat()).neg()}}},"FloorDiv")}}),js=wn({maximum_:function(t,e){var n,r=cn(t,"a","maximum"),o=cn(e,"b","maximum");return n=Rt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),po(r.shape,o.shape),Nt.runKernelFunc(function(t,e){var n=t.maximum(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){return t.mul(n.greaterEqual(r).toFloat())},$b:function(){return t.mul(n.less(r).toFloat())}}})}}),Xs=wn({maximumStrict_:function(t,e){var n=cn(t,"a","maximumStrict"),r=cn(e,"b","maximumStrict");return y(n.shape,r.shape,"Error in maximumStrict: "),n.maximum(r)}}),$s=wn({minimum_:function(t,e){var n,r=cn(t,"a","minimum"),o=cn(e,"b","minimum");return n=Rt(r,o),r=n[0],o=n[1],"bool"===r.dtype&&(r=r.toInt(),o=o.toInt()),po(r.shape,o.shape),Nt.runKernelFunc(function(t,e){var n=t.minimum(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){return t.mul(n.lessEqual(r).toFloat())},$b:function(){return t.mul(n.greater(r).toFloat())}}})}}),Ys=wn({minimumStrict_:function(t,e){var n=cn(t,"a","minimumStrict"),r=cn(e,"b","minimumStrict");return y(n.shape,r.shape,"Error in minimumStrict: "),n.minimum(r)}}),Qs=wn({mod_:function(t,e){var n,r=cn(t,"a","mod"),o=cn(e,"b","mod");n=Rt(r,o),r=n[0],o=n[1];var a=po(r.shape,o.shape);return Nt.runKernelFunc(function(t,e){var n=t.mod(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){var e=fo(n.shape,a);return e.length>0?t.sum(e).reshape(n.shape):t},$b:function(){var e=t.mul(n.div(r).floor().neg()),o=fo(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}})}}),Js=wn({modStrict_:function(t,e){var n=cn(t,"a","modStrict"),r=cn(e,"b","modStrict");return y(n.shape,r.shape,"Error in modStrict: "),n.mod(r)}}),Zs=wn({mul_:function(t,e){var n,r=cn(t,"a","mul"),o=cn(e,"b","mul");n=Rt(r,o),r=n[0],o=n[1];var a=po(r.shape,o.shape);return Nt.runKernelFunc(function(t,e){var n=t.multiply(r,o);return e([r,o]),n},{a:r,b:o},function(t,e){var n=e[0],r=e[1];return {a:function(){var e=t.mul(r.toFloat()),o=fo(n.shape,a);return o.length>0?e.sum(o).reshape(n.shape):e},b:function(){var e=t.mul(n.toFloat()),o=fo(r.shape,a);return o.length>0?e.sum(o).reshape(r.shape):e}}},"Mul")}}),tc=wn({mulStrict_:function(t,e){var n=cn(t,"a","mul"),r=cn(e,"b","mul");return y(n.shape,r.shape,"Error in multiplyStrict: "),n.mul(r)}}),ec=wn({pow_:function(t,e){var n=cn(t,"base","pow"),r=cn(e,"exp","pow"),o=po(n.shape,r.shape);return t=n.cast(Ct(n.dtype,r.dtype)),e=r.cast(Ct(n.dtype,r.dtype)),Nt.runKernelFunc(function(t,e){var o=t.pow(n,r);return e([n,r,o]),o},{$base:n,$exp:r},function(t,e){var n=e[0],r=e[1],a=e[2];return {$base:function(){var e=r.toFloat(),a=t.mul(e.mul(n.pow(e.sub(Sn(1))))),i=fo(n.shape,o);return i.length>0&&(a=a.sum(i)),a.reshape(n.shape)},$exp:function(){var e=n.greater(0),i=n.log().where(e,Vn(n)),u=t.mul(a.mul(i)),s=fo(r.shape,o);return s.length>0&&(u=u.sum(s)),u.reshape(r.shape)}}})}}),nc=wn({powStrict_:function(t,e){return y(t.shape,e.shape,"Error in powStrict: "),t.pow(e)}}),rc=wn({squaredDifference_:function(t,e){var n,r=cn(t,"a","squaredDifference"),o=cn(e,"b","squaredDifference");return n=Rt(r,o),r=n[0],o=n[1],po(r.shape,o.shape),Nt.runKernelFunc(function(t,e){var n=t.squaredDifference(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1],o=Sn(2);return {$a:function(){return t.mul(n.sub(r).mul(o))},$b:function(){return t.mul(r.sub(n).mul(o))}}})}}),oc=wn({squaredDifferenceStrict_:function(t,e){var n=cn(t,"a","squaredDifferenceStrict"),r=cn(e,"b","squaredDifferenceStrict");return y(n.shape,r.shape,"Error in squaredDifferenceStrict: "),n.squaredDifference(r)}}),ac=wn({sub_:function(t,e){var n,r=cn(t,"a","sub"),o=cn(e,"b","sub");n=Rt(r,o),r=n[0],o=n[1];var a=po(r.shape,o.shape);return Nt.runKernelFunc(function(t){return t.subtract(r,o)},{a:r,b:o},function(t){return {a:function(){var e=t,n=fo(r.shape,a);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},b:function(){var e=t,n=fo(o.shape,a);return n.length>0&&(e=e.sum(n)),e.neg().reshape(o.shape)}}},"Sub")}}),ic=wn({subStrict_:function(t,e){var n=cn(t,"a","subStrict"),r=cn(e,"b","subStrict");return y(n.shape,r.shape,"Error in subStrict: "),n.sub(r)}});var uc=wn({equal_:function(t,e){var n,r=cn(t,"a","equal"),o=cn(e,"b","equal");return n=Rt(r,o),r=n[0],o=n[1],po(r.shape,o.shape),Nt.runKernelFunc(function(t){return t.equal(r,o)},{$a:r,$b:o})}}),sc=wn({equalStrict_:function(t,e){var n=cn(t,"a","equalStrict"),r=cn(e,"b","equalStrict");return y(n.shape,r.shape,"Error in equalStrict: "),n.equal(r)}}),cc=wn({greater_:function(t,e){var n,r=cn(t,"a","greater"),o=cn(e,"b","greater");return n=Rt(r,o),r=n[0],o=n[1],po(r.shape,o.shape),Nt.runKernelFunc(function(t){return t.greater(r,o)},{$a:r,$b:o})}}),lc=wn({greaterEqual_:function(t,e){var n,r=cn(t,"a","greaterEqual"),o=cn(e,"b","greaterEqual");return n=Rt(r,o),r=n[0],o=n[1],po(r.shape,o.shape),Nt.runKernelFunc(function(t,e){var n=t.greaterEqual(r,o);return e([r,o]),n},{$a:r,$b:o},function(t,e){var n=e[0],r=e[1];return {$a:function(){return Vn(n)},$b:function(){return Vn(r)}}})}}),hc=wn({greaterEqualStrict_:function(t,e){var n=cn(t,"a","greaterEqualStrict"),r=cn(e,"b","greaterEqualStrict");return y(n.shape,r.shape,"Error in greaterEqualStrict: "),n.greaterEqual(r)}}),fc=wn({greaterStrict_:function(t,e){var n=cn(t,"a","greaterStrict"),r=cn(e,"b","greaterStrict");return y(n.shape,r.shape,"Error in greaterStrict: "),n.greater(r)}}),pc=wn({less_:function(t,e){var n,r=cn(t,"a","less"),o=cn(e,"b","less");return n=Rt(r,o),r=n[0],o=n[1],po(r.shape,o.shape),Nt.runKernelFunc(function(t){return t.less(r,o)},{$a:r,$b:o})}}),dc=wn({lessEqual_:function(t,e){var n,r=cn(t,"a","lessEqual"),o=cn(e,"b","lessEqual");return n=Rt(r,o),r=n[0],o=n[1],po(r.shape,o.shape),Nt.runKernelFunc(function(t){return t.lessEqual(r,o)},{$a:r,$b:o})}}),vc=wn({lessEqualStrict_:function(t,e){var n=cn(t,"a","lessEqualStrict"),r=cn(e,"b","lessEqualStrict");return y(n.shape,r.shape,"Error in lessEqualStrict: "),n.lessEqual(r)}}),mc=wn({lessStrict_:function(t,e){var n=cn(t,"a","lessStrict"),r=cn(e,"b","lessStrict");return y(n.shape,r.shape,"Error in lessStrict: "),n.less(r)}}),gc=wn({notEqual_:function(t,e){var n,r=cn(t,"a","notEqual"),o=cn(e,"b","notEqual");return n=Rt(r,o),r=n[0],o=n[1],po(r.shape,o.shape),Nt.runKernelFunc(function(t){return t.notEqual(r,o)},{$a:r,$b:o})}}),yc=wn({notEqualStrict_:function(t,e){var n=cn(t,"a","notEqualStrict"),r=cn(e,"b","notEqualStrict");return y(n.shape,r.shape,"Error in notEqualStrict: "),n.notEqual(r)}});function xc(t,e){for(var n=[],r=t;r<e;++r)n.push(r);return n}function bc(t){for(var e=[],n=0;n<t.length;++n)for(var r=0;r<t[n].length;++r)e.push(t[n][r]);return e}var wc=wn({gather_:function(t,e,n){void 0===n&&(n=0);var r=cn(t,"x","gather"),o=cn(e,"indices","gather","int32");n=D(n,r.shape)[0];var a=function(t,e,n){for(var r=t.shape[n],o=[],a=1,i=1,u=0;u<n;u++)o.push(t.shape[u]),a*=t.shape[u];for(u=0;u<e.rank;u++)o.push(e.shape[u]);for(u=n+1;u<t.rank;u++)o.push(t.shape[u]),i*=t.shape[u];return {batchSize:a,sliceSize:i,dimSize:r,outputShape:o}}(r,o,n);return Nt.runKernelFunc(function(t,e){var a=t.gather(r,o.flatten(),n);return e([o]),a},{$x:r},function(t,e){var o=e[0];return {$x:function(){var e=r.shape,a=o.size,i=e.slice(0,n),u=i.length,s=e.slice(n,e.length).slice(1),c=s.length,l=xc(0,u),h=xc(u+1,u+1+c),f=bc([i,[a],s]),p=t.reshape(f),d=o.reshape([a]),v=bc([[u],l,h]),m=p.transpose(v),g=Cc(m,d,r.shape[n]),y=gn(v);return g=g.transpose(y)}}}).reshape(a.outputShape)}}),Cc=wn({unsortedSegmentSum_:function(t,e,n){var r=cn(t,"x","unsortedSegmentSum"),o=cn(e,"segmentIds","unsortedSegmentSum","int32");return g(E(n),function(){return "numSegments must be of dtype int"}),Nt.runKernelFunc(function(t,e){var a=t.unsortedSegmentSum(r,o,n);return e([o]),a},{$x:r},function(t,e){var n=e[0];return {$x:function(){return function(t,e){for(var n=js(e,Vn(e)),r=wc(t,n),o=lc(e,Sn(0,"int32")),a=r.rank-o.rank,i=0;i<a;++i)o=dr(o,i+1);o=_s(o,Mn(r.shape,"bool"));var u=Vn(r);return Ps(o,r,u)}(t,n)}}})}});var Ec=function(t,e,o){return n(this,void 0,void 0,function(){var n,a,i,u,s,c,l,h,f,p,d,v,m;return r(this,function(r){switch(r.label){case 0:for(n=cn(t,"tensor","boolMask"),a=cn(e,"mask","boolMask","bool"),i=null==o?0:o,u=a.rank,s=n.shape,g(u>0,function(){return "mask cannot be scalar"}),y(s.slice(i,i+u),a.shape,"mask's shape must match the first K dimensions of tensor's shape,"),c=1,l=i;l<i+u;l++)c*=s[l];return h=s.slice(0,i).concat([c],s.slice(i+u)),f=n.reshape(h),p=a.reshape([-1]),[4,Ls(p)];case 1:return d=r.sent(),v=d.squeeze([1]),m=wc(f,v,i),t!==n&&n.dispose(),e!==a&&a.dispose(),v.dispose(),f.dispose(),p.dispose(),d.dispose(),[2,m]}})})};function Rc(t,e,n,r,o,a,i){void 0===a&&(a="NHWC"),g(t.length===e.rank,function(){return "Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"});var u=t,s=e,c=!1;3===e.rank&&(c=!0,s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]),u=[1,t[0],t[1],t[2]]),g(4===u.length,function(){return "Error in conv2dDerInput: inShape must be length 4, but got length "+u.length+"."}),g(4===s.rank,function(){return "Error in conv2dDerInput: dy must be rank 4, but got rank "+s.rank}),g(4===n.rank,function(){return "Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank});var l="NHWC"===a?u[3]:u[1],h="NHWC"===a?s.shape[3]:s.shape[1];g(l===n.shape[2],function(){return "Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+n.shape[2]+"."}),g(h===n.shape[3],function(){return "Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+n.shape[3]+"."}),null!=i&&g(E(o),function(){return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=ko(a),p=go(u,n.shape,r,1,o,i,!1,f),d=Nt.runKernelFunc(function(t,e){var r=t.conv2dDerInput(s,n,p);return e([n,s]),r},{dy4D:s,filter:n},function(t,e){var n=e[0],u=e[1];return {dy4D:function(){return Ac(t,n,r,o,a,1,i)},filter:function(){return Tc(t,u,n.shape,r,o,a,i)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function Ic(t){var e=function(t){return "number"==typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}(t),n=e[0],r=e[1],o=e[2];return 1===n&&1===r&&1===o}function kc(t,e,n,r,o){g(t.length===e.rank,function(){return "Length of inShape ("+t.length+") and rank of dy ("+e.rank+") must match"});var a=t,i=e,u=!1;4===e.rank&&(u=!0,i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]),a=[1,t[0],t[1],t[2],t[3]]);var s=a[4],c=i.shape[4];g(5===a.length,function(){return "Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),g(5===i.rank,function(){return "Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),g(5===n.rank,function(){return "Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank}),g(s===n.shape[3],function(){return "Error in conv3dDerInput: depth of input ("+s+") must match input depth for filter "+n.shape[3]+"."}),g(c===n.shape[4],function(){return "Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+n.shape[4]+"."});var l=yo(a,n.shape,r,1,o),h=Nt.runKernelFunc(function(t){return t.conv3dDerInput(i,n,l)},{dy5D:i});return u?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var Sc=wn({conv1d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NWC"),void 0===a&&(a=1);var u=cn(t,"x","conv1d"),s=cn(e,"filter","conv1d"),c=u,l=!1;2===u.rank&&(l=!0,c=u.as3D(1,u.shape[0],u.shape[1])),g(3===c.rank,function(){return "Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),g(3===s.rank,function(){return "Error in conv1d: filter must be rank 3, but got rank "+s.rank+"."}),null!=i&&g(E(r),function(){return "Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."}),g(c.shape[2]===s.shape[1],function(){return "Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+s.shape[1]+"."}),g(Io(n,a),function(){return "Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+a+"'"}),g("NWC"===o,function(){return "Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=s.as4D(1,s.shape[0],s.shape[1],s.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=Ac(f,h,[1,n],r,"NHWC",[1,a],i);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),Ac=wn({conv2d_:function(t,e,n,r,o,a,i){void 0===o&&(o="NHWC"),void 0===a&&(a=[1,1]);var u=cn(t,"x","conv2d"),s=cn(e,"filter","conv2d"),c=u,l=!1;3===u.rank&&(l=!0,c=u.as4D(1,u.shape[0],u.shape[1],u.shape[2])),g(4===c.rank,function(){return "Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),g(4===s.rank,function(){return "Error in conv2d: filter must be rank 4, but got rank "+s.rank+"."}),null!=i&&g(E(r),function(){return "Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var h="NHWC"===o?c.shape[3]:c.shape[1];g(h===s.shape[2],function(){return "Error in conv2d: depth of input ("+h+") must match input depth for filter "+s.shape[2]+"."}),g(Io(n,a),function(){return "Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"});var f=ko(o),p=go(c.shape,s.shape,n,a,r,i,!1,f),d=[s,c],v=Nt.runKernelFunc(function(t,e){var n=t.conv2d(c,s,p);return e([s,c]),n},{x:c,filter:s},function(t,e){var i=e,u=i[0],s=i[1];return g(Ro(a),function(){return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Nc(s.shape,t,u,n,r,o)},filter:function(){return Tc(s,t,u.shape,n,r,o)}}},"Conv2D",p,d);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Dc=wn({conv3d_:function(t,e,n,r,o,a){void 0===o&&(o="NDHWC"),void 0===a&&(a=[1,1,1]);var i=cn(t,"x","conv3d"),u=cn(e,"filter","conv3d"),s=i,c=!1;4===i.rank&&(c=!0,s=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),g(5===s.rank,function(){return "Error in conv3d: input must be rank 5, but got rank "+s.rank+"."}),g(5===u.rank,function(){return "Error in conv3d: filter must be rank 5, but got rank "+u.rank+"."}),g(s.shape[4]===u.shape[3],function(){return "Error in conv3d: depth of input ("+s.shape[4]+") must match input depth for filter "+u.shape[3]+"."}),g(function(t,e){return Ic(t)||Ic(e)}(n,a),function(){return "Error in conv3D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),g("NDHWC"===o,function(){return "Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=yo(s.shape,u.shape,n,a,r),h=Nt.runKernelFunc(function(t,e){var n=t.conv3d(s,u,l);return e([s,u]),n},{x:s,$filter:u},function(t,e){g(Ic(a),function(){return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var o=e[0],i=e[1];return {x:function(){return kc(o.shape,t,i,n,r)},$filter:function(){return function(t,e,n,r,o){var a=t;4===t.rank&&(a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]));var i=e;4===i.rank&&(i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3])),g(5===a.rank,function(){return "Error in conv3dDerFilter: input must be rank 5, but got shape "+a.shape+"."}),g(5===i.rank,function(){return "Error in conv3dDerFilter: dy must be rank 5, but got shape "+i.shape+"."}),g(5===n.length,function(){return "Error in conv3dDerFilter: filterShape must be length 5, but got "+n+"."}),g(a.shape[4]===n[3],function(){return "Error in conv3dDerFilter: depth of input "+a.shape[4]+") must match input depth in filter ("+n[3]+"."}),g(i.shape[4]===n[4],function(){return "Error in conv3dDerFilter: depth of dy ("+i.shape[4]+") must match output depth for filter ("+n[4]+")."});var u=yo(a.shape,n,r,1,o);return Nt.runKernelFunc(function(t){return t.conv3dDerFilter(a,i,u)},{x5D:a,dy5D:i})}(o,t,i.shape,n,r)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Tc=wn({conv2dDerFilter_:function(t,e,n,r,o,a,i){void 0===a&&(a="NHWC");var u=t;3===t.rank&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var s=e;3===s.rank&&(s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),g(4===u.rank,function(){return "Error in conv2dDerFilter: input must be rank 4, but got shape "+u.shape+"."}),g(4===s.rank,function(){return "Error in conv2dDerFilter: dy must be rank 4, but got shape "+s.shape+"."}),g(4===n.length,function(){return "Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."});var c="NHWC"===a?u.shape[3]:u.shape[1],l="NHWC"===a?s.shape[3]:s.shape[1];g(c===n[2],function(){return "Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+n[2]+"."}),g(l===n[3],function(){return "Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+n[3]+")."}),null!=i&&g(E(o),function(){return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=ko(a),f=go(u.shape,n,r,1,o,i,!1,h);return Nt.runKernelFunc(function(t){return t.conv2dDerFilter(u,s,f)},{x4D:u,dy4D:s})}}),Nc=wn({conv2dDerInput_:Rc}),Fc=wn({depthwiseConv2d_:function(t,e,n,r,o,a,i){void 0===a&&(a=[1,1]);var u=cn(t,"x","depthwiseConv2d"),s=cn(e,"filter","depthwiseConv2d"),c=u,l=!1;3===u.rank&&(l=!0,c=u.as4D(1,u.shape[0],u.shape[1],u.shape[2])),g(4===c.rank,function(){return "Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),g(4===s.rank,function(){return "Error in depthwiseConv2d: filter must be rank 4, but got rank "+s.rank+"."}),g(c.shape[3]===s.shape[2],function(){return "Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+s.shape[2]+"."}),null==a&&(a=[1,1]),g(Io(n,a),function(){return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),null!=i&&g(E(r),function(){return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."});var h=go(c.shape,s.shape,n,a,r,i,!0),f=[c,s],p=Nt.runKernelFunc(function(t,e){var n=t.depthwiseConv2D(c,s,h);return e([c,s]),n},{x:c,filter:s},function(t,e){g(Ro(a),function(){return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var n=e[0],r=e[1];return {x:function(){return _c(n.shape,t,r,h)},filter:function(){return Oc(n,t,r.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),_c=wn({depthwiseConv2dDerInput_:function(t,e,n,r){var o=e,a=!1;3===e.rank&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=Nt.runKernelFunc(function(t){return t.depthwiseConv2DDerInput(o,n,r)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Oc=wn({depthwiseConv2dDerFilter_:function(t,e,n,r){var o=t;3===t.rank&&(o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=e;return 3===a.rank&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),Nt.runKernelFunc(function(t){return t.depthwiseConv2DDerFilter(o,a,r)},{x4D:o,dy4D:a})}}),Mc=wn({separableConv2d_:function(t,e,n,r,o,a,i){void 0===a&&(a=[1,1]),void 0===i&&(i="NHWC");var u=cn(t,"x","separableConv2d"),s=cn(e,"depthwiseFilter","separableConv2d"),c=cn(n,"pointwiseFilter","separableConv2d"),l=u,h=!1;if(3===u.rank&&(h=!0,l=u.as4D(1,u.shape[0],u.shape[1],u.shape[2])),"NCHW"===i)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g(4===l.rank,function(){return "Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),g(4===s.rank,function(){return "Error in separableConv2d: depthwise filter must be rank 4, but got rank "+s.rank+"."}),g(4===c.rank,function(){return "Error in separableConv2d: pointwise filter must be rank 4, but got rank "+s.rank+"."}),g(1===c.shape[0],function(){return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),g(1===c.shape[1],function(){return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=s.shape[2],p=s.shape[3];g(c.shape[2]===f*p,function(){return "Error in separableConv2d: the third dimension of pointwise filter must be "+f*p+", but got "+c.shape[2]+"."});var d=Fc(l,s,r,o,i,a),v=Ac(d,c,1,"valid",i);return h?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Bc=wn({conv2dTranspose_:function(t,e,n,r,o,a){return Rc(n,cn(t,"x","conv2dTranspose"),cn(e,"filter","conv2dTranspose"),r,o,"NHWC",a)}}),Pc=wn({conv3dTranspose_:function(t,e,n,r,o){return kc(n,cn(t,"x","conv3dTranspose"),cn(e,"filter","conv3dTranspose"),r,o)}});var Lc=wn({matMul_:function(t,e,n,r){var o;void 0===n&&(n=!1),void 0===r&&(r=!1);var a=cn(t,"a","matMul"),i=cn(e,"b","matMul");o=Rt(a,i),a=o[0],i=o[1];var u=n?a.shape[a.rank-2]:a.shape[a.rank-1],s=r?i.shape[i.rank-1]:i.shape[i.rank-2],c=n?a.shape[a.rank-1]:a.shape[a.rank-2],l=r?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),p=w(h),d=w(f);g(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return "Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),g(C(h,f),function(){return "Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),g(u===s,function(){return "Error in matMul: inner shapes ("+u+") and ("+s+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+n+" and transposeB="+r+" must match."});var v=a.shape.slice(0,-2).concat([c,l]),m=n?a.as3D(p,u,c):a.as3D(p,c,u),y=r?i.as3D(d,l,s):i.as3D(d,s,l),x={transposeA:n,transposeB:r};return Nt.runKernelFunc(function(t,e){var o=t.batchMatMul(m,y,n,r);return e([m,y]),o},{a:m,b:y},function(t,e){var o=e,a=o[0],i=o[1];return n||r?!n&&r?{a:function(){return t.matMul(i,!1,!1)},b:function(){return t.matMul(a,!0,!1)}}:n&&!r?{a:function(){return i.matMul(t,!1,!0)},b:function(){return a.matMul(t,!1,!1)}}:{a:function(){return i.matMul(t,!0,!0)},b:function(){return t.matMul(a,!0,!0)}}:{a:function(){return t.matMul(i,!1,!0)},b:function(){return a.matMul(t,!0,!1)}}},"BatchMatMul",x).reshape(v)}}),Wc=wn({dot_:function(t,e){var n=cn(t,"t1","dot"),r=cn(e,"t2","dot");g(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),function(){return "Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+r.rank+"."});var o=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];return g(o===a,function(){return "Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),1===n.rank&&1===r.rank?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():1===n.rank&&2===r.rank?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():2===n.rank&&1===r.rank?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),Uc=wn({outerProduct_:function(t,e){var n=cn(t,"v1","outerProduct"),r=cn(e,"v2","outerProduct");return g(1===n.rank&&1===r.rank,function(){return "Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+r.rank+"."}),n.as2D(-1,1).matMul(r.as2D(1,-1))}});var Vc=wn({reverse_:function(t,e){var n=cn(t,"x","reverse");if(0===n.rank)return n.clone();var r=D(e,n.shape);return Nt.runKernelFunc(function(t){return t.reverse(n,r)},{$x:n},function(t){return {$x:function(){return t.reverse(r)}}}).reshapeAs(n)}}),zc=wn({reverse1d_:function(t){var e=cn(t,"x","reverse");return g(1===e.rank,function(){return "Error in reverse1D: x must be rank 1 but got rank "+e.rank+"."}),Vc(e,0)}}),Gc=wn({reverse2d_:function(t,e){var n=cn(t,"x","reverse");return g(2===n.rank,function(){return "Error in reverse2D: x must be rank 2 but got rank "+n.rank+"."}),Vc(n,e)}}),Hc=wn({reverse3d_:function(t,e){var n=cn(t,"x","reverse");return g(3===n.rank,function(){return "Error in reverse3D: x must be rank 3 but got rank "+n.rank+"."}),Vc(n,e)}}),qc=wn({reverse4d_:function(t,e){var n=cn(t,"x","reverse");return g(4===n.rank,function(){return "Error in reverse4D: x must be rank 4 but got rank "+n.rank+"."}),Vc(n,e)}});function Kc(t,e,n,r,o,a){var i=cn(t,"x","maxPool"),u=i,s=!1;3===i.rank&&(s=!0,u=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),null==r&&(r=[1,1]),g(4===u.rank,function(){return "Error in maxPool: input must be rank 4 but got rank "+u.rank+"."}),g(Io(n,r),function(){return "Error in maxPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"}),null!=a&&g(E(o),function(){return "Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=vo(u.shape,e,n,r,o,a);if(1===c.filterWidth&&1===c.filterHeight&&C(c.inShape,c.outShape))return i.clone();var l=[u],h=Nt.runKernelFunc(function(t,e){var n=t.maxPool(u,c);return e([u,n]),n},{x:u},function(t,a){var i=a[0],u=a[1];return {x:function(){return function(t,e,n,r,o,a,i,u){var s=cn(t,"dy","maxPoolBackprop"),c=cn(e,"input","maxPoolBackprop"),l=cn(n,"output","maxPoolBackprop");g(c.rank===s.rank,function(){return "Rank of input ("+c.rank+") does not match rank of dy ("+s.rank+")"}),null==a&&(a=[1,1]),g(Io(o,a),function(){return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"}),g(4===s.rank,function(){return "Error in maxPoolBackprop: dy must be rank 4 but got rank "+s.rank+"."}),g(4===c.rank,function(){return "Error in maxPoolBackprop: input must be rank 4 but got rank "+c.rank+"."}),null!=u&&g(E(i),function(){return "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+u+" but got pad "+i+"."});var h=vo(c.shape,r,o,a,i,u);return Nt.runKernelFunc(function(t){return t.maxPoolBackprop(s,c,l,h)},{$dy:s,$input:c})}(t,i,u,e,n,r,o)}}},"MaxPool",c,l);return s?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function jc(t,e,n,r,o,a){var i=cn(t,"x","avgPool","float32");null==r&&(r=[1,1]),g(Io(n,r),function(){return "Error in avgPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"});var u=i,s=!1;3===i.rank&&(s=!0,u=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),g(4===u.rank,function(){return "Error in avgPool: x must be rank 4 but got rank "+u.rank+"."}),null!=a&&g(E(o),function(){return "Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=vo(u.shape,e,n,r,o,a);if(1===c.filterWidth&&1===c.filterHeight&&C(c.inShape,c.outShape))return i.clone();var l=Nt.runKernelFunc(function(t){return t.avgPool(u,c)},{x:u},function(t){return {x:function(){return function(t,e,n,r,o,a){var i=cn(t,"dy","avgPoolBackprop"),u=cn(e,"input","avgPoolBackprop");g(u.rank===i.rank,function(){return "Rank of input ("+u.rank+") does not match rank of dy ("+i.rank+")"}),null==o&&(o=[1,1]),g(Io(r,o),function(){return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"});var s=u,c=i,l=!1;3===u.rank&&(l=!0,s=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),c=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),g(4===c.rank,function(){return "Error in avgPoolBackprop: dy must be rank 4 but got rank "+c.rank+"."}),g(4===s.rank,function(){return "Error in avgPoolBackprop: input must be rank 4 but got rank "+s.rank+"."});var h=vo(s.shape,n,r,o,a),f=Nt.runKernelFunc(function(t){return t.avgPoolBackprop(c,s,h)},{dy4D:c,input4D:s});return l?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}(t,u,e,n,r,o)}}},"AvgPool",c);return l=l.cast(i.dtype),s?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Xc=wn({maxPool_:function(t,e,n,r,o){return Kc(t,e,n,1,r,o)}}),$c=wn({avgPool_:function(t,e,n,r,o){return jc(t,e,n,1,r,o)}}),Yc=wn({pool_:function(t,e,n,r,o,a){null==o&&(o=[1,1]),null==a&&(a=1),0===r&&(r="valid");var i=cn(t,"x","maxPool"),u=i,s=!1;3===i.rank&&(s=!0,u=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),g(Io(a,o),function(){return "Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=vo(u.shape,e,a,o,r),h=[l.dilationHeight,l.dilationWidth];c="same"===r?function(t,e){var n=t.map(function(t,n){return t+(t-1)*(e[n]-1)}).map(function(t){return t-1}),r=n.map(function(t){return Math.floor(t/2)}),o=n.map(function(t,e){return t-r[e]});return n.map(function(t,e){return [r[e],o[e]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=1===h[0]&&1===h[1],p=function(t,e,n){var r=n.map(function(t){return t[0]}),o=n.map(function(t){return t[1]}),a=t.concat(r,o),i=e.map(function(t,e){return (t-a[e]%t)%t}),u=o.map(function(t,e){return t+i[e]}),s=e.map(function(t,e){return [r[e],u[e]]}),c=e.map(function(t,e){return [0,i[e]]});return [s,c]}([l.inHeight,l.inWidth],h,c),d=p[0],v=p[1],m=f?r:"valid",y=f?u:Ar(u,h,d),x=("avg"===n?function(){return jc(y,e,a,1,m)}:function(){return Kc(y,e,a,1,m)})(),b=f?x:sr(x,h,v);return s?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),Qc=wn({maxPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var u=cn(t,"x","maxPool3d"),s=u,c=!1;4===u.rank&&(c=!0,s=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3])),null==i&&(i=[1,1,1]),g(5===s.rank,function(){return "Error in maxPool3d: x must be rank 5 but got rank "+s.rank+"."}),g("NDHWC"===a,function(){return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),g(Io(n,i),function(){return "Error in maxPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),null!=o&&g(E(r),function(){return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=mo(s.shape,e,n,i,r,o,a),h=Nt.runKernelFunc(function(t,e){var n=t.maxPool3d(s,l);return e([s,n]),n},{x:s},function(t,a){var u=a[0],s=a[1];return {x:function(){return function(t,e,n,r,o,a,i,u){var s=cn(t,"dy","maxPool3dBackprop"),c=cn(e,"input","maxPool3dBackprop"),l=cn(n,"output","maxPool3dBackprop"),h=s,f=c,p=l,d=!1;4===c.rank&&(d=!0,h=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]),f=c.as5D(1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]),p=l.as5D(1,l.shape[0],l.shape[1],l.shape[2],l.shape[3])),g(5===h.rank,function(){return "Error in maxPool3dBackprop: dy must be rank 5 but got rank "+h.rank+"."}),g(5===f.rank,function(){return "Error in maxPool3dBackprop: input must be rank 5 but got rank "+f.rank+"."}),g(5===p.rank,function(){return "Error in maxPool3dBackprop: output must be rank 5 but got rank "+p.rank+"."}),null==a&&(a=[1,1,1]),g(Io(o,a),function(){return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"}),null!=u&&g(E(i),function(){return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+u+" but got pad "+i+"."});var v=mo(f.shape,r,o,a,i,u),m=Nt.runKernelFunc(function(t){return t.maxPool3dBackprop(h,f,p,v)},{dy5D:h,input5D:f});return d?m.as4D(m.shape[1],m.shape[2],m.shape[3],m.shape[4]):m}(t,u,s,e,n,i,r,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Jc=wn({avgPool3d_:function(t,e,n,r,o,a,i){void 0===a&&(a="NDHWC");var u=cn(t,"x","avgPool3d","float32"),s=u,c=!1;4===u.rank&&(c=!0,s=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3])),null==i&&(i=[1,1,1]),g(5===s.rank,function(){return "Error in avgPool3d: x must be rank 5 but got rank "+s.rank+"."}),g("NDHWC"===a,function(){return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),g(Io(n,i),function(){return "Error in avgPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),null!=o&&g(E(r),function(){return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=mo(s.shape,e,n,i,r,o,a),h=Nt.runKernelFunc(function(t){return t.avgPool3d(s,l)},{x:s},function(t){return {x:function(){return function(t,e,n,r,o,a,i){var u=cn(t,"dy","avgPool3dBackprop"),s=cn(e,"input","avgPool3dBackprop"),c=u,l=s,h=!1;4===s.rank&&(h=!0,c=u.as5D(1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]),l=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),g(5===c.rank,function(){return "Error in avgPool3dBackprop: dy must be rank 5 but got rank "+c.rank+"."}),g(5===l.rank,function(){return "Error in avgPool3dBackprop: input must be rank 5 but got rank "+l.rank+"."}),null==o&&(o=[1,1,1]),g(Io(r,o),function(){return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+o+"'"}),null!=i&&g(E(a),function(){return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var f=mo(l.shape,n,r,o,a,i),p=Nt.runKernelFunc(function(t){return t.avgPool3dBackprop(c,l,f)},{dy5D:c,input5D:l});return h?p.as4D(p.shape[1],p.shape[2],p.shape[3],p.shape[4]):p}(t,s,e,n,i,r,o)}}});return h=h.cast(s.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}});var Zc=wn({slice_:function(t,e,n){var r,o,a=cn(t,"x","slice");if(0===a.rank)throw new Error("Slicing scalar is not possible");(r="number"==typeof e?[e].concat(new Array(a.rank-1).fill(0)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(0)):e.slice()).forEach(function(t){g(-1!==t,function(){return "slice() does not support negative begin indexing."});}),o=(o=null==n?new Array(a.rank).fill(-1):"number"==typeof n?[n].concat(new Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(-1)):n).map(function(t,e){return t>=0?t:(g(-1===t,function(){return "Negative size values should be exactly -1 but got "+t+" for the slice() size at index "+e+"."}),a.shape[e]-r[e])}),qr(a,r,o);var i=a.shape,u={begin:r,size:o};return Nt.runKernelFunc(function(t){return t.slice(a,r,o)},{x:a},function(t){for(var e=[],n=0;n<t.rank;n++)e.push([r[n],i[n]-r[n]-o[n]]);return {x:function(){return t.pad(e)}}},"Slice",u)}}),tl=wn({slice1d_:function(t,e,n){var r=cn(t,"x","slice1d");return g(1===r.rank,function(){return "slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),Zc(r,[e],[n])}}),el=wn({slice2d_:function(t,e,n){var r=cn(t,"x","slice2d");return g(2===r.rank,function(){return "slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),Zc(r,e,n)}}),nl=wn({slice3d_:function(t,e,n){var r=cn(t,"x","slice3d");return g(3===r.rank,function(){return "slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),Zc(r,e,n)}}),rl=wn({slice4d_:function(t,e,n){var r=cn(t,"x","slice4d");return g(4===r.rank,function(){return "slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),Zc(r,e,n)}});function ol(t,e,n,r,o){return e.rank<n.rank&&(e=e.reshape(dn(e.shape,r))),t.rank<n.rank&&(t=t.reshape(dn(t.shape,r))),{x:function(){var r=t.mul(n.equal(e).cast(t.dtype));return null==o?r:r.transpose(o)}}}var al=wn({all_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","all","bool"),o=D(e,r.shape),a=o,i=mn(a,r.rank);null!=i&&(r=r.transpose(i),a=yn(a.length,r.rank));var u=Nt.runKernelFunc(function(t){return t.all(r,a)},{$x:r});if(n){var s=dn(u.shape,o);return u.reshape(s)}return u}}),il=wn({any_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","any","bool"),o=D(e,r.shape),a=o,i=mn(a,r.rank);null!=i&&(r=r.transpose(i),a=yn(a.length,r.rank));var u=Nt.runKernelFunc(function(t){return t.any(r,a)},{$x:r});if(n){var s=dn(u.shape,o);return u.reshape(s)}return u}}),ul=wn({argMax_:function(t,e){void 0===e&&(e=0);var n=cn(t,"x","argMax");null==e&&(e=0);var r=D(e,n.shape),o=mn(r,n.rank);null!=o&&(n=n.transpose(o),r=yn(r.length,n.rank));var a={axis:r[0]},i=[n];return Nt.runKernelFunc(function(t,e){var o=t.argMax(n,r[0]);return e([n]),o},{x:n},function(t,e){var n=e[0];return {x:function(){return Vn(n)}}},"ArgMax",a,i)}}),sl=wn({argMin_:function(t,e){void 0===e&&(e=0);var n=cn(t,"x","argMin");null==e&&(e=0);var r=D(e,n.shape),o=mn(r,n.rank);return null!=o&&(n=n.transpose(o),r=yn(r.length,n.rank)),Nt.runKernelFunc(function(t,e){var o=t.argMin(n,r[0]);return e([n]),o},{$x:n},function(t,e){var n=e[0];return {$x:function(){return Vn(n)}}})}}),cl=wn({logSumExp_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","logSumExp"),o=D(e,r.shape),a=r.max(o,!0),i=r.sub(a).exp().sum(o).log(),u=a.reshape(i.shape).add(i);if(n){var s=dn(u.shape,o);return u.reshape(s)}return u}}),ll=wn({max_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","max"),o=r,a=D(e,r.shape),i=a,u=mn(i,r.rank);null!=u&&(r=r.transpose(u),i=yn(i.length,r.rank));var s=[r],c=Nt.runKernelFunc(function(t,e){var n=t.max(r,i);return e([o,n]),n},{x:r},function(t,e){return ol(t,e[1],e[0],a,u)},"Max",{axes:i},s,[!0]);if(n){var l=dn(c.shape,a);c=c.reshape(l);}return c}}),hl=wn({mean_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","mean"),o=D(e,r.shape),a=w(pn(r.shape,o)[1]);return oo(function(t){var r=Sn(a);return {value:(r.dtype===t.dtype?t:t.cast(r.dtype)).div(r).sum(e,n),gradFunc:function(e){var n=t.shape.slice();return o.forEach(function(t){n[t]=1;}),e.reshape(n).mul(Mn(t.shape,"float32")).div(a)}}})(r)}}),fl=wn({min_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","min"),o=r,a=D(e,r.shape),i=a,u=mn(i,r.rank);null!=u&&(r=r.transpose(u),i=yn(i.length,r.rank));var s=[r],c=Nt.runKernelFunc(function(t,e){var n=t.min(r,i);return e([o,n]),n},{x:r},function(t,e){return ol(t,e[1],e[0],a,u)},"Min",{axes:i},s,[!0]);if(n){var l=dn(c.shape,a);c=c.reshape(l);}return c}}),pl=wn({moments_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=D(e,(t=cn(t,"x","moments")).shape),o=t.mean(r,n),a=o.shape;n||(a=dn(o.shape,r));var i=t.toFloat().sub(o.reshape(a)).square();return {mean:o,variance:i.mean(r,n)}}}),dl=wn({sum_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","sum");"bool"===r.dtype&&(r=r.toInt());var o=D(e,r.shape);return oo(function(t){var e=mn(o,t.rank),r=o,a=t;null!=e&&(a=t.transpose(e),r=yn(r.length,t.rank));var i=Nt.runKernelFunc(function(t){return t.sum(a,r)},{permutedX:a});if(n){var u=dn(i.shape,o);i=i.reshape(u);}return {value:i,gradFunc:function(e){var n=t.shape.slice();return o.forEach(function(t){n[t]=1;}),e.reshape(n).mul(Mn(t.shape,"float32"))}}})(r)}}),vl=wn({prod_:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=!1);var r=cn(t,"x","prod");"bool"===r.dtype&&(r=r.toInt());var o=D(e,r.shape),a=mn(o,r.rank),i=o,u=r;null!=a&&(u=r.transpose(a),i=yn(i.length,r.rank));var s=Nt.runKernelFunc(function(t){return t.prod(u,i)},{permutedX:u});if(n){var c=dn(s.shape,o);s=s.reshape(c);}return s}});var ml=wn({elu_:function(t){var e=cn(t,"x","elu");return Nt.runKernelFunc(function(t,n){var r=t.elu(e);return n([r]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){return Nt.runKernelFunc(function(e){return e.eluDer(t,n)},{dy:t,y:n})}}})}}),gl=wn({leakyRelu_:function(t,e){void 0===e&&(e=.2);var n=cn(t,"x","leakyRelu");return js(Sn(e).mul(n),n)}}),yl=wn({prelu_:function(t,e){var n=cn(t,"x","prelu"),r=cn(e,"alpha","prelu");return Nt.runKernelFunc(function(t,e){var o=t.prelu(n,r);return e([n,r]),o},{x:n,alpha:r},function(t,e){var n=e[0],r=e[1],o=n.greater(0);return {x:function(){return Ps(o,t,t.mul(r))},alpha:function(){var e=Ps(o,Vn(t),t.mul(n)),a=fo(r.shape,t.shape);return a.length>0&&(e=e.sum(a)),e.reshape(r.shape)}}},"Prelu")}}),xl=wn({relu_:function(t){var e=cn(t,"x","relu");return "bool"===e.dtype?e.toInt():Nt.runKernelFunc(function(t,n){var r=t.relu(e);return n([e]),r},{x:e},function(t,e){var n=e[0];return {x:function(){return t.mulStrict(n.step().toFloat())}}},"Relu")}}),bl=wn({relu6_:function(t){var e=cn(t,"x","relu6");return "bool"===e.dtype?e.toInt():Nt.runKernelFunc(function(t,n){var r=t.relu6(e);return n([e]),r},{x:e},function(t,e){var n=e[0],r=n.lessEqual(6).mul(n.step());return {x:function(){return t.mulStrict(r.toFloat())}}},"Relu6")}}),wl=wn({selu_:function(t){var e=cn(t,"x","selu");return Nt.runKernelFunc(function(t,n){var r=t.selu(e);return n([e]),r},{$x:e},function(t,e){var n=e[0];return {$x:function(){var e=n.greater(Sn(0)),r=Sn(ou),o=Sn(au),a=t.mul(o),i=t.mul(r).mul(n.toFloat().exp());return Ps(e,a,i)}}})}});var Cl=wn({transpose_:function(t,e){var n=cn(t,"x","transpose");if(null==e&&(e=n.shape.map(function(t,e){return e}).reverse()),g(n.rank===e.length,function(){return "Error in transpose: rank of input "+n.rank+" must match length of perm "+e+"."}),e.forEach(function(t){g(t>=0&&t<n.rank,function(){return "All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+e});}),n.rank<=1)return n.clone();var r={perm:e};return Nt.runKernelFunc(function(t){return t.transpose(n,e)},{x:n},function(t){var n=gn(e);return {x:function(){return t.transpose(n)}}},"Transpose",r)}});var El=wn({localResponseNormalization_:function(t,e,n,r,o){void 0===e&&(e=5),void 0===n&&(n=1),void 0===r&&(r=1),void 0===o&&(o=.5);var a=cn(t,"x","localResponseNormalization");g(4===a.rank||3===a.rank,function(){return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank "+a.rank+"."}),g(E(e),function(){return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+e+"."});var i=a,u=!1;3===a.rank&&(u=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var s=Nt.runKernelFunc(function(t,a){var u=t.localResponseNormalization4D(i,e,n,r,o);return a([i,u]),u},{x4D:i},function(t,a){var i=a[0],u=a[1];return {x4D:function(){return Nt.runKernelFunc(function(a){return a.LRNGrad(t,i,u,e,n,r,o)},{})}}});return u?s.as3D(s.shape[1],s.shape[2],s.shape[3]):s}});var Rl=wn({norm_:function(t,e,n,r){void 0===e&&(e="euclidean"),void 0===n&&(n=null),void 0===r&&(r=!1);var o=function t(e,n,r){if(void 0===r&&(r=null),0===e.rank)return e.abs();if(1!==e.rank&&null===r)return t(e.reshape([-1]),n,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return e.abs().sum(r);if(n===1/0)return e.abs().max(r);if(n===-1/0)return e.abs().min(r);if("euclidean"===n||2===n)return e.abs().pow(Sn(2,"int32")).sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}if(Array.isArray(r)&&2===r.length){if(1===n)return e.abs().sum(r[0]).max(r[1]-1);if(n===1/0)return e.abs().sum(r[1]).max(r[0]);if(n===-1/0)return e.abs().sum(r[1]).min(r[0]);if("fro"===n||"euclidean"===n)return e.square().sum(r).sqrt();throw new Error("Error in norm: invalid ord value: "+n)}throw new Error("Error in norm: invalid axis: "+r)}(t=cn(t,"x","norm"),e,n),a=o.shape;if(r){var i=D(n,t.shape);a=dn(o.shape,i);}return o.reshape(a)}});var Il=wn({basicLSTMCell_:function(t,e,n,r,o,a){var i=cn(t,"forgetBias","basicLSTMCell"),u=cn(e,"lstmKernel","basicLSTMCell"),s=cn(n,"lstmBias","basicLSTMCell"),c=cn(r,"data","basicLSTMCell"),l=cn(o,"c","basicLSTMCell"),h=cn(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(u).add(s),p=f.shape[0],d=f.shape[1]/4,v=[p,d],m=f.slice([0,0],v),g=f.slice([0,d],v),y=f.slice([0,2*d],v),x=f.slice([0,3*d],v),b=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return [b,w]}}),kl=wn({multiRNNCell_:function(t,e,n,r){for(var o=cn(e,"data","multiRNNCell"),a=ln(n,"c","multiRNNCell"),i=ln(r,"h","multiRNNCell"),u=o,s=[],c=0;c<t.length;c++){var l=t[c](u,a[c],i[c]);s.push(l[0]),s.push(l[1]),u=l[1];}var h=[],f=[];for(c=0;c<s.length;c+=2)h.push(s[c]),f.push(s[c+1]);return [h,f]}});var Sl=wn({movingAverage_:function(t,e,n,r,o){void 0===o&&(o=!0);var a=cn(t,"v","movingAverage"),i=cn(e,"x","movingAverage"),u=cn(n,"decay","movingAverage");It(a,i),g(C(a.shape,i.shape),function(){return "Shape mismatch in v and x"});var s=Sn(1),c=s.sub(u),l=i.sub(a).mul(c);if(o){g(null!=r,function(){return "When using zeroDebias: true, step is required."});var h=cn(r,"step","movingAverage");l=l.div(s.sub(ec(u,h)));}return a.add(l)}});var Al=wn({stridedSlice_:function(t,e,n,r,o,a,i,u,s){if(void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===u&&(u=0),void 0===s&&(s=0),null==r&&(r=new Array(e.length)),0!==i)throw new Error("ellipsis mask is not yet supported");var c=cn(t,"x","stridedSlice"),l=Kr(u),h=c.shape.slice();l.forEach(function(t){e[t]=0,n[t]=1,h.splice(t,0,1);}),c=c.reshape(h);for(var f=0;f<c.rank;f++)e[f]=Xr(o,e,r,c.shape,f),n[f]=$r(a,n,r,c.shape,f),r[f]=r[f]||1;var p=Kr(s);p.forEach(function(t){n[t]=e[t]+1,r[t]=1;});var d=jr(e,n,r),v=d.filter(function(t,e){return -1===p.indexOf(e)});return r.every(function(t){return 1===t})?Zc(c,e,d).reshape(v):Nt.runKernelFunc(function(t){return t.stridedSlice(c,e,n,r)},{$x:c}).reshape(v)}});var Dl=wn({topk_:function(t,e,n){void 0===e&&(e=1),void 0===n&&(n=!0);var r=cn(t,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(e>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+e);var a=Nt.runKernelFunc(function(t){return t.topk(r,e,n)},{$x:r});return {values:a[0],indices:a[1]}}});var Tl=wn({scatterND_:function(t,e,n){var r=cn(t,"indices","scatterND","int32"),o=cn(e,"updates","scatterND");return Gr(o,r,n),Nt.runKernelFunc(function(t){return t.scatterND(r,o,n)},{$indices:r,$updates:o})}});var Nl=wn({fft_:function(t){g("complex64"===t.dtype,function(){return "The dtype for tf.spectral.fft() must be complex64 but got "+t.dtype+"."});var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return Nt.runKernelFunc(function(t){return t.fft(r)},{input:t}).reshape(t.shape)}}),Fl=wn({ifft_:function(t){g("complex64"===t.dtype,function(){return "The dtype for tf.spectral.ifft() must be complex64 but got "+t.dtype+"."});var e=t.shape[t.shape.length-1],n=t.size/e,r=t.as2D(n,e);return Nt.runKernelFunc(function(t){return t.ifft(r)},{input:t}).reshape(t.shape)}}),_l=wn({rfft_:function(t,e){g("float32"===t.dtype,function(){return "The dtype for rfft() must be real value but got "+t.dtype});var n,r=t.shape[t.shape.length-1],o=t.size/r;if(null!=e&&e<r){var a=t.shape.map(function(t){return 0}),i=t.shape.map(function(t){return t});i[t.shape.length-1]=e,n=t.slice(a,i),r=e;}else if(null!=e&&e>r){var u=t.shape.map(function(t){return t});u[t.shape.length-1]=e-r,n=t.concat(Bn(u),t.shape.length-1),r=e;}else n=t;var s=n.zerosLike(),c=Cn(n,s).as2D(o,r),l=Nl(c),h=Math.floor(r/2)+1,f=En(l),p=Rn(l),d=f.split([h,r-h],f.shape.length-1),v=p.split([h,r-h],p.shape.length-1),m=n.shape.slice();return m[n.shape.length-1]=h,Cn(d[0],v[0]).reshape(m)}}),Ol=wn({irfft_:function(t){var e=t.shape[t.shape.length-1],n=t.size/e;if(e<=2){var r=t.as2D(n,e),o=Fl(r);return En(o)}var a=[n,2*(e-1)],i=En(t).as2D(n,e),u=Rn(t).as2D(n,e),s=i.slice([0,1],[n,e-2]).reverse(1),c=u.slice([0,1],[n,e-2]).reverse(1).mul(Sn(-1)),l=i.concat(s,1),h=u.concat(c,1);return r=Cn(l,h).as2D(a[0],a[1]),o=Fl(r),En(o)}}),Ml=Object.freeze({fft:Nl,ifft:Fl,rfft:_l,irfft:Ol});var Bl=wn({sparseToDense_:function(t,e,n,r){void 0===r&&(r=0);var o=cn(t,"sparseIndices","sparseToDense","int32"),a=cn(e,"sparseValues","sparseToDense"),i=cn(r,"defaultValue","sparseToDense",a.dtype);return function(t,e,n,r){if("int32"!==t.dtype)throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+t.shape+".");var o=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error("outputShape has incorrect number of elements:, "+n.length+", should be: "+a+".");var i=e.size;if(0!==e.rank&&(1!==e.rank||i!==o))throw new Error("sparseValues has incorrect shape "+e.shape+", should be [] or ["+o+"]");if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,n,i),Nt.runKernelFunc(function(t){return t.sparseToDense(o,a,n,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}});var Pl=wn({gatherND_:function(t,e){var n=cn(e,"indices","gatherND","int32"),r=cn(t,"x","gatherND");return Nt.runKernelFunc(function(t){return t.gatherND(r,n)},{$x:r,$indices:n})}});var Ll=wn({diag_:function(t){var e=cn(t,"x","diag").flatten(),n=t.shape.concat(t.shape);return Nt.runKernelFunc(function(t){return t.diag(e)},{$x:e}).reshape(n)}});var Wl=wn({dropout_:function(t,e,n,r){var o=cn(t,"x","dropout");if(g("float32"===o.dtype,function(){return "x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),g(e>=0&&e<1,function(){return "rate must be a float in the range [0, 1), but got "+e+"."}),0===e)return t instanceof dt?o.clone():o;var a=function(t,e){if(null==e)return t.shape.slice();if(C(t.shape,e))return e;if(t.shape.length===e.length){for(var n=[],r=0;r<t.shape.length;r++)null==e[r]&&null!=t.shape[r]?n.push(t.shape[r]):n.push(e[r]);return n}return e}(o,n),i=1-e,u=kr(a,0,1,"float32",r).add(i).floor().div(i);return o.mul(u)}});function Ul(t,e,n){for(var r=1-t%2,o=new Float32Array(t),a=0;a<t;++a){var i=2*Math.PI*a/(t+r-1);o[a]=e-n*Math.cos(i);}return An(o,"float32")}var Vl=wn({hannWindow_:function(t){return Ul(t,.5,.5)}}),zl=wn({hammingWindow_:function(t){return Ul(t,.54,.46)}}),Gl=wn({frame_:function(t,e,n,r,o){void 0===r&&(r=!1),void 0===o&&(o=0);for(var a=0,i=[];a+e<=t.size;)i.push(Zc(t,a,e)),a+=n;if(r)for(;a<t.size;){var u=a+e-t.size,s=zn([Zc(t,a,e-u),Pn([u],o)]);i.push(s),a+=n;}return 0===i.length?Dn([],[0,e]):zn(i).as2D(i.length,e)}}),Hl=wn({stft_:function(t,e,n,r,o){var a;void 0===o&&(o=Vl),null==r&&(a=e,r=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Gl(t,e,n),u=Zs(i,o(e)),s=[],c=0;c<i.shape[0];c++)s.push(_l(u.slice([c,0],[1,e]),r));return zn(s)}}),ql=Object.freeze({hannWindow:Vl,hammingWindow:zl,frame:Gl,stft:Hl});var Kl,jl=function(t,e,o){return void 0===o&&(o=1),n(this,void 0,void 0,function(){var n,a,i,u,s,c,l,h,f,p,d,v,m,x;return r(this,function(r){switch(r.label){case 0:return n=cn(t,"predictions","inTopK"),a=cn(e,"targets","inTopK"),g(n.rank>1,function(){return "inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),g(n.rank-1===a.rank,function(){return "predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+a.rank}),y(n.shape.slice(0,n.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=n.shape[n.shape.length-1],g(o>0&&o<=i,function(){return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+o}),[4,n.data()];case 1:return u=r.sent(),[4,a.data()];case 2:for(s=r.sent(),c=[u.length/i,i],h=c[1],f=N("bool",l=c[0]),p=0;p<l;p++){for(d=p*h,v=u.subarray(d,d+h),m=[],x=0;x<v.length;x++)m.push({value:v[x],index:x});for(m.sort(function(t,e){return e.value-t.value}),f[p]=0,x=0;x<o;x++)if(m[x].index===s[p]){f[p]=1;break}}return t!==n&&n.dispose(),e!==a&&a.dispose(),[2,In(f,a.shape,"bool")]}})})};!function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";}(Kl||(Kl={}));var Xl=wn({absoluteDifference_:function(t,e,n,r){void 0===r&&(r=Kl.SUM_BY_NONZERO_WEIGHTS);var o=cn(t,"labels","absoluteDifference"),a=cn(e,"predictions","absoluteDifference"),i=null;null!=n&&(i=cn(n,"weights","absoluteDifference")),y(o.shape,a.shape,"Error in absoluteDifference: ");var u=o.sub(a).abs();return $l(u,i,r)}}),$l=wn({computeWeightedLoss_:function(t,e,n){void 0===n&&(n=Kl.SUM_BY_NONZERO_WEIGHTS);var r=cn(t,"losses","computeWeightedLoss"),o=null;null!=e&&(o=cn(e,"weights","computeWeightedLoss"));var a=null==o?r:r.mul(o);if(n===Kl.NONE)return a;if(n===Kl.SUM)return a.sum();if(n===Kl.MEAN){if(null==o)return a.mean();var i=r.size/o.size,u=a.sum().div(o.sum());return i>1?u.div(Sn(i)):u}if(n===Kl.SUM_BY_NONZERO_WEIGHTS){if(null==o)return a.sum().div(Sn(r.size));var s=o.mul(Mn(r.shape)).notEqual(Sn(0)).sum().toFloat();return a.sum().div(s)}throw Error("Unknown reduction: "+n)}}),Yl=wn({cosineDistance_:function(t,e,n,r,o){void 0===o&&(o=Kl.SUM_BY_NONZERO_WEIGHTS);var a=cn(t,"labels","cosineDistance"),i=cn(e,"predictions","cosineDistance"),u=null;null!=r&&(u=cn(r,"weights","cosineDistance")),y(a.shape,i.shape,"Error in cosineDistance: ");var s=Sn(1).sub(a.mul(i).sum(n,!0));return $l(s,u,o)}}),Ql=wn({hingeLoss_:function(t,e,n,r){void 0===r&&(r=Kl.SUM_BY_NONZERO_WEIGHTS);var o=cn(t,"labels","hingeLoss"),a=cn(e,"predictions","hingeLoss"),i=null;null!=n&&(i=cn(n,"weights","hingeLoss")),y(o.shape,a.shape,"Error in hingeLoss: ");var u=Sn(1);o=Sn(2).mul(o).sub(u);var s=u.sub(o.mul(a)).relu();return $l(s,i,r)}}),Jl=wn({huberLoss_:function(t,e,n,r,o){void 0===r&&(r=1),void 0===o&&(o=Kl.SUM_BY_NONZERO_WEIGHTS);var a=cn(t,"labels","huberLoss"),i=cn(e,"predictions","huberLoss"),u=null;null!=n&&(u=cn(n,"weights","huberLoss")),y(a.shape,i.shape,"Error in huberLoss: ");var s=Sn(r),c=i.sub(a).abs(),l=$s(c,s),h=c.sub(l),f=Sn(.5).mul(l.square()).add(s.mul(h));return $l(f,u,o)}}),Zl=wn({logLoss_:function(t,e,n,r,o){void 0===r&&(r=1e-7),void 0===o&&(o=Kl.SUM_BY_NONZERO_WEIGHTS);var a=cn(t,"labels","logLoss"),i=cn(e,"predictions","logLoss"),u=null;null!=n&&(u=cn(n,"weights","logLoss")),y(a.shape,i.shape,"Error in logLoss: ");var s=Sn(1),c=Sn(r),l=a.mul(i.add(c).log()).neg().sub(s.sub(a).mul(s.sub(i).add(c).log()));return $l(l,u,o)}}),th=wn({meanSquaredError_:function(t,e,n,r){void 0===r&&(r=Kl.SUM_BY_NONZERO_WEIGHTS);var o=cn(t,"labels","meanSquaredError"),a=cn(e,"predictions","meanSquaredError"),i=null;null!=n&&(i=cn(n,"weights","meanSquaredError")),y(o.shape,a.shape,"Error in meanSquaredError: ");var u=o.squaredDifference(a);return $l(u,i,r)}}),eh=wn({sigmoidCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Kl.SUM_BY_NONZERO_WEIGHTS);var a=cn(t,"multiClassLabels","sigmoidCrossEntropy"),i=cn(e,"logits","sigmoidCrossEntropy"),u=null;if(null!=n&&(u=cn(n,"weights","sigmoidCrossEntropy")),y(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){var s=Sn(r),c=Sn(1),l=Sn(.5);a=a.mul(c.sub(s)).add(l.mul(s));}var h=function(t,e){var n=cn(t,"labels","sigmoidCrossEntropyWithLogits"),r=cn(e,"logits","sigmoidCrossEntropyWithLogits");y(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");var o=r.relu(),a=r.mul(n),i=r.abs().neg().exp().log1p();return o.sub(a).add(i)}(a,i);return $l(h,u,o)}}),nh=wn({softmaxCrossEntropy_:function(t,e,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Kl.SUM_BY_NONZERO_WEIGHTS);var a=cn(t,"onehotLabels","softmaxCrossEntropy"),i=cn(e,"logits","softmaxCrossEntropy"),u=null;if(null!=n&&(u=cn(n,"weights","softmaxCrossEntropy")),y(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){var s=Sn(r),c=Sn(1),l=Sn(a.shape[1]);a=a.mul(c.sub(s)).add(s.div(l));}var h=function(t,e,n){if(void 0===n&&(n=-1),-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+e.rank+" and dim was "+n);return oo(function(t,e,r){var o=e.logSumExp([n],!0),a=e.toFloat().sub(o);return r([t,a]),{value:a.mul(t).neg().sum([n]),gradFunc:function(t,e){var r=e[0],o=e[1],a=dn(t.shape,[n]);return [t.reshape(a).mul(r.toFloat().sub(o.exp())),t.reshape(a).mul(o.exp().sub(r.toFloat()))]}}})(t,e)}(a,i);return $l(h,u,o)}}),rh=Object.freeze({get Reduction(){return Kl},absoluteDifference:Xl,computeWeightedLoss:$l,cosineDistance:Yl,hingeLoss:Ql,huberLoss:Jl,logLoss:Zl,meanSquaredError:th,sigmoidCrossEntropy:eh,softmaxCrossEntropy:nh});function oh(t,e){return void 0===e&&(e=!1),Nt.tidy(function(){if(2!==t.shape.length)throw new Error("qr2d() requires a 2D Tensor, but got a "+t.shape.length+"D Tensor.");for(var n=t.shape[0],r=t.shape[1],o=vr(n),a=t.clone(),i=Dn([[1]],[1,1]),u=i.clone(),s=n>=r?r:n,c=function(t){var e,s=a,c=u,l=o;e=Nt.tidy(function(){var e=a.slice([t,t],[n-t,1]),s=e.norm(),c=a.slice([t,t],[1,1]),l=Dn([[-1]]).where(c.greater(0),Dn([[1]])),h=c.sub(l.mul(s)),f=e.div(h);u=1===f.shape[0]?i.clone():i.concat(f.slice([1,0],[f.shape[0]-1,f.shape[1]]),0);var p=l.matMul(h).div(s).neg(),d=a.slice([t,0],[n-t,r]),v=p.mul(u);if(0===t)a=d.sub(v.matMul(u.transpose().matMul(d)));else{var m=d.sub(v.matMul(u.transpose().matMul(d)));a=a.slice([0,0],[t,r]).concat(m,0);}var g=o.slice([0,t],[n,o.shape[1]-t]);if(0===t)o=g.sub(g.matMul(u).matMul(v.transpose()));else{var y=g.sub(g.matMul(u).matMul(v.transpose()));o=o.slice([0,0],[n,t]).concat(y,1);}return [u,a,o]}),u=e[0],a=e[1],o=e[2],je([s,c,l]);},l=0;l<s;++l)c(l);return !e&&n>r&&(o=o.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[o,a]})}var ah=wn({bandPart_:function(t,e,n){if(e%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+e+".");if(n%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+n+".");var r=cn(t,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,a=r.shape.slice(-2),i=a[0],u=a[1];if(!(e<=i))throw new Error("bandPart(): numLower ("+e+") must not be greater than the number of rows ("+i+").");if(!(n<=u))throw new Error("bandPart(): numUpper ("+n+") must not be greater than the number of columns ("+u+").");e<0&&(e=i),n<0&&(n=u);var s=Wn(0,i,1,"int32").reshape([-1,1]),c=Wn(0,u,1,"int32"),l=ac(s,c),h=_s(l.lessEqual(Sn(+e,"int32")),l.greaterEqual(Sn(-n,"int32"))),f=Bn([i,u],r.dtype);return Tr(_r(r.reshape([-1,i,u])).map(function(t){return Ps(h,t,f)})).reshape(o)}}),ih=wn({gramSchmidt_:function(t){var e;if(Array.isArray(t)){e=!1,g(null!=t&&t.length>0,function(){return "Gram-Schmidt process: input must not be null, undefined, or empty"});for(var n=t[0].shape[0],r=function(e){g(t[e].shape[0]===n,function(){return "Gram-Schmidt: Non-unique lengths found in the input vectors: ("+t[e].shape[0]+" vs. "+n+")"});},o=1;o<t.length;++o)r(o);}else e=!0,t=jn(t,t.shape[0],0).map(function(t){return Dr(t,[0])});g(t.length<=t[0].shape[0],function(){return "Gram-Schmidt: Number of vectors ("+t.length+") exceeds number of dimensions ("+t[0].shape[0]+")."});var a=[],i=t,u=function(t){a.push(Nt.tidy(function(){var e=i[t];if(t>0)for(var n=0;n<t;++n){var r=dl(a[n].mulStrict(e)).mul(a[n]);e=e.sub(r);}return e.div(Rl(e,"euclidean"))}));};for(o=0;o<t.length;++o)u(o);return e?Tr(a,0):a}}),uh=wn({qr_:function(t,e){if(void 0===e&&(e=!1),t.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+t.rank);if(2===t.rank)return oh(t,e);var n=t.shape.slice(0,t.shape.length-2).reduce(function(t,e){return t*e}),r=_r(t.reshape([n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),o=[],a=[];return r.forEach(function(t){var n=oh(t,e),r=n[0],i=n[1];o.push(r),a.push(i);}),[Tr(o,0).reshape(t.shape),Tr(a,0).reshape(t.shape)]}}),sh=Object.freeze({bandPart:ah,gramSchmidt:ih,qr:uh});function ch(t,e,n,r,o){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY);var a=t.shape[0];return n=Math.min(n,a),g(0<=r&&r<=1,function(){return "iouThreshold must be in [0, 1], but was '"+r+"'"}),g(2===t.rank,function(){return "boxes must be a 2D tensor, but was of rank '"+t.rank+"'"}),g(4===t.shape[1],function(){return "boxes must have 4 columns, but 2nd dimension was "+t.shape[1]}),g(1===e.rank,function(){return "scores must be a 1D tensor"}),g(e.shape[0]===a,function(){return "scores has incompatible shape with boxes. Expected "+a+", but was "+e.shape[0]}),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o}}var lh=wn({resizeBilinear_:function(t,e,n){void 0===n&&(n=!1);var r=cn(t,"images","resizeBilinear");g(3===r.rank||4===r.rank,function(){return "Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),g(2===e.length,function(){return "Error in resizeBilinear: new shape must 2D, but got shape "+e+"."});var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],u=e[1],s=Nt.runKernelFunc(function(t,e){return e([o]),t.resizeBilinear(o,i,u,n)},{x:o},function(t,e){return {x:function(){return Nt.runKernelFunc(function(r){return r.resizeBilinearBackprop(t,e[0],n)},{})}}},"ResizeBilinear",{alignCorners:n,newHeight:i,newWidth:u});return a?s.as3D(s.shape[1],s.shape[2],s.shape[3]):s}}),hh=wn({resizeNearestNeighbor_:function(t,e,n){void 0===n&&(n=!1);var r=cn(t,"images","resizeNearestNeighbor");g(3===r.rank||4===r.rank,function(){return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),g(2===e.length,function(){return "Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."}),g("float32"===r.dtype||"int32"===r.dtype,function(){return "`images` must have `int32` or `float32` as dtype"});var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=e[0],u=e[1],s=Nt.runKernelFunc(function(t,e){return e([o]),t.resizeNearestNeighbor(o,i,u,n)},{batchImages:o},function(t,e){return {batchImages:function(){return Nt.runKernelFunc(function(r){return r.resizeNearestNeighborBackprop(t,e[0],n)},{})}}});return a?s.as3D(s.shape[1],s.shape[2],s.shape[3]):s}}),fh=wn({nonMaxSuppression_:function(t,e,n,r,o){void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY);var a=cn(t,"boxes","nonMaxSuppression"),i=cn(e,"scores","nonMaxSuppression"),u=ch(a,i,n,r,o);n=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold;var s={maxOutputSize:n,iouThreshold:r,scoreThreshold:o};return Nt.runKernelFunc(function(t){return t.nonMaxSuppression(a,i,n,r,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",s)}}),ph=function(t,e,o,a,i){return void 0===a&&(a=.5),void 0===i&&(i=Number.NEGATIVE_INFINITY),n(this,void 0,void 0,function(){var n,u,s,c,l,h,f;return r(this,function(r){switch(r.label){case 0:return n=cn(t,"boxes","nonMaxSuppressionAsync"),u=cn(e,"scores","nonMaxSuppressionAsync"),s=ch(n,u,o,a,i),o=s.maxOutputSize,a=s.iouThreshold,i=s.scoreThreshold,[4,Promise.all([n.data(),u.data()])];case 1:return c=r.sent(),l=c[0],h=c[1],f=Mo(l,h,o,a,i),n!==t&&n.dispose(),u!==e&&u.dispose(),[2,f]}})})},dh=wn({cropAndResize_:function(t,e,n,r,o,a){var i=cn(t,"image","cropAndResize"),u=cn(e,"boxes","cropAndResize","float32"),s=cn(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=u.shape[0];return g(4===i.rank,function(){return "Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),g(2===u.rank&&4===u.shape[1],function(){return "Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+u.shape+"."}),g(1===s.rank&&s.shape[0]===c,function(){return "Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+u.shape+"."}),g(2===r.length,function(){return "Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),g(r[0]>=1&&r[1]>=1,function(){return "cropSize must be atleast [1,1], but was "+r}),g("bilinear"===o||"nearest"===o,function(){return "method must be bilinear or nearest, but was "+o}),Nt.runKernelFunc(function(t,e){return t.cropAndResize(i,u,s,r,o,a)},{images:i,boxes:u,boxInd:s},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:r})}}),vh=Object.freeze({resizeBilinear:lh,resizeNearestNeighbor:hh,nonMaxSuppression:fh,nonMaxSuppressionAsync:ph,cropAndResize:dh}),mh=function(t,e){return !(t>0)||"linear"===e},gh=function(t,e,n){if(null==n||"linear"===n)return t;if("relu"===n)return t.mul(e.step());throw new Error("Gradient for activation "+n+" has not been implemented yet.")},yh=function(t,e){var n=e,r=fo(t.shape,e.shape);return r.length>0&&(n=n.sum(r)),n.reshape(t.shape)},xh=function(t,e,n){if("linear"===e)return t;if("relu"===e)return xl(t);if("elu"===e)return ml(t);if("relu6"===e)return bl(t);if("prelu"===e)return yl(t,n);throw new Error("Unknown fused activation "+e+".")};var bh=wn({fusedMatMul_:function(t){var e,n=t.a,r=t.b,o=t.transposeA,a=void 0!==o&&o,i=t.transposeB,u=void 0!==i&&i,s=t.bias,c=t.activation,l=void 0===c?"linear":c,h=t.preluActivationWeights;if(!1===mh(Nt.state.gradientDepth,l)){var f=Lc(n,r,a,u);return null!=s&&(f=Ws(f,s)),xh(f,l,h)}var p=cn(n,"a","fused matMul"),d=cn(r,"b","fused matMul");e=Rt(p,d),p=e[0],d=e[1];var v=a?p.shape[p.rank-2]:p.shape[p.rank-1],m=u?d.shape[d.rank-1]:d.shape[d.rank-2],y=a?p.shape[p.rank-1]:p.shape[p.rank-2],x=u?d.shape[d.rank-2]:d.shape[d.rank-1],b=p.shape.slice(0,-2),E=d.shape.slice(0,-2),R=w(b),I=w(E);g(p.rank>=2&&d.rank>=2&&p.rank===d.rank,function(){return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."}),g(C(b,E),function(){return "Error in fused matMul: outer dimensions ("+b+") and ("+E+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."}),g(v===m,function(){return "Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+u+" must match."});var k,S,A=p.shape.slice(0,-2).concat([y,x]),D=a?p.as3D(R,v,y):p.as3D(R,y,v),T=u?d.as3D(I,x,m):d.as3D(I,m,x);null!=s&&po(A,(k=Rt(k=cn(s,"bias","fused matMul"),p)[0]).shape),null!=h&&(S=cn(h,"prelu weights","fused matMul"));var N={$a:D,$b:T};return null!=s&&(N.$bias=k),null!=h&&(N.$preluActivationWeights=S),Nt.runKernelFunc(function(t,e){var n=t.fusedBatchMatMul({a:D,b:T,transposeA:a,transposeB:u,bias:k,activation:l,preluActivationWeights:S});return e([D,T,n]),n},N,function(t,e){var n=e[0],r=e[1],o=e[2],i=gh(t,o,l),c={};return null!=s&&(c={$bias:function(){return yh(k,i)}}),a||u?!a&&u?Object.assign({$a:function(){return i.matMul(r,!1,!1)},$b:function(){return i.matMul(n,!0,!1)}},c):a&&!u?Object.assign({$a:function(){return r.matMul(i,!1,!0)},$b:function(){return n.matMul(i,!1,!1)}},c):Object.assign({$a:function(){return r.matMul(i,!0,!0)},$b:function(){return i.matMul(n,!0,!0)}},c):Object.assign({$a:function(){return i.matMul(r,!1,!0)},$b:function(){return n.matMul(i,!0,!1)}},c)}).reshape(A)}}),wh=wn({fusedConv2d_:function(t){var e=t.x,n=t.filter,r=t.strides,o=t.pad,a=t.dataFormat,i=void 0===a?"NHWC":a,u=t.dilations,s=void 0===u?[1,1]:u,c=t.dimRoundingMode,l=t.bias,h=t.activation,f=void 0===h?"linear":h,p=t.preluActivationWeights;if(f=f||"linear",!1===mh(Nt.state.gradientDepth,f)){var d=Ac(e,n,r,o,i,s,c);return null!=l&&(d=Ws(d,l)),xh(d,f,p)}var v=cn(e,"x","conv2d"),m=cn(n,"filter","conv2d"),y=v,x=!1;3===v.rank&&(x=!0,y=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),g(4===y.rank,function(){return "Error in fused conv2d: input must be rank 4, but got rank "+y.rank+"."}),g(4===m.rank,function(){return "Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),null!=c&&g(E(o),function(){return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),g(y.shape[3]===m.shape[2],function(){return "Error in conv2d: depth of input ("+y.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),g(Io(r,s),function(){return "Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+s+"'"}),g("NHWC"===i,function(){return "Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,w,C=go(y.shape,m.shape,r,s,o,c);null!=l&&(b=Rt(b=cn(l,"bias","fused conv2d"),v)[0],po(C.outShape,b.shape)),null!=p&&(w=cn(p,"prelu weights","fused conv2d"));var R={x:y,filter:m};null!=l&&(R.bias=b),null!=p&&(R.preluActivationWeights=w);var I=[m,y],k=Nt.runKernelFunc(function(t,e){var n=t.fusedConv2d({input:y,filter:m,convInfo:C,bias:b,activation:f,preluActivationWeights:w});return e([m,y,n]),n},R,function(t,e){var n=e,a=n[0],i=n[1],u=n[2],c=gh(t,u,f);g(Ro(s),function(){return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+s+"'"});var h={};return null!=l&&(h={bias:function(){return yh(b,c)}}),Object.assign({x:function(){return Nc(i.shape,c,a,r,o)},filter:function(){return Tc(i,c,a.shape,r,o)}},h)},"FusedConv2D",{convInfo:C,activation:f},I,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),Ch=wn({fusedDepthwiseConv2d_:function(t){var e=t.x,n=t.filter,r=t.strides,o=t.pad,a=t.dataFormat,i=void 0===a?"NHWC":a,u=t.dilations,s=void 0===u?[1,1]:u,c=t.dimRoundingMode,l=t.bias,h=t.activation,f=void 0===h?"linear":h,p=t.preluActivationWeights;if(!1===mh(Nt.state.gradientDepth,f)){var d=Fc(e,n,r,o,i,s,c);return null!=l&&(d=Ws(d,l)),xh(d,f,p)}var v=cn(e,"x","depthwiseConv2d"),m=cn(n,"filter","depthwiseConv2d"),y=v,x=!1;3===v.rank&&(x=!0,y=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),g(4===y.rank,function(){return "Error in fused depthwiseConv2d: input must be rank 4, but got rank "+y.rank+"."}),g(4===m.rank,function(){return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),g(y.shape[3]===m.shape[2],function(){return "Error in fused depthwiseConv2d: number of input channels ("+y.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),null==s&&(s=[1,1]),g(Io(r,s),function(){return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+s+"'"}),null!=c&&g(E(o),function(){return "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,w,C=go(y.shape,m.shape,r,s,o,c,!0);null!=l&&(b=Rt(b=cn(l,"bias","fused conv2d"),v)[0],po(C.outShape,b.shape)),null!=p&&(w=cn(p,"prelu weights","fused depthwiseConv2d"));var R={x:y,filter:m};null!=l&&(R.bias=b),null!=p&&(R.preluActivationWeights=w);var I=[m,y],k=Nt.runKernelFunc(function(t,e){var n=t.fusedDepthwiseConv2D({input:y,filter:m,convInfo:C,bias:b,activation:f,preluActivationWeights:w});return e([m,y,n]),n},R,function(t,e){g(Ro(s),function(){return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+s+"'"});var n=e[0],r=e[1],o=e[2],a=gh(t,o,f),i={};return null!=l&&(i={bias:function(){return yh(b,a)}}),Object.assign({x:function(){return _c(r.shape,a,n,C)},filter:function(){return Oc(r,a,n.shape,C)}},i)},"FusedDepthwiseConv2D",{convInfo:C,activation:f},I,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),Eh=Object.freeze({matMul:bh,conv2d:wh,depthwiseConv2d:Ch}),Rh=Object.freeze({image:vh,linalg:sh,losses:rh,spectral:Ml,fused:Eh,signal:ql,square:Lu,conv1d:Sc,conv2d:Ac,conv3d:Dc,depthwiseConv2d:Fc,separableConv2d:Mc,conv2dTranspose:Bc,conv3dTranspose:Pc,op:wn,batchNormalization2d:Is,batchNormalization3d:ks,batchNormalization4d:Ss,batchNormalization:As,batchNorm:Ds,batchNorm2d:Ts,batchNorm3d:Ns,batchNorm4d:Fs,booleanMaskAsync:Ec,complex:Cn,real:En,imag:Rn,concat:zn,concat1d:Gn,concat2d:Hn,concat3d:qn,concat4d:Kn,split:jn,matMul:Lc,dot:Wc,outerProduct:Uc,reverse:Vc,reverse1d:zc,reverse2d:Gc,reverse3d:Hc,reverse4d:qc,maxPool:Xc,avgPool:$c,pool:Yc,maxPool3d:Qc,avgPool3d:Jc,slice:Zc,slice1d:tl,slice2d:el,slice3d:nl,slice4d:rl,abs:Wu,acos:Uu,acosh:Vu,asin:zu,asinh:Gu,atan:Hu,atanh:qu,ceil:Ku,clipByValue:ju,cos:Xu,cosh:$u,erf:Yu,exp:Qu,expm1:Ju,floor:Zu,log:ts,log1p:es,logSigmoid:ns,neg:rs,reciprocal:os,round:as,rsqrt:is,sigmoid:us,sign:ss,isNaN:cs,isInf:ls,isFinite:hs,sin:fs,sinh:ps,softplus:ds,sqrt:vs,step:ms,tan:gs,tanh:ys,all:al,any:il,argMax:ul,argMin:sl,logSumExp:cl,max:ll,mean:hl,min:fl,moments:pl,sum:dl,prod:vl,equal:uc,equalStrict:sc,greater:cc,greaterEqual:lc,greaterEqualStrict:hc,greaterStrict:fc,less:pc,lessEqual:dc,lessEqualStrict:vc,lessStrict:mc,notEqual:gc,notEqualStrict:yc,add:Ws,addN:Us,addStrict:Vs,atan2:zs,div:Gs,divNoNan:Hs,divStrict:qs,floorDiv:Ks,maximum:js,maximumStrict:Xs,minimum:$s,minimumStrict:Ys,mod:Qs,modStrict:Js,mul:Zs,mulStrict:tc,pow:ec,powStrict:nc,squaredDifference:rc,squaredDifferenceStrict:oc,sub:ac,subStrict:ic,elu:ml,leakyRelu:gl,prelu:yl,relu:xl,relu6:bl,selu:wl,logicalAnd:_s,logicalNot:Os,logicalOr:Ms,logicalXor:Bs,where:Ps,whereAsync:Ls,buffer:ir,print:ur,batchToSpaceND:sr,broadcastTo:cr,cast:lr,clone:hr,cumsum:fr,depthToSpace:pr,expandDims:dr,eye:vr,multinomial:mr,oneHot:gr,pad:yr,pad1d:xr,pad2d:br,pad3d:wr,pad4d:Cr,rand:Er,randomNormal:Rr,randomGamma:Ir,randomUniform:kr,reshape:Sr,spaceToBatchND:Ar,squeeze:Dr,stack:Tr,tile:Nr,truncatedNormal:Fr,unstack:_r,setdiff1dAsync:Or,fill:Pn,linspace:Ln,ones:Mn,range:Wn,scalar:Sn,tensor:In,tensor1d:An,tensor2d:Dn,tensor3d:Tn,tensor4d:Nn,tensor5d:Fn,tensor6d:_n,variable:On,zeros:Bn,onesLike:Un,zerosLike:Vn,transpose:Cl,softmax:io,logSoftmax:uo,localResponseNormalization:El,norm:Rl,gather:wc,unsortedSegmentSum:Cc,basicLSTMCell:Il,multiRNNCell:kl,movingAverage:Sl,stridedSlice:Al,topk:Dl,scatterND:Tl,fft:Nl,ifft:Fl,rfft:_l,irfft:Ol,sparseToDense:Bl,gatherND:Pl,diag:Ll,dropout:Wl,hannWindow:Vl,hammingWindow:zl,frame:Gl,stft:Hl,inTopKAsync:jl});function Ih(t,e){Array.isArray(t)||(t=[t]),t.forEach(function(t){null!=t&&g("complex64"!==t.dtype,function(){return e+" does not support complex64 tensors."});});}function kh(t,e,n,r){if("linear"===n)return t.linear(e);if("relu"===n)return t.relu(e);if("elu"===n)return t.elu(e);if("relu6"===n)return t.relu6(e);if("prelu"===n)return t.prelu(e,r);throw new Error("Activation "+n+" has not been implemented for the CPU backend.")}var Sh=function(t){function o(){var e=t.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new so(e,Nt),e}return e(o,t),o.prototype.write=function(t,e,n){this.firstUse&&(this.firstUse=!1,a().get("IS_NODE")&&an("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================\n"));var r={};return this.data.set(r,{values:t,dtype:n}),r},o.prototype.move=function(t,e,n,r){this.data.set(t,{values:e,dtype:r});},o.prototype.numDataIds=function(){return this.data.numDataIds()},o.prototype.read=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){return [2,this.readSync(t)]})})},o.prototype.readSync=function(t){var e=this.data.get(t),n=e.dtype,r=e.complexTensors;return "complex64"===n?No(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.data.get(t).values},o.prototype.bufferSync=function(t){var e=this.readSync(t.dataId),n=e;if("string"===t.dtype)try{n=e.map(function(t){return Z(t)});}catch(t){throw new Error("Failed to decode encoded string bytes into utf-8")}return ir(t.shape,t.dtype,n)},o.prototype.makeOutput=function(t,e,n){var r=this.write(t,e,n);return Nt.makeTensorFromDataId(r,e,n,this)},o.prototype.disposeData=function(t){if(this.data.has(t)){var e=this.data.get(t).complexTensors;null!=e&&(e.real.dispose(),e.imag.dispose()),this.data.delete(t);}},o.prototype.time=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return e=Y(),t(),[2,{kernelMs:Y()-e}]})})},o.prototype.memory=function(){return {unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},o.prototype.complex=function(t,e){var n=this.makeOutput(null,t.shape,"complex64");return this.data.get(n.dataId).complexTensors={real:Nt.keep(t.clone()),imag:Nt.keep(e.clone())},n},o.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},o.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},o.prototype.slice=function(t,e,n){if(Ih(t,"slice"),Yr(t.shape,e,n)){var r=Qr(e,t.strides),o=w(n);return In(this.readSync(t.dataId).subarray(r,r+o),n,t.dtype)}for(var a=ir(n,t.dtype),i=this.bufferSync(t),u=0;u<a.size;++u){var s=a.indexToLoc(u).map(function(t,n){return t+e[n]});a.values[u]=i.get.apply(i,s);}return a.toTensor()},o.prototype.stridedSlice=function(t,e,n,r){Ih(t,"stridedSlice");var o=jr(e,n,r);if(o.some(function(t){return 0===t}))return In([],o);for(var a=ir(o,t.dtype),i=this.bufferSync(t),u=0;u<a.size;u++){for(var s=a.indexToLoc(u),c=new Array(s.length),l=0;l<c.length;l++)c[l]=s[l]*r[l]+e[l];a.set.apply(a,[i.get.apply(i,c)].concat(s));}return a.toTensor()},o.prototype.diag=function(t){for(var e=this.readSync(t.dataId),n=ir([t.size,t.size],t.dtype),r=n.values,o=0;o<e.length;o++)r[o*t.size+o]=e[o];return n.toTensor()},o.prototype.unstack=function(t,e){for(var n=t.shape[e],r=new Array(t.rank-1),o=0,a=0;a<t.rank;a++)a!==e&&(r[o++]=t.shape[a]);var i=new Array(t.rank).fill(0),u=t.shape.slice();u[e]=1;var s=new Array(n);for(a=0;a<s.length;a++)i[e]=a,s[a]=this.slice(t,i,u).reshape(r);return s},o.prototype.reverse=function(t,e){Ih(t,"reverse");for(var n=ir(t.shape,t.dtype),r=this.bufferSync(t),o=function(o){var a=n.indexToLoc(o),i=a.slice();e.forEach(function(e){return i[e]=t.shape[e]-1-i[e]}),n.set.apply(n,[r.get.apply(r,i)].concat(a));},a=0;a<n.size;a++)o(a);return n.toTensor()},o.prototype.concat=function(t,e){var n=this;if("complex64"===t[0].dtype){var r=t.map(function(t){return En(t)}),o=t.map(function(t){return Rn(t)});return Cn(this.concat(r,e),this.concat(o,e))}var a=t.map(function(t){var n=w(t.shape.slice(e));return t.as2D(-1,n)}),i=bn(a.map(function(t){return t.shape}),1),u=ir(i,t[0].dtype).values;if(1===a[0].shape[0]){var s=0;a.forEach(function(t){u.set(n.readSync(t.dataId),s),s+=t.size;});}else{var c=0;a.forEach(function(t){for(var e=n.readSync(t.dataId),r=0,o=0;o<t.shape[0];++o)for(var a=o*i[1]+c,s=0;s<t.shape[1];++s)u[a+s]=e[r++];c+=t.shape[1];});}var l=bn(t.map(function(t){return t.shape}),e);return In(u,l,t[0].dtype)},o.prototype.neg=function(t){return Ih(t,"neg"),this.multiply(Sn(-1),t)},o.prototype.add=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),function(t,e,n,r){return {real:t+n,imag:e+r}}):this.broadcastedBinaryOp(t,e,Ct(t.dtype,e.dtype),function(t,e){return t+e})},o.prototype.addN=function(t){var e=this;Ih(t,"addN");for(var n=t.map(function(t){return e.readSync(t.dataId)}),r=ir(t[0].shape,t[0].dtype),o=r.values,a=0;a<t.length;a++)for(var i=n[a],u=0;u<o.length;u++)o[u]+=i[u];return r.toTensor()},o.prototype.subtract=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),function(t,e,n,r){return {real:t-n,imag:e-r}}):this.broadcastedBinaryOp(t,e,Ct(t.dtype,e.dtype),function(t,e){return t-e})},o.prototype.pow=function(t,e){return Ih([t,e],"pow"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.pow(t,e)})},o.prototype.batchMatMul=function(t,e,n,r){Ih([t,e],"matMul");for(var o=n?t.shape[1]:t.shape[2],a=n?t.shape[2]:t.shape[1],i=r?e.shape[1]:e.shape[2],u=t.shape[0],s=this.readSync(t.dataId),c=this.readSync(e.dataId),l=n?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],h=l[0],f=l[1],p=l[2],d=r?[1,e.strides[1],e.strides[0]]:[e.strides[1],1,e.strides[0]],v=d[0],m=d[1],g=d[2],y=a*i,x=ir([u,a,i],t.dtype),b=x.values,w=this.blockSize,C=0;C<u;C++)for(var E=0;E<a;E+=w)for(var R=0;R<i;R+=w)for(var I=0;I<o;I+=w)for(var k=Math.min(E+w,a),S=Math.min(R+w,i),A=Math.min(I+w,o),D=E;D<k;D++)for(var T=R;T<S;T++){for(var N=0,F=I;F<A;F++)N+=s[C*h+D*f+F*p]*c[F*v+T*m+C*g];b[C*y+(D*i+T)]+=N;}return x.toTensor()},o.prototype.fusedBatchMatMul=function(t){var e=t.a,n=t.b,r=t.transposeA,o=t.transposeB,a=t.bias,i=t.activation,u=t.preluActivationWeights,s=this.batchMatMul(e,n,r,o);return a&&(s=this.add(s,a)),i&&(s=kh(this,s,i,u)),s},o.prototype.multiply=function(t,e){return "complex64"===t.dtype||"complex64"===e.dtype?this.broadcastedBinaryComplexOp(t.cast("complex64"),e.cast("complex64"),function(t,e,n,r){return {real:t*n-e*r,imag:t*r+e*n}}):this.broadcastedBinaryOp(t,e,Ct(t.dtype,e.dtype),function(t,e){return t*e})},o.prototype.realDivide=function(t,e){Ih([t,e],"realDivide");return this.broadcastedBinaryOp(t,e,"float32",function(t,e){return t/e})},o.prototype.floorDiv=function(t,e){Ih([t,e],"floorDiv");return this.broadcastedBinaryOp(t,e,"int32",function(t,e){return Math.floor(t/e)})},o.prototype.sum=function(t,e){Ih(t,"sum"),vn("sum",e,t.rank);for(var n=pn(t.shape,e),r=n[0],o=n[1],a=Bn(r,Ct(t.dtype,"int32")),i=w(o),u=this.readSync(a.dataId),s=this.readSync(t.dataId),c=0;c<u.length;++c){for(var l=c*i,h=0,f=0;f<i;++f)h+=s[l+f];u[c]=h;}return a},o.prototype.prod=function(t,e){Ih(t,"sum");for(var n=pn(t.shape,e),r=n[0],o=n[1],a=Bn(r,Ct(t.dtype,"int32")),i=w(o),u=this.readSync(a.dataId),s=this.readSync(t.dataId),c=0;c<u.length;++c){for(var l=c*i,h=1,f=0;f<i;++f)h*=s[l+f];u[c]=h;}return a},o.prototype.unsortedSegmentSum=function(t,e,n){Ih(t,"unsortedSegmentSum");for(var r=[],o=t.rank-e.rank,a=0;a<o;++a)e=e.expandDims(a+1);for(a=0;a<n;++a){var i=Sn(a,"int32"),u=uc(i,e).asType("float32").mul(t).sum(0);r.push(u);}return Tr(r)},o.prototype.argMin=function(t,e){Ih(t,"argMin");var n=[e];vn("argMin",n,t.rank);for(var r=pn(t.shape,n),o=r[0],a=r[1],i=Bn(o,"int32"),u=w(a),s=this.readSync(i.dataId),c=this.readSync(t.dataId),l=0;l<s.length;++l){for(var h=l*u,f=c[h],p=0,d=0;d<u;++d){var v=c[h+d];v<f&&(f=v,p=d);}s[l]=p;}return i},o.prototype.argMax=function(t,e){Ih(t,"argMax");var n=[e];vn("argMax",n,t.rank);for(var r=pn(t.shape,n),o=r[0],a=r[1],i=Bn(o,"int32"),u=w(a),s=this.readSync(i.dataId),c=this.readSync(t.dataId),l=0;l<s.length;++l){for(var h=l*u,f=c[h],p=0,d=0;d<u;++d){var v=c[h+d];v>f&&(f=v,p=d);}s[l]=p;}return i},o.prototype.cumsum=function(t,e,n,r){if(Ih(t,"cumsum"),e!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+e);for(var o=Ct(t.dtype,"int32"),a=Bn(t.shape,o),i=this.readSync(a.dataId),u=this.readSync(t.dataId),s=t.shape[t.rank-1],c=r?function(t,e){return t+s-e-1}:function(t,e){return t+e},l=0;l<u.length;l+=s)for(var h=0;h<s;h++){var f=c(l,h);if(0===h)i[f]=n?0:u[f];else{var p=c(l,h-1);i[f]=n?u[p]+i[p]:u[f]+i[p];}}return a},o.prototype.equal=function(t,e){return Ih([t,e],"equal"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t===e?1:0})},o.prototype.notEqual=function(t,e){return Ih([t,e],"notEqual"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t!==e?1:0})},o.prototype.less=function(t,e){return Ih([t,e],"less"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t<e?1:0})},o.prototype.lessEqual=function(t,e){return Ih([t,e],"lessEqual"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t<=e?1:0})},o.prototype.greater=function(t,e){return Ih([t,e],"greater"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t>e?1:0})},o.prototype.greaterEqual=function(t,e){return Ih([t,e],"greaterEqual"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t>=e?1:0})},o.prototype.logicalNot=function(t){Ih(t,"logicalNot");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)n[r]=e[r]?0:1;return this.makeOutput(n,t.shape,"bool")},o.prototype.logicalAnd=function(t,e){return Ih([t,e],"logicalAnd"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t&&e})},o.prototype.logicalOr=function(t,e){return Ih([t,e],"logicalOr"),this.broadcastedBinaryOp(t,e,"bool",function(t,e){return t||e})},o.prototype.select=function(t,e,n){Ih([t,e,n],"select");for(var r=this.readSync(t.dataId),o=this.readSync(e.dataId),a=this.readSync(n.dataId),i=Bn(e.shape,Ct(e.dtype,n.dtype)),u=this.readSync(i.dataId),s=0,c=0===t.rank||t.rank>1||1===e.rank?1:w(e.shape.slice(1)),l=0;l<r.length;l++)for(var h=0;h<c;h++)1===r[l]?u[s++]=o[l]:u[s++]=a[l];return i},o.prototype.where=function(t){Ih([t],"where");var e=this.readSync(t.dataId);return Uo(t.shape,e)},o.prototype.topk=function(t,e,n){return Ih(t,"topk"),Wo(this.readSync(t.dataId),t.shape,t.dtype,e)},o.prototype.min=function(t,e){Ih(t,"min"),vn("min",e,t.rank);for(var n=pn(t.shape,e),r=n[0],o=n[1],a=Bn(r,t.dtype),i=w(o),u=this.readSync(a.dataId),s=this.readSync(t.dataId),c=0;c<u.length;++c){for(var l=c*i,h=s[l],f=0;f<i;++f){var p=s[l+f];p<h&&(h=p);}u[c]=h;}return a},o.prototype.minimum=function(t,e){return Ih([t,e],"minimum"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.min(t,e)})},o.prototype.mod=function(t,e){return Ih([t,e],"mod"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){var n=t%e;return t<0&&e<0||t>=0&&e>=0?n:(n+e)%e})},o.prototype.max=function(t,e){Ih(t,"max"),vn("max",e,t.rank);for(var n=pn(t.shape,e),r=n[0],o=n[1],a=Bn(r,t.dtype),i=w(o),u=this.readSync(a.dataId),s=this.readSync(t.dataId),c=0;c<u.length;++c){for(var l=c*i,h=s[l],f=0;f<i;++f){var p=s[l+f];p>h&&(h=p);}u[c]=h;}return a},o.prototype.maximum=function(t,e){return Ih([t,e],"maximum"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.max(t,e)})},o.prototype.all=function(t,e){Ih(t,"all"),vn("all",e,t.rank);for(var n=pn(t.shape,e),r=n[0],o=n[1],a=Bn(r,t.dtype),i=w(o),u=this.readSync(a.dataId),s=this.readSync(t.dataId),c=0;c<u.length;++c){for(var l=c*i,h=s[l],f=0;f<i;++f){var p=s[l+f];h=h&&p;}u[c]=h;}return a},o.prototype.any=function(t,e){Ih(t,"any"),vn("any",e,t.rank);for(var n=pn(t.shape,e),r=n[0],o=n[1],a=Bn(r,t.dtype),i=w(o),u=this.readSync(a.dataId),s=this.readSync(t.dataId),c=0;c<u.length;++c){for(var l=c*i,h=s[l],f=0;f<i;++f){var p=s[l+f];h=h||p;}u[c]=h;}return a},o.prototype.squaredDifference=function(t,e){return Ih([t,e],"squaredDifference"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){var n=t-e;return n*n})},o.prototype.ceil=function(t){Ih(t,"ceil");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.ceil(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.floor=function(t){Ih(t,"floor");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.floor(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.sign=function(t){Ih(t,"x");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)e[r]<0?n[r]=-1:e[r]>0?n[r]=1:n[r]=0;return this.makeOutput(n,t.shape,"float32")},o.prototype.isNaN=function(t){Ih(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isNaN(e[r])&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.isInf=function(t){Ih(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Math.abs(e[r])===1/0&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.isFinite=function(t){Ih(t,"x");for(var e=this.readSync(t.dataId),n=new Uint8Array(e.length),r=0;r<e.length;++r)Number.isFinite(e[r])&&(n[r]=1);return this.makeOutput(n,t.shape,"bool")},o.prototype.round=function(t){Ih(t,"round");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=Math.floor(e[r]);e[r]-o<.5?n[r]=Math.floor(e[r]):e[r]-o>.5?n[r]=Math.ceil(e[r]):n[r]=o%2==0?o:o+1;}return this.makeOutput(n,t.shape,"float32")},o.prototype.exp=function(t){Ih(t,"exp");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.exp(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.expm1=function(t){Ih(t,"expm1");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=Math.expm1(e[r]);return this.makeOutput(n,t.shape,"float32")},o.prototype.log=function(t){Ih(t,"log");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.log1p=function(t){Ih(t,"log1p");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.log1p(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.sqrt=function(t){Ih(t,"sqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=Math.sqrt(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.rsqrt=function(t){Ih(t,"rsqrt");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r){var o=e[r];n[r]=1/Math.sqrt(o);}return this.makeOutput(n,t.shape,"float32")},o.prototype.reciprocal=function(t){Ih(t,"reciprocal");for(var e=this.readSync(t.dataId),n=new Float32Array(e.length),r=0;r<e.length;++r)n[r]=1/e[r];return this.makeOutput(n,t.shape,"float32")},o.prototype.linear=function(t){return t},o.prototype.relu=function(t){Ih(t,"relu");for(var e=Bn(t.shape,t.dtype),n=this.readSync(e.dataId),r=this.readSync(t.dataId),o=0;o<r.length;++o)n[o]=Math.max(0,r[o]);return e},o.prototype.relu6=function(t){Ih(t,"relu");for(var e=Bn(t.shape,t.dtype),n=this.readSync(e.dataId),r=this.readSync(t.dataId),o=0;o<r.length;++o)n[o]=Math.min(Math.max(0,r[o]),6);return e},o.prototype.prelu=function(t,e){return Ih([t,e],"prelu"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return t<0?e*t:t})},o.prototype.elu=function(t){Ih(t,"elu");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=n[r];e[r]=o>=0?o:Math.exp(o)-1;}return this.makeOutput(e,t.shape,"float32")},o.prototype.eluDer=function(t,e){Ih([t,e],"eluDer");for(var n=new Float32Array(e.size),r=this.readSync(e.dataId),o=this.readSync(t.dataId),a=0;a<r.length;++a){var i=r[a];n[a]=i>=1?o[a]:o[a]*(i+1);}return this.makeOutput(n,e.shape,"float32")},o.prototype.selu=function(t){Ih(t,"selu");for(var e=ou,n=au,r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>=0?n*i:e*(Math.exp(i)-1);}return this.makeOutput(r,t.shape,"float32")},o.prototype.clip=function(t,e,n){Ih(t,"clip");for(var r=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];r[a]=i>n?n:i<e?e:i;}return this.makeOutput(r,t.shape,"float32")},o.prototype.abs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.abs(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.complexAbs=function(t){for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<t.size;++r){var o=n[2*r],a=n[2*r+1];e[r]=Math.hypot(o,a);}return this.makeOutput(e,t.shape,"float32")},o.prototype.int=function(t){Ih(t,"int");for(var e=new Int32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=n[r];return this.makeOutput(e,t.shape,"int32")},o.prototype.sigmoid=function(t){Ih(t,"sigmoid");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=1/(1+Math.exp(-n[r]));return this.makeOutput(e,t.shape,"float32")},o.prototype.softplus=function(t){Ih(t,"softplus");for(var e=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o]>-e,i=r[o]<e,u=Math.exp(r[o]),s=void 0;s=i?u:a?r[o]:Math.log(1+u),n[o]=s;}return this.makeOutput(n,t.shape,"float32")},o.prototype.sin=function(t){Ih(t,"sin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sin(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.cos=function(t){Ih(t,"cos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cos(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.tan=function(t){Ih(t,"tan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.tan(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.asin=function(t){Ih(t,"asin");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asin(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.acos=function(t){Ih(t,"acos");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acos(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atan=function(t){Ih(t,"atan");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atan(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atan2=function(t,e){return Ih([t,e],"atan2"),this.broadcastedBinaryOp(t,e,t.dtype,function(t,e){return Math.atan2(t,e)})},o.prototype.sinh=function(t){Ih(t,"sinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.sinh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.cosh=function(t){Ih(t,"cosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.cosh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.tanh=function(t){Ih(t,"tanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=R(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.asinh=function(t){Ih(t,"asinh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.asinh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.acosh=function(t){Ih(t,"acosh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.acosh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.atanh=function(t){Ih(t,"atanh");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r)e[r]=Math.atanh(n[r]);return this.makeOutput(e,t.shape,"float32")},o.prototype.erf=function(t){Ih(t,"erf");for(var e=new Float32Array(t.size),n=this.readSync(t.dataId),r=0;r<n.length;++r){var o=Math.sign(n[r]),a=Math.abs(n[r]),i=1/(1+.3275911*a);e[r]=o*(1-((((1.061405429*i-1.453152027)*i+1.421413741)*i-.284496736)*i+.254829592)*i*Math.exp(-a*a));}return this.makeOutput(e,t.shape,"float32")},o.prototype.step=function(t,e){void 0===e&&(e=0),Ih(t,"step");for(var n=new Float32Array(t.size),r=this.readSync(t.dataId),o=0;o<r.length;++o){var a=r[o];isNaN(a)?n[o]=NaN:n[o]=a>0?1:e;}return this.makeOutput(n,t.shape,"float32")},o.prototype.fusedConv2d=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,i=t.preluActivationWeights,u=this.conv2d(e,n,r);return o&&(u=this.add(u,o)),a&&(u=kh(this,u,a,i)),u},o.prototype.conv2d=function(t,e,n){Ih([t,e],"conv2d");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,u=n.padInfo.left,s=n.padInfo.top,c="channelsLast"===n.dataFormat,l=ir(n.outShape,t.dtype),h=t.strides[0],f=c?t.strides[1]:t.strides[2],p=c?t.strides[2]:1,d=c?1:t.strides[1],v=l.strides[0],m=c?l.strides[1]:l.strides[2],g=c?l.strides[2]:1,y=c?1:l.strides[1],x=this.readSync(t.dataId),b=this.readSync(e.dataId),w=l.values,C=0;C<n.batchSize;++C)for(var E=C*h,R=C*v,I=0;I<n.outHeight;++I)for(var k=R+I*m,S=I*n.strideHeight-s,A=0;A<r;A++){var D=S+A*a;if(!(D<0||D>=n.inHeight))for(var T=A*e.strides[0],N=E+D*f,F=0;F<n.outWidth;++F)for(var _=k+F*g,O=F*n.strideWidth-u,M=0;M<o;M++){var B=O+M*i;if(!(B<0||B>=n.inWidth))for(var P=N+B*p,L=T+M*e.strides[1],W=0;W<n.inChannels;++W){for(var U=x[P+W*d],V=0;V<n.outChannels;++V)w[_+V*y]+=U*b[L+V];L+=n.outChannels;}}}return l.toTensor()},o.prototype.conv3d=function(t,e,n){for(var r=n.filterDepth,o=n.filterHeight,a=n.filterWidth,i=n.dilationDepth,u=n.dilationHeight,s=n.dilationWidth,c=n.padInfo.front,l=n.padInfo.left,h=n.padInfo.top,f=ir(n.outShape,t.dtype),p=this.readSync(t.dataId),d=this.readSync(e.dataId),v=f.values,m=0;m<n.batchSize;++m)for(var g=m*t.strides[0],y=m*f.strides[0],x=0;x<n.outDepth;++x)for(var b=y+x*f.strides[1],w=x*n.strideDepth-c,C=0;C<r;C++){var E=w+C*i;if(!(E<0||E>=n.inDepth))for(var R=C*e.strides[0],I=g+E*t.strides[1],k=0;k<n.outHeight;++k)for(var S=b+k*f.strides[2],A=k*n.strideHeight-h,D=0;D<o;D++){var T=A+D*u;if(!(T<0||T>=n.inHeight))for(var N=R+D*e.strides[1],F=I+T*t.strides[2],_=0;_<n.outWidth;++_)for(var O=S+_*n.outChannels,M=_*n.strideWidth-l,B=0;B<a;B++){var P=M+B*s;if(!(P<0||P>=n.inWidth))for(var L=N+B*e.strides[2],W=F+P*n.inChannels,U=L,V=0;V<n.inChannels;++V){for(var z=p[W+V],G=0;G<n.outChannels;++G)v[O+G]+=z*d[U+G];U+=n.outChannels;}}}}return f.toTensor()},o.prototype.conv2dDerInput=function(t,e,n){Ih([t,e],"conv2dDerInput");for(var r=ir(n.inShape,"float32"),o=r.values,a=this.readSync(t.dataId),i=this.readSync(e.dataId),u=e.strides,s=u[0],c=u[1],l=u[2],h=n.batchSize,f=n.filterHeight,p=n.filterWidth,d=n.inChannels,v=n.inHeight,m=n.inWidth,g=n.outChannels,y=n.outHeight,x=n.outWidth,b=n.strideHeight,w=n.strideWidth,C=n.dataFormat,E=f-1-n.padInfo.top,R=p-1-n.padInfo.left,I="channelsLast"===C,k=r.strides[0],S=I?r.strides[1]:r.strides[2],A=I?r.strides[2]:1,D=I?1:r.strides[1],T=t.strides[0],N=I?t.strides[1]:t.strides[2],F=I?t.strides[2]:1,_=I?1:t.strides[1],O=0;O<h;++O)for(var M=0;M<d;++M)for(var B=0;B<v;++B)for(var P=B-E,L=Math.max(0,Math.ceil(P/b)),W=Math.min(y,(f+P)/b),U=0;U<m;++U){for(var V=U-R,z=Math.max(0,Math.ceil(V/w)),G=Math.min(x,(p+V)/w),H=0,q=L;q<W;++q)for(var K=q*b-P,j=z;j<G;++j)for(var X=T*O+N*q+F*j,$=s*(f-1-K)+c*(p-1-(j*w-V))+l*M,Y=0;Y<g;++Y){H+=a[X+_*Y]*i[$+Y];}o[k*O+S*B+A*U+D*M]=H;}return r.toTensor()},o.prototype.conv3dDerInput=function(t,e,n){for(var r=ir(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],u=a[1],s=a[2],c=a[3],l=this.readSync(t.dataId),h=t.strides,f=h[0],p=h[1],d=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=n.batchSize,E=n.filterDepth,R=n.filterHeight,I=n.filterWidth,k=n.inChannels,S=n.inDepth,A=n.inHeight,D=n.inWidth,T=n.outChannels,N=n.outDepth,F=n.outHeight,_=n.outWidth,O=n.strideDepth,M=n.strideHeight,B=n.strideWidth,P=E-1-n.padInfo.front,L=R-1-n.padInfo.top,W=I-1-n.padInfo.left,U=0;U<C;++U)for(var V=0;V<k;++V)for(var z=0;z<S;++z)for(var G=z-P,H=Math.max(0,Math.ceil(G/O)),q=Math.min(N,(E+G)/O),K=0;K<A;++K)for(var j=K-L,X=Math.max(0,Math.ceil(j/M)),$=Math.min(F,(R+j)/M),Y=0;Y<D;++Y){for(var Q=Y-W,J=Math.max(0,Math.ceil(Q/B)),Z=Math.min(_,(I+Q)/B),tt=0,et=H;et<q;++et)for(var nt=et*O-G,rt=X;rt<$;++rt)for(var ot=rt*M-j,at=J;at<Z;++at)for(var it=f*U+p*et+d*rt+v*at,ut=y*(E-1-nt)+x*(R-1-ot)+b*(I-1-(at*B-Q))+w*V,st=0;st<T;++st){tt+=l[it+st]*m[ut+st];}o[i*U+u*z+s*K+c*Y+V]=tt;}return r.toTensor()},o.prototype.conv2dDerFilter=function(t,e,n){Ih([t,e],"conv2dDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,u="channelsLast"===n.dataFormat,s=ir(n.filterShape,"float32"),c=n.padInfo.left,l=n.padInfo.top,h=this.bufferSync(t),f=this.bufferSync(e),p=0;p<a;++p)for(var d=Math.max(0,Math.ceil((l-p)/r)),v=Math.min(n.outHeight,(n.inHeight+l-p)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((c-m)/o)),y=Math.min(n.outWidth,(n.inWidth+c-m)/o),x=0;x<n.inChannels;++x)for(var b=0;b<n.outChannels;++b){for(var w=0,C=0;C<n.batchSize;++C)for(var E=d;E<v;++E)for(var R=p+E*r-l,I=g;I<y;++I){var k=m+I*o-c;w+=u?h.get(C,R,k,x)*f.get(C,E,I,b):h.get(C,x,R,k)*f.get(C,b,E,I);}s.set(w,p,m,x,b);}return s.toTensor()},o.prototype.conv3dDerFilter=function(t,e,n){for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,u=n.filterHeight,s=n.filterWidth,c=ir(n.filterShape,"float32"),l=c.values,h=c.strides,f=h[0],p=h[1],d=h[2],v=h[3],m=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=g[3],C=this.readSync(t.dataId),E=t.strides,R=E[0],I=E[1],k=E[2],S=E[3],A=n.padInfo.front,D=n.padInfo.left,T=n.padInfo.top,N=0;N<i;++N)for(var F=Math.max(0,Math.ceil((A-N)/r)),_=Math.min(n.outDepth,(n.inDepth+A-N)/r),O=N*f,M=0;M<u;++M)for(var B=Math.max(0,Math.ceil((T-M)/o)),P=Math.min(n.outHeight,(n.inHeight+T-M)/o),L=M*p+O,W=0;W<s;++W)for(var U=Math.max(0,Math.ceil((D-W)/a)),V=Math.min(n.outWidth,(n.inWidth+D-W)/a),z=W*d+L,G=0;G<n.inChannels;++G)for(var H=G*v+z,q=0;q<n.outChannels;++q){for(var K=0,j=0;j<n.batchSize;++j)for(var X=j*R,$=j*y,Y=F;Y<_;++Y)for(var Q=(N+Y*r-A)*I+X,J=Y*x+$,Z=B;Z<P;++Z)for(var tt=(M+Z*o-T)*k+Q,et=Z*b+J,nt=U;nt<V;++nt){var rt=nt*w+et;K+=C[(W+nt*a-D)*S+tt+G]*m[rt+q];}l[H+q]=K;}return c.toTensor()},o.prototype.fusedDepthwiseConv2D=function(t){var e=t.input,n=t.filter,r=t.convInfo,o=t.bias,a=t.activation,i=t.preluActivationWeights,u=this.depthwiseConv2D(e,n,r);return o&&(u=this.add(u,o)),a&&(u=kh(this,u,a,i)),u},o.prototype.depthwiseConv2D=function(t,e,n){Ih([t,e],"depthwiseConv2D");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,u=n.padInfo.left,s=n.padInfo.top,c=n.outChannels/n.inChannels,l=ir(n.outShape,t.dtype),h=this.readSync(t.dataId),f=this.readSync(e.dataId),p=l.values,d=0;d<n.batchSize;++d)for(var v=d*t.strides[0],m=d*l.strides[0],g=0;g<n.outHeight;++g)for(var y=m+g*l.strides[1],x=g*n.strideHeight-u,b=0;b<r;++b){var w=x+b*a;if(!(w<0||w>=n.inHeight))for(var C=b*e.strides[0],E=v+w*t.strides[1],R=0;R<n.outWidth;++R)for(var I=y+R*l.strides[2],k=R*n.strideWidth-s,S=0;S<o;++S){var A=k+S*i;if(!(A<0||A>=n.inWidth))for(var D=C+S*e.strides[1],T=E+A*n.inChannels,N=I,F=D,_=0;_<n.inChannels;++_){for(var O=h[T+_],M=0;M<c;++M)p[N+M]+=O*f[F+M];N+=c,F+=c;}}}return l.toTensor()},o.prototype.depthwiseConv2DDerInput=function(t,e,n){Ih([t,e],"depthwiseConv2DDerInput");for(var r=ir(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],u=a[1],s=a[2],c=this.readSync(t.dataId),l=t.strides,h=l[0],f=l[1],p=l[2],d=this.readSync(e.dataId),v=e.strides,m=v[0],g=v[1],y=v[2],x=n.batchSize,b=n.filterHeight,w=n.filterWidth,C=n.inChannels,E=n.inHeight,R=n.inWidth,I=n.outChannels,k=n.outHeight,S=n.outWidth,A=n.strideHeight,D=n.strideWidth,T=b-1-n.padInfo.top,N=w-1-n.padInfo.left,F=I/C,_=0;_<x;++_)for(var O=0;O<C;++O)for(var M=0;M<E;++M)for(var B=M-T,P=Math.max(0,Math.ceil(B/A)),L=Math.min(k,(b+B)/A),W=0;W<R;++W){for(var U=W-N,V=Math.max(0,Math.ceil(U/D)),z=Math.min(S,(w+U)/D),G=0,H=P;H<L;++H)for(var q=H*A-B,K=V;K<z;++K)for(var j=h*_+f*H+p*K,X=m*(b-1-q)+g*(w-1-(K*D-U))+y*O,$=0;$<F;++$){G+=c[j+(O*F+$)]*d[X+$];}o[i*_+u*M+s*W+O]=G;}return r.toTensor()},o.prototype.depthwiseConv2DDerFilter=function(t,e,n){Ih([t,e],"depthwiseConv2DDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,u=ir(n.filterShape,"float32"),s=n.padInfo.left,c=n.padInfo.top,l=n.outChannels/n.inChannels,h=this.bufferSync(t),f=this.bufferSync(e),p=0;p<a;++p)for(var d=Math.max(0,Math.ceil((c-p)/r)),v=Math.min(n.outHeight,(n.inHeight+c-p)/r),m=0;m<i;++m)for(var g=Math.max(0,Math.ceil((s-m)/o)),y=Math.min(n.outWidth,(n.inWidth+s-m)/o),x=0;x<n.outChannels;++x){for(var b=Math.trunc(x/l),w=x%l,C=0,E=0;E<n.batchSize;++E)for(var R=d;R<v;++R)for(var I=p+R*r-c,k=g;k<y;++k){var S=m+k*o-s;C+=h.get(E,I,S,b)*f.get(E,R,k,x);}u.set(C,p,m,b,w);}return u.toTensor()},o.prototype.tile=function(t,e){return Ih(t,"tile"),Lo(this.bufferSync(t),e)},o.prototype.pad=function(t,e,n){Ih(t,"pad");var r=e.map(function(e,n){return e[0]+t.shape[n]+e[1]}),o=e.map(function(t){return t[0]}),a=this.bufferSync(t),i=ir(r,t.dtype);0!==n&&i.values.fill(n);for(var u=0;u<t.size;u++){var s=a.indexToLoc(u),c=s.map(function(t,e){return t+o[e]});i.set.apply(i,[a.get.apply(a,s)].concat(c));}return i.toTensor()},o.prototype.transpose=function(t,e){Ih(t,"transpose");for(var n=new Array(t.rank),r=0;r<n.length;r++)n[r]=t.shape[e[r]];var o=this.readSync(t.dataId),a=ir(n,t.dtype),i=this.bufferSync(t);for(r=0;r<t.size;++r){for(var u=i.indexToLoc(r),s=new Array(u.length),c=0;c<s.length;c++)s[c]=u[e[c]];var l=a.locToIndex(s);a.values[l]=o[r];}return a.toTensor()},o.prototype.gather=function(t,e,n){Ih([t,e],"gather");var r=t.shape.slice(),o=this.readSync(e.dataId);r[n]=o.length;for(var a=ir(r,t.dtype),i=this.bufferSync(t),u=0;u<a.size;++u){var s=a.indexToLoc(u),c=s.slice();c[n]=o[s[n]];var l=i.locToIndex(c);a.values[u]=i.values[l];}return a.toTensor()},o.prototype.batchToSpaceND=function(t,e,n){Ih([t],"batchToSpaceND");var r=e.reduce(function(t,e){return t*e}),o=Mr(t.shape,e,r),a=Br(o.length,e.length),i=Pr(t.shape,e,r),u=Lr(n,e.length),s=Wr(i,n,e.length);return t.reshape(o).transpose(a).reshape(i).slice(u,s)},o.prototype.spaceToBatchND=function(t,e,n){Ih([t],"spaceToBatchND");var r=e.reduce(function(t,e){return t*e}),o=[[0,0]];o.push.apply(o,n);for(var a=1+e.length;a<t.shape.length;++a)o.push([0,0]);var i=t.pad(o),u=Mr(i.shape,e,r,!1),s=Br(u.length,e.length,!1),c=Pr(i.shape,e,r,!1);return i.reshape(u).transpose(s).reshape(c)},o.prototype.pool=function(t,e,n){Ih(t,"pool");for(var r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,u=e.effectiveFilterHeight,s=e.effectiveFilterWidth,c=e.padInfo.top,l=e.padInfo.left,h="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,f=this.readSync(t.dataId),p=ir(e.outShape,t.dtype),d=p.values,v=e.outShape[1]*e.outShape[2]*e.outShape[3],m=e.outShape[2]*e.outShape[3],g=e.outShape[3],y=0;y<e.batchSize;++y)for(var x=y*v,b=y*t.strides[0],w=0;w<e.inChannels;++w)for(var C=0;C<e.outHeight;++C)for(var E=C*r-c,R=Math.max(0,E),I=Math.min(e.inHeight,u+E),k=x+C*m,S=0;S<e.outWidth;++S){for(var A=S*o-l,D=Math.max(0,A),T=Math.min(e.inWidth,s+A),N=h,F=0,_=0,O=R;O<I;O+=a){for(var M=b+O*t.strides[1],B=D;B<T;B+=i){var P=f[M+B*t.strides[2]+w];"max"===n&&P>N?N=P:"avg"===n&&(F+=P,_++);}if(isNaN(N))break}d[k+S*g+w]="avg"===n?F/_:N;}return p.toTensor()},o.prototype.maxPool=function(t,e){return this.pool(t,e,"max")},o.prototype.maxPoolPositions=function(t,e){for(var n=ir(e.outShape,"int32"),r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,u=e.effectiveFilterHeight,s=e.effectiveFilterWidth,c=e.padInfo.top,l=e.padInfo.left,h=this.bufferSync(t),f=0;f<e.batchSize;++f)for(var p=0;p<e.inChannels;++p)for(var d=0;d<e.outHeight;++d){for(var v=d*r-c,m=v;m<0;)m+=a;for(var g=Math.min(e.inHeight,u+v),y=0;y<e.outWidth;++y){for(var x=y*o-l,b=x;b<0;)b+=i;for(var w=Math.min(e.inWidth,s+x),C=Number.NEGATIVE_INFINITY,E=-1,R=m;R<g;R+=a)for(var I=R-v,k=b;k<w;k+=i){var S=k-x,A=h.get(f,R,k,p);A>C&&(C=A,E=I*s+S);}n.set(E,f,d,y,p);}}return n.toTensor()},o.prototype.maxPoolBackprop=function(t,e,n,r){Ih([e,n],"maxPoolBackprop");for(var o=this.maxPoolPositions(e,r),a=r.strideHeight,i=r.strideWidth,u=r.dilationHeight,s=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,h=l-1-r.padInfo.left,f=c-1-r.padInfo.top,p=ir(e.shape,"float32"),d=this.bufferSync(o),v=this.bufferSync(t),m=0;m<r.batchSize;++m)for(var g=0;g<r.inChannels;++g)for(var y=0;y<r.inHeight;++y)for(var x=0;x<r.inWidth;++x){for(var b=y-f,w=x-h,C=0,E=0;E<c;E+=u){var R=(b+E)/a;if(!(R<0||R>=r.outHeight||Math.floor(R)!==R))for(var I=0;I<l;I+=s){var k=(w+I)/i;if(!(k<0||k>=r.outWidth||Math.floor(k)!==k)){var S=c*l-1-d.get(m,R,k,g)===E*l+I?1:0;if(0!==S)C+=v.get(m,R,k,g)*S;}}}p.set(C,m,y,x,g);}return p.toTensor()},o.prototype.avgPoolBackprop=function(t,e,n){Ih([t,e],"avgPoolBackprop");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,u=n.dilationHeight,s=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=l-1-n.padInfo.left,f=c-1-n.padInfo.top,p=ir(e.shape,"float32"),d=1/(a*i),v=this.bufferSync(t),m=0;m<n.batchSize;++m)for(var g=0;g<n.inChannels;++g)for(var y=0;y<n.inHeight;++y)for(var x=0;x<n.inWidth;++x){for(var b=y-f,w=x-h,C=0,E=0;E<c;E+=u){var R=(b+E)/r;if(!(R<0||R>=n.outHeight||Math.floor(R)!==R))for(var I=0;I<l;I+=s){var k=(w+I)/o;if(!(k<0||k>=n.outWidth||Math.floor(k)!==k))C+=v.get(m,R,k,g);}}p.set(C*d,m,y,x,g);}return p.toTensor()},o.prototype.pool3d=function(t,e,n){Ih(t,"pool3d");for(var r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,s=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.front,p=e.padInfo.top,d=e.padInfo.left,v="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=this.readSync(t.dataId),g=ir(e.outShape,t.dtype),y=g.values,x=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],b=e.outShape[2]*e.outShape[3]*e.outShape[4],w=e.outShape[3]*e.outShape[4],C=e.outShape[4],E=0;E<e.batchSize;++E)for(var R=E*x,I=E*t.strides[0],k=0;k<e.inChannels;++k)for(var S=0;S<e.outDepth;++S){for(var A=S*r-f,D=A;D<0;)D+=i;for(var T=Math.min(e.inDepth,c+A),N=R+S*b,F=0;F<e.outHeight;++F){for(var _=F*o-p,O=_;O<0;)O+=u;for(var M=Math.min(e.inHeight,l+_),B=N+F*w,P=0;P<e.outWidth;++P){for(var L=P*a-d,W=L;W<0;)W+=s;for(var U=Math.min(e.inWidth,h+L),V=B+P*C,z=v,G=0,H=0,q=D;q<T;q+=i){for(var K=I+q*t.strides[1],j=O;j<M;j+=u){for(var X=K+j*t.strides[2],$=W;$<U;$+=s){var Y=m[X+$*t.strides[3]+k];if("max"===n&&Y>z?z=Y:"avg"===n&&(G+=Y,H++),isNaN(z))break}if(isNaN(z))break}if(isNaN(z))break}y[V+k]="avg"===n?G/H:z;}}}return g.toTensor()},o.prototype.avgPool3d=function(t,e){return Ih(t,"avgPool3d"),this.pool3d(t,e,"avg").toFloat()},o.prototype.avgPool3dBackprop=function(t,e,n){Ih([t,e],"avgPool3dBackprop");for(var r=n.strideDepth,o=n.strideHeight,a=n.strideWidth,i=n.filterDepth,u=n.filterHeight,s=n.filterWidth,c=n.dilationDepth,l=n.dilationHeight,h=n.dilationWidth,f=n.effectiveFilterDepth,p=n.effectiveFilterHeight,d=n.effectiveFilterWidth,v=f-1-n.padInfo.front,m=d-1-n.padInfo.left,g=p-1-n.padInfo.top,y=ir(e.shape,"float32"),x=1/(i*u*s),b=this.bufferSync(t),w=0;w<n.batchSize;++w)for(var C=0;C<n.inChannels;++C)for(var E=0;E<n.inDepth;++E)for(var R=0;R<n.inHeight;++R)for(var I=0;I<n.inWidth;++I){for(var k=E-v,S=R-g,A=I-m,D=0,T=0;T<f;T+=c){var N=(k+T)/r;if(!(N<0||N>=n.outDepth||Math.floor(N)!==N))for(var F=0;F<p;F+=l){var _=(S+F)/o;if(!(_<0||_>=n.outHeight||Math.floor(_)!==_))for(var O=0;O<d;O+=h){var M=(A+O)/a;if(!(M<0||M>=n.outWidth||Math.floor(M)!==M))D+=b.get(w,N,_,M,C);}}}y.set(D*x,w,E,R,I,C);}return y.toTensor()},o.prototype.maxPool3d=function(t,e){return Ih(t,"maxPool3d"),this.pool3d(t,e,"max").toFloat()},o.prototype.maxPool3dPositions=function(t,e){for(var n=ir(e.outShape,"int32"),r=e.strideDepth,o=e.strideHeight,a=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,s=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.front,p=e.padInfo.top,d=e.padInfo.left,v=this.bufferSync(t),m=0;m<e.batchSize;++m)for(var g=0;g<e.inChannels;++g)for(var y=0;y<e.outDepth;++y){for(var x=y*r-f,b=x;b<0;)b+=i;for(var w=Math.min(e.inDepth,c+x),C=0;C<e.outHeight;++C){for(var E=C*o-p,R=E;R<0;)R+=u;for(var I=Math.min(e.inHeight,l+E),k=0;k<e.outWidth;++k){for(var S=k*a-d,A=S;A<0;)A+=s;for(var D=Math.min(e.inWidth,h+S),T=Number.NEGATIVE_INFINITY,N=-1,F=b;F<w;F+=i)for(var _=F-x,O=R;O<I;O+=u)for(var M=O-E,B=A;B<D;B+=s){var P=B-S,L=v.get(m,F,O,B,g);L>=T&&(T=L,N=_*l*h+M*l+P);}n.set(N,m,y,C,k,g);}}}return n.toTensor()},o.prototype.maxPool3dBackprop=function(t,e,n,r){Ih([e,n],"maxPool3dBackprop");for(var o=this.maxPool3dPositions(e,r),a=r.strideDepth,i=r.strideHeight,u=r.strideWidth,s=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,h=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,d=h-1-r.padInfo.front,v=p-1-r.padInfo.left,m=f-1-r.padInfo.top,g=ir(e.shape,"float32"),y=this.bufferSync(o),x=this.bufferSync(t),b=0;b<r.batchSize;++b)for(var w=0;w<r.inChannels;++w)for(var C=0;C<r.inDepth;++C)for(var E=0;E<r.inHeight;++E)for(var R=0;R<r.inWidth;++R){for(var I=C-d,k=E-m,S=R-v,A=0,D=0;D<h;D+=s){var T=(I+D)/a;if(!(T<0||T>=r.outDepth||Math.floor(T)!==T))for(var N=0;N<f;N+=c){var F=(k+N)/i;if(!(F<0||F>=r.outHeight||Math.floor(F)!==F))for(var _=0;_<p;_+=l){var O=(S+_)/u;if(!(O<0||O>=r.outWidth||Math.floor(O)!==O)){var M=h*f*p-1-y.get(b,T,F,O,w)===D*f*p+N*p+_?1:0;if(0!==M)A+=x.get(b,T,F,O,w)*M;}}}}g.set(A,b,C,E,R,w);}return g.toTensor()},o.prototype.cast=function(t,e){return So(t,e,this)},o.prototype.reshape=function(t,e){return Ao(t,e)},o.prototype.avgPool=function(t,e){return Ih(t,"avgPool"),this.pool(t,e,"avg").toFloat()},o.prototype.resizeBilinear=function(t,e,n,r){Ih(t,"resizeBilinear");for(var o=t.shape,a=o[0],i=o[1],u=o[2],s=o[3],c=this.readSync(t.dataId),l=new Float32Array(w([a,e,n,s])),h=[r&&e>1?i-1:i,r&&n>1?u-1:u],f=[r&&e>1?e-1:e,r&&n>1?n-1:n],p=0,d=h[0]/f[0],v=h[1]/f[1],m=0;m<a;m++)for(var g=0;g<e;g++)for(var y=d*g,x=Math.floor(y),b=y-x,C=Math.min(i-1,Math.ceil(y)),E=m*t.strides[0]+x*t.strides[1],R=m*t.strides[0]+C*t.strides[1],I=0;I<n;I++)for(var k=v*I,S=Math.floor(k),A=k-S,D=Math.min(u-1,Math.ceil(k)),T=E+S*t.strides[2],N=R+S*t.strides[2],F=E+D*t.strides[2],_=R+D*t.strides[2],O=0;O<s;O++){var M=c[T+O],B=c[N+O],P=M+(c[F+O]-M)*A,L=P+(B+(c[_+O]-B)*A-P)*b;l[p++]=L;}return In(l,[a,e,n,s])},o.prototype.resizeBilinearBackprop=function(t,e,n){Ih([t,e],"resizeBilinearBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],u=r[3],s=t.shape,c=s[1],l=s[2],h=new Float32Array(o*a*i*u),f=[n&&c>1?a-1:a,n&&l>1?i-1:i],p=[n&&c>1?c-1:c,n&&l>1?l-1:l],d=f[0]/p[0],v=f[1]/p[1],m=this.readSync(t.dataId),g=0,y=0;y<o;y++)for(var x=y*e.strides[0],b=0;b<c;b++)for(var w=b*d,C=Math.floor(w),E=Math.min(Math.ceil(w),a-1),R=x+C*e.strides[1],I=x+E*e.strides[1],k=w-C,S=1-k,A=0;A<l;A++)for(var D=A*v,T=Math.floor(D),N=Math.min(Math.ceil(D),i-1),F=D-T,_=1-F,O=R+T*e.strides[2],M=R+N*e.strides[2],B=I+T*e.strides[2],P=I+N*e.strides[2],L=S*_,W=S*F,U=k*_,V=k*F,z=0;z<u;z++){var G=m[g++];h[O+z]+=G*L,h[M+z]+=G*W,h[B+z]+=G*U,h[P+z]+=G*V;}return Nn(h,[o,i,a,u],e.dtype)},o.prototype.resizeNearestNeighbor=function(t,e,n,r){Ih(t,"resizeNearestNeighbor");for(var o=t.shape,a=o[0],i=o[1],u=o[2],s=o[3],c=this.readSync(t.dataId),l=new Float32Array(a*e*n*s),h=[r&&e>1?i-1:i,r&&n>1?u-1:u],f=[r&&e>1?e-1:e,r&&n>1?n-1:n],p=h[0]/f[0],d=h[1]/f[1],v=0,m=0;m<a;m++)for(var g=m*t.strides[0],y=0;y<e;y++)for(var x=p*y,b=g+Math.min(i-1,r?Math.round(x):Math.floor(x))*t.strides[1],w=0;w<n;w++)for(var C=d*w,E=b+Math.min(u-1,r?Math.round(C):Math.floor(C))*t.strides[2],R=0;R<s;R++){var I=c[E+R];l[v++]=I;}return In(l,[a,e,n,s],t.dtype)},o.prototype.resizeNearestNeighborBackprop=function(t,e,n){Ih([t,e],"resizeNearestNeighborBackprop");for(var r=e.shape,o=r[0],a=r[1],i=r[2],u=r[3],s=t.shape,c=s[1],l=s[2],h=new Float32Array(o*a*i*u),f=this.readSync(t.dataId),p=[n&&c>1?a-1:a,n&&l>1?i-1:i],d=[n&&c>1?c-1:c,n&&l>1?l-1:l],v=p[0]/d[0],m=p[1]/d[1],g=1/v,y=1/m,x=2*Math.ceil(g)+2,b=2*Math.ceil(y)+2,w=0;w<o;w++)for(var C=w*e.strides[0],E=0;E<a;E++)for(var R=C+E*e.strides[1],I=Math.floor(E*g),k=Math.floor(I-x/2),S=0;S<i;S++)for(var A=R+S*e.strides[2],D=Math.floor(S*y),T=Math.floor(D-b/2),N=0;N<u;N++){for(var F=0,_=0;_<x;_++){var O=_+k;if(!(O<0||O>=c)){var M=C+O*t.strides[1],B=O*v;if(E===Math.min(a-1,n?Math.round(B):Math.floor(B)))for(var P=0;P<b;P++){var L=P+T;if(!(L<0||L>=l)){var W=M+L*t.strides[2],U=L*m;S===Math.min(i-1,n?Math.round(U):Math.floor(U))&&(F+=f[W+N]);}}}}h[A+N]=F;}return Nn(h,e.shape,e.dtype)},o.prototype.batchNormalization=function(t,e,n,r,o,a){Ih([t,e,n,o,a],"batchNorm");for(var i=this.readSync(t.dataId),u=this.readSync(e.dataId),s=this.readSync(n.dataId),c=o?this.readSync(o.dataId):new Float32Array([1]),l=a?this.readSync(a.dataId):new Float32Array([0]),h=new Float32Array(i.length),f=l.length,p=c.length,d=s.length,v=u.length,m=0,g=0,y=0,x=0,b=0;b<i.length;++b)h[b]=l[m++]+(i[b]-u[g++])*c[y++]/Math.sqrt(s[x++]+r),m>=f&&(m=0),g>=v&&(g=0),y>=p&&(y=0),x>=d&&(x=0);return Nn(h,t.shape)},o.prototype.localResponseNormalization4D=function(t,e,n,r,o){Ih(t,"localResponseNormalization4D");var a=t.shape[3],i=a-1,u=this.readSync(t.dataId),s=t.size,c=new Float32Array(s);function l(t){for(var n=t%a,r=t-n+Math.max(0,n-e),o=t-n+Math.min(n+e,i),s=0;r<=o;r++){var c=u[r];s+=c*c;}return s}for(var h=0;h<s;h++){var f=l(h),p=u[h]*Math.pow(n+r*f,-o);c[h]=p;}return Nn(c,t.shape)},o.prototype.LRNGrad=function(t,e,n,r,o,a,i){Ih(t,"LRNGrad");for(var u=t.shape[3],s=this.readSync(t.dataId),c=this.readSync(e.dataId),l=this.readSync(n.dataId),h=new Float32Array(t.size),f=t.size,p=0;p<f;p++){for(var d=p%u,v=p-d+Math.max(0,d-r),m=p-d+Math.min(u,d+r+1),g=0,y=v;y<m;y++)g+=Math.pow(c[y],2);g=a*g+o;for(y=v;y<m;y++){var x=-2*a*i*c[y]*l[p]/g;p===y&&(x+=Math.pow(g,-i)),x*=s[p],h[y]+=x;}}return Nn(h,t.shape)},o.prototype.multinomial=function(t,e,n,r){Ih(t,"multinomial");for(var o=e?t:io(t),a=o.shape[0],i=o.shape[1],u=Bn([a,n],"int32"),s=this.readSync(u.dataId),c=this.readSync(o.dataId),l=0;l<a;++l){var h=l*i,f=new Float32Array(i-1);f[0]=c[h];for(var p=1;p<f.length;++p)f[p]=f[p-1]+c[h+p];for(var d=nr(r.toString()),v=l*n,m=0;m<n;++m){var g=d();s[v+m]=f.length;for(var y=0;y<f.length;y++)if(g<f[y]){s[v+m]=y;break}}}return u},o.prototype.oneHot=function(t,e,n,r){Ih(t,"oneHot");var o=new Float32Array(t.size*e);o.fill(r);for(var a=this.readSync(t.dataId),i=0;i<t.size;++i)a[i]>=0&&a[i]<e&&(o[i*e+a[i]]=n);return Dn(o,[t.size,e],"int32")},o.prototype.nonMaxSuppression=function(t,e,n,r,o){return Ih(t,"nonMaxSuppression"),Mo(this.readSync(t.dataId),this.readSync(e.dataId),n,r,o)},o.prototype.fft=function(t){return this.fftBatch(t,!1)},o.prototype.ifft=function(t){return this.fftBatch(t,!0)},o.prototype.fftBatch=function(t,e){for(var n=t.shape[0],r=t.shape[1],o=ir(t.shape,"float32"),a=ir(t.shape,"float32"),i=En(t).as2D(n,r),u=Rn(t).as2D(n,r),s=0;s<n;s++)for(var c=i.slice([s,0],[1,r]),l=u.slice([s,0],[1,r]),h=Cn(c,l),f=this.readSync(this.fftImpl(h,e).dataId),p=0;p<r;p++){var d=Fo(f,p);o.values[s*r+p]=d.real,a.values[s*r+p]=d.imag;}return Cn(o.toTensor(),a.toTensor()).as2D(n,r)},o.prototype.fftImpl=function(t,e){var n=t.as1D(),r=n.size;if(this.isExponentOf2(r)){var o=this.fftRadix2(n,r,e).as2D(t.shape[0],t.shape[1]);return e&&(o=Cn(En(o).div(Sn(r)),Rn(o).div(Sn(r)))),o}var a=this.readSync(t.dataId),i=function(t){for(var e=new Float32Array(t.length/2),n=new Float32Array(t.length/2),r=0;r<t.length;r+=2)e[r/2]=t[r],n[r/2]=t[r+1];return {real:e,imag:n}}(this.fourierTransformByMatmul(a,r,e));return Cn(i.real,i.imag).as2D(t.shape[0],t.shape[1])},o.prototype.isExponentOf2=function(t){return 0==(t&t-1)},o.prototype.fftRadix2=function(t,e,n){if(1===e)return t;var r=this.readSync(t.dataId),o=e/2,a=function(t){for(var e=Math.ceil(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=0;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return {real:n,imag:r}}(r),i=Cn(a.real,a.imag).as1D(),u=function(t){for(var e=Math.floor(t.length/4),n=new Float32Array(e),r=new Float32Array(e),o=2;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return {real:n,imag:r}}(r),s=Cn(u.real,u.imag).as1D();i=this.fftRadix2(i,o,n),s=this.fftRadix2(s,o,n);var c=function(t,e){for(var n=new Float32Array(t/2),r=new Float32Array(t/2),o=0;o<Math.ceil(t/2);o++){var a=(e?2:-2)*Math.PI*(o/t);n[o]=Math.cos(a),r[o]=Math.sin(a);}return {real:n,imag:r}}(e,n),l=Cn(c.real,c.imag).mul(s),h=i.add(l),f=i.sub(l),p=En(h).concat(En(f)),d=Rn(h).concat(Rn(f));return Cn(p,d).as1D()},o.prototype.fourierTransformByMatmul=function(t,e,n){for(var r=new Float32Array(2*e),o=0;o<e;o++){for(var a=0,i=0,u=0;u<e;u++){var s=Oo(o*u,e,n),c=Fo(t,u);a+=c.real*s.real-c.imag*s.imag,i+=c.real*s.imag+c.imag*s.real;}n&&(a/=e,i/=e),_o(r,a,i,o);}return r},o.prototype.depthToSpace=function(t,e,n){g("NHWC"===n,function(){return "Only NHWC dataFormat supported on CPU for depthToSpace. Got "+n}),g(e>1,function(){return "blockSize should be > 1 for depthToSpace, but was: "+e});for(var r=t.shape[0],o=t.shape[1],a=t.shape[2],i=t.shape[3],u=o*e,s=a*e,c=i/(e*e),l=this.readSync(t.dataId),h=new Float32Array(r*u*s*c),f=0,p=0;p<r;++p)for(var d=0;d<u;++d)for(var v=Math.floor(d/e),m=d%e,y=0;y<s;++y)for(var x=Math.floor(y/e),b=(m*e+y%e)*c,w=0;w<c;++w){var C=w+b+i*(x+a*(v+o*p));h[f++]=l[C];}return Nn(h,[r,u,s,c])},o.prototype.broadcastedBinaryOp=function(t,e,n,r){var o=po(t.shape,e.shape),a=ir(o,n),i=this.readSync(t.dataId),u=this.readSync(e.dataId),s=ho(t.shape,o),c=ho(e.shape,o),l=a.values;if(s.length+c.length===0)for(var h=0;h<l.length;++h)l[h]=r(i[h%i.length],u[h%u.length]);else{var f=this.bufferSync(t),p=this.bufferSync(e),d=function(n){var o=a.indexToLoc(n),h=o.slice(-t.rank);s.forEach(function(t){return h[t]=0});var d=f.locToIndex(h),v=o.slice(-e.rank);c.forEach(function(t){return v[t]=0});var m=p.locToIndex(v);l[n]=r(i[d],u[m]);};for(h=0;h<l.length;++h)d(h);}return a.toTensor()},o.prototype.broadcastedBinaryComplexOp=function(t,e,n){var r=po(t.shape,e.shape),o=ir(r,"float32"),a=ir(r,"float32"),i=this.readSync(t.dataId),u=this.readSync(e.dataId),s=ho(t.shape,r),c=ho(e.shape,r),l=o.values,h=a.values;if(s.length+c.length===0)for(var f=0;f<l.length;f++){var p=f%i.length,d=f%u.length,v=n(i[2*p],i[2*p+1],u[2*d],u[2*d+1]);l[f]=v.real,h[f]=v.imag;}else{var m=this.bufferSync(this.data.get(t.dataId).complexTensors.real),g=this.bufferSync(this.data.get(e.dataId).complexTensors.real),y=function(r){var a=o.indexToLoc(r),f=a.slice(-t.rank);s.forEach(function(t){return f[t]=0});var p=m.locToIndex(f),d=a.slice(-e.rank);c.forEach(function(t){return d[t]=0});var v=g.locToIndex(d),y=n(i[2*p],i[2*p+1],u[2*v],u[2*v+1]);l[r]=y.real,h[r]=y.imag;};for(f=0;f<l.length;f++)y(f);}return this.complex(o.toTensor(),a.toTensor())},o.prototype.split=function(t,e,n){return Po(t,e,n)},o.prototype.dispose=function(){},o.prototype.floatPrecision=function(){return 32},o.prototype.epsilon=function(){return 1e-7},o.prototype.cropAndResize=function(t,e,n,r,o,a){for(var i=t.shape,u=i[0],s=i[1],c=i[2],l=i[3],h=e.shape[0],f=r[0],p=r[1],d=ir([h,f,p,l],"float32"),v=this.readSync(e.dataId),m=this.readSync(n.dataId),g=this.readSync(t.dataId),y=t.strides,x=d.strides,b=0;b<h;b++){var w=4*b,C=v[w],E=v[w+1],R=v[w+2],I=v[w+3],k=m[b];if(!(k>=u))for(var S=f>1?(R-C)*(s-1)/(f-1):0,A=p>1?(I-E)*(c-1)/(p-1):0,D=0;D<f;D++){var T=f>1?C*(s-1)+D*S:.5*(C+R)*(s-1);if(T<0||T>s-1)for(var N=0;N<p;N++)for(var F=0;F<l;F++){var _=F+N*x[2]+D*x[1]+b*x[0];d.values[_]=a;}else if("bilinear"===o){var O=Math.floor(T),M=Math.ceil(T),B=T-O;for(N=0;N<p;N++){if((q=p>1?E*(c-1)+N*A:.5*(E+I)*(c-1))<0||q>c-1)for(F=0;F<l;F++){_=F+N*x[2]+D*x[1]+b*x[0];d.values[_]=a;}else{var P=Math.floor(q),L=Math.ceil(q),W=q-P;for(F=0;F<l;F++){var U=g[_=F+P*y[2]+O*y[1]+k*y[0]],V=g[_=F+L*y[2]+O*y[1]+k*y[0]],z=g[_=F+P*y[2]+M*y[1]+k*y[0]],G=U+(V-U)*W,H=z+(g[_=F+L*y[2]+M*y[1]+k*y[0]]-z)*W;_=F+N*x[2]+D*x[1]+b*x[0],d.values[_]=G+(H-G)*B;}}}}else for(N=0;N<p;++N){var q;if((q=p>1?E*(c-1)+N*A:.5*(E+I)*(c-1))<0||q>c-1)for(F=0;F<l;F++){_=F+N*x[2]+D*x[1]+b*x[0];d.values[_]=a;}else{var K=Math.round(q),j=Math.round(T);for(F=0;F<l;F++){var X=F+K*y[2]+j*y[1]+k*y[0],$=F+N*x[2]+D*x[1]+b*x[0];d.values[$]=g[X];}}}}}return d.toTensor()},o.prototype.sparseToDense=function(t,e,n,r){var o=Hr(0,t,n),a=o.sliceRank,i=o.numUpdates,u=o.sliceSize,s=o.strides,c=o.outputSize;return this.scatter(t,e,n,c,u,i,a,s,r,!1)},o.prototype.gatherND=function(t,e){var n=e.shape,r=n[n.length-1],o=Ur(t,e),a=o[0],i=o[1],u=o[2],s=o[3];if(0===i)return In([],a,t.dtype);for(var c=new lt([i,u],t.dtype),l=this.readSync(e.dataId),h=this.readSync(t.dataId),f=0;f<i;f++){for(var p=[],d=0,v=0;v<r;v++){var m=l[f*r+v];d+=m*s[v],p.push(m);}if(d<0||d>=t.size/u)throw new Error("Invalid indices: "+p+" does not index into "+t.shape);for(var g=0;g<u;g++)c.values[f*u+g]=h[d*u+g];}return c.toTensor().reshape(a)},o.prototype.scatterND=function(t,e,n){var r=Hr(0,t,n),o=r.sliceRank,a=r.numUpdates,i=r.sliceSize,u=r.strides,s=r.outputSize,c=Sn(0);return this.scatter(t,e,n,s,i,a,o,u,c,!0)},o.prototype.fill=function(t,e,n){var r=F(n=n||z(e),w(t));return r.fill(e),Nt.makeTensor(r,t,n,this)},o.prototype.onesLike=function(t){if("string"===t.dtype)throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},o.prototype.zerosLike=function(t){var e=F(t.dtype,w(t.shape));return this.makeOutput(e,t.shape,t.dtype)},o.prototype.linspace=function(t,e,n){return Do(t,e,n)},o.prototype.scatter=function(t,e,n,r,o,a,i,u,s,c){var l=[r/o,o],h=this.readSync(t.dataId),f=this.readSync(e.dataId);if(0===r)return In([],n,e.dtype);var p=new lt(l,e.dtype);p.values.fill(this.readSync(s.dataId)[0]);for(var d=0;d<a;d++){for(var v=[],m=0,g=0;g<i;g++){var y=h[d*i+g];v.push(y),m+=y*u[g];}if(m<0||m>=r/o)throw new Error("Invalid indices: "+v+" does not index into "+n);for(var x=0;x<o;x++)c?p.values[m*o+x]+=f[d*o+x]:p.values[m*o+x]=0===e.rank?f[0]:f[d*o+x];}return p.toTensor().reshape(n)},o}(co);Nt.registerBackend("cpu",function(){return new Sh},1),l({kernelName:"Square",backendName:"cpu",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e.x,o=n;Ih(r,"square");for(var a=o.data.get(r.dataId).values,i=new Float32Array(a.length),u=0;u<a.length;++u){var s=a[u];i[u]=s*s;}return {dataId:o.write(i,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}}),l({kernelName:"Square",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=e.x,o=n,a=new iu(r.shape,"return x * x;");return o.runWebGLProgram(a,[r],r.dtype)}});var Ah,Dh=function(){return function(t){this.variableNames=["A"];var e=Ko(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+r+".0, "+n+".0);\n\n        vec4 values = "+e.texture2D+"(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";}}(),Th=function(){return function(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var e=Ko(),n=t[0],r=t[1];this.outputShape=t,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2("+r+".0, "+n+".0);\n            vec4 values = "+e.texture2D+"(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        "+e.output+" = result;\n      }\n    ";}}();l({kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(t){var e=t.inputs,n=t.backend,r=t.attrs,o=e.pixels,i=r.numChannels,u="undefined"!=typeof HTMLVideoElement&&o instanceof HTMLVideoElement,s="undefined"!=typeof HTMLImageElement&&o instanceof HTMLImageElement,c=u?[o.videoWidth,o.videoHeight]:[o.width,o.height],l=c[0],h=c[1],f=[h,l],p=[h,l,i];(s||u)&&(null==Ah&&(Ah=document.createElement("canvas").getContext("2d")),Ah.canvas.width=l,Ah.canvas.height=h,Ah.drawImage(o,0,0,l,h),o=Ah.canvas);var d=n.makeTensorInfo(f,"int32");n.texData.get(d.dataId).usage=Mt.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(d.dataId),o);var v=a().getBool("WEBGL_PACK")?new Th(p):new Dh(p),m=n.runWebGLProgram(v,[d],"int32");return n.disposeData(d.dataId),m}});var Nh=function(){function t(){}return t.prototype.fetch=function(t,e){return fetch(t,e)},t.prototype.now=function(){return performance.now()},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Browser's encoder only supports utf-8, but got "+e);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},t}();a().get("IS_BROWSER")&&a().setPlatform("browser",new Nh);var Fh,_h=function(){return require("node-fetch")},Oh=function(){function t(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder;}return t.prototype.fetch=function(t,e){return null!=a().global.fetch?a().global.fetch(t,e):(null==Fh&&(Fh=_h()),Fh(t,e))},t.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},t.prototype.encode=function(t,e){if("utf-8"!==e&&"utf8"!==e)throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},t.prototype.decode=function(t,e){return 0===t.length?"":new this.util.TextDecoder(e).decode(t)},t}();a().get("IS_NODE")&&a().setPlatform("node",new Oh);var Mh={float32:4,int32:4,uint16:2,uint8:1,bool:1},Bh=4;function Ph(t,e){for(var n={},r=0,o=function(e){var o=e.name,a=e.dtype,i=e.shape,u=w(i),s=void 0;if("quantization"in e){var c=e.quantization;if("uint8"!==c.dtype&&"uint16"!==c.dtype)throw new Error("Weight "+e.name+" has unknown quantization dtype "+c.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var l=Mh[c.dtype],h=t.slice(r,r+u*l),f="uint8"===c.dtype?new Uint8Array(h):new Uint16Array(h);if("float32"===a)s=Float32Array.from(f,function(t){return t*c.scale+c.min});else{if("int32"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);s=Int32Array.from(f,function(t){return Math.round(t*c.scale+c.min)});}r+=u*l;}else if("string"===a){var p=w(e.shape);s=[];for(var d=0;d<p;d++){var v=new Uint32Array(t.slice(r,r+Bh))[0];r+=Bh;var m=new Uint8Array(t.slice(r,r+v));s.push(m),r+=v;}}else{var g=Mh[a];h=t.slice(r,r+u*g);if("float32"===a)s=new Float32Array(h);else if("int32"===a)s=new Int32Array(h);else{if("bool"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);s=new Uint8Array(h);}r+=u*g;}n[o]=In(s,i,a);},a=0,i=e;a<i.length;a++){o(i[a]);}return n}function Lh(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));var e=0,n=[];t.forEach(function(t){if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)});var r=new Uint8Array(e),o=0;return n.forEach(function(t){r.set(new Uint8Array(t.buffer),o),o+=t.byteLength;}),r.buffer}var Wh="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function Uh(t){return Wh?Buffer.byteLength(t):new Blob([t]).size}function Vh(t){var e=0;t.forEach(function(t){e+=t.byteLength;});var n=new Uint8Array(e),r=0;return t.forEach(function(t){n.set(new Uint8Array(t),r),r+=t.byteLength;}),n.buffer}function zh(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);var e=t.split("/");return e[e.length-1]}function Gh(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return {dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:Uh(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:Uh(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}var Hh=function(){function t(){this.saveRouters=[],this.loadRouters=[];}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerSaveRouter=function(e){t.getInstance().saveRouters.push(e);},t.registerLoadRouter=function(e){t.getInstance().loadRouters.push(e);},t.getSaveHandlers=function(e){return t.getHandlers(e,"save")},t.getLoadHandlers=function(e,n){return t.getHandlers(e,"load",n)},t.getHandlers=function(e,n,r){var o=[];return ("load"===n?t.getInstance().loadRouters:t.getInstance().saveRouters).forEach(function(t){var n=t(e,r);null!==n&&o.push(n);}),o},t}(),qh="://",Kh=function(){function t(){this.managers={};}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerManager=function(e,n){g(null!=e,function(){return "scheme must not be undefined or null."}),e.endsWith(qh)&&(e=e.slice(0,e.indexOf(qh))),g(e.length>0,function(){return "scheme must not be an empty string."});var r=t.getInstance();g(null==r.managers[e],function(){return "A model store manager is already registered for scheme '"+e+"'."}),r.managers[e]=n;},t.getManager=function(t){var e=this.getInstance().managers[t];if(null==e)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},t.getSchemes=function(){return Object.keys(this.getInstance().managers)},t}();function jh(t){if(-1===t.indexOf(qh))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Kh.getSchemes().join(","));return {scheme:t.split(qh)[0],path:t.split(qh)[1]}}function Xh(t,e,o){return void 0===o&&(o=!1),n(this,void 0,void 0,function(){var n,a,i,u,s,c,l,h,f;return r(this,function(r){switch(r.label){case 0:return g(t!==e,function(){return "Old path and new path are the same: '"+t+"'"}),g((n=Hh.getLoadHandlers(t)).length>0,function(){return "Copying failed because no load handler is found for source URL "+t+"."}),g(n.length<2,function(){return "Copying failed because more than one ("+n.length+") load handlers for source URL "+t+"."}),a=n[0],g((i=Hh.getSaveHandlers(e)).length>0,function(){return "Copying failed because no save handler is found for destination URL "+e+"."}),g(i.length<2,function(){return "Copying failed because more than one ("+n.length+") save handlers for destination URL "+e+"."}),u=i[0],s=jh(t).scheme,c=jh(t).path,l=s===jh(t).scheme,[4,a.load()];case 1:return h=r.sent(),o&&l?[4,Kh.getManager(s).removeModel(c)]:[3,3];case 2:r.sent(),r.label=3;case 3:return [4,u.save(h)];case 4:return f=r.sent(),!o||l?[3,6]:[4,Kh.getManager(s).removeModel(c)];case 5:r.sent(),r.label=6;case 6:return [2,f.modelArtifactsInfo]}})})}var $h="models_store",Yh="model_info_store";function Qh(){if(!a().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var t=window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Jh(t){var e=t.result;e.createObjectStore($h,{keyPath:"modelPath"}),e.createObjectStore(Yh,{keyPath:"modelPath"});}var Zh=function(){function t(t){if(this.indexedDB=Qh(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t;}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return [2,this.databaseAction(this.modelPath,t)]})})},t.prototype.load=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return [2,this.databaseAction(this.modelPath)]})})},t.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(t,r){var o=n.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Jh(o)},o.onsuccess=function(){var a=o.result;if(null==e){var i=a.transaction($h,"readonly"),u=i.objectStore($h).get(n.modelPath);u.onsuccess=function(){if(null==u.result)return a.close(),r(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));t(u.result.modelArtifacts);},u.onerror=function(t){return a.close(),r(u.error)},i.oncomplete=function(){return a.close()};}else{var s,c=Gh(e),l=a.transaction(Yh,"readwrite"),h=l.objectStore(Yh),f=h.put({modelPath:n.modelPath,modelArtifactsInfo:c});f.onsuccess=function(){var o=(s=a.transaction($h,"readwrite")).objectStore($h).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:c});o.onsuccess=function(){return t({modelArtifactsInfo:c})},o.onerror=function(t){var e=(h=l.objectStore(Yh)).delete(n.modelPath);e.onsuccess=function(){return a.close(),r(o.error)},e.onerror=function(t){return a.close(),r(o.error)};};},f.onerror=function(t){return a.close(),r(f.error)},l.oncomplete=function(){null==s?a.close():s.oncomplete=function(){return a.close()};};}},o.onerror=function(t){return r(o.error)};})},t.URL_SCHEME="indexeddb://",t}(),tf=function(t){return a().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Zh.URL_SCHEME)?(e=t.slice(Zh.URL_SCHEME.length),new Zh(e)):null;var e;};Hh.registerSaveRouter(tf),Hh.registerLoadRouter(tf);var ef=function(){function t(){this.indexedDB=Qh();}return t.prototype.listModels=function(){return n(this,void 0,void 0,function(){var t=this;return r(this,function(e){return [2,new Promise(function(e,n){var r=t.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=function(){return Jh(r)},r.onsuccess=function(){var t=r.result,o=t.transaction(Yh,"readonly"),a=o.objectStore(Yh).getAll();a.onsuccess=function(){for(var t={},n=0,r=a.result;n<r.length;n++){var o=r[n];t[o.modelPath]=o.modelArtifactsInfo;}e(t);},a.onerror=function(e){return t.close(),n(a.error)},o.oncomplete=function(){return t.close()};},r.onerror=function(t){return n(r.error)};})]})})},t.prototype.removeModel=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(n){var r;return t=(r=t).startsWith(Zh.URL_SCHEME)?r.slice(Zh.URL_SCHEME.length):r,[2,new Promise(function(n,r){var o=e.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return Jh(o)},o.onsuccess=function(){var e,a=o.result,i=a.transaction(Yh,"readwrite"),u=i.objectStore(Yh),s=u.get(t);s.onsuccess=function(){if(null==s.result)return a.close(),r(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var o=u.delete(t),i=function(){var o=(e=a.transaction($h,"readwrite")).objectStore($h).delete(t);o.onsuccess=function(){return n(s.result.modelArtifactsInfo)},o.onerror=function(t){return r(s.error)};};o.onsuccess=i,o.onerror=function(t){return i(),a.close(),r(s.error)};},s.onerror=function(t){return a.close(),r(s.error)},i.oncomplete=function(){null==e?a.close():e.oncomplete=function(){return a.close()};};},o.onerror=function(t){return r(o.error)};})]})})},t}();if(a().getBool("IS_BROWSER"))try{Kh.registerManager(Zh.URL_SCHEME,new ef);}catch(t){}var nf="/",rf="tensorflowjs_models",of="info",af="model_topology",uf="weight_specs",sf="weight_data",cf="model_metadata";function lf(t){return {info:[rf,t,of].join(nf),topology:[rf,t,af].join(nf),weightSpecs:[rf,t,uf].join(nf),weightData:[rf,t,sf].join(nf),modelMetadata:[rf,t,cf].join(nf)}}function hf(t){var e=t.split(nf);if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join(nf)}var ff=function(){function t(t){if(!a().getBool("IS_BROWSER")||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=lf(this.modelPath);}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){var e,n,o;return r(this,function(r){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=Gh(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,(a=t.weightData,Wh?Buffer.from(a).toString("base64"):btoa(String.fromCharCode.apply(null,new Uint8Array(a))))),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}var a;return [2]})})},t.prototype.load=function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i,u;return r(this,function(r){if(null==(t=JSON.parse(this.LS.getItem(this.keys.info))))throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},null==(n=JSON.parse(this.LS.getItem(this.keys.topology))))throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,null==(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,null!=(a=this.LS.getItem(this.keys.modelMetadata))&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),null==(u=this.LS.getItem(this.keys.weightData)))throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(t){if(Wh){var e=Buffer.from(t,"base64");return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}for(var n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r.set([n.charCodeAt(o)],o);return r.buffer}(u),[2,e]})})},t.URL_SCHEME="localstorage://",t}(),pf=function(t){return a().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ff.URL_SCHEME)?(e=t.slice(ff.URL_SCHEME.length),new ff(e)):null;var e;};Hh.registerSaveRouter(pf),Hh.registerLoadRouter(pf);var df=function(){function t(){g(a().getBool("IS_BROWSER"),function(){return "Current environment is not a web browser"}),g(void 0!==window.localStorage,function(){return "Current browser does not appear to support localStorage"}),this.LS=window.localStorage;}return t.prototype.listModels=function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i;return r(this,function(r){for(t={},e=rf+nf,n=nf+of,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=hf(a),t[i]=JSON.parse(this.LS.getItem(a)));return [2,t]})})},t.prototype.removeModel=function(t){return n(this,void 0,void 0,function(){var e,n;return r(this,function(r){var o;if(t=(o=t).startsWith(ff.URL_SCHEME)?o.slice(ff.URL_SCHEME.length):o,e=lf(t),null==this.LS.getItem(e.info))throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},t}();if(a().getBool("IS_BROWSER"))try{Kh.registerManager(ff.URL_SCHEME,new df);}catch(t){}var vf="model",mf=".json",gf=".weights.bin";function yf(t){return new Promise(function(t){return setTimeout(t)}).then(t)}var xf=function(){function t(e){if(!a().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(t.URL_SCHEME)&&(e=e.slice(t.URL_SCHEME.length)),null!=e&&0!==e.length||(e=vf),this.modelTopologyFileName=e+mf,this.weightDataFileName=e+gf;}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){var e,n,o,a,i,u;return r(this,function(r){switch(r.label){case 0:if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return [3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,yf(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return r.sent(),null==t.weightData?[3,4]:((u=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,u.href=e,[4,yf(function(){return u.dispatchEvent(new MouseEvent("click"))})]);case 3:r.sent(),r.label=4;case 4:return [2,{modelArtifactsInfo:Gh(t)}]}})})},t.URL_SCHEME="downloads://",t}(),bf=function(){function t(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t;}return t.prototype.load=function(){return n(this,void 0,void 0,function(){var t,e,n=this;return r(this,function(r){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(r,o){var a=new FileReader;a.onload=function(a){var i=JSON.parse(a.target.result),u=i.modelTopology;if(null!=u){0===e.length&&r({modelTopology:u});var s=i.weightsManifest;if(null!=s){var c;try{c=n.checkManifestAndWeightFiles(s,e);}catch(t){return void o(t)}var l=[],h=[],f=[];s.forEach(function(t){t.paths.forEach(function(t){h.push(t),f.push(null);}),l.push.apply(l,t.weights);}),s.forEach(function(t){t.paths.forEach(function(t){var e=new FileReader;e.onload=function(e){var n=e.target.result,o=h.indexOf(t);f[o]=n,-1===f.indexOf(null)&&r({modelTopology:u,weightSpecs:l,weightData:Vh(f),format:i.format,generatedBy:i.generatedBy,convertedBy:i.convertedBy,userDefinedMetadata:i.userDefinedMetadata});},e.onerror=function(e){return o("Failed to weights data from file of path '"+t+"'.")},e.readAsArrayBuffer(c[t]);});});}else o(new Error("weightManifest field is missing from file "+t.name));}else o(new Error("modelTopology field is missing from file "+t.name));},a.onerror=function(e){return o("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},a.readAsText(t);})]})})},t.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],r=e.map(function(t){return zh(t.name)}),o={},a=0,i=t;a<i.length;a++){i[a].paths.forEach(function(t){var a=zh(t);if(-1!==n.indexOf(a))throw new Error("Duplicate file basename found in weights manifest: '"+a+"'");if(n.push(a),-1===r.indexOf(a))throw new Error("Weight file with basename '"+a+"' is not provided.");o[t]=e[r.indexOf(a)];});}if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return o},t}();function wf(t,e,n,r){!function(t){g(null!=t&&Array.isArray(t)&&t.length>0,function(){return "promises must be a none empty array"});}(t),function(t,e){g(t>=0&&t<=1,function(){return "Progress fraction must be in range [0, 1], but got startFraction "+t}),g(e>=0&&e<=1,function(){return "Progress fraction must be in range [0, 1], but got endFraction "+e}),g(e>=t,function(){return "startFraction must be no more than endFraction, but got startFraction "+t+" and endFraction "+e});}(n=null==n?0:n,r=null==r?1:r);var o=0;return Promise.all(t.map(function(a){return a.then(function(a){var i=n+ ++o/t.length*(r-n);return e(i),a}),a}))}function Cf(t,e){return n(this,void 0,void 0,function(){var n,o,i,u,s,c,l,h,f;return r(this,function(r){switch(r.label){case 0:return null==e&&(e={}),n=null==e.fetchFunc?a().platform.fetch:e.fetchFunc,o=t.map(function(t){return n(t,e.requestInit,{isBinary:!0})}),i=0,u=.5,null!=e.onProgress?[3,2]:[4,Promise.all(o)];case 1:return s=r.sent(),[3,4];case 2:return [4,wf(o,e.onProgress,i,u)];case 3:s=r.sent(),r.label=4;case 4:return c=s.map(function(t){return t.arrayBuffer()}),l=.5,h=1,null!=e.onProgress?[3,6]:[4,Promise.all(c)];case 5:return f=r.sent(),[3,8];case 6:return [4,wf(c,e.onProgress,l,h)];case 7:f=r.sent(),r.label=8;case 8:return [2,f]}})})}function Ef(t){var e=this;return function(o,a,i){return void 0===a&&(a=""),n(e,void 0,void 0,function(){var e,n,u,s,c,l,h,f,p,d;return r(this,function(r){switch(r.label){case 0:if(e=o.map(function(){return !1}),n={},u=null!=i?i.map(function(){return !1}):[],s=[],o.forEach(function(t,r){var o=0;t.weights.forEach(function(t){var a="quantization"in t?t.quantization.dtype:t.dtype,c=Mh[a]*w(t.shape),l=function(){e[r]=!0,null==n[r]&&(n[r]=[]),n[r].push({manifestEntry:t,groupOffset:o,sizeBytes:c});};null!=i?i.forEach(function(e,n){e===t.name&&(l(),u[n]=!0);}):l(),s.push(t.name),o+=c;});}),!u.every(function(t){return t}))throw c=i.filter(function(t,e){return !u[e]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+". \nManifest JSON has weights with names: "+s.join(", ")+".");return l=e.reduce(function(t,e,n){return e&&t.push(n),t},[]),h=[],l.forEach(function(t){o[t].paths.forEach(function(t){var e=a+(a.endsWith("/")?"":"/")+t;h.push(e);});}),[4,t(h)];case 1:return f=r.sent(),p={},d=0,l.forEach(function(t){for(var e=o[t].paths.length,r=0,a=0;a<e;a++)r+=f[d+a].byteLength;for(var i=new ArrayBuffer(r),u=new Uint8Array(i),s=0,c=0;c<e;c++){var l=new Uint8Array(f[d+c]);u.set(l,s),s+=l.byteLength;}n[t].forEach(function(t){var e=Ph(i.slice(t.groupOffset,t.groupOffset+t.sizeBytes),[t.manifestEntry]);for(var n in e)p[n]=e[n];}),d+=e;}),[2,p]}})})}}Hh.registerSaveRouter(function(t){return a().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(xf.URL_SCHEME)?(e=t.slice(xf.URL_SCHEME.length),void 0===e&&(e="model"),new xf(e)):null;var e;});var Rf=function(){function t(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,null!=e.fetchFunc?(g("function"==typeof e.fetchFunc,function(){return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=a().platform.fetch,g(null!=t&&t.length>0,function(){return "URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&g(2===t.length,function(){return "URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{};}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){var e,n,o,a;return r(this,function(r){switch(r.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return (e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=r.sent()).ok)return [2,{modelArtifactsInfo:Gh(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},t.prototype.load=function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i,u,s,c,l,h,f;return r(this,function(r){switch(r.label){case 0:return [4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=r.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");r.label=2;case 2:return r.trys.push([2,4,,5]),[4,t.json()];case 3:return e=r.sent(),[3,5];case 4:throw r.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,u=e.convertedBy,s=e.format,c=e.userDefinedMetadata,null==o&&null==a)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return null==a?[3,7]:[4,this.loadWeights(a)];case 6:f=r.sent(),l=f[0],h=f[1],r.label=7;case 7:return [2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:u,format:s}]}})})},t.prototype.loadWeights=function(t){return n(this,void 0,void 0,function(){var e,n,o,a,i,u,s,c,l,h,f;return r(this,function(r){switch(r.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(t){var e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),o=n>e?t.substring(n):"";return [r+"/",o]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,u=[],s=0,c=t;s<c.length;s++)l=c[s],u.push.apply(u,l.weights);return h=[],t.forEach(function(t){t.paths.forEach(function(t){h.push(i+t+a);});}),[4,Cf(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=r.sent(),[2,[u,Vh(f)]]}})})},t.URL_SCHEME_REGEX=/^https?:\/\//,t}();function If(t){return null!=t.match(Rf.URL_SCHEME_REGEX)}var kf=function(t,e){if("undefined"==typeof fetch)return null;return (Array.isArray(t)?t.every(function(t){return If(t)}):If(t))?Sf(t,{onProgress:e}):null};function Sf(t,e){return new Rf(t,e)}Hh.registerSaveRouter(kf),Hh.registerLoadRouter(kf);var Af=function(){function t(t){this.modelArtifacts=t;}return t.prototype.load=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return [2,this.modelArtifacts]})})},t}(),Df=function(){function t(t){this.saveHandler=t;}return t.prototype.save=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){return [2,this.saveHandler(t)]})})},t}();var Tf=Object.freeze({browserFiles:function(t){return new bf(t)},browserHTTPRequest:function(t,e){return Sf(t,e)},concatenateArrayBuffers:Vh,decodeWeights:Ph,encodeWeights:function(t,e){return n(this,void 0,void 0,function(){var o,a,i,u,s,c=this;return r(this,function(l){switch(l.label){case 0:for(o=[],a=[],i=Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t),u=function(u){var s=i[u],l=Array.isArray(t)?t[u].tensor:t[s];if("float32"!==l.dtype&&"int32"!==l.dtype&&"bool"!==l.dtype&&"string"!==l.dtype)throw new Error("Unsupported dtype in weight '"+s+"': "+l.dtype);var h={name:s,shape:l.shape,dtype:l.dtype};if("string"===l.dtype){var f=new Promise(function(t){return n(c,void 0,void 0,function(){var e,n,o,a,i,u,s;return r(this,function(r){switch(r.label){case 0:return [4,l.bytes()];case 1:for(e=r.sent(),n=e.reduce(function(t,e){return t+e.length},0)+Bh*e.length,o=new Uint8Array(n),a=0,i=0;i<e.length;i++)u=e[i],s=new Uint8Array(new Uint32Array([u.length]).buffer),o.set(s,a),a+=Bh,o.set(u,a),a+=u.length;return t(o),[2]}})})});a.push(f);}else a.push(l.data());null!=e&&(h.group=e),o.push(h);},s=0;s<i.length;++s)u(s);return [4,Promise.all(a)];case 1:return [2,{data:Lh(l.sent()),specs:o}]}})})},fromMemory:function(t,e,n,r){return 1===arguments.length?null!=t.modelTopology||null!=t.weightSpecs?new Af(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Af({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Af({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))},getLoadHandlers:function(t,e){return Hh.getLoadHandlers(t,e)},getModelArtifactsInfoForJSON:Gh,getSaveHandlers:function(t){return Hh.getSaveHandlers(t)},http:Sf,isHTTPScheme:If,loadWeights:function(t,e,o,a){return void 0===e&&(e=""),n(this,void 0,void 0,function(){return r(this,function(n){return [2,Ef(function(t){return Cf(t,{requestInit:a})})(t,e,o)]})})},registerLoadRouter:function(t){return Hh.registerLoadRouter(t)},registerSaveRouter:function(t){return Hh.registerSaveRouter(t)},weightsLoaderFactory:Ef,withSaveHandler:function(t){return new Df(t)},copyModel:function(t,e){return n(this,void 0,void 0,function(){return r(this,function(n){return [2,Xh(t,e,!1)]})})},listModels:function(){return n(this,void 0,void 0,function(){var t,e,n,o,a,i,u;return r(this,function(r){switch(r.label){case 0:t=Kh.getSchemes(),e={},n=0,o=t,r.label=1;case 1:return n<o.length?(a=o[n],[4,Kh.getManager(a).listModels()]):[3,4];case 2:for(u in i=r.sent())e[a+qh+u]=i[u];r.label=3;case 3:return n++,[3,1];case 4:return [2,e]}})})},moveModel:function(t,e){return n(this,void 0,void 0,function(){return r(this,function(n){return [2,Xh(t,e,!0)]})})},removeModel:function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){return e=jh(t),[2,Kh.getManager(e.scheme).removeModel(e.path)]})})}});var Nf,Ff=wn({confusionMatrix_:function(t,e,n){var r=cn(t,"labels","confusionMatrix"),o=cn(e,"predictions","confusionMatrix");g(null==n||n>0&&Number.isInteger(n),function(){return "If provided, numClasses must be a positive integer, but got "+n}),g(1===r.rank,function(){return "Expected the rank of labels to be 1, but got "+r.rank}),g(1===o.rank,function(){return "Expected the rank of predictions to be 1, but got "+o.rank}),g(r.shape[0]===o.shape[0],function(){return "Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),g(n>0&&Number.isInteger(n),function(){return "numClasses is required to be a positive integer, but got "+n});var a=gr(r.asType("int32"),n),i=gr(o.asType("int32"),n);return a.transpose().matMul(i).asType("int32")}}),_f=Object.freeze({confusionMatrix:Ff});var Of=wn({fromPixels_:function(t,e){if(void 0===e&&(e=3),e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n=!1,r=!1,o=!1,a=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement)o=!0;else if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement)a=!0;else{if(null==t.getContext)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+t.constructor.name);i=!0;}if(o&&o&&t.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(null!=s("FromPixels",Nt.backendName))return Nt.runKernel("FromPixels",{pixels:t},{numChannels:e});var u,c,l=o?[t.videoWidth,t.videoHeight]:[t.width,t.height],h=l[0],f=l[1];if(i?u=t.getContext("2d").getImageData(0,0,h,f).data:r||n?u=t.data:(a||o)&&(null==Nf&&(Nf=document.createElement("canvas").getContext("2d")),Nf.canvas.width=h,Nf.canvas.height=f,Nf.drawImage(t,0,0,h,f),u=Nf.getImageData(0,0,h,f).data),4===e)c=new Int32Array(u);else{var p=h*f;c=new Int32Array(p*e);for(var d=0;d<p;d++)for(var v=0;v<e;++v)c[d*e+v]=u[4*d+v];}return Tn(c,[f,h,e],"int32")}}),Mf=Object.freeze({toPixels:function(t,e){return n(this,void 0,void 0,function(){var n,o,a,i,u,s,c,l,h,f,p,d,v,m,g,y,x,b,w,C,E,R,I;return r(this,function(r){switch(r.label){case 0:if(n=cn(t,"img","toPixels"),t instanceof dt||(n=n.toInt()),2!==n.rank&&3!==n.rank)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+n.rank+".");if(o=n.shape.slice(0,2),a=o[0],i=o[1],(u=2===n.rank?1:n.shape[2])>4||2===u)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+u);return [4,n.data()];case 1:return s=r.sent(),c=n.min(),l=n.max(),[4,Promise.all([c.data(),l.data()])];case 2:if(h=r.sent(),f=h[0],p=h[1],d=f[0],v=p[0],c.dispose(),l.dispose(),"float32"===n.dtype){if(d<0||v>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+v+"].")}else{if("int32"!==n.dtype)throw new Error("Unsupported type for toPixels: "+n.dtype+". Please use float32 or int32 tensors.");if(d<0||v>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+v+"].")}for(m="float32"===n.dtype?255:1,g=new Uint8ClampedArray(i*a*4),y=0;y<a*i;++y)x=void 0,b=void 0,w=void 0,C=void 0,1===u?(x=s[y]*m,b=s[y]*m,w=s[y]*m,C=255):3===u?(x=s[3*y]*m,b=s[3*y+1]*m,w=s[3*y+2]*m,C=255):4===u&&(x=s[4*y]*m,b=s[4*y+1]*m,w=s[4*y+2]*m,C=s[4*y+3]*m),g[0+(E=4*y)]=Math.round(x),g[E+1]=Math.round(b),g[E+2]=Math.round(w),g[E+3]=Math.round(C);return null!=e&&(e.width=i,e.height=a,R=e.getContext("2d"),I=new ImageData(g,i,a),R.putImageData(I,0,0)),n!==t&&n.dispose(),[2,g]}})})},fromPixels:Of}),Bf=function(){function t(){}return t.prototype.getClassName=function(){return this.constructor.className},t.fromConfig=function(t,e){return new t(e)},t}(),Pf=function(){function t(){this.classNameMap={};}return t.getMap=function(){return null==t.instance&&(t.instance=new t),t.instance},t.register=function(e){t.getMap().classNameMap[e.className]=[e,e.fromConfig];},t}();function Lf(t){g(null!=t.className,function(){return "Class being registered does not have the static className property defined."}),g("string"==typeof t.className,function(){return "className is required to be a string, but got type "+typeof t.className}),g(t.className.length>0,function(){return "Class being registered has an empty-string as its className, which is disallowed."}),Pf.register(t);}var Wf=Object.freeze({Serializable:Bf,SerializationMap:Pf,registerClass:Lf}),Uf=.001,Vf=.1;function zf(){return 32===Nt.backend.floatPrecision()?Uf:Vf}function Gf(t,e,n){var r=!0;if((B(t)||B(e))&&(r=!1),B(t)&&B(e)&&(r=!0),r){var o=t.constructor.name,a=e.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(t)&&Array.isArray(e)){var i=un(t),u=un(e);if(!C(i,u))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+u+"]")}var s=B(t)?t:b(t),c=B(e)?e:b(e);if(s.length!==c.length)throw new Error("Arrays have different lengths actual: "+s.length+" vs expected: "+c.length+".\nActual:   "+s+".\nExpected: "+c+".");for(var l=0;l<c.length;++l){var h=s[l],f=c[l];if(!n(h,f))throw new Error("Arrays differ: actual["+l+"] = "+h+", expected["+l+"] = "+f+".\nActual:   "+s+".\nExpected: "+c+".")}}function Hf(t,e,n){return !isFinite(t)&&!isFinite(e)||!(isNaN(t)||isNaN(e)||Math.abs(t-e)>n)}var qf=Object.freeze({TEST_EPSILON_FLOAT16:Vf,expectArraysClose:function(t,e,n){return null==n&&(n=zf()),Gf(t,e,function(t,e){return Hf(t,e,n)})},testEpsilon:zf,expectPromiseToFail:function(t,e){t().then(function(){return e.fail()},function(){return e()});},expectArraysEqual:function(t,e){var n="string"==typeof e||"number"==typeof e||"boolean"==typeof e?[e]:e;return W(t)||W(t[0])||W(e)||W(e[0])?Gf(t,n,function(t,e){return t==e}):Gf(t,e,function(t,e){return Hf(t,e,0)})},expectNumbersClose:function(t,e,n){if(null==n&&(n=zf()),!Hf(t,e,n))throw new Error("Numbers differ: actual === "+t+", expected === "+e)},expectValuesInRange:function(t,e,n){for(var r=0;r<t.length;r++)if(t[r]<e||t[r]>n)throw new Error("Value out of range:"+t[r]+" low: "+e+", high: "+n)},expectArrayBuffersEqual:function(t,e){expect(new Float32Array(t)).toEqual(new Float32Array(e));}}),Kf="1.4.0";var jf=Object.freeze({gpgpu_util:xi,webgl_util:Be,forceHalfFloat:function(){a().set("WEBGL_FORCE_F16_TEXTURES",!0);},MathBackendWebGL:Pu,setWebGLContext:Wt,GPGPUContext:bi}),Xf=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.minimize=function(t,e,n){void 0===e&&(e=!1);var r=this.computeGradients(t,n),o=r.value,a=r.grads;if(null!=n){var i=n.map(function(t){return {name:t.name,tensor:a[t.name]}});this.applyGradients(i);}else this.applyGradients(a);return je(a),e?o:(o.dispose(),null)},Object.defineProperty(o.prototype,"iterations",{get:function(){return null==this.iterations_&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),o.prototype.incrementIterations=function(){this.iterations_=this.iterations+1;},o.prototype.computeGradients=function(t,e){return ro(t,e)},o.prototype.dispose=function(){null!=this.iterations_&&je(this.iterations_);},o.prototype.saveIterations=function(){return n(this,void 0,void 0,function(){return r(this,function(t){return null==this.iterations_&&(this.iterations_=0),[2,{name:"iter",tensor:Sn(this.iterations_,"int32")}]})})},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},o.prototype.extractIterations=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return e=this,[4,t[0].tensor.data()];case 1:return e.iterations_=n.sent()[0],[2,t.slice(1)]}})})},o}(Bf);Object.defineProperty(Xf,Symbol.hasInstance,{value:function(t){return null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients}});var $f=function(t){function o(e,n,r){void 0===r&&(r=null);var o=t.call(this)||this;return o.learningRate=e,o.rho=n,o.epsilon=r,o.accumulatedGrads=[],o.accumulatedUpdates=[],null==r&&(o.epsilon=Nt.backend.epsilon()),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=Nt.registeredVariables[n];null==e.accumulatedGrads[r]&&(e.accumulatedGrads[r]={originalName:n+"/accum_grad",variable:Ke(function(){return Vn(o).variable(!1)})}),null==e.accumulatedUpdates[r]&&(e.accumulatedUpdates[r]={originalName:n+"/accum_var",variable:Ke(function(){return Vn(o).variable(!1)})});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable,u=e.accumulatedUpdates[r].variable;Ke(function(){var t=i.mul(e.rho).add(a.square().mul(1-e.rho)),n=u.add(e.epsilon).sqrt().div(i.add(e.epsilon).sqrt()).mul(a),r=u.mul(e.rho).add(n.square().mul(1-e.rho));i.assign(t),u.assign(r);var s=n.mul(-e.learningRate).add(o);o.assign(s);});}}),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedUpdates&&(je(this.accumulatedGrads.map(function(t){return t.variable})),je(this.accumulatedUpdates.map(function(t){return t.variable})));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return [4,this.extractIterations(t)];case 1:return t=n.sent(),e=t.length/2,this.accumulatedGrads=t.slice(0,e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.accumulatedUpdates=t.slice(e,2*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.rho,e.epsilon)},o.className="Adadelta",o}(Xf);Lf($f);var Yf=function(t){function o(e,n){void 0===n&&(n=.1);var r=t.call(this)||this;return r.learningRate=e,r.initialAccumulatorValue=n,r.accumulatedGrads=[],r}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=Nt.registeredVariables[n];if(null==e.accumulatedGrads[r]){e.accumulatedGrads[r]={originalName:n+"/accumulator",variable:Ke(function(){return Pn(o.shape,e.initialAccumulatorValue).variable(!1)})};}var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedGrads[r].variable;Ke(function(){var t=i.add(a.square());i.assign(t);var n=a.div(t.add(Nt.backend.epsilon()).sqrt()).mul(-e.learningRate).add(o);o.assign(n);});}}),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedGrads&&je(this.accumulatedGrads.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()].concat(this.accumulatedGrads.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:return t=e.sent(),this.accumulatedGrads=t.map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},o.fromConfig=function(t,e){return new t(e.learningRate,e.initialAccumulatorValue)},o.className="Adagrad",o}(Xf);Lf(Yf);var Qf=function(t){function o(e,n,r,o){void 0===o&&(o=null);var a=t.call(this)||this;return a.learningRate=e,a.beta1=n,a.beta2=r,a.epsilon=o,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],Ke(function(){a.accBeta1=Sn(n).variable(),a.accBeta2=Sn(r).variable();}),null==o&&(a.epsilon=Nt.backend.epsilon()),a}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t);Ke(function(){var r=ac(1,e.accBeta1),o=ac(1,e.accBeta2);n.forEach(function(n,a){var i=Nt.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Ke(function(){return Vn(i).variable(!1)})}),null==e.accumulatedSecondMoment[a]&&(e.accumulatedSecondMoment[a]={originalName:n+"/v",variable:Ke(function(){return Vn(i).variable(!1)})});var u=Array.isArray(t)?t[a].tensor:t[n];if(null!=u){var s=e.accumulatedFirstMoment[a].variable,c=e.accumulatedSecondMoment[a].variable,l=s.mul(e.beta1).add(u.mul(1-e.beta1)),h=c.mul(e.beta2).add(u.square().mul(1-e.beta2)),f=l.div(r),p=h.div(o);s.assign(l),c.assign(h);var d=f.div(p.sqrt().add(e.epsilon)).mul(-e.learningRate).add(i);i.assign(d);}}),e.accBeta1.assign(e.accBeta1.mul(e.beta1)),e.accBeta2.assign(e.accBeta2.mul(e.beta2));}),this.incrementIterations();},o.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&je(this.accumulatedFirstMoment.map(function(t){return t.variable})),null!=this.accumulatedSecondMoment&&je(this.accumulatedSecondMoment.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){var e,n=this;return r(this,function(r){switch(r.label){case 0:return [4,this.extractIterations(t)];case 1:return t=r.sent(),Ke(function(){n.accBeta1.assign(ec(n.beta1,n.iterations_+1)),n.accBeta2.assign(ec(n.beta2,n.iterations_+1));}),e=t.length/2,this.accumulatedFirstMoment=t.slice(0,e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.accumulatedSecondMoment=t.slice(e,2*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)},o.className="Adam",o}(Xf);Lf(Qf);var Jf=function(t){function o(e,n,r,o,a){void 0===o&&(o=null),void 0===a&&(a=0);var i=t.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=r,i.epsilon=o,i.decay=a,i.accumulatedFirstMoment=[],i.accumulatedWeightedInfNorm=[],Ke(function(){i.iteration=Sn(0).variable(),i.accBeta1=Sn(n).variable();}),null==o&&(i.epsilon=Nt.backend.epsilon()),i}return e(o,t),o.prototype.applyGradients=function(t){var e=this,n=Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t);Ke(function(){var r=ac(1,e.accBeta1),o=Gs(-e.learningRate,e.iteration.mul(e.decay).add(1));n.forEach(function(n,a){var i=Nt.registeredVariables[n];null==e.accumulatedFirstMoment[a]&&(e.accumulatedFirstMoment[a]={originalName:n+"/m",variable:Vn(i).variable(!1)}),null==e.accumulatedWeightedInfNorm[a]&&(e.accumulatedWeightedInfNorm[a]={originalName:n+"/v",variable:Vn(i).variable(!1)});var u=Array.isArray(t)?t[a].tensor:t[n];if(null!=u){var s=e.accumulatedFirstMoment[a].variable,c=e.accumulatedWeightedInfNorm[a].variable,l=s.mul(e.beta1).add(u.mul(1-e.beta1)),h=c.mul(e.beta2),f=u.abs(),p=h.maximum(f);s.assign(l),c.assign(p);var d=o.div(r).mul(l.div(p.add(e.epsilon))).add(i);i.assign(d);}}),e.iteration.assign(e.iteration.add(1)),e.accBeta1.assign(e.accBeta1.mul(e.beta1));}),this.incrementIterations();},o.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&je(this.accumulatedFirstMoment.map(function(t){return t.variable})),null!=this.accumulatedWeightedInfNorm&&je(this.accumulatedWeightedInfNorm.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("getWeights() is not implemented for Adamax yet.")})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(t){throw new Error("setWeights() is not implemented for Adamax yet.")})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},o.fromConfig=function(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)},o.className="Adamax",o}(Xf);Lf(Jf);var Zf=function(t){function o(e){var n=t.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=Array.isArray(t)?t[r].tensor:t[n];if(null!=o){var a=Nt.registeredVariables[n];Ke(function(){var t=e.c.mul(o).add(a);a.assign(t);});}}),this.incrementIterations();},o.prototype.setLearningRate=function(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=Xe(Sn(-t));},o.prototype.dispose=function(){this.c.dispose();},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()]]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:if(0!==(t=e.sent()).length)throw new Error("SGD optimizer does not have settable weights.");return [2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate}},o.fromConfig=function(t,e){return new t(e.learningRate)},o.className="SGD",o}(Xf);Lf(Zf);var tp=function(t){function o(e,n,r){void 0===r&&(r=!1);var o=t.call(this,e)||this;return o.learningRate=e,o.momentum=n,o.useNesterov=r,o.accumulations=[],o.m=Sn(o.momentum),o}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=Nt.registeredVariables[n];if(null==e.accumulations[r]){e.accumulations[r]={originalName:n+"/momentum",variable:Ke(function(){return Vn(o).variable(!1)})};}var a=e.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[n];null!=i&&Ke(function(){var t,n=e.m.mul(a).add(i);t=e.useNesterov?e.c.mul(i.add(n.mul(e.m))).add(o):e.c.mul(n).add(o),a.assign(n),o.assign(t);});}),this.incrementIterations();},o.prototype.dispose=function(){this.m.dispose(),null!=this.accumulations&&je(this.accumulations.map(function(t){return t.variable}));},o.prototype.setMomentum=function(t){this.momentum=t;},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return [4,this.saveIterations()];case 1:return [2,[t.sent()].concat(this.accumulations.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return [4,this.extractIterations(t)];case 1:return t=e.sent(),this.accumulations=t.map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},o.fromConfig=function(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)},o.className="Momentum",o}(Zf);Lf(tp);var ep=function(t){function o(e,n,r,o,a){void 0===n&&(n=.9),void 0===r&&(r=0),void 0===o&&(o=null),void 0===a&&(a=!1);var i=t.call(this)||this;return i.learningRate=e,i.decay=n,i.momentum=r,i.epsilon=o,i.accumulatedMeanSquares=[],i.accumulatedMoments=[],i.accumulatedMeanGrads=[],i.centered=a,null==o&&(i.epsilon=Nt.backend.epsilon()),i}return e(o,t),o.prototype.applyGradients=function(t){var e=this;(Array.isArray(t)?t.map(function(t){return t.name}):Object.keys(t)).forEach(function(n,r){var o=Nt.registeredVariables[n];null==e.accumulatedMeanSquares[r]&&(e.accumulatedMeanSquares[r]={originalName:n+"/rms",variable:Ke(function(){return Vn(o).variable(!1)})}),null==e.accumulatedMoments[r]&&(e.accumulatedMoments[r]={originalName:n+"/momentum",variable:Ke(function(){return Vn(o).variable(!1)})}),null==e.accumulatedMeanGrads[r]&&e.centered&&(e.accumulatedMeanGrads[r]={originalName:n+"/mg",variable:Ke(function(){return Vn(o).variable(!1)})});var a=Array.isArray(t)?t[r].tensor:t[n];if(null!=a){var i=e.accumulatedMeanSquares[r].variable,u=e.accumulatedMoments[r].variable;Ke(function(){var t=i.mul(e.decay).add(a.square().mul(1-e.decay));if(e.centered){var n=e.accumulatedMeanGrads[r].variable,s=n.mul(e.decay).add(a.mul(1-e.decay)),c=u.mul(e.momentum).add(a.mul(e.learningRate).div(t.sub(s.square().add(e.epsilon)).sqrt()));i.assign(t),n.assign(s),u.assign(c);var l=o.sub(c);o.assign(l);}else{var h=i.mul(e.decay).add(a.square().mul(1-e.decay));c=u.mul(e.momentum).add(a.mul(e.learningRate).div(h.add(e.epsilon).sqrt()));i.assign(h),u.assign(c);l=o.sub(c);o.assign(l);}});}}),this.incrementIterations();},o.prototype.dispose=function(){null!=this.accumulatedMeanSquares&&je(this.accumulatedMeanSquares.map(function(t){return t.variable})),null!=this.accumulatedMeanGrads&&this.centered&&je(this.accumulatedMeanGrads.map(function(t){return t.variable})),null!=this.accumulatedMoments&&je(this.accumulatedMoments.map(function(t){return t.variable}));},o.prototype.getWeights=function(){return n(this,void 0,void 0,function(){var t;return r(this,function(e){switch(e.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return [2,[e.sent()].concat(t.map(function(t){return {name:t.originalName,tensor:t.variable}}))]}})})},o.prototype.setWeights=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return [4,this.extractIterations(t)];case 1:return t=n.sent(),e=this.centered?t.length/3:t.length/2,this.accumulatedMeanSquares=t.slice(0,e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.accumulatedMoments=t.slice(e,2*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map(function(t){return {originalName:t.name,variable:t.tensor.variable(!1)}})),[2]}})})},o.prototype.getConfig=function(){return {learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},o.fromConfig=function(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)},o.className="RMSProp",o}(Xf);Lf(ep);var np=function(){function t(){}return t.sgd=function(t){return new Zf(t)},t.momentum=function(t,e,n){return void 0===n&&(n=!1),new tp(t,e,n)},t.rmsprop=function(t,e,n,r,o){return void 0===e&&(e=.9),void 0===n&&(n=0),void 0===r&&(r=null),void 0===o&&(o=!1),new ep(t,e,n,r,o)},t.adam=function(t,e,n,r){return void 0===t&&(t=.001),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),new Qf(t,e,n,r)},t.adadelta=function(t,e,n){return void 0===t&&(t=.001),void 0===e&&(e=.95),void 0===n&&(n=null),new $f(t,e,n)},t.adamax=function(t,e,n,r,o){return void 0===t&&(t=.002),void 0===e&&(e=.9),void 0===n&&(n=.999),void 0===r&&(r=null),void 0===o&&(o=0),new Jf(t,e,n,r,o)},t.adagrad=function(t,e){return void 0===e&&(e=.1),new Yf(t,e)},t}(),rp={sgd:np.sgd,momentum:np.momentum,adadelta:np.adadelta,adagrad:np.adagrad,rmsprop:np.rmsprop,adamax:np.adamax,adam:np.adam},op="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:function(t){return t()};function ap(){return new Promise(function(t){return op(function(){return t()})})}ft=Rh;

  var tfCore_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AdadeltaOptimizer: $f,
    AdagradOptimizer: Yf,
    AdamOptimizer: Qf,
    AdamaxOptimizer: Jf,
    DataStorage: so,
    get ENV () { return i; },
    Environment: o,
    KernelBackend: co,
    MomentumOptimizer: tp,
    Optimizer: Xf,
    RMSPropOptimizer: ep,
    get Rank () { return vt; },
    get Reduction () { return Kl; },
    SGDOptimizer: Zf,
    Tensor: dt,
    TensorBuffer: lt,
    Variable: bt,
    abs: Wu,
    acos: Uu,
    acosh: Vu,
    add: Ws,
    addN: Us,
    addStrict: Vs,
    all: al,
    any: il,
    argMax: ul,
    argMin: sl,
    asin: zu,
    asinh: Gu,
    atan: Hu,
    atan2: zs,
    atanh: qu,
    avgPool: $c,
    avgPool3d: Jc,
    backend: rn,
    backend_util: To,
    basicLSTMCell: Il,
    batchNorm: Ds,
    batchNorm2d: Ts,
    batchNorm3d: Ns,
    batchNorm4d: Fs,
    batchNormalization: As,
    batchNormalization2d: Is,
    batchNormalization3d: ks,
    batchNormalization4d: Ss,
    batchToSpaceND: sr,
    booleanMaskAsync: Ec,
    broadcastTo: cr,
    browser: Mf,
    buffer: ir,
    cast: lr,
    ceil: Ku,
    clipByValue: ju,
    clone: hr,
    complex: Cn,
    concat: zn,
    concat1d: Gn,
    concat2d: Hn,
    concat3d: qn,
    concat4d: Kn,
    conv1d: Sc,
    conv2d: Ac,
    conv2dTranspose: Bc,
    conv3d: Dc,
    conv3dTranspose: Pc,
    cos: Xu,
    cosh: $u,
    cumsum: fr,
    customGrad: oo,
    deprecationWarn: Ve,
    depthToSpace: pr,
    depthwiseConv2d: Fc,
    diag: Ll,
    disableDeprecationWarnings: Ue,
    dispose: je,
    disposeVariables: ze,
    div: Gs,
    divNoNan: Hs,
    divStrict: qs,
    dot: Wc,
    dropout: Wl,
    elu: ml,
    enableDebugMode: We,
    enableProdMode: Le,
    engine: Ge,
    env: a,
    equal: uc,
    equalStrict: sc,
    erf: Yu,
    exp: Qu,
    expandDims: dr,
    expm1: Ju,
    eye: vr,
    fft: Nl,
    fill: Pn,
    findBackend: tn,
    findBackendFactory: en,
    floor: Zu,
    floorDiv: Ks,
    frame: Gl,
    fused: Eh,
    gather: wc,
    gatherND: Pl,
    getBackend: Je,
    getKernel: s,
    getKernelsForBackend: c,
    grad: Zr,
    grads: to,
    greater: cc,
    greaterEqual: lc,
    greaterEqualStrict: hc,
    greaterStrict: fc,
    hammingWindow: zl,
    hannWindow: Vl,
    ifft: Fl,
    imag: Rn,
    image: vh,
    inTopKAsync: jl,
    io: Tf,
    irfft: Ol,
    isFinite: hs,
    isInf: ls,
    isNaN: cs,
    keep: Xe,
    leakyRelu: gl,
    less: pc,
    lessEqual: dc,
    lessEqualStrict: vc,
    lessStrict: mc,
    linalg: sh,
    linspace: Ln,
    localResponseNormalization: El,
    log: ts,
    log1p: es,
    logSigmoid: ns,
    logSoftmax: uo,
    logSumExp: cl,
    logicalAnd: _s,
    logicalNot: Os,
    logicalOr: Ms,
    logicalXor: Bs,
    losses: rh,
    matMul: Lc,
    math: _f,
    max: ll,
    maxPool: Xc,
    maxPool3d: Qc,
    maximum: js,
    maximumStrict: Xs,
    mean: hl,
    memory: He,
    min: fl,
    minimum: $s,
    minimumStrict: Ys,
    mod: Qs,
    modStrict: Js,
    moments: pl,
    movingAverage: Sl,
    mul: Zs,
    mulStrict: tc,
    multiRNNCell: kl,
    multinomial: mr,
    neg: rs,
    nextFrame: ap,
    norm: Rl,
    notEqual: gc,
    notEqualStrict: yc,
    oneHot: gr,
    ones: Mn,
    onesLike: Un,
    op: wn,
    outerProduct: Uc,
    pad: yr,
    pad1d: xr,
    pad2d: br,
    pad3d: wr,
    pad4d: Cr,
    pool: Yc,
    pow: ec,
    powStrict: nc,
    prelu: yl,
    print: ur,
    prod: vl,
    profile: qe,
    rand: Er,
    randomGamma: Ir,
    randomNormal: Rr,
    randomUniform: kr,
    range: Wn,
    ready: Qe,
    real: En,
    reciprocal: os,
    registerBackend: nn,
    registerKernel: l,
    relu: xl,
    relu6: bl,
    removeBackend: Ze,
    reshape: Sr,
    reverse: Vc,
    reverse1d: zc,
    reverse2d: Gc,
    reverse3d: Hc,
    reverse4d: qc,
    rfft: _l,
    round: as,
    rsqrt: is,
    scalar: Sn,
    scatterND: Tl,
    selu: wl,
    separableConv2d: Mc,
    serialization: Wf,
    setBackend: Ye,
    setPlatform: on,
    setdiff1dAsync: Or,
    sigmoid: us,
    sign: ss,
    signal: ql,
    sin: fs,
    sinh: ps,
    slice: Zc,
    slice1d: tl,
    slice2d: el,
    slice3d: nl,
    slice4d: rl,
    slice_util: Jr,
    softmax: io,
    softplus: ds,
    spaceToBatchND: Ar,
    sparseToDense: Bl,
    spectral: Ml,
    split: jn,
    sqrt: vs,
    square: Lu,
    squaredDifference: rc,
    squaredDifferenceStrict: oc,
    squeeze: Dr,
    stack: Tr,
    step: ms,
    stft: Hl,
    stridedSlice: Al,
    sub: ac,
    subStrict: ic,
    sum: dl,
    tan: gs,
    tanh: ys,
    tensor: In,
    tensor1d: An,
    tensor2d: Dn,
    tensor3d: Tn,
    tensor4d: Nn,
    tensor5d: Fn,
    tensor6d: _n,
    tensor_util: At,
    test_util: qf,
    tidy: Ke,
    tile: Nr,
    time: $e,
    topk: Dl,
    train: rp,
    transpose: Cl,
    truncatedNormal: Fr,
    unregisterKernel: h,
    unsortedSegmentSum: Cc,
    unstack: _r,
    util: tt,
    valueAndGrad: eo,
    valueAndGrads: no,
    variable: On,
    variableGrads: ro,
    version_core: Kf,
    webgl: jf,
    where: Ps,
    whereAsync: Ls,
    zeros: Bn,
    zerosLike: Vn
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
      return tensor instanceof dt && tensor.shape.length === dim;
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
      return Ke(function () {
          var r = meanRgb[0], g = meanRgb[1], b = meanRgb[2];
          var avg_r = Pn(__spreadArrays(x.shape.slice(0, 3), [1]), r);
          var avg_g = Pn(__spreadArrays(x.shape.slice(0, 3), [1]), g);
          var avg_b = Pn(__spreadArrays(x.shape.slice(0, 3), [1]), b);
          var avg_rgb = zn([avg_r, avg_g, avg_b], 3);
          return ac(x, avg_rgb);
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
      return Ke(function () {
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
              return Pn(paddingTensorShape, 0);
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
          return zn(tensorsToStack, paddingAxis);
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
                      imgTensor3D = Ke(function () { return imgTensor.as3D(height, width, numChannels).toInt(); });
                      return [4 /*yield*/, Mf.toPixels(imgTensor3D, targetCanvas)];
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
          return Ke(function () {
              var inputTensors = range(_this.batchSize, 0, 1).map(function (batchIdx) {
                  var input = _this.getInput(batchIdx);
                  if (input instanceof dt) {
                      var imgTensor = isTensor4D(input) ? input : input.expandDims();
                      imgTensor = padToSquare(imgTensor, isCenterInputs);
                      if (imgTensor.shape[1] !== inputSize || imgTensor.shape[2] !== inputSize) {
                          imgTensor = vh.resizeBilinear(imgTensor, [inputSize, inputSize]);
                      }
                      return imgTensor.as3D(inputSize, inputSize, 3);
                  }
                  if (input instanceof env.getEnv().Canvas) {
                      return Mf.fromPixels(imageToSquare(input, inputSize, isCenterInputs));
                  }
                  throw new Error("toBatchTensor - at batchIdx " + batchIdx + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + input);
              });
              var batchTensor = Tr(inputTensors.map(function (t) { return t.toFloat(); })).as4D(_this.batchSize, inputSize, inputSize, 3);
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
              return [2 /*return*/, Ke(function () {
                      var _a = imageTensor.shape.slice(isTensor4D(imageTensor) ? 1 : 0), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                      var boxes = detections.map(function (det) { return det instanceof FaceDetection
                          ? det.forSize(imgWidth, imgHeight).box
                          : det; })
                          .map(function (box) { return box.clipAtImageBorders(imgWidth, imgHeight); });
                      var faceTensors = boxes.map(function (_a) {
                          var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                          return nl(imageTensor.as3D(imgHeight, imgWidth, numChannels), [y, x, 0], [height, width, numChannels]);
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
                      return [2 /*return*/, Tf.loadWeights(manifest, modelBaseUri)];
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
          return this.getParamList().filter(function (param) { return param.tensor instanceof bt; });
      };
      NeuralNetwork.prototype.getFrozenParams = function () {
          return this.getParamList().filter(function (param) { return !(param.tensor instanceof bt); });
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
              var tensor = In(variable.dataSync());
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
                          loadWeights = Tf.weightsLoaderFactory(fetchWeightsFromDisk);
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
          if (!obj || !objProp || !(obj[objProp] instanceof dt)) {
              throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
          }
          return { obj: obj, objProp: objProp };
      };
      return NeuralNetwork;
  }());

  function depthwiseSeparableConv(x, params, stride) {
      return Ke(function () {
          var out = Mc(x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
          out = Ws(out, params.bias);
          return out;
      });
  }

  function denseBlock3(x, denseBlockParams, isFirstLayer) {
      if (isFirstLayer === void 0) { isFirstLayer = false; }
      return Ke(function () {
          var out1 = xl(isFirstLayer
              ? Ws(Ac(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
              : depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
          var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
          var in3 = xl(Ws(out1, out2));
          var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
          return xl(Ws(out1, Ws(out2, out3)));
      });
  }
  function denseBlock4(x, denseBlockParams, isFirstLayer, isScaleDown) {
      if (isFirstLayer === void 0) { isFirstLayer = false; }
      if (isScaleDown === void 0) { isScaleDown = true; }
      return Ke(function () {
          var out1 = xl(isFirstLayer
              ? Ws(Ac(x, denseBlockParams.conv0.filters, isScaleDown ? [2, 2] : [1, 1], 'same'), denseBlockParams.conv0.bias)
              : depthwiseSeparableConv(x, denseBlockParams.conv0, isScaleDown ? [2, 2] : [1, 1]));
          var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
          var in3 = xl(Ws(out1, out2));
          var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
          var in4 = xl(Ws(out1, Ws(out2, out3)));
          var out4 = depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1]);
          return xl(Ws(out1, Ws(out2, Ws(out3, out4))));
      });
  }

  function convLayer(x, params, padding, withRelu) {
      if (padding === void 0) { padding = 'same'; }
      if (withRelu === void 0) { withRelu = false; }
      return Ke(function () {
          var out = Ws(Ac(x, params.filters, [1, 1], padding), params.bias);
          return withRelu ? xl(out) : out;
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
          var filters = Nn(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
          var bias = An(extractWeights(channelsOut));
          paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
          return { filters: filters, bias: bias };
      };
  }

  function extractFCParamsFactory(extractWeights, paramMappings) {
      return function (channelsIn, channelsOut, mappedPrefix) {
          var fc_weights = Dn(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
          var fc_bias = An(extractWeights(channelsOut));
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
          var depthwise_filter = Nn(extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1]);
          var pointwise_filter = Nn(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut]);
          var bias = An(extractWeights(channelsOut));
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
          return Ke(function () {
              var batchTensor = input.toBatchTensor(112, true);
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(Sn(255));
              var out = denseBlock4(normalized, params.dense0, true);
              out = denseBlock4(out, params.dense1);
              out = denseBlock4(out, params.dense2);
              out = denseBlock4(out, params.dense3);
              out = $c(out, [7, 7], [2, 2], 'valid');
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
      return Ke(function () {
          return Ws(Lc(x, params.weights), params.bias);
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
          return Ke(function () {
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
          return Ke(function () { return io(_this.runNet(input)); });
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
                          return [4 /*yield*/, Promise.all(_r(out).map(function (t) { return __awaiter(_this, void 0, void 0, function () {
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
      return Ws(Ac(x, params.filters, stride, 'same'), params.bias);
  }
  function reductionBlock(x, params, isActivateInput) {
      if (isActivateInput === void 0) { isActivateInput = true; }
      var out = isActivateInput ? xl(x) : x;
      out = depthwiseSeparableConv(out, params.separable_conv0, [1, 1]);
      out = depthwiseSeparableConv(xl(out), params.separable_conv1, [1, 1]);
      out = Xc(out, [3, 3], [2, 2], 'same');
      out = Ws(out, conv(x, params.expansion_conv, [2, 2]));
      return out;
  }
  function mainBlock(x, params) {
      var out = depthwiseSeparableConv(xl(x), params.separable_conv0, [1, 1]);
      out = depthwiseSeparableConv(xl(out), params.separable_conv1, [1, 1]);
      out = depthwiseSeparableConv(xl(out), params.separable_conv2, [1, 1]);
      out = Ws(out, x);
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
          return Ke(function () {
              var batchTensor = input.toBatchTensor(112, true);
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(Sn(256));
              var out = xl(conv(normalized, params.entry_flow.conv_in, [2, 2]));
              out = reductionBlock(out, params.entry_flow.reduction_block_0, false);
              out = reductionBlock(out, params.entry_flow.reduction_block_1);
              range(_this._numMainBlocks, 0, 1).forEach(function (idx) {
                  out = mainBlock(out, params.middle_flow["main_block_" + idx]);
              });
              out = reductionBlock(out, params.exit_flow.reduction_block);
              out = xl(depthwiseSeparableConv(out, params.exit_flow.separable_conv, [1, 1]));
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
          return Ke(function () {
              var bottleneckFeatures = input instanceof NetInput
                  ? _this.faceFeatureExtractor.forwardInput(input)
                  : input;
              var pooled = $c(bottleneckFeatures, [7, 7], [2, 2], 'valid').as2D(bottleneckFeatures.shape[0], -1);
              var age = fullyConnectedLayer(pooled, params.fc.age).as1D();
              var gender = fullyConnectedLayer(pooled, params.fc.gender);
              return { age: age, gender: gender };
          });
      };
      AgeGenderNet.prototype.forwardInput = function (input) {
          var _this = this;
          return Ke(function () {
              var _a = _this.runNet(input), age = _a.age, gender = _a.gender;
              return { age: age, gender: io(gender) };
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
                          ages = _r(out.age);
                          genders = _r(out.gender);
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
          return Ke(function () {
              var createInterleavedTensor = function (fillX, fillY) {
                  return Tr([
                      Pn([68], fillX),
                      Pn([68], fillY)
                  ], 1).as2D(1, 136).as1D();
              };
              var getPadding = function (batchIdx, cond) {
                  var _a = inputDimensions[batchIdx], width = _a.width, height = _a.height;
                  return cond(width, height) ? Math.abs(width - height) / 2 : 0;
              };
              var getPaddingX = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return w < h; }); };
              var getPaddingY = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return h < w; }); };
              var landmarkTensors = output
                  .mul(Pn([batchSize, 136], inputSize))
                  .sub(Tr(Array.from(Array(batchSize), function (_, batchIdx) {
                  return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
              })))
                  .div(Tr(Array.from(Array(batchSize), function (_, batchIdx) {
                  return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
              })));
              return landmarkTensors;
          });
      };
      FaceLandmark68NetBase.prototype.forwardInput = function (input) {
          var _this = this;
          return Ke(function () {
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
                          landmarkTensors = Ke(function () { return _r(_this.forwardInput(netInput)); });
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
          return Ke(function () {
              var batchTensor = input.toBatchTensor(112, true);
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(Sn(255));
              var out = denseBlock3(normalized, params.dense0, true);
              out = denseBlock3(out, params.dense1);
              out = denseBlock3(out, params.dense2);
              out = $c(out, [14, 14], [2, 2], 'valid');
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
      return Ws(Zs(x, params.weights), params.biases);
  }

  function convLayer$1(x, params, strides, withRelu, padding) {
      if (padding === void 0) { padding = 'same'; }
      var _a = params.conv, filters = _a.filters, bias = _a.bias;
      var out = Ac(x, filters, strides, padding);
      out = Ws(out, bias);
      out = scale(out, params.scale);
      return withRelu ? xl(out) : out;
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
          return Ke(function () { return Cl(Nn(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]); });
      }
      function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
          var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
          var bias = An(extractWeights(numFilters));
          paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
          return { filters: filters, bias: bias };
      }
      function extractScaleLayerParams(numWeights, mappedPrefix) {
          var weights = An(extractWeights(numWeights));
          var biases = An(extractWeights(numWeights));
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
      var fc = Ke(function () { return Cl(Dn(extractWeights(256 * 128), [128, 256]), [1, 0]); });
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
      out = Ws(out, x);
      out = xl(out);
      return out;
  }
  function residualDown(x, params) {
      var out = convDown(x, params.conv1);
      out = convNoRelu(out, params.conv2);
      var pooled = $c(x, 2, 2, 'valid');
      var zeros = Bn(pooled.shape);
      var isPad = pooled.shape[3] !== out.shape[3];
      var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
      if (isAdjustShape) {
          var padShapeX = __spreadArrays(out.shape);
          padShapeX[1] = 1;
          var zerosW = Bn(padShapeX);
          out = zn([out, zerosW], 1);
          var padShapeY = __spreadArrays(out.shape);
          padShapeY[2] = 1;
          var zerosH = Bn(padShapeY);
          out = zn([out, zerosH], 2);
      }
      pooled = isPad ? zn([pooled, zeros], 3) : pooled;
      out = Ws(pooled, out);
      out = xl(out);
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
          return Ke(function () {
              var batchTensor = input.toBatchTensor(150, true).toFloat();
              var meanRgb = [122.782, 117.001, 104.298];
              var normalized = normalize(batchTensor, meanRgb).div(Sn(256));
              var out = convDown(normalized, params.conv32_down);
              out = Xc(out, 3, 2, 'valid');
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
              var fullyConnected = Lc(globalAvg, params.fc);
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
                          faceDescriptorTensors = Ke(function () { return _r(_this.forwardInput(netInput)); });
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
          var filters = Nn(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
          var batch_norm_scale = An(extractWeights(numChannels));
          var batch_norm_offset = An(extractWeights(numChannels));
          var batch_norm_mean = An(extractWeights(numChannels));
          var batch_norm_variance = An(extractWeights(numChannels));
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
          var filters = Nn(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
          var bias = An(extractWeights(channelsOut));
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
      var extra_dim = Tn(extractWeights(5118 * 4), [1, 5118, 4]);
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
      return Ke(function () {
          var out = Ac(x, params.filters, strides, 'same');
          out = Ws(out, params.batch_norm_offset);
          return ju(out, 0, 6);
      });
  }

  var epsilon = 0.0010000000474974513;
  function depthwiseConvLayer(x, params, strides) {
      return Ke(function () {
          var out = Fc(x, params.filters, strides, 'same');
          out = Ds(out, params.batch_norm_mean, params.batch_norm_variance, params.batch_norm_offset, params.batch_norm_scale, epsilon);
          return ju(out, 0, 6);
      });
  }
  function getStridesForLayerIdx(layerIdx) {
      return [2, 4, 6, 12].some(function (idx) { return idx === layerIdx; }) ? [2, 2] : [1, 1];
  }
  function mobileNetV1(x, params) {
      return Ke(function () {
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
      var vec = _r(Cl(x, [1, 0]));
      var sizes = [
          ac(vec[2], vec[0]),
          ac(vec[3], vec[1])
      ];
      var centers = [
          Ws(vec[0], Gs(sizes[0], Sn(2))),
          Ws(vec[1], Gs(sizes[1], Sn(2)))
      ];
      return {
          sizes: sizes,
          centers: centers
      };
  }
  function decodeBoxesLayer(x0, x1) {
      var _a = getCenterCoordinatesAndSizesLayer(x0), sizes = _a.sizes, centers = _a.centers;
      var vec = _r(Cl(x1, [1, 0]));
      var div0_out = Gs(Zs(Qu(Gs(vec[2], Sn(5))), sizes[0]), Sn(2));
      var add0_out = Ws(Zs(Gs(vec[0], Sn(10)), sizes[0]), centers[0]);
      var div1_out = Gs(Zs(Qu(Gs(vec[3], Sn(5))), sizes[1]), Sn(2));
      var add1_out = Ws(Zs(Gs(vec[1], Sn(10)), sizes[1]), centers[1]);
      return Cl(Tr([
          ac(add0_out, div0_out),
          ac(add1_out, div1_out),
          Ws(add0_out, div0_out),
          Ws(add1_out, div1_out)
      ]), [1, 0]);
  }
  function outputLayer(boxPredictions, classPredictions, params) {
      return Ke(function () {
          var batchSize = boxPredictions.shape[0];
          var boxes = decodeBoxesLayer(Sr(Nr(params.extra_dim, [batchSize, 1, 1]), [-1, 4]), Sr(boxPredictions, [-1, 4]));
          boxes = Sr(boxes, [batchSize, (boxes.shape[0] / batchSize), 4]);
          var scoresAndClasses = us(Zc(classPredictions, [0, 0, 1], [-1, -1, -1]));
          var scores = Zc(scoresAndClasses, [0, 0, 0], [-1, -1, 1]);
          scores = Sr(scores, [batchSize, scores.shape[1]]);
          var boxesByBatch = _r(boxes);
          var scoresByBatch = _r(scores);
          return {
              boxes: boxesByBatch,
              scores: scoresByBatch
          };
      });
  }

  function boxPredictionLayer(x, params) {
      return Ke(function () {
          var batchSize = x.shape[0];
          var boxPredictionEncoding = Sr(convLayer(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
          var classPrediction = Sr(convLayer(x, params.class_predictor), [batchSize, -1, 3]);
          return {
              boxPredictionEncoding: boxPredictionEncoding,
              classPrediction: classPrediction
          };
      });
  }

  function predictionLayer(x, conv11, params) {
      return Ke(function () {
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
          var boxPredictions = zn([
              boxPrediction0.boxPredictionEncoding,
              boxPrediction1.boxPredictionEncoding,
              boxPrediction2.boxPredictionEncoding,
              boxPrediction3.boxPredictionEncoding,
              boxPrediction4.boxPredictionEncoding,
              boxPrediction5.boxPredictionEncoding
          ], 1);
          var classPredictions = zn([
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
          return Ke(function () {
              var batchTensor = input.toBatchTensor(512, false).toFloat();
              var x = ac(Zs(batchTensor, Sn(0.007843137718737125)), Sn(1));
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
      return Ke(function () {
          var min = Zs(x, Sn(0.10000000149011612));
          return Ws(xl(ac(x, min)), min);
          //return tf.maximum(x, min)
      });
  }

  function convWithBatchNorm(x, params) {
      return Ke(function () {
          var out = yr(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
          out = Ac(out, params.conv.filters, [1, 1], 'valid');
          out = ac(out, params.bn.sub);
          out = Zs(out, params.bn.truediv);
          out = Ws(out, params.conv.bias);
          return leaky(out);
      });
  }

  function depthwiseSeparableConv$1(x, params) {
      return Ke(function () {
          var out = yr(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
          out = Mc(out, params.depthwise_filter, params.pointwise_filter, [1, 1], 'valid');
          out = Ws(out, params.bias);
          return leaky(out);
      });
  }

  function extractorsFactory$6(extractWeights, paramMappings) {
      var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
      function extractBatchNormParams(size, mappedPrefix) {
          var sub = An(extractWeights(size));
          var truediv = An(extractWeights(size));
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
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv1);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv2);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv3);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv4);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = convWithBatchNorm(out, params.conv5);
          out = Xc(out, [2, 2], [1, 1], 'same');
          out = convWithBatchNorm(out, params.conv6);
          out = convWithBatchNorm(out, params.conv7);
          return convLayer(out, params.conv8, 'valid', false);
      };
      TinyYolov2Base.prototype.runMobilenet = function (x, params) {
          var out = this.config.isFirstLayerConv2d
              ? leaky(convLayer(x, params.conv0, 'valid', false))
              : depthwiseSeparableConv$1(x, params.conv0);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv1);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv2);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv3);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv4);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = depthwiseSeparableConv$1(out, params.conv5);
          out = Xc(out, [2, 2], [1, 1], 'same');
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
          return Ke(function () {
              var batchTensor = input.toBatchTensor(inputSize, false).toFloat();
              batchTensor = _this.config.meanRgb
                  ? normalize(batchTensor, _this.config.meanRgb)
                  : batchTensor;
              batchTensor = batchTensor.div(Sn(256));
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
                          out0 = Ke(function () { return _r(out)[0].expandDims(); });
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
                          _a = Ke(function () {
                              var reshaped = outputTensor.reshape([numCells, numCells, numBoxes, _this.boxEncodingSize]);
                              var boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, numBoxes, 4]);
                              var scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, numBoxes, 1]);
                              var classScores = _this.withClassScores
                                  ? io(reshaped.slice([0, 0, 0, 5], [numCells, numCells, numBoxes, _this.config.classes.length]), 3)
                                  : Sn(0);
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
                      if (!(input instanceof dt)) return [3 /*break*/, 2];
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
                      faces.forEach(function (f) { return f instanceof dt && f.dispose(); });
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
      return Ke(function () { return Tr(_r(tensor, 3).reverse(), 3); });
  }

  var CELL_STRIDE = 2;
  var CELL_SIZE = 12;

  function extractorsFactory$8(extractWeights, paramMappings) {
      var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
      var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
      function extractPReluParams(size, paramPath) {
          var alpha = An(extractWeights(size));
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
      return Ke(function () { return Zs(ac(x, Sn(127.5)), Sn(0.0078125)); });
  }

  function prelu(x, alpha) {
      return Ke(function () {
          return Ws(xl(x), Zs(alpha, rs(xl(rs(x)))));
      });
  }

  function sharedLayer(x, params, isPnet) {
      if (isPnet === void 0) { isPnet = false; }
      return Ke(function () {
          var out = convLayer(x, params.conv1, 'valid');
          out = prelu(out, params.prelu1_alpha);
          out = Xc(out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
          out = convLayer(out, params.conv2, 'valid');
          out = prelu(out, params.prelu2_alpha);
          out = isPnet ? out : Xc(out, [3, 3], [2, 2], 'valid');
          out = convLayer(out, params.conv3, 'valid');
          out = prelu(out, params.prelu3_alpha);
          return out;
      });
  }

  function PNet(x, params) {
      return Ke(function () {
          var out = sharedLayer(x, params, true);
          var conv = convLayer(out, params.conv4_1, 'valid');
          var max = dr(ll(conv, 3), 3);
          var prob = io(ac(conv, max), 3);
          var regions = convLayer(out, params.conv4_2, 'valid');
          return { prob: prob, regions: regions };
      });
  }

  function rescaleAndNormalize(x, scale) {
      return Ke(function () {
          var _a = getSizesForScale(scale, x.shape.slice(1)), height = _a.height, width = _a.width;
          var resized = vh.resizeBilinear(x, [height, width]);
          var normalized = normalize$1(resized);
          return Cl(normalized, [0, 2, 1, 3]);
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
      var pnetOutputs = scales.map(function (scale) { return Ke(function () {
          var statsForScale = { scale: scale };
          var resized = rescaleAndNormalize(imgTensor, scale);
          var ts = Date.now();
          var _a = PNet(resized, params), prob = _a.prob, regions = _a.regions;
          statsForScale.pnet = Date.now() - ts;
          var scoresTensor = _r(_r(prob, 3)[1])[0];
          var regionsTensor = _r(regions)[0];
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
                              var t = Ke(function () {
                                  var imagePatchTensor = Cl(Nn(data, [1, width, height, 3]), [0, 2, 1, 3]).toFloat();
                                  return normalize$1(imagePatchTensor);
                              });
                              return t;
                          })];
              }
          });
      });
  }

  function RNet(x, params) {
      return Ke(function () {
          var convOut = sharedLayer(x, params);
          var vectorized = Sr(convOut, [convOut.shape[0], params.fc1.weights.shape[0]]);
          var fc1 = fullyConnectedLayer(vectorized, params.fc1);
          var prelu4 = prelu(fc1, params.prelu4_alpha);
          var fc2_1 = fullyConnectedLayer(prelu4, params.fc2_1);
          var max = dr(ll(fc2_1, 1), 1);
          var prob = io(ac(fc2_1, max), 1);
          var regions = fullyConnectedLayer(prelu4, params.fc2_2);
          var scores = _r(prob, 1)[1];
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
                          ? zn(rnetOuts.map(function (out) { return out.scores; }))
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
      return Ke(function () {
          var out = sharedLayer(x, params);
          out = Xc(out, [2, 2], [2, 2], 'same');
          out = convLayer(out, params.conv4, 'valid');
          out = prelu(out, params.prelu4_alpha);
          var vectorized = Sr(out, [out.shape[0], params.fc1.weights.shape[0]]);
          var fc1 = fullyConnectedLayer(vectorized, params.fc1);
          var prelu5 = prelu(fc1, params.prelu5_alpha);
          var fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1);
          var max = dr(ll(fc2_1, 1), 1);
          var prob = io(ac(fc2_1, max), 1);
          var regions = fullyConnectedLayer(prelu5, params.fc2_2);
          var points = fullyConnectedLayer(prelu5, params.fc2_3);
          var scores = _r(prob, 1)[1];
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
                          ? zn(onetOuts.map(function (out) { return out.scores; }))
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
                          imgTensor = Ke(function () {
                              return bgrToRgbTensor(dr(Mf.fromPixels(inputCanvas)).toFloat());
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
                          if (!(this.input instanceof dt)) return [3 /*break*/, 3];
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
                          faces.forEach(function (f) { return f instanceof dt && f.dispose(); });
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
                          if (!(this.input instanceof dt)) return [3 /*break*/, 3];
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
                          faces.forEach(function (f) { return f instanceof dt && f.dispose(); });
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

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.faceapi = global.faceapi || {})));
}(this, (function (exports) { 'use strict';

    /**
     * @license
     * Copyright 2018 Google LLC. All Rights Reserved.
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
    var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);};function __extends(e,t){function n(){this.constructor=e;}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}var __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function __awaiter(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{u(r.next(e));}catch(e){a(e);}}function s(e){try{u(r.throw(e));}catch(e){a(e);}}function u(e){e.done?o(e.value):new n(function(t){t(e.value);}).then(i,s);}u((r=r.apply(e,t||[])).next());})}function __generator(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i);}catch(e){a=[6,e],r=0;}finally{n=o=0;}if(5&a[0])throw a[1];return {value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function isMobile(){var e=navigator.userAgent||navigator.vendor||window.opera;return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}function shuffle(e){for(var t=e.length,n=0,r=0;t>0;)r=Math.random()*t|0,n=e[--t],e[t]=e[r],e[r]=n;}function clamp(e,t,n){return Math.max(e,Math.min(t,n))}function randUniform(e,t){var n=Math.random();return t*n+(1-n)*e}function distSquared(e,t){for(var n=0,r=0;r<e.length;r++){var o=Number(e[r])-Number(t[r]);n+=o*o;}return n}function assert(e,t){if(!e)throw new Error("string"==typeof t?t:t())}function assertShapesMatch(e,t,n){void 0===n&&(n=""),assert(arraysEqual(e,t),n+" Shapes "+e+" and "+t+" must match");}function assertNonNull(e){assert(null!=e,"The input to the tensor constructor must be a non-null value.");}function flatten(e,t){if(void 0===t&&(t=[]),Array.isArray(e))for(var n=0;n<e.length;++n)flatten(e[n],t);else t.push(e);return t}function inferShape(e){var t=e;if(isTypedArray(e))return [e.length];if(!Array.isArray(e))return [];for(var n=[];t instanceof Array;)n.push(t.length),t=t[0];return e instanceof Array&&deepAssertShapeConsistency(e,n,[]),n}function deepAssertShapeConsistency(e,t,n){if(n=n||[],e instanceof Array){assert(t.length>0,function(){return "Element arr["+n.join("][")+"] should be a primitive, but is an array of "+e.length+" elements"}),assert(e.length===t[0],function(){return "Element arr["+n.join("][")+"] should have "+t[0]+" elements, but has "+e.length+" elements"});for(var r=t.slice(1),o=0;o<e.length;++o)deepAssertShapeConsistency(e[o],r,n.concat(o));}else assert(0===t.length,function(){return "Element arr["+n.join("][")+"] is a primitive, but should be an array of "+t[0]+" elements"});}function sizeFromShape(e){if(0===e.length)return 1;for(var t=e[0],n=1;n<e.length;n++)t*=e[n];return t}function isScalarShape(e){return 0===e.length}function arraysEqual(e,t){if(e.length!==t.length)return !1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return !1;return !0}function isInt(e){return e%1==0}function tanh(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return -1;var t=Math.exp(2*e);return (t-1)/(t+1)}function sizeToSquarishShape(e){for(var t=Math.floor(Math.sqrt(e));t>1;--t)if(e%t==0)return [t,e/t];return [1,e]}function createShuffledIndices(e){for(var t=new Uint32Array(e),n=0;n<e;++n)t[n]=n;return shuffle(t),t}function rightPad(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function repeatedTry(e,t,n){return void 0===t&&(t=function(e){return 0}),new Promise(function(r,o){var a=0,i=function(){if(e())r();else{var s=t(++a);null!=n&&a>=n?o():setTimeout(i,s);}};i();})}function inferFromImplicitShape(e,t){for(var n=1,r=-1,o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(-1===e[o]){if(-1!==r)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o;}else if(e[o]<0)throw Error("Shapes can not be < 0. Found "+e[o]+" at dim "+o);if(-1===r){if(t>0&&t!==n)throw Error("Size("+t+") must match the product of shape "+e);return e}if(0===n)throw Error("Cannot infer the missing size in ["+e+"] when there are 0 elements");if(t%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+n);var a=e.slice();return a[r]=t/n,a}function squeezeShape(e,t){for(var n=[],r=[],o=0,a=0;a<e.length;++a){if(null!=t){if(t[o]===a&&1!==e[a])throw new Error("Can't squeeze axis "+a+" since its dim '"+e[a]+"' is not 1");(null==t[o]||t[o]>a)&&1===e[a]&&(n.push(e[a]),r.push(a)),t[o]<=a&&o++;}1!==e[a]&&(n.push(e[a]),r.push(a));}return {newShape:n,keptDims:r}}function getTypedArrayFromDType(e,t){var n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else{if("bool"!==e)throw new Error("Unknown data type "+e);n=new Uint8Array(t);}return n}function checkComputationForNaN(e,t,n){if("float32"===t)for(var r=0;r<e.length;r++)if(isNaN(e[r]))throw Error("The result of the '"+n+"' has NaNs.")}function checkConversionForNaN(e,t){if("float32"!==t)for(var n=0;n<e.length;n++)if(isNaN(e[n]))throw Error("NaN is not a valid value for dtype: '"+t+"'.")}function hasEncodingLoss(e,t){return "complex64"!==t&&(("float32"!==t||"complex64"===e)&&(("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)))}function copyTypedArray(e,t,n){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return n&&checkConversionForNaN(e,t),new Int32Array(e);if("bool"===t){for(var r=new Uint8Array(e.length),o=0;o<r.length;++o)0!==Math.round(e[o])&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function isTypedArray(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function bytesPerElement(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw new Error("Unknown dtype "+e)}function isFunction(e){return !!(e&&e.constructor&&e.call&&e.apply)}function nearestDivisor(e,t){for(var n=t;n<e;++n)if(e%n==0)return n;return e}function computeStrides(e){var t=e.length;if(t<2)return [];var n=new Array(t-1);n[t-2]=e[t-1];for(var r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function toTypedArray(e,t,n){return noConversionNeeded(e,t)?e:(Array.isArray(e)&&(e=flatten(e)),copyTypedArray(e,t,n))}function noConversionNeeded(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}function makeOnesTypedArray(e,t){for(var n=makeZerosTypedArray(e,t),r=0;r<n.length;r++)n[r]=1;return n}function makeZerosTypedArray(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error("Unknown data type "+t)}function now(){if("undefined"!=typeof performance)return performance.now();if("undefined"!=typeof process){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}throw new Error("Cannot measure time in this environment. You should run tf.js in the browser or in Node.js")}var util=Object.freeze({shuffle:shuffle,clamp:clamp,randUniform:randUniform,distSquared:distSquared,assert:assert,assertShapesMatch:assertShapesMatch,assertNonNull:assertNonNull,flatten:flatten,inferShape:inferShape,sizeFromShape:sizeFromShape,isScalarShape:isScalarShape,arraysEqual:arraysEqual,isInt:isInt,tanh:tanh,sizeToSquarishShape:sizeToSquarishShape,createShuffledIndices:createShuffledIndices,rightPad:rightPad,repeatedTry:repeatedTry,inferFromImplicitShape:inferFromImplicitShape,squeezeShape:squeezeShape,getTypedArrayFromDType:getTypedArrayFromDType,checkComputationForNaN:checkComputationForNaN,checkConversionForNaN:checkConversionForNaN,hasEncodingLoss:hasEncodingLoss,isTypedArray:isTypedArray,bytesPerElement:bytesPerElement,isFunction:isFunction,nearestDivisor:nearestDivisor,computeStrides:computeStrides,toTypedArray:toTypedArray,makeOnesTypedArray:makeOnesTypedArray,makeZerosTypedArray:makeZerosTypedArray,now:now}),Profiler=function(){function e(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new Logger);}return e.prototype.profileKernel=function(e,t){var n,r=this,o=this.backendTimer.time(function(){n=t();});return (Array.isArray(n)?n:[n]).forEach(function(t){var n=t.dataSync();checkComputationForNaN(n,t.dtype,e),o.then(function(o){r.logger.logKernelProfile(e,t,n,o.kernelMs);});}),n},e}(),Logger=function(){function e(){}return e.prototype.logKernelProfile=function(e,t,n,r){var o=rightPad(r+"ms",9),a=rightPad(e,25),i=t.rank,s=t.size,u=rightPad(t.shape.toString(),14);console.log("%c"+a+"\t%c"+o+"\t%c"+i+"D "+u+"\t%c"+s,"font-weight:bold","color:red","color:blue","color: orange");},e}(),FORMAT_LIMIT_NUM_VALS=20,FORMAT_NUM_FIRST_LAST_VALS=3,FORMAT_NUM_SIG_DIGITS=7;function tensorToString(e,t,n,r){var o=computeStrides(t),a=computeMaxSizePerColumn(e,t,n,o),i=t.length,s=subTensorToString(e,t,n,o,a),u=["Tensor"];return r&&(u.push("  dtype: "+n),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(e){return "    "+e}).join("\n")),u.join("\n")}function computeMaxSizePerColumn(e,t,n,r){var o=sizeFromShape(t),a=r[r.length-1],i=new Array(a).fill(0),s=t.length,u="complex64"===n?createComplexTuples(e):e;if(s>1)for(var l=0;l<o/a;l++)for(var c=l*a,p=0;p<a;p++)i[p]=Math.max(i[p],valToString(u[c+p],0).length);return i}function valToString(e,t){return rightPad(Array.isArray(e)?parseFloat(e[0].toFixed(FORMAT_NUM_SIG_DIGITS))+" + "+parseFloat(e[1].toFixed(FORMAT_NUM_SIG_DIGITS))+"j":parseFloat(e.toFixed(FORMAT_NUM_SIG_DIGITS)).toString(),t)}function subTensorToString(e,t,n,r,o,a){void 0===a&&(a=!0);var i="complex64"===n?2:1,s=t[0],u=t.length;if(0===u)return "complex64"===n?[valToString(createComplexTuples(e)[0],0)]:[e[0].toString()];if(1===u){if(s>FORMAT_LIMIT_NUM_VALS){var l=FORMAT_NUM_FIRST_LAST_VALS*i,c=Array.from(e.subarray(0,l)),p=Array.from(e.subarray(s-FORMAT_NUM_FIRST_LAST_VALS*i,s));return "complex64"===n&&(c=createComplexTuples(c),p=createComplexTuples(p)),["["+c.map(function(e,t){return valToString(e,o[t])}).join(", ")+", ..., "+p.map(function(e,t){return valToString(e,o[s-FORMAT_NUM_FIRST_LAST_VALS+t])}).join(", ")+"]"]}return ["["+("complex64"===n?createComplexTuples(e):Array.from(e)).map(function(e,t){return valToString(e,o[t])}).join(", ")+"]"]}var d=t.slice(1),h=r.slice(1),f=r[0]*i,m=[];if(s>FORMAT_LIMIT_NUM_VALS){for(var g=0;g<FORMAT_NUM_FIRST_LAST_VALS;g++){var v=(y=g*f)+f;m.push.apply(m,subTensorToString(e.subarray(y,v),d,n,h,o,!1));}m.push("...");for(g=s-FORMAT_NUM_FIRST_LAST_VALS;g<s;g++){v=(y=g*f)+f;m.push.apply(m,subTensorToString(e.subarray(y,v),d,n,h,o,g===s-1));}}else for(g=0;g<s;g++){var y;v=(y=g*f)+f;m.push.apply(m,subTensorToString(e.subarray(y,v),d,n,h,o,g===s-1));}var x=2===u?",":"";m[0]="["+m[0]+x;for(g=1;g<m.length-1;g++)m[g]=" "+m[g]+x;var T=",\n";for(g=2;g<u;g++)T+="\n";return m[m.length-1]=" "+m[m.length-1]+"]"+(a?"":T),m}function createComplexTuples(e){for(var t=[],n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var TensorBuffer=function(){function e(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=sizeFromShape(e),null!=n){var r=n.length;assert(r===this.size,"Length of values '"+r+"' does not match the size inferred by the shape '"+this.size+"'.");}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||getTypedArrayFromDType(t,sizeFromShape(this.shape)),this.strides=computeStrides(e);}return e.prototype.set=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];0===t.length&&(t=[0]),assert(t.length===this.rank,"The number of provided coordinates ("+t.length+") must match the rank ("+this.rank+")");var r=this.locToIndex(t);this.values[r]=e;},e.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];0===e.length&&(e=[0]);for(var n=e[e.length-1],r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return this.values[n]},e.prototype.locToIndex=function(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];for(var t=e[e.length-1],n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t},e.prototype.indexToLoc=function(e){if(0===this.rank)return [];if(1===this.rank)return [e];for(var t=new Array(this.shape.length),n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.toTensor=function(){return Tensor.make(this.shape,{values:this.values},this.dtype)},e}(),trackerFn=null,opHandler=null;function setTensorTracker(e){trackerFn=e;}function setOpHandler(e){opHandler=e;}var Tensor=function(){function e(t,n,r,o){this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=sizeFromShape(t),null!=r&&assert(this.size===r.length,"Based on the provided shape, ["+t+"], and dtype "+this.dtype+", the tensor should have "+this.size+" values but has "+r.length),this.strides=computeStrides(t),this.dataId=null!=o?o:{},this.id=e.nextId++,this.rankType=this.rank<5?this.rank.toString():"higher",trackerFn().registerTensor(this),null!=r&&trackerFn().write(this.dataId,r);}return e.make=function(t,n,r){return new e(t,r,n.values,n.dataId)},e.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},e.prototype.asScalar=function(){return this.throwIfDisposed(),assert(1===this.size,"The array must have only 1 element."),this.reshape([])},e.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},e.prototype.as2D=function(e,t){return this.throwIfDisposed(),this.reshape([e,t])},e.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),this.reshape([e,t,n])},e.prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),this.reshape([e,t,n,r])},e.prototype.asType=function(e){return this.throwIfDisposed(),opHandler.cast(this,e)},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];assert(e.length===this.rank,"Number of coordinates in get() must match the rank of the tensor"),assert("complex64"!==this.dtype,"Tensor.get() is not supported for complex64 tensors yet."),this.throwIfDisposed(),0===e.length&&(e=[0]);for(var n=e[e.length-1],r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return this.dataSync()[n]},e.prototype.buffer=function(){return opHandler.buffer(this.shape,this.dtype,this.dataSync())},e.prototype.data=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this.throwIfDisposed(),[2,trackerFn().read(this.dataId)]})})},e.prototype.dataSync=function(){return this.throwIfDisposed(),trackerFn().readSync(this.dataId)},e.prototype.dispose=function(){this.isDisposed||(trackerFn().disposeTensor(this),this.isDisposedInternal=!0);},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),e.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},e.prototype.toFloat=function(){return this.asType("float32")},e.prototype.toInt=function(){return this.asType("int32")},e.prototype.toBool=function(){return this.asType("bool")},e.prototype.print=function(e){return void 0===e&&(e=!1),opHandler.print(this,e)},e.prototype.reshape=function(e){return this.throwIfDisposed(),opHandler.reshape(this,e)},e.prototype.reshapeAs=function(e){return this.throwIfDisposed(),this.reshape(e.shape)},e.prototype.expandDims=function(e){return void 0===e&&(e=0),opHandler.expandDims(this,e)},e.prototype.cumsum=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=!1),void 0===n&&(n=!1),opHandler.cumsum(this,e,t,n)},e.prototype.squeeze=function(e){return this.throwIfDisposed(),opHandler.squeeze(this,e)},e.prototype.clone=function(){return this.throwIfDisposed(),opHandler.clone(this)},e.prototype.toString=function(e){return void 0===e&&(e=!1),tensorToString(this.dataSync(),this.shape,this.dtype,e)},e.prototype.tile=function(e){return this.throwIfDisposed(),opHandler.tile(this,e)},e.prototype.gather=function(e,t){return void 0===t&&(t=0),this.throwIfDisposed(),opHandler.gather(this,e,t)},e.prototype.matMul=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=!1),this.throwIfDisposed(),opHandler.matMul(this,e,t,n)},e.prototype.dot=function(e){return this.throwIfDisposed(),opHandler.dot(this,e)},e.prototype.norm=function(e,t,n){return void 0===e&&(e="euclidean"),void 0===t&&(t=null),void 0===n&&(n=!1),this.throwIfDisposed(),opHandler.norm(this,e,t,n)},e.prototype.slice=function(e,t){return this.throwIfDisposed(),opHandler.slice(this,e,t)},e.prototype.reverse=function(e){return this.throwIfDisposed(),opHandler.reverse(this,e)},e.prototype.concat=function(e,t){return void 0===t&&(t=0),this.throwIfDisposed(),opHandler.concat([this,e],t)},e.prototype.split=function(e,t){return void 0===t&&(t=0),this.throwIfDisposed(),opHandler.split(this,e,t)},e.prototype.stack=function(e,t){return void 0===t&&(t=0),opHandler.stack([this,e],t)},e.prototype.unstack=function(e,t){return void 0===t&&(t=0),opHandler.unstack(this,t)},e.prototype.pad=function(e,t){return void 0===t&&(t=0),opHandler.pad(this,e,t)},e.prototype.batchNormalization=function(e,t,n,r,o){return void 0===n&&(n=.001),this.throwIfDisposed(),opHandler.batchNormalization(this,e,t,n,r,o)},e.prototype.all=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.all(this,e,t)},e.prototype.any=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.any(this,e,t)},e.prototype.logSumExp=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.logSumExp(this,e,t)},e.prototype.sum=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.sum(this,e,t)},e.prototype.mean=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.mean(this,e,t)},e.prototype.min=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.min(this,e,t)},e.prototype.max=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.max(this,e,t)},e.prototype.argMin=function(e){return void 0===e&&(e=null),this.throwIfDisposed(),opHandler.argMin(this,e)},e.prototype.argMax=function(e){return void 0===e&&(e=null),this.throwIfDisposed(),opHandler.argMax(this,e)},e.prototype.cast=function(e){return this.throwIfDisposed(),opHandler.cast(this,e)},e.prototype.add=function(e){return this.throwIfDisposed(),opHandler.add(this,e)},e.prototype.addStrict=function(e){return this.throwIfDisposed(),opHandler.addStrict(this,e)},e.prototype.atan2=function(e){return this.throwIfDisposed(),opHandler.atan2(this,e)},e.prototype.sub=function(e){return this.throwIfDisposed(),opHandler.sub(this,e)},e.prototype.subStrict=function(e){return this.throwIfDisposed(),opHandler.subStrict(this,e)},e.prototype.pow=function(e){return this.throwIfDisposed(),opHandler.pow(this,e)},e.prototype.powStrict=function(e){return this.throwIfDisposed(),opHandler.powStrict(this,e)},e.prototype.mul=function(e){return this.throwIfDisposed(),opHandler.mul(this,e)},e.prototype.mulStrict=function(e){return this.throwIfDisposed(),opHandler.mulStrict(this,e)},e.prototype.div=function(e){return this.throwIfDisposed(),opHandler.div(this,e)},e.prototype.floorDiv=function(e){return this.throwIfDisposed(),opHandler.floorDiv(this,e)},e.prototype.divStrict=function(e){return this.throwIfDisposed(),opHandler.divStrict(this,e)},e.prototype.minimum=function(e){return this.throwIfDisposed(),opHandler.minimum(this,e)},e.prototype.minimumStrict=function(e){return this.throwIfDisposed(),opHandler.minimumStrict(this,e)},e.prototype.maximum=function(e){return this.throwIfDisposed(),opHandler.maximum(this,e)},e.prototype.maximumStrict=function(e){return this.throwIfDisposed(),opHandler.maximumStrict(this,e)},e.prototype.mod=function(e){return this.throwIfDisposed(),opHandler.mod(this,e)},e.prototype.modStrict=function(e){return this.throwIfDisposed(),opHandler.modStrict(this,e)},e.prototype.squaredDifference=function(e){return this.throwIfDisposed(),opHandler.squaredDifference(this,e)},e.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),opHandler.squaredDifferenceStrict(this,e)},e.prototype.transpose=function(e){return this.throwIfDisposed(),opHandler.transpose(this,e)},e.prototype.notEqual=function(e){return this.throwIfDisposed(),opHandler.notEqual(this,e)},e.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),opHandler.notEqualStrict(this,e)},e.prototype.less=function(e){return this.throwIfDisposed(),opHandler.less(this,e)},e.prototype.lessStrict=function(e){return this.throwIfDisposed(),opHandler.lessStrict(this,e)},e.prototype.equal=function(e){return this.throwIfDisposed(),opHandler.equal(this,e)},e.prototype.equalStrict=function(e){return this.throwIfDisposed(),opHandler.equalStrict(this,e)},e.prototype.lessEqual=function(e){return this.throwIfDisposed(),opHandler.lessEqual(this,e)},e.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),opHandler.lessEqualStrict(this,e)},e.prototype.greater=function(e){return this.throwIfDisposed(),opHandler.greater(this,e)},e.prototype.greaterStrict=function(e){return this.throwIfDisposed(),opHandler.greaterStrict(this,e)},e.prototype.greaterEqual=function(e){return this.throwIfDisposed(),opHandler.greaterEqual(this,e)},e.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),opHandler.greaterEqualStrict(this,e)},e.prototype.logicalAnd=function(e){return this.throwIfDisposed(),opHandler.logicalAnd(this,e)},e.prototype.logicalOr=function(e){return this.throwIfDisposed(),opHandler.logicalOr(this,e)},e.prototype.logicalNot=function(){return this.throwIfDisposed(),opHandler.logicalNot(this)},e.prototype.logicalXor=function(e){return this.throwIfDisposed(),opHandler.logicalXor(this,e)},e.prototype.where=function(e,t){return this.throwIfDisposed(),opHandler.where(e,this,t)},e.prototype.neg=function(){return this.throwIfDisposed(),opHandler.neg(this)},e.prototype.ceil=function(){return this.throwIfDisposed(),opHandler.ceil(this)},e.prototype.floor=function(){return this.throwIfDisposed(),opHandler.floor(this)},e.prototype.sign=function(){return this.throwIfDisposed(),opHandler.sign(this)},e.prototype.exp=function(){return this.throwIfDisposed(),opHandler.exp(this)},e.prototype.expm1=function(){return this.throwIfDisposed(),opHandler.expm1(this)},e.prototype.log=function(){return this.throwIfDisposed(),opHandler.log(this)},e.prototype.log1p=function(){return this.throwIfDisposed(),opHandler.log1p(this)},e.prototype.sqrt=function(){return this.throwIfDisposed(),opHandler.sqrt(this)},e.prototype.rsqrt=function(){return this.throwIfDisposed(),opHandler.rsqrt(this)},e.prototype.square=function(){return this.throwIfDisposed(),opHandler.square(this)},e.prototype.reciprocal=function(){return this.throwIfDisposed(),opHandler.reciprocal(this)},e.prototype.abs=function(){return this.throwIfDisposed(),opHandler.abs(this)},e.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),opHandler.clipByValue(this,e,t)},e.prototype.relu=function(){return this.throwIfDisposed(),opHandler.relu(this)},e.prototype.elu=function(){return this.throwIfDisposed(),opHandler.elu(this)},e.prototype.selu=function(){return this.throwIfDisposed(),opHandler.selu(this)},e.prototype.leakyRelu=function(e){return void 0===e&&(e=.2),this.throwIfDisposed(),opHandler.leakyRelu(this,e)},e.prototype.prelu=function(e){return this.throwIfDisposed(),opHandler.prelu(this,e)},e.prototype.sigmoid=function(){return this.throwIfDisposed(),opHandler.sigmoid(this)},e.prototype.logSigmoid=function(){return this.throwIfDisposed(),opHandler.logSigmoid(this)},e.prototype.softplus=function(){return this.throwIfDisposed(),opHandler.softplus(this)},e.prototype.zerosLike=function(){return this.throwIfDisposed(),opHandler.zerosLike(this)},e.prototype.onesLike=function(){return this.throwIfDisposed(),opHandler.onesLike(this)},e.prototype.sin=function(){return this.throwIfDisposed(),opHandler.sin(this)},e.prototype.cos=function(){return this.throwIfDisposed(),opHandler.cos(this)},e.prototype.tan=function(){return this.throwIfDisposed(),opHandler.tan(this)},e.prototype.asin=function(){return this.throwIfDisposed(),opHandler.asin(this)},e.prototype.acos=function(){return this.throwIfDisposed(),opHandler.acos(this)},e.prototype.atan=function(){return this.throwIfDisposed(),opHandler.atan(this)},e.prototype.sinh=function(){return this.throwIfDisposed(),opHandler.sinh(this)},e.prototype.cosh=function(){return this.throwIfDisposed(),opHandler.cosh(this)},e.prototype.tanh=function(){return this.throwIfDisposed(),opHandler.tanh(this)},e.prototype.asinh=function(){return this.throwIfDisposed(),opHandler.asinh(this)},e.prototype.acosh=function(){return this.throwIfDisposed(),opHandler.acosh(this)},e.prototype.atanh=function(){return this.throwIfDisposed(),opHandler.atanh(this)},e.prototype.erf=function(){return this.throwIfDisposed(),opHandler.erf(this)},e.prototype.round=function(){return this.throwIfDisposed(),opHandler.round(this)},e.prototype.step=function(e){return void 0===e&&(e=0),this.throwIfDisposed(),opHandler.step(this,e)},e.prototype.softmax=function(e){return void 0===e&&(e=-1),this.throwIfDisposed(),opHandler.softmax(this,e)},e.prototype.resizeBilinear=function(e,t){return void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.image.resizeBilinear(this,e,t)},e.prototype.resizeNearestNeighbor=function(e,t){return void 0===t&&(t=!1),this.throwIfDisposed(),opHandler.image.resizeNearestNeighbor(this,e,t)},e.prototype.conv1d=function(e,t,n,r,o,a){return void 0===r&&(r="NWC"),void 0===o&&(o=1),this.throwIfDisposed(),opHandler.conv1d(this,e,t,n,r,o,a)},e.prototype.conv2d=function(e,t,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),opHandler.conv2d(this,e,t,n,r,o,a)},e.prototype.conv2dTranspose=function(e,t,n,r,o){return this.throwIfDisposed(),opHandler.conv2dTranspose(this,e,t,n,r,o)},e.prototype.depthwiseConv2D=function(e,t,n,r,o,a){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),opHandler.depthwiseConv2d(this,e,t,n,r,o,a)},e.prototype.separableConv2d=function(e,t,n,r,o,a){return void 0===o&&(o=[1,1]),void 0===a&&(a="NHWC"),this.throwIfDisposed(),opHandler.separableConv2d(this,e,t,n,r,o,a)},e.prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),opHandler.avgPool(this,e,t,n,r)},e.prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),opHandler.maxPool(this,e,t,n,r)},e.prototype.localResponseNormalization=function(e,t,n,r){return void 0===e&&(e=5),void 0===t&&(t=1),void 0===n&&(n=1),void 0===r&&(r=.5),opHandler.localResponseNormalization(this,e,t,n,r)},e.prototype.variable=function(e,t,n){return void 0===e&&(e=!0),this.throwIfDisposed(),Variable.variable(this,e,t,n)},e.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),opHandler.unsortedSegmentSum(this,e,t)},e.prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),opHandler.batchToSpaceND(this,e,t)},e.prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),opHandler.spaceToBatchND(this,e,t)},e.prototype.topk=function(e,t){return void 0===e&&(e=1),void 0===t&&(t=!0),this.throwIfDisposed(),opHandler.topk(this,e,t)},e.prototype.stridedSlice=function(e,t,n,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),this.throwIfDisposed(),opHandler.stridedSlice(this,e,t,n,r,o)},e.prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),opHandler.depthToSpace(this,e,t)},e.nextId=0,e}();Object.defineProperty(Tensor,Symbol.hasInstance,{value:function(e){return !!e&&null!=e.shape&&null!=e.dtype}});var Variable=function(e){function t(n,r,o){void 0===r&&(r=!0);var a=e.call(this,n.shape,n.dtype,null,n.dataId)||this;a.trainable=r,a.name=o,null==a.name&&(a.name=t.nextVarId.toString(),t.nextVarId++);try{trackerFn().registerVariable(a);}catch(e){throw trackerFn().disposeTensor(a),e}return a}return __extends(t,e),t.variable=function(e,n,r,o){return void 0===n&&(n=!0),null!=o&&o!==e.dtype&&(e=e.asType(o)),new t(e,n,r)},t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!arraysEqual(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");trackerFn().disposeTensor(this),this.dataId=e.dataId,trackerFn().registerTensor(this);},t.nextVarId=0,t}(Tensor);Object.defineProperty(Variable,Symbol.hasInstance,{value:function(e){return e instanceof Tensor&&null!=e.assign&&e.assign instanceof Function}});var variable=Variable.variable;function getFilteredNodesXToY(e,t,n){for(var r={},o={},a=0;a<t.length;a++)r[t[a].id]=!0;for(a=0;a<e.length;a++){var i=(f=e[a]).inputs;for(var s in i){for(var u=i[s],l=!1,c=0;c<t.length;c++)if(r[u.id]){f.outputs.forEach(function(e){return r[e.id]=!0}),l=!0,o[f.id]=!0;break}if(l)break}}var p={};p[n.id]=!0;var d={};for(a=e.length-1;a>=0;a--)for(i=(f=e[a]).inputs,c=0;c<f.outputs.length;c++)if(p[f.outputs[c].id]){for(var s in i)p[i[s].id]=!0,d[f.id]=!0;break}var h=[];for(a=0;a<e.length;a++){var f;if(o[(f=e[a]).id]&&d[f.id]){var m={};for(var s in f.inputs){var g=f.inputs[s];r[g.id]&&(m[s]=g);}var v=Object.assign({},f);v.inputs=m,v.outputs=f.outputs,h.push(v);}}return h}function backpropagateGradients(e,t){for(var n=function(n){var r=t[n],o=[];if(r.outputs.forEach(function(t){var n=e[t.id];if(null!=n)o.push(n);else{var r=Tensor.make(t.shape,{values:makeZerosTypedArray(t.size,t.dtype)},t.dtype);o.push(r);}}),null==r.gradient)throw new Error("Cannot compute gradient: gradient function not found for "+r.name+".");var a=r.gradient(1===r.outputs.length?o[0]:o);for(var i in r.inputs){if(!(i in a))throw new Error("Cannot backprop through input "+i+". Available gradients found: "+Object.keys(a)+".");var s=a[i](),u=r.inputs[i];if(!arraysEqual(s.shape,u.shape))throw new Error("Error in gradient for op "+r.name+". The gradient of input '"+i+"' has shape '"+s.shape+"', which does not match the shape of the input '"+u.shape+"'");if(null==e[u.id])e[u.id]=s;else{var l=e[u.id];e[u.id]=l.add(s),l.dispose();}}},r=t.length-1;r>=0;r--)n(r);}function assertTypesMatch(e,t){assert(e.dtype===t.dtype,"The dtypes of the first("+e.dtype+") and second("+t.dtype+") input must match");}function isTensorInList(e,t){for(var n=0;n<t.length;n++)if(t[n].id===e.id)return !0;return !1}function getTensorsInContainer(e){var t=[];return walkTensorContainer(e,t,new Set),t}function walkTensorContainer(e,t,n){if(null!=e)if(e instanceof Tensor)t.push(e);else if(isIterable(e)){var r=e;for(var o in r){var a=r[o];n.has(a)||(n.add(a),walkTensorContainer(a,t,n));}}}function isIterable(e){return Array.isArray(e)||"object"==typeof e}var Type,Engine=function(){function e(e,t,n){this.backend=e,this.safeMode=t,this.debugMode=n,this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numDataBuffers=0,this.profiling=!1,this.gradientScopeCount=0,this.customGradientDepth=0,this.keepTensors=new Set,this.tensorInfo=new WeakMap,this.activeScope={track:[],name:"default scope"},this.scopeStack=[this.activeScope],this.profiler=new Profiler(e),this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null};}return e.prototype.moveData=function(e){this.write(e,this.readSync(e));},e.prototype.tidy=function(e,t,n){var r=this;void 0===n&&(n=!1);var o,a=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e;}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=e;}return this.scopedRun(function(){return r.startScope(a,n)},function(){return r.endScope(o,n)},function(){return (o=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o})},e.prototype.scopedRun=function(e,t,n){e();try{var r=n();return t(),r}catch(e){throw t(),e}},e.prototype.runKernel=function(e,t,n){var r,o=this,a=[],i=function(e){return a.push(e),e},s=this.activeScope.name,u=this.numBytes,l=this.numTensors;if(this.scopedRun(function(){return o.customGradientDepth++},function(){return o.customGradientDepth--},function(){r=o.debugMode()?o.profiler.profileKernel(s,function(){return e(o.backend,i)}):e(o.backend,i);}),this.shouldRecord()){var c={id:this.nextTapeNodeId++,name:s,inputs:t,outputs:Array.isArray(r)?r:[r]};null!=n&&(c.gradient=function(e){return n(e,a)}),this.activeTape.push(c);}return this.profiling&&this.activeProfile.kernels.push({name:s,bytesAdded:this.numBytes-u,totalBytesSnapshot:this.numBytes,tensorsAdded:this.numTensors-l,totalTensorsSnapshot:this.numTensors,inputShapes:Object.keys(t).map(function(e){return t[e].shape}),outputShape:Array.isArray(r)?r.map(function(e){return e.shape}):r.shape}),r},e.prototype.registerTensor=function(e){var t=this.tensorInfo.has(e.dataId)?this.tensorInfo.get(e.dataId).refCount:0;this.numTensors++,0===t&&(this.numDataBuffers++,"complex64"!==e.dtype&&(this.numBytes+=sizeFromShape(e.shape)*bytesPerElement(e.dtype)),this.tensorInfo.set(e.dataId,{backend:this.backend,dtype:e.dtype,shape:e.shape,refCount:0}),this.backend.register(e.dataId,e.shape,e.dtype)),this.tensorInfo.get(e.dataId).refCount++,e instanceof Variable||this.track(e);},e.prototype.registerVariable=function(e){if(null!=this.registeredVariables[e.name])throw new Error("Variable with name "+e.name+" was already registered");this.registeredVariables[e.name]=e;},e.prototype.disposeTensor=function(e){this.tensorInfo.has(e.dataId)&&(this.keepTensors.has(e.id)&&this.keepTensors.delete(e.id),this.numTensors--,this.tensorInfo.get(e.dataId).refCount<=1?(this.tensorInfo.get(e.dataId).backend.disposeData(e.dataId),this.numDataBuffers--,"complex64"!==e.dtype&&(this.numBytes-=sizeFromShape(e.shape)*bytesPerElement(e.dtype)),this.tensorInfo.delete(e.dataId)):this.tensorInfo.get(e.dataId).refCount--);},e.prototype.disposeVariables=function(){for(var e in this.registeredVariables){var t=this.registeredVariables[e];this.disposeTensor(t),delete this.registeredVariables[e];}},e.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.numTensors,e.numDataBuffers=this.numDataBuffers,e.numBytes=this.numBytes,e},e.prototype.profile=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){return this.profiling=!0,t=this.numBytes,n=this.numTensors,this.activeProfile.kernels=[],this.activeProfile.result=e(),this.profiling=!1,this.activeProfile.peakBytes=Math.max.apply(Math,this.activeProfile.kernels.map(function(e){return e.totalBytesSnapshot})),this.activeProfile.newBytes=this.numBytes-t,this.activeProfile.newTensors=this.numTensors-n,[2,this.activeProfile]})})},e.prototype.shouldRecord=function(){return null!=this.activeTape&&0===this.customGradientDepth},e.prototype.addTapeNode=function(e,t,n){var r={};e.forEach(function(e,t){r[t]=e;});var o={id:this.nextTapeNodeId++,name:this.activeScope.name,inputs:r,outputs:[t],gradient:function(e){var t={};return n(e).forEach(function(e,n){t[n]=function(){return e};}),t}};this.activeTape.push(o);},e.prototype.keep=function(e){if(1===this.scopeStack.length&&this.safeMode)throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {...}) to avoid memory leaks.");return this.keepTensors.add(e.id),e},e.prototype.startScope=function(e,t){void 0===t&&(t=!1),t&&0===this.gradientScopeCount&&(this.activeTape=[]),t&&this.gradientScopeCount++;var n={track:[],name:"unnamed scope"};e&&(n.name=e),this.scopeStack.push(n),this.activeScope=n;},e.prototype.endScope=function(e,t){var n=this;void 0===t&&(t=!1),t&&(this.gradientScopeCount--,0===this.gradientScopeCount&&(this.activeTape=null));var r=new Set(this.keepTensors),o=getTensorsInContainer(e);o.forEach(function(e){return r.add(e.id)});for(var a=0;a<this.activeScope.track.length;a++){var i=this.activeScope.track[a];r.has(i.id)||(null!=this.activeTape?o.push(i):i.dispose());}var s=this.scopeStack.pop();this.activeScope=0===this.scopeStack.length?{track:[],name:"default scope"}:this.scopeStack[this.scopeStack.length-1],o.forEach(function(e){!n.keepTensors.has(e.id)&&isTensorInList(e,s.track)&&n.track(e);});},e.prototype.gradients=function(e,t,n,r){var o=this;return void 0===r&&(r=!1),assert(t.length>0,"gradients() received an empty list of xs."),this.tidy("gradients",function(){var a=e();assert(a instanceof Tensor,"The result y returned by f() must be a tensor.");var i=getFilteredNodesXToY(o.activeTape,t,a);if(!r&&0===i.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");var s={};return s[a.id]=null==n?ones(a.shape):n,backpropagateGradients(s,i),{value:a,grads:t.map(function(e){return s[e.id]})}},!0)},e.prototype.customGrad=function(e){var t=this;return assert(isFunction(e),"The f passed in customGrad(f) must be a function."),function(){for(var n,r,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(assert(o.every(function(e){return e instanceof Tensor}),"The args passed in customGrad(f)(x1, x2,...) must all be tensors"),t.scopedRun(function(){return t.customGradientDepth++},function(){return t.customGradientDepth--},function(){r=t.tidy(e.name,function(){var t=e.apply(void 0,o),r=t.value,a=t.gradFunc;return assert(r instanceof Tensor,"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),assert(isFunction(a),"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n=a,r},!0);}),t.shouldRecord()){t.addTapeNode(o,r,function(e){var t=n(e),r=Array.isArray(t)?t:[t];return assert(r.length===o.length,"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),assert(r.every(function(e){return e instanceof Tensor}),"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."),r});}return r}},e.prototype.write=function(e,t){var n=this.tensorInfo.get(e);this.backend!==n.backend&&(n.backend.disposeData(e),n.backend=this.backend,this.backend.register(e,n.shape,n.dtype)),this.backend.write(e,t);},e.prototype.readSync=function(e){return this.tensorInfo.get(e).backend.readSync(e)},e.prototype.read=function(e){return this.tensorInfo.get(e).backend.read(e)},e.prototype.fromPixels=function(e,t){return this.backend.fromPixels(e,t)},e.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=now(),[4,this.backend.time(e)];case 1:return (n=r.sent()).wallMs=now()-t,[2,n]}})})},e.prototype.track=function(e){if(1===this.scopeStack.length&&this.safeMode)throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {op();...}); to avoid memory leaks.");return this.activeScope.track.push(e),e},e}();function ones(e){var t=makeOnesTypedArray(sizeFromShape(e),"float32");return Tensor.make(e,{values:t})}!function(e){e[e.NUMBER=0]="NUMBER",e[e.BOOLEAN=1]="BOOLEAN",e[e.STRING=2]="STRING";}(Type||(Type={}));var URL_PROPERTIES=[{name:"DEBUG",type:Type.BOOLEAN},{name:"IS_BROWSER",type:Type.BOOLEAN},{name:"WEBGL_PAGING_ENABLED",type:Type.BOOLEAN},{name:"WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",type:Type.NUMBER},{name:"WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",type:Type.BOOLEAN},{name:"WEBGL_VERSION",type:Type.NUMBER},{name:"WEBGL_RENDER_FLOAT32_ENABLED",type:Type.BOOLEAN},{name:"WEBGL_DOWNLOAD_FLOAT_ENABLED",type:Type.BOOLEAN},{name:"WEBGL_FENCE_API_ENABLED",type:Type.BOOLEAN},{name:"BACKEND",type:Type.STRING},{name:"EPSILON",type:Type.NUMBER}];function isWebGLVersionEnabled(e,t){var n;try{n=getWebGLRenderingContext(e,t);}catch(e){return !1}return null!=n&&(loseContext(n),!0)}function getWebGLDisjointQueryTimerVersion(e,t){if(0===e)return 0;var n,r=getWebGLRenderingContext(e,t);return n=hasExtension(r,"EXT_disjoint_timer_query_webgl2")&&2===e?2:hasExtension(r,"EXT_disjoint_timer_query")?1:0,null!=r&&loseContext(r),n}function isRenderToFloatTextureEnabled(e,t){if(0===e)return !1;var n=getWebGLRenderingContext(e,t);if(1===e){if(!hasExtension(n,"OES_texture_float"))return !1}else if(!hasExtension(n,"EXT_color_buffer_float"))return !1;var r=createFloatTextureAndBindToFramebuffer(n,e);return loseContext(n),r}function isDownloadFloatTextureEnabled(e,t){if(0===e)return !1;var n=getWebGLRenderingContext(e,t);if(1===e){if(!hasExtension(n,"OES_texture_float"))return !1;if(!hasExtension(n,"WEBGL_color_buffer_float"))return !1}else if(!hasExtension(n,"EXT_color_buffer_float"))return !1;var r=createFloatTextureAndBindToFramebuffer(n,e);return loseContext(n),r}function isWebGLFenceEnabled(e,t){if(2!==e)return !1;var n=getWebGLRenderingContext(e,t),r=null!=n.fenceSync;return loseContext(n),r}function isChrome(){return "undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}var TENSORFLOWJS_FLAGS_PREFIX="tfjsflags";function getFeaturesFromURL(){var e={};if("undefined"==typeof window||void 0===window.location)return e;var t=getQueryParams(window.location.search);if(TENSORFLOWJS_FLAGS_PREFIX in t){var n={};t[TENSORFLOWJS_FLAGS_PREFIX].split(",").forEach(function(e){var t=e.split(":"),r=t[0],o=t[1];n[r]=o;}),URL_PROPERTIES.forEach(function(t){t.name in n&&(console.log("Setting feature override from URL "+t.name+": "+n[t.name]),t.type===Type.NUMBER?e[t.name]=+n[t.name]:t.type===Type.BOOLEAN?e[t.name]="true"===n[t.name]:t.type===Type.STRING?e[t.name]=n[t.name]:console.warn("Unknown URL param: "+t.name+"."));});}return e}function hasExtension(e,t){return null!=e.getExtension(t)}function getWebGLRenderingContext(e,t){if(0===e||!t)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=document.createElement("canvas");return 1===e?n.getContext("webgl")||n.getContext("experimental-webgl"):n.getContext("webgl2")}function loseContext(e){if(null!=e){var t=e.getExtension("WEBGL_lose_context");if(null==t)throw new Error("Extension WEBGL_lose_context not supported on this browser.");t.loseContext();}}function createFloatTextureAndBindToFramebuffer(e,t){var n=e.createFramebuffer(),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);var o=2===t?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,o,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);var a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(n),a}function getQueryParams(e){var t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return decodeParam(t,n[0],n[1]),n.join("=")}),t}function decodeParam(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"");}var EPSILON_FLOAT16=.001,TEST_EPSILON_FLOAT16=.1,EPSILON_FLOAT32=1e-7,TEST_EPSILON_FLOAT32=.001,Environment=function(){function e(e){this.features={},this.registry={},null!=e&&(this.features=e),this.get("DEBUG")&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");}return e.setBackend=function(e,t){if(void 0===t&&(t=!1),!(e in ENV.registry))throw new Error("Backend name '"+e+"' not found in registry");ENV.engine.backend=ENV.findBackend(e),ENV.backendName=e;},e.getBackend=function(){return ENV.initEngine(),ENV.backendName},e.disposeVariables=function(){ENV.engine.disposeVariables();},e.memory=function(){return ENV.engine.memory()},e.profile=function(e){return ENV.engine.profile(e)},e.tidy=function(e,t,n){return void 0===n&&(n=!1),ENV.engine.tidy(e,t,n)},e.dispose=function(e){getTensorsInContainer(e).forEach(function(e){return e.dispose()});},e.keep=function(e){return ENV.engine.keep(e)},e.time=function(e){return ENV.engine.time(e)},e.prototype.get=function(e){return e in this.features?this.features[e]:(this.features[e]=this.evaluateFeature(e),this.features[e])},e.prototype.getFeatures=function(){return this.features},e.prototype.set=function(e,t){this.features[e]=t;},e.prototype.getBestBackendName=function(){var e=this;if(0===Object.keys(this.registry).length)throw new Error("No backend found in registry.");return Object.keys(this.registry).map(function(t){return {name:t,entry:e.registry[t]}}).sort(function(e,t){return t.entry.priority-e.entry.priority})[0].name},e.prototype.evaluateFeature=function(e){if("DEBUG"===e)return !1;if("IS_BROWSER"===e)return "undefined"!=typeof window;if("IS_NODE"===e)return "undefined"!=typeof process&&void 0!==process.versions.node;if("IS_CHROME"===e)return isChrome();if("WEBGL_PAGING_ENABLED"===e)return this.get("IS_BROWSER");if("IS_TEST"===e)return !1;if("BACKEND"===e)return this.getBestBackendName();if("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"===e){var t=this.get("WEBGL_VERSION");return 0===t?0:getWebGLDisjointQueryTimerVersion(t,this.get("IS_BROWSER"))}if("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE"===e)return this.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!isMobile();if("HAS_WEBGL"===e)return this.get("WEBGL_VERSION")>0;if("WEBGL_VERSION"===e)return isWebGLVersionEnabled(2,this.get("IS_BROWSER"))?2:isWebGLVersionEnabled(1,this.get("IS_BROWSER"))?1:0;if("WEBGL_RENDER_FLOAT32_ENABLED"===e)return isRenderToFloatTextureEnabled(this.get("WEBGL_VERSION"),this.get("IS_BROWSER"));if("WEBGL_DOWNLOAD_FLOAT_ENABLED"===e)return isDownloadFloatTextureEnabled(this.get("WEBGL_VERSION"),this.get("IS_BROWSER"));if("WEBGL_FENCE_API_ENABLED"===e)return isWebGLFenceEnabled(this.get("WEBGL_VERSION"),this.get("IS_BROWSER"));if("TEST_EPSILON"===e)return 32===this.backend.floatPrecision()?TEST_EPSILON_FLOAT32:TEST_EPSILON_FLOAT16;if("EPSILON"===e)return 32===this.backend.floatPrecision()?EPSILON_FLOAT32:EPSILON_FLOAT16;throw new Error("Unknown feature "+e+".")},e.prototype.setFeatures=function(e){this.features=Object.assign({},e);},e.prototype.reset=function(){this.features=getFeaturesFromURL(),null!=this.globalEngine&&(this.globalEngine=null);},Object.defineProperty(e.prototype,"backend",{get:function(){return this.engine.backend},enumerable:!0,configurable:!0}),e.prototype.findBackend=function(e){return e in this.registry?this.registry[e].backend:null},e.prototype.registerBackend=function(e,t,n,r){var o=this;if(void 0===n&&(n=1),e in this.registry)return console.warn(e+" backend was already registered. Reusing existing backend"),null!=r&&r(function(){return o.engine}),!1;try{var a=t();return a.setDataMover({moveData:function(e){return o.engine.moveData(e)}}),this.registry[e]={backend:a,priority:n},!0}catch(t){return console.warn("Registration of backend "+e+" failed"),console.warn(t.stack||t.message),!1}},e.prototype.removeBackend=function(e){if(!(e in this.registry))throw new Error(e+" backend not found in registry");this.registry[e].backend.dispose(),delete this.registry[e];},Object.defineProperty(e.prototype,"engine",{get:function(){return this.initEngine(),this.globalEngine},enumerable:!0,configurable:!0}),e.prototype.initEngine=function(){var e=this;if(null==this.globalEngine){this.backendName=this.get("BACKEND");var t=this.findBackend(this.backendName);this.globalEngine=new Engine(t,!1,function(){return e.get("DEBUG")});}},e}();function getGlobalNamespace(){var e;if("undefined"!=typeof window)e=window;else{if("undefined"==typeof process)throw new Error("Could not find a global object");e=process;}return e}function getOrMakeEnvironment(){var e=getGlobalNamespace();return null==e.ENV&&(e.ENV=new Environment(getFeaturesFromURL()),setTensorTracker(function(){return e.ENV.engine})),e.ENV}var ENV=getOrMakeEnvironment(),environment=Object.freeze({Environment:Environment,ENV:ENV});function grad(e){return assert(isFunction(e),"The f passed in grad(f) must be a function"),function(t,n){return assert(t instanceof Tensor,"The x passed in grad(f)(x) must be a tensor"),assert(null==n||n instanceof Tensor,"The dy passed in grad(f)(x, dy) must be a tensor"),ENV.engine.tidy(function(){var r=ENV.engine.gradients(function(){return e(t)},[t],n),o=r.value,a=r.grads;return null!=n&&assertShapesMatch(o.shape,n.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),checkGrads(a),a[0]})}}function grads(e){return assert(isFunction(e),"The f passed in grads(f) must be a function"),function(t,n){return assert(Array.isArray(t)&&t.every(function(e){return e instanceof Tensor}),"The args passed in grads(f)(args) must be an array of tensors"),assert(null==n||n instanceof Tensor,"The dy passed in grads(f)(args, dy) must be a tensor"),ENV.engine.tidy(function(){var r=ENV.engine.gradients(function(){return e.apply(void 0,t)},t,n),o=r.value,a=r.grads;return null!=n&&assertShapesMatch(o.shape,n.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),checkGrads(a),a})}}function valueAndGrad(e){return assert(isFunction(e),"The f passed in valueAndGrad(f) must be a function"),function(t,n){assert(t instanceof Tensor,"The x passed in valueAndGrad(f)(x) must be a tensor"),assert(null==n||n instanceof Tensor,"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");var r=ENV.engine.gradients(function(){return e(t)},[t],n),o=r.grads,a=r.value;return checkGrads(o),{grad:o[0],value:a}}}function valueAndGrads(e){return assert(isFunction(e),"The f passed in valueAndGrads(f) must be a function"),function(t,n){assert(Array.isArray(t)&&t.every(function(e){return e instanceof Tensor}),"The args passed in valueAndGrads(f)(args) must be array of tensors"),assert(null==n||n instanceof Tensor,"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");var r=ENV.engine.gradients(function(){return e.apply(void 0,t)},t,n);return null!=n&&assertShapesMatch(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),checkGrads(r.grads),r}}function variableGrads(e,t){if(assert(isFunction(e),"The f passed in variableGrads(f) must be a function"),assert(null==t||Array.isArray(t)&&t.every(function(e){return e instanceof Variable}),"The varList passed in variableGrads(f, varList) must be an array of variables"),null==t)for(var n in t=[],ENV.engine.registeredVariables)t.push(ENV.engine.registeredVariables[n]);var r=t.length;assert((t=t.filter(function(e){return e.trainable})).length>0,"variableGrads() expects at least one of the input variables to be trainable, but none of the "+r+" variables is trainable.");var o=ENV.engine.gradients(e,t,null,!0),a=o.value,i=o.grads;assert(i.some(function(e){return null!=e}),"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),assert(0===a.rank,"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+a.rank+" tensor");var s={};return t.forEach(function(e,t){null!=i[t]&&(s[e.name]=i[t]);}),{value:a,grads:s}}function customGrad(e){return ENV.engine.customGrad(e)}function checkGrads(e){if(e.filter(function(e){return null==e}).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}var tidy=Environment.tidy,keep=Environment.keep,dispose=Environment.dispose,time=Environment.time,profile=Environment.profile;function warn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];ENV.get("IS_TEST")||console.warn.apply(console,e);}function getReshaped(e,t,n,r){void 0===r&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(e[0]/n),o=o.concat(e.slice(1));else{o=o.concat(e[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([e[i+1]/t[i],t[i]]);o=o.concat(e.slice(a+1));}return o}function getPermuted(e,t,n){void 0===n&&(n=!0);var r=[];if(n){r.push(t);for(var o=t+1;o<e;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o);}else{var a=[],i=[];for(o=1;o<e;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);r.push.apply(r,a),r.push(0),r.push.apply(r,i);}return r}function getReshapedPermuted(e,t,n,r){void 0===r&&(r=!0);var o=[];r?o.push(e[0]/n):o.push(e[0]*n);for(var a=1;a<e.length;++a)a<=t.length?r?o.push(t[a-1]*e[a]):o.push(e[a]/t[a-1]):o.push(e[a]);return o}function getSliceBeginCoords(e,t){for(var n=[0],r=0;r<t;++r)n.push(e[r][0]);return n}function getSliceSize(e,t,n){for(var r=e.slice(0,1),o=0;o<n;++o)r.push(e[o+1]-t[o][0]-t[o][1]);return r}function axesAreInnerMostDims(e,t){for(var n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return !1;return !0}function combineLocations(e,t,n){for(var r=e.length+t.length,o=[],a=0,i=0,s=0;s<r;s++)-1===n.indexOf(s)?o.push(e[a++]):o.push(t[i++]);return o}function computeOutAndReduceShapes(e,t){for(var n=[],r=e.length,o=0;o<r;o++)-1===t.indexOf(o)&&n.push(e[o]);return [n,t.map(function(t){return e[t]})]}function expandShapeToKeepDim(e,t){return combineLocations(e,t.map(function(e){return 1}),t)}function parseAxisParam(e,t){var n=t.length;return assert((e=null==e?t.map(function(e,t){return t}):[].concat(e)).every(function(e){return e>=-n&&e<n}),"All values in axis param must be in range [-"+n+", "+n+") but got axis "+e),assert(e.every(function(e){return isInt(e)}),"All values in axis param must be integers but got axis "+e),e.map(function(e){return e<0?n+e:e})}function assertAxesAreInnerMostDims(e,t,n){assert(axesAreInnerMostDims(t,n),e+" supports only inner-most axes for now. Got axes "+t+" and rank-"+n+" input.");}function getAxesPermutation(e,t){if(axesAreInnerMostDims(e,t))return null;for(var n=[],r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach(function(e){return n.push(e)}),n}function getUndoAxesPermutation(e){return e.map(function(e,t){return [t,e]}).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]})}function getInnerMostAxes(e,t){for(var n=[],r=t-e;r<t;++r)n.push(r);return n}function assertParamsConsistent(e,t){var n=e[0].length;e.forEach(function(e,t){assert(e.length===n,"Error in concat"+n+"D: rank of tensors["+t+"] must be the same as the rank of the rest ("+n+")");}),assert(t>=0&&t<n,"Error in concat"+n+"D: axis must be between 0 and "+(n-1)+".");var r=e[0];e.forEach(function(e,o){for(var a=0;a<n;a++)assert(a===t||e[a]===r[a],"Error in concat"+n+"D: Shape of tensors["+o+"] ("+e+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+o+".");});}function computeOutShape(e,t){for(var n=e[0].slice(),r=1;r<e.length;r++)n[t]+=e[r][t];return n}var PARALLELIZE_THRESHOLD=30;function computeOptimalWindowSize(e){return e<=PARALLELIZE_THRESHOLD?e:nearestDivisor(e,Math.floor(Math.sqrt(e)))}function segOpComputeOptimalWindowSize(e,t){var n,r=!1;for(e<=PARALLELIZE_THRESHOLD?(n=e,r=!0):n=nearestDivisor(e,Math.floor(Math.sqrt(e)));!r;){if(n>t||n===e){r=!0;break}n=nearestDivisor(e,n+1);}return n}function computeOutShape$1(e,t,n){for(var r=[],o=e.length,a=0;a<o;a++)a!==t?r.push(e[a]):r.push(n);return r}function assertParamsValid(e,t,n){assert(e.rank===t.length,"Error in slice"+e.rank+"D: Length of begin "+t+" must match the rank of the array ("+e.rank+")."),assert(e.rank===n.length,"Error in slice"+e.rank+"D: Length of size "+n+" must match the rank of the array ("+e.rank+").");for(var r=0;r<e.rank;++r)assert(t[r]+n[r]<=e.shape[r],"Error in slice"+e.rank+"D: begin["+r+"] + size["+r+"] ("+(t[r]+n[r])+") would overflow input.shape["+r+"] ("+e.shape[r]+")");}function getStridedSlicedInfo(e,t,n,r,o,a,i,s,u){if(void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),void 0===u&&(u=0),0!==i)throw new Error("ellipsis mask is not yet supported");if(0!==s)throw new Error("new axis mask is not yet supported");for(var l=[],c=[],p=[],d=0;d<e.length;d++)l[d]=startForAxis(o,t,r,e,d),c[d]=stopForAxis(a,n,r,e,d),u&1<<d&&(c[d]=l[d]+1,p.push(d));var h=new Array(e.length).fill(0);return h=h.map(function(e,t){for(var n=0,o=l[t];!(r[t]>0?o>=c[t]:o<=c[t]);o+=r[t])n+=1;return n}),[l,h,p]}function startForAxis(e,t,n,r,o){var a=t[o];e&1<<o&&(a=n[o]>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var i=r[o];return a<0&&(a+=i),a=clamp(0,a,i-1)}function stopForAxis(e,t,n,r,o){var a=t[o];e&1<<o&&(a=n[o]>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var i=r[o];return a<0&&(a+=i),a=n[o]>0?clamp(0,a,i):clamp(-1,a,i-1)}function convertToTensor(e,t,n,r){if(void 0===r&&(r="float32"),r=r||"float32",e instanceof Tensor)return e;if(!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e)throw new Error("Argument '"+t+"' passed to '"+n+"' must be a Tensor or TensorLike, but got "+e.constructor.name);var o=inferShape(e);return isTypedArray(e)||Array.isArray(e)||(e=[e]),Tensor.make(o,{values:toTypedArray(e,r,ENV.get("DEBUG"))},r)}function convertToTensorArray(e,t,n){if(!Array.isArray(e))throw new Error("Argument "+t+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return e.map(function(e,r){return convertToTensor(e,t+"["+r+"]",n)})}function op(e){var t=Object.keys(e);if(1!==t.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var n=t[0],r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];ENV.engine.startScope(n);try{var o=r.apply(void 0,e);return o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),ENV.engine.endScope(o),o}catch(e){throw ENV.engine.endScope(null),e}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}function softmax_(e,t){void 0===t&&(t=-1);var n=convertToTensor(e,"logits","softmax");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+t);return customGrad(function(e){var n=e.logSumExp([t],!0),r=e.toFloat().sub(n).exp();return {value:r,gradFunc:function(e){var n=e.mul(r);return n.sub(n.sum([t],!0).mul(r))}}})(n)}var softmax=op({softmax_:softmax_});function complex_(e,t){var n=convertToTensor(e,"real","complex"),r=convertToTensor(t,"imag","complex");return assertShapesMatch(n.shape,r.shape,"real and imag shapes, "+n.shape+" and "+r.shape+", must match in call to tf.complex()."),ENV.engine.runKernel(function(e){return e.complex(n,r)},{$real:n,$imag:r})}function real_(e){var t=convertToTensor(e,"input","real");return ENV.engine.runKernel(function(e){return e.real(t)},{$input:t})}function imag_(e){var t=convertToTensor(e,"input","imag");return ENV.engine.runKernel(function(e){return e.imag(t)},{$input:t})}var complex=op({complex_:complex_}),real=op({real_:real_}),imag=op({imag_:imag_});function tensor(e,t,n){if(void 0===n&&(n="float32"),"complex64"===n)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e)throw new Error("values passed to tensor(values) must be an array of numbers or booleans, or a TypedArray");var r=inferShape(e);return null!=t&&1!==r.length&&assertShapesMatch(t,r,"Error creating a new Tensor. Inferred shape ("+r+") does not match the provided shape ("+t+"). "),isTypedArray(e)||Array.isArray(e)||(e=[e]),t=t||r,Tensor.make(t,{values:toTypedArray(e,n,ENV.get("DEBUG"))},n)}function scalar(e,t){if(void 0===t&&(t="float32"),(isTypedArray(e)||Array.isArray(e))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean)");return tensor(e,[],t)}function tensor1d(e,t){void 0===t&&(t="float32"),assertNonNull(e);var n=inferShape(e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return tensor(e,n,t)}function tensor2d(e,t,n){if(void 0===n&&(n="float32"),assertNonNull(e),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");var r=inferShape(e);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return tensor(e,t=t||r,n)}function tensor3d(e,t,n){if(void 0===n&&(n="float32"),assertNonNull(e),null!=t&&3!==t.length)throw new Error("tensor3d() requires shape to have three numbers");var r=inferShape(e);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return tensor(e,t=t||r,n)}function tensor4d(e,t,n){if(void 0===n&&(n="float32"),assertNonNull(e),null!=t&&4!==t.length)throw new Error("tensor4d() requires shape to have four numbers");var r=inferShape(e);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return tensor(e,t=t||r,n)}function tensor5d(e,t,n){if(void 0===n&&(n="float32"),assertNonNull(e),null!=t&&5!==t.length)throw new Error("tensor5d() requires shape to have five numbers");var r=inferShape(e);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return tensor(e,t=t||r,n)}function tensor6d(e,t,n){if(void 0===n&&(n="float32"),assertNonNull(e),null!=t&&6!==t.length)throw new Error("tensor6d() requires shape to have six numbers");var r=inferShape(e);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return tensor(e,t=t||r,n)}function ones$1(e,t){if(void 0===t&&(t="float32"),"complex64"===t){var n=ones$1(e,"float32"),r=ones$1(e,"float32");return complex(n,r)}var o=makeOnesTypedArray(sizeFromShape(e),t);return Tensor.make(e,{values:o},t)}function zeros(e,t){if(void 0===t&&(t="float32"),"complex64"===t){var n=zeros(e,"float32"),r=zeros(e,"float32");return complex(n,r)}var o=makeZerosTypedArray(sizeFromShape(e),t);return Tensor.make(e,{values:o},t)}function fill(e,t,n){void 0===n&&(n="float32");var r=getTypedArrayFromDType(n,sizeFromShape(e));return r.fill(t),Tensor.make(e,{values:r},n)}function onesLike_(e){var t=convertToTensor(e,"x","onesLike");return ones$1(t.shape,t.dtype)}function zerosLike_(e){var t=convertToTensor(e,"x","zerosLike");return zeros(t.shape,t.dtype)}function linspace(e,t,n){if(0===n)throw new Error("Cannot request zero samples");var r=(t-e)/(n-1),o=makeZerosTypedArray(n,"float32");o[0]=e;for(var a=1;a<o.length;a++)o[a]=o[a-1]+r;return tensor1d(o,"float32")}function range(e,t,n,r){if(void 0===n&&(n=1),void 0===r&&(r="float32"),0===n)throw new Error("Cannot have a step of zero");if(e===t||e<t&&n<0||t<e&&n>1)return zeros([0],r);var o=makeZerosTypedArray(Math.abs(Math.ceil((t-e)/n)),r);t<e&&1===n&&(n=-1),o[0]=e;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return tensor1d(o,r)}var DType,Rank,UpcastInt32AndMap,UpcastBoolAndMap,UpcastFloat32AndMap,UpcastComplex64AndMap,onesLike=op({onesLike_:onesLike_}),zerosLike=op({zerosLike_:zerosLike_});!function(e){e.float32="float32",e.int32="int32",e.bool="bool";}(DType||(DType={})),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6";}(Rank||(Rank={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64";}(UpcastInt32AndMap||(UpcastInt32AndMap={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64";}(UpcastBoolAndMap||(UpcastBoolAndMap={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64";}(UpcastFloat32AndMap||(UpcastFloat32AndMap={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64";}(UpcastComplex64AndMap||(UpcastComplex64AndMap={}));var upcastTypeMap={float32:UpcastFloat32AndMap,int32:UpcastInt32AndMap,bool:UpcastBoolAndMap,complex64:UpcastComplex64AndMap};function upcastType(e,t){return upcastTypeMap[e][t]}function sumOutType(e){return upcastType(e,"int32")}var DataStorage=function(){function e(e){this.dataMover=e,this.data=new WeakMap;}return e.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(e),this.data.get(e)},e.prototype.set=function(e,t){this.data.set(e,t);},e.prototype.has=function(e){return this.data.has(e)},e.prototype.delete=function(e){return this.data.delete(e)},e}();function castTensor(e,t,n){if("complex64"===t){if("complex64"===e.dtype)return e.clone();var r=zeros(e.shape),o=e.toFloat(),a=n.complex(o,r);return r.dispose(),o.dispose(),a}if(!hasEncodingLoss(e.dtype,t))return Tensor.make(e.shape,{dataId:e.dataId},t);if("complex64"===e.dtype){var i=n.real(e);a=i.cast(t);return i.dispose(),a}if("int32"===t)return n.int(e);if("bool"===t){var s=scalar(0,e.dtype);a=n.notEqual(e,s);return s.dispose(),a}throw new Error("Error in Cast: unknown dtype argument ("+t+")")}function reshapeTensor(e,t){return Tensor.make(t,{dataId:e.dataId},e.dtype)}function mergeRealAndImagArrays(e,t){if(e.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+e.length+", imag: "+t.length+".");for(var n=new Float32Array(2*e.length),r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function nonMaxSuppressionImpl(e,t,n,r,o){for(var a=Array.from(t).map(function(e,t){return {score:e,boxIndex:t}}).filter(function(e){return e.score>o}).sort(function(e,t){return t.score-e.score}),i=[],s=0;s<a.length;s++){var u=a[s],l=u.score,c=u.boxIndex;if(l<o)break;for(var p=!1,d=i.length-1;d>=0;--d){if(intersectionOverUnion(e,c,i[d])>=r){p=!0;break}}if(!p&&(i.push(c),i.length>=n))break}return tensor1d(i,"int32")}function intersectionOverUnion(e,t,n){var r=e.subarray(4*t,4*t+4),o=e.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(o[0],o[2]),c=Math.min(o[1],o[3]),p=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),h=(s-a)*(u-i),f=(p-l)*(d-c);if(h<=0||f<=0)return 0;var m=Math.max(a,l),g=Math.max(i,c),v=Math.min(s,p),y=Math.min(u,d),x=Math.max(v-m,0)*Math.max(y-g,0);return x/(h+f-x)}function split(e,t,n){var r=Array(e.rank).fill(0),o=e.shape.slice();return t.map(function(t){o[n]=t;var a=e.slice(r,o);return r[n]+=t,a})}function topkImpl(e,t,n,r,o){for(var a=t[t.length-1],i=[e.length/a,a],s=i[0],u=i[1],l=getTypedArrayFromDType(n,s*r),c=getTypedArrayFromDType("int32",s*r),p=0;p<s;p++){for(var d=p*u,h=e.subarray(d,d+u),f=[],m=0;m<h.length;m++)f.push({value:h[m],index:m});f.sort(function(e,t){return t.value-e.value});var g=p*r,v=l.subarray(g,g+r),y=c.subarray(g,g+r);for(m=0;m<r;m++)v[m]=f[m].value,y[m]=f[m].index;}var x=t.slice();return x[x.length-1]=r,[tensor(l,x,n),tensor(c,x,"int32")]}var ArgMinMaxProgram=function(){return function(e,t,n){this.variableNames=["A"];var r=e.windowSize,o=e.batchSize,a=e.inSize,i=Math.ceil(a/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s="max"===t?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+r+";\n\n        int bestIndex = 0;\n        float bestValue = getA(batch, inOffset);\n\n        for (int i = 0; i < "+r+"; i++) {\n          int inIdx = "+u+";\n          float candidate = getA(batch, inIdx);\n          if (candidate "+s+" bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";}}(),AvgPool2DBackpropProgram=function(){return function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,a=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=1/(t*n);this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n      const float avgMultiplier = float("+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}();function getBroadcastDims(e,t){for(var n=e.length,r=[],o=0;o<n;o++){var a=n-1-o,i=e[a]||1;(t[t.length-1-o]||1)>1&&1===i&&r.unshift(a);}return r}function getReductionAxes(e,t){for(var n=[],r=0;r<t.length;r++){var o=e[e.length-r-1],a=t.length-r-1,i=t[a];(null==o||1===o&&i>1)&&n.unshift(a);}return n}function broadcastDimsAreOuter(e){for(var t=0;t<e.length;t++)if(e[t]!==t)return !1;return !0}function assertAndGetBroadcastShape(e,t){for(var n=[],r=Math.max(e.length,t.length),o=0;o<r;o++){var a=e[e.length-o-1];null==a&&(a=1);var i=t[t.length-o-1];if(null==i&&(i=1),1===a)n.unshift(i);else if(1===i)n.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+e+" and "+t+".");n.unshift(a);}}return n}var BatchNormProgram=function(){return function(e,t,n,r,o,a){this.outputShape=[],this.supportsBroadcasting=!0,this.variableNames=["x","mean","variance"],assertAndGetBroadcastShape(e,t),assertAndGetBroadcastShape(e,n);var i="0.0";null!=r&&(assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";null!=o&&(assertAndGetBroadcastShape(e,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode="\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = "+i+";\n        float scale = "+s+";\n        float inv = scale * inversesqrt(variance + float("+a+"));\n        setOutput((x - mean) * inv + offset);\n      }\n    ";}}(),COMPLEX_MULTIPLY={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},BinaryOpComplexProgram=function(){return function(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.supportsBroadcasting=!0,this.outputShape=assertAndGetBroadcastShape(t,n),this.userCode="\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        "+e+"\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ";}}(),CHECK_NAN_SNIPPET="\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n",ADD="return a + b;",SUB="return a - b;",MUL="return a * b;",DIV="if (a == b) return 1.0;\n  return a / b;",INT_DIV="\n  float resultSign = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  int result = ia / ib;\n  int amodb = ia - ib * result;\n\n  if (resultSign < 0.0 && amodb != 0) {\n    result -= 1;\n  }\n  return float(result);\n",POW="\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nreturn (round(mod(b, 2.0)) == 0 || round(mod(b, 2.0)) == 2) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",SQUARED_DIFFERENCE="return (a - b) * (a - b);",EQUAL="return float(a == b);",NOT_EQUAL="return float(a != b);",LESS="return float(a < b);",LESS_EQUAL="return float(a <= b);",GREATER="return float(a > b);",GREATER_EQUAL="return float(a >= b);",LOGICAL_AND="return float(a >= 1.0 && b >= 1.0);",LOGICAL_OR="return float(a >= 1.0 || b >= 1.0);",MAX=CHECK_NAN_SNIPPET+"\n  return max(a, b);\n",MIN=CHECK_NAN_SNIPPET+"\n  return min(a, b);\n",MOD="if (b == 0.0) return NAN;\n  return mod(a, b);",ATAN2=CHECK_NAN_SNIPPET+"\n  return atan(a, b);\n",ELU_DER="return (b >= 1.0) ? a : a * (b + 1.0);",BinaryOpProgram=function(){function e(e,t,n){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.outputShape=assertAndGetBroadcastShape(t,n),this.userCode="\n      uniform float NAN;\n      float binaryOperation(float a, float b) {\n        "+e+"\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";}return e.prototype.getCustomSetupFunc=function(){var e=this;return function(t,n){null==e.startLoc&&(e.startLoc=t.getUniformLocationNoThrow(n,"NAN"),null==e.startLoc)||t.gl.uniform1f(e.startLoc,NaN);}},e}(),ClipProgram=function(){return function(e,t,n){this.variableNames=["A"],this.outputShape=e,this.userCode="\n      void main() {\n        float value = getAAtOutCoords();\n        if (isNaN(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, float("+t+"), float("+n+")));\n      }\n    ";}}(),ConcatProgram=function(){return function(e,t){this.variableNames=["A","B"],this.outputShape=[],this.outputShape=computeOutShape([e,t],1),this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        float value = 0.0;\n        if (yC < "+e[1]+") {\n          value = getA(yR, yC);\n        } else {\n          yC -= "+e[1]+";\n          value = getB(yR, yC);\n        }\n\n        setOutput(value);\n      }\n    ";}}(),Conv2DDerFilterProgram=function(){return function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+e.batchSize+"; b++) {\n          for (int yR = 0; yR < "+e.outHeight+"; yR++) {\n            int xR = wR + yR * "+t+" - "+r+";\n\n            if (xR < 0 || xR >= "+e.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+e.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+e.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Conv2DDerInputProgram=function(){return function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,a=t-1-e.padInfo.top,i=n-1-e.padInfo.left;this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+t+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            for (int d2 = 0; d2 < "+e.outChannels+"; d2++) {\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),DepthwiseConv2DDerFilterProgram=function(){return function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * "+a+" + dm;\n\n        float dotProd = 0.0;\n\n        // TODO: Vec4 over the batch size\n        for (int b = 0; b < "+e.batchSize+"; b++) {\n          for (int yR = 0; yR < "+e.outHeight+"; yR++) {\n            int xR = wR + yR * "+t+" - "+r+";\n\n            if (xR < 0 || xR >= "+e.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+e.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+o+";\n\n              if (xC < 0 || xC >= "+e.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),DepthwiseConv2DDerInputProgram=function(){return function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,a=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+t+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            // TODO: Vec4 over the channelMul\n            for (int dm = 0; dm < "+s+"; dm++) {\n              int d2 = d1 * "+s+" + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Conv2DProgram=function(){return function(e){this.variableNames=["x","W"],this.outputShape=e.outShape;var t=e.padInfo.top,n=e.padInfo.left,r=e.strideHeight,o=e.strideWidth,a=e.dilationHeight,i=e.dilationWidth,s=e.filterHeight,u=e.filterWidth,l=4*Math.floor(e.inChannels/4),c=e.inChannels%4;this.userCode="\n      const ivec2 strides = ivec2("+r+", "+o+");\n      const ivec2 pads = ivec2("+t+", "+n+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+s+"; wR++) {\n          int xR = xRCorner + wR * "+a+";\n\n          if (xR < 0 || xR >= "+e.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+u+"; wC++) {\n            int xC = xCCorner + wC * "+i+";\n\n            if (xC < 0 || xC >= "+e.inWidth+") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < "+l+"; d1 += 4) {\n              vec4 xValues = vec4(\n                getX(batch, xR, xC, d1),\n                getX(batch, xR, xC, d1 + 1),\n                getX(batch, xR, xC, d1 + 2),\n                getX(batch, xR, xC, d1 + 3)\n              );\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              dotProd += dot(xValues, wValues);\n            }\n\n            if ("+(1===c)+") {\n              dotProd +=\n                getX(batch, xR, xC, "+l+") *\n                getW(wR, wC, "+l+", d2);\n            } else if ("+(2===c)+") {\n              vec2 xValues = vec2(\n                getX(batch, xR, xC, "+l+"),\n                getX(batch, xR, xC, "+l+" + 1)\n              );\n              vec2 wValues = vec2(\n                getW(wR, wC, "+l+", d2),\n                getW(wR, wC, "+l+" + 1, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            } else if ("+(3===c)+") {\n              vec3 xValues = vec3(\n                getX(batch, xR, xC, "+l+"),\n                getX(batch, xR, xC, "+l+" + 1),\n                getX(batch, xR, xC, "+l+" + 2)\n              );\n              vec3 wValues = vec3(\n                getW(wR, wC, "+l+", d2),\n                getW(wR, wC, "+l+" + 1, d2),\n                getW(wR, wC, "+l+" + 2, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),DepthwiseConv2DProgram=function(){return function(e){this.variableNames=["x","W"],this.outputShape=e.outShape;var t=e.inHeight,n=e.inWidth,r=e.padInfo.top,o=e.padInfo.left,a=e.strideHeight,i=e.strideWidth,s=e.dilationHeight,u=e.dilationWidth,l=e.filterHeight,c=e.filterWidth,p=e.outChannels/e.inChannels;this.userCode="\n      const ivec2 strides = ivec2("+a+", "+i+");\n      const ivec2 pads = ivec2("+r+", "+o+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / "+p+";\n        int q = d2 - d1 * "+p+";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TODO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < "+l+"; wR++) {\n          int xR = xRCorner + wR * "+s+";\n\n          if (xR < 0 || xR >= "+t+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+c+"; wC++) {\n            int xC = xCCorner + wC * "+u+";\n\n            if (xC < 0 || xC >= "+n+") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),CropAndResizeProgram=function(){return function(e,t,n,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=e[0],i=e[1],s=e[2],u=e[3],l=t[0],c=n[0],p=n[1];this.outputShape=[l,c,p,u];var d="bilinear"===r?1:0,h=[i-1+".0",s-1+".0"],f=h[0],m=h[1],g=c>1?[""+(i-1)/(c-1),"(y2-y1) * height_ratio","y1*"+f+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+f],v=g[0],y=g[1],x=g[2],T=p>1?[""+(s-1)/(p-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],b=T[0],S=T[1],E=T[2];this.userCode="\n      const float height_ratio = float("+v+");\n      const float width_ratio = float("+b+");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= "+a+") {\n          return;\n        }\n\n        float height_scale = "+y+";\n        float width_scale = "+S+";\n\n        float in_y = "+x+";\n        if( in_y < 0.0 || in_y > "+f+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n        float in_x = "+E+";\n        if( in_x < 0.0 || in_x > "+m+" ) {\n          setOutput(float("+o+"));\n          return;\n        }\n\n        vec2 sourceFracIndexRC = vec2(in_y,in_x);\n        if("+d+" == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n          ivec2 sourceCeilRC = ivec2(ceil(sourceFracIndexRC));\n\n          float topLeft = getImage(b, sourceFloorRC.x, sourceFloorRC.y, d);\n          float bottomLeft = getImage(b, sourceCeilRC.x, sourceFloorRC.y, d);\n          float topRight = getImage(b, sourceFloorRC.x, sourceCeilRC.y, d);\n          float bottomRight = getImage(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n          vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n          float top = topLeft + (topRight - topLeft) * fracRC.y;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n          float newValue = top + (bottom - top) * fracRC.x;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestRC = ivec2(floor(\n            sourceFracIndexRC + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestRC.x, sourceNearestRC.y, d);\n          setOutput(newValue);\n        }\n      }\n    ";}}();function makeShader(e,t,n,r){var o=e.map(function(e){var t=sizeFromShape(e.shapeInfo.logicalShape);return e.shapeInfo.isUniform?"uniform float "+e.name+(t>1?"["+t+"]":"")+";":"uniform sampler2D "+e.name+";"});o=o.join("\n");var a,i=e.map(function(e){return getInputSamplingSnippet(e,t,r)}).join("\n"),s=t.texShape;return a=t.isPacked?getPackedOutputSamplingSnippet(t.logicalShape,s):getOutputSamplingSnippet(t.logicalShape,s),[SHADER_PREFIX,FLOAT_TEXTURE_SAMPLE_SNIPPET,FLOAT_TEXTURE_SETOUTPUT_SNIPPET,o,a,i,n].join("\n")}function getSamplerFromInInfo(e){var t=e.shapeInfo.logicalShape;switch(t.length){case 0:return getSamplerScalar(e);case 1:return getSampler1D(e);case 2:return getSampler2D(e);case 3:return getSampler3D(e);case 4:return getSampler4D(e);case 5:return getSampler5D(e);case 6:return getSampler6D(e);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function getInputSamplingSnippet(e,t,n){var r=getSamplerFlat(e);return r+=getSamplerFromInInfo(e),(n||arraysEqual(e.shapeInfo.logicalShape,t.logicalShape))&&(r+=getSamplerAtOutputCoords(e,t,n)),r}function getPackedOutputSamplingSnippet(e,t){switch(e.length){case 0:return getOutputScalarCoords();case 2:return getOutputPacked2DCoords(e,t);default:throw new Error(e.length+"-D output packed sampling is not yet supported")}}function getOutputSamplingSnippet(e,t){switch(e.length){case 0:return getOutputScalarCoords();case 1:return getOutput1DCoords(e,t);case 2:return getOutput2DCoords(e,t);case 3:return getOutput3DCoords(e,t);case 4:return getOutput4DCoords(e,t);case 5:return getOutput5DCoords(e,t);case 6:return getOutput6DCoords(e,t);default:throw new Error(e.length+"-D output sampling is not yet supported")}}var SAMPLE_1D_SNIPPET="\nvec2 UVfrom1D(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_2D_SNIPPET="\nvec2 UVfrom2D(int texNumR, int texNumC, int numC, int row, int col) {\n  int index = row * numC + col;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_3D_SNIPPET="\nvec2 UVfrom3D(int texNumR, int texNumC, int stride0,\n    int stride1, int row, int col, int depth) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_4D_SNIPPET="\nvec2 UVfrom4D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int row, int col, int depth,\n    int depth2) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_5D_SNIPPET="\nvec2 UVfrom5D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int stride3, int row, int col, int depth,\n    int depth2, int depth3) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 +\n              depth * stride2 + depth2 * stride3 + depth3;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_6D_SNIPPET="\nvec2 UVfrom6D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int stride3, int stride4,\n    int row, int col, int depth, int depth2, int depth3, int depth4) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2 *\n    stride3 + depth3 * stride4 + depth4;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",FLOAT_TEXTURE_SAMPLE_SNIPPET="\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    return texture2D(textureSampler, uv).r;\n  }\n",FLOAT_TEXTURE_SETOUTPUT_SNIPPET="\n  void setOutput(float val) {\n    gl_FragColor = vec4(val, 0, 0, 0);\n  }\n",SHADER_PREFIX="\n  precision highp float;\n  precision highp int;\n  varying vec2 resultUV;\n  const vec2 halfCR = vec2(0.5, 0.5);\n\n  struct ivec5\n  {\n    int x;\n    int y;\n    int z;\n    int w;\n    int u;\n  };\n\n  struct ivec6\n  {\n    int x;\n    int y;\n    int z;\n    int w;\n    int u;\n    int v;\n  };\n\n  bool isNaN(float val) {\n    return (val < 0.0 || 0.0 < val || val == 0.0) ? false : true;\n  }\n\n  bool hasNaN(vec4 values) {\n    vec4 v1 = values * values;\n    vec4 v2 = values * values;\n    return any(notEqual(v1, v2));\n  }\n\n  float getNaN(vec4 values) {\n    return dot(vec4(1), values);\n  }\n\n  int round(float value) {\n    return int(floor(value + 0.5));\n  }\n\n  int imod(int x, int y) {\n    return x - y * (x / y);\n  }\n\n  //Based on the work of Dave Hoskins\n  //https://www.shadertoy.com/view/4djSRW\n  #define HASHSCALE1 443.8975\n  float random(float seed){\n    vec2 p = resultUV * seed;\n    vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.x + p3.y) * p3.z);\n  }\n\n  "+SAMPLE_1D_SNIPPET+"\n  "+SAMPLE_2D_SNIPPET+"\n  "+SAMPLE_3D_SNIPPET+"\n  "+SAMPLE_4D_SNIPPET+"\n  "+SAMPLE_5D_SNIPPET+"\n  "+SAMPLE_6D_SNIPPET+"\n";function getOutputScalarCoords(){return "\n    int getOutputCoords() {\n      return 0;\n    }\n  "}function getOutput1DCoords(e,t){return 1===t[0]?"\n      int getOutputCoords() {\n        return int(resultUV.x * "+t[1]+".0);\n      }\n    ":1===t[1]?"\n      int getOutputCoords() {\n        return int(resultUV.y * "+t[0]+".0);\n      }\n    ":"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+t[0]+", "+t[1]+"));\n      return resTexRC.x * "+t[1]+" + resTexRC.y;\n    }\n  "}function getOutput3DCoords(e,t){var n=e[1]*e[2],r=e[2];return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n      int r = index / "+n+";\n      index -= r * "+n+";\n      int c = index / "+r+";\n      int d = index - c * "+r+";\n      return ivec3(r, c, d);\n    }\n  "}function getOutput4DCoords(e,t){var n=e[3],r=e[2]*n,o=e[1]*r;return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n\n      int r = index / "+o+";\n      index -= r * "+o+";\n\n      int c = index / "+r+";\n      index -= c * "+r+";\n\n      int d = index / "+n+";\n      int d2 = index - d * "+n+";\n\n      return ivec4(r, c, d, d2);\n    }\n  "}function getOutput5DCoords(e,t){var n=e[4],r=e[3]*n,o=e[2]*r,a=e[1]*o;return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2("+t[0]+",\n                             "+t[1]+"));\n\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n\n      int r = index / "+a+";\n      index -= r * "+a+";\n\n      int c = index / "+o+";\n      index -= c * "+o+";\n\n      int d = index / "+r+";\n      index -= d * "+r+";\n\n      int d2 = index  / "+n+";\n      int d3 = index - d2 * "+n+";\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  "}function getOutput6DCoords(e,t){var n=e[5],r=e[4]*n,o=e[3]*r,a=e[2]*o,i=e[1]*a;return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n\n      int r = index / "+i+";\n      index -= r * "+i+";\n\n      int c = index / "+a+";\n      index -= c * "+a+";\n\n      int d = index / "+o+";\n      index -= d * "+o+";\n\n      int d2 = index / "+r+";\n      index -= d2 * "+r+";\n\n      int d3 = index / "+n+";\n      int d4 = index - d3 * "+n+";\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  "}function getOutputPacked2DCoords(e,t){return "\n    ivec2 getOutputCoords() {\n      return 2 * ivec2(resultUV.yx * vec2("+Math.ceil(t[0]/2)+", "+Math.ceil(t[1]/2)+"));\n    }\n  "}function getOutput2DCoords(e,t){return arraysEqual(e,t)?"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2("+t[0]+", "+t[1]+"));\n      }\n    ":1===e[1]?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+t[0]+", "+t[1]+"));\n        int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ":1===e[0]?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+t[0]+", "+t[1]+"));\n        int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ":"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n      int r = index / "+e[1]+";\n      int c = index - r * "+e[1]+";\n      return ivec2(r, c);\n    }\n  "}function getSamplerScalar(e){var t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1);return e.shapeInfo.isUniform?"float "+n+"() {return "+t+";}":"\n    float "+n+"() {\n      return sampleTexture("+t+", halfCR);\n    }\n  "}function getSampler1D(e){var t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1);return "\n    float "+n+"(int index) {\n      return "+n+"Flat(index);\n    }\n  "}function getSampler2D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e.shapeInfo.texShape;if(null!=o&&arraysEqual(t,o)){var a=o[0];return "\n    float "+r+"(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2("+o[1]+".0, "+a+".0);\n      return sampleTexture("+n+", uv);\n    }\n  "}var i=squeezeShape(t),s=i.newShape,u=i.keptDims,l=s;if(l.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,l))+"\n      float "+r+"(int row, int col) {\n        return "+r+"("+getSqueezedParams(["row","col"],u)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col) {\n        int index = row * "+t[1]+" + col;\n        return "+r+"Flat(index);\n      }\n    ";var c=o[0],p=o[1];return 1===p?"\n    float "+r+"(int row, int col) {\n      int index = row * "+t[1]+" + col;\n      vec2 uv = vec2(0.5, (float(index) + 0.5) / "+c+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ":1===c?"\n    float "+r+"(int row, int col) {\n      int index = row * "+t[1]+" + col;\n      vec2 uv = vec2((float(index) + 0.5) / "+p+".0, 0.5);\n      return sampleTexture("+n+", uv);\n    }\n  ":"\n  float "+r+"(int row, int col) {\n    vec2 uv = UVfrom2D("+c+", "+p+", "+t[1]+", row, col);\n    return sampleTexture("+n+", uv);\n  }\n"}function getSampler3D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t[1]*t[2],a=t[2],i=squeezeShape(t),s=i.newShape,u=i.keptDims,l=s;if(l.length<t.length){return "\n        "+getSamplerFromInInfo(squeezeInputInfo(e,l))+"\n        float "+r+"(int row, int col, int depth) {\n          return "+r+"("+getSqueezedParams(["row","col","depth"],u)+");\n        }\n      "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth) {\n        int index = row * "+o+" + col * "+a+" + depth;\n        return "+r+"Flat(index);\n      }\n    ";var c=e.shapeInfo.texShape,p=c[0],d=c[1];return d===o?"\n        float "+r+"(int row, int col, int depth) {\n          int texR = row;\n          int texC = col * "+a+" + depth;\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2("+d+".0, "+p+".0);\n          return sampleTexture("+n+", uv);\n        }\n      ":d===a?"\n    float "+r+"(int row, int col, int depth) {\n      int texR = row * "+t[1]+" + col;\n      int texC = depth;\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+d+".0, "+p+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ":"\n      float "+r+"(int row, int col, int depth) {\n        vec2 uv = UVfrom3D(\n            "+p+", "+d+", "+o+", "+a+", row, col, depth);\n        return sampleTexture("+n+", uv);\n      }\n  "}function getSampler4D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t[3],a=t[2]*o,i=t[1]*a,s=squeezeShape(t),u=s.newShape,l=s.keptDims;if(u.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,u))+"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        return "+r+"("+getSqueezedParams(["row","col","depth","depth2"],l)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int index = row * "+i+" + col * "+a+" +\n            depth * "+o+" + depth2;\n        return "+r+"Flat(index);\n      }\n    ";var c=e.shapeInfo.texShape,p=c[0],d=c[1];return d===i?"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int texR = row;\n        int texC = col * "+a+" + depth * "+o+" + depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+d+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":d===o?"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int texR = row * "+t[1]*t[2]+" + col * "+t[2]+" + depth;\n        int texC = depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+d+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":"\n    float "+r+"(int row, int col, int depth, int depth2) {\n      vec2 uv = UVfrom4D("+p+", "+d+", "+i+", "+a+",\n          "+o+", row, col, depth, depth2);\n      return sampleTexture("+n+", uv);\n    }\n  "}function getSampler5D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t[4],a=t[3]*o,i=t[2]*a,s=t[1]*i,u=squeezeShape(t),l=u.newShape,c=u.keptDims;if(l.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,l))+"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        return "+r+"("+getSqueezedParams(["row","col","depth","depth2","depth3"],c)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int index = row * "+s+" + col * "+i+" +\n            depth * "+a+" + depth2 * "+o+" + depth3;\n        return "+r+"Flat(index);\n      }\n    ";var p=e.shapeInfo.texShape,d=p[0],h=p[1];return h===s?"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        int texC = col * "+i+" + depth * "+a+" +\n                   depth2 * "+o+" + depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+h+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":h===o?"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row * "+t[1]*t[2]+" + col * "+t[2]+" +\n                   depth * "+t[3]+" + depth2;\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+h+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":"\n    float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n      vec2 uv = UVfrom5D("+d+", "+h+", "+s+", "+i+",\n          "+a+", "+o+", row, col, depth, depth2, depth3);\n      return sampleTexture("+n+", uv);\n    }\n  "}function getSampler6D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t[5],a=t[4]*o,i=t[3]*a,s=t[2]*i,u=t[1]*s,l=squeezeShape(t),c=l.newShape,p=l.keptDims;if(c.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,c))+"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return "+r+"("+getSqueezedParams(["row","col","depth","depth2","depth3","depth4"],p)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = row * "+u+" + col * "+s+" +\n            depth * "+i+" + depth2 * "+a+" + depth3 * "+a+"\n            + depth4\n        return "+r+"Flat(index);\n      }\n    ";var d=e.shapeInfo.texShape,h=d[0],f=d[1];return f===u?"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        int texC = col * "+s+" + depth * "+i+" + depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+f+".0, "+h+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":f===o?"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row * "+t[1]*t[2]+" + col * "+t[2]+" + depth;\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+f+".0, "+h+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":"\n    float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      vec2 uv = UVfrom6D("+h+", "+f+", "+u+", "+s+",\n          "+i+", "+a+", "+o+"\n          ,row, col, depth, depth2, depth3, depth4);\n      return sampleTexture("+n+", uv);\n    }\n  "}function getSamplerFlat(e){var t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1)+"Flat",r=sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform)return 1===r?"float "+n+"(int index) {return "+t+";}":"\n      float "+n+"(int index) {\n        for (int i = 0; i < "+r+"; i++) {\n          if (i == index) {\n            return "+t+"[i];\n          }\n        }\n      }\n    ";var o=e.shapeInfo.texShape,a=o[0],i=o[1];return 1===i&&1===a?"\n      float "+n+"(int index) {\n        return sampleTexture("+t+", halfCR);\n      }\n    ":1===i?"\n      float "+n+"(int index) {\n        vec2 uv = vec2(0.5, (float(index) + 0.5) / "+a+".0);\n        return sampleTexture("+t+", uv);\n      }\n    ":1===a?"\n      float "+n+"(int index) {\n        vec2 uv = vec2((float(index) + 0.5) / "+i+".0, 0.5);\n        return sampleTexture("+t+", uv);\n      }\n    ":"\n    float "+n+"(int index) {\n      vec2 uv = UVfrom1D("+a+", "+i+", index);\n      return sampleTexture("+t+", uv);\n    }\n  "}function getBroadcastOutputCoordsSampler(e,t,n,r){var o=e.shapeInfo.logicalShape.length,a=t.logicalShape.length,i="int";2===a?i="ivec2":3===a?i="ivec3":4===a&&(i="ivec4");var s=getBroadcastDims(e.shapeInfo.logicalShape,t.logicalShape),u=a-o;return "\n    float "+r+"() {\n      "+i+" coords = getOutputCoords();\n      "+(0===o?"":a<2&&s.length>=1?"coords = 0;":s.map(function(e){return "coords["+(e+u)+"] = 0;"}).join("\n"))+"\n      return get"+n+"("+(a<2&&o>0?"coords":e.shapeInfo.logicalShape.map(function(e,t){return "coords["+(t+u)+"]"}).join(", "))+");\n    }\n  "}function getSamplerAtOutputCoords(e,t,n){var r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),a="get"+o+"AtOutCoords",i=getBroadcastDims(e.shapeInfo.logicalShape,t.logicalShape),s=e.shapeInfo.logicalShape.length,u=t.logicalShape.length,l=n&&(u>s||i.length>0),c=broadcastDimsAreOuter(i),p=e.shapeInfo.isUniform;if(l&&!c)return getBroadcastOutputCoordsSampler(e,t,o,a);var d=sizeFromShape(e.shapeInfo.logicalShape),h="";l&&c&&(h="\n        int mainPart = index / "+d+";\n        index -= mainPart * "+d+";\n      ");var f=t.texShape;if(p)return 1===d?"float "+a+"() {return "+r+";}":"\n      float "+a+"() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                              vec2("+f[0]+", "+f[1]+"));\n        int index = resTexRC.x * "+f[1]+" + resTexRC.y;\n        "+h+"\n        return get"+o+"Flat(index);\n      }\n    ";var m=e.shapeInfo.texShape;return arraysEqual(m,f)?"\n      float "+a+"() {\n        return sampleTexture("+r+", resultUV);\n      }\n    ":"\n    float "+a+"() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+f[0]+", "+f[1]+"));\n      int index = resTexRC.x * "+f[1]+" + resTexRC.y;\n      "+h+"\n      int texR = index / "+m[1]+";\n      int texC = index - texR * "+m[1]+";\n      vec2 uv = (vec2(texC, texR) + halfCR) /\n                 vec2("+m[1]+".0, "+m[0]+".0);\n\n      return sampleTexture("+r+", uv);\n    }\n  "}function getCoordsDataType(e){if(e<=1)return "int";if(2===e)return "ivec2";if(3===e)return "ivec3";if(4===e)return "ivec4";if(5===e)return "ivec5";if(6===e)return "ivec6";throw Error("GPU for rank "+e+" is not yet supported")}function squeezeInputInfo(e,t){var n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function getSqueezedParams(e,t){return t.map(function(t){return e[t]}).join(", ")}var CumSumProgram=function(){return function(e,t,n){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=e[e.length-1],a=n?"<":">";this.userCode="\n      int getIndex(int i) {\n        "+(n?"return "+o+" -i - 1;":"return i;")+"\n      }\n\n      void main() {\n        "+getCoordsDataType(r)+" coords = getOutputCoords();\n        int end = "+getFinalCoord(r,"coords")+";\n        float val = 0.0;\n        for (int i = "+o+" - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx "+a+" end) {\n            continue;\n          }\n          if (idx == end && "+t+") {\n            continue;\n          }\n          "+getFinalCoord(r,"coords")+" = idx;\n          val += getX("+getCoords(r,"coords")+");\n        }\n        setOutput(val);\n      }\n    ";}}();function getCoords(e,t){if(1===e)return ""+t;if(2===e)return t+".x, "+t+".y";if(3===e)return t+".x, "+t+".y, "+t+".z";if(4===e)return t+".x, "+t+".y, "+t+".z, "+t+".w";throw Error("Cumulative sum for rank "+e+" is not yet supported")}function getFinalCoord(e,t){if(1===e)return ""+t;if(2===e)return t+".y";if(3===e)return t+".z";if(4===e)return t+".w";throw Error("Cumulative sum for rank "+e+" is not yet supported")}var TextureUsage,PhysicalTextureType,DepthToSpaceProgram=function(){function e(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode="\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = "+this.getHeightCoordString()+";\n      int w = "+this.getWidthCoordString()+";\n      int d = "+this.getDepthCoordString()+";\n\n      int in_h = h / "+t+";\n      int offset_h = imod(h, "+t+");\n      int in_w = w / "+t+";\n      int offset_w = imod(w, "+t+");\n      int offset_d = (offset_h * "+t+" + offset_w) *\n        "+this.getOutputDepthSize()+";\n      int in_d = d + offset_d;\n\n      float result = "+this.getInputSamplingString()+";\n      setOutput(result);\n    }\n  ";}return e.prototype.getHeightCoordString=function(){return "NHWC"===this.dataFormat?"coords[1]":"coords[2]"},e.prototype.getWidthCoordString=function(){return "NHWC"===this.dataFormat?"coords[2]":"coords[3]"},e.prototype.getDepthCoordString=function(){return "NHWC"===this.dataFormat?"coords[3]":"coords[1]"},e.prototype.getOutputDepthSize=function(){return "NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]},e.prototype.getInputSamplingString=function(){return "NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},e}(),EncodeFloatProgram=function(){return function(e){this.variableNames=["A"],this.outputShape=e,this.userCode="\n      const float FLOAT_MAX = 1.70141184e38;\n      const float FLOAT_MIN = 1.17549435e-38;\n\n      lowp vec4 encode_float(highp float v) {\n        if (isNaN(v)) {\n          return vec4(255, 255, 255, 255);\n        }\n\n        highp float av = abs(v);\n\n        if(av < FLOAT_MIN) {\n          return vec4(0.0, 0.0, 0.0, 0.0);\n        } else if(v > FLOAT_MAX) {\n          return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n        } else if(v < -FLOAT_MAX) {\n          return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n        }\n\n        highp vec4 c = vec4(0,0,0,0);\n\n        highp float e = floor(log2(av));\n        highp float m = exp2(fract(log2(av))) - 1.0;\n\n        c[2] = floor(128.0 * m);\n        m -= c[2] / 128.0;\n        c[1] = floor(32768.0 * m);\n        m -= c[1] / 32768.0;\n        c[0] = floor(8388608.0 * m);\n\n        highp float ebias = e + 127.0;\n        c[3] = floor(ebias / 2.0);\n        ebias -= c[3] * 2.0;\n        c[2] += floor(ebias) * 128.0;\n\n        c[3] += 128.0 * step(0.0, -v);\n\n        return c / 255.0;\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        gl_FragColor = encode_float(x);\n      }\n    ";}}(),FromPixelsProgram=function(){return function(e){this.variableNames=["A"];var t=e[0],n=e[1];this.outputShape=e,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+n+".0, "+t+".0);\n\n        vec4 values = texture2D(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";}}(),GatherProgram=function(){return function(e,t,n){this.variableNames=["A","indices"];var r=e.slice();r[n]=t,this.outputShape=r,this.rank=r.length;var o=getCoordsDataType(this.rank),a=getSourceCoords(e,n);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";}}();function getSourceCoords(e,t){var n=e.length;if(n>4)throw Error("Gather for rank "+n+" is not yet supported");if(1===n)return "int(getIndices(resRC))";for(var r=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[],a=0;a<e.length;a++)a===t?o.push("int(getIndices("+r[a]+"))"):o.push(""+r[a]);return o.join()}function getUnpackedMatrixTextureShapeWidthHeight(e,t){return [t,e]}function getUnpackedArraySizeFromMatrixSize(e,t){return e*t}function getMatrixSizeFromUnpackedArraySize(e,t){if(e%t!=0)throw new Error("unpackedSize ("+e+") must be a multiple of "+t);return e/t}function encodeMatrixToUnpackedArray(e,t,n){var r=getUnpackedArraySizeFromMatrixSize(e.length,n);if(t.length<r)throw new Error("unpackedArray length ("+t.length+") must be >= "+r);for(var o=0,a=0;a<e.length;++a)t[o]=e[a],o+=n;}function decodeMatrixFromUnpackedArray(e,t,n){var r=getMatrixSizeFromUnpackedArraySize(e.length,n);if(t.length<r)throw new Error("matrix length ("+t.length+") must be >= "+r);for(var o=0,a=0;a<e.length;a+=n)t[o++]=e[a];}function getPackedMatrixTextureShapeWidthHeight(e,t){return [Math.ceil(t/2),Math.ceil(e/2)]}function getPackedRGBAArraySizeFromMatrixShape(e,t){var n=getPackedMatrixTextureShapeWidthHeight(e,t);return n[0]*n[1]*4}function encodeMatrixToPackedRGBA(e,t,n,r){var o=getPackedRGBAArraySizeFromMatrixShape(t,n);if(r.length<o)throw new Error("packedRGBA length ("+r.length+") must be >= "+o);for(var a=getPackedMatrixTextureShapeWidthHeight(t,n),i=a[0],s=a[1],u=n%2==1,l=t%2==1,c=Math.floor(n/2),p=Math.floor(t/2),d=u?4:0,h=n,f=0,m=0;m<p;++m){for(var g=2*m*n,v=0;v<c;++v){var y=g+2*v;r[f]=e[y],r[f+1]=e[y+1],r[f+2]=e[y+h],r[f+3]=e[y+h+1],f+=4;}f+=d;}if(u){y=n-1,f=4*(i-1);var x=2*n;for(d=4*i,m=0;m<p;++m)r[f]=e[y],r[f+2]=e[y+n],y+=x,f+=d;}if(l)for(y=(t-1)*n,f=(s-1)*i*4,v=0;v<c;++v)r[f++]=e[y++],r[f++]=e[y++],f+=2;return u&&l&&(r[r.length-4]=e[e.length-1]),r}function decodeMatrixFromPackedRGBA(e,t,n,r){var o=t*n;if(o<r.length)throw new Error("matrix length ("+r.length+") must be >= "+o);for(var a=n%2==1,i=t%2==1,s=Math.floor(n/2),u=Math.floor(t/2),l=getPackedMatrixTextureShapeWidthHeight(t,n),c=l[0],p=l[1],d=a?4:0,h=n+(a?1:0),f=0,m=0,g=n,v=0;v<u;++v){for(var y=0;y<s;++y)r[m++]=e[f++],r[m++]=e[f++],r[g++]=e[f++],r[g++]=e[f++];f+=d,m+=h,g+=h;}if(a){f=4*(c-1);var x=n-1;for(d=4*c,h=2*n,v=0;v<u;++v)r[x]=e[f],r[x+n]=e[f+2],f+=d,x+=h;}if(i)for(f=(p-1)*c*4,x=(t-1)*n,y=0;y<s;++y)r[x++]=e[f++],r[x++]=e[f++],f+=2;return a&&i&&(r[r.length-1]=e[e.length-4]),r}!function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD",e[e.PACK=4]="PACK";}(TextureUsage||(TextureUsage={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32";}(PhysicalTextureType||(PhysicalTextureType={}));var MAX_TEXTURE_SIZE=null;function createWebGLRenderingContext(e){var t=document.createElement("canvas");return t.width=1,t.height=1,createWebGLRenderingContextFromCanvas(t,e)}function createWebGLRenderingContextFromCanvas(e,t){var n,r=ENV.get("WEBGL_VERSION");if(2===r?n=e.getContext("webgl2",t):1===r&&(n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t)),0===r||null==n)throw new Error("This browser does not support WebGL.");return n}function callAndCheck(e,t){var n=t();return checkWebGLError(e),n}var webGLDebugErrorCheckingEnabled=!1;function enableDebugWebGLErrorChecking(e){webGLDebugErrorCheckingEnabled=e;}function checkWebGLError(e){if(webGLDebugErrorCheckingEnabled){var t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+getWebGLErrorMessage(e,t))}}function getWebGLErrorMessage(e,t){switch(t){case e.NO_ERROR:return "NO_ERROR";case e.INVALID_ENUM:return "INVALID_ENUM";case e.INVALID_VALUE:return "INVALID_VALUE";case e.INVALID_OPERATION:return "INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return "INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return "OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return "CONTEXT_LOST_WEBGL";default:return "Unknown error code "+t}}function getExtensionOrThrow(e,t){return throwIfNull(e,function(){return e.getExtension(t)},'Extension "'+t+'" not supported on this browser.')}function createVertexShader(e,t){var n=throwIfNull(e,function(){return e.createShader(e.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(callAndCheck(e,function(){return e.shaderSource(n,t)}),callAndCheck(e,function(){return e.compileShader(n)}),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function createFragmentShader(e,t){var n=throwIfNull(e,function(){return e.createShader(e.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(callAndCheck(e,function(){return e.shaderSource(n,t)}),callAndCheck(e,function(){return e.compileShader(n)}),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw logShaderSourceAndInfoLog(t,e.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var lineNumberRegex=/ERROR: [0-9]+:([0-9]+):/g;function logShaderSourceAndInfoLog(e,t){var n=lineNumberRegex.exec(t);if(null==n)return console.log("Couldn't parse line number in error: "+t),void console.log(e);for(var r=+n[1],o=e.split("\n"),a=o.length.toString().length+2,i=o.map(function(e,t){return rightPad((t+1).toString(),a)+e}),s=0,u=0;u<i.length;u++)s=Math.max(i[u].length,s);var l=i.slice(0,r-1),c=i.slice(r-1,r),p=i.slice(r);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log("%c "+rightPad(c[0],s),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(p.join("\n"));}function createProgram(e){return throwIfNull(e,function(){return e.createProgram()},"Unable to create WebGLProgram.")}function linkProgram(e,t){if(callAndCheck(e,function(){return e.linkProgram(t)}),!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function validateProgram(e,t){if(callAndCheck(e,function(){return e.validateProgram(t)}),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function createStaticVertexBuffer(e,t){var n=throwIfNull(e,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return callAndCheck(e,function(){return e.bindBuffer(e.ARRAY_BUFFER,n)}),callAndCheck(e,function(){return e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}),n}function createStaticIndexBuffer(e,t){var n=throwIfNull(e,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return callAndCheck(e,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)}),callAndCheck(e,function(){return e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)}),n}function queryMaxTextureSize(e){return null!=MAX_TEXTURE_SIZE?MAX_TEXTURE_SIZE:MAX_TEXTURE_SIZE=callAndCheck(e,function(){return e.getParameter(e.MAX_TEXTURE_SIZE)})}function getNumChannels(){return 2===ENV.get("WEBGL_VERSION")?1:4}function createTexture(e){return throwIfNull(e,function(){return e.createTexture()},"Unable to create WebGLTexture.")}function validateTextureSize(e,t,n){var r=queryMaxTextureSize(e);if(t<=0||n<=0){var o="["+t+"x"+n+"]";throw new Error("Requested texture size "+o+" is invalid.")}if(t>r||n>r){o="["+t+"x"+n+"]";throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+("["+r+"x"+r+"]")+".")}}function createFramebuffer(e){return throwIfNull(e,function(){return e.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function bindVertexBufferToProgramAttribute(e,t,n,r,o,a,i){var s=e.getAttribLocation(t,n);return -1!==s&&(callAndCheck(e,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),callAndCheck(e,function(){return e.vertexAttribPointer(s,o,e.FLOAT,!1,a,i)}),callAndCheck(e,function(){return e.enableVertexAttribArray(s)}),!0)}function bindTextureUnit(e,t,n){validateTextureUnit(e,n),callAndCheck(e,function(){return e.activeTexture(e.TEXTURE0+n)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,t)});}function unbindTextureUnit(e,t){validateTextureUnit(e,t),callAndCheck(e,function(){return e.activeTexture(e.TEXTURE0+t)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)});}function getProgramUniformLocationOrThrow(e,t,n){return throwIfNull(e,function(){return e.getUniformLocation(t,n)},'uniform "'+n+'" not present in program.')}function getProgramUniformLocation(e,t,n){return e.getUniformLocation(t,n)}function bindTextureToProgramUniformSampler(e,t,n,r,o){callAndCheck(e,function(){return bindTextureUnit(e,n,o)}),callAndCheck(e,function(){return e.uniform1i(r,o)});}function bindCanvasToFramebuffer(e){callAndCheck(e,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),callAndCheck(e,function(){return e.viewport(0,0,e.canvas.width,e.canvas.height)}),callAndCheck(e,function(){return e.scissor(0,0,e.canvas.width,e.canvas.height)});}function bindColorTextureToFramebuffer(e,t,n){callAndCheck(e,function(){return e.bindFramebuffer(e.FRAMEBUFFER,n)}),callAndCheck(e,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)});}function unbindColorTextureFromFramebuffer(e,t){callAndCheck(e,function(){return e.bindFramebuffer(e.FRAMEBUFFER,t)}),callAndCheck(e,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)});}function validateFramebuffer(e){var t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+getFramebufferErrorMessage(e,t))}function getFramebufferErrorMessage(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return "FRAMEBUFFER_UNSUPPORTED";default:return "unknown error "+t}}function throwIfNull(e,t,n){var r=callAndCheck(e,function(){return t()});if(null==r)throw new Error(n);return r}function validateTextureUnit(e,t){var n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function getTextureShapeFromLogicalShape(e,t){2!==t.length&&(t=squeezeShape(t).newShape);var n=queryMaxTextureSize(e),r=sizeFromShape(t);return t.length<=1&&r<=n?[r,1]:2===t.length&&t[0]<=n&&t[1]<=n?t:3===t.length&&t[0]<=n&&t[1]*t[2]<=n?[t[0],t[1]*t[2]]:4===t.length&&t[0]<=n&&t[1]*t[2]*t[3]<=n?[t[0],t[1]*t[2]*t[3]]:sizeToSquarishShape(r)}var webgl_util=Object.freeze({createWebGLRenderingContext:createWebGLRenderingContext,createWebGLRenderingContextFromCanvas:createWebGLRenderingContextFromCanvas,callAndCheck:callAndCheck,enableDebugWebGLErrorChecking:enableDebugWebGLErrorChecking,checkWebGLError:checkWebGLError,getWebGLErrorMessage:getWebGLErrorMessage,getExtensionOrThrow:getExtensionOrThrow,createVertexShader:createVertexShader,createFragmentShader:createFragmentShader,createProgram:createProgram,linkProgram:linkProgram,validateProgram:validateProgram,createStaticVertexBuffer:createStaticVertexBuffer,createStaticIndexBuffer:createStaticIndexBuffer,queryMaxTextureSize:queryMaxTextureSize,getNumChannels:getNumChannels,createTexture:createTexture,validateTextureSize:validateTextureSize,createFramebuffer:createFramebuffer,bindVertexBufferToProgramAttribute:bindVertexBufferToProgramAttribute,bindTextureUnit:bindTextureUnit,unbindTextureUnit:unbindTextureUnit,getProgramUniformLocationOrThrow:getProgramUniformLocationOrThrow,getProgramUniformLocation:getProgramUniformLocation,bindTextureToProgramUniformSampler:bindTextureToProgramUniformSampler,bindCanvasToFramebuffer:bindCanvasToFramebuffer,bindColorTextureToFramebuffer:bindColorTextureToFramebuffer,unbindColorTextureFromFramebuffer:unbindColorTextureFromFramebuffer,validateFramebuffer:validateFramebuffer,getFramebufferErrorMessage:getFramebufferErrorMessage,getTextureShapeFromLogicalShape:getTextureShapeFromLogicalShape});function getWebGLContextAttributes(){return {alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0}}function createWebGLContext(e){var t,n=getWebGLContextAttributes();return callAndCheck(t=null!=e?createWebGLRenderingContextFromCanvas(e,n):createWebGLRenderingContext(n),function(){return t.disable(t.DEPTH_TEST)}),callAndCheck(t,function(){return t.disable(t.STENCIL_TEST)}),callAndCheck(t,function(){return t.disable(t.BLEND)}),callAndCheck(t,function(){return t.disable(t.DITHER)}),callAndCheck(t,function(){return t.disable(t.POLYGON_OFFSET_FILL)}),callAndCheck(t,function(){return t.disable(t.SAMPLE_COVERAGE)}),callAndCheck(t,function(){return t.enable(t.SCISSOR_TEST)}),callAndCheck(t,function(){return t.enable(t.CULL_FACE)}),callAndCheck(t,function(){return t.cullFace(t.BACK)}),t}function createVertexShader$1(e){return createVertexShader(e,"\n    precision highp float;\n    attribute vec3 clipSpacePos;\n    attribute vec2 uv;\n    varying vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")}function createVertexBuffer(e){return createStaticVertexBuffer(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function createIndexBuffer(e){return createStaticIndexBuffer(e,new Uint16Array([0,1,2,2,1,3]))}function getTextureConfig(e,t){var n,r,o,a,i,s,u,l=e;return 2===ENV.get("WEBGL_VERSION")?(n=l.R32F,r=l.R16F,o=l.RGBA32F,a=l.RED,i=4,s=1,u=l.HALF_FLOAT):(n=e.RGBA,r=e.RGBA,o=l.RGBA,a=e.RGBA,i=4,s=4,u=null!=t?t.HALF_FLOAT_OES:null),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedFloat:o,textureFormatFloat:a,downloadTextureFormat:e.RGBA,downloadUnpackNumChannels:i,defaultNumChannels:s,textureTypeHalfFloat:u}}function createAndConfigureTexture(e,t,n,r,o,a){validateTextureSize(e,t,n);var i=createTexture(e),s=e.TEXTURE_2D;return callAndCheck(e,function(){return e.bindTexture(s,i)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)}),callAndCheck(e,function(){return e.texImage2D(s,0,r,t,n,0,o,a,null)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)}),i}function createFloat32MatrixTexture(e,t,n,r){var o=getUnpackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,o[0],o[1],r.internalFormatFloat,r.textureFormatFloat,e.FLOAT)}function createFloat16MatrixTexture(e,t,n,r){var o=getUnpackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,o[0],o[1],r.internalFormatFloat,r.textureFormatFloat,r.textureTypeHalfFloat)}function createUnsignedBytesMatrixTexture(e,t,n,r){var o=getUnpackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,o[0],o[1],e.RGBA,e.RGBA,e.UNSIGNED_BYTE)}function createPackedMatrixTexture(e,t,n,r){var o=getPackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,o[0],o[1],r.internalFormatPackedFloat,e.RGBA,e.FLOAT)}function bindVertexProgramAttributeStreams(e,t,n){return callAndCheck(e,function(){return e.bindBuffer(e.ARRAY_BUFFER,n)}),bindVertexBufferToProgramAttribute(e,t,"clipSpacePos",n,3,20,0)&&bindVertexBufferToProgramAttribute(e,t,"uv",n,2,20,12)}function uploadPixelDataToTexture(e,t,n){callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,t)}),callAndCheck(e,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)});}function uploadDataToTexture(e,t,n,r,o,a){validateTextureSize(e,n,r),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,t)}),callAndCheck(e,function(){return e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,a,e.FLOAT,o)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)});}function uploadMatrixToTexture(e,t,n,r,o,a,i){var s,u=getUnpackedMatrixTextureShapeWidthHeight(n,r),l=u[0],c=u[1];1===i.defaultNumChannels?s=o:encodeMatrixToUnpackedArray(o,s=new Float32Array(getUnpackedArraySizeFromMatrixSize(o.length,a)),a),uploadDataToTexture(e,t,l,c,s,i.textureFormatFloat);}function uploadMatrixToPackedTexture(e,t,n,r,o,a){var i=getPackedMatrixTextureShapeWidthHeight(n,r),s=i[0],u=i[1],l=new Float32Array(getPackedRGBAArraySizeFromMatrixShape(n,r));encodeMatrixToPackedRGBA(o,n,r,l),uploadDataToTexture(e,t,s,u,l,e.RGBA);}function maybeCreateBufferFromOutputTexture(e,t,n,r,o){var a=t;if(2===ENV.get("WEBGL_VERSION")){var i=e,s=i.createBuffer();callAndCheck(e,function(){return e.bindBuffer(i.PIXEL_PACK_BUFFER,s)});var u=4*getUnpackedArraySizeFromMatrixSize(n*r,o.downloadUnpackNumChannels);callAndCheck(e,function(){return e.bufferData(i.PIXEL_PACK_BUFFER,u,e.STATIC_DRAW)}),callAndCheck(e,function(){return i.readPixels(0,0,r,n,e.RGBA,e.FLOAT,0)}),callAndCheck(e,function(){return e.bindBuffer(i.PIXEL_PACK_BUFFER,null)}),a=s;}return a}function downloadFloat32MatrixFromBuffer(e,t,n,r,o){var a=e,i=new Float32Array(getUnpackedArraySizeFromMatrixSize(n*r,o.downloadUnpackNumChannels));a.bindBuffer(e.ARRAY_BUFFER,t),a.getBufferSubData(e.ARRAY_BUFFER,0,i),a.bindBuffer(e.ARRAY_BUFFER,null);var s=new Float32Array(n*r);return decodeMatrixFromUnpackedArray(i,s,o.downloadUnpackNumChannels),s}function downloadFloat32MatrixFromOutputTexture(e,t,n,r){var o=getUnpackedMatrixTextureShapeWidthHeight(t,n),a=o[0],i=o[1],s=new Float32Array(getUnpackedArraySizeFromMatrixSize(t*n,r.downloadUnpackNumChannels));callAndCheck(e,function(){return e.readPixels(0,0,a,i,r.downloadTextureFormat,e.FLOAT,s)});var u=new Float32Array(t*n);return decodeMatrixFromUnpackedArray(s,u,r.downloadUnpackNumChannels),u}function downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n,r){var o=getUnpackedMatrixTextureShapeWidthHeight(t,n),a=o[0],i=o[1],s=new Uint8Array(getUnpackedArraySizeFromMatrixSize(t*n,4));return callAndCheck(e,function(){return e.readPixels(0,0,a,i,r.downloadTextureFormat,e.UNSIGNED_BYTE,s)}),new Float32Array(s.buffer)}function downloadMatrixFromPackedOutputTexture(e,t,n,r){var o=getPackedMatrixTextureShapeWidthHeight(t,n),a=o[0],i=o[1],s=new Float32Array(getPackedRGBAArraySizeFromMatrixShape(t,n));callAndCheck(e,function(){return e.readPixels(0,0,a,i,e.RGBA,e.FLOAT,s)});var u=new Float32Array(t*n);return decodeMatrixFromPackedRGBA(s,t,n,u)}var gpgpu_util=Object.freeze({getWebGLContextAttributes:getWebGLContextAttributes,createWebGLContext:createWebGLContext,createVertexShader:createVertexShader$1,createVertexBuffer:createVertexBuffer,createIndexBuffer:createIndexBuffer,getTextureConfig:getTextureConfig,createFloat32MatrixTexture:createFloat32MatrixTexture,createFloat16MatrixTexture:createFloat16MatrixTexture,createUnsignedBytesMatrixTexture:createUnsignedBytesMatrixTexture,createPackedMatrixTexture:createPackedMatrixTexture,bindVertexProgramAttributeStreams:bindVertexProgramAttributeStreams,uploadPixelDataToTexture:uploadPixelDataToTexture,uploadMatrixToTexture:uploadMatrixToTexture,uploadMatrixToPackedTexture:uploadMatrixToPackedTexture,maybeCreateBufferFromOutputTexture:maybeCreateBufferFromOutputTexture,downloadFloat32MatrixFromBuffer:downloadFloat32MatrixFromBuffer,downloadFloat32MatrixFromOutputTexture:downloadFloat32MatrixFromOutputTexture,downloadByteEncodedFloatMatrixFromOutputTexture:downloadByteEncodedFloatMatrixFromOutputTexture,downloadMatrixFromPackedOutputTexture:downloadMatrixFromPackedOutputTexture}),GPGPUContext=function(){function e(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.autoDebugValidate=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[],this.gl=null!=e?e:createWebGLContext(),1===ENV.get("WEBGL_VERSION")?(this.textureFloatExtension=getExtensionOrThrow(this.gl,"OES_texture_float"),this.colorBufferFloatExtension=this.gl.getExtension("WEBGL_color_buffer_float"),ENV.get("WEBGL_RENDER_FLOAT32_ENABLED")||(this.textureHalfFloatExtension=getExtensionOrThrow(this.gl,"OES_texture_half_float"),this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float"))):this.colorBufferFloatExtension=getExtensionOrThrow(this.gl,"EXT_color_buffer_float"),this.loseContextExtension=getExtensionOrThrow(this.gl,"WEBGL_lose_context"),this.vertexBuffer=createVertexBuffer(this.gl),this.indexBuffer=createIndexBuffer(this.gl),this.framebuffer=createFramebuffer(this.gl),this.textureConfig=getTextureConfig(this.gl,this.textureHalfFloatExtension);}return e.prototype.dispose=function(){var e=this;if(!this.disposed){null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var t=this.gl;callAndCheck(t,function(){return t.finish()}),callAndCheck(t,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),callAndCheck(t,function(){return t.deleteFramebuffer(e.framebuffer)}),callAndCheck(t,function(){return t.bindBuffer(t.ARRAY_BUFFER,null)}),callAndCheck(t,function(){return t.deleteBuffer(e.vertexBuffer)}),callAndCheck(t,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}),callAndCheck(t,function(){return t.deleteBuffer(e.indexBuffer)}),this.loseContextExtension.loseContext(),this.disposed=!0;}},e.prototype.enableAutomaticDebugValidation=function(e){this.autoDebugValidate=e,enableDebugWebGLErrorChecking(e);},e.prototype.createFloat32MatrixTexture=function(e,t){return this.throwIfDisposed(),createFloat32MatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.createFloat16MatrixTexture=function(e,t){return this.throwIfDisposed(),createFloat16MatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.createUnsignedBytesMatrixTexture=function(e,t){return this.throwIfDisposed(),createUnsignedBytesMatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.uploadPixelDataToTexture=function(e,t){this.throwIfDisposed(),uploadPixelDataToTexture(this.gl,e,t);},e.prototype.createPackedMatrixTexture=function(e,t){return this.throwIfDisposed(),createPackedMatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.deleteMatrixTexture=function(e){var t=this;this.throwIfDisposed(),this.outputTexture===e&&(unbindColorTextureFromFramebuffer(this.gl,this.framebuffer),this.outputTexture=null),callAndCheck(this.gl,function(){return t.gl.deleteTexture(e)});},e.prototype.uploadMatrixToTexture=function(e,t,n,r){this.throwIfDisposed();var o=getNumChannels();return uploadMatrixToTexture(this.gl,e,t,n,r,o,this.textureConfig)},e.prototype.uploadMatrixToPackedTexture=function(e,t,n,r){return this.throwIfDisposed(),uploadMatrixToPackedTexture(this.gl,e,t,n,r,this.textureConfig)},e.prototype.downloadFloat32MatrixFromOutputTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return downloadFloat32MatrixFromOutputTexture(r.gl,t,n,r.textureConfig)})},e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return downloadByteEncodedFloatMatrixFromOutputTexture(r.gl,t,n,r.textureConfig)})},e.prototype.downloadFloat32MatrixFromBuffer=function(e,t,n){return downloadFloat32MatrixFromBuffer(this.gl,e,t,n,this.textureConfig)},e.prototype.maybeCreateBufferFromTexture=function(e,t,n){this.bindTextureToFrameBuffer(e);var r=maybeCreateBufferFromOutputTexture(this.gl,e,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r},e.prototype.createAndWaitForFence=function(){var e=this.createFence(this.gl);return this.pollFence(e)},e.prototype.createFence=function(e){var t,n,r=this;if(ENV.get("WEBGL_FENCE_API_ENABLED")){var o=e,a=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=function(){var e=o.clientWaitSync(a,0,0);return e===o.ALREADY_SIGNALED||e===o.CONDITION_SATISFIED},t=a;}else ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=function(){return r.isQueryAvailable(t,ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return !0};return {query:t,isFencePassed:n}},e.prototype.downloadMatrixFromPackedTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return downloadMatrixFromPackedOutputTexture(r.gl,t,n,r.textureConfig)})},e.prototype.createProgram=function(e){this.throwIfDisposed();var t=this.gl,n=createFragmentShader(t,e),r=createVertexShader$1(t),o=createProgram(t);return callAndCheck(t,function(){return t.attachShader(o,r)}),callAndCheck(t,function(){return t.attachShader(o,n)}),linkProgram(t,o),this.autoDebugValidate&&validateProgram(t,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=bindVertexProgramAttributeStreams(t,this.program,this.vertexBuffer)),o},e.prototype.deleteProgram=function(e){var t=this;this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&callAndCheck(this.gl,function(){return t.gl.deleteProgram(e)});},e.prototype.setProgram=function(e){var t=this;this.throwIfDisposed(),this.program=e,null!=this.program&&this.autoDebugValidate&&validateProgram(this.gl,this.program),callAndCheck(this.gl,function(){return t.gl.useProgram(e)});},e.prototype.getUniformLocation=function(e,t,n){return void 0===n&&(n=!0),this.throwIfDisposed(),n?getProgramUniformLocationOrThrow(this.gl,e,t):getProgramUniformLocation(this.gl,e,t)},e.prototype.getAttributeLocation=function(e,t){var n=this;return this.throwIfDisposed(),callAndCheck(this.gl,function(){return n.gl.getAttribLocation(e,t)})},e.prototype.getUniformLocationNoThrow=function(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)},e.prototype.setInputMatrixTexture=function(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),bindTextureToProgramUniformSampler(this.gl,this.program,e,t,n);},e.prototype.setOutputMatrixTexture=function(e,t,n){this.setOutputMatrixTextureDriver(e,n,t);},e.prototype.setOutputPackedMatrixTexture=function(e,t,n){this.throwIfDisposed();var r=getPackedMatrixTextureShapeWidthHeight(t,n),o=r[0],a=r[1];this.setOutputMatrixTextureDriver(e,o,a);},e.prototype.setOutputMatrixWriteRegion=function(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t);},e.prototype.setOutputPackedMatrixWriteRegion=function(e,t,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},e.prototype.debugValidate=function(){null!=this.program&&validateProgram(this.gl,this.program),validateFramebuffer(this.gl);},e.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var e=this.gl;this.autoDebugValidate&&this.debugValidate(),callAndCheck(e,function(){return e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)});},e.prototype.blockUntilAllProgramsCompleted=function(){var e=this;this.throwIfDisposed(),callAndCheck(this.gl,function(){return e.gl.finish()});},e.prototype.getQueryTimerExtension=function(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=getExtensionOrThrow(this.gl,2===ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},e.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},e.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},e.prototype.beginQuery=function(){if(2===ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),o=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,o),o},e.prototype.endQuery=function(){if(2!==ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT);}else{var t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT);}},e.prototype.waitForQueryAndGetTime=function(e){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(n){switch(n.label){case 0:return [4,repeatedTry(function(){return t.isQueryAvailable(e,ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(e,ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},e.prototype.getQueryTime=function(e,t){if(0===t)return null;if(2===t){var n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)/1e6},e.prototype.isQueryAvailable=function(e,t){if(0===t)return !0;if(2===t){var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),o=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint}o=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),o&&!this.disjoint},e.prototype.pollFence=function(e){var t=this;return new Promise(function(n){t.addItemToPoll(function(){return e.isFencePassed()},function(){return n()});})},e.prototype.pollItems=function(){for(var e=binSearchLastTrue(this.itemsToPoll.map(function(e){return e.isDoneFn})),t=0;t<=e;++t){(0, this.itemsToPoll[t].resolveFn)();}this.itemsToPoll=this.itemsToPoll.slice(e+1);},e.prototype.addItemToPoll=function(e,t){var n=this;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||repeatedTry(function(){return n.pollItems(),0===n.itemsToPoll.length});},e.prototype.bindTextureToFrameBuffer=function(e){this.throwIfDisposed(),bindColorTextureToFramebuffer(this.gl,e,this.framebuffer),this.autoDebugValidate&&validateFramebuffer(this.gl);},e.prototype.unbindTextureToFrameBuffer=function(){null!=this.outputTexture?(bindColorTextureToFramebuffer(this.gl,this.outputTexture,this.framebuffer),this.autoDebugValidate&&validateFramebuffer(this.gl)):unbindColorTextureFromFramebuffer(this.gl,this.framebuffer);},e.prototype.downloadMatrixDriver=function(e,t){this.bindTextureToFrameBuffer(e);var n=t();return this.unbindTextureToFrameBuffer(),n},e.prototype.setOutputMatrixTextureDriver=function(e,t,n){this.throwIfDisposed();var r=this.gl;bindColorTextureToFramebuffer(r,e,this.framebuffer),this.autoDebugValidate&&validateFramebuffer(r),this.outputTexture=e,callAndCheck(r,function(){return r.viewport(0,0,t,n)}),callAndCheck(r,function(){return r.scissor(0,0,t,n)});},e.prototype.setOutputMatrixWriteRegionDriver=function(e,t,n,r){var o=this;this.throwIfDisposed(),callAndCheck(this.gl,function(){return o.gl.scissor(e,t,n,r)});},e.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},e.prototype.throwIfNoProgram=function(){if(null==this.program)throw new Error("No GPU program is currently set.")},e}();function binSearchLastTrue(e){for(var t=0,n=e.length-1,r=-1;t<=n;){var o=t+n>>1;e[o]()?(r=o,t=o+1):n=o-1;}return r}function compileProgram(e,t,n,r){for(var o=t.userCode,a=n.map(function(e,n){var r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.usage===TextureUsage.PACK};return {name:t.variableNames[n],shapeInfo:r}}),i=a.map(function(e){return e.shapeInfo}),s={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.usage===TextureUsage.PACK},u=makeShader(a,s,o,!0===t.supportsBroadcasting),l=e.createProgram(u),c={},p=0;p<t.variableNames.length;p++){var d=t.variableNames[p];c[d]=e.getUniformLocation(l,d,!1);}return {program:t,source:u,webGLProgram:l,uniformLocations:c,gpgpu:e,inShapeInfos:i,outShapeInfo:s}}function validateBinaryAndProgram(e,t){if(e.length!==t.length)throw Error("Binary was compiled with "+e.length+" inputs, but was executed with "+t.length+" inputs");e.forEach(function(e,n){var r=e.logicalShape,o=t[n],a=o.shape;if(!arraysEqual(r,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+r+" and "+a+" must match");if(!e.isUniform||!o.isUniform){var i=e.texShape,s=o.isUniform?null:o.texData.texShape;if(!arraysEqual(i,s))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+i+" and "+s+" must match")}});}function runProgram(e,t,n,r){validateBinaryAndProgram(e.inShapeInfos,t),validateBinaryAndProgram([e.outShapeInfo],[n]);var o=n.texData.texture,a=n.texData.texShape,i=e.gpgpu;n.texData.usage===TextureUsage.PACK?i.setOutputPackedMatrixTexture(o,a[0],a[1]):i.setOutputMatrixTexture(o,a[0],a[1]),i.setProgram(e.webGLProgram),t.forEach(function(t,n){var r=e.program.variableNames[n],o=e.uniformLocations[r];if(null!=o){if(t.isUniform){if(1===sizeFromShape(t.shape))i.gl.uniform1f(o,t.uniformValues[0]);else{var a=t.uniformValues;a instanceof Float32Array||(a=new Float32Array(a)),i.gl.uniform1fv(o,a);}return}var s=t.texData.texture;i.setInputMatrixTexture(s,o,n);}}),null!=r&&r(i,e.webGLProgram),i.executeProgram();}function makeShaderKey(e,t,n){var r="";t.concat(n).forEach(function(e){r+=e.shape+"_"+(e.isUniform?"uniform":e.texData.texShape);});var o=e.userCode,a=(!0===e.supportsBroadcasting).toString(),i=e.constructor.name;return i+="_"+a+"_"+r+"_"+o}var LRNProgram=function(){return function(e,t,n,r,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=e[3]-1;this.outputShape=e;var u="float("+n+") + float("+r+") * sum";a=.5===o?"inversesqrt("+u+")":1===o?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -"+i+"; j <= "+i+"; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  "+s+") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * "+a+";\n        setOutput(val);\n      }\n    ";}}(),LRNGradProgram=function(){return function(e,t,n,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=o,this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < "+this.depth+"; ++d) {\n          int depthBegin = int(max(0.0, float(d - "+t+")));\n          int depthEnd = int(min(float("+this.depth+"),\n              float(d + "+t+" + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = "+this.depth+";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float("+r+") * norm + float("+n+");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float("+r+")\n                * float("+o+")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * "+o+");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ";}}(),MaxPool2DBackpropProgram=function(){return function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,a=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=t*n-1;this.userCode="\n      const ivec2 pads = ivec2("+a+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+o+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = "+s+" - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * "+n+" + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),MatMulProgram=function(){return function(e,t,n,r){void 0===n&&(n=!1),void 0===r&&(r=!1),this.variableNames=["matrixA","matrixB"];var o=e[0],a=n?e[2]:e[1],i=r?t[1]:t[2],s=n?e[1]:e[2];this.outputShape=[o,a,i];var u=function(e,t){return n?"batch, "+t+" + "+e+", aRow":"batch, aRow, "+t+" + "+e},l=function(e,t){return r?"batch, bCol, "+t+" + "+e:"batch, "+t+" + "+e+", bCol"},c=4*Math.floor(s/4),p=s%4;this.userCode=" float dotARowBCol(int batch, int aRow, int bCol) {\n      float result = 0.0;\n      for (int i = 0; i < "+c+"; i += 4) {\n        vec4 a = vec4(\n          getMatrixA("+u(0,"i")+"),\n          getMatrixA("+u(1,"i")+"),\n          getMatrixA("+u(2,"i")+"),\n          getMatrixA("+u(3,"i")+")\n        );\n        vec4 b = vec4(\n          getMatrixB("+l(0,"i")+"),\n          getMatrixB("+l(1,"i")+"),\n          getMatrixB("+l(2,"i")+"),\n          getMatrixB("+l(3,"i")+")\n        );\n\n        result += dot(a, b);\n      }\n\n      if ("+(1===p)+") {\n        result += getMatrixA("+u(0,c)+") *\n          getMatrixB("+l(0,c)+");\n      } else if ("+(2===p)+") {\n        vec2 a = vec2(\n          getMatrixA("+u(0,c)+"),\n          getMatrixA("+u(1,c)+")\n        );\n        vec2 b = vec2(\n          getMatrixB("+l(0,c)+"),\n          getMatrixB("+l(1,c)+")\n        );\n        result += dot(a, b);\n      } else if ("+(3===p)+") {\n        vec3 a = vec3(\n          getMatrixA("+u(0,c)+"),\n          getMatrixA("+u(1,c)+"),\n          getMatrixA("+u(2,c)+")\n        );\n        vec3 b = vec3(\n          getMatrixB("+l(0,c)+"),\n          getMatrixB("+l(1,c)+"),\n          getMatrixB("+l(2,c)+")\n        );\n        result += dot(a, b);\n      }\n\n      return result;\n    }\n\n    void main() {\n      ivec3 resBRC = getOutputCoords();\n      setOutput(dotARowBCol(resBRC.x, resBRC.y, resBRC.z));\n    }\n    ";}}(),MatMulPackedProgram=function(){return function(e,t,n,r,o){void 0===r&&(r=!1),void 0===o&&(o=!1),this.variableNames=["matrixA","matrixB"],this.outputShape=n;var a=r?e[0]:e[1],i=Math.ceil(a/2),s=r?"resultUV.t, center":"center, resultUV.t",u=o?"center, resultUV.s":"resultUV.s, center",l=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],c=o?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];this.userCode="\n      const float sharedDimension = "+i+".0;\n\n      vec4 dot2x2ARowBCol() {\n        vec4 result = vec4(0);\n        for (int ii = 0; ii < "+i+"; ii++) {\n          float i = float(ii);\n          float center = (i + 0.5) / sharedDimension;\n          vec4 a = texture2D(matrixA, vec2("+s+"));\n          vec4 b = texture2D(matrixB, vec2("+u+"));\n\n          result += ("+l[0]+" * "+c[0]+") + ("+l[1]+" * "+c[1]+");\n        }\n        return result;\n      }\n\n      void main() {\n        gl_FragColor = dot2x2ARowBCol();\n      }\n    ";}}(),MultinomialProgram=function(){function e(e,t,n){this.variableNames=["probs"],this.outputShape=[e,n],this.userCode="\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < "+(t-1)+"; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float("+(t-1)+"));\n      }\n    ";}return e.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,r){null==t.seedLoc&&(t.seedLoc=n.getUniformLocation(r,"seed")),n.gl.uniform1f(t.seedLoc,e);}},e}(),OneHotProgram=function(){return function(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float("+r+"), float("+n+"),\n                      float(index == coords.y)));\n      }\n    ";}}(),PackProgram=function(){return function(e){this.variableNames=["A"],this.outputShape=e,this.userCode="\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        int r = rc.x;\n        int c = rc.y;\n        int rp1 = r + 1;\n        int cp1 = c + 1;\n\n        bool cEdge = cp1 >= "+e[1]+";\n        bool rEdge = rp1 >= "+e[0]+";\n\n        gl_FragColor = vec4(\n            getA(r, c),\n            cEdge ? 0. : getA(r, cp1),\n            rEdge ? 0. : getA(rp1, c),\n            rEdge || cEdge ? 0. : getA(rp1, cp1)\n          );\n      }\n    ";}}(),PadProgram=function(){return function(e,t,n){this.variableNames=["x"],this.outputShape=t.map(function(t,n){return t[0]+e[n]+t[1]});var r=e.length,o=getCoordsDataType(r),a=t.map(function(e){return e[0]}).join(","),i=t.map(function(t,n){return t[0]+e[n]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?"\n      "+o+" start = "+o+"("+a+");\n      "+o+" end = "+o+"("+i+");\n\n      void main() {\n        "+o+" outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float("+n+"));\n        } else {\n          "+o+" coords = outC - start;\n          setOutput(getX("+s+"));\n        }\n      }\n    ":"\n        int start = "+a+";\n        int end = "+i+";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float("+n+"));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";}}(),Pool2DProgram=function(){return function(e,t,n){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");var r=e.filterHeight,o=e.filterWidth,a=e.strideHeight,i=e.strideWidth,s=e.padInfo.top,u=e.padInfo.left;this.outputShape=e.outShape;var l="avg"===t,c="0.0";if(l||(c="-1.0 / 0.0"),n)this.userCode="\n        const ivec2 strides = ivec2("+a+", "+i+");\n        const ivec2 pads = ivec2("+s+", "+u+");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < "+r+"; wR++) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+e.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+o+"; wC++) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= "+e.inWidth+") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * "+o+" + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===t&&(p="avgValue / count");var d=4*Math.floor(o/4),h=o%4,f="\n      if ("+l+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec2 strides = ivec2("+a+", "+i+");\n      const ivec2 pads = ivec2("+s+", "+u+");\n      const float initializationValue = "+c+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= "+e.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+c+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < "+r+"; wR++) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= "+e.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+d+"; wC += 4) {\n            int xC = xCCorner + wC;\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              getValue(batch, xR, xC + 3, d)\n            );\n\n            "+f+"\n          }\n\n          int xC = xCCorner + "+d+";\n          if ("+(1===h)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            "+f+"\n          } else if ("+(2===h)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              initializationValue,\n              initializationValue\n            );\n\n            "+f+"\n          } else if ("+(3===h)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              initializationValue\n            );\n\n            "+f+"\n          }\n        }\n        setOutput("+p+");\n      }\n    ";}}}(),ReduceProgram=function(){return function(e,t){this.variableNames=["x"];var n=e.windowSize,r=e.batchSize,o=e.inSize,a=Math.ceil(o/n);this.outputShape=[r,a];var i="0.0",s="";"min"===t?(i="1.0 / 0.0",s="min"):"max"===t&&(i="-1.0 / 0.0",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"sum"===t?u="sumValue":"all"===t?u="allValue":"any"===t&&(u="anyValue");var l=4*Math.floor(n/4),c=n%4,p="\n      if ("+("sum"===t)+") {\n        sumValue += dot(values, ones);\n      } else {\n        minMaxValue = "+s+"(values, minMaxValue);\n      }\n    ",d="vec4";"all"===t?(i="1.0",p="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",d="bvec4"):"any"===t&&(i="0.0",p="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",d="bvec4");var h="";o%n>0&&(h="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      "),this.userCode="\n      const float initializationValue = "+i+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        "+h+"\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+n+";\n\n        vec4 minMaxValue = vec4("+i+");\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < "+l+"; i += 4) {\n          int inIdx = inOffset + i;\n          "+d+" values = "+d+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          "+p+"\n        }\n\n        int inIdx = inOffset + "+l+";\n        if ("+(1===c)+") {\n          "+d+" values = "+d+"(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          "+p+"\n        } else if ("+(2===c)+") {\n          "+d+" values = "+d+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          "+p+"\n        } else if ("+(3===c)+") {\n          "+d+" values = "+d+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          "+p+"\n        }\n        setOutput("+u+");\n      }\n    ";}}(),ResizeBilinearBackpropProgram=function(){return function(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],a=r[2],i=e.shape,s=i[1],u=i[2],l=[n&&s>1?o-1:o,n&&u>1?a-1:a],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],p=l[0]/c[0],d=l[1]/c[1],h=1/p,f=1/d,m=2*Math.ceil(h)+2,g=2*Math.ceil(f)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+p+");\n        const float widthScale = float("+d+");\n\n        const float invHeightScale = float("+h+");\n        const float invWidthScale = float("+f+");\n\n        const int winHeight = int("+m+");\n        const int winWidth = int("+g+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), "+(o-1)+".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), "+(a-1)+".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";}}(),ResizeBilinearProgram=function(){return function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],a=e[1],i=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?a-1:a,r&&n>1?i-1:i],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/l[0]+",\n          "+u[1]/l[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";}}(),ResizeNearestNeigborBackpropProgram=function(){return function(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],a=r[2],i=e.shape,s=i[1],u=i[2],l=[n&&s>1?o-1:o,n&&u>1?a-1:a],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],p=l[0]/c[0],d=l[1]/c[1],h=1/p,f=1/d,m=2*Math.ceil(h)+2,g=2*Math.ceil(f)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+p+");\n        const float widthScale = float("+d+");\n\n        const float invHeightScale = float("+h+");\n        const float invWidthScale = float("+f+");\n\n        const int winHeight = int("+m+");\n        const int winWidth = int("+g+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float("+l[0]+") *\n                (float(dyR) / float("+c[0]+"));\n\n            float sourceFracCol =\n                float("+l[1]+") *\n                  (float(dyC) / float("+c[1]+"));\n\n            int sourceNearestRow = int(min(\n                float(int("+o+") - 1),\n                "+n+" ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int("+a+") - 1),\n                "+n+" ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";}}(),ResizeNearestNeighborProgram=function(){return function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],a=e[1],i=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?a-1:a,r&&n>1?i-1:i],l=[r&&t>1?t-1:t,r&&n>1?n-1:n],c=r?"0.5":"0.0";this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/l[0]+",\n          "+u[1]/l[1]+");\n      const vec2 inputShapeRC = vec2("+a+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + "+c+")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";}}(),ReverseProgram=function(){return function(e,t){this.variableNames=["x"];var n=e.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=e,1!==n){var r=e.map(function(n,r){return function(n){return -1!==t.indexOf(n)&&1!==e[n]?e[n]+" - coords["+n+"] - 1":"coords["+n+"]"}(r)}).join(","),o=getCoordsDataType(n);this.userCode="\n      void main() {\n        "+o+" coords = getOutputCoords();\n        setOutput(getX("+r+"));\n      }\n    ";}else this.userCode="\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX("+e[0]+" - coord - 1));\n        }\n      ";}}(),SegmentOpProgram=function(){return function(e,t){this.variableNames=["x","segmentIds"];var n=e.windowSize,r=e.batchSize,o=e.inSize,a=e.numSegments,i=a*Math.ceil(o/n);this.outputShape=[r,i];var s=4*Math.floor(n/4),u=n%4,l="\n        sumValue += dot(values, filter);\n    ",c="";o%n>0&&(c="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return initializationValue;\n        }\n      ");var p="";o%n>0&&(p="\n        if (inIdx < 0 || inIdx >= "+o+") {\n          return -1.0;\n        }\n      "),this.userCode="\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        "+c+"\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        "+p+"\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          "+a+")) * float("+n+"));\n        int currentSeg = int(mod(float(outIdx), float("+a+")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < "+s+"; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          "+l+"\n        }\n\n        int inIdx = inOffset + "+s+";\n        if ("+(1===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          "+l+"\n        } else if ("+(2===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          "+l+"\n        } else if ("+(3===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          "+l+"\n        }\n        setOutput(sumValue);\n      }\n    ";}}(),SelectProgram=function(){return function(e,t,n){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error("Where for rank "+n+" is not yet supported");if(1===n)o="resRC",r="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<e&&i.push(""+a[u]);r=i.join(),o=s.join();}var l=getCoordsDataType(n);this.userCode="\n      void main() {\n        "+l+" resRC = getOutputCoords();\n        float cVal = getC("+r+");\n        if (cVal >= 1.0) {\n          setOutput(getA("+o+"));\n        } else {\n          setOutput(getB("+o+"));\n        }\n      }\n    ";}}(),SliceProgram=function(){function e(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;var t=getCoordsDataType(this.rank),n=getCoords$1(this.rank);this.userCode="\n      uniform "+t+" start;\n\n      void main() {\n        "+t+" sourceLoc = start + getOutputCoords();\n        setOutput(getSource("+n+"));\n      }\n    ";}return e.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,r){if(null!=t.startLoc||(t.startLoc=n.getUniformLocationNoThrow(r,"start"),null!=t.startLoc))if(1===t.rank)n.gl.uniform1i(t.startLoc,e[0]);else if(2===t.rank)n.gl.uniform2i(t.startLoc,e[0],e[1]);else if(3===t.rank)n.gl.uniform3i(t.startLoc,e[0],e[1],e[2]);else{if(4!==t.rank)throw Error("Slicing for rank "+t.rank+" is not yet supported");n.gl.uniform4i(t.startLoc,e[0],e[1],e[2],e[3]);}}},e}();function getCoords$1(e){if(1===e)return "sourceLoc";if(2===e)return "sourceLoc.x, sourceLoc.y";if(3===e)return "sourceLoc.x, sourceLoc.y, sourceLoc.z";if(4===e)return "sourceLoc.x, sourceLoc.y, sourceLoc.z, sourceLoc.w";throw Error("Slicing for rank "+e+" is not yet supported")}var StridedSliceProgram=function(){return function(e,t,n,r){this.variableNames=["x"];var o=n.filter(function(e,t){return -1===r.indexOf(t)});this.outputShape=o;var a=n.length,i=getCoordsDataType(n.length),s=getCoordsDataType(o.length),u="";if(1===a)u="coords * strides + begin";else{var l=0;u=n.map(function(e,t){return -1===r.indexOf(t)?(l++,1===o.length?"coords * strides["+t+"] + begin["+t+"]":"coords["+(l-1)+"] * strides["+t+"] + begin["+t+"]"):"begin["+t+"]"}).join(",");}this.userCode="\n      "+i+" begin = "+i+"("+e+");\n      "+i+" strides = "+i+"("+t+");\n\n      void main() {\n        "+s+" coords = getOutputCoords();\n        setOutput(getX("+u+"));\n      }\n    ";}}(),TextureManager=function(){function e(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={};}return e.prototype.acquireTexture=function(e,t){var n,r=getPhysicalFromLogicalTextureType(t),o=getKeyFromTextureShape(e,r);if(o in this.freeTextures||(this.freeTextures[o]=[]),o in this.usedTextures||(this.usedTextures[o]=[]),this.freeTextures[o].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var a=this.freeTextures[o].shift();return this.usedTextures[o].push(a),a}return this.numUsedTextures++,this.log(),r===PhysicalTextureType.PACKED_2X2_FLOAT32?n=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===PhysicalTextureType.UNPACKED_FLOAT32?n=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===PhysicalTextureType.UNPACKED_FLOAT16?n=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE&&(n=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[o].push(n),n},e.prototype.releaseTexture=function(e,t,n){if(null!=this.freeTextures){var r=getKeyFromTextureShape(t,getPhysicalFromLogicalTextureType(n));r in this.freeTextures||(this.freeTextures[r]=[]),this.freeTextures[r].push(e),this.numFreeTextures++,this.numUsedTextures--;var o=this.usedTextures[r],a=o.indexOf(e);if(a<0)throw new Error("Cannot release a texture that was never provided by this texture manager");o.splice(a,1),this.log();}},e.prototype.log=function(){if(this.logEnabled){var e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+e+")");}},e.prototype.getNumUsedTextures=function(){return this.numUsedTextures},e.prototype.getNumFreeTextures=function(){return this.numFreeTextures},e.prototype.dispose=function(){var e=this;if(null!=this.freeTextures){for(var t in this.freeTextures)this.freeTextures[t].forEach(function(t){e.gpgpu.deleteMatrixTexture(t);});for(var t in this.usedTextures)this.usedTextures[t].forEach(function(t){e.gpgpu.deleteMatrixTexture(t);});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0;}},e}();function getPhysicalFromLogicalTextureType(e){if(e===TextureUsage.DOWNLOAD||e===TextureUsage.PIXELS)return PhysicalTextureType.PACKED_4X1_UNSIGNED_BYTE;if(e===TextureUsage.UPLOAD)return PhysicalTextureType.UNPACKED_FLOAT32;if(e===TextureUsage.RENDER)return ENV.get("WEBGL_RENDER_FLOAT32_ENABLED")?PhysicalTextureType.UNPACKED_FLOAT32:PhysicalTextureType.UNPACKED_FLOAT16;if(e===TextureUsage.PACK)return PhysicalTextureType.PACKED_2X2_FLOAT32;throw new Error("Unknown logical texture type "+e)}function getKeyFromTextureShape(e,t){return e[0]+"_"+e[1]+"_"+t}var TileProgram=function(){return function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;var o=getCoordsDataType(this.rank),a=getSourceCoords$1(e);this.userCode="\n      void main() {\n        "+o+" resRC = getOutputCoords();\n        setOutput(getA("+a+"));\n      }\n    ";}}();function getSourceCoords$1(e){var t=e.length;if(t>5)throw Error("Tile for rank "+t+" is not yet supported");if(1===t)return "imod(resRC, "+e[0]+")";for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[],o=0;o<e.length;o++)r.push("imod("+n[o]+", "+e[o]+")");return r.join()}var TransposeProgram=function(){return function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;var o=getCoordsDataType(this.rank),a=getSwitchedCoords(t);this.userCode="\n    void main() {\n      "+o+" resRC = getOutputCoords();\n      setOutput(getA("+a+"));\n    }\n    ";}}();function getSwitchedCoords(e){var t=e.length;if(t>6)throw Error("Transpose for rank "+t+" is not yet supported");for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(t),o=0;o<e.length;o++)r[e[o]]=n[o];return r.join()}var ERF_P=.3275911,ERF_A1=.254829592,ERF_A2=-.284496736,ERF_A3=1.421413741,ERF_A4=-1.453152027,ERF_A5=1.061405429,SELU_SCALEALPHA=1.7580993408473768,SELU_SCALE=1.0507009873554805,UnaryOpProgram=function(){function e(e,t){this.variableNames=["A"],this.outputShape=e,this.userCode="\n      uniform float NAN;\n      float unaryOperation(float x) {\n        "+t+"\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";}return e.prototype.getCustomSetupFunc=function(){var e=this;return function(t,n){null==e.startLoc&&(e.startLoc=t.getUniformLocationNoThrow(n,"NAN"),null==e.startLoc)||t.gl.uniform1f(e.startLoc,NaN);}},e}(),CHECK_NAN_SNIPPET$1="if (isNaN(x)) return x;",ABS="return abs(x);",RELU=CHECK_NAN_SNIPPET$1+"\n  return (x < 0.0) ? 0.0 : x;\n",ELU="return (x >= 0.0) ? x : (exp(x) - 1.0);",SELU="\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = "+SELU_SCALEALPHA+";\n  float scale = "+SELU_SCALE+";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";function STEP(e){return void 0===e&&(e=0),CHECK_NAN_SNIPPET$1+"\n    return x > 0.0 ? 1.0 : float("+e+");\n  "}var NEG="return -x;",CEIL="return ceil(x);",FLOOR="return floor(x);",SIGN="\n  if (isNaN(x)) { return 0.0; }\n  return sign(x);\n",ROUND="\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n",EXP="return exp(x);",EXPM1="return exp(x) - 1.0;",LOG="if (x < 0.0) return NAN;\n  return log(x);",LOG1P="return log(1.0 + x);",SQRT="return sqrt(x);",RSQRT="return inversesqrt(x);",SIGMOID="return 1.0 / (1.0 + exp(-1.0 * x));",SOFTPLUS="\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n",SIN=CHECK_NAN_SNIPPET$1+"\n  return sin(x);\n",COS=CHECK_NAN_SNIPPET$1+"\n  return cos(x);\n",TAN="return tan(x);",ASIN="return asin(x);",ACOS="return acos(x);",ATAN=CHECK_NAN_SNIPPET$1+"\n  return atan(x);\n",SINH="\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n",COSH="\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n",TANH="\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n",ASINH="return log(x + sqrt(x * x + 1.0));",ACOSH=CHECK_NAN_SNIPPET$1+"\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));",ATANH=CHECK_NAN_SNIPPET$1+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;",ERF='\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = '+ERF_P+";\n  float a1 = "+ERF_A1+";\n  float a2 = "+ERF_A2+";\n  float a3 = "+ERF_A3+";\n  float a4 = "+ERF_A4+";\n  float a5 = "+ERF_A5+";\n\n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n",SQUARE="return x * x;",RECIPROCAL="return 1.0 / x;",LOGICAL_NOT="return float(!(x >= 1.0));",TO_INT="return float(int(x));",UnpackProgram=function(){return function(e){this.variableNames=["A"],this.outputShape=e,this.userCode="\n      const vec2 onePixel = 1. / vec2("+e[1]+", "+e[0]+");\n\n      void main() {\n        ivec2 rc = getOutputCoords();\n        vec2 modCoord = mod(vec2(rc.y, rc.x), 2.);\n\n        vec4 packedInput = texture2D(A,\n          resultUV - step(1., modCoord) * onePixel);\n\n        setOutput(\n          modCoord.x == 0. ?\n            (modCoord.y == 0. ? packedInput.r : packedInput.b) :\n            (modCoord.y == 0. ? packedInput.g : packedInput.a)\n        );\n      }\n    ";}}();function concat1d_(e){return concat(e,0)}function concat2d_(e,t){return concat(e,t)}function concat3d_(e,t){return concat(e,t)}function concat4d_(e,t){return concat(e,t)}function concat_(e,t){void 0===t&&(t=0),assert(e.length>=1,"Pass at least one tensor to concat");var n=convertToTensorArray(e,"tensors","concat");t=parseAxisParam(t,n[0].shape)[0];var r=computeOutShape(n.map(function(e){return e.shape}),t);if(0===sizeFromShape(r))return tensor([],r);if(1===(n=n.filter(function(e){return e.size>0})).length)return n[0];var o=n.map(function(e){return e.shape});assertParamsConsistent(o,t);var a=n;return ENV.engine.runKernel(function(e){return e.concat(n,t)},a,function(e){var n=o.map(function(e){return e[t]});return split$1(e,n,t).map(function(e){return function(){return e}})})}function split_(e,t,n){void 0===n&&(n=0);var r,o=convertToTensor(e,"x","split");n=parseAxisParam(n,o.shape)[0],"number"==typeof t?(assert(o.shape[n]%t==0,"Number of splits must evenly divide the axis."),r=Array(t).fill(o.shape[n]/t)):(assert(o.shape[n]===t.reduce(function(e,t){return e+t}),"The sum of sizes must match the size of the axis dimension."),r=t);return ENV.engine.runKernel(function(e){return e.split(o,r,n)},{$x:o},function(e){return {$x:function(){return concat(e,n)}}})}var concat=op({concat_:concat_}),concat1d=op({concat1d_:concat1d_}),concat2d=op({concat2d_:concat2d_}),concat3d=op({concat3d_:concat3d_}),concat4d=op({concat4d_:concat4d_}),split$1=op({split_:split_});function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var alea=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function o(e,t){var n=new function(e){var t,n=this,r=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t);}return 2.3283064365386963e-10*(t>>>0)});n.next=function(){var e=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null;}(e),o=t&&t.state,a=n.next;return a.int32=function(){return 4294967296*n.next()|0},a.double=function(){return a()+1.1102230246251565e-16*(2097152*a()|0)},a.quick=a,o&&("object"==typeof o&&r(o,n),a.state=function(){return r(n,{})}),a}t&&t.exports?t.exports=o:n&&n.amd?n(function(){return o}):this.alea=o;}(0,e,!1);}),xor128=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function o(e,t){var n=new function(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next();}(e),o=t&&t.state,a=function(){return (n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},a.int32=n.next,a.quick=a,o&&("object"==typeof o&&r(o,n),a.state=function(){return r(n,{})}),a}t&&t.exports?t.exports=o:n&&n.amd?n(function(){return o}):this.xor128=o;}(0,e,!1);}),xorwow=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function o(e,t){var n=new function(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next();}(e),o=t&&t.state,a=function(){return (n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},a.int32=n.next,a.quick=a,o&&("object"==typeof o&&r(o,n),a.state=function(){return r(n,{})}),a}t&&t.exports?t.exports=o:n&&n.amd?n(function(){return o}):this.xorwow=o;}(0,e,!1);}),xorshift7=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.x=e.x.slice(),t.i=e.i,t}function o(e,t){null==e&&(e=+new Date);var n=new function(e){var t=this;t.next=function(){var e,n,r=t.x,o=t.i;return e=r[o],n=(e^=e>>>7)^e<<24,n^=(e=r[o+1&7])^e>>>10,n^=(e=r[o+3&7])^e>>>3,n^=(e=r[o+4&7])^e<<7,e=r[o+7&7],n^=(e^=e<<13)^e<<9,r[o]=n,t.i=o+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next();}(t,e);}(e),o=t&&t.state,a=function(){return (n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},a.int32=n.next,a.quick=a,o&&(o.x&&r(o,n),a.state=function(){return r(n,{})}),a}t&&t.exports?t.exports=o:n&&n.amd?n(function(){return o}):this.xorshift7=o;}(0,e,!1);}),xor4096=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function o(e,t){null==e&&(e=+new Date);var n=new function(e){var t=this;t.next=function(){var e,n,r=t.w,o=t.X,a=t.i;return t.w=r=r+1640531527|0,n=o[a+34&127],e=o[a=a+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=o[a]=n^e,t.i=a,n+(r^r>>>16)|0},function(e,t){var n,r,o,a,i,s=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),o=0,a=-32;a<u;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),0===a&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(i=i+1640531527|0,o=0==(n=s[127&a]^=r+i)?o+1:0);for(o>=128&&(s[127&(t&&t.length||0)]=-1),o=127,a=512;a>0;--a)r=s[o+34&127],n=s[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[o]=r^n;e.w=i,e.X=s,e.i=o;}(t,e);}(e),o=t&&t.state,a=function(){return (n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},a.int32=n.next,a.quick=a,o&&(o.X&&r(o,n),a.state=function(){return r(n,{})}),a}t&&t.exports?t.exports=o:n&&n.amd?n(function(){return o}):this.xor4096=o;}(0,e,!1);}),tychei=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function o(e,t){var n=new function(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,o=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^o,t.a=o-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next();}(e),o=t&&t.state,a=function(){return (n.next()>>>0)/4294967296};return a.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},a.int32=n.next,a.quick=a,o&&("object"==typeof o&&r(o,n),a.state=function(){return r(n,{})}),a}t&&t.exports?t.exports=o:n&&n.amd?n(function(){return o}):this.tychei=o;}(0,e,!1);}),seedrandom=createCommonjsModule(function(e){!function(t,n){var r,o=this,a=256,i=6,s="random",u=n.pow(a,i),l=n.pow(2,52),c=2*l,p=a-1;function d(e,d,g){var v=[],y=f(function e(t,n){var r,o=[],a=typeof t;if(n&&"object"==a)for(r in t)try{o.push(e(t[r],n-1));}catch(e){}return o.length?o:"string"==a?t:t+"\0"}((d=1==d?{entropy:!0}:d||{}).entropy?[e,m(t)]:null==e?function(){try{var e;return r&&(e=r.randomBytes)?e=e(a):(e=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(e)),m(e)}catch(e){var n=o.navigator,i=n&&n.plugins;return [+new Date,o,i,o.screen,m(t)]}}():e,3),v),x=new function(e){var t,n=e.length,r=this,o=0,i=r.i=r.j=0,s=r.S=[];n||(e=[n++]);for(;o<a;)s[o]=o++;for(o=0;o<a;o++)s[o]=s[i=p&i+e[o%n]+(t=s[o])],s[i]=t;(r.g=function(e){for(var t,n=0,o=r.i,i=r.j,s=r.S;e--;)t=s[o=p&o+1],n=n*a+s[p&(s[o]=s[i=p&i+t])+(s[i]=t)];return r.i=o,r.j=i,n})(a);}(v),T=function(){for(var e=x.g(i),t=u,n=0;e<l;)e=(e+n)*a,t*=a,n=x.g(1);for(;e>=c;)e/=2,t/=2,n>>>=1;return (e+n)/t};return T.int32=function(){return 0|x.g(4)},T.quick=function(){return x.g(4)/4294967296},T.double=T,f(m(x.S),t),(d.pass||g||function(e,t,r,o){return o&&(o.S&&h(o,x),e.state=function(){return h(x,{})}),r?(n[s]=e,t):e})(T,y,"global"in d?d.global:this==n,d.state)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function f(e,t){for(var n,r=e+"",o=0;o<r.length;)t[p&o]=p&(n^=19*t[p&o])+r.charCodeAt(o++);return m(t)}function m(e){return String.fromCharCode.apply(0,e)}if(n["seed"+s]=d,f(n.random(),t),e.exports){e.exports=d;try{r=require("crypto");}catch(e){}}}([],Math);});seedrandom.alea=alea,seedrandom.xor128=xor128,seedrandom.xorwow=xorwow,seedrandom.xorshift7=xorshift7,seedrandom.xor4096=xor4096,seedrandom.tychei=tychei;var seedrandom$1=seedrandom,seedrandom_1=seedrandom$1.alea,MPRandGauss=function(){function e(e,t,n,r,o){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=o||Math.random();this.random=seedrandom_1(a.toString());}return e.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e=this.nextVal;return this.nextVal=NaN,e}for(var t,n,r=!1;!r;){var o=void 0,a=void 0,i=void 0;do{i=(o=2*this.random()-1)*o+(a=2*this.random()-1)*a;}while(i>=1||0===i);var s=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*o*s,n=this.mean+this.stdDev*a*s,this.truncated&&!this.isValidTruncated(t)||(r=!0);}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)},e.prototype.convertValue=function(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)},e.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},e}();function clone_(e){var t=convertToTensor(e,"x","clone");return ENV.engine.runKernel(function(e){return Tensor.make(t.shape,{dataId:t.dataId},t.dtype)},{$x:t},function(e){return {$x:function(){return e.toFloat()}}})}function eye_(e,t,n,r){void 0===r&&(r="float32"),null==t&&(t=e);for(var o=buffer([e,t],r),a=e<=t?e:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(e,t);if(null==n)return s;if(1===n.length)return tile(expandDims(s,0),[n[0],1,1]);if(2===n.length)return tile(expandDims(expandDims(s,0),0),[n[0],n[1],1,1]);if(3===n.length)return tile(expandDims(expandDims(expandDims(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}function randomNormal_(e,t,n,r,o){if(void 0===t&&(t=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new MPRandGauss(t,n,r,!1,o),i=buffer(e,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}function truncatedNormal_(e,t,n,r,o){if(void 0===t&&(t=0),void 0===n&&(n=1),null!=r&&"bool"===r)throw new Error("Unsupported data type "+r);for(var a=new MPRandGauss(t,n,r,!0,o),i=buffer(e,r),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}function randomUniform_(e,t,n,r){void 0===t&&(t=0),void 0===n&&(n=1),void 0===r&&(r="float32");for(var o=buffer(e,r),a=0;a<o.values.length;a++)o.values[a]=randUniform(t,n);return o.toTensor()}function rand_(e,t,n){var r=sizeFromShape(e),o=null;if(null==n||"float32"===n)o=new Float32Array(r);else if("int32"===n)o=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);o=new Uint8Array(r);}for(var a=0;a<r;a++)o[a]=t();return Tensor.make(e,{values:o},n)}function multinomial_(e,t,n,r){void 0===r&&(r=!1);var o=convertToTensor(e,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);n=n||Math.random();var s=1===i?o.as2D(1,-1):o,u=ENV.engine.runKernel(function(e){return e.multinomial(s,r,t,n)},{logits2D:s});return 1===i?u.as1D():u}function oneHot_(e,t,n,r){void 0===n&&(n=1),void 0===r&&(r=0);var o=convertToTensor(e,"indices","oneHot","int32");if(assert("int32"===o.dtype,"Indices must be of dtype `int32`"),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);return ENV.engine.runKernel(function(e){return e.oneHot(o,t,n,r)},{$indices:o},function(e){return {$indices:function(){return zerosLike(o)}}})}function fromPixels_(e,t){if(void 0===t&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");return ENV.engine.fromPixels(e,t)}function toPixels(e,t){return __awaiter(this,void 0,void 0,function(){var n,r,o,a,i,s,u,l,c,p,d,h,f,m,g,v,y,x,T,b;return __generator(this,function(S){switch(S.label){case 0:if(2!==(n=convertToTensor(e,"img","toPixels","int32")).rank&&3!==n.rank)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+n.rank+".");if(r=n.shape.slice(0,2),o=r[0],a=r[1],(i=2===n.rank?1:n.shape[2])>4||2===i)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return s=n.min(),u=n.max(),[4,s.data()];case 1:return l=S.sent()[0],[4,u.data()];case 2:if(c=S.sent()[0],s.dispose(),u.dispose(),"float32"===n.dtype){if(l<0||c>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+l+" - "+c+"].")}else{if("int32"!==n.dtype)throw new Error("Unsupported type for toPixels: "+n.dtype+". Please use float32 or int32 tensors.");if(l<0||c>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+l+" - "+c+"].")}return [4,n.data()];case 3:for(p=S.sent(),d="float32"===n.dtype?255:1,h=new Uint8ClampedArray(a*o*4),f=0;f<o*a;++f)m=void 0,g=void 0,v=void 0,y=void 0,1===i?(m=p[f]*d,g=p[f]*d,v=p[f]*d,y=255):3===i?(m=p[3*f]*d,g=p[3*f+1]*d,v=p[3*f+2]*d,y=255):4===i&&(m=p[4*f]*d,g=p[4*f+1]*d,v=p[4*f+2]*d,y=p[4*f+3]*d),h[(x=4*f)+0]=Math.round(m),h[x+1]=Math.round(g),h[x+2]=Math.round(v),h[x+3]=Math.round(y);return null!=t&&(t.width=a,t.height=o,T=t.getContext("2d"),b=new ImageData(h,a,o),T.putImageData(b,0,0)),n!==e&&n.dispose(),[2,h]}})})}function reshape_(e,t){var n=convertToTensor(e,"x","reshape");t=inferFromImplicitShape(t,n.size),assert(n.size===sizeFromShape(t),"new shape and old shape must have the same number of elements.");return ENV.engine.runKernel(function(e){return e.reshape(n,t)},{$x:n},function(e){return {$x:function(){return e.reshape(n.shape)}}})}function squeeze_(e,t){var n=convertToTensor(e,"x","squeeze");return reshape(n,squeezeShape(n.shape,t).newShape)}function cast_(e,t){var n=convertToTensor(e,"x","cast");return ENV.engine.runKernel(function(e){return e.cast(n,t)},{$x:n},function(e){return {$x:function(){return e.clone()}}})}function tile_(e,t){var n=convertToTensor(e,"x","tile");assert(n.rank===t.length,"Error in transpose: rank of input "+n.rank+" must match length of reps "+t+".");return ENV.engine.runKernel(function(e){return e.tile(n,t)},{$x:n},function(e){return {$x:function(){var r=zerosLike(n);if(1===n.rank)for(var o=0;o<t[0];++o)r=r.add(e.slice([o*n.shape[0]],[n.shape[0]]));else if(2===n.rank)for(o=0;o<t[0];++o)for(var a=0;a<t[1];++a)r=r.add(e.slice([o*n.shape[0],a*n.shape[1]],[n.shape[0],n.shape[1]]));else if(3===n.rank)for(o=0;o<t[0];++o)for(a=0;a<t[1];++a)for(var i=0;i<t[2];++i)r=r.add(e.slice([o*n.shape[0],a*n.shape[1],i*n.shape[2]],[n.shape[0],n.shape[1],n.shape[2]]));else{if(4!==n.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+n.rank+" tensors yet.");for(o=0;o<t[0];++o)for(a=0;a<t[1];++a)for(i=0;i<t[2];++i)for(var s=0;s<t[3];++s)r=r.add(e.slice([o*n.shape[0],a*n.shape[1],i*n.shape[2],s*n.shape[3]],[n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));}return r}}})}function pad1d_(e,t,n){return void 0===n&&(n=0),assert(2===t.length,"Invalid number of paddings. Must be length of 2."),pad(e,[t],n)}function pad2d_(e,t,n){return void 0===n&&(n=0),assert(2===t.length&&2===t[0].length&&2===t[1].length,"Invalid number of paddings. Must be length of 2 each."),pad(e,t,n)}function pad3d_(e,t,n){return void 0===n&&(n=0),assert(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,"Invalid number of paddings. Must be length of 2 each."),pad(e,t,n)}function pad4d_(e,t,n){return void 0===n&&(n=0),assert(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,"Invalid number of paddings. Must be length of 2 each."),pad(e,t,n)}function pad_(e,t,n){void 0===n&&(n=0);var r=convertToTensor(e,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o=t.map(function(e){return e[0]});return ENV.engine.runKernel(function(e){return e.pad(r,t,n)},{$x:r},function(e){return {$x:function(){return e.slice(o,r.shape)}}})}function stack_(e,t){void 0===t&&(t=0);var n=convertToTensorArray(e,"tensors","stack");if(assert(n.length>=1,"Pass at least one tensor to tf.stack"),1===n.length)return n[0].expandDims(t);var r=n[0].rank,o=n[0].shape,a=n[0].dtype;assert(t<=r,"Axis must be <= rank of the tensor"),n.forEach(function(e){assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes");}),n.forEach(function(e){assert(a===e.dtype,"All tensors passed to stack must have matching dtypes");});var i=n.map(function(e){return e.expandDims(t)});return concat(i,t)}function batchToSpaceND_(e,t,n){var r=convertToTensor(e,"x","batchToSpaceND"),o=t.reduce(function(e,t){return e*t});assert(r.rank>=1+t.length,"input rank should be > than [blockShape] but got "+r.rank),assert(n.length===t.length,"crops.shape[0] must be equal to [blockShape] but got "+n.length),assert(r.shape[0]%o==0,"input tensor batch must be divisible by prod( blockShape )");return ENV.engine.runKernel(function(e){return e.batchToSpaceND(r,t,n)},{$x:r},function(e){return {$x:function(){return e.spaceToBatchND(t,n)}}})}function spaceToBatchND_(e,t,n){var r=convertToTensor(e,"x","spaceToBatchND");assert(r.rank>=1+t.length,"input rank "+r.rank+" should be > than [blockShape] "+t.length),assert(n.length===t.length,"paddings.shape[0] "+n.length+" must be equal to [blockShape] "+t.length),assert(r.shape.reduce(function(e,r,o){return o>0&&o<=t.length?e&&(r+n[o-1][0]+n[o-1][1])%t[o-1]==0:e},!0),"input spatial dimensions "+r.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+t.toString());return ENV.engine.runKernel(function(e){return e.spaceToBatchND(r,t,n)},{$x:r},function(e){return {$x:function(){return e.batchToSpaceND(t,n)}}})}function unstack_(e,t){void 0===t&&(t=0);for(var n,r=convertToTensor(e,"x","unstack"),o=r.shape[t],a=Array(r.rank-1).fill(0),i=0,s=0;s<r.rank;s++)s!==t&&(a[i]=r.shape[s],i++);n=Array(o).fill(1);var u=Array(r.rank).fill(0),l=r.shape.slice();return n.map(function(e){l[t]=e;var n=r.slice(u,l);return u[t]+=e,n.reshape(a)})}function cumsum_(e,t,n,r){void 0===t&&(t=0),void 0===n&&(n=!1),void 0===r&&(r=!1);var o=convertToTensor(e,"x","cumsum"),a=getAxesPermutation([t|=0],o.rank),i=o;null!=a&&(i=o.transpose(a));var s=getInnerMostAxes(1,o.rank)[0],u=ENV.engine.runKernel(function(e){return e.cumsum(i,s,n,r)},{permutedX:i},function(e){return {permutedX:function(){return e.cumsum(t,n,!r)}}});return null!=a&&(u=u.transpose(a)),u}function expandDims_(e,t){void 0===t&&(t=0);var n=convertToTensor(e,"x","expandDims");assert(t<=n.rank,"Axis must be <= rank of the tensor");var r=n.shape.slice();return t<0&&(assert(-(n.rank+1)<=t,"Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"),t=n.rank+t+1),r.splice(t,0,1),reshape(n,r)}function depthToSpace_(e,t,n){void 0===n&&(n="NHWC");var r=convertToTensor(e,"x","depthToSpace"),o="NHWC"===n?r.shape[1]:r.shape[2],a="NHWC"===n?r.shape[2]:r.shape[3],i="NHWC"===n?r.shape[3]:r.shape[1];return assert(o*t>=0,"Negative dimension size caused by overflow when multiplying\n      "+o+" and "+t+"  for depthToSpace with input shape\n      "+r.shape),assert(a*t>=0,"Negative dimension size caused by overflow when multiplying\n      "+a+" and "+t+" for depthToSpace with input shape\n          "+r.shape),assert(i%(t*t)==0,"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+r.shape),ENV.engine.runKernel(function(e){return e.depthToSpace(r,t,n)},{$x:r})}function buffer(e,t,n){return void 0===t&&(t="float32"),new TensorBuffer(e,t,n)}function print(e,t){void 0===t&&(t=!1),console.log(e.toString(t));}var batchToSpaceND=op({batchToSpaceND_:batchToSpaceND_}),cast=op({cast_:cast_}),clone=op({clone_:clone_}),cumsum=op({cumsum_:cumsum_}),depthToSpace=op({depthToSpace_:depthToSpace_}),expandDims=op({expandDims_:expandDims_}),eye=op({eye_:eye_}),fromPixels=op({fromPixels_:fromPixels_}),multinomial=op({multinomial_:multinomial_}),oneHot=op({oneHot_:oneHot_}),pad=op({pad_:pad_}),pad1d=op({pad1d_:pad1d_}),pad2d=op({pad2d_:pad2d_}),pad3d=op({pad3d_:pad3d_}),pad4d=op({pad4d_:pad4d_}),rand=op({rand_:rand_}),randomNormal=op({randomNormal_:randomNormal_}),randomUniform=op({randomUniform_:randomUniform_}),reshape=op({reshape_:reshape_}),spaceToBatchND=op({spaceToBatchND_:spaceToBatchND_}),squeeze=op({squeeze_:squeeze_}),stack=op({stack_:stack_}),tile=op({tile_:tile_}),truncatedNormal=op({truncatedNormal_:truncatedNormal_}),unstack=op({unstack_:unstack_});function whereImpl(e,t){for(var n=[],r=0;r<t.length;r++)t[r]&&n.push(r);var o=buffer(e,"int32"),a=buffer([n.length,e.length],"int32");for(r=0;r<n.length;r++){var i=o.indexToLoc(n[r]),s=r*e.length;a.values.set(i,s);}return a.toTensor()}var BEFORE_PAGING_CONSTANT=300,SIZE_UPLOAD_UNIFORM=32,MathBackendWebGL=function(){function e(e,t){if(void 0===t&&(t=!0),this.gpgpu=e,this.delayedStorage=t,this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.lruDataGPU=[],this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.binaryCache={},this.disposed=!1,ENV.get("WEBGL_VERSION")<1)throw new Error("WebGL is not supported on this device");ENV.get("IS_BROWSER")&&(this.canvas=document.createElement("canvas")),null==e?(this.gpgpu=new GPGPUContext(createWebGLContext(this.canvas)),this.gpgpuCreatedLocally=!0):this.gpgpuCreatedLocally=!1,ENV.get("WEBGL_PAGING_ENABLED")&&(this.NUM_BYTES_BEFORE_PAGING=window.screen.height*window.screen.width*window.devicePixelRatio*BEFORE_PAGING_CONSTANT),this.textureManager=new TextureManager(this.gpgpu);}return e.prototype.register=function(e,t,n){if(this.texData.has(e))throw new Error("Data buffer is already registered");this.texData.set(e,{shape:t,dtype:n,values:null,texture:null,complexTensors:null,texShape:null,usage:TextureUsage.RENDER});},e.prototype.setDataMover=function(e){this.texData=new DataStorage(e);},e.prototype.fromPixels=function(e,t){if(null==e)throw new Error("pixels passed to tf.fromPixels() can not be null");var n=[e.height,e.width],r=[e.height,e.width,t];if(!(e instanceof HTMLVideoElement||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData))throw new Error("pixels passed to tf.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement or ImageData, but was "+e.constructor.name);if(e instanceof HTMLVideoElement){if(null==this.fromPixelsCanvas){if(!ENV.get("IS_BROWSER"))throw new Error("Can't read pixels from HTMLImageElement outside the browser.");if("complete"!==document.readyState)throw new Error("The DOM is not ready yet. Please call tf.fromPixels() once the DOM is ready. One way to do that is to add an event listener for `DOMContentLoaded` on the document object");this.fromPixelsCanvas=document.createElement("canvas");}this.fromPixelsCanvas.width=e.width,this.fromPixelsCanvas.height=e.height,this.fromPixelsCanvas.getContext("2d").drawImage(e,0,0,e.width,e.height),e=this.fromPixelsCanvas;}var o=this.makeTensorHandle(n,"int32");this.texData.get(o.dataId).usage=TextureUsage.PIXELS,this.gpgpu.uploadPixelDataToTexture(this.getTexture(o.dataId),e);var a=new FromPixelsProgram(r),i=this.compileAndRun(a,[o]);return this.disposeData(o.dataId),i},e.prototype.makeTensorHandle=function(e,t){var n={};return this.register(n,e,t),{dataId:n,shape:e,dtype:t}},e.prototype.write=function(e,t){if(null==t)throw new Error("MathBackendWebGL.write(): values can not be null");var n=this.texData.get(e),r=n.texture,o=n.texShape,a=n.usage;if("complex64"===n.dtype)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");null!=r&&(this.releaseTexture(e,r,o,a),n.texture=null,n.texShape=null),n.usage=TextureUsage.UPLOAD,n.values=t,this.delayedStorage||this.uploadToGPU(e);},e.prototype.readSync=function(e){var t=this.texData.get(e),n=t.values,r=t.dtype,o=t.complexTensors;if(null!=n)return this.cacheOnCPU(e),n;var a,i,s=null!=this.activeTimers;(s&&(a=performance.now()),"complex64"===r)?i=mergeRealAndImagArrays(o.real.dataSync(),o.imag.dataSync()):i=this.getValuesFromTexture(e);return s&&(this.downloadWaitMs+=performance.now()-a),this.cacheOnCPU(e,i),t.values},e.prototype.read=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o,a,i,s,u;return __generator(this,function(l){switch(l.label){case 0:if(this.pendingRead.has(e))return t=this.pendingRead.get(e),[2,new Promise(function(e){return t.push(e)})];if(n=this.texData.get(e),r=n.texture,o=n.values,a=n.texShape,null!=o)return this.cacheOnCPU(e),[2,o];if(this.pendingRead.set(e,[]),!ENV.get("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===ENV.get("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return i=this.gpgpu.maybeCreateBufferFromTexture(r,a[0],a[1]),[4,this.gpgpu.createAndWaitForFence()];case 1:return l.sent(),s=i instanceof WebGLTexture?this.getValuesFromTexture(e):this.gpgpu.downloadFloat32MatrixFromBuffer(i,a[0],a[1]),this.cacheOnCPU(e,s),u=this.pendingRead.get(e),this.pendingRead.delete(e),u.forEach(function(e){return e(s)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)),[2,s]}})})},e.prototype.getValuesFromTexture=function(e){var t=this.texData.get(e),n=t.shape,r=t.dtype,o=t.texture,a=t.texShape;if(ENV.get("WEBGL_DOWNLOAD_FLOAT_ENABLED"))return this.texData.get(e).usage===TextureUsage.PACK?this.gpgpu.downloadMatrixFromPackedTexture(o,a[0],a[1]):this.gpgpu.downloadFloat32MatrixFromOutputTexture(o,a[0],a[1]);var i=this.makeTensorHandle(n,"float32");i.size=sizeFromShape(n),this.texData.get(i.dataId).usage=TextureUsage.DOWNLOAD;var s=new EncodeFloatProgram(n);this.compileAndRun(s,[{shape:n,dtype:r,dataId:e}],i,null,!1);var u=this.texData.get(i.dataId),l=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture,u.texShape[0],u.texShape[1]);return this.disposeData(i.dataId),l},e.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return t=this.activeTimers,n=[],r=!1,null==this.programTimersStack?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e(),o=flatten(this.activeTimers),this.activeTimers=t,r&&(this.programTimersStack=null),[4,Promise.all(o).then(function(e){var t=0;return e.forEach(function(e){return t+=e}),t})];case 1:return a=s.sent(),i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:a,wallMs:null},this.uploadWaitMs=0,this.downloadWaitMs=0,[2,i]}})})},e.prototype.memory=function(){return {unreliable:!1,numBytesInGPU:this.numBytesInGPU}},e.prototype.startTimer=function(){return ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?this.gpgpu.beginQuery():{startMs:performance.now(),endMs:null}},e.prototype.endTimer=function(e){return ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(this.gpgpu.endQuery(),e):(e.endMs=performance.now(),e)},e.prototype.getQueryTime=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(t=e).endMs-t.startMs]})})},e.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e))if(this.pendingRead.has(e))this.pendingDisposal.add(e);else if(this.texData.has(e)){var t=this.texData.get(e),n=t.texture,r=t.texShape,o=t.usage,a=t.complexTensors;null!=n&&this.releaseTexture(e,n,r,o),null!=a&&(a.real.dispose(),a.imag.dispose()),this.texData.delete(e);}},e.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},e.prototype.getGPGPUContext=function(){return this.gpgpu},e.prototype.getCanvas=function(){return this.canvas},e.prototype.complex=function(e,t){var n=this.makeOutputArray(e.shape,"complex64");return this.texData.get(n.dataId).complexTensors={real:ENV.engine.keep(e.clone()),imag:ENV.engine.keep(t.clone())},n},e.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},e.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},e.prototype.slice=function(e,t,n){var r=new SliceProgram(n),o=r.getCustomSetupFunc(t);return this.compileAndRun(r,[e],null,o)},e.prototype.stridedSlice=function(e,t,n,r,o,a,i,s,u){var l=getStridedSlicedInfo(e.shape,t,n,r,o,a,i,s,u),c=l[0],p=l[1],d=l[2],h=p.filter(function(e,t){return -1===d.indexOf(t)});if(h.some(function(e){return 0===e}))return tensor([],h);var f=new StridedSliceProgram(c,r,p,d);return this.compileAndRun(f,[e])},e.prototype.reverse=function(e,t){var n=new ReverseProgram(e.shape,t);return this.compileAndRun(n,[e])},e.prototype.concat2Tensors=function(e,t,n){var r=computeOutShape([e.shape,t.shape],n),o=e.as2D(-1,sizeFromShape(e.shape.slice(n))),a=t.as2D(-1,sizeFromShape(t.shape.slice(n))),i=new ConcatProgram(o.shape,a.shape);return this.compileAndRun(i,[o,a]).reshape(r)},e.prototype.concat=function(e,t){if(1===e.length)return e[0];for(var n=e[0],r=1;r<e.length;++r)n=this.concat2Tensors(n,e[r],t);return n},e.prototype.neg=function(e){var t=new UnaryOpProgram(e.shape,NEG);return this.compileAndRun(t,[e])},e.prototype.batchMatMul=function(e,t,n,r){var o=n?e.shape[2]:e.shape[1],a=r?t.shape[1]:t.shape[2];if(ENV.get("WEBGL_RENDER_FLOAT32_ENABLED")&&1===e.shape[0]&&1===t.shape[0]&&arraysEqual(getTextureShapeFromLogicalShape(this.gpgpu.gl,[o,a]),[o,a])){var i=e.as2D(e.shape[1],e.shape[2]),s=t.as2D(t.shape[1],t.shape[2]),u=new PackProgram(i.shape),l=Tensor.make(i.shape,{});this.texData.get(l.dataId).usage=TextureUsage.PACK;var c=this.compileAndRun(u,[i],l),p=new PackProgram(s.shape),d=Tensor.make(s.shape,{});this.texData.get(d.dataId).usage=TextureUsage.PACK;var h=this.compileAndRun(p,[s],d),f=new MatMulPackedProgram(c.shape,h.shape,[o,a],n,r),m=Tensor.make(f.outputShape,{});this.texData.get(m.dataId).usage=TextureUsage.PACK;var g=this.compileAndRun(f,[c,h],m),v=new UnpackProgram(g.shape),y=this.compileAndRun(v,[g]);return l.dispose(),d.dispose(),m.dispose(),y.reshape([1,g.shape[0],g.shape[1]])}return this.compileAndRun(new MatMulProgram(e.shape,t.shape,n,r),[e,t])},e.prototype.multiply=function(e,t){if("complex64"===e.dtype){var n=this.texData.get(e.dataId),r=this.texData.get(t.dataId),o=new BinaryOpComplexProgram(COMPLEX_MULTIPLY.REAL,e.shape,t.shape),a=new BinaryOpComplexProgram(COMPLEX_MULTIPLY.IMAG,e.shape,t.shape),i=[this.makeComplexComponentTensorHandle(e,n.complexTensors.real),this.makeComplexComponentTensorHandle(e,n.complexTensors.imag),this.makeComplexComponentTensorHandle(t,r.complexTensors.real),this.makeComplexComponentTensorHandle(t,r.complexTensors.imag)],s=this.compileAndRun(o,i),u=this.compileAndRun(a,i),l=this.complex(s,u);return s.dispose(),u.dispose(),l}var c=new BinaryOpProgram(MUL,e.shape,t.shape),p=this.makeOutputArray(c.outputShape,e.dtype);return this.compileAndRun(c,[e,t],p)},e.prototype.batchNormalization=function(e,t,n,r,o,a){var i=[e,t,n],s=null;null!=a&&(s=a.shape,i.push(a));var u=null;null!=o&&(u=o.shape,i.push(o));var l=new BatchNormProgram(e.shape,t.shape,n.shape,s,u,r);return this.compileAndRun(l,i)},e.prototype.localResponseNormalization4D=function(e,t,n,r,o){var a=new LRNProgram(e.shape,t,n,r,o);return this.compileAndRun(a,[e])},e.prototype.LRNGrad=function(e,t,n,r,o,a,i){var s=new LRNGradProgram(t.shape,r,o,a,i);return this.compileAndRun(s,[t,n,e])},e.prototype.tile=function(e,t){var n=new TileProgram(e.shape,t);return this.compileAndRun(n,[e])},e.prototype.pad=function(e,t,n){var r=new PadProgram(e.shape,t,n);return this.compileAndRun(r,[e])},e.prototype.transpose=function(e,t){var n=new TransposeProgram(e.shape,t);return this.compileAndRun(n,[e])},e.prototype.gather=function(e,t,n){var r=new GatherProgram(e.shape,t.size,n);return this.compileAndRun(r,[e,t])},e.prototype.batchToSpaceND=function(e,t,n){assert(e.rank<=4,"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");var r=t.reduce(function(e,t){return e*t}),o=getReshaped(e.shape,t,r),a=getPermuted(o.length,t.length),i=getReshapedPermuted(e.shape,t,r),s=getSliceBeginCoords(n,t.length),u=getSliceSize(i,n,t.length);return e.reshape(o).transpose(a).reshape(i).slice(s,u)},e.prototype.spaceToBatchND=function(e,t,n){assert(e.rank<=4,"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");var r=t.reduce(function(e,t){return e*t}),o=[[0,0]];o.push.apply(o,n);for(var a=1+t.length;a<e.shape.length;++a)o.push([0,0]);var i=e.pad(o),s=getReshaped(i.shape,t,r,!1),u=getPermuted(s.length,t.length,!1),l=getReshapedPermuted(i.shape,t,r,!1);return i.reshape(s).transpose(u).reshape(l)},e.prototype.reduce=function(e,t,n){var r=e.shape[0],o=e.shape[1],a=computeOptimalWindowSize(o),i=new ReduceProgram({windowSize:a,inSize:o,batchSize:r},t),s=i.outputShape,u=s[0],l=s[1],c=this.makeOutputArray([u,l],n);return this.compileAndRun(i,[e],c),1===c.shape[1]?c:this.reduce(c,t,n)},e.prototype.argReduce=function(e,t,n){void 0===n&&(n=null);var r=e.shape[0],o=e.shape[1];null!=n&&(r=n.shape[0],o=n.shape[1]);var a=computeOptimalWindowSize(o),i=new ArgMinMaxProgram({windowSize:a,inSize:o,batchSize:r},t,null==n),s=i.outputShape,u=s[0],l=s[1],c=this.makeOutputArray([u,l],"int32"),p=[e];return null!=n&&p.push(n),this.compileAndRun(i,p,c),1===c.shape[1]?c:this.argReduce(e,t,c)},e.prototype.sum=function(e,t){assertAxesAreInnerMostDims("sum",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=sizeFromShape(n[1]),a=e.as2D(-1,o),i=sumOutType(e.dtype);return this.reduce(a,"sum",i).reshape(r)},e.prototype.unsortedSegmentSum=function(e,t,n){var r=0,o=getAxesPermutation([r],e.rank),a=e;null!=o&&(a=e.transpose(o),r=getInnerMostAxes(1,e.rank)[0]);var i=computeOutShape$1(a.shape,r,n),s=sizeFromShape([a.shape[r]]),u=a.as2D(-1,s),l=sumOutType(e.dtype),c=this.segOpCompute(u,"unsortedSegmentSum",t,l,n).reshape(i);return null!=o&&(c=c.transpose(getUndoAxesPermutation(o))),c},e.prototype.segOpCompute=function(e,t,n,r,o){var a=e.shape[0],i=e.shape[1],s=segOpComputeOptimalWindowSize(i,o),u=new SegmentOpProgram({windowSize:s,inSize:i,batchSize:a,numSegments:o},t),l=u.outputShape,c=l[0],p=l[1],d=this.makeOutputArray([c,p],r);return this.compileAndRun(u,[e,n],d),d.shape[1]===o?d:(n=range(0,o).tile([i/s]),this.segOpCompute(d,t,n,r,o))},e.prototype.argMin=function(e,t){var n=[t];assertAxesAreInnerMostDims("argMin",n,e.rank);var r=computeOutAndReduceShapes(e.shape,n),o=r[0],a=sizeFromShape(r[1]),i=e.as2D(-1,a);return this.argReduce(i,"min").reshape(o)},e.prototype.argMax=function(e,t){var n=[t];assertAxesAreInnerMostDims("argMax",n,e.rank);var r=computeOutAndReduceShapes(e.shape,n),o=r[0],a=sizeFromShape(r[1]),i=e.as2D(-1,a);return this.argReduce(i,"max").reshape(o)},e.prototype.cumsum=function(e,t,n,r){if(t!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+t);var o=new CumSumProgram(e.shape,n,r);return this.compileAndRun(o,[e])},e.prototype.equal=function(e,t){var n=new BinaryOpProgram(EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.notEqual=function(e,t){var n=new BinaryOpProgram(NOT_EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.less=function(e,t){var n=new BinaryOpProgram(LESS,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.lessEqual=function(e,t){var n=new BinaryOpProgram(LESS_EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.greater=function(e,t){var n=new BinaryOpProgram(GREATER,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.greaterEqual=function(e,t){var n=new BinaryOpProgram(GREATER_EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.logicalNot=function(e){var t=new UnaryOpProgram(e.shape,LOGICAL_NOT);return this.compileAndRun(t,[e])},e.prototype.logicalAnd=function(e,t){var n=new BinaryOpProgram(LOGICAL_AND,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.logicalOr=function(e,t){var n=new BinaryOpProgram(LOGICAL_OR,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.select=function(e,t,n){var r=new SelectProgram(e.rank,t.shape,t.rank),o=this.makeOutputArray(r.outputShape,upcastType(t.dtype,n.dtype));return this.compileAndRun(r,[e,t,n],o)},e.prototype.where=function(e){warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var t=e.dataSync();return whereImpl(e.shape,t)},e.prototype.topk=function(e,t,n){return topkImpl(e.dataSync(),e.shape,e.dtype,t,n)},e.prototype.min=function(e,t){assertAxesAreInnerMostDims("min",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=sizeFromShape(n[1]),a=e.as2D(-1,o);return this.reduce(a,"min",a.dtype).reshape(r)},e.prototype.minimum=function(e,t){var n=new BinaryOpProgram(MIN,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.mod=function(e,t){var n=new BinaryOpProgram(MOD,e.shape,t.shape),r=n.getCustomSetupFunc();return this.compileAndRun(n,[e,t],null,r)},e.prototype.max=function(e,t){assertAxesAreInnerMostDims("max",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=sizeFromShape(n[1]),a=e.as2D(-1,o);return this.reduce(a,"max",a.dtype).reshape(r)},e.prototype.maximum=function(e,t){var n=new BinaryOpProgram(MAX,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.all=function(e,t){assertAxesAreInnerMostDims("all",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=sizeFromShape(n[1]),a=e.as2D(-1,o);return this.reduce(a,"all",a.dtype).reshape(r)},e.prototype.any=function(e,t){assertAxesAreInnerMostDims("any",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=sizeFromShape(n[1]),a=e.as2D(-1,o);return this.reduce(a,"any",a.dtype).reshape(r)},e.prototype.squaredDifference=function(e,t){var n=new BinaryOpProgram(SQUARED_DIFFERENCE,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.realDivide=function(e,t){var n=new BinaryOpProgram(DIV,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[e,t],r)},e.prototype.floorDiv=function(e,t){var n=new BinaryOpProgram(INT_DIV,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"int32");return this.compileAndRun(n,[e,t],r)},e.prototype.add=function(e,t){if("complex64"===e.dtype&&"complex64"===t.dtype)return this.complexSeparableBinaryOp(e,t,ADD);var n=new BinaryOpProgram(ADD,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,upcastType(e.dtype,t.dtype));return this.compileAndRun(n,[e,t],r)},e.prototype.complexSeparableBinaryOp=function(e,t,n){var r=this,o=this.texData.get(e.dataId),a=this.texData.get(t.dataId),i=[[o.complexTensors.real,a.complexTensors.real],[o.complexTensors.imag,a.complexTensors.imag]].map(function(o){var a=o[0],i=o[1],s=new BinaryOpProgram(n,e.shape,t.shape),u=r.makeOutputArray(s.outputShape,upcastType(a.dtype,i.dtype)),l=r.makeComplexComponentTensorHandle(e,a),c=r.makeComplexComponentTensorHandle(t,i);return r.compileAndRun(s,[l,c],u)}),s=i[0],u=i[1],l=this.complex(s,u);return s.dispose(),u.dispose(),l},e.prototype.makeComplexComponentTensorHandle=function(e,t){return {dataId:t.dataId,dtype:t.dtype,shape:e.shape}},e.prototype.addN=function(e){for(var t=e[0],n=1;n<e.length;n++)t=this.add(t,e[n]);return t},e.prototype.subtract=function(e,t){if("complex64"===e.dtype&&"complex64"===t.dtype)return this.complexSeparableBinaryOp(e,t,SUB);var n=new BinaryOpProgram(SUB,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,upcastType(e.dtype,t.dtype));return this.compileAndRun(n,[e,t],r)},e.prototype.pow=function(e,t){var n=new BinaryOpProgram(POW,e.shape,t.shape),r=n.getCustomSetupFunc(),o=this.makeOutputArray(n.outputShape,upcastType(e.dtype,t.dtype));return this.compileAndRun(n,[e,t],o,r)},e.prototype.ceil=function(e){var t=new UnaryOpProgram(e.shape,CEIL);return this.compileAndRun(t,[e])},e.prototype.floor=function(e){var t=new UnaryOpProgram(e.shape,FLOOR);return this.compileAndRun(t,[e])},e.prototype.sign=function(e){var t=new UnaryOpProgram(e.shape,SIGN);return this.compileAndRun(t,[e])},e.prototype.round=function(e){var t=new UnaryOpProgram(e.shape,ROUND);return this.compileAndRun(t,[e])},e.prototype.exp=function(e){var t=new UnaryOpProgram(e.shape,EXP);return this.compileAndRun(t,[e])},e.prototype.expm1=function(e){var t=new UnaryOpProgram(e.shape,EXPM1);return this.compileAndRun(t,[e])},e.prototype.log=function(e){var t=new UnaryOpProgram(e.shape,LOG),n=t.getCustomSetupFunc();return this.compileAndRun(t,[e],null,n)},e.prototype.log1p=function(e){var t=new UnaryOpProgram(e.shape,LOG1P);return this.compileAndRun(t,[e])},e.prototype.sqrt=function(e){var t=new UnaryOpProgram(e.shape,SQRT);return this.compileAndRun(t,[e])},e.prototype.rsqrt=function(e){var t=new UnaryOpProgram(e.shape,RSQRT);return this.compileAndRun(t,[e])},e.prototype.square=function(e){var t=new UnaryOpProgram(e.shape,SQUARE);return this.compileAndRun(t,[e])},e.prototype.reciprocal=function(e){var t=new UnaryOpProgram(e.shape,RECIPROCAL);return this.compileAndRun(t,[e])},e.prototype.relu=function(e){var t=new UnaryOpProgram(e.shape,RELU);return this.compileAndRun(t,[e])},e.prototype.elu=function(e){var t=new UnaryOpProgram(e.shape,ELU);return this.compileAndRun(t,[e])},e.prototype.eluDer=function(e,t){var n=new BinaryOpProgram(ELU_DER,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.selu=function(e){var t=new UnaryOpProgram(e.shape,SELU);return this.compileAndRun(t,[e])},e.prototype.int=function(e){var t=new UnaryOpProgram(e.shape,TO_INT),n=this.makeOutputArray(t.outputShape,"int32");return this.compileAndRun(t,[e],n)},e.prototype.clip=function(e,t,n){var r=new ClipProgram(e.shape,t,n);return this.compileAndRun(r,[e])},e.prototype.abs=function(e){var t=new UnaryOpProgram(e.shape,ABS);return this.compileAndRun(t,[e])},e.prototype.sigmoid=function(e){var t=new UnaryOpProgram(e.shape,SIGMOID);return this.compileAndRun(t,[e])},e.prototype.softplus=function(e){var t=new UnaryOpProgram(e.shape,SOFTPLUS);return this.compileAndRun(t,[e])},e.prototype.sin=function(e){var t=new UnaryOpProgram(e.shape,SIN);return this.compileAndRun(t,[e])},e.prototype.cos=function(e){var t=new UnaryOpProgram(e.shape,COS);return this.compileAndRun(t,[e])},e.prototype.tan=function(e){var t=new UnaryOpProgram(e.shape,TAN);return this.compileAndRun(t,[e])},e.prototype.asin=function(e){var t=new UnaryOpProgram(e.shape,ASIN);return this.compileAndRun(t,[e])},e.prototype.acos=function(e){var t=new UnaryOpProgram(e.shape,ACOS);return this.compileAndRun(t,[e])},e.prototype.atan=function(e){var t=new UnaryOpProgram(e.shape,ATAN);return this.compileAndRun(t,[e])},e.prototype.atan2=function(e,t){var n=new BinaryOpProgram(ATAN2,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.sinh=function(e){var t=new UnaryOpProgram(e.shape,SINH);return this.compileAndRun(t,[e])},e.prototype.cosh=function(e){var t=new UnaryOpProgram(e.shape,COSH);return this.compileAndRun(t,[e])},e.prototype.tanh=function(e){var t=new UnaryOpProgram(e.shape,TANH);return this.compileAndRun(t,[e])},e.prototype.asinh=function(e){var t=new UnaryOpProgram(e.shape,ASINH);return this.compileAndRun(t,[e])},e.prototype.acosh=function(e){var t=new UnaryOpProgram(e.shape,ACOSH),n=t.getCustomSetupFunc();return this.compileAndRun(t,[e],null,n)},e.prototype.atanh=function(e){var t=new UnaryOpProgram(e.shape,ATANH),n=t.getCustomSetupFunc();return this.compileAndRun(t,[e],null,n)},e.prototype.erf=function(e){var t=new UnaryOpProgram(e.shape,ERF);return this.compileAndRun(t,[e])},e.prototype.step=function(e,t){var n=new UnaryOpProgram(e.shape,STEP(t));return this.compileAndRun(n,[e])},e.prototype.conv2d=function(e,t,n){var r=new Conv2DProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.conv2dDerInput=function(e,t,n){var r=new Conv2DDerInputProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.conv2dDerFilter=function(e,t,n){var r=new Conv2DDerFilterProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.depthwiseConv2D=function(e,t,n){var r=new DepthwiseConv2DProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.depthwiseConv2DDerInput=function(e,t,n){var r=new DepthwiseConv2DDerInputProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.depthwiseConv2DDerFilter=function(e,t,n){var r=new DepthwiseConv2DDerFilterProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.maxPool=function(e,t){var n=new Pool2DProgram(t,"max",!1),r=this.makeOutputArray(n.outputShape,e.dtype);return this.compileAndRun(n,[e],r)},e.prototype.avgPool=function(e,t){var n=new Pool2DProgram(t,"avg",!1),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[e],r)},e.prototype.maxPoolBackprop=function(e,t,n,r){var o=new Pool2DProgram(r,"max",!0),a=this.compileAndRun(o,[t]),i=new MaxPool2DBackpropProgram(r),s=this.makeOutputArray(i.outputShape,t.dtype),u=this.compileAndRun(i,[e,a],s);return a.dispose(),u},e.prototype.avgPoolBackprop=function(e,t,n){var r=new AvgPool2DBackpropProgram(n),o=this.makeOutputArray(r.outputShape,t.dtype);return this.compileAndRun(r,[e],o)},e.prototype.cast=function(e,t){return castTensor(e,t,this)},e.prototype.reshape=function(e,t){return reshapeTensor(e,t)},e.prototype.resizeBilinear=function(e,t,n,r){var o=new ResizeBilinearProgram(e.shape,t,n,r);return this.compileAndRun(o,[e])},e.prototype.resizeBilinearBackprop=function(e,t,n){var r=new ResizeBilinearBackpropProgram(e,t,n);return this.compileAndRun(r,[e])},e.prototype.resizeNearestNeighbor=function(e,t,n,r){var o=new ResizeNearestNeighborProgram(e.shape,t,n,r);return this.compileAndRun(o,[e])},e.prototype.resizeNearestNeighborBackprop=function(e,t,n){var r=new ResizeNearestNeigborBackpropProgram(e,t,n);return this.compileAndRun(r,[e])},e.prototype.multinomial=function(e,t,n,r){var o=t?e:softmax(e),a=o.shape[0],i=o.shape[1],s=new MultinomialProgram(a,i,n),u=this.makeOutputArray(s.outputShape,"int32"),l=s.getCustomSetupFunc(r);return this.compileAndRun(s,[o],u,l)},e.prototype.oneHot=function(e,t,n,r){var o=new OneHotProgram(e.size,t,n,r);return this.compileAndRun(o,[e])},e.prototype.nonMaxSuppression=function(e,t,n,r,o){return warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),nonMaxSuppressionImpl(e.dataSync(),t.dataSync(),n,r,o)},e.prototype.cropAndResize=function(e,t,n,r,o,a){var i=new CropAndResizeProgram(e.shape,t.shape,r,o,a);return this.compileAndRun(i,[e,t,n])},e.prototype.depthToSpace=function(e,t,n){assert(t>1,"blockSize should be > 1 for depthToSpace, but was: "+t);var r=e.shape[0],o=("NHWC"===n?e.shape[1]:e.shape[2])*t,a=("NHWC"===n?e.shape[2]:e.shape[3])*t,i=("NHWC"===n?e.shape[3]:e.shape[1])/(t*t),s=new DepthToSpaceProgram("NHWC"===n?[r,o,a,i]:[r,i,o,a],t,n);return this.compileAndRun(s,[e])},e.prototype.split=function(e,t,n){return split(e,t,n)},e.prototype.makeOutputArray=function(e,t){return Tensor.make(e,{},t)},e.prototype.compileAndRun=function(e,t,n,r,o){var a=this;if(void 0===o&&(o=!0),null==n&&(n=this.makeOutputArray(e.outputShape,t[0].dtype)),0===n.size)return this.texData.get(n.dataId).values=getTypedArrayFromDType(n.dtype,0),n;var i=t.map(function(e){if("complex64"===e.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var t=a.texData.get(e.dataId);return null==t.texture&&sizeFromShape(e.shape)<=SIZE_UPLOAD_UNIFORM?{shape:e.shape,texData:null,isUniform:!0,uniformValues:a.readSync(e.dataId)}:(a.uploadToGPU(e.dataId),{shape:e.shape,texData:t,isUniform:!1})});this.uploadToGPU(n.dataId);var s,u={shape:n.shape,texData:this.texData.get(n.dataId),isUniform:!1},l=makeShaderKey(e,i,u),c=this.getAndSaveBinary(l,function(){return compileProgram(a.gpgpu,e,i,u)}),p=null!=this.activeTimers;if(p&&(s=this.startTimer()),runProgram(c,i,u,r),ENV.get("WEBGL_PAGING_ENABLED")&&o&&this.numBytesInGPU>this.NUM_BYTES_BEFORE_PAGING)for(var d=this.numBytesInGPU-this.NUM_BYTES_BEFORE_PAGING;d>0&&this.lruDataGPU.length>0;){var h=this.lruDataGPU.shift(),f=this.texData.get(h),m=f.shape,g=f.dtype;d-=this.computeBytes(m,g),this.read(h);}return p&&(s=this.endTimer(s),this.activeTimers.push(this.getQueryTime(s))),n},e.prototype.getAndSaveBinary=function(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]},e.prototype.getTextureManager=function(){return this.textureManager},e.prototype.dispose=function(){if(!this.disposed){for(var e in this.binaryCache)this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram);this.textureManager.dispose(),this.canvas.remove(),null!=this.fromPixelsCanvas&&this.fromPixelsCanvas.remove(),this.gpgpuCreatedLocally&&this.gpgpu.dispose(),this.disposed=!0;}},e.prototype.floatPrecision=function(){var e=this;return tidy(function(){return e.abs(scalar(1e-8)).get()>0?32:16})},e.prototype.uploadToGPU=function(e){var t=this.texData.get(e),n=t.shape,r=t.values,o=t.texture,a=t.dtype,i=t.usage;if(ENV.get("WEBGL_PAGING_ENABLED")&&null!=o){this.lruDataGPU.indexOf(e)>=0&&(this.lruDataGPU.splice(this.lruDataGPU.indexOf(e),1),this.lruDataGPU.push(e));}else{var s,u=null!=this.activeTimers;u&&(s=performance.now());var l=getTextureShapeFromLogicalShape(this.gpgpu.gl,n);t.texShape=l;var c=this.acquireTexture(e,l,i);t.texture=c,null!=r&&(this.gpgpu.uploadMatrixToTexture(c,l[0],l[1],typedArrayToFloat32(r,a)),t.values=null,u&&(this.uploadWaitMs+=performance.now()-s));}},e.prototype.cacheOnCPU=function(e,t){var n=this.delayedStorage,r=this.texData.get(e),o=r.texture,a=r.texShape,i=r.dtype,s=r.usage;n&&null!=o&&(this.releaseTexture(e,o,a,s),r.texture=null,r.texShape=null),r.usage=TextureUsage.UPLOAD,null!=t&&(r.values=float32ToTypedArray(t,i));},e.prototype.releaseTexture=function(e,t,n,r){var o=this.texData.get(e),a=o.shape,i=o.dtype;if(ENV.get("WEBGL_PAGING_ENABLED")){var s=this.lruDataGPU.indexOf(e);s>=0&&this.lruDataGPU.splice(s,1);}this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(t,n,r);},e.prototype.acquireTexture=function(e,t,n){var r=this.texData.get(e),o=r.shape,a=r.dtype;return ENV.get("WEBGL_PAGING_ENABLED")&&this.lruDataGPU.push(e),this.numBytesInGPU+=this.computeBytes(o,a),this.textureManager.acquireTexture(t,n)},e.prototype.computeBytes=function(e,t){return sizeFromShape(e)*bytesPerElement(t)},e}();function float32ToTypedArray(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){for(var n="int32"===t?new Int32Array(e.length):new Uint8Array(e.length),r=0;r<n.length;++r)n[r]=Math.round(e[r]);return n}throw new Error("Unknown dtype "+t)}function typedArrayToFloat32(e,t){return e instanceof Float32Array?e:new Float32Array(e)}function neg_(e){var t=convertToTensor(e,"x","neg");return ENV.engine.runKernel(function(e){return e.neg(t)},{$x:t},function(e){return {$x:function(){return e.neg()}}})}function ceil_(e){var t=convertToTensor(e,"x","ceil");return ENV.engine.runKernel(function(e){return e.ceil(t)},{$x:t},function(e){return {$x:function(){return zerosLike(e)}}})}function floor_(e){var t=convertToTensor(e,"x","floor");return ENV.engine.runKernel(function(e){return e.floor(t)},{$x:t},function(e){return {$x:function(){return zerosLike(e)}}})}function sign_(e){var t=convertToTensor(e,"x","sign");return ENV.engine.runKernel(function(e){return e.sign(t)},{$x:t},function(e){return {$x:function(){return zerosLike(e)}}})}function round_(e){var t=convertToTensor(e,"x","round");return ENV.engine.runKernel(function(e){return e.round(t)},{$x:t},function(e){return {$x:function(){return zerosLike(e)}}})}function exp_(e){var t=convertToTensor(e,"x","exp");return ENV.engine.runKernel(function(e,n){return n(e.exp(t))},{$x:t},function(e,t){var n=t[0];return {$x:function(){return e.mulStrict(n)}}})}function expm1_(e){var t=convertToTensor(e,"x","expm1");return ENV.engine.runKernel(function(e){return e.expm1(t)},{$x:t},function(e){return {$x:function(){return e.mulStrict(t.exp())}}})}function log_(e){var t=convertToTensor(e,"x","log");return ENV.engine.runKernel(function(e){return e.log(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(t.toFloat())}}})}function log1p_(e){var t=convertToTensor(e,"x","log1p");return ENV.engine.runKernel(function(e){return e.log1p(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(t.add(scalar(1)))}}})}function sqrt_(e){var t=convertToTensor(e,"x","sqrt");return ENV.engine.runKernel(function(e){return e.sqrt(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(t.toFloat().sqrt().mul(scalar(2)))}}})}function rsqrt_(e){var t=convertToTensor(e,"x","rsqrt");return ENV.engine.runKernel(function(e){return e.rsqrt(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(t.pow(scalar(1.5)).mul(scalar(2))).neg()}}})}function square_(e){var t=convertToTensor(e,"x","square");return ENV.engine.runKernel(function(e){return e.square(t)},{$x:t},function(e){return {$x:function(){return e.mulStrict(t.toFloat().mul(scalar(2)))}}})}function reciprocal_(e){var t=convertToTensor(e,"x","reciprocal");return ENV.engine.runKernel(function(e){return e.reciprocal(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(t.square().neg())}}})}function abs_(e){var t=convertToTensor(e,"x","abs");return ENV.engine.runKernel(function(e){return e.abs(t)},{$x:t},function(e){return {$x:function(){return e.mulStrict(t.toFloat().step(-1))}}})}function clipByValue_(e,t,n){var r=convertToTensor(e,"x","clipByValue");assert(t<=n,"Error in clip: min ("+t+") must be less than or equal to max ("+n+").");return ENV.engine.runKernel(function(e){return e.clip(r,t,n)},{$x:r},function(e){return {$x:function(){return e.where(r.greaterEqual(scalar(t)).logicalAnd(r.lessEqual(scalar(n))),zerosLike(e))}}})}function sigmoid_(e){var t=convertToTensor(e,"x","sigmoid");return ENV.engine.runKernel(function(e,n){return n(e.sigmoid(t))},{$x:t},function(e,t){var n=t[0];return {$x:function(){return e.mulStrict(n.mul(scalar(1).sub(n)))}}})}function logSigmoid_(e){var t=convertToTensor(e,"x","logSigmoid");return ENV.engine.runKernel(function(e){return e.softplus(t.neg()).neg()},{$x:t},function(e){return {$x:function(){return e.mulStrict(t.neg().sigmoid())}}})}function softplus_(e){var t=convertToTensor(e,"x","softplus");return ENV.engine.runKernel(function(e){return e.softplus(t)},{$x:t},function(e){return {$x:function(){return e.mulStrict(t.sigmoid())}}})}function sin_(e){var t=convertToTensor(e,"x","sin");return ENV.engine.runKernel(function(e){return e.sin(t)},{$x:t},function(e){return {$x:function(){return t.toFloat().cos().mulStrict(e)}}})}function cos_(e){var t=convertToTensor(e,"x","cos");return ENV.engine.runKernel(function(e){return e.cos(t)},{$x:t},function(e){return {$x:function(){return t.toFloat().sin().neg().mulStrict(e)}}})}function tan_(e){var t=convertToTensor(e,"x","tan");return ENV.engine.runKernel(function(e){return e.tan(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(t.cos().square())}}})}function asin_(e){var t=convertToTensor(e,"x","asin");return ENV.engine.runKernel(function(e){return e.asin(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(scalar(1).sub(t.toFloat().square()).sqrt())}}})}function acos_(e){var t=convertToTensor(e,"x","acos");return ENV.engine.runKernel(function(e){return e.acos(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(scalar(1).sub(t.toFloat().square()).sqrt()).neg()}}})}function atan_(e){var t=convertToTensor(e,"x","atan");return ENV.engine.runKernel(function(e){return e.atan(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(scalar(1).add(t.toFloat().square()))}}})}function sinh_(e){var t=convertToTensor(e,"x","sinh");return ENV.engine.runKernel(function(e){return e.sinh(t)},{$x:t},function(e){return {$x:function(){return t.toFloat().cosh().mulStrict(e)}}})}function cosh_(e){var t=convertToTensor(e,"x","cosh");return ENV.engine.runKernel(function(e){return e.cosh(t)},{$x:t},function(e){return {$x:function(){return t.toFloat().sinh().mulStrict(e)}}})}function tanh_(e){var t=convertToTensor(e,"x","tanh");return ENV.engine.runKernel(function(e,n){return n(e.tanh(t))},{$x:t},function(e,t){var n=t[0];return {$x:function(){return scalar(1).sub(n.square()).mulStrict(e)}}})}function asinh_(e){var t=convertToTensor(e,"x","asinh");return ENV.engine.runKernel(function(e){return e.asinh(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(scalar(1).add(t.toFloat().square()).sqrt())}}})}function acosh_(e){var t=convertToTensor(e,"x","acosh");return ENV.engine.runKernel(function(e){return e.acosh(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(t.toFloat().square().sub(scalar(1)).sqrt())}}})}function atanh_(e){var t=convertToTensor(e,"x","atanh");return ENV.engine.runKernel(function(e){return e.atanh(t)},{$x:t},function(e){return {$x:function(){return e.divStrict(scalar(1).sub(t.toFloat().square()))}}})}function erf_(e){var t=convertToTensor(e,"x","erf");assert("int32"===t.dtype||"float32"===t.dtype,"Input dtype must be `int32` or `float32`."),"int32"===t.dtype&&(t=t.toFloat());return ENV.engine.runKernel(function(e){return e.erf(t)},{$x:t},function(e){return {$x:function(){return e.mulStrict(scalar(2/Math.sqrt(Math.PI)).mul(t.square().neg().exp()))}}})}function step_(e,t){void 0===t&&(t=0);var n=convertToTensor(e,"x","step");return ENV.engine.runKernel(function(e){return e.step(n,t)},{$x:n},function(e){return {$x:function(){return zerosLike(e)}}})}ENV.get("IS_BROWSER")&&ENV.registerBackend("webgl",function(){return new MathBackendWebGL},2,setTensorTracker);var abs=op({abs_:abs_}),acos=op({acos_:acos_}),acosh=op({acosh_:acosh_}),asin=op({asin_:asin_}),asinh=op({asinh_:asinh_}),atan=op({atan_:atan_}),atanh=op({atanh_:atanh_}),ceil=op({ceil_:ceil_}),clipByValue=op({clipByValue_:clipByValue_}),cos=op({cos_:cos_}),cosh=op({cosh_:cosh_}),erf=op({erf_:erf_}),exp=op({exp_:exp_}),expm1=op({expm1_:expm1_}),floor=op({floor_:floor_}),log$1=op({log_:log_}),log1p=op({log1p_:log1p_}),logSigmoid=op({logSigmoid_:logSigmoid_}),neg=op({neg_:neg_}),reciprocal=op({reciprocal_:reciprocal_}),round=op({round_:round_}),rsqrt=op({rsqrt_:rsqrt_}),sigmoid=op({sigmoid_:sigmoid_}),sign=op({sign_:sign_}),sin=op({sin_:sin_}),sinh=op({sinh_:sinh_}),softplus=op({softplus_:softplus_}),sqrt=op({sqrt_:sqrt_}),square=op({square_:square_}),step=op({step_:step_}),tan=op({tan_:tan_}),tanh$1=op({tanh_:tanh_});function batchNormalization2d_(e,t,n,r,o,a){void 0===r&&(r=.001);var i,s,u=convertToTensor(e,"x","batchNormalization"),l=convertToTensor(t,"mean","batchNormalization"),c=convertToTensor(n,"variance","batchNormalization");return null!=o&&(i=convertToTensor(o,"scale","batchNormalization")),null!=a&&(s=convertToTensor(a,"offset","batchNormalization")),assert(2===u.rank,"Error in batchNormalization3D: x must be rank 3 but got rank "+u.rank+"."),assert(2===l.rank||1===l.rank,"Error in batchNormalization2D: mean must be rank 2 or rank 1 but got rank "+l.rank+"."),assert(2===c.rank||1===c.rank,"Error in batchNormalization2D: variance must be rank 2 or rank 1 but got rank "+c.rank+"."),null!=i&&assert(2===i.rank||1===i.rank,"Error in batchNormalization2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."),null!=s&&assert(2===s.rank||1===s.rank,"Error in batchNormalization2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."),batchNormalization(u,l,c,r,i,s)}function batchNormalization3d_(e,t,n,r,o,a){void 0===r&&(r=.001);var i,s,u=convertToTensor(e,"x","batchNormalization"),l=convertToTensor(t,"mean","batchNormalization"),c=convertToTensor(n,"variance","batchNormalization");return null!=o&&(i=convertToTensor(o,"scale","batchNormalization")),null!=a&&(s=convertToTensor(a,"offset","batchNormalization")),assert(3===u.rank,"Error in batchNormalization3D: x must be rank 3 but got rank "+u.rank+"."),assert(3===l.rank||1===l.rank,"Error in batchNormalization3D: mean must be rank 3 or rank 1 but got rank "+l.rank+"."),assert(3===c.rank||1===c.rank,"Error in batchNormalization3D: variance must be rank 3 or rank 1 but got rank "+c.rank+"."),null!=i&&assert(3===i.rank||1===i.rank,"Error in batchNormalization3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."),null!=s&&assert(3===s.rank||1===s.rank,"Error in batchNormalization3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."),batchNormalization(u,l,c,r,i,s)}function batchNormalization4d_(e,t,n,r,o,a){void 0===r&&(r=.001);var i,s,u=convertToTensor(e,"x","batchNormalization"),l=convertToTensor(t,"mean","batchNormalization"),c=convertToTensor(n,"variance","batchNormalization");return null!=o&&(i=convertToTensor(o,"scale","batchNormalization")),null!=a&&(s=convertToTensor(a,"offset","batchNormalization")),assert(4===u.rank,"Error in batchNormalization4D: x must be rank 4 but got rank "+u.rank+"."),assert(4===l.rank||1===l.rank,"Error in batchNormalization4D: mean must be rank 4 or rank 1 but got rank "+l.rank+"."),assert(4===c.rank||1===c.rank,"Error in batchNormalization4D: variance must be rank 4 or rank 1 but got rank "+c.rank+"."),null!=i&&assert(4===i.rank||1===i.rank,"Error in batchNormalization4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."),null!=s&&assert(4===s.rank||1===s.rank,"Error in batchNormalization4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."),batchNormalization(u,l,c,r,i,s)}function batchNormalization_(e,t,n,r,o,a){void 0===r&&(r=.001);var i,s,u,l=convertToTensor(e,"x","batchNormalization"),c=convertToTensor(t,"mean","batchNormalization"),p=convertToTensor(n,"variance","batchNormalization");null!=o&&(i=convertToTensor(o,"scale","batchNormalization")),null!=a&&(s=convertToTensor(a,"offset","batchNormalization")),assert(c.rank===p.rank,"Batch normalization gradient requires mean and variance to have equal ranks."),assert(null==s||c.rank===s.rank,"Batch normalization gradient requires mean and offset to have equal ranks."),assert(null==i||c.rank===i.rank,"Batch normalization gradient requires mean and scale to have equal ranks."),u=0===l.rank||1===l.rank?l.as4D(1,1,1,l.size):2===l.rank?l.as4D(1,1,l.shape[0],l.shape[1]):3===l.rank?l.as4D(1,l.shape[0],l.shape[1],l.shape[2]):l;return ENV.engine.runKernel(function(e){return e.batchNormalization(u,batchnormReshape4D(c),batchnormReshape4D(p),r,batchnormReshape4D(i),batchnormReshape4D(s))},{$x:l,$mean:c,$variance:p,$scale:i,$offset:s},function(e){var t=null==i?scalar(1):i,n=getReductionAxes(c.shape,u.shape),o=[];if(1===c.rank){for(var a=0;a<u.shape.length-1;++a)o.push(u.shape[a]);o.push(1);}var s=l.sub(c),d=e.mul(t),h=rsqrt(p.add(scalar(r))),f=h.mul(h).mul(h).mul(scalar(-.5));return {$x:function(){return 1===c.rank?e.mul(tile(h.as4D(1,1,1,c.shape[0]),o)).mul(t).reshape(l.shape):e.mul(h).mul(t).reshape(l.shape)},$mean:function(){var e=h.mul(scalar(-1)).mul(d);return 1===c.rank&&(e=e.sum(n)),e.reshape(c.shape)},$variance:function(){var e=f.mul(s).mul(d);return 1===c.rank&&(e=e.sum(n)),e.reshape(c.shape)},$scale:function(){var t=s.mul(h),r=e.mul(t);return 1===c.rank&&(r=r.sum(n)),r.reshape(c.shape)},$offset:function(){var t=e;return 1===c.rank&&(t=t.sum(n)),t.reshape(c.shape)}}}).reshape(l.shape)}function batchnormReshape4D(e){return null==e?null:0===e.rank?e.as1D():1===e.rank?e:2===e.rank?e.as4D(1,1,e.shape[0],e.shape[1]):3===e.rank?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}var batchNormalization2d=op({batchNormalization2d_:batchNormalization2d_}),batchNormalization3d=op({batchNormalization3d_:batchNormalization3d_}),batchNormalization4d=op({batchNormalization4d_:batchNormalization4d_}),batchNormalization=op({batchNormalization_:batchNormalization_});function computePool2DInfo(e,t,n,r,o,a){void 0===a&&(a="channelsLast");var i,s=parseTupleParam(t),u=s[0],l=s[1];if("channelsLast"===a)i=[u,l,e[3],e[3]];else{if("channelsFirst"!==a)throw new Error("Unknown dataFormat "+a);i=[u,l,e[1],e[1]];}return computeConv2DInfo(e,i,n,1,r,o,!1,a)}function computeConv2DInfo(e,t,n,r,o,a,i,s){void 0===i&&(i=!1),void 0===s&&(s="channelsLast");var u=[-1,-1,-1,-1],l=u[0],c=u[1],p=u[2],d=u[3];if("channelsLast"===s)l=e[0],c=e[1],p=e[2],d=e[3];else{if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);l=e[0],d=e[1],c=e[2],p=e[3];}var h,f=t[0],m=t[1],g=t[3],v=parseTupleParam(n),y=v[0],x=v[1],T=parseTupleParam(r),b=T[0],S=T[1],E=getPadAndOutInfo(o,c,p,y,x,getEffectiveFilterSize(f,b),getEffectiveFilterSize(m,S),a),w=E.padInfo,A=E.outHeight,C=E.outWidth,_=i?g*d:g;return "channelsFirst"===s?h=[l,_,A,C]:"channelsLast"===s&&(h=[l,A,C,_]),{batchSize:l,dataFormat:s,inHeight:c,inWidth:p,inChannels:d,outHeight:A,outWidth:C,outChannels:_,padInfo:w,strideHeight:y,strideWidth:x,filterHeight:f,filterWidth:m,dilationHeight:b,dilationWidth:S,inShape:e,outShape:h,filterShape:t}}function computeOutputShape3D(e,t,n,r,o,a){null==o&&(o=computeDefaultPad(e,t,r));var i=e[0],s=e[1],u=conditionalRound((i-t+2*o)/r+1,a);assert(isInt(u),"The output # of rows ("+u+") must be an integer. Change the stride and/or zero pad parameters");var l=conditionalRound((s-t+2*o)/r+1,a);return assert(isInt(l),"The output # of columns ("+l+") must be an integer. Change the stride and/or zero pad parameters"),[u,l,n]}function computeDefaultPad(e,t,n,r){void 0===r&&(r=1);var o=getEffectiveFilterSize(t,r);return Math.floor((e[0]*(n-1)-n+o)/2)}function parseTupleParam(e){return "number"==typeof e?[e,e]:e}function getEffectiveFilterSize(e,t){return t<=1?e:e+(e-1)*(t-1)}function getPadAndOutInfo(e,t,n,r,o,a,i,s){var u,l,c;if("number"==typeof e){u={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};var p=computeOutputShape3D([t,n,1],a,1,r,e,s);l=p[0],c=p[1];}else if("same"===e){var d=((l=Math.ceil(t/r))-1)*r+a-t,h=((c=Math.ceil(n/o))-1)*o+i-n,f=Math.floor(d/2),m=d-f,g=Math.floor(h/2);u={top:f,bottom:m,left:g,right:h-g,type:"SAME"};}else{if("valid"!==e)throw Error("Unknown padding parameter: "+e);u={top:0,bottom:0,left:0,right:0,type:"VALID"},l=Math.ceil((t-a+1)/r),c=Math.ceil((n-i+1)/o);}return {padInfo:u,outHeight:l,outWidth:c}}function conditionalRound(e,t){if(!t)return e;switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error("Unknown roundingMode "+t)}}function matMul_(e,t,n,r){void 0===n&&(n=!1),void 0===r&&(r=!1);var o=convertToTensor(e,"a","matMul"),a=convertToTensor(t,"b","matMul"),i=n?o.shape[o.rank-2]:o.shape[o.rank-1],s=r?a.shape[a.rank-1]:a.shape[a.rank-2],u=n?o.shape[o.rank-1]:o.shape[o.rank-2],l=r?a.shape[a.rank-2]:a.shape[a.rank-1],c=o.shape.slice(0,-2),p=a.shape.slice(0,-2),d=sizeFromShape(c),h=sizeFromShape(p);assert(o.rank>=2&&a.rank>=2&&o.rank===a.rank,"Error in matMul: inputs must have the same rank of at least 2, got ranks "+o.rank+" and "+a.rank+"."),assert(arraysEqual(c,p),"Error in matMul: outer dimensions ("+c+") and ("+p+") of Tensors with shapes "+o.shape+" and "+a.shape+" must match."),assert(i===s,"Error in matMul: inner shapes ("+i+") and ("+s+") of Tensors with shapes "+o.shape+" and "+a.shape+" and transposeA="+n+" and transposeB="+r+" must match.");var f=o.shape.slice(0,-2).concat([u,l]),m=n?o.as3D(d,i,u):o.as3D(d,u,i),g=r?a.as3D(h,l,s):a.as3D(h,s,l);return ENV.engine.runKernel(function(e){return e.batchMatMul(m,g,n,r)},{$a:m,$b:g},function(e){return n||r?!n&&r?{$a:function(){return e.matMul(g.toFloat(),!1,!1)},$b:function(){return e.matMul(m.toFloat(),!0,!1)}}:n&&!r?{$a:function(){return g.toFloat().matMul(e,!1,!0)},$b:function(){return m.toFloat().matMul(e,!1,!1)}}:{$a:function(){return g.toFloat().matMul(e,!0,!0)},$b:function(){return e.matMul(m.toFloat(),!0,!0)}}:{$a:function(){return e.matMul(g.toFloat(),!1,!0)},$b:function(){return m.toFloat().matMul(e,!0,!1)}}}).reshape(f)}function outerProduct_(e,t){var n=convertToTensor(e,"v1","outerProduct"),r=convertToTensor(t,"v2","outerProduct");return assert(1===n.rank&&1===r.rank,"Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+r.rank+"."),n.as2D(-1,1).matMul(r.as2D(1,-1))}function dot_(e,t){var n=convertToTensor(e,"t1","dot"),r=convertToTensor(t,"t2","dot");assert(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),"Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+r.rank+".");var o=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];return assert(o===a,"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."),1===n.rank&&1===r.rank?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():1===n.rank&&2===r.rank?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():2===n.rank&&1===r.rank?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}var matMul=op({matMul_:matMul_}),dot=op({dot_:dot_}),outerProduct=op({outerProduct_:outerProduct_});function conv1d_(e,t,n,r,o,a,i){void 0===o&&(o="NWC"),void 0===a&&(a=1);var s=convertToTensor(e,"x","conv1d"),u=convertToTensor(t,"filter","conv1d"),l=s,c=!1;2===s.rank&&(c=!0,l=s.as3D(1,s.shape[0],s.shape[1])),assert(3===l.rank,"Error in conv1d: input must be rank 3, but got rank "+l.rank+"."),assert(3===u.rank,"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."),null!=i&&assert(isInt(r),"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."),assert(l.shape[2]===u.shape[1],"Error in conv1d: depth of input ("+l.shape[2]+") must match input depth for filter "+u.shape[1]+"."),assert(eitherStridesOrDilationsAreOne(n,a),"Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+a+"'"),assert("NWC"===o,"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported.");var p=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),d=l.as4D(l.shape[0],1,l.shape[1],l.shape[2]),h=conv2d(d,p,[1,n],r,"NHWC",[1,a],i);return c?h.as2D(h.shape[2],h.shape[3]):h.as3D(h.shape[0],h.shape[2],h.shape[3])}function conv2d_(e,t,n,r,o,a,i){void 0===o&&(o="NHWC"),void 0===a&&(a=[1,1]);var s=convertToTensor(e,"x","conv2d"),u=convertToTensor(t,"filter","conv2d"),l=s,c=!1;3===s.rank&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),assert(4===l.rank,"Error in conv2d: input must be rank 4, but got rank "+l.rank+"."),assert(4===u.rank,"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."),null!=i&&assert(isInt(r),"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+"."),assert(l.shape[3]===u.shape[2],"Error in conv2d: depth of input ("+l.shape[3]+") must match input depth for filter "+u.shape[2]+"."),assert(eitherStridesOrDilationsAreOne(n,a),"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"),assert("NHWC"===o,"Error in conv2d: got dataFormat of "+o+" but only NHWC is currently supported.");var p,d=computeConv2DInfo(l.shape,u.shape,n,a,r,i);if(1===d.filterHeight&&1===d.filterWidth&&1===d.dilationHeight&&1===d.dilationWidth&&1===d.strideHeight&&1===d.strideWidth&&"SAME"===d.padInfo.type){var h=l.reshape([-1,d.inChannels]),f=u.reshape([d.inChannels,d.outChannels]);p=matMul(h,f).reshape(d.outShape);}else{p=ENV.engine.runKernel(function(e){return e.conv2d(l,u,d)},{x:l,$filter:u},function(e){return assert(tupleValuesAreOne(a),"Error in gradient of conv2D: dilation rates greater than 1 are notyet supported in gradients. Got dilations '"+a+"'"),{x:function(){return conv2dDerInput_(l.shape,e,u,n,r)},$filter:function(){return conv2dDerFilter_(l,e,u.shape,n,r)}}});}return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function conv2dDerInput_(e,t,n,r,o,a){assert(e.length===t.rank,"Length of inShape ("+e.length+") and rank of dy ("+t.rank+") must match");var i=e,s=t,u=!1;3===t.rank&&(u=!0,s=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),i=[1,e[0],e[1],e[2]]);var l=i[3],c=s.shape[3];assert(4===i.length,"Error in conv2dDerInput: inShape must be length 4, but got length "+i.length+"."),assert(4===s.rank,"Error in conv2dDerInput: dy must be rank 4, but got rank "+s.rank),assert(4===n.rank,"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank),assert(l===n.shape[2],"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+n.shape[2]+"."),assert(c===n.shape[3],"Error in conv2dDerInput: depth of output ("+c+") must match output depth for filter "+n.shape[3]+"."),null!=a&&assert(isInt(o),"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+".");var p=computeConv2DInfo(i,n.shape,r,1,o,a),d=ENV.engine.runKernel(function(e){return e.conv2dDerInput(s,n,p)},{dy4D:s});return u?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function conv2dDerFilter_(e,t,n,r,o,a){var i=e;3===e.rank&&(i=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var s=t;3===s.rank&&(s=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),assert(4===i.rank,"Error in conv2dDerFilter: input must be rank 4, but got shape "+i.shape+"."),assert(4===s.rank,"Error in conv2dDerFilter: dy must be rank 4, but got shape "+s.shape+"."),assert(4===n.length,"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."),assert(i.shape[3]===n[2],"Error in conv2dDerFilter: depth of input "+i.shape[3]+") must match input depth in filter ("+n[2]+"."),assert(s.shape[3]===n[3],"Error in conv2dDerFilter: depth of dy ("+s.shape[3]+") must match output depth for filter ("+n[3]+")."),null!=a&&assert(isInt(o),"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+".");var u=computeConv2DInfo(i.shape,n,r,1,o,a);return ENV.engine.runKernel(function(e){return e.conv2dDerFilter(i,s,u)},{x4D:i,dy4D:s})}function conv2dTranspose_(e,t,n,r,o,a){return conv2dDerInput_(n,convertToTensor(e,"x","conv2dTranspose"),convertToTensor(t,"filter","conv2dTranspose"),r,o,a)}function depthwiseConv2d_(e,t,n,r,o,a,i){void 0===o&&(o="NHWC"),void 0===a&&(a=[1,1]);var s=convertToTensor(e,"x","depthwiseConv2d"),u=convertToTensor(t,"filter","depthwiseConv2d"),l=s,c=!1;3===s.rank&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),assert(4===l.rank,"Error in depthwiseConv2d: input must be rank 4, but got rank "+l.rank+"."),assert(4===u.rank,"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."),assert(l.shape[3]===u.shape[2],"Error in depthwiseConv2d: number of input channels ("+l.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."),null==a&&(a=[1,1]),assert(eitherStridesOrDilationsAreOne(n,a),"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"),null!=i&&assert(isInt(r),"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+".");var p=computeConv2DInfo(l.shape,u.shape,n,a,r,i,!0),d=ENV.engine.runKernel(function(e){return e.depthwiseConv2D(l,u,p)},{x:l,$filter:u},function(e){return assert(tupleValuesAreOne(a),"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"),{x:function(){return depthwiseConv2dDerInput(l.shape,e,u,p)},$filter:function(){return depthwiseConv2dDerFilter(l,e,u.shape,p)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function separableConv2d_(e,t,n,r,o,a,i){void 0===a&&(a=[1,1]),void 0===i&&(i="NHWC");var s=convertToTensor(e,"x","separableConv2d"),u=convertToTensor(t,"depthwiseFilter","separableConv2d"),l=convertToTensor(n,"pointwiseFilter","separableConv2d"),c=s,p=!1;if(3===s.rank&&(p=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),"NCHW"===i)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");assert(4===c.rank,"Error in separableConv2d: input must be rank 4, but got rank "+c.rank+"."),assert(4===u.rank,"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."),assert(4===l.rank,"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."),assert(1===l.shape[0],"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+l.shape[0]+"."),assert(1===l.shape[1],"Error in separableConv2d: the second dimension of pointwise filter  must be 1, but got "+l.shape[1]+".");var d=u.shape[2],h=u.shape[3];assert(l.shape[2]===d*h,"Error in separableConv2d: the third dimension of pointwise filter must be "+d*h+", but got "+l.shape[2]+".");var f=depthwiseConv2d(c,u,r,o,i,a),m=conv2d(f,l,1,"valid",i);return p?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}function parseTupleParam$1(e){return "number"==typeof e?[e,e]:e}function tupleValuesAreOne(e){var t=parseTupleParam$1(e),n=t[0],r=t[1];return 1===n&&1===r}function eitherStridesOrDilationsAreOne(e,t){return tupleValuesAreOne(e)||tupleValuesAreOne(t)}function depthwiseConv2dDerInput(e,t,n,r){var o=t,a=!1;3===t.rank&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=ENV.engine.runKernel(function(e){return e.depthwiseConv2DDerInput(o,n,r)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}function depthwiseConv2dDerFilter(e,t,n,r){var o=e;3===e.rank&&(o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var a=t;return 3===a.rank&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),ENV.engine.runKernel(function(e){return e.depthwiseConv2DDerFilter(o,a,r)},{x4D:o,dy4D:a})}var conv1d=op({conv1d_:conv1d_}),conv2d=op({conv2d_:conv2d_}),depthwiseConv2d=op({depthwiseConv2d_:depthwiseConv2d_}),separableConv2d=op({separableConv2d_:separableConv2d_}),conv2dTranspose=op({conv2dTranspose_:conv2dTranspose_});function reverse1d_(e){var t=convertToTensor(e,"x","reverse");return assert(1===t.rank,"Error in reverse1D: x must be rank 1 but got\n             rank "+t.rank+"."),reverse(t,0)}function reverse2d_(e,t){var n=convertToTensor(e,"x","reverse");return assert(2===n.rank,"Error in reverse2D: x must be rank 2 but got\n             rank "+n.rank+"."),reverse(n,t)}function reverse3d_(e,t){var n=convertToTensor(e,"x","reverse");return assert(3===n.rank,"Error in reverse3D: x must be rank 3 but got\n             rank "+n.rank+"."),reverse(n,t)}function reverse4d_(e,t){var n=convertToTensor(e,"x","reverse");return assert(4===n.rank,"Error in reverse4D: x must be rank 4 but got\n             rank "+n.rank+"."),reverse(n,t)}function reverse_(e,t){var n=convertToTensor(e,"x","reverse");if(0===n.rank)return n.clone();var r=parseAxisParam(t,n.shape);return ENV.engine.runKernel(function(e){return e.reverse(n,r)},{$x:n},function(e){return {$x:function(){return e.reverse(r)}}}).reshapeAs(n)}var reverse=op({reverse_:reverse_}),reverse1d=op({reverse1d_:reverse1d_}),reverse2d=op({reverse2d_:reverse2d_}),reverse3d=op({reverse3d_:reverse3d_}),reverse4d=op({reverse4d_:reverse4d_});function maxPool_(e,t,n,r,o){var a=convertToTensor(e,"x","maxPool"),i=a,s=!1;3===a.rank&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),assert(4===i.rank,"Error in maxPool: input must be rank 4 but got rank "+i.rank+"."),null!=o&&assert(isInt(r),"Error in maxPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+".");var u=computePool2DInfo(i.shape,t,n,r,o),l=ENV.engine.runKernel(function(e,t){return t(e.maxPool(i,u))},{x:i},function(e,o){var a=o[0];return {x:function(){return maxPoolBackprop(e,i,a,t,n,r)}}});return s?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}function avgPool_(e,t,n,r,o){var a=convertToTensor(e,"x","avgPool");assert("float32"===a.dtype,"The input dtype to avgPool must be float32");var i=a,s=!1;3===a.rank&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),assert(4===i.rank,"Error in avgPool: x must be rank 4 but got rank "+i.rank+"."),null!=o&&assert(isInt(r),"Error in avgPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+".");var u=computePool2DInfo(i.shape,t,n,r),l=ENV.engine.runKernel(function(e){return e.avgPool(i,u)},{x:i},function(e){return {x:function(){return avgPoolBackprop(e,i,t,n,r)}}});return l=l.cast(a.dtype),s?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}function maxPoolBackprop(e,t,n,r,o,a,i){var s=convertToTensor(e,"dy","maxPoolBackprop"),u=convertToTensor(t,"input","maxPoolBackprop"),l=convertToTensor(n,"output","maxPoolBackprop");assert(u.rank===s.rank,"Rank of input ("+u.rank+") does not match rank of dy ("+s.rank+")"),assert(4===s.rank,"Error in maxPoolBackprop: dy must be rank 4 but got rank "+s.rank+"."),assert(4===u.rank,"Error in maxPoolBackprop: input must be rank 4 but got rank "+u.rank+"."),null!=i&&assert(isInt(a),"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+".");var c=computePool2DInfo(u.shape,r,o,a,i);return ENV.engine.runKernel(function(e){return e.maxPoolBackprop(s,u,l,c)},{$dy:s,$input:u})}function avgPoolBackprop(e,t,n,r,o){var a=convertToTensor(e,"dy","avgPoolBackprop"),i=convertToTensor(t,"input","avgPoolBackprop");assert(i.rank===a.rank,"Rank of input ("+i.rank+") does not match rank of dy ("+a.rank+")");var s=i,u=a,l=!1;3===i.rank&&(l=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]),u=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),assert(4===u.rank,"Error in avgPoolBackprop: dy must be rank 4 but got rank "+u.rank+"."),assert(4===s.rank,"Error in avgPoolBackprop: input must be rank 4 but got rank "+s.rank+".");var c=computePool2DInfo(s.shape,n,r,o),p=ENV.engine.runKernel(function(e){return e.avgPoolBackprop(u,s,c)},{dy4D:u,input4D:s});return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}var maxPool=op({maxPool_:maxPool_}),avgPool=op({avgPool_:avgPool_});function slice1d_(e,t,n){var r=convertToTensor(e,"x","slice1d");return assert(1===r.rank,"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"),slice(r,[t],[n])}function slice2d_(e,t,n){var r=convertToTensor(e,"x","slice2d");return assert(2===r.rank,"slice1d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"),slice(r,t,n)}function slice3d_(e,t,n){var r=convertToTensor(e,"x","slice3d");return assert(3===r.rank,"slice1d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"),slice(r,t,n)}function slice4d_(e,t,n){var r=convertToTensor(e,"x","slice4d");return assert(4===r.rank,"slice1d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"),slice(r,t,n)}function slice_(e,t,n){var r,o,a=convertToTensor(e,"x","slice");if(0===a.rank)throw new Error("Slicing scalar is not possible");r="number"==typeof t?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice(),o=(o=null==n?new Array(a.rank).fill(-1):"number"==typeof n?[n].concat(new Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(-1)):n).map(function(e,t){return e>=0?e:(assert(-1===e,"Bad value in size"),a.shape[t]-r[t])}),assertParamsValid(a,r,o);var i=a.shape;return ENV.engine.runKernel(function(e){return e.slice(a,r,o)},{$x:a},function(e){for(var t=[],n=0;n<e.rank;n++)t.push([r[n],i[n]-r[n]-o[n]]);return {$x:function(){return e.pad(t)}}})}var slice=op({slice_:slice_}),slice1d=op({slice1d_:slice1d_}),slice2d=op({slice2d_:slice2d_}),slice3d=op({slice3d_:slice3d_}),slice4d=op({slice4d_:slice4d_});function logSumExp_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=convertToTensor(e,"x","logSumExp"),o=parseAxisParam(t,r.shape),a=r.max(o,!0),i=r.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(n){var u=expandShapeToKeepDim(s.shape,o);return s.reshape(u)}return s}function sum_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=convertToTensor(e,"x","sum");"bool"===r.dtype&&(r=r.toInt());var o=parseAxisParam(t,r.shape);return customGrad(function(e){var t=getAxesPermutation(o,e.rank),r=o,a=e;null!=t&&(a=e.transpose(t),r=getInnerMostAxes(r.length,e.rank));var i=ENV.engine.runKernel(function(e){return e.sum(a,r)},{permutedX:a});if(n){var s=expandShapeToKeepDim(i.shape,o);i=i.reshape(s);}return {value:i,gradFunc:function(t){var n=e.shape.slice();return o.forEach(function(e){n[e]=1;}),t.reshape(n).mul(ones$1(e.shape,"float32"))}}})(r)}function mean_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=convertToTensor(e,"x","mean"),o=parseAxisParam(t,r.shape),a=sizeFromShape(computeOutAndReduceShapes(r.shape,o)[1]);return customGrad(function(e){var r=scalar(a);return {value:(r.dtype===e.dtype?e:e.cast(r.dtype)).div(r).sum(t,n),gradFunc:function(t){var n=e.shape.slice();return o.forEach(function(e){n[e]=1;}),t.reshape(n).mul(ones$1(e.shape,"float32")).div(r)}}})(r)}function gradForMinAndMax(e,t,n,r,o){var a=t[0];return a.rank<n.rank&&(a=a.reshape(expandShapeToKeepDim(a.shape,r))),e.rank<n.rank&&(e=e.reshape(expandShapeToKeepDim(e.shape,r))),{$x:function(){var t=e.mul(n.equal(a).cast(e.dtype));return null==o?t:t.transpose(o)}}}function min_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=convertToTensor(e,"x","min"),o=r,a=parseAxisParam(t,r.shape),i=a,s=getAxesPermutation(i,r.rank);null!=s&&(r=r.transpose(s),i=getInnerMostAxes(i.length,r.rank));var u=ENV.engine.runKernel(function(e,t){return t(e.min(r,i))},{$x:r},function(e,t){return gradForMinAndMax(e,t,o,a,s)});if(n){var l=expandShapeToKeepDim(u.shape,a);u=u.reshape(l);}return u}function max_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=convertToTensor(e,"x","max"),o=r,a=parseAxisParam(t,r.shape),i=a,s=getAxesPermutation(i,r.rank);null!=s&&(r=r.transpose(s),i=getInnerMostAxes(i.length,r.rank));var u=ENV.engine.runKernel(function(e,t){return t(e.max(r,i))},{$x:r},function(e,t){return gradForMinAndMax(e,t,o,a,s)});if(n){var l=expandShapeToKeepDim(u.shape,a);u=u.reshape(l);}return u}function argMin_(e,t){void 0===t&&(t=0);var n=convertToTensor(e,"x","argMin");null==t&&(t=0);var r=parseAxisParam(t,n.shape),o=getAxesPermutation(r,n.rank);null!=o&&(n=n.transpose(o),r=getInnerMostAxes(r.length,n.rank));return ENV.engine.runKernel(function(e){return e.argMin(n,r[0])},{$x:n},function(e){return {$x:function(){return zerosLike(n)}}})}function argMax_(e,t){void 0===t&&(t=0);var n=convertToTensor(e,"x","argMax");null==t&&(t=0);var r=parseAxisParam(t,n.shape),o=getAxesPermutation(r,n.rank);null!=o&&(n=n.transpose(o),r=getInnerMostAxes(r.length,n.rank));return ENV.engine.runKernel(function(e){return e.argMax(n,r[0])},{$x:n},function(e){return {$x:function(){return zerosLike(n)}}})}function all_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=convertToTensor(e,"x","all","bool");assert("bool"===r.dtype,"Error Tensor must be of type bool. Got: "+r.dtype);var o=parseAxisParam(t,r.shape),a=o,i=getAxesPermutation(a,r.rank);null!=i&&(r=r.transpose(i),a=getInnerMostAxes(a.length,r.rank));var s=ENV.engine.runKernel(function(e){return e.all(r,a)},{$x:r});if(n){var u=expandShapeToKeepDim(s.shape,o);return s.reshape(u)}return s}function any_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=convertToTensor(e,"x","any","bool");assert("bool"===r.dtype,"Error Tensor must be of type bool. Got: "+r.dtype);var o=parseAxisParam(t,r.shape),a=o,i=getAxesPermutation(a,r.rank);null!=i&&(r=r.transpose(i),a=getInnerMostAxes(a.length,r.rank));var s=ENV.engine.runKernel(function(e){return e.any(r,a)},{$x:r});if(n){var u=expandShapeToKeepDim(s.shape,o);return s.reshape(u)}return s}function moments_(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=parseAxisParam(t,(e=convertToTensor(e,"x","moments")).shape),o=e.mean(r,n),a=o.shape;return n||(a=expandShapeToKeepDim(o.shape,r)),{mean:o,variance:e.toFloat().sub(o.reshape(a)).square().mean(r,n)}}var all=op({all_:all_}),any=op({any_:any_}),argMax=op({argMax_:argMax_}),argMin=op({argMin_:argMin_}),logSumExp=op({logSumExp_:logSumExp_}),max=op({max_:max_}),mean=op({mean_:mean_}),min=op({min_:min_}),moments=op({moments_:moments_}),sum=op({sum_:sum_});function notEqual_(e,t){var n=convertToTensor(e,"a","notEqual"),r=convertToTensor(t,"b","notEqual");return assertTypesMatch(n,r),assertAndGetBroadcastShape(n.shape,r.shape),ENV.engine.runKernel(function(e){return e.notEqual(n,r)},{$a:n,$b:r})}function notEqualStrict_(e,t){var n=convertToTensor(e,"a","notEqualStrict"),r=convertToTensor(t,"b","notEqualStrict");return assertShapesMatch(n.shape,r.shape,"Error in notEqualStrict: "),n.notEqual(r)}function less_(e,t){var n=convertToTensor(e,"a","less"),r=convertToTensor(t,"b","less");return assertTypesMatch(n,r),assertAndGetBroadcastShape(n.shape,r.shape),ENV.engine.runKernel(function(e){return e.less(n,r)},{$a:n,$b:r})}function lessStrict_(e,t){var n=convertToTensor(e,"a","lessStrict"),r=convertToTensor(t,"b","lessStrict");return assertShapesMatch(n.shape,r.shape,"Error in lessStrict: "),n.less(r)}function equal_(e,t){var n=convertToTensor(e,"a","equal"),r=convertToTensor(t,"b","equal");return assertTypesMatch(n,r),assertAndGetBroadcastShape(n.shape,r.shape),ENV.engine.runKernel(function(e){return e.equal(n,r)},{$a:n,$b:r})}function equalStrict_(e,t){var n=convertToTensor(e,"a","equalStrict"),r=convertToTensor(t,"b","equalStrict");return assertShapesMatch(n.shape,r.shape,"Error in equalStrict: "),n.equal(r)}function lessEqual_(e,t){var n=convertToTensor(e,"a","lessEqual"),r=convertToTensor(t,"b","lessEqual");return assertTypesMatch(n,r),assertAndGetBroadcastShape(n.shape,r.shape),ENV.engine.runKernel(function(e){return e.lessEqual(n,r)},{$a:n,$b:r})}function lessEqualStrict_(e,t){var n=convertToTensor(e,"a","lessEqualStrict"),r=convertToTensor(t,"b","lessEqualStrict");return assertShapesMatch(n.shape,r.shape,"Error in lessEqualStrict: "),n.lessEqual(r)}function greater_(e,t){var n=convertToTensor(e,"a","greater"),r=convertToTensor(t,"b","greater");return assertTypesMatch(n,r),assertAndGetBroadcastShape(n.shape,r.shape),ENV.engine.runKernel(function(e){return e.greater(n,r)},{$a:n,$b:r})}function greaterStrict_(e,t){var n=convertToTensor(e,"a","greaterStrict"),r=convertToTensor(t,"b","greaterStrict");return assertShapesMatch(n.shape,r.shape,"Error in greaterStrict: "),n.greater(r)}function greaterEqual_(e,t){var n=convertToTensor(e,"a","greaterEqual"),r=convertToTensor(t,"b","greaterEqual");assertTypesMatch(n,r),assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.greaterEqual(n,r)},{$a:n,$b:r},function(e){return {$a:function(){return zerosLike(n)},$b:function(){return zerosLike(r)}}})}function greaterEqualStrict_(e,t){var n=convertToTensor(e,"a","greaterEqualStrict"),r=convertToTensor(t,"b","greaterEqualStrict");return assertShapesMatch(n.shape,r.shape,"Error in greaterEqualStrict: "),n.greaterEqual(r)}var equal=op({equal_:equal_}),equalStrict=op({equalStrict_:equalStrict_}),greater=op({greater_:greater_}),greaterEqual=op({greaterEqual_:greaterEqual_}),greaterEqualStrict=op({greaterEqualStrict_:greaterEqualStrict_}),greaterStrict=op({greaterStrict_:greaterStrict_}),less=op({less_:less_}),lessEqual=op({lessEqual_:lessEqual_}),lessEqualStrict=op({lessEqualStrict_:lessEqualStrict_}),lessStrict=op({lessStrict_:lessStrict_}),notEqual=op({notEqual_:notEqual_}),notEqualStrict=op({notEqualStrict_:notEqualStrict_});function add_(e,t){var n=convertToTensor(e,"a","add"),r=convertToTensor(t,"b","add");assertTypesMatch(n,r);var o=assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.add(n,r)},{$a:n,$b:r},function(e){return {$a:function(){var t=e,r=getReductionAxes(n.shape,o);return r.length>0&&(t=t.sum(r)),t.reshape(n.shape)},$b:function(){var t=e,n=getReductionAxes(r.shape,o);return n.length>0&&(t=t.sum(n)),t.reshape(r.shape)}}})}function addN_(e){assert(Array.isArray(e),function(){return "The argument passed to tf.addN() must be a list of tensors"}),assert(e.length>=1,function(){return "Must pass at least one tensor to tf.addN(), but got "+e.length});var t=e.map(function(e,t){return convertToTensor(e,"tensors"+t,"addN")}),n=t[0];t.forEach(function(e){if(e.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(e){if(!arraysEqual(e.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return ENV.engine.runKernel(function(e){return e.addN(t)},r,function(e){var n={};return t.forEach(function(t,r){n[r]=function(){return e.clone()};}),n})}function addStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in addStrict: "),e.add(t)}function sub_(e,t){var n=convertToTensor(e,"a","sub"),r=convertToTensor(t,"b","sub");assertTypesMatch(n,r);var o=assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.subtract(n,r)},{$a:n,$b:r},function(e){return {$a:function(){var t=e,r=getReductionAxes(n.shape,o);return r.length>0&&(t=t.sum(r)),t.reshape(n.shape)},$b:function(){var t=e,n=getReductionAxes(r.shape,o);return n.length>0&&(t=t.sum(n)),t.neg().reshape(r.shape)}}})}function subStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in subStrict: "),e.sub(t)}function pow_(e,t){var n=convertToTensor(e,"base","pow"),r=convertToTensor(t,"exp","pow"),o=assertAndGetBroadcastShape(n.shape,r.shape);e=n.cast(upcastType(n.dtype,r.dtype)),t=r.cast(upcastType(n.dtype,r.dtype));return ENV.engine.runKernel(function(e,t){return t(e.pow(n,r))},{$base:n,$exp:r},function(e,t){var a=t[0];return {$base:function(){var t=e.mul(r.toFloat().mul(a.div(n))),i=getReductionAxes(n.shape,o);return i.length>0&&(t=t.sum(i)),t.reshape(n.shape)},$exp:function(){var t=e.mul(a.mul(n.log()).toFloat()),i=getReductionAxes(r.shape,o);return i.length>0&&(t=t.sum(i)),t.reshape(r.shape)}}})}function powStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in powStrict: "),e.pow(t)}function mul_(e,t){var n=convertToTensor(e,"a","mul"),r=convertToTensor(t,"b","mul");assertTypesMatch(n,r);var o=assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.multiply(n,r)},{$a:n,$b:r},function(e){return {$a:function(){var t=e.mul(r.toFloat()),a=getReductionAxes(n.shape,o);return a.length>0?t.sum(a).reshape(n.shape):t},$b:function(){var t=e.mul(n.toFloat()),a=getReductionAxes(r.shape,o);return a.length>0?t.sum(a).reshape(r.shape):t}}})}function mulStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in multiplyStrict: "),e.mul(t)}function div_(e,t){var n,r=convertToTensor(e,"a","div"),o=convertToTensor(t,"b","div");if(assertTypesMatch(r,o),"int32"===r.dtype&&"int32"===o.dtype)return floorDiv(r,o);n=function(e){return e.realDivide(r,o)};var a=assertAndGetBroadcastShape(r.shape,o.shape);return ENV.engine.runKernel(n,{$a:r,$b:o},function(e){return {$a:function(){var t=e.div(o.toFloat()),n=getReductionAxes(r.shape,a);return n.length>0?t.sum(n).reshape(r.shape):t},$b:function(){var t=e.mul(r.toFloat()),n=getReductionAxes(o.shape,a);n.length>0&&(t=t.sum(n).reshape(o.shape));var i=o.square();return t.div(i.toFloat()).neg()}}})}function floorDiv_(e,t){var n=convertToTensor(e,"a","floorDiv"),r=convertToTensor(t,"b","floorDiv");assertTypesMatch(n,r);var o=assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.floorDiv(n,r)},{$a:n,$b:r},function(e){return {$a:function(){var t=e.div(r.toFloat()),a=getReductionAxes(n.shape,o);return a.length>0?t.sum(a).reshape(n.shape):t},$b:function(){var t=e.mul(n.toFloat()),a=getReductionAxes(r.shape,o);a.length>0&&(t=t.sum(a).reshape(r.shape));var i=r.square();return t.div(i.toFloat()).neg()}}})}function divStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in divideStrict: "),e.div(t)}function mod_(e,t){var n=convertToTensor(e,"a","mod"),r=convertToTensor(t,"b","mod");assertTypesMatch(n,r);var o=assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.mod(n,r)},{$a:n,$b:r},function(e){return {$a:function(){var t=getReductionAxes(n.shape,o);return t.length>0?e.sum(t).reshape(n.shape):e},$b:function(){var t=e.mul(n.div(r).floor().neg()),a=getReductionAxes(r.shape,o);return a.length>0?t.sum(a).reshape(r.shape):t}}})}function modStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in modStrict: "),e.mod(t)}function minimum_(e,t){var n=convertToTensor(e,"a","minimum"),r=convertToTensor(t,"b","minimum");assertTypesMatch(n,r),"bool"===n.dtype&&(n=n.toInt()),"bool"===r.dtype&&(r=r.toInt()),assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.minimum(n,r)},{$a:n,$b:r},function(e){return {$a:function(){return e.mul(n.lessEqual(r).toFloat())},$b:function(){return e.mul(n.greater(r).toFloat())}}})}function minimumStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in minimumStrict: "),e.minimum(t)}function maximum_(e,t){var n=convertToTensor(e,"a","maximum"),r=convertToTensor(t,"b","maximum");assertTypesMatch(n,r),"bool"===n.dtype&&(n=n.toInt()),"bool"===r.dtype&&(r=r.toInt()),assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.maximum(n,r)},{$a:n,$b:r},function(e){return {$a:function(){return e.mul(n.greaterEqual(r).toFloat())},$b:function(){return e.mul(n.less(r).toFloat())}}})}function maximumStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in maximumStrict: "),e.maximum(t)}function squaredDifference_(e,t){var n=convertToTensor(e,"a","squaredDifference"),r=convertToTensor(t,"b","squaredDifference");assertTypesMatch(n,r),assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.squaredDifference(n,r)},{$a:n,$b:r},function(e){var t=scalar(2);return {$a:function(){return e.mul(n.sub(r).mul(t))},$b:function(){return e.mul(r.sub(n).mul(t))}}})}function squaredDifferenceStrict_(e,t){return assertShapesMatch(e.shape,t.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(t)}function atan2_(e,t){var n=convertToTensor(e,"a","atan2"),r=convertToTensor(t,"b","atan2");assertTypesMatch(n,r);var o=assertAndGetBroadcastShape(n.shape,r.shape);return ENV.engine.runKernel(function(e){return e.atan2(n,r)},{$a:n,$b:r},function(e){return {$a:function(){var t=add(n.square(),r.square()),a=e.mul(r.div(t)),i=getReductionAxes(n.shape,o);return i.length>0&&(a=a.sum(i)),a.reshape(n.shape)},$b:function(){var t=add(n.square(),r.square()),a=neg(e.mul(n.div(t))),i=getReductionAxes(r.shape,o);return i.length>0&&(a=a.sum(i)),a.reshape(r.shape)}}})}var add=op({add_:add_}),addN=op({addN_:addN_}),addStrict=op({addStrict_:addStrict_}),atan2=op({atan2_:atan2_}),div=op({div_:div_}),divStrict=op({divStrict_:divStrict_}),floorDiv=op({floorDiv_:floorDiv_}),maximum=op({maximum_:maximum_}),maximumStrict=op({maximumStrict_:maximumStrict_}),minimum=op({minimum_:minimum_}),minimumStrict=op({minimumStrict_:minimumStrict_}),mod=op({mod_:mod_}),modStrict=op({modStrict_:modStrict_}),mul=op({mul_:mul_}),mulStrict=op({mulStrict_:mulStrict_}),pow=op({pow_:pow_}),powStrict=op({powStrict_:powStrict_}),squaredDifference=op({squaredDifference_:squaredDifference_}),squaredDifferenceStrict=op({squaredDifferenceStrict_:squaredDifferenceStrict_}),sub=op({sub_:sub_}),subStrict=op({subStrict_:subStrict_});function logicalNot_(e){var t=convertToTensor(e,"x","logicalNot","bool");return assert("bool"===t.dtype,"Error Array must be of type bool."),ENV.engine.runKernel(function(e){return e.logicalNot(t)},{$x:t})}function logicalAnd_(e,t){var n=convertToTensor(e,"a","logicalAnd","bool"),r=convertToTensor(t,"b","logicalAnd","bool");return assert("bool"===n.dtype&&"bool"===r.dtype,"Error Array must be of type bool."),assertAndGetBroadcastShape(n.shape,r.shape),ENV.engine.runKernel(function(e){return e.logicalAnd(n,r)},{$a:n,$b:r})}function logicalOr_(e,t){var n=convertToTensor(e,"a","logicalOr","bool"),r=convertToTensor(t,"b","logicalOr","bool");return assert("bool"===n.dtype&&"bool"===r.dtype,"Error Array must be of type bool."),assertAndGetBroadcastShape(n.shape,r.shape),ENV.engine.runKernel(function(e){return e.logicalOr(n,r)},{$a:n,$b:r})}function logicalXor_(e,t){var n=convertToTensor(e,"a","logicalXor","bool"),r=convertToTensor(t,"b","logicalXor","bool");return assert("bool"===n.dtype&&"bool"===r.dtype,"Error Array must be of type bool."),assertAndGetBroadcastShape(n.shape,r.shape),logicalOr(e,t).logicalAnd(logicalAnd(e,t).logicalNot())}function where_(e,t,n){var r=convertToTensor(t,"a","where"),o=convertToTensor(n,"b","where"),a=convertToTensor(e,"condition","where","bool");assert("bool"===a.dtype,"Error Condition must be of type bool."),assertShapesMatch(r.shape,o.shape,"Error in where: "),1===a.rank?assert(a.shape[0]===r.shape[0],"The first dimension of `a` must match the size of `condition`."):assertShapesMatch(a.shape,o.shape,"Error in where: ");return ENV.engine.runKernel(function(e){return e.select(a,r,o)},{$condition:a,$a:r,$b:o},function(e){return {$condition:function(){return zerosLike(a)},$a:function(){return e.mul(a.cast(r.dtype))},$b:function(){return e.mul(a.logicalNot().cast(o.dtype))}}})}function whereAsync_(e){return __awaiter(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){switch(o.label){case 0:return assert("bool"===(t=convertToTensor(e,"condition","where","bool")).dtype,"Condition must be of type bool."),[4,t.data()];case 1:return n=o.sent(),r=whereImpl(t.shape,n),e!==t&&t.dispose(),[2,r]}})})}var logicalAnd=op({logicalAnd_:logicalAnd_}),logicalNot=op({logicalNot_:logicalNot_}),logicalOr=op({logicalOr_:logicalOr_}),logicalXor=op({logicalXor_:logicalXor_}),where=op({where_:where_}),whereAsync=whereAsync_;function relu_(e){var t=convertToTensor(e,"x","relu");if("bool"===t.dtype)return t.toInt();return ENV.engine.runKernel(function(e){return e.relu(t)},{$x:t},function(e){var n=t.step();return {$x:function(){return e.mulStrict(n.toFloat())}}})}function elu_(e){var t=convertToTensor(e,"x","elu");return ENV.engine.runKernel(function(e,n){return n(e.elu(t))},{$x:t},function(e,t){var n=t[0];return {$x:function(){return ENV.engine.runKernel(function(t){return t.eluDer(e,n)},{dy:e,y:n})}}})}function selu_(e){var t=convertToTensor(e,"x","selu");return ENV.engine.runKernel(function(e){return e.selu(t)},{$x:t},function(e){return {$x:function(){var n=t.greater(scalar(0)),r=scalar(SELU_SCALEALPHA),o=scalar(SELU_SCALE),a=e.mul(o),i=e.mul(r).mul(t.toFloat().exp());return where(n,a,i)}}})}function leakyRelu_(e,t){void 0===t&&(t=.2);var n=convertToTensor(e,"x","leakyRelu");return maximum(scalar(t).mul(n),n)}function prelu_(e,t){var n=convertToTensor(e,"x","prelu"),r=convertToTensor(t,"alpha","prelu"),o=scalar(0);return maximum(o,n).add(r.mul(minimum(o,n)))}var elu=op({elu_:elu_}),leakyRelu=op({leakyRelu_:leakyRelu_}),prelu=op({prelu_:prelu_}),relu=op({relu_:relu_}),selu=op({selu_:selu_});function transpose_(e,t){var n=convertToTensor(e,"x","transpose");if(null==t&&(t=n.shape.map(function(e,t){return t}).reverse()),assert(n.rank===t.length,"Error in transpose: rank of input "+n.rank+" must match length of perm "+t+"."),t.forEach(function(e){assert(e>=0&&e<n.rank,"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+t);}),n.rank<=1)return n.clone();return ENV.engine.runKernel(function(e){return e.transpose(n,t)},{$x:n},function(e){var n=getUndoAxesPermutation(t);return {$x:function(){return e.transpose(n)}}})}var transpose=op({transpose_:transpose_});function localResponseNormalization_(e,t,n,r,o){void 0===t&&(t=5),void 0===n&&(n=1),void 0===r&&(r=1),void 0===o&&(o=.5);var a=convertToTensor(e,"x","localResponseNormalization");assert(4===a.rank||3===a.rank,"Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank "+a.rank+"."),assert(isInt(t),"Error in localResponseNormalization: depthRadius must be an integer\n                     but got depthRadius "+t+".");var i=a,s=!1;3===a.rank&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=ENV.engine.runKernel(function(e,a){return a(e.localResponseNormalization4D(i,t,n,r,o))},{x4D:i},function(e,a){var s=a[0];return {x4D:function(){return ENV.engine.runKernel(function(a){return a.LRNGrad(e,i,s,t,n,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}var localResponseNormalization=op({localResponseNormalization_:localResponseNormalization_});function norm_(e,t,n,r){void 0===t&&(t="euclidean"),void 0===n&&(n=null),void 0===r&&(r=!1);var o=normImpl(e=convertToTensor(e,"x","norm"),t,n),a=o.shape;if(r){var i=parseAxisParam(n,e.shape);a=expandShapeToKeepDim(o.shape,i);}return o.reshape(a)}function normImpl(e,t,n){if(void 0===n&&(n=null),0===e.rank)return e.abs();if(1!==e.rank&&null===n)return normImpl(e.reshape([-1]),t,n);if(1===e.rank||"number"==typeof n||n instanceof Array&&1===n.length){if(1===t)return e.abs().sum(n);if(t===1/0)return e.abs().max(n);if(t===-1/0)return e.abs().min(n);if("euclidean"===t||2===t)return e.abs().pow(scalar(2,"int32")).sum(n).sqrt();throw new Error("Error in norm: invalid ord value: "+t)}if(n instanceof Array&&2===n.length){if(1===t)return e.abs().sum(n[0]).max(n[1]-1);if(t===1/0)return e.abs().sum(n[1]).max(n[0]);if(t===-1/0)return e.abs().sum(n[1]).min(n[0]);if("fro"===t||"euclidean"===t)return e.square().sum(n).sqrt();throw new Error("Error in norm: invalid ord value: "+t)}throw new Error("Error in norm: invalid axis: "+n)}var norm=op({norm_:norm_});function unsortedSegmentSum_(e,t,n){var r=convertToTensor(e,"x","unsortedSegmentSum"),o=convertToTensor(t,"segmentIds","unsortedSegmentSum","int32");assert("int32"===o.dtype,"segmentIds must be of dtype `int32`"),assert(isInt(n),"numSegments must be of dtype int");return ENV.engine.runKernel(function(e){return e.unsortedSegmentSum(r,o,n)},{$x:r},function(e){return {$x:function(){return gatherDropNegatives(e,o)}}})}function gather_(e,t,n){void 0===n&&(n=0);var r=convertToTensor(e,"x","gather"),o=convertToTensor(t,"indices","gather","int32");assert("int32"===o.dtype,"Indices must be of dtype `int32`"),n=parseAxisParam(n,r.shape)[0];return ENV.engine.runKernel(function(e){return e.gather(r,o,n)},{$x:r},function(e){return {$x:function(){if(0===n)return unsortedSegmentSum(e,o,r.shape[n]);var t=r.shape,a=o.size,i=t.slice(0,n),s=i.length,u=t.slice(n,t.length).slice(1),l=u.length,c=arrayRange(0,s),p=arrayRange(s+1,s+1+l),d=arrayConcat([i,[a],u]),h=e.reshape(d),f=o.reshape([a]),m=arrayConcat([[s],c,p]),g=h.transpose(m),v=unsortedSegmentSum(g,f,r.shape[n]),y=getUndoAxesPermutation(m);return v=v.transpose(y)}}})}function arrayRange(e,t){for(var n=[],r=e;r<t;++r)n.push(r);return n}function arrayConcat(e){for(var t=[],n=0;n<e.length;++n)for(var r=0;r<e[n].length;++r)t.push(e[n][r]);return t}function gatherDropNegatives(e,t){for(var n=maximum(t,zerosLike(t)),r=gather(e,n),o=greaterEqual(t,scalar(0,"int32")),a=r.rank-o.rank,i=0;i<a;++i)o=expandDims(o,i+1);o=logicalAnd(o,ones$1(r.shape,"bool"));var s=zerosLike(r);return where(o,r,s)}var gather=op({gather_:gather_}),unsortedSegmentSum=op({unsortedSegmentSum_:unsortedSegmentSum_});function multiRNNCell_(e,t,n,r){for(var o=convertToTensor(t,"data","multiRNNCell"),a=convertToTensorArray(n,"c","multiRNNCell"),i=convertToTensorArray(r,"h","multiRNNCell"),s=o,u=[],l=0;l<e.length;l++){var c=e[l](s,a[l],i[l]);u.push(c[0]),u.push(c[1]),s=c[1];}var p=[],d=[];for(l=0;l<u.length;l+=2)p.push(u[l]),d.push(u[l+1]);return [p,d]}function basicLSTMCell_(e,t,n,r,o,a){var i=convertToTensor(e,"forgetBias","basicLSTMCell"),s=convertToTensor(t,"lstmKernel","basicLSTMCell"),u=convertToTensor(n,"lstmBias","basicLSTMCell"),l=convertToTensor(r,"data","basicLSTMCell"),c=convertToTensor(o,"c","basicLSTMCell"),p=convertToTensor(a,"h","basicLSTMCell"),d=l.concat(p,1).matMul(s).add(u),h=d.shape[0],f=d.shape[1]/4,m=[h,f],g=d.slice([0,0],m),v=d.slice([0,f],m),y=d.slice([0,2*f],m),x=d.slice([0,3*f],m),T=g.sigmoid().mulStrict(v.tanh()).addStrict(c.mulStrict(i.add(y).sigmoid()));return [T,T.tanh().mulStrict(x.sigmoid())]}var basicLSTMCell=op({basicLSTMCell_:basicLSTMCell_}),multiRNNCell=op({multiRNNCell_:multiRNNCell_});function movingAverage_(e,t,n,r,o){void 0===o&&(o=!0);var a=convertToTensor(e,"v","movingAverage"),i=convertToTensor(t,"x","movingAverage"),s=convertToTensor(n,"decay","movingAverage");assertTypesMatch(a,i),assert(arraysEqual(a.shape,i.shape),"Shape mismatch in v and x");var u=scalar(1),l=u.sub(s),c=i.sub(a).mul(l);if(o){assert(null!=r,"When using zeroDebias: true, step is required.");var p=convertToTensor(r,"step","movingAverage");c=c.div(u.sub(pow(s,p)));}return a.add(c)}var movingAverage=op({movingAverage_:movingAverage_});function stridedSlice_(e,t,n,r,o,a,i,s,u){if(void 0===o&&(o=0),void 0===a&&(a=0),void 0===i&&(i=0),void 0===s&&(s=0),void 0===u&&(u=0),0!==i)throw new Error("ellipsis mask is not yet supported");if(0!==s)throw new Error("new axis mask is not yet supported");var l=convertToTensor(e,"x","stridedSlice");return ENV.engine.runKernel(function(e){return e.stridedSlice(l,t,n,r,o,a,i,s,u)},{$x:l})}var stridedSlice=op({stridedSlice_:stridedSlice_});function topk_(e,t,n){void 0===t&&(t=1),void 0===n&&(n=!0);var r=convertToTensor(e,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=ENV.engine.runKernel(function(e){return e.topk(r,t,n)},{$x:r});return {values:a[0],indices:a[1]}}var Reduction,topk=op({topk_:topk_});function computeWeightedLoss_(e,t,n){void 0===n&&(n=Reduction.SUM_BY_NONZERO_WEIGHTS);var r=convertToTensor(e,"losses","computeWeightedLoss"),o=null;null!=t&&(o=convertToTensor(t,"weights","computeWeightedLoss"));var a=null==o?r:r.mul(o);if(n===Reduction.NONE)return a;if(n===Reduction.SUM)return a.sum();if(n===Reduction.MEAN){if(null==o)return a.mean();var i=sizeFromShape(r.shape)/sizeFromShape(o.shape),s=a.sum().div(o.sum());return i>1?s.div(scalar(i)):s}if(n===Reduction.SUM_BY_NONZERO_WEIGHTS){if(null==o)return a.sum().div(scalar(r.size));var u=o.mul(ones$1(r.shape)).notEqual(scalar(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+n)}function absoluteDifference_(e,t,n,r){void 0===r&&(r=Reduction.SUM_BY_NONZERO_WEIGHTS);var o=convertToTensor(e,"labels","absoluteDifference"),a=convertToTensor(t,"predictions","absoluteDifference"),i=null;null!=n&&(i=convertToTensor(n,"weights","absoluteDifference")),assertShapesMatch(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return computeWeightedLoss(s,i,r)}function meanSquaredError_(e,t,n,r){void 0===r&&(r=Reduction.SUM_BY_NONZERO_WEIGHTS);var o=convertToTensor(e,"labels","meanSquaredError"),a=convertToTensor(t,"predictions","meanSquaredError"),i=null;null!=n&&(i=convertToTensor(n,"weights","meanSquaredError")),assertShapesMatch(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return computeWeightedLoss(s,i,r)}function cosineDistance_(e,t,n,r,o){void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"labels","cosineDistance"),i=convertToTensor(t,"predictions","cosineDistance"),s=null;null!=r&&(s=convertToTensor(r,"weights","cosineDistance")),assertShapesMatch(a.shape,i.shape,"Error in cosineDistance: ");var u=scalar(1).sub(a.mul(i).sum(n,!0));return computeWeightedLoss(u,s,o)}function hingeLoss_(e,t,n,r){void 0===r&&(r=Reduction.SUM_BY_NONZERO_WEIGHTS);var o=convertToTensor(e,"labels","hingeLoss"),a=convertToTensor(t,"predictions","hingeLoss"),i=null;null!=n&&(i=convertToTensor(n,"weights","hingeLoss")),assertShapesMatch(o.shape,a.shape,"Error in hingeLoss: ");var s=scalar(1);o=scalar(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return computeWeightedLoss(u,i,r)}function logLoss_(e,t,n,r,o){void 0===r&&(r=1e-7),void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"labels","logLoss"),i=convertToTensor(t,"predictions","logLoss"),s=null;null!=n&&(s=convertToTensor(n,"weights","logLoss")),assertShapesMatch(a.shape,i.shape,"Error in logLoss: ");var u=scalar(1),l=scalar(r),c=a.mul(i.add(l).log()).neg().sub(u.sub(a).mul(u.sub(i).add(l).log()));return computeWeightedLoss(c,s,o)}function sigmoidCrossEntropyWithLogits_(e,t){var n=convertToTensor(e,"labels","sigmoidCrossEntropyWithLogits"),r=convertToTensor(t,"logits","sigmoidCrossEntropyWithLogits");assertShapesMatch(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");var o=r.relu(),a=r.mul(n),i=r.abs().neg().exp().log1p();return o.sub(a).add(i)}function sigmoidCrossEntropy_(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"multiClassLabels","sigmoidCrossEntropy"),i=convertToTensor(t,"logits","sigmoidCrossEntropy"),s=null;if(null!=n&&(s=convertToTensor(n,"weights","sigmoidCrossEntropy")),assertShapesMatch(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=scalar(r),l=scalar(1),c=scalar(.5);a=a.mul(l.sub(u)).add(c.mul(u));}var p=sigmoidCrossEntropyWithLogits_(a,i);return computeWeightedLoss(p,s,o)}function huberLoss_(e,t,n,r,o){void 0===r&&(r=1),void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"labels","huberLoss"),i=convertToTensor(t,"predictions","huberLoss"),s=null;null!=n&&(s=convertToTensor(n,"weights","huberLoss")),assertShapesMatch(a.shape,i.shape,"Error in huberLoss: ");var u=scalar(r),l=i.sub(a).abs(),c=minimum(l,u),p=l.sub(c),d=scalar(.5).mul(c.square()).add(u.mul(p));return computeWeightedLoss(d,s,o)}function softmaxCrossEntropyWithLogits_(e,t,n){if(void 0===n&&(n=-1),-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+t.rank+" and dim was "+n);return customGrad(function(e,t){var r=t.logSumExp([n],!0),o=t.toFloat().sub(r);return {value:o.mul(e).neg().sum([n]),gradFunc:function(t){var r=expandShapeToKeepDim(t.shape,[n]);return [t.reshape(r).mul(e.toFloat().sub(o.exp())),t.reshape(r).mul(o.exp().sub(e.toFloat()))]}}})(e,t)}function softmaxCrossEntropy_(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS);var a=convertToTensor(e,"onehotLabels","softmaxCrossEntropy"),i=convertToTensor(t,"logits","softmaxCrossEntropy"),s=null;if(null!=n&&(s=convertToTensor(n,"weights","softmaxCrossEntropy")),assertShapesMatch(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){var u=scalar(r),l=scalar(1),c=scalar(a.shape[1]);a=a.mul(l.sub(u)).add(u.div(c));}var p=softmaxCrossEntropyWithLogits_(a,i);return computeWeightedLoss(p,s,o)}!function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";}(Reduction||(Reduction={}));var absoluteDifference=op({absoluteDifference_:absoluteDifference_}),computeWeightedLoss=op({computeWeightedLoss_:computeWeightedLoss_}),cosineDistance=op({cosineDistance_:cosineDistance_}),hingeLoss=op({hingeLoss_:hingeLoss_}),huberLoss=op({huberLoss_:huberLoss_}),logLoss=op({logLoss_:logLoss_}),meanSquaredError=op({meanSquaredError_:meanSquaredError_}),sigmoidCrossEntropy=op({sigmoidCrossEntropy_:sigmoidCrossEntropy_}),softmaxCrossEntropy=op({softmaxCrossEntropy_:softmaxCrossEntropy_}),loss_ops=Object.freeze({get Reduction(){return Reduction},absoluteDifference:absoluteDifference,computeWeightedLoss:computeWeightedLoss,cosineDistance:cosineDistance,hingeLoss:hingeLoss,huberLoss:huberLoss,logLoss:logLoss,meanSquaredError:meanSquaredError,sigmoidCrossEntropy:sigmoidCrossEntropy,softmaxCrossEntropy:softmaxCrossEntropy});function gramSchmidt_(e){var t;if(Array.isArray(e)){t=!1,assert(null!=e&&e.length>0,"Gram-Schmidt process: input must not be null, undefined, or empty");for(var n=e[0].shape[0],r=1;r<e.length;++r)assert(e[r].shape[0]===n,"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+e[r].shape[0]+" vs. "+n+")");}else t=!0,e=split$1(e,e.shape[0],0).map(function(e){return squeeze(e,[0])});assert(e.length<=e[0].shape[0],"Gram-Schmidt: Number of vectors ("+e.length+") exceeds number of dimensions ("+e[0].shape[0]+").");var o=[],a=e,i=function(e){o.push(ENV.engine.tidy(function(){var t=a[e];if(e>0)for(var n=0;n<e;++n){var r=sum(o[n].mulStrict(t)).mul(o[n]);t=t.sub(r);}return t.div(norm(t,"euclidean"))}));};for(r=0;r<e.length;++r)i(r);return t?stack(o,0):o}function qr_(e,t){if(void 0===t&&(t=!1),e.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+e.rank);if(2===e.rank)return qr2d(e,t);var n=e.shape.slice(0,e.shape.length-2).reduce(function(e,t){return e*t}),r=[],o=[];return unstack(e.reshape([n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0).forEach(function(e){var n=qr2d(e,t),a=n[0],i=n[1];r.push(a),o.push(i);}),[stack(r,0).reshape(e.shape),stack(o,0).reshape(e.shape)]}function qr2d(e,t){return void 0===t&&(t=!1),ENV.engine.tidy(function(){if(2!==e.shape.length)throw new Error("qr2d() requires a 2D Tensor, but got a "+e.shape.length+"D Tensor.");for(var n=e.shape[0],r=e.shape[1],o=eye(n),a=e.clone(),i=tensor2d([[1]],[1,1]),s=i.clone(),u=n>=r?r:n,l=function(e){var t,u=a,l=s,c=o;t=ENV.engine.tidy(function(){var t=a.slice([e,e],[n-e,1]),u=t.norm(),l=a.slice([e,e],[1,1]),c=l.sign().neg(),p=l.sub(c.mul(u)),d=t.div(p);s=1===d.shape[0]?i.clone():i.concat(d.slice([1,0],[d.shape[0]-1,d.shape[1]]),0);var h=c.matMul(p).div(u).neg(),f=a.slice([e,0],[n-e,r]),m=h.mul(s);a=0===e?f.sub(m.matMul(s.transpose().matMul(f))):a.slice([0,0],[e,r]).concat(f.sub(m.matMul(s.transpose().matMul(f))),0);var g=o.slice([0,e],[n,o.shape[1]-e]);return o=0===e?g.sub(g.matMul(s).matMul(m.transpose())):o.slice([0,0],[n,e]).concat(g.sub(g.matMul(s).matMul(m.transpose())),1),[s,a,o]}),s=t[0],a=t[1],o=t[2],dispose([u,l,c]);},c=0;c<u;++c)l(c);return !t&&n>r&&(o=o.slice([0,0],[n,r]),a=a.slice([0,0],[r,r])),[o,a]})}var gramSchmidt=op({gramSchmidt_:gramSchmidt_}),qr=op({qr_:qr_}),linalg_ops=Object.freeze({gramSchmidt:gramSchmidt,qr:qr});function resizeBilinear_(e,t,n){void 0===n&&(n=!1);var r=convertToTensor(e,"images","resizeBilinear");assert(3===r.rank||4===r.rank,"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."),assert(2===t.length,"Error in resizeBilinear: new shape must 2D, but got shape "+t+".");var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t[0],s=t[1],u=ENV.engine.runKernel(function(e,t){return e.resizeBilinear(o,i,s,n)},{batchImages:o},function(e,t){return {batchImages:function(){return ENV.engine.runKernel(function(t){return t.resizeBilinearBackprop(e,o,n)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}function resizeNearestNeighbor_(e,t,n){void 0===n&&(n=!1);var r=convertToTensor(e,"images","resizeNearestNeighbor");assert(3===r.rank||4===r.rank,"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."),assert(2===t.length,"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."),assert("float32"===r.dtype||"int32"===r.dtype,"`images` must have `int32` or `float32` as dtype");var o=r,a=!1;3===r.rank&&(a=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t[0],s=t[1],u=ENV.engine.runKernel(function(e,t){return e.resizeNearestNeighbor(o,i,s,n)},{batchImages:o},function(e,t){return {batchImages:function(){return ENV.engine.runKernel(function(t){return t.resizeNearestNeighborBackprop(e,o,n)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}function nonMaxSuppression_(e,t,n,r,o){void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY);var a=convertToTensor(e,"boxes","nonMaxSuppression"),i=convertToTensor(t,"scores","nonMaxSuppression"),s=nonMaxSuppSanityCheck(a,i,n,r,o);return n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,ENV.engine.runKernel(function(e){return e.nonMaxSuppression(a,i,n,r,o)},{$boxes:a})}function nonMaxSuppressionAsync_(e,t,n,r,o){return void 0===r&&(r=.5),void 0===o&&(o=Number.NEGATIVE_INFINITY),__awaiter(this,void 0,void 0,function(){var a,i,s,u,l,c;return __generator(this,function(p){switch(p.label){case 0:return a=convertToTensor(e,"boxes","nonMaxSuppressionAsync"),i=convertToTensor(t,"scores","nonMaxSuppressionAsync"),s=nonMaxSuppSanityCheck(a,i,n,r,o),n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,a.data()];case 1:return u=p.sent(),[4,i.data()];case 2:return l=p.sent(),c=nonMaxSuppressionImpl(u,l,n,r,o),a!==e&&a.dispose(),i!==t&&i.dispose(),[2,c]}})})}function nonMaxSuppSanityCheck(e,t,n,r,o){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY);var a=e.shape[0];return n=Math.min(n,a),assert(0<=r&&r<=1,"iouThreshold must be in [0, 1], but was '"+r+"'"),assert(2===e.rank,"boxes must be a 2D tensor, but was of rank '"+e.rank+"'"),assert(4===e.shape[1],"boxes must have 4 columns, but 2nd dimension was "+e.shape[1]),assert(1===t.rank,"scores must be a 1D tensor"),assert(t.shape[0]===a,"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o}}function cropAndResize_(e,t,n,r,o,a){var i=convertToTensor(e,"image","cropAndResize","float32"),s=convertToTensor(t,"boxes","cropAndResize","float32"),u=convertToTensor(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var l=s.shape[0];assert(4===i.rank,"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."),assert(2===s.rank&&4===s.shape[1],"Error in cropAndResize: boxes must be have size ["+l+",4] but had shape "+s.shape+"."),assert(1===u.rank&&u.shape[0]===l,"Error in cropAndResize: boxInd must be have size ["+l+"] but had shape "+s.shape+"."),assert("int32"===u.dtype,"Error in cropAndResize: boxInd must be of dtype int32, but got dtype "+u.dtype+"."),assert(2===r.length,"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."),assert(r[0]>=1&&r[1]>=1,"cropSize must be atleast [1,1], but was "+r),assert("bilinear"===o||"nearest"===o,"method must be bilinear or nearest, but was "+o);return ENV.engine.runKernel(function(e,t){return e.cropAndResize(i,s,u,r,o,a)},{$image:i,$boxes:s})}var resizeBilinear=op({resizeBilinear_:resizeBilinear_}),resizeNearestNeighbor=op({resizeNearestNeighbor_:resizeNearestNeighbor_}),nonMaxSuppression=op({nonMaxSuppression_:nonMaxSuppression_}),nonMaxSuppressionAsync=nonMaxSuppressionAsync_,cropAndResize=cropAndResize_,image_ops=Object.freeze({resizeBilinear:resizeBilinear,resizeNearestNeighbor:resizeNearestNeighbor,nonMaxSuppression:nonMaxSuppression,nonMaxSuppressionAsync:nonMaxSuppressionAsync,cropAndResize:cropAndResize}),ops=Object.freeze({image:image_ops,linalg:linalg_ops,losses:loss_ops,op:op,batchNormalization2d:batchNormalization2d,batchNormalization3d:batchNormalization3d,batchNormalization4d:batchNormalization4d,batchNormalization:batchNormalization,complex:complex,real:real,imag:imag,concat:concat,concat1d:concat1d,concat2d:concat2d,concat3d:concat3d,concat4d:concat4d,split:split$1,conv1d:conv1d,conv2d:conv2d,depthwiseConv2d:depthwiseConv2d,separableConv2d:separableConv2d,conv2dTranspose:conv2dTranspose,matMul:matMul,dot:dot,outerProduct:outerProduct,reverse:reverse,reverse1d:reverse1d,reverse2d:reverse2d,reverse3d:reverse3d,reverse4d:reverse4d,maxPool:maxPool,avgPool:avgPool,slice:slice,slice1d:slice1d,slice2d:slice2d,slice3d:slice3d,slice4d:slice4d,abs:abs,acos:acos,acosh:acosh,asin:asin,asinh:asinh,atan:atan,atanh:atanh,ceil:ceil,clipByValue:clipByValue,cos:cos,cosh:cosh,erf:erf,exp:exp,expm1:expm1,floor:floor,log:log$1,log1p:log1p,logSigmoid:logSigmoid,neg:neg,reciprocal:reciprocal,round:round,rsqrt:rsqrt,sigmoid:sigmoid,sign:sign,sin:sin,sinh:sinh,softplus:softplus,sqrt:sqrt,square:square,step:step,tan:tan,tanh:tanh$1,all:all,any:any,argMax:argMax,argMin:argMin,logSumExp:logSumExp,max:max,mean:mean,min:min,moments:moments,sum:sum,equal:equal,equalStrict:equalStrict,greater:greater,greaterEqual:greaterEqual,greaterEqualStrict:greaterEqualStrict,greaterStrict:greaterStrict,less:less,lessEqual:lessEqual,lessEqualStrict:lessEqualStrict,lessStrict:lessStrict,notEqual:notEqual,notEqualStrict:notEqualStrict,add:add,addN:addN,addStrict:addStrict,atan2:atan2,div:div,divStrict:divStrict,floorDiv:floorDiv,maximum:maximum,maximumStrict:maximumStrict,minimum:minimum,minimumStrict:minimumStrict,mod:mod,modStrict:modStrict,mul:mul,mulStrict:mulStrict,pow:pow,powStrict:powStrict,squaredDifference:squaredDifference,squaredDifferenceStrict:squaredDifferenceStrict,sub:sub,subStrict:subStrict,elu:elu,leakyRelu:leakyRelu,prelu:prelu,relu:relu,selu:selu,logicalAnd:logicalAnd,logicalNot:logicalNot,logicalOr:logicalOr,logicalXor:logicalXor,where:where,whereAsync:whereAsync,buffer:buffer,toPixels:toPixels,print:print,batchToSpaceND:batchToSpaceND,cast:cast,clone:clone,cumsum:cumsum,depthToSpace:depthToSpace,expandDims:expandDims,eye:eye,fromPixels:fromPixels,multinomial:multinomial,oneHot:oneHot,pad:pad,pad1d:pad1d,pad2d:pad2d,pad3d:pad3d,pad4d:pad4d,rand:rand,randomNormal:randomNormal,randomUniform:randomUniform,reshape:reshape,spaceToBatchND:spaceToBatchND,squeeze:squeeze,stack:stack,tile:tile,truncatedNormal:truncatedNormal,unstack:unstack,fill:fill,linspace:linspace,ones:ones$1,range:range,scalar:scalar,tensor:tensor,tensor1d:tensor1d,tensor2d:tensor2d,tensor3d:tensor3d,tensor4d:tensor4d,tensor5d:tensor5d,tensor6d:tensor6d,zeros:zeros,onesLike:onesLike,zerosLike:zerosLike,transpose:transpose,softmax:softmax,localResponseNormalization:localResponseNormalization,norm:norm,gather:gather,unsortedSegmentSum:unsortedSegmentSum,basicLSTMCell:basicLSTMCell,multiRNNCell:multiRNNCell,movingAverage:movingAverage,stridedSlice:stridedSlice,topk:topk}),MathBackendCPU=function(){function e(){this.blockSize=48,this.firstUse=!0,ENV.get("IS_BROWSER")&&(this.canvas=document.createElement("canvas"));}return e.prototype.setDataMover=function(e){this.data=new DataStorage(e);},e.prototype.register=function(e,t,n){if(this.firstUse&&(this.firstUse=!1,ENV.get("IS_NODE")&&warn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================\n")),this.data.has(e))throw new Error("Data buffer is already registered");this.data.set(e,{dtype:n});},e.prototype.write=function(e,t){if(null==t)throw new Error("MathBackendCPU.write(): values can not be null");this.data.get(e).values=t;},e.prototype.fromPixels=function(e,t){if(null==e)throw new Error("pixels passed to tf.fromPixels() can not be null");var n,r;if(ENV.get("IS_NODE")&&null==e.getContext)throw new Error("When running in node, pixels must be an HTMLCanvasElement like the one returned by the `canvas` npm package");if(null!=e.getContext)n=e.getContext("2d").getImageData(0,0,e.width,e.height).data;else if(e instanceof ImageData)n=e.data;else{if(!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement))throw new Error("pixels passed to tf.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement or ImageData, but was "+e.constructor.name);if(null==this.canvas)throw new Error("Can't read pixels from HTMLImageElement outside the browser.");this.canvas.width=e.width,this.canvas.height=e.height,this.canvas.getContext("2d").drawImage(e,0,0,e.width,e.height),n=this.canvas.getContext("2d").getImageData(0,0,e.width,e.height).data;}if(4===t)r=new Int32Array(n);else{var o=e.width*e.height;r=new Int32Array(o*t);for(var a=0;a<o;a++)for(var i=0;i<t;++i)r[a*t+i]=n[4*a+i];}return tensor3d(r,[e.height,e.width,t],"int32")},e.prototype.read=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return [2,this.readSync(e)]})})},e.prototype.readSync=function(e){var t=this.data.get(e),n=t.dtype,r=t.complexTensors;return "complex64"===n?mergeRealAndImagArrays(r.real.dataSync(),r.imag.dataSync()):this.data.get(e).values},e.prototype.disposeData=function(e){if(this.data.has(e)){var t=this.data.get(e).complexTensors;null!=t&&(t.real.dispose(),t.imag.dispose()),this.data.delete(e);}},e.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t=now(),e(),[2,{kernelMs:now()-t}]})})},e.prototype.memory=function(){return {unreliable:!0}},e.prototype.complex=function(e,t){var n=Tensor.make(e.shape,{},"complex64");return this.data.get(n.dataId).complexTensors={real:ENV.engine.keep(e.clone()),imag:ENV.engine.keep(t.clone())},n},e.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},e.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},e.prototype.assertNotComplex=function(e,t){Array.isArray(e)||(e=[e]),e.forEach(function(e){null!=e&&assert("complex64"!==e.dtype,t+" does not support complex64 tensors.");});},e.prototype.slice=function(e,t,n){this.assertNotComplex(e,"slice");for(var r=buffer(n,e.dtype),o=0;o<r.size;++o){var a=r.indexToLoc(o),i=a.map(function(e,n){return e+t[n]});r.set.apply(r,[e.get.apply(e,i)].concat(a));}return r.toTensor()},e.prototype.stridedSlice=function(e,t,n,r,o,a,i,s,u){this.assertNotComplex(e,"stridedSlice");var l=getStridedSlicedInfo(e.shape,t,n,r,o,a,i,s,u),c=l[0],p=l[1],d=l[2],h=p.filter(function(e,t){return -1===d.indexOf(t)});if(h.some(function(e){return 0===e}))return tensor([],h);for(var f=buffer(p,e.dtype),m=0;m<f.size;m++){for(var g=f.indexToLoc(m),v=new Array(g.length),y=0;y<v.length;y++)v[y]=g[y]*r[y]+c[y];f.set.apply(f,[e.get.apply(e,v)].concat(g));}return f.toTensor().reshape(h)},e.prototype.reverse=function(e,t){this.assertNotComplex(e,"reverse");for(var n=buffer(e.shape,e.dtype),r=e.buffer(),o=function(o){var a=n.indexToLoc(o),i=a.slice();t.forEach(function(t){return i[t]=e.shape[t]-1-i[t]}),n.set.apply(n,[r.get.apply(r,i)].concat(a));},a=0;a<n.size;a++)o(a);return n.toTensor()},e.prototype.concat=function(e,t){this.assertNotComplex(e,"concat");var n=e.map(function(e){var n=sizeFromShape(e.shape.slice(t));return e.as2D(-1,n)}),r=computeOutShape(n.map(function(e){return e.shape}),1),o=buffer(r,e[0].dtype).values;if(1===n[0].shape[0]){var a=0;n.forEach(function(e){o.set(e.dataSync(),a),a+=e.size;});}else{var i=0;n.forEach(function(e){for(var t=e.dataSync(),n=0,a=0;a<e.shape[0];++a)for(var s=a*r[1]+i,u=0;u<e.shape[1];++u)o[s+u]=t[n++];i+=e.shape[1];});}var s=computeOutShape(e.map(function(e){return e.shape}),t);return tensor(o,s,e[0].dtype)},e.prototype.neg=function(e){return this.assertNotComplex(e,"neg"),this.multiply(scalar(-1),e)},e.prototype.add=function(e,t){return "complex64"===e.dtype||"complex64"===t.dtype?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(e,t,n,r){return {real:e+n,imag:t+r}}):this.broadcastedBinaryOp(e,t,upcastType(e.dtype,t.dtype),function(e,t){return e+t})},e.prototype.addN=function(e){this.assertNotComplex(e,"addN");for(var t=e.map(function(e){return e.dataSync()}),n=buffer(e[0].shape,e[0].dtype),r=n.values,o=0;o<e.length;o++)for(var a=t[o],i=0;i<r.length;i++)r[i]+=a[i];return n.toTensor()},e.prototype.subtract=function(e,t){return "complex64"===e.dtype||"complex64"===t.dtype?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(e,t,n,r){return {real:e-n,imag:t-r}}):this.broadcastedBinaryOp(e,t,upcastType(e.dtype,t.dtype),function(e,t){return e-t})},e.prototype.pow=function(e,t){return this.assertNotComplex([e,t],"pow"),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.pow(e,t)})},e.prototype.batchMatMul=function(e,t,n,r){this.assertNotComplex([e,t],"matMul");for(var o=n?e.shape[1]:e.shape[2],a=n?e.shape[2]:e.shape[1],i=r?t.shape[1]:t.shape[2],s=e.shape[0],u=e.dataSync(),l=t.dataSync(),c=n?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],p=c[0],d=c[1],h=c[2],f=r?[1,t.strides[1],t.strides[0]]:[t.strides[1],1,t.strides[0]],m=f[0],g=f[1],v=f[2],y=a*i,x=new Float32Array(s*y),T=this.blockSize,b=0;b<s;b++)for(var S=0;S<a;S+=T)for(var E=0;E<i;E+=T)for(var w=0;w<o;w+=T)for(var A=Math.min(S+T,a),C=Math.min(E+T,i),_=Math.min(w+T,o),R=S;R<A;R++)for(var N=E;N<C;N++){for(var k=0,I=w;I<_;I++)k+=u[b*p+R*d+I*h]*l[I*m+N*g+b*v];x[b*y+(R*i+N)]+=k;}return tensor3d(x,[s,a,i])},e.prototype.multiply=function(e,t){return "complex64"===e.dtype||"complex64"===t.dtype?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(e,t,n,r){return {real:e*n-t*r,imag:e*r+t*n}}):this.broadcastedBinaryOp(e,t,upcastType(e.dtype,t.dtype),function(e,t){return e*t})},e.prototype.realDivide=function(e,t){this.assertNotComplex([e,t],"realDivide");return this.broadcastedBinaryOp(e,t,"float32",function(e,t){return e/t})},e.prototype.floorDiv=function(e,t){this.assertNotComplex([e,t],"floorDiv");return this.broadcastedBinaryOp(e,t,"int32",function(e,t){return Math.floor(e/t)})},e.prototype.sum=function(e,t){this.assertNotComplex(e,"sum"),assertAxesAreInnerMostDims("sum",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=n[1],a=zeros(r,upcastType(e.dtype,"int32")),i=sizeFromShape(o),s=a.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,p=0,d=0;d<i;++d)p+=u[c+d];s[l]=p;}return a},e.prototype.unsortedSegmentSum=function(e,t,n){this.assertNotComplex(e,"unsortedSegmentSum");for(var r=[],o=e.rank-t.rank,a=0;a<o;++a)t=t.expandDims(a+1);for(a=0;a<n;++a){var i=scalar(a,"int32"),s=equal(i,t).asType("float32").mul(e).sum(0);r.push(s);}return stack(r)},e.prototype.argMin=function(e,t){this.assertNotComplex(e,"argMin");var n=[t];assertAxesAreInnerMostDims("argMin",n,e.rank);for(var r=computeOutAndReduceShapes(e.shape,n),o=r[0],a=r[1],i=zeros(o,"int32"),s=sizeFromShape(a),u=i.dataSync(),l=e.dataSync(),c=0;c<u.length;++c){for(var p=c*s,d=l[p],h=0,f=0;f<s;++f){var m=l[p+f];m<d&&(d=m,h=f);}u[c]=h;}return i},e.prototype.argMax=function(e,t){this.assertNotComplex(e,"argMax");var n=[t];assertAxesAreInnerMostDims("argMax",n,e.rank);for(var r=computeOutAndReduceShapes(e.shape,n),o=r[0],a=r[1],i=zeros(o,"int32"),s=sizeFromShape(a),u=i.dataSync(),l=e.dataSync(),c=0;c<u.length;++c){for(var p=c*s,d=l[p],h=0,f=0;f<s;++f){var m=l[p+f];m>d&&(d=m,h=f);}u[c]=h;}return i},e.prototype.cumsum=function(e,t,n,r){if(this.assertNotComplex(e,"cumsum"),t!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+t);for(var o=upcastType(e.dtype,"int32"),a=zeros(e.shape,o),i=a.dataSync(),s=e.dataSync(),u=e.shape[e.rank-1],l=r?function(e,t){return e+u-t-1}:function(e,t){return e+t},c=0;c<s.length;c+=u)for(var p=0;p<u;p++){var d=l(c,p);if(0===p)i[d]=n?0:s[d];else{var h=l(c,p-1);i[d]=n?s[h]+i[h]:s[d]+i[h];}}return a},e.prototype.equal=function(e,t){return this.assertNotComplex([e,t],"equal"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e===t?1:0})},e.prototype.notEqual=function(e,t){return this.assertNotComplex([e,t],"notEqual"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e!==t?1:0})},e.prototype.less=function(e,t){return this.assertNotComplex([e,t],"less"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e<t?1:0})},e.prototype.lessEqual=function(e,t){return this.assertNotComplex([e,t],"lessEqual"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e<=t?1:0})},e.prototype.greater=function(e,t){return this.assertNotComplex([e,t],"greater"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e>t?1:0})},e.prototype.greaterEqual=function(e,t){return this.assertNotComplex([e,t],"greaterEqual"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e>=t?1:0})},e.prototype.logicalNot=function(e){this.assertNotComplex(e,"logicalNot");for(var t=e.dataSync(),n=new Int32Array(t.length),r=0;r<t.length;++r)n[r]=t[r]?0:1;return Tensor.make(e.shape,{values:n},"bool")},e.prototype.logicalAnd=function(e,t){return this.assertNotComplex([e,t],"logicalAnd"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e&&t})},e.prototype.logicalOr=function(e,t){return this.assertNotComplex([e,t],"logicalOr"),this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e||t})},e.prototype.select=function(e,t,n){this.assertNotComplex([e,t,n],"select");for(var r=e.dataSync(),o=t.dataSync(),a=n.dataSync(),i=zeros(t.shape,upcastType(t.dtype,n.dtype)),s=i.dataSync(),u=0,l=0===e.rank||e.rank>1||1===t.rank?1:t.shape[1],c=0;c<r.length;c++)for(var p=0;p<l;p++)1===r[c]?s[u++]=o[c]:s[u++]=a[c];return i},e.prototype.where=function(e){this.assertNotComplex([e],"where");var t=e.dataSync();return whereImpl(e.shape,t)},e.prototype.topk=function(e,t,n){return this.assertNotComplex(e,"topk"),topkImpl(e.dataSync(),e.shape,e.dtype,t,n)},e.prototype.min=function(e,t){this.assertNotComplex(e,"min"),assertAxesAreInnerMostDims("min",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=n[1],a=zeros(r,e.dtype),i=sizeFromShape(o),s=a.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,p=u[c],d=0;d<i;++d){var h=u[c+d];h<p&&(p=h);}s[l]=p;}return a},e.prototype.minimum=function(e,t){return this.assertNotComplex([e,t],"minimum"),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.min(e,t)})},e.prototype.mod=function(e,t){return this.assertNotComplex([e,t],"mod"),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){var n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})},e.prototype.max=function(e,t){this.assertNotComplex(e,"max"),assertAxesAreInnerMostDims("max",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=n[1],a=zeros(r,e.dtype),i=sizeFromShape(o),s=a.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,p=u[c],d=0;d<i;++d){var h=u[c+d];h>p&&(p=h);}s[l]=p;}return a},e.prototype.maximum=function(e,t){return this.assertNotComplex([e,t],"maximum"),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.max(e,t)})},e.prototype.all=function(e,t){this.assertNotComplex(e,"all"),assertAxesAreInnerMostDims("all",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=n[1],a=zeros(r,e.dtype),i=sizeFromShape(o),s=a.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,p=u[c],d=0;d<i;++d){var h=u[c+d];p=p&&h;}s[l]=p;}return a},e.prototype.any=function(e,t){this.assertNotComplex(e,"any"),assertAxesAreInnerMostDims("any",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],o=n[1],a=zeros(r,e.dtype),i=sizeFromShape(o),s=a.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,p=u[c],d=0;d<i;++d){var h=u[c+d];p=p||h;}s[l]=p;}return a},e.prototype.squaredDifference=function(e,t){return this.assertNotComplex([e,t],"squaredDifference"),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){var n=e-t;return n*n})},e.prototype.ceil=function(e){this.assertNotComplex(e,"ceil");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.ceil(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.floor=function(e){this.assertNotComplex(e,"floor");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.floor(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.sign=function(e){this.assertNotComplex(e,"x");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)t[r]<0?n[r]=-1:t[r]>0?n[r]=1:n[r]=0;return Tensor.make(e.shape,{values:n})},e.prototype.round=function(e){this.assertNotComplex(e,"round");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var o=Math.floor(t[r]);t[r]-o<.5?n[r]=Math.floor(t[r]):t[r]-o>.5?n[r]=Math.ceil(t[r]):n[r]=o%2==0?o:o+1;}return Tensor.make(e.shape,{values:n})},e.prototype.exp=function(e){this.assertNotComplex(e,"exp");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.exp(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.expm1=function(e){this.assertNotComplex(e,"expm1");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.expm1(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.log=function(e){this.assertNotComplex(e,"log");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var o=t[r];n[r]=Math.log(o);}return Tensor.make(e.shape,{values:n})},e.prototype.log1p=function(e){this.assertNotComplex(e,"log1p");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var o=t[r];n[r]=Math.log1p(o);}return Tensor.make(e.shape,{values:n})},e.prototype.sqrt=function(e){this.assertNotComplex(e,"sqrt");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var o=t[r];n[r]=Math.sqrt(o);}return Tensor.make(e.shape,{values:n})},e.prototype.rsqrt=function(e){this.assertNotComplex(e,"rsqrt");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var o=t[r];n[r]=1/Math.sqrt(o);}return Tensor.make(e.shape,{values:n})},e.prototype.square=function(e){this.assertNotComplex(e,"square");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var o=t[r];n[r]=o*o;}return Tensor.make(e.shape,{values:n})},e.prototype.reciprocal=function(e){this.assertNotComplex(e,"reciprocal");for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=1/t[r];return Tensor.make(e.shape,{values:n})},e.prototype.relu=function(e){this.assertNotComplex(e,"relu");for(var t=zeros(e.shape,e.dtype),n=t.dataSync(),r=e.dataSync(),o=0;o<r.length;++o)n[o]=Math.max(0,r[o]);return t},e.prototype.elu=function(e){this.assertNotComplex(e,"elu");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r){var o=n[r];t[r]=o>=0?o:Math.exp(o)-1;}return Tensor.make(e.shape,{values:t})},e.prototype.eluDer=function(e,t){this.assertNotComplex([e,t],"eluDer");for(var n=new Float32Array(t.size),r=t.dataSync(),o=e.dataSync(),a=0;a<r.length;++a){var i=r[a];n[a]=i>=1?o[a]:o[a]*(i+1);}return Tensor.make(t.shape,{values:n})},e.prototype.selu=function(e){this.assertNotComplex(e,"selu");for(var t=SELU_SCALEALPHA,n=SELU_SCALE,r=new Float32Array(e.size),o=e.dataSync(),a=0;a<o.length;++a){var i=o[a];r[a]=i>=0?n*i:t*(Math.exp(i)-1);}return Tensor.make(e.shape,{values:r})},e.prototype.clip=function(e,t,n){this.assertNotComplex(e,"clip");for(var r=new Float32Array(e.size),o=e.dataSync(),a=0;a<o.length;++a){var i=o[a];r[a]=i>n?n:i<t?t:i;}return Tensor.make(e.shape,{values:r})},e.prototype.abs=function(e){this.assertNotComplex(e,"abs");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.abs(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.int=function(e){this.assertNotComplex(e,"int");for(var t=new Int32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=n[r];return Tensor.make(e.shape,{values:t},"int32")},e.prototype.sigmoid=function(e){this.assertNotComplex(e,"sigmoid");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=1/(1+Math.exp(-n[r]));return Tensor.make(e.shape,{values:t})},e.prototype.softplus=function(e){this.assertNotComplex(e,"softplus");for(var t=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(e.size),r=e.dataSync(),o=0;o<r.length;++o){var a=r[o]>-t,i=r[o]<t,s=Math.exp(r[o]),u=void 0;u=i?s:a?r[o]:Math.log(1+s),n[o]=u;}return Tensor.make(e.shape,{values:n})},e.prototype.sin=function(e){this.assertNotComplex(e,"sin");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.sin(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.cos=function(e){this.assertNotComplex(e,"cos");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.cos(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.tan=function(e){this.assertNotComplex(e,"tan");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.tan(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.asin=function(e){this.assertNotComplex(e,"asin");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.asin(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.acos=function(e){this.assertNotComplex(e,"acos");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.acos(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.atan=function(e){this.assertNotComplex(e,"atan");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.atan(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.atan2=function(e,t){return this.assertNotComplex([e,t],"atan2"),this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.atan2(e,t)})},e.prototype.sinh=function(e){this.assertNotComplex(e,"sinh");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.sinh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.cosh=function(e){this.assertNotComplex(e,"cosh");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.cosh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.tanh=function(e){this.assertNotComplex(e,"tanh");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=tanh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.asinh=function(e){this.assertNotComplex(e,"asinh");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.asinh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.acosh=function(e){this.assertNotComplex(e,"acosh");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.acosh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.atanh=function(e){this.assertNotComplex(e,"atanh");for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.atanh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.erf=function(e){this.assertNotComplex(e,"erf");for(var t=new Float32Array(e.size),n=e.dataSync(),r=ERF_P,o=ERF_A1,a=ERF_A2,i=ERF_A3,s=ERF_A4,u=ERF_A5,l=0;l<n.length;++l){var c=n[l],p=1/(1+r*c);t[l]=1-((((u*p+s)*p+i)*p+a)*p+o)*p*Math.exp(-c*c);}return Tensor.make(e.shape,{values:t})},e.prototype.step=function(e,t){void 0===t&&(t=0),this.assertNotComplex(e,"step");for(var n=new Float32Array(e.size),r=e.dataSync(),o=0;o<r.length;++o){var a=r[o];isNaN(a)?n[o]=NaN:n[o]=a>0?1:t;}return Tensor.make(e.shape,{values:n})},e.prototype.conv2d=function(e,t,n){this.assertNotComplex([e,t],"conv2d");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,l=buffer(n.outShape,e.dtype),c=e.dataSync(),p=t.dataSync(),d=l.values,h=0;h<n.batchSize;++h)for(var f=h*e.strides[0],m=h*l.strides[0],g=0;g<n.outHeight;++g)for(var v=m+g*l.strides[1],y=g*n.strideHeight-s,x=0;x<r;x++){var T=y+x*a;if(!(T<0||T>=n.inHeight))for(var b=x*t.strides[0],S=f+T*e.strides[1],E=0;E<n.outWidth;++E)for(var w=v+E*n.outChannels,A=E*n.strideWidth-u,C=0;C<o;C++){var _=A+C*i;if(!(_<0||_>=n.inWidth))for(var R=b+C*t.strides[1],N=S+_*n.inChannels,k=R,I=0;I<n.inChannels;++I){for(var D=c[N+I],M=0;M<n.outChannels;++M)d[w+M]+=D*p[k+M];k+=n.outChannels;}}}return l.toTensor()},e.prototype.conv2dDerInput=function(e,t,n){this.assertNotComplex([e,t],"conv2dDerInput");for(var r=buffer(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],l=e.dataSync(),c=e.strides,p=c[0],d=c[1],h=c[2],f=t.dataSync(),m=t.strides,g=m[0],v=m[1],y=m[2],x=n.batchSize,T=n.filterHeight,b=n.filterWidth,S=n.inChannels,E=n.inHeight,w=n.inWidth,A=n.outChannels,C=n.outHeight,_=n.outWidth,R=n.strideHeight,N=n.strideWidth,k=T-1-n.padInfo.top,I=b-1-n.padInfo.left,D=0;D<x;++D)for(var M=0;M<S;++M)for(var O=0;O<E;++O)for(var P=O-k,F=Math.max(0,Math.ceil(P/R)),L=Math.min(C,(T+P)/R),B=0;B<w;++B){for(var U=B-I,z=Math.max(0,Math.ceil(U/N)),V=Math.min(_,(b+U)/N),G=0,H=F;H<L;++H)for(var W=H*R-P,q=z;q<V;++q)for(var $=p*D+d*H+h*q,X=g*(T-1-W)+v*(b-1-(q*N-U))+y*M,K=0;K<A;++K){G+=l[$+K]*f[X+K];}o[i*D+s*O+u*B+M]=G;}return r.toTensor()},e.prototype.conv2dDerFilter=function(e,t,n){this.assertNotComplex([e,t],"conv2dDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=buffer(n.filterShape,"float32"),u=n.padInfo.left,l=n.padInfo.top,c=0;c<a;++c)for(var p=Math.max(0,Math.ceil((l-c)/r)),d=Math.min(n.outHeight,(n.inHeight+l-c)/r),h=0;h<i;++h)for(var f=Math.max(0,Math.ceil((u-h)/o)),m=Math.min(n.outWidth,(n.inWidth+u-h)/o),g=0;g<n.inChannels;++g)for(var v=0;v<n.outChannels;++v){for(var y=0,x=0;x<n.batchSize;++x)for(var T=p;T<d;++T)for(var b=c+T*r-l,S=f;S<m;++S){var E=h+S*o-u;y+=e.get(x,b,E,g)*t.get(x,T,S,v);}s.set(y,c,h,g,v);}return s.toTensor()},e.prototype.depthwiseConv2D=function(e,t,n){this.assertNotComplex([e,t],"depthwiseConv2D");for(var r=n.filterHeight,o=n.filterWidth,a=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,l=n.outChannels/n.inChannels,c=buffer(n.outShape,e.dtype),p=e.dataSync(),d=t.dataSync(),h=c.values,f=0;f<n.batchSize;++f)for(var m=f*e.strides[0],g=f*c.strides[0],v=0;v<n.outHeight;++v)for(var y=g+v*c.strides[1],x=v*n.strideHeight-s,T=0;T<r;++T){var b=x+T*a;if(!(b<0||b>=n.inHeight))for(var S=T*t.strides[0],E=m+b*e.strides[1],w=0;w<n.outWidth;++w)for(var A=y+w*c.strides[2],C=w*n.strideWidth-u,_=0;_<o;++_){var R=C+_*i;if(!(R<0||R>=n.inWidth))for(var N=S+_*t.strides[1],k=E+R*n.inChannels,I=A,D=N,M=0;M<n.inChannels;++M){for(var O=p[k+M],P=0;P<l;++P)h[I+P]+=O*d[D+P];I+=l,D+=l;}}}return c.toTensor()},e.prototype.depthwiseConv2DDerInput=function(e,t,n){this.assertNotComplex([e,t],"depthwiseConv2DDerInput");for(var r=buffer(n.inShape,"float32"),o=r.values,a=r.strides,i=a[0],s=a[1],u=a[2],l=e.dataSync(),c=e.strides,p=c[0],d=c[1],h=c[2],f=t.dataSync(),m=t.strides,g=m[0],v=m[1],y=m[2],x=n.batchSize,T=n.filterHeight,b=n.filterWidth,S=n.inChannels,E=n.inHeight,w=n.inWidth,A=n.outChannels,C=n.outHeight,_=n.outWidth,R=n.strideHeight,N=n.strideWidth,k=T-1-n.padInfo.top,I=b-1-n.padInfo.left,D=A/S,M=0;M<x;++M)for(var O=0;O<S;++O)for(var P=0;P<E;++P)for(var F=P-k,L=Math.max(0,Math.ceil(F/R)),B=Math.min(C,(T+F)/R),U=0;U<w;++U){for(var z=U-I,V=Math.max(0,Math.ceil(z/N)),G=Math.min(_,(b+z)/N),H=0,W=L;W<B;++W)for(var q=W*R-F,$=V;$<G;++$)for(var X=p*M+d*W+h*$,K=g*(T-1-q)+v*(b-1-($*N-z))+y*O,j=0;j<D;++j){H+=l[X+(O*D+j)]*f[K+j];}o[i*M+s*P+u*U+O]=H;}return r.toTensor()},e.prototype.depthwiseConv2DDerFilter=function(e,t,n){this.assertNotComplex([e,t],"depthwiseConv2DDerFilter");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=buffer(n.filterShape,"float32"),u=n.padInfo.left,l=n.padInfo.top,c=n.outChannels/n.inChannels,p=0;p<a;++p)for(var d=Math.max(0,Math.ceil((l-p)/r)),h=Math.min(n.outHeight,(n.inHeight+l-p)/r),f=0;f<i;++f)for(var m=Math.max(0,Math.ceil((u-f)/o)),g=Math.min(n.outWidth,(n.inWidth+u-f)/o),v=0;v<n.outChannels;++v){for(var y=Math.trunc(v/c),x=v%c,T=0,b=0;b<n.batchSize;++b)for(var S=d;S<h;++S)for(var E=p+S*r-l,w=m;w<g;++w){var A=f+w*o-u;T+=e.get(b,E,A,y)*t.get(b,S,w,v);}s.set(T,p,f,y,x);}return s.toTensor()},e.prototype.tile=function(e,t){this.assertNotComplex(e,"tile");for(var n=new Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];var o=buffer(n,e.dtype),a=e.buffer();for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),s=new Array(e.rank),u=0;u<s.length;u++)s[u]=i[u]%e.shape[u];var l=a.locToIndex(s);o.values[r]=a.values[l];}return o.toTensor()},e.prototype.pad=function(e,t,n){this.assertNotComplex(e,"pad");var r=t.map(function(t,n){return t[0]+e.shape[n]+t[1]}),o=t.map(function(e){return e[0]}),a=e.buffer(),i=buffer(r,e.dtype);0!==n&&i.values.fill(n);for(var s=0;s<e.size;s++){var u=a.indexToLoc(s),l=u.map(function(e,t){return e+o[t]});i.set.apply(i,[e.get.apply(e,u)].concat(l));}return i.toTensor()},e.prototype.transpose=function(e,t){this.assertNotComplex(e,"transpose");for(var n=new Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[t[r]];var o=e.dataSync(),a=buffer(n,e.dtype),i=e.buffer();for(r=0;r<e.size;++r){for(var s=i.indexToLoc(r),u=new Array(s.length),l=0;l<u.length;l++)u[l]=s[t[l]];var c=a.locToIndex(u);a.values[c]=o[r];}return a.toTensor()},e.prototype.gather=function(e,t,n){this.assertNotComplex([e,t],"gather");var r=e.shape.slice(),o=t.dataSync();r[n]=o.length;for(var a=buffer(r,e.dtype),i=e.buffer(),s=0;s<a.size;++s){var u=a.indexToLoc(s),l=u.slice();l[n]=o[u[n]];var c=i.locToIndex(l);a.values[s]=i.values[c];}return a.toTensor()},e.prototype.batchToSpaceND=function(e,t,n){this.assertNotComplex([e],"batchToSpaceND");var r=t.reduce(function(e,t){return e*t}),o=getReshaped(e.shape,t,r),a=getPermuted(o.length,t.length),i=getReshapedPermuted(e.shape,t,r),s=getSliceBeginCoords(n,t.length),u=getSliceSize(i,n,t.length);return e.reshape(o).transpose(a).reshape(i).slice(s,u)},e.prototype.spaceToBatchND=function(e,t,n){this.assertNotComplex([e],"spaceToBatchND");var r=t.reduce(function(e,t){return e*t}),o=[[0,0]];o.push.apply(o,n);for(var a=1+t.length;a<e.shape.length;++a)o.push([0,0]);var i=e.pad(o),s=getReshaped(i.shape,t,r,!1),u=getPermuted(s.length,t.length,!1),l=getReshapedPermuted(i.shape,t,r,!1);return i.reshape(s).transpose(u).reshape(l)},e.prototype.pool=function(e,t,n){this.assertNotComplex(e,"pool");for(var r=t.strideHeight,o=t.strideWidth,a=t.filterHeight,i=t.filterWidth,s=buffer(t.outShape,"float32"),u=t.padInfo.top,l=t.padInfo.left,c="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=0;p<t.batchSize;++p)for(var d=0;d<t.inChannels;++d)for(var h=0;h<t.outHeight;++h)for(var f=h*r-u,m=Math.max(0,f),g=Math.min(t.inHeight,a+f),v=0;v<t.outWidth;++v){for(var y=v*o-l,x=Math.max(0,y),T=Math.min(t.inWidth,i+y),b=c,S=0,E=0,w=m;w<g;++w){for(var A=x;A<T;++A){var C=e.get(p,w,A,d);"max"===n&&C>b?b=C:"avg"===n&&(S+=C,E++);}if(isNaN(b))break}s.set("avg"===n?S/E:b,p,h,v,d);}return s.toTensor()},e.prototype.maxPool=function(e,t){return this.pool(e,t,"max")},e.prototype.maxPoolPositions=function(e,t){for(var n=buffer(t.outShape,"int32"),r=t.strideHeight,o=t.strideWidth,a=t.filterHeight,i=t.filterWidth,s=t.padInfo.top,u=t.padInfo.left,l=0;l<t.batchSize;++l)for(var c=0;c<t.inChannels;++c)for(var p=0;p<t.outHeight;++p)for(var d=p*r-s,h=Math.max(0,d),f=Math.min(t.inHeight,a+d),m=0;m<t.outWidth;++m){for(var g=m*o-u,v=Math.max(0,g),y=Math.min(t.inWidth,i+g),x=Number.NEGATIVE_INFINITY,T=-1,b=h;b<f;++b)for(var S=b-d,E=v;E<y;++E){var w=E-g,A=e.get(l,b,E,c);A>x&&(x=A,T=S*i+w);}n.set(T,l,p,m,c);}return n.toTensor()},e.prototype.maxPoolBackprop=function(e,t,n,r){this.assertNotComplex([t,n],"maxPoolBackprop");for(var o=this.maxPoolPositions(t,r),a=r.strideHeight,i=r.strideWidth,s=r.filterHeight,u=r.filterWidth,l=u-1-r.padInfo.left,c=s-1-r.padInfo.top,p=buffer(t.shape,"float32"),d=0;d<r.batchSize;++d)for(var h=0;h<r.inChannels;++h)for(var f=0;f<r.inHeight;++f)for(var m=0;m<r.inWidth;++m){for(var g=f-c,v=m-l,y=0,x=0;x<s;++x){var T=(g+x)/a;if(!(T<0||T>=r.outHeight||Math.floor(T)!==T))for(var b=0;b<u;++b){var S=(v+b)/i;if(!(S<0||S>=r.outWidth||Math.floor(S)!==S)){var E=s*u-1-o.get(d,T,S,h)===x*u+b?1:0;if(0!==E)y+=e.get(d,T,S,h)*E;}}}p.set(y,d,f,m,h);}return p.toTensor()},e.prototype.avgPoolBackprop=function(e,t,n){this.assertNotComplex([e,t],"avgPoolBackprop");for(var r=n.strideHeight,o=n.strideWidth,a=n.filterHeight,i=n.filterWidth,s=i-1-n.padInfo.left,u=a-1-n.padInfo.top,l=buffer(t.shape,"float32"),c=1/(a*i),p=0;p<n.batchSize;++p)for(var d=0;d<n.inChannels;++d)for(var h=0;h<n.inHeight;++h)for(var f=0;f<n.inWidth;++f){for(var m=h-u,g=f-s,v=0,y=0;y<a;++y){var x=(m+y)/r;if(!(x<0||x>=n.outHeight||Math.floor(x)!==x))for(var T=0;T<i;++T){var b=(g+T)/o;if(!(b<0||b>=n.outWidth||Math.floor(b)!==b))v+=e.get(p,x,b,d);}}l.set(v*c,p,h,f,d);}return l.toTensor()},e.prototype.cast=function(e,t){return castTensor(e,t,this)},e.prototype.reshape=function(e,t){return reshapeTensor(e,t)},e.prototype.avgPool=function(e,t){return this.assertNotComplex(e,"avgPool"),this.pool(e,t,"avg").toFloat()},e.prototype.resizeBilinear=function(e,t,n,r){this.assertNotComplex(e,"resizeBilinear");for(var o=e.shape,a=o[0],i=o[1],s=o[2],u=o[3],l=buffer([a,t,n,u],e.dtype),c=[r&&t>1?i-1:i,r&&n>1?s-1:s],p=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=0;d<a;d++)for(var h=0;h<t;h++)for(var f=0;f<n;f++)for(var m=0;m<u;m++){var g=c[0]*h/p[0],v=c[1]*f/p[1],y=Math.floor(g),x=Math.min(i-1,Math.ceil(g)),T=Math.floor(v),b=Math.min(s-1,Math.ceil(v)),S=e.get(d,y,T,m),E=e.get(d,x,T,m),w=v-T,A=S+(e.get(d,y,b,m)-S)*w,C=A+(E+(e.get(d,x,b,m)-E)*w-A)*(g-y);l.set(C,d,h,f,m);}return l.toTensor()},e.prototype.resizeBilinearBackprop=function(e,t,n){this.assertNotComplex([e,t],"resizeBilinearBackprop");for(var r=t.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=e.shape,l=u[1],c=u[2],p=buffer([o,a,i,s],t.dtype),d=[n&&l>1?a-1:a,n&&c>1?i-1:i],h=[n&&l>1?l-1:l,n&&c>1?c-1:c],f=d[0]/h[0],m=d[1]/h[1],g=0;g<o;g++)for(var v=0;v<l;v++)for(var y=v*f,x=Math.floor(y),T=Math.min(Math.ceil(y),a-1),b=y-x,S=1-b,E=0;E<c;E++)for(var w=E*m,A=Math.floor(w),C=Math.min(Math.ceil(w),i-1),_=w-A,R=1-_,N=0;N<s;N++){var k=e.get(g,v,E,N),I=p.get(g,x,A,N);I+=k*S*R,p.set(I,g,x,A,N);var D=p.get(g,x,C,N);D+=k*S*_,p.set(D,g,x,C,N);var M=p.get(g,T,A,N);M+=k*b*R,p.set(M,g,T,A,N);var O=p.get(g,T,C,N);O+=k*b*_,p.set(O,g,T,C,N);}return p.toTensor()},e.prototype.resizeNearestNeighbor=function(e,t,n,r){this.assertNotComplex(e,"resizeNearestNeighbor");for(var o=e.shape,a=o[0],i=o[1],s=o[2],u=o[3],l=buffer([a,t,n,u],e.dtype),c=[r&&t>1?i-1:i,r&&n>1?s-1:s],p=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=0;d<a;d++)for(var h=0;h<t;h++)for(var f=0;f<n;f++)for(var m=0;m<u;m++){var g=c[0]*h/p[0],v=c[1]*f/p[1],y=Math.min(i-1,r?Math.round(g):Math.floor(g)),x=Math.min(s-1,r?Math.round(v):Math.floor(v)),T=e.get(d,y,x,m);l.set(T,d,h,f,m);}return l.toTensor()},e.prototype.resizeNearestNeighborBackprop=function(e,t,n){this.assertNotComplex([e,t],"resizeNearestNeighborBackprop");for(var r=t.shape,o=r[0],a=r[1],i=r[2],s=r[3],u=e.shape,l=u[1],c=u[2],p=buffer([o,a,i,s],t.dtype),d=[n&&l>1?a-1:a,n&&c>1?i-1:i],h=[n&&l>1?l-1:l,n&&c>1?c-1:c],f=1/(d[0]/h[0]),m=1/(d[1]/h[1]),g=2*Math.ceil(f)+2,v=2*Math.ceil(m)+2,y=0;y<o;y++)for(var x=0;x<a;x++)for(var T=0;T<i;T++)for(var b=Math.floor(x*f),S=Math.floor(b-g/2),E=Math.floor(T*m),w=Math.floor(E-v/2),A=0;A<s;A++){for(var C=0,_=0;_<g;_++){var R=_+S;if(!(R<0||R>=l))for(var N=0;N<v;N++){var k=N+w;if(!(k<0||k>=c)){var I=d[0]*(R/h[0]),D=d[1]*(k/h[1]),M=Math.min(a-1,n?Math.round(I):Math.floor(I)),O=Math.min(i-1,n?Math.round(D):Math.floor(D));x===M&&T===O&&(C+=e.get(y,R,k,A));}}}p.set(C,y,x,T,A);}return p.toTensor()},e.prototype.batchNormalization=function(e,t,n,r,o,a){this.assertNotComplex([e,t,n,o,a],"batchNormalization");for(var i=e.dataSync(),s=t.dataSync(),u=n.dataSync(),l=o?o.dataSync():new Float32Array([1]),c=a?a.dataSync():new Float32Array([0]),p=new Float32Array(i.length),d=c.length,h=l.length,f=u.length,m=s.length,g=0,v=0,y=0,x=0,T=0;T<i.length;++T)p[T]=c[g++]+(i[T]-s[v++])*l[y++]/Math.sqrt(u[x++]+r),g>=d&&(g=0),v>=m&&(v=0),y>=h&&(y=0),x>=f&&(x=0);return tensor4d(p,e.shape)},e.prototype.localResponseNormalization4D=function(e,t,n,r,o){this.assertNotComplex(e,"localResponseNormalization4D");var a=e.shape[3],i=a-1,s=e.dataSync(),u=sizeFromShape(e.shape),l=new Float32Array(u);function c(e){for(var n=e%a,r=e-n+Math.max(0,n-t),o=e-n+Math.min(n+t,i),u=0;r<=o;r++){var l=s[r];u+=l*l;}return u}for(var p=0;p<u;p++){var d=c(p),h=s[p]*Math.pow(n+r*d,-o);l[p]=h;}return tensor4d(l,e.shape)},e.prototype.LRNGrad=function(e,t,n,r,o,a,i){this.assertNotComplex(e,"LRNGrad");for(var s=e.shape[3],u=e.dataSync(),l=t.dataSync(),c=n.dataSync(),p=new Float32Array(sizeFromShape(e.shape)),d=sizeFromShape(e.shape),h=0;h<d;h++){for(var f=h%s,m=h-f+Math.max(0,f-r),g=h-f+Math.min(s,f+r+1),v=0,y=m;y<g;y++)v+=Math.pow(l[y],2);v=a*v+o;for(y=m;y<g;y++){var x=-2*a*i*l[y]*c[h]/v;h===y&&(x+=Math.pow(v,-i)),x*=u[h],p[y]+=x;}}return tensor4d(p,e.shape)},e.prototype.multinomial=function(e,t,n,r){this.assertNotComplex(e,"multinomial");for(var o=t?e:softmax(e),a=o.shape[0],i=o.shape[1],s=zeros([a,n],"int32"),u=s.dataSync(),l=o.dataSync(),c=0;c<a;++c){var p=c*i,d=new Float32Array(i-1);d[0]=l[p];for(var h=1;h<d.length;++h)d[h]=d[h-1]+l[p+h];for(var f=seedrandom_1(r.toString()),m=c*n,g=0;g<n;++g){var v=f();u[m+g]=d.length;for(var y=0;y<d.length;y++)if(v<d[y]){u[m+g]=y;break}}}return s},e.prototype.oneHot=function(e,t,n,r){this.assertNotComplex(e,"oneHot");var o=new Float32Array(e.size*t);o.fill(r);for(var a=0;a<e.size;++a)e.get(a)>=0&&e.get(a)<t&&(o[a*t+e.get(a)]=n);return tensor2d(o,[e.size,t],"int32")},e.prototype.nonMaxSuppression=function(e,t,n,r,o){return this.assertNotComplex(e,"nonMaxSuppression"),nonMaxSuppressionImpl(e.dataSync(),t.dataSync(),n,r,o)},e.prototype.depthToSpace=function(e,t,n){assert("NHWC"===n,"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+n),assert(t>1,"blockSize should be > 1 for depthToSpace, but was: "+t);for(var r=e.shape[0],o=e.shape[1],a=e.shape[2],i=e.shape[3],s=o*t,u=a*t,l=i/(t*t),c=e.dataSync(),p=new Float32Array(r*s*u*l),d=0,h=0;h<r;++h)for(var f=0;f<s;++f)for(var m=Math.floor(f/t),g=f%t,v=0;v<u;++v)for(var y=Math.floor(v/t),x=(g*t+v%t)*l,T=0;T<l;++T){var b=T+x+i*(y+a*(m+o*h));p[d++]=c[b];}return tensor4d(p,[r,s,u,l])},e.prototype.broadcastedBinaryOp=function(e,t,n,r){var o=assertAndGetBroadcastShape(e.shape,t.shape),a=buffer(o,n),i=e.dataSync(),s=t.dataSync(),u=getBroadcastDims(e.shape,o),l=getBroadcastDims(t.shape,o),c=a.values;if(u.length+l.length===0)for(var p=0;p<c.length;++p)c[p]=r(i[p%i.length],s[p%s.length]);else{var d=e.buffer(),h=t.buffer(),f=function(n){var o=a.indexToLoc(n),p=o.slice(-e.rank);u.forEach(function(e){return p[e]=0});var f=d.locToIndex(p),m=o.slice(-t.rank);l.forEach(function(e){return m[e]=0});var g=h.locToIndex(m);c[n]=r(i[f],s[g]);};for(p=0;p<c.length;++p)f(p);}return a.toTensor()},e.prototype.broadcastedBinaryComplexOp=function(e,t,n){var r=assertAndGetBroadcastShape(e.shape,t.shape),o=buffer(r,"float32"),a=buffer(r,"float32"),i=e.dataSync(),s=t.dataSync(),u=getBroadcastDims(e.shape,r),l=getBroadcastDims(t.shape,r),c=o.values,p=a.values;if(u.length+l.length===0)for(var d=0;d<c.length;d++){var h=d%i.length,f=d%s.length,m=n(i[2*h],i[2*h+1],s[2*f],s[2*f+1]);c[d]=m.real,p[d]=m.imag;}else{var g=this.data.get(e.dataId).complexTensors.real.buffer(),v=this.data.get(t.dataId).complexTensors.real.buffer(),y=function(r){var a=o.indexToLoc(r),d=a.slice(-e.rank);u.forEach(function(e){return d[e]=0});var h=g.locToIndex(d),f=a.slice(-t.rank);l.forEach(function(e){return f[e]=0});var m=v.locToIndex(f),y=n(i[2*h],i[2*h+1],s[2*m],s[2*m+1]);c[r]=y.real,p[r]=y.imag;};for(d=0;d<c.length;d++)y(d);}return this.complex(o.toTensor(),a.toTensor())},e.prototype.split=function(e,t,n){return split(e,t,n)},e.prototype.dispose=function(){},e.prototype.floatPrecision=function(){return 32},e.prototype.cropAndResize=function(e,t,n,r,o,a){for(var i=e.shape,s=i[0],u=i[1],l=i[2],c=i[3],p=t.shape[0],d=r[0],h=r[1],f=buffer([p,d,h,c]),m=t.dataSync(),g=n.dataSync(),v=e.dataSync(),y=e.strides,x=f.strides,T=0;T<p;T++){var b=4*T,S=m[b],E=m[b+1],w=m[b+2],A=m[b+3],C=g[T];if(!(C>=s))for(var _=d>1?(w-S)*(u-1)/(d-1):0,R=h>1?(A-E)*(l-1)/(h-1):0,N=0;N<d;N++){var k=d>1?S*(u-1)+N*_:.5*(S+w)*(u-1);if(k<0||k>u-1)for(var I=0;I<h;I++)for(var D=0;D<c;D++){var M=D+I*x[2]+N*x[1]+T*x[0];f.values[M]=a;}else if("bilinear"===o){var O=Math.floor(k),P=Math.ceil(k),F=k-O;for(I=0;I<h;I++){if((q=h>1?E*(l-1)+I*R:.5*(E+A)*(l-1))<0||q>l-1)for(D=0;D<c;D++){M=D+I*x[2]+N*x[1]+T*x[0];f.values[M]=a;}else{var L=Math.floor(q),B=Math.ceil(q),U=q-L;for(D=0;D<c;D++){var z=v[M=D+L*y[2]+O*y[1]+C*y[0]],V=v[M=D+B*y[2]+O*y[1]+C*y[0]],G=v[M=D+L*y[2]+P*y[1]+C*y[0]],H=z+(V-z)*U,W=G+(v[M=D+B*y[2]+P*y[1]+C*y[0]]-G)*U;M=D+I*x[2]+N*x[1]+T*x[0],f.values[M]=H+(W-H)*F;}}}}else for(I=0;I<h;++I){var q;if((q=h>1?E*(l-1)+I*R:.5*(E+A)*(l-1))<0||q>l-1)for(D=0;D<c;D++){M=D+I*x[2]+N*x[1]+T*x[0];f.values[M]=a;}else{var $=Math.round(q),X=Math.round(k);for(D=0;D<c;D++){var K=D+$*y[2]+X*y[1]+C*y[0],j=D+I*x[2]+N*x[1]+T*x[0];f.values[j]=v[K];}}}}}return f.toTensor()},e}();ENV.registerBackend("cpu",function(){return new MathBackendCPU},1,setTensorTracker);var delayCallback="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setImmediate;function nextFrame(){return new Promise(function(e){return delayCallback(function(){return e()})})}var DTYPE_VALUE_SIZE_MAP={float32:4,int32:4,uint16:2,uint8:1,bool:1};function encodeWeights(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:for(r in t=[],n=[],e){if("float32"!==(o=e[r]).dtype&&"int32"!==o.dtype&&"bool"!==o.dtype)throw new Error("Unsupported dtype in weight '"+r+"': "+o.dtype);t.push({name:r,shape:o.shape,dtype:o.dtype}),n.push(o.data());}return [4,Promise.all(n)];case 1:return [2,{data:concatenateTypedArrays(a.sent()),specs:t}]}})})}function decodeWeights(e,t){for(var n={},r=0,o=function(t){var o=t.name,a=t.dtype,i=t.shape,s=sizeFromShape(i),u=void 0;if("quantization"in t){var l=t.quantization;if("uint8"!==l.dtype&&"uint16"!==l.dtype)throw new Error("Weight "+t.name+" has unknown quantization dtype "+l.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var c=DTYPE_VALUE_SIZE_MAP[l.dtype],p=e.slice(r,r+s*c),d="uint8"===l.dtype?new Uint8Array(p):new Uint16Array(p);if("float32"===a)u=Float32Array.from(d,function(e){return e*l.scale+l.min});else{if("int32"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=Int32Array.from(d,function(e){return Math.round(e*l.scale+l.min)});}r+=s*c;}else{var h=DTYPE_VALUE_SIZE_MAP[a];p=e.slice(r,r+s*h);if("float32"===a)u=new Float32Array(p);else if("int32"===a)u=new Int32Array(p);else{if("bool"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);u=new Uint8Array(p);}r+=s*h;}var f=void 0;if("float32"===a)f=tensor(u,i,"float32");else if("int32"===a)f=tensor(u,i,"int32");else{if("bool"!==a)throw new Error("Unsupported dtype in weight '"+o+"': "+a);f=tensor(u,i,"bool");}n[o]=f;},a=0,i=t;a<i.length;a++){o(i[a]);}return n}function concatenateTypedArrays(e){if(null===e)throw new Error("Invalid input value: "+JSON.stringify(e));var t=0,n=[];e.forEach(function(e){if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+e.constructor.name)});var r=new Uint8Array(t),o=0;return n.forEach(function(e){r.set(new Uint8Array(e.buffer),o),o+=e.byteLength;}),r.buffer}var useNodeBuffer="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function stringByteLength(e){return useNodeBuffer?Buffer.byteLength(e):new Blob([e]).size}function arrayBufferToBase64String(e){return useNodeBuffer?Buffer.from(e).toString("base64"):btoa(String.fromCharCode.apply(null,new Uint8Array(e)))}function base64StringToArrayBuffer(e){if(useNodeBuffer){var t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}for(var n=atob(e),r=new Uint8Array(n.length),o=0;o<n.length;++o)r.set([n.charCodeAt(o)],o);return r.buffer}function concatenateArrayBuffers(e){var t=0;e.forEach(function(e){t+=e.byteLength;});var n=new Uint8Array(t),r=0;return e.forEach(function(e){n.set(new Uint8Array(e),r),r+=e.byteLength;}),n.buffer}function basename(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);var t=e.split("/");return t[t.length-1]}function getModelArtifactsInfoForJSON(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return {dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:stringByteLength(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:stringByteLength(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}var IORouterRegistry=function(){function e(){this.saveRouters=[],this.loadRouters=[];}return e.getInstance=function(){return null==e.instance&&(e.instance=new e),e.instance},e.registerSaveRouter=function(t){e.getInstance().saveRouters.push(t);},e.registerLoadRouter=function(t){e.getInstance().loadRouters.push(t);},e.getSaveHandlers=function(t){return e.getHandlers(t,"save")},e.getLoadHandlers=function(t){return e.getHandlers(t,"load")},e.getHandlers=function(e,t){var n=[];return ("load"===t?this.getInstance().loadRouters:this.getInstance().saveRouters).forEach(function(t){var r=t(e);null!==r&&n.push(r);}),n},e}(),URL_SCHEME_SUFFIX="://",ModelStoreManagerRegistry=function(){function e(){this.managers={};}return e.getInstance=function(){return null==e.instance&&(e.instance=new e),e.instance},e.registerManager=function(t,n){assert(null!=t,"scheme must not be undefined or null."),t.endsWith(URL_SCHEME_SUFFIX)&&(t=t.slice(0,t.indexOf(URL_SCHEME_SUFFIX))),assert(t.length>0,"scheme must not be an empty string.");var r=e.getInstance();assert(null==r.managers[t],"A model store manager is already registered for scheme '"+t+"'."),r.managers[t]=n;},e.getManager=function(e){var t=this.getInstance().managers[e];if(null==t)throw new Error("Cannot find model manager for scheme '"+e+"'");return t},e.getSchemes=function(){return Object.keys(this.getInstance().managers)},e}();function parseURL(e){if(-1===e.indexOf(URL_SCHEME_SUFFIX))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+ModelStoreManagerRegistry.getSchemes().join(","));return {scheme:e.split(URL_SCHEME_SUFFIX)[0],path:e.split(URL_SCHEME_SUFFIX)[1]}}function cloneModelInternal(e,t,n){return void 0===n&&(n=!1),__awaiter(this,void 0,void 0,function(){var r,o,a,i,s,u,l,c,p;return __generator(this,function(d){switch(d.label){case 0:return assert(e!==t,"Old path and new path are the same: '"+e+"'"),assert((r=IORouterRegistry.getLoadHandlers(e)).length>0,"Copying failed because no load handler is found for source URL "+e+"."),assert(r.length<2,"Copying failed because more than one ("+r.length+") load handlers for source URL "+e+"."),o=r[0],assert((a=IORouterRegistry.getSaveHandlers(t)).length>0,"Copying failed because no save handler is found for destination URL "+t+"."),assert(a.length<2,"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."),i=a[0],s=parseURL(e).scheme,u=parseURL(e).path,l=s===parseURL(e).scheme,[4,o.load()];case 1:return c=d.sent(),n&&l?[4,ModelStoreManagerRegistry.getManager(s).removeModel(u)]:[3,3];case 2:d.sent(),d.label=3;case 3:return [4,i.save(c)];case 4:return p=d.sent(),!n||l?[3,6]:[4,ModelStoreManagerRegistry.getManager(s).removeModel(u)];case 5:d.sent(),d.label=6;case 6:return [2,p.modelArtifactsInfo]}})})}function listModels(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:e=ModelStoreManagerRegistry.getSchemes(),t={},n=0,r=e,s.label=1;case 1:return n<r.length?(o=r[n],[4,ModelStoreManagerRegistry.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+URL_SCHEME_SUFFIX+i]=a[i];s.label=3;case 3:return n++,[3,1];case 4:return [2,t]}})})}function removeModel(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return t=parseURL(e),[4,ModelStoreManagerRegistry.getManager(t.scheme).removeModel(t.path)];case 1:return [2,n.sent()]}})})}function copyModel(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return [4,cloneModelInternal(e,t,!1)];case 1:return [2,n.sent()]}})})}function moveModel(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return [4,cloneModelInternal(e,t,!0)];case 1:return [2,n.sent()]}})})}var DATABASE_NAME="tensorflowjs",DATABASE_VERSION=1,MODEL_STORE_NAME="models_store",INFO_STORE_NAME="model_info_store";function getIndexedDBFactory(){if(!ENV.get("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var e=window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function setUpDatabase(e){var t=e.result;t.createObjectStore(MODEL_STORE_NAME,{keyPath:"modelPath"}),t.createObjectStore(INFO_STORE_NAME,{keyPath:"modelPath"});}var BrowserIndexedDB=function(){function e(e){if(this.indexedDB=getIndexedDBFactory(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e;}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return [2,this.databaseAction(this.modelPath,e)]})})},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return [2,this.databaseAction(this.modelPath)]})})},e.prototype.databaseAction=function(e,t){var n=this;return new Promise(function(e,r){var o=n.indexedDB.open(DATABASE_NAME,DATABASE_VERSION);o.onupgradeneeded=function(){return setUpDatabase(o)},o.onsuccess=function(){var a=o.result;if(null==t){var i=a.transaction(MODEL_STORE_NAME,"readonly"),s=i.objectStore(MODEL_STORE_NAME).get(n.modelPath);s.onsuccess=function(){if(null==s.result)return a.close(),r(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));e(s.result.modelArtifacts);},s.onerror=function(e){return a.close(),r(s.error)},i.oncomplete=function(){return a.close()};}else{var u,l=getModelArtifactsInfoForJSON(t),c=a.transaction(INFO_STORE_NAME,"readwrite"),p=c.objectStore(INFO_STORE_NAME),d=p.put({modelPath:n.modelPath,modelArtifactsInfo:l});d.onsuccess=function(){var o=(u=a.transaction(MODEL_STORE_NAME,"readwrite")).objectStore(MODEL_STORE_NAME).put({modelPath:n.modelPath,modelArtifacts:t,modelArtifactsInfo:l});o.onsuccess=function(){return e({modelArtifactsInfo:l})},o.onerror=function(e){var t=(p=c.objectStore(INFO_STORE_NAME)).delete(n.modelPath);t.onsuccess=function(){return a.close(),r(o.error)},t.onerror=function(e){return a.close(),r(o.error)};};},d.onerror=function(e){return a.close(),r(d.error)},c.oncomplete=function(){null==u?a.close():u.oncomplete=function(){return a.close()};};}},o.onerror=function(e){return r(o.error)};})},e.URL_SCHEME="indexeddb://",e}(),indexedDBRouter=function(e){return ENV.get("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(BrowserIndexedDB.URL_SCHEME)?browserIndexedDB(e.slice(BrowserIndexedDB.URL_SCHEME.length)):null};function browserIndexedDB(e){return new BrowserIndexedDB(e)}function maybeStripScheme(e){return e.startsWith(BrowserIndexedDB.URL_SCHEME)?e.slice(BrowserIndexedDB.URL_SCHEME.length):e}IORouterRegistry.registerSaveRouter(indexedDBRouter),IORouterRegistry.registerLoadRouter(indexedDBRouter);var BrowserIndexedDBManager=function(){function e(){this.indexedDB=getIndexedDBFactory();}return e.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return [2,new Promise(function(t,n){var r=e.indexedDB.open(DATABASE_NAME,DATABASE_VERSION);r.onupgradeneeded=function(){return setUpDatabase(r)},r.onsuccess=function(){var e=r.result,o=e.transaction(INFO_STORE_NAME,"readonly"),a=o.objectStore(INFO_STORE_NAME).getAll();a.onsuccess=function(){for(var e={},n=0,r=a.result;n<r.length;n++){var o=r[n];e[o.modelPath]=o.modelArtifactsInfo;}t(e);},a.onerror=function(t){return e.close(),n(a.error)},o.oncomplete=function(){return e.close()};},r.onerror=function(e){return n(r.error)};})]})})},e.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(n){return e=maybeStripScheme(e),[2,new Promise(function(n,r){var o=t.indexedDB.open(DATABASE_NAME,DATABASE_VERSION);o.onupgradeneeded=function(){return setUpDatabase(o)},o.onsuccess=function(){var t,a=o.result,i=a.transaction(INFO_STORE_NAME,"readwrite"),s=i.objectStore(INFO_STORE_NAME),u=s.get(e);u.onsuccess=function(){if(null==u.result)return a.close(),r(new Error("Cannot find model with path '"+e+"' in IndexedDB."));var o=s.delete(e),i=function(){var o=(t=a.transaction(MODEL_STORE_NAME,"readwrite")).objectStore(MODEL_STORE_NAME).delete(e);o.onsuccess=function(){return n(u.result.modelArtifactsInfo)},o.onerror=function(e){return r(u.error)};};o.onsuccess=i,o.onerror=function(e){return i(),a.close(),r(u.error)};},u.onerror=function(e){return a.close(),r(u.error)},i.oncomplete=function(){null==t?a.close():t.oncomplete=function(){return a.close()};};},o.onerror=function(e){return r(o.error)};})]})})},e}();if(ENV.get("IS_BROWSER"))try{ModelStoreManagerRegistry.registerManager(BrowserIndexedDB.URL_SCHEME,new BrowserIndexedDBManager);}catch(e){}var PATH_SEPARATOR="/",PATH_PREFIX="tensorflowjs_models",INFO_SUFFIX="info",MODEL_TOPOLOGY_SUFFIX="model_topology",WEIGHT_SPECS_SUFFIX="weight_specs",WEIGHT_DATA_SUFFIX="weight_data";function getModelKeys(e){return {info:[PATH_PREFIX,e,INFO_SUFFIX].join(PATH_SEPARATOR),topology:[PATH_PREFIX,e,MODEL_TOPOLOGY_SUFFIX].join(PATH_SEPARATOR),weightSpecs:[PATH_PREFIX,e,WEIGHT_SPECS_SUFFIX].join(PATH_SEPARATOR),weightData:[PATH_PREFIX,e,WEIGHT_DATA_SUFFIX].join(PATH_SEPARATOR)}}function getModelPathFromKey(e){var t=e.split(PATH_SEPARATOR);if(t.length<3)throw new Error("Invalid key format: "+e);return t.slice(1,t.length-1).join(PATH_SEPARATOR)}function maybeStripScheme$1(e){return e.startsWith(BrowserLocalStorage.URL_SCHEME)?e.slice(BrowserLocalStorage.URL_SCHEME.length):e}var BrowserLocalStorage=function(){function e(e){if(!ENV.get("IS_BROWSER")||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=getModelKeys(this.modelPath);}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=getModelArtifactsInfoForJSON(e);try{return this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,arrayBufferToBase64String(e.weightData)),[2,{modelArtifactsInfo:r}]}catch(e){for(o in this.keys)this.LS.removeItem(this.keys[o]);throw new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+r.modelTopologyBytes+", weightSpecsBytes="+r.weightSpecsBytes+", weightDataBytes="+r.weightDataBytes+".")}return [2]})})},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,o;return __generator(this,function(a){if(null==(e=JSON.parse(this.LS.getItem(this.keys.info))))throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},null==(n=JSON.parse(this.LS.getItem(this.keys.topology))))throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(t.modelTopology=n,null==(r=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(t.weightSpecs=r,null==(o=this.LS.getItem(this.keys.weightData)))throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return t.weightData=base64StringToArrayBuffer(o),[2,t]})})},e.URL_SCHEME="localstorage://",e}(),localStorageRouter=function(e){return ENV.get("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(BrowserLocalStorage.URL_SCHEME)?browserLocalStorage(e.slice(BrowserLocalStorage.URL_SCHEME.length)):null};function browserLocalStorage(e){return new BrowserLocalStorage(e)}IORouterRegistry.registerSaveRouter(localStorageRouter),IORouterRegistry.registerLoadRouter(localStorageRouter);var BrowserLocalStorageManager=function(){function e(){assert(ENV.get("IS_BROWSER"),"Current environment is not a web browser"),assert(void 0!==window.localStorage,"Current browser does not appear to support localStorage"),this.LS=window.localStorage;}return e.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,o,a;return __generator(this,function(i){for(e={},t=PATH_PREFIX+PATH_SEPARATOR,n=PATH_SEPARATOR+INFO_SUFFIX,r=0;r<this.LS.length;++r)(o=this.LS.key(r)).startsWith(t)&&o.endsWith(n)&&(a=getModelPathFromKey(o),e[a]=JSON.parse(this.LS.getItem(o)));return [2,e]})})},e.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){if(e=maybeStripScheme$1(e),t=getModelKeys(e),null==this.LS.getItem(t.info))throw new Error("Cannot find model at path '"+e+"'");return n=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,n]})})},e}();if(ENV.get("IS_BROWSER"))try{ModelStoreManagerRegistry.registerManager(BrowserLocalStorage.URL_SCHEME,new BrowserLocalStorageManager);}catch(e){}var DEFAULT_FILE_NAME_PREFIX="model",DEFAULT_JSON_EXTENSION_NAME=".json",DEFAULT_WEIGHT_DATA_EXTENSION_NAME=".weights.bin",BrowserDownloads=function(){function e(t){if(!ENV.get("IS_BROWSER"))throw new Error("triggerDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),null!=t&&0!==t.length||(t=DEFAULT_FILE_NAME_PREFIX),this.modelTopologyFileName=t+DEFAULT_JSON_EXTENSION_NAME,this.weightDataFileName=t+DEFAULT_WEIGHT_DATA_EXTENSION_NAME;}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o,a,i;return __generator(this,function(s){if(t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"})),e.modelTopology instanceof ArrayBuffer)throw new Error("DownloadTrigger.save() does not support saving model topology in binary formats yet.");return n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,weightsManifest:n},o=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),(a=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=o,a.click(),null!=e.weightData&&((i=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,i.href=t,i.click()),[2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e)}]})})},e.URL_SCHEME="downloads://",e}(),BrowserFiles=function(){function e(e){if(null==e||e.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+e);this.files=e;}return e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n=this;return __generator(this,function(r){return e=this.files[0],t=this.files.slice(1),[2,new Promise(function(r,o){var a=new FileReader;a.onload=function(a){var i=JSON.parse(a.target.result),s=i.modelTopology;if(null!=s){0===t.length&&r({modelTopology:s});var u=i.weightsManifest;if(null!=u){var l;try{l=n.checkManifestAndWeightFiles(u,t);}catch(e){return void o(e)}var c=[],p=[],d=[];u.forEach(function(e){e.paths.forEach(function(e){p.push(e),d.push(null);}),c.push.apply(c,e.weights);}),u.forEach(function(e){e.paths.forEach(function(e){var t=new FileReader;t.onload=function(t){var n=t.target.result,o=p.indexOf(e);d[o]=n,-1===d.indexOf(null)&&r({modelTopology:s,weightSpecs:c,weightData:concatenateArrayBuffers(d)});},t.onerror=function(t){o("Failed to weights data from file of path '"+e+"'.");},t.readAsArrayBuffer(l[e]);});});}else o(new Error("weightManifest field is missing from file "+e.name));}else o(new Error("modelTopology field is missing from file "+e.name));},a.onerror=function(t){o("Failed to read model topology and weights manifest JSON from file '"+e.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.");},a.readAsText(e);})]})})},e.prototype.checkManifestAndWeightFiles=function(e,t){for(var n=[],r=t.map(function(e){return basename(e.name)}),o={},a=0,i=e;a<i.length;a++){i[a].paths.forEach(function(e){var a=basename(e);if(-1!==n.indexOf(a))throw new Error("Duplicate file basename found in weights manifest: '"+a+"'");if(n.push(a),-1===r.indexOf(a))throw new Error("Weight file with basename '"+a+"' is not provided.");o[e]=t[r.indexOf(a)];});}if(n.length!==t.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+t.length+").");return o},e}(),browserDownloadsRouter=function(e){return ENV.get("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(BrowserDownloads.URL_SCHEME)?browserDownloads(e.slice(BrowserDownloads.URL_SCHEME.length)):null};function browserDownloads(e){return void 0===e&&(e="model"),new BrowserDownloads(e)}function browserFiles(e){return new BrowserFiles(e)}function loadWeightsAsArrayBuffer(e,t){return __awaiter(this,void 0,void 0,function(){var n,r;return __generator(this,function(o){switch(o.label){case 0:return n=e.map(function(e){return fetch(e,t)}),[4,Promise.all(n)];case 1:return r=o.sent(),[4,Promise.all(r.map(function(e){return e.arrayBuffer()}))];case 2:return [2,o.sent()]}})})}function loadWeights(e,t,n,r){return void 0===t&&(t=""),__awaiter(this,void 0,void 0,function(){var o,a,i,s,u,l,c,p,d,h;return __generator(this,function(f){switch(f.label){case 0:if(o=e.map(function(){return !1}),a={},i=null!=n?n.map(function(){return !1}):[],s=[],e.forEach(function(e,t){var r=0;e.weights.forEach(function(e){var u="quantization"in e?e.quantization.dtype:e.dtype,l=DTYPE_VALUE_SIZE_MAP[u]*sizeFromShape(e.shape),c=function(){o[t]=!0,null==a[t]&&(a[t]=[]),a[t].push({manifestEntry:e,groupOffset:r,sizeBytes:l});};null!=n?n.forEach(function(t,n){t===e.name&&(c(),i[n]=!0);}):c(),s.push(e.name),r+=l;});}),!i.every(function(e){return e}))throw u=n.filter(function(e,t){return !i[t]}),new Error("Could not find weights in manifest with names: "+u.join(", ")+". \nManifest JSON has weights with names: "+s.join(", ")+".");return l=o.reduce(function(e,t,n){return t&&e.push(n),e},[]),c=[],l.forEach(function(n){e[n].paths.forEach(function(e){var n=t+(t.endsWith("/")?"":"/")+e;c.push(n);});}),[4,loadWeightsAsArrayBuffer(c,r)];case 1:return p=f.sent(),d={},h=0,l.forEach(function(t){for(var n=e[t].paths.length,r=0,o=0;o<n;o++)r+=p[h+o].byteLength;for(var i=new ArrayBuffer(r),s=new Uint8Array(i),u=0,l=0;l<n;l++){var c=new Uint8Array(p[h+l]);s.set(c,u),u+=c.byteLength;}a[t].forEach(function(e){var t=decodeWeights(i.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(var n in t)d[n]=t[n];}),h+=n;}),[2,d]}})})}IORouterRegistry.registerSaveRouter(browserDownloadsRouter);var BrowserHTTPRequest=function(){function e(e,t){if(this.DEFAULT_METHOD="POST","undefined"==typeof fetch)throw new Error("browserHTTPRequest is not supported outside the web browser without a fetch polyfill.");if(assert(null!=e&&e.length>0,"URL path for browserHTTPRequest must not be null, undefined or empty."),Array.isArray(e)&&assert(2===e.length,"URL paths for browserHTTPRequest must have a length of 2, (actual length is "+e.length+")."),this.path=e,null!=t&&null!=t.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t||{};}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return (t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,weightsManifest:n},t.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,fetch(this.path,t)];case 1:if(200===(o=a.sent()).status)return [2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e),responses:[o]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+o.status+".")}})})},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return [2,Array.isArray(this.path)?this.loadBinaryModel():this.loadJSONModel()]})})},e.prototype.loadBinaryTopology=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.path[0],this.requestInit)];case 1:return [4,t.sent().arrayBuffer()];case 2:return [2,t.sent()];case 3:throw e=t.sent(),new Error(this.path[0]+" not found. "+e);case 4:return [2]}})})},e.prototype.loadBinaryModel=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,o,a,i,s;return __generator(this,function(u){switch(u.label){case 0:return e=this.loadBinaryTopology(),[4,fetch(this.path[1],this.requestInit)];case 1:return t=u.sent(),[4,Promise.all([e,t])];case 2:return n=u.sent(),r=n[0],[4,n[1].json()];case 3:return null==(o=u.sent())?[3,5]:[4,this.loadWeights(o)];case 4:s=u.sent(),a=s[0],i=s[1],u.label=5;case 5:return [2,{modelTopology:r,weightSpecs:a,weightData:i}]}})})},e.prototype.loadJSONModel=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return [4,fetch(this.path,this.requestInit)];case 1:return [4,s.sent().json()];case 2:if(e=s.sent(),t=e.modelTopology,n=e.weightsManifest,null==t&&null==n)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return null==n?[3,4]:(a=e.weightsManifest,[4,this.loadWeights(a)]);case 3:i=s.sent(),r=i[0],o=i[1],s.label=4;case 4:return [2,{modelTopology:t,weightSpecs:r,weightData:o}]}})})},e.prototype.loadWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,o,a,i,s,u,l;return __generator(this,function(c){switch(c.label){case 0:for(t=Array.isArray(this.path)?this.path[1]:this.path,n=[],r=0,o=e;r<o.length;r++)a=o[r],n.push.apply(n,a.weights);return (i=t.substring(0,t.lastIndexOf("/"))).endsWith("/")||(i+="/"),s=[],e.forEach(function(e){e.paths.forEach(function(e){s.push(i+e);});}),u=[n],l=concatenateArrayBuffers,[4,loadWeightsAsArrayBuffer(s,this.requestInit)];case 1:return [2,u.concat([l.apply(void 0,[c.sent()])])]}})})},e.URL_SCHEME_REGEX=/^https?:\/\//,e}();function isHTTPScheme(e){return null!=e.match(BrowserHTTPRequest.URL_SCHEME_REGEX)}var httpRequestRouter=function(e){if("undefined"==typeof fetch)return null;return (Array.isArray(e)?e.every(function(e){return isHTTPScheme(e)}):isHTTPScheme(e))?browserHTTPRequest(e):null};function browserHTTPRequest(e,t){return new BrowserHTTPRequest(e,t)}IORouterRegistry.registerSaveRouter(httpRequestRouter),IORouterRegistry.registerLoadRouter(httpRequestRouter);var PassthroughLoader=function(){function e(e,t,n){this.modelTopology=e,this.weightSpecs=t,this.weightData=n;}return e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return e={},null!=this.modelTopology&&(e=__assign({modelTopology:this.modelTopology},e)),null!=this.weightSpecs&&this.weightSpecs.length>0&&(e=__assign({weightSpecs:this.weightSpecs},e)),null!=this.weightData&&this.weightData.byteLength>0&&(e=__assign({weightData:this.weightData},e)),[2,e]})})},e}(),PassthroughSaver=function(){function e(e){this.saveHandler=e;}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return [2,this.saveHandler(e)]})})},e}();function fromMemory(e,t,n){return new PassthroughLoader(e,t,n)}function withSaveHandler(e){return new PassthroughSaver(e)}var registerSaveRouter=IORouterRegistry.registerSaveRouter,registerLoadRouter=IORouterRegistry.registerLoadRouter,getSaveHandlers=IORouterRegistry.getSaveHandlers,getLoadHandlers=IORouterRegistry.getLoadHandlers,io=Object.freeze({browserFiles:browserFiles,browserHTTPRequest:browserHTTPRequest,concatenateArrayBuffers:concatenateArrayBuffers,decodeWeights:decodeWeights,encodeWeights:encodeWeights,fromMemory:fromMemory,getLoadHandlers:getLoadHandlers,getModelArtifactsInfoForJSON:getModelArtifactsInfoForJSON,getSaveHandlers:getSaveHandlers,loadWeights:loadWeights,registerLoadRouter:registerLoadRouter,registerSaveRouter:registerSaveRouter,withSaveHandler:withSaveHandler,copyModel:copyModel,listModels:listModels,moveModel:moveModel,removeModel:removeModel}),Serializable=function(){function e(){}return e.prototype.getClassName=function(){return this.constructor.className},e.fromConfig=function(e,t){return new e(t)},e}(),SerializationMap=function(){function e(){this.classNameMap={};}return e.getMap=function(){return null==e.instance&&(e.instance=new e),e.instance},e.register=function(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig];},e}();function registerClass(e){assert(null!=e.className,"Class being registered does not have the static className property defined."),assert("string"==typeof e.className,"className is required to be a string, but got type "+typeof e.className),assert(e.className.length>0,"Class being registered has an empty-string as its className, which is disallowed."),SerializationMap.register(e);}var serialization=Object.freeze({Serializable:Serializable,SerializationMap:SerializationMap,registerClass:registerClass}),WEBGL_ENVS={HAS_WEBGL:!0},NODE_ENVS={IS_NODE:!0},CHROME_ENVS={IS_CHROME:!0},BROWSER_ENVS={IS_BROWSER:!0},CPU_ENVS={HAS_WEBGL:!1},ALL_ENVS={};function expectArraysClose(e,t,n){if(null==n&&(n=ENV.get("TEST_EPSILON")),e instanceof Tensor||t instanceof Tensor){if(e instanceof Tensor&&t instanceof Tensor){if(e.dtype!==t.dtype)throw new Error("Arrays are of different type actual: "+e.dtype+" vs expected: "+t.dtype+".");if(!arraysEqual(e.shape,t.shape))throw new Error("Arrays are of different shape actual: "+e.shape+" vs expected: "+t.shape+".")}}else{var r=e.constructor.name,o=t.constructor.name;if(r!==o)throw new Error("Arrays are of different type actual: "+r+" vs expected: "+o)}var a,i;if(a=e instanceof Tensor?e.dataSync():e,i=t instanceof Tensor?t.dataSync():t,a.length!==i.length)throw new Error("Arrays have different lengths actual: "+a.length+" vs expected: "+i.length+".\nActual:   "+a+".\nExpected: "+i+".");for(var s=0;s<i.length;++s){var u=a[s],l=i[s];if(!areClose(u,Number(l),n))throw new Error("Arrays differ: actual["+s+"] = "+u+", expected["+s+"] = "+l+".\nActual:   "+a+".\nExpected: "+i+".")}}function expectPromiseToFail(e,t){e().then(function(){return t.fail()},function(){return t()});}function expectArraysEqual(e,t){return expectArraysClose(e,t,0)}function expectNumbersClose(e,t,n){if(null==n&&(n=ENV.get("TEST_EPSILON")),!areClose(e,t,n))throw new Error("Numbers differ: actual === "+e+", expected === "+t)}function areClose(e,t,n){return !(!isNaN(e)||!isNaN(t))||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function expectValuesInRange(e,t,n){var r;r=e instanceof Tensor?e.dataSync():e;for(var o=0;o<r.length;o++)if(r[o]<t||r[o]>n)throw new Error("Value out of range:"+r[o]+" low: "+t+", high: "+n)}function expectArrayBuffersEqual(e,t){expect(new Float32Array(e)).toEqual(new Float32Array(t));}var test_util=Object.freeze({WEBGL_ENVS:WEBGL_ENVS,NODE_ENVS:NODE_ENVS,CHROME_ENVS:CHROME_ENVS,BROWSER_ENVS:BROWSER_ENVS,CPU_ENVS:CPU_ENVS,ALL_ENVS:ALL_ENVS,expectArraysClose:expectArraysClose,expectPromiseToFail:expectPromiseToFail,expectArraysEqual:expectArraysEqual,expectNumbersClose:expectNumbersClose,expectValuesInRange:expectValuesInRange,expectArrayBuffersEqual:expectArrayBuffersEqual}),version="0.13.2",webgl=Object.freeze({gpgpu_util:gpgpu_util,webgl_util:webgl_util,MathBackendWebGL:MathBackendWebGL,GPGPUContext:GPGPUContext}),Optimizer=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.minimize=function(e,t,n){void 0===t&&(t=!1);var r=this.computeGradients(e,n),o=r.value,a=r.grads;return this.applyGradients(a),Object.keys(a).forEach(function(e){return a[e].dispose()}),t?o:(o.dispose(),null)},t.prototype.computeGradients=function(e,t){return variableGrads(e,t)},t}(Serializable),AdadeltaOptimizer=function(e){function t(t,n,r){void 0===r&&(r=null);var o=e.call(this)||this;return o.learningRate=t,o.rho=n,o.epsilon=r,o.accumulatedGrads={},o.accumulatedUpdates={},o.c=keep(scalar(-t)),o.rhoScalar=keep(scalar(n)),o.oneMinusRho=keep(scalar(1-n)),null===r&&(r=ENV.get("EPSILON")),o.epsilonScalar=keep(scalar(r)),o}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var o=ENV.engine.registeredVariables[n];if(null==r.accumulatedGrads[n]){tidy(function(){t.accumulatedGrads[n]=zerosLike(o).variable(!1);});}if(null==r.accumulatedUpdates[n]){tidy(function(){t.accumulatedUpdates[n]=zerosLike(o).variable(!1);});}var a=e[n],i=r.accumulatedGrads[n],s=r.accumulatedUpdates[n];tidy(function(){var e=t.rhoScalar.mul(i).add(t.oneMinusRho.mul(a.square())),r=s.add(t.epsilonScalar).sqrt().div(i.add(t.epsilonScalar).sqrt()).mul(a),u=t.rhoScalar.mul(s).add(t.oneMinusRho.mul(r.square()));t.accumulatedGrads[n].assign(e),t.accumulatedUpdates[n].assign(u);var l=t.c.mul(r).add(o);o.assign(l);});},r=this;for(var o in e)n(o);},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsilonScalar.dispose(),this.rhoScalar.dispose(),this.oneMinusRho.dispose(),null!=this.accumulatedUpdates&&(Object.keys(this.accumulatedUpdates).forEach(function(t){return e.accumulatedUpdates[t].dispose()}),Object.keys(this.accumulatedGrads).forEach(function(t){return e.accumulatedGrads[t].dispose()}));},t.prototype.getConfig=function(){return {learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},t.className="AdadeltaOptimizer",t}(Optimizer);registerClass(AdadeltaOptimizer);var AdagradOptimizer=function(e){function t(t,n){void 0===n&&(n=.1);var r=e.call(this)||this;return r.learningRate=t,r.initialAccumulatorValue=n,r.accumulatedGrads={},r.c=keep(scalar(-t)),r.epsilon=keep(scalar(ENV.get("EPSILON"))),r}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var o=ENV.engine.registeredVariables[n];if(null==r.accumulatedGrads[n]){tidy(function(){t.accumulatedGrads[n]=fill(o.shape,t.initialAccumulatorValue).variable(!1);});}var a=e[n],i=r.accumulatedGrads[n];tidy(function(){var e=i.add(a.square());t.accumulatedGrads[n].assign(e);var r=t.c.mul(a.div(e.add(t.epsilon).sqrt())).add(o);o.assign(r);});},r=this;for(var o in e)n(o);},t.prototype.dispose=function(){var e=this;this.epsilon.dispose(),this.c.dispose(),null!=this.accumulatedGrads&&Object.keys(this.accumulatedGrads).forEach(function(t){return e.accumulatedGrads[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},t.className="AdagradOptimizer",t}(Optimizer);registerClass(AdagradOptimizer);var AdamOptimizer=function(e){function t(t,n,r,o){void 0===o&&(o=null);var a=e.call(this)||this;return a.learningRate=t,a.beta1=n,a.beta2=r,a.epsilon=o,a.accumulatedFirstMoment={},a.accumulatedSecondMoment={},a.c=keep(scalar(-t)),a.beta1Scalar=keep(scalar(n)),a.beta2Scalar=keep(scalar(r)),tidy(function(){a.accBeta1=scalar(n).variable(),a.accBeta2=scalar(r).variable();}),a.oneMinusBeta1=keep(scalar(1-n)),a.oneMinusBeta2=keep(scalar(1-r)),a.one=keep(scalar(1)),null===o&&(o=ENV.get("EPSILON")),a.epsScalar=keep(scalar(o)),a}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this;tidy(function(){var n=t.one.sub(t.accBeta1),r=t.one.sub(t.accBeta2);for(var o in e){var a=ENV.engine.registeredVariables[o];if(null==t.accumulatedFirstMoment[o]){var i=!1;t.accumulatedFirstMoment[o]=zerosLike(a).variable(i);}if(null==t.accumulatedSecondMoment[o]){i=!1;t.accumulatedSecondMoment[o]=zerosLike(a).variable(i);}var s=e[o],u=t.accumulatedFirstMoment[o],l=t.accumulatedSecondMoment[o],c=t.beta1Scalar.mul(u).add(t.oneMinusBeta1.mul(s)),p=t.beta2Scalar.mul(l).add(t.oneMinusBeta2.mul(s.square())),d=c.div(n),h=p.div(r);t.accumulatedFirstMoment[o].assign(c),t.accumulatedSecondMoment[o].assign(p);var f=t.c.mul(d.div(t.epsScalar.add(h.sqrt()))).add(a);a.assign(f);}t.accBeta1.assign(t.accBeta1.mul(t.beta1Scalar)),t.accBeta2.assign(t.accBeta2.mul(t.beta2Scalar));});},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsScalar.dispose(),this.beta1Scalar.dispose(),this.beta2Scalar.dispose(),this.accBeta1.dispose(),this.accBeta2.dispose(),this.oneMinusBeta1.dispose(),this.oneMinusBeta2.dispose(),this.one.dispose(),null!=this.accumulatedFirstMoment&&Object.keys(this.accumulatedFirstMoment).forEach(function(t){return e.accumulatedFirstMoment[t].dispose()}),null!=this.accumulatedSecondMoment&&Object.keys(this.accumulatedSecondMoment).forEach(function(t){return e.accumulatedSecondMoment[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},t.className="AdamOptimizer",t}(Optimizer);registerClass(AdamOptimizer);var AdamaxOptimizer=function(e){function t(t,n,r,o,a){void 0===o&&(o=null),void 0===a&&(a=0);var i=e.call(this)||this;return i.learningRate=t,i.beta1=n,i.beta2=r,i.epsilon=o,i.decay=a,i.accumulatedFirstMoment={},i.accumulatedWeightedInfNorm={},i.c=keep(scalar(-t)),i.beta1Scalar=keep(scalar(n)),i.beta2Scalar=keep(scalar(r)),i.decayScalar=keep(scalar(a)),tidy(function(){i.iteration=scalar(0).variable(),i.accBeta1=scalar(n).variable();}),i.oneMinusBeta1=keep(scalar(1-n)),i.one=keep(scalar(1)),null===o&&(o=ENV.get("EPSILON")),i.epsScalar=keep(scalar(o)),i}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this;tidy(function(){var n=t.one.sub(t.accBeta1),r=t.c.div(t.one.add(t.decayScalar.mul(t.iteration)));for(var o in e){var a=ENV.engine.registeredVariables[o];if(null==t.accumulatedFirstMoment[o]){var i=!1;t.accumulatedFirstMoment[o]=zerosLike(a).variable(i);}if(null==t.accumulatedWeightedInfNorm[o]){i=!1;t.accumulatedWeightedInfNorm[o]=zerosLike(a).variable(i);}var s=e[o],u=t.accumulatedFirstMoment[o],l=t.accumulatedWeightedInfNorm[o],c=t.beta1Scalar.mul(u).add(t.oneMinusBeta1.mul(s)),p=t.beta2Scalar.mul(l),d=s.abs(),h=p.maximum(d);t.accumulatedFirstMoment[o].assign(c),t.accumulatedWeightedInfNorm[o].assign(h);var f=r.div(n).mul(c.div(t.epsScalar.add(h))).add(a);a.assign(f);}t.iteration.assign(t.iteration.add(t.one)),t.accBeta1.assign(t.accBeta1.mul(t.beta1Scalar));});},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsScalar.dispose(),this.accBeta1.dispose(),this.beta1Scalar.dispose(),this.beta2Scalar.dispose(),this.oneMinusBeta1.dispose(),this.decayScalar.dispose(),this.iteration.dispose(),this.one.dispose(),null!=this.accumulatedFirstMoment&&Object.keys(this.accumulatedFirstMoment).forEach(function(t){return e.accumulatedFirstMoment[t].dispose()}),null!=this.accumulatedWeightedInfNorm&&Object.keys(this.accumulatedWeightedInfNorm).forEach(function(t){return e.accumulatedWeightedInfNorm[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},t.className="AdamaxOptimizer",t}(Optimizer);registerClass(AdamaxOptimizer);var SGDOptimizer=function(e){function t(t){var n=e.call(this)||this;return n.learningRate=t,n.setLearningRate(t),n}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this;Object.keys(e).forEach(function(n){var r=e[n],o=ENV.engine.registeredVariables[n];tidy(function(){var e=t.c.mul(r).add(o);o.assign(e);});});},t.prototype.setLearningRate=function(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=keep(scalar(-e));},t.prototype.dispose=function(){this.c.dispose();},t.prototype.getConfig=function(){return {learningRate:this.learningRate}},t.fromConfig=function(e,t){return new e(t.learningRate)},t.className="SGDOptimizer",t}(Optimizer);registerClass(SGDOptimizer);var MomentumOptimizer=function(e){function t(t,n,r){void 0===r&&(r=!1);var o=e.call(this,t)||this;return o.learningRate=t,o.momentum=n,o.useNesterov=r,o.m=scalar(o.momentum),o.accumulations={},o}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var o=ENV.engine.registeredVariables[n];if(null==r.accumulations[n]){tidy(function(){t.accumulations[n]=zerosLike(o).variable(!1);});}var a=r.accumulations[n],i=e[n];tidy(function(){var e,r=t.m.mul(a).add(i);e=t.useNesterov?t.c.mul(i.add(r.mul(t.m))).add(o):t.c.mul(r).add(o),t.accumulations[n].assign(r),o.assign(e);});},r=this;for(var o in e)n(o);},t.prototype.dispose=function(){if(e.prototype.dispose.call(this),this.m.dispose(),null!=this.accumulations)for(var t in this.accumulations)this.accumulations[t].dispose();},t.prototype.setMomentum=function(e){this.momentum=e;},t.prototype.getConfig=function(){return {learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},t.className="MomentumOptimizer",t}(SGDOptimizer);registerClass(MomentumOptimizer);var RMSPropOptimizer=function(e){function t(t,n,r,o,a){void 0===n&&(n=.9),void 0===r&&(r=0),void 0===o&&(o=null),void 0===a&&(a=!1);var i=e.call(this)||this;return i.learningRate=t,i.decay=n,i.momentum=r,i.epsilon=o,i.accumulatedMeanSquares={},i.accumulatedMeanGrads={},i.accumulatedMoments={},i.c=keep(scalar(t)),i.decayScalar=keep(scalar(n)),i.momentumScalar=keep(scalar(r)),i.oneMinusDecay=keep(scalar(1-n)),i.centered=a,null===o&&(o=ENV.get("EPSILON")),i.epsilonScalar=keep(scalar(o)),i}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var o=ENV.engine.registeredVariables[n];if(null==r.accumulatedMeanSquares[n]){tidy(function(){t.accumulatedMeanSquares[n]=zerosLike(o).variable(!1);});}if(null==r.accumulatedMeanGrads[n]&&r.centered){tidy(function(){t.accumulatedMeanGrads[n]=zerosLike(o).variable(!1);});}if(null==r.accumulatedMoments[n]){tidy(function(){t.accumulatedMoments[n]=zerosLike(o).variable(!1);});}var a=r.accumulatedMeanSquares[n],i=r.accumulatedMeanGrads[n],s=r.accumulatedMoments[n],u=e[n];tidy(function(){var e=t.decayScalar.mul(a).add(t.oneMinusDecay.mul(u.square()));if(t.centered){var r=t.decayScalar.mul(i).add(t.oneMinusDecay.mul(u)),l=t.momentumScalar.mul(s).add(t.c.mul(u).div(e.sub(r.square().add(t.epsilonScalar)).sqrt()));t.accumulatedMeanSquares[n].assign(e),t.accumulatedMeanGrads[n].assign(r),t.accumulatedMoments[n].assign(l);var c=o.sub(l);o.assign(c);}else{var p=t.decayScalar.mul(a).add(t.oneMinusDecay.mul(u.square()));l=t.momentumScalar.mul(s).add(t.c.mul(u).div(p.add(t.epsilonScalar).sqrt()));t.accumulatedMeanSquares[n].assign(p),t.accumulatedMoments[n].assign(l);c=o.sub(l);o.assign(c);}});},r=this;for(var o in e)n(o);},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsilonScalar.dispose(),this.decayScalar.dispose(),this.momentumScalar.dispose(),this.oneMinusDecay.dispose(),null!=this.accumulatedMeanSquares&&Object.keys(this.accumulatedMeanSquares).forEach(function(t){return e.accumulatedMeanSquares[t].dispose()}),null!=this.accumulatedMeanGrads&&this.centered&&Object.keys(this.accumulatedMeanGrads).forEach(function(t){return e.accumulatedMeanGrads[t].dispose()}),null!=this.accumulatedMoments&&Object.keys(this.accumulatedMoments).forEach(function(t){return e.accumulatedMoments[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},t.className="RMSPropOptimizer",t}(Optimizer);registerClass(RMSPropOptimizer);var OptimizerConstructors=function(){function e(){}return e.sgd=function(e){return new SGDOptimizer(e)},e.momentum=function(e,t,n){return void 0===n&&(n=!1),new MomentumOptimizer(e,t,n)},e.rmsprop=function(e,t,n,r,o){return void 0===t&&(t=.9),void 0===n&&(n=0),void 0===r&&(r=null),void 0===o&&(o=!1),new RMSPropOptimizer(e,t,n,r,o)},e.adam=function(e,t,n,r){return void 0===e&&(e=.001),void 0===t&&(t=.9),void 0===n&&(n=.999),void 0===r&&(r=null),new AdamOptimizer(e,t,n,r)},e.adadelta=function(e,t,n){return void 0===e&&(e=.001),void 0===t&&(t=.95),void 0===n&&(n=null),new AdadeltaOptimizer(e,t,n)},e.adamax=function(e,t,n,r,o){return void 0===e&&(e=.002),void 0===t&&(t=.9),void 0===n&&(n=.999),void 0===r&&(r=null),void 0===o&&(o=0),new AdamaxOptimizer(e,t,n,r,o)},e.adagrad=function(e,t){return void 0===t&&(t=.1),new AdagradOptimizer(e,t)},e}(),train={sgd:OptimizerConstructors.sgd,momentum:OptimizerConstructors.momentum,adadelta:OptimizerConstructors.adadelta,adagrad:OptimizerConstructors.adagrad,rmsprop:OptimizerConstructors.rmsprop,adamax:OptimizerConstructors.adamax,adam:OptimizerConstructors.adam},setBackend=Environment.setBackend,getBackend=Environment.getBackend,disposeVariables=Environment.disposeVariables,memory=Environment.memory;setOpHandler(ops);

    var tfCore_esm = /*#__PURE__*/Object.freeze({
        setBackend: setBackend,
        getBackend: getBackend,
        disposeVariables: disposeVariables,
        memory: memory,
        version_core: version,
        nextFrame: nextFrame,
        environment: environment,
        io: io,
        serialization: serialization,
        test_util: test_util,
        util: util,
        webgl: webgl,
        AdadeltaOptimizer: AdadeltaOptimizer,
        AdagradOptimizer: AdagradOptimizer,
        AdamOptimizer: AdamOptimizer,
        AdamaxOptimizer: AdamaxOptimizer,
        MomentumOptimizer: MomentumOptimizer,
        Optimizer: Optimizer,
        RMSPropOptimizer: RMSPropOptimizer,
        SGDOptimizer: SGDOptimizer,
        Tensor: Tensor,
        TensorBuffer: TensorBuffer,
        variable: variable,
        Variable: Variable,
        get Rank () { return Rank; },
        get Reduction () { return Reduction; },
        ENV: ENV,
        Environment: Environment,
        DataStorage: DataStorage,
        image: image_ops,
        linalg: linalg_ops,
        losses: loss_ops,
        op: op,
        batchNormalization2d: batchNormalization2d,
        batchNormalization3d: batchNormalization3d,
        batchNormalization4d: batchNormalization4d,
        batchNormalization: batchNormalization,
        complex: complex,
        real: real,
        imag: imag,
        concat: concat,
        concat1d: concat1d,
        concat2d: concat2d,
        concat3d: concat3d,
        concat4d: concat4d,
        split: split$1,
        conv1d: conv1d,
        conv2d: conv2d,
        depthwiseConv2d: depthwiseConv2d,
        separableConv2d: separableConv2d,
        conv2dTranspose: conv2dTranspose,
        matMul: matMul,
        dot: dot,
        outerProduct: outerProduct,
        reverse: reverse,
        reverse1d: reverse1d,
        reverse2d: reverse2d,
        reverse3d: reverse3d,
        reverse4d: reverse4d,
        maxPool: maxPool,
        avgPool: avgPool,
        slice: slice,
        slice1d: slice1d,
        slice2d: slice2d,
        slice3d: slice3d,
        slice4d: slice4d,
        abs: abs,
        acos: acos,
        acosh: acosh,
        asin: asin,
        asinh: asinh,
        atan: atan,
        atanh: atanh,
        ceil: ceil,
        clipByValue: clipByValue,
        cos: cos,
        cosh: cosh,
        erf: erf,
        exp: exp,
        expm1: expm1,
        floor: floor,
        log: log$1,
        log1p: log1p,
        logSigmoid: logSigmoid,
        neg: neg,
        reciprocal: reciprocal,
        round: round,
        rsqrt: rsqrt,
        sigmoid: sigmoid,
        sign: sign,
        sin: sin,
        sinh: sinh,
        softplus: softplus,
        sqrt: sqrt,
        square: square,
        step: step,
        tan: tan,
        tanh: tanh$1,
        all: all,
        any: any,
        argMax: argMax,
        argMin: argMin,
        logSumExp: logSumExp,
        max: max,
        mean: mean,
        min: min,
        moments: moments,
        sum: sum,
        equal: equal,
        equalStrict: equalStrict,
        greater: greater,
        greaterEqual: greaterEqual,
        greaterEqualStrict: greaterEqualStrict,
        greaterStrict: greaterStrict,
        less: less,
        lessEqual: lessEqual,
        lessEqualStrict: lessEqualStrict,
        lessStrict: lessStrict,
        notEqual: notEqual,
        notEqualStrict: notEqualStrict,
        add: add,
        addN: addN,
        addStrict: addStrict,
        atan2: atan2,
        div: div,
        divStrict: divStrict,
        floorDiv: floorDiv,
        maximum: maximum,
        maximumStrict: maximumStrict,
        minimum: minimum,
        minimumStrict: minimumStrict,
        mod: mod,
        modStrict: modStrict,
        mul: mul,
        mulStrict: mulStrict,
        pow: pow,
        powStrict: powStrict,
        squaredDifference: squaredDifference,
        squaredDifferenceStrict: squaredDifferenceStrict,
        sub: sub,
        subStrict: subStrict,
        elu: elu,
        leakyRelu: leakyRelu,
        prelu: prelu,
        relu: relu,
        selu: selu,
        logicalAnd: logicalAnd,
        logicalNot: logicalNot,
        logicalOr: logicalOr,
        logicalXor: logicalXor,
        where: where,
        whereAsync: whereAsync,
        buffer: buffer,
        toPixels: toPixels,
        print: print,
        batchToSpaceND: batchToSpaceND,
        cast: cast,
        clone: clone,
        cumsum: cumsum,
        depthToSpace: depthToSpace,
        expandDims: expandDims,
        eye: eye,
        fromPixels: fromPixels,
        multinomial: multinomial,
        oneHot: oneHot,
        pad: pad,
        pad1d: pad1d,
        pad2d: pad2d,
        pad3d: pad3d,
        pad4d: pad4d,
        rand: rand,
        randomNormal: randomNormal,
        randomUniform: randomUniform,
        reshape: reshape,
        spaceToBatchND: spaceToBatchND,
        squeeze: squeeze,
        stack: stack,
        tile: tile,
        truncatedNormal: truncatedNormal,
        unstack: unstack,
        fill: fill,
        linspace: linspace,
        ones: ones$1,
        range: range,
        scalar: scalar,
        tensor: tensor,
        tensor1d: tensor1d,
        tensor2d: tensor2d,
        tensor3d: tensor3d,
        tensor4d: tensor4d,
        tensor5d: tensor5d,
        tensor6d: tensor6d,
        zeros: zeros,
        onesLike: onesLike,
        zerosLike: zerosLike,
        transpose: transpose,
        softmax: softmax,
        localResponseNormalization: localResponseNormalization,
        norm: norm,
        gather: gather,
        unsortedSegmentSum: unsortedSegmentSum,
        basicLSTMCell: basicLSTMCell,
        multiRNNCell: multiRNNCell,
        movingAverage: movingAverage,
        stridedSlice: stridedSlice,
        topk: topk,
        train: train,
        tidy: tidy,
        keep: keep,
        dispose: dispose,
        time: time,
        profile: profile,
        customGrad: customGrad,
        grad: grad,
        grads: grads,
        valueAndGrad: valueAndGrad,
        valueAndGrads: valueAndGrads,
        variableGrads: variableGrads
    });

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

    var extendStatics$1 = function(d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$1 = function() {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };

    function __awaiter$1(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$1(thisArg, body) {
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

    var commonjsGlobal$1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule$1(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var isBuffer = function isBuffer(arg) {
      return arg instanceof Buffer;
    };

    var inherits_browser = createCommonjsModule$1(function (module) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    });

    var inherits = createCommonjsModule$1(function (module) {
    try {
      var util = util$1;
      if (typeof util.inherits !== 'function') throw '';
      module.exports = util.inherits;
    } catch (e) {
      module.exports = inherits_browser;
    }
    });

    var util$1 = createCommonjsModule$1(function (module, exports) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.

    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
      }

      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch (x) {
          case '%s': return String(args[i++]);
          case '%d': return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    };


    // Mark that a method should not be used.
    // Returns a modified function which warns once by default.
    // If --no-deprecation is set, then it is a no-op.
    exports.deprecate = function(fn, msg) {
      // Allow for deprecating things in the process of starting up.
      if (isUndefined(commonjsGlobal$1.process)) {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }

      if (process.noDeprecation === true) {
        return fn;
      }

      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }

      return deprecated;
    };


    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    };


    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */
    /* legacy: obj, showHidden, depth, colors*/
    function inspect(obj, opts) {
      // default options
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      // legacy...
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
      } else if (opts) {
        // got an "options" object
        exports._extend(ctx, opts);
      }
      // set default options
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;


    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    inspect.colors = {
      'bold' : [1, 22],
      'italic' : [3, 23],
      'underline' : [4, 24],
      'inverse' : [7, 27],
      'white' : [37, 39],
      'grey' : [90, 39],
      'black' : [30, 39],
      'blue' : [34, 39],
      'cyan' : [36, 39],
      'green' : [32, 39],
      'magenta' : [35, 39],
      'red' : [31, 39],
      'yellow' : [33, 39]
    };

    // Don't use 'blue' not visible on cmd.exe
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      // "name": intentionally not styling
      'regexp': 'red'
    };


    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];

      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str +
               '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }


    function stylizeNoColor(str, styleType) {
      return str;
    }


    function arrayToHash(array) {
      var hash = {};

      array.forEach(function(val, idx) {
        hash[val] = true;
      });

      return hash;
    }


    function formatValue(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (ctx.customInspect &&
          value &&
          isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== exports.inspect &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }

      // Primitive types cannot have properties
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }

      // Look up the keys of the object.
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }

      // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
      if (isError(value)
          && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }

      // Some type of object without properties can be shortcutted.
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '', array = false, braces = ['{', '}'];

      // Make Array say that they are Array
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }

      // Make functions say that they are functions
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }

      // Make RegExps say that they are RegExps
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }

      // Make dates with properties first say the date
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }

      // Make error with message first say the error
      if (isError(value)) {
        base = ' ' + formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);

      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();

      return reduceToSingleString(output, base, braces);
    }


    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        return ctx.stylize('' + value, 'number');
      if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
      // For some reason typeof null is "object", so special case here.
      if (isNull(value))
        return ctx.stylize('null', 'null');
    }


    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }


    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              key, true));
        }
      });
      return output;
    }


    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }


    function reduceToSingleString(output, base, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf('\n') >= 0) ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }


    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;

    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;

    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;

    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;

    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;

    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;

    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;

    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;

    function isError(e) {
      return isObject(e) &&
          (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;

    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;

    function isPrimitive(arg) {
      return arg === null ||
             typeof arg === 'boolean' ||
             typeof arg === 'number' ||
             typeof arg === 'string' ||
             typeof arg === 'symbol' ||  // ES6 symbol
             typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;

    exports.isBuffer = isBuffer;

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }


    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }


    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                  'Oct', 'Nov', 'Dec'];

    // 26 Feb 16:19:34
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()),
                  pad(d.getMinutes()),
                  pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }


    // log is just a thin wrapper to console.log that prepends a timestamp
    exports.log = function() {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };


    /**
     * Inherit the prototype methods from one constructor into another.
     *
     * The Function.prototype.inherits from lang.js rewritten as a standalone
     * function (not on Function.prototype). NOTE: If this file is to be loaded
     * during bootstrapping this function needs to be rewritten using some native
     * functions as prototype setup using normal JavaScript does not work as
     * expected during bootstrapping (see mirror.js in r114903).
     *
     * @param {function} ctor Constructor function which needs to inherit the
     *     prototype.
     * @param {function} superCtor Constructor function to inherit prototype from.
     */
    exports.inherits = inherits;

    exports._extend = function(origin, add) {
      // Don't do anything if add isn't an object
      if (!add || !isObject(add)) return origin;

      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };

    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    });
    var util_1 = util$1.format;
    var util_2 = util$1.deprecate;
    var util_3 = util$1.debuglog;
    var util_4 = util$1.inspect;
    var util_5 = util$1.isArray;
    var util_6 = util$1.isBoolean;
    var util_7 = util$1.isNull;
    var util_8 = util$1.isNullOrUndefined;
    var util_9 = util$1.isNumber;
    var util_10 = util$1.isString;
    var util_11 = util$1.isSymbol;
    var util_12 = util$1.isUndefined;
    var util_13 = util$1.isRegExp;
    var util_14 = util$1.isObject;
    var util_15 = util$1.isDate;
    var util_16 = util$1.isError;
    var util_17 = util$1.isFunction;
    var util_18 = util$1.isPrimitive;
    var util_19 = util$1.isBuffer;
    var util_20 = util$1.log;
    var util_21 = util$1.inherits;
    var util_22 = util$1._extend;

    var Dimensions = /** @class */ (function () {
        function Dimensions(width, height) {
            if (!util_9(width) || !util_9(height)) {
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

    function isTensor(tensor$$1, dim) {
        return tensor$$1 instanceof Tensor && tensor$$1.shape.length === dim;
    }
    function isTensor1D(tensor$$1) {
        return isTensor(tensor$$1, 1);
    }
    function isTensor2D(tensor$$1) {
        return isTensor(tensor$$1, 2);
    }
    function isTensor3D(tensor$$1) {
        return isTensor(tensor$$1, 3);
    }
    function isTensor4D(tensor$$1) {
        return isTensor(tensor$$1, 4);
    }
    function isFloat(num) {
        return num % 1 !== 0;
    }
    function isEven(num) {
        return num % 2 === 0;
    }
    function round$1(num, prec) {
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
        return pts.reduce(function (sum$$1, pt) { return sum$$1.add(pt); }, new Point(0, 0))
            .div(new Point(pts.length, pts.length));
    }
    function range$1(num, start, step$$1) {
        return Array(num).fill(0).map(function (_, i) { return start + (i * step$$1); });
    }
    function isValidNumber(num) {
        return !!num && num !== Infinity && num !== -Infinity && !isNaN(num) || num === 0;
    }
    function isValidProbablitiy(num) {
        return isValidNumber(num) && 0 <= num && num <= 1.0;
    }

    var Box = /** @class */ (function () {
        // TODO: MTCNN boxes sometimes have negative widths or heights, figure out why and remove
        // allowNegativeDimensions flag again
        function Box(_box, allowNegativeDimensions) {
            if (allowNegativeDimensions === void 0) { allowNegativeDimensions = false; }
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
        __extends$1(BoundingBox, _super);
        function BoundingBox(left, top, right, bottom) {
            return _super.call(this, { left: left, top: top, right: right, bottom: bottom }) || this;
        }
        return BoundingBox;
    }(Box));

    var BoxWithText = /** @class */ (function (_super) {
        __extends$1(BoxWithText, _super);
        function BoxWithText(box, text) {
            var _this = _super.call(this, box) || this;
            _this._text = text;
            return _this;
        }
        Object.defineProperty(BoxWithText.prototype, "text", {
            get: function () { return this._text; },
            enumerable: true,
            configurable: true
        });
        return BoxWithText;
    }(Box));

    var LabeledBox = /** @class */ (function (_super) {
        __extends$1(LabeledBox, _super);
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

    var PredictedBox = /** @class */ (function (_super) {
        __extends$1(PredictedBox, _super);
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

    var Rect = /** @class */ (function (_super) {
        __extends$1(Rect, _super);
        function Rect(x, y, width, height) {
            return _super.call(this, { x: x, y: y, width: width, height: height }) || this;
        }
        return Rect;
    }(Box));

    function disposeUnusedWeightTensors(weightMap, paramMappings) {
        Object.keys(weightMap).forEach(function (path) {
            if (!paramMappings.some(function (pm) { return pm.originalPath === path; })) {
                weightMap[path].dispose();
            }
        });
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

    function isMediaLoaded(media) {
        return (media instanceof HTMLImageElement && media.complete)
            || (media instanceof HTMLVideoElement && media.readyState >= 3);
    }

    function awaitMediaLoaded(media) {
        return new Promise(function (resolve, reject) {
            if (media instanceof HTMLCanvasElement || isMediaLoaded(media)) {
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
                var img = new Image();
                img.onload = function () { return resolve(img); };
                img.onerror = reject;
                img.src = reader.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(buf);
        });
    }

    function getContext2dOrThrow(canvas) {
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('canvas 2d context is null');
        }
        return ctx;
    }

    function getMediaDimensions(input) {
        if (input instanceof HTMLImageElement) {
            return new Dimensions(input.naturalWidth, input.naturalHeight);
        }
        if (input instanceof HTMLVideoElement) {
            return new Dimensions(input.videoWidth, input.videoHeight);
        }
        return new Dimensions(input.width, input.height);
    }

    function createCanvas(_a) {
        var width = _a.width, height = _a.height;
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    function createCanvasFromMedia(media, dims) {
        if (!isMediaLoaded(media)) {
            throw new Error('createCanvasFromMedia - media has not finished loading yet');
        }
        var _a = dims || getMediaDimensions(media), width = _a.width, height = _a.height;
        var canvas = createCanvas({ width: width, height: height });
        getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
        return canvas;
    }

    function getDefaultDrawOptions(options) {
        if (options === void 0) { options = {}; }
        return Object.assign({}, {
            boxColor: 'blue',
            textColor: 'red',
            lineWidth: 2,
            fontSize: 20,
            fontStyle: 'Georgia',
            withScore: true,
            withClassName: true
        }, options);
    }

    function drawBox(ctx, x, y, w, h, options) {
        var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
        ctx.strokeStyle = drawOptions.boxColor;
        ctx.lineWidth = drawOptions.lineWidth;
        ctx.strokeRect(x, y, w, h);
    }

    function drawText(ctx, x, y, text, options) {
        if (options === void 0) { options = {}; }
        var drawOptions = Object.assign(getDefaultDrawOptions(), options);
        var padText = 2 + drawOptions.lineWidth;
        ctx.fillStyle = drawOptions.textColor;
        ctx.font = drawOptions.fontSize + "px " + drawOptions.fontStyle;
        ctx.fillText(text, x + padText, y + padText + (drawOptions.fontSize * 0.6));
    }

    function resolveInput(arg) {
        if (typeof arg === 'string') {
            return document.getElementById(arg);
        }
        return arg;
    }

    function drawDetection(canvasArg, detection, options) {
        var canvas = resolveInput(canvasArg);
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error('drawDetection - expected canvas to be of type: HTMLCanvasElement');
        }
        var detectionArray = Array.isArray(detection)
            ? detection
            : [detection];
        detectionArray.forEach(function (det) {
            var _a = det instanceof ObjectDetection ? det.box : det, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            var drawOptions = getDefaultDrawOptions(options);
            var ctx = getContext2dOrThrow(canvas);
            drawBox(ctx, x, y, width, height, drawOptions);
            var withScore = drawOptions.withScore;
            var text = det instanceof BoxWithText
                ? det.text
                : ((withScore && det instanceof PredictedBox)
                    ? "" + round$1(det.score)
                    : (det instanceof ObjectDetection
                        ? "" + det.className + (withScore ? " (" + round$1(det.score) + ")" : '')
                        : ''));
            if (text) {
                drawText(ctx, x, y + height, text, drawOptions);
            }
        });
    }

    function fetchOrThrow(url, init) {
        return __awaiter$1(this, void 0, void 0, function () {
            var res;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, init)];
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
        return __awaiter$1(this, void 0, void 0, function () {
            var res, blob;
            return __generator$1(this, function (_a) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchOrThrow(uri)];
                    case 1: return [2 /*return*/, (_a.sent()).json()];
                }
            });
        });
    }

    function fetchNetWeights(uri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a;
            return __generator$1(this, function (_b) {
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

    function imageTensorToCanvas(imgTensor, canvas) {
        return __awaiter$1(this, void 0, void 0, function () {
            var targetCanvas, _a, height, width, numChannels, imgTensor3D;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        targetCanvas = canvas || document.createElement('canvas');
                        _a = imgTensor.shape.slice(isTensor4D(imgTensor) ? 1 : 0), height = _a[0], width = _a[1], numChannels = _a[2];
                        imgTensor3D = tidy(function () { return imgTensor.as3D(height, width, numChannels).toInt(); });
                        return [4 /*yield*/, toPixels(imgTensor3D, targetCanvas)];
                    case 1:
                        _b.sent();
                        imgTensor3D.dispose();
                        return [2 /*return*/, targetCanvas];
                }
            });
        });
    }

    function imageToSquare(input, inputSize, centerImage) {
        if (centerImage === void 0) { centerImage = false; }
        if (!(input instanceof HTMLImageElement || input instanceof HTMLCanvasElement)) {
            throw new Error('imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement');
        }
        var dims = getMediaDimensions(input);
        var scale = inputSize / Math.max(dims.height, dims.width);
        var width = scale * dims.width;
        var height = scale * dims.height;
        var targetCanvas = createCanvas({ width: inputSize, height: inputSize });
        var inputCanvas = input instanceof HTMLCanvasElement ? input : createCanvasFromMedia(input);
        var offset = Math.abs(width - height) / 2;
        var dx = centerImage && width < height ? offset : 0;
        var dy = centerImage && height < width ? offset : 0;
        getContext2dOrThrow(targetCanvas).drawImage(inputCanvas, dx, dy, width, height);
        return targetCanvas;
    }

    function isMediaElement(input) {
        return input instanceof HTMLImageElement
            || input instanceof HTMLVideoElement
            || input instanceof HTMLCanvasElement;
    }

    function loadWeightMap(uri, defaultModelName) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, manifestUri, modelBaseUri, manifest;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = getModelUris(uri, defaultModelName), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                        return [4 /*yield*/, fetchJson(manifestUri)];
                    case 1:
                        manifest = _b.sent();
                        return [2 /*return*/, io.loadWeights(manifest, modelBaseUri)];
                }
            });
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
        return tidy(function () {
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
                return fill(paddingTensorShape, 0);
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
                .filter(function (t) { return t !== null; });
            return concat(tensorsToStack, paddingAxis);
        });
    }

    var NetInput = /** @class */ (function () {
        function NetInput(inputs, treatAsBatchInput) {
            if (treatAsBatchInput === void 0) { treatAsBatchInput = false; }
            var _this = this;
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
                var canvas = input instanceof HTMLCanvasElement ? input : createCanvasFromMedia(input);
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
                return range$1(this.batchSize, 0, 1).map(function (_, batchIdx) { return _this.getReshapedInputDimensions(batchIdx); });
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
            return tidy(function () {
                var inputTensors = range$1(_this.batchSize, 0, 1).map(function (batchIdx) {
                    var input = _this.getInput(batchIdx);
                    if (input instanceof Tensor) {
                        var imgTensor = isTensor4D(input) ? input : input.expandDims();
                        imgTensor = padToSquare(imgTensor, isCenterInputs);
                        if (imgTensor.shape[1] !== inputSize || imgTensor.shape[2] !== inputSize) {
                            imgTensor = image_ops.resizeBilinear(imgTensor, [inputSize, inputSize]);
                        }
                        return imgTensor.as3D(inputSize, inputSize, 3);
                    }
                    if (input instanceof HTMLCanvasElement) {
                        return fromPixels(imageToSquare(input, inputSize, isCenterInputs));
                    }
                    throw new Error("toBatchTensor - at batchIdx " + batchIdx + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + input);
                });
                var batchTensor = stack(inputTensors.map(function (t) { return t.toFloat(); })).as4D(_this.batchSize, inputSize, inputSize, 3);
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
        return __awaiter$1(this, void 0, void 0, function () {
            var inputArgArray, getIdxHint, inputArray;
            return __generator$1(this, function (_a) {
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

    function iou(box1, box2, isIOU) {
        if (isIOU === void 0) { isIOU = true; }
        var width = Math.max(0.0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
        var height = Math.max(0.0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
        var interSection = width * height;
        return isIOU
            ? interSection / (box1.area + box2.area - interSection)
            : interSection / Math.min(box1.area, box2.area);
    }

    function nonMaxSuppression$1(boxes, scores, iouThreshold, isIOU) {
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
        return tidy(function () {
            var r = meanRgb[0], g = meanRgb[1], b = meanRgb[2];
            var avg_r = fill(x.shape.slice(0, 3).concat([1]), r);
            var avg_g = fill(x.shape.slice(0, 3).concat([1]), g);
            var avg_b = fill(x.shape.slice(0, 3).concat([1]), b);
            var avg_rgb = concat([avg_r, avg_g, avg_b], 3);
            return sub(x, avg_rgb);
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

    function sigmoid$1(x) {
        return 1 / (1 + Math.exp(-x));
    }
    function inverseSigmoid(x) {
        return Math.log(x / (1 - x));
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
        NeuralNetwork.prototype.reassignParamFromPath = function (paramPath, tensor$$1) {
            var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
            obj[objProp].dispose();
            obj[objProp] = tensor$$1;
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
            return this.getParamList().filter(function (param) { return param.tensor instanceof Variable; });
        };
        NeuralNetwork.prototype.getFrozenParams = function () {
            return this.getParamList().filter(function (param) { return !(param.tensor instanceof Variable); });
        };
        NeuralNetwork.prototype.variable = function () {
            var _this = this;
            this.getFrozenParams().forEach(function (_a) {
                var path = _a.path, tensor$$1 = _a.tensor;
                _this.reassignParamFromPath(path, tensor$$1.variable());
            });
        };
        NeuralNetwork.prototype.freeze = function () {
            var _this = this;
            this.getTrainableParams().forEach(function (_a) {
                var path = _a.path, variable$$1 = _a.tensor;
                var tensor$$1 = tensor(variable$$1.dataSync());
                variable$$1.dispose();
                _this.reassignParamFromPath(path, tensor$$1);
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
                var tensor$$1 = _a.tensor;
                return Array.from(tensor$$1.dataSync());
            })
                .reduce(function (flat, arr) { return flat.concat(arr); }));
        };
        NeuralNetwork.prototype.load = function (weightsOrUrl) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, paramMappings, params;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (weightsOrUrl instanceof Float32Array) {
                                this.extractWeights(weightsOrUrl);
                                return [2 /*return*/];
                            }
                            if (weightsOrUrl && typeof weightsOrUrl !== 'string') {
                                throw new Error(this._name + ".load - expected model uri, or weights as Float32Array");
                            }
                            return [4 /*yield*/, this.loadQuantizedParams(weightsOrUrl)];
                        case 1:
                            _a = _b.sent(), paramMappings = _a.paramMappings, params = _a.params;
                            this._paramMappings = paramMappings;
                            this._params = params;
                            return [2 /*return*/];
                    }
                });
            });
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
            if (!obj || !objProp || !(obj[objProp] instanceof Tensor)) {
                throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
            }
            return { obj: obj, objProp: objProp };
        };
        NeuralNetwork.prototype.loadQuantizedParams = function (_) {
            throw new Error(this._name + ".loadQuantizedParams - not implemented");
        };
        NeuralNetwork.prototype.extractParams = function (_) {
            throw new Error(this._name + ".extractParams - not implemented");
        };
        return NeuralNetwork;
    }());

    var FaceDetection = /** @class */ (function (_super) {
        __extends$1(FaceDetection, _super);
        function FaceDetection(score, relativeBox, imageDims) {
            return _super.call(this, score, score, '', relativeBox, imageDims) || this;
        }
        return FaceDetection;
    }(ObjectDetection));

    var FaceDetectionWithLandmarks = /** @class */ (function () {
        function FaceDetectionWithLandmarks(detection, unshiftedLandmarks) {
            this._detection = detection;
            this._unshiftedLandmarks = unshiftedLandmarks;
        }
        Object.defineProperty(FaceDetectionWithLandmarks.prototype, "detection", {
            get: function () { return this._detection; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceDetectionWithLandmarks.prototype, "unshiftedLandmarks", {
            get: function () { return this._unshiftedLandmarks; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceDetectionWithLandmarks.prototype, "alignedRect", {
            get: function () {
                var rect = this.landmarks.align();
                var imageDims = this.detection.imageDims;
                return new FaceDetection(this._detection.score, rect.rescale(imageDims.reverse()), imageDims);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceDetectionWithLandmarks.prototype, "landmarks", {
            get: function () {
                var _a = this.detection.box, x = _a.x, y = _a.y;
                return this._unshiftedLandmarks.shiftBy(x, y);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceDetectionWithLandmarks.prototype, "faceDetection", {
            // aliases for backward compatibily
            get: function () { return this.detection; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FaceDetectionWithLandmarks.prototype, "faceLandmarks", {
            get: function () { return this.landmarks; },
            enumerable: true,
            configurable: true
        });
        FaceDetectionWithLandmarks.prototype.forSize = function (width, height) {
            var resizedDetection = this._detection.forSize(width, height);
            var resizedLandmarks = this._unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height);
            return new FaceDetectionWithLandmarks(resizedDetection, resizedLandmarks);
        };
        return FaceDetectionWithLandmarks;
    }());

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
        FaceLandmarks.prototype.align = function (detection) {
            if (detection) {
                var box = detection instanceof FaceDetection
                    ? detection.box.floor()
                    : detection;
                return this.shiftBy(box.x, box.y).align();
            }
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
        FaceLandmarks.prototype.getRefPointsForAlignment = function () {
            throw new Error('getRefPointsForAlignment not implemented by base class');
        };
        return FaceLandmarks;
    }());

    var FaceLandmarks5 = /** @class */ (function (_super) {
        __extends$1(FaceLandmarks5, _super);
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
        __extends$1(FaceLandmarks68, _super);
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
            return "" + this.label + (withDistance ? " (" + round$1(this.distance) + ")" : '');
        };
        return FaceMatch;
    }());

    var FullFaceDescription = /** @class */ (function (_super) {
        __extends$1(FullFaceDescription, _super);
        function FullFaceDescription(detection, unshiftedLandmarks, descriptor) {
            var _this = _super.call(this, detection, unshiftedLandmarks) || this;
            _this._descriptor = descriptor;
            return _this;
        }
        Object.defineProperty(FullFaceDescription.prototype, "descriptor", {
            get: function () {
                return this._descriptor;
            },
            enumerable: true,
            configurable: true
        });
        FullFaceDescription.prototype.forSize = function (width, height) {
            var _a = _super.prototype.forSize.call(this, width, height), detection = _a.detection, landmarks = _a.landmarks;
            return new FullFaceDescription(detection, landmarks, this.descriptor);
        };
        return FullFaceDescription;
    }(FaceDetectionWithLandmarks));

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
        return LabeledFaceDescriptors;
    }());

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

    function drawLandmarks(canvasArg, faceLandmarks, options) {
        var canvas = resolveInput(canvasArg);
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement');
        }
        var drawOptions = Object.assign(getDefaultDrawOptions(options), (options || {}));
        var drawLines = Object.assign({ drawLines: false }, (options || {})).drawLines;
        var ctx = getContext2dOrThrow(canvas);
        var lineWidth = drawOptions.lineWidth, _a = drawOptions.color, color = _a === void 0 ? 'blue' : _a;
        var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
        faceLandmarksArray.forEach(function (landmarks) {
            if (drawLines && landmarks instanceof FaceLandmarks68) {
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth;
                drawContour(ctx, landmarks.getJawOutline());
                drawContour(ctx, landmarks.getLeftEyeBrow());
                drawContour(ctx, landmarks.getRightEyeBrow());
                drawContour(ctx, landmarks.getNose());
                drawContour(ctx, landmarks.getLeftEye(), true);
                drawContour(ctx, landmarks.getRightEye(), true);
                drawContour(ctx, landmarks.getMouth(), true);
                return;
            }
            // else draw points
            var ptOffset = lineWidth / 2;
            ctx.fillStyle = color;
            landmarks.positions.forEach(function (pt) { return ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth); });
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
        return __awaiter$1(this, void 0, void 0, function () {
            var canvas, netInput, tensorOrCanvas, _a, ctx, boxes;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        canvas = input;
                        if (!!(input instanceof HTMLCanvasElement)) return [3 /*break*/, 5];
                        return [4 /*yield*/, toNetInput(input)];
                    case 1:
                        netInput = _b.sent();
                        if (netInput.batchSize > 1) {
                            throw new Error('extractFaces - batchSize > 1 not supported');
                        }
                        tensorOrCanvas = netInput.getInput(0);
                        if (!(tensorOrCanvas instanceof HTMLCanvasElement)) return [3 /*break*/, 2];
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
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                if (isTensor4D(imageTensor) && imageTensor.shape[0] > 1) {
                    throw new Error('extractFaceTensors - batchSize > 1 not supported');
                }
                return [2 /*return*/, tidy(function () {
                        var _a = imageTensor.shape.slice(isTensor4D(imageTensor) ? 1 : 0), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                        var boxes = detections.map(function (det) { return det instanceof FaceDetection
                            ? det.forSize(imgWidth, imgHeight).box
                            : det; })
                            .map(function (box) { return box.clipAtImageBorders(imgWidth, imgHeight); });
                        var faceTensors = boxes.map(function (_a) {
                            var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                            return slice3d(imageTensor.as3D(imgHeight, imgWidth, numChannels), [y, x, 0], [height, width, numChannels]);
                        });
                        return faceTensors;
                    })];
            });
        });
    }

    function depthwiseSeparableConv(x, params, stride) {
        return tidy(function () {
            var out = separableConv2d(x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
            out = add(out, params.bias);
            return out;
        });
    }

    function convLayer(x, params, padding, withRelu) {
        if (padding === void 0) { padding = 'same'; }
        if (withRelu === void 0) { withRelu = false; }
        return tidy(function () {
            var out = add(conv2d(x, params.filters, [1, 1], padding), params.bias);
            return withRelu ? relu(out) : out;
        });
    }

    function extractConvParamsFactory(extractWeights, paramMappings) {
        return function (channelsIn, channelsOut, filterSize, mappedPrefix) {
            var filters = tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
            var bias = tensor1d(extractWeights(channelsOut));
            paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
            return { filters: filters, bias: bias };
        };
    }

    function extractFCParamsFactory(extractWeights, paramMappings) {
        return function (channelsIn, channelsOut, mappedPrefix) {
            var fc_weights = tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
            var fc_bias = tensor1d(extractWeights(channelsOut));
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
            var depthwise_filter = tensor4d(extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1]);
            var pointwise_filter = tensor4d(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut]);
            var bias = tensor1d(extractWeights(channelsOut));
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
    function validateTrainConfig(config) {
        if (![config.noObjectScale, config.objectScale, config.coordScale, config.classScale].every(isNumber)) {
            throw new Error("for training you have to specify noObjectScale, objectScale, coordScale, classScale parameters in your config.json file");
        }
        return config;
    }

    var CELL_SIZE = 32;
    var DEFAULT_FILTER_SIZES = [
        3, 16, 32, 64, 128, 256, 512, 1024, 1024
    ];

    function leaky(x) {
        return tidy(function () {
            var min$$1 = mul(x, scalar(0.10000000149011612));
            return add(relu(sub(x, min$$1)), min$$1);
            //return tf.maximum(x, min)
        });
    }

    function convWithBatchNorm(x, params) {
        return tidy(function () {
            var out = pad(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
            out = conv2d(out, params.conv.filters, [1, 1], 'valid');
            out = sub(out, params.bn.sub);
            out = mul(out, params.bn.truediv);
            out = add(out, params.conv.bias);
            return leaky(out);
        });
    }

    function depthwiseSeparableConv$1(x, params) {
        return tidy(function () {
            var out = pad(x, [[0, 0], [1, 1], [1, 1], [0, 0]]);
            out = separableConv2d(out, params.depthwise_filter, params.pointwise_filter, [1, 1], 'valid');
            out = add(out, params.bias);
            return leaky(out);
        });
    }

    function extractorsFactory(extractWeights, paramMappings) {
        var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
        function extractBatchNormParams(size, mappedPrefix) {
            var sub$$1 = tensor1d(extractWeights(size));
            var truediv = tensor1d(extractWeights(size));
            paramMappings.push({ paramPath: mappedPrefix + "/sub" }, { paramPath: mappedPrefix + "/truediv" });
            return { sub: sub$$1, truediv: truediv };
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
    function extractParams(weights, config, boxEncodingSize, filterSizes) {
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var paramMappings = [];
        var _b = extractorsFactory(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractConvWithBatchNormParams = _b.extractConvWithBatchNormParams, extractSeparableConvParams = _b.extractSeparableConvParams;
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

    function extractorsFactory$1(weightMap, paramMappings) {
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
    function loadQuantizedParams(uri, config, defaultModelName) {
        if (defaultModelName === void 0) { defaultModelName = ''; }
        return __awaiter$1(this, void 0, void 0, function () {
            var weightMap, paramMappings, _a, extractConvParams, extractConvWithBatchNormParams, extractSeparableConvParams, params, numFilters;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadWeightMap(uri, defaultModelName)];
                    case 1:
                        weightMap = _b.sent();
                        paramMappings = [];
                        _a = extractorsFactory$1(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractConvWithBatchNormParams = _a.extractConvWithBatchNormParams, extractSeparableConvParams = _a.extractSeparableConvParams;
                        if (config.withSeparableConvs) {
                            numFilters = (config.filterSizes && config.filterSizes.length || 9);
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
                        return [2 /*return*/, { params: params, paramMappings: paramMappings }];
                }
            });
        });
    }

    var TinyYolov2SizeType;
    (function (TinyYolov2SizeType) {
        TinyYolov2SizeType[TinyYolov2SizeType["XS"] = 224] = "XS";
        TinyYolov2SizeType[TinyYolov2SizeType["SM"] = 320] = "SM";
        TinyYolov2SizeType[TinyYolov2SizeType["MD"] = 416] = "MD";
        TinyYolov2SizeType[TinyYolov2SizeType["LG"] = 608] = "LG";
    })(TinyYolov2SizeType || (TinyYolov2SizeType = {}));
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

    var TinyYolov2 = /** @class */ (function (_super) {
        __extends$1(TinyYolov2, _super);
        function TinyYolov2(config) {
            var _this = _super.call(this, 'TinyYolov2') || this;
            validateConfig(config);
            _this._config = config;
            return _this;
        }
        Object.defineProperty(TinyYolov2.prototype, "config", {
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2.prototype, "withClassScores", {
            get: function () {
                return this.config.withClassScores || this.config.classes.length > 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2.prototype, "boxEncodingSize", {
            get: function () {
                return 5 + (this.withClassScores ? this.config.classes.length : 0);
            },
            enumerable: true,
            configurable: true
        });
        TinyYolov2.prototype.runTinyYolov2 = function (x, params) {
            var out = convWithBatchNorm(x, params.conv0);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv1);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv2);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv3);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv4);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm(out, params.conv5);
            out = maxPool(out, [2, 2], [1, 1], 'same');
            out = convWithBatchNorm(out, params.conv6);
            out = convWithBatchNorm(out, params.conv7);
            return convLayer(out, params.conv8, 'valid', false);
        };
        TinyYolov2.prototype.runMobilenet = function (x, params) {
            var out = this.config.isFirstLayerConv2d
                ? leaky(convLayer(x, params.conv0, 'valid', false))
                : depthwiseSeparableConv$1(x, params.conv0);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv$1(out, params.conv1);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv$1(out, params.conv2);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv$1(out, params.conv3);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv$1(out, params.conv4);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = depthwiseSeparableConv$1(out, params.conv5);
            out = maxPool(out, [2, 2], [1, 1], 'same');
            out = params.conv6 ? depthwiseSeparableConv$1(out, params.conv6) : out;
            out = params.conv7 ? depthwiseSeparableConv$1(out, params.conv7) : out;
            return convLayer(out, params.conv8, 'valid', false);
        };
        TinyYolov2.prototype.forwardInput = function (input, inputSize) {
            var _this = this;
            var params = this.params;
            if (!params) {
                throw new Error('TinyYolov2 - load model before inference');
            }
            return tidy(function () {
                var batchTensor = input.toBatchTensor(inputSize, false).toFloat();
                batchTensor = _this.config.meanRgb
                    ? normalize(batchTensor, _this.config.meanRgb)
                    : batchTensor;
                batchTensor = batchTensor.div(scalar(256));
                return _this.config.withSeparableConvs
                    ? _this.runMobilenet(batchTensor, params)
                    : _this.runTinyYolov2(batchTensor, params);
            });
        };
        TinyYolov2.prototype.forward = function (input, inputSize) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
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
        TinyYolov2.prototype.detect = function (input, forwardParams) {
            if (forwardParams === void 0) { forwardParams = {}; }
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                var _a, inputSize, scoreThreshold, netInput, out, out0, inputDimensions, results, boxes, scores, classScores, classNames, indices, detections;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = new TinyYolov2Options(forwardParams), inputSize = _a.inputSize, scoreThreshold = _a.scoreThreshold;
                            return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _b.sent();
                            return [4 /*yield*/, this.forwardInput(netInput, inputSize)];
                        case 2:
                            out = _b.sent();
                            out0 = tidy(function () { return unstack(out)[0].expandDims(); });
                            inputDimensions = {
                                width: netInput.getInputWidth(0),
                                height: netInput.getInputHeight(0)
                            };
                            results = this.extractBoxes(out0, netInput.getReshapedInputDimensions(0), scoreThreshold);
                            out.dispose();
                            out0.dispose();
                            boxes = results.map(function (res) { return res.box; });
                            scores = results.map(function (res) { return res.score; });
                            classScores = results.map(function (res) { return res.classScore; });
                            classNames = results.map(function (res) { return _this.config.classes[res.label]; });
                            indices = nonMaxSuppression$1(boxes.map(function (box) { return box.rescale(inputSize); }), scores, this.config.iouThreshold, true);
                            detections = indices.map(function (idx) {
                                return new ObjectDetection(scores[idx], classScores[idx], classNames[idx], boxes[idx], inputDimensions);
                            });
                            return [2 /*return*/, detections];
                    }
                });
            });
        };
        TinyYolov2.prototype.loadQuantizedParams = function (modelUri, defaultModelName) {
            if (defaultModelName === void 0) { defaultModelName = ''; }
            if (!modelUri) {
                throw new Error('loadQuantizedParams - please specify the modelUri');
            }
            return loadQuantizedParams(modelUri, this.config, defaultModelName);
        };
        TinyYolov2.prototype.extractParams = function (weights) {
            var filterSizes = this.config.filterSizes || DEFAULT_FILTER_SIZES;
            var numFilters = filterSizes ? filterSizes.length : undefined;
            if (numFilters !== 7 && numFilters !== 8 && numFilters !== 9) {
                throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + numFilters + " filterSizes in config");
            }
            return extractParams(weights, this.config, this.boxEncodingSize, filterSizes);
        };
        TinyYolov2.prototype.extractBoxes = function (outputTensor, inputBlobDimensions, scoreThreshold) {
            var _this = this;
            var width = inputBlobDimensions.width, height = inputBlobDimensions.height;
            var inputSize = Math.max(width, height);
            var correctionFactorX = inputSize / width;
            var correctionFactorY = inputSize / height;
            var numCells = outputTensor.shape[1];
            var numBoxes = this.config.anchors.length;
            var _a = tidy(function () {
                var reshaped = outputTensor.reshape([numCells, numCells, numBoxes, _this.boxEncodingSize]);
                var boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, numBoxes, 4]);
                var scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, numBoxes, 1]);
                var classScores = _this.withClassScores
                    ? softmax(reshaped.slice([0, 0, 0, 5], [numCells, numCells, numBoxes, _this.config.classes.length]), 3)
                    : scalar(0);
                return [boxes, scores, classScores];
            }), boxesTensor = _a[0], scoresTensor = _a[1], classScoresTensor = _a[2];
            var results = [];
            for (var row = 0; row < numCells; row++) {
                for (var col = 0; col < numCells; col++) {
                    for (var anchor = 0; anchor < numBoxes; anchor++) {
                        var score = sigmoid$1(scoresTensor.get(row, col, anchor, 0));
                        if (!scoreThreshold || score > scoreThreshold) {
                            var ctX = ((col + sigmoid$1(boxesTensor.get(row, col, anchor, 0))) / numCells) * correctionFactorX;
                            var ctY = ((row + sigmoid$1(boxesTensor.get(row, col, anchor, 1))) / numCells) * correctionFactorY;
                            var width_1 = ((Math.exp(boxesTensor.get(row, col, anchor, 2)) * this.config.anchors[anchor].x) / numCells) * correctionFactorX;
                            var height_1 = ((Math.exp(boxesTensor.get(row, col, anchor, 3)) * this.config.anchors[anchor].y) / numCells) * correctionFactorY;
                            var x = (ctX - (width_1 / 2));
                            var y = (ctY - (height_1 / 2));
                            var pos = { row: row, col: col, anchor: anchor };
                            var _b = this.withClassScores
                                ? this.extractPredictedClass(classScoresTensor, pos)
                                : { classScore: 1, label: 0 }, classScore = _b.classScore, label = _b.label;
                            results.push(__assign$1({ box: new BoundingBox(x, y, x + width_1, y + height_1), score: score, classScore: score * classScore, label: label }, pos));
                        }
                    }
                }
            }
            boxesTensor.dispose();
            scoresTensor.dispose();
            classScoresTensor.dispose();
            return results;
        };
        TinyYolov2.prototype.extractPredictedClass = function (classesTensor, pos) {
            var row = pos.row, col = pos.col, anchor = pos.anchor;
            return Array(this.config.classes.length).fill(0)
                .map(function (_, i) { return classesTensor.get(row, col, anchor, i); })
                .map(function (classScore, label) { return ({
                classScore: classScore,
                label: label
            }); })
                .reduce(function (max$$1, curr) { return max$$1.classScore > curr.classScore ? max$$1 : curr; });
        };
        return TinyYolov2;
    }(NeuralNetwork));

    var TinyYolov2LossFunction = /** @class */ (function () {
        function TinyYolov2LossFunction(outputTensor, groundTruth, predictedBoxes, reshapedImgDims, config) {
            this._config = config;
            this._reshapedImgDims = reshapedImgDims;
            this._outputTensor = outputTensor;
            this._predictedBoxes = predictedBoxes;
            this.validateGroundTruthBoxes(groundTruth);
            this._groundTruth = this.assignGroundTruthToAnchors(groundTruth);
            var groundTruthMask = this.createGroundTruthMask();
            var _a = this.createCoordAndScoreMasks(), coordBoxOffsetMask = _a.coordBoxOffsetMask, coordBoxSizeMask = _a.coordBoxSizeMask, scoreMask = _a.scoreMask;
            this.noObjectLossMask = tidy(function () { return mul(scoreMask, sub(scalar(1), groundTruthMask)); });
            this.objectLossMask = tidy(function () { return mul(scoreMask, groundTruthMask); });
            this.coordBoxOffsetMask = tidy(function () { return mul(coordBoxOffsetMask, groundTruthMask); });
            this.coordBoxSizeMask = tidy(function () { return mul(coordBoxSizeMask, groundTruthMask); });
            var classScoresMask = tidy(function () { return sub(scalar(1), coordBoxOffsetMask.add(coordBoxSizeMask).add(scoreMask)); });
            this.groundTruthClassScoresMask = tidy(function () { return mul(classScoresMask, groundTruthMask); });
        }
        Object.defineProperty(TinyYolov2LossFunction.prototype, "config", {
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "reshapedImgDims", {
            get: function () {
                return this._reshapedImgDims;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "outputTensor", {
            get: function () {
                return this._outputTensor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "groundTruth", {
            get: function () {
                return this._groundTruth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "predictedBoxes", {
            get: function () {
                return this._predictedBoxes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "inputSize", {
            get: function () {
                return Math.max(this.reshapedImgDims.width, this.reshapedImgDims.height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "withClassScores", {
            get: function () {
                return this._config.withClassScores || this._config.classes.length > 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "boxEncodingSize", {
            get: function () {
                return 5 + (this.withClassScores ? this._config.classes.length : 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "anchors", {
            get: function () {
                return this._config.anchors;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "numBoxes", {
            get: function () {
                return this.anchors.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "numCells", {
            get: function () {
                return this.inputSize / CELL_SIZE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2LossFunction.prototype, "gridCellEncodingSize", {
            get: function () {
                return this.boxEncodingSize * this.numBoxes;
            },
            enumerable: true,
            configurable: true
        });
        TinyYolov2LossFunction.prototype.toOutputTensorShape = function (tensor$$1) {
            var _this = this;
            return tidy(function () { return tensor$$1.reshape([1, _this.numCells, _this.numCells, _this.gridCellEncodingSize]); });
        };
        TinyYolov2LossFunction.prototype.computeLoss = function () {
            var _this = this;
            return tidy(function () {
                var noObjectLoss = _this.computeNoObjectLoss();
                var objectLoss = _this.computeObjectLoss();
                var coordLoss = _this.computeCoordLoss();
                var classLoss = _this.withClassScores
                    ? _this.computeClassLoss()
                    : scalar(0);
                var totalLoss = tidy(function () { return noObjectLoss.add(objectLoss).add(coordLoss).add(classLoss); });
                return {
                    noObjectLoss: noObjectLoss,
                    objectLoss: objectLoss,
                    coordLoss: coordLoss,
                    classLoss: classLoss,
                    totalLoss: totalLoss
                };
            });
        };
        TinyYolov2LossFunction.prototype.computeNoObjectLoss = function () {
            var _this = this;
            return tidy(function () {
                return _this.computeLossTerm(_this.config.noObjectScale, _this.toOutputTensorShape(_this.noObjectLossMask), sigmoid(_this.outputTensor));
            });
        };
        TinyYolov2LossFunction.prototype.computeObjectLoss = function () {
            var _this = this;
            return tidy(function () {
                return _this.computeLossTerm(_this.config.objectScale, _this.toOutputTensorShape(_this.objectLossMask), sub(_this.toOutputTensorShape(_this.computeIous()), sigmoid(_this.outputTensor)));
            });
        };
        TinyYolov2LossFunction.prototype.computeClassLoss = function () {
            var _this = this;
            return tidy(function () {
                var classLossTensor = tidy(function () {
                    var predClassScores = mul(softmax(_this.outputTensor.reshape([_this.numCells, _this.numCells, _this.numBoxes, _this.boxEncodingSize]), 3), _this.groundTruthClassScoresMask);
                    var gtClassScores = _this.createOneHotClassScoreMask();
                    return sub(gtClassScores, predClassScores);
                });
                return _this.computeLossTerm(_this.config.classScale, scalar(1), classLossTensor);
            });
        };
        TinyYolov2LossFunction.prototype.computeCoordLoss = function () {
            var _this = this;
            return tidy(function () {
                return _this.computeLossTerm(_this.config.coordScale, scalar(1), add(_this.computeCoordBoxOffsetError(), _this.computeCoordBoxSizeError()));
            });
        };
        TinyYolov2LossFunction.prototype.computeCoordBoxOffsetError = function () {
            var _this = this;
            return tidy(function () {
                var mask = _this.toOutputTensorShape(_this.coordBoxOffsetMask);
                var gtBoxOffsets = mul(mask, _this.toOutputTensorShape(_this.computeCoordBoxOffsets()));
                var predBoxOffsets = mul(mask, sigmoid(_this.outputTensor));
                return sub(gtBoxOffsets, predBoxOffsets);
            });
        };
        TinyYolov2LossFunction.prototype.computeCoordBoxSizeError = function () {
            var _this = this;
            return tidy(function () {
                var mask = _this.toOutputTensorShape(_this.coordBoxSizeMask);
                var gtBoxSizes = mul(mask, _this.toOutputTensorShape(_this.computeCoordBoxSizes()));
                var predBoxSizes = mul(mask, _this.outputTensor);
                return sub(gtBoxSizes, predBoxSizes);
            });
        };
        TinyYolov2LossFunction.prototype.computeLossTerm = function (scale, mask, lossTensor) {
            var _this = this;
            return tidy(function () { return mul(scalar(scale), _this.squaredSumOverMask(mask, lossTensor)); });
        };
        TinyYolov2LossFunction.prototype.squaredSumOverMask = function (mask, lossTensor) {
            return tidy(function () { return sum(square(mul(mask, lossTensor))); });
        };
        TinyYolov2LossFunction.prototype.validateGroundTruthBoxes = function (groundTruth) {
            var _this = this;
            groundTruth.forEach(function (_a) {
                var x = _a.x, y = _a.y, width = _a.width, height = _a.height, label = _a.label;
                if (typeof label !== 'number' || label < 0 || label > (_this.config.classes.length - 1)) {
                    throw new Error("invalid ground truth data, expected label to be a number in [0, " + (_this.config.classes.length - 1) + "]");
                }
                if (x < 0 || x > 1 || y < 0 || y > 1 || width < 0 || (x + width) > 1 || height < 0 || (y + height) > 1) {
                    throw new Error("invalid ground truth data, box is out of image boundaries " + JSON.stringify({ x: x, y: y, width: width, height: height }));
                }
            });
        };
        TinyYolov2LossFunction.prototype.assignGroundTruthToAnchors = function (groundTruth) {
            var _this = this;
            var groundTruthBoxes = groundTruth
                .map(function (_a) {
                var x = _a.x, y = _a.y, width = _a.width, height = _a.height, label = _a.label;
                return ({
                    box: new Rect(x, y, width, height),
                    label: label
                });
            });
            return groundTruthBoxes.map(function (_a) {
                var box = _a.box, label = _a.label;
                var _b = box.rescale(_this.reshapedImgDims), left = _b.left, top = _b.top, bottom = _b.bottom, right = _b.right, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
                var ctX = left + (width / 2);
                var ctY = top + (height / 2);
                var col = Math.floor((ctX / _this.inputSize) * _this.numCells);
                var row = Math.floor((ctY / _this.inputSize) * _this.numCells);
                var anchorsByIou = _this.anchors.map(function (anchor, idx) { return ({
                    idx: idx,
                    iou: iou(new BoundingBox(0, 0, anchor.x * CELL_SIZE, anchor.y * CELL_SIZE), new BoundingBox(0, 0, width, height))
                }); }).sort(function (a1, a2) { return a2.iou - a1.iou; });
                var anchor = anchorsByIou[0].idx;
                return { row: row, col: col, anchor: anchor, box: box, label: label };
            });
        };
        TinyYolov2LossFunction.prototype.createGroundTruthMask = function () {
            var _this = this;
            var mask = zeros([this.numCells, this.numCells, this.numBoxes, this.boxEncodingSize]);
            var buf = mask.buffer();
            this.groundTruth.forEach(function (_a) {
                var row = _a.row, col = _a.col, anchor = _a.anchor;
                for (var i = 0; i < _this.boxEncodingSize; i++) {
                    buf.set(1, row, col, anchor, i);
                }
            });
            return mask;
        };
        TinyYolov2LossFunction.prototype.createCoordAndScoreMasks = function () {
            var _this = this;
            return tidy(function () {
                var coordBoxOffsetMask = zeros([_this.numCells, _this.numCells, _this.numBoxes, _this.boxEncodingSize]);
                var coordBoxSizeMask = zeros([_this.numCells, _this.numCells, _this.numBoxes, _this.boxEncodingSize]);
                var scoreMask = zeros([_this.numCells, _this.numCells, _this.numBoxes, _this.boxEncodingSize]);
                var coordBoxOffsetBuf = coordBoxOffsetMask.buffer();
                var coordBoxSizeBuf = coordBoxSizeMask.buffer();
                var scoreBuf = scoreMask.buffer();
                for (var row = 0; row < _this.numCells; row++) {
                    for (var col = 0; col < _this.numCells; col++) {
                        for (var anchor = 0; anchor < _this.numBoxes; anchor++) {
                            coordBoxOffsetBuf.set(1, row, col, anchor, 0);
                            coordBoxOffsetBuf.set(1, row, col, anchor, 1);
                            coordBoxSizeBuf.set(1, row, col, anchor, 2);
                            coordBoxSizeBuf.set(1, row, col, anchor, 3);
                            scoreBuf.set(1, row, col, anchor, 4);
                        }
                    }
                }
                return { coordBoxOffsetMask: coordBoxOffsetMask, coordBoxSizeMask: coordBoxSizeMask, scoreMask: scoreMask };
            });
        };
        TinyYolov2LossFunction.prototype.createOneHotClassScoreMask = function () {
            var mask = zeros([this.numCells, this.numCells, this.numBoxes, this.boxEncodingSize]);
            var buf = mask.buffer();
            var classValuesOffset = 5;
            this.groundTruth.forEach(function (_a) {
                var row = _a.row, col = _a.col, anchor = _a.anchor, label = _a.label;
                buf.set(1, row, col, anchor, classValuesOffset + label);
            });
            return mask;
        };
        TinyYolov2LossFunction.prototype.computeIous = function () {
            var _this = this;
            var isSameAnchor = function (p1) { return function (p2) {
                return p1.row === p2.row
                    && p1.col === p2.col
                    && p1.anchor === p2.anchor;
            }; };
            var ious = zeros([this.numCells, this.numCells, this.gridCellEncodingSize]);
            var buf = ious.buffer();
            this.groundTruth.forEach(function (_a) {
                var row = _a.row, col = _a.col, anchor = _a.anchor, box = _a.box;
                var predBox = _this.predictedBoxes.find(isSameAnchor({ row: row, col: col, anchor: anchor }));
                if (!predBox) {
                    throw new Error("no output box found for: row " + row + ", col " + col + ", anchor " + anchor);
                }
                var boxIou = iou(box.rescale(_this.reshapedImgDims), predBox.box.rescale(_this.reshapedImgDims));
                var anchorOffset = _this.boxEncodingSize * anchor;
                var scoreValueOffset = 4;
                buf.set(boxIou, row, col, anchorOffset + scoreValueOffset);
            });
            return ious;
        };
        TinyYolov2LossFunction.prototype.computeCoordBoxOffsets = function () {
            var _this = this;
            var offsets = zeros([this.numCells, this.numCells, this.numBoxes, this.boxEncodingSize]);
            var buf = offsets.buffer();
            this.groundTruth.forEach(function (_a) {
                var row = _a.row, col = _a.col, anchor = _a.anchor, box = _a.box;
                var _b = box.rescale(_this.reshapedImgDims), left = _b.left, top = _b.top, right = _b.right, bottom = _b.bottom;
                var centerX = (left + right) / 2;
                var centerY = (top + bottom) / 2;
                var dCenterX = centerX - (col * CELL_SIZE);
                var dCenterY = centerY - (row * CELL_SIZE);
                // inverseSigmoid(0) === -Infinity, inverseSigmoid(1) === Infinity
                //const dx = inverseSigmoid(Math.min(0.999, Math.max(0.001, dCenterX / CELL_SIZE)))
                //const dy = inverseSigmoid(Math.min(0.999, Math.max(0.001, dCenterY / CELL_SIZE)))
                var dx = dCenterX / CELL_SIZE;
                var dy = dCenterY / CELL_SIZE;
                buf.set(dx, row, col, anchor, 0);
                buf.set(dy, row, col, anchor, 1);
            });
            return offsets;
        };
        TinyYolov2LossFunction.prototype.computeCoordBoxSizes = function () {
            var _this = this;
            var sizes = zeros([this.numCells, this.numCells, this.numBoxes, this.boxEncodingSize]);
            var buf = sizes.buffer();
            this.groundTruth.forEach(function (_a) {
                var row = _a.row, col = _a.col, anchor = _a.anchor, box = _a.box;
                var _b = box.rescale(_this.reshapedImgDims), width = _b.width, height = _b.height;
                var dw = Math.log(width / (_this.anchors[anchor].x * CELL_SIZE));
                var dh = Math.log(height / (_this.anchors[anchor].y * CELL_SIZE));
                buf.set(dw, row, col, anchor, 2);
                buf.set(dh, row, col, anchor, 3);
            });
            return sizes;
        };
        return TinyYolov2LossFunction;
    }());

    function getDefaultBackwardOptions(options) {
        return Object.assign({}, {
            minBoxSize: CELL_SIZE
        }, options);
    }

    var TinyYolov2Trainable = /** @class */ (function (_super) {
        __extends$1(TinyYolov2Trainable, _super);
        function TinyYolov2Trainable(trainableConfig, optimizer) {
            var _this = _super.call(this, trainableConfig) || this;
            _this._trainableConfig = validateTrainConfig(trainableConfig);
            _this._optimizer = optimizer;
            return _this;
        }
        Object.defineProperty(TinyYolov2Trainable.prototype, "trainableConfig", {
            get: function () {
                return this._trainableConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2Trainable.prototype, "optimizer", {
            get: function () {
                return this._optimizer;
            },
            enumerable: true,
            configurable: true
        });
        TinyYolov2Trainable.prototype.backward = function (img, groundTruth, inputSize, options) {
            if (options === void 0) { options = {}; }
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                var _a, minBoxSize, reportLosses, reshapedImgDims, filteredGroundTruthBoxes, netInput, loss;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = getDefaultBackwardOptions(options), minBoxSize = _a.minBoxSize, reportLosses = _a.reportLosses;
                            reshapedImgDims = computeReshapedDimensions(getMediaDimensions(img), inputSize);
                            filteredGroundTruthBoxes = this.filterGroundTruthBoxes(groundTruth, reshapedImgDims, minBoxSize);
                            if (!filteredGroundTruthBoxes.length) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, toNetInput(imageToSquare(img, inputSize))];
                        case 1:
                            netInput = _b.sent();
                            loss = this.optimizer.minimize(function () {
                                var _a = _this.computeLoss(_this.forwardInput(netInput, inputSize), filteredGroundTruthBoxes, reshapedImgDims), noObjectLoss = _a.noObjectLoss, objectLoss = _a.objectLoss, coordLoss = _a.coordLoss, classLoss = _a.classLoss, totalLoss = _a.totalLoss;
                                if (reportLosses) {
                                    var losses = {
                                        totalLoss: totalLoss.dataSync()[0],
                                        noObjectLoss: noObjectLoss.dataSync()[0],
                                        objectLoss: objectLoss.dataSync()[0],
                                        coordLoss: coordLoss.dataSync()[0],
                                        classLoss: classLoss.dataSync()[0]
                                    };
                                    var report = {
                                        losses: losses,
                                        numBoxes: filteredGroundTruthBoxes.length,
                                        inputSize: inputSize
                                    };
                                    reportLosses(report);
                                }
                                return totalLoss;
                            }, true);
                            return [2 /*return*/, loss];
                    }
                });
            });
        };
        TinyYolov2Trainable.prototype.computeLoss = function (outputTensor, groundTruth, reshapedImgDims) {
            var config = validateTrainConfig(this.config);
            var inputSize = Math.max(reshapedImgDims.width, reshapedImgDims.height);
            if (!inputSize) {
                throw new Error("computeLoss - invalid inputSize: " + inputSize);
            }
            var predictedBoxes = this.extractBoxes(outputTensor, reshapedImgDims);
            return tidy(function () {
                var lossFunction = new TinyYolov2LossFunction(outputTensor, groundTruth, predictedBoxes, reshapedImgDims, config);
                return lossFunction.computeLoss();
            });
        };
        TinyYolov2Trainable.prototype.filterGroundTruthBoxes = function (groundTruth, imgDims, minBoxSize) {
            var imgHeight = imgDims.height, imgWidth = imgDims.width;
            return groundTruth.filter(function (_a) {
                var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                var box = (new Rect(x, y, width, height))
                    .rescale({ height: imgHeight, width: imgWidth });
                var isTooTiny = box.width < minBoxSize || box.height < minBoxSize;
                return !isTooTiny;
            });
        };
        TinyYolov2Trainable.prototype.load = function (weightsOrUrl) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, _super.prototype.load.call(this, weightsOrUrl)];
                        case 1:
                            _a.sent();
                            this.variable();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return TinyYolov2Trainable;
    }(TinyYolov2));

    function extractorsFactory$2(extractWeights, paramMappings) {
        function extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix) {
            var depthwise_filter = tensor4d(extractWeights(3 * 3 * channelsIn), [3, 3, channelsIn, 1]);
            var pointwise_filter = tensor4d(extractWeights(channelsIn * channelsOut), [1, 1, channelsIn, channelsOut]);
            var bias = tensor1d(extractWeights(channelsOut));
            paramMappings.push({ paramPath: mappedPrefix + "/depthwise_filter" }, { paramPath: mappedPrefix + "/pointwise_filter" }, { paramPath: mappedPrefix + "/bias" });
            return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
        }
        function extractFCParams(channelsIn, channelsOut, mappedPrefix) {
            var weights = tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
            var bias = tensor1d(extractWeights(channelsOut));
            paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
            return {
                weights: weights,
                bias: bias
            };
        }
        var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
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
            extractDenseBlock4Params: extractDenseBlock4Params,
            extractFCParams: extractFCParams
        };
    }

    function extractParams$1(weights) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var _b = extractorsFactory$2(extractWeights, paramMappings), extractDenseBlock4Params = _b.extractDenseBlock4Params, extractFCParams = _b.extractFCParams;
        var dense0 = extractDenseBlock4Params(3, 32, 'dense0', true);
        var dense1 = extractDenseBlock4Params(32, 64, 'dense1');
        var dense2 = extractDenseBlock4Params(64, 128, 'dense2');
        var dense3 = extractDenseBlock4Params(128, 256, 'dense3');
        var fc = extractFCParams(256, 136, 'fc');
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            paramMappings: paramMappings,
            params: { dense0: dense0, dense1: dense1, dense2: dense2, dense3: dense3, fc: fc }
        };
    }

    var FaceLandmark68NetBase = /** @class */ (function (_super) {
        __extends$1(FaceLandmark68NetBase, _super);
        function FaceLandmark68NetBase(_name) {
            var _this = _super.call(this, _name) || this;
            _this.__name = _name;
            return _this;
        }
        FaceLandmark68NetBase.prototype.runNet = function (_) {
            throw new Error(this.__name + " - runNet not implemented");
        };
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
            return tidy(function () {
                var createInterleavedTensor = function (fillX, fillY) {
                    return stack([
                        fill([68], fillX),
                        fill([68], fillY)
                    ], 1).as2D(1, 136).as1D();
                };
                var getPadding = function (batchIdx, cond) {
                    var _a = inputDimensions[batchIdx], width = _a.width, height = _a.height;
                    return cond(width, height) ? Math.abs(width - height) / 2 : 0;
                };
                var getPaddingX = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return w < h; }); };
                var getPaddingY = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return h < w; }); };
                var landmarkTensors = output
                    .mul(fill([batchSize, 136], inputSize))
                    .sub(stack(Array.from(Array(batchSize), function (_, batchIdx) {
                    return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
                })))
                    .div(stack(Array.from(Array(batchSize), function (_, batchIdx) {
                    return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
                })));
                return landmarkTensors;
            });
        };
        FaceLandmark68NetBase.prototype.forwardInput = function (input) {
            var _this = this;
            return tidy(function () {
                var out = _this.runNet(input);
                return _this.postProcess(out, input.inputSize, input.inputDimensions.map(function (_a) {
                    var height = _a[0], width = _a[1];
                    return ({ height: height, width: width });
                }));
            });
        };
        FaceLandmark68NetBase.prototype.forward = function (input) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
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
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                var netInput, landmarkTensors, landmarksForBatch;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _a.sent();
                            landmarkTensors = tidy(function () { return unstack(_this.forwardInput(netInput)); });
                            return [4 /*yield*/, Promise.all(landmarkTensors.map(function (landmarkTensor, batchIdx) { return __awaiter$1(_this, void 0, void 0, function () {
                                    var landmarksArray, _a, _b, xCoords, yCoords;
                                    return __generator$1(this, function (_c) {
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
        return FaceLandmark68NetBase;
    }(NeuralNetwork));

    function fullyConnectedLayer(x, params) {
        return tidy(function () {
            return add(matMul(x, params.weights), params.bias);
        });
    }

    function loadParamsFactory(weightMap, paramMappings) {
        var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
        function extractConvParams(prefix) {
            var filters = extractWeightEntry(prefix + "/filters", 4);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { filters: filters, bias: bias };
        }
        function extractSeparableConvParams(prefix) {
            var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
            var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return new SeparableConvParams(depthwise_filter, pointwise_filter, bias);
        }
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
        function extractFcParams(prefix) {
            var weights = extractWeightEntry(prefix + "/weights", 2);
            var bias = extractWeightEntry(prefix + "/bias", 1);
            return { weights: weights, bias: bias };
        }
        return {
            extractDenseBlock3Params: extractDenseBlock3Params,
            extractDenseBlock4Params: extractDenseBlock4Params,
            extractFcParams: extractFcParams
        };
    }

    var DEFAULT_MODEL_NAME = 'face_landmark_68_model';
    function loadQuantizedParams$1(uri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var weightMap, paramMappings, _a, extractDenseBlock4Params, extractFcParams, params;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME)];
                    case 1:
                        weightMap = _b.sent();
                        paramMappings = [];
                        _a = loadParamsFactory(weightMap, paramMappings), extractDenseBlock4Params = _a.extractDenseBlock4Params, extractFcParams = _a.extractFcParams;
                        params = {
                            dense0: extractDenseBlock4Params('dense0', true),
                            dense1: extractDenseBlock4Params('dense1'),
                            dense2: extractDenseBlock4Params('dense2'),
                            dense3: extractDenseBlock4Params('dense3'),
                            fc: extractFcParams('fc')
                        };
                        disposeUnusedWeightTensors(weightMap, paramMappings);
                        return [2 /*return*/, { params: params, paramMappings: paramMappings }];
                }
            });
        });
    }

    function denseBlock(x, denseBlockParams, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        return tidy(function () {
            var out1 = relu(isFirstLayer
                ? add(conv2d(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
                : depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
            var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
            var in3 = relu(add(out1, out2));
            var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
            var in4 = relu(add(out1, add(out2, out3)));
            var out4 = depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1]);
            return relu(add(out1, add(out2, add(out3, out4))));
        });
    }
    var FaceLandmark68Net = /** @class */ (function (_super) {
        __extends$1(FaceLandmark68Net, _super);
        function FaceLandmark68Net() {
            return _super.call(this, 'FaceLandmark68Net') || this;
        }
        FaceLandmark68Net.prototype.runNet = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('FaceLandmark68Net - load model before inference');
            }
            return tidy(function () {
                var batchTensor = input.toBatchTensor(112, true);
                var meanRgb = [122.782, 117.001, 104.298];
                var normalized = normalize(batchTensor, meanRgb).div(scalar(255));
                var out = denseBlock(normalized, params.dense0, true);
                out = denseBlock(out, params.dense1);
                out = denseBlock(out, params.dense2);
                out = denseBlock(out, params.dense3);
                out = avgPool(out, [7, 7], [2, 2], 'valid');
                return fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc);
            });
        };
        FaceLandmark68Net.prototype.loadQuantizedParams = function (uri) {
            return loadQuantizedParams$1(uri);
        };
        FaceLandmark68Net.prototype.extractParams = function (weights) {
            return extractParams$1(weights);
        };
        return FaceLandmark68Net;
    }(FaceLandmark68NetBase));

    function extractParamsTiny(weights) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var _b = extractorsFactory$2(extractWeights, paramMappings), extractDenseBlock3Params = _b.extractDenseBlock3Params, extractFCParams = _b.extractFCParams;
        var dense0 = extractDenseBlock3Params(3, 32, 'dense0', true);
        var dense1 = extractDenseBlock3Params(32, 64, 'dense1');
        var dense2 = extractDenseBlock3Params(64, 128, 'dense2');
        var fc = extractFCParams(128, 136, 'fc');
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return {
            paramMappings: paramMappings,
            params: { dense0: dense0, dense1: dense1, dense2: dense2, fc: fc }
        };
    }

    var DEFAULT_MODEL_NAME$1 = 'face_landmark_68_tiny_model';
    function loadQuantizedParamsTiny(uri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var weightMap, paramMappings, _a, extractDenseBlock3Params, extractFcParams, params;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME$1)];
                    case 1:
                        weightMap = _b.sent();
                        paramMappings = [];
                        _a = loadParamsFactory(weightMap, paramMappings), extractDenseBlock3Params = _a.extractDenseBlock3Params, extractFcParams = _a.extractFcParams;
                        params = {
                            dense0: extractDenseBlock3Params('dense0', true),
                            dense1: extractDenseBlock3Params('dense1'),
                            dense2: extractDenseBlock3Params('dense2'),
                            fc: extractFcParams('fc')
                        };
                        disposeUnusedWeightTensors(weightMap, paramMappings);
                        return [2 /*return*/, { params: params, paramMappings: paramMappings }];
                }
            });
        });
    }

    function denseBlock$1(x, denseBlockParams, isFirstLayer) {
        if (isFirstLayer === void 0) { isFirstLayer = false; }
        return tidy(function () {
            var out1 = relu(isFirstLayer
                ? add(conv2d(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
                : depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
            var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
            var in3 = relu(add(out1, out2));
            var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
            return relu(add(out1, add(out2, out3)));
        });
    }
    var FaceLandmark68TinyNet = /** @class */ (function (_super) {
        __extends$1(FaceLandmark68TinyNet, _super);
        function FaceLandmark68TinyNet() {
            return _super.call(this, 'FaceLandmark68TinyNet') || this;
        }
        FaceLandmark68TinyNet.prototype.runNet = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('FaceLandmark68TinyNet - load model before inference');
            }
            return tidy(function () {
                var batchTensor = input.toBatchTensor(112, true);
                var meanRgb = [122.782, 117.001, 104.298];
                var normalized = normalize(batchTensor, meanRgb).div(scalar(255));
                var out = denseBlock$1(normalized, params.dense0, true);
                out = denseBlock$1(out, params.dense1);
                out = denseBlock$1(out, params.dense2);
                out = avgPool(out, [14, 14], [2, 2], 'valid');
                return fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc);
            });
        };
        FaceLandmark68TinyNet.prototype.loadQuantizedParams = function (uri) {
            return loadQuantizedParamsTiny(uri);
        };
        FaceLandmark68TinyNet.prototype.extractParams = function (weights) {
            return extractParamsTiny(weights);
        };
        return FaceLandmark68TinyNet;
    }(FaceLandmark68NetBase));

    var FaceLandmarkNet = /** @class */ (function (_super) {
        __extends$1(FaceLandmarkNet, _super);
        function FaceLandmarkNet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FaceLandmarkNet;
    }(FaceLandmark68Net));
    function createFaceLandmarkNet(weights) {
        var net = new FaceLandmarkNet();
        net.extractWeights(weights);
        return net;
    }

    function scale(x, params) {
        return add(mul(x, params.weights), params.biases);
    }

    function convLayer$1(x, params, strides, withRelu, padding) {
        if (padding === void 0) { padding = 'same'; }
        var _a = params.conv, filters = _a.filters, bias = _a.bias;
        var out = conv2d(x, filters, strides, padding);
        out = add(out, bias);
        out = scale(out, params.scale);
        return withRelu ? relu(out) : out;
    }
    function conv(x, params) {
        return convLayer$1(x, params, [1, 1], true);
    }
    function convNoRelu(x, params) {
        return convLayer$1(x, params, [1, 1], false);
    }
    function convDown(x, params) {
        return convLayer$1(x, params, [2, 2], true, 'valid');
    }

    function extractorsFactory$3(extractWeights, paramMappings) {
        function extractFilterValues(numFilterValues, numFilters, filterSize) {
            var weights = extractWeights(numFilterValues);
            var depth = weights.length / (numFilters * filterSize * filterSize);
            if (isFloat(depth)) {
                throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
            }
            return tidy(function () { return transpose(tensor4d(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]); });
        }
        function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
            var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
            var bias = tensor1d(extractWeights(numFilters));
            paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
            return { filters: filters, bias: bias };
        }
        function extractScaleLayerParams(numWeights, mappedPrefix) {
            var weights = tensor1d(extractWeights(numWeights));
            var biases = tensor1d(extractWeights(numWeights));
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
    function extractParams$2(weights) {
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var paramMappings = [];
        var _b = extractorsFactory$3(extractWeights, paramMappings), extractConvLayerParams = _b.extractConvLayerParams, extractResidualLayerParams = _b.extractResidualLayerParams;
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
        var fc = tidy(function () { return transpose(tensor2d(extractWeights(256 * 128), [128, 256]), [1, 0]); });
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

    var DEFAULT_MODEL_NAME$2 = 'face_recognition_model';
    function extractorsFactory$4(weightMap, paramMappings) {
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
    function loadQuantizedParams$2(uri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var weightMap, paramMappings, _a, extractConvLayerParams, extractResidualLayerParams, conv32_down, conv32_1, conv32_2, conv32_3, conv64_down, conv64_1, conv64_2, conv64_3, conv128_down, conv128_1, conv128_2, conv256_down, conv256_1, conv256_2, conv256_down_out, fc, params;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME$2)];
                    case 1:
                        weightMap = _b.sent();
                        paramMappings = [];
                        _a = extractorsFactory$4(weightMap, paramMappings), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
                        conv32_down = extractConvLayerParams('conv32_down');
                        conv32_1 = extractResidualLayerParams('conv32_1');
                        conv32_2 = extractResidualLayerParams('conv32_2');
                        conv32_3 = extractResidualLayerParams('conv32_3');
                        conv64_down = extractResidualLayerParams('conv64_down');
                        conv64_1 = extractResidualLayerParams('conv64_1');
                        conv64_2 = extractResidualLayerParams('conv64_2');
                        conv64_3 = extractResidualLayerParams('conv64_3');
                        conv128_down = extractResidualLayerParams('conv128_down');
                        conv128_1 = extractResidualLayerParams('conv128_1');
                        conv128_2 = extractResidualLayerParams('conv128_2');
                        conv256_down = extractResidualLayerParams('conv256_down');
                        conv256_1 = extractResidualLayerParams('conv256_1');
                        conv256_2 = extractResidualLayerParams('conv256_2');
                        conv256_down_out = extractResidualLayerParams('conv256_down_out');
                        fc = weightMap['fc'];
                        paramMappings.push({ originalPath: 'fc', paramPath: 'fc' });
                        if (!isTensor2D(fc)) {
                            throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc);
                        }
                        params = {
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
                        return [2 /*return*/, { params: params, paramMappings: paramMappings }];
                }
            });
        });
    }

    function residual(x, params) {
        var out = conv(x, params.conv1);
        out = convNoRelu(out, params.conv2);
        out = add(out, x);
        out = relu(out);
        return out;
    }
    function residualDown(x, params) {
        var out = convDown(x, params.conv1);
        out = convNoRelu(out, params.conv2);
        var pooled = avgPool(x, 2, 2, 'valid');
        var zeros$$1 = zeros(pooled.shape);
        var isPad = pooled.shape[3] !== out.shape[3];
        var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
        if (isAdjustShape) {
            var padShapeX = out.shape.slice();
            padShapeX[1] = 1;
            var zerosW = zeros(padShapeX);
            out = concat([out, zerosW], 1);
            var padShapeY = out.shape.slice();
            padShapeY[2] = 1;
            var zerosH = zeros(padShapeY);
            out = concat([out, zerosH], 2);
        }
        pooled = isPad ? concat([pooled, zeros$$1], 3) : pooled;
        out = add(pooled, out);
        out = relu(out);
        return out;
    }

    var FaceRecognitionNet = /** @class */ (function (_super) {
        __extends$1(FaceRecognitionNet, _super);
        function FaceRecognitionNet() {
            return _super.call(this, 'FaceRecognitionNet') || this;
        }
        FaceRecognitionNet.prototype.forwardInput = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('FaceRecognitionNet - load model before inference');
            }
            return tidy(function () {
                var batchTensor = input.toBatchTensor(150, true).toFloat();
                var meanRgb = [122.782, 117.001, 104.298];
                var normalized = normalize(batchTensor, meanRgb).div(scalar(256));
                var out = convDown(normalized, params.conv32_down);
                out = maxPool(out, 3, 2, 'valid');
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
                var fullyConnected = matMul(globalAvg, params.fc);
                return fullyConnected;
            });
        };
        FaceRecognitionNet.prototype.forward = function (input) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
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
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, toNetInput(input)];
                        case 1:
                            netInput = _a.sent();
                            faceDescriptorTensors = tidy(function () { return unstack(_this.forwardInput(netInput)); });
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
        FaceRecognitionNet.prototype.loadQuantizedParams = function (uri) {
            return loadQuantizedParams$2(uri);
        };
        FaceRecognitionNet.prototype.extractParams = function (weights) {
            return extractParams$2(weights);
        };
        return FaceRecognitionNet;
    }(NeuralNetwork));

    function createFaceRecognitionNet(weights) {
        var net = new FaceRecognitionNet();
        net.extractWeights(weights);
        return net;
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

    function extractorsFactory$5(extractWeights, paramMappings) {
        function extractDepthwiseConvParams(numChannels, mappedPrefix) {
            var filters = tensor4d(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
            var batch_norm_scale = tensor1d(extractWeights(numChannels));
            var batch_norm_offset = tensor1d(extractWeights(numChannels));
            var batch_norm_mean = tensor1d(extractWeights(numChannels));
            var batch_norm_variance = tensor1d(extractWeights(numChannels));
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
            var filters = tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
            var bias = tensor1d(extractWeights(channelsOut));
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
    function extractParams$3(weights) {
        var paramMappings = [];
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var _b = extractorsFactory$5(extractWeights, paramMappings), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
        var mobilenetv1 = extractMobilenetV1Params();
        var prediction_layer = extractPredictionLayerParams();
        var extra_dim = tensor3d(extractWeights(5118 * 4), [1, 5118, 4]);
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

    var DEFAULT_MODEL_NAME$3 = 'ssd_mobilenetv1_model';
    function extractorsFactory$6(weightMap, paramMappings) {
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
    function loadQuantizedParams$3(uri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var weightMap, paramMappings, _a, extractMobilenetV1Params, extractPredictionLayerParams, extra_dim, params;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME$3)];
                    case 1:
                        weightMap = _b.sent();
                        paramMappings = [];
                        _a = extractorsFactory$6(weightMap, paramMappings), extractMobilenetV1Params = _a.extractMobilenetV1Params, extractPredictionLayerParams = _a.extractPredictionLayerParams;
                        extra_dim = weightMap['Output/extra_dim'];
                        paramMappings.push({ originalPath: 'Output/extra_dim', paramPath: 'output_layer/extra_dim' });
                        if (!isTensor3D(extra_dim)) {
                            throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + extra_dim);
                        }
                        params = {
                            mobilenetv1: extractMobilenetV1Params(),
                            prediction_layer: extractPredictionLayerParams(),
                            output_layer: {
                                extra_dim: extra_dim
                            }
                        };
                        disposeUnusedWeightTensors(weightMap, paramMappings);
                        return [2 /*return*/, { params: params, paramMappings: paramMappings }];
                }
            });
        });
    }

    function pointwiseConvLayer(x, params, strides) {
        return tidy(function () {
            var out = conv2d(x, params.filters, strides, 'same');
            out = add(out, params.batch_norm_offset);
            return clipByValue(out, 0, 6);
        });
    }

    var epsilon = 0.0010000000474974513;
    function depthwiseConvLayer(x, params, strides) {
        return tidy(function () {
            var out = depthwiseConv2d(x, params.filters, strides, 'same');
            out = batchNormalization(out, params.batch_norm_mean, params.batch_norm_variance, epsilon, params.batch_norm_scale, params.batch_norm_offset);
            return clipByValue(out, 0, 6);
        });
    }
    function getStridesForLayerIdx(layerIdx) {
        return [2, 4, 6, 12].some(function (idx) { return idx === layerIdx; }) ? [2, 2] : [1, 1];
    }
    function mobileNetV1(x, params) {
        return tidy(function () {
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

    function nonMaxSuppression$2(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
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
        var yminI = Math.min(boxes.get(i, 0), boxes.get(i, 2));
        var xminI = Math.min(boxes.get(i, 1), boxes.get(i, 3));
        var ymaxI = Math.max(boxes.get(i, 0), boxes.get(i, 2));
        var xmaxI = Math.max(boxes.get(i, 1), boxes.get(i, 3));
        var yminJ = Math.min(boxes.get(j, 0), boxes.get(j, 2));
        var xminJ = Math.min(boxes.get(j, 1), boxes.get(j, 3));
        var ymaxJ = Math.max(boxes.get(j, 0), boxes.get(j, 2));
        var xmaxJ = Math.max(boxes.get(j, 1), boxes.get(j, 3));
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
        var vec = unstack(transpose(x, [1, 0]));
        var sizes = [
            sub(vec[2], vec[0]),
            sub(vec[3], vec[1])
        ];
        var centers = [
            add(vec[0], div(sizes[0], scalar(2))),
            add(vec[1], div(sizes[1], scalar(2)))
        ];
        return {
            sizes: sizes,
            centers: centers
        };
    }
    function decodeBoxesLayer(x0, x1) {
        var _a = getCenterCoordinatesAndSizesLayer(x0), sizes = _a.sizes, centers = _a.centers;
        var vec = unstack(transpose(x1, [1, 0]));
        var div0_out = div(mul(exp(div(vec[2], scalar(5))), sizes[0]), scalar(2));
        var add0_out = add(mul(div(vec[0], scalar(10)), sizes[0]), centers[0]);
        var div1_out = div(mul(exp(div(vec[3], scalar(5))), sizes[1]), scalar(2));
        var add1_out = add(mul(div(vec[1], scalar(10)), sizes[1]), centers[1]);
        return transpose(stack([
            sub(add0_out, div0_out),
            sub(add1_out, div1_out),
            add(add0_out, div0_out),
            add(add1_out, div1_out)
        ]), [1, 0]);
    }
    function outputLayer(boxPredictions, classPredictions, params) {
        return tidy(function () {
            var batchSize = boxPredictions.shape[0];
            var boxes = decodeBoxesLayer(reshape(tile(params.extra_dim, [batchSize, 1, 1]), [-1, 4]), reshape(boxPredictions, [-1, 4]));
            boxes = reshape(boxes, [batchSize, (boxes.shape[0] / batchSize), 4]);
            var scoresAndClasses = sigmoid(slice(classPredictions, [0, 0, 1], [-1, -1, -1]));
            var scores = slice(scoresAndClasses, [0, 0, 0], [-1, -1, 1]);
            scores = reshape(scores, [batchSize, scores.shape[1]]);
            var boxesByBatch = unstack(boxes);
            var scoresByBatch = unstack(scores);
            return {
                boxes: boxesByBatch,
                scores: scoresByBatch
            };
        });
    }

    function boxPredictionLayer(x, params) {
        return tidy(function () {
            var batchSize = x.shape[0];
            var boxPredictionEncoding = reshape(convLayer(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
            var classPrediction = reshape(convLayer(x, params.class_predictor), [batchSize, -1, 3]);
            return {
                boxPredictionEncoding: boxPredictionEncoding,
                classPrediction: classPrediction
            };
        });
    }

    function predictionLayer(x, conv11, params) {
        return tidy(function () {
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
            var boxPredictions = concat([
                boxPrediction0.boxPredictionEncoding,
                boxPrediction1.boxPredictionEncoding,
                boxPrediction2.boxPredictionEncoding,
                boxPrediction3.boxPredictionEncoding,
                boxPrediction4.boxPredictionEncoding,
                boxPrediction5.boxPredictionEncoding
            ], 1);
            var classPredictions = concat([
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
        __extends$1(SsdMobilenetv1, _super);
        function SsdMobilenetv1() {
            return _super.call(this, 'SsdMobilenetv1') || this;
        }
        SsdMobilenetv1.prototype.forwardInput = function (input) {
            var params = this.params;
            if (!params) {
                throw new Error('SsdMobilenetv1 - load model before inference');
            }
            return tidy(function () {
                var batchTensor = input.toBatchTensor(512, false).toFloat();
                var x = sub(mul(batchTensor, scalar(0.007843137718737125)), scalar(1));
                var features = mobileNetV1(x, params.mobilenetv1);
                var _a = predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
                return outputLayer(boxPredictions, classPredictions, params.output_layer);
            });
        };
        SsdMobilenetv1.prototype.forward = function (input) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
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
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i, scoresData, _c, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, results;
                return __generator$1(this, function (_e) {
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
                            indices = nonMaxSuppression$2(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                            reshapedDims = netInput.getReshapedInputDimensions(0);
                            inputSize = netInput.inputSize;
                            padX = inputSize / reshapedDims.width;
                            padY = inputSize / reshapedDims.height;
                            results = indices
                                .map(function (idx) {
                                var _a = [
                                    Math.max(0, boxes.get(idx, 0)),
                                    Math.min(1.0, boxes.get(idx, 2))
                                ].map(function (val) { return val * padY; }), top = _a[0], bottom = _a[1];
                                var _b = [
                                    Math.max(0, boxes.get(idx, 1)),
                                    Math.min(1.0, boxes.get(idx, 3))
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
        SsdMobilenetv1.prototype.loadQuantizedParams = function (uri) {
            return loadQuantizedParams$3(uri);
        };
        SsdMobilenetv1.prototype.extractParams = function (weights) {
            return extractParams$3(weights);
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
        __extends$1(FaceDetectionNet, _super);
        function FaceDetectionNet() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FaceDetectionNet;
    }(SsdMobilenetv1));

    var TinyFaceDetectorOptions = /** @class */ (function (_super) {
        __extends$1(TinyFaceDetectorOptions, _super);
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
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
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
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    throw new Error('ComposableTask - run is not implemented');
                });
            });
        };
        return ComposableTask;
    }());

    function bgrToRgbTensor(tensor$$1) {
        return tidy(function () { return stack(unstack(tensor$$1, 3).reverse(), 3); });
    }

    var CELL_STRIDE = 2;
    var CELL_SIZE$1 = 12;

    function extractorsFactory$7(extractWeights, paramMappings) {
        var extractConvParams = extractConvParamsFactory(extractWeights, paramMappings);
        var extractFCParams = extractFCParamsFactory(extractWeights, paramMappings);
        function extractPReluParams(size, paramPath) {
            var alpha = tensor1d(extractWeights(size));
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
            return __assign$1({}, sharedParams, { conv4_1: conv4_1, conv4_2: conv4_2 });
        }
        function extractRNetParams() {
            var sharedParams = extractSharedParams([3, 28, 48, 64], 'rnet', true);
            var fc1 = extractFCParams(576, 128, 'rnet/fc1');
            var prelu4_alpha = extractPReluParams(128, 'rnet/prelu4_alpha');
            var fc2_1 = extractFCParams(128, 2, 'rnet/fc2_1');
            var fc2_2 = extractFCParams(128, 4, 'rnet/fc2_2');
            return __assign$1({}, sharedParams, { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
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
            return __assign$1({}, sharedParams, { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
        }
        return {
            extractPNetParams: extractPNetParams,
            extractRNetParams: extractRNetParams,
            extractONetParams: extractONetParams
        };
    }
    function extractParams$4(weights) {
        var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
        var paramMappings = [];
        var _b = extractorsFactory$7(extractWeights, paramMappings), extractPNetParams = _b.extractPNetParams, extractRNetParams = _b.extractRNetParams, extractONetParams = _b.extractONetParams;
        var pnet = extractPNetParams();
        var rnet = extractRNetParams();
        var onet = extractONetParams();
        if (getRemainingWeights().length !== 0) {
            throw new Error("weights remaing after extract: " + getRemainingWeights().length);
        }
        return { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings };
    }

    function getSizesForScale(scale, _a) {
        var height = _a[0], width = _a[1];
        return {
            height: Math.floor(height * scale),
            width: Math.floor(width * scale)
        };
    }

    var DEFAULT_MODEL_NAME$4 = 'mtcnn_model';
    function extractorsFactory$8(weightMap, paramMappings) {
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
            return __assign$1({}, sharedParams, { conv4_1: conv4_1, conv4_2: conv4_2 });
        }
        function extractRNetParams() {
            var sharedParams = extractSharedParams('rnet');
            var fc1 = extractFCParams('rnet/fc1');
            var prelu4_alpha = extractPReluParams('rnet/prelu4_alpha');
            var fc2_1 = extractFCParams('rnet/fc2_1');
            var fc2_2 = extractFCParams('rnet/fc2_2');
            return __assign$1({}, sharedParams, { fc1: fc1, prelu4_alpha: prelu4_alpha, fc2_1: fc2_1, fc2_2: fc2_2 });
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
            return __assign$1({}, sharedParams, { conv4: conv4, prelu4_alpha: prelu4_alpha, fc1: fc1, prelu5_alpha: prelu5_alpha, fc2_1: fc2_1, fc2_2: fc2_2, fc2_3: fc2_3 });
        }
        return {
            extractPNetParams: extractPNetParams,
            extractRNetParams: extractRNetParams,
            extractONetParams: extractONetParams
        };
    }
    function loadQuantizedParams$4(uri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var weightMap, paramMappings, _a, extractPNetParams, extractRNetParams, extractONetParams, pnet, rnet, onet;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME$4)];
                    case 1:
                        weightMap = _b.sent();
                        paramMappings = [];
                        _a = extractorsFactory$8(weightMap, paramMappings), extractPNetParams = _a.extractPNetParams, extractRNetParams = _a.extractRNetParams, extractONetParams = _a.extractONetParams;
                        pnet = extractPNetParams();
                        rnet = extractRNetParams();
                        onet = extractONetParams();
                        disposeUnusedWeightTensors(weightMap, paramMappings);
                        return [2 /*return*/, { params: { pnet: pnet, rnet: rnet, onet: onet }, paramMappings: paramMappings }];
                }
            });
        });
    }

    function pyramidDown(minFaceSize, scaleFactor, dims) {
        var height = dims[0], width = dims[1];
        var m = CELL_SIZE$1 / minFaceSize;
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
        __extends$1(MtcnnBox, _super);
        function MtcnnBox(left, top, right, bottom) {
            return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, true) || this;
        }
        return MtcnnBox;
    }(Box));

    function normalize$1(x) {
        return tidy(function () { return mul(sub(x, scalar(127.5)), scalar(0.0078125)); });
    }

    function prelu$1(x, alpha) {
        return tidy(function () {
            return add(relu(x), mul(alpha, neg(relu(neg(x)))));
        });
    }

    function sharedLayer(x, params, isPnet) {
        if (isPnet === void 0) { isPnet = false; }
        return tidy(function () {
            var out = convLayer(x, params.conv1, 'valid');
            out = prelu$1(out, params.prelu1_alpha);
            out = maxPool(out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
            out = convLayer(out, params.conv2, 'valid');
            out = prelu$1(out, params.prelu2_alpha);
            out = isPnet ? out : maxPool(out, [3, 3], [2, 2], 'valid');
            out = convLayer(out, params.conv3, 'valid');
            out = prelu$1(out, params.prelu3_alpha);
            return out;
        });
    }

    function PNet(x, params) {
        return tidy(function () {
            var out = sharedLayer(x, params, true);
            var conv = convLayer(out, params.conv4_1, 'valid');
            var max$$1 = expandDims(max(conv, 3), 3);
            var prob = softmax(sub(conv, max$$1), 3);
            var regions = convLayer(out, params.conv4_2, 'valid');
            return { prob: prob, regions: regions };
        });
    }

    function rescaleAndNormalize(x, scale) {
        return tidy(function () {
            var _a = getSizesForScale(scale, x.shape.slice(1)), height = _a.height, width = _a.width;
            var resized = image_ops.resizeBilinear(x, [height, width]);
            var normalized = normalize$1(resized);
            return transpose(normalized, [0, 2, 1, 3]);
        });
    }
    function extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold) {
        // TODO: fix this!, maybe better to use tf.gather here
        var indices = [];
        for (var y = 0; y < scoresTensor.shape[0]; y++) {
            for (var x = 0; x < scoresTensor.shape[1]; x++) {
                if (scoresTensor.get(y, x) >= scoreThreshold) {
                    indices.push(new Point(x, y));
                }
            }
        }
        var boundingBoxes = indices.map(function (idx) {
            var cell = new BoundingBox(Math.round((idx.y * CELL_STRIDE + 1) / scale), Math.round((idx.x * CELL_STRIDE + 1) / scale), Math.round((idx.y * CELL_STRIDE + CELL_SIZE$1) / scale), Math.round((idx.x * CELL_STRIDE + CELL_SIZE$1) / scale));
            var score = scoresTensor.get(idx.y, idx.x);
            var region = new MtcnnBox(regionsTensor.get(idx.y, idx.x, 0), regionsTensor.get(idx.y, idx.x, 1), regionsTensor.get(idx.y, idx.x, 2), regionsTensor.get(idx.y, idx.x, 3));
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
        var pnetOutputs = scales.map(function (scale) { return tidy(function () {
            var statsForScale = { scale: scale };
            var resized = rescaleAndNormalize(imgTensor, scale);
            var ts = Date.now();
            var _a = PNet(resized, params), prob = _a.prob, regions = _a.regions;
            statsForScale.pnet = Date.now() - ts;
            var scoresTensor = unstack(unstack(prob, 3)[1])[0];
            var regionsTensor = unstack(regions)[0];
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
            var indices = nonMaxSuppression$1(boundingBoxes.map(function (bbox) { return bbox.cell; }), boundingBoxes.map(function (bbox) { return bbox.score; }), 0.5);
            statsForScale.nms = Date.now() - ts;
            statsForScale.numBoxes = indices.length;
            stats.stage1.push(statsForScale);
            return indices.map(function (boxIdx) { return boundingBoxes[boxIdx]; });
        });
        var allBoxes = boxesForScale.reduce(function (all$$1, boxes) { return all$$1.concat(boxes); }, []);
        var finalBoxes = [];
        var finalScores = [];
        if (allBoxes.length > 0) {
            var ts = Date.now();
            var indices = nonMaxSuppression$1(allBoxes.map(function (bbox) { return bbox.cell; }), allBoxes.map(function (bbox) { return bbox.score; }), 0.7);
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
        return __awaiter$1(this, void 0, void 0, function () {
            var _this = this;
            var imgCtx, bitmaps, imagePatchesDatas;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        imgCtx = getContext2dOrThrow(img);
                        return [4 /*yield*/, Promise.all(boxes.map(function (box) { return __awaiter$1(_this, void 0, void 0, function () {
                                var _a, y, ey, x, ex, fromX, fromY, imgData;
                                return __generator$1(this, function (_b) {
                                    _a = box.padAtBorders(img.height, img.width), y = _a.y, ey = _a.ey, x = _a.x, ex = _a.ex;
                                    fromX = x - 1;
                                    fromY = y - 1;
                                    imgData = imgCtx.getImageData(fromX, fromY, (ex - fromX), (ey - fromY));
                                    return [2 /*return*/, createImageBitmap(imgData)];
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
                                var t = tidy(function () {
                                    var imagePatchTensor = transpose(tensor4d(data, [1, width, height, 3]), [0, 2, 1, 3]).toFloat();
                                    return normalize$1(imagePatchTensor);
                                });
                                return t;
                            })];
                }
            });
        });
    }

    function RNet(x, params) {
        return tidy(function () {
            var convOut = sharedLayer(x, params);
            var vectorized = reshape(convOut, [convOut.shape[0], params.fc1.weights.shape[0]]);
            var fc1 = fullyConnectedLayer(vectorized, params.fc1);
            var prelu4 = prelu$1(fc1, params.prelu4_alpha);
            var fc2_1 = fullyConnectedLayer(prelu4, params.fc2_1);
            var max$$1 = expandDims(max(fc2_1, 1), 1);
            var prob = softmax(sub(fc2_1, max$$1), 1);
            var regions = fullyConnectedLayer(prelu4, params.fc2_2);
            var scores = unstack(prob, 1)[1];
            return { scores: scores, regions: regions };
        });
    }

    function stage2(img, inputBoxes, scoreThreshold, params, stats) {
        return __awaiter$1(this, void 0, void 0, function () {
            var ts, rnetInputs, rnetOuts, scoresTensor, scores, _a, _b, indices, filteredBoxes, filteredScores, finalBoxes, finalScores, indicesNms, regions_1;
            return __generator$1(this, function (_c) {
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
                            ? concat(rnetOuts.map(function (out) { return out.scores; }))
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
                            indicesNms = nonMaxSuppression$1(filteredBoxes, filteredScores, 0.7);
                            stats.stage2_nms = Date.now() - ts;
                            regions_1 = indicesNms.map(function (idx) {
                                return new MtcnnBox(rnetOuts[indices[idx]].regions.get(0, 0), rnetOuts[indices[idx]].regions.get(0, 1), rnetOuts[indices[idx]].regions.get(0, 2), rnetOuts[indices[idx]].regions.get(0, 3));
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
        return tidy(function () {
            var out = sharedLayer(x, params);
            out = maxPool(out, [2, 2], [2, 2], 'same');
            out = convLayer(out, params.conv4, 'valid');
            out = prelu$1(out, params.prelu4_alpha);
            var vectorized = reshape(out, [out.shape[0], params.fc1.weights.shape[0]]);
            var fc1 = fullyConnectedLayer(vectorized, params.fc1);
            var prelu5 = prelu$1(fc1, params.prelu5_alpha);
            var fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1);
            var max$$1 = expandDims(max(fc2_1, 1), 1);
            var prob = softmax(sub(fc2_1, max$$1), 1);
            var regions = fullyConnectedLayer(prelu5, params.fc2_2);
            var points = fullyConnectedLayer(prelu5, params.fc2_3);
            var scores = unstack(prob, 1)[1];
            return { scores: scores, regions: regions, points: points };
        });
    }

    function stage3(img, inputBoxes, scoreThreshold, params, stats) {
        return __awaiter$1(this, void 0, void 0, function () {
            var ts, onetInputs, onetOuts, scoresTensor, scores, _a, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;
            return __generator$1(this, function (_c) {
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
                            ? concat(onetOuts.map(function (out) { return out.scores; }))
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
                        filteredRegions = indices.map(function (idx) { return new MtcnnBox(onetOuts[idx].regions.get(0, 0), onetOuts[idx].regions.get(0, 1), onetOuts[idx].regions.get(0, 2), onetOuts[idx].regions.get(0, 3)); });
                        filteredBoxes = indices
                            .map(function (idx, i) { return inputBoxes[idx].calibrate(filteredRegions[i]); });
                        filteredScores = indices.map(function (idx) { return scores[idx]; });
                        finalBoxes = [];
                        finalScores = [];
                        points = [];
                        if (filteredBoxes.length > 0) {
                            ts = Date.now();
                            indicesNms = nonMaxSuppression$1(filteredBoxes, filteredScores, 0.7, false);
                            stats.stage3_nms = Date.now() - ts;
                            finalBoxes = indicesNms.map(function (idx) { return filteredBoxes[idx]; });
                            finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                            points = indicesNms.map(function (idx, i) {
                                return Array(5).fill(0).map(function (_, ptIdx) {
                                    return new Point(((onetOuts[idx].points.get(0, ptIdx) * (finalBoxes[i].width + 1)) + finalBoxes[i].left), ((onetOuts[idx].points.get(0, ptIdx + 5) * (finalBoxes[i].height + 1)) + finalBoxes[i].top));
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
        __extends$1(Mtcnn, _super);
        function Mtcnn() {
            return _super.call(this, 'Mtcnn') || this;
        }
        Mtcnn.prototype.forwardInput = function (input, forwardParams) {
            if (forwardParams === void 0) { forwardParams = {}; }
            return __awaiter$1(this, void 0, void 0, function () {
                var params, inputCanvas, stats, tsTotal, imgTensor, onReturn, _a, height, width, _b, minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps, scales, ts, out1, out2, out3, results;
                return __generator$1(this, function (_c) {
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
                            imgTensor = tidy(function () {
                                return bgrToRgbTensor(expandDims(fromPixels(inputCanvas)).toFloat());
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
                                return Math.min(sizes.width, sizes.height) > CELL_SIZE$1;
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
                            results = out3.boxes.map(function (box, idx) { return new FaceDetectionWithLandmarks(new FaceDetection(out3.scores[idx], new Rect(box.left / width, box.top / height, box.width / width, box.height / height), {
                                height: height,
                                width: width
                            }), new FaceLandmarks5(out3.points[idx].map(function (pt) { return pt.sub(new Point(box.left, box.top)).div(new Point(box.width, box.height)); }), { width: box.width, height: box.height })); });
                            return [2 /*return*/, onReturn({ results: results, stats: stats })];
                    }
                });
            });
        };
        Mtcnn.prototype.forward = function (input, forwardParams) {
            if (forwardParams === void 0) { forwardParams = {}; }
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
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
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
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
        // none of the param tensors are quantized yet
        Mtcnn.prototype.loadQuantizedParams = function (uri) {
            return loadQuantizedParams$4(uri);
        };
        Mtcnn.prototype.extractParams = function (weights) {
            return extractParams$4(weights);
        };
        return Mtcnn;
    }(NeuralNetwork));

    var IOU_THRESHOLD = 0.4;
    var BOX_ANCHORS = [
        new Point(1.603231, 2.094468),
        new Point(6.041143, 7.080126),
        new Point(2.882459, 3.518061),
        new Point(4.266906, 5.178857),
        new Point(9.041765, 10.66308)
    ];
    var MEAN_RGB = [117.001, 114.697, 97.404];
    var DEFAULT_MODEL_NAME$5 = 'tiny_face_detector_model';

    var TinyFaceDetector = /** @class */ (function (_super) {
        __extends$1(TinyFaceDetector, _super);
        function TinyFaceDetector() {
            var _this = this;
            var config = {
                withSeparableConvs: true,
                iouThreshold: IOU_THRESHOLD,
                classes: ['face'],
                anchors: BOX_ANCHORS,
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
            return __awaiter$1(this, void 0, void 0, function () {
                var objectDetections;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.detect(input, forwardParams)];
                        case 1:
                            objectDetections = _a.sent();
                            return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                    }
                });
            });
        };
        TinyFaceDetector.prototype.loadQuantizedParams = function (modelUri) {
            var defaultModelName = DEFAULT_MODEL_NAME$5;
            return _super.prototype.loadQuantizedParams.call(this, modelUri, defaultModelName);
        };
        return TinyFaceDetector;
    }(TinyYolov2));

    var IOU_THRESHOLD$1 = 0.4;
    var BOX_ANCHORS$1 = [
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
    var DEFAULT_MODEL_NAME$6 = 'tiny_yolov2_model';
    var DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model';

    var TinyYolov2$1 = /** @class */ (function (_super) {
        __extends$1(TinyYolov2$$1, _super);
        function TinyYolov2$$1(withSeparableConvs) {
            if (withSeparableConvs === void 0) { withSeparableConvs = true; }
            var _this = this;
            var config = Object.assign({}, {
                withSeparableConvs: withSeparableConvs,
                iouThreshold: IOU_THRESHOLD$1,
                classes: ['face']
            }, withSeparableConvs
                ? {
                    anchors: BOX_ANCHORS_SEPARABLE,
                    meanRgb: MEAN_RGB_SEPARABLE
                }
                : {
                    anchors: BOX_ANCHORS$1,
                    withClassScores: true
                });
            _this = _super.call(this, config) || this;
            return _this;
        }
        Object.defineProperty(TinyYolov2$$1.prototype, "withSeparableConvs", {
            get: function () {
                return this.config.withSeparableConvs;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TinyYolov2$$1.prototype, "anchors", {
            get: function () {
                return this.config.anchors;
            },
            enumerable: true,
            configurable: true
        });
        TinyYolov2$$1.prototype.locateFaces = function (input, forwardParams) {
            return __awaiter$1(this, void 0, void 0, function () {
                var objectDetections;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.detect(input, forwardParams)];
                        case 1:
                            objectDetections = _a.sent();
                            return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                    }
                });
            });
        };
        TinyYolov2$$1.prototype.loadQuantizedParams = function (modelUri) {
            var defaultModelName = this.withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME$6;
            return _super.prototype.loadQuantizedParams.call(this, modelUri, defaultModelName);
        };
        return TinyYolov2$$1;
    }(TinyYolov2));

    var nets = {
        ssdMobilenetv1: new SsdMobilenetv1(),
        tinyFaceDetector: new TinyFaceDetector(),
        tinyYolov2: new TinyYolov2$1(),
        mtcnn: new Mtcnn(),
        faceLandmark68Net: new FaceLandmark68Net(),
        faceLandmark68TinyNet: new FaceLandmark68TinyNet(),
        faceRecognitionNet: new FaceRecognitionNet()
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
    var loadSsdMobilenetv1Model = function (url) { return nets.ssdMobilenetv1.load(url); };
    var loadTinyFaceDetectorModel = function (url) { return nets.tinyFaceDetector.load(url); };
    var loadMtcnnModel = function (url) { return nets.mtcnn.load(url); };
    var loadTinyYolov2Model = function (url) { return nets.tinyYolov2.load(url); };
    var loadFaceLandmarkModel = function (url) { return nets.faceLandmark68Net.load(url); };
    var loadFaceLandmarkTinyModel = function (url) { return nets.faceLandmark68TinyNet.load(url); };
    var loadFaceRecognitionModel = function (url) { return nets.faceRecognitionNet.load(url); };
    // backward compatibility
    var loadFaceDetectionModel = loadSsdMobilenetv1Model;
    var locateFaces = ssdMobilenetv1;
    var detectLandmarks = detectFaceLandmarks;

    var ComputeFaceDescriptorsTaskBase = /** @class */ (function (_super) {
        __extends$1(ComputeFaceDescriptorsTaskBase, _super);
        function ComputeFaceDescriptorsTaskBase(detectFaceLandmarksTask, input) {
            var _this = _super.call(this) || this;
            _this.detectFaceLandmarksTask = detectFaceLandmarksTask;
            _this.input = input;
            return _this;
        }
        return ComputeFaceDescriptorsTaskBase;
    }(ComposableTask));
    var ComputeAllFaceDescriptorsTask = /** @class */ (function (_super) {
        __extends$1(ComputeAllFaceDescriptorsTask, _super);
        function ComputeAllFaceDescriptorsTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComputeAllFaceDescriptorsTask.prototype.run = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                var facesWithLandmarks, alignedFaceCanvases;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.detectFaceLandmarksTask];
                        case 1:
                            facesWithLandmarks = _a.sent();
                            return [4 /*yield*/, extractFaces(this.input, facesWithLandmarks.map(function (_a) {
                                    var landmarks = _a.landmarks;
                                    return landmarks.align();
                                }))];
                        case 2:
                            alignedFaceCanvases = _a.sent();
                            return [4 /*yield*/, Promise.all(facesWithLandmarks.map(function (_a, i) {
                                    var detection = _a.detection, landmarks = _a.landmarks;
                                    return __awaiter$1(_this, void 0, void 0, function () {
                                        var descriptor;
                                        return __generator$1(this, function (_b) {
                                            switch (_b.label) {
                                                case 0: return [4 /*yield*/, nets.faceRecognitionNet.computeFaceDescriptor(alignedFaceCanvases[i])];
                                                case 1:
                                                    descriptor = _b.sent();
                                                    return [2 /*return*/, new FullFaceDescription(detection, landmarks, descriptor)];
                                            }
                                        });
                                    });
                                }))];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return ComputeAllFaceDescriptorsTask;
    }(ComputeFaceDescriptorsTaskBase));
    var ComputeSingleFaceDescriptorTask = /** @class */ (function (_super) {
        __extends$1(ComputeSingleFaceDescriptorTask, _super);
        function ComputeSingleFaceDescriptorTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComputeSingleFaceDescriptorTask.prototype.run = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var detectionWithLandmarks, detection, landmarks, alignedRect, alignedFaceCanvas, descriptor;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.detectFaceLandmarksTask];
                        case 1:
                            detectionWithLandmarks = _a.sent();
                            if (!detectionWithLandmarks) {
                                return [2 /*return*/];
                            }
                            detection = detectionWithLandmarks.detection, landmarks = detectionWithLandmarks.landmarks, alignedRect = detectionWithLandmarks.alignedRect;
                            return [4 /*yield*/, extractFaces(this.input, [alignedRect])];
                        case 2:
                            alignedFaceCanvas = (_a.sent())[0];
                            return [4 /*yield*/, nets.faceRecognitionNet.computeFaceDescriptor(alignedFaceCanvas)];
                        case 3:
                            descriptor = _a.sent();
                            return [2 /*return*/, new FullFaceDescription(detection, landmarks, descriptor)];
                    }
                });
            });
        };
        return ComputeSingleFaceDescriptorTask;
    }(ComputeFaceDescriptorsTaskBase));

    var DetectFaceLandmarksTaskBase = /** @class */ (function (_super) {
        __extends$1(DetectFaceLandmarksTaskBase, _super);
        function DetectFaceLandmarksTaskBase(detectFacesTask, input, useTinyLandmarkNet) {
            var _this = _super.call(this) || this;
            _this.detectFacesTask = detectFacesTask;
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
        __extends$1(DetectAllFaceLandmarksTask, _super);
        function DetectAllFaceLandmarksTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectAllFaceLandmarksTask.prototype.run = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                var detections, faceCanvases, faceLandmarksByFace;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.detectFacesTask];
                        case 1:
                            detections = _a.sent();
                            return [4 /*yield*/, extractFaces(this.input, detections)];
                        case 2:
                            faceCanvases = _a.sent();
                            return [4 /*yield*/, Promise.all(faceCanvases.map(function (canvas) { return _this.landmarkNet.detectLandmarks(canvas); }))];
                        case 3:
                            faceLandmarksByFace = _a.sent();
                            return [2 /*return*/, detections.map(function (detection, i) {
                                    return new FaceDetectionWithLandmarks(detection, faceLandmarksByFace[i]);
                                })];
                    }
                });
            });
        };
        DetectAllFaceLandmarksTask.prototype.withFaceDescriptors = function () {
            return new ComputeAllFaceDescriptorsTask(this, this.input);
        };
        return DetectAllFaceLandmarksTask;
    }(DetectFaceLandmarksTaskBase));
    var DetectSingleFaceLandmarksTask = /** @class */ (function (_super) {
        __extends$1(DetectSingleFaceLandmarksTask, _super);
        function DetectSingleFaceLandmarksTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectSingleFaceLandmarksTask.prototype.run = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var detection, faceCanvas, _a, _b;
                return __generator$1(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.detectFacesTask];
                        case 1:
                            detection = _c.sent();
                            if (!detection) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, extractFaces(this.input, [detection])];
                        case 2:
                            faceCanvas = (_c.sent())[0];
                            _a = FaceDetectionWithLandmarks.bind;
                            _b = [void 0, detection];
                            return [4 /*yield*/, this.landmarkNet.detectLandmarks(faceCanvas)];
                        case 3: return [2 /*return*/, new (_a.apply(FaceDetectionWithLandmarks, _b.concat([_c.sent()])))()];
                    }
                });
            });
        };
        DetectSingleFaceLandmarksTask.prototype.withFaceDescriptor = function () {
            return new ComputeSingleFaceDescriptorTask(this, this.input);
        };
        return DetectSingleFaceLandmarksTask;
    }(DetectFaceLandmarksTaskBase));

    var DetectFacesTaskBase = /** @class */ (function (_super) {
        __extends$1(DetectFacesTaskBase, _super);
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
        __extends$1(DetectAllFacesTask, _super);
        function DetectAllFacesTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectAllFacesTask.prototype.run = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, input, options, faceDetectionFunction;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this, input = _a.input, options = _a.options;
                            if (!(options instanceof MtcnnOptions)) return [3 /*break*/, 2];
                            return [4 /*yield*/, nets.mtcnn.forward(input, options)];
                        case 1: return [2 /*return*/, (_b.sent())
                                .map(function (result) { return result.faceDetection; })];
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
        DetectAllFacesTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
            if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
            return new DetectAllFaceLandmarksTask(this, this.input, useTinyLandmarkNet);
        };
        return DetectAllFacesTask;
    }(DetectFacesTaskBase));
    var DetectSingleFaceTask = /** @class */ (function (_super) {
        __extends$1(DetectSingleFaceTask, _super);
        function DetectSingleFaceTask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetectSingleFaceTask.prototype.run = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new DetectAllFacesTask(this.input, this.options)];
                        case 1: return [2 /*return*/, (_a.sent())
                                .sort(function (f1, f2) { return f1.score - f2.score; })[0]];
                    }
                });
            });
        };
        DetectSingleFaceTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
            if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
            return new DetectSingleFaceLandmarksTask(this, this.input, useTinyLandmarkNet);
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
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? { minConfidence: minConfidence } : {}))
                            .withFaceLandmarks()
                            .withFaceDescriptors()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function allFacesTinyYolov2(input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detectAllFaces(input, new TinyYolov2Options(forwardParams))
                            .withFaceLandmarks()
                            .withFaceDescriptors()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function allFacesMtcnn(input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detectAllFaces(input, new MtcnnOptions(forwardParams))
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
                if (desc instanceof FullFaceDescription) {
                    return new LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor]);
                }
                if (desc instanceof Float32Array) {
                    return new LabeledFaceDescriptors(createUniqueLabel(), [desc]);
                }
                throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | FullFaceDescription | Float32Array | Array<LabeledFaceDescriptors | FullFaceDescription | Float32Array>");
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

    function createTinyYolov2(weights, withSeparableConvs) {
        if (withSeparableConvs === void 0) { withSeparableConvs = true; }
        var net = new TinyYolov2$1(withSeparableConvs);
        net.extractWeights(weights);
        return net;
    }

    exports.tf = tfCore_esm;
    exports.BoundingBox = BoundingBox;
    exports.Box = Box;
    exports.BoxWithText = BoxWithText;
    exports.Dimensions = Dimensions;
    exports.LabeledBox = LabeledBox;
    exports.ObjectDetection = ObjectDetection;
    exports.Point = Point;
    exports.PredictedBox = PredictedBox;
    exports.Rect = Rect;
    exports.disposeUnusedWeightTensors = disposeUnusedWeightTensors;
    exports.extractWeightEntryFactory = extractWeightEntryFactory;
    exports.extractWeightsFactory = extractWeightsFactory;
    exports.getModelUris = getModelUris;
    exports.awaitMediaLoaded = awaitMediaLoaded;
    exports.bufferToImage = bufferToImage;
    exports.createCanvas = createCanvas;
    exports.createCanvasFromMedia = createCanvasFromMedia;
    exports.drawBox = drawBox;
    exports.drawDetection = drawDetection;
    exports.drawText = drawText;
    exports.fetchImage = fetchImage;
    exports.fetchJson = fetchJson;
    exports.fetchNetWeights = fetchNetWeights;
    exports.fetchOrThrow = fetchOrThrow;
    exports.getContext2dOrThrow = getContext2dOrThrow;
    exports.getDefaultDrawOptions = getDefaultDrawOptions;
    exports.getMediaDimensions = getMediaDimensions;
    exports.imageTensorToCanvas = imageTensorToCanvas;
    exports.imageToSquare = imageToSquare;
    exports.isMediaElement = isMediaElement;
    exports.isMediaLoaded = isMediaLoaded;
    exports.loadWeightMap = loadWeightMap;
    exports.NetInput = NetInput;
    exports.resolveInput = resolveInput;
    exports.toNetInput = toNetInput;
    exports.sigmoid = sigmoid$1;
    exports.inverseSigmoid = inverseSigmoid;
    exports.iou = iou;
    exports.nonMaxSuppression = nonMaxSuppression$1;
    exports.normalize = normalize;
    exports.padToSquare = padToSquare;
    exports.shuffleArray = shuffleArray;
    exports.isTensor = isTensor;
    exports.isTensor1D = isTensor1D;
    exports.isTensor2D = isTensor2D;
    exports.isTensor3D = isTensor3D;
    exports.isTensor4D = isTensor4D;
    exports.isFloat = isFloat;
    exports.isEven = isEven;
    exports.round = round$1;
    exports.isDimensions = isDimensions;
    exports.computeReshapedDimensions = computeReshapedDimensions;
    exports.getCenterPoint = getCenterPoint;
    exports.range = range$1;
    exports.isValidNumber = isValidNumber;
    exports.isValidProbablitiy = isValidProbablitiy;
    exports.NeuralNetwork = NeuralNetwork;
    exports.FaceDetection = FaceDetection;
    exports.FaceDetectionWithLandmarks = FaceDetectionWithLandmarks;
    exports.FaceLandmarks = FaceLandmarks;
    exports.FaceLandmarks5 = FaceLandmarks5;
    exports.FaceLandmarks68 = FaceLandmarks68;
    exports.FaceMatch = FaceMatch;
    exports.FullFaceDescription = FullFaceDescription;
    exports.LabeledFaceDescriptors = LabeledFaceDescriptors;
    exports.drawContour = drawContour;
    exports.drawLandmarks = drawLandmarks;
    exports.extractFaces = extractFaces;
    exports.extractFaceTensors = extractFaceTensors;
    exports.FaceLandmarkNet = FaceLandmarkNet;
    exports.createFaceLandmarkNet = createFaceLandmarkNet;
    exports.FaceLandmark68Net = FaceLandmark68Net;
    exports.FaceLandmark68TinyNet = FaceLandmark68TinyNet;
    exports.createFaceRecognitionNet = createFaceRecognitionNet;
    exports.FaceRecognitionNet = FaceRecognitionNet;
    exports.allFacesSsdMobilenetv1 = allFacesSsdMobilenetv1;
    exports.allFacesTinyYolov2 = allFacesTinyYolov2;
    exports.allFacesMtcnn = allFacesMtcnn;
    exports.allFaces = allFaces;
    exports.ComposableTask = ComposableTask;
    exports.ComputeFaceDescriptorsTaskBase = ComputeFaceDescriptorsTaskBase;
    exports.ComputeAllFaceDescriptorsTask = ComputeAllFaceDescriptorsTask;
    exports.ComputeSingleFaceDescriptorTask = ComputeSingleFaceDescriptorTask;
    exports.detectSingleFace = detectSingleFace;
    exports.detectAllFaces = detectAllFaces;
    exports.DetectFacesTaskBase = DetectFacesTaskBase;
    exports.DetectAllFacesTask = DetectAllFacesTask;
    exports.DetectSingleFaceTask = DetectSingleFaceTask;
    exports.DetectFaceLandmarksTaskBase = DetectFaceLandmarksTaskBase;
    exports.DetectAllFaceLandmarksTask = DetectAllFaceLandmarksTask;
    exports.DetectSingleFaceLandmarksTask = DetectSingleFaceLandmarksTask;
    exports.FaceMatcher = FaceMatcher;
    exports.nets = nets;
    exports.ssdMobilenetv1 = ssdMobilenetv1;
    exports.tinyFaceDetector = tinyFaceDetector;
    exports.tinyYolov2 = tinyYolov2;
    exports.mtcnn = mtcnn;
    exports.detectFaceLandmarks = detectFaceLandmarks;
    exports.detectFaceLandmarksTiny = detectFaceLandmarksTiny;
    exports.computeFaceDescriptor = computeFaceDescriptor;
    exports.loadSsdMobilenetv1Model = loadSsdMobilenetv1Model;
    exports.loadTinyFaceDetectorModel = loadTinyFaceDetectorModel;
    exports.loadMtcnnModel = loadMtcnnModel;
    exports.loadTinyYolov2Model = loadTinyYolov2Model;
    exports.loadFaceLandmarkModel = loadFaceLandmarkModel;
    exports.loadFaceLandmarkTinyModel = loadFaceLandmarkTinyModel;
    exports.loadFaceRecognitionModel = loadFaceRecognitionModel;
    exports.loadFaceDetectionModel = loadFaceDetectionModel;
    exports.locateFaces = locateFaces;
    exports.detectLandmarks = detectLandmarks;
    exports.createMtcnn = createMtcnn;
    exports.Mtcnn = Mtcnn;
    exports.MtcnnOptions = MtcnnOptions;
    exports.createSsdMobilenetv1 = createSsdMobilenetv1;
    exports.createFaceDetectionNet = createFaceDetectionNet;
    exports.FaceDetectionNet = FaceDetectionNet;
    exports.SsdMobilenetv1 = SsdMobilenetv1;
    exports.SsdMobilenetv1Options = SsdMobilenetv1Options;
    exports.createTinyFaceDetector = createTinyFaceDetector;
    exports.TinyFaceDetector = TinyFaceDetector;
    exports.TinyFaceDetectorOptions = TinyFaceDetectorOptions;
    exports.createTinyYolov2 = createTinyYolov2;
    exports.TinyYolov2 = TinyYolov2$1;
    exports.euclideanDistance = euclideanDistance;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=face-api.js.map

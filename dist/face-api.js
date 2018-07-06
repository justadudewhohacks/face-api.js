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
  var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);};function __extends(e,t){function n(){this.constructor=e;}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}function __decorate(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function __awaiter(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{u(r.next(e));}catch(e){o(e);}}function s(e){try{u(r.throw(e));}catch(e){o(e);}}function u(e){e.done?a(e.value):new n(function(t){t(e.value);}).then(i,s);}u((r=r.apply(e,t||[])).next());})}function __generator(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i);}catch(e){o=[6,e],r=0;}finally{n=a=0;}if(5&o[0])throw o[1];return {value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function isMobile(){var e=navigator.userAgent||navigator.vendor||window.opera;return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}function doc(e){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];}}function assertArgumentIsTensor(e,t,n){assert(e instanceof Tensor,"Argument '"+t+"' passed to '"+n+"' must be a Tensor, but got "+typeof e+".");}function assertArgumentsAreTensors(e,t){var n=function(n){var r=e[n];Array.isArray(r)?r.forEach(function(e,r){assertArgumentIsTensor(e,n+"["+r+"]",t);}):assertArgumentIsTensor(r,n,t);};for(var r in e)n(r);}function shuffle(e){for(var t=e.length,n=0,r=0;t>0;)r=Math.random()*t|0,n=e[--t],e[t]=e[r],e[r]=n;}function clamp(e,t,n){return Math.max(e,Math.min(t,n))}function randUniform(e,t){return Math.random()*(t-e)+e}function distSquared(e,t){for(var n=0,r=0;r<e.length;r++){var a=Number(e[r])-Number(t[r]);n+=a*a;}return n}function assert(e,t){if(!e)throw new Error(t)}function assertShapesMatch(e,t,n){void 0===n&&(n=""),assert(arraysEqual(e,t),n+" Shapes "+e+" and "+t+" must match");}function assertTypesMatch(e,t){assert(e.dtype===t.dtype," The dtypes of the first("+e.dtype+") and second("+t.dtype+") input must match");}function flatten(e,t){if(void 0===t&&(t=[]),Array.isArray(e))for(var n=0;n<e.length;++n)flatten(e[n],t);else t.push(e);return t}function inferShape(e){if(isTypedArray(e))return [e.length];if(!Array.isArray(e))return [];for(var t=[];e instanceof Array;)t.push(e.length),e=e[0];return t}function sizeFromShape(e){if(0===e.length)return 1;for(var t=e[0],n=1;n<e.length;n++)t*=e[n];return t}function isScalarShape(e){return 0===e.length}function arraysEqual(e,t){if(e.length!==t.length)return !1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return !1;return !0}function isInt(e){return e%1==0}function tanh(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return -1;var t=Math.exp(2*e);return (t-1)/(t+1)}function sizeToSquarishShape(e){for(var t=Math.floor(Math.sqrt(e));t>1;--t)if(e%t==0)return [t,e/t];return [1,e]}function createShuffledIndices(e){for(var t=new Uint32Array(e),n=0;n<e;++n)t[n]=n;return shuffle(t),t}function rightPad(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function repeatedTry(e,t,n){return void 0===t&&(t=function(e){return 0}),new Promise(function(r,a){var o=0,i=function(){if(e())r();else{var s=t(++o);null!=n&&o>=n?a():setTimeout(i,s);}};i();})}function getQueryParams(e){var t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return decodeParam(t,n[0],n[1]),n.join("=")}),t}function decodeParam(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"");}function inferFromImplicitShape(e,t){for(var n=1,r=-1,a=0;a<e.length;++a)if(e[a]>0)n*=e[a];else if(-1===e[a]){if(-1!==r)throw Error("Shapes can only have 1 implicit size. Found - 1 at dim "+r+" and dim "+a);r=a;}else if(e[a]<=0)throw Error("Shapes can not be <= 0. Found "+e[a]+" at dim "+a);if(-1===r){if(t>0&&t!==n)throw Error("Size("+t+") must match the product of shape "+e);return e}if(t%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+n);var o=e.slice();return o[r]=t/n,o}function squeezeShape(e,t){for(var n=[],r=[],a=0,o=0;o<e.length;++o){if(null!=t){if(t[a]===o&&e[o]>1)throw new Error("Can't squeeze axis "+o+" since its dim '"+e[o]+"' is not 1");(null==t[a]||t[a]>o)&&1===e[o]&&(n.push(e[o]),r.push(o)),t[a]<=o&&a++;}e[o]>1&&(n.push(e[o]),r.push(o));}return {newShape:n,keptDims:r}}function getTypedArrayFromDType(e,t){var n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else{if("bool"!==e)throw new Error("Unknown data type "+e);n=new Uint8Array(t);}return n}function isTensorInList(e,t){for(var n=0;n<t.length;n++)if(t[n].id===e.id)return !0;return !1}function checkForNaN(e,t,n){if("float32"===t)for(var r=0;r<e.length;r++)if(isNaN(e[r]))throw Error("The result of the '"+n+"' has NaNs.")}function flattenNameArrayMap(e,t){var n=[];if(e instanceof Tensor)n.push(e);else for(var r=e,a=0;a<t.length;a++)n.push(r[t[a]]);return n}function unflattenToNameArrayMap(e,t){if(e.length!==t.length)throw new Error("Cannot unflatten Tensor[], keys and arrays are not of same length.");for(var n={},r=0;r<e.length;r++)n[e[r]]=t[r];return n}function hasEncodingLoss(e,t){return "float32"!==t&&(("int32"!==t||"float32"===e)&&("bool"!==t||"bool"!==e))}function copyTypedArray(e,t){if(null==t||"float32"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){for(var n=new Uint8Array(e.length),r=0;r<n.length;++r)0!==Math.round(e[r])&&(n[r]=1);return n}throw new Error("Unknown data type "+t)}function isTypedArray(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function bytesPerElement(e){if("float32"===e||"int32"===e)return 4;if("bool"===e)return 1;throw new Error("Unknown dtype "+e)}function isFunction(e){return !!(e&&e.constructor&&e.call&&e.apply)}function getTensorsInContainer(e){var t=[];return walkTensorContainer(e,t,new Set),t}function walkTensorContainer(e,t,n){if(null!=e)if(e instanceof Tensor)t.push(e);else if(isIterable(e)){var r=e;for(var a in r){var o=r[a];n.has(o)||(n.add(o),walkTensorContainer(o,t,n));}}}function nearestDivisor(e,t){for(var n=t;n<e;++n)if(e%n==0)return n;return e}function isIterable(e){return Array.isArray(e)||"object"==typeof e}var util=Object.freeze({assertArgumentsAreTensors:assertArgumentsAreTensors,shuffle:shuffle,clamp:clamp,randUniform:randUniform,distSquared:distSquared,assert:assert,assertShapesMatch:assertShapesMatch,assertTypesMatch:assertTypesMatch,flatten:flatten,inferShape:inferShape,sizeFromShape:sizeFromShape,isScalarShape:isScalarShape,arraysEqual:arraysEqual,isInt:isInt,tanh:tanh,sizeToSquarishShape:sizeToSquarishShape,createShuffledIndices:createShuffledIndices,rightPad:rightPad,repeatedTry:repeatedTry,getQueryParams:getQueryParams,inferFromImplicitShape:inferFromImplicitShape,squeezeShape:squeezeShape,getTypedArrayFromDType:getTypedArrayFromDType,isTensorInList:isTensorInList,checkForNaN:checkForNaN,flattenNameArrayMap:flattenNameArrayMap,unflattenToNameArrayMap:unflattenToNameArrayMap,hasEncodingLoss:hasEncodingLoss,copyTypedArray:copyTypedArray,isTypedArray:isTypedArray,bytesPerElement:bytesPerElement,isFunction:isFunction,getTensorsInContainer:getTensorsInContainer,nearestDivisor:nearestDivisor}),FORMAT_LIMIT_NUM_VALS=20,FORMAT_NUM_FIRST_LAST_VALS=3,FORMAT_NUM_SIG_DIGITS=7;function tensorToString(e,t){var n=e.dataSync(),r=computeMaxSizePerColumn(e),a=subTensorToString(n,e.shape,e.strides,r),o=["Tensor"];return t&&(o.push("  dtype: "+e.dtype),o.push("  rank: "+e.rank),o.push("  shape: ["+e.shape+"]"),o.push("  values:")),o.push(a.map(function(e){return "    "+e}).join("\n")),o.join("\n")}function computeMaxSizePerColumn(e){var t=e.dataSync(),n=e.size,r=e.strides[e.strides.length-1],a=new Array(r).fill(0);if(e.rank>1)for(var o=0;o<n/r;o++)for(var i=o*r,s=0;s<r;s++)a[s]=Math.max(a[s],valToString(t[i+s],0).length);return a}function valToString(e,t){return rightPad(parseFloat(e.toFixed(FORMAT_NUM_SIG_DIGITS)).toString(),t)}function subTensorToString(e,t,n,r,a){void 0===a&&(a=!0);var o=t[0],i=t.length;if(0===i)return [e[0].toString()];if(1===i){if(o>FORMAT_LIMIT_NUM_VALS){var s=Array.from(e.subarray(0,FORMAT_NUM_FIRST_LAST_VALS)),u=Array.from(e.subarray(o-FORMAT_NUM_FIRST_LAST_VALS,o));return ["["+s.map(function(e,t){return valToString(e,r[t])}).join(", ")+", ..., "+u.map(function(e,t){return valToString(e,r[o-FORMAT_NUM_FIRST_LAST_VALS+t])}).join(", ")+"]"]}return ["["+Array.from(e).map(function(e,t){return valToString(e,r[t])}).join(", ")+"]"]}var l=t.slice(1),c=n.slice(1),d=n[0],p=[];if(o>FORMAT_LIMIT_NUM_VALS){for(var h=0;h<FORMAT_NUM_FIRST_LAST_VALS;h++){var f=(g=h*d)+d;p.push.apply(p,subTensorToString(e.subarray(g,f),l,c,r,!1));}p.push("...");for(h=o-FORMAT_NUM_FIRST_LAST_VALS;h<o;h++){f=(g=h*d)+d;p.push.apply(p,subTensorToString(e.subarray(g,f),l,c,r,h===o-1));}}else for(h=0;h<o;h++){var g;f=(g=h*d)+d;p.push.apply(p,subTensorToString(e.subarray(g,f),l,c,r,h===o-1));}var m=2===i?",":"";p[0]="["+p[0]+m;for(h=1;h<p.length-1;h++)p[h]=" "+p[h]+m;var v=",\n";for(h=2;h<i;h++)v+="\n";return p[p.length-1]=" "+p[p.length-1]+"]"+(a?"":v),p}function axesAreInnerMostDims(e,t){for(var n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return !1;return !0}function combineLocations(e,t,n){for(var r=e.length+t.length,a=[],o=0,i=0,s=0;s<r;s++)-1===n.indexOf(s)?a.push(e[o++]):a.push(t[i++]);return a}function computeOutAndReduceShapes(e,t){for(var n=[],r=e.length,a=0;a<r;a++)-1===t.indexOf(a)&&n.push(e[a]);return [n,t.map(function(t){return e[t]})]}function expandShapeToKeepDim(e,t){return combineLocations(e,t.map(function(e){return 1}),t)}function parseAxisParam(e,t){var n=t.length;return assert((e=null==e?t.map(function(e,t){return t}):[].concat(e)).every(function(e){return e>=-n&&e<n}),"All values in axis param must be in range [-"+n+", "+n+") but got axis "+e),assert(e.every(function(e){return isInt(e)}),"All values in axis param must be integers but got axis "+e),e.map(function(e){return e<0?n+e:e})}function assertAxesAreInnerMostDims(e,t,n){assert(axesAreInnerMostDims(t,n),e+" supports only inner-most axes for now. Got axes "+t+" and rank-"+n+" input.");}function getAxesPermutation(e,t){if(axesAreInnerMostDims(e,t))return null;for(var n=[],r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach(function(e){return n.push(e)}),n}function getUndoAxesPermutation(e){return e.map(function(e,t){return [t,e]}).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]})}function getInnerMostAxes(e,t){for(var n=[],r=t-e;r<t;++r)n.push(r);return n}function assertParams(e,t,n){var r=e.length,a=t.length;assert(e.length===t.length,"Error in concat"+r+"D: rank of x1 ("+r+") and x2 ("+a+") must be the same."),assert(n>=0&&n<r,"Error in concat"+r+"D: axis must be between 0 and "+(r-1)+".");for(var o=0;o<r;o++)assert(o===n||e[o]===t[o],"Error in concat"+r+"D: Shape ("+e+") does not match ("+t+") along the non-concatenated axis "+o+".");}function computeOutShape(e,t,n){assert(e.length===t.length,"x1 and x2 should have the same rank.");var r=e.slice();return r[n]+=t[n],r}function computeGradientSliceShapes(e,t){return {aBegin:[0,0],aSize:e,bBegin:[0,e[1]],bSize:t}}function operation(e,t,n){var r=n.value;return n.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return tidy(t,function(){return r.apply(void 0,e)})},n}var ConcatOps=function(){function e(){}return e.concat1d=function(t){return e.concat(t,0)},e.concat2d=function(t,n){return e.concat(t,n)},e.concat3d=function(t,n){return e.concat(t,n)},e.concat4d=function(t,n){return e.concat(t,n)},e.concat=function(e,t){void 0===t&&(t=0),assert(e.length>=1,"Pass at least one tensor to concat"),assertArgumentsAreTensors({tensors:e},"concat");var n=e[0];if(1===e.length)return n;for(var r=parseAxisParam(t,n.shape),a=1;a<e.length;++a)n=concat2Tensors(n,e[a],r[0]);return n},__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"concat",null),e}();function concat2Tensors(e,t,n){assertParams(e.shape,t.shape,n);var r=computeOutShape(e.shape,t.shape,n),a=e.as2D(-1,sizeFromShape(e.shape.slice(n))),o=t.as2D(-1,sizeFromShape(t.shape.slice(n))),i=computeGradientSliceShapes(a.shape,o.shape),s=i.aBegin,u=i.aSize,l=i.bBegin,c=i.bSize;return ENV.engine.runKernel(function(e){return e.concat(a,o)},{a:a,b:o},function(e){return {a:function(){return e.slice(s,u)},b:function(){return e.slice(l,c)}}}).reshape(r)}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var alea=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new function(e){var t,n=this,r=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t);}return 2.3283064365386963e-10*(t>>>0)});n.next=function(){var e=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null;}(e),a=t&&t.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+1.1102230246251565e-16*(2097152*o()|0)},o.quick=o,a&&("object"==typeof a&&r(a,n),o.state=function(){return r(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.alea=a;}(0,e,!1);}),xor128=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new function(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next();}(e),a=t&&t.state,o=function(){return (n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},o.int32=n.next,o.quick=o,a&&("object"==typeof a&&r(a,n),o.state=function(){return r(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a;}(0,e,!1);}),xorwow=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new function(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next();}(e),a=t&&t.state,o=function(){return (n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},o.int32=n.next,o.quick=o,a&&("object"==typeof a&&r(a,n),o.state=function(){return r(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a;}(0,e,!1);}),xorshift7=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){null==e&&(e=+new Date);var n=new function(e){var t=this;t.next=function(){var e,n,r=t.x,a=t.i;return e=r[a],n=(e^=e>>>7)^e<<24,n^=(e=r[a+1&7])^e>>>10,n^=(e=r[a+3&7])^e>>>3,n^=(e=r[a+4&7])^e<<7,e=r[a+7&7],n^=(e^=e<<13)^e<<9,r[a]=n,t.i=a+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next();}(t,e);}(e),a=t&&t.state,o=function(){return (n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},o.int32=n.next,o.quick=o,a&&(a.x&&r(a,n),o.state=function(){return r(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a;}(0,e,!1);}),xor4096=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){null==e&&(e=+new Date);var n=new function(e){var t=this;t.next=function(){var e,n,r=t.w,a=t.X,o=t.i;return t.w=r=r+1640531527|0,n=a[o+34&127],e=a[o=o+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=a[o]=n^e,t.i=o,n+(r^r>>>16)|0},function(e,t){var n,r,a,o,i,s=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),a=0,o=-32;o<u;++o)t&&(r^=t.charCodeAt((o+32)%t.length)),0===o&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,o>=0&&(i=i+1640531527|0,a=0==(n=s[127&o]^=r+i)?a+1:0);for(a>=128&&(s[127&(t&&t.length||0)]=-1),a=127,o=512;o>0;--o)r=s[a+34&127],n=s[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[a]=r^n;e.w=i,e.X=s,e.i=a;}(t,e);}(e),a=t&&t.state,o=function(){return (n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},o.int32=n.next,o.quick=o,a&&(a.X&&r(a,n),o.state=function(){return r(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a;}(0,e,!1);}),tychei=createCommonjsModule(function(e){!function(e,t,n){function r(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new function(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,a=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^a,t.a=a-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next();}(e),a=t&&t.state,o=function(){return (n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);}while(0===e);return e},o.int32=n.next,o.quick=o,a&&("object"==typeof a&&r(a,n),o.state=function(){return r(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a;}(0,e,!1);}),seedrandom=createCommonjsModule(function(e){!function(t,n){var r,a=this,o=256,i=6,s="random",u=n.pow(o,i),l=n.pow(2,52),c=2*l,d=o-1;function p(e,p,m){var v=[],y=f(function e(t,n){var r,a=[],o=typeof t;if(n&&"object"==o)for(r in t)try{a.push(e(t[r],n-1));}catch(e){}return a.length?a:"string"==o?t:t+"\0"}((p=1==p?{entropy:!0}:p||{}).entropy?[e,g(t)]:null==e?function(){try{var e;return r&&(e=r.randomBytes)?e=e(o):(e=new Uint8Array(o),(a.crypto||a.msCrypto).getRandomValues(e)),g(e)}catch(e){var n=a.navigator,i=n&&n.plugins;return [+new Date,a,i,a.screen,g(t)]}}():e,3),v),x=new function(e){var t,n=e.length,r=this,a=0,i=r.i=r.j=0,s=r.S=[];n||(e=[n++]);for(;a<o;)s[a]=a++;for(a=0;a<o;a++)s[a]=s[i=d&i+e[a%n]+(t=s[a])],s[i]=t;(r.g=function(e){for(var t,n=0,a=r.i,i=r.j,s=r.S;e--;)t=s[a=d&a+1],n=n*o+s[d&(s[a]=s[i=d&i+t])+(s[i]=t)];return r.i=a,r.j=i,n})(o);}(v),b=function(){for(var e=x.g(i),t=u,n=0;e<l;)e=(e+n)*o,t*=o,n=x.g(1);for(;e>=c;)e/=2,t/=2,n>>>=1;return (e+n)/t};return b.int32=function(){return 0|x.g(4)},b.quick=function(){return x.g(4)/4294967296},b.double=b,f(g(x.S),t),(p.pass||m||function(e,t,r,a){return a&&(a.S&&h(a,x),e.state=function(){return h(x,{})}),r?(n[s]=e,t):e})(b,y,"global"in p?p.global:this==n,p.state)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function f(e,t){for(var n,r=e+"",a=0;a<r.length;)t[d&a]=d&(n^=19*t[d&a])+r.charCodeAt(a++);return g(t)}function g(e){return String.fromCharCode.apply(0,e)}if(n["seed"+s]=p,f(n.random(),t),e.exports){e.exports=p;try{r=require("crypto");}catch(e){}}}([],Math);});seedrandom.alea=alea,seedrandom.xor128=xor128,seedrandom.xorwow=xorwow,seedrandom.xorshift7=xorshift7,seedrandom.xor4096=xor4096,seedrandom.tychei=tychei;var DType,Rank,UpcastInt32AndMap,UpcastBoolAndMap,UpcastFloat32AndMap,seedrandom$1=seedrandom,seedrandom_1=seedrandom$1.alea,MPRandGauss=function(){function e(e,t,n,r,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var o=a||Math.random();this.random=seedrandom_1(o.toString());}return e.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e=this.nextVal;return this.nextVal=NaN,e}for(var t,n,r=!1;!r;){var a=void 0,o=void 0,i=void 0;do{i=(a=2*this.random()-1)*a+(o=2*this.random()-1)*o;}while(i>=1||0===i);var s=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*a*s,n=this.mean+this.stdDev*o*s,this.truncated&&!this.isValidTruncated(t)||(r=!0);}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)},e.prototype.convertValue=function(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)},e.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},e}();!function(e){e.float32="float32",e.int32="int32",e.bool="bool";}(DType||(DType={})),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6";}(Rank||(Rank={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32";}(UpcastInt32AndMap||(UpcastInt32AndMap={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool";}(UpcastBoolAndMap||(UpcastBoolAndMap={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32";}(UpcastFloat32AndMap||(UpcastFloat32AndMap={}));var upcastTypeMap={float32:UpcastFloat32AndMap,int32:UpcastInt32AndMap,bool:UpcastBoolAndMap};function upcastType(e,t){return upcastTypeMap[e][t]}function sumOutType(e){return upcastType(e,"int32")}function getBroadcastDims(e,t){for(var n=e.length,r=[],a=0;a<n;a++){var o=n-1-a,i=e[o]||1;(t[t.length-1-a]||1)>1&&1===i&&r.unshift(o);}return r}function getReductionAxes(e,t){for(var n=[],r=0;r<t.length;r++){var a=e[e.length-r-1],o=t.length-r-1,i=t[o];(null==a||1===a&&i>1)&&n.unshift(o);}return n}function broadcastDimsAreOuter(e){for(var t=0;t<e.length;t++)if(e[t]!==t)return !1;return !0}function assertAndGetBroadcastShape(e,t){for(var n=[],r="Operands could not be broadcast together with shapes "+e+" and "+t+".",a=Math.max(e.length,t.length),o=0;o<a;o++){var i=e[e.length-o-1]||1,s=t[t.length-o-1]||1;if(i>1&&s>1&&i!==s)throw Error(r);n.unshift(Math.max(i,s));}return n}var BinaryOps=function(){function e(){}return e.add=function(e,t){assertArgumentsAreTensors({a:e,b:t},"add"),assertTypesMatch(e,t);var n=assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.add(e,t)},{a:e,b:t},function(r){return {a:function(){var t=r,a=getReductionAxes(e.shape,n);return a.length>0&&(t=t.sum(a)),t.reshape(e.shape)},b:function(){var e=r,a=getReductionAxes(t.shape,n);return a.length>0&&(e=e.sum(a)),e.reshape(t.shape)}}})},e.addStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in addStrict: "),e.add(t)},e.sub=function(e,t){assertArgumentsAreTensors({a:e,b:t},"sub"),assertTypesMatch(e,t);var n=assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.subtract(e,t)},{a:e,b:t},function(r){return {a:function(){var t=r,a=getReductionAxes(e.shape,n);return a.length>0&&(t=t.sum(a)),t.reshape(e.shape)},b:function(){var e=r,a=getReductionAxes(t.shape,n);return a.length>0&&(e=e.sum(a)),e.neg().reshape(t.shape)}}})},e.subStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in subStrict: "),e.sub(t)},e.pow=function(e,t){assertArgumentsAreTensors({base:e,exp:t},"pow");var n=assertAndGetBroadcastShape(e.shape,t.shape);e=e.cast(upcastType(e.dtype,t.dtype)),t=t.cast(upcastType(e.dtype,t.dtype));return ENV.engine.runKernel(function(n,r){return r(n.pow(e,t))},{base:e,exp:t},function(r,a){var o=a[0];return {base:function(){var a=r.mul(t.toFloat().mul(o.div(e))),i=getReductionAxes(e.shape,n);return i.length>0&&(a=a.sum(i)),a.reshape(e.shape)},exp:function(){var a=r.mul(o.mul(e.log()).toFloat()),i=getReductionAxes(t.shape,n);return i.length>0&&(a=a.sum(i)),a.reshape(t.shape)}}})},e.powStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in powStrict: "),e.pow(t)},e.mul=function(e,t){assertArgumentsAreTensors({a:e,b:t},"mul"),assertTypesMatch(e,t);var n=assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.multiply(e,t)},{a:e,b:t},function(r){return {a:function(){var a=r.mul(t.toFloat()),o=getReductionAxes(e.shape,n);return o.length>0?a.sum(o).reshape(e.shape):a},b:function(){var a=r.mul(e.toFloat()),o=getReductionAxes(t.shape,n);return o.length>0?a.sum(o).reshape(t.shape):a}}})},e.mulStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in multiplyStrict: "),e.mul(t)},e.div=function(t,n){var r;if(assertArgumentsAreTensors({a:t,b:n},"div"),assertTypesMatch(t,n),"int32"===t.dtype&&"int32"===n.dtype)return e.floorDiv(t,n);r=function(e){return e.realDivide(t,n)};var a=assertAndGetBroadcastShape(t.shape,n.shape);return ENV.engine.runKernel(r,{a:t,b:n},function(e){return {a:function(){var r=e.div(n.toFloat()),o=getReductionAxes(t.shape,a);return o.length>0?r.sum(o).reshape(t.shape):r},b:function(){var r=e.mul(t.toFloat()),o=getReductionAxes(n.shape,a);o.length>0&&(r=r.sum(o).reshape(n.shape));var i=n.square();return r.div(i.toFloat()).neg()}}})},e.floorDiv=function(e,t){assertArgumentsAreTensors({a:e,b:t},"floorDiv"),assertTypesMatch(e,t);var n=assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.floorDiv(e,t)},{a:e,b:t},function(r){return {a:function(){var a=r.div(t.toFloat()),o=getReductionAxes(e.shape,n);return o.length>0?a.sum(o).reshape(e.shape):a},b:function(){var a=r.mul(e.toFloat()),o=getReductionAxes(t.shape,n);o.length>0&&(a=a.sum(o).reshape(t.shape));var i=t.square();return a.div(i.toFloat()).neg()}}})},e.divStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in divideStrict: "),e.div(t)},e.mod=function(e,t){assertArgumentsAreTensors({a:e,b:t},"mod"),assertTypesMatch(e,t);var n=assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.mod(e,t)},{a:e,b:t},function(r){return {a:function(){var t=getReductionAxes(e.shape,n);return t.length>0?r.sum(t).reshape(e.shape):r},b:function(){var a=r.mul(e.div(t).floor().neg()),o=getReductionAxes(t.shape,n);return o.length>0?a.sum(o).reshape(t.shape):a}}})},e.modStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in modStrict: "),e.mod(t)},e.minimum=function(e,t){assertArgumentsAreTensors({a:e,b:t},"minimum"),assertTypesMatch(e,t),"bool"===e.dtype&&(e=e.toInt()),"bool"===t.dtype&&(t=t.toInt()),assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.minimum(e,t)},{a:e,b:t},function(n){return {a:function(){return n.mul(e.lessEqual(t).toFloat())},b:function(){return n.mul(e.greater(t).toFloat())}}})},e.minimumStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in minimumStrict: "),e.minimum(t)},e.maximum=function(e,t){assertArgumentsAreTensors({a:e,b:t},"maximum"),assertTypesMatch(e,t),"bool"===e.dtype&&(e=e.toInt()),"bool"===t.dtype&&(t=t.toInt()),assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.maximum(e,t)},{a:e,b:t},function(n){return {a:function(){return n.mul(e.greaterEqual(t).toFloat())},b:function(){return n.mul(e.less(t).toFloat())}}})},e.maximumStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in minimumStrict: "),e.maximum(t)},e.squaredDifference=function(e,t){assertArgumentsAreTensors({a:e,b:t},"squaredDifference"),assertTypesMatch(e,t),assertAndGetBroadcastShape(e.shape,t.shape);return ENV.engine.runKernel(function(n){return n.squaredDifference(e,t)},{a:e,b:t},function(n){var r=scalar(2);return {a:function(){return n.mul(e.sub(t).mul(r))},b:function(){return n.mul(t.sub(e).mul(r))}}})},e.squaredDifferenceStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(t)},e.atan2=function(t,n){assertArgumentsAreTensors({a:t,b:n},"atan2"),assertTypesMatch(t,n);var r=assertAndGetBroadcastShape(t.shape,n.shape);return ENV.engine.runKernel(function(e){return e.atan2(t,n)},{a:t,b:n},function(a){return {a:function(){var o=e.add(square(t),square(n)),i=a.mul(n.div(o)),s=getReductionAxes(t.shape,r);return s.length>0&&(i=i.sum(s)),i.reshape(t.shape)},b:function(){var o=e.add(square(t),square(n)),i=neg(a.mul(t.div(o))),s=getReductionAxes(n.shape,r);return s.length>0&&(i=i.sum(s)),i.reshape(n.shape)}}})},__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"add",null),__decorate([operation],e,"addStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"sub",null),__decorate([operation],e,"subStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"pow",null),__decorate([operation],e,"powStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"mul",null),__decorate([operation],e,"mulStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"div",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"floorDiv",null),__decorate([operation],e,"divStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"mod",null),__decorate([operation],e,"modStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"minimum",null),__decorate([operation],e,"minimumStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"maximum",null),__decorate([operation],e,"maximumStrict",null),__decorate([doc({heading:"Operations",subheading:"Arithmetic"}),operation],e,"squaredDifference",null),__decorate([operation],e,"squaredDifferenceStrict",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"atan2",null),e}(),CompareOps=function(){function e(){}return e.notEqual=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"notEqual"),assertTypesMatch(e,t),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.notEqual(e,t)},{a:e,b:t})},e.notEqualStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in notEqualStrict: "),e.notEqual(t)},e.less=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"less"),assertTypesMatch(e,t),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.less(e,t)},{a:e,b:t})},e.lessStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in lessStrict: "),e.less(t)},e.equal=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"equal"),assertTypesMatch(e,t),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.equal(e,t)},{a:e,b:t})},e.equalStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in equalStrict: "),e.equal(t)},e.lessEqual=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"lessEqual"),assertTypesMatch(e,t),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.lessEqual(e,t)},{a:e,b:t})},e.lessEqualStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in lessEqualStrict: "),e.lessEqual(t)},e.greater=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"greater"),assertTypesMatch(e,t),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.greater(e,t)},{a:e,b:t})},e.greaterStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in greaterStrict: "),e.greater(t)},e.greaterEqual=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"greaterEqual"),assertTypesMatch(e,t),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.greaterEqual(e,t)},{a:e,b:t})},e.greaterEqualStrict=function(e,t){return assertShapesMatch(e.shape,t.shape,"Error in greaterEqualStrict: "),e.greaterEqual(t)},__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"notEqual",null),__decorate([operation],e,"notEqualStrict",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"less",null),__decorate([operation],e,"lessStrict",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"equal",null),__decorate([operation],e,"equalStrict",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"lessEqual",null),__decorate([operation],e,"lessEqualStrict",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"greater",null),__decorate([operation],e,"greaterStrict",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"greaterEqual",null),__decorate([operation],e,"greaterEqualStrict",null),e}(),LogicalOps=function(){function e(){}return e.logicalNot=function(e){return assertArgumentsAreTensors({x:e},"logicalNot"),assert("bool"===e.dtype,"Error Array must be of type bool."),ENV.engine.runKernel(function(t){return t.logicalNot(e)},{x:e})},e.logicalAnd=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"logicalAnd"),assert("bool"===e.dtype&&"bool"===t.dtype,"Error Array must be of type bool."),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.logicalAnd(e,t)},{a:e,b:t})},e.logicalOr=function(e,t){return assertArgumentsAreTensors({a:e,b:t},"logicalOr"),assert("bool"===e.dtype&&"bool"===t.dtype,"Error Array must be of type bool."),assertAndGetBroadcastShape(e.shape,t.shape),ENV.engine.runKernel(function(n){return n.logicalOr(e,t)},{a:e,b:t})},e.logicalXor=function(t,n){return assertArgumentsAreTensors({a:t,b:n},"logicalXor"),assert("bool"===t.dtype&&"bool"===n.dtype,"Error Array must be of type bool."),assertAndGetBroadcastShape(t.shape,n.shape),e.logicalOr(t,n).logicalAnd(e.logicalAnd(t,n).logicalNot())},e.where=function(e,t,n){assertArgumentsAreTensors({condition:e,a:t,b:n},"where"),assert("bool"===e.dtype,"Error Condition must be of type bool."),assertShapesMatch(t.shape,n.shape,"Error in where: "),1===e.rank?assert(e.shape[0]===t.shape[0],"The first dimension of `a` must match the size of `condition`."):assertShapesMatch(e.shape,n.shape,"Error in where: ");var r=upcastType(t.dtype,n.dtype);return ENV.engine.runKernel(function(a){return a.where(e,t,n,r)},{condition:e,a:t,b:n},function(r){return {condition:function(){return zerosLike(e)},a:function(){return r.mul(e.cast(t.dtype))},b:function(){return r.mul(e.logicalNot().cast(n.dtype))}}})},__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"logicalNot",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"logicalAnd",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"logicalOr",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"logicalXor",null),__decorate([doc({heading:"Operations",subheading:"Logical"}),operation],e,"where",null),e}(),SegmentOps=function(){function e(){}return e.unsortedSegmentSum=function(e,t,n){assertArgumentsAreTensors({x:e,segmentIds:t},"unsortedSegmentSum"),assert("int32"===t.dtype,"segmentIds must be of dtype `int32`"),assert(isInt(n),"numSegments must be of dtype int");return ENV.engine.runKernel(function(r){return r.unsortedSegmentSum(e,t,n)},{x:e},function(e){return {x:function(){return gatherDropNegatives(e,t)}}})},__decorate([doc({heading:"Operations",subheading:"Segment"}),operation],e,"unsortedSegmentSum",null),e}();function gatherDropNegatives(e,t){for(var n=BinaryOps.maximum(t,ArrayOps.zerosLike(t)),r=ArrayOps.gather(e,n),a=CompareOps.greaterEqual(t,ArrayOps.scalar(0,"int32")),o=r.rank-a.rank,i=0;i<o;++i)a=ArrayOps.expandDims(a,i+1);a=LogicalOps.logicalAnd(a,ArrayOps.ones(r.shape,"bool"));var s=ArrayOps.zerosLike(r);return LogicalOps.where(a,r,s)}var ArrayOps=function(){function e(){}return e.tensor=function(e,t,n){void 0===n&&(n="float32");var r=inferShape(e);return null!=t&&1!==r.length&&assertShapesMatch(t,r,"Error creating a new Tensor. Inferred shape ("+r+") does not match the provided shape ("+t+"). "),isTypedArray(e)||Array.isArray(e)||(e=[e]),t=t||r,Tensor.make(t,{values:toTypedArray(e,n)},n)},e.scalar=function(t,n){if(void 0===n&&(n="float32"),isTypedArray(t)||Array.isArray(t))throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean)");return e.tensor(t,[],n)},e.tensor1d=function(t,n){void 0===n&&(n="float32");var r=inferShape(t);if(1!==r.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return e.tensor(t,r,n)},e.tensor2d=function(t,n,r){if(void 0===r&&(r="float32"),null!=n&&2!==n.length)throw new Error("tensor2d() requires shape to have two numbers");var a=inferShape(t);if(2!==a.length&&1!==a.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===a.length&&null==n)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return n=n||a,e.tensor(t,n,r)},e.tensor3d=function(t,n,r){if(void 0===r&&(r="float32"),null!=n&&3!==n.length)throw new Error("tensor3d() requires shape to have three numbers");var a=inferShape(t);if(3!==a.length&&1!==a.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===a.length&&null==n)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return n=n||a,e.tensor(t,n,r)},e.tensor4d=function(t,n,r){if(void 0===r&&(r="float32"),null!=n&&4!==n.length)throw new Error("tensor4d() requires shape to have four numbers");var a=inferShape(t);if(4!==a.length&&1!==a.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===a.length&&null==n)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return n=n||a,e.tensor(t,n,r)},e.tensor5d=function(t,n,r){if(void 0===r&&(r="float32"),null!=n&&5!==n.length)throw new Error("tensor5d() requires shape to have five numbers");var a=inferShape(t);if(5!==a.length&&1!==a.length)throw new Error("tensor5d() requires values to be            number[][][][][] or flat/TypedArray");if(1===a.length&&null==n)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return n=n||a,e.tensor(t,n,r)},e.tensor6d=function(t,n,r){if(void 0===r&&(r="float32"),null!=n&&6!==n.length)throw new Error("tensor6d() requires shape to have six numbers");var a=inferShape(t);if(6!==a.length&&1!==a.length)throw new Error("tensor6d() requires values to be number[][][][] or flat/TypedArray");if(1===a.length&&null==n)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return n=n||a,e.tensor(t,n,r)},e.ones=function(e,t){void 0===t&&(t="float32");var n=makeOnesTypedArray(sizeFromShape(e),t);return Tensor.make(e,{values:n},t)},e.zeros=function(e,t){void 0===t&&(t="float32");var n=makeZerosTypedArray(sizeFromShape(e),t);return Tensor.make(e,{values:n},t)},e.fill=function(e,t,n){void 0===n&&(n="float32");var r=getTypedArrayFromDType(n,sizeFromShape(e));return r.fill(t),Tensor.make(e,{values:r},n)},e.onesLike=function(t){return assertArgumentsAreTensors({x:t},"onesLike"),e.ones(t.shape,t.dtype)},e.zerosLike=function(t){return assertArgumentsAreTensors({x:t},"zerosLike"),e.zeros(t.shape,t.dtype)},e.clone=function(e){assertArgumentsAreTensors({x:e},"clone");return ENV.engine.runKernel(function(t){return Tensor.make(e.shape,{dataId:e.dataId},e.dtype)},{x:e},function(e){return {x:function(){return e.toFloat()}}})},e.eye=function(t,n,r,a){void 0===a&&(a="float32"),null==n&&(n=t);for(var o=e.buffer([t,n],a),i=t<=n?t:n,s=0;s<i;++s)o.set(1,s,s);var u=o.toTensor().as2D(t,n);if(null==r)return u;if(1===r.length)return e.tile(e.expandDims(u,0),[r[0],1,1]);if(2===r.length)return e.tile(e.expandDims(e.expandDims(u,0),0),[r[0],r[1],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+r.length+"D.")},e.randomNormal=function(t,n,r,a,o){if(void 0===n&&(n=0),void 0===r&&(r=1),null!=a&&"bool"===a)throw new Error("Unsupported data type "+a);for(var i=new MPRandGauss(n,r,a,!1,o),s=e.buffer(t,a),u=0;u<s.values.length;u++)s.values[u]=i.nextValue();return s.toTensor()},e.truncatedNormal=function(t,n,r,a,o){if(void 0===n&&(n=0),void 0===r&&(r=1),null!=a&&"bool"===a)throw new Error("Unsupported data type "+a);for(var i=new MPRandGauss(n,r,a,!0,o),s=e.buffer(t,a),u=0;u<s.values.length;u++)s.values[u]=i.nextValue();return s.toTensor()},e.randomUniform=function(t,n,r,a){void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a="float32");for(var o=e.buffer(t,a),i=0;i<o.values.length;i++)o.values[i]=randUniform(n,r);return o.toTensor()},e.rand=function(e,t,n){var r=sizeFromShape(e),a=null;if(null==n||"float32"===n)a=new Float32Array(r);else if("int32"===n)a=new Int32Array(r);else{if("bool"!==n)throw new Error("Unknown data type "+n);a=new Uint8Array(r);}for(var o=0;o<r;o++)a[o]=t();return Tensor.make(e,{values:a},n)},e.multinomial=function(e,t,n,r){void 0===r&&(r=!1),assertArgumentsAreTensors({logits:e},"multinomial");var a=e.size,o=e.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(o>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+o);n=n||Math.random();var i=1===o?e.as2D(1,-1):e,s=ENV.engine.runKernel(function(e){return e.multinomial(i,r,t,n)},{logits2D:i});return 1===o?s.as1D():s},e.oneHot=function(e,t,n,r){if(void 0===n&&(n=1),void 0===r&&(r=0),assert("int32"===e.dtype,"Indices must be of dtype `int32`"),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);return ENV.engine.runKernel(function(a){return a.oneHot(e,t,n,r)},{indices:e})},e.fromPixels=function(e,t){if(void 0===t&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");return ENV.engine.fromPixels(e,t)},e.toPixels=function(e,t){return __awaiter(this,void 0,void 0,function(){var n,r,a,o,i,s,u,l,c,d,p,h,f,g,m,v,y,x,b;return __generator(this,function(E){switch(E.label){case 0:if(assertArgumentsAreTensors({img:e},"toPixels"),2!==e.rank&&3!==e.rank)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),r=n[0],a=n[1],(o=2===e.rank?1:e.shape[2])>4||2===o)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+o);return i=e.min(),s=e.max(),[4,i.data()];case 1:return u=E.sent()[0],[4,s.data()];case 2:if(l=E.sent()[0],i.dispose(),s.dispose(),"float32"===e.dtype){if(u<0||l>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+u+" - "+l+"].")}else{if("int32"!==e.dtype)throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(u<0||l>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+u+" - "+l+"].")}return [4,e.data()];case 3:for(c=E.sent(),d="float32"===e.dtype?255:1,p=new Uint8ClampedArray(a*r*4),h=0;h<r*a;++h)f=void 0,g=void 0,m=void 0,v=void 0,1===o?(f=c[h]*d,g=c[h]*d,m=c[h]*d,v=255):3===o?(f=c[3*h]*d,g=c[3*h+1]*d,m=c[3*h+2]*d,v=255):4===o&&(f=c[4*h]*d,g=c[4*h+1]*d,m=c[4*h+2]*d,v=c[4*h+3]*d),p[(y=4*h)+0]=Math.round(f),p[y+1]=Math.round(g),p[y+2]=Math.round(m),p[y+3]=Math.round(v);return null!=t&&(t.width=a,t.height=r,x=t.getContext("2d"),b=new ImageData(p,a,r),x.putImageData(b,0,0)),[2,p]}})})},e.reshape=function(e,t){assertArgumentsAreTensors({x:e},"reshape"),t=inferFromImplicitShape(t,e.size),assert(e.size===sizeFromShape(t),"new shape and old shape must have the same number of elements.");return ENV.engine.runKernel(function(n){return n.reshape(e,t)},{x:e},function(t){return {x:function(){return t.reshape(e.shape)}}})},e.squeeze=function(t,n){return assertArgumentsAreTensors({x:t},"squeeze"),e.reshape(t,squeezeShape(t.shape,n).newShape)},e.cast=function(e,t){assertArgumentsAreTensors({x:e},"cast");return ENV.engine.runKernel(function(n){return n.cast(e,t)},{x:e},function(e){return {x:function(){return e.clone()}}})},e.tile=function(t,n){assertArgumentsAreTensors({x:t},"tile"),assert(t.rank===n.length,"Error in transpose: rank of input "+t.rank+" must match length of reps "+n+".");return ENV.engine.runKernel(function(e){return e.tile(t,n)},{x:t},function(r){return {x:function(){var a=e.zerosLike(t);if(1===t.rank)for(var o=0;o<n[0];++o)a=a.add(r.slice([o*t.shape[0]],[t.shape[0]]));else if(2===t.rank)for(o=0;o<n[0];++o)for(var i=0;i<n[1];++i)a=a.add(r.slice([o*t.shape[0],i*t.shape[1]],[t.shape[0],t.shape[1]]));else if(3===t.rank)for(o=0;o<n[0];++o)for(i=0;i<n[1];++i)for(var s=0;s<n[2];++s)a=a.add(r.slice([o*t.shape[0],i*t.shape[1],s*t.shape[2]],[t.shape[0],t.shape[1],t.shape[2]]));else{if(4!==t.rank)throw new Error("Gradient for tile operation is not implemented for rank-"+t.rank+" tensors yet.");for(o=0;o<n[0];++o)for(i=0;i<n[1];++i)for(s=0;s<n[2];++s)for(var u=0;u<n[3];++u)a=a.add(r.slice([o*t.shape[0],i*t.shape[1],s*t.shape[2],u*t.shape[3]],[t.shape[0],t.shape[1],t.shape[2],t.shape[3]]));}return a}}})},e.gather=function(e,t,n){void 0===n&&(n=0),assertArgumentsAreTensors({x:e,indices:t},"gather"),assert("int32"===t.dtype,"Indices must be of dtype `int32`"),n=parseAxisParam(n,e.shape)[0];return ENV.engine.runKernel(function(r){return r.gather(e,t,n)},{x:e},function(r){return {x:function(){if(0===n)return SegmentOps.unsortedSegmentSum(r,t,e.shape[n]);var a=e.shape,o=t.size,i=a.slice(0,n),s=i.length,u=a.slice(n,a.length).slice(1),l=u.length,c=arrayRange(0,s),d=arrayRange(s+1,s+1+l),p=arrayConcat([i,[o],u]),h=r.reshape(p),f=t.reshape([o]),g=arrayConcat([[s],c,d]),m=h.transpose(g),v=SegmentOps.unsortedSegmentSum(m,f,e.shape[n]),y=getUndoAxesPermutation(g);return v=v.transpose(y)}}})},e.pad1d=function(t,n,r){return void 0===r&&(r=0),assert(2===n.length,"Invalid number of paddings. Must be length of 2."),e.pad(t,[n],r)},e.pad2d=function(t,n,r){return void 0===r&&(r=0),assert(2===n.length&&2===n[0].length&&2===n[1].length,"Invalid number of paddings. Must be length of 2 each."),e.pad(t,n,r)},e.pad3d=function(t,n,r){return void 0===r&&(r=0),assert(3===n.length&&2===n[0].length&&2===n[1].length&&2===n[2].length,"Invalid number of paddings. Must be length of 2 each."),e.pad(t,n,r)},e.pad4d=function(t,n,r){return void 0===r&&(r=0),assert(4===n.length&&2===n[0].length&&2===n[1].length&&2===n[2].length&&2===n[3].length,"Invalid number of paddings. Must be length of 2 each."),e.pad(t,n,r)},e.pad=function(e,t,n){if(void 0===n&&(n=0),assertArgumentsAreTensors({x:e},"pad"),0===e.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var r=t.map(function(e){return e[0]});return ENV.engine.runKernel(function(r){return r.pad(e,t,n)},{x:e},function(t){return {x:function(){return t.slice(r,e.shape)}}})},e.stack=function(e,t){if(void 0===t&&(t=0),assertArgumentsAreTensors({tensors:e},"stack"),assert(e.length>=1,"Pass at least one tensor to tf.stack"),1===e.length)return e[0].expandDims(t);var n=e[0].rank,r=e[0].shape,a=e[0].dtype;assert(t<=n,"Axis must be <= rank of the tensor"),e.forEach(function(e){assertShapesMatch(r,e.shape,"All tensors passed to stack must have matching shapes");}),e.forEach(function(e){assert(a===e.dtype,"All tensors passed to stack must have matching dtypes");});var o=e.map(function(e){return e.expandDims(t)});return ConcatOps.concat(o,t)},e.unstack=function(e,t){void 0===t&&(t=0);for(var n,r=e.shape[t],a=Array(e.rank-1).fill(0),o=0,i=0;i<e.rank;i++)i!==t&&(a[o]=e.shape[i],o++);n=Array(r).fill(1);var s=Array(e.rank).fill(0),u=e.shape.slice();return n.map(function(n){u[t]=n;var r=e.slice(s,u);return s[t]+=n,r.reshape(a)})},e.split=function(e,t,n){var r;void 0===n&&(n=0),assertArgumentsAreTensors({x:e},"split"),n=parseAxisParam(n,e.shape)[0],"number"==typeof t?(assert(e.shape[n]%t==0,"Number of splits must evenly divide the axis."),r=Array(t).fill(e.shape[n]/t)):(assert(e.shape[n]===t.reduce(function(e,t){return e+t}),"The sum of sizes must match the size of the axis dimension."),r=t);var a=Array(e.rank).fill(0),o=e.shape.slice();return r.map(function(t){o[n]=t;var r=e.slice(a,o);return a[n]+=t,r})},e.cumsum=function(e,t,n,r){void 0===t&&(t=0),void 0===n&&(n=!1),void 0===r&&(r=!1),assertArgumentsAreTensors({x:e},"cumsum");var a=getAxesPermutation([t|=0],e.rank),o=e;null!=a&&(o=e.transpose(a));var i=getInnerMostAxes(1,e.rank)[0],s=ENV.engine.runKernel(function(e){return e.cumsum(o,i,n,r)},{permutedX:o},function(e){return {permutedX:function(){return e.cumsum(t,n,!r)}}});return null!=a&&(s=s.transpose(a)),s},e.expandDims=function(t,n){void 0===n&&(n=0),assertArgumentsAreTensors({x:t},"expandDims"),assert(n<=t.rank,"Axis must be <= rank of the tensor");var r=t.shape.slice();return r.splice(n,0,1),e.reshape(t,r)},e.linspace=function(t,n,r){if(0===r)throw new Error("Cannot request zero samples");var a=(n-t)/(r-1),o=makeZerosTypedArray(r,"float32");o[0]=t;for(var i=1;i<o.length;i++)o[i]=o[i-1]+a;return e.tensor1d(o,"float32")},e.range=function(t,n,r,a){if(void 0===r&&(r=1),void 0===a&&(a="float32"),0===r)throw new Error("Cannot have a step of zero");if(t===n||t<n&&r<0||n<t&&r>1)return e.zeros([0],a);var o=makeZerosTypedArray(Math.abs(Math.ceil((n-t)/r)),a);n<t&&1===r&&(r=-1),o[0]=t;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return e.tensor1d(o,a)},e.buffer=function(e,t,n){return void 0===t&&(t="float32"),new TensorBuffer(e,t,n)},e.print=function(e,t){void 0===t&&(t=!1),console.log(tensorToString(e,t));},__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"tensor",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"scalar",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"tensor1d",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"tensor2d",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"tensor3d",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"tensor4d",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"tensor5d",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"tensor6d",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"ones",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"zeros",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"fill",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"onesLike",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"zerosLike",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"clone",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"eye",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"randomNormal",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"truncatedNormal",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"randomUniform",null),__decorate([operation],e,"rand",null),__decorate([operation],e,"multinomial",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"oneHot",null),__decorate([doc({heading:"Tensors",subheading:"Creation"}),operation],e,"fromPixels",null),__decorate([doc({heading:"Visualization"})],e,"toPixels",null),__decorate([doc({heading:"Tensors",subheading:"Transformations"}),operation],e,"reshape",null),__decorate([doc({heading:"Tensors",subheading:"Transformations"})],e,"squeeze",null),__decorate([doc({heading:"Tensors",subheading:"Transformations"}),operation],e,"cast",null),__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"tile",null),__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"gather",null),__decorate([doc({heading:"Tensors",subheading:"Transformations"}),operation],e,"pad",null),__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"stack",null),__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"unstack",null),__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"split",null),__decorate([doc({heading:"Operations",subheading:"Scan"})],e,"cumsum",null),__decorate([doc({heading:"Tensors",subheading:"Transformations"}),operation],e,"expandDims",null),__decorate([operation,doc({heading:"Tensors",subheading:"Creation"})],e,"linspace",null),__decorate([operation,doc({heading:"Tensors",subheading:"Creation"})],e,"range",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"buffer",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e,"print",null),e}();function makeZerosTypedArray(e,t){if(null==t||"float32"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error("Unknown data type $ {dtype}")}function makeOnesTypedArray(e,t){for(var n=makeZerosTypedArray(e,t),r=0;r<n.length;r++)n[r]=1;return n}function toTypedArray(e,t){return noConversionNeeded(e,t)?e:(Array.isArray(e)&&(e=flatten(e)),copyTypedArray(e,t))}function noConversionNeeded(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}function arrayRange(e,t){for(var n=[],r=e;r<t;++r)n.push(r);return n}function arrayConcat(e){for(var t=[],n=0;n<e.length;++n)for(var r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var BatchNormOps=function(){function e(){}return e.batchNormalization2d=function(t,n,r,a,o,i){return void 0===a&&(a=.001),assert(2===t.rank,"Error in batchNormalization3D: x must be rank 3 but got rank "+t.rank+"."),assert(2===n.rank||1===n.rank,"Error in batchNormalization2D: mean must be rank 2 or rank 1 but got rank "+n.rank+"."),assert(2===r.rank||1===r.rank,"Error in batchNormalization2D: variance must be rank 2 or rank 1 but got rank "+r.rank+"."),null!=o&&assert(2===o.rank||1===o.rank,"Error in batchNormalization2D: scale must be rank 2 or rank 1 but got rank "+o.rank+"."),null!=i&&assert(2===i.rank||1===i.rank,"Error in batchNormalization2D: offset must be rank 2 or rank 1 but got rank "+i.rank+"."),e.batchNormalization(t,n,r,a,o,i)},e.batchNormalization3d=function(t,n,r,a,o,i){return void 0===a&&(a=.001),assert(3===t.rank,"Error in batchNormalization3D: x must be rank 3 but got rank "+t.rank+"."),assert(3===n.rank||1===n.rank,"Error in batchNormalization3D: mean must be rank 3 or rank 1 but got rank "+n.rank+"."),assert(3===r.rank||1===r.rank,"Error in batchNormalization3D: variance must be rank 3 or rank 1 but got rank "+r.rank+"."),null!=o&&assert(3===o.rank||1===o.rank,"Error in batchNormalization3D: scale must be rank 3 or rank 1 but got rank "+o.rank+"."),null!=i&&assert(3===i.rank||1===i.rank,"Error in batchNormalization3D: offset must be rank 3 or rank 1 but got rank "+i.rank+"."),e.batchNormalization(t,n,r,a,o,i)},e.batchNormalization4d=function(t,n,r,a,o,i){return void 0===a&&(a=.001),assert(4===t.rank,"Error in batchNormalization4D: x must be rank 4 but got rank "+t.rank+"."),assert(4===n.rank||1===n.rank,"Error in batchNormalization4D: mean must be rank 4 or rank 1 but got rank "+n.rank+"."),assert(4===r.rank||1===r.rank,"Error in batchNormalization4D: variance must be rank 4 or rank 1 but got rank "+r.rank+"."),null!=o&&assert(4===o.rank||1===o.rank,"Error in batchNormalization4D: scale must be rank 4 or rank 1 but got rank "+o.rank+"."),null!=i&&assert(4===i.rank||1===i.rank,"Error in batchNormalization4D: offset must be rank 4 or rank 1 but got rank "+i.rank+"."),e.batchNormalization(t,n,r,a,o,i)},e.batchNormalization=function(e,t,n,r,a,o){var i;void 0===r&&(r=.001),assertArgumentsAreTensors({x:e,mean:t,variance:n},"batchNormalization"),null!=a&&assertArgumentsAreTensors({scale:a},"batchNormalization"),null!=o&&assertArgumentsAreTensors({offset:o},"batchNormalization"),assert(t.rank===n.rank,"Batch normalization gradient requires mean and variance to have equal ranks."),assert(null==o||t.rank===o.rank,"Batch normalization gradient requires mean and offset to have equal ranks."),assert(null==a||t.rank===a.rank,"Batch normalization gradient requires mean and scale to have equal ranks."),i=0===e.rank||1===e.rank?e.as4D(1,1,1,e.size):2===e.rank?e.as4D(1,1,e.shape[0],e.shape[1]):3===e.rank?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e;return ENV.engine.runKernel(function(e){return e.batchNormalization(i,batchnormReshape4D(t),batchnormReshape4D(n),r,batchnormReshape4D(a),batchnormReshape4D(o))},{x:e,mean:t,variance:n,scale:a,offset:o},function(o){var s=null==a?ArrayOps.scalar(1):a,u=getReductionAxes(t.shape,i.shape),l=[];if(1===t.rank){for(var c=0;c<i.shape.length-1;++c)l.push(i.shape[c]);l.push(1);}var d=e.sub(t),p=o.mul(s),h=rsqrt(n.add(ArrayOps.scalar(r))),f=h.mul(h).mul(h).mul(ArrayOps.scalar(-.5));return {x:function(){return 1===t.rank?o.mul(ArrayOps.tile(h.as4D(1,1,1,t.shape[0]),l)).mul(s).reshape(e.shape):o.mul(h).mul(s).reshape(e.shape)},mean:function(){var e=h.mul(ArrayOps.scalar(-1)).mul(p);return 1===t.rank&&(e=e.sum(u)),e.reshape(t.shape)},variance:function(){var e=f.mul(d).mul(p);return 1===t.rank&&(e=e.sum(u)),e.reshape(t.shape)},scale:function(){var e=d.mul(h),n=o.mul(e);return 1===t.rank&&(n=n.sum(u)),n.reshape(t.shape)},offset:function(){var e=o;return 1===t.rank&&(e=e.sum(u)),e.reshape(t.shape)}}}).reshape(e.shape)},__decorate([operation],e,"batchNormalization2d",null),__decorate([operation],e,"batchNormalization3d",null),__decorate([operation],e,"batchNormalization4d",null),__decorate([doc({heading:"Operations",subheading:"Normalization"})],e,"batchNormalization",null),e}();function batchnormReshape4D(e){return null==e?null:0===e.rank?e.as1D():1===e.rank?e:2===e.rank?e.as4D(1,1,e.shape[0],e.shape[1]):3===e.rank?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}function computePool2DInfo(e,t,n,r,a,o){void 0===o&&(o="channelsLast");var i,s=parseTupleParam(t),u=s[0],l=s[1];if("channelsLast"===o)i=[u,l,e[3],e[3]];else{if("channelsFirst"!==o)throw new Error("Unknown dataFormat "+o);i=[u,l,e[1],e[1]];}return computeConv2DInfo(e,i,n,1,r,a,!1,o)}function computeConv2DInfo(e,t,n,r,a,o,i,s){void 0===i&&(i=!1),void 0===s&&(s="channelsLast");var u=[-1,-1,-1,-1],l=u[0],c=u[1],d=u[2],p=u[3];if("channelsLast"===s)l=e[0],c=e[1],d=e[2],p=e[3];else{if("channelsFirst"!==s)throw new Error("Unknown dataFormat "+s);l=e[0],p=e[1],c=e[2],d=e[3];}var h,f=t[0],g=t[1],m=t[3],v=parseTupleParam(n),y=v[0],x=v[1],b=parseTupleParam(r),E=b[0],S=b[1],A=getPadAndOutInfo(a,c,d,y,x,getEffectiveFilterSize(f,E),getEffectiveFilterSize(g,S),o),T=A.padInfo,w=A.outHeight,_=A.outWidth,R=i?m*p:m;return "channelsFirst"===s?h=[l,R,w,_]:"channelsLast"===s&&(h=[l,w,_,R]),{batchSize:l,dataFormat:s,inHeight:c,inWidth:d,inChannels:p,outHeight:w,outWidth:_,outChannels:R,padInfo:T,strideHeight:y,strideWidth:x,filterHeight:f,filterWidth:g,dilationHeight:E,dilationWidth:S,inShape:e,outShape:h,filterShape:t}}function computeOutputShape3D(e,t,n,r,a,o){null==a&&(a=computeDefaultPad(e,t,r));var i=e[0],s=e[1],u=conditionalRound((i-t+2*a)/r+1,o);assert(isInt(u),"The output # of rows ("+u+") must be an integer. Change the stride and/or zero pad parameters");var l=conditionalRound((s-t+2*a)/r+1,o);return assert(isInt(l),"The output # of columns ("+l+") must be an integer. Change the stride and/or zero pad parameters"),[u,l,n]}function computeDefaultPad(e,t,n,r){void 0===r&&(r=1);var a=getEffectiveFilterSize(t,r);return Math.floor((e[0]*(n-1)-n+a)/2)}function parseTupleParam(e){return "number"==typeof e?[e,e]:e}function getEffectiveFilterSize(e,t){return t<=1?e:e+(e-1)*(t-1)}function getPadAndOutInfo(e,t,n,r,a,o,i,s){var u,l,c;if("number"==typeof e){u={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};var d=computeOutputShape3D([t,n,1],o,1,r,e,s);l=d[0],c=d[1];}else if("same"===e){var p=((l=Math.ceil(t/r))-1)*r+o-t,h=((c=Math.ceil(n/a))-1)*a+i-n,f=Math.floor(p/2),g=p-f,m=Math.floor(h/2);u={top:f,bottom:g,left:m,right:h-m,type:"SAME"};}else{if("valid"!==e)throw Error("Unknown padding parameter: "+e);u={top:0,bottom:0,left:0,right:0,type:"VALID"},l=Math.ceil((t-o+1)/r),c=Math.ceil((n-i+1)/a);}return {padInfo:u,outHeight:l,outWidth:c}}function conditionalRound(e,t){if(!t)return e;switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error("Unknown roundingMode "+t)}}var ConvOps=function(){function e(){}return e.conv1d=function(t,n,r,a,o,i,s){void 0===o&&(o="NWC"),void 0===i&&(i=1),assertArgumentsAreTensors({x:t,filter:n},"conv1d");var u=t,l=!1;2===t.rank&&(l=!0,u=t.as3D(1,t.shape[0],t.shape[1])),assert(3===u.rank,"Error in conv1d: input must be rank 3, but got rank "+u.rank+"."),assert(3===n.rank,"Error in conv1d: filter must be rank 3, but got rank "+n.rank+"."),null!=s&&assert(isInt(a),"Error in conv1d: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+a+"."),assert(u.shape[2]===n.shape[1],"Error in conv1d: depth of input ("+u.shape[2]+") must match input depth for filter "+n.shape[1]+"."),assert(eitherStridesOrDilationsAreOne(r,i),"Error in conv1D: Either stride or dilation must be 1. Got stride "+r+" and dilation '"+i+"'"),assert("NWC"===o,"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported.");var c=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]),d=u.as4D(u.shape[0],1,u.shape[1],u.shape[2]),p=[1,r],h=[1,i],f=e.conv2d(d,c,p,a,"NHWC",h,s);return l?f.as2D(f.shape[2],f.shape[3]):f.as3D(f.shape[0],f.shape[2],f.shape[3])},e.conv2d=function(t,n,r,a,o,i,s){void 0===o&&(o="NHWC"),void 0===i&&(i=[1,1]),assertArgumentsAreTensors({x:t,filter:n},"conv2d");var u=t,l=!1;3===t.rank&&(l=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),assert(4===u.rank,"Error in conv2d: input must be rank 4, but got rank "+u.rank+"."),assert(4===n.rank,"Error in conv2d: filter must be rank 4, but got rank "+n.rank+"."),null!=s&&assert(isInt(a),"Error in conv2d: pad must be an integer when using, dimRoundingMode "+s+" but got pad "+a+"."),assert(u.shape[3]===n.shape[2],"Error in conv2d: depth of input ("+u.shape[3]+") must match input depth for filter "+n.shape[2]+"."),assert(eitherStridesOrDilationsAreOne(r,i),"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+i+"'"),assert("NHWC"===o,"Error in conv2d: got dataFormat of "+o+" but only NHWC is currently supported.");var c=computeConv2DInfo(u.shape,n.shape,r,i,a,s),d=ENV.engine.runKernel(function(e){return e.conv2d(u,n,c)},{x:u,filter:n},function(t){return assert(tupleValuesAreOne(i),"Error in gradient of conv2D: dilation rates greater than 1 are notyet supported in gradients. Got dilations '"+i+"'"),{x:function(){return e.conv2dDerInput(u.shape,t,n,r,a)},filter:function(){return e.conv2dDerFilter(u,t,n.shape,r,a)}}});return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d},e.conv2dDerInput=function(e,t,n,r,a,o){assertArgumentsAreTensors({dy:t,filter:n},"conv2dDerInput"),assert(e.length===t.rank,"Length of inShape ("+e.length+") and rank of dy ("+t.rank+") must match");var i=e,s=t,u=!1;3===t.rank&&(u=!0,s=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),i=[1,e[0],e[1],e[2]]);var l=i[3],c=s.shape[3];assert(4===i.length,"Error in conv2dDerInput: inShape must be length 4, but got length "+i.length+"."),assert(4===s.rank,"Error in conv2dDerInput: dy must be rank 4, but got rank "+s.rank),assert(4===n.rank,"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank),assert(l===n.shape[2],"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+n.shape[2]+"."),assert(c===n.shape[3],"Error in conv2dDerInput: depth of output ("+c+") must match output depth for filter "+n.shape[3]+"."),null!=o&&assert(isInt(a),"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+".");var d=computeConv2DInfo(i,n.shape,r,1,a,o),p=ENV.engine.runKernel(function(e){return e.conv2dDerInput(s,n,d)},{dy4D:s});return u?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p},e.conv2dDerFilter=function(e,t,n,r,a,o){assertArgumentsAreTensors({x:e,dy:t},"conv2dDerFilter");var i=e;3===e.rank&&(i=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var s=t;3===s.rank&&(s=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),assert(4===i.rank,"Error in conv2dDerFilter: input must be rank 4, but got shape "+i.shape+"."),assert(4===s.rank,"Error in conv2dDerFilter: dy must be rank 4, but got shape "+s.shape+"."),assert(4===n.length,"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."),assert(i.shape[3]===n[2],"Error in conv2dDerFilter: depth of input "+i.shape[3]+") must match input depth in filter ("+n[2]+"."),assert(s.shape[3]===n[3],"Error in conv2dDerFilter: depth of dy ("+s.shape[3]+") must match output depth for filter ("+n[3]+")."),null!=o&&assert(isInt(a),"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+".");var u=computeConv2DInfo(i.shape,n,r,1,a,o);return ENV.engine.runKernel(function(e){return e.conv2dDerFilter(i,s,u)},{x4D:i,dy4D:s})},e.conv2dTranspose=function(t,n,r,a,o,i){return assertArgumentsAreTensors({x:t,filter:n},"conv2dTranspose"),e.conv2dDerInput(r,t,n,a,o,i)},e.depthwiseConv2d=function(e,t,n,r,a,o,i){void 0===a&&(a="NHWC"),void 0===o&&(o=[1,1]),assertArgumentsAreTensors({x:e,filter:t},"depthwiseConv2d");var s=e,u=!1;3===e.rank&&(u=!0,s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),assert(4===s.rank,"Error in depthwiseConv2d: input must be rank 4, but got rank "+s.rank+"."),assert(4===t.rank,"Error in depthwiseConv2d: filter must be rank 4, but got rank "+t.rank+"."),assert(s.shape[3]===t.shape[2],"Error in depthwiseConv2d: number of input channels ("+s.shape[3]+") must match the inChannels dimension in filter "+t.shape[2]+"."),null==o&&(o=[1,1]),assert(eitherStridesOrDilationsAreOne(n,o),"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+o+"'"),null!=i&&assert(isInt(r),"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+r+".");var l=computeConv2DInfo(s.shape,t.shape,n,o,r,i,!0),c=ENV.engine.runKernel(function(e){return e.depthwiseConv2D(s,t,l)},{x:s,filter:t},function(e){return assert(tupleValuesAreOne(o),"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+o+"'"),{x:function(){return depthwiseConv2dDerInput(s.shape,e,t,l)},filter:function(){return depthwiseConv2dDerFilter(s,e,t.shape,l)}}});return u?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c},e.separableConv2d=function(t,n,r,a,o,i,s){void 0===i&&(i=[1,1]),void 0===s&&(s="NHWC"),assertArgumentsAreTensors({x:t,depthwiseFilter:n,pointwiseFilter:r},"separableConv2d");var u=t,l=!1;if(3===t.rank&&(l=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),"NCHW"===s)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");assert(4===u.rank,"Error in separableConv2d: input must be rank 4, but got rank "+u.rank+"."),assert(4===n.rank,"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+n.rank+"."),assert(4===r.rank,"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+n.rank+"."),assert(1===r.shape[0],"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+r.shape[0]+"."),assert(1===r.shape[1],"Error in separableConv2d: the second dimension of pointwise filter  must be 1, but got "+r.shape[1]+".");var c=n.shape[2],d=n.shape[3];assert(r.shape[2]===c*d,"Error in separableConv2d: the third dimension of pointwise filter must be "+c*d+", but got "+r.shape[2]+".");var p=e.depthwiseConv2d(u,n,a,o,s,i),h=e.conv2d(p,r,1,"valid",s);return l?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h},__decorate([doc({heading:"Operations",subheading:"Convolution"}),operation],e,"conv1d",null),__decorate([doc({heading:"Operations",subheading:"Convolution"}),operation],e,"conv2d",null),__decorate([operation],e,"conv2dDerInput",null),__decorate([operation],e,"conv2dDerFilter",null),__decorate([doc({heading:"Operations",subheading:"Convolution"}),operation],e,"conv2dTranspose",null),__decorate([doc({heading:"Operations",subheading:"Convolution"}),operation],e,"depthwiseConv2d",null),__decorate([doc({heading:"Operations",subheading:"Convolution"}),operation],e,"separableConv2d",null),e}();function parseTupleParam$1(e){return "number"==typeof e?[e,e]:e}function tupleValuesAreOne(e){var t=parseTupleParam$1(e),n=t[0],r=t[1];return 1===n&&1===r}function eitherStridesOrDilationsAreOne(e,t){return tupleValuesAreOne(e)||tupleValuesAreOne(t)}function depthwiseConv2dDerInput(e,t,n,r){var a=t,o=!1;3===t.rank&&(o=!0,a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=ENV.engine.runKernel(function(e){return e.depthwiseConv2DDerInput(a,n,r)},{dy4D:a});return o?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}function depthwiseConv2dDerFilter(e,t,n,r){var a=e;3===e.rank&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var o=t;return 3===o.rank&&(o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),ENV.engine.runKernel(function(e){return e.depthwiseConv2DDerFilter(a,o,r)},{x4D:a,dy4D:o})}var Reduction,ImageOps=function(){function e(){}return e.resizeBilinear=function(e,t,n){void 0===n&&(n=!1),assertArgumentsAreTensors({images:e},"resizeBilinear"),assert(3===e.rank||4===e.rank,"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+e.rank+"."),assert(2===t.length,"Error in resizeBilinear: new shape must 2D, but got shape "+t+".");var r=e,a=!1;3===e.rank&&(a=!0,r=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var o=t[0],i=t[1],s=ENV.engine.runKernel(function(e,t){return e.resizeBilinear(r,o,i,n)},{batchImages:r},function(e,t){return {batchImages:function(){return ENV.engine.runKernel(function(t){return t.resizeBilinearBackprop(e,r,n)},{})}}});return a?s.as3D(s.shape[1],s.shape[2],s.shape[3]):s},e.resizeNearestNeighbor=function(e,t,n){void 0===n&&(n=!1),assertArgumentsAreTensors({images:e},"resizeNearestNeighbor"),assert(3===e.rank||4===e.rank,"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+e.rank+"."),assert(2===t.length,"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."),assert("float32"===e.dtype||"int32"===e.dtype,"`images` must have `int32` or `float32` as dtype");var r=e,a=!1;3===e.rank&&(a=!0,r=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var o=t[0],i=t[1],s=ENV.engine.runKernel(function(e){return e.resizeNearestNeighbor(r,o,i,n)},{batchImages:r});return a?s.as3D(s.shape[1],s.shape[2],s.shape[3]):s},__decorate([doc({heading:"Operations",subheading:"Images",namespace:"image"}),operation],e,"resizeBilinear",null),__decorate([doc({heading:"Operations",subheading:"Images",namespace:"image"}),operation],e,"resizeNearestNeighbor",null),e}(),Tracking=function(){function e(){}return e.tidy=function(e,t,n){void 0===n&&(n=!1);var r=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e;}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e;}ENV.engine.startScope(r,n);var a=t();return a instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),ENV.engine.endScope(a,n),a},e.dispose=function(e){getTensorsInContainer(e).forEach(function(e){return e.dispose()});},e.keep=function(e){return ENV.engine.keep(e)},e.time=function(e){return ENV.engine.time(e)},__decorate([doc({heading:"Performance",subheading:"Memory"})],e,"tidy",null),__decorate([doc({heading:"Performance",subheading:"Memory"})],e,"dispose",null),__decorate([doc({heading:"Performance",subheading:"Memory"})],e,"keep",null),__decorate([doc({heading:"Performance",subheading:"Timing"})],e,"time",null),e}(),LinalgOps=function(){function e(){}return e.gramSchmidt=function(e){var t;if(Array.isArray(e)){t=!1,assert(null!=e&&e.length>0,"Gram-Schmidt process: input must not be null, undefined, or empty");for(var n=e[0].shape[0],r=1;r<e.length;++r)assert(e[r].shape[0]===n,"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+e[r].shape[0]+" vs. "+n+")");}else t=!0,e=split(e,e.shape[0],0).map(function(e){return squeeze(e,[0])});assert(e.length<=e[0].shape[0],"Gram-Schmidt: Number of vectors ("+e.length+") exceeds number of dimensions ("+e[0].shape[0]+").");var a=[],o=e,i=function(e){a.push(Tracking.tidy(function(){var t=o[e];if(e>0)for(var n=0;n<e;++n){var r=sum(a[n].mulStrict(t)).mul(a[n]);t=t.sub(r);}return t.div(norm(t,"euclidean"))}));};for(r=0;r<e.length;++r)i(r);return t?stack(a,0):a},__decorate([doc({heading:"Operations",subheading:"Linear Algebra"}),operation],e,"gramSchmidt",null),e}();!function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";}(Reduction||(Reduction={}));var LossOps=function(){function e(){}return e.computeWeightedLoss=function(e,t,n){void 0===n&&(n=Reduction.SUM_BY_NONZERO_WEIGHTS),assertArgumentsAreTensors({losses:e},"computeWeightedLoss"),null!=t&&assertArgumentsAreTensors({weights:t},"computeWeightedLoss");var r=null==t?e:e.mul(t);if(n===Reduction.NONE)return r;if(n===Reduction.SUM)return r.sum();if(n===Reduction.MEAN)return null==t?r.mean():r.sum().div(t.sum());if(n===Reduction.SUM_BY_NONZERO_WEIGHTS){if(null==t)return r.sum().div(scalar(e.size));var a=t.notEqual(scalar(0)).sum().toFloat();return r.sum().div(a)}throw Error("Unknown reduction: "+n)},e.absoluteDifference=function(t,n,r,a){void 0===a&&(a=Reduction.SUM_BY_NONZERO_WEIGHTS),assertArgumentsAreTensors({labels:t,predictions:n},"absoluteDifference"),null!=r&&assertArgumentsAreTensors({weights:r},"absoluteDifference"),assertShapesMatch(t.shape,n.shape,"Error in absoluteDifference: ");var o=t.sub(n).abs();return e.computeWeightedLoss(o,r,a)},e.meanSquaredError=function(t,n,r,a){void 0===a&&(a=Reduction.SUM_BY_NONZERO_WEIGHTS),assertArgumentsAreTensors({labels:t,predictions:n},"meanSquaredError"),null!=r&&assertArgumentsAreTensors({weights:r},"meanSquaredError"),assertShapesMatch(t.shape,n.shape,"Error in meanSquaredError: ");var o=t.squaredDifference(n);return e.computeWeightedLoss(o,r,a)},e.cosineDistance=function(t,n,r,a,o){void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS),assertArgumentsAreTensors({labels:t,predictions:n},"cosineDistance"),null!=a&&assertArgumentsAreTensors({weights:a},"cosineDistance"),assertShapesMatch(t.shape,n.shape,"Error in cosineDistance: ");var i=scalar(1).sub(t.mul(n).sum(r,!0));return e.computeWeightedLoss(i,a,o)},e.hingeLoss=function(t,n,r,a){void 0===a&&(a=Reduction.SUM_BY_NONZERO_WEIGHTS),assertArgumentsAreTensors({labels:t,predictions:n},"hingeLoss"),null!=r&&assertArgumentsAreTensors({weights:r},"hingeLoss"),assertShapesMatch(t.shape,n.shape,"Error in hingeLoss: ");var o=scalar(1);t=scalar(2).mul(t).sub(o);var i=o.sub(t.mul(n)).relu();return e.computeWeightedLoss(i,r,a)},e.logLoss=function(t,n,r,a,o){void 0===a&&(a=1e-7),void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS),assertArgumentsAreTensors({labels:t,predictions:n},"logLoss"),null!=r&&assertArgumentsAreTensors({weights:r},"logLoss"),assertShapesMatch(t.shape,n.shape,"Error in logLoss: ");var i=scalar(1),s=scalar(a),u=t.mul(n.add(s).log()).neg().sub(i.sub(t).mul(i.sub(n).add(s).log()));return e.computeWeightedLoss(u,r,o)},e.huberLoss=function(t,n,r,a,o){void 0===a&&(a=1),void 0===o&&(o=Reduction.SUM_BY_NONZERO_WEIGHTS),assertArgumentsAreTensors({labels:t,predictions:n},"huberLoss"),null!=r&&assertArgumentsAreTensors({weights:r},"huberLoss"),assertShapesMatch(t.shape,n.shape,"Error in huberLoss: ");var i=scalar(a),s=n.sub(t).abs(),u=minimum(s,i),l=s.sub(u),c=scalar(.5).mul(u.square()).add(i.mul(l));return e.computeWeightedLoss(c,r,o)},__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"computeWeightedLoss",null),__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"absoluteDifference",null),__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"meanSquaredError",null),__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"cosineDistance",null),__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"hingeLoss",null),__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"logLoss",null),__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"huberLoss",null),e}(),LRNOps=function(){function e(){}return e.localResponseNormalization=function(e,t,n,r,a){void 0===t&&(t=5),void 0===n&&(n=1),void 0===r&&(r=1),void 0===a&&(a=.5),assertArgumentsAreTensors({x:e},"localResponseNormalization"),assert(4===e.rank||3===e.rank,"Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank "+e.rank+"."),assert(isInt(t),"Error in localResponseNormalization: depthRadius must be an integer\n                     but got depthRadius "+t+".");var o=e,i=!1;3===e.rank&&(i=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var s=ENV.engine.runKernel(function(e){return e.localResponseNormalization4D(o,t,n,r,a)},{x4D:o});return i?s.as3D(s.shape[1],s.shape[2],s.shape[3]):s},__decorate([doc({heading:"Operations",subheading:"Normalization"}),operation],e,"localResponseNormalization",null),e}(),LSTMOps=function(){function e(){}return e.multiRNNCell=function(e,t,n,r){assertArgumentsAreTensors({data:t,c:n,h:r},"multiRNNCell");for(var a=t,o=[],i=0;i<e.length;i++){var s=e[i](a,n[i],r[i]);o.push(s[0]),o.push(s[1]),a=s[1];}var u=[],l=[];for(i=0;i<o.length;i+=2)u.push(o[i]),l.push(o[i+1]);return [u,l]},e.basicLSTMCell=function(e,t,n,r,a,o){assertArgumentsAreTensors({forgetBias:e,lstmKernel:t,lstmBias:n,data:r,c:a,h:o},"basicLSTMCell");var i=r.concat(o,1).matMul(t).add(n),s=i.shape[0],u=i.shape[1]/4,l=[s,u],c=i.slice([0,0],l),d=i.slice([0,u],l),p=i.slice([0,2*u],l),h=i.slice([0,3*u],l),f=c.sigmoid().mulStrict(d.tanh()).addStrict(a.mulStrict(e.add(p).sigmoid()));return [f,f.tanh().mulStrict(h.sigmoid())]},__decorate([doc({heading:"Operations",subheading:"RNN"}),operation],e,"multiRNNCell",null),__decorate([doc({heading:"Operations",subheading:"RNN"}),operation],e,"basicLSTMCell",null),e}(),MatmulOps=function(){function e(){}return e.matMul=function(e,t,n,r){void 0===n&&(n=!1),void 0===r&&(r=!1),assertArgumentsAreTensors({a:e,b:t},"matMul");var a=n?e.shape[0]:e.shape[1],o=r?t.shape[1]:t.shape[0];assert(2===e.rank&&2===t.rank,"Error in matMul: inputs must be rank 2, got ranks "+e.rank+" and "+t.rank+"."),assert(a===o,"Error in matMul: inner shapes ("+a+") and ("+o+") of Tensors with shapes "+e.shape+" and "+t.shape+" and transposeA="+n+" and transposeB="+r+" must match.");return ENV.engine.runKernel(function(a){return a.matMul(e,t,n,r)},{a:e,b:t},function(a){return n||r?!n&&r?{a:function(){return a.matMul(t.toFloat(),!1,!1)},b:function(){return a.matMul(e.toFloat(),!0,!1)}}:n&&!r?{a:function(){return t.toFloat().matMul(a,!1,!0)},b:function(){return e.toFloat().matMul(a,!1,!1)}}:{a:function(){return t.toFloat().matMul(a,!0,!0)},b:function(){return a.matMul(e.toFloat(),!0,!0)}}:{a:function(){return a.matMul(t.toFloat(),!1,!0)},b:function(){return e.toFloat().matMul(a,!0,!1)}}})},e.vectorTimesMatrix=function(e,t){return assert(1===e.rank,"Error in vectorTimesMatrix: first input must be rank 1, but got rank "+e.rank+"."),assert(2===t.rank,"Error in vectorTimesMatrix: second input must be rank 2, but got rank "+t.rank+"."),assert(e.size===t.shape[0],"Error in vectorTimesMatrix: size of vector ("+e.size+") must match first dimension of matrix ("+t.shape[0]+")"),e.as2D(1,-1).matMul(t).as1D()},e.matrixTimesVector=function(e,t){return assert(1===t.rank,"Error in matrixTimesVector: second input must rank 1, but got rank "+t.rank+"."),assert(2===e.rank,"Error in matrixTimesVector: first input must be a rank 2, but got rank "+e.rank+"."),assert(t.size===e.shape[1],"Error in matrixTimesVector: size of first rank 1 input "+t.size+" must match inner dimension of second rank 2 input, but got shape "+e.shape+"."),e.matMul(t.as2D(-1,1)).as1D()},e.dotProduct=function(e,t){return assert(1===e.rank&&1===t.rank,"Error in dotProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+t.rank+"."),assert(e.size===t.size,"Error in dotProduct: size of inputs ("+e.size+") and ("+t.size+") must match."),e.as2D(1,-1).matMul(t.as2D(-1,1)).asScalar()},e.outerProduct=function(e,t){return assert(1===e.rank&&1===t.rank,"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+t.rank+"."),e.as2D(-1,1).matMul(t.as2D(1,-1))},e.dot=function(e,t){assert(!(1!==e.rank&&2!==e.rank||1!==t.rank&&2!==t.rank),"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+t.rank+".");var n=1===e.rank?e.size:e.shape[1],r=1===t.rank?t.size:t.shape[0];return assert(n===r,"Error in dot: inner dimensions of inputs must match, but got "+n+" and "+r+"."),1===e.rank&&1===t.rank?e.as2D(1,-1).matMul(t.as2D(-1,1)).asScalar():1===e.rank&&2===t.rank?e.as2D(1,-1).matMul(t.as2D(t.shape[0],t.shape[1])).as1D():2===e.rank&&1===t.rank?e.matMul(t.as2D(-1,1)).as1D():e.matMul(t.as2D(t.shape[0],t.shape[1]))},__decorate([doc({heading:"Operations",subheading:"Matrices"}),operation],e,"matMul",null),__decorate([operation],e,"vectorTimesMatrix",null),__decorate([operation],e,"matrixTimesVector",null),__decorate([operation],e,"dotProduct",null),__decorate([doc({heading:"Operations",subheading:"Matrices"}),operation],e,"outerProduct",null),__decorate([doc({heading:"Operations",subheading:"Matrices"}),operation],e,"dot",null),e}(),MovingAverageOps=function(){function e(){}return e.movingAverage=function(e,t,n,r,a){void 0===a&&(a=!0),assertArgumentsAreTensors({v:e,x:t},"movingAverage"),assertTypesMatch(e,t),assert(arraysEqual(e.shape,t.shape),"Shape mismatch in v and x");var o=ArrayOps.scalar(1);n="number"==typeof n?ArrayOps.scalar(n):n;var i=o.sub(n),s=t.sub(e).mul(i);return a&&(assert(null!=r,"When using zeroDebias: true, step is required."),r="number"==typeof r?ArrayOps.scalar(r):r,s=s.div(o.sub(BinaryOps.pow(n,r)))),e.add(s)},__decorate([doc({heading:"Operations",subheading:"Moving Average"}),operation],e,"movingAverage",null),e}(),NormOps=function(){function e(){}return e.norm=function(e,t,n,r){void 0===t&&(t="euclidean"),void 0===n&&(n=null),void 0===r&&(r=!1),assertArgumentsAreTensors({x:e},"norm");var a=normImpl(e,t,n),o=a.shape;if(r){var i=parseAxisParam(n,e.shape);o=expandShapeToKeepDim(a.shape,i);}return a.reshape(o)},__decorate([doc({heading:"Operations",subheading:"Matrices"}),operation],e,"norm",null),e}();function normImpl(e,t,n){if(void 0===n&&(n=null),0===e.rank)return e.abs();if(1!==e.rank&&null===n)return normImpl(e.reshape([-1]),t,n);if(1===e.rank||"number"==typeof n||n instanceof Array&&1===n.length){if(1===t)return e.abs().sum(n);if(t===1/0)return e.abs().max(n);if(t===-1/0)return e.abs().min(n);if("euclidean"===t||2===t)return e.abs().pow(scalar(2,"int32")).sum(n).sqrt();throw new Error("Error in norm: invalid ord value: "+t)}if(n instanceof Array&&2===n.length){if(1===t)return e.abs().sum(n[0]).max(n[1]-1);if(t===1/0)return e.abs().sum(n[1]).max(n[0]);if(t===-1/0)return e.abs().sum(n[1]).min(n[0]);if("fro"===t||"euclidean"===t)return e.square().sum(n).sqrt();throw new Error("Error in norm: invalid ord value: "+t)}throw new Error("Error in norm: invalid axis: "+n)}var PoolOps=function(){function e(){}return e.maxPool=function(t,n,r,a,o){assertArgumentsAreTensors({x:t},"maxPool");var i=t,s=!1;3===t.rank&&(s=!0,i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),assert(4===i.rank,"Error in maxPool: input must be rank 4 but got rank "+i.rank+"."),null!=o&&assert(isInt(a),"Error in maxPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+".");var u=computePool2DInfo(i.shape,n,r,a,o),l=ENV.engine.runKernel(function(e,t){return t(e.maxPool(i,u))},{x:i},function(t,o){var s=o[0];return {x:function(){return e.maxPoolBackprop(t,i,s,n,r,a)}}});return s?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l},e.maxPoolBackprop=function(e,t,n,r,a,o,i){assertArgumentsAreTensors({dy:e,input:t,output:n},"maxPoolBackprop"),assert(t.rank===e.rank,"Rank of input ("+t.rank+") does not match rank of dy ("+e.rank+")"),assert(4===e.rank,"Error in maxPoolBackprop: dy must be rank 4 but got rank "+e.rank+"."),assert(4===t.rank,"Error in maxPoolBackprop: input must be rank 4 but got rank "+t.rank+"."),null!=i&&assert(isInt(o),"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+".");var s=computePool2DInfo(t.shape,r,a,o,i);return ENV.engine.runKernel(function(r){return r.maxPoolBackprop(e,t,n,s)},{dy:e,input:t})},e.avgPool=function(t,n,r,a,o){assertArgumentsAreTensors({x:t},"avgPool"),assert("float32"===t.dtype,"The input dtype to avgPool must be float32");var i=t,s=!1;3===t.rank&&(s=!0,i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),assert(4===i.rank,"Error in avgPool: x must be rank 4 but got rank "+i.rank+"."),null!=o&&assert(isInt(a),"Error in avgPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+".");var u=computePool2DInfo(i.shape,n,r,a),l=ENV.engine.runKernel(function(e){return e.avgPool(i,u)},{x:i},function(t){return {x:function(){return e.avgPoolBackprop(t,i,n,r,a)}}});return l=l.cast(t.dtype),s?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l},e.avgPoolBackprop=function(e,t,n,r,a){assertArgumentsAreTensors({dy:e,input:t},"avgPoolBackprop"),assert(t.rank===e.rank,"Rank of input ("+t.rank+") does not match rank of dy ("+e.rank+")");var o=t,i=e,s=!1;3===t.rank&&(s=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),i=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),assert(4===i.rank,"Error in avgPoolBackprop: dy must be rank 4 but got rank "+i.rank+"."),assert(4===o.rank,"Error in avgPoolBackprop: input must be rank 4 but got rank "+o.rank+".");var u=computePool2DInfo(o.shape,n,r,a),l=ENV.engine.runKernel(function(e){return e.avgPoolBackprop(i,o,u)},{dy4D:i,input4D:o});return s?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l},__decorate([doc({heading:"Operations",subheading:"Convolution"}),operation],e,"maxPool",null),__decorate([operation],e,"maxPoolBackprop",null),__decorate([doc({heading:"Operations",subheading:"Convolution"}),operation],e,"avgPool",null),__decorate([operation],e,"avgPoolBackprop",null),e}(),ReductionOps=function(){function e(){}return e.logSumExp=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1),assertArgumentsAreTensors({x:e},"logSumExp");var r=parseAxisParam(t,e.shape),a=e.max(r,!0),o=e.sub(a).exp().sum(r).log(),i=a.reshape(o.shape).add(o);if(n){var s=expandShapeToKeepDim(i.shape,r);return i.reshape(s)}return i},e.sum=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1),assertArgumentsAreTensors({x:e},"sum"),"bool"===e.dtype&&(e=e.toInt());var r=parseAxisParam(t,e.shape);return customGrad(function(e){var t=getAxesPermutation(r,e.rank),a=r,o=e;null!=t&&(o=e.transpose(t),a=getInnerMostAxes(a.length,e.rank));var i=ENV.engine.runKernel(function(e){return e.sum(o,a)},{permutedX:o});if(n){var s=expandShapeToKeepDim(i.shape,r);i=i.reshape(s);}return {value:i,gradFunc:function(t){var n=e.shape.slice();return r.forEach(function(e){n[e]=1;}),t.reshape(n).mul(ones(e.shape,"float32"))}}})(e)},e.mean=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1),assertArgumentsAreTensors({x:e},"mean");var r=parseAxisParam(t,e.shape),a=sizeFromShape(computeOutAndReduceShapes(e.shape,r)[1]);return customGrad(function(e){var o=scalar(a);return {value:(o.dtype===e.dtype?e:e.cast(o.dtype)).div(o).sum(t,n),gradFunc:function(t){var n=e.shape.slice();return r.forEach(function(e){n[e]=1;}),t.reshape(n).mul(ones(e.shape,"float32")).div(o)}}})(e)},e.min=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1),assertArgumentsAreTensors({x:e},"min");var r=parseAxisParam(t,e.shape),a=r,o=getAxesPermutation(a,e.rank);null!=o&&(e=e.transpose(o),a=getInnerMostAxes(a.length,e.rank));var i=ENV.engine.runKernel(function(t){return t.min(e,a)},{x:e});if(n){var s=expandShapeToKeepDim(i.shape,r);return i.reshape(s)}return i},e.max=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1),assertArgumentsAreTensors({x:e},"max");var r=parseAxisParam(t,e.shape),a=r,o=getAxesPermutation(a,e.rank);null!=o&&(e=e.transpose(o),a=getInnerMostAxes(a.length,e.rank));var i=ENV.engine.runKernel(function(t){return t.max(e,a)},{x:e});if(n){var s=expandShapeToKeepDim(i.shape,r);return i.reshape(s)}return i},e.argMin=function(e,t){void 0===t&&(t=0),assertArgumentsAreTensors({x:e},"argMin"),null==t&&(t=0);var n=parseAxisParam(t,e.shape),r=getAxesPermutation(n,e.rank);return null!=r&&(e=e.transpose(r),n=getInnerMostAxes(n.length,e.rank)),ENV.engine.runKernel(function(t){return t.argMin(e,n[0])},{x:e})},e.argMax=function(e,t){void 0===t&&(t=0),assertArgumentsAreTensors({x:e},"argMax"),null==t&&(t=0);var n=parseAxisParam(t,e.shape),r=getAxesPermutation(n,e.rank);return null!=r&&(e=e.transpose(r),n=getInnerMostAxes(n.length,e.rank)),ENV.engine.runKernel(function(t){return t.argMax(e,n[0])},{x:e})},e.all=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1),assertArgumentsAreTensors({x:e},"all"),assert("bool"===e.dtype,"Error Array must be of type bool.");var r=parseAxisParam(t,e.shape),a=r,o=getAxesPermutation(a,e.rank);null!=o&&(e=e.transpose(o),a=getInnerMostAxes(a.length,e.rank));var i=ENV.engine.runKernel(function(t){return t.all(e,a)},{x:e});if(n){var s=expandShapeToKeepDim(i.shape,r);return i.reshape(s)}return i},e.moments=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1),assertArgumentsAreTensors({x:e},"moments");var r=parseAxisParam(t,e.shape),a=e.mean(r,n),o=a.shape;return n||(o=expandShapeToKeepDim(a.shape,r)),{mean:a,variance:e.toFloat().sub(a.reshape(o)).square().mean(r,n)}},__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"logSumExp",null),__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"sum",null),__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"mean",null),__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"min",null),__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"max",null),__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"argMin",null),__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"argMax",null),__decorate([doc({heading:"Operations",subheading:"Reduction"}),operation],e,"all",null),__decorate([doc({heading:"Operations",subheading:"Normalization"}),operation],e,"moments",null),e}(),ReverseOps=function(){function e(){}return e.reverse1d=function(t){return assert(1===t.rank,"Error in reverse1D: x must be rank 1 but got\n             rank "+t.rank+"."),e.reverse(t,0)},e.reverse2d=function(t,n){return assert(2===t.rank,"Error in reverse2D: x must be rank 2 but got\n             rank "+t.rank+"."),e.reverse(t,n)},e.reverse3d=function(t,n){return assert(3===t.rank,"Error in reverse3D: x must be rank 3 but got\n             rank "+t.rank+"."),e.reverse(t,n)},e.reverse4d=function(t,n){return assert(4===t.rank,"Error in reverse4D: x must be rank 4 but got\n             rank "+t.rank+"."),e.reverse(t,n)},e.reverse=function(e,t){if(assertArgumentsAreTensors({x:e},"reverse"),0===e.rank)return e.clone();var n=parseAxisParam(t,e.shape);return ENV.engine.runKernel(function(t){return t.reverse(e,n)},{x:e},function(e){return {x:function(){return e.reverse(n)}}}).reshapeAs(e)},__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"reverse",null),e}(),SigmoidCrossEntropyOps=function(){function e(){}return e.sigmoidCrossEntropyWithLogits=function(e,t){assertArgumentsAreTensors({labels:e,logits:t},"sigmoidCrossEntropyWithLogits"),assertShapesMatch(e.shape,t.shape,"Error in sigmoidCrossEntropyWithLogits: ");var n=t.relu(),r=t.mul(e),a=t.abs().neg().exp().log1p();return n.sub(r).add(a)},__decorate([doc({heading:"Operations",subheading:"Cross Entropy"}),operation],e,"sigmoidCrossEntropyWithLogits",null),e}();function assertParamsValid(e,t,n){assert(e.rank===t.length,"Error in slice"+e.rank+"D: Length of begin "+t+" must match the rank of the array ("+e.rank+")."),assert(e.rank===n.length,"Error in slice"+e.rank+"D: Length of size "+n+" must match the rank of the array ("+e.rank+").");for(var r=0;r<e.rank;++r)assert(t[r]+n[r]<=e.shape[r],"Error in slice"+e.rank+"D: begin["+r+"] + size["+r+"] ("+(t[r]+n[r])+") would overflow input.shape["+r+"] ("+e.shape[r]+")");}function getStridedSlicedInfo(e,t,n,r,a,o){void 0===a&&(a=0),void 0===o&&(o=0);for(var i=[],s=[],u=0;u<e.length;u++)i[u]=startForAxis(a,t,r,e,u),s[u]=stopForAxis(o,n,r,e,u);var l=new Array(e.length).fill(0);return l=l.map(function(e,t){for(var n=0,a=i[t];!(r[t]>0?a>=s[t]:a<=s[t]);a+=r[t])n+=1;return n}),[i,l]}function startForAxis(e,t,n,r,a){var o=t[a];e&1<<a&&(o=n[a]>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var i=r[a];return o<0&&(o+=i),o=clamp(0,o,i-1)}function stopForAxis(e,t,n,r,a){var o=t[a];e&1<<a&&(o=n[a]>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var i=r[a];return o<0&&(o+=i),o=n[a]>0?clamp(0,o,i):clamp(-1,o,i-1)}var SliceOps=function(){function e(){}return e.slice1d=function(t,n,r){return assert(1===t.rank,"slice1d expects a rank-1 tensor, but got a rank-"+t.rank+" tensor"),e.slice(t,[n],[r])},e.slice2d=function(t,n,r){return assert(2===t.rank,"slice1d expects a rank-2 tensor, but got a rank-"+t.rank+" tensor"),e.slice(t,n,r)},e.slice3d=function(t,n,r){return assert(3===t.rank,"slice1d expects a rank-3 tensor, but got a rank-"+t.rank+" tensor"),e.slice(t,n,r)},e.slice4d=function(t,n,r){return assert(4===t.rank,"slice1d expects a rank-4 tensor, but got a rank-"+t.rank+" tensor"),e.slice(t,n,r)},e.slice=function(e,t,n){if(assertArgumentsAreTensors({x:e},"slice"),0===e.rank)throw new Error("Slicing scalar is not possible");var r,a;r="number"==typeof t?[t].concat(new Array(e.rank-1).fill(0)):t.length<e.rank?t.concat(new Array(e.rank-t.length).fill(0)):t,a=(a=null==n?new Array(e.rank).fill(-1):"number"==typeof n?[n].concat(new Array(e.rank-1).fill(-1)):n.length<e.rank?n.concat(new Array(e.rank-n.length).fill(-1)):n).map(function(t,n){return t>=0?t:(assert(-1===t,"Bad value in size"),e.shape[n]-r[n])}),assertParamsValid(e,r,a);var o=e.shape;return ENV.engine.runKernel(function(t){return t.slice(e,r,a)},{x:e},function(e){for(var t=[],n=0;n<e.rank;n++)t.push([r[n],o[n]-r[n]-a[n]]);return {x:function(){return e.pad(t)}}})},__decorate([doc({heading:"Tensors",subheading:"Slicing and Joining"}),operation],e,"slice",null),e}(),SoftmaxOps=function(){function e(){}return e.softmax=function(e,t){if(void 0===t&&(t=-1),assertArgumentsAreTensors({logits:e},"softmax"),-1===t&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return customGrad(function(e){var n=e.logSumExp([t],!0),r=e.toFloat().sub(n).exp();return {value:r,gradFunc:function(e){var n=e.mul(r);return n.sub(n.sum([t],!0).mul(r))}}})(e)},e.softmaxCrossEntropy=function(e,t,n){if(void 0===n&&(n=-1),assertArgumentsAreTensors({labels:e,logits:t},"softmaxCrossEntropy"),assertShapesMatch(e.shape,t.shape,"Error in softmaxCrossEntropy: "),-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+t.rank+" and dim was "+n);return customGrad(function(e,t){var r=t.softmax(n);return {value:scalar(1e-5).add(r).log().mul(e).neg().sum([n]),gradFunc:function(t){var a=expandShapeToKeepDim(t.shape,[n]);return [t.reshape(a).mul(e.toFloat().sub(r)),t.reshape(a).mul(r.sub(e.toFloat()))]}}})(e,t)},__decorate([doc({heading:"Operations",subheading:"Normalization"}),operation],e,"softmax",null),__decorate([doc({heading:"Training",subheading:"Losses",namespace:"losses"}),operation],e,"softmaxCrossEntropy",null),e}(),StridedSliceOps=function(){function e(){}return e.stridedSlice=function(e,t,n,r,a,o){return void 0===a&&(a=0),void 0===o&&(o=0),assertArgumentsAreTensors({x:e},"stridedSlice"),ENV.engine.runKernel(function(i){return i.stridedSlice(e,t,n,r,a,o)},{x:e})},__decorate([doc({heading:"Operations",subheading:"Slicing and Joining"}),operation],e,"stridedSlice",null),e}(),TransposeOps=function(){function e(){}return e.transpose=function(e,t){if(assertArgumentsAreTensors({x:e},"transpose"),null==t&&(t=e.shape.map(function(e,t){return t}).reverse()),assert(e.rank===t.length,"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."),t.forEach(function(n){assert(n>=0&&n<e.rank,"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t);}),e.rank<=1)return e.clone();return ENV.engine.runKernel(function(n){return n.transpose(e,t)},{x:e},function(e){var n=getUndoAxesPermutation(t);return {x:function(){return e.transpose(n)}}})},__decorate([doc({heading:"Operations",subheading:"Matrices"}),operation],e,"transpose",null),e}(),SELU_SCALEALPHA=1.7580993408473768,SELU_SCALE=1.0507009873554805,UnaryOps=function(){function e(){}return e.neg=function(e){assertArgumentsAreTensors({x:e},"neg");return ENV.engine.runKernel(function(t){return t.neg(e)},{x:e},function(e){return {x:function(){return e.neg()}}})},e.ceil=function(e){assertArgumentsAreTensors({x:e},"ceil");return ENV.engine.runKernel(function(t){return t.ceil(e)},{x:e},function(e){return {x:function(){return zerosLike(e)}}})},e.floor=function(e){assertArgumentsAreTensors({x:e},"floor");return ENV.engine.runKernel(function(t){return t.floor(e)},{x:e},function(e){return {x:function(){return zerosLike(e)}}})},e.sign=function(e){assertArgumentsAreTensors({x:e},"sign");return ENV.engine.runKernel(function(t){return t.sign(e)},{x:e},function(e){return {x:function(){return zerosLike(e)}}})},e.round=function(e){assertArgumentsAreTensors({x:e},"round");return ENV.engine.runKernel(function(t){return t.round(e)},{x:e},function(e){return {x:function(){return zerosLike(e)}}})},e.exp=function(e){assertArgumentsAreTensors({x:e},"exp");return ENV.engine.runKernel(function(t,n){return n(t.exp(e))},{x:e},function(e,t){var n=t[0];return {x:function(){return e.mulStrict(n)}}})},e.expm1=function(e){assertArgumentsAreTensors({x:e},"expm1");return ENV.engine.runKernel(function(t){return t.expm1(e)},{x:e},function(t){return {x:function(){return t.mulStrict(e.exp())}}})},e.log=function(e){assertArgumentsAreTensors({x:e},"log");return ENV.engine.runKernel(function(t){return t.log(e)},{x:e},function(t){return {x:function(){return t.divStrict(e.toFloat())}}})},e.log1p=function(e){assertArgumentsAreTensors({x:e},"log1p");return ENV.engine.runKernel(function(t){return t.log1p(e)},{x:e},function(t){return {x:function(){return t.divStrict(e.add(scalar(1)))}}})},e.sqrt=function(e){assertArgumentsAreTensors({x:e},"sqrt");return ENV.engine.runKernel(function(t){return t.sqrt(e)},{x:e},function(t){return {x:function(){return t.divStrict(e.toFloat().sqrt().mul(scalar(2)))}}})},e.rsqrt=function(e){assertArgumentsAreTensors({x:e},"rsqrt");return ENV.engine.runKernel(function(t){return t.rsqrt(e)},{x:e},function(t){return {x:function(){return t.divStrict(e.pow(scalar(1.5)).mul(scalar(2))).neg()}}})},e.square=function(e){assertArgumentsAreTensors({x:e},"square");return ENV.engine.runKernel(function(t){return t.square(e)},{x:e},function(t){return {x:function(){return t.mulStrict(e.toFloat().mul(scalar(2)))}}})},e.reciprocal=function(e){assertArgumentsAreTensors({x:e},"reciprocal");return ENV.engine.runKernel(function(t){return t.reciprocal(e)},{x:e},function(t){return {x:function(){return t.divStrict(e.square().neg())}}})},e.abs=function(e){assertArgumentsAreTensors({x:e},"abs");return ENV.engine.runKernel(function(t){return t.abs(e)},{x:e},function(t){return {x:function(){return t.mulStrict(e.toFloat().step(-1))}}})},e.clipByValue=function(e,t,n){assertArgumentsAreTensors({x:e},"clipByValue"),assert(t<=n,"Error in clip: min ("+t+") must be less than or equal to max ("+n+").");return ENV.engine.runKernel(function(r){return r.clip(e,t,n)},{x:e},function(r){return {x:function(){return r.where(e.greaterEqual(scalar(t)).logicalAnd(e.lessEqual(scalar(n))),zerosLike(r))}}})},e.relu=function(e){if(assertArgumentsAreTensors({x:e},"relu"),"bool"===e.dtype)return e.toInt();return ENV.engine.runKernel(function(t){return t.relu(e)},{x:e},function(t){var n=e.step();return {x:function(){return t.mulStrict(n.toFloat())}}})},e.elu=function(e){assertArgumentsAreTensors({x:e},"elu");return ENV.engine.runKernel(function(t,n){return n(t.elu(e))},{x:e},function(e,t){var n=t[0];return {x:function(){return ENV.engine.runKernel(function(t){return t.eluDer(e,n)},{dy:e,y:n})}}})},e.selu=function(e){assertArgumentsAreTensors({x:e},"selu");return ENV.engine.runKernel(function(t){return t.selu(e)},{x:e},function(t){return {x:function(){var n=e.greater(scalar(0)),r=scalar(SELU_SCALEALPHA),a=scalar(SELU_SCALE),o=t.mul(a),i=t.mul(r).mul(e.toFloat().exp());return where(n,o,i)}}})},e.leakyRelu=function(e,t){return void 0===t&&(t=.2),assertArgumentsAreTensors({x:e},"leakyRelu"),maximum(scalar(t).mul(e),e)},e.prelu=function(e,t){assertArgumentsAreTensors({x:e,alpha:t},"prelu");var n=scalar(0);return maximum(n,e).add(t.mul(minimum(n,e)))},e.sigmoid=function(e){assertArgumentsAreTensors({x:e},"sigmoid");return ENV.engine.runKernel(function(t,n){return n(t.sigmoid(e))},{x:e},function(e,t){var n=t[0];return {x:function(){return e.mulStrict(n.mul(scalar(1).sub(n)))}}})},e.logSigmoid=function(e){assertArgumentsAreTensors({x:e},"logSigmoid");return ENV.engine.runKernel(function(t){return t.softplus(e.neg()).neg()},{x:e},function(t){return {x:function(){return t.mulStrict(e.neg().sigmoid())}}})},e.softplus=function(e){assertArgumentsAreTensors({x:e},"softplus");return ENV.engine.runKernel(function(t){return t.softplus(e)},{x:e},function(t){return {x:function(){return t.mulStrict(e.sigmoid())}}})},e.sin=function(e){assertArgumentsAreTensors({x:e},"sin");return ENV.engine.runKernel(function(t){return t.sin(e)},{x:e},function(t){return {x:function(){return e.toFloat().cos().mulStrict(t)}}})},e.cos=function(e){assertArgumentsAreTensors({x:e},"cos");return ENV.engine.runKernel(function(t){return t.cos(e)},{x:e},function(t){return {x:function(){return e.toFloat().sin().neg().mulStrict(t)}}})},e.tan=function(e){assertArgumentsAreTensors({x:e},"tan");return ENV.engine.runKernel(function(t){return t.tan(e)},{x:e},function(t){return {x:function(){return t.divStrict(e.cos().square())}}})},e.asin=function(t){assertArgumentsAreTensors({x:t},"asin");return ENV.engine.runKernel(function(e){return e.asin(t)},{x:t},function(n){return {x:function(){return n.divStrict(e.sqrt(scalar(1).sub(t.toFloat().square())))}}})},e.acos=function(t){assertArgumentsAreTensors({x:t},"acos");return ENV.engine.runKernel(function(e){return e.acos(t)},{x:t},function(n){return {x:function(){return n.divStrict(e.sqrt(scalar(1).sub(t.toFloat().square()))).neg()}}})},e.atan=function(e){assertArgumentsAreTensors({x:e},"atan");return ENV.engine.runKernel(function(t){return t.atan(e)},{x:e},function(t){return {x:function(){return t.divStrict(scalar(1).add(e.toFloat().square()))}}})},e.sinh=function(e){assertArgumentsAreTensors({x:e},"sinh");return ENV.engine.runKernel(function(t){return t.sinh(e)},{x:e},function(t){return {x:function(){return e.toFloat().cosh().mulStrict(t)}}})},e.cosh=function(e){assertArgumentsAreTensors({x:e},"cosh");return ENV.engine.runKernel(function(t){return t.cosh(e)},{x:e},function(t){return {x:function(){return e.toFloat().sinh().mulStrict(t)}}})},e.tanh=function(e){assertArgumentsAreTensors({x:e},"tanh");return ENV.engine.runKernel(function(t,n){return n(t.tanh(e))},{x:e},function(e,t){var n=t[0];return {x:function(){return scalar(1).sub(n.square()).mulStrict(e)}}})},e.asinh=function(t){assertArgumentsAreTensors({x:t},"asinh");return ENV.engine.runKernel(function(e){return e.asinh(t)},{x:t},function(n){return {x:function(){return n.divStrict(e.sqrt(scalar(1).add(t.toFloat().square())))}}})},e.acosh=function(t){assertArgumentsAreTensors({x:t},"acosh");return ENV.engine.runKernel(function(e){return e.acosh(t)},{x:t},function(n){return {x:function(){return n.divStrict(e.sqrt(t.toFloat().square().sub(scalar(1))))}}})},e.atanh=function(e){assertArgumentsAreTensors({x:e},"atanh");return ENV.engine.runKernel(function(t){return t.atanh(e)},{x:e},function(t){return {x:function(){return t.divStrict(scalar(1).sub(e.toFloat().square()))}}})},e.erf=function(e){assert("int32"===e.dtype||"float32"===e.dtype,"Input dtype must be `int32` or `float32`."),"int32"===e.dtype&&(e=e.toFloat());return ENV.engine.runKernel(function(t){return t.erf(e)},{x:e},function(t){return {x:function(){return t.mulStrict(scalar(2/Math.sqrt(Math.PI)).mul(e.square().neg().exp()))}}})},e.step=function(e,t){void 0===t&&(t=0),assertArgumentsAreTensors({x:e},"step");return ENV.engine.runKernel(function(n){return n.step(e,t)},{x:e},function(e){return {x:function(){return zerosLike(e)}}})},__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"neg",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"ceil",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"floor",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"sign",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"round",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"exp",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"expm1",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"log",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"log1p",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"sqrt",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"rsqrt",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"square",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"reciprocal",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"abs",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"clipByValue",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"relu",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"elu",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"selu",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"leakyRelu",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"prelu",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"sigmoid",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"logSigmoid",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"softplus",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"sin",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"cos",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"tan",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"asin",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"acos",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"atan",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"sinh",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"cosh",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"tanh",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"asinh",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"acosh",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"atanh",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"erf",null),__decorate([doc({heading:"Operations",subheading:"Basic math"}),operation],e,"step",null),e}(),batchNormalization=BatchNormOps.batchNormalization,batchNormalization2d=BatchNormOps.batchNormalization2d,batchNormalization3d=BatchNormOps.batchNormalization3d,batchNormalization4d=BatchNormOps.batchNormalization4d,concat=ConcatOps.concat,concat1d=ConcatOps.concat1d,concat2d=ConcatOps.concat2d,concat3d=ConcatOps.concat3d,concat4d=ConcatOps.concat4d,conv1d=ConvOps.conv1d,conv2d=ConvOps.conv2d,conv2dTranspose=ConvOps.conv2dTranspose,depthwiseConv2d=ConvOps.depthwiseConv2d,separableConv2d=ConvOps.separableConv2d,matMul=MatmulOps.matMul,matrixTimesVector=MatmulOps.matrixTimesVector,outerProduct=MatmulOps.outerProduct,vectorTimesMatrix=MatmulOps.vectorTimesMatrix,dot=MatmulOps.dot,avgPool=PoolOps.avgPool,maxPool=PoolOps.maxPool,transpose=TransposeOps.transpose,reverse=ReverseOps.reverse,reverse1d=ReverseOps.reverse1d,reverse2d=ReverseOps.reverse2d,reverse3d=ReverseOps.reverse3d,reverse4d=ReverseOps.reverse4d,slice=SliceOps.slice,slice1d=SliceOps.slice1d,slice2d=SliceOps.slice2d,slice3d=SliceOps.slice3d,slice4d=SliceOps.slice4d,stridedSlice=StridedSliceOps.stridedSlice,argMax=ReductionOps.argMax,argMin=ReductionOps.argMin,logSumExp=ReductionOps.logSumExp,max=ReductionOps.max,mean=ReductionOps.mean,min=ReductionOps.min,all=ReductionOps.all,moments=ReductionOps.moments,sum=ReductionOps.sum,unsortedSegmentSum=SegmentOps.unsortedSegmentSum,equal=CompareOps.equal,equalStrict=CompareOps.equalStrict,greater=CompareOps.greater,greaterStrict=CompareOps.greaterStrict,greaterEqual=CompareOps.greaterEqual,greaterEqualStrict=CompareOps.greaterEqualStrict,less=CompareOps.less,lessStrict=CompareOps.lessStrict,lessEqual=CompareOps.lessEqual,lessEqualStrict=CompareOps.lessEqualStrict,notEqual=CompareOps.notEqual,notEqualStrict=CompareOps.notEqualStrict,logicalNot=LogicalOps.logicalNot,logicalAnd=LogicalOps.logicalAnd,logicalOr=LogicalOps.logicalOr,logicalXor=LogicalOps.logicalXor,where=LogicalOps.where,abs=UnaryOps.abs,acos=UnaryOps.acos,acosh=UnaryOps.acosh,asin=UnaryOps.asin,asinh=UnaryOps.asinh,atan=UnaryOps.atan,atanh=UnaryOps.atanh,ceil=UnaryOps.ceil,clipByValue=UnaryOps.clipByValue,cos=UnaryOps.cos,cosh=UnaryOps.cosh,elu=UnaryOps.elu,exp=UnaryOps.exp,expm1=UnaryOps.expm1,floor=UnaryOps.floor,sign=UnaryOps.sign,leakyRelu=UnaryOps.leakyRelu,log=UnaryOps.log,log1p=UnaryOps.log1p,logSigmoid=UnaryOps.logSigmoid,neg=UnaryOps.neg,prelu=UnaryOps.prelu,relu=UnaryOps.relu,reciprocal=UnaryOps.reciprocal,round=UnaryOps.round,selu=UnaryOps.selu,sigmoid=UnaryOps.sigmoid,sin=UnaryOps.sin,sinh=UnaryOps.sinh,softplus=UnaryOps.softplus,sqrt=UnaryOps.sqrt,rsqrt=UnaryOps.rsqrt,square=UnaryOps.square,step=UnaryOps.step,tan=UnaryOps.tan,tanh$1=UnaryOps.tanh,erf=UnaryOps.erf,add=BinaryOps.add,addStrict=BinaryOps.addStrict,atan2=BinaryOps.atan2,div=BinaryOps.div,floorDiv=BinaryOps.floorDiv,divStrict=BinaryOps.divStrict,maximum=BinaryOps.maximum,maximumStrict=BinaryOps.maximumStrict,minimum=BinaryOps.minimum,minimumStrict=BinaryOps.minimumStrict,mod=BinaryOps.mod,modStrict=BinaryOps.modStrict,mul=BinaryOps.mul,mulStrict=BinaryOps.mulStrict,pow=BinaryOps.pow,powStrict=BinaryOps.powStrict,sub=BinaryOps.sub,subStrict=BinaryOps.subStrict,squaredDifference=BinaryOps.squaredDifference,squaredDifferenceStrict=BinaryOps.squaredDifferenceStrict,norm=NormOps.norm,cast=ArrayOps.cast,clone=ArrayOps.clone,fromPixels=ArrayOps.fromPixels,toPixels=ArrayOps.toPixels,ones=ArrayOps.ones,onesLike=ArrayOps.onesLike,zeros=ArrayOps.zeros,zerosLike=ArrayOps.zerosLike,eye=ArrayOps.eye,rand=ArrayOps.rand,randomNormal=ArrayOps.randomNormal,truncatedNormal=ArrayOps.truncatedNormal,randomUniform=ArrayOps.randomUniform,multinomial=ArrayOps.multinomial,reshape=ArrayOps.reshape,squeeze=ArrayOps.squeeze,tile=ArrayOps.tile,gather=ArrayOps.gather,oneHot=ArrayOps.oneHot,linspace=ArrayOps.linspace,range=ArrayOps.range,buffer=ArrayOps.buffer,fill=ArrayOps.fill,tensor=ArrayOps.tensor,scalar=ArrayOps.scalar,tensor1d=ArrayOps.tensor1d,tensor2d=ArrayOps.tensor2d,tensor3d=ArrayOps.tensor3d,tensor4d=ArrayOps.tensor4d,tensor5d=ArrayOps.tensor5d,tensor6d=ArrayOps.tensor6d,print=ArrayOps.print,expandDims=ArrayOps.expandDims,stack=ArrayOps.stack,unstack=ArrayOps.unstack,split=ArrayOps.split,cumsum=ArrayOps.cumsum,pad=ArrayOps.pad,pad1d=ArrayOps.pad1d,pad2d=ArrayOps.pad2d,pad3d=ArrayOps.pad3d,pad4d=ArrayOps.pad4d,movingAverage=MovingAverageOps.movingAverage,basicLSTMCell=LSTMOps.basicLSTMCell,multiRNNCell=LSTMOps.multiRNNCell,softmax=SoftmaxOps.softmax,sigmoidCrossEntropyWithLogits=SigmoidCrossEntropyOps.sigmoidCrossEntropyWithLogits,localResponseNormalization=LRNOps.localResponseNormalization,linalg=LinalgOps,losses={absoluteDifference:LossOps.absoluteDifference,computeWeightedLoss:LossOps.computeWeightedLoss,cosineDistance:LossOps.cosineDistance,hingeLoss:LossOps.hingeLoss,huberLoss:LossOps.huberLoss,logLoss:LossOps.logLoss,meanSquaredError:LossOps.meanSquaredError,softmaxCrossEntropy:SoftmaxOps.softmaxCrossEntropy},image={resizeBilinear:ImageOps.resizeBilinear,resizeNearestNeighbor:ImageOps.resizeNearestNeighbor},TensorBuffer=function(){function e(e,t,n){if(this.dtype=t,null!=n){var r=n.length,a=sizeFromShape(e);assert(r===a,"Length of values '"+r+"' does not match the size inferred by the shape '"+a+"'");}this.shape=e.slice(),this.values=n||getTypedArrayFromDType(t,sizeFromShape(e)),this.strides=computeStrides(e),this.size=sizeFromShape(e);}return e.prototype.set=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];0===t.length&&(t=[0]),assert(t.length===this.rank,"The number of provided coordinates ("+t.length+") must match the rank ("+this.rank+")");var r=this.locToIndex(t);this.values[r]=e;},e.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];0===e.length&&(e=[0]);for(var n=e[e.length-1],r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return this.values[n]},e.prototype.locToIndex=function(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];for(var t=e[e.length-1],n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t},e.prototype.indexToLoc=function(e){if(0===this.rank)return [];if(1===this.rank)return [e];for(var t=new Array(this.shape.length),n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.toTensor=function(){return Tensor.make(this.shape,{values:this.values},this.dtype)},__decorate([doc({heading:"Tensors",subheading:"Creation"})],e.prototype,"set",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e.prototype,"get",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],e.prototype,"toTensor",null),e=__decorate([doc({heading:"Tensors",subheading:"Classes"})],e)}(),Tensor=function(){function e(e,n,r,a){this.isDisposedInternal=!1,this.size=sizeFromShape(e),null!=r&&assert(this.size===r.length,"Constructing tensor of shape ("+this.size+") should match the length of values ("+r.length+")"),this.shape=e.slice(),this.dtype=n||"float32",this.strides=computeStrides(e),this.dataId=null!=a?a:{},this.id=t.nextId++,this.rankType=this.rank<5?this.rank.toString():"higher",ENV.engine.registerTensor(this),null!=r&&ENV.engine.write(this.dataId,r);}return t=e,e.make=function(e,n,r){return new t(e,r,n.values,n.dataId)},e.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},e.prototype.asScalar=function(){return this.throwIfDisposed(),assert(1===this.size,"The array must have only 1 element."),this.reshape([])},e.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},e.prototype.as2D=function(e,t){return this.throwIfDisposed(),this.reshape([e,t])},e.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),this.reshape([e,t,n])},e.prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),this.reshape([e,t,n,r])},e.prototype.asType=function(e){return this.throwIfDisposed(),cast(this,e)},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];assert(e.length===this.rank,"Number of coordinates in get() must match the rank of the tensor"),this.throwIfDisposed(),0===e.length&&(e=[0]);for(var n=e[e.length-1],r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return this.dataSync()[n]},e.prototype.buffer=function(){return buffer(this.shape,this.dtype,this.dataSync())},e.prototype.data=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return this.throwIfDisposed(),[2,ENV.engine.read(this.dataId)]})})},e.prototype.dataSync=function(){return this.throwIfDisposed(),ENV.engine.readSync(this.dataId)},e.prototype.dispose=function(){this.isDisposed||(ENV.engine.disposeTensor(this),this.isDisposedInternal=!0);},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),e.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},e.prototype.toFloat=function(){return this.asType("float32")},e.prototype.toInt=function(){return this.asType("int32")},e.prototype.toBool=function(){return this.asType("bool")},e.prototype.print=function(e){return void 0===e&&(e=!1),print(this,e)},e.prototype.reshape=function(e){return this.throwIfDisposed(),reshape(this,e)},e.prototype.reshapeAs=function(e){return this.throwIfDisposed(),this.reshape(e.shape)},e.prototype.expandDims=function(e){return void 0===e&&(e=0),expandDims(this,e)},e.prototype.cumsum=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=!1),void 0===n&&(n=!1),cumsum(this,e,t,n)},e.prototype.squeeze=function(e){return this.throwIfDisposed(),squeeze(this,e)},e.prototype.clone=function(){return this.throwIfDisposed(),clone(this)},e.prototype.toString=function(e){return void 0===e&&(e=!1),tensorToString(this,e)},e.prototype.tile=function(e){return this.throwIfDisposed(),tile(this,e)},e.prototype.gather=function(e,t){return void 0===t&&(t=0),this.throwIfDisposed(),gather(this,e,t)},e.prototype.matMul=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=!1),this.throwIfDisposed(),matMul(this,e,t,n)},e.prototype.dot=function(e){return this.throwIfDisposed(),dot(this,e)},e.prototype.norm=function(e,t,n){return void 0===e&&(e="euclidean"),void 0===t&&(t=null),void 0===n&&(n=!1),this.throwIfDisposed(),norm(this,e,t,n)},e.prototype.slice=function(e,t){return this.throwIfDisposed(),slice(this,e,t)},e.prototype.reverse=function(e){return this.throwIfDisposed(),reverse(this,e)},e.prototype.concat=function(e,t){return void 0===t&&(t=0),this.throwIfDisposed(),concat([this,e],t)},e.prototype.stack=function(e,t){return void 0===t&&(t=0),stack([this,e],t)},e.prototype.unstack=function(e,t){return void 0===t&&(t=0),unstack(this,t)},e.prototype.pad=function(e,t){return void 0===t&&(t=0),pad(this,e,t)},e.prototype.batchNormalization=function(e,t,n,r,a){return void 0===n&&(n=.001),this.throwIfDisposed(),batchNormalization(this,e,t,n,r,a)},e.prototype.all=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),all(this,e,t)},e.prototype.logSumExp=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),logSumExp(this,e,t)},e.prototype.sum=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),sum(this,e,t)},e.prototype.mean=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),mean(this,e,t)},e.prototype.min=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),min(this,e,t)},e.prototype.max=function(e,t){return void 0===e&&(e=null),void 0===t&&(t=!1),this.throwIfDisposed(),max(this,e,t)},e.prototype.argMin=function(e){return void 0===e&&(e=null),this.throwIfDisposed(),argMin(this,e)},e.prototype.argMax=function(e){return void 0===e&&(e=null),this.throwIfDisposed(),argMax(this,e)},e.prototype.cast=function(e){return this.throwIfDisposed(),cast(this,e)},e.prototype.add=function(e){return this.throwIfDisposed(),add(this,e)},e.prototype.addStrict=function(e){return this.throwIfDisposed(),addStrict(this,e)},e.prototype.sub=function(e){return this.throwIfDisposed(),sub(this,e)},e.prototype.subStrict=function(e){return this.throwIfDisposed(),subStrict(this,e)},e.prototype.pow=function(e){return this.throwIfDisposed(),pow(this,e)},e.prototype.powStrict=function(e){return this.throwIfDisposed(),powStrict(this,e)},e.prototype.mul=function(e){return this.throwIfDisposed(),mul(this,e)},e.prototype.mulStrict=function(e){return this.throwIfDisposed(),mulStrict(this,e)},e.prototype.div=function(e){return this.throwIfDisposed(),div(this,e)},e.prototype.floorDiv=function(e){return this.throwIfDisposed(),floorDiv(this,e)},e.prototype.divStrict=function(e){return this.throwIfDisposed(),divStrict(this,e)},e.prototype.minimum=function(e){return this.throwIfDisposed(),minimum(this,e)},e.prototype.minimumStrict=function(e){return this.throwIfDisposed(),minimumStrict(this,e)},e.prototype.maximum=function(e){return this.throwIfDisposed(),maximum(this,e)},e.prototype.maximumStrict=function(e){return this.throwIfDisposed(),maximumStrict(this,e)},e.prototype.mod=function(e){return this.throwIfDisposed(),mod(this,e)},e.prototype.modStrict=function(e){return this.throwIfDisposed(),modStrict(this,e)},e.prototype.squaredDifference=function(e){return this.throwIfDisposed(),squaredDifference(this,e)},e.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),squaredDifferenceStrict(this,e)},e.prototype.transpose=function(e){return this.throwIfDisposed(),transpose(this,e)},e.prototype.notEqual=function(e){return this.throwIfDisposed(),notEqual(this,e)},e.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),notEqualStrict(this,e)},e.prototype.less=function(e){return this.throwIfDisposed(),less(this,e)},e.prototype.lessStrict=function(e){return this.throwIfDisposed(),lessStrict(this,e)},e.prototype.equal=function(e){return this.throwIfDisposed(),equal(this,e)},e.prototype.equalStrict=function(e){return this.throwIfDisposed(),equalStrict(this,e)},e.prototype.lessEqual=function(e){return this.throwIfDisposed(),lessEqual(this,e)},e.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),lessEqualStrict(this,e)},e.prototype.greater=function(e){return this.throwIfDisposed(),greater(this,e)},e.prototype.greaterStrict=function(e){return this.throwIfDisposed(),greaterStrict(this,e)},e.prototype.greaterEqual=function(e){return this.throwIfDisposed(),greaterEqual(this,e)},e.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),greaterEqualStrict(this,e)},e.prototype.logicalAnd=function(e){return this.throwIfDisposed(),logicalAnd(this,e)},e.prototype.logicalOr=function(e){return this.throwIfDisposed(),logicalOr(this,e)},e.prototype.logicalNot=function(){return this.throwIfDisposed(),logicalNot(this)},e.prototype.logicalXor=function(e){return this.throwIfDisposed(),logicalXor(this,e)},e.prototype.where=function(e,t){return this.throwIfDisposed(),where(e,this,t)},e.prototype.neg=function(){return this.throwIfDisposed(),neg(this)},e.prototype.ceil=function(){return this.throwIfDisposed(),ceil(this)},e.prototype.floor=function(){return this.throwIfDisposed(),floor(this)},e.prototype.sign=function(){return this.throwIfDisposed(),sign(this)},e.prototype.exp=function(){return this.throwIfDisposed(),exp(this)},e.prototype.expm1=function(){return this.throwIfDisposed(),expm1(this)},e.prototype.log=function(){return this.throwIfDisposed(),log(this)},e.prototype.log1p=function(){return this.throwIfDisposed(),log1p(this)},e.prototype.sqrt=function(){return this.throwIfDisposed(),sqrt(this)},e.prototype.rsqrt=function(){return this.throwIfDisposed(),rsqrt(this)},e.prototype.square=function(){return this.throwIfDisposed(),square(this)},e.prototype.reciprocal=function(){return this.throwIfDisposed(),reciprocal(this)},e.prototype.abs=function(){return this.throwIfDisposed(),abs(this)},e.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),clipByValue(this,e,t)},e.prototype.relu=function(){return this.throwIfDisposed(),relu(this)},e.prototype.elu=function(){return this.throwIfDisposed(),elu(this)},e.prototype.selu=function(){return this.throwIfDisposed(),selu(this)},e.prototype.leakyRelu=function(e){return void 0===e&&(e=.2),this.throwIfDisposed(),leakyRelu(this,e)},e.prototype.prelu=function(e){return this.throwIfDisposed(),prelu(this,e)},e.prototype.sigmoid=function(){return this.throwIfDisposed(),sigmoid(this)},e.prototype.logSigmoid=function(){return this.throwIfDisposed(),logSigmoid(this)},e.prototype.softplus=function(){return this.throwIfDisposed(),softplus(this)},e.prototype.sin=function(){return this.throwIfDisposed(),sin(this)},e.prototype.cos=function(){return this.throwIfDisposed(),cos(this)},e.prototype.tan=function(){return this.throwIfDisposed(),tan(this)},e.prototype.asin=function(){return this.throwIfDisposed(),asin(this)},e.prototype.acos=function(){return this.throwIfDisposed(),acos(this)},e.prototype.atan=function(){return this.throwIfDisposed(),atan(this)},e.prototype.sinh=function(){return this.throwIfDisposed(),sinh(this)},e.prototype.cosh=function(){return this.throwIfDisposed(),cosh(this)},e.prototype.tanh=function(){return this.throwIfDisposed(),tanh$1(this)},e.prototype.asinh=function(){return this.throwIfDisposed(),asinh(this)},e.prototype.acosh=function(){return this.throwIfDisposed(),acosh(this)},e.prototype.atanh=function(){return this.throwIfDisposed(),atanh(this)},e.prototype.erf=function(){return this.throwIfDisposed(),erf(this)},e.prototype.round=function(){return this.throwIfDisposed(),round(this)},e.prototype.step=function(e){return void 0===e&&(e=0),this.throwIfDisposed(),step(this,e)},e.prototype.softmax=function(e){return void 0===e&&(e=-1),this.throwIfDisposed(),softmax(this,e)},e.prototype.resizeBilinear=function(e,t){return void 0===t&&(t=!1),this.throwIfDisposed(),image.resizeBilinear(this,e,t)},e.prototype.resizeNearestNeighbor=function(e,t){return void 0===t&&(t=!1),this.throwIfDisposed(),image.resizeNearestNeighbor(this,e,t)},e.prototype.conv1d=function(e,t,n,r,a,o){return void 0===r&&(r="NWC"),void 0===a&&(a=1),this.throwIfDisposed(),conv1d(this,e,t,n,r,a,o)},e.prototype.conv2d=function(e,t,n,r,a,o){return void 0===r&&(r="NHWC"),void 0===a&&(a=[1,1]),this.throwIfDisposed(),conv2d(this,e,t,n,r,a,o)},e.prototype.conv2dTranspose=function(e,t,n,r,a){return this.throwIfDisposed(),conv2dTranspose(this,e,t,n,r,a)},e.prototype.depthwiseConv2D=function(e,t,n,r,a,o){return void 0===r&&(r="NHWC"),void 0===a&&(a=[1,1]),this.throwIfDisposed(),depthwiseConv2d(this,e,t,n,r,a,o)},e.prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),avgPool(this,e,t,n,r)},e.prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),maxPool(this,e,t,n,r)},e.prototype.localResponseNormalization=function(e,t,n,r){return void 0===e&&(e=5),void 0===t&&(t=1),void 0===n&&(n=1),void 0===r&&(r=.5),localResponseNormalization(this,e,t,n,r)},e.prototype.variable=function(e,t,n){return void 0===e&&(e=!0),this.throwIfDisposed(),Variable.variable(this,e,t,n)},e.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),unsortedSegmentSum(this,e,t)},e.nextId=0,__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"flatten",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"asScalar",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"as1D",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"as2D",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"as3D",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"as4D",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"asType",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"buffer",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"data",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"dataSync",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"dispose",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"toFloat",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"toInt",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"toBool",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"print",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"reshape",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"reshapeAs",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"expandDims",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"cumsum",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"squeeze",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"clone",null),__decorate([doc({heading:"Tensors",subheading:"Classes"})],e.prototype,"toString",null),e=t=__decorate([doc({heading:"Tensors",subheading:"Classes"})],e);var t;}(),Variable=function(e){function t(t,r,a){void 0===r&&(r=!0);var o=e.call(this,t.shape,t.dtype,null,t.dataId)||this;return o.trainable=r,o.name=a,null==o.name&&(o.name=n.nextVarId.toString(),n.nextVarId++),ENV.engine.registerVariable(o),o}return __extends(t,e),n=t,t.variable=function(e,t,r,a){return void 0===t&&(t=!0),null!=a&&a!==e.dtype&&(e=e.asType(a)),new n(e,t,r)},t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!arraysEqual(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");ENV.engine.disposeTensor(this),this.dataId=e.dataId,ENV.engine.registerTensor(this);},t.nextVarId=0,__decorate([doc({heading:"Tensors",subheading:"Classes"})],t.prototype,"assign",null),__decorate([doc({heading:"Tensors",subheading:"Creation"})],t,"variable",null),t=n=__decorate([doc({heading:"Tensors",subheading:"Classes"})],t);var n;}(Tensor),variable=Variable.variable;function computeStrides(e){var t=e.length;if(t<2)return [];var n=new Array(t-1);n[t-2]=e[t-1];for(var r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}var Gradients=function(){function e(){}return e.gradScope=function(e,t){return tidy(e,t,!0)},e.grad=function(e){return assert(isFunction(e),"The f passed in grad(f) must be a function"),function(t,n){return assert(t instanceof Tensor,"The x passed in grad(f)(x) must be a tensor"),assert(null==n||n instanceof Tensor,"The dy passed in grad(f)(x, dy) must be a tensor"),tidy(function(){var r=ENV.engine.gradients(function(){return e(t)},[t],n),a=r.value,o=r.grads;return null!=n&&assertShapesMatch(a.shape,n.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),checkGrads(o),o[0]})}},e.grads=function(e){return assert(isFunction(e),"The f passed in grads(f) must be a function"),function(t,n){return assert(Array.isArray(t)&&t.every(function(e){return e instanceof Tensor}),"The args passed in grads(f)(args) must be an array of tensors"),assert(null==n||n instanceof Tensor,"The dy passed in grads(f)(args, dy) must be a tensor"),tidy(function(){var r=ENV.engine.gradients(function(){return e.apply(void 0,t)},t,n),a=r.value,o=r.grads;return null!=n&&assertShapesMatch(a.shape,n.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),checkGrads(o),o})}},e.valueAndGrad=function(e){return assert(isFunction(e),"The f passed in valueAndGrad(f) must be a function"),function(t,n){assert(t instanceof Tensor,"The x passed in valueAndGrad(f)(x) must be a tensor"),assert(null==n||n instanceof Tensor,"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");var r=ENV.engine.gradients(function(){return e(t)},[t],n),a=r.grads,o=r.value;return checkGrads(a),{grad:a[0],value:o}}},e.valueAndGrads=function(e){return assert(isFunction(e),"The f passed in valueAndGrads(f) must be a function"),function(t,n){assert(Array.isArray(t)&&t.every(function(e){return e instanceof Tensor}),"The args passed in valueAndGrads(f)(args) must be array of tensors"),assert(null==n||n instanceof Tensor,"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");var r=ENV.engine.gradients(function(){return e.apply(void 0,t)},t,n);return null!=n&&assertShapesMatch(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),checkGrads(r.grads),r}},e.variableGrads=function(e,t){if(assert(isFunction(e),"The f passed in variableGrads(f) must be a function"),assert(null==t||Array.isArray(t)&&t.every(function(e){return e instanceof Variable}),"The varList passed in variableGrads(f, varList) must be an array of variables"),null==t)for(var n in t=[],ENV.engine.registeredVariables)t.push(ENV.engine.registeredVariables[n]);var r=t.length;assert((t=t.filter(function(e){return e.trainable})).length>0,"variableGrads() expects at least one of the input variables to be trainable, but none of the "+r+" variables is trainable.");var a=ENV.engine.gradients(e,t,null,!0),o=a.value,i=a.grads;assert(i.some(function(e){return null!=e}),"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),assert(0===o.rank,"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+o.rank+" tensor");var s={};return t.forEach(function(e,t){null!=i[t]&&(s[e.name]=i[t]);}),{value:o,grads:s}},e.customGrad=function(e){return ENV.engine.customGrad(e)},__decorate([doc({heading:"Training",subheading:"Gradients"})],e,"grad",null),__decorate([doc({heading:"Training",subheading:"Gradients"})],e,"grads",null),__decorate([doc({heading:"Training",subheading:"Gradients"})],e,"valueAndGrad",null),__decorate([doc({heading:"Training",subheading:"Gradients"})],e,"valueAndGrads",null),__decorate([doc({heading:"Training",subheading:"Gradients"})],e,"variableGrads",null),__decorate([doc({heading:"Training",subheading:"Gradients"})],e,"customGrad",null),e}();function checkGrads(e){if(e.filter(function(e){return null==e}).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}var tidy=Tracking.tidy,keep=Tracking.keep,dispose=Tracking.dispose,time=Tracking.time,grad=Gradients.grad,valueAndGrad=Gradients.valueAndGrad,grads=Gradients.grads,valueAndGrads=Gradients.valueAndGrads,variableGrads=Gradients.variableGrads,customGrad=Gradients.customGrad,Profiler=function(){function e(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new Logger);}return e.prototype.profileKernel=function(e,t){var n,r=this,a=this.backendTimer.time(function(){n=t();}),o=n.dataSync();return checkForNaN(o,n.dtype,e),a.then(function(t){r.logger.logKernelProfile(e,n,o,t.kernelMs);}),n},e}(),Logger=function(){function e(){}return e.prototype.logKernelProfile=function(e,t,n,r){var a=rightPad(r+"ms",9),o=rightPad(e,25),i=t.rank,s=t.size,u=rightPad(t.shape.toString(),14);console.log("%c"+o+"\t%c"+a+"\t%c"+i+"D "+u+"\t%c"+s,"font-weight:bold","color:red","color:blue","color: orange");},e}();function getFilteredNodesXToY(e,t,n){for(var r={},a={},o=0;o<t.length;o++)r[t[o].id]=!0;for(o=0;o<e.length;o++){var i=(g=e[o]).inputs;for(var s in i){for(var u=i[s],l=!1,c=0;c<t.length;c++)if(r[u.id]){r[g.output.id]=!0,l=!0,a[g.id]=!0;break}if(l)break}}var d={};d[n.id]=!0;var p={};for(o=e.length-1;o>=0;o--){i=(g=e[o]).inputs;var h=[];h.push(g.output);for(c=0;c<h.length;c++)if(d[h[c].id]){for(var s in i)d[i[s].id]=!0,p[g.id]=!0;break}}var f=[];for(o=0;o<e.length;o++){var g;if(a[(g=e[o]).id]&&p[g.id]){var m={};for(var s in g.inputs){var v=g.inputs[s];r[v.id]&&(m[s]=v);}var y=Object.assign({},g);y.inputs=m,y.output=g.output,f.push(y);}}return f}function backpropagateGradients(e,t){for(var n=t.length-1;n>=0;n--){var r=t[n],a=e[r.output.id];if(null==r.gradient)throw new Error("Cannot compute gradient: gradient function not found for "+r.name+".");var o=r.gradient(a);for(var i in r.inputs){if(!(i in o))throw new Error("Cannot backprop through input "+i+". Available gradients found: "+Object.keys(o)+".");var s=o[i](),u=r.inputs[i];if(!arraysEqual(s.shape,u.shape))throw new Error("Error in gradient for op "+r.name+". The gradient of input '"+i+"' has shape '"+s.shape+"', which does not match the shape of the input '"+u.shape+"'");if(null==e[u.id])e[u.id]=s;else{var l=e[u.id];e[u.id]=l.add(s),l.dispose();}}}}var Type,Engine=function(){function e(e,t){this.backend=e,this.safeMode=t,this.registeredVariables={},this.refCounter=new WeakMap,this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numDataBuffers=0,this.gradientScopeCount=0,this.customGradientDepth=0,this.keepTensors=new Set,this.activeScope={track:[]},this.scopeStack=[this.activeScope],this.profiler=new Profiler(e);}return e.prototype.runKernel=function(e,t,n){var r,a=this,o=[],i=function(e){return o.push(e),e},s=this.activeScope.name;if(this.customGradientDepth++,r=ENV.get("DEBUG")?this.profiler.profileKernel(s,function(){return e(a.backend,i)}):e(this.backend,i),this.customGradientDepth--,this.shouldRecord()){var u={id:this.nextTapeNodeId++,name:s,inputs:t,output:r};null!=n&&(u.gradient=function(e){return n(e,o)}),this.activeTape.push(u);}return r},e.prototype.registerTensor=function(e){var t=this.refCounter.has(e.dataId)?this.refCounter.get(e.dataId):0;this.numTensors++,0===t&&(this.numDataBuffers++,this.numBytes+=sizeFromShape(e.shape)*bytesPerElement(e.dtype),this.backend.register(e.dataId,e.shape,e.dtype)),this.refCounter.set(e.dataId,t+1),e instanceof Variable||this.track(e);},e.prototype.registerVariable=function(e){if(null!=this.registeredVariables[e.name])throw new Error("Variable with name "+e.name+" was already registered");this.registeredVariables[e.name]=e;},e.prototype.disposeTensor=function(e){if(this.refCounter.has(e.dataId)){this.keepTensors.has(e.id)&&this.keepTensors.delete(e.id),this.numTensors--;var t=this.refCounter.get(e.dataId);t<=1?(this.refCounter.delete(e.dataId),this.backend.disposeData(e.dataId),this.numDataBuffers--,this.numBytes-=sizeFromShape(e.shape)*bytesPerElement(e.dtype)):this.refCounter.set(e.dataId,t-1);}},e.prototype.disposeVariables=function(){for(var e in this.registeredVariables){var t=this.registeredVariables[e];this.disposeTensor(t),delete this.registeredVariables[e];}},e.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.numTensors,e.numDataBuffers=this.numDataBuffers,e.numBytes=this.numBytes,e},e.prototype.shouldRecord=function(){return null!=this.activeTape&&0===this.customGradientDepth},e.prototype.addTapeNode=function(e,t,n){var r={};e.forEach(function(e,t){r[t]=e;});var a={id:this.nextTapeNodeId++,name:this.activeScope.name,inputs:r,output:t,gradient:function(e){var t={};return n(e).forEach(function(e,n){t[n]=function(){return e};}),t}};this.activeTape.push(a);},e.prototype.keep=function(e){if(1===this.scopeStack.length&&ENV.engine.safeMode)throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {...}) to avoid memory leaks.");return this.keepTensors.add(e.id),e},e.prototype.startScope=function(e,t){void 0===t&&(t=!1),t&&0===this.gradientScopeCount&&(this.activeTape=[]),t&&this.gradientScopeCount++;var n={track:[]};e&&(n.name=e),this.scopeStack.push(n),this.activeScope=n;},e.prototype.endScope=function(e,t){var n=this;void 0===t&&(t=!1),t&&(this.gradientScopeCount--,0===this.gradientScopeCount&&(this.activeTape=null));var r=new Set(this.keepTensors),a=getTensorsInContainer(e);a.forEach(function(e){return r.add(e.id)});for(var o=0;o<this.activeScope.track.length;o++){var i=this.activeScope.track[o];r.has(i.id)||(null!=this.activeTape?a.push(i):i.dispose());}var s=this.scopeStack.pop();this.activeScope=0===this.scopeStack.length?{track:[]}:this.scopeStack[this.scopeStack.length-1],a.forEach(function(e){!n.keepTensors.has(e.id)&&isTensorInList(e,s.track)&&n.track(e);});},e.prototype.gradients=function(e,t,n,r){var a=this;return void 0===r&&(r=!1),assert(t.length>0,"gradients() received an empty list of xs."),tidy("gradients",function(){var o=e();assert(o instanceof Tensor,"The result y returned by f() must be a tensor.");var i=getFilteredNodesXToY(a.activeTape,t,o);if(!r&&0===i.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");var s={};return s[o.id]=null==n?ones(o.shape):n,backpropagateGradients(s,i),{value:o,grads:t.map(function(e){return s[e.id]})}},!0)},e.prototype.customGrad=function(e){var t=this;return assert(isFunction(e),"The f passed in customGrad(f) must be a function."),function(){for(var n,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];assert(r.every(function(e){return e instanceof Tensor}),"The args passed in customGrad(f)(x1, x2,...) must all be tensors"),t.customGradientDepth++;var o=tidy(e.name,function(){var t=e.apply(void 0,r),a=t.value,o=t.gradFunc;return assert(a instanceof Tensor,"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),assert(isFunction(o),"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n=o,a},!0);if(t.customGradientDepth--,t.shouldRecord()){t.addTapeNode(r,o,function(e){var t=n(e),a=Array.isArray(t)?t:[t];return assert(a.length===r.length,"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),assert(a.every(function(e){return e instanceof Tensor}),"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."),a});}return o}},e.prototype.write=function(e,t){this.backend.write(e,t);},e.prototype.readSync=function(e){return this.backend.readSync(e)},e.prototype.read=function(e){return this.backend.read(e)},e.prototype.fromPixels=function(e,t){return this.backend.fromPixels(e,t)},e.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=performance.now(),[4,this.backend.time(e)];case 1:return (n=r.sent()).wallMs=performance.now()-t,[2,n]}})})},e.prototype.track=function(e){if(1===this.scopeStack.length&&this.safeMode)throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {op();...}); to avoid memory leaks.");return this.activeScope.track.push(e),e},e}();!function(e){e[e.NUMBER=0]="NUMBER",e[e.BOOLEAN=1]="BOOLEAN",e[e.STRING=2]="STRING";}(Type||(Type={}));var URL_PROPERTIES=[{name:"DEBUG",type:Type.BOOLEAN},{name:"IS_BROWSER",type:Type.BOOLEAN},{name:"WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",type:Type.NUMBER},{name:"WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",type:Type.BOOLEAN},{name:"WEBGL_VERSION",type:Type.NUMBER},{name:"WEBGL_RENDER_FLOAT32_ENABLED",type:Type.BOOLEAN},{name:"WEBGL_DOWNLOAD_FLOAT_ENABLED",type:Type.BOOLEAN},{name:"WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED",type:Type.BOOLEAN},{name:"BACKEND",type:Type.STRING}],TEST_EPSILON_FLOAT32_ENABLED=.001,TEST_EPSILON_FLOAT32_DISABLED=.1;function hasExtension(e,t){return null!=e.getExtension(t)}function getWebGLRenderingContext(e){if(0===e||!ENV.get("IS_BROWSER"))throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var t=document.createElement("canvas");return 1===e?t.getContext("webgl")||t.getContext("experimental-webgl"):t.getContext("webgl2")}function loseContext(e){if(null!=e){var t=e.getExtension("WEBGL_lose_context");if(null==t)throw new Error("Extension WEBGL_lose_context not supported on this browser.");t.loseContext();}}function isWebGLVersionEnabled(e){var t;try{t=getWebGLRenderingContext(e);}catch(e){return !1}return null!=t&&(loseContext(t),!0)}function getWebGLDisjointQueryTimerVersion(e){if(0===e)return 0;var t,n=getWebGLRenderingContext(e);return t=hasExtension(n,"EXT_disjoint_timer_query_webgl2")&&2===e?2:hasExtension(n,"EXT_disjoint_timer_query")?1:0,null!=n&&loseContext(n),t}function createFloatTextureAndBindToFramebuffer(e,t){var n=e.createFramebuffer(),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);var a=2===t?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,a,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);}function isRenderToFloatTextureEnabled(e){if(0===e)return !1;var t=getWebGLRenderingContext(e);if(1===e){if(!hasExtension(t,"OES_texture_float"))return !1}else if(!hasExtension(t,"EXT_color_buffer_float"))return !1;createFloatTextureAndBindToFramebuffer(t,e);var n=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return loseContext(t),n}function isDownloadFloatTextureEnabled(e){if(0===e)return !1;var t=getWebGLRenderingContext(e);if(1===e){if(!hasExtension(t,"OES_texture_float"))return !1}else if(!hasExtension(t,"EXT_color_buffer_float"))return !1;createFloatTextureAndBindToFramebuffer(t,e),t.readPixels(0,0,1,1,t.RGBA,t.FLOAT,new Float32Array(4));var n=t.getError()===t.NO_ERROR;return loseContext(t),n}function isWebGLGetBufferSubDataAsyncExtensionEnabled(e){if(e>0)return !1;if(2!==e)return !1;var t=getWebGLRenderingContext(e),n=hasExtension(t,"WEBGL_get_buffer_sub_data_async");return loseContext(t),n}function isChrome(){return null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}var Environment=function(){function e(e){this.features={},this.registry={},null!=e&&(this.features=e),this.get("DEBUG")&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.");}return e.setBackend=function(e,t){if(void 0===t&&(t=!1),!(e in ENV.registry))throw new Error("Backend type '"+e+"' not found in registry");ENV.initBackend(e,t);},e.getBackend=function(){return ENV.initDefaultBackend(),ENV.currentBackend},e.disposeVariables=function(){ENV.engine.disposeVariables();},e.memory=function(){return ENV.engine.memory()},e.prototype.get=function(e){return e in this.features?this.features[e]:(this.features[e]=this.evaluateFeature(e),this.features[e])},e.prototype.getFeatures=function(){return this.features},e.prototype.set=function(e,t){this.features[e]=t;},e.prototype.getBestBackendType=function(){var e=this;if(0===Object.keys(this.registry).length)throw new Error("No backend found in registry.");return Object.keys(this.registry).map(function(t){return {name:t,entry:e.registry[t]}}).sort(function(e,t){return t.entry.priority-e.entry.priority})[0].name},e.prototype.evaluateFeature=function(e){if("DEBUG"===e)return !1;if("IS_BROWSER"===e)return "undefined"!=typeof window;if("IS_NODE"===e)return "undefined"!=typeof process&&void 0!==process.versions.node;if("IS_CHROME"===e)return isChrome();if("BACKEND"===e)return this.getBestBackendType();if("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"===e){var t=this.get("WEBGL_VERSION");return 0===t?0:getWebGLDisjointQueryTimerVersion(t)}if("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE"===e)return this.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!isMobile();if("WEBGL_VERSION"===e)return isWebGLVersionEnabled(2)?2:isWebGLVersionEnabled(1)?1:0;if("WEBGL_RENDER_FLOAT32_ENABLED"===e)return isRenderToFloatTextureEnabled(this.get("WEBGL_VERSION"));if("WEBGL_DOWNLOAD_FLOAT_ENABLED"===e)return isDownloadFloatTextureEnabled(this.get("WEBGL_VERSION"));if("WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED"===e)return isWebGLGetBufferSubDataAsyncExtensionEnabled(this.get("WEBGL_VERSION"));if("TEST_EPSILON"===e)return this.get("WEBGL_RENDER_FLOAT32_ENABLED")?TEST_EPSILON_FLOAT32_ENABLED:TEST_EPSILON_FLOAT32_DISABLED;throw new Error("Unknown feature "+e+".")},e.prototype.setFeatures=function(e){this.features=e;},e.prototype.reset=function(){this.features=getFeaturesFromURL(),null!=this.globalEngine&&(this.globalEngine=null);},e.prototype.initBackend=function(e,t){void 0===t&&(t=!1),this.currentBackend=e;var n=ENV.findBackend(e);this.globalEngine=new Engine(n,t);},e.prototype.findBackend=function(e){return e in this.registry?this.registry[e].backend:null},e.prototype.registerBackend=function(e,t,n){void 0===n&&(n=1),e in this.registry&&console.warn(e+" backend was already registered");try{var r=t();return this.registry[e]={backend:r,priority:n},!0}catch(t){return console.warn("Registration of backend "+e+" failed"),console.warn(t.stack||t.message),!1}},e.prototype.removeBackend=function(e){if(!(e in this.registry))throw new Error(e+" backend not found in registry");this.registry[e].backend.dispose(),delete this.registry[e];},Object.defineProperty(e.prototype,"engine",{get:function(){return this.initDefaultBackend(),this.globalEngine},enumerable:!0,configurable:!0}),e.prototype.initDefaultBackend=function(){null==this.globalEngine&&this.initBackend(ENV.get("BACKEND"),!1);},__decorate([doc({heading:"Environment"})],e,"setBackend",null),__decorate([doc({heading:"Environment"})],e,"getBackend",null),__decorate([doc({heading:"Environment"})],e,"disposeVariables",null),__decorate([doc({heading:"Performance",subheading:"Memory"})],e,"memory",null),e}(),TENSORFLOWJS_FLAGS_PREFIX="tfjsflags";function getFeaturesFromURL(){var e={};if("undefined"==typeof window||void 0===window.location)return e;var t=getQueryParams(window.location.search);if(TENSORFLOWJS_FLAGS_PREFIX in t){var n={};t[TENSORFLOWJS_FLAGS_PREFIX].split(",").forEach(function(e){var t=e.split(":"),r=t[0],a=t[1];n[r]=a;}),URL_PROPERTIES.forEach(function(t){t.name in n&&(console.log("Setting feature override from URL "+t.name+": "+n[t.name]),t.type===Type.NUMBER?e[t.name]=+n[t.name]:t.type===Type.BOOLEAN?e[t.name]="true"===n[t.name]:t.type===Type.STRING?e[t.name]=n[t.name]:console.warn("Unknown URL param: "+t.name+"."));});}return e}function getGlobalNamespace(){var e;if("undefined"!=typeof window)e=window;else{if("undefined"==typeof global)throw new Error("Could not find a global object");e=global;}return e}function getOrMakeEnvironment(){var e=getGlobalNamespace();return e.ENV=e.ENV||new Environment(getFeaturesFromURL()),e.ENV}var ENV=getOrMakeEnvironment(),environment=Object.freeze({get Type(){return Type},URL_PROPERTIES:URL_PROPERTIES,Environment:Environment,ENV:ENV}),PARALLELIZE_THRESHOLD=30;function computeOptimalWindowSize(e){return e<=PARALLELIZE_THRESHOLD?e:nearestDivisor(e,Math.floor(Math.sqrt(e)))}function segOpComputeOptimalWindowSize(e,t){var n,r=!1;for(e<=PARALLELIZE_THRESHOLD?(n=e,r=!0):n=nearestDivisor(e,Math.floor(Math.sqrt(e)));!r;){if(n>t||n===e){r=!0;break}n=nearestDivisor(e,n+1);}return n}function computeOutShape$1(e,t,n){for(var r=[],a=e.length,o=0;o<a;o++)o!==t?r.push(e[o]):r.push(n);return r}function castTensor(e,t,n){if(!hasEncodingLoss(e.dtype,t))return Tensor.make(e.shape,{dataId:e.dataId},t);if("int32"===t)return n.int(e);if("bool"===t)return n.notEqual(e,ArrayOps.scalar(0,e.dtype));throw new Error("Error in Cast: unknown dtype argument ("+t+")")}function reshapeTensor(e,t){return Tensor.make(t,{dataId:e.dataId},e.dtype)}var ArgMinMaxProgram=function(){return function(e,t,n){this.variableNames=["A"];var r=e.windowSize,a=e.batchSize,o=e.inSize,i=Math.ceil(o/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[a,i];var s="max"===t?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+r+";\n\n        int bestIndex = 0;\n        float bestValue = getA(batch, inOffset);\n\n        for (int i = 0; i < "+r+"; i++) {\n          int inIdx = "+u+";\n          float candidate = getA(batch, inIdx);\n          if (candidate "+s+" bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";}}(),AvgPool2DBackpropProgram=function(){return function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=1/(t*n);this.userCode="\n      const ivec2 pads = ivec2("+o+", "+i+");\n      const float avgMultiplier = float("+s+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+a+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),BatchNormProgram=function(){return function(e,t,n,r,a,o){this.outputShape=[],this.supportsBroadcasting=!0,this.variableNames=["x","mean","variance"],assertAndGetBroadcastShape(e,t),assertAndGetBroadcastShape(e,n);var i="0.0";null!=r&&(assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";null!=a&&(assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode="\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = "+i+";\n        float scale = "+s+";\n        float inv = scale * inversesqrt(variance + float("+o+"));\n        setOutput((x - mean) * inv + offset);\n      }\n    ";}}(),CHECK_NAN_SNIPPET="\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n",ADD="return a + b;",SUB="return a - b;",MUL="return a * b;",DIV="return a / b;",INT_DIV="\n  float resultSign = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  int result = ia / ib;\n  int amodb = ia - ib * result;\n\n  if (resultSign < 0.0 && amodb != 0) {\n    result -= 1;\n  }\n  return float(result);\n",POW="\n  return (round(mod(b, 2.0)) == 0 || round(mod(b, 2.0)) == 2) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",SQUARED_DIFFERENCE="return (a - b) * (a - b);",EQUAL="return float(a == b);",NOT_EQUAL="return float(a != b);",LESS="return float(a < b);",LESS_EQUAL="return float(a <= b);",GREATER="return float(a > b);",GREATER_EQUAL="return float(a >= b);",LOGICAL_AND="return float(a >= 1.0 && b >= 1.0);",LOGICAL_OR="return float(a >= 1.0 || b >= 1.0);",MAX=CHECK_NAN_SNIPPET+"\n  return max(a, b);\n",MIN=CHECK_NAN_SNIPPET+"\n  return min(a, b);\n",MOD="return mod(a, b);",ATAN2=CHECK_NAN_SNIPPET+"\n  return atan(a, b);\n",ELU_DER="return (b >= 1.0) ? a : a * (b + 1.0);",BinaryOpProgram=function(){return function(e,t,n){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.outputShape=assertAndGetBroadcastShape(t,n),this.userCode="\n      float binaryOperation(float a, float b) {\n        "+e+"\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";}}(),ClipProgram=function(){return function(e,t,n){this.variableNames=["A"],this.outputShape=e;var r=t.toFixed(20),a=n.toFixed(20);this.userCode="\n      void main() {\n        float value = getAAtOutCoords();\n        if (isNaN(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, "+r+", "+a+"));\n      }\n    ";}}(),ConcatProgram=function(){return function(e,t){this.variableNames=["A","B"],this.outputShape=[],this.outputShape=computeOutShape(e,t,1),this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        float value = 0.0;\n        if (yC < "+e[1]+") {\n          value = getA(yR, yC);\n        } else {\n          yC -= "+e[1]+";\n          value = getB(yR, yC);\n        }\n\n        setOutput(value);\n      }\n    ";}}(),Conv2DDerFilterProgram=function(){return function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < "+e.batchSize+"; b++) {\n          for (int yR = 0; yR < "+e.outHeight+"; yR++) {\n            int xR = wR + yR * "+t+" - "+r+";\n\n            if (xR < 0 || xR >= "+e.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+e.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+a+";\n\n              if (xC < 0 || xC >= "+e.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Conv2DDerInputProgram=function(){return function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left;this.userCode="\n      const ivec2 pads = ivec2("+o+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+t+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+a+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            for (int d2 = 0; d2 < "+e.outChannels+"; d2++) {\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),DepthwiseConv2DDerFilterProgram=function(){return function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,o=e.outChannels/e.inChannels;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * "+o+" + dm;\n\n        float dotProd = 0.0;\n\n        // TODO: Vec4 over the batch size\n        for (int b = 0; b < "+e.batchSize+"; b++) {\n          for (int yR = 0; yR < "+e.outHeight+"; yR++) {\n            int xR = wR + yR * "+t+" - "+r+";\n\n            if (xR < 0 || xR >= "+e.inHeight+") {\n              continue;\n            }\n\n            for (int yC = 0; yC < "+e.outWidth+"; yC++) {\n              int xC = wC + yC * "+n+" - "+a+";\n\n              if (xC < 0 || xC >= "+e.inWidth+") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),DepthwiseConv2DDerInputProgram=function(){return function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode="\n      const ivec2 pads = ivec2("+o+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = "+t+" - 1 - wR;\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+a+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = "+n+" - 1 - wC;\n\n            // TODO: Vec4 over the channelMul\n            for (int dm = 0; dm < "+s+"; dm++) {\n              int d2 = d1 * "+s+" + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),Conv2DProgram=function(){return function(e){this.variableNames=["x","W"],this.outputShape=e.outShape;var t=e.padInfo.top,n=e.padInfo.left,r=e.strideHeight,a=e.strideWidth,o=e.dilationHeight,i=e.dilationWidth,s=e.filterHeight,u=e.filterWidth,l=4*Math.floor(e.inChannels/4),c=e.inChannels%4;this.userCode="\n      const ivec2 strides = ivec2("+r+", "+a+");\n      const ivec2 pads = ivec2("+t+", "+n+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+s+"; wR++) {\n          int xR = xRCorner + wR * "+o+";\n\n          if (xR < 0 || xR >= "+e.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+u+"; wC++) {\n            int xC = xCCorner + wC * "+i+";\n\n            if (xC < 0 || xC >= "+e.inWidth+") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < "+l+"; d1 += 4) {\n              vec4 xValues = vec4(\n                getX(batch, xR, xC, d1),\n                getX(batch, xR, xC, d1 + 1),\n                getX(batch, xR, xC, d1 + 2),\n                getX(batch, xR, xC, d1 + 3)\n              );\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              dotProd += dot(xValues, wValues);\n            }\n\n            if ("+(1===c)+") {\n              dotProd +=\n                getX(batch, xR, xC, "+l+") *\n                getW(wR, wC, "+l+", d2);\n            } else if ("+(2===c)+") {\n              vec2 xValues = vec2(\n                getX(batch, xR, xC, "+l+"),\n                getX(batch, xR, xC, "+l+" + 1)\n              );\n              vec2 wValues = vec2(\n                getW(wR, wC, "+l+", d2),\n                getW(wR, wC, "+l+" + 1, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            } else if ("+(3===c)+") {\n              vec3 xValues = vec3(\n                getX(batch, xR, xC, "+l+"),\n                getX(batch, xR, xC, "+l+" + 1),\n                getX(batch, xR, xC, "+l+" + 2)\n              );\n              vec3 wValues = vec3(\n                getW(wR, wC, "+l+", d2),\n                getW(wR, wC, "+l+" + 1, d2),\n                getW(wR, wC, "+l+" + 2, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),DepthwiseConv2DProgram=function(){return function(e){this.variableNames=["x","W"],this.outputShape=e.outShape;var t=e.inHeight,n=e.inWidth,r=e.padInfo.top,a=e.padInfo.left,o=e.strideHeight,i=e.strideWidth,s=e.dilationHeight,u=e.dilationWidth,l=e.filterHeight,c=e.filterWidth,d=e.outChannels/e.inChannels;this.userCode="\n      const ivec2 strides = ivec2("+o+", "+i+");\n      const ivec2 pads = ivec2("+r+", "+a+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / "+d+";\n        int q = d2 - d1 * "+d+";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TODO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < "+l+"; wR++) {\n          int xR = xRCorner + wR * "+s+";\n\n          if (xR < 0 || xR >= "+t+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+c+"; wC++) {\n            int xC = xCCorner + wC * "+u+";\n\n            if (xC < 0 || xC >= "+n+") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}();function makeShader(e,t,n,r){var a=e.map(function(e){var t=sizeFromShape(e.shapeInfo.logicalShape);return e.shapeInfo.isUniform?"uniform float "+e.name+(t>1?"["+t+"]":"")+";":"uniform sampler2D "+e.name+";"});a=a.join("\n");var o=e.map(function(e){return getInputSamplingSnippet(e,t,r)}).join("\n"),i=t.texShape,s=getOutputSamplingSnippet(t.logicalShape,i);return [SHADER_PREFIX,FLOAT_TEXTURE_SAMPLE_SNIPPET,FLOAT_TEXTURE_SETOUTPUT_SNIPPET,a,s,o,n].join("\n")}function getSamplerFromInInfo(e){var t=e.shapeInfo.logicalShape;switch(t.length){case 0:return getSamplerScalar(e);case 1:return getSampler1D(e);case 2:return getSampler2D(e);case 3:return getSampler3D(e);case 4:return getSampler4D(e);case 5:return getSampler5D(e);case 6:return getSampler6D(e);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function getInputSamplingSnippet(e,t,n){var r=getSamplerFlat(e);return r+=getSamplerFromInInfo(e),(n||arraysEqual(e.shapeInfo.logicalShape,t.logicalShape))&&(r+=getSamplerAtOutputCoords(e,t,n)),r}function getOutputSamplingSnippet(e,t){switch(e.length){case 0:return getOutputScalarCoords();case 1:return getOutput1DCoords(e,t);case 2:return getOutput2DCoords(e,t);case 3:return getOutput3DCoords(e,t);case 4:return getOutput4DCoords(e,t);case 5:return getOutput5DCoords(e,t);case 6:return getOutput6DCoords(e,t);default:throw new Error(e.length+"-D output sampling is not yet supported")}}var SAMPLE_1D_SNIPPET="\nvec2 UVfrom1D(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_2D_SNIPPET="\nvec2 UVfrom2D(int texNumR, int texNumC, int numC, int row, int col) {\n  int index = row * numC + col;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_3D_SNIPPET="\nvec2 UVfrom3D(int texNumR, int texNumC, int stride0,\n    int stride1, int row, int col, int depth) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_4D_SNIPPET="\nvec2 UVfrom4D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int row, int col, int depth,\n    int depth2) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_5D_SNIPPET="\nvec2 UVfrom5D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int stride3, int row, int col, int depth,\n    int depth2, int depth3) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 +\n              depth * stride2 + depth2 * stride3 + depth3;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",SAMPLE_6D_SNIPPET="\nvec2 UVfrom6D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int stride3, int stride4,\n    int row, int col, int depth, int depth2, int depth3, int depth4) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2 *\n    stride3 + depth3 * stride4 + depth4;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",FLOAT_TEXTURE_SAMPLE_SNIPPET="\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    return texture2D(textureSampler, uv).r;\n  }\n",FLOAT_TEXTURE_SETOUTPUT_SNIPPET="\n  void setOutput(float val) {\n    gl_FragColor = vec4(val, 0, 0, 0);\n  }\n",SHADER_PREFIX="\n  precision highp float;\n  precision highp int;\n  varying vec2 resultUV;\n  const vec2 halfCR = vec2(0.5, 0.5);\n\n  struct ivec5\n  {\n    int x;\n    int y;\n    int z;\n    int w;\n    int u;\n  };\n\n  struct ivec6\n  {\n    int x;\n    int y;\n    int z;\n    int w;\n    int u;\n    int v;\n  };\n\n  bool isNaN(float val) {\n    return (val < 0.0 || 0.0 < val || val == 0.0) ? false : true;\n  }\n\n  bool hasNaN(vec4 values) {\n    vec4 v1 = values * values;\n    vec4 v2 = values * values;\n    return any(notEqual(v1, v2));\n  }\n\n  float getNaN(vec4 values) {\n    return dot(vec4(1), values);\n  }\n\n  int round(float value) {\n    return int(floor(value + 0.5));\n  }\n\n  int imod(int x, int y) {\n    return x - y * (x / y);\n  }\n\n  //Based on the work of Dave Hoskins\n  //https://www.shadertoy.com/view/4djSRW\n  #define HASHSCALE1 443.8975\n  float random(float seed){\n    vec2 p = resultUV * seed;\n    vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.x + p3.y) * p3.z);\n  }\n\n  "+SAMPLE_1D_SNIPPET+"\n  "+SAMPLE_2D_SNIPPET+"\n  "+SAMPLE_3D_SNIPPET+"\n  "+SAMPLE_4D_SNIPPET+"\n  "+SAMPLE_5D_SNIPPET+"\n  "+SAMPLE_6D_SNIPPET+"\n";function getOutputScalarCoords(){return "\n    int getOutputCoords() {\n      return 0;\n    }\n  "}function getOutput1DCoords(e,t){return 1===t[0]?"\n      int getOutputCoords() {\n        return int(resultUV.x * "+t[1]+".0);\n      }\n    ":1===t[1]?"\n      int getOutputCoords() {\n        return int(resultUV.y * "+t[0]+".0);\n      }\n    ":"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+t[0]+", "+t[1]+"));\n      return resTexRC.x * "+t[1]+" + resTexRC.y;\n    }\n  "}function getOutput3DCoords(e,t){var n=e[1]*e[2],r=e[2];return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n      int r = index / "+n+";\n      index -= r * "+n+";\n      int c = index / "+r+";\n      int d = index - c * "+r+";\n      return ivec3(r, c, d);\n    }\n  "}function getOutput4DCoords(e,t){var n=e[3],r=e[2]*n,a=e[1]*r;return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n\n      int r = index / "+a+";\n      index -= r * "+a+";\n\n      int c = index / "+r+";\n      index -= c * "+r+";\n\n      int d = index / "+n+";\n      int d2 = index - d * "+n+";\n\n      return ivec4(r, c, d, d2);\n    }\n  "}function getOutput5DCoords(e,t){var n=e[4],r=e[3]*n,a=e[2]*r,o=e[1]*a;return "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2("+t[0]+",\n                             "+t[1]+"));\n\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n\n      int r = index / "+o+";\n      index -= r * "+o+";\n\n      int c = index / "+a+";\n      index -= c * "+a+";\n\n      int d = index / "+r+";\n      index -= d * "+r+";\n\n      int d2 = index  / "+n+";\n      int d3 = index - d2 * "+n+";\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  "}function getOutput6DCoords(e,t){var n=e[5],r=e[4]*n,a=e[3]*r,o=e[2]*a,i=e[1]*o;return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n\n      int r = index / "+i+";\n      index -= r * "+i+";\n\n      int c = index / "+o+";\n      index -= c * "+o+";\n\n      int d = index / "+a+";\n      index -= d * "+a+";\n\n      int d2 = index / "+r+";\n      index -= d2 * "+r+";\n\n      int d3 = index / "+n+";\n      int d4 = index - d3 * "+n+";\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  "}function getOutput2DCoords(e,t){return arraysEqual(e,t)?"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2("+t[0]+", "+t[1]+"));\n      }\n    ":1===e[1]?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+t[0]+", "+t[1]+"));\n        int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ":1===e[0]?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2("+t[0]+", "+t[1]+"));\n        int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ":"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+t[0]+", "+t[1]+"));\n      int index = resTexRC.x * "+t[1]+" + resTexRC.y;\n      int r = index / "+e[1]+";\n      int c = index - r * "+e[1]+";\n      return ivec2(r, c);\n    }\n  "}function getSamplerScalar(e){var t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1);return e.shapeInfo.isUniform?"float "+n+"() {return "+t+";}":"\n    float "+n+"() {\n      return sampleTexture("+t+", halfCR);\n    }\n  "}function getSampler1D(e){var t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1);return "\n    float "+n+"(int index) {\n      return "+n+"Flat(index);\n    }\n  "}function getSampler2D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=e.shapeInfo.texShape;if(null!=a&&arraysEqual(t,a)){var o=a[0];return "\n    float "+r+"(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2("+a[1]+".0, "+o+".0);\n      return sampleTexture("+n+", uv);\n    }\n  "}var i=squeezeShape(t),s=i.newShape,u=i.keptDims,l=s;if(l.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,l))+"\n      float "+r+"(int row, int col) {\n        return "+r+"("+getSqueezedParams(["row","col"],u)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col) {\n        int index = row * "+t[1]+" + col;\n        return "+r+"Flat(index);\n      }\n    ";var c=a[0],d=a[1];return 1===d?"\n    float "+r+"(int row, int col) {\n      int index = row * "+t[1]+" + col;\n      vec2 uv = vec2(0.5, (float(index) + 0.5) / "+c+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ":1===c?"\n    float "+r+"(int row, int col) {\n      int index = row * "+t[1]+" + col;\n      vec2 uv = vec2((float(index) + 0.5) / "+d+".0, 0.5);\n      return sampleTexture("+n+", uv);\n    }\n  ":"\n  float "+r+"(int row, int col) {\n    vec2 uv = UVfrom2D("+c+", "+d+", "+t[1]+", row, col);\n    return sampleTexture("+n+", uv);\n  }\n"}function getSampler3D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=t[1]*t[2],o=t[2],i=squeezeShape(t),s=i.newShape,u=i.keptDims,l=s;if(l.length<t.length){return "\n        "+getSamplerFromInInfo(squeezeInputInfo(e,l))+"\n        float "+r+"(int row, int col, int depth) {\n          return "+r+"("+getSqueezedParams(["row","col","depth"],u)+");\n        }\n      "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth) {\n        int index = row * "+a+" + col * "+o+" + depth;\n        return "+r+"Flat(index);\n      }\n    ";var c=e.shapeInfo.texShape,d=c[0],p=c[1];return p===a?"\n        float "+r+"(int row, int col, int depth) {\n          int texR = row;\n          int texC = col * "+o+" + depth;\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2("+p+".0, "+d+".0);\n          return sampleTexture("+n+", uv);\n        }\n      ":p===o?"\n    float "+r+"(int row, int col, int depth) {\n      int texR = row * "+t[1]+" + col;\n      int texC = depth;\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+p+".0, "+d+".0);\n      return sampleTexture("+n+", uv);\n    }\n  ":"\n      float "+r+"(int row, int col, int depth) {\n        vec2 uv = UVfrom3D(\n            "+d+", "+p+", "+a+", "+o+", row, col, depth);\n        return sampleTexture("+n+", uv);\n      }\n  "}function getSampler4D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=t[3],o=t[2]*a,i=t[1]*o,s=squeezeShape(t),u=s.newShape,l=s.keptDims;if(u.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,u))+"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        return "+r+"("+getSqueezedParams(["row","col","depth","depth2"],l)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int index = row * "+i+" + col * "+o+" +\n            depth * "+a+" + depth2;\n        return "+r+"Flat(index);\n      }\n    ";var c=e.shapeInfo.texShape,d=c[0],p=c[1];return p===i?"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int texR = row;\n        int texC = col * "+o+" + depth * "+a+" + depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+p+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":p===a?"\n      float "+r+"(int row, int col, int depth, int depth2) {\n        int texR = row * "+t[1]*t[2]+" + col * "+t[2]+" + depth;\n        int texC = depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+p+".0, "+d+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":"\n    float "+r+"(int row, int col, int depth, int depth2) {\n      vec2 uv = UVfrom4D("+d+", "+p+", "+i+", "+o+",\n          "+a+", row, col, depth, depth2);\n      return sampleTexture("+n+", uv);\n    }\n  "}function getSampler5D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=t[4],o=t[3]*a,i=t[2]*o,s=t[1]*i,u=squeezeShape(t),l=u.newShape,c=u.keptDims;if(l.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,l))+"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        return "+r+"("+getSqueezedParams(["row","col","depth","depth2","depth3"],c)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int index = row * "+s+" + col * "+i+" +\n            depth * "+o+" + depth2 * "+a+" + depth3;\n        return "+r+"Flat(index);\n      }\n    ";var d=e.shapeInfo.texShape,p=d[0],h=d[1];return h===s?"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        int texC = col * "+i+" + depth * "+o+" +\n                   depth2 * "+a+" + depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+h+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":h===a?"\n      float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row * "+t[1]*t[2]+" + col * "+t[2]+" +\n                   depth * "+t[3]+" + depth2;\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+h+".0, "+p+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":"\n    float "+r+"(int row, int col, int depth, int depth2, int depth3) {\n      vec2 uv = UVfrom5D("+p+", "+h+", "+s+", "+i+",\n          "+o+", "+a+", row, col, depth, depth2, depth3);\n      return sampleTexture("+n+", uv);\n    }\n  "}function getSampler6D(e){var t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),a=t[5],o=t[4]*a,i=t[3]*o,s=t[2]*i,u=t[1]*s,l=squeezeShape(t),c=l.newShape,d=l.keptDims;if(c.length<t.length){return "\n      "+getSamplerFromInInfo(squeezeInputInfo(e,c))+"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return "+r+"("+getSqueezedParams(["row","col","depth","depth2","depth3","depth4"],d)+");\n      }\n    "}if(e.shapeInfo.isUniform)return "\n      float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = row * "+u+" + col * "+s+" +\n            depth * "+i+" + depth2 * "+o+" + depth3 * "+o+"\n            + depth4\n        return "+r+"Flat(index);\n      }\n    ";var p=e.shapeInfo.texShape,h=p[0],f=p[1];return f===u?"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        int texC = col * "+s+" + depth * "+i+" + depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2("+f+".0, "+h+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":f===a?"\n      float "+r+"(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row * "+t[1]*t[2]+" + col * "+t[2]+" + depth;\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2("+f+".0, "+h+".0);\n        return sampleTexture("+n+", uv);\n      }\n    ":"\n    float "+r+"(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      vec2 uv = UVfrom6D("+h+", "+f+", "+u+", "+s+",\n          "+i+", "+o+", "+a+"\n          ,row, col, depth, depth2, depth3, depth4);\n      return sampleTexture("+n+", uv);\n    }\n  "}function getSamplerFlat(e){var t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1)+"Flat",r=sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform)return 1===r?"float "+n+"(int index) {return "+t+";}":"\n      float "+n+"(int index) {\n        for (int i = 0; i < "+r+"; i++) {\n          if (i == index) {\n            return "+t+"[i];\n          }\n        }\n      }\n    ";var a=e.shapeInfo.texShape,o=a[0],i=a[1];return 1===i&&1===o?"\n      float "+n+"(int index) {\n        return sampleTexture("+t+", halfCR);\n      }\n    ":1===i?"\n      float "+n+"(int index) {\n        vec2 uv = vec2(0.5, (float(index) + 0.5) / "+o+".0);\n        return sampleTexture("+t+", uv);\n      }\n    ":1===o?"\n      float "+n+"(int index) {\n        vec2 uv = vec2((float(index) + 0.5) / "+i+".0, 0.5);\n        return sampleTexture("+t+", uv);\n      }\n    ":"\n    float "+n+"(int index) {\n      vec2 uv = UVfrom1D("+o+", "+i+", index);\n      return sampleTexture("+t+", uv);\n    }\n  "}function getBroadcastOutputCoordsSampler(e,t,n,r){var a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,i="int";2===o?i="ivec2":3===o?i="ivec3":4===o&&(i="ivec4");var s=getBroadcastDims(e.shapeInfo.logicalShape,t.logicalShape),u=o-a;return "\n    float "+r+"() {\n      "+i+" coords = getOutputCoords();\n      "+(0===a?"":o<2&&s.length>=1?"coords = 0;":s.map(function(e){return "coords["+(e+u)+"] = 0;"}).join("\n"))+"\n      return get"+n+"("+(o<2&&a>0?"coords":e.shapeInfo.logicalShape.map(function(e,t){return "coords["+(t+u)+"]"}).join(", "))+");\n    }\n  "}function getSamplerAtOutputCoords(e,t,n){var r=e.name,a=r.charAt(0).toUpperCase()+r.slice(1),o="get"+a+"AtOutCoords",i=getBroadcastDims(e.shapeInfo.logicalShape,t.logicalShape),s=e.shapeInfo.logicalShape.length,u=t.logicalShape.length,l=n&&(u>s||i.length>0),c=broadcastDimsAreOuter(i),d=e.shapeInfo.isUniform;if(l&&!c)return getBroadcastOutputCoordsSampler(e,t,a,o);var p=sizeFromShape(e.shapeInfo.logicalShape),h="";l&&c&&(h="\n        int mainPart = index / "+p+";\n        index -= mainPart * "+p+";\n      ");var f=t.texShape;if(d)return 1===p?"float "+o+"() {return "+r+";}":"\n      float "+o+"() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                              vec2("+f[0]+", "+f[1]+"));\n        int index = resTexRC.x * "+f[1]+" + resTexRC.y;\n        "+h+"\n        return get"+a+"Flat(index);\n      }\n    ";var g=e.shapeInfo.texShape;return arraysEqual(g,f)?"\n      float "+o+"() {\n        return sampleTexture("+r+", resultUV);\n      }\n    ":"\n    float "+o+"() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2("+f[0]+", "+f[1]+"));\n      int index = resTexRC.x * "+f[1]+" + resTexRC.y;\n      "+h+"\n      int texR = index / "+g[1]+";\n      int texC = index - texR * "+g[1]+";\n      vec2 uv = (vec2(texC, texR) + halfCR) /\n                 vec2("+g[1]+".0, "+g[0]+".0);\n\n      return sampleTexture("+r+", uv);\n    }\n  "}function getCoordsDataType(e){if(e<=1)return "int";if(2===e)return "ivec2";if(3===e)return "ivec3";if(4===e)return "ivec4";if(5===e)return "ivec5";if(6===e)return "ivec6";throw Error("GPU for rank "+e+" is not yet supported")}function squeezeInputInfo(e,t){var n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function getSqueezedParams(e,t){return t.map(function(t){return e[t]}).join(", ")}var CumSumProgram=function(){return function(e,t,n){this.variableNames=["x"],this.outputShape=e;var r=e.length,a=e[e.length-1],o=n?"<":">";this.userCode="\n      int getIndex(int i) {\n        "+(n?"return "+a+" -i - 1;":"return i;")+"\n      }\n\n      void main() {\n        "+getCoordsDataType(r)+" coords = getOutputCoords();\n        int end = "+getFinalCoord(r,"coords")+";\n        float val = 0.0;\n        for (int i = "+a+" - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx "+o+" end) {\n            continue;\n          }\n          if (idx == end && "+t+") {\n            continue;\n          }\n          "+getFinalCoord(r,"coords")+" = idx;\n          val += getX("+getCoords(r,"coords")+");\n        }\n        setOutput(val);\n      }\n    ";}}();function getCoords(e,t){if(1===e)return ""+t;if(2===e)return t+".x, "+t+".y";if(3===e)return t+".x, "+t+".y, "+t+".z";if(4===e)return t+".x, "+t+".y, "+t+".z, "+t+".w";throw Error("Cumulative sum for rank "+e+" is not yet supported")}function getFinalCoord(e,t){if(1===e)return ""+t;if(2===e)return t+".y";if(3===e)return t+".z";if(4===e)return t+".w";throw Error("Cumulative sum for rank "+e+" is not yet supported")}var TextureUsage,PhysicalTextureType,EncodeFloatProgram=function(){return function(e){this.variableNames=["A"],this.outputShape=e,this.userCode="\n      const float FLOAT_MAX = 1.70141184e38;\n      const float FLOAT_MIN = 1.17549435e-38;\n\n      lowp vec4 encode_float(highp float v) {\n        if (isNaN(v)) {\n          return vec4(255, 255, 255, 255);\n        }\n\n        highp float av = abs(v);\n\n        if(av < FLOAT_MIN) {\n          return vec4(0.0, 0.0, 0.0, 0.0);\n        } else if(v > FLOAT_MAX) {\n          return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n        } else if(v < -FLOAT_MAX) {\n          return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n        }\n\n        highp vec4 c = vec4(0,0,0,0);\n\n        highp float e = floor(log2(av));\n        highp float m = exp2(fract(log2(av))) - 1.0;\n\n        c[2] = floor(128.0 * m);\n        m -= c[2] / 128.0;\n        c[1] = floor(32768.0 * m);\n        m -= c[1] / 32768.0;\n        c[0] = floor(8388608.0 * m);\n\n        highp float ebias = e + 127.0;\n        c[3] = floor(ebias / 2.0);\n        ebias -= c[3] * 2.0;\n        c[2] += floor(ebias) * 128.0;\n\n        c[3] += 128.0 * step(0.0, -v);\n\n        return c / 255.0;\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        gl_FragColor = encode_float(x);\n      }\n    ";}}(),FromPixelsProgram=function(){return function(e){this.variableNames=["A"];var t=e[0],n=e[1];this.outputShape=e,this.userCode="\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2("+n+".0, "+t+".0);\n\n        vec4 values = texture2D(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";}}(),GatherProgram=function(){return function(e,t,n){this.variableNames=["A","indices"];var r=e.slice();r[n]=t,this.outputShape=r,this.rank=r.length;var a=getCoordsDataType(this.rank),o=getSourceCoords(e,n);this.userCode="\n      void main() {\n        "+a+" resRC = getOutputCoords();\n        setOutput(getA("+o+"));\n      }\n    ";}}();function getSourceCoords(e,t){var n=e.length;if(n>4)throw Error("Gather for rank "+n+" is not yet supported");if(1===n)return "int(getIndices(resRC))";for(var r=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],o=0;o<e.length;o++)o===t?a.push("int(getIndices("+r[o]+"))"):a.push(""+r[o]);return a.join()}function getUnpackedMatrixTextureShapeWidthHeight(e,t){return [t,e]}function getUnpackedArraySizeFromMatrixSize(e,t){return e*t}function getMatrixSizeFromUnpackedArraySize(e,t){if(e%t!=0)throw new Error("unpackedSize ("+e+") must be a multiple of "+t);return e/t}function encodeMatrixToUnpackedArray(e,t,n){var r=getUnpackedArraySizeFromMatrixSize(e.length,n);if(t.length<r)throw new Error("unpackedArray length ("+t.length+") must be >= "+r);for(var a=0,o=0;o<e.length;++o)t[a]=e[o],a+=n;}function decodeMatrixFromUnpackedArray(e,t,n){var r=getMatrixSizeFromUnpackedArraySize(e.length,n);if(t.length<r)throw new Error("matrix length ("+t.length+") must be >= "+r);for(var a=0,o=0;o<e.length;o+=n)t[a++]=e[o];}function getPackedMatrixTextureShapeWidthHeight(e,t){return [Math.ceil(t/2),Math.ceil(e/2)]}function getPackedRGBAArraySizeFromMatrixShape(e,t){var n=getPackedMatrixTextureShapeWidthHeight(e,t);return n[0]*n[1]*4}function encodeMatrixToPackedRGBA(e,t,n,r){var a=getPackedRGBAArraySizeFromMatrixShape(t,n);if(r.length<a)throw new Error("packedRGBA length ("+r.length+") must be >= "+a);for(var o=getPackedMatrixTextureShapeWidthHeight(t,n),i=o[0],s=o[1],u=n%2==1,l=t%2==1,c=Math.floor(n/2),d=Math.floor(t/2),p=u?4:0,h=n,f=0,g=0;g<d;++g){for(var m=2*g*n,v=0;v<c;++v){var y=m+2*v;r[f]=e[y],r[f+1]=e[y+1],r[f+2]=e[y+h],r[f+3]=e[y+h+1],f+=4;}f+=p;}if(u){y=n-1,f=4*(i-1);var x=2*n;for(p=4*i,g=0;g<d;++g)r[f]=e[y],r[f+2]=e[y+n],y+=x,f+=p;}if(l)for(y=(t-1)*n,f=(s-1)*i*4,v=0;v<c;++v)r[f++]=e[y++],r[f++]=e[y++],f+=2;return u&&l&&(r[r.length-4]=e[e.length-1]),r}function decodeMatrixFromPackedRGBA(e,t,n,r){var a=t*n;if(a<r.length)throw new Error("matrix length ("+r.length+") must be >= "+a);for(var o=n%2==1,i=t%2==1,s=Math.floor(n/2),u=Math.floor(t/2),l=getPackedMatrixTextureShapeWidthHeight(t,n),c=l[0],d=l[1],p=o?4:0,h=n+(o?1:0),f=0,g=0,m=n,v=0;v<u;++v){for(var y=0;y<s;++y)r[g++]=e[f++],r[g++]=e[f++],r[m++]=e[f++],r[m++]=e[f++];f+=p,g+=h,m+=h;}if(o){f=4*(c-1);var x=n-1;for(p=4*c,h=2*n,v=0;v<u;++v)r[x]=e[f],r[x+n]=e[f+2],f+=p,x+=h;}if(i)for(f=(d-1)*c*4,x=(t-1)*n,y=0;y<s;++y)r[x++]=e[f++],r[x++]=e[f++],f+=2;return o&&i&&(r[r.length-1]=e[e.length-4]),r}!function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD";}(TextureUsage||(TextureUsage={})),function(e){e[e.FLOAT16=0]="FLOAT16",e[e.FLOAT32=1]="FLOAT32",e[e.UNSIGNED_BYTE=2]="UNSIGNED_BYTE";}(PhysicalTextureType||(PhysicalTextureType={}));var MAX_TEXTURE_SIZE=null;function createWebGLRenderingContext(e){var t=document.createElement("canvas");return t.width=1,t.height=1,createWebGLRenderingContextFromCanvas(t,e)}function createWebGLRenderingContextFromCanvas(e,t){var n,r=ENV.get("WEBGL_VERSION");if(2===r?n=e.getContext("webgl2",t):1===r&&(n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t)),0===r||null==n)throw new Error("This browser does not support WebGL.");return n}function callAndCheck(e,t){var n=t();return checkWebGLError(e),n}var webGLDebugErrorCheckingEnabled=!1;function enableDebugWebGLErrorChecking(e){webGLDebugErrorCheckingEnabled=e;}function checkWebGLError(e){if(webGLDebugErrorCheckingEnabled){var t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+getWebGLErrorMessage(e,t))}}function getWebGLErrorMessage(e,t){switch(t){case e.NO_ERROR:return "NO_ERROR";case e.INVALID_ENUM:return "INVALID_ENUM";case e.INVALID_VALUE:return "INVALID_VALUE";case e.INVALID_OPERATION:return "INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return "INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return "OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return "CONTEXT_LOST_WEBGL";default:return "Unknown error code "+t}}function getExtensionOrThrow(e,t){return throwIfNull(e,function(){return e.getExtension(t)},'Extension "'+t+'" not supported on this browser.')}function createVertexShader(e,t){var n=throwIfNull(e,function(){return e.createShader(e.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(callAndCheck(e,function(){return e.shaderSource(n,t)}),callAndCheck(e,function(){return e.compileShader(n)}),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function createFragmentShader(e,t){var n=throwIfNull(e,function(){return e.createShader(e.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(callAndCheck(e,function(){return e.shaderSource(n,t)}),callAndCheck(e,function(){return e.compileShader(n)}),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw logShaderSourceAndInfoLog(t,e.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var lineNumberRegex=/ERROR: [0-9]+:([0-9]+):/g;function logShaderSourceAndInfoLog(e,t){var n=lineNumberRegex.exec(t);if(null==n)return console.log("Couldn't parse line number in error: "+t),void console.log(e);for(var r=+n[1],a=e.split("\n"),o=a.length.toString().length+2,i=a.map(function(e,t){return rightPad((t+1).toString(),o)+e}),s=0,u=0;u<i.length;u++)s=Math.max(i[u].length,s);var l=i.slice(0,r-1),c=i.slice(r-1,r),d=i.slice(r);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log("%c "+rightPad(c[0],s),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(d.join("\n"));}function createProgram(e){return throwIfNull(e,function(){return e.createProgram()},"Unable to create WebGLProgram.")}function linkProgram(e,t){if(callAndCheck(e,function(){return e.linkProgram(t)}),!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function validateProgram(e,t){if(callAndCheck(e,function(){return e.validateProgram(t)}),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function createStaticVertexBuffer(e,t){var n=throwIfNull(e,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return callAndCheck(e,function(){return e.bindBuffer(e.ARRAY_BUFFER,n)}),callAndCheck(e,function(){return e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}),n}function createStaticIndexBuffer(e,t){var n=throwIfNull(e,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return callAndCheck(e,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)}),callAndCheck(e,function(){return e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)}),n}function queryMaxTextureSize(e){return null!=MAX_TEXTURE_SIZE?MAX_TEXTURE_SIZE:MAX_TEXTURE_SIZE=callAndCheck(e,function(){return e.getParameter(e.MAX_TEXTURE_SIZE)})}function getNumChannels(){return 2===ENV.get("WEBGL_VERSION")?1:4}function createTexture(e){return throwIfNull(e,function(){return e.createTexture()},"Unable to create WebGLTexture.")}function validateTextureSize(e,t,n){var r=queryMaxTextureSize(e);if(t<=0||n<=0){var a="["+t+"x"+n+"]";throw new Error("Requested texture size "+a+" is invalid.")}if(t>r||n>r){a="["+t+"x"+n+"]";throw new Error("Requested texture size "+a+" greater than WebGL maximum on this browser / GPU "+("["+r+"x"+r+"]")+".")}}function createFramebuffer(e){return throwIfNull(e,function(){return e.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function bindVertexBufferToProgramAttribute(e,t,n,r,a,o,i){var s=e.getAttribLocation(t,n);return -1!==s&&(callAndCheck(e,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),callAndCheck(e,function(){return e.vertexAttribPointer(s,a,e.FLOAT,!1,o,i)}),callAndCheck(e,function(){return e.enableVertexAttribArray(s)}),!0)}function bindTextureUnit(e,t,n){validateTextureUnit(e,n),callAndCheck(e,function(){return e.activeTexture(e.TEXTURE0+n)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,t)});}function unbindTextureUnit(e,t){validateTextureUnit(e,t),callAndCheck(e,function(){return e.activeTexture(e.TEXTURE0+t)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)});}function getProgramUniformLocationOrThrow(e,t,n){return throwIfNull(e,function(){return e.getUniformLocation(t,n)},'uniform "'+n+'" not present in program.')}function getProgramUniformLocation(e,t,n){return e.getUniformLocation(t,n)}function bindTextureToProgramUniformSampler(e,t,n,r,a){callAndCheck(e,function(){return bindTextureUnit(e,n,a)}),callAndCheck(e,function(){return e.uniform1i(r,a)});}function bindCanvasToFramebuffer(e){callAndCheck(e,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),callAndCheck(e,function(){return e.viewport(0,0,e.canvas.width,e.canvas.height)}),callAndCheck(e,function(){return e.scissor(0,0,e.canvas.width,e.canvas.height)});}function bindColorTextureToFramebuffer(e,t,n){callAndCheck(e,function(){return e.bindFramebuffer(e.FRAMEBUFFER,n)}),callAndCheck(e,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)});}function unbindColorTextureFromFramebuffer(e,t){callAndCheck(e,function(){return e.bindFramebuffer(e.FRAMEBUFFER,t)}),callAndCheck(e,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)});}function validateFramebuffer(e){var t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+getFramebufferErrorMessage(e,t))}function getFramebufferErrorMessage(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return "FRAMEBUFFER_UNSUPPORTED";default:return "unknown error "+t}}function throwIfNull(e,t,n){var r=callAndCheck(e,function(){return t()});if(null==r)throw new Error(n);return r}function validateTextureUnit(e,t){var n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function getTextureShapeFromLogicalShape(e,t){2!==t.length&&(t=squeezeShape(t).newShape);var n=queryMaxTextureSize(e),r=sizeFromShape(t);return t.length<=1&&r<=n?[r,1]:2===t.length&&t[0]<=n&&t[1]<=n?t:3===t.length&&t[0]<=n&&t[1]*t[2]<=n?[t[0],t[1]*t[2]]:4===t.length&&t[0]<=n&&t[1]*t[2]*t[3]<=n?[t[0],t[1]*t[2]*t[3]]:sizeToSquarishShape(r)}var webgl_util=Object.freeze({createWebGLRenderingContext:createWebGLRenderingContext,createWebGLRenderingContextFromCanvas:createWebGLRenderingContextFromCanvas,callAndCheck:callAndCheck,enableDebugWebGLErrorChecking:enableDebugWebGLErrorChecking,checkWebGLError:checkWebGLError,getWebGLErrorMessage:getWebGLErrorMessage,getExtensionOrThrow:getExtensionOrThrow,createVertexShader:createVertexShader,createFragmentShader:createFragmentShader,createProgram:createProgram,linkProgram:linkProgram,validateProgram:validateProgram,createStaticVertexBuffer:createStaticVertexBuffer,createStaticIndexBuffer:createStaticIndexBuffer,queryMaxTextureSize:queryMaxTextureSize,getNumChannels:getNumChannels,createTexture:createTexture,validateTextureSize:validateTextureSize,createFramebuffer:createFramebuffer,bindVertexBufferToProgramAttribute:bindVertexBufferToProgramAttribute,bindTextureUnit:bindTextureUnit,unbindTextureUnit:unbindTextureUnit,getProgramUniformLocationOrThrow:getProgramUniformLocationOrThrow,getProgramUniformLocation:getProgramUniformLocation,bindTextureToProgramUniformSampler:bindTextureToProgramUniformSampler,bindCanvasToFramebuffer:bindCanvasToFramebuffer,bindColorTextureToFramebuffer:bindColorTextureToFramebuffer,unbindColorTextureFromFramebuffer:unbindColorTextureFromFramebuffer,validateFramebuffer:validateFramebuffer,getFramebufferErrorMessage:getFramebufferErrorMessage,getTextureShapeFromLogicalShape:getTextureShapeFromLogicalShape});function getWebGLContextAttributes(){return {alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0}}function createWebGLContext(e){var t,n=getWebGLContextAttributes();return callAndCheck(t=null!=e?createWebGLRenderingContextFromCanvas(e,n):createWebGLRenderingContext(n),function(){return t.disable(t.DEPTH_TEST)}),callAndCheck(t,function(){return t.disable(t.STENCIL_TEST)}),callAndCheck(t,function(){return t.disable(t.BLEND)}),callAndCheck(t,function(){return t.disable(t.DITHER)}),callAndCheck(t,function(){return t.disable(t.POLYGON_OFFSET_FILL)}),callAndCheck(t,function(){return t.disable(t.SAMPLE_COVERAGE)}),callAndCheck(t,function(){return t.enable(t.SCISSOR_TEST)}),callAndCheck(t,function(){return t.enable(t.CULL_FACE)}),callAndCheck(t,function(){return t.cullFace(t.BACK)}),t}function createVertexShader$1(e){return createVertexShader(e,"\n    precision highp float;\n    attribute vec3 clipSpacePos;\n    attribute vec2 uv;\n    varying vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")}function createVertexBuffer(e){return createStaticVertexBuffer(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function createIndexBuffer(e){return createStaticIndexBuffer(e,new Uint16Array([0,1,2,2,1,3]))}function getTextureConfig(e,t){var n,r,a,o,i,s,u,l=e;return 2===ENV.get("WEBGL_VERSION")?(n=l.R32F,r=l.R16F,a=l.RGBA32F,o=l.RED,i=4,s=1,u=l.HALF_FLOAT):(n=e.RGBA,r=e.RGBA,a=l.RGBA,o=e.RGBA,i=4,s=4,u=null!=t?t.HALF_FLOAT_OES:null),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedFloat:a,textureFormatFloat:o,downloadTextureFormat:e.RGBA,downloadUnpackNumChannels:i,defaultNumChannels:s,textureTypeHalfFloat:u}}function createAndConfigureTexture(e,t,n,r,a,o){validateTextureSize(e,t,n);var i=createTexture(e),s=e.TEXTURE_2D;return callAndCheck(e,function(){return e.bindTexture(s,i)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)}),callAndCheck(e,function(){return e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)}),callAndCheck(e,function(){return e.texImage2D(s,0,r,t,n,0,a,o,null)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)}),i}function createFloat32MatrixTexture(e,t,n,r){var a=getUnpackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,a[0],a[1],r.internalFormatFloat,r.textureFormatFloat,e.FLOAT)}function createFloat16MatrixTexture(e,t,n,r){var a=getUnpackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,a[0],a[1],r.internalFormatFloat,r.textureFormatFloat,r.textureTypeHalfFloat)}function createUnsignedBytesMatrixTexture(e,t,n,r){var a=getUnpackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,a[0],a[1],e.RGBA,e.RGBA,e.UNSIGNED_BYTE)}function createPackedMatrixTexture(e,t,n,r){var a=getPackedMatrixTextureShapeWidthHeight(t,n);return createAndConfigureTexture(e,a[0],a[1],r.internalFormatPackedFloat,e.RGBA,e.FLOAT)}function bindVertexProgramAttributeStreams(e,t,n){return callAndCheck(e,function(){return e.bindBuffer(e.ARRAY_BUFFER,n)}),bindVertexBufferToProgramAttribute(e,t,"clipSpacePos",n,3,20,0)&&bindVertexBufferToProgramAttribute(e,t,"uv",n,2,20,12)}function uploadPixelDataToTexture(e,t,n){callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,t)}),callAndCheck(e,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)});}function uploadDataToTexture(e,t,n,r,a,o){validateTextureSize(e,n,r),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,t)}),callAndCheck(e,function(){return e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,o,e.FLOAT,a)}),callAndCheck(e,function(){return e.bindTexture(e.TEXTURE_2D,null)});}function uploadMatrixToTexture(e,t,n,r,a,o,i){var s,u=getUnpackedMatrixTextureShapeWidthHeight(n,r),l=u[0],c=u[1];1===i.defaultNumChannels?s=a:encodeMatrixToUnpackedArray(a,s=new Float32Array(getUnpackedArraySizeFromMatrixSize(a.length,o)),o),uploadDataToTexture(e,t,l,c,s,i.textureFormatFloat);}function uploadMatrixToPackedTexture(e,t,n,r,a,o){var i=getPackedMatrixTextureShapeWidthHeight(n,r),s=i[0],u=i[1],l=new Float32Array(getPackedRGBAArraySizeFromMatrixShape(n,r));encodeMatrixToPackedRGBA(a,n,r,l),uploadDataToTexture(e,t,s,u,l,e.RGBA);}function downloadMatrixFromOutputTextureAsync(e,t,n,r,a){return __awaiter(this,void 0,void 0,function(){var o,i,s,u,l;return __generator(this,function(c){switch(c.label){case 0:return o=e,i=new Float32Array(getUnpackedArraySizeFromMatrixSize(n*r,a.downloadUnpackNumChannels)),s=i instanceof Float32Array?4*i.length:i,u=e.createBuffer(),callAndCheck(e,function(){return e.bindBuffer(o.PIXEL_PACK_BUFFER,u)}),callAndCheck(e,function(){return e.bufferData(o.PIXEL_PACK_BUFFER,s,e.STATIC_DRAW)}),callAndCheck(e,function(){return o.readPixels(0,0,r,n,e.RGBA,e.FLOAT,0)}),[4,t.getBufferSubDataAsync(o.PIXEL_PACK_BUFFER,0,i)];case 1:return c.sent(),l=new Float32Array(n*r),decodeMatrixFromUnpackedArray(i,l,a.downloadUnpackNumChannels),[2,l]}})})}function downloadFloat32MatrixFromOutputTexture(e,t,n,r){var a=getUnpackedMatrixTextureShapeWidthHeight(t,n),o=a[0],i=a[1],s=new Float32Array(getUnpackedArraySizeFromMatrixSize(t*n,r.downloadUnpackNumChannels));callAndCheck(e,function(){return e.readPixels(0,0,o,i,r.downloadTextureFormat,e.FLOAT,s)});var u=new Float32Array(t*n);return decodeMatrixFromUnpackedArray(s,u,r.downloadUnpackNumChannels),u}function downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n,r){var a=getUnpackedMatrixTextureShapeWidthHeight(t,n),o=a[0],i=a[1],s=new Uint8Array(getUnpackedArraySizeFromMatrixSize(t*n,4));return callAndCheck(e,function(){return e.readPixels(0,0,o,i,r.downloadTextureFormat,e.UNSIGNED_BYTE,s)}),new Float32Array(s.buffer)}function downloadMatrixFromPackedOutputTexture(e,t,n,r){var a=getPackedMatrixTextureShapeWidthHeight(t,n),o=a[0],i=a[1],s=new Float32Array(getPackedRGBAArraySizeFromMatrixShape(t,n));callAndCheck(e,function(){return e.readPixels(0,0,o,i,e.RGBA,e.FLOAT,s)});var u=new Float32Array(t*n);return decodeMatrixFromPackedRGBA(s,t,n,u)}var gpgpu_util=Object.freeze({getWebGLContextAttributes:getWebGLContextAttributes,createWebGLContext:createWebGLContext,createVertexShader:createVertexShader$1,createVertexBuffer:createVertexBuffer,createIndexBuffer:createIndexBuffer,getTextureConfig:getTextureConfig,createFloat32MatrixTexture:createFloat32MatrixTexture,createFloat16MatrixTexture:createFloat16MatrixTexture,createUnsignedBytesMatrixTexture:createUnsignedBytesMatrixTexture,createPackedMatrixTexture:createPackedMatrixTexture,bindVertexProgramAttributeStreams:bindVertexProgramAttributeStreams,uploadPixelDataToTexture:uploadPixelDataToTexture,uploadMatrixToTexture:uploadMatrixToTexture,uploadMatrixToPackedTexture:uploadMatrixToPackedTexture,downloadMatrixFromOutputTextureAsync:downloadMatrixFromOutputTextureAsync,downloadFloat32MatrixFromOutputTexture:downloadFloat32MatrixFromOutputTexture,downloadByteEncodedFloatMatrixFromOutputTexture:downloadByteEncodedFloatMatrixFromOutputTexture,downloadMatrixFromPackedOutputTexture:downloadMatrixFromPackedOutputTexture}),GPGPUContext=function(){function e(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.autoDebugValidate=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[],this.gl=null!=e?e:createWebGLContext(),1===ENV.get("WEBGL_VERSION")?(this.textureFloatExtension=getExtensionOrThrow(this.gl,"OES_texture_float"),this.colorBufferFloatExtension=this.gl.getExtension("WEBGL_color_buffer_float"),ENV.get("WEBGL_RENDER_FLOAT32_ENABLED")||(this.textureHalfFloatExtension=getExtensionOrThrow(this.gl,"OES_texture_half_float"),this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float"))):this.colorBufferFloatExtension=getExtensionOrThrow(this.gl,"EXT_color_buffer_float"),this.loseContextExtension=getExtensionOrThrow(this.gl,"WEBGL_lose_context"),ENV.get("WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED")&&(this.getBufferSubDataAsyncExtension=this.gl.getExtension("WEBGL_get_buffer_sub_data_async")),this.vertexBuffer=createVertexBuffer(this.gl),this.indexBuffer=createIndexBuffer(this.gl),this.framebuffer=createFramebuffer(this.gl),this.textureConfig=getTextureConfig(this.gl,this.textureHalfFloatExtension);}return e.prototype.dispose=function(){var e=this;if(!this.disposed){null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var t=this.gl;callAndCheck(t,function(){return t.finish()}),callAndCheck(t,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),callAndCheck(t,function(){return t.deleteFramebuffer(e.framebuffer)}),callAndCheck(t,function(){return t.bindBuffer(t.ARRAY_BUFFER,null)}),callAndCheck(t,function(){return t.deleteBuffer(e.vertexBuffer)}),callAndCheck(t,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}),callAndCheck(t,function(){return t.deleteBuffer(e.indexBuffer)}),this.loseContextExtension.loseContext(),this.disposed=!0;}},e.prototype.enableAutomaticDebugValidation=function(e){this.autoDebugValidate=e,enableDebugWebGLErrorChecking(e);},e.prototype.createFloat32MatrixTexture=function(e,t){return this.throwIfDisposed(),createFloat32MatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.createFloat16MatrixTexture=function(e,t){return this.throwIfDisposed(),createFloat16MatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.createUnsignedBytesMatrixTexture=function(e,t){return this.throwIfDisposed(),createUnsignedBytesMatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.uploadPixelDataToTexture=function(e,t){this.throwIfDisposed(),uploadPixelDataToTexture(this.gl,e,t);},e.prototype.createPackedMatrixTexture=function(e,t){return this.throwIfDisposed(),createPackedMatrixTexture(this.gl,e,t,this.textureConfig)},e.prototype.deleteMatrixTexture=function(e){var t=this;this.throwIfDisposed(),this.outputTexture===e&&(unbindColorTextureFromFramebuffer(this.gl,this.framebuffer),this.outputTexture=null),callAndCheck(this.gl,function(){return t.gl.deleteTexture(e)});},e.prototype.uploadMatrixToTexture=function(e,t,n,r){this.throwIfDisposed();var a=getNumChannels();return uploadMatrixToTexture(this.gl,e,t,n,r,a,this.textureConfig)},e.prototype.uploadMatrixToPackedTexture=function(e,t,n,r){return this.throwIfDisposed(),uploadMatrixToPackedTexture(this.gl,e,t,n,r,this.textureConfig)},e.prototype.downloadFloat32MatrixFromOutputTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return downloadFloat32MatrixFromOutputTexture(r.gl,t,n,r.textureConfig)})},e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return downloadByteEncodedFloatMatrixFromOutputTexture(r.gl,t,n,r.textureConfig)})},e.prototype.downloadMatrixFromTextureAsync=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var r=this;return __generator(this,function(a){if(null==this.getBufferSubDataAsyncExtension)throw new Error("Cannot download matrix from output texture asynchronously, WEBGL_get_buffer_sub_data_async is not enabled.");return [2,this.downloadMatrixDriverAsync(e,function(){return downloadMatrixFromOutputTextureAsync(r.gl,r.getBufferSubDataAsyncExtension,t,n,r.textureConfig)})]})})},e.prototype.downloadMatrixFromPackedTexture=function(e,t,n){var r=this;return this.downloadMatrixDriver(e,function(){return downloadMatrixFromPackedOutputTexture(r.gl,t,n,r.textureConfig)})},e.prototype.createProgram=function(e){this.throwIfDisposed();var t=this.gl,n=createFragmentShader(t,e),r=createVertexShader$1(t),a=createProgram(t);return callAndCheck(t,function(){return t.attachShader(a,r)}),callAndCheck(t,function(){return t.attachShader(a,n)}),linkProgram(t,a),this.autoDebugValidate&&validateProgram(t,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=bindVertexProgramAttributeStreams(t,this.program,this.vertexBuffer)),a},e.prototype.deleteProgram=function(e){var t=this;this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&callAndCheck(this.gl,function(){return t.gl.deleteProgram(e)});},e.prototype.setProgram=function(e){var t=this;this.throwIfDisposed(),this.program=e,null!=this.program&&this.autoDebugValidate&&validateProgram(this.gl,this.program),callAndCheck(this.gl,function(){return t.gl.useProgram(e)});},e.prototype.getUniformLocation=function(e,t,n){return void 0===n&&(n=!0),this.throwIfDisposed(),n?getProgramUniformLocationOrThrow(this.gl,e,t):getProgramUniformLocation(this.gl,e,t)},e.prototype.getAttributeLocation=function(e,t){var n=this;return this.throwIfDisposed(),callAndCheck(this.gl,function(){return n.gl.getAttribLocation(e,t)})},e.prototype.getUniformLocationNoThrow=function(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)},e.prototype.setInputMatrixTexture=function(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),bindTextureToProgramUniformSampler(this.gl,this.program,e,t,n);},e.prototype.setOutputMatrixTexture=function(e,t,n){this.setOutputMatrixTextureDriver(e,n,t);},e.prototype.setOutputPackedMatrixTexture=function(e,t,n){this.throwIfDisposed();var r=getPackedMatrixTextureShapeWidthHeight(t,n),a=r[0],o=r[1];this.setOutputMatrixTextureDriver(e,a,o);},e.prototype.setOutputMatrixWriteRegion=function(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t);},e.prototype.setOutputPackedMatrixWriteRegion=function(e,t,n,r){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},e.prototype.debugValidate=function(){null!=this.program&&validateProgram(this.gl,this.program),validateFramebuffer(this.gl);},e.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var e=this.gl;this.autoDebugValidate&&this.debugValidate(),callAndCheck(e,function(){return e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)});},e.prototype.blockUntilAllProgramsCompleted=function(){var e=this;this.throwIfDisposed(),callAndCheck(this.gl,function(){return e.gl.finish()});},e.prototype.getQueryTimerExtension=function(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=getExtensionOrThrow(this.gl,2===ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},e.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},e.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},e.prototype.runQuery=function(e){var t=this.beginQuery();return e(),this.endQuery(),this.pollQueryTime(t)},e.prototype.beginQuery=function(){if(2===ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}var r=this.getQueryTimerExtensionWebGL1(),a=r.createQueryEXT();return r.beginQueryEXT(r.TIME_ELAPSED_EXT,a),a},e.prototype.endQuery=function(){if(2!==ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){var e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT);}else{var t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT);}},e.prototype.isQueryAvailable=function(e,t){if(0===t)return !0;if(2===t){var n=this.gl,r=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),a&&!this.disjoint}a=(r=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),a&&!this.disjoint},e.prototype.pollQueryTime=function(e){var t=this;return new Promise(function(n){var r=ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION");t.addItemToPoll(function(){return t.isQueryAvailable(e,r)},function(){return n(t.getQueryTime(e,r))});})},e.prototype.pollItems=function(){for(var e=binSearchLastTrue(this.itemsToPoll.map(function(e){return e.isDoneFn})),t=0;t<=e;++t){(0, this.itemsToPoll[t].resolveFn)();}this.itemsToPoll=this.itemsToPoll.slice(e+1);},e.prototype.addItemToPoll=function(e,t){var n=this;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||repeatedTry(function(){return n.pollItems(),0===n.itemsToPoll.length});},e.prototype.getQueryTime=function(e,t){if(0===t)return null;if(2===t){var n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}var r=this.getQueryTimerExtensionWebGL1();return r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)/1e6},e.prototype.downloadMatrixDriverSetup=function(e){this.throwIfDisposed(),bindColorTextureToFramebuffer(this.gl,e,this.framebuffer),this.autoDebugValidate&&validateFramebuffer(this.gl);},e.prototype.downloadMatrixDriverTeardown=function(){null!=this.outputTexture?(bindColorTextureToFramebuffer(this.gl,this.outputTexture,this.framebuffer),this.autoDebugValidate&&validateFramebuffer(this.gl)):unbindColorTextureFromFramebuffer(this.gl,this.framebuffer);},e.prototype.downloadMatrixDriver=function(e,t){this.downloadMatrixDriverSetup(e);var n=t();return this.downloadMatrixDriverTeardown(),n},e.prototype.downloadMatrixDriverAsync=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return this.downloadMatrixDriverSetup(e),[4,t()];case 1:return n=r.sent(),this.downloadMatrixDriverTeardown(),[2,n]}})})},e.prototype.setOutputMatrixTextureDriver=function(e,t,n){this.throwIfDisposed();var r=this.gl;bindColorTextureToFramebuffer(r,e,this.framebuffer),this.autoDebugValidate&&validateFramebuffer(r),this.outputTexture=e,callAndCheck(r,function(){return r.viewport(0,0,t,n)}),callAndCheck(r,function(){return r.scissor(0,0,t,n)});},e.prototype.setOutputMatrixWriteRegionDriver=function(e,t,n,r){var a=this;this.throwIfDisposed(),callAndCheck(this.gl,function(){return a.gl.scissor(e,t,n,r)});},e.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},e.prototype.throwIfNoProgram=function(){if(null==this.program)throw new Error("No GPU program is currently set.")},e}();function binSearchLastTrue(e){for(var t=0,n=e.length-1,r=-1;t<=n;){var a=t+n>>1;e[a]()?(r=a,t=a+1):n=a-1;}return r}function compileProgram(e,t,n,r){for(var a=t.userCode,o=n.map(function(e,n){var r={logicalShape:e.tensor.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform};return {name:t.variableNames[n],shapeInfo:r}}),i=o.map(function(e){return e.shapeInfo}),s={logicalShape:r.tensor.shape,texShape:r.texData.texShape,isUniform:!1},u=makeShader(o,s,a,!0===t.supportsBroadcasting),l=e.createProgram(u),c={},d=0;d<t.variableNames.length;d++){var p=t.variableNames[d];c[p]=e.getUniformLocation(l,p,!1);}return {program:t,source:u,webGLProgram:l,uniformLocations:c,gpgpu:e,inShapeInfos:i,outShapeInfo:s}}function validateBinaryAndProgram(e,t){if(e.length!==t.length)throw Error("Binary was compiled with "+e.length+" inputs, but was executed with "+t.length+" inputs");e.forEach(function(e,n){var r=e.logicalShape,a=t[n],o=a.tensor.shape;if(!arraysEqual(r,o))throw Error("Binary was compiled with different shapes than the current args. Shapes "+r+" and "+o+" must match");if(!e.isUniform||!a.isUniform){var i=e.texShape,s=a.isUniform?null:a.texData.texShape;if(!arraysEqual(i,s))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+i+" and "+s+" must match")}});}function runProgram(e,t,n,r){validateBinaryAndProgram(e.inShapeInfos,t),validateBinaryAndProgram([e.outShapeInfo],[n]);var a=n.texData.texture,o=n.texData.texShape,i=e.gpgpu;i.setOutputMatrixTexture(a,o[0],o[1]),i.setProgram(e.webGLProgram),t.forEach(function(t,n){var r=e.program.variableNames[n],a=e.uniformLocations[r];if(null!=a){if(t.isUniform){if(1===t.tensor.size)i.gl.uniform1f(a,t.tensor.dataSync()[0]);else{var o=t.tensor.dataSync();o instanceof Float32Array||(o=new Float32Array(o)),i.gl.uniform1fv(a,o);}return}var s=t.texData.texture;i.setInputMatrixTexture(s,a,n);}}),null!=r&&r(i,e.webGLProgram),i.executeProgram();}function makeShaderKey(e,t,n){var r="";t.concat(n).forEach(function(e){r+=e.tensor.shape+"_"+(e.isUniform?"uniform":e.texData.texShape);});var a=e.userCode,o=(!0===e.supportsBroadcasting).toString(),i=e.constructor.name;return i+="_"+o+"_"+r+"_"+a}var WhereProgram=function(){return function(e,t,n){var r,a;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error("Where for rank "+n+" is not yet supported");if(1===n)a="resRC",r="resRC";else{for(var o=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+o[u]),u<e&&i.push(""+o[u]);r=i.join(),a=s.join();}var l=getCoordsDataType(n);this.userCode="\n      void main() {\n        "+l+" resRC = getOutputCoords();\n        float cVal = getC("+r+");\n        if (cVal >= 1.0) {\n          setOutput(getA("+a+"));\n        } else {\n          setOutput(getB("+a+"));\n        }\n      }\n    ";}}(),LRNProgram=function(){return function(e,t,n,r,a){this.variableNames=["x"],this.outputShape=[];var o,i=t,s=e[3]-1;this.outputShape=e;var u="float("+n+") + float("+r+") * sum";o=.5===a?"inversesqrt("+u+")":1===a?"1.0/("+u+")":"exp(log("+u+") * float(-"+a+"));",this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -"+i+"; j <= "+i+"; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  "+s+") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * "+o+";\n        setOutput(val);\n      }\n    ";}}(),MaxPool2DBackpropProgram=function(){return function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left,s=t*n-1;this.userCode="\n      const ivec2 pads = ivec2("+o+", "+i+");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < "+t+"; wR++) {\n          float dyR = float(dyRCorner + wR) / "+r+".0;\n\n          if (dyR < 0.0 || dyR >= "+e.outHeight+".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < "+n+"; wC++) {\n            float dyC = float(dyCCorner + wC) / "+a+".0;\n\n            if (dyC < 0.0 || dyC >= "+e.outWidth+".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = "+s+" - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * "+n+" + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";}}(),MatMulProgram=function(){return function(e,t,n,r){void 0===n&&(n=!1),void 0===r&&(r=!1),this.variableNames=["matrixA","matrixB"];var a=n?e[1]:e[0],o=r?t[0]:t[1],i=n?e[0]:e[1];this.outputShape=[a,o];var s=function(e,t){return n?t+" + "+e+", aRow":"aRow, "+t+" + "+e},u=function(e,t){return r?"bCol, "+t+" + "+e:t+" + "+e+", bCol"},l=4*Math.floor(i/4),c=i%4;this.userCode=" float dotARowBCol(int aRow, int bCol) {\n      float result = 0.0;\n      for (int i = 0; i < "+l+"; i += 4) {\n        vec4 a = vec4(\n          getMatrixA("+s(0,"i")+"),\n          getMatrixA("+s(1,"i")+"),\n          getMatrixA("+s(2,"i")+"),\n          getMatrixA("+s(3,"i")+")\n        );\n        vec4 b = vec4(\n          getMatrixB("+u(0,"i")+"),\n          getMatrixB("+u(1,"i")+"),\n          getMatrixB("+u(2,"i")+"),\n          getMatrixB("+u(3,"i")+")\n        );\n\n        result += dot(a, b);\n      }\n\n      if ("+(1===c)+") {\n        result += getMatrixA("+s(0,l)+") *\n          getMatrixB("+u(0,l)+");\n      } else if ("+(2===c)+") {\n        vec2 a = vec2(\n          getMatrixA("+s(0,l)+"),\n          getMatrixA("+s(1,l)+")\n        );\n        vec2 b = vec2(\n          getMatrixB("+u(0,l)+"),\n          getMatrixB("+u(1,l)+")\n        );\n        result += dot(a, b);\n      } else if ("+(3===c)+") {\n        vec3 a = vec3(\n          getMatrixA("+s(0,l)+"),\n          getMatrixA("+s(1,l)+"),\n          getMatrixA("+s(2,l)+")\n        );\n        vec3 b = vec3(\n          getMatrixB("+u(0,l)+"),\n          getMatrixB("+u(1,l)+"),\n          getMatrixB("+u(2,l)+")\n        );\n        result += dot(a, b);\n      }\n\n      return result;\n    }\n\n    void main() {\n      ivec2 resRC = getOutputCoords();\n      setOutput(dotARowBCol(resRC.x, resRC.y));\n    }\n    ";}}(),MultinomialProgram=function(){function e(e,t,n){this.variableNames=["probs"],this.outputShape=[e,n],this.userCode="\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < "+(t-1)+"; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float("+(t-1)+"));\n      }\n    ";}return e.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,r){null==t.seedLoc&&(t.seedLoc=n.getUniformLocation(r,"seed")),n.gl.uniform1f(t.seedLoc,e);}},e}(),OneHotProgram=function(){return function(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode="\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float("+r+"), float("+n+"),\n                      float(index == coords.y)));\n      }\n    ";}}(),PadProgram=function(){return function(e,t,n){this.variableNames=["x"],this.outputShape=t.map(function(t,n){return t[0]+e[n]+t[1]});var r=e.length,a=getCoordsDataType(r),o=t.map(function(e){return e[0]}).join(","),i=t.map(function(t,n){return t[0]+e[n]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=1!==r?"\n      "+a+" start = "+a+"("+o+");\n      "+a+" end = "+a+"("+i+");\n\n      void main() {\n        "+a+" outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float("+n+"));\n        } else {\n          "+a+" coords = outC - start;\n          setOutput(getX("+s+"));\n        }\n      }\n    ":"\n        int start = "+o+";\n        int end = "+i+";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float("+n+"));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";}}(),Pool2DProgram=function(){return function(e,t,n){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");var r=e.filterHeight,a=e.filterWidth,o=e.strideHeight,i=e.strideWidth,s=e.padInfo.top,u=e.padInfo.left;this.outputShape=e.outShape;var l="avg"===t,c="0.0";if(l||(c="-1.0 / 0.0"),n)this.userCode="\n        const ivec2 strides = ivec2("+o+", "+i+");\n        const ivec2 pads = ivec2("+s+", "+u+");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < "+r+"; wR++) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= "+e.inHeight+") {\n              continue;\n            }\n\n            for (int wC = 0; wC < "+a+"; wC++) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= "+e.inWidth+") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * "+a+" + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";else{var d=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"avg"===t&&(d="avgValue / count");var p=4*Math.floor(a/4),h=a%4,f="\n      if ("+l+") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";this.userCode="\n      const ivec2 strides = ivec2("+o+", "+i+");\n      const ivec2 pads = ivec2("+s+", "+u+");\n      const float initializationValue = "+c+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= "+e.inWidth+") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4("+c+");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < "+r+"; wR++) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= "+e.inHeight+") {\n            continue;\n          }\n\n          for (int wC = 0; wC < "+p+"; wC += 4) {\n            int xC = xCCorner + wC;\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              getValue(batch, xR, xC + 3, d)\n            );\n\n            "+f+"\n          }\n\n          int xC = xCCorner + "+p+";\n          if ("+(1===h)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            "+f+"\n          } else if ("+(2===h)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              initializationValue,\n              initializationValue\n            );\n\n            "+f+"\n          } else if ("+(3===h)+") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              initializationValue\n            );\n\n            "+f+"\n          }\n        }\n        setOutput("+d+");\n      }\n    ";}}}(),ReduceProgram=function(){return function(e,t){this.variableNames=["x"];var n=e.windowSize,r=e.batchSize,a=e.inSize,o=Math.ceil(a/n);this.outputShape=[r,o];var i="0.0",s="";"min"===t?(i="1.0 / 0.0",s="min"):"max"===t&&(i="-1.0 / 0.0",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";"sum"===t?u="sumValue":"all"===t&&(u="allValue");var l=4*Math.floor(n/4),c=n%4,d="\n      if ("+("sum"===t)+") {\n        sumValue += dot(values, ones);\n      } else {\n        minMaxValue = "+s+"(values, minMaxValue);\n      }\n    ",p="vec4";"all"===t&&(i="1.0",d="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",p="bvec4");var h="";a%n>0&&(h="\n        if (inIdx < 0 || inIdx >= "+a+") {\n          return initializationValue;\n        }\n      "),this.userCode="\n      const float initializationValue = "+i+";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        "+h+"\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * "+n+";\n\n        vec4 minMaxValue = vec4("+i+");\n        float sumValue = 0.0;\n        float allValue = 1.0;\n\n        for (int i = 0; i < "+l+"; i += 4) {\n          int inIdx = inOffset + i;\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          "+d+"\n        }\n\n        int inIdx = inOffset + "+l+";\n        if ("+(1===c)+") {\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          "+d+"\n        } else if ("+(2===c)+") {\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          "+d+"\n        } else if ("+(3===c)+") {\n          "+p+" values = "+p+"(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          "+d+"\n        }\n        setOutput("+u+");\n      }\n    ";}}(),ResizeBilinearBackpropProgram=function(){return function(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,a=r[1],o=r[2],i=e.shape,s=i[1],u=i[2],l=[n&&s>1?a-1:a,n&&u>1?o-1:o],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],d=l[0]/c[0],p=l[1]/c[1],h=1/d,f=1/p,g=2*Math.ceil(h)+2,m=2*Math.ceil(f)+2;this.userCode="\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float("+d+");\n        const float widthScale = float("+p+");\n\n        const float invHeightScale = float("+h+");\n        const float invWidthScale = float("+f+");\n\n        const int winHeight = int("+g+");\n        const int winWidth = int("+m+");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= "+s+") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= "+u+") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), "+(a-1)+".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), "+(o-1)+".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";}}(),ResizeBilinearProgram=function(){return function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var a=e[0],o=e[1],i=e[2],s=e[3];this.outputShape=[a,t,n,s];var u=[r&&t>1?o-1:o,r&&n>1?i-1:i],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/l[0]+",\n          "+u[1]/l[1]+");\n      const vec2 inputShapeRC = vec2("+o+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";}}(),ResizeNearestNeighborProgram=function(){return function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var a=e[0],o=e[1],i=e[2],s=e[3];this.outputShape=[a,t,n,s];var u=r?[o-1,i-1]:[o,i],l=r?[t-1,n-1]:[t,n],c=r?"0.5":"0.0";this.userCode="\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          "+u[0]/l[0]+",\n          "+u[1]/l[1]+");\n      const vec2 inputShapeRC = vec2("+o+".0, "+i+".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + "+c+")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";}}(),ReverseProgram=function(){return function(e,t){this.variableNames=["x"];var n=e.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=e,1!==n){var r=e.map(function(n,r){return function(n){return -1!==t.indexOf(n)&&1!==e[n]?e[n]+" - coords["+n+"] - 1":"coords["+n+"]"}(r)}).join(","),a=getCoordsDataType(n);this.userCode="\n      void main() {\n        "+a+" coords = getOutputCoords();\n        setOutput(getX("+r+"));\n      }\n    ";}else this.userCode="\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX("+e[0]+" - coord - 1));\n        }\n      ";}}(),SegmentOpProgram=function(){return function(e,t){this.variableNames=["x","segmentIds"];var n=e.windowSize,r=e.batchSize,a=e.inSize,o=e.numSegments,i=o*Math.ceil(a/n);this.outputShape=[r,i];var s=4*Math.floor(n/4),u=n%4,l="\n        sumValue += dot(values, filter);\n    ",c="";a%n>0&&(c="\n        if (inIdx < 0 || inIdx >= "+a+") {\n          return initializationValue;\n        }\n      ");var d="";a%n>0&&(d="\n        if (inIdx < 0 || inIdx >= "+a+") {\n          return -1.0;\n        }\n      "),this.userCode="\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        "+c+"\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        "+d+"\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          "+o+")) * float("+n+"));\n        int currentSeg = int(mod(float(outIdx), float("+o+")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < "+s+"; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          "+l+"\n        }\n\n        int inIdx = inOffset + "+s+";\n        if ("+(1===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          "+l+"\n        } else if ("+(2===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          "+l+"\n        } else if ("+(3===u)+") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          "+l+"\n        }\n        setOutput(sumValue);\n      }\n    ";}}(),SliceProgram=function(){function e(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;var t=getCoordsDataType(this.rank),n=getCoords$1(this.rank);this.userCode="\n      uniform "+t+" start;\n\n      void main() {\n        "+t+" sourceLoc = start + getOutputCoords();\n        setOutput(getSource("+n+"));\n      }\n    ";}return e.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,r){if(null!=t.startLoc||(t.startLoc=n.getUniformLocationNoThrow(r,"start"),null!=t.startLoc))if(1===t.rank)n.gl.uniform1i(t.startLoc,e[0]);else if(2===t.rank)n.gl.uniform2i(t.startLoc,e[0],e[1]);else if(3===t.rank)n.gl.uniform3i(t.startLoc,e[0],e[1],e[2]);else{if(4!==t.rank)throw Error("Slicing for rank "+t.rank+" is not yet supported");n.gl.uniform4i(t.startLoc,e[0],e[1],e[2],e[3]);}}},e}();function getCoords$1(e){if(1===e)return "sourceLoc";if(2===e)return "sourceLoc.x, sourceLoc.y";if(3===e)return "sourceLoc.x, sourceLoc.y, sourceLoc.z";if(4===e)return "sourceLoc.x, sourceLoc.y, sourceLoc.z, sourceLoc.w";throw Error("Slicing for rank "+e+" is not yet supported")}var StridedSliceProgram=function(){return function(e,t,n){this.variableNames=["x"],this.outputShape=n,this.rank=n.length;var r=getCoordsDataType(this.rank),a="";a=1===this.rank?"coords * strides + begin":n.map(function(e,t){return "coords["+t+"] * strides["+t+"] + begin["+t+"]"}).join(","),this.userCode="\n      "+r+" begin = "+r+"("+e+");\n      "+r+" strides = "+r+"("+t+");\n\n      void main() {\n        "+r+" coords = getOutputCoords();\n        setOutput(getX("+a+"));\n      }\n    ";}}(),TextureManager=function(){function e(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={};}return e.prototype.acquireTexture=function(e,t){var n,r=getPhysicalFromLogicalTextureType(t),a=getKeyFromTextureShape(e,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var o=this.freeTextures[a].shift();return this.usedTextures[a].push(o),o}return this.numUsedTextures++,this.log(),r===PhysicalTextureType.FLOAT32?n=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===PhysicalTextureType.FLOAT16?n=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===PhysicalTextureType.UNSIGNED_BYTE&&(n=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[a].push(n),n},e.prototype.releaseTexture=function(e,t,n){var r=getKeyFromTextureShape(t,getPhysicalFromLogicalTextureType(n));r in this.freeTextures||(this.freeTextures[r]=[]),this.freeTextures[r].push(e),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[r],o=a.indexOf(e);if(o<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(o,1),this.log();},e.prototype.log=function(){if(this.logEnabled){var e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+e+")");}},e.prototype.getNumUsedTextures=function(){return this.numUsedTextures},e.prototype.getNumFreeTextures=function(){return this.numFreeTextures},e.prototype.dispose=function(){var e=this;if(null!=this.freeTextures){for(var t in this.freeTextures)this.freeTextures[t].forEach(function(t){e.gpgpu.deleteMatrixTexture(t);});for(var t in this.usedTextures)this.usedTextures[t].forEach(function(t){e.gpgpu.deleteMatrixTexture(t);});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0;}},e}();function getPhysicalFromLogicalTextureType(e){if(e===TextureUsage.DOWNLOAD||e===TextureUsage.PIXELS)return PhysicalTextureType.UNSIGNED_BYTE;if(e===TextureUsage.UPLOAD)return PhysicalTextureType.FLOAT32;if(e===TextureUsage.RENDER)return ENV.get("WEBGL_RENDER_FLOAT32_ENABLED")?PhysicalTextureType.FLOAT32:PhysicalTextureType.FLOAT16;throw new Error("Unknown logical texture type "+e)}function getKeyFromTextureShape(e,t){return e[0]+"_"+e[1]+"_"+t}var TileProgram=function(){return function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;var a=getCoordsDataType(this.rank),o=getSourceCoords$1(e);this.userCode="\n      void main() {\n        "+a+" resRC = getOutputCoords();\n        setOutput(getA("+o+"));\n      }\n    ";}}();function getSourceCoords$1(e){var t=e.length;if(t>5)throw Error("Tile for rank "+t+" is not yet supported");if(1===t)return "imod(resRC, "+e[0]+")";for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[],a=0;a<e.length;a++)r.push("imod("+n[a]+", "+e[a]+")");return r.join()}var TransposeProgram=function(){return function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;var a=getCoordsDataType(this.rank),o=getSwitchedCoords(t);this.userCode="\n    void main() {\n      "+a+" resRC = getOutputCoords();\n      setOutput(getA("+o+"));\n    }\n    ";}}();function getSwitchedCoords(e){var t=e.length;if(t>6)throw Error("Transpose for rank "+t+" is not yet supported");for(var n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=new Array(t),a=0;a<e.length;a++)r[e[a]]=n[a];return r.join()}var ERF_P=.3275911,ERF_A1=.254829592,ERF_A2=-.284496736,ERF_A3=1.421413741,ERF_A4=-1.453152027,ERF_A5=1.061405429,UnaryOpProgram=function(){return function(e,t){this.variableNames=["A"],this.outputShape=e,this.userCode="\n      float unaryOperation(float x) {\n        "+t+"\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";}}(),CHECK_NAN_SNIPPET$1="if (isNaN(x)) return x;",ABS="return abs(x);",RELU=CHECK_NAN_SNIPPET$1+"\n  return (x < 0.0) ? 0.0 : x;\n",ELU="return (x >= 0.0) ? x : (exp(x) - 1.0);",SELU="\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = "+SELU_SCALEALPHA+";\n  float scale = "+SELU_SCALE+";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";function STEP(e){return void 0===e&&(e=0),CHECK_NAN_SNIPPET$1+"\n    return x > 0.0 ? 1.0 : float("+e+");\n  "}var NEG="return -x;",CEIL="return ceil(x);",FLOOR="return floor(x);",SIGN="\n  if (isNaN(x)) { return 0.0; }\n  return sign(x);\n",ROUND="\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n",EXP="return exp(x);",EXPM1="return exp(x) - 1.0;",LOG="return log(x);",LOG1P="return log(1.0 + x);",SQRT="return sqrt(x);",RSQRT="return inversesqrt(x);",SIGMOID="return 1.0 / (1.0 + exp(-1.0 * x));",SOFTPLUS="\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n",SIN=CHECK_NAN_SNIPPET$1+"\n  return sin(x);\n",COS=CHECK_NAN_SNIPPET$1+"\n  return cos(x);\n",TAN="return tan(x);",ASIN="return asin(x);",ACOS="return acos(x);",ATAN=CHECK_NAN_SNIPPET$1+"\n  return atan(x);\n",SINH="\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n",COSH="\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n",TANH="\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n",ASINH="return log(x + sqrt(x * x + 1.0));",ACOSH="return log(x + sqrt(x * x - 1.0));",ATANH="return (log(1.0 + x) - log(1.0 - x)) / 2.0;",ERF='\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = '+ERF_P+";\n  float a1 = "+ERF_A1+";\n  float a2 = "+ERF_A2+";\n  float a3 = "+ERF_A3+";\n  float a4 = "+ERF_A4+";\n  float a5 = "+ERF_A5+";\n\n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n",SQUARE="return x * x;",RECIPROCAL="return 1.0 / x;",LOGICAL_NOT="return float(!(x >= 1.0));",TO_INT="return float(int(x));",BEFORE_PAGING_CONSTANT=300,SIZE_UPLOAD_UNIFORM=32,MathBackendWebGL=function(){function e(e,t){if(void 0===t&&(t=!0),this.gpgpu=e,this.delayedStorage=t,this.texData=new WeakMap,this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.lruDataGPU=[],this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.binaryCache={},this.disposed=!1,ENV.get("WEBGL_VERSION")<1)throw new Error("WebGL is not supported on this device");ENV.get("IS_BROWSER")&&(this.canvas=document.createElement("canvas")),null==e?(this.gpgpu=new GPGPUContext(createWebGLContext(this.canvas)),this.gpgpuCreatedLocally=!0):this.gpgpuCreatedLocally=!1,this.NUM_BYTES_BEFORE_PAGING=window.screen.height*window.screen.width*window.devicePixelRatio*BEFORE_PAGING_CONSTANT,this.textureManager=new TextureManager(this.gpgpu);}return e.prototype.register=function(e,t,n){if(this.texData.has(e))throw new Error("Data buffer is already registered");this.texData.set(e,{shape:t,dtype:n,values:null,texture:null,texShape:null,usage:TextureUsage.RENDER});},e.prototype.fromPixels=function(e,t){if(null==e)throw new Error("MathBackendWebGL.writePixels(): pixels can not be null");var n=[e.height,e.width],r=[e.height,e.width,t];if(e instanceof HTMLVideoElement){if(null==this.fromPixelsCanvas){if(!ENV.get("IS_BROWSER"))throw new Error("Can't read pixels from HTMLImageElement outside the browser.");if("complete"!==document.readyState)throw new Error("The DOM is not ready yet. Please call tf.fromPixels() once the DOM is ready. One way to do that is to add an event listener for `DOMContentLoaded` on the document object");this.fromPixelsCanvas=document.createElement("canvas");}this.fromPixelsCanvas.width=e.width,this.fromPixelsCanvas.height=e.height,this.fromPixelsCanvas.getContext("2d").drawImage(e,0,0,e.width,e.height),e=this.fromPixelsCanvas;}var a=Tensor.make(n,{},"int32");this.texData.get(a.dataId).usage=TextureUsage.PIXELS,this.gpgpu.uploadPixelDataToTexture(this.getTexture(a.dataId),e);var o=new FromPixelsProgram(r),i=this.compileAndRun(o,[a]);return a.dispose(),i},e.prototype.write=function(e,t){if(null==t)throw new Error("MathBackendWebGL.write(): values can not be null");this.throwIfNoData(e);var n=this.texData.get(e),r=n.texture,a=n.texShape,o=n.usage;null!=r&&(this.releaseTexture(e,r,a,o),n.texture=null,n.texShape=null),n.usage=TextureUsage.UPLOAD,n.values=t,this.delayedStorage||this.uploadToGPU(e);},e.prototype.readSync=function(e){this.throwIfNoData(e);var t=this.texData.get(e),n=t.shape,r=t.texture,a=t.values,o=t.texShape,i=t.dtype;if(null!=a)return this.cacheOnCPU(e),a;var s,u,l=null!=this.activeTimers;if(l&&(s=performance.now()),ENV.get("WEBGL_DOWNLOAD_FLOAT_ENABLED"))u=this.gpgpu.downloadFloat32MatrixFromOutputTexture(r,o[0],o[1]);else{var c=Tensor.make(n,{});this.texData.get(c.dataId).usage=TextureUsage.DOWNLOAD;var d=Tensor.make(n,{dataId:e},i),p=new EncodeFloatProgram(n),h=this.compileAndRun(p,[d],c),f=this.texData.get(c.dataId);u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(f.texture,f.texShape[0],f.texShape[1]),h.dispose(),d.dispose(),c.dispose();}return l&&(this.downloadWaitMs+=performance.now()-s),this.cacheOnCPU(e,u),t.values},e.prototype.read=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a,o,i,s,u;return __generator(this,function(l){switch(l.label){case 0:return this.pendingRead.has(e)?(t=this.pendingRead.get(e),[2,new Promise(function(e){return t.push(e)})]):(this.throwIfNoData(e),n=this.texData.get(e),r=n.texture,a=n.values,o=n.texShape,null!=a?(this.cacheOnCPU(e),[2,a]):ENV.get("WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED")?[4,this.gpgpu.downloadMatrixFromTextureAsync(r,o[0],o[1])]:[3,2]);case 1:return i=l.sent(),this.cacheOnCPU(e,i),[2,n.values];case 2:return 0===ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?[2,this.readSync(e)]:(this.pendingRead.set(e,[]),[4,this.gpgpu.runQuery(function(){})]);case 3:return l.sent(),s=this.pendingRead.get(e),this.pendingRead.delete(e),u=this.readSync(e),s.forEach(function(e){return e(u)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)),[2,u]}})})},e.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a,o,i;return __generator(this,function(s){switch(s.label){case 0:return t=this.activeTimers,n=[],r=!1,null==this.programTimersStack?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e(),a=flatten(this.activeTimers),this.activeTimers=t,r&&(this.programTimersStack=null),[4,Promise.all(a).then(function(e){var t=0;return e.forEach(function(e){return t+=e}),t})];case 1:return o=s.sent(),i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:o,wallMs:null},this.uploadWaitMs=0,this.downloadWaitMs=0,[2,i]}})})},e.prototype.memory=function(){return {unreliable:!1,numBytesInGPU:this.numBytesInGPU}},e.prototype.startTimer=function(){return ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?this.gpgpu.beginQuery():{startMs:performance.now(),endMs:null}},e.prototype.endTimer=function(e){return ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(this.gpgpu.endQuery(),e):(e.endMs=performance.now(),e)},e.prototype.getQueryTime=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return ENV.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?[2,this.gpgpu.pollQueryTime(e)]:[2,(t=e).endMs-t.startMs]})})},e.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e))if(this.pendingRead.has(e))this.pendingDisposal.add(e);else if(this.texData.has(e)){var t=this.texData.get(e),n=t.texture,r=t.texShape,a=t.usage;null!=n&&this.releaseTexture(e,n,r,a),this.texData.delete(e);}},e.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},e.prototype.getGPGPUContext=function(){return this.gpgpu},e.prototype.getCanvas=function(){return this.canvas},e.prototype.slice=function(e,t,n){var r=new SliceProgram(n),a=r.getCustomSetupFunc(t);return this.compileAndRun(r,[e],null,a)},e.prototype.stridedSlice=function(e,t,n,r,a,o){var i=getStridedSlicedInfo(e.shape,t,n,r,a,o),s=i[0],u=i[1];if(u.some(function(e){return 0===e}))return tensor([],u);var l=new StridedSliceProgram(s,r,u);return this.compileAndRun(l,[e])},e.prototype.reverse=function(e,t){var n=new ReverseProgram(e.shape,t);return this.compileAndRun(n,[e])},e.prototype.concat=function(e,t){var n=new ConcatProgram(e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.neg=function(e){var t=new UnaryOpProgram(e.shape,NEG);return this.compileAndRun(t,[e])},e.prototype.matMul=function(e,t,n,r){var a=new MatMulProgram(e.shape,t.shape,n,r);return this.compileAndRun(a,[e,t])},e.prototype.multiply=function(e,t){var n=new BinaryOpProgram(MUL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,upcastType(e.dtype,t.dtype));return this.compileAndRun(n,[e,t],r)},e.prototype.batchNormalization=function(e,t,n,r,a,o){var i=[e,t,n],s=null;null!=o&&(s=o.shape,i.push(o));var u=null;null!=a&&(u=a.shape,i.push(a));var l=new BatchNormProgram(e.shape,t.shape,n.shape,s,u,r);return this.compileAndRun(l,i)},e.prototype.localResponseNormalization4D=function(e,t,n,r,a){var o=new LRNProgram(e.shape,t,n,r,a);return this.compileAndRun(o,[e])},e.prototype.tile=function(e,t){var n=new TileProgram(e.shape,t);return this.compileAndRun(n,[e])},e.prototype.pad=function(e,t,n){var r=new PadProgram(e.shape,t,n);return this.compileAndRun(r,[e])},e.prototype.transpose=function(e,t){var n=new TransposeProgram(e.shape,t);return this.compileAndRun(n,[e])},e.prototype.gather=function(e,t,n){var r=new GatherProgram(e.shape,t.size,n);return this.compileAndRun(r,[e,t])},e.prototype.reduce=function(e,t,n){var r=e.shape[0],a=e.shape[1],o=computeOptimalWindowSize(a),i=new ReduceProgram({windowSize:o,inSize:a,batchSize:r},t),s=i.outputShape,u=s[0],l=s[1],c=this.makeOutputArray([u,l],n);return this.compileAndRun(i,[e],c),1===c.shape[1]?c:this.reduce(c,t,n)},e.prototype.argReduce=function(e,t,n){void 0===n&&(n=null);var r=e.shape[0],a=e.shape[1];null!=n&&(r=n.shape[0],a=n.shape[1]);var o=computeOptimalWindowSize(a),i=new ArgMinMaxProgram({windowSize:o,inSize:a,batchSize:r},t,null==n),s=i.outputShape,u=s[0],l=s[1],c=this.makeOutputArray([u,l],"int32"),d=[e];return null!=n&&d.push(n),this.compileAndRun(i,d,c),1===c.shape[1]?c:this.argReduce(e,t,c)},e.prototype.sum=function(e,t){assertAxesAreInnerMostDims("sum",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=sizeFromShape(n[1]),o=e.as2D(-1,a),i=sumOutType(e.dtype);return this.reduce(o,"sum",i).reshape(r)},e.prototype.unsortedSegmentSum=function(e,t,n){var r=0,a=getAxesPermutation([r],e.rank),o=e;null!=a&&(o=e.transpose(a),r=getInnerMostAxes(1,e.rank)[0]);var i=computeOutShape$1(o.shape,r,n),s=sizeFromShape([o.shape[r]]),u=o.as2D(-1,s),l=sumOutType(e.dtype),c=this.segOpCompute(u,"unsortedSegmentSum",t,l,n).reshape(i);return null!=a&&(c=c.transpose(getUndoAxesPermutation(a))),c},e.prototype.segOpCompute=function(e,t,n,r,a){var o=e.shape[0],i=e.shape[1],s=segOpComputeOptimalWindowSize(i,a),u=new SegmentOpProgram({windowSize:s,inSize:i,batchSize:o,numSegments:a},t),l=u.outputShape,c=l[0],d=l[1],p=this.makeOutputArray([c,d],r);return this.compileAndRun(u,[e,n],p),p.shape[1]===a?p:(n=range(0,a).tile([i/s]),this.segOpCompute(p,t,n,r,a))},e.prototype.argMin=function(e,t){var n=[t];assertAxesAreInnerMostDims("argMin",n,e.rank);var r=computeOutAndReduceShapes(e.shape,n),a=r[0],o=sizeFromShape(r[1]),i=e.as2D(-1,o);return this.argReduce(i,"min").reshape(a)},e.prototype.argMax=function(e,t){var n=[t];assertAxesAreInnerMostDims("argMax",n,e.rank);var r=computeOutAndReduceShapes(e.shape,n),a=r[0],o=sizeFromShape(r[1]),i=e.as2D(-1,o);return this.argReduce(i,"max").reshape(a)},e.prototype.cumsum=function(e,t,n,r){if(t!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+t);var a=new CumSumProgram(e.shape,n,r);return this.compileAndRun(a,[e])},e.prototype.equal=function(e,t){var n=new BinaryOpProgram(EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.notEqual=function(e,t){var n=new BinaryOpProgram(NOT_EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.less=function(e,t){var n=new BinaryOpProgram(LESS,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.lessEqual=function(e,t){var n=new BinaryOpProgram(LESS_EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.greater=function(e,t){var n=new BinaryOpProgram(GREATER,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.greaterEqual=function(e,t){var n=new BinaryOpProgram(GREATER_EQUAL,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.logicalNot=function(e){var t=new UnaryOpProgram(e.shape,LOGICAL_NOT);return this.compileAndRun(t,[e])},e.prototype.logicalAnd=function(e,t){var n=new BinaryOpProgram(LOGICAL_AND,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.logicalOr=function(e,t){var n=new BinaryOpProgram(LOGICAL_OR,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"bool");return this.compileAndRun(n,[e,t],r)},e.prototype.where=function(e,t,n,r){var a=new WhereProgram(e.rank,t.shape,t.rank),o=this.makeOutputArray(a.outputShape,r);return this.compileAndRun(a,[e,t,n],o)},e.prototype.topKValues=function(e,t){throw new Error("topKValues GPU not yet implemented!")},e.prototype.topKIndices=function(e,t){throw new Error("topKIndices GPU not yet implemented!")},e.prototype.min=function(e,t){assertAxesAreInnerMostDims("min",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=sizeFromShape(n[1]),o=e.as2D(-1,a);return this.reduce(o,"min",o.dtype).reshape(r)},e.prototype.minimum=function(e,t){var n=new BinaryOpProgram(MIN,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.mod=function(e,t){var n=new BinaryOpProgram(MOD,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.max=function(e,t){assertAxesAreInnerMostDims("max",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=sizeFromShape(n[1]),o=e.as2D(-1,a);return this.reduce(o,"max",o.dtype).reshape(r)},e.prototype.maximum=function(e,t){var n=new BinaryOpProgram(MAX,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.all=function(e,t){assertAxesAreInnerMostDims("all",t,e.rank);var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=sizeFromShape(n[1]),o=e.as2D(-1,a);return this.reduce(o,"all",o.dtype).reshape(r)},e.prototype.squaredDifference=function(e,t){var n=new BinaryOpProgram(SQUARED_DIFFERENCE,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.realDivide=function(e,t){var n=new BinaryOpProgram(DIV,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[e,t],r)},e.prototype.floorDiv=function(e,t){var n=new BinaryOpProgram(INT_DIV,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,"int32");return this.compileAndRun(n,[e,t],r)},e.prototype.add=function(e,t){var n=new BinaryOpProgram(ADD,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,upcastType(e.dtype,t.dtype));return this.compileAndRun(n,[e,t],r)},e.prototype.subtract=function(e,t){var n=new BinaryOpProgram(SUB,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,upcastType(e.dtype,t.dtype));return this.compileAndRun(n,[e,t],r)},e.prototype.pow=function(e,t){var n=new BinaryOpProgram(POW,e.shape,t.shape),r=this.makeOutputArray(n.outputShape,upcastType(e.dtype,t.dtype));return this.compileAndRun(n,[e,t],r)},e.prototype.ceil=function(e){var t=new UnaryOpProgram(e.shape,CEIL);return this.compileAndRun(t,[e])},e.prototype.floor=function(e){var t=new UnaryOpProgram(e.shape,FLOOR);return this.compileAndRun(t,[e])},e.prototype.sign=function(e){var t=new UnaryOpProgram(e.shape,SIGN);return this.compileAndRun(t,[e])},e.prototype.round=function(e){var t=new UnaryOpProgram(e.shape,ROUND);return this.compileAndRun(t,[e])},e.prototype.exp=function(e){var t=new UnaryOpProgram(e.shape,EXP);return this.compileAndRun(t,[e])},e.prototype.expm1=function(e){var t=new UnaryOpProgram(e.shape,EXPM1);return this.compileAndRun(t,[e])},e.prototype.log=function(e){var t=new UnaryOpProgram(e.shape,LOG);return this.compileAndRun(t,[e])},e.prototype.log1p=function(e){var t=new UnaryOpProgram(e.shape,LOG1P);return this.compileAndRun(t,[e])},e.prototype.sqrt=function(e){var t=new UnaryOpProgram(e.shape,SQRT);return this.compileAndRun(t,[e])},e.prototype.rsqrt=function(e){var t=new UnaryOpProgram(e.shape,RSQRT);return this.compileAndRun(t,[e])},e.prototype.square=function(e){var t=new UnaryOpProgram(e.shape,SQUARE);return this.compileAndRun(t,[e])},e.prototype.reciprocal=function(e){var t=new UnaryOpProgram(e.shape,RECIPROCAL);return this.compileAndRun(t,[e])},e.prototype.relu=function(e){var t=new UnaryOpProgram(e.shape,RELU);return this.compileAndRun(t,[e])},e.prototype.elu=function(e){var t=new UnaryOpProgram(e.shape,ELU);return this.compileAndRun(t,[e])},e.prototype.eluDer=function(e,t){var n=new BinaryOpProgram(ELU_DER,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.selu=function(e){var t=new UnaryOpProgram(e.shape,SELU);return this.compileAndRun(t,[e])},e.prototype.int=function(e){var t=new UnaryOpProgram(e.shape,TO_INT),n=this.makeOutputArray(t.outputShape,"int32");return this.compileAndRun(t,[e],n)},e.prototype.clip=function(e,t,n){var r=new ClipProgram(e.shape,t,n);return this.compileAndRun(r,[e])},e.prototype.abs=function(e){var t=new UnaryOpProgram(e.shape,ABS);return this.compileAndRun(t,[e])},e.prototype.sigmoid=function(e){var t=new UnaryOpProgram(e.shape,SIGMOID);return this.compileAndRun(t,[e])},e.prototype.softplus=function(e){var t=new UnaryOpProgram(e.shape,SOFTPLUS);return this.compileAndRun(t,[e])},e.prototype.sin=function(e){var t=new UnaryOpProgram(e.shape,SIN);return this.compileAndRun(t,[e])},e.prototype.cos=function(e){var t=new UnaryOpProgram(e.shape,COS);return this.compileAndRun(t,[e])},e.prototype.tan=function(e){var t=new UnaryOpProgram(e.shape,TAN);return this.compileAndRun(t,[e])},e.prototype.asin=function(e){var t=new UnaryOpProgram(e.shape,ASIN);return this.compileAndRun(t,[e])},e.prototype.acos=function(e){var t=new UnaryOpProgram(e.shape,ACOS);return this.compileAndRun(t,[e])},e.prototype.atan=function(e){var t=new UnaryOpProgram(e.shape,ATAN);return this.compileAndRun(t,[e])},e.prototype.atan2=function(e,t){var n=new BinaryOpProgram(ATAN2,e.shape,t.shape);return this.compileAndRun(n,[e,t])},e.prototype.sinh=function(e){var t=new UnaryOpProgram(e.shape,SINH);return this.compileAndRun(t,[e])},e.prototype.cosh=function(e){var t=new UnaryOpProgram(e.shape,COSH);return this.compileAndRun(t,[e])},e.prototype.tanh=function(e){var t=new UnaryOpProgram(e.shape,TANH);return this.compileAndRun(t,[e])},e.prototype.asinh=function(e){var t=new UnaryOpProgram(e.shape,ASINH);return this.compileAndRun(t,[e])},e.prototype.acosh=function(e){var t=new UnaryOpProgram(e.shape,ACOSH);return this.compileAndRun(t,[e])},e.prototype.atanh=function(e){var t=new UnaryOpProgram(e.shape,ATANH);return this.compileAndRun(t,[e])},e.prototype.erf=function(e){var t=new UnaryOpProgram(e.shape,ERF);return this.compileAndRun(t,[e])},e.prototype.step=function(e,t){var n=new UnaryOpProgram(e.shape,STEP(t));return this.compileAndRun(n,[e])},e.prototype.conv2d=function(e,t,n){var r=new Conv2DProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.conv2dDerInput=function(e,t,n){var r=new Conv2DDerInputProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.conv2dDerFilter=function(e,t,n){var r=new Conv2DDerFilterProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.depthwiseConv2D=function(e,t,n){var r=new DepthwiseConv2DProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.depthwiseConv2DDerInput=function(e,t,n){var r=new DepthwiseConv2DDerInputProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.depthwiseConv2DDerFilter=function(e,t,n){var r=new DepthwiseConv2DDerFilterProgram(n);return this.compileAndRun(r,[e,t])},e.prototype.maxPool=function(e,t){var n=new Pool2DProgram(t,"max",!1),r=this.makeOutputArray(n.outputShape,e.dtype);return this.compileAndRun(n,[e],r)},e.prototype.avgPool=function(e,t){var n=new Pool2DProgram(t,"avg",!1),r=this.makeOutputArray(n.outputShape,"float32");return this.compileAndRun(n,[e],r)},e.prototype.maxPoolBackprop=function(e,t,n,r){var a=new Pool2DProgram(r,"max",!0),o=this.compileAndRun(a,[t]),i=new MaxPool2DBackpropProgram(r),s=this.makeOutputArray(i.outputShape,t.dtype),u=this.compileAndRun(i,[e,o],s);return o.dispose(),u},e.prototype.avgPoolBackprop=function(e,t,n){var r=new AvgPool2DBackpropProgram(n),a=this.makeOutputArray(r.outputShape,t.dtype);return this.compileAndRun(r,[e],a)},e.prototype.cast=function(e,t){return castTensor(e,t,this)},e.prototype.reshape=function(e,t){return reshapeTensor(e,t)},e.prototype.resizeBilinear=function(e,t,n,r){var a=new ResizeBilinearProgram(e.shape,t,n,r);return this.compileAndRun(a,[e])},e.prototype.resizeBilinearBackprop=function(e,t,n){var r=new ResizeBilinearBackpropProgram(e,t,n);return this.compileAndRun(r,[e])},e.prototype.resizeNearestNeighbor=function(e,t,n,r){var a=new ResizeNearestNeighborProgram(e.shape,t,n,r);return this.compileAndRun(a,[e])},e.prototype.multinomial=function(e,t,n,r){var a=t?e:softmax(e),o=a.shape[0],i=a.shape[1],s=new MultinomialProgram(o,i,n),u=this.makeOutputArray(s.outputShape,"int32"),l=s.getCustomSetupFunc(r);return this.compileAndRun(s,[a],u,l)},e.prototype.oneHot=function(e,t,n,r){var a=new OneHotProgram(e.size,t,n,r);return this.compileAndRun(a,[e])},e.prototype.makeOutputArray=function(e,t){return Tensor.make(e,{},t)},e.prototype.compileAndRun=function(e,t,n,r){var a=this;null==n&&(n=this.makeOutputArray(e.outputShape,t[0].dtype));var o=t.map(function(e){var t=a.texData.get(e.dataId);return null==t.texture&&e.size<=SIZE_UPLOAD_UNIFORM?{tensor:e,texData:null,isUniform:!0}:(a.uploadToGPU(e.dataId),{tensor:e,texData:t,isUniform:!1})});this.uploadToGPU(n.dataId);var i,s={tensor:n,texData:this.texData.get(n.dataId),isUniform:!1},u=makeShaderKey(e,o,s),l=this.getAndSaveBinary(u,function(){return compileProgram(a.gpgpu,e,o,s)}),c=null!=this.activeTimers;if(c&&(i=this.startTimer()),runProgram(l,o,s,r),this.numBytesInGPU>this.NUM_BYTES_BEFORE_PAGING)for(var d=this.numBytesInGPU-this.NUM_BYTES_BEFORE_PAGING;d>0;){var p=this.lruDataGPU.shift(),h=this.texData.get(p),f=h.shape,g=h.dtype;d-=this.computeBytes(f,g),this.read(p);}return c&&(i=this.endTimer(i),this.activeTimers.push(this.getQueryTime(i))),n},e.prototype.getAndSaveBinary=function(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]},e.prototype.getTextureManager=function(){return this.textureManager},e.prototype.dispose=function(){if(!this.disposed){for(var e in this.binaryCache)this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram);this.textureManager.dispose(),this.canvas.remove(),null!=this.fromPixelsCanvas&&this.fromPixelsCanvas.remove(),this.gpgpuCreatedLocally&&this.gpgpu.dispose(),this.disposed=!0;}},e.prototype.throwIfNoData=function(e){if(!this.texData.has(e))throw new Error("WebGL backend: No data found for this tensor. Did you change your backend in the middle of the program? New backends can't use Tensors created with previous backends")},e.prototype.uploadToGPU=function(e){this.throwIfNoData(e);var t=this.texData.get(e),n=t.shape,r=t.values,a=t.texture,o=t.dtype,i=t.usage;if(null!=a)return this.lruDataGPU.splice(this.lruDataGPU.indexOf(e),1),void this.lruDataGPU.push(e);var s,u=null!=this.activeTimers;u&&(s=performance.now());var l=getTextureShapeFromLogicalShape(this.gpgpu.gl,n);t.texShape=l;var c=this.acquireTexture(e,l,i);t.texture=c,null!=r&&(this.gpgpu.uploadMatrixToTexture(c,l[0],l[1],typedArrayToFloat32(r,o)),t.values=null,u&&(this.uploadWaitMs+=performance.now()-s));},e.prototype.cacheOnCPU=function(e,t){var n=this.delayedStorage,r=this.texData.get(e),a=r.texture,o=r.texShape,i=r.dtype,s=r.usage;n&&null!=a&&(this.releaseTexture(e,a,o,s),r.texture=null,r.texShape=null),null!=t&&(r.values=float32ToTypedArray(t,i));},e.prototype.releaseTexture=function(e,t,n,r){var a=this.texData.get(e),o=a.shape,i=a.dtype,s=this.lruDataGPU.indexOf(e);s>=0&&this.lruDataGPU.splice(s,1),this.numBytesInGPU-=this.computeBytes(o,i),this.textureManager.releaseTexture(t,n,r);},e.prototype.acquireTexture=function(e,t,n){var r=this.texData.get(e),a=r.shape,o=r.dtype;return this.lruDataGPU.push(e),this.numBytesInGPU+=this.computeBytes(a,o),this.textureManager.acquireTexture(t,n)},e.prototype.computeBytes=function(e,t){return sizeFromShape(e)*bytesPerElement(t)},e}();function float32ToTypedArray(e,t){if("float32"===t)return e;if("int32"===t||"bool"===t){for(var n="int32"===t?new Int32Array(e.length):new Uint8Array(e.length),r=0;r<n.length;++r)n[r]=Math.round(e[r]);return n}throw new Error("Unknown dtype "+t)}function typedArrayToFloat32(e,t){return e instanceof Float32Array?e:new Float32Array(e)}ENV.get("IS_BROWSER")&&ENV.registerBackend("webgl",function(){return new MathBackendWebGL},2);var MathBackendCPU=function(){function e(){this.data=new WeakMap,this.firstUse=!0,ENV.get("IS_BROWSER")&&(this.canvas=document.createElement("canvas"));}return e.prototype.register=function(e,t,n){if(this.firstUse&&(this.firstUse=!1,ENV.get("IS_NODE")&&console.warn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================\n")),this.data.has(e))throw new Error("Data buffer is already registered");this.data.set(e,null);},e.prototype.write=function(e,t){if(null==t)throw new Error("MathBackendCPU.write(): values can not be null");this.throwIfNoData(e),this.data.set(e,t);},e.prototype.fromPixels=function(e,t){if(null==e)throw new Error("MathBackendCPU.writePixels(): pixels can not be null");var n,r;if(e instanceof ImageData)n=e.data;else if(e instanceof HTMLCanvasElement)n=e.getContext("2d").getImageData(0,0,e.width,e.height).data;else{if(!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement))throw new Error("pixels is of unknown type: "+e.constructor.name);if(null==this.canvas)throw new Error("Can't read pixels from HTMLImageElement outside the browser.");this.canvas.width=e.width,this.canvas.height=e.height,this.canvas.getContext("2d").drawImage(e,0,0,e.width,e.height),n=this.canvas.getContext("2d").getImageData(0,0,e.width,e.height).data;}if(4===t)r=new Int32Array(n);else{var a=e.width*e.height;r=new Int32Array(a*t);for(var o=0;o<a;o++)for(var i=0;i<t;++i)r[o*t+i]=n[4*o+i];}var s=[e.height,e.width,t];return tensor3d(r,s,"int32")},e.prototype.read=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return [2,this.readSync(e)]})})},e.prototype.readSync=function(e){return this.throwIfNoData(e),this.data.get(e)},e.prototype.disposeData=function(e){this.data.has(e)&&this.data.delete(e);},e.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t=performance.now(),e(),[2,{kernelMs:performance.now()-t}]})})},e.prototype.memory=function(){return {unreliable:!0}},e.prototype.throwIfNoData=function(e){if(!this.data.has(e))throw new Error("CPU backend: No data found for this tensor. Did you change your backend in the middle of the program? New backends can't use Tensors created with previous backends")},e.prototype.slice=function(e,t,n){for(var r=buffer(n,e.dtype),a=0;a<r.size;++a){var o=r.indexToLoc(a),i=o.map(function(e,n){return e+t[n]});r.set.apply(r,[e.get.apply(e,i)].concat(o));}return r.toTensor()},e.prototype.stridedSlice=function(e,t,n,r,a,o){var i=getStridedSlicedInfo(e.shape,t,n,r,a,o),s=i[0],u=i[1];if(u.some(function(e){return 0===e}))return tensor([],u);for(var l=buffer(u,e.dtype),c=0;c<l.size;c++){for(var d=l.indexToLoc(c),p=new Array(d.length),h=0;h<p.length;h++)p[h]=d[h]*r[h]+s[h];l.set.apply(l,[e.get.apply(e,p)].concat(d));}return l.toTensor()},e.prototype.reverse=function(e,t){for(var n=buffer(e.shape,e.dtype),r=e.buffer(),a=function(a){var o=n.indexToLoc(a),i=o.slice();t.forEach(function(t){return i[t]=e.shape[t]-1-i[t]}),n.set.apply(n,[r.get.apply(r,i)].concat(o));},o=0;o<n.size;o++)a(o);return n.toTensor()},e.prototype.concat=function(e,t){var n=computeOutShape(e.shape,t.shape,1),r=buffer(n,e.dtype);if(1===e.shape[0]&&1===t.shape[0]){var a=e.dataSync(),o=t.dataSync(),i=r.values;return i.set(a,0),i.set(o,e.size),r.toTensor()}for(var s=0;s<n[0];++s){for(var u=0;u<e.shape[1];++u)r.set(e.get(s,u),s,u);for(u=0;u<t.shape[1];++u)r.set(t.get(s,u),s,u+e.shape[1]);}return r.toTensor()},e.prototype.neg=function(e){return this.multiply(scalar(-1),e)},e.prototype.add=function(e,t){return this.broadcastedBinaryOp(e,t,upcastType(e.dtype,t.dtype),function(e,t){return e+t})},e.prototype.subtract=function(e,t){return this.broadcastedBinaryOp(e,t,upcastType(e.dtype,t.dtype),function(e,t){return e-t})},e.prototype.pow=function(e,t){return this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.pow(e,t)})},e.prototype.matMul=function(e,t,n,r){for(var a=n?e.shape[0]:e.shape[1],o=n?e.shape[1]:e.shape[0],i=r?t.shape[0]:t.shape[1],s=e.dataSync(),u=t.dataSync(),l=n?[1,e.strides[0]]:[e.strides[0],1],c=l[0],d=l[1],p=r?[t.strides[0],1]:[1,t.strides[0]],h=p[0],f=p[1],g=o*c,m=i*h,v=new Float32Array(o*i),y=0,x=0;x<g;x+=c)for(var b=0;b<m;b+=h){for(var E=x,S=b,A=0,T=0;T<a;++T)A+=s[E]*u[S],E+=d,S+=f;v[y++]=A;}return tensor2d(v,[o,i])},e.prototype.multiply=function(e,t){return this.broadcastedBinaryOp(e,t,upcastType(e.dtype,t.dtype),function(e,t){return e*t})},e.prototype.realDivide=function(e,t){return this.broadcastedBinaryOp(e,t,"float32",function(e,t){return e/t})},e.prototype.floorDiv=function(e,t){return this.broadcastedBinaryOp(e,t,"int32",function(e,t){return Math.floor(e/t)})},e.prototype.sum=function(e,t){assertAxesAreInnerMostDims("sum",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=n[1],o=upcastType(e.dtype,"int32"),i=zeros(r,o),s=sizeFromShape(a),u=i.dataSync(),l=e.dataSync(),c=0;c<u.length;++c){for(var d=c*s,p=0,h=0;h<s;++h)p+=l[d+h];u[c]=p;}return i},e.prototype.unsortedSegmentSum=function(e,t,n){for(var r=[],a=e.rank-t.rank,o=0;o<a;++o)t=t.expandDims(o+1);for(o=0;o<n;++o){var i=scalar(o,"int32"),s=equal(i,t).asType("float32").mul(e).sum(0);r.push(s);}return stack(r)},e.prototype.argMin=function(e,t){var n=[t];assertAxesAreInnerMostDims("argMin",n,e.rank);for(var r=computeOutAndReduceShapes(e.shape,n),a=r[0],o=r[1],i=zeros(a,"int32"),s=sizeFromShape(o),u=i.dataSync(),l=e.dataSync(),c=0;c<u.length;++c){for(var d=c*s,p=l[d],h=0,f=0;f<s;++f){var g=l[d+f];g<p&&(p=g,h=f);}u[c]=h;}return i},e.prototype.argMax=function(e,t){var n=[t];assertAxesAreInnerMostDims("argMax",n,e.rank);for(var r=computeOutAndReduceShapes(e.shape,n),a=r[0],o=r[1],i=zeros(a,"int32"),s=sizeFromShape(o),u=i.dataSync(),l=e.dataSync(),c=0;c<u.length;++c){for(var d=c*s,p=l[d],h=0,f=0;f<s;++f){var g=l[d+f];g>p&&(p=g,h=f);}u[c]=h;}return i},e.prototype.cumsum=function(e,t,n,r){if(t!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+t);for(var a=upcastType(e.dtype,"int32"),o=zeros(e.shape,a),i=o.dataSync(),s=e.dataSync(),u=e.shape[e.rank-1],l=r?function(e,t){return e+u-t-1}:function(e,t){return e+t},c=0;c<s.length;c+=u)for(var d=0;d<u;d++){var p=l(c,d);if(0===d)i[p]=n?0:s[p];else{var h=l(c,d-1);i[p]=n?s[h]+i[h]:s[p]+i[h];}}return o},e.prototype.equal=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e===t?1:0})},e.prototype.notEqual=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e!==t?1:0})},e.prototype.less=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e<t?1:0})},e.prototype.lessEqual=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e<=t?1:0})},e.prototype.greater=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e>t?1:0})},e.prototype.greaterEqual=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e>=t?1:0})},e.prototype.logicalNot=function(e){for(var t=e.dataSync(),n=new Int32Array(t.length),r=0;r<t.length;++r)n[r]=t[r]?0:1;return Tensor.make(e.shape,{values:n},"bool")},e.prototype.logicalAnd=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e&&t})},e.prototype.logicalOr=function(e,t){return this.broadcastedBinaryOp(e,t,"bool",function(e,t){return e||t})},e.prototype.where=function(e,t,n,r){for(var a=e.dataSync(),o=t.dataSync(),i=n.dataSync(),s=zeros(t.shape,r),u=s.dataSync(),l=0,c=0===e.rank||e.rank>1||1===t.rank?1:t.shape[1],d=0;d<a.length;d++)for(var p=0;p<c;p++)1===a[d]?u[l++]=o[d]:u[l++]=i[d];return s},e.prototype.topKValues=function(e,t){return this.topK(e,t).values},e.prototype.topKIndices=function(e,t){return this.topK(e,t).indices},e.prototype.topK=function(e,t){for(var n=e.dataSync(),r=[],a=0;a<n.length;a++)r.push({value:n[a],index:a});r.sort(function(e,t){return t.value-e.value});var o=getTypedArrayFromDType(e.dtype,t),i=new Int32Array(t);for(a=0;a<t;a++)o[a]=r[a].value,i[a]=r[a].index;return {values:tensor1d(o,e.dtype),indices:tensor1d(i,"int32")}},e.prototype.min=function(e,t){assertAxesAreInnerMostDims("min",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=n[1],o=zeros(r,e.dtype),i=sizeFromShape(a),s=o.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,d=u[c],p=0;p<i;++p){var h=u[c+p];h<d&&(d=h);}s[l]=d;}return o},e.prototype.minimum=function(e,t){return this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.min(e,t)})},e.prototype.mod=function(e,t){return this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){var n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})},e.prototype.max=function(e,t){assertAxesAreInnerMostDims("max",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=n[1],o=zeros(r,e.dtype),i=sizeFromShape(a),s=o.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,d=u[c],p=0;p<i;++p){var h=u[c+p];h>d&&(d=h);}s[l]=d;}return o},e.prototype.maximum=function(e,t){return this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.max(e,t)})},e.prototype.all=function(e,t){assertAxesAreInnerMostDims("all",t,e.rank);for(var n=computeOutAndReduceShapes(e.shape,t),r=n[0],a=n[1],o=zeros(r,e.dtype),i=sizeFromShape(a),s=o.dataSync(),u=e.dataSync(),l=0;l<s.length;++l){for(var c=l*i,d=u[c],p=0;p<i;++p){var h=u[c+p];d=d&&h;}s[l]=d;}return o},e.prototype.squaredDifference=function(e,t){return this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){var n=e-t;return n*n})},e.prototype.ceil=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.ceil(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.floor=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.floor(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.sign=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)t[r]<0?n[r]=-1:t[r]>0?n[r]=1:n[r]=0;return Tensor.make(e.shape,{values:n})},e.prototype.round=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var a=Math.floor(t[r]);t[r]-a<.5?n[r]=Math.floor(t[r]):t[r]-a>.5?n[r]=Math.ceil(t[r]):n[r]=a%2==0?a:a+1;}return Tensor.make(e.shape,{values:n})},e.prototype.exp=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.exp(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.expm1=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=Math.expm1(t[r]);return Tensor.make(e.shape,{values:n})},e.prototype.log=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var a=t[r];n[r]=Math.log(a);}return Tensor.make(e.shape,{values:n})},e.prototype.log1p=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var a=t[r];n[r]=Math.log1p(a);}return Tensor.make(e.shape,{values:n})},e.prototype.sqrt=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var a=t[r];n[r]=Math.sqrt(a);}return Tensor.make(e.shape,{values:n})},e.prototype.rsqrt=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var a=t[r];n[r]=1/Math.sqrt(a);}return Tensor.make(e.shape,{values:n})},e.prototype.square=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r){var a=t[r];n[r]=a*a;}return Tensor.make(e.shape,{values:n})},e.prototype.reciprocal=function(e){for(var t=e.dataSync(),n=new Float32Array(t.length),r=0;r<t.length;++r)n[r]=1/t[r];return Tensor.make(e.shape,{values:n})},e.prototype.relu=function(e){for(var t=zeros(e.shape,e.dtype),n=t.dataSync(),r=e.dataSync(),a=0;a<r.length;++a)n[a]=Math.max(0,r[a]);return t},e.prototype.elu=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r){var a=n[r];t[r]=a>=0?a:Math.exp(a)-1;}return Tensor.make(e.shape,{values:t})},e.prototype.eluDer=function(e,t){for(var n=new Float32Array(t.size),r=t.dataSync(),a=e.dataSync(),o=0;o<r.length;++o){var i=r[o];n[o]=i>=1?a[o]:a[o]*(i+1);}return Tensor.make(t.shape,{values:n})},e.prototype.selu=function(e){for(var t=SELU_SCALEALPHA,n=SELU_SCALE,r=new Float32Array(e.size),a=e.dataSync(),o=0;o<a.length;++o){var i=a[o];r[o]=i>=0?n*i:t*(Math.exp(i)-1);}return Tensor.make(e.shape,{values:r})},e.prototype.clip=function(e,t,n){for(var r=new Float32Array(e.size),a=e.dataSync(),o=0;o<a.length;++o)r[o]=Math.min(n,Math.max(t,a[o]));return Tensor.make(e.shape,{values:r})},e.prototype.abs=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.abs(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.int=function(e){for(var t=new Int32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=n[r];return Tensor.make(e.shape,{values:t},"int32")},e.prototype.sigmoid=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=1/(1+Math.exp(-n[r]));return Tensor.make(e.shape,{values:t})},e.prototype.softplus=function(e){for(var t=Math.log(1.1920928955078125e-7)+2,n=new Float32Array(e.size),r=e.dataSync(),a=0;a<r.length;++a){var o=r[a]>-t,i=r[a]<t,s=Math.exp(r[a]),u=void 0;u=i?s:o?r[a]:Math.log(1+s),n[a]=u;}return Tensor.make(e.shape,{values:n})},e.prototype.sin=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.sin(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.cos=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.cos(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.tan=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.tan(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.asin=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.asin(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.acos=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.acos(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.atan=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.atan(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.atan2=function(e,t){return this.broadcastedBinaryOp(e,t,e.dtype,function(e,t){return Math.atan2(e,t)})},e.prototype.sinh=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.sinh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.cosh=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.cosh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.tanh=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=tanh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.asinh=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.asinh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.acosh=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.acosh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.atanh=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=0;r<n.length;++r)t[r]=Math.atanh(n[r]);return Tensor.make(e.shape,{values:t})},e.prototype.erf=function(e){for(var t=new Float32Array(e.size),n=e.dataSync(),r=ERF_P,a=ERF_A1,o=ERF_A2,i=ERF_A3,s=ERF_A4,u=ERF_A5,l=0;l<n.length;++l){var c=n[l],d=1/(1+r*c);t[l]=1-((((u*d+s)*d+i)*d+o)*d+a)*d*Math.exp(-c*c);}return Tensor.make(e.shape,{values:t})},e.prototype.step=function(e,t){void 0===t&&(t=0);for(var n=new Float32Array(e.size),r=e.dataSync(),a=0;a<r.length;++a){var o=r[a];isNaN(o)?n[a]=NaN:n[a]=o>0?1:t;}return Tensor.make(e.shape,{values:n})},e.prototype.conv2d=function(e,t,n){for(var r=n.filterHeight,a=n.filterWidth,o=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,l=buffer(n.outShape,e.dtype),c=0;c<n.batchSize;++c)for(var d=0;d<n.outChannels;++d)for(var p=0;p<n.outHeight;++p)for(var h=p*n.strideHeight-s,f=0;f<n.outWidth;++f){for(var g=f*n.strideWidth-u,m=0,v=0;v<r;v++){var y=h+v*o;if(!(y<0||y>=n.inHeight))for(var x=0;x<a;x++){var b=g+x*i;if(!(b<0||b>=n.inWidth))for(var E=0;E<n.inChannels;++E){m+=e.get(c,y,b,E)*t.get(v,x,E,d);}}}l.set(m,c,p,f,d);}return l.toTensor()},e.prototype.conv2dDerInput=function(e,t,n){for(var r=buffer(n.inShape,"float32"),a=r.values,o=r.strides,i=o[0],s=o[1],u=o[2],l=e.dataSync(),c=e.strides,d=c[0],p=c[1],h=c[2],f=t.dataSync(),g=t.strides,m=g[0],v=g[1],y=g[2],x=n.batchSize,b=n.filterHeight,E=n.filterWidth,S=n.inChannels,A=n.inHeight,T=n.inWidth,w=n.outChannels,_=n.outHeight,R=n.outWidth,C=n.strideHeight,O=n.strideWidth,I=b-1-n.padInfo.top,k=E-1-n.padInfo.left,M=0;M<x;++M)for(var N=0;N<S;++N)for(var D=0;D<A;++D)for(var P=D-I,F=Math.max(0,Math.ceil(P/C)),L=Math.min(_,(b+P)/C),B=0;B<T;++B){for(var U=B-k,V=Math.max(0,Math.ceil(U/O)),z=Math.min(R,(E+U)/O),G=0,W=F;W<L;++W)for(var q=W*C-P,H=V;H<z;++H)for(var X=d*M+p*W+h*H,j=m*(b-1-q)+v*(E-1-(H*O-U))+y*N,K=0;K<w;++K){G+=l[X+K]*f[j+K];}a[i*M+s*D+u*B+N]=G;}return r.toTensor()},e.prototype.conv2dDerFilter=function(e,t,n){for(var r=n.strideHeight,a=n.strideWidth,o=n.filterHeight,i=n.filterWidth,s=buffer(n.filterShape,"float32"),u=n.padInfo.left,l=n.padInfo.top,c=0;c<o;++c)for(var d=Math.max(0,Math.ceil((l-c)/r)),p=Math.min(n.outHeight,(n.inHeight+l-c)/r),h=0;h<i;++h)for(var f=Math.max(0,Math.ceil((u-h)/a)),g=Math.min(n.outWidth,(n.inWidth+u-h)/a),m=0;m<n.inChannels;++m)for(var v=0;v<n.outChannels;++v){for(var y=0,x=0;x<n.batchSize;++x)for(var b=d;b<p;++b)for(var E=c+b*r-l,S=f;S<g;++S){var A=h+S*a-u;y+=e.get(x,E,A,m)*t.get(x,b,S,v);}s.set(y,c,h,m,v);}return s.toTensor()},e.prototype.depthwiseConv2D=function(e,t,n){for(var r=n.filterHeight,a=n.filterWidth,o=n.dilationHeight,i=n.dilationWidth,s=n.padInfo.left,u=n.padInfo.top,l=n.outChannels/n.inChannels,c=buffer(n.outShape,e.dtype),d=0;d<n.batchSize;++d)for(var p=0;p<n.inChannels;++p)for(var h=0;h<n.outHeight;++h)for(var f=h*n.strideHeight-s,g=0;g<n.outWidth;++g)for(var m=g*n.strideWidth-u,v=0;v<l;++v){for(var y=0,x=0;x<r;++x){var b=f+x*o;if(!(b<0||b>=n.inHeight))for(var E=0;E<a;++E){var S=m+E*i;if(!(S<0||S>=n.inWidth))y+=e.get(d,b,S,p)*t.get(x,E,p,v);}}c.set(y,d,h,g,p*l+v);}return c.toTensor()},e.prototype.depthwiseConv2DDerInput=function(e,t,n){for(var r=buffer(n.inShape,"float32"),a=r.values,o=r.strides,i=o[0],s=o[1],u=o[2],l=e.dataSync(),c=e.strides,d=c[0],p=c[1],h=c[2],f=t.dataSync(),g=t.strides,m=g[0],v=g[1],y=g[2],x=n.batchSize,b=n.filterHeight,E=n.filterWidth,S=n.inChannels,A=n.inHeight,T=n.inWidth,w=n.outChannels,_=n.outHeight,R=n.outWidth,C=n.strideHeight,O=n.strideWidth,I=b-1-n.padInfo.top,k=E-1-n.padInfo.left,M=w/S,N=0;N<x;++N)for(var D=0;D<S;++D)for(var P=0;P<A;++P)for(var F=P-I,L=Math.max(0,Math.ceil(F/C)),B=Math.min(_,(b+F)/C),U=0;U<T;++U){for(var V=U-k,z=Math.max(0,Math.ceil(V/O)),G=Math.min(R,(E+V)/O),W=0,q=L;q<B;++q)for(var H=q*C-F,X=z;X<G;++X)for(var j=d*N+p*q+h*X,K=m*(b-1-H)+v*(E-1-(X*O-V))+y*D,Q=0;Q<M;++Q){W+=l[j+(D*M+Q)]*f[K+Q];}a[i*N+s*P+u*U+D]=W;}return r.toTensor()},e.prototype.depthwiseConv2DDerFilter=function(e,t,n){for(var r=n.strideHeight,a=n.strideWidth,o=n.filterHeight,i=n.filterWidth,s=buffer(n.filterShape,"float32"),u=n.padInfo.left,l=n.padInfo.top,c=n.outChannels/n.inChannels,d=0;d<o;++d)for(var p=Math.max(0,Math.ceil((l-d)/r)),h=Math.min(n.outHeight,(n.inHeight+l-d)/r),f=0;f<i;++f)for(var g=Math.max(0,Math.ceil((u-f)/a)),m=Math.min(n.outWidth,(n.inWidth+u-f)/a),v=0;v<n.outChannels;++v){for(var y=Math.trunc(v/c),x=v%c,b=0,E=0;E<n.batchSize;++E)for(var S=p;S<h;++S)for(var A=d+S*r-l,T=g;T<m;++T){var w=f+T*a-u;b+=e.get(E,A,w,y)*t.get(E,S,T,v);}s.set(b,d,f,y,x);}return s.toTensor()},e.prototype.tile=function(e,t){for(var n=new Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];var a=buffer(n,e.dtype),o=e.buffer();for(r=0;r<a.values.length;++r){for(var i=a.indexToLoc(r),s=new Array(e.rank),u=0;u<s.length;u++)s[u]=i[u]%e.shape[u];var l=o.locToIndex(s);a.values[r]=o.values[l];}return a.toTensor()},e.prototype.pad=function(e,t,n){var r=t.map(function(t,n){return t[0]+e.shape[n]+t[1]}),a=t.map(function(e){return e[0]}),o=e.buffer(),i=buffer(r,e.dtype);0!==n&&i.values.fill(n);for(var s=0;s<e.size;s++){var u=o.indexToLoc(s),l=u.map(function(e,t){return e+a[t]});i.set.apply(i,[e.get.apply(e,u)].concat(l));}return i.toTensor()},e.prototype.transpose=function(e,t){for(var n=new Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[t[r]];var a=e.dataSync(),o=buffer(n,e.dtype),i=e.buffer();for(r=0;r<e.size;++r){for(var s=i.indexToLoc(r),u=new Array(s.length),l=0;l<u.length;l++)u[l]=s[t[l]];var c=o.locToIndex(u);o.values[c]=a[r];}return o.toTensor()},e.prototype.gather=function(e,t,n){var r=e.shape.slice(),a=t.dataSync();r[n]=a.length;for(var o=buffer(r,e.dtype),i=e.buffer(),s=0;s<o.size;++s){var u=o.indexToLoc(s),l=u.slice();l[n]=a[u[n]];var c=i.locToIndex(l);o.values[s]=i.values[c];}return o.toTensor()},e.prototype.pool=function(e,t,n){for(var r=t.strideHeight,a=t.strideWidth,o=t.filterHeight,i=t.filterWidth,s=buffer(t.outShape,"float32"),u=t.padInfo.top,l=t.padInfo.left,c=0;c<t.batchSize;++c)for(var d=0;d<t.inChannels;++d)for(var p=0;p<t.outHeight;++p)for(var h=p*r-u,f=Math.max(0,h),g=Math.min(t.inHeight,o+h),m=0;m<t.outWidth;++m){for(var v=m*a-l,y=Math.max(0,v),x=Math.min(t.inWidth,i+v),b="max"===n?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,E=0,S=0,A=f;A<g;++A){for(var T=y;T<x;++T){var w=e.get(c,A,T,d);"max"===n&&w>b?b=w:"avg"===n&&(E+=w,S++);}if(isNaN(b))break}s.set("avg"===n?E/S:b,c,p,m,d);}return s.toTensor()},e.prototype.maxPool=function(e,t){return this.pool(e,t,"max")},e.prototype.maxPoolPositions=function(e,t){for(var n=buffer(t.outShape,"int32"),r=t.strideHeight,a=t.strideWidth,o=t.filterHeight,i=t.filterWidth,s=t.padInfo.top,u=t.padInfo.left,l=0;l<t.batchSize;++l)for(var c=0;c<t.inChannels;++c)for(var d=0;d<t.outHeight;++d)for(var p=d*r-s,h=Math.max(0,p),f=Math.min(t.inHeight,o+p),g=0;g<t.outWidth;++g){for(var m=g*a-u,v=Math.max(0,m),y=Math.min(t.inWidth,i+m),x=Number.NEGATIVE_INFINITY,b=-1,E=h;E<f;++E)for(var S=E-p,A=v;A<y;++A){var T=A-m,w=e.get(l,E,A,c);w>x&&(x=w,b=S*i+T);}n.set(b,l,d,g,c);}return n.toTensor()},e.prototype.maxPoolBackprop=function(e,t,n,r){for(var a=this.maxPoolPositions(t,r),o=r.strideHeight,i=r.strideWidth,s=r.filterHeight,u=r.filterWidth,l=u-1-r.padInfo.left,c=s-1-r.padInfo.top,d=buffer(t.shape,"float32"),p=0;p<r.batchSize;++p)for(var h=0;h<r.inChannels;++h)for(var f=0;f<r.inHeight;++f)for(var g=0;g<r.inWidth;++g){for(var m=f-c,v=g-l,y=0,x=0;x<s;++x){var b=(m+x)/o;if(!(b<0||b>=r.outHeight||Math.floor(b)!==b))for(var E=0;E<u;++E){var S=(v+E)/i;if(!(S<0||S>=r.outWidth||Math.floor(S)!==S)){var A=s*u-1-a.get(p,b,S,h)===x*u+E?1:0;if(0!==A)y+=e.get(p,b,S,h)*A;}}}d.set(y,p,f,g,h);}return d.toTensor()},e.prototype.avgPoolBackprop=function(e,t,n){for(var r=n.strideHeight,a=n.strideWidth,o=n.filterHeight,i=n.filterWidth,s=i-1-n.padInfo.left,u=o-1-n.padInfo.top,l=buffer(t.shape,"float32"),c=1/(o*i),d=0;d<n.batchSize;++d)for(var p=0;p<n.inChannels;++p)for(var h=0;h<n.inHeight;++h)for(var f=0;f<n.inWidth;++f){for(var g=h-u,m=f-s,v=0,y=0;y<o;++y){var x=(g+y)/r;if(!(x<0||x>=n.outHeight||Math.floor(x)!==x))for(var b=0;b<i;++b){var E=(m+b)/a;if(!(E<0||E>=n.outWidth||Math.floor(E)!==E))v+=e.get(d,x,E,p);}}l.set(v*c,d,h,f,p);}return l.toTensor()},e.prototype.cast=function(e,t){return castTensor(e,t,this)},e.prototype.reshape=function(e,t){return reshapeTensor(e,t)},e.prototype.avgPool=function(e,t){return this.pool(e,t,"avg").toFloat()},e.prototype.resizeBilinear=function(e,t,n,r){for(var a=e.shape,o=a[0],i=a[1],s=a[2],u=a[3],l=buffer([o,t,n,u],e.dtype),c=[r&&t>1?i-1:i,r&&n>1?s-1:s],d=[r&&t>1?t-1:t,r&&n>1?n-1:n],p=0;p<o;p++)for(var h=0;h<t;h++)for(var f=0;f<n;f++)for(var g=0;g<u;g++){var m=c[0]*h/d[0],v=c[1]*f/d[1],y=Math.floor(m),x=Math.min(i-1,Math.ceil(m)),b=Math.floor(v),E=Math.min(s-1,Math.ceil(v)),S=e.get(p,y,b,g),A=e.get(p,x,b,g),T=v-b,w=S+(e.get(p,y,E,g)-S)*T,_=w+(A+(e.get(p,x,E,g)-A)*T-w)*(m-y);l.set(_,p,h,f,g);}return l.toTensor()},e.prototype.resizeBilinearBackprop=function(e,t,n){for(var r=t.shape,a=r[0],o=r[1],i=r[2],s=r[3],u=e.shape,l=u[1],c=u[2],d=buffer([a,o,i,s],t.dtype),p=[n&&l>1?o-1:o,n&&c>1?i-1:i],h=[n&&l>1?l-1:l,n&&c>1?c-1:c],f=p[0]/h[0],g=p[1]/h[1],m=0;m<a;m++)for(var v=0;v<l;v++)for(var y=v*f,x=Math.floor(y),b=Math.min(Math.ceil(y),o-1),E=y-x,S=1-E,A=0;A<c;A++)for(var T=A*g,w=Math.floor(T),_=Math.min(Math.ceil(T),i-1),R=T-w,C=1-R,O=0;O<s;O++){var I=e.get(m,v,A,O),k=d.get(m,x,w,O);k+=I*S*C,d.set(k,m,x,w,O);var M=d.get(m,x,_,O);M+=I*S*R,d.set(M,m,x,_,O);var N=d.get(m,b,w,O);N+=I*E*C,d.set(N,m,b,w,O);var D=d.get(m,b,_,O);D+=I*E*R,d.set(D,m,b,_,O);}return d.toTensor()},e.prototype.resizeNearestNeighbor=function(e,t,n,r){for(var a=e.shape,o=a[0],i=a[1],s=a[2],u=a[3],l=buffer([o,t,n,u],e.dtype),c=r?[i-1,s-1]:[i,s],d=r?[t-1,n-1]:[t,n],p=0;p<o;p++)for(var h=0;h<t;h++)for(var f=0;f<n;f++)for(var g=0;g<u;g++){var m=c[0]*h/d[0],v=c[1]*f/d[1],y=Math.min(i-1,r?Math.round(m):Math.floor(m)),x=Math.min(s-1,r?Math.round(v):Math.floor(v)),b=e.get(p,y,x,g);l.set(b,p,h,f,g);}return l.toTensor()},e.prototype.batchNormalization=function(e,t,n,r,a,o){for(var i=e.dataSync(),s=t.dataSync(),u=n.dataSync(),l=a?a.dataSync():new Float32Array([1]),c=o?o.dataSync():new Float32Array([0]),d=new Float32Array(i.length),p=0;p<i.length;p++)d[p]=c[p%c.length]+(i[p]-s[p%s.length])*l[p%l.length]/Math.sqrt(u[p%u.length]+r);return tensor4d(d,e.shape)},e.prototype.localResponseNormalization4D=function(e,t,n,r,a){var o=buffer(e.shape,"float32"),i=t,s=o.shape[3]-1;function u(t,n,r,a){for(var o=0,u=Math.max(0,a-i);u<=Math.min(a+i,s);u++){var l=e.get(t,n,r,u);o+=l*l;}return o}for(var l=0;l<o.shape[0];l++)for(var c=0;c<=o.shape[1];c++)for(var d=0;d<o.shape[2];d++)for(var p=0;p<o.shape[3];p++){var h=u(l,c,d,p),f=e.get(l,c,d,p)*Math.pow(n+r*h,-a);o.set(f,l,c,d,p);}return o.toTensor()},e.prototype.multinomial=function(e,t,n,r){for(var a=t?e:softmax(e),o=a.shape[0],i=a.shape[1],s=zeros([o,n],"int32"),u=s.dataSync(),l=a.dataSync(),c=0;c<o;++c){var d=c*i,p=new Float32Array(i-1);p[0]=l[d];for(var h=1;h<p.length;++h)p[h]=p[h-1]+l[d+h];for(var f=seedrandom_1(r.toString()),g=c*n,m=0;m<n;++m){var v=f();u[g+m]=p.length;for(var y=0;y<p.length;y++)if(v<p[y]){u[g+m]=y;break}}}return s},e.prototype.oneHot=function(e,t,n,r){var a=new Float32Array(e.size*t);a.fill(r);for(var o=0;o<e.size;++o)e.get(o)>=0&&e.get(o)<t&&(a[o*t+e.get(o)]=n);return tensor2d(a,[e.size,t],"int32")},e.prototype.broadcastedBinaryOp=function(e,t,n,r){for(var a=assertAndGetBroadcastShape(e.shape,t.shape),o=buffer(a,n),i=e.dataSync(),s=t.dataSync(),u=getBroadcastDims(e.shape,a),l=getBroadcastDims(t.shape,a),c=e.buffer(),d=t.buffer(),p=function(n){var a=o.indexToLoc(n),p=a.slice(-e.rank);u.forEach(function(e){return p[e]=0});var h=c.locToIndex(p),f=a.slice(-t.rank);l.forEach(function(e){return f[e]=0});var g=d.locToIndex(f);o.values[n]=r(i[h],s[g]);},h=0;h<o.values.length;++h)p(h);return o.toTensor()},e.prototype.dispose=function(){},e}();ENV.registerBackend("cpu",function(){return new MathBackendCPU},1);var BrowserUtil=function(){function e(){}return e.nextFrame=function(){return new Promise(function(e){return requestAnimationFrame(function(){return e()})})},__decorate([doc({heading:"Performance",subheading:"Timing"})],e,"nextFrame",null),e}(),DTYPE_VALUE_SIZE_MAP={float32:4,int32:4,uint16:2,uint8:1,bool:1};function encodeWeights(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a;return __generator(this,function(o){switch(o.label){case 0:for(r in t=[],n=[],e){if("float32"!==(a=e[r]).dtype&&"int32"!==a.dtype&&"bool"!==a.dtype)throw new Error("Unsupported dtype in weight '"+r+"': "+a.dtype);t.push({name:r,shape:a.shape,dtype:a.dtype}),n.push(a.data());}return [4,Promise.all(n)];case 1:return [2,{data:concatenateTypedArrays(o.sent()),specs:t}]}})})}function decodeWeights(e,t){for(var n={},r=0,a=0,o=t;a<o.length;a++){var i=o[a],s=i.name,u=i.dtype,l=i.shape;if(null!=i.quantization)throw new Error("decodeWeights does not support quantization yet, but encountered weight '"+s+" with quantization.'");var c=sizeFromShape(l),d=void 0;if("float32"===u)d=ArrayOps.tensor(new Float32Array(e,r,c),l,"float32");else if("int32"===u)d=ArrayOps.tensor(new Int32Array(e,r,c),l,"int32");else{if("bool"!==u)throw new Error("Unsupported dtype in weight '"+s+"': "+u);d=ArrayOps.tensor(new Uint8Array(e,r,c),l,"bool");}n[s]=d,r+=c*DTYPE_VALUE_SIZE_MAP[u];}return n}function concatenateTypedArrays(e){if(null===e)throw new Error("Invalid input value: "+JSON.stringify(e));var t=0;e.forEach(function(e){if(e instanceof Float32Array||e instanceof Int32Array)t+=e.buffer.byteLength;else{if(!(e instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+e.constructor.name);t+=e.buffer.byteLength;}});var n=new Uint8Array(t),r=0;return e.forEach(function(e){n.set(new Uint8Array(e.buffer),r),r+=e.buffer.byteLength;}),n.buffer}function stringByteLength(e){return new Blob([e]).size}function arrayBufferToBase64String(e){return btoa(String.fromCharCode.apply(null,new Uint8Array(e)))}function base64StringToArrayBuffer(e){for(var t=atob(e),n=new Uint8Array(t.length),r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function concatenateArrayBuffers(e){var t=0;e.forEach(function(e){t+=e.byteLength;});var n=new Uint8Array(t),r=0;return e.forEach(function(e){n.set(new Uint8Array(e),r),r+=e.byteLength;}),n.buffer}function basename(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);var t=e.split("/");return t[t.length-1]}function getModelArtifactsInfoForJSON(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return {dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:stringByteLength(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:stringByteLength(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}var IORouterRegistry=function(){function e(){this.saveRouters=[],this.loadRouters=[];}return e.getInstance=function(){return null==e.instance&&(e.instance=new e),e.instance},e.registerSaveRouter=function(t){e.getInstance().saveRouters.push(t);},e.registerLoadRouter=function(t){e.getInstance().loadRouters.push(t);},e.getSaveHandlers=function(t){return e.getHandlers(t,"save")},e.getLoadHandlers=function(t){return e.getHandlers(t,"load")},e.getHandlers=function(e,t){var n=[];return ("load"===t?this.getInstance().loadRouters:this.getInstance().saveRouters).forEach(function(t){var r=t(e);null!==r&&n.push(r);}),n},e}(),URL_SCHEME_SUFFIX="://",ModelStoreManagerRegistry=function(){function e(){this.managers={};}return e.getInstance=function(){return null==e.instance&&(e.instance=new e),e.instance},e.registerManager=function(t,n){assert(null!=t,"scheme must not be undefined or null."),t.endsWith(URL_SCHEME_SUFFIX)&&(t=t.slice(0,t.indexOf(URL_SCHEME_SUFFIX))),assert(t.length>0,"scheme must not be an empty string.");var r=e.getInstance();assert(null==r.managers[t],"A model store manager is already registered for scheme '"+t+"'."),r.managers[t]=n;},e.getManager=function(e){var t=this.getInstance().managers[e];if(null==t)throw new Error("Cannot find model manager for scheme '"+e+"'");return t},e.getSchemes=function(){return Object.keys(this.getInstance().managers)},e}();function parseURL(e){if(-1===e.indexOf(URL_SCHEME_SUFFIX))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+ModelStoreManagerRegistry.getSchemes().join(","));return {scheme:e.split(URL_SCHEME_SUFFIX)[0],path:e.split(URL_SCHEME_SUFFIX)[1]}}function cloneModelInternal(e,t,n){return void 0===n&&(n=!1),__awaiter(this,void 0,void 0,function(){var r,a,o,i,s,u,l,c,d;return __generator(this,function(p){switch(p.label){case 0:return assert(e!==t,"Old path and new path are the same: '"+e+"'"),assert((r=IORouterRegistry.getLoadHandlers(e)).length>0,"Copying failed because no load handler is found for source URL "+e+"."),assert(r.length<2,"Copying failed because more than one ("+r.length+") load handlers for source URL "+e+"."),a=r[0],assert((o=IORouterRegistry.getSaveHandlers(t)).length>0,"Copying failed because no save handler is found for destination URL "+t+"."),assert(o.length<2,"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."),i=o[0],s=parseURL(e).scheme,u=parseURL(e).path,l=s===parseURL(e).scheme,[4,a.load()];case 1:return c=p.sent(),n&&l?[4,ModelStoreManagerRegistry.getManager(s).removeModel(u)]:[3,3];case 2:p.sent(),p.label=3;case 3:return [4,i.save(c)];case 4:return d=p.sent(),!n||l?[3,6]:[4,ModelStoreManagerRegistry.getManager(s).removeModel(u)];case 5:p.sent(),p.label=6;case 6:return [2,d.modelArtifactsInfo]}})})}var ModelManagement=function(){function e(){}return e.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,a,o,i;return __generator(this,function(s){switch(s.label){case 0:e=ModelStoreManagerRegistry.getSchemes(),t={},n=0,r=e,s.label=1;case 1:return n<r.length?(a=r[n],[4,ModelStoreManagerRegistry.getManager(a).listModels()]):[3,4];case 2:for(i in o=s.sent())t[a+URL_SCHEME_SUFFIX+i]=o[i];s.label=3;case 3:return n++,[3,1];case 4:return [2,t]}})})},e.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return t=parseURL(e),[4,ModelStoreManagerRegistry.getManager(t.scheme).removeModel(t.path)];case 1:return [2,n.sent()]}})})},e.copyModel=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return [4,cloneModelInternal(e,t,!1)];case 1:return [2,n.sent()]}})})},e.moveModel=function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return [4,cloneModelInternal(e,t,!0)];case 1:return [2,n.sent()]}})})},__decorate([doc({heading:"Models",subheading:"Management",namespace:"io"})],e,"listModels",null),__decorate([doc({heading:"Models",subheading:"Management",namespace:"io"})],e,"removeModel",null),__decorate([doc({heading:"Models",subheading:"Management",namespace:"io"})],e,"copyModel",null),__decorate([doc({heading:"Models",subheading:"Management",namespace:"io"})],e,"moveModel",null),e}(),DATABASE_NAME="tensorflowjs",DATABASE_VERSION=1,MODEL_STORE_NAME="models_store",INFO_STORE_NAME="model_info_store";function getIndexedDBFactory(){if(!ENV.get("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var e=window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function setUpDatabase(e){var t=e.result;t.createObjectStore(MODEL_STORE_NAME,{keyPath:"modelPath"}),t.createObjectStore(INFO_STORE_NAME,{keyPath:"modelPath"});}var BrowserIndexedDB=function(){function e(e){if(this.indexedDB=getIndexedDBFactory(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e;}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return [2,this.databaseAction(this.modelPath,e)]})})},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return [2,this.databaseAction(this.modelPath)]})})},e.prototype.databaseAction=function(e,t){var n=this;return new Promise(function(e,r){var a=n.indexedDB.open(DATABASE_NAME,DATABASE_VERSION);a.onupgradeneeded=function(){return setUpDatabase(a)},a.onsuccess=function(){var o=a.result;if(null==t){var i=o.transaction(MODEL_STORE_NAME,"readonly"),s=i.objectStore(MODEL_STORE_NAME).get(n.modelPath);s.onsuccess=function(){if(null==s.result)return o.close(),r(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));e(s.result.modelArtifacts);},s.onerror=function(e){return o.close(),r(s.error)},i.oncomplete=function(){return o.close()};}else{var u,l=getModelArtifactsInfoForJSON(t),c=o.transaction(INFO_STORE_NAME,"readwrite"),d=c.objectStore(INFO_STORE_NAME),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:l});p.onsuccess=function(){var a=(u=o.transaction(MODEL_STORE_NAME,"readwrite")).objectStore(MODEL_STORE_NAME).put({modelPath:n.modelPath,modelArtifacts:t,modelArtifactsInfo:l});a.onsuccess=function(){return e({modelArtifactsInfo:l})},a.onerror=function(e){var t=(d=c.objectStore(INFO_STORE_NAME)).delete(n.modelPath);t.onsuccess=function(){return o.close(),r(a.error)},t.onerror=function(e){return o.close(),r(a.error)};};},p.onerror=function(e){return o.close(),r(p.error)},c.oncomplete=function(){null==u?o.close():u.oncomplete=function(){return o.close()};};}},a.onerror=function(e){return r(a.error)};})},e.URL_SCHEME="indexeddb://",e}(),indexedDBRouter=function(e){return ENV.get("IS_BROWSER")&&e.startsWith(BrowserIndexedDB.URL_SCHEME)?browserIndexedDB(e.slice(BrowserIndexedDB.URL_SCHEME.length)):null};function browserIndexedDB(e){return new BrowserIndexedDB(e)}function maybeStripScheme(e){return e.startsWith(BrowserIndexedDB.URL_SCHEME)?e.slice(BrowserIndexedDB.URL_SCHEME.length):e}IORouterRegistry.registerSaveRouter(indexedDBRouter),IORouterRegistry.registerLoadRouter(indexedDBRouter);var BrowserIndexedDBManager=function(){function e(){this.indexedDB=getIndexedDBFactory();}return e.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return [2,new Promise(function(t,n){var r=e.indexedDB.open(DATABASE_NAME,DATABASE_VERSION);r.onupgradeneeded=function(){return setUpDatabase(r)},r.onsuccess=function(){var e=r.result,a=e.transaction(INFO_STORE_NAME,"readonly"),o=a.objectStore(INFO_STORE_NAME).getAll();o.onsuccess=function(){for(var e={},n=0,r=o.result;n<r.length;n++){var a=r[n];e[a.modelPath]=a.modelArtifactsInfo;}t(e);},o.onerror=function(t){return e.close(),n(o.error)},a.oncomplete=function(){return e.close()};},r.onerror=function(e){return n(r.error)};})]})})},e.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(n){return e=maybeStripScheme(e),[2,new Promise(function(n,r){var a=t.indexedDB.open(DATABASE_NAME,DATABASE_VERSION);a.onupgradeneeded=function(){return setUpDatabase(a)},a.onsuccess=function(){var t,o=a.result,i=o.transaction(INFO_STORE_NAME,"readwrite"),s=i.objectStore(INFO_STORE_NAME),u=s.get(e);u.onsuccess=function(){if(null==u.result)return o.close(),r(new Error("Cannot find model with path '"+e+"' in IndexedDB."));var a=s.delete(e),i=function(){var a=(t=o.transaction(MODEL_STORE_NAME,"readwrite")).objectStore(MODEL_STORE_NAME).delete(e);a.onsuccess=function(){return n(u.result.modelArtifactsInfo)},a.onerror=function(e){return r(u.error)};};a.onsuccess=i,a.onerror=function(e){return i(),o.close(),r(u.error)};},u.onerror=function(e){return o.close(),r(u.error)},i.oncomplete=function(){null==t?o.close():t.oncomplete=function(){return o.close()};};},a.onerror=function(e){return r(a.error)};})]})})},e}();if(ENV.get("IS_BROWSER"))try{ModelStoreManagerRegistry.registerManager(BrowserIndexedDB.URL_SCHEME,new BrowserIndexedDBManager);}catch(e){}var PATH_SEPARATOR="/",PATH_PREFIX="tensorflowjs_models",INFO_SUFFIX="info",MODEL_TOPOLOGY_SUFFIX="model_topology",WEIGHT_SPECS_SUFFIX="weight_specs",WEIGHT_DATA_SUFFIX="weight_data";function getModelKeys(e){return {info:[PATH_PREFIX,e,INFO_SUFFIX].join(PATH_SEPARATOR),topology:[PATH_PREFIX,e,MODEL_TOPOLOGY_SUFFIX].join(PATH_SEPARATOR),weightSpecs:[PATH_PREFIX,e,WEIGHT_SPECS_SUFFIX].join(PATH_SEPARATOR),weightData:[PATH_PREFIX,e,WEIGHT_DATA_SUFFIX].join(PATH_SEPARATOR)}}function getModelPathFromKey(e){var t=e.split(PATH_SEPARATOR);if(t.length<3)throw new Error("Invalid key format: "+e);return t.slice(1,t.length-1).join(PATH_SEPARATOR)}function maybeStripScheme$1(e){return e.startsWith(BrowserLocalStorage.URL_SCHEME)?e.slice(BrowserLocalStorage.URL_SCHEME.length):e}var BrowserLocalStorage=function(){function e(e){if(!ENV.get("IS_BROWSER")||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=getModelKeys(this.modelPath);}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a;return __generator(this,function(o){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=getModelArtifactsInfoForJSON(e);try{return this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,arrayBufferToBase64String(e.weightData)),[2,{modelArtifactsInfo:r}]}catch(e){for(a in this.keys)this.LS.removeItem(this.keys[a]);throw new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+r.modelTopologyBytes+", weightSpecsBytes="+r.weightSpecsBytes+", weightDataBytes="+r.weightDataBytes+".")}return [2]})})},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,a;return __generator(this,function(o){if(null==(e=JSON.parse(this.LS.getItem(this.keys.info))))throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},null==(n=JSON.parse(this.LS.getItem(this.keys.topology))))throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(t.modelTopology=n,null==(r=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(t.weightSpecs=r,null==(a=this.LS.getItem(this.keys.weightData)))throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return t.weightData=base64StringToArrayBuffer(a),[2,t]})})},e.URL_SCHEME="localstorage://",e}(),localStorageRouter=function(e){return ENV.get("IS_BROWSER")&&e.startsWith(BrowserLocalStorage.URL_SCHEME)?browserLocalStorage(e.slice(BrowserLocalStorage.URL_SCHEME.length)):null};function browserLocalStorage(e){return new BrowserLocalStorage(e)}IORouterRegistry.registerSaveRouter(localStorageRouter),IORouterRegistry.registerLoadRouter(localStorageRouter);var BrowserLocalStorageManager=function(){function e(){assert(ENV.get("IS_BROWSER"),"Current environment is not a web browser"),assert(void 0!==window.localStorage,"Current browser does not appear to support localStorage"),this.LS=window.localStorage;}return e.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,a,o;return __generator(this,function(i){for(e={},t=PATH_PREFIX+PATH_SEPARATOR,n=PATH_SEPARATOR+INFO_SUFFIX,r=0;r<this.LS.length;++r)(a=this.LS.key(r)).startsWith(t)&&a.endsWith(n)&&(o=getModelPathFromKey(a),e[o]=JSON.parse(this.LS.getItem(a)));return [2,e]})})},e.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){if(e=maybeStripScheme$1(e),t=getModelKeys(e),null==this.LS.getItem(t.info))throw new Error("Cannot find model at path '"+e+"'");return n=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,n]})})},e}();if(ENV.get("IS_BROWSER"))try{ModelStoreManagerRegistry.registerManager(BrowserLocalStorage.URL_SCHEME,new BrowserLocalStorageManager);}catch(e){}var DEFAULT_FILE_NAME_PREFIX="model",DEFAULT_JSON_EXTENSION_NAME=".json",DEFAULT_WEIGHT_DATA_EXTENSION_NAME=".weights.bin",BrowserDownloads=function(){function e(t){if(!ENV.get("IS_BROWSER"))throw new Error("triggerDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),null!=t&&0!==t.length||(t=DEFAULT_FILE_NAME_PREFIX),this.modelTopologyFileName=t+DEFAULT_JSON_EXTENSION_NAME,this.weightDataFileName=t+DEFAULT_WEIGHT_DATA_EXTENSION_NAME;}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a,o,i;return __generator(this,function(s){if(t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"})),e.modelTopology instanceof ArrayBuffer)throw new Error("DownloadTrigger.save() does not support saving model topology in binary formats yet.");return n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),(o=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,o.href=a,o.click(),null!=e.weightData&&((i=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,i.href=t,i.click()),[2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e)}]})})},e.URL_SCHEME="downloads://",e}(),BrowserFiles=function(){function e(e){if(null==e||e.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+e);this.files=e;}return e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n=this;return __generator(this,function(r){return e=this.files[0],t=this.files.slice(1),[2,new Promise(function(r,a){var o=new FileReader;o.onload=function(o){var i=JSON.parse(o.target.result),s=i.modelTopology;if(null!=s){0===t.length&&r({modelTopology:s});var u=i.weightsManifest;if(null!=u){var l;try{l=n.checkManifestAndWeightFiles(u,t);}catch(e){return void a(e)}var c=[],d=[],p=[];u.forEach(function(e){e.paths.forEach(function(e){d.push(e),p.push(null);}),c.push.apply(c,e.weights);}),u.forEach(function(e){e.paths.forEach(function(e){var t=new FileReader;t.onload=function(t){var n=t.target.result,a=d.indexOf(e);p[a]=n,-1===p.indexOf(null)&&r({modelTopology:s,weightSpecs:c,weightData:concatenateArrayBuffers(p)});},t.onerror=function(t){a("Failed to weights data from file of path '"+e+"'.");},t.readAsArrayBuffer(l[e]);});});}else a(new Error("weightManifest field is missing from file "+e.name));}else a(new Error("modelTopology field is missing from file "+e.name));},o.onerror=function(t){a("Failed to read model topology and weights manifest JSON from file '"+e.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.");},o.readAsText(e);})]})})},e.prototype.checkManifestAndWeightFiles=function(e,t){for(var n=[],r=t.map(function(e){return basename(e.name)}),a={},o=0,i=e;o<i.length;o++){i[o].paths.forEach(function(e){var o=basename(e);if(-1!==n.indexOf(o))throw new Error("Duplicate file basename found in weights manifest: '"+o+"'");if(n.push(o),-1===r.indexOf(o))throw new Error("Weight file with basename '"+o+"' is not provided.");a[e]=t[r.indexOf(o)];});}if(n.length!==t.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+t.length+").");return a},e}(),browserDownloadsRouter=function(e){return ENV.get("IS_BROWSER")&&e.startsWith(BrowserDownloads.URL_SCHEME)?browserDownloads(e.slice(BrowserDownloads.URL_SCHEME.length)):null};function browserDownloads(e){return void 0===e&&(e="model"),new BrowserDownloads(e)}function browserFiles(e){return new BrowserFiles(e)}function loadWeightsAsArrayBuffer(e,t){return __awaiter(this,void 0,void 0,function(){var n,r;return __generator(this,function(a){switch(a.label){case 0:return n=e.map(function(e){return fetch(e,t)}),[4,Promise.all(n)];case 1:return r=a.sent(),[4,Promise.all(r.map(function(e){return e.arrayBuffer()}))];case 2:return [2,a.sent()]}})})}function loadWeights(e,t,n,r){return void 0===t&&(t=""),__awaiter(this,void 0,void 0,function(){var a,o,i,s,u,l,c,d,p,h;return __generator(this,function(f){switch(f.label){case 0:if(a=e.map(function(){return !1}),o={},i=null!=n?n.map(function(){return !1}):[],s=[],e.forEach(function(e,t){var r=0;e.weights.forEach(function(e){var u="quantization"in e?e.quantization.dtype:e.dtype,l=DTYPE_VALUE_SIZE_MAP[u]*sizeFromShape(e.shape),c=function(){a[t]=!0,null==o[t]&&(o[t]=[]),o[t].push({manifestEntry:e,groupOffset:r,sizeBytes:l});};null!=n?n.forEach(function(t,n){t===e.name&&(c(),i[n]=!0);}):c(),s.push(e.name),r+=l;});}),!i.every(function(e){return e}))throw u=n.filter(function(e,t){return !i[t]}),new Error("Could not find weights in manifest with names: "+u.join(", ")+". \nManifest JSON has weights with names: "+s.join(", ")+".");return l=a.reduce(function(e,t,n){return t&&e.push(n),e},[]),c=[],l.forEach(function(n){e[n].paths.forEach(function(e){var n=t+(t.endsWith("/")?"":"/")+e;c.push(n);});}),[4,loadWeightsAsArrayBuffer(c,r)];case 1:return d=f.sent(),p={},h=0,l.forEach(function(t){for(var n=e[t].paths.length,r=0,a=0;a<n;a++)r+=d[h+a].byteLength;for(var i=new ArrayBuffer(r),s=new Uint8Array(i),u=0,l=0;l<n;l++){var c=new Uint8Array(d[h+l]);s.set(c,u),u+=c.byteLength;}o[t].forEach(function(e){var t,n=i.slice(e.groupOffset,e.groupOffset+e.sizeBytes),r=e.manifestEntry.dtype;if("quantization"in e.manifestEntry){var a=e.manifestEntry.quantization;if("uint8"!==a.dtype&&"uint16"!==a.dtype)throw new Error("Weight "+e.manifestEntry.name+" has unknown quantization dtype "+a.dtype+".");var o="uint8"===a.dtype?new Uint8Array(n):new Uint16Array(n);if("float32"===r)t=Float32Array.from(o,function(e){return e*a.scale+a.min});else{if("int32"!==r)throw new Error("Weight "+e.manifestEntry.name+" has a dtype not supported by quantization: "+r);t=Int32Array.from(o,function(e){return Math.round(e*a.scale+a.min)});}}else if("float32"===r)t=new Float32Array(n);else{if("int32"!==r)throw new Error("Weight "+e.manifestEntry.name+" has unknown dtype "+r+".");t=new Int32Array(n);}var s=e.manifestEntry.name;if(null!=p[s])throw new Error("Duplicate weight with name "+s+". Please make sure weights names are unique in the manifest JSON.");p[s]=tensor(t,e.manifestEntry.shape,e.manifestEntry.dtype);}),h+=n;}),[2,p]}})})}IORouterRegistry.registerSaveRouter(browserDownloadsRouter);var BrowserHTTPRequest=function(){function e(e,t){if(this.DEFAULT_METHOD="POST",!ENV.get("IS_BROWSER"))throw new Error("browserHTTPRequest is not supported outside the web browser.");if(assert(null!=e&&e.length>0,"URL path for browserHTTPRequest must not be null, undefined or empty."),this.path=e,null!=t&&null!=t.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t||{};}return e.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a;return __generator(this,function(o){switch(o.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return (t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r={modelTopology:e.modelTopology,weightsManifest:n},t.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,fetch(this.path,t)];case 1:if(200===(a=o.sent()).status)return [2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},e.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,r,a,o,i,s,u,l,c,d;return __generator(this,function(p){switch(p.label){case 0:return [4,fetch(this.path,this.requestInit)];case 1:return [4,p.sent().json()];case 2:if(e=p.sent(),t=e.modelTopology,n=e.weightsManifest,null==t&&null==n)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");if(null==n)return [3,4];for(o=e.weightsManifest,r=[],i=0,s=o;i<s.length;i++)u=s[i],r.push.apply(r,u.weights);return (l=this.path.substring(0,this.path.lastIndexOf("/"))).endsWith("/")||(l+="/"),c=[],o.forEach(function(e){e.paths.forEach(function(e){c.push(l+e);});}),d=concatenateArrayBuffers,[4,loadWeightsAsArrayBuffer(c,this.requestInit)];case 3:a=d.apply(void 0,[p.sent()]),p.label=4;case 4:return [2,{modelTopology:t,weightSpecs:r,weightData:a}]}})})},e.URL_SCHEMES=["http://","https://"],e}(),httpRequestRouter=function(e){if(ENV.get("IS_BROWSER")){for(var t=0,n=BrowserHTTPRequest.URL_SCHEMES;t<n.length;t++){var r=n[t];if(e.startsWith(r))return browserHTTPRequest(e)}return null}return null};function browserHTTPRequest(e,t){return new BrowserHTTPRequest(e,t)}IORouterRegistry.registerSaveRouter(httpRequestRouter),IORouterRegistry.registerLoadRouter(httpRequestRouter);var registerSaveRouter=IORouterRegistry.registerSaveRouter,registerLoadRouter=IORouterRegistry.registerLoadRouter,getSaveHandlers=IORouterRegistry.getSaveHandlers,getLoadHandlers=IORouterRegistry.getLoadHandlers,copyModel=ModelManagement.copyModel,listModels=ModelManagement.listModels,moveModel=ModelManagement.moveModel,removeModel=ModelManagement.removeModel,io=Object.freeze({browserFiles:browserFiles,browserHTTPRequest:browserHTTPRequest,concatenateArrayBuffers:concatenateArrayBuffers,copyModel:copyModel,decodeWeights:decodeWeights,encodeWeights:encodeWeights,getLoadHandlers:getLoadHandlers,getModelArtifactsInfoForJSON:getModelArtifactsInfoForJSON,getSaveHandlers:getSaveHandlers,listModels:listModels,loadWeights:loadWeights,moveModel:moveModel,registerLoadRouter:registerLoadRouter,registerSaveRouter:registerSaveRouter,removeModel:removeModel}),Serializable=function(){function e(){}return e.prototype.getClassName=function(){return this.constructor.className},e.fromConfig=function(e,t){return new e(t)},e}(),SerializationMap=function(){function e(){this.classNameMap={};}return e.getMap=function(){return null==e.instance&&(e.instance=new e),e.instance},e.register=function(e){this.getMap().classNameMap[e.className]=[e,e.fromConfig];},e}(),serialization=Object.freeze({Serializable:Serializable,SerializationMap:SerializationMap}),WEBGL_ENVS=[{BACKEND:"test-webgl",WEBGL_RENDER_FLOAT32_ENABLED:!0,WEBGL_DOWNLOAD_FLOAT_ENABLED:!0,WEBGL_VERSION:1},{BACKEND:"test-webgl",WEBGL_RENDER_FLOAT32_ENABLED:!0,WEBGL_DOWNLOAD_FLOAT_ENABLED:!0,WEBGL_VERSION:2}],CPU_ENVS=[{BACKEND:"test-cpu"}],CHROME_CPU_ENVS=[{BACKEND:"test-cpu",IS_CHROME:!0}],NATIVE_ENV={},BROWSER_ENVS=WEBGL_ENVS.concat(CPU_ENVS),ALL_ENVS=[NATIVE_ENV].concat(BROWSER_ENVS);function expectArraysClose(e,t,n){if(null==n&&(n=ENV.get("TEST_EPSILON")),e instanceof Tensor||t instanceof Tensor){if(e instanceof Tensor&&t instanceof Tensor){if(e.dtype!==t.dtype)throw new Error("Arrays are of different type actual: "+e.dtype+" vs expected: "+t.dtype+".");if(!arraysEqual(e.shape,t.shape))throw new Error("Arrays are of different shape actual: "+e.shape+" vs expected: "+t.shape+".")}}else{var r=e.constructor.name,a=t.constructor.name;if(r!==a)throw new Error("Arrays are of different type actual: "+r+" vs expected: "+a)}var o,i;if(o=e instanceof Tensor?e.dataSync():e,i=t instanceof Tensor?t.dataSync():t,o.length!==i.length)throw new Error("Arrays have different lengths actual: "+o.length+" vs expected: "+i.length+".\nActual:   "+o+".\nExpected: "+i+".");for(var s=0;s<i.length;++s){var u=o[s],l=i[s];if(!areClose(u,Number(l),n))throw new Error("Arrays differ: actual["+s+"] = "+u+", expected["+s+"] = "+l+".\nActual:   "+o+".\nExpected: "+i+".")}}function expectPromiseToFail(e,t){e().then(function(){return t.fail()},function(){return t()});}function expectArraysEqual(e,t){return expectArraysClose(e,t,0)}function expectNumbersClose(e,t,n){if(null==n&&(n=ENV.get("TEST_EPSILON")),!areClose(e,t,n))throw new Error("Numbers differ: actual === "+e+", expected === "+t)}function areClose(e,t,n){return !(!isNaN(e)||!isNaN(t))||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function expectValuesInRange(e,t,n){var r;r=e instanceof Tensor?e.dataSync():e;for(var a=0;a<r.length;a++)if(r[a]<t||r[a]>n)throw new Error("Value out of range:"+r[a]+" low: "+t+", high: "+n)}function expectArrayBuffersEqual(e,t){expect(new Float32Array(e)).toEqual(new Float32Array(t));}var test_util=Object.freeze({WEBGL_ENVS:WEBGL_ENVS,CPU_ENVS:CPU_ENVS,CHROME_CPU_ENVS:CHROME_CPU_ENVS,NATIVE_ENV:NATIVE_ENV,BROWSER_ENVS:BROWSER_ENVS,ALL_ENVS:ALL_ENVS,expectArraysClose:expectArraysClose,expectPromiseToFail:expectPromiseToFail,expectArraysEqual:expectArraysEqual,expectNumbersClose:expectNumbersClose,expectValuesInRange:expectValuesInRange,expectArrayBuffersEqual:expectArrayBuffersEqual}),version="0.11.9",webgl=Object.freeze({gpgpu_util:gpgpu_util,webgl_util:webgl_util,MathBackendWebGL:MathBackendWebGL,GPGPUContext:GPGPUContext}),Optimizer=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.minimize=function(e,t,n){void 0===t&&(t=!1);var r=this.computeGradients(e,n),a=r.value,o=r.grads;return this.applyGradients(o),Object.keys(o).forEach(function(e){return o[e].dispose()}),t?a:(a.dispose(),null)},t.prototype.computeGradients=function(e,t){return variableGrads(e,t)},__decorate([doc({heading:"Training",subheading:"Optimizers"})],t.prototype,"minimize",null),t=__decorate([doc({heading:"Training",subheading:"Classes",namespace:"train"})],t)}(Serializable),DEFAULT_FLOAT32_EPSILON=1e-8,DEFAULT_FLOAT16_EPSILON=1e-4;function getOptimizerDefaultEpsilonValue(){return ENV.get("WEBGL_RENDER_FLOAT32_ENABLED")?DEFAULT_FLOAT32_EPSILON:DEFAULT_FLOAT16_EPSILON}var AdadeltaOptimizer=function(e){function t(t,n,r){void 0===r&&(r=null);var a=e.call(this)||this;return a.learningRate=t,a.rho=n,a.epsilon=r,a.accumulatedGrads={},a.accumulatedUpdates={},a.c=keep(scalar(-t)),a.rhoScalar=keep(scalar(n)),a.oneMinusRho=keep(scalar(1-n)),null===r&&(r=getOptimizerDefaultEpsilonValue()),a.epsilonScalar=keep(scalar(r)),a}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var a=ENV.engine.registeredVariables[n];if(null==r.accumulatedGrads[n]){tidy(function(){t.accumulatedGrads[n]=zerosLike(a).variable(!1);});}if(null==r.accumulatedUpdates[n]){tidy(function(){t.accumulatedUpdates[n]=zerosLike(a).variable(!1);});}var o=e[n],i=r.accumulatedGrads[n],s=r.accumulatedUpdates[n];tidy(function(){var e=t.rhoScalar.mul(i).add(t.oneMinusRho.mul(o.square())),r=s.add(t.epsilonScalar).sqrt().div(i.add(t.epsilonScalar).sqrt()).mul(o),u=t.rhoScalar.mul(s).add(t.oneMinusRho.mul(r.square()));t.accumulatedGrads[n].assign(e),t.accumulatedUpdates[n].assign(u);var l=t.c.mul(r).add(a);a.assign(l);});},r=this;for(var a in e)n(a);},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsilonScalar.dispose(),this.rhoScalar.dispose(),this.oneMinusRho.dispose(),null!=this.accumulatedUpdates&&(Object.keys(this.accumulatedUpdates).forEach(function(t){return e.accumulatedUpdates[t].dispose()}),Object.keys(this.accumulatedGrads).forEach(function(t){return e.accumulatedGrads[t].dispose()}));},t.prototype.getConfig=function(){return {learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},t.className="AdadeltaOptimizer",t}(Optimizer);SerializationMap.register(AdadeltaOptimizer);var AdagradOptimizer=function(e){function t(t,n){void 0===n&&(n=.1);var r=e.call(this)||this;r.learningRate=t,r.initialAccumulatorValue=n,r.accumulatedGrads={},r.c=keep(scalar(-t));var a=getOptimizerDefaultEpsilonValue();return r.epsilon=keep(scalar(a)),r}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var a=ENV.engine.registeredVariables[n];if(null==r.accumulatedGrads[n]){tidy(function(){t.accumulatedGrads[n]=fill(a.shape,t.initialAccumulatorValue).variable(!1);});}var o=e[n],i=r.accumulatedGrads[n];tidy(function(){var e=i.add(o.square());t.accumulatedGrads[n].assign(e);var r=t.c.mul(o.div(e.add(t.epsilon).sqrt())).add(a);a.assign(r);});},r=this;for(var a in e)n(a);},t.prototype.dispose=function(){var e=this;this.epsilon.dispose(),this.c.dispose(),null!=this.accumulatedGrads&&Object.keys(this.accumulatedGrads).forEach(function(t){return e.accumulatedGrads[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},t.className="AdagradOptimizer",t}(Optimizer);SerializationMap.register(AdagradOptimizer);var AdamOptimizer=function(e){function t(t,n,r,a){void 0===a&&(a=null);var o=e.call(this)||this;return o.learningRate=t,o.beta1=n,o.beta2=r,o.epsilon=a,o.accumulatedFirstMoment={},o.accumulatedSecondMoment={},o.c=keep(scalar(-t)),o.beta1Scalar=keep(scalar(n)),o.beta2Scalar=keep(scalar(r)),tidy(function(){o.accBeta1=scalar(n).variable(),o.accBeta2=scalar(r).variable();}),o.oneMinusBeta1=keep(scalar(1-n)),o.oneMinusBeta2=keep(scalar(1-r)),o.one=keep(scalar(1)),null===a&&(a=getOptimizerDefaultEpsilonValue()),o.epsScalar=keep(scalar(a)),o}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this;tidy(function(){var n=t.one.sub(t.accBeta1),r=t.one.sub(t.accBeta2);for(var a in e){var o=ENV.engine.registeredVariables[a];if(null==t.accumulatedFirstMoment[a]){var i=!1;t.accumulatedFirstMoment[a]=zerosLike(o).variable(i);}if(null==t.accumulatedSecondMoment[a]){i=!1;t.accumulatedSecondMoment[a]=zerosLike(o).variable(i);}var s=e[a],u=t.accumulatedFirstMoment[a],l=t.accumulatedSecondMoment[a],c=t.beta1Scalar.mul(u).add(t.oneMinusBeta1.mul(s)),d=t.beta2Scalar.mul(l).add(t.oneMinusBeta2.mul(s.square())),p=c.div(n),h=d.div(r);t.accumulatedFirstMoment[a].assign(c),t.accumulatedSecondMoment[a].assign(d);var f=t.c.mul(p.div(t.epsScalar.add(h.sqrt()))).add(o);o.assign(f);}t.accBeta1.assign(t.accBeta1.mul(t.beta1Scalar)),t.accBeta2.assign(t.accBeta2.mul(t.beta2Scalar));});},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsScalar.dispose(),this.beta1Scalar.dispose(),this.beta2Scalar.dispose(),this.accBeta1.dispose(),this.accBeta2.dispose(),this.oneMinusBeta1.dispose(),this.oneMinusBeta2.dispose(),this.one.dispose(),null!=this.accumulatedFirstMoment&&Object.keys(this.accumulatedFirstMoment).forEach(function(t){return e.accumulatedFirstMoment[t].dispose()}),null!=this.accumulatedSecondMoment&&Object.keys(this.accumulatedSecondMoment).forEach(function(t){return e.accumulatedSecondMoment[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},t.className="AdamOptimizer",t}(Optimizer);SerializationMap.register(AdamOptimizer);var AdamaxOptimizer=function(e){function t(t,n,r,a,o){void 0===a&&(a=null),void 0===o&&(o=0);var i=e.call(this)||this;return i.learningRate=t,i.beta1=n,i.beta2=r,i.epsilon=a,i.decay=o,i.accumulatedFirstMoment={},i.accumulatedWeightedInfNorm={},i.c=keep(scalar(-t)),i.beta1Scalar=keep(scalar(n)),i.beta2Scalar=keep(scalar(r)),i.decayScalar=keep(scalar(o)),tidy(function(){i.iteration=scalar(0).variable(),i.accBeta1=scalar(n).variable();}),i.oneMinusBeta1=keep(scalar(1-n)),i.one=keep(scalar(1)),null===a&&(a=getOptimizerDefaultEpsilonValue()),i.epsScalar=keep(scalar(a)),i}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this;tidy(function(){var n=t.one.sub(t.accBeta1),r=t.c.div(t.one.add(t.decayScalar.mul(t.iteration)));for(var a in e){var o=ENV.engine.registeredVariables[a];if(null==t.accumulatedFirstMoment[a]){var i=!1;t.accumulatedFirstMoment[a]=zerosLike(o).variable(i);}if(null==t.accumulatedWeightedInfNorm[a]){i=!1;t.accumulatedWeightedInfNorm[a]=zerosLike(o).variable(i);}var s=e[a],u=t.accumulatedFirstMoment[a],l=t.accumulatedWeightedInfNorm[a],c=t.beta1Scalar.mul(u).add(t.oneMinusBeta1.mul(s)),d=t.beta2Scalar.mul(l),p=s.abs(),h=d.maximum(p);t.accumulatedFirstMoment[a].assign(c),t.accumulatedWeightedInfNorm[a].assign(h);var f=r.div(n).mul(c.div(t.epsScalar.add(h))).add(o);o.assign(f);}t.iteration.assign(t.iteration.add(t.one)),t.accBeta1.assign(t.accBeta1.mul(t.beta1Scalar));});},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsScalar.dispose(),this.accBeta1.dispose(),this.beta1Scalar.dispose(),this.beta2Scalar.dispose(),this.oneMinusBeta1.dispose(),this.decayScalar.dispose(),this.iteration.dispose(),this.one.dispose(),null!=this.accumulatedFirstMoment&&Object.keys(this.accumulatedFirstMoment).forEach(function(t){return e.accumulatedFirstMoment[t].dispose()}),null!=this.accumulatedWeightedInfNorm&&Object.keys(this.accumulatedWeightedInfNorm).forEach(function(t){return e.accumulatedWeightedInfNorm[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},t.className="AdamaxOptimizer",t}(Optimizer);SerializationMap.register(AdamaxOptimizer);var SGDOptimizer=function(e){function t(t){var n=e.call(this)||this;return n.learningRate=t,n.setLearningRate(t),n}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this;Object.keys(e).forEach(function(n){var r=e[n],a=ENV.engine.registeredVariables[n];tidy(function(){var e=t.c.mul(r).add(a);a.assign(e);});});},t.prototype.setLearningRate=function(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=keep(scalar(-e));},t.prototype.dispose=function(){this.c.dispose();},t.prototype.getConfig=function(){return {learningRate:this.learningRate}},t.fromConfig=function(e,t){return new e(t.learningRate)},t.className="SGDOptimizer",t}(Optimizer);SerializationMap.register(SGDOptimizer);var MomentumOptimizer=function(e){function t(t,n,r){void 0===r&&(r=!1);var a=e.call(this,t)||this;return a.learningRate=t,a.momentum=n,a.useNesterov=r,a.m=scalar(a.momentum),a.accumulations={},a}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var a=ENV.engine.registeredVariables[n];if(null==r.accumulations[n]){tidy(function(){t.accumulations[n]=zerosLike(a).variable(!1);});}var o=r.accumulations[n],i=e[n];tidy(function(){var e,r=t.m.mul(o).add(i);e=t.useNesterov?t.c.mul(i.add(r.mul(t.m))).add(a):t.c.mul(r).add(a),t.accumulations[n].assign(r),a.assign(e);});},r=this;for(var a in e)n(a);},t.prototype.dispose=function(){if(e.prototype.dispose.call(this),this.m.dispose(),null!=this.accumulations)for(var t in this.accumulations)this.accumulations[t].dispose();},t.prototype.setMomentum=function(e){this.momentum=e;},t.prototype.getConfig=function(){return {learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},t.className="MomentumOptimizer",t}(SGDOptimizer);SerializationMap.register(MomentumOptimizer);var RMSPropOptimizer=function(e){function t(t,n,r,a,o){void 0===n&&(n=.9),void 0===r&&(r=0),void 0===a&&(a=null),void 0===o&&(o=!1);var i=e.call(this)||this;return i.learningRate=t,i.decay=n,i.momentum=r,i.epsilon=a,i.accumulatedMeanSquares={},i.accumulatedMeanGrads={},i.accumulatedMoments={},i.c=keep(scalar(t)),i.decayScalar=keep(scalar(n)),i.momentumScalar=keep(scalar(r)),i.oneMinusDecay=keep(scalar(1-n)),i.centered=o,null===a&&(a=getOptimizerDefaultEpsilonValue()),i.epsilonScalar=keep(scalar(a)),i}return __extends(t,e),t.prototype.applyGradients=function(e){var t=this,n=function(n){var a=ENV.engine.registeredVariables[n];if(null==r.accumulatedMeanSquares[n]){tidy(function(){t.accumulatedMeanSquares[n]=zerosLike(a).variable(!1);});}if(null==r.accumulatedMeanGrads[n]&&r.centered){tidy(function(){t.accumulatedMeanGrads[n]=zerosLike(a).variable(!1);});}if(null==r.accumulatedMoments[n]){tidy(function(){t.accumulatedMoments[n]=zerosLike(a).variable(!1);});}var o=r.accumulatedMeanSquares[n],i=r.accumulatedMeanGrads[n],s=r.accumulatedMoments[n],u=e[n];tidy(function(){var e=t.decayScalar.mul(o).add(t.oneMinusDecay.mul(u.square()));if(t.centered){var r=t.decayScalar.mul(i).add(t.oneMinusDecay.mul(u)),l=t.momentumScalar.mul(s).add(t.c.mul(u).div(e.sub(r.square().add(t.epsilonScalar)).sqrt()));t.accumulatedMeanSquares[n].assign(e),t.accumulatedMeanGrads[n].assign(r),t.accumulatedMoments[n].assign(l);var c=a.sub(l);a.assign(c);}else{var d=t.decayScalar.mul(o).add(t.oneMinusDecay.mul(u.square()));l=t.momentumScalar.mul(s).add(t.c.mul(u).div(d.add(t.epsilonScalar).sqrt()));t.accumulatedMeanSquares[n].assign(d),t.accumulatedMoments[n].assign(l);c=a.sub(l);a.assign(c);}});},r=this;for(var a in e)n(a);},t.prototype.dispose=function(){var e=this;this.c.dispose(),this.epsilonScalar.dispose(),this.decayScalar.dispose(),this.momentumScalar.dispose(),this.oneMinusDecay.dispose(),null!=this.accumulatedMeanSquares&&Object.keys(this.accumulatedMeanSquares).forEach(function(t){return e.accumulatedMeanSquares[t].dispose()}),null!=this.accumulatedMeanGrads&&this.centered&&Object.keys(this.accumulatedMeanGrads).forEach(function(t){return e.accumulatedMeanGrads[t].dispose()}),null!=this.accumulatedMoments&&Object.keys(this.accumulatedMoments).forEach(function(t){return e.accumulatedMoments[t].dispose()});},t.prototype.getConfig=function(){return {learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},t.className="RMSPropOptimizer",t}(Optimizer);SerializationMap.register(RMSPropOptimizer);var OptimizerConstructors=function(){function e(){}return e.sgd=function(e){return new SGDOptimizer(e)},e.momentum=function(e,t,n){return void 0===n&&(n=!1),new MomentumOptimizer(e,t,n)},e.rmsprop=function(e,t,n,r,a){return void 0===t&&(t=.9),void 0===n&&(n=0),void 0===r&&(r=null),void 0===a&&(a=!1),new RMSPropOptimizer(e,t,n,r,a)},e.adam=function(e,t,n,r){return void 0===e&&(e=.001),void 0===t&&(t=.9),void 0===n&&(n=.999),void 0===r&&(r=null),new AdamOptimizer(e,t,n,r)},e.adadelta=function(e,t,n){return void 0===e&&(e=.001),void 0===t&&(t=.95),void 0===n&&(n=null),new AdadeltaOptimizer(e,t,n)},e.adamax=function(e,t,n,r,a){return void 0===e&&(e=.002),void 0===t&&(t=.9),void 0===n&&(n=.999),void 0===r&&(r=null),void 0===a&&(a=0),new AdamaxOptimizer(e,t,n,r,a)},e.adagrad=function(e,t){return void 0===t&&(t=.1),new AdagradOptimizer(e,t)},__decorate([doc({heading:"Training",subheading:"Optimizers",namespace:"train"})],e,"sgd",null),__decorate([doc({heading:"Training",subheading:"Optimizers",namespace:"train"})],e,"momentum",null),__decorate([doc({heading:"Training",subheading:"Optimizers",namespace:"train"})],e,"rmsprop",null),__decorate([doc({heading:"Training",subheading:"Optimizers",namespace:"train"})],e,"adam",null),__decorate([doc({heading:"Training",subheading:"Optimizers",namespace:"train"})],e,"adadelta",null),__decorate([doc({heading:"Training",subheading:"Optimizers",namespace:"train"})],e,"adamax",null),__decorate([doc({heading:"Training",subheading:"Optimizers",namespace:"train"})],e,"adagrad",null),e}(),train={sgd:OptimizerConstructors.sgd,momentum:OptimizerConstructors.momentum,adadelta:OptimizerConstructors.adadelta,adagrad:OptimizerConstructors.adagrad,rmsprop:OptimizerConstructors.rmsprop,adamax:OptimizerConstructors.adamax,adam:OptimizerConstructors.adam},setBackend=Environment.setBackend,getBackend=Environment.getBackend,disposeVariables=Environment.disposeVariables,memory=Environment.memory,nextFrame=BrowserUtil.nextFrame;

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
    doc: doc,
    batchNormalization: batchNormalization,
    batchNormalization2d: batchNormalization2d,
    batchNormalization3d: batchNormalization3d,
    batchNormalization4d: batchNormalization4d,
    concat: concat,
    concat1d: concat1d,
    concat2d: concat2d,
    concat3d: concat3d,
    concat4d: concat4d,
    conv1d: conv1d,
    conv2d: conv2d,
    conv2dTranspose: conv2dTranspose,
    depthwiseConv2d: depthwiseConv2d,
    separableConv2d: separableConv2d,
    matMul: matMul,
    matrixTimesVector: matrixTimesVector,
    outerProduct: outerProduct,
    vectorTimesMatrix: vectorTimesMatrix,
    dot: dot,
    avgPool: avgPool,
    maxPool: maxPool,
    transpose: transpose,
    reverse: reverse,
    reverse1d: reverse1d,
    reverse2d: reverse2d,
    reverse3d: reverse3d,
    reverse4d: reverse4d,
    slice: slice,
    slice1d: slice1d,
    slice2d: slice2d,
    slice3d: slice3d,
    slice4d: slice4d,
    stridedSlice: stridedSlice,
    argMax: argMax,
    argMin: argMin,
    logSumExp: logSumExp,
    max: max,
    mean: mean,
    min: min,
    all: all,
    moments: moments,
    sum: sum,
    unsortedSegmentSum: unsortedSegmentSum,
    equal: equal,
    equalStrict: equalStrict,
    greater: greater,
    greaterStrict: greaterStrict,
    greaterEqual: greaterEqual,
    greaterEqualStrict: greaterEqualStrict,
    less: less,
    lessStrict: lessStrict,
    lessEqual: lessEqual,
    lessEqualStrict: lessEqualStrict,
    notEqual: notEqual,
    notEqualStrict: notEqualStrict,
    logicalNot: logicalNot,
    logicalAnd: logicalAnd,
    logicalOr: logicalOr,
    logicalXor: logicalXor,
    where: where,
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
    elu: elu,
    exp: exp,
    expm1: expm1,
    floor: floor,
    sign: sign,
    leakyRelu: leakyRelu,
    log: log,
    log1p: log1p,
    logSigmoid: logSigmoid,
    neg: neg,
    prelu: prelu,
    relu: relu,
    reciprocal: reciprocal,
    round: round,
    selu: selu,
    sigmoid: sigmoid,
    sin: sin,
    sinh: sinh,
    softplus: softplus,
    sqrt: sqrt,
    rsqrt: rsqrt,
    square: square,
    step: step,
    tan: tan,
    tanh: tanh$1,
    erf: erf,
    add: add,
    addStrict: addStrict,
    atan2: atan2,
    div: div,
    floorDiv: floorDiv,
    divStrict: divStrict,
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
    sub: sub,
    subStrict: subStrict,
    squaredDifference: squaredDifference,
    squaredDifferenceStrict: squaredDifferenceStrict,
    norm: norm,
    cast: cast,
    clone: clone,
    fromPixels: fromPixels,
    toPixels: toPixels,
    ones: ones,
    onesLike: onesLike,
    zeros: zeros,
    zerosLike: zerosLike,
    eye: eye,
    rand: rand,
    randomNormal: randomNormal,
    truncatedNormal: truncatedNormal,
    randomUniform: randomUniform,
    multinomial: multinomial,
    reshape: reshape,
    squeeze: squeeze,
    tile: tile,
    gather: gather,
    oneHot: oneHot,
    linspace: linspace,
    range: range,
    buffer: buffer,
    fill: fill,
    tensor: tensor,
    scalar: scalar,
    tensor1d: tensor1d,
    tensor2d: tensor2d,
    tensor3d: tensor3d,
    tensor4d: tensor4d,
    tensor5d: tensor5d,
    tensor6d: tensor6d,
    print: print,
    expandDims: expandDims,
    stack: stack,
    unstack: unstack,
    split: split,
    cumsum: cumsum,
    pad: pad,
    pad1d: pad1d,
    pad2d: pad2d,
    pad3d: pad3d,
    pad4d: pad4d,
    movingAverage: movingAverage,
    basicLSTMCell: basicLSTMCell,
    multiRNNCell: multiRNNCell,
    softmax: softmax,
    sigmoidCrossEntropyWithLogits: sigmoidCrossEntropyWithLogits,
    localResponseNormalization: localResponseNormalization,
    linalg: linalg,
    losses: losses,
    image: image,
    operation: operation,
    train: train,
    tidy: tidy,
    keep: keep,
    dispose: dispose,
    time: time,
    grad: grad,
    valueAndGrad: valueAndGrad,
    grads: grads,
    valueAndGrads: valueAndGrads,
    variableGrads: variableGrads,
    customGrad: customGrad
  });

  var FullFaceDescription = /** @class */ (function () {
      function FullFaceDescription(_detection, _landmarks, _descriptor) {
          this._detection = _detection;
          this._landmarks = _landmarks;
          this._descriptor = _descriptor;
      }
      Object.defineProperty(FullFaceDescription.prototype, "detection", {
          get: function () {
              return this._detection;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FullFaceDescription.prototype, "landmarks", {
          get: function () {
              return this._landmarks;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(FullFaceDescription.prototype, "descriptor", {
          get: function () {
              return this._descriptor;
          },
          enumerable: true,
          configurable: true
      });
      FullFaceDescription.prototype.forSize = function (width, height) {
          return new FullFaceDescription(this._detection.forSize(width, height), this._landmarks.forSize(width, height), this._descriptor);
      };
      return FullFaceDescription;
  }());

  function isTensor(tensor$$1, dim) {
      return tensor$$1 instanceof Tensor && tensor$$1.shape.length === dim;
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

  /**
   * Pads the smaller dimension of an image tensor with zeros, such that width === height.
   *
   * @param imgTensor The image tensor.
   * @param isCenterImage (optional, default: false) If true, add padding on both sides of the image, such that the image.
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

  var Point = /** @class */ (function () {
      function Point(x, y) {
          this.x = x;
          this.y = y;
      }
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

  var extendStatics$1 = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

  function __extends$1(d, b) {
      extendStatics$1(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

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
              if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [0, t.value];
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

  function isFloat(num) {
      return num % 1 !== 0;
  }
  function isEven(num) {
      return num % 2 === 0;
  }
  function round$1(num) {
      return Math.floor(num * 100) / 100;
  }
  function resolveInput(arg) {
      if (typeof arg === 'string') {
          return document.getElementById(arg);
      }
      return arg;
  }
  function isLoaded(media) {
      return (media instanceof HTMLImageElement && media.complete)
          || (media instanceof HTMLVideoElement && media.readyState >= 3);
  }
  function awaitMediaLoaded(media) {
      return new Promise(function (resolve, reject) {
          if (media instanceof HTMLCanvasElement || isLoaded(media)) {
              return resolve();
          }
          function onLoad(e) {
              if (!e.currentTarget)
                  return;
              e.currentTarget.removeEventListener('load', onLoad);
              e.currentTarget.removeEventListener('error', onError);
              resolve();
          }
          function onError(e) {
              if (!e.currentTarget)
                  return;
              e.currentTarget.removeEventListener('load', onLoad);
              e.currentTarget.removeEventListener('error', onError);
              reject();
          }
          media.addEventListener('load', onLoad);
          media.addEventListener('error', onError);
      });
  }
  function getContext2dOrThrow(canvas) {
      var ctx = canvas.getContext('2d');
      if (!ctx) {
          throw new Error('canvas 2d context is null');
      }
      return ctx;
  }
  function createCanvas(_a) {
      var width = _a.width, height = _a.height;
      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      return canvas;
  }
  function createCanvasFromMedia(media, dims) {
      if (!isLoaded(media)) {
          throw new Error('createCanvasFromMedia - media has not finished loading yet');
      }
      var _a = dims || getMediaDimensions(media), width = _a.width, height = _a.height;
      var canvas = createCanvas({ width: width, height: height });
      getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
      return canvas;
  }
  function getMediaDimensions(media) {
      if (media instanceof HTMLImageElement) {
          return { width: media.naturalWidth, height: media.naturalHeight };
      }
      if (media instanceof HTMLVideoElement) {
          return { width: media.videoWidth, height: media.videoHeight };
      }
      return media;
  }
  function bufferToImage(buf) {
      return new Promise(function (resolve, reject) {
          if (!(buf instanceof Blob)) {
              return reject('bufferToImage - expected buf to be of type: Blob');
          }
          var reader = new FileReader();
          reader.onload = function () {
              var img = new Image();
              img.onload = function () { return resolve(img); };
              img.onerror = reject;
              img.src = reader.result;
          };
          reader.onerror = reject;
          reader.readAsDataURL(buf);
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

  var NetInput = /** @class */ (function () {
      function NetInput(inputs, isBatchInput) {
          if (isBatchInput === void 0) { isBatchInput = false; }
          this._inputs = [];
          this._isManaged = false;
          this._isBatchInput = false;
          this._inputDimensions = [];
          this._paddings = [];
          if (isTensor4D(inputs)) {
              this._inputs = unstack(inputs);
          }
          if (Array.isArray(inputs)) {
              this._inputs = inputs.map(function (input) {
                  if (isTensor3D(input)) {
                      // TODO: make sure not to dispose original tensors passed in by the user
                      return clone(input);
                  }
                  if (isTensor4D(input)) {
                      var shape = input.shape;
                      var batchSize = shape[0];
                      if (batchSize !== 1) {
                          throw new Error("NetInput - tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                      }
                      return input.reshape(shape.slice(1));
                  }
                  return fromPixels(input instanceof HTMLCanvasElement ? input : createCanvasFromMedia(input));
              });
          }
          this._isBatchInput = this.batchSize > 1 || isBatchInput;
          this._inputDimensions = this._inputs.map(function (t) { return t.shape; });
      }
      Object.defineProperty(NetInput.prototype, "inputs", {
          get: function () {
              return this._inputs;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "isManaged", {
          get: function () {
              return this._isManaged;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "isBatchInput", {
          get: function () {
              return this._isBatchInput;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NetInput.prototype, "batchSize", {
          get: function () {
              return this._inputs.length;
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
      Object.defineProperty(NetInput.prototype, "paddings", {
          get: function () {
              return this._paddings;
          },
          enumerable: true,
          configurable: true
      });
      NetInput.prototype.getInputDimensions = function (batchIdx) {
          return this._inputDimensions[batchIdx];
      };
      NetInput.prototype.getInputHeight = function (batchIdx) {
          return this._inputDimensions[batchIdx][0];
      };
      NetInput.prototype.getInputWidth = function (batchIdx) {
          return this._inputDimensions[batchIdx][1];
      };
      NetInput.prototype.getPaddings = function (batchIdx) {
          return this._paddings[batchIdx];
      };
      NetInput.prototype.toBatchTensor = function (inputSize, isCenterInputs) {
          var _this = this;
          if (isCenterInputs === void 0) { isCenterInputs = true; }
          return tidy(function () {
              var inputTensors = _this._inputs.map(function (inputTensor) {
                  var _a = inputTensor.shape, originalHeight = _a[0], originalWidth = _a[1];
                  var imgTensor = inputTensor.expandDims().toFloat();
                  imgTensor = padToSquare(imgTensor, isCenterInputs);
                  var _b = imgTensor.shape.slice(1), heightAfterPadding = _b[0], widthAfterPadding = _b[1];
                  if (heightAfterPadding !== inputSize || widthAfterPadding !== inputSize) {
                      imgTensor = image.resizeBilinear(imgTensor, [inputSize, inputSize]);
                  }
                  _this._paddings.push(new Point(widthAfterPadding - originalWidth, heightAfterPadding - originalHeight));
                  return imgTensor;
              });
              var batchTensor = stack(inputTensors).as4D(_this.batchSize, inputSize, inputSize, 3);
              if (_this.isManaged) {
                  _this.dispose();
              }
              return batchTensor;
          });
      };
      /**
       *  By setting the isManaged flag, all newly created tensors will be automatically
       *  automatically disposed after the batch tensor has been created
       */
      NetInput.prototype.managed = function () {
          this._isManaged = true;
          return this;
      };
      NetInput.prototype.dispose = function () {
          this._inputs.forEach(function (t) { return t.dispose(); });
      };
      return NetInput;
  }());

  var Rect = /** @class */ (function () {
      function Rect(x, y, width, height) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
      }
      Rect.prototype.toSquare = function () {
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
          return new Rect(x, y, width, height);
      };
      Rect.prototype.pad = function (padX, padY) {
          var _a = this, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
          return new Rect(x - (padX / 2), y - (padY / 2), width + padX, height + padY);
      };
      Rect.prototype.floor = function () {
          return new Rect(Math.floor(this.x), Math.floor(this.y), Math.floor(this.width), Math.floor(this.height));
      };
      return Rect;
  }());

  function getDefaultDrawOptions() {
      return {
          color: 'blue',
          lineWidth: 2,
          fontSize: 20,
          fontStyle: 'Georgia'
      };
  }
  function drawBox(ctx, x, y, w, h, options) {
      var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
      ctx.strokeStyle = drawOptions.color;
      ctx.lineWidth = drawOptions.lineWidth;
      ctx.strokeRect(x, y, w, h);
  }
  function drawText(ctx, x, y, text, options) {
      var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
      var padText = 2 + drawOptions.lineWidth;
      ctx.fillStyle = drawOptions.color;
      ctx.font = drawOptions.fontSize + "px " + drawOptions.fontStyle;
      ctx.fillText(text, x + padText, y + padText + (drawOptions.fontSize * 0.6));
  }
  function drawDetection(canvasArg, detection, options) {
      var canvas = resolveInput(canvasArg);
      if (!(canvas instanceof HTMLCanvasElement)) {
          throw new Error('drawBox - expected canvas to be of type: HTMLCanvasElement');
      }
      var detectionArray = Array.isArray(detection)
          ? detection
          : [detection];
      detectionArray.forEach(function (det) {
          var _a = det.getBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
          var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
          var withScore = Object.assign({ withScore: true }, (options || {})).withScore;
          var ctx = getContext2dOrThrow(canvas);
          drawBox(ctx, x, y, width, height, drawOptions);
          if (withScore) {
              drawText(ctx, x, y, "" + round$1(det.getScore()), drawOptions);
          }
      });
  }
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
      var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
      var drawLines = Object.assign({ drawLines: false }, (options || {})).drawLines;
      var ctx = getContext2dOrThrow(canvas);
      var lineWidth = drawOptions.lineWidth, color = drawOptions.color;
      var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
      faceLandmarksArray.forEach(function (landmarks) {
          if (drawLines) {
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
          landmarks.getPositions().forEach(function (pt) { return ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth); });
      });
  }

  function euclideanDistance(arr1, arr2) {
      if (arr1.length !== arr2.length)
          throw new Error('euclideanDistance: arr1.length !== arr2.length');
      var desc1 = Array.from(arr1);
      var desc2 = Array.from(arr2);
      return Math.sqrt(desc1
          .map(function (val, i) { return val - desc2[i]; })
          .reduce(function (res, diff) { return res + Math.pow(diff, 2); }, 0));
  }

  var FaceDetection = /** @class */ (function () {
      function FaceDetection(score, relativeBox, imageDims) {
          var width = imageDims.width, height = imageDims.height;
          this._imageWidth = width;
          this._imageHeight = height;
          this._score = score;
          this._box = new Rect(relativeBox.x * width, relativeBox.y * height, relativeBox.width * width, relativeBox.height * height);
      }
      FaceDetection.prototype.getScore = function () {
          return this._score;
      };
      FaceDetection.prototype.getBox = function () {
          return this._box;
      };
      FaceDetection.prototype.getImageWidth = function () {
          return this._imageWidth;
      };
      FaceDetection.prototype.getImageHeight = function () {
          return this._imageHeight;
      };
      FaceDetection.prototype.getRelativeBox = function () {
          return new Rect(this._box.x / this._imageWidth, this._box.y / this._imageHeight, this._box.width / this._imageWidth, this._box.height / this._imageHeight);
      };
      FaceDetection.prototype.forSize = function (width, height) {
          return new FaceDetection(this._score, this.getRelativeBox(), { width: width, height: height });
      };
      return FaceDetection;
  }());

  function isMediaElement(input) {
      return input instanceof HTMLImageElement
          || input instanceof HTMLVideoElement
          || input instanceof HTMLCanvasElement;
  }

  /**
   * Validates the input to make sure, they are valid net inputs and awaits all media elements
   * to be finished loading.
   *
   * @param input The input, which can be a media element or an array of different media elements.
   * @param manageCreatedInput If a new NetInput instance is created from the inputs, this flag
   * determines, whether to set the NetInput as managed or not.
   * @returns A NetInput instance, which can be passed into one of the neural networks.
   */
  function toNetInput(inputs, manageCreatedInput) {
      if (manageCreatedInput === void 0) { manageCreatedInput = false; }
      return __awaiter$1(this, void 0, void 0, function () {
          var afterCreate, inputArgArray, getIdxHint, inputArray;
          return __generator$1(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (inputs instanceof NetInput) {
                          return [2 /*return*/, inputs];
                      }
                      afterCreate = function (netInput) { return manageCreatedInput
                          ? netInput.managed()
                          : netInput; };
                      if (isTensor4D(inputs)) {
                          return [2 /*return*/, afterCreate(new NetInput(inputs))];
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
                      return [2 /*return*/, afterCreate(new NetInput(inputArray, Array.isArray(inputs)))];
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
      return __awaiter$1(this, void 0, void 0, function () {
          var canvas, netInput, ctx, boxes;
          return __generator$1(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      canvas = input;
                      if (!!(input instanceof HTMLCanvasElement)) return [3 /*break*/, 3];
                      return [4 /*yield*/, toNetInput(input, true)];
                  case 1:
                      netInput = _a.sent();
                      if (netInput.batchSize > 1) {
                          if (netInput.isManaged) {
                              netInput.dispose();
                          }
                          throw new Error('extractFaces - batchSize > 1 not supported');
                      }
                      return [4 /*yield*/, imageTensorToCanvas(netInput.inputs[0])];
                  case 2:
                      canvas = _a.sent();
                      if (netInput.isManaged) {
                          netInput.dispose();
                      }
                      _a.label = 3;
                  case 3:
                      ctx = getContext2dOrThrow(canvas);
                      boxes = detections.map(function (det) { return det instanceof FaceDetection
                          ? det.forSize(canvas.width, canvas.height).getBox().floor()
                          : det; });
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
   * @param input The image that face detection has been performed on.
   * @param detections The face detection results or face bounding boxes for that image.
   * @returns Tensors of the corresponding image region for each detected face.
   */
  function extractFaceTensors(input, detections) {
      return __awaiter$1(this, void 0, void 0, function () {
          var netInput;
          return __generator$1(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4 /*yield*/, toNetInput(input, true)];
                  case 1:
                      netInput = _a.sent();
                      if (netInput.batchSize > 1) {
                          if (netInput.isManaged) {
                              netInput.dispose();
                          }
                          throw new Error('extractFaceTensors - batchSize > 1 not supported');
                      }
                      return [2 /*return*/, tidy(function () {
                              var imgTensor = netInput.inputs[0].expandDims().toFloat();
                              var _a = imgTensor.shape.slice(1), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                              var boxes = detections.map(function (det) { return det instanceof FaceDetection
                                  ? det.forSize(imgWidth, imgHeight).getBox().floor()
                                  : det; });
                              var faceTensors = boxes.map(function (_a) {
                                  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                                  return slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels]);
                              });
                              if (netInput.isManaged) {
                                  netInput.dispose();
                              }
                              return faceTensors;
                          })];
              }
          });
      });
  }

  var NeuralNetwork = /** @class */ (function () {
      function NeuralNetwork(_name) {
          this._name = _name;
          this._params = undefined;
          this._paramMappings = [];
      }
      Object.defineProperty(NeuralNetwork.prototype, "params", {
          get: function () {
              return this._params;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(NeuralNetwork.prototype, "paramMappings", {
          get: function () {
              return this._paramMappings;
          },
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
              _this.reassignParamFromPath(path, variable(tensor$$1));
          });
      };
      NeuralNetwork.prototype.freeze = function () {
          var _this = this;
          this.getTrainableParams().forEach(function (_a) {
              var path = _a.path, tensor$$1 = _a.tensor;
              _this.reassignParamFromPath(path, tensor(tensor$$1));
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
  function extractParams(weights) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      var _b = extractorsFactory(extractWeights, paramMappings), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
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

  function getModelUris(uri, defaultModelName) {
      var parts = (uri || '').split('/');
      var modelBaseUri = ((uri || '').endsWith('.json')
          ? parts.slice(0, parts.length - 1)
          : parts).filter(function (s) { return s; }).join('/');
      var defaultManifestFilename = defaultModelName + "-weights_manifest.json";
      var manifestUri = !uri || !modelBaseUri
          ? defaultManifestFilename
          : (uri.endsWith('.json')
              ? uri
              : modelBaseUri + "/" + defaultManifestFilename);
      return { manifestUri: manifestUri, modelBaseUri: modelBaseUri };
  }
  function loadWeightMap(uri, defaultModelName) {
      return __awaiter$1(this, void 0, void 0, function () {
          var _a, manifestUri, modelBaseUri, manifest;
          return __generator$1(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      _a = getModelUris(uri, defaultModelName), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                      return [4 /*yield*/, fetch(manifestUri)];
                  case 1: return [4 /*yield*/, (_b.sent()).json()];
                  case 2:
                      manifest = _b.sent();
                      return [2 /*return*/, io.loadWeights(manifest, modelBaseUri)];
              }
          });
      });
  }

  var DEFAULT_MODEL_NAME = 'face_detection_model';
  function extractorsFactory$1(weightMap, paramMappings) {
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
  function loadQuantizedParams(uri) {
      return __awaiter$1(this, void 0, void 0, function () {
          var weightMap, paramMappings, _a, extractMobilenetV1Params, extractPredictionLayerParams, extra_dim, params;
          return __generator$1(this, function (_b) {
              switch (_b.label) {
                  case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME)];
                  case 1:
                      weightMap = _b.sent();
                      paramMappings = [];
                      _a = extractorsFactory$1(weightMap, paramMappings), extractMobilenetV1Params = _a.extractMobilenetV1Params, extractPredictionLayerParams = _a.extractPredictionLayerParams;
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

  function nonMaxSuppression(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
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

  function convLayer(x, params, padding, withRelu) {
      if (padding === void 0) { padding = 'same'; }
      if (withRelu === void 0) { withRelu = false; }
      return tidy(function () {
          var out = add(conv2d(x, params.filters, [1, 1], padding), params.bias);
          return withRelu ? relu(out) : out;
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

  var FaceDetectionNet = /** @class */ (function (_super) {
      __extends$1(FaceDetectionNet, _super);
      function FaceDetectionNet() {
          return _super.call(this, 'FaceDetectionNet') || this;
      }
      FaceDetectionNet.prototype.forwardInput = function (input) {
          var params = this.params;
          if (!params) {
              throw new Error('FaceDetectionNet - load model before inference');
          }
          return tidy(function () {
              var batchTensor = input.toBatchTensor(512, false);
              var x = sub(mul(batchTensor, scalar(0.007843137718737125)), scalar(1));
              var features = mobileNetV1(x, params.mobilenetv1);
              var _a = predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
              return outputLayer(boxPredictions, classPredictions, params.output_layer);
          });
      };
      FaceDetectionNet.prototype.forward = function (input) {
          return __awaiter$1(this, void 0, void 0, function () {
              var _a;
              return __generator$1(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input, true)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      FaceDetectionNet.prototype.locateFaces = function (input, minConfidence, maxResults) {
          if (minConfidence === void 0) { minConfidence = 0.8; }
          if (maxResults === void 0) { maxResults = 100; }
          return __awaiter$1(this, void 0, void 0, function () {
              var netInput, _a, _boxes, _scores, boxes, scores, i, scoresData, _b, _c, iouThreshold, indices, paddedHeightRelative, paddedWidthRelative, results;
              return __generator$1(this, function (_d) {
                  switch (_d.label) {
                      case 0: return [4 /*yield*/, toNetInput(input, true)];
                      case 1:
                          netInput = _d.sent();
                          _a = this.forwardInput(netInput), _boxes = _a.boxes, _scores = _a.scores;
                          boxes = _boxes[0];
                          scores = _scores[0];
                          for (i = 1; i < _boxes.length; i++) {
                              _boxes[i].dispose();
                              _scores[i].dispose();
                          }
                          _c = (_b = Array).from;
                          return [4 /*yield*/, scores.data()];
                      case 2:
                          scoresData = _c.apply(_b, [_d.sent()]);
                          iouThreshold = 0.5;
                          indices = nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                          paddedHeightRelative = (netInput.getPaddings(0).y + netInput.getInputHeight(0)) / netInput.getInputHeight(0);
                          paddedWidthRelative = (netInput.getPaddings(0).x + netInput.getInputWidth(0)) / netInput.getInputWidth(0);
                          results = indices
                              .map(function (idx) {
                              var _a = [
                                  Math.max(0, boxes.get(idx, 0)),
                                  Math.min(1.0, boxes.get(idx, 2))
                              ].map(function (val) { return val * paddedHeightRelative; }), top = _a[0], bottom = _a[1];
                              var _b = [
                                  Math.max(0, boxes.get(idx, 1)),
                                  Math.min(1.0, boxes.get(idx, 3))
                              ].map(function (val) { return val * paddedWidthRelative; }), left = _b[0], right = _b[1];
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
      FaceDetectionNet.prototype.loadQuantizedParams = function (uri) {
          return loadQuantizedParams(uri);
      };
      FaceDetectionNet.prototype.extractParams = function (weights) {
          return extractParams(weights);
      };
      return FaceDetectionNet;
  }(NeuralNetwork));

  function faceDetectionNet(weights) {
      var net = new FaceDetectionNet();
      net.extractWeights(weights);
      return net;
  }

  function extractParams$1(weights) {
      var paramMappings = [];
      var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
      function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
          var filters = tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
          var bias = tensor1d(extractWeights(channelsOut));
          paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/bias" });
          return { filters: filters, bias: bias };
      }
      function extractFcParams(channelsIn, channelsOut, mappedPrefix) {
          var fc_weights = tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
          var fc_bias = tensor1d(extractWeights(channelsOut));
          paramMappings.push({ paramPath: mappedPrefix + "/weights" }, { paramPath: mappedPrefix + "/bias" });
          return {
              weights: fc_weights,
              bias: fc_bias
          };
      }
      var conv0 = extractConvParams(3, 32, 3, 'conv0');
      var conv1 = extractConvParams(32, 64, 3, 'conv1');
      var conv2 = extractConvParams(64, 64, 3, 'conv2');
      var conv3 = extractConvParams(64, 64, 3, 'conv3');
      var conv4 = extractConvParams(64, 64, 3, 'conv4');
      var conv5 = extractConvParams(64, 128, 3, 'conv5');
      var conv6 = extractConvParams(128, 128, 3, 'conv6');
      var conv7 = extractConvParams(128, 256, 3, 'conv7');
      var fc0 = extractFcParams(6400, 1024, 'fc0');
      var fc1 = extractFcParams(1024, 136, 'fc1');
      if (getRemainingWeights().length !== 0) {
          throw new Error("weights remaing after extract: " + getRemainingWeights().length);
      }
      return {
          paramMappings: paramMappings,
          params: {
              conv0: conv0,
              conv1: conv1,
              conv2: conv2,
              conv3: conv3,
              conv4: conv4,
              conv5: conv5,
              conv6: conv6,
              conv7: conv7,
              fc0: fc0,
              fc1: fc1
          }
      };
  }

  function getCenterPoint(pts) {
      return pts.reduce(function (sum, pt) { return sum.add(pt); }, new Point(0, 0))
          .div(new Point(pts.length, pts.length));
  }

  // face alignment constants
  var relX = 0.5;
  var relY = 0.43;
  var relScale = 0.45;
  var FaceLandmarks = /** @class */ (function () {
      function FaceLandmarks(relativeFaceLandmarkPositions, imageDims, shift) {
          if (shift === void 0) { shift = new Point(0, 0); }
          var width = imageDims.width, height = imageDims.height;
          this._imageWidth = width;
          this._imageHeight = height;
          this._shift = shift;
          this._faceLandmarks = relativeFaceLandmarkPositions.map(function (pt) { return pt.mul(new Point(width, height)).add(shift); });
      }
      FaceLandmarks.prototype.getShift = function () {
          return new Point(this._shift.x, this._shift.y);
      };
      FaceLandmarks.prototype.getImageWidth = function () {
          return this._imageWidth;
      };
      FaceLandmarks.prototype.getImageHeight = function () {
          return this._imageHeight;
      };
      FaceLandmarks.prototype.getPositions = function () {
          return this._faceLandmarks;
      };
      FaceLandmarks.prototype.getRelativePositions = function () {
          var _this = this;
          return this._faceLandmarks.map(function (pt) { return pt.sub(_this._shift).div(new Point(_this._imageWidth, _this._imageHeight)); });
      };
      FaceLandmarks.prototype.getJawOutline = function () {
          return this._faceLandmarks.slice(0, 17);
      };
      FaceLandmarks.prototype.getLeftEyeBrow = function () {
          return this._faceLandmarks.slice(17, 22);
      };
      FaceLandmarks.prototype.getRightEyeBrow = function () {
          return this._faceLandmarks.slice(22, 27);
      };
      FaceLandmarks.prototype.getNose = function () {
          return this._faceLandmarks.slice(27, 36);
      };
      FaceLandmarks.prototype.getLeftEye = function () {
          return this._faceLandmarks.slice(36, 42);
      };
      FaceLandmarks.prototype.getRightEye = function () {
          return this._faceLandmarks.slice(42, 48);
      };
      FaceLandmarks.prototype.getMouth = function () {
          return this._faceLandmarks.slice(48, 68);
      };
      FaceLandmarks.prototype.forSize = function (width, height) {
          return new FaceLandmarks(this.getRelativePositions(), { width: width, height: height });
      };
      FaceLandmarks.prototype.shift = function (x, y) {
          return new FaceLandmarks(this.getRelativePositions(), { width: this._imageWidth, height: this._imageHeight }, new Point(x, y));
      };
      FaceLandmarks.prototype.shiftByPoint = function (pt) {
          return this.shift(pt.x, pt.y);
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
                  ? detection.getBox().floor()
                  : detection;
              return this.shift(box.x, box.y).align();
          }
          var centers = [
              this.getLeftEye(),
              this.getRightEye(),
              this.getMouth()
          ].map(getCenterPoint);
          var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
          var distToMouth = function (pt) { return mouthCenter.sub(pt).magnitude(); };
          var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
          var size = Math.floor(eyeToMouthDist / relScale);
          var refPoint = getCenterPoint(centers);
          // TODO: pad in case rectangle is out of image bounds
          var x = Math.floor(Math.max(0, refPoint.x - (relX * size)));
          var y = Math.floor(Math.max(0, refPoint.y - (relY * size)));
          return new Rect(x, y, size, size);
      };
      return FaceLandmarks;
  }());

  function fullyConnectedLayer(x, params) {
      return tidy(function () {
          return add(matMul(x, params.weights), params.bias);
      });
  }

  var DEFAULT_MODEL_NAME$1 = 'face_landmark_68_model';
  function extractorsFactory$2(weightMap, paramMappings) {
      var extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings);
      function extractConvParams(prefix, mappedPrefix) {
          var filters = extractWeightEntry(prefix + "/kernel", 4, mappedPrefix + "/filters");
          var bias = extractWeightEntry(prefix + "/bias", 1, mappedPrefix + "/bias");
          return { filters: filters, bias: bias };
      }
      function extractFcParams(prefix, mappedPrefix) {
          var weights = extractWeightEntry(prefix + "/kernel", 2, mappedPrefix + "/weights");
          var bias = extractWeightEntry(prefix + "/bias", 1, mappedPrefix + "/bias");
          return { weights: weights, bias: bias };
      }
      return {
          extractConvParams: extractConvParams,
          extractFcParams: extractFcParams
      };
  }
  function loadQuantizedParams$1(uri) {
      return __awaiter$1(this, void 0, void 0, function () {
          var weightMap, paramMappings, _a, extractConvParams, extractFcParams, params;
          return __generator$1(this, function (_b) {
              switch (_b.label) {
                  case 0: return [4 /*yield*/, loadWeightMap(uri, DEFAULT_MODEL_NAME$1)];
                  case 1:
                      weightMap = _b.sent();
                      paramMappings = [];
                      _a = extractorsFactory$2(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractFcParams = _a.extractFcParams;
                      params = {
                          conv0: extractConvParams('conv2d_0', 'conv0'),
                          conv1: extractConvParams('conv2d_1', 'conv1'),
                          conv2: extractConvParams('conv2d_2', 'conv2'),
                          conv3: extractConvParams('conv2d_3', 'conv3'),
                          conv4: extractConvParams('conv2d_4', 'conv4'),
                          conv5: extractConvParams('conv2d_5', 'conv5'),
                          conv6: extractConvParams('conv2d_6', 'conv6'),
                          conv7: extractConvParams('conv2d_7', 'conv7'),
                          fc0: extractFcParams('dense', 'fc0'),
                          fc1: extractFcParams('logits', 'fc1')
                      };
                      disposeUnusedWeightTensors(weightMap, paramMappings);
                      return [2 /*return*/, { params: params, paramMappings: paramMappings }];
              }
          });
      });
  }

  function conv(x, params) {
      return convLayer(x, params, 'valid', true);
  }
  function maxPool$1(x, strides) {
      if (strides === void 0) { strides = [2, 2]; }
      return maxPool(x, [2, 2], strides, 'valid');
  }
  var FaceLandmarkNet = /** @class */ (function (_super) {
      __extends$1(FaceLandmarkNet, _super);
      function FaceLandmarkNet() {
          return _super.call(this, 'FaceLandmarkNet') || this;
      }
      FaceLandmarkNet.prototype.forwardInput = function (input) {
          var params = this.params;
          if (!params) {
              throw new Error('FaceLandmarkNet - load model before inference');
          }
          return tidy(function () {
              var batchTensor = input.toBatchTensor(128, true);
              var out = conv(batchTensor, params.conv0);
              out = maxPool$1(out);
              out = conv(out, params.conv1);
              out = conv(out, params.conv2);
              out = maxPool$1(out);
              out = conv(out, params.conv3);
              out = conv(out, params.conv4);
              out = maxPool$1(out);
              out = conv(out, params.conv5);
              out = conv(out, params.conv6);
              out = maxPool$1(out, [1, 1]);
              out = conv(out, params.conv7);
              var fc0 = relu(fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0));
              var fc1 = fullyConnectedLayer(fc0, params.fc1);
              var createInterleavedTensor = function (fillX, fillY) {
                  return stack([
                      fill([68], fillX),
                      fill([68], fillY)
                  ], 1).as2D(1, 136).as1D();
              };
              /* shift coordinates back, to undo centered padding
                x = ((x * widthAfterPadding) - shiftX) / width
                y = ((y * heightAfterPadding) - shiftY) / height
              */
              var landmarkTensors = fc1
                  .mul(stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                  return createInterleavedTensor(input.getPaddings(batchIdx).x + input.getInputWidth(batchIdx), input.getPaddings(batchIdx).y + input.getInputHeight(batchIdx));
              })))
                  .sub(stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                  return createInterleavedTensor(Math.floor(input.getPaddings(batchIdx).x / 2), Math.floor(input.getPaddings(batchIdx).y / 2));
              })))
                  .div(stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                  return createInterleavedTensor(input.getInputWidth(batchIdx), input.getInputHeight(batchIdx));
              })));
              return landmarkTensors;
          });
      };
      FaceLandmarkNet.prototype.forward = function (input) {
          return __awaiter$1(this, void 0, void 0, function () {
              var _a;
              return __generator$1(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this.forwardInput;
                          return [4 /*yield*/, toNetInput(input, true)];
                      case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                  }
              });
          });
      };
      FaceLandmarkNet.prototype.detectLandmarks = function (input) {
          return __awaiter$1(this, void 0, void 0, function () {
              var _this = this;
              var netInput, landmarkTensors, landmarksForBatch;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 /*yield*/, toNetInput(input, true)];
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
                                              return [2 /*return*/, new FaceLandmarks(Array(68).fill(0).map(function (_, i) { return new Point(xCoords[i], yCoords[i]); }), {
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
      FaceLandmarkNet.prototype.loadQuantizedParams = function (uri) {
          return loadQuantizedParams$1(uri);
      };
      FaceLandmarkNet.prototype.extractParams = function (weights) {
          return extractParams$1(weights);
      };
      return FaceLandmarkNet;
  }(NeuralNetwork));

  function faceLandmarkNet(weights) {
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
  function conv$1(x, params) {
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

  function normalize(x) {
      return tidy(function () {
          var avg_r = fill(x.shape.slice(0, 3).concat([1]), 122.782);
          var avg_g = fill(x.shape.slice(0, 3).concat([1]), 117.001);
          var avg_b = fill(x.shape.slice(0, 3).concat([1]), 104.298);
          var avg_rgb = concat([avg_r, avg_g, avg_b], 3);
          return div(sub(x, avg_rgb), scalar(256));
      });
  }

  function residual(x, params) {
      var out = conv$1(x, params.conv1);
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
              var batchTensor = input.toBatchTensor(150, true);
              var normalized = normalize(batchTensor);
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
                          return [4 /*yield*/, toNetInput(input, true)];
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
                      case 0: return [4 /*yield*/, toNetInput(input, true)];
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

  function faceRecognitionNet(weights) {
      var net = new FaceRecognitionNet();
      net.extractWeights(weights);
      return net;
  }

  function allFacesFactory(detectionNet, landmarkNet, recognitionNet) {
      return function (input, minConfidence, useBatchProcessing) {
          if (useBatchProcessing === void 0) { useBatchProcessing = false; }
          return __awaiter$1(this, void 0, void 0, function () {
              var detections, faceTensors, faceLandmarksByFace, _a, alignedFaceBoxes, alignedFaceTensors, descriptors, _b;
              return __generator$1(this, function (_c) {
                  switch (_c.label) {
                      case 0: return [4 /*yield*/, detectionNet.locateFaces(input, minConfidence)];
                      case 1:
                          detections = _c.sent();
                          return [4 /*yield*/, extractFaceTensors(input, detections)];
                      case 2:
                          faceTensors = _c.sent();
                          if (!useBatchProcessing) return [3 /*break*/, 4];
                          return [4 /*yield*/, landmarkNet.detectLandmarks(faceTensors)];
                      case 3:
                          _a = _c.sent();
                          return [3 /*break*/, 6];
                      case 4: return [4 /*yield*/, Promise.all(faceTensors.map(function (faceTensor) { return landmarkNet.detectLandmarks(faceTensor); }))];
                      case 5:
                          _a = _c.sent();
                          _c.label = 6;
                      case 6:
                          faceLandmarksByFace = _a;
                          faceTensors.forEach(function (t) { return t.dispose(); });
                          alignedFaceBoxes = faceLandmarksByFace.map(function (landmarks, i) { return landmarks.align(detections[i].getBox()); });
                          return [4 /*yield*/, extractFaceTensors(input, alignedFaceBoxes)];
                      case 7:
                          alignedFaceTensors = _c.sent();
                          if (!useBatchProcessing) return [3 /*break*/, 9];
                          return [4 /*yield*/, recognitionNet.computeFaceDescriptor(alignedFaceTensors)];
                      case 8:
                          _b = _c.sent();
                          return [3 /*break*/, 11];
                      case 9: return [4 /*yield*/, Promise.all(alignedFaceTensors.map(function (faceTensor) { return recognitionNet.computeFaceDescriptor(faceTensor); }))];
                      case 10:
                          _b = _c.sent();
                          _c.label = 11;
                      case 11:
                          descriptors = _b;
                          alignedFaceTensors.forEach(function (t) { return t.dispose(); });
                          return [2 /*return*/, detections.map(function (detection, i) {
                                  return new FullFaceDescription(detection, faceLandmarksByFace[i].shiftByPoint(detection.getBox()), descriptors[i]);
                              })];
                  }
              });
          });
      };
  }

  var detectionNet = new FaceDetectionNet();
  var landmarkNet = new FaceLandmarkNet();
  var recognitionNet = new FaceRecognitionNet();
  function loadFaceDetectionModel(url) {
      return detectionNet.load(url);
  }
  function loadFaceLandmarkModel(url) {
      return landmarkNet.load(url);
  }
  function loadFaceRecognitionModel(url) {
      return recognitionNet.load(url);
  }
  function loadModels(url) {
      return Promise.all([
          loadFaceDetectionModel(url),
          loadFaceLandmarkModel(url),
          loadFaceRecognitionModel(url)
      ]);
  }
  function locateFaces(input, minConfidence, maxResults) {
      return detectionNet.locateFaces(input, minConfidence, maxResults);
  }
  function detectLandmarks(input) {
      return landmarkNet.detectLandmarks(input);
  }
  function computeFaceDescriptor(input) {
      return recognitionNet.computeFaceDescriptor(input);
  }
  var allFaces = allFacesFactory(detectionNet, landmarkNet, recognitionNet);

  exports.tf = tfCore_esm;
  exports.FullFaceDescription = FullFaceDescription;
  exports.NetInput = NetInput;
  exports.Point = Point;
  exports.Rect = Rect;
  exports.getDefaultDrawOptions = getDefaultDrawOptions;
  exports.drawBox = drawBox;
  exports.drawText = drawText;
  exports.drawDetection = drawDetection;
  exports.drawLandmarks = drawLandmarks;
  exports.euclideanDistance = euclideanDistance;
  exports.extractFaces = extractFaces;
  exports.extractFaceTensors = extractFaceTensors;
  exports.faceDetectionNet = faceDetectionNet;
  exports.FaceDetectionNet = FaceDetectionNet;
  exports.FaceDetection = FaceDetection;
  exports.faceLandmarkNet = faceLandmarkNet;
  exports.FaceLandmarkNet = FaceLandmarkNet;
  exports.FaceLandmarks = FaceLandmarks;
  exports.faceRecognitionNet = faceRecognitionNet;
  exports.FaceRecognitionNet = FaceRecognitionNet;
  exports.detectionNet = detectionNet;
  exports.landmarkNet = landmarkNet;
  exports.recognitionNet = recognitionNet;
  exports.loadFaceDetectionModel = loadFaceDetectionModel;
  exports.loadFaceLandmarkModel = loadFaceLandmarkModel;
  exports.loadFaceRecognitionModel = loadFaceRecognitionModel;
  exports.loadModels = loadModels;
  exports.locateFaces = locateFaces;
  exports.detectLandmarks = detectLandmarks;
  exports.computeFaceDescriptor = computeFaceDescriptor;
  exports.allFaces = allFaces;
  exports.padToSquare = padToSquare;
  exports.toNetInput = toNetInput;
  exports.isFloat = isFloat;
  exports.isEven = isEven;
  exports.round = round$1;
  exports.resolveInput = resolveInput;
  exports.isLoaded = isLoaded;
  exports.awaitMediaLoaded = awaitMediaLoaded;
  exports.getContext2dOrThrow = getContext2dOrThrow;
  exports.createCanvas = createCanvas;
  exports.createCanvasFromMedia = createCanvasFromMedia;
  exports.getMediaDimensions = getMediaDimensions;
  exports.bufferToImage = bufferToImage;
  exports.imageTensorToCanvas = imageTensorToCanvas;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=face-api.js.map

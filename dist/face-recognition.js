(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('crypto')) :
    typeof define === 'function' && define.amd ? define(['exports', 'crypto'], factory) :
    (factory((global.facerecognition = global.facerecognition || {}),global.crypto));
}(this, (function (exports,crypto) { 'use strict';

    crypto = crypto && crypto.hasOwnProperty('default') ? crypto['default'] : crypto;

    function isMobile() {
        var a = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
            .test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                .test(a.substr(0, 4));
    }

    function doc(info) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
    }

    function assertArgumentIsTensor(x, argName, functionName) {
        assert(x instanceof Tensor, "Argument '" + argName + "' passed to '" + functionName + "' must be a Tensor, " +
            ("but got " + typeof x + "."));
    }
    function assertArgumentsAreTensors(args, functionName) {
        var _loop_1 = function (argName) {
            var arg = args[argName];
            if (Array.isArray(arg)) {
                arg.forEach(function (t, i) {
                    assertArgumentIsTensor(t, argName + "[" + i + "]", functionName);
                });
            }
            else {
                assertArgumentIsTensor(arg, argName, functionName);
            }
        };
        for (var argName in args) {
            _loop_1(argName);
        }
    }
    function shuffle(array) {
        var counter = array.length;
        var temp = 0;
        var index = 0;
        while (counter > 0) {
            index = (Math.random() * counter) | 0;
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    }
    function clamp(min, x, max) {
        return Math.max(min, Math.min(x, max));
    }
    function randUniform(a, b) {
        return Math.random() * (b - a) + a;
    }
    function distSquared(a, b) {
        var result = 0;
        for (var i = 0; i < a.length; i++) {
            var diff = Number(a[i]) - Number(b[i]);
            result += diff * diff;
        }
        return result;
    }
    function assert(expr, msg) {
        if (!expr) {
            throw new Error(msg);
        }
    }
    function assertShapesMatch(shapeA, shapeB, errorMessagePrefix) {
        if (errorMessagePrefix === void 0) { errorMessagePrefix = ''; }
        assert(arraysEqual(shapeA, shapeB), errorMessagePrefix + (" Shapes " + shapeA + " and " + shapeB + " must match"));
    }
    function assertTypesMatch(a, b) {
        assert(a.dtype === b.dtype, " The dtypes of the first(" + a.dtype + ") and" +
            (" second(" + b.dtype + ") input must match"));
    }
    function flatten(arr, ret) {
        if (ret === void 0) { ret = []; }
        if (Array.isArray(arr)) {
            for (var i = 0; i < arr.length; ++i) {
                flatten(arr[i], ret);
            }
        }
        else {
            ret.push(arr);
        }
        return ret;
    }
    function inferShape(val) {
        if (isTypedArray(val)) {
            return [val.length];
        }
        if (!Array.isArray(val)) {
            return [];
        }
        var shape = [];
        while (val instanceof Array) {
            shape.push(val.length);
            val = val[0];
        }
        return shape;
    }
    function sizeFromShape(shape) {
        if (shape.length === 0) {
            return 1;
        }
        var size = shape[0];
        for (var i = 1; i < shape.length; i++) {
            size *= shape[i];
        }
        return size;
    }
    function isScalarShape(shape) {
        return shape.length === 0;
    }
    function arraysEqual(n1, n2) {
        if (n1.length !== n2.length) {
            return false;
        }
        for (var i = 0; i < n1.length; i++) {
            if (n1[i] !== n2[i]) {
                return false;
            }
        }
        return true;
    }
    function isInt(a) {
        return a % 1 === 0;
    }
    function tanh(x) {
        if (Math.tanh != null) {
            return Math.tanh(x);
        }
        if (x === Infinity) {
            return 1;
        }
        else if (x === -Infinity) {
            return -1;
        }
        else {
            var e2x = Math.exp(2 * x);
            return (e2x - 1) / (e2x + 1);
        }
    }
    function sizeToSquarishShape(size) {
        for (var a = Math.floor(Math.sqrt(size)); a > 1; --a) {
            if (size % a === 0) {
                return [a, size / a];
            }
        }
        return [1, size];
    }
    function createShuffledIndices(n) {
        var shuffledIndices = new Uint32Array(n);
        for (var i = 0; i < n; ++i) {
            shuffledIndices[i] = i;
        }
        shuffle(shuffledIndices);
        return shuffledIndices;
    }
    function rightPad(a, size) {
        if (size <= a.length) {
            return a;
        }
        return a + ' '.repeat(size - a.length);
    }
    function repeatedTry(checkFn, delayFn, maxCounter) {
        if (delayFn === void 0) { delayFn = function (counter) { return 0; }; }
        return new Promise(function (resolve, reject) {
            var tryCount = 0;
            var tryFn = function () {
                if (checkFn()) {
                    resolve();
                    return;
                }
                tryCount++;
                var nextBackoff = delayFn(tryCount);
                if (maxCounter != null && tryCount >= maxCounter) {
                    reject();
                    return;
                }
                setTimeout(tryFn, nextBackoff);
            };
            setTimeout(tryFn, 0);
        });
    }
    function getQueryParams(queryString) {
        var params = {};
        queryString.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (s) {
            var t = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                t[_i - 1] = arguments[_i];
            }
            decodeParam(params, t[0], t[1]);
            return t.join('=');
        });
        return params;
    }
    function decodeParam(params, name, value) {
        params[decodeURIComponent(name)] = decodeURIComponent(value || '');
    }
    function inferFromImplicitShape(shape, size) {
        var shapeProd = 1;
        var implicitIdx = -1;
        for (var i = 0; i < shape.length; ++i) {
            if (shape[i] > 0) {
                shapeProd *= shape[i];
            }
            else if (shape[i] === -1) {
                if (implicitIdx !== -1) {
                    throw Error("Shapes can only have 1 implicit size. " +
                        ("Found - 1 at dim " + implicitIdx + " and dim " + i));
                }
                implicitIdx = i;
            }
            else if (shape[i] <= 0) {
                throw Error("Shapes can not be <= 0. Found " + shape[i] + " at dim " + i);
            }
        }
        if (implicitIdx === -1) {
            if (size > 0 && size !== shapeProd) {
                throw Error("Size(" + size + ") must match the product of shape " + shape);
            }
            return shape;
        }
        if (size % shapeProd !== 0) {
            throw Error("The implicit shape can't be a fractional number. " +
                ("Got " + size + " / " + shapeProd));
        }
        var newShape = shape.slice();
        newShape[implicitIdx] = size / shapeProd;
        return newShape;
    }
    function squeezeShape(shape, axis) {
        var newShape = [];
        var keptDims = [];
        var j = 0;
        for (var i = 0; i < shape.length; ++i) {
            if (axis != null) {
                if (axis[j] === i && shape[i] > 1) {
                    throw new Error("Can't squeeze axis " + i + " since its dim '" + shape[i] + "' is not 1");
                }
                if ((axis[j] == null || axis[j] > i) && shape[i] === 1) {
                    newShape.push(shape[i]);
                    keptDims.push(i);
                }
                if (axis[j] <= i) {
                    j++;
                }
            }
            if (shape[i] > 1) {
                newShape.push(shape[i]);
                keptDims.push(i);
            }
        }
        return { newShape: newShape, keptDims: keptDims };
    }
    function getTypedArrayFromDType(dtype, size) {
        var values = null;
        if (dtype == null || dtype === 'float32') {
            values = new Float32Array(size);
        }
        else if (dtype === 'int32') {
            values = new Int32Array(size);
        }
        else if (dtype === 'bool') {
            values = new Uint8Array(size);
        }
        else {
            throw new Error("Unknown data type " + dtype);
        }
        return values;
    }
    function isTensorInList(tensor, tensorList) {
        for (var i = 0; i < tensorList.length; i++) {
            if (tensorList[i].id === tensor.id) {
                return true;
            }
        }
        return false;
    }
    function checkForNaN(vals, dtype, name) {
        if (dtype !== 'float32') {
            return;
        }
        for (var i = 0; i < vals.length; i++) {
            if (isNaN(vals[i])) {
                throw Error("The result of the '" + name + "' has NaNs.");
            }
        }
    }
    function flattenNameArrayMap(nameArrayMap, keys) {
        var xs = [];
        if (nameArrayMap instanceof Tensor) {
            xs.push(nameArrayMap);
        }
        else {
            var xMap = nameArrayMap;
            for (var i = 0; i < keys.length; i++) {
                xs.push(xMap[keys[i]]);
            }
        }
        return xs;
    }
    function unflattenToNameArrayMap(keys, flatArrays) {
        if (keys.length !== flatArrays.length) {
            throw new Error("Cannot unflatten Tensor[], keys and arrays are not of same length.");
        }
        var result = {};
        for (var i = 0; i < keys.length; i++) {
            result[keys[i]] = flatArrays[i];
        }
        return result;
    }
    function hasEncodingLoss(oldType, newType) {
        if (newType === 'float32') {
            return false;
        }
        if (newType === 'int32' && oldType !== 'float32') {
            return false;
        }
        if (newType === 'bool' && oldType === 'bool') {
            return false;
        }
        return true;
    }
    function copyTypedArray(array, dtype) {
        if (dtype == null || dtype === 'float32') {
            return new Float32Array(array);
        }
        else if (dtype === 'int32') {
            return new Int32Array(array);
        }
        else if (dtype === 'bool') {
            var bool = new Uint8Array(array.length);
            for (var i = 0; i < bool.length; ++i) {
                if (Math.round(array[i]) !== 0) {
                    bool[i] = 1;
                }
            }
            return bool;
        }
        else {
            throw new Error("Unknown data type " + dtype);
        }
    }
    function isTypedArray(a) {
        return a instanceof Float32Array || a instanceof Int32Array ||
            a instanceof Uint8Array;
    }
    function bytesPerElement(dtype) {
        if (dtype === 'float32' || dtype === 'int32') {
            return 4;
        }
        else if (dtype === 'bool') {
            return 1;
        }
        else {
            throw new Error("Unknown dtype " + dtype);
        }
    }
    function isFunction(f) {
        return !!(f && f.constructor && f.call && f.apply);
    }
    function extractTensorsFromContainer(result) {
        return extractTensorsFromAny(result);
    }
    function extractTensorsFromAny(result) {
        if (result == null) {
            return [];
        }
        if (result instanceof Tensor) {
            return [result];
        }
        var list = [];
        var resultObj = result;
        if (!isIterable(resultObj)) {
            return [];
        }
        for (var k in resultObj) {
            var sublist = flatten(resultObj[k]).filter(function (x) { return x instanceof Tensor; });
            list.push.apply(list, sublist);
        }
        return list;
    }
    function isIterable(obj) {
        return Array.isArray(obj) || typeof obj === 'object';
    }

    var util = /*#__PURE__*/Object.freeze({
        assertArgumentsAreTensors: assertArgumentsAreTensors,
        shuffle: shuffle,
        clamp: clamp,
        randUniform: randUniform,
        distSquared: distSquared,
        assert: assert,
        assertShapesMatch: assertShapesMatch,
        assertTypesMatch: assertTypesMatch,
        flatten: flatten,
        inferShape: inferShape,
        sizeFromShape: sizeFromShape,
        isScalarShape: isScalarShape,
        arraysEqual: arraysEqual,
        isInt: isInt,
        tanh: tanh,
        sizeToSquarishShape: sizeToSquarishShape,
        createShuffledIndices: createShuffledIndices,
        rightPad: rightPad,
        repeatedTry: repeatedTry,
        getQueryParams: getQueryParams,
        inferFromImplicitShape: inferFromImplicitShape,
        squeezeShape: squeezeShape,
        getTypedArrayFromDType: getTypedArrayFromDType,
        isTensorInList: isTensorInList,
        checkForNaN: checkForNaN,
        flattenNameArrayMap: flattenNameArrayMap,
        unflattenToNameArrayMap: unflattenToNameArrayMap,
        hasEncodingLoss: hasEncodingLoss,
        copyTypedArray: copyTypedArray,
        isTypedArray: isTypedArray,
        bytesPerElement: bytesPerElement,
        isFunction: isFunction,
        extractTensorsFromContainer: extractTensorsFromContainer,
        extractTensorsFromAny: extractTensorsFromAny
    });

    var FORMAT_LIMIT_NUM_VALS = 20;
    var FORMAT_NUM_FIRST_LAST_VALS = 3;
    var FORMAT_NUM_SIG_DIGITS = 7;
    function tensorToString(t, verbose) {
        var vals = t.dataSync();
        var padPerCol = computeMaxSizePerColumn(t);
        var valsLines = subTensorToString(vals, t.shape, t.strides, padPerCol);
        var lines = ['Tensor'];
        if (verbose) {
            lines.push("  dtype: " + t.dtype);
            lines.push("  rank: " + t.rank);
            lines.push("  shape: [" + t.shape + "]");
            lines.push("  values:");
        }
        lines.push(valsLines.map(function (l) { return '    ' + l; }).join('\n'));
        return lines.join('\n');
    }
    function computeMaxSizePerColumn(t) {
        var vals = t.dataSync();
        var n = t.size;
        var numCols = t.strides[t.strides.length - 1];
        var padPerCol = new Array(numCols).fill(0);
        if (t.rank > 1) {
            for (var row = 0; row < n / numCols; row++) {
                var offset = row * numCols;
                for (var j = 0; j < numCols; j++) {
                    padPerCol[j] =
                        Math.max(padPerCol[j], valToString(vals[offset + j], 0).length);
                }
            }
        }
        return padPerCol;
    }
    function valToString(val, pad) {
        return rightPad(parseFloat(val.toFixed(FORMAT_NUM_SIG_DIGITS)).toString(), pad);
    }
    function subTensorToString(vals, shape, strides, padPerCol, isLast) {
        if (isLast === void 0) { isLast = true; }
        var size = shape[0];
        var rank = shape.length;
        if (rank === 0) {
            return [vals[0].toString()];
        }
        if (rank === 1) {
            if (size > FORMAT_LIMIT_NUM_VALS) {
                var firstVals = Array.from(vals.subarray(0, FORMAT_NUM_FIRST_LAST_VALS));
                var lastVals = Array.from(vals.subarray(size - FORMAT_NUM_FIRST_LAST_VALS, size));
                return [
                    '[' + firstVals.map(function (x, i) { return valToString(x, padPerCol[i]); }).join(', ') +
                        ', ..., ' +
                        lastVals
                            .map(function (x, i) { return valToString(x, padPerCol[size - FORMAT_NUM_FIRST_LAST_VALS + i]); })
                            .join(', ') +
                        ']'
                ];
            }
            return [
                '[' +
                    Array.from(vals).map(function (x, i) { return valToString(x, padPerCol[i]); }).join(', ') +
                    ']'
            ];
        }
        var subshape = shape.slice(1);
        var substrides = strides.slice(1);
        var stride = strides[0];
        var lines = [];
        if (size > FORMAT_LIMIT_NUM_VALS) {
            for (var i = 0; i < FORMAT_NUM_FIRST_LAST_VALS; i++) {
                var start = i * stride;
                var end = start + stride;
                lines.push.apply(lines, subTensorToString(vals.subarray(start, end), subshape, substrides, padPerCol, false));
            }
            lines.push('...');
            for (var i = size - FORMAT_NUM_FIRST_LAST_VALS; i < size; i++) {
                var start = i * stride;
                var end = start + stride;
                lines.push.apply(lines, subTensorToString(vals.subarray(start, end), subshape, substrides, padPerCol, i === size - 1));
            }
        }
        else {
            for (var i = 0; i < size; i++) {
                var start = i * stride;
                var end = start + stride;
                lines.push.apply(lines, subTensorToString(vals.subarray(start, end), subshape, substrides, padPerCol, i === size - 1));
            }
        }
        var sep = rank === 2 ? ',' : '';
        lines[0] = '[' + lines[0] + sep;
        for (var i = 1; i < lines.length - 1; i++) {
            lines[i] = ' ' + lines[i] + sep;
        }
        var newLineSep = ',\n';
        for (var i = 2; i < rank; i++) {
            newLineSep += '\n';
        }
        lines[lines.length - 1] =
            ' ' + lines[lines.length - 1] + ']' + (isLast ? '' : newLineSep);
        return lines;
    }

    function axesAreInnerMostDims(axes, rank) {
        for (var i = 0; i < axes.length; ++i) {
            if (axes[axes.length - i - 1] !== rank - 1 - i) {
                return false;
            }
        }
        return true;
    }
    function combineLocations(outputLoc, reduceLoc, axes) {
        var rank = outputLoc.length + reduceLoc.length;
        var loc = [];
        var outIdx = 0;
        var reduceIdx = 0;
        for (var dim = 0; dim < rank; dim++) {
            if (axes.indexOf(dim) === -1) {
                loc.push(outputLoc[outIdx++]);
            }
            else {
                loc.push(reduceLoc[reduceIdx++]);
            }
        }
        return loc;
    }
    function computeOutAndReduceShapes(aShape, axes) {
        var outShape = [];
        var rank = aShape.length;
        for (var dim = 0; dim < rank; dim++) {
            if (axes.indexOf(dim) === -1) {
                outShape.push(aShape[dim]);
            }
        }
        var reduceShape = axes.map(function (dim) { return aShape[dim]; });
        return [outShape, reduceShape];
    }
    function expandShapeToKeepDim(shape, axes) {
        var reduceSubShape = axes.map(function (x) { return 1; });
        return combineLocations(shape, reduceSubShape, axes);
    }
    function parseAxisParam(axis, shape) {
        var rank = shape.length;
        axis = axis == null ? shape.map(function (s, i) { return i; }) : [].concat(axis);
        assert(axis.every(function (ax) { return ax >= -rank && ax < rank; }), "All values in axis param must be in range [-" + rank + ", " + rank + ") but " +
            ("got axis " + axis));
        assert(axis.every(function (ax) { return isInt(ax); }), "All values in axis param must be integers but " +
            ("got axis " + axis));
        return axis.map(function (a) { return a < 0 ? rank + a : a; });
    }
    function assertAxesAreInnerMostDims(msg, axes, rank) {
        assert(axesAreInnerMostDims(axes, rank), msg + " supports only inner-most axes for now. " +
            ("Got axes " + axes + " and rank-" + rank + " input."));
    }
    function getAxesPermutation(axes, rank) {
        if (axesAreInnerMostDims(axes, rank)) {
            return null;
        }
        var result = [];
        for (var i = 0; i < rank; ++i) {
            if (axes.indexOf(i) === -1) {
                result.push(i);
            }
        }
        axes.forEach(function (axis) { return result.push(axis); });
        return result;
    }
    function getUndoAxesPermutation(axes) {
        return axes.map(function (axis, i) { return [i, axis]; })
            .sort(function (a, b) { return a[1] - b[1]; })
            .map(function (x) { return x[0]; });
    }
    function getInnerMostAxes(numAxes, rank) {
        var res = [];
        for (var i = rank - numAxes; i < rank; ++i) {
            res.push(i);
        }
        return res;
    }

    function assertParams(aShape, bShape, axis) {
        var aRank = aShape.length;
        var bRank = bShape.length;
        assert(aShape.length === bShape.length, "Error in concat" + aRank + "D: rank of x1 (" + aRank + ") and x2 (" + bRank + ") " +
            "must be the same.");
        assert(axis >= 0 && axis < aRank, "Error in concat" + aRank + "D: axis must be " +
            ("between 0 and " + (aRank - 1) + "."));
        for (var i = 0; i < aRank; i++) {
            assert((i === axis) || (aShape[i] === bShape[i]), "Error in concat" + aRank + "D: Shape (" + aShape + ") does not match " +
                ("(" + bShape + ") along the non-concatenated axis " + i + "."));
        }
    }
    function computeOutShape(x1Shape, x2Shape, axis) {
        assert(x1Shape.length === x2Shape.length, 'x1 and x2 should have the same rank.');
        var outputShape = x1Shape.slice();
        outputShape[axis] += x2Shape[axis];
        return outputShape;
    }
    function computeGradientSliceShapes(aShape, bShape) {
        return {
            aBegin: [0, 0],
            aSize: aShape,
            bBegin: [0, aShape[1]],
            bSize: bShape
        };
    }

    function operation(target, name, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return tidy(name, function () { return fn.apply(void 0, args); });
        };
        return descriptor;
    }

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ConcatOps = (function () {
        function ConcatOps() {
        }
        ConcatOps.concat1d = function (tensors) {
            return ConcatOps.concat(tensors, 0);
        };
        ConcatOps.concat2d = function (tensors, axis) {
            return ConcatOps.concat(tensors, axis);
        };
        ConcatOps.concat3d = function (tensors, axis) {
            return ConcatOps.concat(tensors, axis);
        };
        ConcatOps.concat4d = function (tensors, axis) {
            return ConcatOps.concat(tensors, axis);
        };
        ConcatOps.concat = function (tensors, axis) {
            if (axis === void 0) { axis = 0; }
            assert(tensors.length >= 1, 'Pass at least one tensor to concat');
            assertArgumentsAreTensors({ tensors: tensors }, 'concat');
            var result = tensors[0];
            if (tensors.length === 1) {
                return result;
            }
            var axes = parseAxisParam(axis, result.shape);
            for (var i = 1; i < tensors.length; ++i) {
                result = concat2Tensors(result, tensors[i], axes[0]);
            }
            return result;
        };
        __decorate([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], ConcatOps, "concat", null);
        return ConcatOps;
    }());
    function concat2Tensors(a, b, axis) {
        assertParams(a.shape, b.shape, axis);
        var outShape = computeOutShape(a.shape, b.shape, axis);
        var a2D = a.as2D(-1, sizeFromShape(a.shape.slice(axis)));
        var b2D = b.as2D(-1, sizeFromShape(b.shape.slice(axis)));
        var _a = computeGradientSliceShapes(a2D.shape, b2D.shape), aBegin = _a.aBegin, aSize = _a.aSize, bBegin = _a.bBegin, bSize = _a.bSize;
        var der = function (dy) {
            return { a: function () { return dy.slice(aBegin, aSize); }, b: function () { return dy.slice(bBegin, bSize); } };
        };
        var res = ENV.engine.runKernel(function (backend) { return backend.concat(a2D, b2D); }, { a: a2D, b: b2D }, der);
        return res.reshape(outShape);
    }

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var alea = createCommonjsModule(function (module) {
    // A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
    // http://baagoe.com/en/RandomMusings/javascript/
    // https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
    // Original work is under MIT license -

    // Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
    //
    // Permission is hereby granted, free of charge, to any person obtaining a copy
    // of this software and associated documentation files (the "Software"), to deal
    // in the Software without restriction, including without limitation the rights
    // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    // copies of the Software, and to permit persons to whom the Software is
    // furnished to do so, subject to the following conditions:
    // 
    // The above copyright notice and this permission notice shall be included in
    // all copies or substantial portions of the Software.
    // 
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    // THE SOFTWARE.



    (function(global, module, define) {

    function Alea(seed) {
      var me = this, mash = Mash();

      me.next = function() {
        var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
        me.s0 = me.s1;
        me.s1 = me.s2;
        return me.s2 = t - (me.c = t | 0);
      };

      // Apply the seeding algorithm from Baagoe.
      me.c = 1;
      me.s0 = mash(' ');
      me.s1 = mash(' ');
      me.s2 = mash(' ');
      me.s0 -= mash(seed);
      if (me.s0 < 0) { me.s0 += 1; }
      me.s1 -= mash(seed);
      if (me.s1 < 0) { me.s1 += 1; }
      me.s2 -= mash(seed);
      if (me.s2 < 0) { me.s2 += 1; }
      mash = null;
    }

    function copy(f, t) {
      t.c = f.c;
      t.s0 = f.s0;
      t.s1 = f.s1;
      t.s2 = f.s2;
      return t;
    }

    function impl(seed, opts) {
      var xg = new Alea(seed),
          state = opts && opts.state,
          prng = xg.next;
      prng.int32 = function() { return (xg.next() * 0x100000000) | 0; };
      prng.double = function() {
        return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
      };
      prng.quick = prng;
      if (state) {
        if (typeof(state) == 'object') copy(state, xg);
        prng.state = function() { return copy(xg, {}); };
      }
      return prng;
    }

    function Mash() {
      var n = 0xefc8249d;

      var mash = function(data) {
        data = data.toString();
        for (var i = 0; i < data.length; i++) {
          n += data.charCodeAt(i);
          var h = 0.02519603282416938 * n;
          n = h >>> 0;
          h -= n;
          h *= n;
          n = h >>> 0;
          h -= n;
          n += h * 0x100000000; // 2^32
        }
        return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
      };

      return mash;
    }


    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function() { return impl; });
    } else {
      this.alea = impl;
    }

    })(
      commonjsGlobal,
      module,    // present in node.js
      (typeof undefined) == 'function' && undefined   // present with an AMD loader
    );
    });

    var xor128 = createCommonjsModule(function (module) {
    // A Javascript implementaion of the "xor128" prng algorithm by
    // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

    (function(global, module, define) {

    function XorGen(seed) {
      var me = this, strseed = '';

      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0;

      // Set up generator function.
      me.next = function() {
        var t = me.x ^ (me.x << 11);
        me.x = me.y;
        me.y = me.z;
        me.z = me.w;
        return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
      };

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function() { return (xg.next() >>> 0) / 0x100000000; };
      prng.double = function() {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (typeof(state) == 'object') copy(state, xg);
        prng.state = function() { return copy(xg, {}); };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function() { return impl; });
    } else {
      this.xor128 = impl;
    }

    })(
      commonjsGlobal,
      module,    // present in node.js
      (typeof undefined) == 'function' && undefined   // present with an AMD loader
    );
    });

    var xorwow = createCommonjsModule(function (module) {
    // A Javascript implementaion of the "xorwow" prng algorithm by
    // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

    (function(global, module, define) {

    function XorGen(seed) {
      var me = this, strseed = '';

      // Set up generator function.
      me.next = function() {
        var t = (me.x ^ (me.x >>> 2));
        me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
        return (me.d = (me.d + 362437 | 0)) +
           (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
      };

      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0;
      me.v = 0;

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;
        if (k == strseed.length) {
          me.d = me.x << 10 ^ me.x >>> 4;
        }
        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      t.v = f.v;
      t.d = f.d;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function() { return (xg.next() >>> 0) / 0x100000000; };
      prng.double = function() {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (typeof(state) == 'object') copy(state, xg);
        prng.state = function() { return copy(xg, {}); };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function() { return impl; });
    } else {
      this.xorwow = impl;
    }

    })(
      commonjsGlobal,
      module,    // present in node.js
      (typeof undefined) == 'function' && undefined   // present with an AMD loader
    );
    });

    var xorshift7 = createCommonjsModule(function (module) {
    // A Javascript implementaion of the "xorshift7" algorithm by
    // François Panneton and Pierre L'ecuyer:
    // "On the Xorgshift Random Number Generators"
    // http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

    (function(global, module, define) {

    function XorGen(seed) {
      var me = this;

      // Set up generator function.
      me.next = function() {
        // Update xor generator.
        var X = me.x, i = me.i, t, v;
        t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
        t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
        t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
        t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
        t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
        X[i] = v;
        me.i = (i + 1) & 7;
        return v;
      };

      function init(me, seed) {
        var j, w, X = [];

        if (seed === (seed | 0)) {
          // Seed state array using a 32-bit integer.
          w = X[0] = seed;
        } else {
          // Seed state using a string.
          seed = '' + seed;
          for (j = 0; j < seed.length; ++j) {
            X[j & 7] = (X[j & 7] << 15) ^
                (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
          }
        }
        // Enforce an array length of 8, not all zeroes.
        while (X.length < 8) X.push(0);
        for (j = 0; j < 8 && X[j] === 0; ++j);
        if (j == 8) w = X[7] = -1; else w = X[j];

        me.x = X;
        me.i = 0;

        // Discard an initial 256 values.
        for (j = 256; j > 0; --j) {
          me.next();
        }
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.x = f.x.slice();
      t.i = f.i;
      return t;
    }

    function impl(seed, opts) {
      if (seed == null) seed = +(new Date);
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function() { return (xg.next() >>> 0) / 0x100000000; };
      prng.double = function() {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (state.x) copy(state, xg);
        prng.state = function() { return copy(xg, {}); };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function() { return impl; });
    } else {
      this.xorshift7 = impl;
    }

    })(
      commonjsGlobal,
      module,    // present in node.js
      (typeof undefined) == 'function' && undefined   // present with an AMD loader
    );
    });

    var xor4096 = createCommonjsModule(function (module) {
    // A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
    //
    // This fast non-cryptographic random number generator is designed for
    // use in Monte-Carlo algorithms. It combines a long-period xorshift
    // generator with a Weyl generator, and it passes all common batteries
    // of stasticial tests for randomness while consuming only a few nanoseconds
    // for each prng generated.  For background on the generator, see Brent's
    // paper: "Some long-period random number generators using shifts and xors."
    // http://arxiv.org/pdf/1004.3115v1.pdf
    //
    // Usage:
    //
    // var xor4096 = require('xor4096');
    // random = xor4096(1);                        // Seed with int32 or string.
    // assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
    // assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
    //
    // For nonzero numeric keys, this impelementation provides a sequence
    // identical to that by Brent's xorgens 3 implementaion in C.  This
    // implementation also provides for initalizing the generator with
    // string seeds, or for saving and restoring the state of the generator.
    //
    // On Chrome, this prng benchmarks about 2.1 times slower than
    // Javascript's built-in Math.random().

    (function(global, module, define) {

    function XorGen(seed) {
      var me = this;

      // Set up generator function.
      me.next = function() {
        var w = me.w,
            X = me.X, i = me.i, t, v;
        // Update Weyl generator.
        me.w = w = (w + 0x61c88647) | 0;
        // Update xor generator.
        v = X[(i + 34) & 127];
        t = X[i = ((i + 1) & 127)];
        v ^= v << 13;
        t ^= t << 17;
        v ^= v >>> 15;
        t ^= t >>> 12;
        // Update Xor generator array state.
        v = X[i] = v ^ t;
        me.i = i;
        // Result is the combination.
        return (v + (w ^ (w >>> 16))) | 0;
      };

      function init(me, seed) {
        var t, v, i, j, w, X = [], limit = 128;
        if (seed === (seed | 0)) {
          // Numeric seeds initialize v, which is used to generates X.
          v = seed;
          seed = null;
        } else {
          // String seeds are mixed into v and X one character at a time.
          seed = seed + '\0';
          v = 0;
          limit = Math.max(limit, seed.length);
        }
        // Initialize circular array and weyl value.
        for (i = 0, j = -32; j < limit; ++j) {
          // Put the unicode characters into the array, and shuffle them.
          if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
          // After 32 shuffles, take v as the starting w value.
          if (j === 0) w = v;
          v ^= v << 10;
          v ^= v >>> 15;
          v ^= v << 4;
          v ^= v >>> 13;
          if (j >= 0) {
            w = (w + 0x61c88647) | 0;     // Weyl.
            t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
            i = (0 == t) ? i + 1 : 0;     // Count zeroes.
          }
        }
        // We have detected all zeroes; make the key nonzero.
        if (i >= 128) {
          X[(seed && seed.length || 0) & 127] = -1;
        }
        // Run the generator 512 times to further mix the state before using it.
        // Factoring this as a function slows the main generator, so it is just
        // unrolled here.  The weyl generator is not advanced while warming up.
        i = 127;
        for (j = 4 * 128; j > 0; --j) {
          v = X[(i + 34) & 127];
          t = X[i = ((i + 1) & 127)];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          X[i] = v ^ t;
        }
        // Storing state as object members is faster than using closure variables.
        me.w = w;
        me.X = X;
        me.i = i;
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.i = f.i;
      t.w = f.w;
      t.X = f.X.slice();
      return t;
    }
    function impl(seed, opts) {
      if (seed == null) seed = +(new Date);
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function() { return (xg.next() >>> 0) / 0x100000000; };
      prng.double = function() {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (state.X) copy(state, xg);
        prng.state = function() { return copy(xg, {}); };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function() { return impl; });
    } else {
      this.xor4096 = impl;
    }

    })(
      commonjsGlobal,                                     // window object or global
      module,    // present in node.js
      (typeof undefined) == 'function' && undefined   // present with an AMD loader
    );
    });

    var tychei = createCommonjsModule(function (module) {
    // A Javascript implementaion of the "Tyche-i" prng algorithm by
    // Samuel Neves and Filipe Araujo.
    // See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

    (function(global, module, define) {

    function XorGen(seed) {
      var me = this, strseed = '';

      // Set up generator function.
      me.next = function() {
        var b = me.b, c = me.c, d = me.d, a = me.a;
        b = (b << 25) ^ (b >>> 7) ^ c;
        c = (c - d) | 0;
        d = (d << 24) ^ (d >>> 8) ^ a;
        a = (a - b) | 0;
        me.b = b = (b << 20) ^ (b >>> 12) ^ c;
        me.c = c = (c - d) | 0;
        me.d = (d << 16) ^ (c >>> 16) ^ a;
        return me.a = (a - b) | 0;
      };

      /* The following is non-inverted tyche, which has better internal
       * bit diffusion, but which is about 25% slower than tyche-i in JS.
      me.next = function() {
        var a = me.a, b = me.b, c = me.c, d = me.d;
        a = (me.a + me.b | 0) >>> 0;
        d = me.d ^ a; d = d << 16 ^ d >>> 16;
        c = me.c + d | 0;
        b = me.b ^ c; b = b << 12 ^ d >>> 20;
        me.a = a = a + b | 0;
        d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
        me.c = c = c + d | 0;
        b = b ^ c;
        return me.b = (b << 7 ^ b >>> 25);
      }
      */

      me.a = 0;
      me.b = 0;
      me.c = 2654435769 | 0;
      me.d = 1367130551;

      if (seed === Math.floor(seed)) {
        // Integer seed.
        me.a = (seed / 0x100000000) | 0;
        me.b = seed | 0;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 20; k++) {
        me.b ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.a = f.a;
      t.b = f.b;
      t.c = f.c;
      t.d = f.d;
      return t;
    }
    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function() { return (xg.next() >>> 0) / 0x100000000; };
      prng.double = function() {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (typeof(state) == 'object') copy(state, xg);
        prng.state = function() { return copy(xg, {}); };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function() { return impl; });
    } else {
      this.tychei = impl;
    }

    })(
      commonjsGlobal,
      module,    // present in node.js
      (typeof undefined) == 'function' && undefined   // present with an AMD loader
    );
    });

    var seedrandom = createCommonjsModule(function (module) {
    /*
    Copyright 2014 David Bau.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    */

    (function (pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var global = this,
        width = 256,        // each RC4 output is 0 <= x < 256
        chunks = 6,         // at least six RC4 outputs for each double
        digits = 52,        // there are 52 significant digits in a double
        rngname = 'random', // rngname: name for Math.random and Math.seedrandom
        startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto;         // node.js crypto module, initialized at the bottom.

    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    function seedrandom(seed, options, callback) {
      var key = [];
      options = (options == true) ? { entropy: true } : (options || {});

      // Flatten the seed string or build one from local entropy if needed.
      var shortseed = mixkey(flatten(
        options.entropy ? [seed, tostring(pool)] :
        (seed == null) ? autoseed() : seed, 3), key);

      // Use the seed to initialize an ARC4 generator.
      var arc4 = new ARC4(key);

      // This function returns a random double in [0, 1) that contains
      // randomness in every bit of the mantissa of the IEEE 754 value.
      var prng = function() {
        var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
            d = startdenom,                 //   and denominator d = 2 ^ 48.
            x = 0;                          //   and no 'extra last byte'.
        while (n < significance) {          // Fill up all significant digits by
          n = (n + x) * width;              //   shifting numerator and
          d *= width;                       //   denominator and generating a
          x = arc4.g(1);                    //   new least-significant-byte.
        }
        while (n >= overflow) {             // To avoid rounding up, before adding
          n /= 2;                           //   last byte, shift everything
          d /= 2;                           //   right using integer math until
          x >>>= 1;                         //   we have exactly the desired bits.
        }
        return (n + x) / d;                 // Form the number within [0, 1).
      };

      prng.int32 = function() { return arc4.g(4) | 0; };
      prng.quick = function() { return arc4.g(4) / 0x100000000; };
      prng.double = prng;

      // Mix the randomness into accumulated entropy.
      mixkey(tostring(arc4.S), pool);

      // Calling convention: what to return as a function of prng, seed, is_math.
      return (options.pass || callback ||
          function(prng, seed, is_math_call, state) {
            if (state) {
              // Load the arc4 state from the given state if it has an S array.
              if (state.S) { copy(state, arc4); }
              // Only provide the .state method if requested via options.state.
              prng.state = function() { return copy(arc4, {}); };
            }

            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) { math[rngname] = prng; return seed; }

            // Otherwise, it is a newer calling convention, so return the
            // prng directly.
            else return prng;
          })(
      prng,
      shortseed,
      'global' in options ? options.global : (this == math),
      options.state);
    }
    math['seed' + rngname] = seedrandom;

    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    function ARC4(key) {
      var t, keylen = key.length,
          me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

      // The empty key [] is treated as [0].
      if (!keylen) { key = [keylen++]; }

      // Set up S using the standard key scheduling algorithm.
      while (i < width) {
        s[i] = i++;
      }
      for (i = 0; i < width; i++) {
        s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
        s[j] = t;
      }

      // The "g" method returns the next (count) outputs as one number.
      (me.g = function(count) {
        // Using instance members instead of closure state nearly doubles speed.
        var t, r = 0,
            i = me.i, j = me.j, s = me.S;
        while (count--) {
          t = s[i = mask & (i + 1)];
          r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
        }
        me.i = i; me.j = j;
        return r;
        // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
      })(width);
    }

    //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //
    function copy(f, t) {
      t.i = f.i;
      t.j = f.j;
      t.S = f.S.slice();
      return t;
    }
    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    function flatten(obj, depth) {
      var result = [], typ = (typeof obj), prop;
      if (depth && typ == 'object') {
        for (prop in obj) {
          try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
        }
      }
      return (result.length ? result : typ == 'string' ? obj : obj + '\0');
    }

    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    function mixkey(seed, key) {
      var stringseed = seed + '', smear, j = 0;
      while (j < stringseed.length) {
        key[mask & j] =
          mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
      }
      return tostring(key);
    }

    //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //
    function autoseed() {
      try {
        var out;
        if (nodecrypto && (out = nodecrypto.randomBytes)) {
          // The use of 'out' to remember randomBytes makes tight minified code.
          out = out(width);
        } else {
          out = new Uint8Array(width);
          (global.crypto || global.msCrypto).getRandomValues(out);
        }
        return tostring(out);
      } catch (e) {
        var browser = global.navigator,
            plugins = browser && browser.plugins;
        return [+new Date, global, plugins, global.screen, tostring(pool)];
      }
    }

    //
    // tostring()
    // Converts an array of charcodes to a string
    //
    function tostring(a) {
      return String.fromCharCode.apply(0, a);
    }

    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);

    //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    if (module.exports) {
      module.exports = seedrandom;
      // When in node.js, try using crypto package for autoseeding.
      try {
        nodecrypto = crypto;
      } catch (ex) {}
    } else if ((typeof undefined) == 'function' && undefined.amd) {
      undefined(function() { return seedrandom; });
    }

    // End anonymous scope, and pass initial values.
    })(
      [],     // pool: entropy pool starts empty
      Math    // math: package containing random, pow, and seedrandom
    );
    });

    // A library of seedable RNGs implemented in Javascript.
    //
    // Usage:
    //
    // var seedrandom = require('seedrandom');
    // var random = seedrandom(1); // or any seed.
    // var x = random();       // 0 <= x < 1.  Every bit is random.
    // var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

    // alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
    // Period: ~2^116
    // Reported to pass all BigCrush tests.


    // xor128, a pure xor-shift generator by George Marsaglia.
    // Period: 2^128-1.
    // Reported to fail: MatrixRank and LinearComp.


    // xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
    // Period: 2^192-2^32
    // Reported to fail: CollisionOver, SimpPoker, and LinearComp.


    // xorshift7, by François Panneton and Pierre L'ecuyer, takes
    // a different approach: it adds robustness by allowing more shifts
    // than Marsaglia's original three.  It is a 7-shift generator
    // with 256 bits, that passes BigCrush with no systmatic failures.
    // Period 2^256-1.
    // No systematic BigCrush failures reported.


    // xor4096, by Richard Brent, is a 4096-bit xor-shift with a
    // very long period that also adds a Weyl generator. It also passes
    // BigCrush with no systematic failures.  Its long period may
    // be useful if you have many generators and need to avoid
    // collisions.
    // Period: 2^4128-2^32.
    // No systematic BigCrush failures reported.


    // Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
    // number generator derived from ChaCha, a modern stream cipher.
    // https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
    // Period: ~2^127
    // No systematic BigCrush failures reported.


    // The original ARC4-based prng included in this library.
    // Period: ~2^1600


    seedrandom.alea = alea;
    seedrandom.xor128 = xor128;
    seedrandom.xorwow = xorwow;
    seedrandom.xorshift7 = xorshift7;
    seedrandom.xor4096 = xor4096;
    seedrandom.tychei = tychei;

    var C__Users_user_dev_faceRecognition_min_js_node_modules_seedrandom = seedrandom;

    var seedrandom$1 = /*#__PURE__*/Object.freeze({
        default: C__Users_user_dev_faceRecognition_min_js_node_modules_seedrandom,
        __moduleExports: C__Users_user_dev_faceRecognition_min_js_node_modules_seedrandom
    });

    var MPRandGauss = (function () {
        function MPRandGauss(mean, stdDeviation, dtype, truncated, seed) {
            this.mean = mean;
            this.stdDev = stdDeviation;
            this.dtype = dtype;
            this.nextVal = NaN;
            this.truncated = truncated;
            if (this.truncated) {
                this.upper = this.mean + this.stdDev * 2;
                this.lower = this.mean - this.stdDev * 2;
            }
            var seedValue = seed ? seed : Math.random();
            this.random = undefined(seedValue.toString());
        }
        MPRandGauss.prototype.nextValue = function () {
            if (!isNaN(this.nextVal)) {
                var value = this.nextVal;
                this.nextVal = NaN;
                return value;
            }
            var resultX, resultY;
            var isValid = false;
            while (!isValid) {
                var v1 = void 0, v2 = void 0, s = void 0;
                do {
                    v1 = 2 * this.random() - 1;
                    v2 = 2 * this.random() - 1;
                    s = v1 * v1 + v2 * v2;
                } while (s >= 1 || s === 0);
                var mul = Math.sqrt(-2.0 * Math.log(s) / s);
                resultX = this.mean + this.stdDev * v1 * mul;
                resultY = this.mean + this.stdDev * v2 * mul;
                if (!this.truncated || this.isValidTruncated(resultX)) {
                    isValid = true;
                }
            }
            if (!this.truncated || this.isValidTruncated(resultY)) {
                this.nextVal = this.convertValue(resultY);
            }
            return this.convertValue(resultX);
        };
        MPRandGauss.prototype.convertValue = function (value) {
            if (this.dtype == null || this.dtype === 'float32') {
                return value;
            }
            return Math.round(value);
        };
        MPRandGauss.prototype.isValidTruncated = function (value) {
            return value <= this.upper && value >= this.lower;
        };
        return MPRandGauss;
    }());

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ReductionOps = (function () {
        function ReductionOps() {
        }
        ReductionOps.logSumExp = function (x, axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            assertArgumentsAreTensors({ x: x }, 'logSumExp');
            var axes = parseAxisParam(axis, x.shape);
            var xMax = x.max(axes, true);
            var a = x.sub(xMax);
            var b = a.exp();
            var c = b.sum(axes);
            var d = c.log();
            var res = xMax.reshape(d.shape).add(d);
            if (keepDims) {
                var newShape = expandShapeToKeepDim(res.shape, axes);
                return res.reshape(newShape);
            }
            return res;
        };
        ReductionOps.sum = function (x, axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            assertArgumentsAreTensors({ x: x }, 'sum');
            if (x.dtype === 'bool') {
                x = x.toInt();
            }
            var axes = parseAxisParam(axis, x.shape);
            var customOp = customGrad(function (x) {
                var permutation = getAxesPermutation(axes, x.rank);
                var reductionAxes = axes;
                var permutedX = x;
                if (permutation != null) {
                    permutedX = x.transpose(permutation);
                    reductionAxes =
                        getInnerMostAxes(reductionAxes.length, x.rank);
                }
                var value = ENV.engine.runKernel(function (backend) { return backend.sum(permutedX, reductionAxes); }, { permutedX: permutedX });
                if (keepDims) {
                    var newShape = expandShapeToKeepDim(value.shape, axes);
                    value = value.reshape(newShape);
                }
                var gradFunc = function (dy) {
                    var expandedDyShape = x.shape.slice();
                    axes.forEach(function (axis) {
                        expandedDyShape[axis] = 1;
                    });
                    var expandedDy = dy.reshape(expandedDyShape);
                    var derX = expandedDy.mul(ones(x.shape, 'float32'));
                    return derX;
                };
                return { value: value, gradFunc: gradFunc };
            });
            return customOp(x);
        };
        ReductionOps.mean = function (x, axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            assertArgumentsAreTensors({ x: x }, 'mean');
            var axes = parseAxisParam(axis, x.shape);
            var shapes = computeOutAndReduceShapes(x.shape, axes);
            var reduceShape = shapes[1];
            var reduceSize = sizeFromShape(reduceShape);
            var customOp = customGrad(function (x) {
                var reduceSizeScalar = scalar(reduceSize);
                var xReduce = reduceSizeScalar.dtype === x.dtype ?
                    x :
                    x.cast(reduceSizeScalar.dtype);
                var res = xReduce.div(reduceSizeScalar);
                var value = res.sum(axis, keepDims);
                var gradFunc = function (dy) {
                    var expandedDyShape = x.shape.slice();
                    axes.forEach(function (axis) {
                        expandedDyShape[axis] = 1;
                    });
                    var expandedDy = dy.reshape(expandedDyShape);
                    var derX = expandedDy.mul(ones(x.shape, 'float32')).div(reduceSizeScalar);
                    return derX;
                };
                return { value: value, gradFunc: gradFunc };
            });
            return customOp(x);
        };
        ReductionOps.min = function (x, axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            assertArgumentsAreTensors({ x: x }, 'min');
            var origAxes = parseAxisParam(axis, x.shape);
            var axes = origAxes;
            var permutedAxes = getAxesPermutation(axes, x.rank);
            if (permutedAxes != null) {
                x = x.transpose(permutedAxes);
                axes = getInnerMostAxes(axes.length, x.rank);
            }
            var res = ENV.engine.runKernel(function (backend) { return backend.min(x, axes); }, { x: x });
            if (keepDims) {
                var newShape = expandShapeToKeepDim(res.shape, origAxes);
                return res.reshape(newShape);
            }
            return res;
        };
        ReductionOps.max = function (x, axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            assertArgumentsAreTensors({ x: x }, 'max');
            var origAxes = parseAxisParam(axis, x.shape);
            var axes = origAxes;
            var permutedAxes = getAxesPermutation(axes, x.rank);
            if (permutedAxes != null) {
                x = x.transpose(permutedAxes);
                axes = getInnerMostAxes(axes.length, x.rank);
            }
            var res = ENV.engine.runKernel(function (backend) { return backend.max(x, axes); }, { x: x });
            if (keepDims) {
                var newShape = expandShapeToKeepDim(res.shape, origAxes);
                return res.reshape(newShape);
            }
            return res;
        };
        ReductionOps.argMin = function (x, axis) {
            if (axis === void 0) { axis = 0; }
            assertArgumentsAreTensors({ x: x }, 'argMin');
            if (axis == null) {
                axis = 0;
            }
            var axes = parseAxisParam(axis, x.shape);
            var permutedAxes = getAxesPermutation(axes, x.rank);
            if (permutedAxes != null) {
                x = x.transpose(permutedAxes);
                axes = getInnerMostAxes(axes.length, x.rank);
            }
            return ENV.engine.runKernel(function (backend) { return backend.argMin(x, axes[0]); }, { x: x });
        };
        ReductionOps.argMax = function (x, axis) {
            if (axis === void 0) { axis = 0; }
            assertArgumentsAreTensors({ x: x }, 'argMax');
            if (axis == null) {
                axis = 0;
            }
            var axes = parseAxisParam(axis, x.shape);
            var permutedAxes = getAxesPermutation(axes, x.rank);
            if (permutedAxes != null) {
                x = x.transpose(permutedAxes);
                axes = getInnerMostAxes(axes.length, x.rank);
            }
            return ENV.engine.runKernel(function (backend) { return backend.argMax(x, axes[0]); }, { x: x });
        };
        ReductionOps.moments = function (x, axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            assertArgumentsAreTensors({ x: x }, 'moments');
            var axes = parseAxisParam(axis, x.shape);
            var mean$$1 = x.mean(axes, keepDims);
            var keepDimsShape = mean$$1.shape;
            if (!keepDims) {
                keepDimsShape = expandShapeToKeepDim(mean$$1.shape, axes);
            }
            var devSquared = x.toFloat().sub(mean$$1.reshape(keepDimsShape)).square();
            var variance = devSquared.mean(axes, keepDims);
            return { mean: mean$$1, variance: variance };
        };
        ReductionOps.unsortedSegmentSum = function (x, segmentIds, numSegments, axis) {
            if (axis === void 0) { axis = 0; }
            assertArgumentsAreTensors({ x: x, segmentIds: segmentIds }, 'unsortedSegmentSum');
            assert(segmentIds.dtype === 'int32', 'Segment Ids must be of dtype `int32`');
            axis = parseAxisParam(axis, x.shape)[0];
            var res = [];
            var dim = segmentIds.shape[0];
            var newShape = [];
            for (var i = 0; i < x.shape.length; i++) {
                if (i === axis) {
                    newShape.push(dim);
                }
                else {
                    newShape.push(1);
                }
            }
            var reshapedSegmentIds = reshape(segmentIds, newShape);
            for (var i = 0; i < numSegments; i++) {
                var segmentId = scalar(i, 'int32');
                var mask = equal(segmentId, reshapedSegmentIds).asType('float32');
                var sum$$1 = mask.mul(x).sum(axis);
                res.push(sum$$1);
            }
            return stack(res, axis);
        };
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "logSumExp", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "sum", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "mean", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "min", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "max", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "argMin", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "argMax", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Normalization' }),
            operation
        ], ReductionOps, "moments", null);
        __decorate$1([
            doc({ heading: 'Operations', subheading: 'Reduction' }),
            operation
        ], ReductionOps, "unsortedSegmentSum", null);
        return ReductionOps;
    }());

    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    var ArrayOps = (function () {
        function ArrayOps() {
        }
        ArrayOps.tensor = function (values, shape, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            var inferredShape = inferShape(values);
            if (shape != null && inferredShape.length !== 1) {
                assertShapesMatch(shape, inferredShape, "Error creating a new Tensor. " +
                    ("Inferred shape (" + inferredShape + ") does not match the ") +
                    ("provided shape (" + shape + "). "));
            }
            if (!isTypedArray(values) && !Array.isArray(values)) {
                values = [values];
            }
            shape = shape || inferredShape;
            return Tensor.make(shape, { values: toTypedArray(values, dtype) }, dtype);
        };
        ArrayOps.scalar = function (value, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            if (isTypedArray(value) || Array.isArray(value)) {
                throw new Error('Error creating a new Scalar: value must be a primitive ' +
                    '(number|boolean)');
            }
            return ArrayOps.tensor(value, [], dtype);
        };
        ArrayOps.tensor1d = function (values, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            var inferredShape = inferShape(values);
            if (inferredShape.length !== 1) {
                throw new Error('tensor1d() requires values to be a flat/TypedArray');
            }
            return ArrayOps.tensor(values, inferredShape, dtype);
        };
        ArrayOps.tensor2d = function (values, shape, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            if (shape != null && shape.length !== 2) {
                throw new Error('tensor2d() requires shape to have two numbers');
            }
            var inferredShape = inferShape(values);
            if (inferredShape.length !== 2 && inferredShape.length !== 1) {
                throw new Error('tensor2d() requires values to be number[][] or flat/TypedArray');
            }
            if (inferredShape.length === 1 && shape == null) {
                throw new Error('tensor2d() requires shape to be provided when `values` ' +
                    'are a flat/TypedArray');
            }
            shape = shape || inferredShape;
            return ArrayOps.tensor(values, shape, dtype);
        };
        ArrayOps.tensor3d = function (values, shape, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            if (shape != null && shape.length !== 3) {
                throw new Error('tensor3d() requires shape to have three numbers');
            }
            var inferredShape = inferShape(values);
            if (inferredShape.length !== 3 && inferredShape.length !== 1) {
                throw new Error('tensor3d() requires values to be number[][][] or flat/TypedArray');
            }
            if (inferredShape.length === 1 && shape == null) {
                throw new Error('tensor3d() requires shape to be provided when `values` ' +
                    'are a flat array');
            }
            shape = shape || inferredShape;
            return ArrayOps.tensor(values, shape, dtype);
        };
        ArrayOps.tensor4d = function (values, shape, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            if (shape != null && shape.length !== 4) {
                throw new Error('tensor4d() requires shape to have four numbers');
            }
            var inferredShape = inferShape(values);
            if (inferredShape.length !== 4 && inferredShape.length !== 1) {
                throw new Error('tensor4d() requires values to be number[][][][] or flat/TypedArray');
            }
            if (inferredShape.length === 1 && shape == null) {
                throw new Error('tensor4d() requires shape to be provided when `values` ' +
                    'are a flat array');
            }
            shape = shape || inferredShape;
            return ArrayOps.tensor(values, shape, dtype);
        };
        ArrayOps.ones = function (shape, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            var values = makeOnesTypedArray(sizeFromShape(shape), dtype);
            return Tensor.make(shape, { values: values }, dtype);
        };
        ArrayOps.zeros = function (shape, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            var values = makeZerosTypedArray(sizeFromShape(shape), dtype);
            return Tensor.make(shape, { values: values }, dtype);
        };
        ArrayOps.fill = function (shape, value, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            var values = getTypedArrayFromDType(dtype, sizeFromShape(shape));
            values.fill(value);
            return Tensor.make(shape, { values: values }, dtype);
        };
        ArrayOps.onesLike = function (x) {
            assertArgumentsAreTensors({ x: x }, 'onesLike');
            return ArrayOps.ones(x.shape, x.dtype);
        };
        ArrayOps.zerosLike = function (x) {
            assertArgumentsAreTensors({ x: x }, 'zerosLike');
            return ArrayOps.zeros(x.shape, x.dtype);
        };
        ArrayOps.clone = function (x) {
            assertArgumentsAreTensors({ x: x }, 'clone');
            var der = function (dy) {
                return { x: function () { return dy.toFloat(); } };
            };
            return ENV.engine.runKernel(function (backend) {
                return Tensor.make(x.shape, { dataId: x.dataId }, x.dtype);
            }, { x: x }, der);
        };
        ArrayOps.eye = function (numRows, numColumns, batchShape, dtype) {
            if (dtype === void 0) { dtype = 'float32'; }
            if (numColumns == null) {
                numColumns = numRows;
            }
            var buffer = ArrayOps.buffer([numRows, numColumns], dtype);
            var n = numRows <= numColumns ? numRows : numColumns;
            for (var i = 0; i < n; ++i) {
                buffer.set(1, i, i);
            }
            var out = buffer.toTensor().as2D(numRows, numColumns);
            if (batchShape == null) {
                return out;
            }
            else {
                if (batchShape.length === 1) {
                    return ArrayOps.tile(ArrayOps.expandDims(out, 0), [batchShape[0], 1, 1]);
                }
                else if (batchShape.length === 2) {
                    return ArrayOps.tile(ArrayOps.expandDims(ArrayOps.expandDims(out, 0), 0), [batchShape[0], batchShape[1], 1, 1]);
                }
                else {
                    throw new Error("eye() currently supports only 1D and 2D " +
                        ("batchShapes, but received " + batchShape.length + "D."));
                }
            }
        };
        ArrayOps.randomNormal = function (shape, mean, stdDev, dtype, seed) {
            if (mean === void 0) { mean = 0; }
            if (stdDev === void 0) { stdDev = 1; }
            if (dtype != null && dtype === 'bool') {
                throw new Error("Unsupported data type " + dtype);
            }
            var randGauss = new MPRandGauss(mean, stdDev, dtype, false, seed);
            var res = ArrayOps.buffer(shape, dtype);
            for (var i = 0; i < res.values.length; i++) {
                res.values[i] = randGauss.nextValue();
            }
            return res.toTensor();
        };
        ArrayOps.truncatedNormal = function (shape, mean, stdDev, dtype, seed) {
            if (mean === void 0) { mean = 0; }
            if (stdDev === void 0) { stdDev = 1; }
            if (dtype != null && dtype === 'bool') {
                throw new Error("Unsupported data type " + dtype);
            }
            var randGauss = new MPRandGauss(mean, stdDev, dtype, true, seed);
            var res = ArrayOps.buffer(shape, dtype);
            for (var i = 0; i < res.values.length; i++) {
                res.values[i] = randGauss.nextValue();
            }
            return res.toTensor();
        };
        ArrayOps.randomUniform = function (shape, minval, maxval, dtype) {
            if (minval === void 0) { minval = 0; }
            if (maxval === void 0) { maxval = 1; }
            if (dtype === void 0) { dtype = 'float32'; }
            var res = ArrayOps.buffer(shape, dtype);
            for (var i = 0; i < res.values.length; i++) {
                res.values[i] = randUniform(minval, maxval);
            }
            return res.toTensor();
        };
        ArrayOps.rand = function (shape, randFunction, dtype) {
            var size = sizeFromShape(shape);
            var values = null;
            if (dtype == null || dtype === 'float32') {
                values = new Float32Array(size);
            }
            else if (dtype === 'int32') {
                values = new Int32Array(size);
            }
            else if (dtype === 'bool') {
                values = new Uint8Array(size);
            }
            else {
                throw new Error("Unknown data type " + dtype);
            }
            for (var i = 0; i < size; i++) {
                values[i] = randFunction();
            }
            return Tensor.make(shape, { values: values }, dtype);
        };
        ArrayOps.multinomial = function (logits, numSamples, seed, normalized) {
            if (normalized === void 0) { normalized = false; }
            assertArgumentsAreTensors({ logits: logits }, 'multinomial');
            var numOutcomes = logits.size;
            var origRank = logits.rank;
            if (numOutcomes < 2) {
                throw new Error("Error in multinomial: you need at least 2 outcomes, but got " +
                    (numOutcomes + "."));
            }
            if (origRank > 2) {
                throw new Error("Rank of probabilities must be 1 or 2, but is " + origRank);
            }
            seed = seed || Math.random();
            var logits2D = origRank === 1 ? logits.as2D(1, -1) : logits;
            var res = ENV.engine.runKernel(function (backend) { return backend.multinomial(logits2D, normalized, numSamples, seed); }, { logits2D: logits2D });
            return origRank === 1 ? res.as1D() : res;
        };
        ArrayOps.oneHot = function (indices, depth, onValue, offValue) {
            if (onValue === void 0) { onValue = 1; }
            if (offValue === void 0) { offValue = 0; }
            assert(indices.dtype === 'int32', 'Indices must be of dtype `int32`');
            if (depth < 2) {
                throw new Error("Error in oneHot: depth must be >=2, but it is " + depth);
            }
            return ENV.engine.runKernel(function (backend) { return backend.oneHot(indices, depth, onValue, offValue); }, { indices: indices });
        };
        ArrayOps.fromPixels = function (pixels, numChannels) {
            if (numChannels === void 0) { numChannels = 3; }
            if (numChannels > 4) {
                throw new Error('Cannot construct Tensor with more than 4 channels from pixels.');
            }
            return ENV.engine.fromPixels(pixels, numChannels);
        };
        ArrayOps.toPixels = function (img, canvas) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, height, width, depth, minTensor, maxTensor, min, max, data, multiplier, bytes, i, r, g, b, a, j, ctx, imageData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            assertArgumentsAreTensors({ img: img }, 'toPixels');
                            if (img.rank !== 2 && img.rank !== 3) {
                                throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + img.rank + ".");
                            }
                            _a = img.shape.slice(0, 2), height = _a[0], width = _a[1];
                            depth = img.rank === 2 ? 1 : img.shape[2];
                            if (depth > 4 || depth === 2) {
                                throw new Error("toPixels only supports depth of size " +
                                    ("1, 3 or 4 but got " + depth));
                            }
                            minTensor = img.min();
                            maxTensor = img.max();
                            return [4, minTensor.data()];
                        case 1:
                            min = (_b.sent())[0];
                            return [4, maxTensor.data()];
                        case 2:
                            max = (_b.sent())[0];
                            minTensor.dispose();
                            maxTensor.dispose();
                            if (img.dtype === 'float32') {
                                if (min < 0 || max > 1) {
                                    throw new Error("Tensor values for a float32 Tensor must be in the " +
                                        ("range [0 - 1] but got range [" + min + " - " + max + "]."));
                                }
                            }
                            else if (img.dtype === 'int32') {
                                if (min < 0 || max > 255) {
                                    throw new Error("Tensor values for a int32 Tensor must be in the " +
                                        ("range [0 - 255] but got range [" + min + " - " + max + "]."));
                                }
                            }
                            else {
                                throw new Error("Unsupported type for toPixels: " + img.dtype + "." +
                                    " Please use float32 or int32 tensors.");
                            }
                            return [4, img.data()];
                        case 3:
                            data = _b.sent();
                            multiplier = img.dtype === 'float32' ? 255 : 1;
                            bytes = new Uint8ClampedArray(width * height * 4);
                            for (i = 0; i < height * width; ++i) {
                                r = void 0, g = void 0, b = void 0, a = void 0;
                                if (depth === 1) {
                                    r = data[i] * multiplier;
                                    g = data[i] * multiplier;
                                    b = data[i] * multiplier;
                                    a = 255;
                                }
                                else if (depth === 3) {
                                    r = data[i * 3] * multiplier;
                                    g = data[i * 3 + 1] * multiplier;
                                    b = data[i * 3 + 2] * multiplier;
                                    a = 255;
                                }
                                else if (depth === 4) {
                                    r = data[i * 4] * multiplier;
                                    g = data[i * 4 + 1] * multiplier;
                                    b = data[i * 4 + 2] * multiplier;
                                    a = data[i * 4 + 3] * multiplier;
                                }
                                j = i * 4;
                                bytes[j + 0] = Math.round(r);
                                bytes[j + 1] = Math.round(g);
                                bytes[j + 2] = Math.round(b);
                                bytes[j + 3] = Math.round(a);
                            }
                            if (canvas != null) {
                                canvas.width = width;
                                canvas.height = height;
                                ctx = canvas.getContext('2d');
                                imageData = new ImageData(bytes, width, height);
                                ctx.putImageData(imageData, 0, 0);
                            }
                            return [2, bytes];
                    }
                });
            });
        };
        ArrayOps.reshape = function (x, shape) {
            assertArgumentsAreTensors({ x: x }, 'reshape');
            shape = inferFromImplicitShape(shape, x.size);
            assert(x.size === sizeFromShape(shape), 'new shape and old shape must have the same number of elements.');
            var grad = function (dy) {
                return { x: function () { return dy.reshape(x.shape); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.reshape(x, shape); }, { x: x }, grad);
        };
        ArrayOps.squeeze = function (x, axis) {
            assertArgumentsAreTensors({ x: x }, 'squeeze');
            return ArrayOps.reshape(x, squeezeShape(x.shape, axis).newShape);
        };
        ArrayOps.cast = function (x, dtype) {
            assertArgumentsAreTensors({ x: x }, 'cast');
            var grad = function (dy) {
                return { x: function () { return dy.clone(); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.cast(x, dtype); }, { x: x }, grad);
        };
        ArrayOps.tile = function (x, reps) {
            assertArgumentsAreTensors({ x: x }, 'tile');
            assert(x.rank === reps.length, "Error in transpose: rank of input " + x.rank + " " +
                ("must match length of reps " + reps + "."));
            var grad = function (dy) {
                var derX = function () {
                    var xGrad = ArrayOps.zerosLike(x);
                    if (x.rank === 1) {
                        for (var i = 0; i < reps[0]; ++i) {
                            xGrad = xGrad.add(dy.slice([i * x.shape[0]], [x.shape[0]]));
                        }
                    }
                    else if (x.rank === 2) {
                        for (var i = 0; i < reps[0]; ++i) {
                            for (var j = 0; j < reps[1]; ++j) {
                                xGrad = xGrad.add(dy.slice([i * x.shape[0], j * x.shape[1]], [x.shape[0], x.shape[1]]));
                            }
                        }
                    }
                    else if (x.rank === 3) {
                        for (var i = 0; i < reps[0]; ++i) {
                            for (var j = 0; j < reps[1]; ++j) {
                                for (var k = 0; k < reps[2]; ++k) {
                                    xGrad = xGrad.add(dy.slice([i * x.shape[0], j * x.shape[1], k * x.shape[2]], [x.shape[0], x.shape[1], x.shape[2]]));
                                }
                            }
                        }
                    }
                    else if (x.rank === 4) {
                        for (var i = 0; i < reps[0]; ++i) {
                            for (var j = 0; j < reps[1]; ++j) {
                                for (var k = 0; k < reps[2]; ++k) {
                                    for (var l = 0; l < reps[3]; ++l) {
                                        xGrad = xGrad.add(dy.slice([
                                            i * x.shape[0], j * x.shape[1], k * x.shape[2],
                                            l * x.shape[3]
                                        ], [x.shape[0], x.shape[1], x.shape[2], x.shape[3]]));
                                    }
                                }
                            }
                        }
                    }
                    else {
                        throw new Error("Gradient for tile operation is not implemented for rank-" +
                            (x.rank + " tensors yet."));
                    }
                    return xGrad;
                };
                return { x: derX };
            };
            return ENV.engine.runKernel(function (backend) { return backend.tile(x, reps); }, { x: x }, grad);
        };
        ArrayOps.gather = function (x, indices, axis) {
            if (axis === void 0) { axis = 0; }
            assertArgumentsAreTensors({ x: x, indices: indices }, 'gather');
            assert(indices.dtype === 'int32', 'Indices must be of dtype `int32`');
            axis = parseAxisParam(axis, x.shape)[0];
            var grad = function (dy) {
                var derX = function () {
                    return ReductionOps.unsortedSegmentSum(dy, indices, x.shape[axis], axis);
                };
                return { x: derX };
            };
            return ENV.engine.runKernel(function (backend) { return backend.gather(x, indices, axis); }, { x: x }, grad);
        };
        ArrayOps.pad1d = function (x, paddings, constantValue) {
            if (constantValue === void 0) { constantValue = 0; }
            assert(paddings.length === 2, 'Invalid number of paddings. Must be length of 2.');
            return ArrayOps.pad(x, [paddings], constantValue);
        };
        ArrayOps.pad2d = function (x, paddings, constantValue) {
            if (constantValue === void 0) { constantValue = 0; }
            assert(paddings.length === 2 && paddings[0].length === 2 &&
                paddings[1].length === 2, 'Invalid number of paddings. Must be length of 2 each.');
            return ArrayOps.pad(x, paddings, constantValue);
        };
        ArrayOps.pad3d = function (x, paddings, constantValue) {
            if (constantValue === void 0) { constantValue = 0; }
            assert(paddings.length === 3 && paddings[0].length === 2 &&
                paddings[1].length === 2 && paddings[2].length === 2, 'Invalid number of paddings. Must be length of 2 each.');
            return ArrayOps.pad(x, paddings, constantValue);
        };
        ArrayOps.pad4d = function (x, paddings, constantValue) {
            if (constantValue === void 0) { constantValue = 0; }
            assert(paddings.length === 4 && paddings[0].length === 2 &&
                paddings[1].length === 2 && paddings[2].length === 2 &&
                paddings[3].length === 2, 'Invalid number of paddings. Must be length of 2 each.');
            return ArrayOps.pad(x, paddings, constantValue);
        };
        ArrayOps.pad = function (x, paddings, constantValue) {
            if (constantValue === void 0) { constantValue = 0; }
            assertArgumentsAreTensors({ x: x }, 'pad');
            if (x.rank === 0) {
                throw new Error('pad(scalar) is not defined. Pass non-scalar to pad');
            }
            var begin = paddings.map(function (p) { return p[0]; });
            var grad = function (dy) {
                return { x: function () { return dy.slice(begin, x.shape); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.pad(x, paddings, constantValue); }, { x: x }, grad);
        };
        ArrayOps.stack = function (tensors, axis) {
            if (axis === void 0) { axis = 0; }
            assertArgumentsAreTensors({ tensors: tensors }, 'stack');
            assert(tensors.length >= 1, 'Pass at least one tensor to tf.stack');
            if (tensors.length === 1) {
                return tensors[0].expandDims(axis);
            }
            var rank = tensors[0].rank;
            var shape = tensors[0].shape;
            var dtype = tensors[0].dtype;
            assert(axis <= rank, 'Axis must be <= rank of the tensor');
            tensors.forEach(function (t) {
                assertShapesMatch(shape, t.shape, 'All tensors passed to stack must have matching shapes');
            });
            tensors.forEach(function (t) {
                assert(dtype === t.dtype, 'All tensors passed to stack must have matching dtypes');
            });
            var expandedTensors = tensors.map(function (t) { return t.expandDims(axis); });
            return ConcatOps.concat(expandedTensors, axis);
        };
        ArrayOps.unstack = function (value, axis) {
            if (axis === void 0) { axis = 0; }
            var num = value.shape[axis];
            var outputShape = Array(value.rank - 1).fill(0);
            var outIndex = 0;
            for (var i = 0; i < value.rank; i++) {
                if (i !== axis) {
                    outputShape[outIndex] = value.shape[i];
                    outIndex++;
                }
            }
            var splitSizes;
            splitSizes = Array(num).fill(1);
            var begin = Array(value.rank).fill(0);
            var size = value.shape.slice();
            return splitSizes.map(function (s) {
                size[axis] = s;
                var slice = value.slice(begin, size);
                begin[axis] += s;
                return slice.reshape(outputShape);
            });
        };
        ArrayOps.split = function (x, numOrSizeSplits, axis) {
            if (axis === void 0) { axis = 0; }
            assertArgumentsAreTensors({ x: x }, 'split');
            axis = parseAxisParam(axis, x.shape)[0];
            var splitSizes;
            if (typeof (numOrSizeSplits) === 'number') {
                assert(x.shape[axis] % numOrSizeSplits === 0, 'Number of splits must evenly divide the axis.');
                splitSizes = Array(numOrSizeSplits).fill(x.shape[axis] / numOrSizeSplits);
            }
            else {
                assert(x.shape[axis] === numOrSizeSplits.reduce(function (a, b) { return a + b; }), 'The sum of sizes must match the size of the axis dimension.');
                splitSizes = numOrSizeSplits;
            }
            var begin = Array(x.rank).fill(0);
            var size = x.shape.slice();
            return splitSizes.map(function (s) {
                size[axis] = s;
                var slice = x.slice(begin, size);
                begin[axis] += s;
                return slice;
            });
        };
        ArrayOps.cumsum = function (x, axis, exclusive, reverse) {
            if (axis === void 0) { axis = 0; }
            if (exclusive === void 0) { exclusive = false; }
            if (reverse === void 0) { reverse = false; }
            assertArgumentsAreTensors({ x: x }, 'cumsum');
            var permutation = getAxesPermutation([axis], x.rank);
            var permutedX = x;
            if (permutation != null) {
                permutedX = x.transpose(permutation);
            }
            var grad = function (dy) {
                return { permutedX: function () { return dy.cumsum(axis, exclusive, !reverse); } };
            };
            var value = ENV.engine.runKernel(function (backend) { return backend.cumsum(permutedX, axis, exclusive, reverse); }, { permutedX: permutedX }, grad);
            if (permutation != null) {
                value = value.transpose(permutation);
            }
            return value;
        };
        ArrayOps.expandDims = function (x, axis) {
            if (axis === void 0) { axis = 0; }
            assertArgumentsAreTensors({ x: x }, 'expandDims');
            assert(axis <= x.rank, 'Axis must be <= rank of the tensor');
            var newShape = x.shape.slice();
            newShape.splice(axis, 0, 1);
            return ArrayOps.reshape(x, newShape);
        };
        ArrayOps.linspace = function (start, stop, num) {
            if (num === 0) {
                throw new Error('Cannot request zero samples');
            }
            var step = (stop - start) / (num - 1);
            var values = makeZerosTypedArray(num, 'float32');
            values[0] = start;
            for (var i = 1; i < values.length; i++) {
                values[i] = values[i - 1] + step;
            }
            return ArrayOps.tensor1d(values, 'float32');
        };
        ArrayOps.range = function (start, stop, step, dtype) {
            if (step === void 0) { step = 1; }
            if (dtype === void 0) { dtype = 'float32'; }
            if (step === 0) {
                throw new Error('Cannot have a step of zero');
            }
            var sameStartStop = start === stop;
            var increasingRangeNegativeStep = start < stop && step < 0;
            var decreasingRangePositiveStep = stop < start && step > 1;
            if (sameStartStop || increasingRangeNegativeStep ||
                decreasingRangePositiveStep) {
                return ArrayOps.zeros([0], dtype);
            }
            var numElements = Math.abs(Math.ceil((stop - start) / step));
            var values = makeZerosTypedArray(numElements, dtype);
            if (stop < start && step === 1) {
                step = -1;
            }
            values[0] = start;
            for (var i = 1; i < values.length; i++) {
                values[i] = values[i - 1] + step;
            }
            return ArrayOps.tensor1d(values, dtype);
        };
        ArrayOps.buffer = function (shape, dtype, values) {
            if (dtype === void 0) { dtype = 'float32'; }
            return new TensorBuffer(shape, dtype, values);
        };
        ArrayOps.print = function (x, verbose) {
            if (verbose === void 0) { verbose = false; }
            console.log(tensorToString(x, verbose));
        };
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "tensor", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "scalar", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "tensor1d", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "tensor2d", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "tensor3d", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "tensor4d", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "ones", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "zeros", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "fill", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "onesLike", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "zerosLike", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "clone", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "eye", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "randomNormal", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "truncatedNormal", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "randomUniform", null);
        __decorate$2([
            operation
        ], ArrayOps, "rand", null);
        __decorate$2([
            operation
        ], ArrayOps, "multinomial", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "oneHot", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' }),
            operation
        ], ArrayOps, "fromPixels", null);
        __decorate$2([
            doc({ heading: 'Visualization' })
        ], ArrayOps, "toPixels", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Transformations' }),
            operation
        ], ArrayOps, "reshape", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Transformations' })
        ], ArrayOps, "squeeze", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Transformations' }),
            operation
        ], ArrayOps, "cast", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], ArrayOps, "tile", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], ArrayOps, "gather", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Transformations' }),
            operation
        ], ArrayOps, "pad", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], ArrayOps, "stack", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], ArrayOps, "unstack", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], ArrayOps, "split", null);
        __decorate$2([
            doc({ heading: 'Operations', subheading: 'Scan' })
        ], ArrayOps, "cumsum", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Transformations' }),
            operation
        ], ArrayOps, "expandDims", null);
        __decorate$2([
            operation,
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "linspace", null);
        __decorate$2([
            operation,
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "range", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "buffer", null);
        __decorate$2([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], ArrayOps, "print", null);
        return ArrayOps;
    }());
    function makeZerosTypedArray(size, dtype) {
        if (dtype == null || dtype === 'float32') {
            return new Float32Array(size);
        }
        else if (dtype === 'int32') {
            return new Int32Array(size);
        }
        else if (dtype === 'bool') {
            return new Uint8Array(size);
        }
        else {
            throw new Error("Unknown data type $ {dtype}");
        }
    }
    function makeOnesTypedArray(size, dtype) {
        var array = makeZerosTypedArray(size, dtype);
        for (var i = 0; i < array.length; i++) {
            array[i] = 1;
        }
        return array;
    }
    function toTypedArray(a, dtype) {
        if (noConversionNeeded(a, dtype)) {
            return a;
        }
        if (Array.isArray(a)) {
            a = flatten(a);
        }
        return copyTypedArray(a, dtype);
    }
    function noConversionNeeded(a, dtype) {
        return (a instanceof Float32Array && dtype === 'float32') ||
            (a instanceof Int32Array && dtype === 'int32') ||
            (a instanceof Uint8Array && dtype === 'bool');
    }

    function getBroadcastDims(inShape, outShape) {
        var inRank = inShape.length;
        var dims = [];
        for (var i = 0; i < inRank; i++) {
            var dim = inRank - 1 - i;
            var a = inShape[dim] || 1;
            var b = outShape[outShape.length - 1 - i] || 1;
            if (b > 1 && a === 1) {
                dims.unshift(dim);
            }
        }
        return dims;
    }
    function getReductionAxes(inShape, outShape) {
        var result = [];
        for (var i = 0; i < outShape.length; i++) {
            var inDim = inShape[inShape.length - i - 1];
            var outAxis = outShape.length - i - 1;
            var outDim = outShape[outAxis];
            if (inDim == null || (inDim === 1 && outDim > 1)) {
                result.unshift(outAxis);
            }
        }
        return result;
    }
    function broadcastDimsAreOuter(dims) {
        for (var i = 0; i < dims.length; i++) {
            if (dims[i] !== i) {
                return false;
            }
        }
        return true;
    }
    function assertAndGetBroadcastShape(shapeA, shapeB) {
        var result = [];
        var errMsg = "Operands could not be broadcast together with shapes " +
            (shapeA + " and " + shapeB + ".");
        var l = Math.max(shapeA.length, shapeB.length);
        for (var i = 0; i < l; i++) {
            var a = shapeA[shapeA.length - i - 1] || 1;
            var b = shapeB[shapeB.length - i - 1] || 1;
            if (a > 1 && b > 1 && a !== b) {
                throw Error(errMsg);
            }
            result.unshift(Math.max(a, b));
        }
        return result;
    }

    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var BatchNormOps = (function () {
        function BatchNormOps() {
        }
        BatchNormOps.batchNormalization2d = function (x, mean$$1, variance, varianceEpsilon, scale, offset) {
            if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
            assert(x.rank === 2, "Error in batchNormalization3D: x must be rank 3 but got rank " +
                (x.rank + "."));
            assert(mean$$1.rank === 2 || mean$$1.rank === 1, "Error in batchNormalization2D: mean must be rank 2 or rank 1 but " +
                ("got rank " + mean$$1.rank + "."));
            assert(variance.rank === 2 || variance.rank === 1, "Error in batchNormalization2D: variance must be rank 2 or rank 1 " +
                ("but got rank " + variance.rank + "."));
            if (scale != null) {
                assert(scale.rank === 2 || scale.rank === 1, "Error in batchNormalization2D: scale must be rank 2 or rank 1 " +
                    ("but got rank " + scale.rank + "."));
            }
            if (offset != null) {
                assert(offset.rank === 2 || offset.rank === 1, "Error in batchNormalization2D: offset must be rank 2 or rank 1 " +
                    ("but got rank " + offset.rank + "."));
            }
            return BatchNormOps.batchNormalization(x, mean$$1, variance, varianceEpsilon, scale, offset);
        };
        BatchNormOps.batchNormalization3d = function (x, mean$$1, variance, varianceEpsilon, scale, offset) {
            if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
            assert(x.rank === 3, "Error in batchNormalization3D: x must be rank 3 but got rank " +
                (x.rank + "."));
            assert(mean$$1.rank === 3 || mean$$1.rank === 1, "Error in batchNormalization3D: mean must be rank 3 or rank 1 but " +
                ("got rank " + mean$$1.rank + "."));
            assert(variance.rank === 3 || variance.rank === 1, "Error in batchNormalization3D: variance must be rank 3 or rank 1 " +
                ("but got rank " + variance.rank + "."));
            if (scale != null) {
                assert(scale.rank === 3 || scale.rank === 1, "Error in batchNormalization3D: scale must be rank 3 or rank 1 " +
                    ("but got rank " + scale.rank + "."));
            }
            if (offset != null) {
                assert(offset.rank === 3 || offset.rank === 1, "Error in batchNormalization3D: offset must be rank 3 or rank 1 " +
                    ("but got rank " + offset.rank + "."));
            }
            return BatchNormOps.batchNormalization(x, mean$$1, variance, varianceEpsilon, scale, offset);
        };
        BatchNormOps.batchNormalization4d = function (x, mean$$1, variance, varianceEpsilon, scale, offset) {
            if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
            assert(x.rank === 4, "Error in batchNormalization4D: x must be rank 4 but got rank " +
                (x.rank + "."));
            assert(mean$$1.rank === 4 || mean$$1.rank === 1, "Error in batchNormalization4D: mean must be rank 4 or rank 1 but " +
                ("got rank " + mean$$1.rank + "."));
            assert(variance.rank === 4 || variance.rank === 1, "Error in batchNormalization4D: variance must be rank 4 or rank 1 " +
                ("but got rank " + variance.rank + "."));
            if (scale != null) {
                assert(scale.rank === 4 || scale.rank === 1, "Error in batchNormalization4D: scale must be rank 4 or rank 1 " +
                    ("but got rank " + scale.rank + "."));
            }
            if (offset != null) {
                assert(offset.rank === 4 || offset.rank === 1, "Error in batchNormalization4D: offset must be rank 4 or rank 1 " +
                    ("but got rank " + offset.rank + "."));
            }
            return BatchNormOps.batchNormalization(x, mean$$1, variance, varianceEpsilon, scale, offset);
        };
        BatchNormOps.batchNormalization = function (x, mean$$1, variance, varianceEpsilon, scale, offset) {
            if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
            assertArgumentsAreTensors({ x: x, mean: mean$$1, variance: variance }, 'batchNormalization');
            if (scale != null) {
                assertArgumentsAreTensors({ scale: scale }, 'batchNormalization');
            }
            if (offset != null) {
                assertArgumentsAreTensors({ offset: offset }, 'batchNormalization');
            }
            assert(mean$$1.rank === variance.rank, 'Batch normalization gradient requires mean and variance to have ' +
                'equal ranks.');
            assert(offset == null || mean$$1.rank === offset.rank, 'Batch normalization gradient requires mean and offset to have ' +
                'equal ranks.');
            assert(scale == null || mean$$1.rank === scale.rank, 'Batch normalization gradient requires mean and scale to have ' +
                'equal ranks.');
            var x4D;
            if (x.rank === 0 || x.rank === 1) {
                x4D = x.as4D(1, 1, 1, x.size);
            }
            else if (x.rank === 2) {
                x4D = x.as4D(1, 1, x.shape[0], x.shape[1]);
            }
            else if (x.rank === 3) {
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            else {
                x4D = x;
            }
            var der = function (dy) {
                var scaleValue = scale == null ? ArrayOps.scalar(1) : scale;
                var reductionAxes = getReductionAxes(mean$$1.shape, x4D.shape);
                var tileShape = [];
                if (mean$$1.rank === 1) {
                    for (var i = 0; i < x4D.shape.length - 1; ++i) {
                        tileShape.push(x4D.shape[i]);
                    }
                    tileShape.push(1);
                }
                var xMinusMean = x.sub(mean$$1);
                var dyTimesScaleValue = dy.mul(scaleValue);
                var oneOverSqrtVariance = rsqrt(variance.add(ArrayOps.scalar(varianceEpsilon)));
                var minusHalfRCube = oneOverSqrtVariance.mul(oneOverSqrtVariance)
                    .mul(oneOverSqrtVariance)
                    .mul(ArrayOps.scalar(-0.5));
                var derX = function () {
                    if (mean$$1.rank === 1) {
                        return dy
                            .mul(ArrayOps.tile(oneOverSqrtVariance.as4D(1, 1, 1, mean$$1.shape[0]), tileShape))
                            .mul(scaleValue)
                            .reshape(x.shape);
                    }
                    else {
                        return dy.mul(oneOverSqrtVariance).mul(scaleValue).reshape(x.shape);
                    }
                };
                var derMean = function () {
                    var meanDer = oneOverSqrtVariance.mul(ArrayOps.scalar(-1)).mul(dyTimesScaleValue);
                    if (mean$$1.rank === 1) {
                        meanDer = meanDer.sum(reductionAxes);
                    }
                    return meanDer.reshape(mean$$1.shape);
                };
                var derVariance = function () {
                    var varianceDer = minusHalfRCube.mul(xMinusMean).mul(dyTimesScaleValue);
                    if (mean$$1.rank === 1) {
                        varianceDer = varianceDer.sum(reductionAxes);
                    }
                    return varianceDer.reshape(mean$$1.shape);
                };
                var derScale = function () {
                    var xMinusMean2TimesRsqrt = xMinusMean.mul(oneOverSqrtVariance);
                    var scaleDer = dy.mul(xMinusMean2TimesRsqrt);
                    if (mean$$1.rank === 1) {
                        scaleDer = scaleDer.sum(reductionAxes);
                    }
                    return scaleDer.reshape(mean$$1.shape);
                };
                var derOffset = function () {
                    var offsetDer = dy;
                    if (mean$$1.rank === 1) {
                        offsetDer = offsetDer.sum(reductionAxes);
                    }
                    return offsetDer.reshape(mean$$1.shape);
                };
                return {
                    x: derX,
                    mean: derMean,
                    variance: derVariance,
                    scale: derScale,
                    offset: derOffset
                };
            };
            var res = ENV.engine.runKernel(function (backend) { return backend.batchNormalization(x4D, batchnormReshape4D(mean$$1), batchnormReshape4D(variance), varianceEpsilon, batchnormReshape4D(scale), batchnormReshape4D(offset)); }, { x: x, mean: mean$$1, variance: variance, scale: scale, offset: offset }, der);
            return res.reshape(x.shape);
        };
        __decorate$3([
            operation
        ], BatchNormOps, "batchNormalization2d", null);
        __decorate$3([
            operation
        ], BatchNormOps, "batchNormalization3d", null);
        __decorate$3([
            operation
        ], BatchNormOps, "batchNormalization4d", null);
        __decorate$3([
            doc({ heading: 'Operations', subheading: 'Normalization' })
        ], BatchNormOps, "batchNormalization", null);
        return BatchNormOps;
    }());
    function batchnormReshape4D(x) {
        if (x == null) {
            return null;
        }
        if (x.rank === 0) {
            return x.as1D();
        }
        else if (x.rank === 1) {
            return x;
        }
        else if (x.rank === 2) {
            return x.as4D(1, 1, x.shape[0], x.shape[1]);
        }
        else if (x.rank === 3) {
            return x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        return x;
    }

    var DType;
    (function (DType) {
        DType["float32"] = "float32";
        DType["int32"] = "int32";
        DType["bool"] = "bool";
    })(DType || (DType = {}));
    var Rank;
    (function (Rank) {
        Rank["R0"] = "R0";
        Rank["R1"] = "R1";
        Rank["R2"] = "R2";
        Rank["R3"] = "R3";
        Rank["R4"] = "R4";
    })(Rank || (Rank = {}));
    var UpcastInt32AndMap;
    (function (UpcastInt32AndMap) {
        UpcastInt32AndMap["float32"] = "float32";
        UpcastInt32AndMap["int32"] = "int32";
        UpcastInt32AndMap["bool"] = "int32";
    })(UpcastInt32AndMap || (UpcastInt32AndMap = {}));
    var UpcastBoolAndMap;
    (function (UpcastBoolAndMap) {
        UpcastBoolAndMap["float32"] = "float32";
        UpcastBoolAndMap["int32"] = "int32";
        UpcastBoolAndMap["bool"] = "bool";
    })(UpcastBoolAndMap || (UpcastBoolAndMap = {}));
    var UpcastFloat32AndMap;
    (function (UpcastFloat32AndMap) {
        UpcastFloat32AndMap["float32"] = "float32";
        UpcastFloat32AndMap["int32"] = "float32";
        UpcastFloat32AndMap["bool"] = "float32";
    })(UpcastFloat32AndMap || (UpcastFloat32AndMap = {}));
    var upcastTypeMap = {
        float32: UpcastFloat32AndMap,
        int32: UpcastInt32AndMap,
        bool: UpcastBoolAndMap
    };
    function upcastType(typeA, typeB) {
        return upcastTypeMap[typeA][typeB];
    }
    function sumOutType(type) {
        return upcastType(type, 'int32');
    }

    var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var BinaryOps = (function () {
        function BinaryOps() {
        }
        BinaryOps.add = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'add');
            assertTypesMatch(a, b);
            var outShape = assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () {
                    var res = dy;
                    var reduceAxes = getReductionAxes(a.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.reshape(a.shape);
                };
                var derB = function () {
                    var res = dy;
                    var reduceAxes = getReductionAxes(b.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.reshape(b.shape);
                };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.add(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.addStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in addStrict: ');
            return a.add(b);
        };
        BinaryOps.sub = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'sub');
            assertTypesMatch(a, b);
            var outShape = assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () {
                    var res = dy;
                    var reduceAxes = getReductionAxes(a.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.reshape(a.shape);
                };
                var derB = function () {
                    var res = dy;
                    var reduceAxes = getReductionAxes(b.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.neg().reshape(b.shape);
                };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.subtract(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.subStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in subStrict: ');
            return a.sub(b);
        };
        BinaryOps.pow = function (base, exp$$1) {
            assertArgumentsAreTensors({ base: base, exp: exp$$1 }, 'pow');
            var outShape = assertAndGetBroadcastShape(base.shape, exp$$1.shape);
            base = base.cast(upcastType(base.dtype, exp$$1.dtype));
            exp$$1 = exp$$1.cast(upcastType(base.dtype, exp$$1.dtype));
            var grad = function (dy, saved) {
                var y = saved[0];
                var derBase = function () {
                    var res = dy.mul(exp$$1.toFloat().mul(y.div(base)));
                    var reduceAxes = getReductionAxes(base.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.reshape(base.shape);
                };
                var derExp = function () {
                    var res = dy.mul(y.mul(base.log()).toFloat());
                    var reduceAxes = getReductionAxes(exp$$1.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.reshape(exp$$1.shape);
                };
                return { base: derBase, exp: derExp };
            };
            return ENV.engine.runKernel(function (backend, save) { return save(backend.pow(base, exp$$1)); }, { base: base, exp: exp$$1 }, grad);
        };
        BinaryOps.powStrict = function (base, exp$$1) {
            assertShapesMatch(base.shape, exp$$1.shape, 'Error in powStrict: ');
            return base.pow(exp$$1);
        };
        BinaryOps.mul = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'mul');
            assertTypesMatch(a, b);
            var outShape = assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () {
                    var res = dy.mul(b.toFloat());
                    var reduceAxes = getReductionAxes(a.shape, outShape);
                    if (reduceAxes.length > 0) {
                        return res.sum(reduceAxes).reshape(a.shape);
                    }
                    return res;
                };
                var derB = function () {
                    var res = dy.mul(a.toFloat());
                    var reduceAxes = getReductionAxes(b.shape, outShape);
                    if (reduceAxes.length > 0) {
                        return res.sum(reduceAxes).reshape(b.shape);
                    }
                    return res;
                };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.multiply(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.mulStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in multiplyStrict: ');
            return a.mul(b);
        };
        BinaryOps.div = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'div');
            assertTypesMatch(a, b);
            var outShape = assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () {
                    var res = dy.div(b.toFloat());
                    var reduceAxes = getReductionAxes(a.shape, outShape);
                    if (reduceAxes.length > 0) {
                        return res.sum(reduceAxes).reshape(a.shape);
                    }
                    return res;
                };
                var derB = function () {
                    var res = dy.mul(a.toFloat());
                    var reduceAxes = getReductionAxes(b.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes).reshape(b.shape);
                    }
                    var tmp = b.square();
                    return res.div(tmp.toFloat()).neg();
                };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.divide(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.divStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in divideStrict: ');
            return a.div(b);
        };
        BinaryOps.mod = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'mod');
            assertTypesMatch(a, b);
            var outShape = assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () {
                    var reduceAxes = getReductionAxes(a.shape, outShape);
                    if (reduceAxes.length > 0) {
                        return dy.sum(reduceAxes).reshape(a.shape);
                    }
                    return dy;
                };
                var derB = function () {
                    var res = dy.mul(a.div(b).floor().neg());
                    var reduceAxes = getReductionAxes(b.shape, outShape);
                    if (reduceAxes.length > 0) {
                        return res.sum(reduceAxes).reshape(b.shape);
                    }
                    return res;
                };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.mod(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.modStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in modStrict: ');
            return a.mod(b);
        };
        BinaryOps.minimum = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'minimum');
            assertTypesMatch(a, b);
            if (a.dtype === 'bool') {
                a = a.toInt();
            }
            if (b.dtype === 'bool') {
                b = b.toInt();
            }
            assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () { return dy.mul(a.lessEqual(b).toFloat()); };
                var derB = function () { return dy.mul(a.greater(b).toFloat()); };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.minimum(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.minimumStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in minimumStrict: ');
            return a.minimum(b);
        };
        BinaryOps.maximum = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'maximum');
            assertTypesMatch(a, b);
            if (a.dtype === 'bool') {
                a = a.toInt();
            }
            if (b.dtype === 'bool') {
                b = b.toInt();
            }
            assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () { return dy.mul(a.greaterEqual(b).toFloat()); };
                var derB = function () { return dy.mul(a.less(b).toFloat()); };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.maximum(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.maximumStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in minimumStrict: ');
            return a.maximum(b);
        };
        BinaryOps.squaredDifference = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'squaredDifference');
            assertTypesMatch(a, b);
            assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var two = scalar(2);
                var derA = function () { return dy.mul(a.sub(b).mul(two)); };
                var derB = function () { return dy.mul(b.sub(a).mul(two)); };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.squaredDifference(a, b); }, { a: a, b: b }, der);
        };
        BinaryOps.squaredDifferenceStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in squaredDifferenceStrict: ');
            return a.squaredDifference(b);
        };
        BinaryOps.atan2 = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'atan2');
            assertTypesMatch(a, b);
            var outShape = assertAndGetBroadcastShape(a.shape, b.shape);
            var der = function (dy) {
                var derA = function () {
                    var d = BinaryOps.add(square(a), square(b));
                    var res = dy.mul(b.div(d));
                    var reduceAxes = getReductionAxes(a.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.reshape(a.shape);
                };
                var derB = function () {
                    var d = BinaryOps.add(square(a), square(b));
                    var res = neg(dy.mul(a.div(d)));
                    var reduceAxes = getReductionAxes(b.shape, outShape);
                    if (reduceAxes.length > 0) {
                        res = res.sum(reduceAxes);
                    }
                    return res.reshape(b.shape);
                };
                return { a: derA, b: derB };
            };
            return ENV.engine.runKernel(function (backend) { return backend.atan2(a, b); }, { a: a, b: b }, der);
        };
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "add", null);
        __decorate$4([
            operation
        ], BinaryOps, "addStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "sub", null);
        __decorate$4([
            operation
        ], BinaryOps, "subStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "pow", null);
        __decorate$4([
            operation
        ], BinaryOps, "powStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "mul", null);
        __decorate$4([
            operation
        ], BinaryOps, "mulStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "div", null);
        __decorate$4([
            operation
        ], BinaryOps, "divStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "mod", null);
        __decorate$4([
            operation
        ], BinaryOps, "modStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "minimum", null);
        __decorate$4([
            operation
        ], BinaryOps, "minimumStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "maximum", null);
        __decorate$4([
            operation
        ], BinaryOps, "maximumStrict", null);
        __decorate$4([
            doc({ heading: 'Operations', subheading: 'Arithmetic' }),
            operation
        ], BinaryOps, "squaredDifference", null);
        __decorate$4([
            operation
        ], BinaryOps, "squaredDifferenceStrict", null);
        __decorate$4([
            operation
        ], BinaryOps, "atan2", null);
        return BinaryOps;
    }());

    var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var CompareOps = (function () {
        function CompareOps() {
        }
        CompareOps.notEqual = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'notEqual');
            assertTypesMatch(a, b);
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.notEqual(a, b); }, { a: a, b: b });
        };
        CompareOps.notEqualStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in notEqualStrict: ');
            return a.notEqual(b);
        };
        CompareOps.less = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'less');
            assertTypesMatch(a, b);
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.less(a, b); }, { a: a, b: b });
        };
        CompareOps.lessStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in lessStrict: ');
            return a.less(b);
        };
        CompareOps.equal = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'equal');
            assertTypesMatch(a, b);
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.equal(a, b); }, { a: a, b: b });
        };
        CompareOps.equalStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in equalStrict: ');
            return a.equal(b);
        };
        CompareOps.lessEqual = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'lessEqual');
            assertTypesMatch(a, b);
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.lessEqual(a, b); }, { a: a, b: b });
        };
        CompareOps.lessEqualStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in lessEqualStrict: ');
            return a.lessEqual(b);
        };
        CompareOps.greater = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'greater');
            assertTypesMatch(a, b);
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.greater(a, b); }, { a: a, b: b });
        };
        CompareOps.greaterStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in greaterStrict: ');
            return a.greater(b);
        };
        CompareOps.greaterEqual = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'greaterEqual');
            assertTypesMatch(a, b);
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.greaterEqual(a, b); }, { a: a, b: b });
        };
        CompareOps.greaterEqualStrict = function (a, b) {
            assertShapesMatch(a.shape, b.shape, 'Error in greaterEqualStrict: ');
            return a.greaterEqual(b);
        };
        __decorate$5([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], CompareOps, "notEqual", null);
        __decorate$5([
            operation
        ], CompareOps, "notEqualStrict", null);
        __decorate$5([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], CompareOps, "less", null);
        __decorate$5([
            operation
        ], CompareOps, "lessStrict", null);
        __decorate$5([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], CompareOps, "equal", null);
        __decorate$5([
            operation
        ], CompareOps, "equalStrict", null);
        __decorate$5([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], CompareOps, "lessEqual", null);
        __decorate$5([
            operation
        ], CompareOps, "lessEqualStrict", null);
        __decorate$5([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], CompareOps, "greater", null);
        __decorate$5([
            operation
        ], CompareOps, "greaterStrict", null);
        __decorate$5([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], CompareOps, "greaterEqual", null);
        __decorate$5([
            operation
        ], CompareOps, "greaterEqualStrict", null);
        return CompareOps;
    }());

    function computePool2DInfo(inShape, filterSize, strides, pad, roundingMode, dataFormat) {
        if (dataFormat === void 0) { dataFormat = 'channelsLast'; }
        var _a = parseTupleParam(filterSize), filterHeight = _a[0], filterWidth = _a[1];
        var filterShape;
        if (dataFormat === 'channelsLast') {
            filterShape = [filterHeight, filterWidth, inShape[3], inShape[3]];
        }
        else if (dataFormat === 'channelsFirst') {
            filterShape = [filterHeight, filterWidth, inShape[1], inShape[1]];
        }
        else {
            throw new Error("Unknown dataFormat " + dataFormat);
        }
        var dilations = 1;
        return computeConv2DInfo(inShape, filterShape, strides, dilations, pad, roundingMode, false, dataFormat);
    }
    function computeConv2DInfo(inShape, filterShape, strides, dilations, pad, roundingMode, depthwise, dataFormat) {
        if (depthwise === void 0) { depthwise = false; }
        if (dataFormat === void 0) { dataFormat = 'channelsLast'; }
        var _a = [-1, -1, -1, -1], batchSize = _a[0], inHeight = _a[1], inWidth = _a[2], inChannels = _a[3];
        if (dataFormat === 'channelsLast') {
            batchSize = inShape[0], inHeight = inShape[1], inWidth = inShape[2], inChannels = inShape[3];
        }
        else if (dataFormat === 'channelsFirst') {
            batchSize = inShape[0], inChannels = inShape[1], inHeight = inShape[2], inWidth = inShape[3];
        }
        else {
            throw new Error("Unknown dataFormat " + dataFormat);
        }
        var filterHeight = filterShape[0], filterWidth = filterShape[1], filterChannels = filterShape[3];
        var _b = parseTupleParam(strides), strideHeight = _b[0], strideWidth = _b[1];
        var _c = parseTupleParam(dilations), dilationHeight = _c[0], dilationWidth = _c[1];
        var effectiveFilterHeight = getEffectiveFilterSize(filterHeight, dilationHeight);
        var effectiveFilterWidth = getEffectiveFilterSize(filterWidth, dilationWidth);
        var _d = getPadAndOutInfo(pad, inHeight, inWidth, strideHeight, strideWidth, effectiveFilterHeight, effectiveFilterWidth, roundingMode), padInfo = _d.padInfo, outHeight = _d.outHeight, outWidth = _d.outWidth;
        var outChannels = depthwise ? filterChannels * inChannels : filterChannels;
        var outShape;
        if (dataFormat === 'channelsFirst') {
            outShape = [batchSize, outChannels, outHeight, outWidth];
        }
        else if (dataFormat === 'channelsLast') {
            outShape = [batchSize, outHeight, outWidth, outChannels];
        }
        return {
            batchSize: batchSize,
            dataFormat: dataFormat,
            inHeight: inHeight,
            inWidth: inWidth,
            inChannels: inChannels,
            outHeight: outHeight,
            outWidth: outWidth,
            outChannels: outChannels,
            padInfo: padInfo,
            strideHeight: strideHeight,
            strideWidth: strideWidth,
            filterHeight: filterHeight,
            filterWidth: filterWidth,
            dilationHeight: dilationHeight,
            dilationWidth: dilationWidth,
            inShape: inShape,
            outShape: outShape,
            filterShape: filterShape
        };
    }
    function computeOutputShape3D(inShape, fieldSize, outDepth, stride, zeroPad, roundingMode) {
        if (zeroPad == null) {
            zeroPad = computeDefaultPad(inShape, fieldSize, stride);
        }
        var inputRows = inShape[0];
        var inputCols = inShape[1];
        var outputRows = conditionalRound((inputRows - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
        assert(isInt(outputRows), "The output # of rows (" + outputRows + ") must be an integer. Change the " +
            "stride and/or zero pad parameters");
        var outputCols = conditionalRound((inputCols - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
        assert(isInt(outputCols), "The output # of columns (" + outputCols + ") must be an integer. Change " +
            "the stride and/or zero pad parameters");
        return [outputRows, outputCols, outDepth];
    }
    function computeDefaultPad(inputShape, fieldSize, stride, dilation) {
        if (dilation === void 0) { dilation = 1; }
        var effectiveFieldSize = getEffectiveFilterSize(fieldSize, dilation);
        return Math.floor((inputShape[0] * (stride - 1) - stride + effectiveFieldSize) / 2);
    }
    function parseTupleParam(param) {
        return typeof param === 'number' ? [param, param] : param;
    }
    function getEffectiveFilterSize(filterSize, dilation) {
        if (dilation <= 1) {
            return filterSize;
        }
        return filterSize + (filterSize - 1) * (dilation - 1);
    }
    function getPadAndOutInfo(pad, inHeight, inWidth, strideHeight, strideWidth, filterHeight, filterWidth, roundingMode) {
        var padInfo;
        var outHeight;
        var outWidth;
        if (typeof pad === 'number') {
            var padType = (pad === 0) ? 'VALID' : 'NUMBER';
            padInfo = { top: pad, bottom: pad, left: pad, right: pad, type: padType };
            var outShape = computeOutputShape3D([inHeight, inWidth, 1], filterHeight, 1, strideHeight, pad, roundingMode);
            outHeight = outShape[0];
            outWidth = outShape[1];
        }
        else if (pad === 'same') {
            outHeight = Math.ceil(inHeight / strideHeight);
            outWidth = Math.ceil(inWidth / strideWidth);
            var padAlongHeight = (outHeight - 1) * strideHeight + filterHeight - inHeight;
            var padAlongWidth = (outWidth - 1) * strideWidth + filterWidth - inWidth;
            var top_1 = Math.floor(padAlongHeight / 2);
            var bottom = padAlongHeight - top_1;
            var left = Math.floor(padAlongWidth / 2);
            var right = padAlongWidth - left;
            padInfo = { top: top_1, bottom: bottom, left: left, right: right, type: 'SAME' };
        }
        else if (pad === 'valid') {
            padInfo = { top: 0, bottom: 0, left: 0, right: 0, type: 'VALID' };
            outHeight = Math.ceil((inHeight - filterHeight + 1) / strideHeight);
            outWidth = Math.ceil((inWidth - filterWidth + 1) / strideWidth);
        }
        else {
            throw Error("Unknown padding parameter: " + pad);
        }
        return { padInfo: padInfo, outHeight: outHeight, outWidth: outWidth };
    }
    function conditionalRound(value, roundingMode) {
        if (!roundingMode) {
            return value;
        }
        switch (roundingMode) {
            case 'round':
                return Math.round(value);
            case 'ceil':
                return Math.ceil(value);
            case 'floor':
                return Math.floor(value);
            default:
                throw new Error("Unknown roundingMode " + roundingMode);
        }
    }

    var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ConvOps = (function () {
        function ConvOps() {
        }
        ConvOps.conv1d = function (x, filter, stride, pad, dataFormat, dilation, dimRoundingMode) {
            if (dataFormat === void 0) { dataFormat = 'NWC'; }
            if (dilation === void 0) { dilation = 1; }
            assertArgumentsAreTensors({ x: x, filter: filter }, 'conv1d');
            var x3D = x;
            var reshapedTo3D = false;
            if (x.rank === 2) {
                reshapedTo3D = true;
                x3D = x.as3D(1, x.shape[0], x.shape[1]);
            }
            assert(x3D.rank === 3, "Error in conv1d: input must be rank 3, but got rank " + x3D.rank + ".");
            assert(filter.rank === 3, "Error in conv1d: filter must be rank 3, but got rank " +
                (filter.rank + "."));
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in conv1d: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            assert(x3D.shape[2] === filter.shape[1], "Error in conv1d: depth of input (" + x3D.shape[2] + ") must match  " +
                ("input depth for filter " + filter.shape[1] + "."));
            assert(eitherStridesOrDilationsAreOne(stride, dilation), 'Error in conv1D: Either stride or dilation must be 1.' +
                ("Got stride " + stride + " and dilation '" + dilation + "'"));
            assert(dataFormat === 'NWC', "Error in conv1d: got dataFormat of " + dataFormat + " but only NWC is currently supported.");
            var filter4D = filter.as4D(1, filter.shape[0], filter.shape[1], filter.shape[2]);
            var input4D = x3D.as4D(x3D.shape[0], 1, x3D.shape[1], x3D.shape[2]);
            var strides = [1, stride];
            var dilations = [1, dilation];
            var conv2dDataFormat = 'NHWC';
            var res = ConvOps.conv2d(input4D, filter4D, strides, pad, conv2dDataFormat, dilations, dimRoundingMode);
            if (reshapedTo3D) {
                return res.as2D(res.shape[2], res.shape[3]);
            }
            return res.as3D(res.shape[0], res.shape[2], res.shape[3]);
        };
        ConvOps.conv2d = function (x, filter, strides, pad, dataFormat, dilations, dimRoundingMode) {
            if (dataFormat === void 0) { dataFormat = 'NHWC'; }
            if (dilations === void 0) { dilations = [1, 1]; }
            assertArgumentsAreTensors({ x: x, filter: filter }, 'conv2d');
            var x4D = x;
            var reshapedTo4D = false;
            if (x.rank === 3) {
                reshapedTo4D = true;
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            assert(x4D.rank === 4, "Error in conv2d: input must be rank 4, but got rank " + x4D.rank + ".");
            assert(filter.rank === 4, "Error in conv2d: filter must be rank 4, but got rank " +
                (filter.rank + "."));
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in conv2d: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            assert(x4D.shape[3] === filter.shape[2], "Error in conv2d: depth of input (" + x4D.shape[3] + ") must match  " +
                ("input depth for filter " + filter.shape[2] + "."));
            assert(eitherStridesOrDilationsAreOne(strides, dilations), 'Error in conv2D: Either strides or dilations must be 1.' +
                ("Got strides " + strides + " and dilations '" + dilations + "'"));
            assert(dataFormat === 'NHWC', "Error in conv2d: got dataFormat of " + dataFormat + " but only NHWC is currently supported.");
            var convInfo = computeConv2DInfo(x4D.shape, filter.shape, strides, dilations, pad, dimRoundingMode);
            var grad = function (dy) {
                assert(tupleValuesAreOne(dilations), 'Error in gradient of conv2D: dilation rates greater than 1 are not' +
                    ("yet supported in gradients. Got dilations '" + dilations + "'"));
                return {
                    x: function () { return ConvOps.conv2dDerInput(x4D.shape, dy, filter, strides, pad); },
                    filter: function () {
                        return ConvOps.conv2dDerFilter(x4D, dy, filter.shape, strides, pad);
                    }
                };
            };
            var res = ENV.engine.runKernel(function (backend) { return backend.conv2d(x4D, filter, convInfo); }, { x: x4D, filter: filter }, grad);
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        ConvOps.conv2dDerInput = function (xShape, dy, filter, strides, pad, dimRoundingMode) {
            assertArgumentsAreTensors({ dy: dy, filter: filter }, 'conv2dDerInput');
            assert(xShape.length === dy.rank, "Length of inShape " +
                ("(" + xShape.length + ") and rank of dy (" + dy.rank + ") must match"));
            var xShape4D = xShape;
            var dy4D = dy;
            var reshapedTo4D = false;
            if (dy.rank === 3) {
                reshapedTo4D = true;
                dy4D = dy.as4D(1, dy.shape[0], dy.shape[1], dy.shape[2]);
                xShape4D = [1, xShape[0], xShape[1], xShape[2]];
            }
            var inDepth = xShape4D[3];
            var outDepth = dy4D.shape[3];
            assert(xShape4D.length === 4, "Error in conv2dDerInput: inShape must be length 4, but got length " +
                (xShape4D.length + "."));
            assert(dy4D.rank === 4, "Error in conv2dDerInput: dy must be rank 4, but got " +
                ("rank " + dy4D.rank));
            assert(filter.rank === 4, "Error in conv2dDerInput: filter must be rank 4, but got " +
                ("rank " + filter.rank));
            assert(inDepth === filter.shape[2], "Error in conv2dDerInput: depth of input (" + inDepth + ") must " +
                ("match input depth for filter " + filter.shape[2] + "."));
            assert(outDepth === filter.shape[3], "Error in conv2dDerInput: depth of output (" + outDepth + ") must" +
                ("match output depth for filter " + filter.shape[3] + "."));
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in conv2dDerInput: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            var dilations = 1;
            var convInfo = computeConv2DInfo(xShape4D, filter.shape, strides, dilations, pad, dimRoundingMode);
            var res = ENV.engine.runKernel(function (backend) { return backend.conv2dDerInput(dy4D, filter, convInfo); }, { dy4D: dy4D });
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        ConvOps.conv2dDerFilter = function (x, dy, filterShape, strides, pad, dimRoundingMode) {
            assertArgumentsAreTensors({ x: x, dy: dy }, 'conv2dDerFilter');
            var x4D = x;
            if (x.rank === 3) {
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            var dy4D = dy;
            if (dy4D.rank === 3) {
                dy4D = dy.as4D(1, dy.shape[0], dy.shape[1], dy.shape[2]);
            }
            assert(x4D.rank === 4, "Error in conv2dDerFilter: input must be rank 4, but got shape " +
                (x4D.shape + "."));
            assert(dy4D.rank === 4, "Error in conv2dDerFilter: dy must be rank 4, but got shape " +
                (dy4D.shape + "."));
            assert(filterShape.length === 4, "Error in conv2dDerFilter: filterShape must be length 4, but got " +
                (filterShape + "."));
            assert(x4D.shape[3] === filterShape[2], "Error in conv2dDerFilter: depth of input " + x4D.shape[3] + ") must " +
                ("match input depth in filter (" + filterShape[2] + "."));
            assert(dy4D.shape[3] === filterShape[3], "Error in conv2dDerFilter: depth of dy (" + dy4D.shape[3] + ") must " +
                ("match output depth for filter (" + filterShape[3] + ")."));
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in conv2dDerFilter: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            var dilations = 1;
            var convInfo = computeConv2DInfo(x4D.shape, filterShape, strides, dilations, pad, dimRoundingMode);
            return ENV.engine.runKernel(function (backend) { return backend.conv2dDerFilter(x4D, dy4D, convInfo); }, { x4D: x4D, dy4D: dy4D });
        };
        ConvOps.conv2dTranspose = function (x, filter, outputShape, strides, pad, dimRoundingMode) {
            assertArgumentsAreTensors({ x: x, filter: filter }, 'conv2dTranspose');
            return ConvOps.conv2dDerInput(outputShape, x, filter, strides, pad, dimRoundingMode);
        };
        ConvOps.depthwiseConv2d = function (x, filter, strides, pad, dataFormat, dilations, dimRoundingMode) {
            if (dataFormat === void 0) { dataFormat = 'NHWC'; }
            if (dilations === void 0) { dilations = [1, 1]; }
            assertArgumentsAreTensors({ x: x, filter: filter }, 'depthwiseConv2d');
            var x4D = x;
            var reshapedTo4D = false;
            if (x.rank === 3) {
                reshapedTo4D = true;
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            assert(x4D.rank === 4, "Error in depthwiseConv2D: input must be rank 4, but got " +
                ("rank " + x4D.rank + "."));
            assert(filter.rank === 4, "Error in depthwiseConv2D: filter must be rank 4, but got rank " +
                (filter.rank + "."));
            assert(x4D.shape[3] === filter.shape[2], "Error in depthwiseConv2D: number of input channels " +
                ("(" + x4D.shape[3] + ") must match the inChannels dimension in ") +
                ("filter " + filter.shape[2] + "."));
            if (dilations == null) {
                dilations = [1, 1];
            }
            assert(eitherStridesOrDilationsAreOne(strides, dilations), 'Error in depthwiseConv2d: Either strides or dilations must be 1.' +
                ("Got strides " + strides + " and dilations '" + dilations + "'"));
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in depthwiseConv2D: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            var convInfo = computeConv2DInfo(x4D.shape, filter.shape, strides, dilations, pad, dimRoundingMode, true);
            var res = ENV.engine.runKernel(function (backend) { return backend.depthwiseConv2D(x4D, filter, convInfo); }, { x4D: x4D, filter: filter });
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        ConvOps.separableConv2d = function (x, depthwiseFilter, pointwiseFilter, strides, pad, dilation, dataFormat) {
            if (dilation === void 0) { dilation = [1, 1]; }
            if (dataFormat === void 0) { dataFormat = 'NHWC'; }
            assertArgumentsAreTensors({ x: x, depthwiseFilter: depthwiseFilter, pointwiseFilter: pointwiseFilter }, 'separableConv2d');
            var x4D = x;
            var reshapedTo4D = false;
            if (x.rank === 3) {
                reshapedTo4D = true;
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            if (dataFormat === 'NCHW') {
                throw new Error('separableConv2d currently does not support dataFormat NCHW; only ' +
                    'NHWC is supported');
            }
            assert(x4D.rank === 4, "Error in separableConv2d: input must be rank 4, but got " +
                ("rank " + x4D.rank + "."));
            assert(depthwiseFilter.rank === 4, "Error in separableConv2d: depthwise filter must be rank 4, but got " +
                ("rank " + depthwiseFilter.rank + "."));
            assert(pointwiseFilter.rank === 4, "Error in separableConv2d: pointwise filter must be rank 4, but got " +
                ("rank " + depthwiseFilter.rank + "."));
            assert(pointwiseFilter.shape[0] === 1, "Error in separableConv2d: the first dimension of pointwise filter " +
                (" must be 1, but got " + pointwiseFilter.shape[0] + "."));
            assert(pointwiseFilter.shape[1] === 1, "Error in separableConv2d: the second dimension of pointwise filter " +
                (" must be 1, but got " + pointwiseFilter.shape[1] + "."));
            var inChannels = depthwiseFilter.shape[2];
            var channelMultiplier = depthwiseFilter.shape[3];
            assert(pointwiseFilter.shape[2] === inChannels * channelMultiplier, "Error in separableConv2d: the third dimension of pointwise filter " +
                ("must be " + inChannels * channelMultiplier + ", ") +
                ("but got " + pointwiseFilter.shape[2] + "."));
            var depthwise = ConvOps.depthwiseConv2d(x4D, depthwiseFilter, strides, pad, dataFormat, dilation);
            var pointwiseStride = 1;
            var res = ConvOps.conv2d(depthwise, pointwiseFilter, pointwiseStride, 'valid', dataFormat);
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        __decorate$6([
            doc({ heading: 'Operations', subheading: 'Convolution' }),
            operation
        ], ConvOps, "conv1d", null);
        __decorate$6([
            doc({ heading: 'Operations', subheading: 'Convolution' }),
            operation
        ], ConvOps, "conv2d", null);
        __decorate$6([
            operation
        ], ConvOps, "conv2dDerInput", null);
        __decorate$6([
            operation
        ], ConvOps, "conv2dDerFilter", null);
        __decorate$6([
            doc({ heading: 'Operations', subheading: 'Convolution' }),
            operation
        ], ConvOps, "conv2dTranspose", null);
        __decorate$6([
            doc({ heading: 'Operations', subheading: 'Convolution' }),
            operation
        ], ConvOps, "depthwiseConv2d", null);
        __decorate$6([
            doc({ heading: 'Operations', subheading: 'Convolution' }),
            operation
        ], ConvOps, "separableConv2d", null);
        return ConvOps;
    }());
    function parseTupleParam$1(param) {
        return typeof param === 'number' ? [param, param] : param;
    }
    function tupleValuesAreOne(param) {
        var _a = parseTupleParam$1(param), dimA = _a[0], dimB = _a[1];
        return dimA === 1 && dimB === 1;
    }
    function eitherStridesOrDilationsAreOne(strides, dilations) {
        return tupleValuesAreOne(strides) || tupleValuesAreOne(dilations);
    }

    var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ImageOps = (function () {
        function ImageOps() {
        }
        ImageOps.resizeBilinear = function (images, size, alignCorners) {
            if (alignCorners === void 0) { alignCorners = false; }
            assertArgumentsAreTensors({ images: images }, 'resizeBilinear');
            assert(images.rank === 3 || images.rank === 4, "Error in resizeBilinear: x must be rank 3 or 4, but got " +
                ("rank " + images.rank + "."));
            assert(size.length === 2, "Error in resizeBilinear: new shape must 2D, but got shape " +
                (size + "."));
            var batchImages = images;
            var reshapedTo4D = false;
            if (images.rank === 3) {
                reshapedTo4D = true;
                batchImages =
                    images.as4D(1, images.shape[0], images.shape[1], images.shape[2]);
            }
            var newHeight = size[0], newWidth = size[1];
            var forward = function (backend, save) {
                return backend.resizeBilinear(batchImages, newHeight, newWidth, alignCorners);
            };
            var backward = function (dy, saved) {
                return {
                    batchImages: function () { return ENV.engine.runKernel(function (backend) {
                        return backend.resizeBilinearBackprop(dy, batchImages, alignCorners);
                    }, {}); }
                };
            };
            var res = ENV.engine.runKernel(forward, { batchImages: batchImages }, backward);
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        ImageOps.resizeNearestNeighbor = function (images, size, alignCorners) {
            if (alignCorners === void 0) { alignCorners = false; }
            assertArgumentsAreTensors({ images: images }, 'resizeNearestNeighbor');
            assert(images.rank === 3 || images.rank === 4, "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got " +
                ("rank " + images.rank + "."));
            assert(size.length === 2, "Error in resizeNearestNeighbor: new shape must 2D, but got shape " +
                (size + "."));
            assert(images.dtype === 'float32' || images.dtype === 'int32', '`images` must have `int32` or `float32` as dtype');
            var batchImages = images;
            var reshapedTo4D = false;
            if (images.rank === 3) {
                reshapedTo4D = true;
                batchImages =
                    images.as4D(1, images.shape[0], images.shape[1], images.shape[2]);
            }
            var newHeight = size[0], newWidth = size[1];
            var res = ENV.engine.runKernel(function (backend) { return backend.resizeNearestNeighbor(batchImages, newHeight, newWidth, alignCorners); }, { batchImages: batchImages });
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        __decorate$7([
            doc({ heading: 'Operations', subheading: 'Images', namespace: 'image' }),
            operation
        ], ImageOps, "resizeBilinear", null);
        __decorate$7([
            doc({ heading: 'Operations', subheading: 'Images', namespace: 'image' }),
            operation
        ], ImageOps, "resizeNearestNeighbor", null);
        return ImageOps;
    }());

    var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Tracking = (function () {
        function Tracking() {
        }
        Tracking.tidy = function (nameOrFn, fn, gradMode) {
            if (gradMode === void 0) { gradMode = false; }
            var name = null;
            if (fn == null) {
                if (typeof nameOrFn !== 'function') {
                    throw new Error('Please provide a function to tidy()');
                }
                fn = nameOrFn;
            }
            else {
                if (typeof nameOrFn !== 'string' && !(nameOrFn instanceof String)) {
                    throw new Error('When calling with two arguments, the first argument ' +
                        'to tidy() must be a string');
                }
                if (typeof fn !== 'function') {
                    throw new Error('When calling with two arguments, the 2nd argument ' +
                        'to tidy() must be a function');
                }
                name = nameOrFn;
            }
            ENV.engine.startScope(name, gradMode);
            var result = fn();
            if (result instanceof Promise) {
                console.error('Cannot return a Promise inside of tidy.');
            }
            ENV.engine.endScope(result, gradMode);
            return result;
        };
        Tracking.dispose = function (container) {
            var tensors = extractTensorsFromAny(container);
            tensors.forEach(function (tensor) { return tensor.dispose(); });
        };
        Tracking.keep = function (result) {
            return ENV.engine.keep(result);
        };
        Tracking.time = function (f) {
            return ENV.engine.time(f);
        };
        __decorate$8([
            doc({ heading: 'Performance', subheading: 'Memory' })
        ], Tracking, "tidy", null);
        __decorate$8([
            doc({ heading: 'Performance', subheading: 'Memory' })
        ], Tracking, "keep", null);
        __decorate$8([
            doc({ heading: 'Performance', subheading: 'Timing' })
        ], Tracking, "time", null);
        return Tracking;
    }());

    var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var LinalgOps = (function () {
        function LinalgOps() {
        }
        LinalgOps.gramSchmidt = function (xs) {
            var inputIsTensor2D;
            if (Array.isArray(xs)) {
                inputIsTensor2D = false;
                assert(xs != null && xs.length > 0, 'Gram-Schmidt process: input must not be null, undefined, or empty');
                var dim = xs[0].shape[0];
                for (var i = 1; i < xs.length; ++i) {
                    assert(xs[i].shape[0] === dim, 'Gram-Schmidt: Non-unique lengths found in the input vectors: ' +
                        ("(" + xs[i].shape[0] + " vs. " + dim + ")"));
                }
            }
            else {
                inputIsTensor2D = true;
                xs = split(xs, xs.shape[0], 0).map(function (x) { return squeeze(x, [0]); });
            }
            assert(xs.length <= xs[0].shape[0], "Gram-Schmidt: Number of vectors (" + xs.length + ") exceeds " +
                ("number of dimensions (" + xs[0].shape[0] + ")."));
            var ys = [];
            var xs1d = xs;
            var _loop_1 = function (i) {
                ys.push(Tracking.tidy(function () {
                    var x = xs1d[i];
                    if (i > 0) {
                        for (var j = 0; j < i; ++j) {
                            var proj = sum(ys[j].mulStrict(x)).mul(ys[j]);
                            x = x.sub(proj);
                        }
                    }
                    return x.div(norm(x, 'euclidean'));
                }));
            };
            for (var i = 0; i < xs.length; ++i) {
                _loop_1(i);
            }
            if (inputIsTensor2D) {
                return stack(ys, 0);
            }
            else {
                return ys;
            }
        };
        __decorate$9([
            doc({ heading: 'Operations', subheading: 'Linear Algebra' }),
            operation
        ], LinalgOps, "gramSchmidt", null);
        return LinalgOps;
    }());

    var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var LogicalOps = (function () {
        function LogicalOps() {
        }
        LogicalOps.logicalNot = function (x) {
            assertArgumentsAreTensors({ x: x }, 'logicalNot');
            assert(x.dtype === 'bool', 'Error Array must be of type bool.');
            return ENV.engine.runKernel(function (backend) { return backend.logicalNot(x); }, { x: x });
        };
        LogicalOps.logicalAnd = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'logicalAnd');
            assert(a.dtype === 'bool' && b.dtype === 'bool', 'Error Array must be of type bool.');
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.logicalAnd(a, b); }, { a: a, b: b });
        };
        LogicalOps.logicalOr = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'logicalOr');
            assert(a.dtype === 'bool' && b.dtype === 'bool', 'Error Array must be of type bool.');
            assertAndGetBroadcastShape(a.shape, b.shape);
            return ENV.engine.runKernel(function (backend) { return backend.logicalOr(a, b); }, { a: a, b: b });
        };
        LogicalOps.logicalXor = function (a, b) {
            assertArgumentsAreTensors({ a: a, b: b }, 'logicalXor');
            assert(a.dtype === 'bool' && b.dtype === 'bool', 'Error Array must be of type bool.');
            assertAndGetBroadcastShape(a.shape, b.shape);
            return LogicalOps.logicalOr(a, b).logicalAnd(LogicalOps.logicalAnd(a, b).logicalNot());
        };
        LogicalOps.where = function (condition, a, b) {
            assertArgumentsAreTensors({ condition: condition, a: a, b: b }, 'where');
            assert(condition.dtype === 'bool' || a.dtype === 'bool' || b.dtype === 'bool', 'Error Array must be of type bool.');
            assertShapesMatch(a.shape, b.shape, 'Error in where: ');
            if (condition.rank === 1) {
                assert(condition.shape[0] === a.shape[0], 'The first dimension of `a` must match the size of `condition`.');
            }
            else {
                assertShapesMatch(condition.shape, b.shape, 'Error in where: ');
            }
            var dtype = upcastType(a.dtype, b.dtype);
            return ENV.engine.runKernel(function (backend) { return backend.where(condition, a, b, dtype); }, { condition: condition, a: a, b: b });
        };
        __decorate$a([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], LogicalOps, "logicalNot", null);
        __decorate$a([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], LogicalOps, "logicalAnd", null);
        __decorate$a([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], LogicalOps, "logicalOr", null);
        __decorate$a([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], LogicalOps, "logicalXor", null);
        __decorate$a([
            doc({ heading: 'Operations', subheading: 'Logical' }),
            operation
        ], LogicalOps, "where", null);
        return LogicalOps;
    }());

    var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Reduction;
    (function (Reduction) {
        Reduction[Reduction["NONE"] = 0] = "NONE";
        Reduction[Reduction["MEAN"] = 1] = "MEAN";
        Reduction[Reduction["SUM"] = 2] = "SUM";
        Reduction[Reduction["SUM_BY_NONZERO_WEIGHTS"] = 3] = "SUM_BY_NONZERO_WEIGHTS";
    })(Reduction || (Reduction = {}));
    var LossOps = (function () {
        function LossOps() {
        }
        LossOps.computeWeightedLoss = function (losses$$1, weights, reduction) {
            if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
            assertArgumentsAreTensors({ losses: losses$$1 }, 'computeWeightedLoss');
            if (weights != null) {
                assertArgumentsAreTensors({ weights: weights }, 'computeWeightedLoss');
            }
            var weightedLoss = (weights == null) ? losses$$1 : losses$$1.mul(weights);
            if (reduction === Reduction.NONE) {
                return weightedLoss;
            }
            if (reduction === Reduction.SUM) {
                return weightedLoss.sum();
            }
            if (reduction === Reduction.MEAN) {
                return (weights == null) ? weightedLoss.mean() :
                    weightedLoss.sum().div(weights.sum());
            }
            if (reduction === Reduction.SUM_BY_NONZERO_WEIGHTS) {
                if (weights == null) {
                    return weightedLoss.sum().div(scalar(losses$$1.size));
                }
                else {
                    var numNonZeros = weights.notEqual(scalar(0)).sum().toFloat();
                    return weightedLoss.sum().div(numNonZeros);
                }
            }
            throw Error("Unknown reduction: " + reduction);
        };
        LossOps.absoluteDifference = function (labels, predictions, weights, reduction) {
            if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
            assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'absoluteDifference');
            if (weights != null) {
                assertArgumentsAreTensors({ weights: weights }, 'absoluteDifference');
            }
            assertShapesMatch(labels.shape, predictions.shape, 'Error in absoluteDifference: ');
            var losses$$1 = labels.sub(predictions).abs();
            return LossOps.computeWeightedLoss(losses$$1, weights, reduction);
        };
        LossOps.meanSquaredError = function (labels, predictions, weights, reduction) {
            if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
            assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'meanSquaredError');
            if (weights != null) {
                assertArgumentsAreTensors({ weights: weights }, 'meanSquaredError');
            }
            assertShapesMatch(labels.shape, predictions.shape, 'Error in meanSquaredError: ');
            var losses$$1 = labels.squaredDifference(predictions);
            return LossOps.computeWeightedLoss(losses$$1, weights, reduction);
        };
        LossOps.cosineDistance = function (labels, predictions, axis, weights, reduction) {
            if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
            assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'cosineDistance');
            if (weights != null) {
                assertArgumentsAreTensors({ weights: weights }, 'cosineDistance');
            }
            assertShapesMatch(labels.shape, predictions.shape, 'Error in cosineDistance: ');
            var one = scalar(1);
            var losses$$1 = one.sub(labels.mul(predictions).sum(axis, true));
            return LossOps.computeWeightedLoss(losses$$1, weights, reduction);
        };
        LossOps.hingeLoss = function (labels, predictions, weights, reduction) {
            if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
            assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'hingeLoss');
            if (weights != null) {
                assertArgumentsAreTensors({ weights: weights }, 'hingeLoss');
            }
            assertShapesMatch(labels.shape, predictions.shape, 'Error in hingeLoss: ');
            var one = scalar(1);
            labels = scalar(2).mul(labels).sub(one);
            var losses$$1 = one.sub(labels.mul(predictions)).relu();
            return LossOps.computeWeightedLoss(losses$$1, weights, reduction);
        };
        LossOps.logLoss = function (labels, predictions, weights, epsilon, reduction) {
            if (epsilon === void 0) { epsilon = 1e-7; }
            if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
            assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'logLoss');
            if (weights != null) {
                assertArgumentsAreTensors({ weights: weights }, 'logLoss');
            }
            assertShapesMatch(labels.shape, predictions.shape, 'Error in logLoss: ');
            var one = scalar(1);
            var epsilonScalar = scalar(epsilon);
            var losses$$1 = labels.mul(predictions.add(epsilonScalar).log())
                .neg()
                .sub(one.sub(labels).mul(one.sub(predictions).add(epsilonScalar).log()));
            return LossOps.computeWeightedLoss(losses$$1, weights, reduction);
        };
        __decorate$b([
            doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
            operation
        ], LossOps, "computeWeightedLoss", null);
        __decorate$b([
            doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
            operation
        ], LossOps, "absoluteDifference", null);
        __decorate$b([
            doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
            operation
        ], LossOps, "meanSquaredError", null);
        __decorate$b([
            doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
            operation
        ], LossOps, "cosineDistance", null);
        __decorate$b([
            doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
            operation
        ], LossOps, "hingeLoss", null);
        __decorate$b([
            doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
            operation
        ], LossOps, "logLoss", null);
        return LossOps;
    }());

    var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var LRNOps = (function () {
        function LRNOps() {
        }
        LRNOps.localResponseNormalization = function (x, radius, bias, alpha, beta) {
            if (radius === void 0) { radius = 5; }
            if (bias === void 0) { bias = 1; }
            if (alpha === void 0) { alpha = 1; }
            if (beta === void 0) { beta = 0.5; }
            assertArgumentsAreTensors({ x: x }, 'localResponseNormalization');
            assert(x.rank === 4 || x.rank === 3, "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + x.rank + ".");
            assert(isInt(radius), "Error in localResponseNormalization3D: radius must be an integer\n                     but got radius " + radius + ".");
            var x4D = x;
            var reshapedTo4D = false;
            if (x.rank === 3) {
                reshapedTo4D = true;
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            var res = ENV.engine.runKernel(function (backend) { return backend.localResponseNormalization4D(x4D, radius, bias, alpha, beta); }, { x4D: x4D });
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            else {
                return res;
            }
        };
        __decorate$c([
            doc({ heading: 'Operations', subheading: 'Normalization' }),
            operation
        ], LRNOps, "localResponseNormalization", null);
        return LRNOps;
    }());

    var __decorate$d = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var LSTMOps = (function () {
        function LSTMOps() {
        }
        LSTMOps.multiRNNCell = function (lstmCells, data, c, h) {
            assertArgumentsAreTensors({ data: data, c: c, h: h }, 'multiRNNCell');
            var input = data;
            var newStates = [];
            for (var i = 0; i < lstmCells.length; i++) {
                var output = lstmCells[i](input, c[i], h[i]);
                newStates.push(output[0]);
                newStates.push(output[1]);
                input = output[1];
            }
            var newC = [];
            var newH = [];
            for (var i = 0; i < newStates.length; i += 2) {
                newC.push(newStates[i]);
                newH.push(newStates[i + 1]);
            }
            return [newC, newH];
        };
        LSTMOps.basicLSTMCell = function (forgetBias, lstmKernel, lstmBias, data, c, h) {
            assertArgumentsAreTensors({ forgetBias: forgetBias, lstmKernel: lstmKernel, lstmBias: lstmBias, data: data, c: c, h: h }, 'basicLSTMCell');
            var combined = data.concat(h, 1);
            var weighted = combined.matMul(lstmKernel);
            var res = weighted.add(lstmBias);
            var batchSize = res.shape[0];
            var sliceCols = res.shape[1] / 4;
            var sliceSize = [batchSize, sliceCols];
            var i = res.slice([0, 0], sliceSize);
            var j = res.slice([0, sliceCols], sliceSize);
            var f = res.slice([0, sliceCols * 2], sliceSize);
            var o = res.slice([0, sliceCols * 3], sliceSize);
            var newC = i.sigmoid().mulStrict(j.tanh()).addStrict(c.mulStrict(forgetBias.add(f).sigmoid()));
            var newH = newC.tanh().mulStrict(o.sigmoid());
            return [newC, newH];
        };
        __decorate$d([
            doc({ heading: 'Operations', subheading: 'RNN' }),
            operation
        ], LSTMOps, "multiRNNCell", null);
        __decorate$d([
            doc({ heading: 'Operations', subheading: 'RNN' }),
            operation
        ], LSTMOps, "basicLSTMCell", null);
        return LSTMOps;
    }());

    var __decorate$e = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var MatmulOps = (function () {
        function MatmulOps() {
        }
        MatmulOps.matMul = function (a, b, transposeA, transposeB) {
            if (transposeA === void 0) { transposeA = false; }
            if (transposeB === void 0) { transposeB = false; }
            assertArgumentsAreTensors({ a: a, b: b }, 'matMul');
            var innerShapeA = transposeA ? a.shape[0] : a.shape[1];
            var innerShapeB = transposeB ? b.shape[1] : b.shape[0];
            assert(a.rank === 2 && b.rank === 2, "Error in matMul: inputs must be rank 2, got ranks " + a.rank +
                (" and " + b.rank + "."));
            assert(innerShapeA === innerShapeB, "Error in matMul: inner shapes (" + innerShapeA + ") and (" +
                (innerShapeB + ") of Tensors with shapes " + a.shape + " and ") +
                (b.shape + " and transposeA=" + transposeA) +
                (" and transposeB=" + transposeB + " must match."));
            var grad = function (dy) {
                if (!transposeA && !transposeB) {
                    return {
                        a: function () { return dy.matMul(b.toFloat(), false, true); },
                        b: function () { return a.toFloat().matMul(dy, true, false); }
                    };
                }
                else if (!transposeA && transposeB) {
                    return {
                        a: function () { return dy.matMul(b.toFloat(), false, false); },
                        b: function () { return dy.matMul(a.toFloat(), true, false); }
                    };
                }
                else if (transposeA && !transposeB) {
                    return {
                        a: function () { return b.toFloat().matMul(dy, false, true); },
                        b: function () { return a.toFloat().matMul(dy, false, false); }
                    };
                }
                else {
                    return {
                        a: function () { return b.toFloat().matMul(dy, true, true); },
                        b: function () { return dy.matMul(a.toFloat(), true, true); }
                    };
                }
            };
            return ENV.engine.runKernel(function (backend) { return backend.matMul(a, b, transposeA, transposeB); }, { a: a, b: b }, grad);
        };
        MatmulOps.vectorTimesMatrix = function (v, matrix) {
            assert(v.rank === 1, "Error in vectorTimesMatrix: first input must be rank 1, but got " +
                ("rank " + v.rank + "."));
            assert(matrix.rank === 2, "Error in vectorTimesMatrix: second input must be rank 2, but got " +
                ("rank " + matrix.rank + "."));
            assert(v.size === matrix.shape[0], "Error in vectorTimesMatrix: size of vector (" + v.size + ") " +
                ("must match first dimension of matrix (" + matrix.shape[0] + ")"));
            return v.as2D(1, -1).matMul(matrix).as1D();
        };
        MatmulOps.matrixTimesVector = function (matrix, v) {
            assert(v.rank === 1, "Error in matrixTimesVector: second input must rank 1, but got " +
                ("rank " + v.rank + "."));
            assert(matrix.rank === 2, "Error in matrixTimesVector: first input must be a rank 2, but got " +
                ("rank " + matrix.rank + "."));
            assert(v.size === matrix.shape[1], "Error in matrixTimesVector: size of first rank 1 input " + v.size + " " +
                "must match inner dimension of second rank 2 input, but got " +
                ("shape " + matrix.shape + "."));
            return matrix.matMul(v.as2D(-1, 1)).as1D();
        };
        MatmulOps.dotProduct = function (v1, v2) {
            assert(v1.rank === 1 && v2.rank === 1, "Error in dotProduct: inputs must be rank 1, but got ranks " +
                (v1.rank + " and " + v2.rank + "."));
            assert(v1.size === v2.size, "Error in dotProduct: size of inputs (" + v1.size + ") and (" +
                (v2.size + ") must match."));
            return v1.as2D(1, -1).matMul(v2.as2D(-1, 1)).asScalar();
        };
        MatmulOps.outerProduct = function (v1, v2) {
            assert(v1.rank === 1 && v2.rank === 1, "Error in outerProduct: inputs must be rank 1, but got ranks " +
                (v1.rank + " and " + v2.rank + "."));
            return v1.as2D(-1, 1).matMul(v2.as2D(1, -1));
        };
        __decorate$e([
            doc({ heading: 'Operations', subheading: 'Matrices' }),
            operation
        ], MatmulOps, "matMul", null);
        __decorate$e([
            operation
        ], MatmulOps, "vectorTimesMatrix", null);
        __decorate$e([
            operation
        ], MatmulOps, "matrixTimesVector", null);
        __decorate$e([
            operation
        ], MatmulOps, "dotProduct", null);
        __decorate$e([
            doc({ heading: 'Operations', subheading: 'Matrices' }),
            operation
        ], MatmulOps, "outerProduct", null);
        return MatmulOps;
    }());

    var __decorate$f = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var MovingAverageOps = (function () {
        function MovingAverageOps() {
        }
        MovingAverageOps.movingAverage = function (v, x, decay, step, zeroDebias) {
            if (zeroDebias === void 0) { zeroDebias = true; }
            assertArgumentsAreTensors({ v: v, x: x }, 'movingAverage');
            assertTypesMatch(v, x);
            assert(arraysEqual(v.shape, x.shape), 'Shape mismatch in v and x');
            var one = ArrayOps.scalar(1);
            decay = typeof decay === 'number' ? ArrayOps.scalar(decay) : decay;
            var oneMinusDecay = one.sub(decay);
            var update = x.sub(v).mul(oneMinusDecay);
            if (zeroDebias) {
                assert(step != null, 'When using zeroDebias: true, step is required.');
                step = typeof step === 'number' ? ArrayOps.scalar(step) : step;
                update = update.div(one.sub(BinaryOps.pow(decay, step)));
            }
            return v.add(update);
        };
        __decorate$f([
            doc({ heading: 'Operations', subheading: 'Moving Average' }),
            operation
        ], MovingAverageOps, "movingAverage", null);
        return MovingAverageOps;
    }());

    var __decorate$g = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var NormOps = (function () {
        function NormOps() {
        }
        NormOps.norm = function (x, ord, axis, keepDims) {
            if (ord === void 0) { ord = 'euclidean'; }
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            assertArgumentsAreTensors({ x: x }, 'norm');
            var norm$$1 = normImpl(x, ord, axis);
            var keepDimsShape = norm$$1.shape;
            if (keepDims) {
                var axes = parseAxisParam(axis, x.shape);
                keepDimsShape = expandShapeToKeepDim(norm$$1.shape, axes);
            }
            return norm$$1.reshape(keepDimsShape);
        };
        __decorate$g([
            doc({ heading: 'Operations', subheading: 'Matrices' }),
            operation
        ], NormOps, "norm", null);
        return NormOps;
    }());
    function normImpl(x, p, axis) {
        if (axis === void 0) { axis = null; }
        if (x.rank === 0) {
            return x.abs();
        }
        if (x.rank !== 1 && axis === null) {
            return normImpl(x.reshape([-1]), p, axis);
        }
        if (x.rank === 1 || typeof axis === 'number' ||
            axis instanceof Array && axis.length === 1) {
            if (p === 1) {
                return x.abs().sum(axis);
            }
            if (p === Infinity) {
                return x.abs().max(axis);
            }
            if (p === -Infinity) {
                return x.abs().min(axis);
            }
            if (p === 'euclidean' || p === 2) {
                return x.abs().pow(scalar(2, 'int32')).sum(axis).sqrt();
            }
            throw new Error("Error in norm: invalid ord value: " + p);
        }
        if (axis instanceof Array && axis.length === 2) {
            if (p === 1) {
                return x.abs().sum(axis[0]).max(axis[1] - 1);
            }
            if (p === Infinity) {
                return x.abs().sum(axis[1]).max(axis[0]);
            }
            if (p === -Infinity) {
                return x.abs().sum(axis[1]).min(axis[0]);
            }
            if (p === 'fro' || p === 'euclidean') {
                return x.square().sum(axis).sqrt();
            }
            throw new Error("Error in norm: invalid ord value: " + p);
        }
        throw new Error("Error in norm: invalid axis: " + axis);
    }

    var __decorate$h = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var PoolOps = (function () {
        function PoolOps() {
        }
        PoolOps.maxPool = function (x, filterSize, strides, pad, dimRoundingMode) {
            assertArgumentsAreTensors({ x: x }, 'maxPool');
            var x4D = x;
            var reshapedTo4D = false;
            if (x.rank === 3) {
                reshapedTo4D = true;
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            assert(x4D.rank === 4, "Error in maxPool: input must be rank 4 but got rank " + x4D.rank + ".");
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in maxPool: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            var convInfo = computePool2DInfo(x4D.shape, filterSize, strides, pad, dimRoundingMode);
            var grad = function (dy, saved) {
                var y4D = saved[0];
                return {
                    x: function () { return PoolOps.maxPoolBackprop(dy, x4D, y4D, filterSize, strides, pad); }
                };
            };
            var res = ENV.engine.runKernel(function (backend, save) { return save(backend.maxPool(x4D, convInfo)); }, { x: x4D }, grad);
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        PoolOps.maxPoolBackprop = function (dy, input, output, filterSize, strides, pad, dimRoundingMode) {
            assertArgumentsAreTensors({ dy: dy, input: input, output: output }, 'maxPoolBackprop');
            assert(input.rank === dy.rank, "Rank of input (" + input.rank + ") does not match rank of dy (" + dy.rank + ")");
            assert(dy.rank === 4, "Error in maxPoolBackprop: dy must be rank 4 but got rank " +
                (dy.rank + "."));
            assert(input.rank === 4, "Error in maxPoolBackprop: input must be rank 4 but got rank " +
                (input.rank + "."));
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in maxPoolBackprop: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            var convInfo = computePool2DInfo(input.shape, filterSize, strides, pad, dimRoundingMode);
            var res = ENV.engine.runKernel(function (backend) { return backend.maxPoolBackprop(dy, input, output, convInfo); }, { dy: dy, input: input });
            return res;
        };
        PoolOps.avgPool = function (x, filterSize, strides, pad, dimRoundingMode) {
            assertArgumentsAreTensors({ x: x }, 'avgPool');
            assert(x.dtype === 'float32', 'The input dtype to avgPool must be float32');
            var x4D = x;
            var reshapedTo4D = false;
            if (x.rank === 3) {
                reshapedTo4D = true;
                x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
            }
            assert(x4D.rank === 4, "Error in avgPool: x must be rank 4 but got rank " + x4D.rank + ".");
            if (dimRoundingMode != null) {
                assert(isInt(pad), "Error in avgPool: pad must be an integer when using, " +
                    ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
            }
            var convInfo = computePool2DInfo(x4D.shape, filterSize, strides, pad);
            var grad = function (dy) {
                return {
                    x: function () { return PoolOps.avgPoolBackprop(dy, x4D, filterSize, strides, pad); }
                };
            };
            var res = ENV.engine.runKernel(function (backend) { return backend.avgPool(x4D, convInfo); }, { x: x4D }, grad);
            res = res.cast(x.dtype);
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        PoolOps.avgPoolBackprop = function (dy, input, filterSize, strides, pad) {
            assertArgumentsAreTensors({ dy: dy, input: input }, 'avgPoolBackprop');
            assert(input.rank === dy.rank, "Rank of input (" + input.rank + ") does not match rank of dy (" + dy.rank + ")");
            var input4D = input;
            var dy4D = dy;
            var reshapedTo4D = false;
            if (input.rank === 3) {
                reshapedTo4D = true;
                input4D = input.as4D(1, input.shape[0], input.shape[1], input.shape[2]);
                dy4D = dy.as4D(1, dy.shape[0], dy.shape[1], dy.shape[2]);
            }
            assert(dy4D.rank === 4, "Error in avgPoolBackprop: dy must be rank 4 but got rank " +
                (dy4D.rank + "."));
            assert(input4D.rank === 4, "Error in avgPoolBackprop: input must be rank 4 but got rank " +
                (input4D.rank + "."));
            var convInfo = computePool2DInfo(input4D.shape, filterSize, strides, pad);
            var res = ENV.engine.runKernel(function (backend) { return backend.avgPoolBackprop(dy4D, input4D, convInfo); }, { dy4D: dy4D, input4D: input4D });
            if (reshapedTo4D) {
                return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
            }
            return res;
        };
        __decorate$h([
            doc({ heading: 'Operations', subheading: 'Convolution' }),
            operation
        ], PoolOps, "maxPool", null);
        __decorate$h([
            operation
        ], PoolOps, "maxPoolBackprop", null);
        __decorate$h([
            doc({ heading: 'Operations', subheading: 'Convolution' }),
            operation
        ], PoolOps, "avgPool", null);
        __decorate$h([
            operation
        ], PoolOps, "avgPoolBackprop", null);
        return PoolOps;
    }());

    var __decorate$i = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ReverseOps = (function () {
        function ReverseOps() {
        }
        ReverseOps.reverse1d = function (x) {
            assert(x.rank === 1, "Error in reverse1D: x must be rank 1 but got\n             rank " + x.rank + ".");
            return ReverseOps.reverse(x, 0);
        };
        ReverseOps.reverse2d = function (x, axis) {
            assert(x.rank === 2, "Error in reverse2D: x must be rank 2 but got\n             rank " + x.rank + ".");
            return ReverseOps.reverse(x, axis);
        };
        ReverseOps.reverse3d = function (x, axis) {
            assert(x.rank === 3, "Error in reverse3D: x must be rank 3 but got\n             rank " + x.rank + ".");
            return ReverseOps.reverse(x, axis);
        };
        ReverseOps.reverse4d = function (x, axis) {
            assert(x.rank === 4, "Error in reverse4D: x must be rank 4 but got\n             rank " + x.rank + ".");
            return ReverseOps.reverse(x, axis);
        };
        ReverseOps.reverse = function (x, axis) {
            assertArgumentsAreTensors({ x: x }, 'reverse');
            if (x.rank === 0) {
                return x.clone();
            }
            var axes = parseAxisParam(axis, x.shape);
            var grad = function (dy) {
                return { x: function () { return dy.reverse(axes); } };
            };
            var res = ENV.engine.runKernel(function (backend) { return backend.reverse(x, axes); }, { x: x }, grad);
            return res.reshapeAs(x);
        };
        __decorate$i([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], ReverseOps, "reverse", null);
        return ReverseOps;
    }());

    function assertParamsValid(input, begin, size) {
        assert(input.rank === begin.length, "Error in slice" + input.rank + "D: Length of begin " + begin + " must " +
            ("match the rank of the array (" + input.rank + ")."));
        assert(input.rank === size.length, "Error in slice" + input.rank + "D: Length of size " + size + " must " +
            ("match the rank of the array (" + input.rank + ")."));
        for (var i = 0; i < input.rank; ++i) {
            assert(begin[i] + size[i] <= input.shape[i], "Error in slice" + input.rank + "D: begin[" + i + "] + size[" + i + "] " +
                ("(" + (begin[i] + size[i]) + ") would overflow input.shape[" + i + "] (" + input.shape[i] + ")"));
        }
    }
    function getStridedSlicedInfo(shape, begin, end, strides, beginMask, endMask) {
        if (beginMask === void 0) { beginMask = 0; }
        if (endMask === void 0) { endMask = 0; }
        var startIndex = [];
        var endIndex = [];
        for (var i = 0; i < shape.length; i++) {
            startIndex[i] = startForAxis(beginMask, begin, strides, shape, i);
            endIndex[i] = stopForAxis(endMask, end, strides, shape, i);
        }
        var size = new Array(shape.length).fill(0);
        size = size.map(function (d, i) {
            var count = 0;
            for (var start = startIndex[i]; !(strides[i] > 0 ? start >= endIndex[i] : start <= endIndex[i]); start += strides[i]) {
                count += 1;
            }
            return count;
        });
        return [startIndex, size];
    }
    function startForAxis(beginMask, startIndices, strides, inputShape, axis) {
        var start = startIndices[axis];
        if (beginMask & 1 << axis) {
            if (strides[axis] > 0) {
                start = Number.MIN_SAFE_INTEGER;
            }
            else {
                start = Number.MAX_SAFE_INTEGER;
            }
        }
        var axisSize = inputShape[axis];
        if (start < 0) {
            start += axisSize;
        }
        start = clamp(0, start, axisSize - 1);
        return start;
    }
    function stopForAxis(endMask, stopIndices, strides, inputShape, axis) {
        var stop = stopIndices[axis];
        if (endMask & (1 << axis)) {
            if (strides[axis] > 0) {
                stop = Number.MAX_SAFE_INTEGER;
            }
            else {
                stop = Number.MIN_SAFE_INTEGER;
            }
        }
        var axisSize = inputShape[axis];
        if (stop < 0) {
            stop += axisSize;
        }
        if (strides[axis] > 0) {
            stop = clamp(0, stop, axisSize);
        }
        else {
            stop = clamp(-1, stop, axisSize - 1);
        }
        return stop;
    }

    var __decorate$j = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var SliceOps = (function () {
        function SliceOps() {
        }
        SliceOps.slice1d = function (x, begin, size) {
            assert(x.rank === 1, "slice1d expects a rank-1 tensor, but got a rank-" + x.rank + " tensor");
            return SliceOps.slice(x, [begin], [size]);
        };
        SliceOps.slice2d = function (x, begin, size) {
            assert(x.rank === 2, "slice1d expects a rank-2 tensor, but got a rank-" + x.rank + " tensor");
            return SliceOps.slice(x, begin, size);
        };
        SliceOps.slice3d = function (x, begin, size) {
            assert(x.rank === 3, "slice1d expects a rank-3 tensor, but got a rank-" + x.rank + " tensor");
            return SliceOps.slice(x, begin, size);
        };
        SliceOps.slice4d = function (x, begin, size) {
            assert(x.rank === 4, "slice1d expects a rank-4 tensor, but got a rank-" + x.rank + " tensor");
            return SliceOps.slice(x, begin, size);
        };
        SliceOps.slice = function (x, begin, size) {
            assertArgumentsAreTensors({ x: x }, 'slice');
            if (x.rank === 0) {
                throw new Error('Slicing scalar is not possible');
            }
            var begin_;
            if (typeof begin === 'number') {
                begin_ = [begin].concat(new Array(x.rank - 1).fill(0));
            }
            else if (begin.length < x.rank) {
                begin_ = begin.concat(new Array(x.rank - begin.length).fill(0));
            }
            else {
                begin_ = begin;
            }
            var size_;
            if (size == null) {
                size_ = new Array(x.rank).fill(-1);
            }
            else if (typeof size === 'number') {
                size_ = [size].concat(new Array(x.rank - 1).fill(-1));
            }
            else if (size.length < x.rank) {
                size_ = size.concat(new Array(x.rank - size.length).fill(-1));
            }
            else {
                size_ = size;
            }
            size_ = size_.map(function (d, i) {
                if (d >= 0) {
                    return d;
                }
                else {
                    assert(d === -1, 'Bad value in size');
                    return x.shape[i] - begin_[i];
                }
            });
            assertParamsValid(x, begin_, size_);
            var inputShape = x.shape;
            var grad = function (dy) {
                var paddings = [];
                for (var i = 0; i < dy.rank; i++) {
                    paddings.push([begin_[i], inputShape[i] - begin_[i] - size_[i]]);
                }
                return { x: function () { return dy.pad(paddings); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.slice(x, begin_, size_); }, { x: x }, grad);
        };
        __decorate$j([
            doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
            operation
        ], SliceOps, "slice", null);
        return SliceOps;
    }());

    var __decorate$k = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var SoftmaxOps = (function () {
        function SoftmaxOps() {
        }
        SoftmaxOps.softmax = function (logits, dim) {
            if (dim === void 0) { dim = -1; }
            assertArgumentsAreTensors({ logits: logits }, 'softmax');
            if (dim === -1) {
                dim = logits.rank - 1;
            }
            if (dim !== logits.rank - 1) {
                throw Error('Softmax along a non-last dimension is not yet supported. ' +
                    ("Logits was rank " + logits.rank + " and dim was " + dim));
            }
            var customOp = customGrad(function (logits) {
                var keepDims = true;
                var lse = logits.logSumExp([dim], keepDims);
                var logResult = logits.toFloat().sub(lse);
                var y = logResult.exp();
                var gradFunc = function (dy) {
                    var dyTimesY = dy.mul(y);
                    var keepDims = true;
                    return dyTimesY.sub(dyTimesY.sum([dim], keepDims).mul(y));
                };
                return { value: y, gradFunc: gradFunc };
            });
            return customOp(logits);
        };
        SoftmaxOps.softmaxCrossEntropy = function (labels, logits, dim) {
            if (dim === void 0) { dim = -1; }
            assertArgumentsAreTensors({ labels: labels, logits: logits }, 'softmaxCrossEntropy');
            assertShapesMatch(labels.shape, logits.shape, 'Error in softmaxCrossEntropy: ');
            if (dim === -1) {
                dim = logits.rank - 1;
            }
            if (dim !== logits.rank - 1) {
                throw Error("Softmax cross entropy along a non-last dimension is not yet " +
                    ("supported. Labels / logits was rank " + logits.rank + " ") +
                    ("and dim was " + dim));
            }
            var customOp = customGrad(function (labels, logits) {
                var predictedProbs = logits.softmax(dim);
                var costVector = scalar(1e-5).add(predictedProbs).log().mul(labels).neg();
                var value = costVector.sum([dim]);
                var gradFunc = function (dy) {
                    var dyShape = expandShapeToKeepDim(dy.shape, [dim]);
                    return [
                        dy.reshape(dyShape).mul(labels.toFloat().sub(predictedProbs)),
                        dy.reshape(dyShape).mul(predictedProbs.sub(labels.toFloat())),
                    ];
                };
                return { value: value, gradFunc: gradFunc };
            });
            return customOp(labels, logits);
        };
        __decorate$k([
            doc({ heading: 'Operations', subheading: 'Normalization' }),
            operation
        ], SoftmaxOps, "softmax", null);
        __decorate$k([
            doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
            operation
        ], SoftmaxOps, "softmaxCrossEntropy", null);
        return SoftmaxOps;
    }());

    var __decorate$l = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var StridedSliceOps = (function () {
        function StridedSliceOps() {
        }
        StridedSliceOps.stridedSlice = function (x, begin, end, strides, beginMask, endMask) {
            if (beginMask === void 0) { beginMask = 0; }
            if (endMask === void 0) { endMask = 0; }
            assertArgumentsAreTensors({ x: x }, 'stridedSlice');
            return ENV.engine.runKernel(function (backend) { return backend.stridedSlice(x, begin, end, strides, beginMask, endMask); }, { x: x });
        };
        __decorate$l([
            doc({ heading: 'Operations', subheading: 'Slicing and Joining' }),
            operation
        ], StridedSliceOps, "stridedSlice", null);
        return StridedSliceOps;
    }());

    var __decorate$m = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var TransposeOps = (function () {
        function TransposeOps() {
        }
        TransposeOps.transpose = function (x, perm) {
            assertArgumentsAreTensors({ x: x }, 'transpose');
            if (perm == null) {
                perm = x.shape.map(function (s, i) { return i; }).reverse();
            }
            assert(x.rank === perm.length, "Error in transpose: rank of input " + x.rank + " " +
                ("must match length of perm " + perm + "."));
            perm.forEach(function (axis) {
                assert(axis >= 0 && axis < x.rank, "All entries in 'perm' must be between 0 and " + (x.rank - 1) +
                    (" but got " + perm));
            });
            if (x.rank <= 1) {
                return x.clone();
            }
            var der = function (dy) {
                var undoPerm = getUndoAxesPermutation(perm);
                return { x: function () { return dy.transpose(undoPerm); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.transpose(x, perm); }, { x: x }, der);
        };
        __decorate$m([
            doc({ heading: 'Operations', subheading: 'Matrices' }),
            operation
        ], TransposeOps, "transpose", null);
        return TransposeOps;
    }());

    var SELU_SCALEALPHA = 1.7580993408473768599402175208123;
    var SELU_SCALE = 1.0507009873554804934193349852946;

    var __decorate$n = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var UnaryOps = (function () {
        function UnaryOps() {
        }
        UnaryOps.neg = function (x) {
            assertArgumentsAreTensors({ x: x }, 'neg');
            var grad = function (dy) {
                return { x: function () { return dy.neg(); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.neg(x); }, { x: x }, grad);
        };
        UnaryOps.ceil = function (x) {
            assertArgumentsAreTensors({ x: x }, 'ceil');
            var grad = function (dy) {
                return { x: function () { return zerosLike(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.ceil(x); }, { x: x }, grad);
        };
        UnaryOps.floor = function (x) {
            assertArgumentsAreTensors({ x: x }, 'floor');
            var grad = function (dy) {
                return { x: function () { return zerosLike(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.floor(x); }, { x: x }, grad);
        };
        UnaryOps.sign = function (x) {
            assertArgumentsAreTensors({ x: x }, 'sign');
            var grad = function (dy) {
                return { x: function () { return zerosLike(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.sign(x); }, { x: x }, grad);
        };
        UnaryOps.round = function (x) {
            assertArgumentsAreTensors({ x: x }, 'round');
            var grad = function (dy) {
                return { x: function () { return zerosLike(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.round(x); }, { x: x }, grad);
        };
        UnaryOps.exp = function (x) {
            assertArgumentsAreTensors({ x: x }, 'exp');
            var bck = function (dy, saved) {
                var y = saved[0];
                return { x: function () { return dy.mulStrict(y); } };
            };
            return ENV.engine.runKernel(function (backend, save) { return save(backend.exp(x)); }, { x: x }, bck);
        };
        UnaryOps.expm1 = function (x) {
            assertArgumentsAreTensors({ x: x }, 'expm1');
            var grad = function (dy) {
                return { x: function () { return dy.mulStrict(x.exp()); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.expm1(x); }, { x: x }, grad);
        };
        UnaryOps.log = function (x) {
            assertArgumentsAreTensors({ x: x }, 'log');
            var grad = function (dy) {
                return { x: function () { return dy.divStrict(x.toFloat()); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.log(x); }, { x: x }, grad);
        };
        UnaryOps.log1p = function (x) {
            assertArgumentsAreTensors({ x: x }, 'log1p');
            var grad = function (dy) {
                return { x: function () { return dy.divStrict(x.add(scalar(1))); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.log1p(x); }, { x: x }, grad);
        };
        UnaryOps.sqrt = function (x) {
            assertArgumentsAreTensors({ x: x }, 'sqrt');
            var grad = function (dy) {
                return { x: function () { return dy.divStrict(x.toFloat().sqrt().mul(scalar(2))); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.sqrt(x); }, { x: x }, grad);
        };
        UnaryOps.rsqrt = function (x) {
            assertArgumentsAreTensors({ x: x }, 'rsqrt');
            var grad = function (dy) {
                return {
                    x: function () { return dy.divStrict(x.pow(scalar(1.5)).mul(scalar(2))).neg(); }
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.rsqrt(x); }, { x: x }, grad);
        };
        UnaryOps.square = function (x) {
            assertArgumentsAreTensors({ x: x }, 'square');
            var grad = function (dy) {
                return { x: function () { return dy.mulStrict(x.toFloat().mul(scalar(2))); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.square(x); }, { x: x }, grad);
        };
        UnaryOps.reciprocal = function (x) {
            assertArgumentsAreTensors({ x: x }, 'reciprocal');
            var grad = function (dy) {
                return { x: function () { return dy.divStrict(x.square().neg()); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.reciprocal(x); }, { x: x }, grad);
        };
        UnaryOps.abs = function (x) {
            assertArgumentsAreTensors({ x: x }, 'abs');
            var grad = function (dy) {
                return { x: function () { return dy.mulStrict(x.toFloat().step(-1)); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.abs(x); }, { x: x }, grad);
        };
        UnaryOps.clipByValue = function (x, clipValueMin, clipValueMax) {
            assertArgumentsAreTensors({ x: x }, 'clipByValue');
            assert((clipValueMin <= clipValueMax), "Error in clip: min (" + clipValueMin + ") must be " +
                ("less than or equal to max (" + clipValueMax + ")."));
            var grad = function (dy) {
                return {
                    x: function () { return dy.where(x.greater(scalar(clipValueMin))
                        .logicalAnd(x.less(scalar(clipValueMax))), zerosLike(dy)); },
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.clip(x, clipValueMin, clipValueMax); }, { x: x }, grad);
        };
        UnaryOps.relu = function (x) {
            assertArgumentsAreTensors({ x: x }, 'relu');
            if (x.dtype === 'bool') {
                return x.toInt();
            }
            var grad = function (dy) {
                var stepRes = x.step();
                return { x: function () { return dy.mulStrict(stepRes.toFloat()); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.relu(x); }, { x: x }, grad);
        };
        UnaryOps.elu = function (x) {
            assertArgumentsAreTensors({ x: x }, 'elu');
            var grad = function (dy, saved) {
                var y = saved[0];
                return {
                    x: function () {
                        return ENV.engine.runKernel(function (backend) { return backend.eluDer(dy, y); }, { dy: dy, y: y });
                    }
                };
            };
            return ENV.engine.runKernel(function (backend, save) { return save(backend.elu(x)); }, { x: x }, grad);
        };
        UnaryOps.selu = function (x) {
            assertArgumentsAreTensors({ x: x }, 'selu');
            var grad = function (dy) {
                return {
                    x: function () {
                        var mask = x.greater(scalar(0));
                        var scaleAlpha = scalar(SELU_SCALEALPHA);
                        var scale = scalar(SELU_SCALE);
                        var greaterThanZeroDer = dy.mul(scale);
                        var lessEqualZeroDer = dy.mul(scaleAlpha).mul(x.toFloat().exp());
                        return where(mask, greaterThanZeroDer, lessEqualZeroDer);
                    }
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.selu(x); }, { x: x }, grad);
        };
        UnaryOps.leakyRelu = function (x, alpha) {
            if (alpha === void 0) { alpha = 0.2; }
            assertArgumentsAreTensors({ x: x }, 'leakyRelu');
            return maximum(scalar(alpha).mul(x), x);
        };
        UnaryOps.prelu = function (x, alpha) {
            assertArgumentsAreTensors({ x: x, alpha: alpha }, 'prelu');
            var zero = scalar(0);
            return maximum(zero, x).add(alpha.mul(minimum(zero, x)));
        };
        UnaryOps.sigmoid = function (x) {
            assertArgumentsAreTensors({ x: x }, 'sigmoid');
            var grad = function (dy, saved) {
                var y = saved[0];
                return { x: function () { return dy.mulStrict(y.mul(scalar(1).sub(y))); } };
            };
            return ENV.engine.runKernel(function (backend, save) { return save(backend.sigmoid(x)); }, { x: x }, grad);
        };
        UnaryOps.logSigmoid = function (x) {
            assertArgumentsAreTensors({ x: x }, 'logSigmoid');
            var grad = function (dy) {
                return { x: function () { return dy.mulStrict(x.neg().sigmoid()); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.softplus(x.neg()).neg(); }, { x: x }, grad);
        };
        UnaryOps.softplus = function (x) {
            assertArgumentsAreTensors({ x: x }, 'softplus');
            var grad = function (dy) {
                return { x: function () { return dy.mulStrict(x.sigmoid()); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.softplus(x); }, { x: x }, grad);
        };
        UnaryOps.sin = function (x) {
            assertArgumentsAreTensors({ x: x }, 'sin');
            var grad = function (dy) {
                return { x: function () { return x.toFloat().cos().mulStrict(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.sin(x); }, { x: x }, grad);
        };
        UnaryOps.cos = function (x) {
            assertArgumentsAreTensors({ x: x }, 'cos');
            var grad = function (dy) {
                return { x: function () { return x.toFloat().sin().neg().mulStrict(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.cos(x); }, { x: x }, grad);
        };
        UnaryOps.tan = function (x) {
            assertArgumentsAreTensors({ x: x }, 'tan');
            var grad = function (dy) {
                return { x: function () { return dy.divStrict(x.cos().square()); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.tan(x); }, { x: x }, grad);
        };
        UnaryOps.asin = function (x) {
            assertArgumentsAreTensors({ x: x }, 'asin');
            var grad = function (dy) {
                return {
                    x: function () {
                        return dy.divStrict(UnaryOps.sqrt(scalar(1).sub(x.toFloat().square())));
                    }
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.asin(x); }, { x: x }, grad);
        };
        UnaryOps.acos = function (x) {
            assertArgumentsAreTensors({ x: x }, 'acos');
            var grad = function (dy) {
                return {
                    x: function () {
                        return dy.divStrict(UnaryOps.sqrt(scalar(1).sub(x.toFloat().square())))
                            .neg();
                    }
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.acos(x); }, { x: x }, grad);
        };
        UnaryOps.atan = function (x) {
            assertArgumentsAreTensors({ x: x }, 'atan');
            var grad = function (dy) {
                return { x: function () { return dy.divStrict(scalar(1).add(x.toFloat().square())); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.atan(x); }, { x: x }, grad);
        };
        UnaryOps.sinh = function (x) {
            assertArgumentsAreTensors({ x: x }, 'sinh');
            var grad = function (dy) {
                return { x: function () { return x.toFloat().cosh().mulStrict(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.sinh(x); }, { x: x }, grad);
        };
        UnaryOps.cosh = function (x) {
            assertArgumentsAreTensors({ x: x }, 'cosh');
            var grad = function (dy) {
                return { x: function () { return x.toFloat().sinh().mulStrict(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.cosh(x); }, { x: x }, grad);
        };
        UnaryOps.tanh = function (x) {
            assertArgumentsAreTensors({ x: x }, 'tanh');
            var grad = function (dy, saved) {
                var y = saved[0];
                return { x: function () { return scalar(1).sub(y.square()).mulStrict(dy); } };
            };
            return ENV.engine.runKernel(function (backend, save) { return save(backend.tanh(x)); }, { x: x }, grad);
        };
        UnaryOps.asinh = function (x) {
            assertArgumentsAreTensors({ x: x }, 'asinh');
            var grad = function (dy) {
                return {
                    x: function () {
                        return dy.divStrict(UnaryOps.sqrt(scalar(1).add(x.toFloat().square())));
                    }
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.asinh(x); }, { x: x }, grad);
        };
        UnaryOps.acosh = function (x) {
            assertArgumentsAreTensors({ x: x }, 'acosh');
            var grad = function (dy) {
                return {
                    x: function () {
                        return dy.divStrict(UnaryOps.sqrt(x.toFloat().square().sub(scalar(1))));
                    }
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.acosh(x); }, { x: x }, grad);
        };
        UnaryOps.atanh = function (x) {
            assertArgumentsAreTensors({ x: x }, 'atanh');
            var grad = function (dy) {
                return { x: function () { return dy.divStrict(scalar(1).sub(x.toFloat().square())); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.atanh(x); }, { x: x }, grad);
        };
        UnaryOps.erf = function (x) {
            assert(x.dtype === 'int32' || x.dtype === 'float32', 'Input dtype must be `int32` or `float32`.');
            if (x.dtype === 'int32') {
                x = x.toFloat();
            }
            var grad = function (dy) {
                return {
                    x: function () {
                        return dy.mulStrict(scalar(2 / Math.sqrt(Math.PI))
                            .mul(x.square().neg().exp()));
                    }
                };
            };
            return ENV.engine.runKernel(function (backend) { return backend.erf(x); }, { x: x }, grad);
        };
        UnaryOps.step = function (x, alpha) {
            if (alpha === void 0) { alpha = 0.0; }
            assertArgumentsAreTensors({ x: x }, 'step');
            var grad = function (dy) {
                return { x: function () { return zerosLike(dy); } };
            };
            return ENV.engine.runKernel(function (backend) { return backend.step(x, alpha); }, { x: x }, grad);
        };
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "neg", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "ceil", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "floor", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "sign", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "round", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "exp", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "expm1", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "log", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "log1p", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "sqrt", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "rsqrt", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "square", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "reciprocal", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "abs", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "clipByValue", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "relu", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "elu", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "selu", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "leakyRelu", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "prelu", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "sigmoid", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "logSigmoid", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "softplus", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "sin", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "cos", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "tan", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "asin", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "acos", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "atan", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "sinh", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "cosh", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "tanh", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "asinh", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "acosh", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "atanh", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "erf", null);
        __decorate$n([
            doc({ heading: 'Operations', subheading: 'Basic math' }),
            operation
        ], UnaryOps, "step", null);
        return UnaryOps;
    }());

    var batchNormalization = BatchNormOps.batchNormalization;
    var batchNormalization2d = BatchNormOps.batchNormalization2d;
    var batchNormalization3d = BatchNormOps.batchNormalization3d;
    var batchNormalization4d = BatchNormOps.batchNormalization4d;
    var concat = ConcatOps.concat;
    var concat1d = ConcatOps.concat1d;
    var concat2d = ConcatOps.concat2d;
    var concat3d = ConcatOps.concat3d;
    var concat4d = ConcatOps.concat4d;
    var conv1d = ConvOps.conv1d;
    var conv2d = ConvOps.conv2d;
    var conv2dTranspose = ConvOps.conv2dTranspose;
    var depthwiseConv2d = ConvOps.depthwiseConv2d;
    var separableConv2d = ConvOps.separableConv2d;
    var matMul = MatmulOps.matMul;
    var matrixTimesVector = MatmulOps.matrixTimesVector;
    var outerProduct = MatmulOps.outerProduct;
    var vectorTimesMatrix = MatmulOps.vectorTimesMatrix;
    var avgPool = PoolOps.avgPool;
    var maxPool = PoolOps.maxPool;
    var transpose = TransposeOps.transpose;
    var reverse = ReverseOps.reverse;
    var reverse1d = ReverseOps.reverse1d;
    var reverse2d = ReverseOps.reverse2d;
    var reverse3d = ReverseOps.reverse3d;
    var reverse4d = ReverseOps.reverse4d;
    var slice = SliceOps.slice;
    var slice1d = SliceOps.slice1d;
    var slice2d = SliceOps.slice2d;
    var slice3d = SliceOps.slice3d;
    var slice4d = SliceOps.slice4d;
    var stridedSlice = StridedSliceOps.stridedSlice;
    var argMax = ReductionOps.argMax;
    var argMin = ReductionOps.argMin;
    var logSumExp = ReductionOps.logSumExp;
    var max = ReductionOps.max;
    var mean = ReductionOps.mean;
    var min = ReductionOps.min;
    var moments = ReductionOps.moments;
    var sum = ReductionOps.sum;
    var unsortedSegmentSum = ReductionOps.unsortedSegmentSum;
    var equal = CompareOps.equal;
    var equalStrict = CompareOps.equalStrict;
    var greater = CompareOps.greater;
    var greaterStrict = CompareOps.greaterStrict;
    var greaterEqual = CompareOps.greaterEqual;
    var greaterEqualStrict = CompareOps.greaterEqualStrict;
    var less = CompareOps.less;
    var lessStrict = CompareOps.lessStrict;
    var lessEqual = CompareOps.lessEqual;
    var lessEqualStrict = CompareOps.lessEqualStrict;
    var notEqual = CompareOps.notEqual;
    var notEqualStrict = CompareOps.notEqualStrict;
    var logicalNot = LogicalOps.logicalNot;
    var logicalAnd = LogicalOps.logicalAnd;
    var logicalOr = LogicalOps.logicalOr;
    var logicalXor = LogicalOps.logicalXor;
    var where = LogicalOps.where;
    var abs = UnaryOps.abs;
    var acos = UnaryOps.acos;
    var acosh = UnaryOps.acosh;
    var asin = UnaryOps.asin;
    var asinh = UnaryOps.asinh;
    var atan = UnaryOps.atan;
    var atanh = UnaryOps.atanh;
    var ceil = UnaryOps.ceil;
    var clipByValue = UnaryOps.clipByValue;
    var cos = UnaryOps.cos;
    var cosh = UnaryOps.cosh;
    var elu = UnaryOps.elu;
    var exp = UnaryOps.exp;
    var expm1 = UnaryOps.expm1;
    var floor = UnaryOps.floor;
    var sign = UnaryOps.sign;
    var leakyRelu = UnaryOps.leakyRelu;
    var log = UnaryOps.log;
    var log1p = UnaryOps.log1p;
    var logSigmoid = UnaryOps.logSigmoid;
    var neg = UnaryOps.neg;
    var prelu = UnaryOps.prelu;
    var relu = UnaryOps.relu;
    var reciprocal = UnaryOps.reciprocal;
    var round = UnaryOps.round;
    var selu = UnaryOps.selu;
    var sigmoid = UnaryOps.sigmoid;
    var sin = UnaryOps.sin;
    var sinh = UnaryOps.sinh;
    var softplus = UnaryOps.softplus;
    var sqrt = UnaryOps.sqrt;
    var rsqrt = UnaryOps.rsqrt;
    var square = UnaryOps.square;
    var step = UnaryOps.step;
    var tan = UnaryOps.tan;
    var tanh$1 = UnaryOps.tanh;
    var erf = UnaryOps.erf;
    var add = BinaryOps.add;
    var addStrict = BinaryOps.addStrict;
    var atan2 = BinaryOps.atan2;
    var div = BinaryOps.div;
    var divStrict = BinaryOps.divStrict;
    var maximum = BinaryOps.maximum;
    var maximumStrict = BinaryOps.maximumStrict;
    var minimum = BinaryOps.minimum;
    var minimumStrict = BinaryOps.minimumStrict;
    var mod = BinaryOps.mod;
    var modStrict = BinaryOps.modStrict;
    var mul = BinaryOps.mul;
    var mulStrict = BinaryOps.mulStrict;
    var pow = BinaryOps.pow;
    var powStrict = BinaryOps.powStrict;
    var sub = BinaryOps.sub;
    var subStrict = BinaryOps.subStrict;
    var squaredDifference = BinaryOps.squaredDifference;
    var squaredDifferenceStrict = BinaryOps.squaredDifferenceStrict;
    var norm = NormOps.norm;
    var cast = ArrayOps.cast;
    var clone = ArrayOps.clone;
    var fromPixels = ArrayOps.fromPixels;
    var toPixels = ArrayOps.toPixels;
    var ones = ArrayOps.ones;
    var onesLike = ArrayOps.onesLike;
    var zeros = ArrayOps.zeros;
    var zerosLike = ArrayOps.zerosLike;
    var eye = ArrayOps.eye;
    var rand = ArrayOps.rand;
    var randomNormal = ArrayOps.randomNormal;
    var truncatedNormal = ArrayOps.truncatedNormal;
    var randomUniform = ArrayOps.randomUniform;
    var multinomial = ArrayOps.multinomial;
    var reshape = ArrayOps.reshape;
    var squeeze = ArrayOps.squeeze;
    var tile = ArrayOps.tile;
    var gather = ArrayOps.gather;
    var oneHot = ArrayOps.oneHot;
    var linspace = ArrayOps.linspace;
    var range = ArrayOps.range;
    var buffer = ArrayOps.buffer;
    var fill = ArrayOps.fill;
    var tensor = ArrayOps.tensor;
    var scalar = ArrayOps.scalar;
    var tensor1d = ArrayOps.tensor1d;
    var tensor2d = ArrayOps.tensor2d;
    var tensor3d = ArrayOps.tensor3d;
    var tensor4d = ArrayOps.tensor4d;
    var print = ArrayOps.print;
    var expandDims = ArrayOps.expandDims;
    var stack = ArrayOps.stack;
    var unstack = ArrayOps.unstack;
    var split = ArrayOps.split;
    var cumsum = ArrayOps.cumsum;
    var pad = ArrayOps.pad;
    var pad1d = ArrayOps.pad1d;
    var pad2d = ArrayOps.pad2d;
    var pad3d = ArrayOps.pad3d;
    var pad4d = ArrayOps.pad4d;
    var movingAverage = MovingAverageOps.movingAverage;
    var basicLSTMCell = LSTMOps.basicLSTMCell;
    var multiRNNCell = LSTMOps.multiRNNCell;
    var softmax = SoftmaxOps.softmax;
    var localResponseNormalization = LRNOps.localResponseNormalization;
    var linalg = LinalgOps;
    var losses = {
        absoluteDifference: LossOps.absoluteDifference,
        computeWeightedLoss: LossOps.computeWeightedLoss,
        cosineDistance: LossOps.cosineDistance,
        hingeLoss: LossOps.hingeLoss,
        logLoss: LossOps.logLoss,
        meanSquaredError: LossOps.meanSquaredError,
        softmaxCrossEntropy: SoftmaxOps.softmaxCrossEntropy
    };
    var image = {
        resizeBilinear: ImageOps.resizeBilinear,
        resizeNearestNeighbor: ImageOps.resizeNearestNeighbor,
    };

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$o = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step$$1(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step$$1(generator["throw"](value)); } catch (e) { reject(e); } }
            function step$$1(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step$$1((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step$$1([n, v]); }; }
        function step$$1(op) {
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
    };
    var TensorBuffer = (function () {
        function TensorBuffer(shape, dtype, values) {
            this.dtype = dtype;
            if (values != null) {
                var n = values.length;
                var size = sizeFromShape(shape);
                assert(n === size, "Length of values '" + n + "' does not match the size " +
                    ("inferred by the shape '" + size + "'"));
            }
            this.shape = shape.slice();
            this.values =
                values || getTypedArrayFromDType(dtype, sizeFromShape(shape));
            this.strides = computeStrides(shape);
            this.size = sizeFromShape(shape);
        }
        TensorBuffer.prototype.set = function (value) {
            var locs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                locs[_i - 1] = arguments[_i];
            }
            if (locs.length === 0) {
                locs = [0];
            }
            assert(locs.length === this.rank, "The number of provided coordinates (" + locs.length + ") must " +
                ("match the rank (" + this.rank + ")"));
            var index = this.locToIndex(locs);
            this.values[index] = value;
        };
        TensorBuffer.prototype.get = function () {
            var locs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                locs[_i] = arguments[_i];
            }
            if (locs.length === 0) {
                locs = [0];
            }
            var index = locs[locs.length - 1];
            for (var i = 0; i < locs.length - 1; ++i) {
                index += this.strides[i] * locs[i];
            }
            return this.values[index];
        };
        TensorBuffer.prototype.locToIndex = function (locs) {
            if (this.rank === 0) {
                return 0;
            }
            else if (this.rank === 1) {
                return locs[0];
            }
            var index = locs[locs.length - 1];
            for (var i = 0; i < locs.length - 1; ++i) {
                index += this.strides[i] * locs[i];
            }
            return index;
        };
        TensorBuffer.prototype.indexToLoc = function (index) {
            if (this.rank === 0) {
                return [];
            }
            else if (this.rank === 1) {
                return [index];
            }
            var locs = new Array(this.shape.length);
            for (var i = 0; i < locs.length - 1; ++i) {
                locs[i] = Math.floor(index / this.strides[i]);
                index -= locs[i] * this.strides[i];
            }
            locs[locs.length - 1] = index;
            return locs;
        };
        Object.defineProperty(TensorBuffer.prototype, "rank", {
            get: function () {
                return this.shape.length;
            },
            enumerable: true,
            configurable: true
        });
        TensorBuffer.prototype.toTensor = function () {
            return Tensor.make(this.shape, { values: this.values }, this.dtype);
        };
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], TensorBuffer.prototype, "set", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], TensorBuffer.prototype, "get", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], TensorBuffer.prototype, "toTensor", null);
        TensorBuffer = __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], TensorBuffer);
        return TensorBuffer;
    }());
    var Tensor = (function () {
        function Tensor(shape, dtype, values, dataId) {
            this.isDisposed = false;
            this.size = sizeFromShape(shape);
            if (values != null) {
                assert(this.size === values.length, "Constructing tensor of shape (" + this.size + ") should match the " +
                    ("length of values (" + values.length + ")"));
            }
            this.shape = shape.slice();
            this.dtype = dtype || 'float32';
            this.strides = computeStrides(shape);
            this.dataId = dataId != null ? dataId : {};
            this.id = Tensor_1.nextId++;
            this.rankType = (this.rank < 5 ? this.rank.toString() : 'higher');
            ENV.engine.registerTensor(this);
            if (values != null) {
                ENV.engine.write(this.dataId, values);
            }
        }
        Tensor_1 = Tensor;
        Tensor.make = function (shape, data, dtype) {
            return new Tensor_1(shape, dtype, data.values, data.dataId);
        };
        Tensor.prototype.flatten = function () {
            this.throwIfDisposed();
            return this.as1D();
        };
        Tensor.prototype.asScalar = function () {
            this.throwIfDisposed();
            assert(this.size === 1, 'The array must have only 1 element.');
            return this.reshape([]);
        };
        Tensor.prototype.as1D = function () {
            this.throwIfDisposed();
            return this.reshape([this.size]);
        };
        Tensor.prototype.as2D = function (rows, columns) {
            this.throwIfDisposed();
            return this.reshape([rows, columns]);
        };
        Tensor.prototype.as3D = function (rows, columns, depth) {
            this.throwIfDisposed();
            return this.reshape([rows, columns, depth]);
        };
        Tensor.prototype.as4D = function (rows, columns, depth, depth2) {
            this.throwIfDisposed();
            return this.reshape([rows, columns, depth, depth2]);
        };
        Tensor.prototype.asType = function (dtype) {
            this.throwIfDisposed();
            return cast(this, dtype);
        };
        Object.defineProperty(Tensor.prototype, "rank", {
            get: function () {
                return this.shape.length;
            },
            enumerable: true,
            configurable: true
        });
        Tensor.prototype.get = function () {
            var locs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                locs[_i] = arguments[_i];
            }
            assert(locs.length === this.rank, 'Number of coordinates in get() must match the rank of the tensor');
            this.throwIfDisposed();
            if (locs.length === 0) {
                locs = [0];
            }
            var index = locs[locs.length - 1];
            for (var i = 0; i < locs.length - 1; ++i) {
                index += this.strides[i] * locs[i];
            }
            return this.dataSync()[index];
        };
        Tensor.prototype.buffer = function () {
            return buffer(this.shape, this.dtype, this.dataSync());
        };
        Tensor.prototype.data = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    this.throwIfDisposed();
                    return [2, ENV.engine.read(this.dataId)];
                });
            });
        };
        Tensor.prototype.dataSync = function () {
            this.throwIfDisposed();
            return ENV.engine.readSync(this.dataId);
        };
        Tensor.prototype.dispose = function () {
            if (this.isDisposed) {
                return;
            }
            this.isDisposed = true;
            ENV.engine.disposeTensor(this);
        };
        Tensor.prototype.throwIfDisposed = function () {
            if (this.isDisposed) {
                throw new Error("Tensor is disposed.");
            }
        };
        Tensor.prototype.toFloat = function () {
            return this.asType('float32');
        };
        Tensor.prototype.toInt = function () {
            return this.asType('int32');
        };
        Tensor.prototype.toBool = function () {
            return this.asType('bool');
        };
        Tensor.prototype.print = function (verbose) {
            if (verbose === void 0) { verbose = false; }
            return print(this, verbose);
        };
        Tensor.prototype.reshape = function (newShape) {
            this.throwIfDisposed();
            return reshape(this, newShape);
        };
        Tensor.prototype.reshapeAs = function (x) {
            this.throwIfDisposed();
            return this.reshape(x.shape);
        };
        Tensor.prototype.expandDims = function (axis) {
            if (axis === void 0) { axis = 0; }
            return expandDims(this, axis);
        };
        Tensor.prototype.cumsum = function (axis, exclusive, reverse$$1) {
            if (axis === void 0) { axis = 0; }
            if (exclusive === void 0) { exclusive = false; }
            if (reverse$$1 === void 0) { reverse$$1 = false; }
            return cumsum(this, axis, exclusive, reverse$$1);
        };
        Tensor.prototype.squeeze = function (axis) {
            this.throwIfDisposed();
            return squeeze(this, axis);
        };
        Tensor.prototype.clone = function () {
            this.throwIfDisposed();
            return clone(this);
        };
        Tensor.prototype.toString = function (verbose) {
            if (verbose === void 0) { verbose = false; }
            return tensorToString(this, verbose);
        };
        Tensor.prototype.tile = function (reps) {
            this.throwIfDisposed();
            return tile(this, reps);
        };
        Tensor.prototype.gather = function (indices, axis) {
            if (axis === void 0) { axis = 0; }
            this.throwIfDisposed();
            return gather(this, indices, axis);
        };
        Tensor.prototype.matMul = function (b, transposeA, transposeB) {
            if (transposeA === void 0) { transposeA = false; }
            if (transposeB === void 0) { transposeB = false; }
            this.throwIfDisposed();
            return matMul(this, b, transposeA, transposeB);
        };
        Tensor.prototype.norm = function (ord, axis, keepDims) {
            if (ord === void 0) { ord = 'euclidean'; }
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            this.throwIfDisposed();
            return norm(this, ord, axis, keepDims);
        };
        Tensor.prototype.slice = function (begin, size) {
            this.throwIfDisposed();
            return slice(this, begin, size);
        };
        Tensor.prototype.reverse = function (axis) {
            this.throwIfDisposed();
            return reverse(this, axis);
        };
        Tensor.prototype.concat = function (x, axis) {
            if (axis === void 0) { axis = 0; }
            this.throwIfDisposed();
            return concat([this, x], axis);
        };
        Tensor.prototype.stack = function (x, axis) {
            if (axis === void 0) { axis = 0; }
            return stack([this, x], axis);
        };
        Tensor.prototype.unstack = function (x, axis) {
            if (axis === void 0) { axis = 0; }
            return unstack(this, axis);
        };
        Tensor.prototype.pad = function (paddings, constantValue) {
            if (constantValue === void 0) { constantValue = 0; }
            return pad(this, paddings, constantValue);
        };
        Tensor.prototype.batchNormalization = function (mean$$1, variance, varianceEpsilon, scale, offset) {
            if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
            this.throwIfDisposed();
            return batchNormalization(this, mean$$1, variance, varianceEpsilon, scale, offset);
        };
        Tensor.prototype.logSumExp = function (axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            this.throwIfDisposed();
            return logSumExp(this, axis, keepDims);
        };
        Tensor.prototype.sum = function (axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            this.throwIfDisposed();
            return sum(this, axis, keepDims);
        };
        Tensor.prototype.mean = function (axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            this.throwIfDisposed();
            return mean(this, axis, keepDims);
        };
        Tensor.prototype.min = function (axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            this.throwIfDisposed();
            return min(this, axis, keepDims);
        };
        Tensor.prototype.max = function (axis, keepDims) {
            if (axis === void 0) { axis = null; }
            if (keepDims === void 0) { keepDims = false; }
            this.throwIfDisposed();
            return max(this, axis, keepDims);
        };
        Tensor.prototype.argMin = function (axis) {
            if (axis === void 0) { axis = null; }
            this.throwIfDisposed();
            return argMin(this, axis);
        };
        Tensor.prototype.argMax = function (axis) {
            if (axis === void 0) { axis = null; }
            this.throwIfDisposed();
            return argMax(this, axis);
        };
        Tensor.prototype.cast = function (dtype) {
            this.throwIfDisposed();
            return cast(this, dtype);
        };
        Tensor.prototype.add = function (x) {
            this.throwIfDisposed();
            return add(this, x);
        };
        Tensor.prototype.addStrict = function (x) {
            this.throwIfDisposed();
            return addStrict(this, x);
        };
        Tensor.prototype.sub = function (x) {
            this.throwIfDisposed();
            return sub(this, x);
        };
        Tensor.prototype.subStrict = function (x) {
            this.throwIfDisposed();
            return subStrict(this, x);
        };
        Tensor.prototype.pow = function (exp$$1) {
            this.throwIfDisposed();
            return pow(this, exp$$1);
        };
        Tensor.prototype.powStrict = function (exp$$1) {
            this.throwIfDisposed();
            return powStrict(this, exp$$1);
        };
        Tensor.prototype.mul = function (x) {
            this.throwIfDisposed();
            return mul(this, x);
        };
        Tensor.prototype.mulStrict = function (x) {
            this.throwIfDisposed();
            return mulStrict(this, x);
        };
        Tensor.prototype.div = function (x) {
            this.throwIfDisposed();
            return div(this, x);
        };
        Tensor.prototype.divStrict = function (x) {
            this.throwIfDisposed();
            return divStrict(this, x);
        };
        Tensor.prototype.minimum = function (x) {
            this.throwIfDisposed();
            return minimum(this, x);
        };
        Tensor.prototype.minimumStrict = function (x) {
            this.throwIfDisposed();
            return minimumStrict(this, x);
        };
        Tensor.prototype.maximum = function (x) {
            this.throwIfDisposed();
            return maximum(this, x);
        };
        Tensor.prototype.maximumStrict = function (x) {
            this.throwIfDisposed();
            return maximumStrict(this, x);
        };
        Tensor.prototype.mod = function (x) {
            this.throwIfDisposed();
            return mod(this, x);
        };
        Tensor.prototype.modStrict = function (x) {
            this.throwIfDisposed();
            return modStrict(this, x);
        };
        Tensor.prototype.squaredDifference = function (x) {
            this.throwIfDisposed();
            return squaredDifference(this, x);
        };
        Tensor.prototype.squaredDifferenceStrict = function (x) {
            this.throwIfDisposed();
            return squaredDifferenceStrict(this, x);
        };
        Tensor.prototype.transpose = function (perm) {
            this.throwIfDisposed();
            return transpose(this, perm);
        };
        Tensor.prototype.notEqual = function (x) {
            this.throwIfDisposed();
            return notEqual(this, x);
        };
        Tensor.prototype.notEqualStrict = function (x) {
            this.throwIfDisposed();
            return notEqualStrict(this, x);
        };
        Tensor.prototype.less = function (x) {
            this.throwIfDisposed();
            return less(this, x);
        };
        Tensor.prototype.lessStrict = function (x) {
            this.throwIfDisposed();
            return lessStrict(this, x);
        };
        Tensor.prototype.equal = function (x) {
            this.throwIfDisposed();
            return equal(this, x);
        };
        Tensor.prototype.equalStrict = function (x) {
            this.throwIfDisposed();
            return equalStrict(this, x);
        };
        Tensor.prototype.lessEqual = function (x) {
            this.throwIfDisposed();
            return lessEqual(this, x);
        };
        Tensor.prototype.lessEqualStrict = function (x) {
            this.throwIfDisposed();
            return lessEqualStrict(this, x);
        };
        Tensor.prototype.greater = function (x) {
            this.throwIfDisposed();
            return greater(this, x);
        };
        Tensor.prototype.greaterStrict = function (x) {
            this.throwIfDisposed();
            return greaterStrict(this, x);
        };
        Tensor.prototype.greaterEqual = function (x) {
            this.throwIfDisposed();
            return greaterEqual(this, x);
        };
        Tensor.prototype.greaterEqualStrict = function (x) {
            this.throwIfDisposed();
            return greaterEqualStrict(this, x);
        };
        Tensor.prototype.logicalAnd = function (x) {
            this.throwIfDisposed();
            return logicalAnd(this, x);
        };
        Tensor.prototype.logicalOr = function (x) {
            this.throwIfDisposed();
            return logicalOr(this, x);
        };
        Tensor.prototype.logicalNot = function () {
            this.throwIfDisposed();
            return logicalNot(this);
        };
        Tensor.prototype.logicalXor = function (x) {
            this.throwIfDisposed();
            return logicalXor(this, x);
        };
        Tensor.prototype.where = function (condition, x) {
            this.throwIfDisposed();
            return where(condition, this, x);
        };
        Tensor.prototype.neg = function () {
            this.throwIfDisposed();
            return neg(this);
        };
        Tensor.prototype.ceil = function () {
            this.throwIfDisposed();
            return ceil(this);
        };
        Tensor.prototype.floor = function () {
            this.throwIfDisposed();
            return floor(this);
        };
        Tensor.prototype.sign = function () {
            this.throwIfDisposed();
            return sign(this);
        };
        Tensor.prototype.exp = function () {
            this.throwIfDisposed();
            return exp(this);
        };
        Tensor.prototype.expm1 = function () {
            this.throwIfDisposed();
            return expm1(this);
        };
        Tensor.prototype.log = function () {
            this.throwIfDisposed();
            return log(this);
        };
        Tensor.prototype.log1p = function () {
            this.throwIfDisposed();
            return log1p(this);
        };
        Tensor.prototype.sqrt = function () {
            this.throwIfDisposed();
            return sqrt(this);
        };
        Tensor.prototype.rsqrt = function () {
            this.throwIfDisposed();
            return rsqrt(this);
        };
        Tensor.prototype.square = function () {
            this.throwIfDisposed();
            return square(this);
        };
        Tensor.prototype.reciprocal = function () {
            this.throwIfDisposed();
            return reciprocal(this);
        };
        Tensor.prototype.abs = function () {
            this.throwIfDisposed();
            return abs(this);
        };
        Tensor.prototype.clipByValue = function (min$$1, max$$1) {
            this.throwIfDisposed();
            return clipByValue(this, min$$1, max$$1);
        };
        Tensor.prototype.relu = function () {
            this.throwIfDisposed();
            return relu(this);
        };
        Tensor.prototype.elu = function () {
            this.throwIfDisposed();
            return elu(this);
        };
        Tensor.prototype.selu = function () {
            this.throwIfDisposed();
            return selu(this);
        };
        Tensor.prototype.leakyRelu = function (alpha) {
            if (alpha === void 0) { alpha = 0.2; }
            this.throwIfDisposed();
            return leakyRelu(this, alpha);
        };
        Tensor.prototype.prelu = function (alpha) {
            this.throwIfDisposed();
            return prelu(this, alpha);
        };
        Tensor.prototype.sigmoid = function () {
            this.throwIfDisposed();
            return sigmoid(this);
        };
        Tensor.prototype.logSigmoid = function () {
            this.throwIfDisposed();
            return logSigmoid(this);
        };
        Tensor.prototype.softplus = function () {
            this.throwIfDisposed();
            return softplus(this);
        };
        Tensor.prototype.sin = function () {
            this.throwIfDisposed();
            return sin(this);
        };
        Tensor.prototype.cos = function () {
            this.throwIfDisposed();
            return cos(this);
        };
        Tensor.prototype.tan = function () {
            this.throwIfDisposed();
            return tan(this);
        };
        Tensor.prototype.asin = function () {
            this.throwIfDisposed();
            return asin(this);
        };
        Tensor.prototype.acos = function () {
            this.throwIfDisposed();
            return acos(this);
        };
        Tensor.prototype.atan = function () {
            this.throwIfDisposed();
            return atan(this);
        };
        Tensor.prototype.sinh = function () {
            this.throwIfDisposed();
            return sinh(this);
        };
        Tensor.prototype.cosh = function () {
            this.throwIfDisposed();
            return cosh(this);
        };
        Tensor.prototype.tanh = function () {
            this.throwIfDisposed();
            return tanh$1(this);
        };
        Tensor.prototype.asinh = function () {
            this.throwIfDisposed();
            return asinh(this);
        };
        Tensor.prototype.acosh = function () {
            this.throwIfDisposed();
            return acosh(this);
        };
        Tensor.prototype.atanh = function () {
            this.throwIfDisposed();
            return atanh(this);
        };
        Tensor.prototype.erf = function () {
            this.throwIfDisposed();
            return erf(this);
        };
        Tensor.prototype.round = function () {
            this.throwIfDisposed();
            return round(this);
        };
        Tensor.prototype.step = function (alpha) {
            if (alpha === void 0) { alpha = 0.0; }
            this.throwIfDisposed();
            return step(this, alpha);
        };
        Tensor.prototype.softmax = function (dim) {
            if (dim === void 0) { dim = -1; }
            this.throwIfDisposed();
            return softmax(this, dim);
        };
        Tensor.prototype.resizeBilinear = function (newShape2D, alignCorners) {
            if (alignCorners === void 0) { alignCorners = false; }
            this.throwIfDisposed();
            return image.resizeBilinear(this, newShape2D, alignCorners);
        };
        Tensor.prototype.resizeNearestNeighbor = function (newShape2D, alignCorners) {
            if (alignCorners === void 0) { alignCorners = false; }
            this.throwIfDisposed();
            return image.resizeNearestNeighbor(this, newShape2D, alignCorners);
        };
        Tensor.prototype.conv1d = function (filter, stride, pad$$1, dataFormat, dilation, dimRoundingMode) {
            if (dataFormat === void 0) { dataFormat = 'NWC'; }
            if (dilation === void 0) { dilation = 1; }
            this.throwIfDisposed();
            return conv1d(this, filter, stride, pad$$1, dataFormat, dilation, dimRoundingMode);
        };
        Tensor.prototype.conv2d = function (filter, strides, pad$$1, dataFormat, dilations, dimRoundingMode) {
            if (dataFormat === void 0) { dataFormat = 'NHWC'; }
            if (dilations === void 0) { dilations = [1, 1]; }
            this.throwIfDisposed();
            return conv2d(this, filter, strides, pad$$1, dataFormat, dilations, dimRoundingMode);
        };
        Tensor.prototype.conv2dTranspose = function (filter, outputShape, strides, pad$$1, dimRoundingMode) {
            this.throwIfDisposed();
            return conv2dTranspose(this, filter, outputShape, strides, pad$$1, dimRoundingMode);
        };
        Tensor.prototype.depthwiseConv2D = function (filter, strides, pad$$1, dataFormat, dilations, dimRoundingMode) {
            if (dataFormat === void 0) { dataFormat = 'NHWC'; }
            if (dilations === void 0) { dilations = [1, 1]; }
            this.throwIfDisposed();
            return depthwiseConv2d(this, filter, strides, pad$$1, dataFormat, dilations, dimRoundingMode);
        };
        Tensor.prototype.avgPool = function (filterSize, strides, pad$$1, dimRoundingMode) {
            this.throwIfDisposed();
            return avgPool(this, filterSize, strides, pad$$1, dimRoundingMode);
        };
        Tensor.prototype.maxPool = function (filterSize, strides, pad$$1, dimRoundingMode) {
            this.throwIfDisposed();
            return maxPool(this, filterSize, strides, pad$$1, dimRoundingMode);
        };
        Tensor.prototype.localResponseNormalization = function (radius, bias, alpha, beta) {
            if (radius === void 0) { radius = 5; }
            if (bias === void 0) { bias = 1; }
            if (alpha === void 0) { alpha = 1; }
            if (beta === void 0) { beta = 0.5; }
            return localResponseNormalization(this, radius, bias, alpha, beta);
        };
        Tensor.prototype.variable = function (trainable, name, dtype) {
            if (trainable === void 0) { trainable = true; }
            this.throwIfDisposed();
            return Variable.variable(this, trainable, name, dtype);
        };
        Tensor.prototype.unsortedSegmentSum = function (segmentIds, numSegments, axis) {
            if (axis === void 0) { axis = 0; }
            this.throwIfDisposed();
            return unsortedSegmentSum(this, segmentIds, numSegments, axis);
        };
        Tensor.nextId = 0;
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "flatten", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "asScalar", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "as1D", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "as2D", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "as3D", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "as4D", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "asType", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "buffer", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "data", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "dataSync", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "dispose", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "toFloat", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "toInt", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "toBool", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "print", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "reshape", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "reshapeAs", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "expandDims", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "cumsum", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "squeeze", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "clone", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor.prototype, "toString", null);
        Tensor = Tensor_1 = __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Tensor);
        return Tensor;
        var Tensor_1;
    }());
    var Variable = (function (_super) {
        __extends(Variable, _super);
        function Variable(initialValue, trainable, name) {
            if (trainable === void 0) { trainable = true; }
            var _this = _super.call(this, initialValue.shape, initialValue.dtype, null, initialValue.dataId) || this;
            _this.trainable = trainable;
            _this.name = name;
            if (_this.name == null) {
                _this.name = Variable_1.nextVarId.toString();
                Variable_1.nextVarId++;
            }
            ENV.engine.registerVariable(_this);
            return _this;
        }
        Variable_1 = Variable;
        Variable.variable = function (initialValue, trainable, name, dtype) {
            if (trainable === void 0) { trainable = true; }
            if (dtype != null && dtype !== initialValue.dtype) {
                initialValue = initialValue.asType(dtype);
            }
            return new Variable_1(initialValue, trainable, name);
        };
        Variable.prototype.assign = function (newValue) {
            if (newValue.dtype !== this.dtype) {
                throw new Error("dtype of the new value (" + newValue.dtype + ") and " +
                    ("previous value (" + this.dtype + ") must match"));
            }
            if (!arraysEqual(newValue.shape, this.shape)) {
                throw new Error("shape of the new value (" + newValue.shape + ") and " +
                    ("previous value (" + this.shape + ") must match"));
            }
            ENV.engine.disposeTensor(this);
            this.dataId = newValue.dataId;
            ENV.engine.registerTensor(this);
        };
        Variable.nextVarId = 0;
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Variable.prototype, "assign", null);
        __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Creation' })
        ], Variable, "variable", null);
        Variable = Variable_1 = __decorate$o([
            doc({ heading: 'Tensors', subheading: 'Classes' })
        ], Variable);
        return Variable;
        var Variable_1;
    }(Tensor));
    var variable = Variable.variable;
    function computeStrides(shape) {
        var rank = shape.length;
        if (rank < 2) {
            return [];
        }
        var strides = new Array(rank - 1);
        strides[rank - 2] = shape[rank - 1];
        for (var i = rank - 3; i >= 0; --i) {
            strides[i] = strides[i + 1] * shape[i + 1];
        }
        return strides;
    }

    var __decorate$p = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Gradients = (function () {
        function Gradients() {
        }
        Gradients.gradScope = function (nameOrScopeFn, scopeFn) {
            return tidy(nameOrScopeFn, scopeFn, true);
        };
        Gradients.grad = function (f) {
            assert(isFunction(f), 'The f passed in grad(f) must be a function');
            return function (x, dy) {
                assert(x instanceof Tensor, 'The x passed in grad(f)(x) must be a tensor');
                assert(dy == null || dy instanceof Tensor, 'The dy passed in grad(f)(x, dy) must be a tensor');
                return tidy(function () {
                    var _a = ENV.engine.gradients(function () { return f(x); }, [x], dy), value = _a.value, grads$$1 = _a.grads;
                    if (dy != null) {
                        assertShapesMatch(value.shape, dy.shape, 'The shape of dy passed in grad(f)(x, dy) must match the shape ' +
                            'returned by f(x)');
                    }
                    checkGrads(grads$$1);
                    return grads$$1[0];
                });
            };
        };
        Gradients.grads = function (f) {
            assert(isFunction(f), 'The f passed in grads(f) must be a function');
            return function (args, dy) {
                assert(Array.isArray(args) && args.every(function (arg) { return arg instanceof Tensor; }), 'The args passed in grads(f)(args) must be an array of tensors');
                assert(dy == null || dy instanceof Tensor, 'The dy passed in grads(f)(args, dy) must be a tensor');
                return tidy(function () {
                    var _a = ENV.engine.gradients(function () { return f.apply(void 0, args); }, args, dy), value = _a.value, grads$$1 = _a.grads;
                    if (dy != null) {
                        assertShapesMatch(value.shape, dy.shape, 'The shape of dy passed in grads(f)([x1,...], dy) must ' +
                            'match the shape returned by f([x1,...])');
                    }
                    checkGrads(grads$$1);
                    return grads$$1;
                });
            };
        };
        Gradients.valueAndGrad = function (f) {
            assert(isFunction(f), 'The f passed in valueAndGrad(f) must be a function');
            return function (x, dy) {
                assert(x instanceof Tensor, 'The x passed in valueAndGrad(f)(x) must be a tensor');
                assert(dy == null || dy instanceof Tensor, 'The dy passed in valueAndGrad(f)(x, dy) must be a tensor');
                var _a = ENV.engine.gradients(function () { return f(x); }, [x], dy), grads$$1 = _a.grads, value = _a.value;
                checkGrads(grads$$1);
                return { grad: grads$$1[0], value: value };
            };
        };
        Gradients.valueAndGrads = function (f) {
            assert(isFunction(f), 'The f passed in valueAndGrads(f) must be a function');
            return function (args, dy) {
                assert(Array.isArray(args) && args.every(function (arg) { return arg instanceof Tensor; }), 'The args passed in valueAndGrads(f)(args) must be array of tensors');
                assert(dy == null || dy instanceof Tensor, 'The dy passed in valueAndGrads(f)(args, dy) must be a tensor');
                var res = ENV.engine.gradients(function () { return f.apply(void 0, args); }, args, dy);
                if (dy != null) {
                    assertShapesMatch(res.value.shape, dy.shape, 'The shape of dy passed in valueAndGrads(f)([x1,...], dy) must ' +
                        'match the shape returned by f([x1,...])');
                }
                checkGrads(res.grads);
                return res;
            };
        };
        Gradients.variableGrads = function (f, varList) {
            assert(isFunction(f), 'The f passed in variableGrads(f) must be a function');
            assert(varList == null ||
                Array.isArray(varList) && varList.every(function (v) { return v instanceof Variable; }), 'The varList passed in variableGrads(f, varList) must be an array ' +
                'of variables');
            if (varList == null) {
                varList = [];
                for (var varName in ENV.engine.registeredVariables) {
                    varList.push(ENV.engine.registeredVariables[varName]);
                }
            }
            var originalVarCount = varList.length;
            varList = varList.filter(function (variable$$1) { return variable$$1.trainable; });
            assert(varList.length > 0, "variableGrads() expects at least one of the input variables to be " +
                ("trainable, but none of the " + originalVarCount + " variables is ") +
                "trainable.");
            var allowNoGradients = true;
            var _a = ENV.engine.gradients(f, varList, null, allowNoGradients), value = _a.value, grads$$1 = _a.grads;
            assert(grads$$1.some(function (g) { return g != null; }), 'Cannot find a connection between any variable and the result of the ' +
                'loss function y=f(x). Please make sure the operations that use ' +
                'variables are inside the function f passed to minimize().');
            assert(value.rank === 0, "The f passed in variableGrads(f) must return a scalar, but it " +
                ("returned a rank-" + value.rank + " tensor"));
            var namedGrads = {};
            varList.forEach(function (v, i) {
                if (grads$$1[i] != null) {
                    namedGrads[v.name] = grads$$1[i];
                }
            });
            return { value: value, grads: namedGrads };
        };
        Gradients.customGrad = function (f) {
            return ENV.engine.customGrad(f);
        };
        __decorate$p([
            doc({ heading: 'Training', subheading: 'Gradients' })
        ], Gradients, "grad", null);
        __decorate$p([
            doc({ heading: 'Training', subheading: 'Gradients' })
        ], Gradients, "grads", null);
        __decorate$p([
            doc({ heading: 'Training', subheading: 'Gradients' })
        ], Gradients, "valueAndGrad", null);
        __decorate$p([
            doc({ heading: 'Training', subheading: 'Gradients' })
        ], Gradients, "valueAndGrads", null);
        __decorate$p([
            doc({ heading: 'Training', subheading: 'Gradients' })
        ], Gradients, "variableGrads", null);
        __decorate$p([
            doc({ heading: 'Training', subheading: 'Gradients' })
        ], Gradients, "customGrad", null);
        return Gradients;
    }());
    function checkGrads(grads$$1) {
        var numNullGradients = grads$$1.filter(function (g) { return g == null; }).length;
        if (numNullGradients > 0) {
            throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.");
        }
    }

    var tidy = Tracking.tidy;
    var keep = Tracking.keep;
    var dispose = Tracking.dispose;
    var time = Tracking.time;
    var grad = Gradients.grad;
    var valueAndGrad = Gradients.valueAndGrad;
    var grads = Gradients.grads;
    var valueAndGrads = Gradients.valueAndGrads;
    var variableGrads = Gradients.variableGrads;
    var customGrad = Gradients.customGrad;

    var Profiler = (function () {
        function Profiler(backendTimer, logger) {
            this.backendTimer = backendTimer;
            this.logger = logger;
            if (logger == null) {
                this.logger = new Logger();
            }
        }
        Profiler.prototype.profileKernel = function (name, f) {
            var _this = this;
            var result;
            var holdResultWrapperFn = function () {
                result = f();
            };
            var timer = this.backendTimer.time(holdResultWrapperFn);
            var vals = result.dataSync();
            checkForNaN(vals, result.dtype, name);
            timer.then(function (timing) {
                _this.logger.logKernelProfile(name, result, vals, timing.kernelMs);
            });
            return result;
        };
        return Profiler;
    }());
    var Logger = (function () {
        function Logger() {
        }
        Logger.prototype.logKernelProfile = function (name, result, vals, timeMs) {
            var time = rightPad(timeMs + "ms", 9);
            var paddedName = rightPad(name, 25);
            var rank = result.rank;
            var size = result.size;
            var shape = rightPad(result.shape.toString(), 14);
            console.log("%c" + paddedName + "\t%c" + time + "\t%c" + rank + "D " + shape + "\t%c" + size, 'font-weight:bold', 'color:red', 'color:blue', 'color: orange');
        };
        return Logger;
    }());

    function getFilteredNodesXToY(tape, xs, y) {
        var tensorsFromX = {};
        var nodesFromX = {};
        for (var i = 0; i < xs.length; i++) {
            tensorsFromX[xs[i].id] = true;
        }
        for (var i = 0; i < tape.length; i++) {
            var node = tape[i];
            var nodeInputs = node.inputs;
            for (var inputName in nodeInputs) {
                var input = nodeInputs[inputName];
                var anyInputFromX = false;
                for (var j = 0; j < xs.length; j++) {
                    if (tensorsFromX[input.id]) {
                        tensorsFromX[node.output.id] = true;
                        anyInputFromX = true;
                        nodesFromX[node.id] = true;
                        break;
                    }
                }
                if (anyInputFromX) {
                    break;
                }
            }
        }
        var tensorsLeadToY = {};
        tensorsLeadToY[y.id] = true;
        var nodesToY = {};
        for (var i = tape.length - 1; i >= 0; i--) {
            var node = tape[i];
            var nodeInputs = node.inputs;
            var outputs = [];
            outputs.push(node.output);
            for (var j = 0; j < outputs.length; j++) {
                if (tensorsLeadToY[outputs[j].id]) {
                    for (var inputName in nodeInputs) {
                        tensorsLeadToY[nodeInputs[inputName].id] = true;
                        nodesToY[node.id] = true;
                    }
                    break;
                }
            }
        }
        var filteredTape = [];
        for (var i = 0; i < tape.length; i++) {
            var node = tape[i];
            if (nodesFromX[node.id] && nodesToY[node.id]) {
                var prunedInputs = {};
                for (var inputName in node.inputs) {
                    var nodeInput = node.inputs[inputName];
                    if (tensorsFromX[nodeInput.id]) {
                        prunedInputs[inputName] = nodeInput;
                    }
                }
                var prunedNode = Object.assign({}, node);
                prunedNode.inputs = prunedInputs;
                prunedNode.output = node.output;
                filteredTape.push(prunedNode);
            }
        }
        return filteredTape;
    }
    function backpropagateGradients(tensorAccumulatedGradientMap, filteredTape) {
        for (var i = filteredTape.length - 1; i >= 0; i--) {
            var node = filteredTape[i];
            var dy = tensorAccumulatedGradientMap[node.output.id];
            if (node.gradient == null) {
                throw new Error("Cannot compute gradient: gradient function not found " +
                    ("for " + node.name + "."));
            }
            var inputGradients = node.gradient(dy);
            for (var inputName in node.inputs) {
                if (!(inputName in inputGradients)) {
                    throw new Error("Cannot backprop through input " + inputName + ". " +
                        ("Available gradients found: " + Object.keys(inputGradients) + "."));
                }
                var dx = inputGradients[inputName]();
                var x = node.inputs[inputName];
                if (!arraysEqual(dx.shape, x.shape)) {
                    throw new Error("Error in gradient for op " + node.name + ". The gradient of input " +
                        ("'" + inputName + "' has shape '" + dx.shape + "', which does not match ") +
                        ("the shape of the input '" + x.shape + "'"));
                }
                if (tensorAccumulatedGradientMap[x.id] == null) {
                    tensorAccumulatedGradientMap[x.id] = dx;
                }
                else {
                    var curGradient = tensorAccumulatedGradientMap[x.id];
                    tensorAccumulatedGradientMap[x.id] = curGradient.add(dx);
                    curGradient.dispose();
                }
            }
        }
    }

    var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step$$1(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step$$1(generator["throw"](value)); } catch (e) { reject(e); } }
            function step$$1(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step$$1((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$2 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step$$1([n, v]); }; }
        function step$$1(op) {
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
    };
    var Engine = (function () {
        function Engine(backend, safeMode) {
            this.backend = backend;
            this.safeMode = safeMode;
            this.registeredVariables = {};
            this.refCounter = new WeakMap();
            this.nextTapeNodeId = 0;
            this.numBytes = 0;
            this.numTensors = 0;
            this.numDataBuffers = 0;
            this.gradientScopeCount = 0;
            this.customGradientDepth = 0;
            this.activeScope = { keep: [], track: [] };
            this.scopeStack = [this.activeScope];
            this.profiler = new Profiler(backend);
        }
        Engine.prototype.runKernel = function (forwardFunc, inputs, backwardsFunc) {
            var _this = this;
            var result;
            var saved = [];
            var saveFunc = function (x) {
                saved.push(x);
                return x;
            };
            var scopeName = this.activeScope.name;
            this.customGradientDepth++;
            if (!ENV.get('DEBUG')) {
                result = forwardFunc(this.backend, saveFunc);
            }
            else {
                result = this.profiler.profileKernel(scopeName, function () { return forwardFunc(_this.backend, saveFunc); });
            }
            this.customGradientDepth--;
            if (this.shouldRecord()) {
                var tapeNode = {
                    id: this.nextTapeNodeId++,
                    name: scopeName,
                    inputs: inputs,
                    output: result,
                };
                if (backwardsFunc != null) {
                    tapeNode.gradient = function (dy) { return backwardsFunc(dy, saved); };
                }
                this.activeTape.push(tapeNode);
            }
            return result;
        };
        Engine.prototype.registerTensor = function (a) {
            var refCount = this.refCounter.has(a.dataId) ? this.refCounter.get(a.dataId) : 0;
            this.numTensors++;
            if (refCount === 0) {
                this.numDataBuffers++;
                this.numBytes +=
                    sizeFromShape(a.shape) * bytesPerElement(a.dtype);
                this.backend.register(a.dataId, a.shape, a.dtype);
            }
            this.refCounter.set(a.dataId, refCount + 1);
            if (!(a instanceof Variable)) {
                this.track(a);
            }
        };
        Engine.prototype.registerVariable = function (v) {
            if (this.registeredVariables[v.name] != null) {
                throw new Error("Variable with name " + v.name + " was already registered");
            }
            this.registeredVariables[v.name] = v;
        };
        Engine.prototype.disposeTensor = function (a) {
            if (!this.refCounter.has(a.dataId)) {
                return;
            }
            this.numTensors--;
            var refCount = this.refCounter.get(a.dataId);
            if (refCount <= 1) {
                this.refCounter.delete(a.dataId);
                this.backend.disposeData(a.dataId);
                this.numDataBuffers--;
                this.numBytes -=
                    sizeFromShape(a.shape) * bytesPerElement(a.dtype);
            }
            else {
                this.refCounter.set(a.dataId, refCount - 1);
            }
        };
        Engine.prototype.disposeVariables = function () {
            for (var varName in this.registeredVariables) {
                var v = this.registeredVariables[varName];
                this.disposeTensor(v);
                delete this.registeredVariables[varName];
            }
        };
        Engine.prototype.memory = function () {
            var info = this.backend.memory();
            info.numTensors = this.numTensors;
            info.numDataBuffers = this.numDataBuffers;
            info.numBytes = this.numBytes;
            return info;
        };
        Engine.prototype.shouldRecord = function () {
            return this.activeTape != null && this.customGradientDepth === 0;
        };
        Engine.prototype.addTapeNode = function (inputs, result, gradientsFunc) {
            var inputsMap = {};
            inputs.forEach(function (input, idx) {
                inputsMap[idx] = input;
            });
            var gradient = function (dy) {
                var res = gradientsFunc(dy);
                var resMap = {};
                res.forEach(function (r, idx) {
                    resMap[idx] = function () { return r; };
                });
                return resMap;
            };
            var tapeNode = {
                id: this.nextTapeNodeId++,
                name: this.activeScope.name,
                inputs: inputsMap,
                output: result,
                gradient: gradient
            };
            this.activeTape.push(tapeNode);
        };
        Engine.prototype.keep = function (result) {
            if (this.scopeStack.length === 1 && ENV.engine.safeMode) {
                throw new Error('Safe mode is ON. Enclose all tensor operations inside tf.tidy(): ' +
                    'tf.tidy(() => {...}) to avoid memory leaks.');
            }
            this.activeScope.keep.push(result);
            return result;
        };
        Engine.prototype.startScope = function (name, gradientsMode) {
            if (gradientsMode === void 0) { gradientsMode = false; }
            if (gradientsMode && this.gradientScopeCount === 0) {
                this.activeTape = [];
            }
            if (gradientsMode) {
                this.gradientScopeCount++;
            }
            var scopeInfo = { keep: [], track: [] };
            if (name) {
                scopeInfo.name = name;
            }
            this.scopeStack.push(scopeInfo);
            this.activeScope = scopeInfo;
        };
        Engine.prototype.endScope = function (result, gradientsMode) {
            var _this = this;
            if (gradientsMode === void 0) { gradientsMode = false; }
            if (gradientsMode) {
                this.gradientScopeCount--;
                if (this.gradientScopeCount === 0) {
                    this.activeTape = null;
                }
            }
            var tensorsToKeep = this.activeScope.keep;
            var tensorsToTrackInParent = extractTensorsFromContainer(result);
            tensorsToKeep = tensorsToKeep.concat(tensorsToTrackInParent);
            for (var i = 0; i < this.activeScope.track.length; i++) {
                var tensor$$1 = this.activeScope.track[i];
                if (isTensorInList(tensor$$1, tensorsToKeep)) {
                    continue;
                }
                if (this.activeTape != null) {
                    tensorsToTrackInParent.push(tensor$$1);
                }
                else {
                    tensor$$1.dispose();
                }
            }
            this.scopeStack.pop();
            this.activeScope = this.scopeStack.length === 0 ?
                { keep: [], track: [] } :
                this.scopeStack[this.scopeStack.length - 1];
            tensorsToTrackInParent.forEach(function (tensor$$1) {
                if (!isTensorInList(tensor$$1, _this.activeScope.keep)) {
                    _this.track(tensor$$1);
                }
            });
        };
        Engine.prototype.dispose = function () { };
        Engine.prototype.gradients = function (f, xs, dy, allowNoGradients) {
            var _this = this;
            if (allowNoGradients === void 0) { allowNoGradients = false; }
            assert(xs.length > 0, 'gradients() received an empty list of xs.');
            return tidy('gradients', function () {
                var y = f();
                assert(y instanceof Tensor, 'The result y returned by f() must be a tensor.');
                var filteredTape = getFilteredNodesXToY(_this.activeTape, xs, y);
                if (!allowNoGradients && filteredTape.length === 0 && xs.length > 0) {
                    throw new Error('Cannot compute gradient of y=f(x) with respect to x. Make sure ' +
                        'that the f you passed encloses all operations that lead from x ' +
                        'to y.');
                }
                var accumulatedGradientMap = {};
                accumulatedGradientMap[y.id] = (dy == null) ? ones(y.shape) : dy;
                backpropagateGradients(accumulatedGradientMap, filteredTape);
                var grads$$1 = xs.map(function (x) { return accumulatedGradientMap[x.id]; });
                return { value: y, grads: grads$$1 };
            }, true);
        };
        Engine.prototype.customGrad = function (f) {
            var _this = this;
            assert(isFunction(f), 'The f passed in customGrad(f) must be a function.');
            return function () {
                var inputs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    inputs[_i] = arguments[_i];
                }
                assert(inputs.every(function (t) { return t instanceof Tensor; }), 'The args passed in customGrad(f)(x1, x2,...) must all be tensors');
                _this.customGradientDepth++;
                var gradientsFunc;
                var gradientsMode = true;
                var result = tidy(f.name, function () {
                    var _a = f.apply(void 0, inputs), value = _a.value, gradFunc = _a.gradFunc;
                    assert(value instanceof Tensor, 'The function f passed in customGrad(f) must return an object ' +
                        'where `obj.value` is a tensor');
                    assert(isFunction(gradFunc), 'The function f passed in customGrad(f) must return an object ' +
                        'where `obj.gradFunc` is a function.');
                    gradientsFunc = gradFunc;
                    return value;
                }, gradientsMode);
                _this.customGradientDepth--;
                if (_this.shouldRecord()) {
                    var gradFunc = function (dy) {
                        var res = gradientsFunc(dy);
                        var grads$$1 = Array.isArray(res) ? res : [res];
                        assert(grads$$1.length === inputs.length, 'The function f passed in customGrad(f) must return an object ' +
                            'where `obj.gradFunc` is a function that returns the same ' +
                            'number of tensors as inputs passed to f(...).');
                        assert(grads$$1.every(function (t) { return t instanceof Tensor; }), 'The function f passed in customGrad(f) must return an object ' +
                            'where `obj.gradFunc` is a function that returns a list of ' +
                            'only tensors.');
                        return grads$$1;
                    };
                    _this.addTapeNode(inputs, result, gradFunc);
                }
                return result;
            };
        };
        Engine.prototype.write = function (dataId, values) {
            this.backend.write(dataId, values);
        };
        Engine.prototype.readSync = function (dataId) {
            return this.backend.readSync(dataId);
        };
        Engine.prototype.read = function (dataId) {
            return this.backend.read(dataId);
        };
        Engine.prototype.fromPixels = function (pixels, numChannels) {
            return this.backend.fromPixels(pixels, numChannels);
        };
        Engine.prototype.time = function (query) {
            return __awaiter$2(this, void 0, void 0, function () {
                var start, timingInfo;
                return __generator$2(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            start = performance.now();
                            return [4, this.backend.time(query)];
                        case 1:
                            timingInfo = _a.sent();
                            timingInfo.wallMs = performance.now() - start;
                            return [2, timingInfo];
                    }
                });
            });
        };
        Engine.prototype.track = function (result) {
            if (this.scopeStack.length === 1 && this.safeMode) {
                throw new Error('Safe mode is ON. Enclose all tensor operations inside tf.tidy(): ' +
                    'tf.tidy(() => {op();...}); to avoid memory leaks.');
            }
            this.activeScope.track.push(result);
            return result;
        };
        return Engine;
    }());

    var __decorate$q = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Type;
    (function (Type) {
        Type[Type["NUMBER"] = 0] = "NUMBER";
        Type[Type["BOOLEAN"] = 1] = "BOOLEAN";
        Type[Type["STRING"] = 2] = "STRING";
    })(Type || (Type = {}));
    var URL_PROPERTIES = [
        { name: 'DEBUG', type: Type.BOOLEAN }, { name: 'IS_BROWSER', type: Type.BOOLEAN },
        { name: 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION', type: Type.NUMBER },
        { name: 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE', type: Type.BOOLEAN },
        { name: 'WEBGL_VERSION', type: Type.NUMBER },
        { name: 'WEBGL_FLOAT_TEXTURE_ENABLED', type: Type.BOOLEAN }, {
            name: 'WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED',
            type: Type.BOOLEAN
        },
        { name: 'BACKEND', type: Type.STRING }
    ];
    function hasExtension(gl, extensionName) {
        var ext = gl.getExtension(extensionName);
        return ext != null;
    }
    function getWebGLRenderingContext(webGLVersion) {
        if (webGLVersion === 0) {
            throw new Error('Cannot get WebGL rendering context, WebGL is disabled.');
        }
        var tempCanvas = document.createElement('canvas');
        if (webGLVersion === 1) {
            return (tempCanvas.getContext('webgl') ||
                tempCanvas.getContext('experimental-webgl'));
        }
        return tempCanvas.getContext('webgl2');
    }
    function loseContext(gl) {
        if (gl != null) {
            var loseContextExtension = gl.getExtension('WEBGL_lose_context');
            if (loseContextExtension == null) {
                throw new Error('Extension WEBGL_lose_context not supported on this browser.');
            }
            loseContextExtension.loseContext();
        }
    }
    function isWebGLVersionEnabled(webGLVersion) {
        var gl = getWebGLRenderingContext(webGLVersion);
        if (gl != null) {
            loseContext(gl);
            return true;
        }
        return false;
    }
    function getWebGLDisjointQueryTimerVersion(webGLVersion) {
        if (webGLVersion === 0) {
            return 0;
        }
        var queryTimerVersion;
        var gl = getWebGLRenderingContext(webGLVersion);
        if (hasExtension(gl, 'EXT_disjoint_timer_query_webgl2') &&
            webGLVersion === 2) {
            queryTimerVersion = 2;
        }
        else if (hasExtension(gl, 'EXT_disjoint_timer_query')) {
            queryTimerVersion = 1;
        }
        else {
            queryTimerVersion = 0;
        }
        if (gl != null) {
            loseContext(gl);
        }
        return queryTimerVersion;
    }
    function isFloatTextureReadPixelsEnabled(webGLVersion) {
        if (webGLVersion === 0) {
            return false;
        }
        var gl = getWebGLRenderingContext(webGLVersion);
        if (webGLVersion === 1) {
            if (!hasExtension(gl, 'OES_texture_float')) {
                return false;
            }
        }
        else {
            if (!hasExtension(gl, 'EXT_color_buffer_float')) {
                return false;
            }
        }
        var frameBuffer = gl.createFramebuffer();
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        var internalFormat = webGLVersion === 2 ? gl.RGBA32F : gl.RGBA;
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 1, 1, 0, gl.RGBA, gl.FLOAT, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        var frameBufferComplete = (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE);
        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.FLOAT, new Float32Array(4));
        var readPixelsNoError = gl.getError() === gl.NO_ERROR;
        loseContext(gl);
        return frameBufferComplete && readPixelsNoError;
    }
    function isWebGLGetBufferSubDataAsyncExtensionEnabled(webGLVersion) {
        if (webGLVersion > 0) {
            return false;
        }
        if (webGLVersion !== 2) {
            return false;
        }
        var gl = getWebGLRenderingContext(webGLVersion);
        var isEnabled = hasExtension(gl, 'WEBGL_get_buffer_sub_data_async');
        loseContext(gl);
        return isEnabled;
    }
    var Environment = (function () {
        function Environment(features) {
            this.features = {};
            this.registry = {};
            if (features != null) {
                this.features = features;
            }
            if (this.get('DEBUG')) {
                console.warn('Debugging mode is ON. The output of every math call will ' +
                    'be downloaded to CPU and checked for NaNs. ' +
                    'This significantly impacts performance.');
            }
        }
        Environment.setBackend = function (backendType, safeMode) {
            if (safeMode === void 0) { safeMode = false; }
            if (!(backendType in ENV.registry)) {
                throw new Error("Backend type '" + backendType + "' not found in registry");
            }
            ENV.initBackend(backendType, safeMode);
        };
        Environment.getBackend = function () {
            ENV.initDefaultBackend();
            return ENV.currentBackend;
        };
        Environment.disposeVariables = function () {
            ENV.engine.disposeVariables();
        };
        Environment.memory = function () {
            return ENV.engine.memory();
        };
        Environment.prototype.get = function (feature) {
            if (feature in this.features) {
                return this.features[feature];
            }
            this.features[feature] = this.evaluateFeature(feature);
            return this.features[feature];
        };
        Environment.prototype.set = function (feature, value) {
            this.features[feature] = value;
        };
        Environment.prototype.getBestBackendType = function () {
            var _this = this;
            if (Object.keys(this.registry).length === 0) {
                throw new Error('No backend found in registry.');
            }
            var sortedBackends = Object.keys(this.registry)
                .map(function (name) {
                return { name: name, entry: _this.registry[name] };
            })
                .sort(function (a, b) {
                return b.entry.priority - a.entry.priority;
            });
            return sortedBackends[0].name;
        };
        Environment.prototype.evaluateFeature = function (feature) {
            if (feature === 'DEBUG') {
                return false;
            }
            else if (feature === 'IS_BROWSER') {
                return typeof window !== 'undefined';
            }
            else if (feature === 'BACKEND') {
                return this.getBestBackendType();
            }
            else if (feature === 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') {
                var webGLVersion = this.get('WEBGL_VERSION');
                if (webGLVersion === 0) {
                    return 0;
                }
                return getWebGLDisjointQueryTimerVersion(webGLVersion);
            }
            else if (feature === 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') {
                return this.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0 &&
                    !isMobile();
            }
            else if (feature === 'WEBGL_VERSION') {
                if (isWebGLVersionEnabled(2)) {
                    return 2;
                }
                else if (isWebGLVersionEnabled(1)) {
                    return 1;
                }
                return 0;
            }
            else if (feature === 'WEBGL_FLOAT_TEXTURE_ENABLED') {
                return isFloatTextureReadPixelsEnabled(this.get('WEBGL_VERSION'));
            }
            else if (feature === 'WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED') {
                return isWebGLGetBufferSubDataAsyncExtensionEnabled(this.get('WEBGL_VERSION'));
            }
            throw new Error("Unknown feature " + feature + ".");
        };
        Environment.prototype.setFeatures = function (features) {
            this.features = features;
        };
        Environment.prototype.reset = function () {
            this.features = getFeaturesFromURL();
            if (this.globalEngine != null) {
                this.globalEngine.dispose();
                this.globalEngine = null;
            }
        };
        Environment.prototype.initBackend = function (backendType, safeMode) {
            if (safeMode === void 0) { safeMode = false; }
            this.currentBackend = backendType;
            if (this.globalEngine != null) {
                this.globalEngine.dispose();
            }
            var backend = ENV.findBackend(backendType);
            this.globalEngine = new Engine(backend, safeMode);
        };
        Environment.prototype.findBackend = function (name) {
            if (!(name in this.registry)) {
                return null;
            }
            return this.registry[name].backend;
        };
        Environment.prototype.registerBackend = function (name, factory, priority) {
            if (priority === void 0) { priority = 1; }
            if (name in this.registry) {
                console.warn(name + " backend was already registered");
            }
            try {
                var backend = factory();
                this.registry[name] = { backend: backend, priority: priority };
                return true;
            }
            catch (err) {
                console.warn(err.message);
                return false;
            }
        };
        Environment.prototype.removeBackend = function (name) {
            if (!(name in this.registry)) {
                throw new Error(name + " backend not found in registry");
            }
            this.registry[name].backend.dispose();
            delete this.registry[name];
        };
        Object.defineProperty(Environment.prototype, "engine", {
            get: function () {
                this.initDefaultBackend();
                return this.globalEngine;
            },
            enumerable: true,
            configurable: true
        });
        Environment.prototype.initDefaultBackend = function () {
            if (this.globalEngine == null) {
                this.initBackend(ENV.get('BACKEND'), false);
            }
        };
        __decorate$q([
            doc({ heading: 'Environment' })
        ], Environment, "setBackend", null);
        __decorate$q([
            doc({ heading: 'Environment' })
        ], Environment, "getBackend", null);
        __decorate$q([
            doc({ heading: 'Environment' })
        ], Environment, "disposeVariables", null);
        __decorate$q([
            doc({ heading: 'Performance', subheading: 'Memory' })
        ], Environment, "memory", null);
        return Environment;
    }());
    var TENSORFLOWJS_FLAGS_PREFIX = 'tfjsflags';
    function getFeaturesFromURL() {
        var features = {};
        if (typeof window === 'undefined' || typeof window.location === 'undefined') {
            return features;
        }
        var urlParams = getQueryParams(window.location.search);
        if (TENSORFLOWJS_FLAGS_PREFIX in urlParams) {
            var urlFlags_1 = {};
            var keyValues = urlParams[TENSORFLOWJS_FLAGS_PREFIX].split(',');
            keyValues.forEach(function (keyValue) {
                var _a = keyValue.split(':'), key = _a[0], value = _a[1];
                urlFlags_1[key] = value;
            });
            URL_PROPERTIES.forEach(function (urlProperty) {
                if (urlProperty.name in urlFlags_1) {
                    console.log("Setting feature override from URL " + urlProperty.name + ": " +
                        ("" + urlFlags_1[urlProperty.name]));
                    if (urlProperty.type === Type.NUMBER) {
                        features[urlProperty.name] = +urlFlags_1[urlProperty.name];
                    }
                    else if (urlProperty.type === Type.BOOLEAN) {
                        features[urlProperty.name] = urlFlags_1[urlProperty.name] === 'true';
                    }
                    else if (urlProperty.type === Type.STRING) {
                        features[urlProperty.name] = urlFlags_1[urlProperty.name];
                    }
                    else {
                        console.warn("Unknown URL param: " + urlProperty.name + ".");
                    }
                }
            });
        }
        return features;
    }
    function getGlobalNamespace() {
        var ns;
        if (typeof (window) !== 'undefined') {
            ns = window;
        }
        else if (typeof (global) !== 'undefined') {
            ns = global;
        }
        else {
            throw new Error('Could not find a global object');
        }
        return ns;
    }
    function getOrMakeEnvironment() {
        var ns = getGlobalNamespace();
        ns.ENV = ns.ENV || new Environment(getFeaturesFromURL());
        return ns.ENV;
    }
    var ENV = getOrMakeEnvironment();

    var environment = /*#__PURE__*/Object.freeze({
        get Type () { return Type; },
        URL_PROPERTIES: URL_PROPERTIES,
        Environment: Environment,
        ENV: ENV
    });

    var PARALLELIZE_THRESHOLD = 30;
    function computeOptimalWindowSize(inSize) {
        if (inSize <= PARALLELIZE_THRESHOLD) {
            return inSize;
        }
        return nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
    }
    function nearestDivisor(size, start) {
        for (var i = start; i < size; ++i) {
            if (size % i === 0) {
                return i;
            }
        }
        return size;
    }

    function castTensor(x, dtype, backend) {
        if (!hasEncodingLoss(x.dtype, dtype)) {
            return Tensor.make(x.shape, { dataId: x.dataId }, dtype);
        }
        if (dtype === 'int32') {
            return backend.int(x);
        }
        else if (dtype === 'bool') {
            return backend.notEqual(x, ArrayOps.scalar(0, x.dtype));
        }
        else {
            throw new Error("Error in Cast: unknown dtype argument (" + dtype + ")");
        }
    }
    function reshapeTensor(x, shape) {
        return Tensor.make(shape, { dataId: x.dataId }, x.dtype);
    }

    var ArgMinMaxProgram = (function () {
        function ArgMinMaxProgram(reduceInfo, op, firstPass) {
            this.variableNames = ['A'];
            var windowSize = reduceInfo.windowSize;
            var batchSize = reduceInfo.batchSize;
            var inSize = reduceInfo.inSize;
            var outSize = Math.ceil(inSize / windowSize);
            if (!firstPass) {
                this.variableNames.push('bestIndicesA');
            }
            this.outputShape = [batchSize, outSize];
            var compOp = (op === 'max') ? '>' : '<';
            var indexSnippet = firstPass ?
                'inOffset + i;' :
                'round(getBestIndicesA(batch, inOffset + i));';
            this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + windowSize + ";\n\n        int bestIndex = 0;\n        float bestValue = getA(batch, inOffset);\n\n        for (int i = 0; i < " + windowSize + "; i++) {\n          int inIdx = " + indexSnippet + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + compOp + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";
        }
        return ArgMinMaxProgram;
    }());

    var AvgPool2DBackpropProgram = (function () {
        function AvgPool2DBackpropProgram(convInfo) {
            this.variableNames = ['dy'];
            this.outputShape = convInfo.inShape;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var padTop = filterHeight - 1 - convInfo.padInfo.top;
            var padLeft = filterWidth - 1 - convInfo.padInfo.left;
            var avgMultiplier = 1 / (filterHeight * filterWidth);
            this.userCode = "\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n      const float avgMultiplier = float(" + avgMultiplier + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + convInfo.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + convInfo.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
        }
        return AvgPool2DBackpropProgram;
    }());

    var BatchNormProgram = (function () {
        function BatchNormProgram(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
            this.outputShape = [];
            this.supportsBroadcasting = true;
            this.variableNames = ['x', 'mean', 'variance'];
            assertAndGetBroadcastShape(xShape, meanShape);
            assertAndGetBroadcastShape(xShape, varianceShape);
            var offsetSnippet = '0.0';
            if (offsetShape != null) {
                assertAndGetBroadcastShape(xShape, offsetShape);
                this.variableNames.push('offset');
                offsetSnippet = 'getOffsetAtOutCoords()';
            }
            var scaleSnippet = '1.0';
            if (scaleShape != null) {
                assertAndGetBroadcastShape(xShape, scaleShape);
                this.variableNames.push('scale');
                scaleSnippet = 'getScaleAtOutCoords()';
            }
            this.outputShape = xShape;
            this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + offsetSnippet + ";\n        float scale = " + scaleSnippet + ";\n        float inv = scale * inversesqrt(variance + float(" + varianceEpsilon + "));\n        setOutput((x - mean) * inv + offset);\n      }\n    ";
        }
        return BatchNormProgram;
    }());

    var CHECK_NAN_SNIPPET = "\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n";
    var ADD = 'return a + b;';
    var SUB = 'return a - b;';
    var MUL = 'return a * b;';
    var DIV = 'return a / b;';
    var INT_DIV = "\n  float resultSign = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  int result = ia / ib;\n  int amodb = ia - ib * result;\n\n  if (resultSign < 0.0 && amodb != 0) {\n    result -= 1;\n  }\n  return float(result);\n";
    var POW = "\n  return (round(mod(b, 2.0)) == 0 || round(mod(b, 2.0)) == 2) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n";
    var SQUARED_DIFFERENCE = 'return (a - b) * (a - b);';
    var EQUAL = "return float(a == b);";
    var NOT_EQUAL = "return float(a != b);";
    var LESS = "return float(a < b);";
    var LESS_EQUAL = "return float(a <= b);";
    var GREATER = "return float(a > b);";
    var GREATER_EQUAL = "return float(a >= b);";
    var LOGICAL_AND = "return float(a >= 1.0 && b >= 1.0);";
    var LOGICAL_OR = "return float(a >= 1.0 || b >= 1.0);";
    var MAX = CHECK_NAN_SNIPPET + "\n  return max(a, b);\n";
    var MIN = CHECK_NAN_SNIPPET + "\n  return min(a, b);\n";
    var MOD = "return mod(a, b);";
    var ATAN2 = CHECK_NAN_SNIPPET + "\n  return atan(a, b);\n";
    var ELU_DER = "return (b >= 1.0) ? a : a * (b + 1.0);";
    var BinaryOpProgram = (function () {
        function BinaryOpProgram(op, aShape, bShape) {
            this.variableNames = ['A', 'B'];
            this.supportsBroadcasting = true;
            this.outputShape =
                assertAndGetBroadcastShape(aShape, bShape);
            this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + op + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";
        }
        return BinaryOpProgram;
    }());

    var ClipProgram = (function () {
        function ClipProgram(aShape, min, max) {
            this.variableNames = ['A'];
            this.outputShape = aShape;
            var minFixed = min.toFixed(20);
            var maxFixed = max.toFixed(20);
            this.userCode = "\n      void main() {\n        float value = getAAtOutCoords();\n        if (isNaN(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, " + minFixed + ", " + maxFixed + "));\n      }\n    ";
        }
        return ClipProgram;
    }());

    var ConcatProgram = (function () {
        function ConcatProgram(aShape, bShape) {
            this.variableNames = ['A', 'B'];
            this.outputShape = [];
            this.outputShape =
                computeOutShape(aShape, bShape, 1);
            this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        float value = 0.0;\n        if (yC < " + aShape[1] + ") {\n          value = getA(yR, yC);\n        } else {\n          yC -= " + aShape[1] + ";\n          value = getB(yR, yC);\n        }\n\n        setOutput(value);\n      }\n    ";
        }
        return ConcatProgram;
    }());

    var Conv2DDerFilterProgram = (function () {
        function Conv2DDerFilterProgram(convInfo) {
            this.variableNames = ['x', 'dy'];
            this.outputShape = convInfo.filterShape;
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var padTop = convInfo.padInfo.top;
            var padLeft = convInfo.padInfo.left;
            this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + convInfo.batchSize + "; b++) {\n          for (int yR = 0; yR < " + convInfo.outHeight + "; yR++) {\n            int xR = wR + yR * " + strideHeight + " - " + padTop + ";\n\n            if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + convInfo.outWidth + "; yC++) {\n              int xC = wC + yC * " + strideWidth + " - " + padLeft + ";\n\n              if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
        }
        return Conv2DDerFilterProgram;
    }());
    var Conv2DDerInputProgram = (function () {
        function Conv2DDerInputProgram(convInfo) {
            this.variableNames = ['dy', 'W'];
            this.outputShape = convInfo.inShape;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var padTop = filterHeight - 1 - convInfo.padInfo.top;
            var padLeft = filterWidth - 1 - convInfo.padInfo.left;
            this.userCode = "\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + convInfo.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + filterHeight + " - 1 - wR;\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + convInfo.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + filterWidth + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + convInfo.outChannels + "; d2++) {\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
        }
        return Conv2DDerInputProgram;
    }());

    var Conv2DProgram = (function () {
        function Conv2DProgram(convInfo) {
            this.variableNames = ['x', 'W'];
            this.outputShape = convInfo.outShape;
            var padTop = convInfo.padInfo.top;
            var padLeft = convInfo.padInfo.left;
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var dilationHeight = convInfo.dilationHeight;
            var dilationWidth = convInfo.dilationWidth;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
            var inputDepthVec4Remainder = convInfo.inChannels % 4;
            this.userCode = "\n      const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          int xR = xRCorner + wR * " + dilationHeight + ";\n\n          if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            int xC = xCCorner + wC * " + dilationWidth + ";\n\n            if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + inputDepthNearestVec4 + "; d1 += 4) {\n              vec4 xValues = vec4(\n                getX(batch, xR, xC, d1),\n                getX(batch, xR, xC, d1 + 1),\n                getX(batch, xR, xC, d1 + 2),\n                getX(batch, xR, xC, d1 + 3)\n              );\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              dotProd += dot(xValues, wValues);\n            }\n\n            if (" + (inputDepthVec4Remainder === 1) + ") {\n              dotProd +=\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + ") *\n                getW(wR, wC, " + inputDepthNearestVec4 + ", d2);\n            } else if (" + (inputDepthVec4Remainder === 2) + ") {\n              vec2 xValues = vec2(\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + "),\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + " + 1)\n              );\n              vec2 wValues = vec2(\n                getW(wR, wC, " + inputDepthNearestVec4 + ", d2),\n                getW(wR, wC, " + inputDepthNearestVec4 + " + 1, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            } else if (" + (inputDepthVec4Remainder === 3) + ") {\n              vec3 xValues = vec3(\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + "),\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + " + 1),\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + " + 2)\n              );\n              vec3 wValues = vec3(\n                getW(wR, wC, " + inputDepthNearestVec4 + ", d2),\n                getW(wR, wC, " + inputDepthNearestVec4 + " + 1, d2),\n                getW(wR, wC, " + inputDepthNearestVec4 + " + 2, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
        }
        return Conv2DProgram;
    }());

    var TextureType;
    (function (TextureType) {
        TextureType[TextureType["FLOAT"] = 0] = "FLOAT";
        TextureType[TextureType["UNSIGNED_BYTE"] = 1] = "UNSIGNED_BYTE";
    })(TextureType || (TextureType = {}));
    function getUnpackedMatrixTextureShapeWidthHeight(rows, columns) {
        return [columns, rows];
    }
    function getUnpackedArraySizeFromMatrixSize(matrixSize, channelsPerTexture) {
        return matrixSize * channelsPerTexture;
    }
    function getColorMatrixTextureShapeWidthHeight(rows, columns) {
        return [columns * 4, rows];
    }
    function getMatrixSizeFromUnpackedArraySize(unpackedSize, channelsPerTexture) {
        if (unpackedSize % channelsPerTexture !== 0) {
            throw new Error("unpackedSize (" + unpackedSize + ") must be a multiple of " +
                ("" + channelsPerTexture));
        }
        return unpackedSize / channelsPerTexture;
    }
    function encodeMatrixToUnpackedArray(matrix, unpackedArray, channelsPerTexture) {
        var requiredSize = getUnpackedArraySizeFromMatrixSize(matrix.length, channelsPerTexture);
        if (unpackedArray.length < requiredSize) {
            throw new Error("unpackedArray length (" + unpackedArray.length + ") must be >= " +
                ("" + requiredSize));
        }
        var dst = 0;
        for (var src = 0; src < matrix.length; ++src) {
            unpackedArray[dst] = matrix[src];
            dst += channelsPerTexture;
        }
    }
    var FLOAT_MAX = 20000;
    var FLOAT_MIN = -FLOAT_MAX;
    var FLOAT_RANGE = (FLOAT_MAX - FLOAT_MIN) / 255;
    var FLOAT_DELTAS = [1, 1 / 255, 1 / (255 * 255), 1 / (255 * 255 * 255)];
    var FLOAT_POWERS = [1, 255, 255 * 255];
    var BYTE_NAN_VALUE = 0;
    function encodeFloatArray(floatArray) {
        var uintArray = new Uint8Array(floatArray.length * 4);
        var _loop_1 = function (i) {
            var value = floatArray[i / 4];
            if (isNaN(value)) {
                uintArray[i] = BYTE_NAN_VALUE;
                uintArray[i + 1] = BYTE_NAN_VALUE;
                uintArray[i + 2] = BYTE_NAN_VALUE;
                uintArray[i + 3] = BYTE_NAN_VALUE;
                return "continue";
            }
            var normalizedValue = (value - FLOAT_MIN) / FLOAT_RANGE;
            var enc = FLOAT_POWERS.map(function (pow) { return pow * normalizedValue; });
            var buckets = enc.map(function (value) { return Math.floor((value % 1) * 255); });
            uintArray[i] = Math.floor(normalizedValue);
            uintArray[i + 1] = buckets[0];
            uintArray[i + 2] = buckets[1];
            uintArray[i + 3] = buckets[2];
        };
        for (var i = 0; i < uintArray.length; i += 4) {
            _loop_1(i);
        }
        return uintArray;
    }
    function decodeToFloatArray(uintArray) {
        var floatArray = new Float32Array(uintArray.length / 4);
        var _loop_2 = function (i) {
            if (uintArray[i] === BYTE_NAN_VALUE &&
                uintArray[i + 1] === BYTE_NAN_VALUE &&
                uintArray[i + 2] === BYTE_NAN_VALUE &&
                uintArray[i + 3] === BYTE_NAN_VALUE) {
                floatArray[i / 4] = NaN;
                return "continue";
            }
            var dot = 0;
            FLOAT_DELTAS.forEach(function (delta, j) {
                dot += delta * uintArray[i + j];
            });
            var value = dot * FLOAT_RANGE + FLOAT_MIN;
            floatArray[i / 4] = value;
        };
        for (var i = 0; i < uintArray.length; i += 4) {
            _loop_2(i);
        }
        return floatArray;
    }
    function decodeMatrixFromUnpackedArray(unpackedArray, matrix, channelsPerTexture) {
        var requiredSize = getMatrixSizeFromUnpackedArraySize(unpackedArray.length, channelsPerTexture);
        if (matrix.length < requiredSize) {
            throw new Error("matrix length (" + matrix.length + ") must be >= " + requiredSize);
        }
        var dst = 0;
        for (var src = 0; src < unpackedArray.length; src += channelsPerTexture) {
            matrix[dst++] = unpackedArray[src];
        }
    }
    function decodeMatrixFromUnpackedColorRGBAArray(unpackedArray, matrix, channels) {
        var requiredSize = unpackedArray.length * channels / 4;
        if (matrix.length < requiredSize) {
            throw new Error("matrix length (" + matrix.length + ") must be >= " + requiredSize);
        }
        var dst = 0;
        for (var src = 0; src < unpackedArray.length; src += 4) {
            for (var c = 0; c < channels; c++) {
                matrix[dst++] = unpackedArray[src + c];
            }
        }
    }
    function getPackedMatrixTextureShapeWidthHeight(rows, columns) {
        return [Math.ceil(columns / 2), Math.ceil(rows / 2)];
    }
    function getPackedRGBAArraySizeFromMatrixShape(rows, columns) {
        var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
        return w * h * 4;
    }
    function encodeMatrixToPackedRGBA(matrix, rows, columns, packedRGBA) {
        var requiredSize = getPackedRGBAArraySizeFromMatrixShape(rows, columns);
        if (packedRGBA.length < requiredSize) {
            throw new Error("packedRGBA length (" + packedRGBA.length + ") must be >= " + requiredSize);
        }
        var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), textureWidth = _a[0], textureHeight = _a[1];
        var oddWidth = (columns % 2) === 1;
        var oddHeight = (rows % 2) === 1;
        var widthInFullBlocks = Math.floor(columns / 2);
        var heightInFullBlocks = Math.floor(rows / 2);
        {
            var dstStride = (oddWidth ? 4 : 0);
            var oneRow = columns;
            var dst = 0;
            for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
                var matrixSrcRow = (blockY * 2 * columns);
                for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
                    var matrixSrcCol = blockX * 2;
                    var src = matrixSrcRow + matrixSrcCol;
                    packedRGBA[dst] = matrix[src];
                    packedRGBA[dst + 1] = matrix[src + 1];
                    packedRGBA[dst + 2] = matrix[src + oneRow];
                    packedRGBA[dst + 3] = matrix[src + oneRow + 1];
                    dst += 4;
                }
                dst += dstStride;
            }
        }
        if (oddWidth) {
            var src = columns - 1;
            var dst = (textureWidth - 1) * 4;
            var srcStride = 2 * columns;
            var dstStride = textureWidth * 4;
            for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
                packedRGBA[dst] = matrix[src];
                packedRGBA[dst + 2] = matrix[src + columns];
                src += srcStride;
                dst += dstStride;
            }
        }
        if (oddHeight) {
            var src = (rows - 1) * columns;
            var dst = (textureHeight - 1) * textureWidth * 4;
            for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
                packedRGBA[dst++] = matrix[src++];
                packedRGBA[dst++] = matrix[src++];
                dst += 2;
            }
        }
        if (oddWidth && oddHeight) {
            packedRGBA[packedRGBA.length - 4] = matrix[matrix.length - 1];
        }
        return packedRGBA;
    }
    function decodeMatrixFromPackedRGBA(packedRGBA, rows, columns, matrix) {
        var requiredSize = rows * columns;
        if (requiredSize < matrix.length) {
            throw new Error("matrix length (" + matrix.length + ") must be >= " + requiredSize);
        }
        var oddWidth = (columns % 2) === 1;
        var oddHeight = (rows % 2) === 1;
        var widthInFullBlocks = Math.floor(columns / 2);
        var heightInFullBlocks = Math.floor(rows / 2);
        var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), textureWidth = _a[0], textureHeight = _a[1];
        {
            var srcStride = oddWidth ? 4 : 0;
            var dstStride = columns + (oddWidth ? 1 : 0);
            var src = 0;
            var dstRow1 = 0;
            var dstRow2 = columns;
            for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
                for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
                    matrix[dstRow1++] = packedRGBA[src++];
                    matrix[dstRow1++] = packedRGBA[src++];
                    matrix[dstRow2++] = packedRGBA[src++];
                    matrix[dstRow2++] = packedRGBA[src++];
                }
                src += srcStride;
                dstRow1 += dstStride;
                dstRow2 += dstStride;
            }
        }
        if (oddWidth) {
            var src = (textureWidth - 1) * 4;
            var dst = columns - 1;
            var srcStride = textureWidth * 4;
            var dstStride = 2 * columns;
            for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
                matrix[dst] = packedRGBA[src];
                matrix[dst + columns] = packedRGBA[src + 2];
                src += srcStride;
                dst += dstStride;
            }
        }
        if (oddHeight) {
            var src = (textureHeight - 1) * textureWidth * 4;
            var dst = (rows - 1) * columns;
            for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
                matrix[dst++] = packedRGBA[src++];
                matrix[dst++] = packedRGBA[src++];
                src += 2;
            }
        }
        if (oddWidth && oddHeight) {
            matrix[matrix.length - 1] = packedRGBA[packedRGBA.length - 4];
        }
        return matrix;
    }

    function makeShader(inputsInfo, outputShape, userCode, broadcast) {
        var sampleSnippet = getSampleSnippet();
        var setOutputSnippet = getSetOutputSnippet();
        var inputPrefixSnippet = inputsInfo.map(function (x) { return "uniform sampler2D " + x.name + ";"; }).join('\n');
        var inputSamplingSnippet = inputsInfo.map(function (x) { return getInputSamplingSnippet(x, outputShape, broadcast); })
            .join('\n');
        var outTexShape = outputShape.texShape;
        var outputSamplingSnippet = getOutputSamplingSnippet(outputShape.logicalShape, outTexShape);
        var source = [
            SHADER_PREFIX, sampleSnippet, setOutputSnippet, inputPrefixSnippet,
            outputSamplingSnippet, inputSamplingSnippet, userCode
        ].join('\n');
        return source;
    }
    function getSampleSnippet() {
        return ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED') ?
            FLOAT_TEXTURE_SAMPLE_SNIPPET :
            UNSIGNED_BYTE_TEXTURE_SAMPLE_SNIPPET;
    }
    function getSetOutputSnippet() {
        return ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED') ?
            FLOAT_TEXTURE_SETOUTPUT_SNIPPET :
            UNSIGNED_BYTE_TEXTURE_SETOUTPUT_SNIPPET;
    }
    function getSamplerFromInInfo(inInfo) {
        var shape = inInfo.shapeInfo.logicalShape;
        switch (shape.length) {
            case 0:
                return getSamplerScalar(inInfo);
            case 1:
                return getSampler1D(inInfo);
            case 2:
                return getSampler2D(inInfo);
            case 3:
                return getSampler3D(inInfo);
            case 4:
                return getSampler4D(inInfo);
            default:
                throw new Error(shape.length + "-D input sampling" +
                    " is not yet supported");
        }
    }
    function getInputSamplingSnippet(inInfo, outShapeInfo, broadcast) {
        var res = getSamplerFlat(inInfo);
        res += getSamplerFromInInfo(inInfo);
        if (broadcast ||
            arraysEqual(inInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape)) {
            res += getSamplerAtOutputCoords(inInfo, outShapeInfo, broadcast);
        }
        return res;
    }
    function getOutputSamplingSnippet(outShape, outTexShape) {
        switch (outShape.length) {
            case 0:
                return getOutputScalarCoords();
            case 1:
                return getOutput1DCoords(outShape, outTexShape);
            case 2:
                return getOutput2DCoords(outShape, outTexShape);
            case 3:
                return getOutput3DCoords(outShape, outTexShape);
            case 4:
                return getOutput4DCoords(outShape, outTexShape);
            default:
                throw new Error(outShape.length + "-D output sampling is not yet supported");
        }
    }
    var SAMPLE_1D_SNIPPET = "\nvec2 UVfrom1D(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
    var SAMPLE_2D_SNIPPET = "\nvec2 UVfrom2D(int texNumR, int texNumC, int numC, int row, int col) {\n  int index = row * numC + col;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
    var SAMPLE_3D_SNIPPET = "\nvec2 UVfrom3D(int texNumR, int texNumC, int stride0,\n    int stride1, int row, int col, int depth) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
    var SAMPLE_4D_SNIPPET = "\nvec2 UVfrom4D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int row, int col, int depth,\n    int depth2) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
    var UNSIGNED_BYTE_TEXTURE_SAMPLE_SNIPPET = "\n  uniform float NaN;\n\n  const vec4 floatDeltas = vec4(\n      1.0,\n      1.0 / 255.0,\n      1.0 / (255.0 * 255.0),\n      1.0 / (255.0 * 255.0 * 255.0)\n  );\n  const float minValue = " + FLOAT_MIN + ".0;\n  const float maxValue = " + FLOAT_MAX + ".0;\n  const float range = (maxValue - minValue) / 255.0;\n  const vec2 dotRange = vec2(1.0, range);\n\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    vec4 sampleValue = texture2D(textureSampler, uv);\n    if (all(equal(sampleValue, vec4(" + BYTE_NAN_VALUE + ")))) {\n      return NaN;\n    }\n\n    vec4 encValue = floor(sampleValue * 255.0 + 0.5);\n    float decodedValue = dot(encValue, floatDeltas);\n    return dot(vec2(minValue, decodedValue), dotRange);\n  }\n";
    var UNSIGNED_BYTE_TEXTURE_SETOUTPUT_SNIPPET = "\n  const vec4 floatPowers = vec4(\n    1.0,\n    255.0,\n    255.0 * 255.0,\n    255.0 * 255.0 * 255.0\n  );\n  const vec2 recipRange = vec2(1.0/range);\n  const vec2 recipRange255 = vec2(1.0/(maxValue - minValue));\n\n  void setOutput(float decodedValue) {\n    if (isNaN(decodedValue)) {\n      gl_FragColor = vec4(" + BYTE_NAN_VALUE + ");\n      return;\n    }\n\n    float a = dot(vec2(decodedValue, -minValue), recipRange);\n    float b = fract(a) * 255.0;\n    float c = fract(b) * 255.0;\n    float d = fract(c) * 255.0;\n    gl_FragColor = floor(vec4(a, b, c, d)) / 255.0;\n\n    // TODO(dsmilkov): Version above gets better accuracy but probably slower\n    // than the version below. Benchmark to determine if the accuracy is worth\n    // the cost.\n\n    // float normValue = dot(vec2(decodedValue, -minValue), recipRange255);\n    // vec4 f = normValue * floatPowers;\n    // gl_FragColor = floor(fract(f) * 255.0) / 255.0;\n  }\n";
    var FLOAT_TEXTURE_SAMPLE_SNIPPET = "\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    return texture2D(textureSampler, uv).r;\n  }\n";
    var FLOAT_TEXTURE_SETOUTPUT_SNIPPET = "\n  void setOutput(float val) {\n    gl_FragColor = vec4(val, 0, 0, 0);\n  }\n";
    var SHADER_PREFIX = "\n  precision highp float;\n  precision highp int;\n  varying vec2 resultUV;\n  const vec2 halfCR = vec2(0.5, 0.5);\n\n  bool isNaN(float val) {\n    float v1 = val * val;\n    float v2 = val * val;\n    return v1 == v2 ? false : true;\n  }\n\n  bool hasNaN(vec4 values) {\n    vec4 v1 = values * values;\n    vec4 v2 = values * values;\n    return any(notEqual(v1, v2));\n  }\n\n  float getNaN(vec4 values) {\n    return dot(vec4(1), values);\n  }\n\n  int round(float value) {\n    return int(floor(value + 0.5));\n  }\n\n  int imod(int x, int y) {\n    return x - y * (x / y);\n  }\n\n  //Based on the work of Dave Hoskins\n  //https://www.shadertoy.com/view/4djSRW\n  #define HASHSCALE1 443.8975\n  float random(float seed){\n    vec2 p = resultUV * seed;\n    vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.x + p3.y) * p3.z);\n  }\n\n  " + SAMPLE_1D_SNIPPET + "\n  " + SAMPLE_2D_SNIPPET + "\n  " + SAMPLE_3D_SNIPPET + "\n  " + SAMPLE_4D_SNIPPET + "\n";
    function getOutputScalarCoords() {
        return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
    }
    function getOutput1DCoords(shape, texShape) {
        if (texShape[0] === 1) {
            return "\n      int getOutputCoords() {\n        return int(resultUV.x * " + texShape[1] + ".0);\n      }\n    ";
        }
        if (texShape[1] === 1) {
            return "\n      int getOutputCoords() {\n        return int(resultUV.y * " + texShape[0] + ".0);\n      }\n    ";
        }
        return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + texShape[0] + ", " + texShape[1] + "));\n      return resTexRC.x * " + texShape[1] + " + resTexRC.y;\n    }\n  ";
    }
    function getOutput3DCoords(shape, texShape) {
        var stride0 = shape[1] * shape[2];
        var stride1 = shape[2];
        return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + texShape[0] + ", " + texShape[1] + "));\n      int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n      int r = index / " + stride0 + ";\n      index -= r * " + stride0 + ";\n      int c = index / " + stride1 + ";\n      int d = index - c * " + stride1 + ";\n      return ivec3(r, c, d);\n    }\n  ";
    }
    function getOutput4DCoords(shape, texShape) {
        var stride2 = shape[3];
        var stride1 = shape[2] * stride2;
        var stride0 = shape[1] * stride1;
        return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + texShape[0] + ", " + texShape[1] + "));\n      int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n\n      int r = index / " + stride0 + ";\n      index -= r * " + stride0 + ";\n\n      int c = index / " + stride1 + ";\n      index -= c * " + stride1 + ";\n\n      int d = index / " + stride2 + ";\n      int d2 = index - d * " + stride2 + ";\n\n      return ivec4(r, c, d, d2);\n    }\n  ";
    }
    function getOutput2DCoords(shape, texShape) {
        if (arraysEqual(shape, texShape)) {
            return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + texShape[0] + ", " + texShape[1] + "));\n      }\n    ";
        }
        if (shape[1] === 1) {
            return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + texShape[0] + ", " + texShape[1] + "));\n        int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";
        }
        if (shape[0] === 1) {
            return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + texShape[0] + ", " + texShape[1] + "));\n        int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";
        }
        return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + texShape[0] + ", " + texShape[1] + "));\n      int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n      int r = index / " + shape[1] + ";\n      int c = index - r * " + shape[1] + ";\n      return ivec2(r, c);\n    }\n  ";
    }
    function getSamplerScalar(inputInfo) {
        var texName = inputInfo.name;
        var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
        return "\n    float " + funcName + "() {\n      return sampleTexture(" + texName + ", halfCR);\n    }\n  ";
    }
    function getSampler1D(inputInfo) {
        var texName = inputInfo.name;
        var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
        return "\n    float " + funcName + "(int index) {\n      return " + funcName + "Flat(index);\n    }\n  ";
    }
    function getSampler2D(inputInfo) {
        var shape = inputInfo.shapeInfo.logicalShape;
        var texShape = inputInfo.shapeInfo.texShape;
        var texName = inputInfo.name;
        var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
        var texNumR = texShape[0];
        var texNumC = texShape[1];
        if (arraysEqual(shape, texShape)) {
            return "\n    float " + funcName + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + texNumC + ".0, " + texNumR + ".0);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
        }
        var _a = squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
        var squeezedShape = newShape;
        if (squeezedShape.length < shape.length) {
            var newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
            var params = ['row', 'col'];
            return "\n      " + getSamplerFromInInfo(newInputInfo) + "\n      float " + funcName + "(int row, int col) {\n        return " + funcName + "(" + getSqueezedParams(params, keptDims) + ");\n      }\n    ";
        }
        if (texNumC === 1) {
            return "\n    float " + funcName + "(int row, int col) {\n      int index = row * " + shape[1] + " + col;\n      vec2 uv = vec2(0.5, (float(index) + 0.5) / " + texNumR + ".0);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
        }
        if (texNumR === 1) {
            return "\n    float " + funcName + "(int row, int col) {\n      int index = row * " + shape[1] + " + col;\n      vec2 uv = vec2((float(index) + 0.5) / " + texNumC + ".0, 0.5);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
        }
        return "\n  float " + funcName + "(int row, int col) {\n    vec2 uv = UVfrom2D(" + texNumR + ", " + texNumC + ", " + shape[1] + ", row, col);\n    return sampleTexture(" + texName + ", uv);\n  }\n";
    }
    function getSampler3D(inputInfo) {
        var texShape = inputInfo.shapeInfo.texShape;
        var shape = inputInfo.shapeInfo.logicalShape;
        var texName = inputInfo.name;
        var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
        var texNumR = texShape[0];
        var texNumC = texShape[1];
        var stride0 = shape[1] * shape[2];
        var stride1 = shape[2];
        var _a = squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
        var squeezedShape = newShape;
        if (squeezedShape.length < shape.length) {
            var newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
            var params = ['row', 'col', 'depth'];
            return "\n        " + getSamplerFromInInfo(newInputInfo) + "\n        float " + funcName + "(int row, int col, int depth) {\n          return " + funcName + "(" + getSqueezedParams(params, keptDims) + ");\n        }\n      ";
        }
        if (texNumC === stride0) {
            return "\n        float " + funcName + "(int row, int col, int depth) {\n          int texR = row;\n          int texC = col * " + stride1 + " + depth;\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + texNumC + ".0, " + texNumR + ".0);\n          return sampleTexture(" + texName + ", uv);\n        }\n      ";
        }
        if (texNumC === stride1) {
            return "\n    float " + funcName + "(int row, int col, int depth) {\n      int texR = row * " + shape[1] + " + col;\n      int texC = depth;\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + texNumC + ".0, " + texNumR + ".0);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
        }
        return "\n      float " + funcName + "(int row, int col, int depth) {\n        vec2 uv = UVfrom3D(\n            " + texNumR + ", " + texNumC + ", " + stride0 + ", " + stride1 + ", row, col, depth);\n        return sampleTexture(" + texName + ", uv);\n      }\n  ";
    }
    function getSampler4D(inputInfo) {
        var shape = inputInfo.shapeInfo.logicalShape;
        var texShape = inputInfo.shapeInfo.texShape;
        var texName = inputInfo.name;
        var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
        var texNumR = texShape[0];
        var texNumC = texShape[1];
        var stride2 = shape[3];
        var stride1 = shape[2] * stride2;
        var stride0 = shape[1] * stride1;
        var _a = squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
        if (newShape.length < shape.length) {
            var newInputInfo = squeezeInputInfo(inputInfo, newShape);
            var params = ['row', 'col', 'depth', 'depth2'];
            return "\n      " + getSamplerFromInInfo(newInputInfo) + "\n      float " + funcName + "(int row, int col, int depth, int depth2) {\n        return " + funcName + "(" + getSqueezedParams(params, keptDims) + ");\n      }\n    ";
        }
        if (texNumC === stride0) {
            return "\n      float " + funcName + "(int row, int col, int depth, int depth2) {\n        int texR = row;\n        int texC = col * " + stride1 + " + depth * " + stride2 + " + depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + texNumC + ".0, " + texNumR + ".0);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
        }
        if (texNumC === stride2) {
            return "\n      float " + funcName + "(int row, int col, int depth, int depth2) {\n        int texR = row * " + shape[1] * shape[2] + " + col * " + shape[2] + " + depth;\n        int texC = depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + texNumC + ".0, " + texNumR + ".0);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
        }
        return "\n    float " + funcName + "(int row, int col, int depth, int depth2) {\n      vec2 uv = UVfrom4D(" + texNumR + ", " + texNumC + ", " + stride0 + ", " + stride1 + ",\n          " + stride2 + ", row, col, depth, depth2);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
    }
    function getSamplerFlat(inputInfo) {
        var texName = inputInfo.name;
        var texShape = inputInfo.shapeInfo.texShape;
        var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1) + 'Flat';
        var tNumR = texShape[0];
        var tNumC = texShape[1];
        if (tNumC === 1 && tNumR === 1) {
            return "\n      float " + funcName + "(int index) {\n        return sampleTexture(" + texName + ", halfCR);\n      }\n    ";
        }
        if (tNumC === 1) {
            return "\n      float " + funcName + "(int index) {\n        vec2 uv = vec2(0.5, (float(index) + 0.5) / " + tNumR + ".0);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
        }
        if (tNumR === 1) {
            return "\n      float " + funcName + "(int index) {\n        vec2 uv = vec2((float(index) + 0.5) / " + tNumC + ".0, 0.5);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
        }
        return "\n    float " + funcName + "(int index) {\n      vec2 uv = UVfrom1D(" + tNumR + ", " + tNumC + ", index);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
    }
    function getBroadcastOutputCoordsSampler(inputInfo, outShapeInfo, texFuncSnippet, funcName) {
        var inRank = inputInfo.shapeInfo.logicalShape.length;
        var outRank = outShapeInfo.logicalShape.length;
        var type = 'int';
        if (outRank === 2) {
            type = 'ivec2';
        }
        else if (outRank === 3) {
            type = 'ivec3';
        }
        else if (outRank === 4) {
            type = 'ivec4';
        }
        var broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
        var rankDiff = outRank - inRank;
        var coordsSnippet;
        if (inRank === 0) {
            coordsSnippet = '';
        }
        else if (outRank < 2 && broadcastDims.length >= 1) {
            coordsSnippet = 'coords = 0;';
        }
        else {
            coordsSnippet =
                broadcastDims.map(function (d) { return "coords[" + (d + rankDiff) + "] = 0;"; }).join('\n');
        }
        var unpackedCoordsSnippet = '';
        if (outRank < 2 && inRank > 0) {
            unpackedCoordsSnippet = 'coords';
        }
        else {
            unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape
                .map(function (s, i) { return "coords[" + (i + rankDiff) + "]"; })
                .join(', ');
        }
        return "\n    float " + funcName + "() {\n      " + type + " coords = getOutputCoords();\n      " + coordsSnippet + "\n      return get" + texFuncSnippet + "(" + unpackedCoordsSnippet + ");\n    }\n  ";
    }
    function getSamplerAtOutputCoords(inputInfo, outShapeInfo, supportsBroadcasting) {
        var inTexShape = inputInfo.shapeInfo.texShape;
        var texName = inputInfo.name;
        var texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
        var funcName = 'get' + texFuncSnippet + 'AtOutCoords';
        var broadcastDims = getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
        var inRank = inputInfo.shapeInfo.logicalShape.length;
        var outRank = outShapeInfo.logicalShape.length;
        var doBroadcast = supportsBroadcasting && ((outRank > inRank) || broadcastDims.length > 0);
        var broadcastOverOuter = broadcastDimsAreOuter(broadcastDims);
        if (doBroadcast && !broadcastOverOuter) {
            return getBroadcastOutputCoordsSampler(inputInfo, outShapeInfo, texFuncSnippet, funcName);
        }
        var outTexShape = outShapeInfo.texShape;
        if (arraysEqual(inTexShape, outTexShape)) {
            return "\n      float " + funcName + "() {\n        return sampleTexture(" + texName + ", resultUV);\n      }\n    ";
        }
        var inSize = sizeFromShape(inTexShape);
        var broadcastSnippet = '';
        if (doBroadcast && broadcastOverOuter) {
            broadcastSnippet = "\n        int mainPart = index / " + inSize + ";\n        index -= mainPart * " + inSize + ";\n      ";
        }
        return "\n    float " + funcName + "() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + outTexShape[0] + ", " + outTexShape[1] + "));\n      int index = resTexRC.x * " + outTexShape[1] + " + resTexRC.y;\n      " + broadcastSnippet + "\n      int texR = index / " + inTexShape[1] + ";\n      int texC = index - texR * " + inTexShape[1] + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) /\n                 vec2(" + inTexShape[1] + ".0, " + inTexShape[0] + ".0);\n\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
    }
    function getCoordsDataType(rank) {
        if (rank <= 1) {
            return 'int';
        }
        else if (rank === 2) {
            return 'ivec2';
        }
        else if (rank === 3) {
            return 'ivec3';
        }
        else if (rank === 4) {
            return 'ivec4';
        }
        else {
            throw Error("GPU for rank " + rank + " is not yet supported");
        }
    }
    function squeezeInputInfo(inInfo, squeezedShape) {
        var newInputInfo = JSON.parse(JSON.stringify(inInfo));
        newInputInfo.shapeInfo.logicalShape = squeezedShape;
        return newInputInfo;
    }
    function getSqueezedParams(params, keptDims) {
        return keptDims.map(function (d) { return params[d]; }).join(', ');
    }

    var CumSumProgram = (function () {
        function CumSumProgram(shape, exclusive, reverse) {
            this.variableNames = ['x'];
            this.outputShape = shape;
            var rank = shape.length;
            var finalDim = shape[shape.length - 1];
            var dtype = getCoordsDataType(rank);
            var outputCoords = getCoords(rank, 'coords');
            var sourceCoords = getCoords(rank, 'adjustableCoords');
            var finalCoord = getFinalCoord(rank, 'coords');
            var finalAdjustableCoord = getFinalCoord(rank, 'adjustableCoords');
            var indexAdjuster = reverse ? "return " + finalDim + " -i - 1;" : 'return i;';
            var comparator = reverse ? '<' : '>';
            this.userCode = "\n      int getIndex(int i) {\n        " + indexAdjuster + "\n      }\n\n      void main() {\n        " + dtype + " coords = getOutputCoords();\n        " + dtype + " adjustableCoords = " + dtype + "(" + outputCoords + ");\n        int finalCoord = int(" + finalCoord + ");\n        float val = 0.0;\n        for (int i = " + finalDim + " - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx " + comparator + " finalCoord) {\n            continue;\n          }\n          if (idx == finalCoord && " + exclusive + ") {\n            continue;\n          }\n          " + finalAdjustableCoord + " = idx;\n          val += getX(" + sourceCoords + ");\n        }\n        setOutput(val);\n      }\n    ";
        }
        return CumSumProgram;
    }());
    function getCoords(rank, name) {
        if (rank === 1) {
            return "" + name;
        }
        else if (rank === 2) {
            return name + ".x, " + name + ".y";
        }
        else if (rank === 3) {
            return name + ".x, " + name + ".y, " + name + ".z";
        }
        else if (rank === 4) {
            return name + ".x, " + name + ".y, " + name + ".z, " + name + ".w";
        }
        else {
            throw Error("Cumulative sum for rank " + rank + " is not yet supported");
        }
    }
    function getFinalCoord(rank, name) {
        if (rank === 1) {
            return "" + name;
        }
        else if (rank === 2) {
            return name + ".y";
        }
        else if (rank === 3) {
            return name + ".z";
        }
        else if (rank === 4) {
            return name + ".w";
        }
        else {
            throw Error("Cumulative sum for rank " + rank + " is not yet supported");
        }
    }

    var DepthwiseConv2DProgram = (function () {
        function DepthwiseConv2DProgram(convInfo) {
            this.variableNames = ['x', 'W'];
            this.outputShape = convInfo.outShape;
            var xNumRows = convInfo.inHeight;
            var xNumCols = convInfo.inWidth;
            var padTop = convInfo.padInfo.top;
            var padLeft = convInfo.padInfo.left;
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var dilationHeight = convInfo.dilationHeight;
            var dilationWidth = convInfo.dilationWidth;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var channelMul = convInfo.outChannels / convInfo.inChannels;
            this.userCode = "\n      const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + channelMul + ";\n        int q = d2 - d1 * " + channelMul + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TODO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          int xR = xRCorner + wR * " + dilationHeight + ";\n\n          if (xR < 0 || xR >= " + xNumRows + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            int xC = xCCorner + wC * " + dilationWidth + ";\n\n            if (xC < 0 || xC >= " + xNumCols + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
        }
        return DepthwiseConv2DProgram;
    }());

    var FromPixelsProgram = (function () {
        function FromPixelsProgram(outputShape) {
            this.variableNames = ['A'];
            var height = outputShape[0], width = outputShape[1];
            this.outputShape = outputShape;
            this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + width + ".0, " + height + ".0);\n\n        vec4 values = texture2D(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";
        }
        return FromPixelsProgram;
    }());

    var GatherProgram = (function () {
        function GatherProgram(aShape, indicesLength, axis) {
            this.variableNames = ['A', 'indices'];
            var outputShape = aShape.slice();
            outputShape[axis] = indicesLength;
            this.outputShape = outputShape;
            this.rank = outputShape.length;
            var dtype = getCoordsDataType(this.rank);
            var sourceCoords = getSourceCoords(aShape, axis);
            this.userCode = "\n      void main() {\n        " + dtype + " resRC = getOutputCoords();\n        setOutput(getA(" + sourceCoords + "));\n      }\n    ";
        }
        return GatherProgram;
    }());
    function getSourceCoords(aShape, axis) {
        var rank = aShape.length;
        if (rank > 4) {
            throw Error("Gather for rank " + rank + " is not yet supported");
        }
        if (rank === 1) {
            return "int(getIndices(resRC))";
        }
        var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
        var sourceCoords = [];
        for (var i = 0; i < aShape.length; i++) {
            if (i === axis) {
                sourceCoords.push("int(getIndices(" + currentCoords[i] + "))");
            }
            else {
                sourceCoords.push("" + currentCoords[i]);
            }
        }
        return sourceCoords.join();
    }

    var MAX_TEXTURE_SIZE = null;
    function createWebGLRenderingContext(attributes) {
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return createWebGLRenderingContextFromCanvas(canvas, attributes);
    }
    function createWebGLRenderingContextFromCanvas(canvas, attributes) {
        var gl;
        var webglVersion = ENV.get('WEBGL_VERSION');
        if (webglVersion === 2) {
            gl = canvas.getContext('webgl2', attributes);
        }
        else if (webglVersion === 1) {
            gl = (canvas.getContext('webgl', attributes) ||
                canvas.getContext('experimental-webgl', attributes));
        }
        if (webglVersion === 0 || gl == null) {
            throw new Error('This browser does not support WebGL.');
        }
        return gl;
    }
    function callAndCheck(gl, func) {
        var returnValue = func();
        checkWebGLError(gl);
        return returnValue;
    }
    var webGLDebugErrorCheckingEnabled = false;
    function enableDebugWebGLErrorChecking(enabled) {
        webGLDebugErrorCheckingEnabled = enabled;
    }
    function checkWebGLError(gl) {
        if (webGLDebugErrorCheckingEnabled) {
            var error = gl.getError();
            if (error !== gl.NO_ERROR) {
                throw new Error('WebGL Error: ' + getWebGLErrorMessage(gl, error));
            }
        }
    }
    function getWebGLErrorMessage(gl, status) {
        switch (status) {
            case gl.NO_ERROR:
                return 'NO_ERROR';
            case gl.INVALID_ENUM:
                return 'INVALID_ENUM';
            case gl.INVALID_VALUE:
                return 'INVALID_VALUE';
            case gl.INVALID_OPERATION:
                return 'INVALID_OPERATION';
            case gl.INVALID_FRAMEBUFFER_OPERATION:
                return 'INVALID_FRAMEBUFFER_OPERATION';
            case gl.OUT_OF_MEMORY:
                return 'OUT_OF_MEMORY';
            case gl.CONTEXT_LOST_WEBGL:
                return 'CONTEXT_LOST_WEBGL';
            default:
                return "Unknown error code " + status;
        }
    }
    function getExtensionOrThrow(gl, extensionName) {
        return throwIfNull(gl, function () { return gl.getExtension(extensionName); }, 'Extension "' + extensionName + '" not supported on this browser.');
    }
    function createVertexShader(gl, vertexShaderSource) {
        var vertexShader = throwIfNull(gl, function () { return gl.createShader(gl.VERTEX_SHADER); }, 'Unable to create vertex WebGLShader.');
        callAndCheck(gl, function () { return gl.shaderSource(vertexShader, vertexShaderSource); });
        callAndCheck(gl, function () { return gl.compileShader(vertexShader); });
        if (gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) === false) {
            console.log(gl.getShaderInfoLog(vertexShader));
            throw new Error('Failed to compile vertex shader.');
        }
        return vertexShader;
    }
    function createFragmentShader(gl, fragmentShaderSource) {
        var fragmentShader = throwIfNull(gl, function () { return gl.createShader(gl.FRAGMENT_SHADER); }, 'Unable to create fragment WebGLShader.');
        callAndCheck(gl, function () { return gl.shaderSource(fragmentShader, fragmentShaderSource); });
        callAndCheck(gl, function () { return gl.compileShader(fragmentShader); });
        if (gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) === false) {
            logShaderSourceAndInfoLog(fragmentShaderSource, gl.getShaderInfoLog(fragmentShader));
            throw new Error('Failed to compile fragment shader.');
        }
        return fragmentShader;
    }
    var lineNumberRegex = /ERROR: [0-9]+:([0-9]+):/g;
    function logShaderSourceAndInfoLog(shaderSource, shaderInfoLog) {
        var lineNumberRegexResult = lineNumberRegex.exec(shaderInfoLog);
        if (lineNumberRegexResult == null) {
            console.log("Couldn't parse line number in error: " + shaderInfoLog);
            console.log(shaderSource);
            return;
        }
        var lineNumber = +lineNumberRegexResult[1];
        var shaderLines = shaderSource.split('\n');
        var pad = shaderLines.length.toString().length + 2;
        var linesWithLineNumbers = shaderLines.map(function (line, lineNumber) {
            return rightPad((lineNumber + 1).toString(), pad) + line;
        });
        var maxLineLength = 0;
        for (var i = 0; i < linesWithLineNumbers.length; i++) {
            maxLineLength = Math.max(linesWithLineNumbers[i].length, maxLineLength);
        }
        var beforeErrorLines = linesWithLineNumbers.slice(0, lineNumber - 1);
        var errorLine = linesWithLineNumbers.slice(lineNumber - 1, lineNumber);
        var afterErrorLines = linesWithLineNumbers.slice(lineNumber);
        console.log(beforeErrorLines.join('\n'));
        console.log(shaderInfoLog.split('\n')[0]);
        console.log("%c " + rightPad(errorLine[0], maxLineLength), 'border:1px solid red; background-color:#e3d2d2; color:#a61717');
        console.log(afterErrorLines.join('\n'));
    }
    function createProgram(gl) {
        return throwIfNull(gl, function () { return gl.createProgram(); }, 'Unable to create WebGLProgram.');
    }
    function linkProgram(gl, program) {
        callAndCheck(gl, function () { return gl.linkProgram(program); });
        if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
            console.log(gl.getProgramInfoLog(program));
            throw new Error('Failed to link vertex and fragment shaders.');
        }
    }
    function validateProgram(gl, program) {
        callAndCheck(gl, function () { return gl.validateProgram(program); });
        if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
            console.log(gl.getProgramInfoLog(program));
            throw new Error('Shader program validation failed.');
        }
    }
    function createStaticVertexBuffer(gl, data) {
        var buffer = throwIfNull(gl, function () { return gl.createBuffer(); }, 'Unable to create WebGLBuffer');
        callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, buffer); });
        callAndCheck(gl, function () { return gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); });
        return buffer;
    }
    function createStaticIndexBuffer(gl, data) {
        var buffer = throwIfNull(gl, function () { return gl.createBuffer(); }, 'Unable to create WebGLBuffer');
        callAndCheck(gl, function () { return gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer); });
        callAndCheck(gl, function () { return gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW); });
        return buffer;
    }
    function queryMaxTextureSize(gl) {
        if (MAX_TEXTURE_SIZE != null) {
            return MAX_TEXTURE_SIZE;
        }
        MAX_TEXTURE_SIZE =
            callAndCheck(gl, function () { return gl.getParameter(gl.MAX_TEXTURE_SIZE); });
        return MAX_TEXTURE_SIZE;
    }
    function getChannelsPerTexture() {
        if (!ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
            return 4;
        }
        if (ENV.get('WEBGL_VERSION') === 2) {
            return 1;
        }
        return 4;
    }
    function createTexture(gl) {
        return throwIfNull(gl, function () { return gl.createTexture(); }, 'Unable to create WebGLTexture.');
    }
    function validateTextureSize(gl, width, height) {
        var maxTextureSize = queryMaxTextureSize(gl);
        if ((width <= 0) || (height <= 0)) {
            var requested = "[" + width + "x" + height + "]";
            throw new Error('Requested texture size ' + requested + ' is invalid.');
        }
        if ((width > maxTextureSize) || (height > maxTextureSize)) {
            var requested = "[" + width + "x" + height + "]";
            var max = "[" + maxTextureSize + "x" + maxTextureSize + "]";
            throw new Error('Requested texture size ' + requested +
                ' greater than WebGL maximum on this browser / GPU ' + max + '.');
        }
    }
    function createFramebuffer(gl) {
        return throwIfNull(gl, function () { return gl.createFramebuffer(); }, 'Unable to create WebGLFramebuffer.');
    }
    function bindVertexBufferToProgramAttribute(gl, program, attribute, buffer, arrayEntriesPerItem, itemStrideInBytes, itemOffsetInBytes) {
        var loc = gl.getAttribLocation(program, attribute);
        if (loc === -1) {
            return false;
        }
        callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, buffer); });
        callAndCheck(gl, function () { return gl.vertexAttribPointer(loc, arrayEntriesPerItem, gl.FLOAT, false, itemStrideInBytes, itemOffsetInBytes); });
        callAndCheck(gl, function () { return gl.enableVertexAttribArray(loc); });
        return true;
    }
    function bindTextureUnit(gl, texture, textureUnit) {
        validateTextureUnit(gl, textureUnit);
        callAndCheck(gl, function () { return gl.activeTexture(gl.TEXTURE0 + textureUnit); });
        callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
    }
    function unbindTextureUnit(gl, textureUnit) {
        validateTextureUnit(gl, textureUnit);
        callAndCheck(gl, function () { return gl.activeTexture(gl.TEXTURE0 + textureUnit); });
        callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    }
    function getProgramUniformLocationOrThrow(gl, program, uniformName) {
        return throwIfNull(gl, function () { return gl.getUniformLocation(program, uniformName); }, 'uniform "' + uniformName + '" not present in program.');
    }
    function getProgramUniformLocation(gl, program, uniformName) {
        return gl.getUniformLocation(program, uniformName);
    }
    function bindTextureToProgramUniformSampler(gl, program, texture, uniformSamplerLocation, textureUnit) {
        callAndCheck(gl, function () { return bindTextureUnit(gl, texture, textureUnit); });
        callAndCheck(gl, function () { return gl.uniform1i(uniformSamplerLocation, textureUnit); });
    }
    function bindCanvasToFramebuffer(gl) {
        callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, null); });
        callAndCheck(gl, function () { return gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); });
        callAndCheck(gl, function () { return gl.scissor(0, 0, gl.canvas.width, gl.canvas.height); });
    }
    function bindColorTextureToFramebuffer(gl, texture, framebuffer) {
        callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); });
        callAndCheck(gl, function () { return gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0); });
    }
    function unbindColorTextureFromFramebuffer(gl, framebuffer) {
        callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); });
        callAndCheck(gl, function () { return gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, null, 0); });
    }
    function validateFramebuffer(gl) {
        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            throw new Error('Error binding framebuffer: ' + getFramebufferErrorMessage(gl, status));
        }
    }
    function getFramebufferErrorMessage(gl, status) {
        switch (status) {
            case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                return 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
            case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                return 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
            case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                return 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
            case gl.FRAMEBUFFER_UNSUPPORTED:
                return 'FRAMEBUFFER_UNSUPPORTED';
            default:
                return "unknown error " + status;
        }
    }
    function throwIfNull(gl, returnTOrNull, failureMessage) {
        var tOrNull = callAndCheck(gl, function () { return returnTOrNull(); });
        if (tOrNull == null) {
            throw new Error(failureMessage);
        }
        return tOrNull;
    }
    function validateTextureUnit(gl, textureUnit) {
        var maxTextureUnit = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
        var glTextureUnit = textureUnit + gl.TEXTURE0;
        if (glTextureUnit < gl.TEXTURE0 || glTextureUnit > maxTextureUnit) {
            var textureUnitRange = "[gl.TEXTURE0, gl.TEXTURE" + maxTextureUnit + "]";
            throw new Error("textureUnit must be in " + textureUnitRange + ".");
        }
    }
    function getTextureShapeFromLogicalShape(gl, logShape) {
        if (logShape.length !== 2) {
            var squeezeResult = squeezeShape(logShape);
            logShape = squeezeResult.newShape;
        }
        var maxTexSize = queryMaxTextureSize(gl);
        var size = sizeFromShape(logShape);
        if (logShape.length <= 1 && size <= maxTexSize) {
            return [size, 1];
        }
        else if (logShape.length === 2 && logShape[0] <= maxTexSize &&
            logShape[1] <= maxTexSize) {
            return logShape;
        }
        else if (logShape.length === 3 && logShape[0] <= maxTexSize &&
            logShape[1] * logShape[2] <= maxTexSize) {
            return [logShape[0], logShape[1] * logShape[2]];
        }
        else if (logShape.length === 4 && logShape[0] <= maxTexSize &&
            logShape[1] * logShape[2] * logShape[3] <= maxTexSize) {
            return [logShape[0], logShape[1] * logShape[2] * logShape[3]];
        }
        else {
            return sizeToSquarishShape(size);
        }
    }

    var webgl_util = /*#__PURE__*/Object.freeze({
        createWebGLRenderingContext: createWebGLRenderingContext,
        createWebGLRenderingContextFromCanvas: createWebGLRenderingContextFromCanvas,
        callAndCheck: callAndCheck,
        enableDebugWebGLErrorChecking: enableDebugWebGLErrorChecking,
        checkWebGLError: checkWebGLError,
        getWebGLErrorMessage: getWebGLErrorMessage,
        getExtensionOrThrow: getExtensionOrThrow,
        createVertexShader: createVertexShader,
        createFragmentShader: createFragmentShader,
        createProgram: createProgram,
        linkProgram: linkProgram,
        validateProgram: validateProgram,
        createStaticVertexBuffer: createStaticVertexBuffer,
        createStaticIndexBuffer: createStaticIndexBuffer,
        queryMaxTextureSize: queryMaxTextureSize,
        getChannelsPerTexture: getChannelsPerTexture,
        createTexture: createTexture,
        validateTextureSize: validateTextureSize,
        createFramebuffer: createFramebuffer,
        bindVertexBufferToProgramAttribute: bindVertexBufferToProgramAttribute,
        bindTextureUnit: bindTextureUnit,
        unbindTextureUnit: unbindTextureUnit,
        getProgramUniformLocationOrThrow: getProgramUniformLocationOrThrow,
        getProgramUniformLocation: getProgramUniformLocation,
        bindTextureToProgramUniformSampler: bindTextureToProgramUniformSampler,
        bindCanvasToFramebuffer: bindCanvasToFramebuffer,
        bindColorTextureToFramebuffer: bindColorTextureToFramebuffer,
        unbindColorTextureFromFramebuffer: unbindColorTextureFromFramebuffer,
        validateFramebuffer: validateFramebuffer,
        getFramebufferErrorMessage: getFramebufferErrorMessage,
        getTextureShapeFromLogicalShape: getTextureShapeFromLogicalShape
    });

    var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$3 = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    function getWebGLContextAttributes() {
        return {
            alpha: false,
            antialias: false,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
            depth: false,
            stencil: false,
            failIfMajorPerformanceCaveat: true
        };
    }
    function createWebGLContext(canvas) {
        var attributes = getWebGLContextAttributes();
        var gl;
        if (canvas != null) {
            gl = createWebGLRenderingContextFromCanvas(canvas, attributes);
        }
        else {
            gl = createWebGLRenderingContext(attributes);
        }
        callAndCheck(gl, function () { return gl.disable(gl.DEPTH_TEST); });
        callAndCheck(gl, function () { return gl.disable(gl.STENCIL_TEST); });
        callAndCheck(gl, function () { return gl.disable(gl.BLEND); });
        callAndCheck(gl, function () { return gl.disable(gl.DITHER); });
        callAndCheck(gl, function () { return gl.disable(gl.POLYGON_OFFSET_FILL); });
        callAndCheck(gl, function () { return gl.disable(gl.SAMPLE_COVERAGE); });
        callAndCheck(gl, function () { return gl.enable(gl.SCISSOR_TEST); });
        callAndCheck(gl, function () { return gl.enable(gl.CULL_FACE); });
        callAndCheck(gl, function () { return gl.cullFace(gl.BACK); });
        return gl;
    }
    function createVertexShader$1(gl) {
        var vertexShaderSource = "\n    precision highp float;\n    attribute vec3 clipSpacePos;\n    attribute vec2 uv;\n    varying vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }";
        return createVertexShader(gl, vertexShaderSource);
    }
    function createVertexBuffer(gl) {
        var vertexArray = new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
        return createStaticVertexBuffer(gl, vertexArray);
    }
    function createIndexBuffer(gl) {
        var triangleVertexIndices = new Uint16Array([0, 1, 2, 2, 1, 3]);
        return createStaticIndexBuffer(gl, triangleVertexIndices);
    }
    function getTextureInternalFormat(gl, numChannels) {
        if (!ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
            return gl.RGBA;
        }
        if (ENV.get('WEBGL_VERSION') === 2) {
            if (numChannels === 4) {
                return gl.RGBA32F;
            }
            return gl.R32F;
        }
        return gl.RGBA;
    }
    function getTextureFormat(gl, numChannels) {
        if (!ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
            return gl.RGBA;
        }
        if (ENV.get('WEBGL_VERSION') === 2) {
            if (numChannels === 4) {
                return gl.RGBA;
            }
            return gl.RED;
        }
        return gl.RGBA;
    }
    function getTextureType(gl) {
        if (!ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
            return gl.UNSIGNED_BYTE;
        }
        return gl.FLOAT;
    }
    function createAndConfigureTexture(gl, width, height, numChannels) {
        validateTextureSize(gl, width, height);
        var texture = createTexture(gl);
        var tex2d = gl.TEXTURE_2D;
        var internalFormat = getTextureInternalFormat(gl, numChannels);
        var format = getTextureFormat(gl, numChannels);
        callAndCheck(gl, function () { return gl.bindTexture(tex2d, texture); });
        callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); });
        callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); });
        callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST); });
        callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST); });
        callAndCheck(gl, function () { return gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, format, getTextureType(gl), null); });
        callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
        return texture;
    }
    function createMatrixTexture(gl, rows, columns) {
        var _a = getUnpackedMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
        var numChannels = 1;
        return createAndConfigureTexture(gl, width, height, numChannels);
    }
    function createColorMatrixTexture(gl, rows, columns) {
        var _a = getColorMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
        var numChannels = 4;
        return createAndConfigureTexture(gl, width, height, numChannels);
    }
    function createPackedMatrixTexture(gl, rows, columns) {
        var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
        var numChannels = 4;
        return createAndConfigureTexture(gl, width, height, numChannels);
    }
    function bindVertexProgramAttributeStreams(gl, program, vertexBuffer) {
        var posOffset = 0;
        var uvOffset = 3 * 4;
        var stride = (3 * 4) + (2 * 4);
        callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer); });
        var success = bindVertexBufferToProgramAttribute(gl, program, 'clipSpacePos', vertexBuffer, 3, stride, posOffset);
        return success &&
            bindVertexBufferToProgramAttribute(gl, program, 'uv', vertexBuffer, 2, stride, uvOffset);
    }
    function uploadPixelDataToTexture(gl, texture, pixels) {
        callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
        callAndCheck(gl, function () { return gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pixels); });
        callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    }
    function uploadDataToTexture(gl, texture, width, height, data, numChannels) {
        var textureFormat = getTextureFormat(gl, numChannels);
        validateTextureSize(gl, width, height);
        callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
        callAndCheck(gl, function () { return gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, textureFormat, getTextureType(gl), data); });
        callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    }
    function uploadMatrixToTexture(gl, texture, rows, columns, matrix, numChannels) {
        var _a = getUnpackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
        var unpackedArray;
        if (ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
            var channelsPerTexture = numChannels === 1 ? getChannelsPerTexture() : numChannels;
            if (channelsPerTexture === 1) {
                unpackedArray = matrix;
            }
            else {
                unpackedArray =
                    new Float32Array(getUnpackedArraySizeFromMatrixSize(matrix.length, channelsPerTexture));
                encodeMatrixToUnpackedArray(matrix, unpackedArray, channelsPerTexture);
            }
        }
        else {
            unpackedArray = encodeFloatArray(matrix);
        }
        uploadDataToTexture(gl, texture, w, h, unpackedArray, numChannels);
    }
    function uploadMatrixToPackedTexture(gl, texture, rows, columns, matrix) {
        var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
        var packedRGBA = new Float32Array(getPackedRGBAArraySizeFromMatrixShape(rows, columns));
        encodeMatrixToPackedRGBA(matrix, rows, columns, packedRGBA);
        var numChannels = 4;
        uploadDataToTexture(gl, texture, w, h, packedRGBA, numChannels);
    }
    function getDownloadTargetArrayBuffer(rows, columns, channelsPerTexture) {
        var isFloatTexture = ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED');
        var downloadTarget;
        if (isFloatTexture) {
            downloadTarget =
                new Float32Array(getUnpackedArraySizeFromMatrixSize(rows * columns, channelsPerTexture));
        }
        else {
            downloadTarget = new Uint8Array(rows * columns * channelsPerTexture);
        }
        return downloadTarget;
    }
    function decodeDownloadTargetArrayBuffer(downloadTarget, rows, columns, channelsPerPixel) {
        var isFloatTexture = ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED');
        if (isFloatTexture) {
            var matrix = new Float32Array(rows * columns);
            decodeMatrixFromUnpackedArray(downloadTarget, matrix, channelsPerPixel);
            return matrix;
        }
        else {
            return decodeToFloatArray(downloadTarget);
        }
    }
    function downloadMatrixFromOutputTextureAsync(gl, getBufferSubDataAsyncExtension, rows, columns) {
        return __awaiter$3(this, void 0, void 0, function () {
            var gl2, channelsPerPixel, downloadTarget, bufferSizeBytes, buffer;
            return __generator$3(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gl2 = gl;
                        channelsPerPixel = 4;
                        downloadTarget = getDownloadTargetArrayBuffer(rows, columns, channelsPerPixel);
                        bufferSizeBytes = downloadTarget instanceof Float32Array ?
                            downloadTarget.length * 4 :
                            downloadTarget;
                        buffer = gl.createBuffer();
                        callAndCheck(gl, function () { return gl.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer); });
                        callAndCheck(gl, function () { return gl.bufferData(gl2.PIXEL_PACK_BUFFER, bufferSizeBytes, gl.STATIC_DRAW); });
                        callAndCheck(gl, function () {
                            return gl2.readPixels(0, 0, columns, rows, gl.RGBA, getTextureType(gl), 0);
                        });
                        return [4, getBufferSubDataAsyncExtension.getBufferSubDataAsync(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget)];
                    case 1:
                        _a.sent();
                        return [2, decodeDownloadTargetArrayBuffer(downloadTarget, rows, columns, channelsPerPixel)];
                }
            });
        });
    }
    function downloadMatrixFromOutputTexture(gl, rows, columns) {
        var _a = getUnpackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
        var channelsPerPixel = 4;
        var downloadTarget = getDownloadTargetArrayBuffer(rows, columns, channelsPerPixel);
        callAndCheck(gl, function () { return gl.readPixels(0, 0, w, h, gl.RGBA, getTextureType(gl), downloadTarget); });
        return decodeDownloadTargetArrayBuffer(downloadTarget, rows, columns, channelsPerPixel);
    }
    function downloadMatrixFromRGBAColorTexture(gl, rows, columns, channels) {
        var size = rows * columns * 4;
        var downloadTarget = new Uint8Array(size);
        callAndCheck(gl, function () { return gl.readPixels(0, 0, columns, rows, gl.RGBA, gl.UNSIGNED_BYTE, downloadTarget); });
        var packedRGBA = new Float32Array(size);
        for (var i = 0; i < downloadTarget.length; i++) {
            packedRGBA[i] = downloadTarget[i];
        }
        var matrix = new Float32Array(rows * columns * channels);
        decodeMatrixFromUnpackedColorRGBAArray(packedRGBA, matrix, channels);
        return matrix;
    }
    function downloadMatrixFromPackedOutputTexture(gl, rows, columns) {
        var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
        var packedRGBA = new Float32Array(getPackedRGBAArraySizeFromMatrixShape(rows, columns));
        callAndCheck(gl, function () { return gl.readPixels(0, 0, w, h, gl.RGBA, getTextureType(gl), packedRGBA); });
        var matrix = new Float32Array(rows * columns);
        return decodeMatrixFromPackedRGBA(packedRGBA, rows, columns, matrix);
    }

    var gpgpu_util = /*#__PURE__*/Object.freeze({
        getWebGLContextAttributes: getWebGLContextAttributes,
        createWebGLContext: createWebGLContext,
        createVertexShader: createVertexShader$1,
        createVertexBuffer: createVertexBuffer,
        createIndexBuffer: createIndexBuffer,
        createMatrixTexture: createMatrixTexture,
        createColorMatrixTexture: createColorMatrixTexture,
        createPackedMatrixTexture: createPackedMatrixTexture,
        bindVertexProgramAttributeStreams: bindVertexProgramAttributeStreams,
        uploadPixelDataToTexture: uploadPixelDataToTexture,
        uploadMatrixToTexture: uploadMatrixToTexture,
        uploadMatrixToPackedTexture: uploadMatrixToPackedTexture,
        downloadMatrixFromOutputTextureAsync: downloadMatrixFromOutputTextureAsync,
        downloadMatrixFromOutputTexture: downloadMatrixFromOutputTexture,
        downloadMatrixFromRGBAColorTexture: downloadMatrixFromRGBAColorTexture,
        downloadMatrixFromPackedOutputTexture: downloadMatrixFromPackedOutputTexture
    });

    var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$4 = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    var GPGPUContext = (function () {
        function GPGPUContext(gl) {
            this.outputTexture = null;
            this.program = null;
            this.disposed = false;
            this.autoDebugValidate = false;
            this.vertexAttrsAreBound = false;
            if (gl != null) {
                this.gl = gl;
            }
            else {
                this.gl = createWebGLContext();
            }
            if (ENV.get('WEBGL_VERSION') === 1) {
                this.textureFloatExtension =
                    getExtensionOrThrow(this.gl, 'OES_texture_float');
                this.colorBufferFloatExtension =
                    this.gl.getExtension('WEBGL_color_buffer_float');
            }
            else {
                this.colorBufferFloatExtension =
                    getExtensionOrThrow(this.gl, 'EXT_color_buffer_float');
            }
            this.loseContextExtension =
                getExtensionOrThrow(this.gl, 'WEBGL_lose_context');
            if (ENV.get('WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED')) {
                this.getBufferSubDataAsyncExtension =
                    this.gl.getExtension('WEBGL_get_buffer_sub_data_async');
            }
            this.vertexBuffer = createVertexBuffer(this.gl);
            this.indexBuffer = createIndexBuffer(this.gl);
            this.framebuffer = createFramebuffer(this.gl);
        }
        GPGPUContext.prototype.dispose = function () {
            var _this = this;
            if (this.disposed) {
                return;
            }
            if (this.program != null) {
                console.warn('Disposing a GPGPUContext that still has a bound WebGLProgram.' +
                    ' This is probably a resource leak, delete the program with ' +
                    'GPGPUContext.deleteProgram before disposing.');
            }
            if (this.outputTexture != null) {
                console.warn('Disposing a GPGPUContext that still has a bound output matrix ' +
                    'texture.  This is probably a resource leak, delete the output ' +
                    'matrix texture with GPGPUContext.deleteMatrixTexture before ' +
                    'disposing.');
            }
            var gl = this.gl;
            callAndCheck(gl, function () { return gl.finish(); });
            callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, null); });
            callAndCheck(gl, function () { return gl.deleteFramebuffer(_this.framebuffer); });
            callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, null); });
            callAndCheck(gl, function () { return gl.deleteBuffer(_this.vertexBuffer); });
            callAndCheck(gl, function () { return gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null); });
            callAndCheck(gl, function () { return gl.deleteBuffer(_this.indexBuffer); });
            this.loseContextExtension.loseContext();
            this.disposed = true;
        };
        GPGPUContext.prototype.enableAutomaticDebugValidation = function (enabled) {
            this.autoDebugValidate = enabled;
            enableDebugWebGLErrorChecking(enabled);
        };
        GPGPUContext.prototype.createMatrixTexture = function (rows, columns) {
            this.throwIfDisposed();
            return createMatrixTexture(this.gl, rows, columns);
        };
        GPGPUContext.prototype.uploadPixelDataToTexture = function (texture, pixels) {
            this.throwIfDisposed();
            uploadPixelDataToTexture(this.gl, texture, pixels);
        };
        GPGPUContext.prototype.createPackedMatrixTexture = function (rows, columns) {
            this.throwIfDisposed();
            return createPackedMatrixTexture(this.gl, rows, columns);
        };
        GPGPUContext.prototype.deleteMatrixTexture = function (texture) {
            var _this = this;
            this.throwIfDisposed();
            if (this.outputTexture === texture) {
                unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
                this.outputTexture = null;
            }
            callAndCheck(this.gl, function () { return _this.gl.deleteTexture(texture); });
        };
        GPGPUContext.prototype.uploadMatrixToTexture = function (texture, rows, columns, matrix) {
            this.throwIfDisposed();
            var numChannels = 1;
            return uploadMatrixToTexture(this.gl, texture, rows, columns, matrix, numChannels);
        };
        GPGPUContext.prototype.uploadMatrixToPackedTexture = function (texture, rows, columns, matrix) {
            this.throwIfDisposed();
            return uploadMatrixToPackedTexture(this.gl, texture, rows, columns, matrix);
        };
        GPGPUContext.prototype.downloadMatrixFromTexture = function (texture, rows, columns) {
            var _this = this;
            return this.downloadMatrixDriver(texture, function () {
                return downloadMatrixFromOutputTexture(_this.gl, rows, columns);
            });
        };
        GPGPUContext.prototype.downloadMatrixFromTextureAsync = function (texture, rows, columns) {
            return __awaiter$4(this, void 0, void 0, function () {
                var _this = this;
                return __generator$4(this, function (_a) {
                    if (this.getBufferSubDataAsyncExtension == null) {
                        throw new Error("Cannot download matrix from output texture asynchronously, " +
                            "WEBGL_get_buffer_sub_data_async is not enabled.");
                    }
                    return [2, this.downloadMatrixDriverAsync(texture, function () { return downloadMatrixFromOutputTextureAsync(_this.gl, _this.getBufferSubDataAsyncExtension, rows, columns); })];
                });
            });
        };
        GPGPUContext.prototype.downloadMatrixFromRGBAColorTexture = function (texture, rows, columns, channels) {
            var _this = this;
            return this.downloadMatrixDriver(texture, function () { return downloadMatrixFromRGBAColorTexture(_this.gl, rows, columns, channels); });
        };
        GPGPUContext.prototype.downloadMatrixFromPackedTexture = function (texture, rows, columns) {
            var _this = this;
            return this.downloadMatrixDriver(texture, function () { return downloadMatrixFromPackedOutputTexture(_this.gl, rows, columns); });
        };
        GPGPUContext.prototype.createProgram = function (fragmentShaderSource) {
            this.throwIfDisposed();
            var gl = this.gl;
            var fragmentShader = createFragmentShader(gl, fragmentShaderSource);
            var vertexShader = createVertexShader$1(gl);
            var program = createProgram(gl);
            callAndCheck(gl, function () { return gl.attachShader(program, vertexShader); });
            callAndCheck(gl, function () { return gl.attachShader(program, fragmentShader); });
            linkProgram(gl, program);
            if (this.autoDebugValidate) {
                validateProgram(gl, program);
            }
            if (!this.vertexAttrsAreBound) {
                this.setProgram(program);
                this.vertexAttrsAreBound = bindVertexProgramAttributeStreams(gl, this.program, this.vertexBuffer);
            }
            return program;
        };
        GPGPUContext.prototype.deleteProgram = function (program) {
            var _this = this;
            this.throwIfDisposed();
            if (program === this.program) {
                this.program = null;
            }
            if (program != null) {
                callAndCheck(this.gl, function () { return _this.gl.deleteProgram(program); });
            }
        };
        GPGPUContext.prototype.setProgram = function (program) {
            var _this = this;
            this.throwIfDisposed();
            this.program = program;
            if ((this.program != null) && this.autoDebugValidate) {
                validateProgram(this.gl, this.program);
            }
            callAndCheck(this.gl, function () { return _this.gl.useProgram(program); });
        };
        GPGPUContext.prototype.getUniformLocation = function (program, uniformName, shouldThrow) {
            if (shouldThrow === void 0) { shouldThrow = true; }
            this.throwIfDisposed();
            if (shouldThrow) {
                return getProgramUniformLocationOrThrow(this.gl, program, uniformName);
            }
            else {
                return getProgramUniformLocation(this.gl, program, uniformName);
            }
        };
        GPGPUContext.prototype.getAttributeLocation = function (program, attribute) {
            var _this = this;
            this.throwIfDisposed();
            return callAndCheck(this.gl, function () { return _this.gl.getAttribLocation(program, attribute); });
        };
        GPGPUContext.prototype.getUniformLocationNoThrow = function (program, uniformName) {
            this.throwIfDisposed();
            return this.gl.getUniformLocation(program, uniformName);
        };
        GPGPUContext.prototype.setInputMatrixTexture = function (inputMatrixTexture, uniformLocation, textureUnit) {
            this.throwIfDisposed();
            this.throwIfNoProgram();
            bindTextureToProgramUniformSampler(this.gl, this.program, inputMatrixTexture, uniformLocation, textureUnit);
        };
        GPGPUContext.prototype.setOutputMatrixTexture = function (outputMatrixTexture, rows, columns) {
            this.setOutputMatrixTextureDriver(outputMatrixTexture, columns, rows);
        };
        GPGPUContext.prototype.setOutputPackedMatrixTexture = function (outputPackedMatrixTexture, rows, columns) {
            this.throwIfDisposed();
            var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
            this.setOutputMatrixTextureDriver(outputPackedMatrixTexture, width, height);
        };
        GPGPUContext.prototype.setOutputMatrixWriteRegion = function (startRow, numRows, startColumn, numColumns) {
            this.setOutputMatrixWriteRegionDriver(startColumn, startRow, numColumns, numRows);
        };
        GPGPUContext.prototype.setOutputPackedMatrixWriteRegion = function (startRow, numRows, startColumn, numColumns) {
            throw new Error('setOutputPackedMatrixWriteRegion not implemented.');
        };
        GPGPUContext.prototype.debugValidate = function () {
            if (this.program != null) {
                validateProgram(this.gl, this.program);
            }
            validateFramebuffer(this.gl);
        };
        GPGPUContext.prototype.executeProgram = function () {
            this.throwIfDisposed();
            this.throwIfNoProgram();
            var gl = this.gl;
            if (this.autoDebugValidate) {
                this.debugValidate();
            }
            callAndCheck(gl, function () { return gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0); });
        };
        GPGPUContext.prototype.blockUntilAllProgramsCompleted = function () {
            var _this = this;
            this.throwIfDisposed();
            callAndCheck(this.gl, function () { return _this.gl.finish(); });
        };
        GPGPUContext.prototype.getQueryTimerExtension = function () {
            if (this.disjointQueryTimerExtension == null) {
                this.disjointQueryTimerExtension =
                    getExtensionOrThrow(this.gl, ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2 ?
                        'EXT_disjoint_timer_query_webgl2' :
                        'EXT_disjoint_timer_query');
            }
            return this.disjointQueryTimerExtension;
        };
        GPGPUContext.prototype.getQueryTimerExtensionWebGL2 = function () {
            return this.getQueryTimerExtension();
        };
        GPGPUContext.prototype.getQueryTimerExtensionWebGL1 = function () {
            return this.getQueryTimerExtension();
        };
        GPGPUContext.prototype.runQuery = function (queryFn) {
            var query = this.beginQuery();
            queryFn();
            this.endQuery();
            return this.pollQueryTime(query);
        };
        GPGPUContext.prototype.beginQuery = function () {
            if (ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
                var gl2 = this.gl;
                var ext_1 = this.getQueryTimerExtensionWebGL2();
                var query_1 = gl2.createQuery();
                gl2.beginQuery(ext_1.TIME_ELAPSED_EXT, query_1);
                return query_1;
            }
            var ext = this.getQueryTimerExtensionWebGL1();
            var query = ext.createQueryEXT();
            ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
            return query;
        };
        GPGPUContext.prototype.endQuery = function () {
            if (ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
                var gl2 = this.gl;
                var ext_2 = this.getQueryTimerExtensionWebGL2();
                gl2.endQuery(ext_2.TIME_ELAPSED_EXT);
                return;
            }
            var ext = this.getQueryTimerExtensionWebGL1();
            ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
        };
        GPGPUContext.prototype.isQueryAvailable = function (query, queryTimerVersion) {
            if (queryTimerVersion === 0) {
                return true;
            }
            if (queryTimerVersion === 2) {
                var gl2 = this.gl;
                var ext = this.getQueryTimerExtensionWebGL2();
                var available = gl2.getQueryParameter(query, gl2.QUERY_RESULT_AVAILABLE);
                var disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
                return available && !disjoint;
            }
            else {
                var ext = this.getQueryTimerExtensionWebGL1();
                var available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
                var disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
                return available && !disjoint;
            }
        };
        GPGPUContext.prototype.pollQueryTime = function (query) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var resolveWithWarning = function () {
                    console.warn('Disjoint query timer never available.');
                    resolve(-1);
                };
                var queryTimerVersion = ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION');
                repeatedTry(function () { return _this.isQueryAvailable(query, queryTimerVersion); })
                    .then(function () { return resolve(_this.getQueryTime(query, queryTimerVersion)); })
                    .catch(resolveWithWarning);
            });
        };
        GPGPUContext.prototype.getQueryTime = function (query, queryTimerVersion) {
            if (queryTimerVersion === 0) {
                return null;
            }
            if (queryTimerVersion === 2) {
                var gl2 = this.gl;
                var timeElapsedNanos = gl2.getQueryParameter(query, gl2.QUERY_RESULT);
                return timeElapsedNanos / 1000000;
            }
            else {
                var ext = this.getQueryTimerExtensionWebGL1();
                var timeElapsedNanos = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
                return timeElapsedNanos / 1000000;
            }
        };
        GPGPUContext.prototype.downloadMatrixDriverSetup = function (texture) {
            this.throwIfDisposed();
            bindColorTextureToFramebuffer(this.gl, texture, this.framebuffer);
            if (this.autoDebugValidate) {
                validateFramebuffer(this.gl);
            }
        };
        GPGPUContext.prototype.downloadMatrixDriverTeardown = function () {
            if (this.outputTexture != null) {
                bindColorTextureToFramebuffer(this.gl, this.outputTexture, this.framebuffer);
                if (this.autoDebugValidate) {
                    validateFramebuffer(this.gl);
                }
            }
            else {
                unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
            }
        };
        GPGPUContext.prototype.downloadMatrixDriver = function (texture, downloadAndDecode) {
            this.downloadMatrixDriverSetup(texture);
            var result = downloadAndDecode();
            this.downloadMatrixDriverTeardown();
            return result;
        };
        GPGPUContext.prototype.downloadMatrixDriverAsync = function (texture, downloadAndDecode) {
            return __awaiter$4(this, void 0, void 0, function () {
                var result;
                return __generator$4(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.downloadMatrixDriverSetup(texture);
                            return [4, downloadAndDecode()];
                        case 1:
                            result = _a.sent();
                            this.downloadMatrixDriverTeardown();
                            return [2, result];
                    }
                });
            });
        };
        GPGPUContext.prototype.setOutputMatrixTextureDriver = function (outputMatrixTextureMaybePacked, width, height) {
            this.throwIfDisposed();
            var gl = this.gl;
            bindColorTextureToFramebuffer(gl, outputMatrixTextureMaybePacked, this.framebuffer);
            if (this.autoDebugValidate) {
                validateFramebuffer(gl);
            }
            this.outputTexture = outputMatrixTextureMaybePacked;
            callAndCheck(gl, function () { return gl.viewport(0, 0, width, height); });
            callAndCheck(gl, function () { return gl.scissor(0, 0, width, height); });
        };
        GPGPUContext.prototype.setOutputMatrixWriteRegionDriver = function (x, y, width, height) {
            var _this = this;
            this.throwIfDisposed();
            callAndCheck(this.gl, function () { return _this.gl.scissor(x, y, width, height); });
        };
        GPGPUContext.prototype.throwIfDisposed = function () {
            if (this.disposed) {
                throw new Error('Attempted to use disposed GPGPUContext.');
            }
        };
        GPGPUContext.prototype.throwIfNoProgram = function () {
            if (this.program == null) {
                throw new Error('No GPU program is currently set.');
            }
        };
        return GPGPUContext;
    }());

    var NAN_UNIFORM_NAME = 'NaN';
    function shouldUploadNaNUniform() {
        return !ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED');
    }
    function compileProgram(gpgpu, program, inputs, output) {
        var userCode = program.userCode;
        var inputInfos = inputs.map(function (input, i) {
            var shapeInfo = {
                logicalShape: input.tensor.shape,
                texShape: input.texData.texShape
            };
            return { name: program.variableNames[i], shapeInfo: shapeInfo };
        });
        var inShapeInfos = inputInfos.map(function (x) { return x.shapeInfo; });
        var outShapeInfo = {
            logicalShape: output.tensor.shape,
            texShape: output.texData.texShape
        };
        var source = makeShader(inputInfos, outShapeInfo, userCode, program.supportsBroadcasting === true);
        var webGLProgram = gpgpu.createProgram(source);
        var uniformLocations = {};
        for (var i = 0; i < program.variableNames.length; i++) {
            var uniformName = program.variableNames[i];
            uniformLocations[uniformName] =
                gpgpu.getUniformLocation(webGLProgram, uniformName);
        }
        if (shouldUploadNaNUniform()) {
            var throwIfNaNUniformIsNotUsed = false;
            uniformLocations[NAN_UNIFORM_NAME] = gpgpu.getUniformLocation(webGLProgram, NAN_UNIFORM_NAME, throwIfNaNUniformIsNotUsed);
        }
        return {
            program: program,
            source: source,
            webGLProgram: webGLProgram,
            uniformLocations: uniformLocations,
            gpgpu: gpgpu,
            inShapeInfos: inShapeInfos,
            outShapeInfo: outShapeInfo
        };
    }
    function validateBinaryAndProgram(shapeInfos, inputs) {
        if (shapeInfos.length !== inputs.length) {
            throw Error("Binary was compiled with " + shapeInfos.length + " inputs, but " +
                ("was executed with " + inputs.length + " inputs"));
        }
        shapeInfos.forEach(function (s, i) {
            var shapeA = s.logicalShape;
            var texShapeA = s.texShape;
            var shapeB = inputs[i].tensor.shape;
            var texShapeB = inputs[i].texData.texShape;
            if (!arraysEqual(shapeA, shapeB)) {
                throw Error("Binary was compiled with different shapes than " +
                    ("the current args. Shapes " + shapeA + " and " + shapeB + " must match"));
            }
            if (!arraysEqual(texShapeA, texShapeB)) {
                throw Error("Binary was compiled with different texture shapes than the" +
                    (" current args. Shape " + texShapeA + " and " + texShapeB + " must match"));
            }
        });
    }
    function runProgram(binary, inputs, output, customSetup) {
        validateBinaryAndProgram(binary.inShapeInfos, inputs);
        validateBinaryAndProgram([binary.outShapeInfo], [output]);
        var outTex = output.texData.texture;
        var outTexShape = output.texData.texShape;
        var gpgpu = binary.gpgpu;
        gpgpu.setOutputMatrixTexture(outTex, outTexShape[0], outTexShape[1]);
        gpgpu.setProgram(binary.webGLProgram);
        inputs.forEach(function (input, i) {
            var tex = input.texData.texture;
            var variableName = binary.program.variableNames[i];
            var variableUniformLocation = binary.uniformLocations[variableName];
            gpgpu.setInputMatrixTexture(tex, variableUniformLocation, i);
        });
        if (shouldUploadNaNUniform()) {
            gpgpu.gl.uniform1f(binary.uniformLocations[NAN_UNIFORM_NAME], NaN);
        }
        if (customSetup != null) {
            customSetup(gpgpu, binary.webGLProgram);
        }
        gpgpu.executeProgram();
    }
    function makeShaderKey(program, inputs, output) {
        var keyInputs = '';
        inputs.concat(output).forEach(function (x) {
            keyInputs += x.tensor.shape + "_" + x.texData.texShape;
        });
        var keyUserCode = program.userCode;
        var keyBroadcast = (program.supportsBroadcasting === true).toString();
        var key = program.constructor.name;
        key += '_' + keyBroadcast + '_' + keyInputs + '_' + keyUserCode;
        return key;
    }

    var WhereProgram = (function () {
        function WhereProgram(cRank, shape, rank) {
            this.variableNames = ['c', 'a', 'b'];
            this.outputShape = shape;
            var cCoords;
            var abCoords;
            if (rank > 4) {
                throw Error("Where for rank " + rank + " is not yet supported");
            }
            if (rank === 1) {
                abCoords = "resRC";
                cCoords = "resRC";
            }
            else {
                var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
                var cCoordVars = [];
                var abCoordVars = [];
                for (var i = 0; i < shape.length; i++) {
                    abCoordVars.push("" + currentCoords[i]);
                    if (i < cRank) {
                        cCoordVars.push("" + currentCoords[i]);
                    }
                }
                cCoords = cCoordVars.join();
                abCoords = abCoordVars.join();
            }
            var dtype = getCoordsDataType(rank);
            this.userCode = "\n      void main() {\n        " + dtype + " resRC = getOutputCoords();\n        float cVal = getC(" + cCoords + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + abCoords + "));\n        } else {\n          setOutput(getB(" + abCoords + "));\n        }\n      }\n    ";
        }
        return WhereProgram;
    }());

    var LRNProgram = (function () {
        function LRNProgram(xShape, radius, bias, alpha, beta) {
            this.variableNames = ['x'];
            this.outputShape = [];
            var rad = radius;
            var maxD = xShape[3] - 1;
            this.outputShape = xShape;
            var powOperator;
            var basis = "float(" + bias + ") + float(" + alpha + ") * sum";
            if (beta === 0.5) {
                powOperator = "inversesqrt(" + basis + ")";
            }
            else if (beta === 1.0) {
                powOperator = "1.0/(" + basis + ")";
            }
            else {
                powOperator = "exp(log(" + basis + ") * float(-" + beta + "));";
            }
            this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + rad + "; j <= " + rad + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + maxD + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + powOperator + ";\n        setOutput(val);\n      }\n    ";
        }
        return LRNProgram;
    }());

    var MaxPool2DBackpropProgram = (function () {
        function MaxPool2DBackpropProgram(convInfo) {
            this.variableNames = ['dy', 'maxPos'];
            this.outputShape = convInfo.inShape;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var padTop = filterHeight - 1 - convInfo.padInfo.top;
            var padLeft = filterWidth - 1 - convInfo.padInfo.left;
            var lastIndex = filterHeight * filterWidth - 1;
            this.userCode = "\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + convInfo.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + convInfo.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + lastIndex + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + filterWidth + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
        }
        return MaxPool2DBackpropProgram;
    }());

    var MatMulProgram = (function () {
        function MatMulProgram(aShape, bShape, transposeA, transposeB) {
            if (transposeA === void 0) { transposeA = false; }
            if (transposeB === void 0) { transposeB = false; }
            this.variableNames = ['matrixA', 'matrixB'];
            var outerShapeA = transposeA ? aShape[1] : aShape[0];
            var outerShapeB = transposeB ? bShape[0] : bShape[1];
            var sharedDim = transposeA ? aShape[0] : aShape[1];
            this.outputShape = [outerShapeA, outerShapeB];
            var aSnippetFromOffset = function (vec4Offset, indexVar) {
                return transposeA ? indexVar + " + " + vec4Offset + ", aRow" :
                    "aRow, " + indexVar + " + " + vec4Offset;
            };
            var bSnippetFromOffset = function (vec4Offset, indexVar) {
                return transposeB ? "bCol, " + indexVar + " + " + vec4Offset :
                    indexVar + " + " + vec4Offset + ", bCol";
            };
            var sharedDimNearestVec4 = Math.floor(sharedDim / 4) * 4;
            var sharedDimVec4Remainder = sharedDim % 4;
            this.userCode = " float dotARowBCol(int aRow, int bCol) {\n      float result = 0.0;\n      for (int i = 0; i < " + sharedDimNearestVec4 + "; i += 4) {\n        vec4 a = vec4(\n          getMatrixA(" + aSnippetFromOffset(0, 'i') + "),\n          getMatrixA(" + aSnippetFromOffset(1, 'i') + "),\n          getMatrixA(" + aSnippetFromOffset(2, 'i') + "),\n          getMatrixA(" + aSnippetFromOffset(3, 'i') + ")\n        );\n        vec4 b = vec4(\n          getMatrixB(" + bSnippetFromOffset(0, 'i') + "),\n          getMatrixB(" + bSnippetFromOffset(1, 'i') + "),\n          getMatrixB(" + bSnippetFromOffset(2, 'i') + "),\n          getMatrixB(" + bSnippetFromOffset(3, 'i') + ")\n        );\n\n        result += dot(a, b);\n      }\n\n      if (" + (sharedDimVec4Remainder === 1) + ") {\n        result += getMatrixA(" + aSnippetFromOffset(0, sharedDimNearestVec4) + ") *\n          getMatrixB(" + bSnippetFromOffset(0, sharedDimNearestVec4) + ");\n      } else if (" + (sharedDimVec4Remainder === 2) + ") {\n        vec2 a = vec2(\n          getMatrixA(" + aSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixA(" + aSnippetFromOffset(1, sharedDimNearestVec4) + ")\n        );\n        vec2 b = vec2(\n          getMatrixB(" + bSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixB(" + bSnippetFromOffset(1, sharedDimNearestVec4) + ")\n        );\n        result += dot(a, b);\n      } else if (" + (sharedDimVec4Remainder === 3) + ") {\n        vec3 a = vec3(\n          getMatrixA(" + aSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixA(" + aSnippetFromOffset(1, sharedDimNearestVec4) + "),\n          getMatrixA(" + aSnippetFromOffset(2, sharedDimNearestVec4) + ")\n        );\n        vec3 b = vec3(\n          getMatrixB(" + bSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixB(" + bSnippetFromOffset(1, sharedDimNearestVec4) + "),\n          getMatrixB(" + bSnippetFromOffset(2, sharedDimNearestVec4) + ")\n        );\n        result += dot(a, b);\n      }\n\n      return result;\n    }\n\n    void main() {\n      ivec2 resRC = getOutputCoords();\n      setOutput(dotARowBCol(resRC.x, resRC.y));\n    }\n    ";
        }
        return MatMulProgram;
    }());

    var MultinomialProgram = (function () {
        function MultinomialProgram(batchSize, numOutcomes, numSamples) {
            this.variableNames = ['probs'];
            this.outputShape = [batchSize, numSamples];
            this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (numOutcomes - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (numOutcomes - 1) + "));\n      }\n    ";
        }
        MultinomialProgram.prototype.getCustomSetupFunc = function (seed) {
            var _this = this;
            return function (gpgpu, webGLProgram) {
                if (_this.seedLoc == null) {
                    _this.seedLoc = gpgpu.getUniformLocation(webGLProgram, 'seed');
                }
                gpgpu.gl.uniform1f(_this.seedLoc, seed);
            };
        };
        return MultinomialProgram;
    }());

    var OneHotProgram = (function () {
        function OneHotProgram(numIndices, depth, onValue, offValue) {
            this.variableNames = ['indices'];
            this.outputShape = [numIndices, depth];
            this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + offValue + "), float(" + onValue + "),\n                      float(index == coords.y)));\n      }\n    ";
        }
        return OneHotProgram;
    }());

    var PadProgram = (function () {
        function PadProgram(xShape, paddings, constantValue) {
            this.variableNames = ['x'];
            this.outputShape = paddings.map(function (p, i) { return p[0] + xShape[i] + p[1]; });
            var rank = xShape.length;
            var type = getCoordsDataType(rank);
            var start = paddings.map(function (p) { return p[0]; }).join(',');
            var end = paddings.map(function (p, i) { return p[0] + xShape[i]; }).join(',');
            var unpackedCoords = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank);
            if (rank === 1) {
                this.userCode = "\n        int start = " + start + ";\n        int end = " + end + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + constantValue + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";
                return;
            }
            this.userCode = "\n      " + type + " start = " + type + "(" + start + ");\n      " + type + " end = " + type + "(" + end + ");\n\n      void main() {\n        " + type + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + constantValue + "));\n        } else {\n          " + type + " coords = outC - start;\n          setOutput(getX(" + unpackedCoords + "));\n        }\n      }\n    ";
        }
        return PadProgram;
    }());

    var Pool2DProgram = (function () {
        function Pool2DProgram(convInfo, poolType, computePositions) {
            this.variableNames = ['x'];
            if (poolType === 'avg' && computePositions) {
                throw new Error('Cannot compute positions for average pool.');
            }
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var padTop = convInfo.padInfo.top;
            var padLeft = convInfo.padInfo.left;
            this.outputShape = convInfo.outShape;
            var isAvgPool = poolType === 'avg';
            var initializationValue = '0.0';
            if (!isAvgPool) {
                initializationValue = '-1.0 / 0.0';
            }
            if (computePositions) {
                var compareOp_1 = '>=';
                this.userCode = "\n        const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n        const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + filterHeight + "; wR++) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + filterWidth + "; wC++) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value " + compareOp_1 + " currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + filterWidth + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
                return;
            }
            var compareOp = 'max';
            var returnValue = poolType + "(" + poolType + "(" + poolType + "(" +
                'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
            if (poolType === 'avg') {
                returnValue = "avgValue / count";
            }
            var filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
            var filterWidthVec4Remainder = filterWidth % 4;
            var updateSnippet = "\n      if (" + isAvgPool + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = " + compareOp + "(values, minMaxValue);\n      }\n    ";
            this.userCode = "\n      const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n      const float initializationValue = " + initializationValue + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + initializationValue + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + filterWidthNearestVec4 + "; wC += 4) {\n            int xC = xCCorner + wC;\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              getValue(batch, xR, xC + 3, d)\n            );\n\n            " + updateSnippet + "\n          }\n\n          int xC = xCCorner + " + filterWidthNearestVec4 + ";\n          if (" + (filterWidthVec4Remainder === 1) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + updateSnippet + "\n          } else if (" + (filterWidthVec4Remainder === 2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + updateSnippet + "\n          } else if (" + (filterWidthVec4Remainder === 3) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              initializationValue\n            );\n\n            " + updateSnippet + "\n          }\n        }\n        setOutput(" + returnValue + ");\n      }\n    ";
        }
        return Pool2DProgram;
    }());

    var ReduceProgram = (function () {
        function ReduceProgram(reduceInfo, reduceType) {
            this.variableNames = ['x'];
            var windowSize = reduceInfo.windowSize;
            var batchSize = reduceInfo.batchSize;
            var inSize = reduceInfo.inSize;
            var outSize = Math.ceil(inSize / windowSize);
            this.outputShape = [batchSize, outSize];
            var isReduceSum = reduceType === 'sum';
            var initializationValue = '0.0';
            if (!isReduceSum) {
                if (reduceType === 'min') {
                    initializationValue = '1.0 / 0.0';
                }
                else {
                    initializationValue = '-1.0 / 0.0';
                }
            }
            var compareOp = reduceType === 'min' ? 'min' : 'max';
            var returnValue = reduceType + "(" + reduceType + "(" + reduceType + "(" +
                'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
            if (reduceType === 'sum') {
                returnValue = "sumValue";
            }
            var windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
            var windowSizeVec4Remainder = windowSize % 4;
            var updateSnippet = "\n      if (" + isReduceSum + ") {\n        sumValue += dot(values, ones);\n      } else {\n        minMaxValue = " + compareOp + "(values, minMaxValue);\n      }\n    ";
            var checkOutOfBounds = '';
            if (inSize % windowSize > 0) {
                checkOutOfBounds = "\n        if (inIdx < 0 || inIdx >= " + inSize + ") {\n          return initializationValue;\n        }\n      ";
            }
            this.userCode = "\n      const float initializationValue = " + initializationValue + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + checkOutOfBounds + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + windowSize + ";\n\n        vec4 minMaxValue = vec4(" + initializationValue + ");\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + windowSizeNearestVec4 + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + updateSnippet + "\n        }\n\n        int inIdx = inOffset + " + windowSizeNearestVec4 + ";\n        if (" + (windowSizeVec4Remainder === 1) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n          " + updateSnippet + "\n        } else if (" + (windowSizeVec4Remainder === 2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n          " + updateSnippet + "\n        } else if (" + (windowSizeVec4Remainder === 3) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n          " + updateSnippet + "\n        }\n        setOutput(" + returnValue + ");\n      }\n    ";
        }
        return ReduceProgram;
    }());

    var ResizeBilinearBackpropProgram = (function () {
        function ResizeBilinearBackpropProgram(dy, x, alignCorners) {
            this.variableNames = ['dy'];
            this.outputShape = [];
            this.outputShape = x.shape;
            var _a = x.shape, xHeight = _a[1], xWidth = _a[2];
            var _b = dy.shape, yHeight = _b[1], yWidth = _b[2];
            var effectiveXSize = [
                (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
                (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
            ];
            var effectiveYSize = [
                (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
                (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
            ];
            var heightScale = effectiveXSize[0] / effectiveYSize[0];
            var widthScale = effectiveXSize[1] / effectiveYSize[1];
            var invHeightScale = 1 / heightScale;
            var invWidthScale = 1 / widthScale;
            var winHeight = (Math.ceil(invHeightScale) * 2) + 2;
            var winWidth = (Math.ceil(invWidthScale) * 2) + 2;
            this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + heightScale + ");\n        const float widthScale = float(" + widthScale + ");\n\n        const float invHeightScale = float(" + invHeightScale + ");\n        const float invWidthScale = float(" + invWidthScale + ");\n\n        const int winHeight = int(" + winHeight + ");\n        const int winWidth = int(" + winWidth + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + yHeight + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + yWidth + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (xHeight - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (xWidth - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
        }
        return ResizeBilinearBackpropProgram;
    }());

    var ResizeBilinearProgram = (function () {
        function ResizeBilinearProgram(inputShape, newHeight, newWidth, alignCorners) {
            this.variableNames = ['A'];
            this.outputShape = [];
            var batch = inputShape[0], oldHeight = inputShape[1], oldWidth = inputShape[2], depth = inputShape[3];
            this.outputShape = [batch, newHeight, newWidth, depth];
            var effectiveInSize = [
                (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
                (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
            ];
            var effectiveOutSize = [
                (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
                (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
            ];
            this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + effectiveInSize[0] / effectiveOutSize[0] + ",\n          " + effectiveInSize[1] / effectiveOutSize[1] + ");\n      const vec2 inputShapeRC = vec2(" + oldHeight + ".0, " + oldWidth + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";
        }
        return ResizeBilinearProgram;
    }());

    var ResizeNearestNeighborProgram = (function () {
        function ResizeNearestNeighborProgram(inputShape, newHeight, newWidth, alignCorners) {
            this.variableNames = ['A'];
            this.outputShape = [];
            var batch = inputShape[0], oldHeight = inputShape[1], oldWidth = inputShape[2], depth = inputShape[3];
            this.outputShape = [batch, newHeight, newWidth, depth];
            var effectiveInSize = alignCorners ? [oldHeight - 1, oldWidth - 1] : [oldHeight, oldWidth];
            var effectiveOutSize = alignCorners ? [newHeight - 1, newWidth - 1] : [newHeight, newWidth];
            var roundBase = alignCorners ? '0.5' : '0.0';
            this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + effectiveInSize[0] / effectiveOutSize[0] + ",\n          " + effectiveInSize[1] / effectiveOutSize[1] + ");\n      const vec2 inputShapeRC = vec2(" + oldHeight + ".0, " + oldWidth + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + roundBase + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";
        }
        return ResizeNearestNeighborProgram;
    }());

    var ReverseProgram = (function () {
        function ReverseProgram(xShape, axis) {
            this.variableNames = ['x'];
            var rank = xShape.length;
            if (rank > 4) {
                throw new Error("WebGL backend: Reverse of rank-" + rank + " tensor is not yet supported");
            }
            this.outputShape = xShape;
            if (rank === 1) {
                this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + xShape[0] + " - coord - 1));\n        }\n      ";
                return;
            }
            var getInCoord = function (i) {
                if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
                    return xShape[i] + " - coords[" + i + "] - 1";
                }
                return "coords[" + i + "]";
            };
            var inCoords = xShape.map(function (_, i) { return getInCoord(i); }).join(',');
            var type = getCoordsDataType(rank);
            this.userCode = "\n      void main() {\n        " + type + " coords = getOutputCoords();\n        setOutput(getX(" + inCoords + "));\n      }\n    ";
        }
        return ReverseProgram;
    }());

    var SliceProgram = (function () {
        function SliceProgram(destSize) {
            this.variableNames = ['source'];
            this.outputShape = destSize;
            this.rank = destSize.length;
            var dtype = getCoordsDataType(this.rank);
            var sourceCoords = getCoords$1(this.rank);
            this.userCode = "\n      uniform " + dtype + " start;\n\n      void main() {\n        " + dtype + " sourceLoc = start + getOutputCoords();\n        setOutput(getSource(" + sourceCoords + "));\n      }\n    ";
        }
        SliceProgram.prototype.getCustomSetupFunc = function (start) {
            var _this = this;
            if (start.length !== this.rank) {
                throw Error("The rank (" + this.rank + ") of the program must match the " +
                    ("length of start (" + start.length + ")"));
            }
            return function (gpgpu, webGLProgram) {
                if (_this.startLoc == null) {
                    _this.startLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'start');
                    if (_this.startLoc == null) {
                        return;
                    }
                }
                if (_this.rank === 1) {
                    gpgpu.gl.uniform1i(_this.startLoc, start[0]);
                }
                else if (_this.rank === 2) {
                    gpgpu.gl.uniform2i(_this.startLoc, start[0], start[1]);
                }
                else if (_this.rank === 3) {
                    gpgpu.gl.uniform3i(_this.startLoc, start[0], start[1], start[2]);
                }
                else if (_this.rank === 4) {
                    gpgpu.gl.uniform4i(_this.startLoc, start[0], start[1], start[2], start[3]);
                }
                else {
                    throw Error("Slicing for rank " + _this.rank + " is not yet supported");
                }
            };
        };
        return SliceProgram;
    }());
    function getCoords$1(rank) {
        if (rank === 1) {
            return 'sourceLoc';
        }
        else if (rank === 2) {
            return 'sourceLoc.x, sourceLoc.y';
        }
        else if (rank === 3) {
            return 'sourceLoc.x, sourceLoc.y, sourceLoc.z';
        }
        else if (rank === 4) {
            return 'sourceLoc.x, sourceLoc.y, sourceLoc.z, sourceLoc.w';
        }
        else {
            throw Error("Slicing for rank " + rank + " is not yet supported");
        }
    }

    var StridedSliceProgram = (function () {
        function StridedSliceProgram(begin, strides, shape) {
            this.variableNames = ['x'];
            this.outputShape = shape;
            this.rank = shape.length;
            var dtype = getCoordsDataType(this.rank);
            var newCoords = '';
            if (this.rank === 1) {
                newCoords = 'coords * strides + begin';
            }
            else {
                newCoords =
                    shape.map(function (_, i) { return "coords[" + i + "] * strides[" + i + "] + begin[" + i + "]"; })
                        .join(',');
            }
            this.userCode = "\n      " + dtype + " begin = " + dtype + "(" + begin + ");\n      " + dtype + " strides = " + dtype + "(" + strides + ");\n\n      void main() {\n        " + dtype + " coords = getOutputCoords();\n        setOutput(getX(" + newCoords + "));\n      }\n    ";
        }
        return StridedSliceProgram;
    }());

    var TextureManager = (function () {
        function TextureManager(gpgpu) {
            this.gpgpu = gpgpu;
            this.numUsedTextures = 0;
            this.numFreeTextures = 0;
            this.freeTextures = {};
            this.logEnabled = false;
            this.allocatedTextures = [];
            this.usedTextureCount = {};
        }
        TextureManager.prototype.acquireTexture = function (shapeRC, texType) {
            if (texType === void 0) { texType = TextureType.FLOAT; }
            var shapeKey = getKeyFromTextureShape(shapeRC, texType);
            if (!(shapeKey in this.freeTextures)) {
                this.freeTextures[shapeKey] = [];
            }
            if (!(shapeKey in this.usedTextureCount)) {
                this.usedTextureCount[shapeKey] = 0;
            }
            this.usedTextureCount[shapeKey]++;
            if (this.freeTextures[shapeKey].length > 0) {
                this.numFreeTextures--;
                this.numUsedTextures++;
                this.log();
                return this.freeTextures[shapeKey].shift();
            }
            this.numUsedTextures++;
            this.log();
            var newTexture = this.gpgpu.createMatrixTexture(shapeRC[0], shapeRC[1]);
            this.allocatedTextures.push(newTexture);
            return newTexture;
        };
        TextureManager.prototype.releaseTexture = function (texture, shape, texType) {
            if (texType === void 0) { texType = TextureType.FLOAT; }
            var shapeKey = getKeyFromTextureShape(shape, texType);
            if (!(shapeKey in this.freeTextures)) {
                this.freeTextures[shapeKey] = [];
            }
            this.freeTextures[shapeKey].push(texture);
            this.numFreeTextures++;
            this.numUsedTextures--;
            this.usedTextureCount[shapeKey]--;
            this.log();
        };
        TextureManager.prototype.log = function () {
            if (!this.logEnabled) {
                return;
            }
            var total = this.numFreeTextures + this.numUsedTextures;
            console.log('Free/Used', this.numFreeTextures + " / " + this.numUsedTextures, "(" + total + ")");
        };
        TextureManager.prototype.getNumUsedTextures = function () {
            return this.numUsedTextures;
        };
        TextureManager.prototype.getNumFreeTextures = function () {
            return this.numFreeTextures;
        };
        TextureManager.prototype.dispose = function () {
            var _this = this;
            if (this.allocatedTextures == null) {
                return;
            }
            this.allocatedTextures.forEach(function (texture) {
                _this.gpgpu.deleteMatrixTexture(texture);
            });
            this.freeTextures = null;
            this.allocatedTextures = null;
            this.usedTextureCount = null;
            this.numUsedTextures = 0;
            this.numFreeTextures = 0;
        };
        return TextureManager;
    }());
    function getKeyFromTextureShape(shapeRowsCol, texType) {
        return shapeRowsCol[0] + "_" + shapeRowsCol[1] + "_" + texType;
    }

    var TileProgram = (function () {
        function TileProgram(aShape, reps) {
            this.variableNames = ['A'];
            var outputShape = new Array(aShape.length);
            for (var i = 0; i < outputShape.length; i++) {
                outputShape[i] = aShape[i] * reps[i];
            }
            this.outputShape = outputShape;
            this.rank = outputShape.length;
            var dtype = getCoordsDataType(this.rank);
            var sourceCoords = getSourceCoords$1(aShape);
            this.userCode = "\n      void main() {\n        " + dtype + " resRC = getOutputCoords();\n        setOutput(getA(" + sourceCoords + "));\n      }\n    ";
        }
        return TileProgram;
    }());
    function getSourceCoords$1(aShape) {
        var rank = aShape.length;
        if (rank > 4) {
            throw Error("Tile for rank " + rank + " is not yet supported");
        }
        if (rank === 1) {
            return "imod(resRC, " + aShape[0] + ")";
        }
        var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
        var sourceCoords = [];
        for (var i = 0; i < aShape.length; i++) {
            sourceCoords.push("imod(" + currentCoords[i] + ", " + aShape[i] + ")");
        }
        return sourceCoords.join();
    }

    var TransposeProgram = (function () {
        function TransposeProgram(aShape, newDim) {
            this.variableNames = ['A'];
            var outputShape = new Array(aShape.length);
            for (var i = 0; i < outputShape.length; i++) {
                outputShape[i] = aShape[newDim[i]];
            }
            this.outputShape = outputShape;
            this.rank = outputShape.length;
            var dtype = getCoordsDataType(this.rank);
            var switched = getSwitchedCoords(newDim);
            this.userCode = "\n    void main() {\n      " + dtype + " resRC = getOutputCoords();\n      setOutput(getA(" + switched + "));\n    }\n    ";
        }
        return TransposeProgram;
    }());
    function getSwitchedCoords(newDim) {
        var rank = newDim.length;
        if (rank > 4) {
            throw Error("Transpose for rank " + rank + " is not yet supported");
        }
        var originalOrder = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
        var switchedCoords = new Array(rank);
        for (var i = 0; i < newDim.length; i++) {
            switchedCoords[newDim[i]] = originalOrder[i];
        }
        return switchedCoords.join();
    }

    var ERF_P = 0.3275911;
    var ERF_A1 = 0.254829592;
    var ERF_A2 = -0.284496736;
    var ERF_A3 = 1.421413741;
    var ERF_A4 = -1.453152027;
    var ERF_A5 = 1.061405429;

    var UnaryOpProgram = (function () {
        function UnaryOpProgram(aShape, opSnippet) {
            this.variableNames = ['A'];
            this.outputShape = aShape;
            this.userCode = "\n      float unaryOperation(float x) {\n        " + opSnippet + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
        }
        return UnaryOpProgram;
    }());
    var CHECK_NAN_SNIPPET$1 = "if (isNaN(x)) return x;";
    var ABS = "return abs(x);";
    var RELU = CHECK_NAN_SNIPPET$1 + "\n  return (x < 0.0) ? 0.0 : x;\n";
    var ELU = "return (x >= 0.0) ? x : (exp(x) - 1.0);";
    var SELU = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = " + SELU_SCALEALPHA + ";\n  float scale = " + SELU_SCALE + ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";
    function STEP(alpha) {
        if (alpha === void 0) { alpha = 0.0; }
        return CHECK_NAN_SNIPPET$1 + ("\n    return x > 0.0 ? 1.0 : float(" + alpha + ");\n  ");
    }
    var NEG = "return -x;";
    var CEIL = "return ceil(x);";
    var FLOOR = "return floor(x);";
    var SIGN = "\n  if (isNaN(x)) { return 0.0; }\n  return sign(x);\n";
    var ROUND = "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n";
    var EXP = "return exp(x);";
    var EXPM1 = "return exp(x) - 1.0;";
    var LOG = "return log(x);";
    var LOG1P = "return log(1.0 + x);";
    var SQRT = "return sqrt(x);";
    var RSQRT = "return inversesqrt(x);";
    var SIGMOID = "return 1.0 / (1.0 + exp(-1.0 * x));";
    var SOFTPLUS = "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n";
    var SIN = "return sin(x);";
    var COS = "return cos(x);";
    var TAN = "return tan(x);";
    var ASIN = "return asin(x);";
    var ACOS = "return acos(x);";
    var ATAN = CHECK_NAN_SNIPPET$1 + "\n  return atan(x);\n";
    var SINH = "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n";
    var COSH = "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n";
    var TANH = "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n";
    var ASINH = "return log(x + sqrt(x * x + 1.0));";
    var ACOSH = "return log(x + sqrt(x * x - 1.0));";
    var ATANH = "return (log(1.0 + x) - log(1.0 - x)) / 2.0;";
    var ERF = "\n  // Error function is calculated approximately with elementary function.\n  // See \"Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables\", Abramowitz and Stegun.\n  float p = " + ERF_P + ";\n  float a1 = " + ERF_A1 + ";\n  float a2 = " + ERF_A2 + ";\n  float a3 = " + ERF_A3 + ";\n  float a4 = " + ERF_A4 + ";\n  float a5 = " + ERF_A5 + ";\n\n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n";
    var SQUARE = "return x * x;";
    var RECIPROCAL = "return 1.0 / x;";
    var LOGICAL_NOT = "return float(!(x >= 1.0));";
    var TO_INT = "return float(int(x));";

    var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step$$1(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step$$1(generator["throw"](value)); } catch (e) { reject(e); } }
            function step$$1(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step$$1((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$5 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step$$1([n, v]); }; }
        function step$$1(op) {
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
    };
    var MathBackendWebGL = (function () {
        function MathBackendWebGL(gpgpu, delayedStorage) {
            if (delayedStorage === void 0) { delayedStorage = true; }
            this.gpgpu = gpgpu;
            this.delayedStorage = delayedStorage;
            this.texData = new WeakMap();
            this.uploadWaitMs = 0;
            this.downloadWaitMs = 0;
            this.binaryCache = {};
            this.disposed = false;
            if (ENV.get('WEBGL_VERSION') < 1) {
                throw new Error('WebGL is not supported on this device');
            }
            if (typeof document !== 'undefined') {
                this.canvas = document.createElement('canvas');
            }
            if (gpgpu == null) {
                this.gpgpu = new GPGPUContext(createWebGLContext(this.canvas));
                this.gpgpuCreatedLocally = true;
            }
            else {
                this.gpgpuCreatedLocally = false;
            }
            this.textureManager = new TextureManager(this.gpgpu);
        }
        MathBackendWebGL.prototype.register = function (dataId, shape, dtype) {
            if (this.texData.has(dataId)) {
                throw new Error('Data buffer is already registered');
            }
            this.texData.set(dataId, {
                shape: shape,
                dtype: dtype,
                values: null,
                texture: null,
                texShape: null,
                texType: TextureType.FLOAT
            });
        };
        MathBackendWebGL.prototype.fromPixels = function (pixels, numChannels) {
            if (pixels == null) {
                throw new Error('MathBackendWebGL.writePixels(): pixels can not be null');
            }
            var texShape = [pixels.height, pixels.width];
            var outShape = [pixels.height, pixels.width, numChannels];
            if (pixels instanceof HTMLVideoElement) {
                if (this.canvas == null) {
                    throw new Error('Can\'t read pixels from HTMLImageElement outside ' +
                        'the browser.');
                }
                this.canvas.width = pixels.width;
                this.canvas.height = pixels.height;
                this.canvas.getContext('2d').drawImage(pixels, 0, 0, pixels.width, pixels.height);
                pixels = this.canvas;
            }
            var tempPixelArray = Tensor.make(texShape, {}, 'int32');
            this.texData.get(tempPixelArray.dataId).texType = TextureType.UNSIGNED_BYTE;
            this.gpgpu.uploadPixelDataToTexture(this.getTexture(tempPixelArray.dataId), pixels);
            var program = new FromPixelsProgram(outShape);
            var res = this.compileAndRun(program, [tempPixelArray]);
            tempPixelArray.dispose();
            return res;
        };
        MathBackendWebGL.prototype.write = function (dataId, values) {
            if (values == null) {
                throw new Error('MathBackendWebGL.write(): values can not be null');
            }
            this.throwIfNoData(dataId);
            var texData = this.texData.get(dataId);
            var texture = texData.texture, texShape = texData.texShape, texType = texData.texType;
            if (texture != null) {
                this.textureManager.releaseTexture(texture, texShape, texType);
                texData.texture = null;
                texData.texShape = null;
            }
            texData.values = values;
            if (!this.delayedStorage) {
                this.uploadToGPU(dataId);
            }
        };
        MathBackendWebGL.prototype.readSync = function (dataId) {
            this.throwIfNoData(dataId);
            var texData = this.texData.get(dataId);
            var texture = texData.texture, values = texData.values, texShape = texData.texShape;
            if (values != null) {
                this.cacheOnCPU(dataId);
                return values;
            }
            var shouldTimeProgram = this.activeTimers != null;
            var start;
            if (shouldTimeProgram) {
                start = performance.now();
            }
            var float32Values = this.gpgpu.downloadMatrixFromTexture(texture, texShape[0], texShape[1]);
            if (shouldTimeProgram) {
                this.downloadWaitMs += performance.now() - start;
            }
            this.cacheOnCPU(dataId, float32Values);
            return texData.values;
        };
        MathBackendWebGL.prototype.read = function (dataId) {
            return __awaiter$5(this, void 0, void 0, function () {
                var texData, texture, values, texShape, float32Values;
                return __generator$5(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.throwIfNoData(dataId);
                            texData = this.texData.get(dataId);
                            texture = texData.texture, values = texData.values, texShape = texData.texShape;
                            if (values != null) {
                                this.cacheOnCPU(dataId);
                                return [2, values];
                            }
                            if (!ENV.get('WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED')) return [3, 2];
                            return [4, this.gpgpu.downloadMatrixFromTextureAsync(texture, texShape[0], texShape[1])];
                        case 1:
                            float32Values = _a.sent();
                            this.cacheOnCPU(dataId, float32Values);
                            return [2, texData.values];
                        case 2:
                            if (ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 0) {
                                return [2, this.readSync(dataId)];
                            }
                            return [4, this.gpgpu.runQuery(function () { })];
                        case 3:
                            _a.sent();
                            return [2, this.readSync(dataId)];
                    }
                });
            });
        };
        MathBackendWebGL.prototype.time = function (f) {
            return __awaiter$5(this, void 0, void 0, function () {
                var oldActiveTimers, newActiveTimers, outerMostTime, flattenedActiveTimers, kernelMs, res;
                return __generator$5(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            oldActiveTimers = this.activeTimers;
                            newActiveTimers = [];
                            outerMostTime = false;
                            if (this.programTimersStack == null) {
                                this.programTimersStack = newActiveTimers;
                                outerMostTime = true;
                            }
                            else {
                                this.activeTimers.push(newActiveTimers);
                            }
                            this.activeTimers = newActiveTimers;
                            f();
                            flattenedActiveTimers = flatten(this.activeTimers);
                            this.activeTimers = oldActiveTimers;
                            if (outerMostTime) {
                                this.programTimersStack = null;
                            }
                            return [4, Promise.all(flattenedActiveTimers).then(function (results) {
                                    var sum$$1 = 0;
                                    results.forEach(function (result) { return sum$$1 += result; });
                                    return sum$$1;
                                })];
                        case 1:
                            kernelMs = _a.sent();
                            res = {
                                uploadWaitMs: this.uploadWaitMs,
                                downloadWaitMs: this.downloadWaitMs,
                                kernelMs: kernelMs,
                                wallMs: null
                            };
                            this.uploadWaitMs = 0;
                            this.downloadWaitMs = 0;
                            return [2, res];
                    }
                });
            });
        };
        MathBackendWebGL.prototype.memory = function () {
            return { unreliable: false };
        };
        MathBackendWebGL.prototype.startTimer = function () {
            if (ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
                return this.gpgpu.beginQuery();
            }
            return { startMs: performance.now(), endMs: null };
        };
        MathBackendWebGL.prototype.endTimer = function (query) {
            if (ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
                this.gpgpu.endQuery();
                return query;
            }
            query.endMs = performance.now();
            return query;
        };
        MathBackendWebGL.prototype.getQueryTime = function (query) {
            return __awaiter$5(this, void 0, void 0, function () {
                var timerQuery;
                return __generator$5(this, function (_a) {
                    if (ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
                        return [2, this.gpgpu.pollQueryTime(query)];
                    }
                    timerQuery = query;
                    return [2, timerQuery.endMs - timerQuery.startMs];
                });
            });
        };
        MathBackendWebGL.prototype.disposeData = function (dataId) {
            if (this.texData.has(dataId)) {
                var _a = this.texData.get(dataId), texture = _a.texture, texShape = _a.texShape, texType = _a.texType;
                if (texture != null) {
                    this.textureManager.releaseTexture(texture, texShape, texType);
                }
                this.texData.delete(dataId);
            }
        };
        MathBackendWebGL.prototype.getTexture = function (dataId) {
            this.uploadToGPU(dataId);
            return this.texData.get(dataId).texture;
        };
        MathBackendWebGL.prototype.getTextureData = function (dataId) {
            this.uploadToGPU(dataId);
            return this.texData.get(dataId);
        };
        MathBackendWebGL.prototype.getGPGPUContext = function () {
            return this.gpgpu;
        };
        MathBackendWebGL.prototype.getCanvas = function () {
            return this.canvas;
        };
        MathBackendWebGL.prototype.slice = function (x, begin, size) {
            var program = new SliceProgram(size);
            var customSetup = program.getCustomSetupFunc(begin);
            return this.compileAndRun(program, [x], null, customSetup);
        };
        MathBackendWebGL.prototype.stridedSlice = function (x, begin, end, strides, beginMask, endMask) {
            var _a = getStridedSlicedInfo(x.shape, begin, end, strides, beginMask, endMask), beginIndex = _a[0], size = _a[1];
            if (size.some(function (axis) { return axis === 0; })) {
                return tensor([], size);
            }
            var program = new StridedSliceProgram(beginIndex, strides, size);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.reverse = function (x, axis) {
            var program = new ReverseProgram(x.shape, axis);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.concat = function (a, b) {
            var program = new ConcatProgram(a.shape, b.shape);
            return this.compileAndRun(program, [a, b]);
        };
        MathBackendWebGL.prototype.neg = function (x) {
            var program = new UnaryOpProgram(x.shape, NEG);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.matMul = function (a, b, transposeA, transposeB) {
            var program = new MatMulProgram(a.shape, b.shape, transposeA, transposeB);
            return this.compileAndRun(program, [a, b]);
        };
        MathBackendWebGL.prototype.multiply = function (a, b) {
            var program = new BinaryOpProgram(MUL, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, upcastType(a.dtype, b.dtype));
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.batchNormalization = function (x, mean$$1, variance, varianceEpsilon, scale, offset) {
            var inputs = [x, mean$$1, variance];
            var offsetShape = null;
            if (offset != null) {
                offsetShape = offset.shape;
                inputs.push(offset);
            }
            var scaleShape = null;
            if (scale != null) {
                scaleShape = scale.shape;
                inputs.push(scale);
            }
            var program = new BatchNormProgram(x.shape, mean$$1.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon);
            return this.compileAndRun(program, inputs);
        };
        MathBackendWebGL.prototype.localResponseNormalization4D = function (x, radius, bias, alpha, beta) {
            var program = new LRNProgram(x.shape, radius, bias, alpha, beta);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.tile = function (x, reps) {
            var program = new TileProgram(x.shape, reps);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.pad = function (x, paddings, constantValue) {
            var program = new PadProgram(x.shape, paddings, constantValue);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.transpose = function (x, perm) {
            var program = new TransposeProgram(x.shape, perm);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.gather = function (x, indices, axis) {
            var program = new GatherProgram(x.shape, indices.size, axis);
            return this.compileAndRun(program, [x, indices]);
        };
        MathBackendWebGL.prototype.reduce = function (x, reduceType, dtype) {
            var batchSize = x.shape[0];
            var inSize = x.shape[1];
            var windowSize = computeOptimalWindowSize(inSize);
            var reduceInfo = { windowSize: windowSize, inSize: inSize, batchSize: batchSize };
            var program = new ReduceProgram(reduceInfo, reduceType);
            var _a = program.outputShape, rows = _a[0], cols = _a[1];
            var output = this.makeOutputArray([rows, cols], dtype);
            this.compileAndRun(program, [x], output);
            if (output.shape[1] === 1) {
                return output;
            }
            return this.reduce(output, reduceType, dtype);
        };
        MathBackendWebGL.prototype.argReduce = function (x, reduceType, bestIndicesA) {
            if (bestIndicesA === void 0) { bestIndicesA = null; }
            var batchSize = x.shape[0];
            var inSize = x.shape[1];
            if (bestIndicesA != null) {
                batchSize = bestIndicesA.shape[0];
                inSize = bestIndicesA.shape[1];
            }
            var windowSize = computeOptimalWindowSize(inSize);
            var reduceInfo = { windowSize: windowSize, inSize: inSize, batchSize: batchSize };
            var program = new ArgMinMaxProgram(reduceInfo, reduceType, bestIndicesA == null);
            var _a = program.outputShape, rows = _a[0], cols = _a[1];
            var output = this.makeOutputArray([rows, cols], 'int32');
            var inputs = [x];
            if (bestIndicesA != null) {
                inputs.push(bestIndicesA);
            }
            this.compileAndRun(program, inputs, output);
            if (output.shape[1] === 1) {
                return output;
            }
            return this.argReduce(x, reduceType, output);
        };
        MathBackendWebGL.prototype.sum = function (x, axes) {
            assertAxesAreInnerMostDims('sum', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var inSize = sizeFromShape(reduceShape);
            var a2D = x.as2D(-1, inSize);
            var outputDType = sumOutType(x.dtype);
            return this.reduce(a2D, 'sum', outputDType).reshape(outShape);
        };
        MathBackendWebGL.prototype.argMin = function (x, axis) {
            var axes = [axis];
            assertAxesAreInnerMostDims('argMin', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var inSize = sizeFromShape(reduceShape);
            var a2D = x.as2D(-1, inSize);
            return this.argReduce(a2D, 'min').reshape(outShape);
        };
        MathBackendWebGL.prototype.argMax = function (x, axis) {
            var axes = [axis];
            assertAxesAreInnerMostDims('argMax', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var inSize = sizeFromShape(reduceShape);
            var a2D = x.as2D(-1, inSize);
            return this.argReduce(a2D, 'max').reshape(outShape);
        };
        MathBackendWebGL.prototype.cumsum = function (x, axis, exclusive, reverse$$1) {
            var program = new CumSumProgram(x.shape, exclusive, reverse$$1);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.equal = function (a, b) {
            var program = new BinaryOpProgram(EQUAL, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.notEqual = function (a, b) {
            var program = new BinaryOpProgram(NOT_EQUAL, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.less = function (a, b) {
            var program = new BinaryOpProgram(LESS, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.lessEqual = function (a, b) {
            var program = new BinaryOpProgram(LESS_EQUAL, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.greater = function (a, b) {
            var program = new BinaryOpProgram(GREATER, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.greaterEqual = function (a, b) {
            var program = new BinaryOpProgram(GREATER_EQUAL, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.logicalNot = function (x) {
            var program = new UnaryOpProgram(x.shape, LOGICAL_NOT);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.logicalAnd = function (a, b) {
            var program = new BinaryOpProgram(LOGICAL_AND, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.logicalOr = function (a, b) {
            var program = new BinaryOpProgram(LOGICAL_OR, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, 'bool');
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.where = function (condition, a, b, dtype) {
            var program = new WhereProgram(condition.rank, a.shape, a.rank);
            var output = this.makeOutputArray(program.outputShape, dtype);
            return this.compileAndRun(program, [condition, a, b], output);
        };
        MathBackendWebGL.prototype.topKValues = function (x, k) {
            throw new Error('topKValues GPU not yet implemented!');
        };
        MathBackendWebGL.prototype.topKIndices = function (x, k) {
            throw new Error('topKIndices GPU not yet implemented!');
        };
        MathBackendWebGL.prototype.min = function (x, axes) {
            assertAxesAreInnerMostDims('min', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var inSize = sizeFromShape(reduceShape);
            var a2D = x.as2D(-1, inSize);
            return this.reduce(a2D, 'min', a2D.dtype).reshape(outShape);
        };
        MathBackendWebGL.prototype.minimum = function (a, b) {
            var program = new BinaryOpProgram(MIN, a.shape, b.shape);
            return this.compileAndRun(program, [a, b]);
        };
        MathBackendWebGL.prototype.mod = function (a, b) {
            var program = new BinaryOpProgram(MOD, a.shape, b.shape);
            return this.compileAndRun(program, [a, b]);
        };
        MathBackendWebGL.prototype.max = function (x, axes) {
            assertAxesAreInnerMostDims('max', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var inSize = sizeFromShape(reduceShape);
            var a2D = x.as2D(-1, inSize);
            return this.reduce(a2D, 'max', a2D.dtype).reshape(outShape);
        };
        MathBackendWebGL.prototype.maximum = function (a, b) {
            var program = new BinaryOpProgram(MAX, a.shape, b.shape);
            return this.compileAndRun(program, [a, b]);
        };
        MathBackendWebGL.prototype.squaredDifference = function (a, b) {
            var program = new BinaryOpProgram(SQUARED_DIFFERENCE, a.shape, b.shape);
            return this.compileAndRun(program, [a, b]);
        };
        MathBackendWebGL.prototype.divide = function (a, b) {
            var op;
            var outputDtype;
            if (a.dtype === 'int32' && b.dtype === 'int32') {
                op = INT_DIV;
                outputDtype = 'int32';
            }
            else {
                op = DIV;
                outputDtype = 'float32';
            }
            var program = new BinaryOpProgram(op, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, outputDtype);
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.add = function (a, b) {
            var program = new BinaryOpProgram(ADD, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, upcastType(a.dtype, b.dtype));
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.subtract = function (a, b) {
            var program = new BinaryOpProgram(SUB, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, upcastType(a.dtype, b.dtype));
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.pow = function (a, b) {
            var program = new BinaryOpProgram(POW, a.shape, b.shape);
            var output = this.makeOutputArray(program.outputShape, upcastType(a.dtype, b.dtype));
            return this.compileAndRun(program, [a, b], output);
        };
        MathBackendWebGL.prototype.ceil = function (x) {
            var program = new UnaryOpProgram(x.shape, CEIL);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.floor = function (x) {
            var program = new UnaryOpProgram(x.shape, FLOOR);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.sign = function (x) {
            var program = new UnaryOpProgram(x.shape, SIGN);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.round = function (x) {
            var program = new UnaryOpProgram(x.shape, ROUND);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.exp = function (x) {
            var program = new UnaryOpProgram(x.shape, EXP);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.expm1 = function (x) {
            var program = new UnaryOpProgram(x.shape, EXPM1);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.log = function (x) {
            var program = new UnaryOpProgram(x.shape, LOG);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.log1p = function (x) {
            var program = new UnaryOpProgram(x.shape, LOG1P);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.sqrt = function (x) {
            var program = new UnaryOpProgram(x.shape, SQRT);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.rsqrt = function (x) {
            var program = new UnaryOpProgram(x.shape, RSQRT);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.square = function (x) {
            var program = new UnaryOpProgram(x.shape, SQUARE);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.reciprocal = function (x) {
            var program = new UnaryOpProgram(x.shape, RECIPROCAL);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.relu = function (x) {
            var program = new UnaryOpProgram(x.shape, RELU);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.elu = function (x) {
            var program = new UnaryOpProgram(x.shape, ELU);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.eluDer = function (dy, y) {
            var program = new BinaryOpProgram(ELU_DER, dy.shape, y.shape);
            return this.compileAndRun(program, [dy, y]);
        };
        MathBackendWebGL.prototype.selu = function (x) {
            var program = new UnaryOpProgram(x.shape, SELU);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.int = function (x) {
            var program = new UnaryOpProgram(x.shape, TO_INT);
            var output = this.makeOutputArray(program.outputShape, 'int32');
            return this.compileAndRun(program, [x], output);
        };
        MathBackendWebGL.prototype.clip = function (x, min$$1, max$$1) {
            var program = new ClipProgram(x.shape, min$$1, max$$1);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.abs = function (x) {
            var program = new UnaryOpProgram(x.shape, ABS);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.sigmoid = function (x) {
            var program = new UnaryOpProgram(x.shape, SIGMOID);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.softplus = function (x) {
            var program = new UnaryOpProgram(x.shape, SOFTPLUS);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.sin = function (x) {
            var program = new UnaryOpProgram(x.shape, SIN);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.cos = function (x) {
            var program = new UnaryOpProgram(x.shape, COS);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.tan = function (x) {
            var program = new UnaryOpProgram(x.shape, TAN);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.asin = function (x) {
            var program = new UnaryOpProgram(x.shape, ASIN);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.acos = function (x) {
            var program = new UnaryOpProgram(x.shape, ACOS);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.atan = function (x) {
            var program = new UnaryOpProgram(x.shape, ATAN);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.atan2 = function (a, b) {
            var program = new BinaryOpProgram(ATAN2, a.shape, b.shape);
            return this.compileAndRun(program, [a, b]);
        };
        MathBackendWebGL.prototype.sinh = function (x) {
            var program = new UnaryOpProgram(x.shape, SINH);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.cosh = function (x) {
            var program = new UnaryOpProgram(x.shape, COSH);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.tanh = function (x) {
            var program = new UnaryOpProgram(x.shape, TANH);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.asinh = function (x) {
            var program = new UnaryOpProgram(x.shape, ASINH);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.acosh = function (x) {
            var program = new UnaryOpProgram(x.shape, ACOSH);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.atanh = function (x) {
            var program = new UnaryOpProgram(x.shape, ATANH);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.erf = function (x) {
            var program = new UnaryOpProgram(x.shape, ERF);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.step = function (x, alpha) {
            var program = new UnaryOpProgram(x.shape, STEP(alpha));
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.conv2d = function (x, filter, convInfo) {
            var program = new Conv2DProgram(convInfo);
            return this.compileAndRun(program, [x, filter]);
        };
        MathBackendWebGL.prototype.conv2dDerInput = function (dy, filter, convInfo) {
            var program = new Conv2DDerInputProgram(convInfo);
            return this.compileAndRun(program, [dy, filter]);
        };
        MathBackendWebGL.prototype.conv2dDerFilter = function (x, dy, convInfo) {
            var program = new Conv2DDerFilterProgram(convInfo);
            return this.compileAndRun(program, [x, dy]);
        };
        MathBackendWebGL.prototype.depthwiseConv2D = function (x, filter, convInfo) {
            var program = new DepthwiseConv2DProgram(convInfo);
            return this.compileAndRun(program, [x, filter]);
        };
        MathBackendWebGL.prototype.maxPool = function (x, convInfo) {
            var program = new Pool2DProgram(convInfo, 'max', false);
            var output = this.makeOutputArray(program.outputShape, x.dtype);
            return this.compileAndRun(program, [x], output);
        };
        MathBackendWebGL.prototype.avgPool = function (x, convInfo) {
            var program = new Pool2DProgram(convInfo, 'avg', false);
            var output = this.makeOutputArray(program.outputShape, 'float32');
            return this.compileAndRun(program, [x], output);
        };
        MathBackendWebGL.prototype.maxPoolBackprop = function (dy, x, y, convInfo) {
            var getPositions = true;
            var maxPoolPositionsProgram = new Pool2DProgram(convInfo, 'max', getPositions);
            var maxPoolPositions = this.compileAndRun(maxPoolPositionsProgram, [x]);
            var maxPoolBackPropProgram = new MaxPool2DBackpropProgram(convInfo);
            var output = this.makeOutputArray(maxPoolBackPropProgram.outputShape, x.dtype);
            var result = this.compileAndRun(maxPoolBackPropProgram, [dy, maxPoolPositions], output);
            maxPoolPositions.dispose();
            return result;
        };
        MathBackendWebGL.prototype.avgPoolBackprop = function (dy, x, convInfo) {
            var avgPoolBackpropProgram = new AvgPool2DBackpropProgram(convInfo);
            var output = this.makeOutputArray(avgPoolBackpropProgram.outputShape, x.dtype);
            return this.compileAndRun(avgPoolBackpropProgram, [dy], output);
        };
        MathBackendWebGL.prototype.cast = function (x, dtype) {
            return castTensor(x, dtype, this);
        };
        MathBackendWebGL.prototype.reshape = function (x, shape) {
            return reshapeTensor(x, shape);
        };
        MathBackendWebGL.prototype.resizeBilinear = function (x, newHeight, newWidth, alignCorners) {
            var program = new ResizeBilinearProgram(x.shape, newHeight, newWidth, alignCorners);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.resizeBilinearBackprop = function (dy, x, alignCorners) {
            var program = new ResizeBilinearBackpropProgram(dy, x, alignCorners);
            return this.compileAndRun(program, [dy]);
        };
        MathBackendWebGL.prototype.resizeNearestNeighbor = function (x, newHeight, newWidth, alignCorners) {
            var program = new ResizeNearestNeighborProgram(x.shape, newHeight, newWidth, alignCorners);
            return this.compileAndRun(program, [x]);
        };
        MathBackendWebGL.prototype.multinomial = function (logits, normalized, numSamples, seed) {
            var probs = normalized ? logits : softmax(logits);
            var batchSize = probs.shape[0];
            var numOutcomes = probs.shape[1];
            var program = new MultinomialProgram(batchSize, numOutcomes, numSamples);
            var output = this.makeOutputArray(program.outputShape, 'int32');
            var customSetup = program.getCustomSetupFunc(seed);
            return this.compileAndRun(program, [probs], output, customSetup);
        };
        MathBackendWebGL.prototype.oneHot = function (indices, depth, onValue, offValue) {
            var program = new OneHotProgram(indices.size, depth, onValue, offValue);
            return this.compileAndRun(program, [indices]);
        };
        MathBackendWebGL.prototype.makeOutputArray = function (shape, dtype) {
            return Tensor.make(shape, {}, dtype);
        };
        MathBackendWebGL.prototype.compileAndRun = function (program, inputs, output, customSetup) {
            var _this = this;
            if (output == null) {
                output = this.makeOutputArray(program.outputShape, inputs[0].dtype);
            }
            var inputsData = inputs.map(function (input) {
                _this.uploadToGPU(input.dataId);
                return { tensor: input, texData: _this.texData.get(input.dataId) };
            });
            this.uploadToGPU(output.dataId);
            var outputData = {
                tensor: output,
                texData: this.texData.get(output.dataId)
            };
            var key = makeShaderKey(program, inputsData, outputData);
            var binary = this.getAndSaveBinary(key, function () {
                return compileProgram(_this.gpgpu, program, inputsData, outputData);
            });
            var shouldTimeProgram = this.activeTimers != null;
            var query;
            if (shouldTimeProgram) {
                query = this.startTimer();
            }
            runProgram(binary, inputsData, outputData, customSetup);
            if (shouldTimeProgram) {
                query = this.endTimer(query);
                this.activeTimers.push(this.getQueryTime(query));
            }
            return output;
        };
        MathBackendWebGL.prototype.getAndSaveBinary = function (key, getBinary) {
            if (!(key in this.binaryCache)) {
                this.binaryCache[key] = getBinary();
            }
            return this.binaryCache[key];
        };
        MathBackendWebGL.prototype.getTextureManager = function () {
            return this.textureManager;
        };
        MathBackendWebGL.prototype.dispose = function () {
            if (this.disposed) {
                return;
            }
            for (var key in this.binaryCache) {
                this.gpgpu.deleteProgram(this.binaryCache[key].webGLProgram);
            }
            this.textureManager.dispose();
            this.canvas.remove();
            if (this.gpgpuCreatedLocally) {
                this.gpgpu.dispose();
            }
            this.disposed = true;
        };
        MathBackendWebGL.prototype.throwIfNoData = function (dataId) {
            if (!this.texData.has(dataId)) {
                throw new Error("WebGL backend: No data found for this tensor. " +
                    "Did you change your backend in the middle of the program? " +
                    "New backends can't use Tensors created with previous backends");
            }
        };
        MathBackendWebGL.prototype.uploadToGPU = function (dataId) {
            this.throwIfNoData(dataId);
            var texData = this.texData.get(dataId);
            var shape = texData.shape, values = texData.values, texture = texData.texture, dtype = texData.dtype, texType = texData.texType;
            if (texture != null) {
                return;
            }
            var shouldTimeProgram = this.activeTimers != null;
            var start;
            if (shouldTimeProgram) {
                start = performance.now();
            }
            var texShape = getTextureShapeFromLogicalShape(this.gpgpu.gl, shape);
            texData.texShape = texShape;
            var newTexture = this.textureManager.acquireTexture(texShape, texType);
            texData.texture = newTexture;
            if (values != null) {
                this.gpgpu.uploadMatrixToTexture(newTexture, texShape[0], texShape[1], typedArrayToFloat32(values, dtype));
                texData.values = null;
                if (shouldTimeProgram) {
                    this.uploadWaitMs += performance.now() - start;
                }
            }
        };
        MathBackendWebGL.prototype.cacheOnCPU = function (dataId, float32Values) {
            var dontKeepCopyOnGPU = this.delayedStorage;
            var texData = this.texData.get(dataId);
            var texture = texData.texture, texShape = texData.texShape, dtype = texData.dtype, texType = texData.texType;
            if (dontKeepCopyOnGPU && texture != null) {
                this.textureManager.releaseTexture(texture, texShape, texType);
                texData.texture = null;
                texData.texShape = null;
            }
            if (float32Values != null) {
                texData.values = float32ToTypedArray(float32Values, dtype);
            }
        };
        return MathBackendWebGL;
    }());
    ENV.registerBackend('webgl', function () { return new MathBackendWebGL(); }, 2);
    function float32ToTypedArray(a, dtype) {
        if (dtype === 'float32') {
            return a;
        }
        else if (dtype === 'int32' || dtype === 'bool') {
            var result = (dtype === 'int32') ? new Int32Array(a.length) :
                new Uint8Array(a.length);
            for (var i = 0; i < result.length; ++i) {
                result[i] = Math.round(a[i]);
            }
            return result;
        }
        else {
            throw new Error("Unknown dtype " + dtype);
        }
    }
    function typedArrayToFloat32(a, dtype) {
        return (a instanceof Float32Array) ? a : new Float32Array(a);
    }

    var __awaiter$6 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step$$1(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step$$1(generator["throw"](value)); } catch (e) { reject(e); } }
            function step$$1(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step$$1((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$6 = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step$$1([n, v]); }; }
        function step$$1(op) {
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
    };
    var MathBackendCPU = (function () {
        function MathBackendCPU() {
            this.data = new WeakMap();
            if (typeof document !== 'undefined') {
                this.canvas = document.createElement('canvas');
            }
        }
        MathBackendCPU.prototype.register = function (dataId, shape, dtype) {
            if (this.data.has(dataId)) {
                throw new Error("Data buffer is already registered");
            }
            this.data.set(dataId, null);
        };
        MathBackendCPU.prototype.write = function (dataId, values) {
            if (values == null) {
                throw new Error('MathBackendCPU.write(): values can not be null');
            }
            this.throwIfNoData(dataId);
            this.data.set(dataId, values);
        };
        MathBackendCPU.prototype.fromPixels = function (pixels, numChannels) {
            if (pixels == null) {
                throw new Error('MathBackendCPU.writePixels(): pixels can not be null');
            }
            var vals;
            if (pixels instanceof ImageData) {
                vals = pixels.data;
            }
            else if (pixels instanceof HTMLCanvasElement) {
                vals = pixels.getContext('2d')
                    .getImageData(0, 0, pixels.width, pixels.height)
                    .data;
            }
            else if (pixels instanceof HTMLImageElement ||
                pixels instanceof HTMLVideoElement) {
                if (this.canvas == null) {
                    throw new Error('Can\'t read pixels from HTMLImageElement outside ' +
                        'the browser.');
                }
                this.canvas.width = pixels.width;
                this.canvas.height = pixels.height;
                this.canvas.getContext('2d').drawImage(pixels, 0, 0, pixels.width, pixels.height);
                vals = this.canvas.getContext('2d')
                    .getImageData(0, 0, pixels.width, pixels.height)
                    .data;
            }
            else {
                throw new Error("pixels is of unknown type: " + pixels.constructor.name);
            }
            var values;
            if (numChannels === 4) {
                values = new Int32Array(vals);
            }
            else {
                var numPixels = pixels.width * pixels.height;
                values = new Int32Array(numPixels * numChannels);
                for (var i = 0; i < numPixels; i++) {
                    for (var channel = 0; channel < numChannels; ++channel) {
                        values[i * numChannels + channel] = vals[i * 4 + channel];
                    }
                }
            }
            var outShape = [pixels.height, pixels.width, numChannels];
            return tensor3d(values, outShape, 'int32');
        };
        MathBackendCPU.prototype.read = function (dataId) {
            return __awaiter$6(this, void 0, void 0, function () {
                return __generator$6(this, function (_a) {
                    return [2, this.readSync(dataId)];
                });
            });
        };
        MathBackendCPU.prototype.readSync = function (dataId) {
            this.throwIfNoData(dataId);
            return this.data.get(dataId);
        };
        MathBackendCPU.prototype.disposeData = function (dataId) {
            if (this.data.has(dataId)) {
                this.data.delete(dataId);
            }
        };
        MathBackendCPU.prototype.time = function (f) {
            return __awaiter$6(this, void 0, void 0, function () {
                var start, kernelMs;
                return __generator$6(this, function (_a) {
                    start = performance.now();
                    f();
                    kernelMs = performance.now() - start;
                    return [2, { kernelMs: kernelMs }];
                });
            });
        };
        MathBackendCPU.prototype.memory = function () {
            return {
                unreliable: true
            };
        };
        MathBackendCPU.prototype.throwIfNoData = function (dataId) {
            if (!this.data.has(dataId)) {
                throw new Error("CPU backend: No data found for this tensor. " +
                    "Did you change your backend in the middle of the program? " +
                    "New backends can't use Tensors created with previous backends");
            }
        };
        MathBackendCPU.prototype.slice = function (x, begin, size) {
            var buffer$$1 = buffer(size, x.dtype);
            for (var i = 0; i < buffer$$1.size; ++i) {
                var loc = buffer$$1.indexToLoc(i);
                var xLoc = loc.map(function (idx, j) { return idx + begin[j]; });
                buffer$$1.set.apply(buffer$$1, [x.get.apply(x, xLoc)].concat(loc));
            }
            return buffer$$1.toTensor();
        };
        MathBackendCPU.prototype.stridedSlice = function (x, begin, end, strides, beginMask, endMask) {
            var _a = getStridedSlicedInfo(x.shape, begin, end, strides, beginMask, endMask), beginIndex = _a[0], size = _a[1];
            if (size.some(function (axis) { return axis === 0; })) {
                return tensor([], size);
            }
            var buffer$$1 = buffer(size, x.dtype);
            for (var i = 0; i < buffer$$1.size; i++) {
                var loc = buffer$$1.indexToLoc(i);
                var newLoc = new Array(loc.length);
                for (var j = 0; j < newLoc.length; j++) {
                    newLoc[j] = loc[j] * strides[j] + beginIndex[j];
                }
                buffer$$1.set.apply(buffer$$1, [x.get.apply(x, newLoc)].concat(loc));
            }
            return buffer$$1.toTensor();
        };
        MathBackendCPU.prototype.reverse = function (x, axis) {
            var buffer$$1 = buffer(x.shape, x.dtype);
            var xBuffer = x.buffer();
            var _loop_1 = function (i) {
                var outLoc = buffer$$1.indexToLoc(i);
                var inLoc = outLoc.slice();
                axis.forEach(function (ax) { return inLoc[ax] = x.shape[ax] - 1 - inLoc[ax]; });
                buffer$$1.set.apply(buffer$$1, [xBuffer.get.apply(xBuffer, inLoc)].concat(outLoc));
            };
            for (var i = 0; i < buffer$$1.size; i++) {
                _loop_1(i);
            }
            return buffer$$1.toTensor();
        };
        MathBackendCPU.prototype.concat = function (a, b) {
            var outShape = computeOutShape(a.shape, b.shape, 1);
            var buffer$$1 = buffer(outShape, a.dtype);
            if (a.shape[0] === 1 && b.shape[0] === 1) {
                var aVals = a.dataSync();
                var bVals = b.dataSync();
                var vals = buffer$$1.values;
                vals.set(aVals, 0);
                vals.set(bVals, a.size);
                return buffer$$1.toTensor();
            }
            for (var i = 0; i < outShape[0]; ++i) {
                for (var j = 0; j < a.shape[1]; ++j) {
                    buffer$$1.set(a.get(i, j), i, j);
                }
                for (var j = 0; j < b.shape[1]; ++j) {
                    buffer$$1.set(b.get(i, j), i, j + a.shape[1]);
                }
            }
            return buffer$$1.toTensor();
        };
        MathBackendCPU.prototype.neg = function (x) {
            return this.multiply(scalar(-1), x);
        };
        MathBackendCPU.prototype.add = function (a, b) {
            return this.broadcastedBinaryOp(a, b, upcastType(a.dtype, b.dtype), function (aValue, bValue) { return aValue + bValue; });
        };
        MathBackendCPU.prototype.subtract = function (a, b) {
            return this.broadcastedBinaryOp(a, b, upcastType(a.dtype, b.dtype), function (aValue, bValue) { return aValue - bValue; });
        };
        MathBackendCPU.prototype.pow = function (a, b) {
            return this.broadcastedBinaryOp(a, b, a.dtype, function (aValue, bValue) { return Math.pow(aValue, bValue); });
        };
        MathBackendCPU.prototype.matMul = function (a, b, transposeA, transposeB) {
            var sharedDim = transposeA ? a.shape[0] : a.shape[1];
            var leftDim = transposeA ? a.shape[1] : a.shape[0];
            var rightDim = transposeB ? b.shape[0] : b.shape[1];
            var aValues = a.dataSync();
            var bValues = b.dataSync();
            var _a = transposeA ? [1, a.strides[0]] : [a.strides[0], 1], aOuterStep = _a[0], aInnerStep = _a[1];
            var _b = transposeB ? [b.strides[0], 1] : [1, b.strides[0]], bOuterStep = _b[0], bInnerStep = _b[1];
            var aOuterEnd = leftDim * aOuterStep;
            var bOuterEnd = rightDim * bOuterStep;
            var result = new Float32Array(leftDim * rightDim);
            var resultIndex = 0;
            for (var aOuter = 0; aOuter < aOuterEnd; aOuter += aOuterStep) {
                for (var bOuter = 0; bOuter < bOuterEnd; bOuter += bOuterStep) {
                    var aInner = aOuter;
                    var bInner = bOuter;
                    var sum$$1 = 0;
                    for (var k = 0; k < sharedDim; ++k) {
                        sum$$1 += aValues[aInner] * bValues[bInner];
                        aInner += aInnerStep;
                        bInner += bInnerStep;
                    }
                    result[resultIndex++] = sum$$1;
                }
            }
            return tensor2d(result, [leftDim, rightDim]);
        };
        MathBackendCPU.prototype.multiply = function (a, b) {
            return this.broadcastedBinaryOp(a, b, upcastType(a.dtype, b.dtype), function (aValue, bValue) { return aValue * bValue; });
        };
        MathBackendCPU.prototype.divide = function (a, b) {
            var op;
            var outputDtype;
            if (a.dtype === 'int32' && b.dtype === 'int32') {
                outputDtype = 'int32';
                op = function (a, b) { return Math.floor(a / b); };
            }
            else {
                outputDtype = 'float32';
                op = function (a, b) { return a / b; };
            }
            return this.broadcastedBinaryOp(a, b, outputDtype, op);
        };
        MathBackendCPU.prototype.sum = function (x, axes) {
            assertAxesAreInnerMostDims('sum', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var resultDtype = upcastType(x.dtype, 'int32');
            var result = zeros(outShape, resultDtype);
            var reduceSize = sizeFromShape(reduceShape);
            var vals = result.dataSync();
            var aVals = x.dataSync();
            for (var i = 0; i < vals.length; ++i) {
                var offset = i * reduceSize;
                var sum$$1 = 0;
                for (var j = 0; j < reduceSize; ++j) {
                    sum$$1 += aVals[offset + j];
                }
                vals[i] = sum$$1;
            }
            return result;
        };
        MathBackendCPU.prototype.argMin = function (x, axis) {
            var axes = [axis];
            assertAxesAreInnerMostDims('argMin', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var result = zeros(outShape, 'int32');
            var reduceSize = sizeFromShape(reduceShape);
            var vals = result.dataSync();
            var aVals = x.dataSync();
            for (var i = 0; i < vals.length; ++i) {
                var offset = i * reduceSize;
                var min$$1 = aVals[offset];
                var minIndex = 0;
                for (var j = 0; j < reduceSize; ++j) {
                    var value = aVals[offset + j];
                    if (value < min$$1) {
                        min$$1 = value;
                        minIndex = j;
                    }
                }
                vals[i] = minIndex;
            }
            return result;
        };
        MathBackendCPU.prototype.argMax = function (x, axis) {
            var axes = [axis];
            assertAxesAreInnerMostDims('argMax', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var result = zeros(outShape, 'int32');
            var reduceSize = sizeFromShape(reduceShape);
            var vals = result.dataSync();
            var aVals = x.dataSync();
            for (var i = 0; i < vals.length; ++i) {
                var offset = i * reduceSize;
                var max$$1 = aVals[offset];
                var maxIndex = 0;
                for (var j = 0; j < reduceSize; ++j) {
                    var value = aVals[offset + j];
                    if (value > max$$1) {
                        max$$1 = value;
                        maxIndex = j;
                    }
                }
                vals[i] = maxIndex;
            }
            return result;
        };
        MathBackendCPU.prototype.cumsum = function (x, axis, exclusive, reverse$$1) {
            var resultDtype = upcastType(x.dtype, 'int32');
            var result = zeros(x.shape, resultDtype);
            var vals = result.dataSync();
            var aVals = x.dataSync();
            var finalDim = x.shape[x.rank - 1];
            var indexAdjuster = reverse$$1 ?
                function (i, j) { return i + finalDim - j - 1; } :
                function (i, j) { return i + j; };
            for (var i = 0; i < aVals.length; i += finalDim) {
                for (var j = 0; j < finalDim; j++) {
                    var idx = indexAdjuster(i, j);
                    if (j === 0) {
                        vals[idx] = exclusive ? 0 : aVals[idx];
                    }
                    else {
                        var prevIdx = indexAdjuster(i, j - 1);
                        vals[idx] = exclusive ? aVals[prevIdx] + vals[prevIdx] :
                            aVals[idx] + vals[prevIdx];
                    }
                }
            }
            return result;
        };
        MathBackendCPU.prototype.equal = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return (aVal === bVal) ? 1 : 0;
            });
        };
        MathBackendCPU.prototype.notEqual = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return (aVal !== bVal) ? 1 : 0;
            });
        };
        MathBackendCPU.prototype.less = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return (aVal < bVal) ? 1 : 0;
            });
        };
        MathBackendCPU.prototype.lessEqual = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return (aVal <= bVal) ? 1 : 0;
            });
        };
        MathBackendCPU.prototype.greater = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return (aVal > bVal) ? 1 : 0;
            });
        };
        MathBackendCPU.prototype.greaterEqual = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return (aVal >= bVal) ? 1 : 0;
            });
        };
        MathBackendCPU.prototype.logicalNot = function (x) {
            var values = x.dataSync();
            var newValues = new Int32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                newValues[i] = values[i] ? 0 : 1;
            }
            return Tensor.make(x.shape, { values: newValues }, 'bool');
        };
        MathBackendCPU.prototype.logicalAnd = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return aVal && bVal;
            });
        };
        MathBackendCPU.prototype.logicalOr = function (a, b) {
            return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
                return aVal || bVal;
            });
        };
        MathBackendCPU.prototype.where = function (condition, a, b, dtype) {
            var values = condition.dataSync();
            var aValues = a.dataSync();
            var bValues = b.dataSync();
            var result = zeros(a.shape, dtype);
            var newValues = result.dataSync();
            var index = 0;
            var offset = condition.rank === 0 || condition.rank > 1 || a.rank === 1 ?
                1 :
                a.shape[1];
            for (var i = 0; i < values.length; i++) {
                for (var j = 0; j < offset; j++) {
                    if (values[i] === 1) {
                        newValues[index++] = aValues[i];
                    }
                    else {
                        newValues[index++] = bValues[i];
                    }
                }
            }
            return result;
        };
        MathBackendCPU.prototype.topKValues = function (x, k) {
            return this.topK(x, k).values;
        };
        MathBackendCPU.prototype.topKIndices = function (x, k) {
            return this.topK(x, k).indices;
        };
        MathBackendCPU.prototype.topK = function (x, k) {
            var values = x.dataSync();
            var valuesAndIndices = [];
            for (var i = 0; i < values.length; i++) {
                valuesAndIndices.push({ value: values[i], index: i });
            }
            valuesAndIndices.sort(function (a, b) {
                return b.value - a.value;
            });
            var topkValues = getTypedArrayFromDType(x.dtype, k);
            var topkIndices = new Int32Array(k);
            for (var i = 0; i < k; i++) {
                topkValues[i] = valuesAndIndices[i].value;
                topkIndices[i] = valuesAndIndices[i].index;
            }
            return {
                values: tensor1d(topkValues, x.dtype),
                indices: tensor1d(topkIndices, 'int32')
            };
        };
        MathBackendCPU.prototype.min = function (x, axes) {
            assertAxesAreInnerMostDims('min', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var result = zeros(outShape, x.dtype);
            var reduceSize = sizeFromShape(reduceShape);
            var vals = result.dataSync();
            var aVals = x.dataSync();
            for (var i = 0; i < vals.length; ++i) {
                var offset = i * reduceSize;
                var min$$1 = aVals[0];
                for (var j = 0; j < reduceSize; ++j) {
                    var value = aVals[offset + j];
                    if (value < min$$1) {
                        min$$1 = value;
                    }
                }
                vals[i] = min$$1;
            }
            return result;
        };
        MathBackendCPU.prototype.minimum = function (a, b) {
            return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) { return Math.min(aVal, bVal); });
        };
        MathBackendCPU.prototype.mod = function (a, b) {
            return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) {
                var rem = aVal % bVal;
                if ((aVal < 0 && bVal < 0) || (aVal >= 0 && bVal >= 0)) {
                    return rem;
                }
                else {
                    return (rem + bVal) % bVal;
                }
            });
        };
        MathBackendCPU.prototype.max = function (x, axes) {
            assertAxesAreInnerMostDims('max', axes, x.rank);
            var _a = computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
            var result = zeros(outShape, x.dtype);
            var reduceSize = sizeFromShape(reduceShape);
            var vals = result.dataSync();
            var aVals = x.dataSync();
            for (var i = 0; i < vals.length; ++i) {
                var offset = i * reduceSize;
                var max$$1 = aVals[offset];
                for (var j = 0; j < reduceSize; ++j) {
                    var value = aVals[offset + j];
                    if (value > max$$1) {
                        max$$1 = value;
                    }
                }
                vals[i] = max$$1;
            }
            return result;
        };
        MathBackendCPU.prototype.maximum = function (a, b) {
            return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) { return Math.max(aVal, bVal); });
        };
        MathBackendCPU.prototype.squaredDifference = function (a, b) {
            return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) {
                var diff = aVal - bVal;
                return diff * diff;
            });
        };
        MathBackendCPU.prototype.ceil = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                newValues[i] = Math.ceil(values[i]);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.floor = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                newValues[i] = Math.floor(values[i]);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.sign = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                if (values[i] < 0) {
                    newValues[i] = -1;
                }
                else if (values[i] > 0) {
                    newValues[i] = 1;
                }
                else {
                    newValues[i] = 0;
                }
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.round = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                var base = Math.floor(values[i]);
                if (values[i] - base < 0.5) {
                    newValues[i] = Math.floor(values[i]);
                }
                else if (values[i] - base > 0.5) {
                    newValues[i] = Math.ceil(values[i]);
                }
                else {
                    if (base % 2.0 === 0.0) {
                        newValues[i] = base;
                    }
                    else {
                        newValues[i] = base + 1.0;
                    }
                }
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.exp = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                newValues[i] = Math.exp(values[i]);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.expm1 = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                newValues[i] = Math.expm1(values[i]);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.log = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];
                newValues[i] = Math.log(value);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.log1p = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];
                newValues[i] = Math.log1p(value);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.sqrt = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];
                newValues[i] = Math.sqrt(value);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.rsqrt = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];
                newValues[i] = 1 / Math.sqrt(value);
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.square = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];
                newValues[i] = value * value;
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.reciprocal = function (x) {
            var values = x.dataSync();
            var newValues = new Float32Array(values.length);
            for (var i = 0; i < values.length; ++i) {
                newValues[i] = 1 / values[i];
            }
            return Tensor.make(x.shape, { values: newValues });
        };
        MathBackendCPU.prototype.relu = function (x) {
            var res = zeros(x.shape, x.dtype);
            var resVals = res.dataSync();
            var inVals = x.dataSync();
            for (var i = 0; i < inVals.length; ++i) {
                resVals[i] = Math.max(0, inVals[i]);
            }
            return res;
        };
        MathBackendCPU.prototype.elu = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                var v = values[i];
                if (v >= 0) {
                    resultValues[i] = v;
                }
                else {
                    resultValues[i] = (Math.exp(v) - 1);
                }
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.eluDer = function (dy, y) {
            var resultValues = new Float32Array(y.size);
            var values = y.dataSync();
            var dyValues = dy.dataSync();
            for (var i = 0; i < values.length; ++i) {
                var v = values[i];
                if (v >= 1) {
                    resultValues[i] = dyValues[i];
                }
                else {
                    resultValues[i] = dyValues[i] * (v + 1);
                }
            }
            return Tensor.make(y.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.selu = function (x) {
            var scaleAlpha = SELU_SCALEALPHA;
            var scale = SELU_SCALE;
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                var v = values[i];
                if (v >= 0) {
                    resultValues[i] = scale * v;
                }
                else {
                    resultValues[i] = scaleAlpha * (Math.exp(v) - 1);
                }
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.clip = function (x, min$$1, max$$1) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.min(max$$1, Math.max(min$$1, values[i]));
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.abs = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.abs(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.int = function (x) {
            var resultValues = new Int32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = values[i];
            }
            return Tensor.make(x.shape, { values: resultValues }, 'int32');
        };
        MathBackendCPU.prototype.sigmoid = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = 1 / (1 + Math.exp(-values[i]));
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.softplus = function (x) {
            var epsilon = 1.1920928955078125e-7;
            var threshold = Math.log(epsilon) + 2.0;
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                var tooLarge = values[i] > -threshold;
                var tooSmall = values[i] < threshold;
                var expX = Math.exp(values[i]);
                var result = void 0;
                if (tooSmall) {
                    result = expX;
                }
                else if (tooLarge) {
                    result = values[i];
                }
                else {
                    result = Math.log(1.0 + expX);
                }
                resultValues[i] = result;
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.sin = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.sin(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.cos = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.cos(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.tan = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.tan(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.asin = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.asin(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.acos = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.acos(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.atan = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.atan(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.atan2 = function (a, b) {
            return this.broadcastedBinaryOp(a, b, a.dtype, function (aValue, bValue) { return Math.atan2(aValue, bValue); });
        };
        MathBackendCPU.prototype.sinh = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.sinh(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.cosh = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.cosh(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.tanh = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = tanh(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.asinh = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.asinh(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.acosh = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.acosh(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.atanh = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                resultValues[i] = Math.atanh(values[i]);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.erf = function (x) {
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            var p = ERF_P;
            var a1 = ERF_A1;
            var a2 = ERF_A2;
            var a3 = ERF_A3;
            var a4 = ERF_A4;
            var a5 = ERF_A5;
            for (var i = 0; i < values.length; ++i) {
                var v = values[i];
                var t = 1.0 / (1.0 + p * v);
                resultValues[i] = 1.0 -
                    (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t *
                        Math.exp(-v * v);
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.step = function (x, alpha) {
            if (alpha === void 0) { alpha = 0; }
            var resultValues = new Float32Array(x.size);
            var values = x.dataSync();
            for (var i = 0; i < values.length; ++i) {
                var value = values[i];
                if (isNaN(value)) {
                    resultValues[i] = NaN;
                }
                else {
                    resultValues[i] = value > 0 ? 1 : alpha;
                }
            }
            return Tensor.make(x.shape, { values: resultValues });
        };
        MathBackendCPU.prototype.conv2d = function (x, filter, convInfo) {
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var dilationHeight = convInfo.dilationHeight;
            var dilationWidth = convInfo.dilationWidth;
            var padLeft = convInfo.padInfo.left;
            var padTop = convInfo.padInfo.top;
            var y = buffer(convInfo.outShape, x.dtype);
            for (var b = 0; b < convInfo.batchSize; ++b) {
                for (var d2 = 0; d2 < convInfo.outChannels; ++d2) {
                    for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                        var xRCorner = yR * convInfo.strideHeight - padLeft;
                        for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                            var xCCorner = yC * convInfo.strideWidth - padTop;
                            var dotProd = 0;
                            for (var wR = 0; wR < filterHeight; wR++) {
                                var xR = xRCorner + wR * dilationHeight;
                                if (xR < 0 || xR >= convInfo.inHeight) {
                                    continue;
                                }
                                for (var wC = 0; wC < filterWidth; wC++) {
                                    var xC = xCCorner + wC * dilationWidth;
                                    if (xC < 0 || xC >= convInfo.inWidth) {
                                        continue;
                                    }
                                    for (var d1 = 0; d1 < convInfo.inChannels; ++d1) {
                                        var pixel = x.get(b, xR, xC, d1);
                                        var weight = filter.get(wR, wC, d1, d2);
                                        dotProd += pixel * weight;
                                    }
                                }
                            }
                            y.set(dotProd, b, yR, yC, d2);
                        }
                    }
                }
            }
            return y.toTensor();
        };
        MathBackendCPU.prototype.conv2dDerInput = function (dy, filter, convInfo) {
            var dx = buffer(convInfo.inShape, 'float32');
            var dxValues = dx.values;
            var _a = dx.strides, dxS0 = _a[0], dxS1 = _a[1], dxS2 = _a[2];
            var dyValues = dy.dataSync();
            var _b = dy.strides, dyS0 = _b[0], dyS1 = _b[1], dyS2 = _b[2];
            var fltValues = filter.dataSync();
            var _c = filter.strides, fltS0 = _c[0], fltS1 = _c[1], fltS2 = _c[2];
            var batchSize = convInfo.batchSize, filterHeight = convInfo.filterHeight, filterWidth = convInfo.filterWidth, inChannels = convInfo.inChannels, inHeight = convInfo.inHeight, inWidth = convInfo.inWidth, outChannels = convInfo.outChannels, outHeight = convInfo.outHeight, outWidth = convInfo.outWidth, strideHeight = convInfo.strideHeight, strideWidth = convInfo.strideWidth;
            var topPad = filterHeight - 1 - convInfo.padInfo.top;
            var leftPad = filterWidth - 1 - convInfo.padInfo.left;
            for (var b = 0; b < batchSize; ++b) {
                for (var d1 = 0; d1 < inChannels; ++d1) {
                    for (var xR = 0; xR < inHeight; ++xR) {
                        var xRCorner = xR - topPad;
                        var xRMin = Math.max(0, Math.ceil(xRCorner / strideHeight));
                        var yRMax = Math.min(outHeight, (filterHeight + xRCorner) / strideHeight);
                        for (var xC = 0; xC < inWidth; ++xC) {
                            var xCCorner = xC - leftPad;
                            var xCMin = Math.max(0, Math.ceil(xCCorner / strideWidth));
                            var yCMax = Math.min(outWidth, (filterWidth + xCCorner) / strideWidth);
                            var dotProd = 0;
                            for (var yR = xRMin; yR < yRMax; ++yR) {
                                var wR = yR * strideHeight - xRCorner;
                                for (var yC = xCMin; yC < yCMax; ++yC) {
                                    var wC = yC * strideWidth - xCCorner;
                                    var dyOffset = dyS0 * b + dyS1 * yR + dyS2 * yC;
                                    var fltOffset = fltS0 * (filterHeight - 1 - wR) +
                                        fltS1 * (filterWidth - 1 - wC) + fltS2 * d1;
                                    for (var d2 = 0; d2 < outChannels; ++d2) {
                                        var pixel = dyValues[dyOffset + d2];
                                        var weight = fltValues[fltOffset + d2];
                                        dotProd += pixel * weight;
                                    }
                                }
                            }
                            dxValues[dxS0 * b + dxS1 * xR + dxS2 * xC + d1] = dotProd;
                        }
                    }
                }
            }
            return dx.toTensor();
        };
        MathBackendCPU.prototype.conv2dDerFilter = function (x, dy, convInfo) {
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var dW = buffer(convInfo.filterShape, 'float32');
            var leftPad = convInfo.padInfo.left;
            var topPad = convInfo.padInfo.top;
            for (var wR = 0; wR < filterHeight; ++wR) {
                var yRMin = Math.max(0, Math.ceil((topPad - wR) / strideHeight));
                var yRMax = Math.min(convInfo.outHeight, (convInfo.inHeight + topPad - wR) / strideHeight);
                for (var wC = 0; wC < filterWidth; ++wC) {
                    var yCMin = Math.max(0, Math.ceil((leftPad - wC) / strideWidth));
                    var yCMax = Math.min(convInfo.outWidth, (convInfo.inWidth + leftPad - wC) / strideWidth);
                    for (var d1 = 0; d1 < convInfo.inChannels; ++d1) {
                        for (var d2 = 0; d2 < convInfo.outChannels; ++d2) {
                            var dotProd = 0;
                            for (var b = 0; b < convInfo.batchSize; ++b) {
                                for (var yR = yRMin; yR < yRMax; ++yR) {
                                    var xR = wR + yR * strideHeight - topPad;
                                    for (var yC = yCMin; yC < yCMax; ++yC) {
                                        var xC = wC + yC * strideWidth - leftPad;
                                        dotProd += x.get(b, xR, xC, d1) * dy.get(b, yR, yC, d2);
                                    }
                                }
                            }
                            dW.set(dotProd, wR, wC, d1, d2);
                        }
                    }
                }
            }
            return dW.toTensor();
        };
        MathBackendCPU.prototype.depthwiseConv2D = function (x, filter, convInfo) {
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var dilationHeight = convInfo.dilationHeight;
            var dilationWidth = convInfo.dilationWidth;
            var padLeft = convInfo.padInfo.left;
            var padTop = convInfo.padInfo.top;
            var chMul = convInfo.outChannels / convInfo.inChannels;
            var y = buffer(convInfo.outShape, x.dtype);
            for (var b = 0; b < convInfo.batchSize; ++b) {
                for (var d1 = 0; d1 < convInfo.inChannels; ++d1) {
                    for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                        var xRCorner = yR * convInfo.strideHeight - padLeft;
                        for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                            var xCCorner = yC * convInfo.strideWidth - padTop;
                            for (var q = 0; q < chMul; ++q) {
                                var dotProd = 0;
                                for (var wR = 0; wR < filterHeight; ++wR) {
                                    var xR = xRCorner + wR * dilationHeight;
                                    if (xR < 0 || xR >= convInfo.inHeight) {
                                        continue;
                                    }
                                    for (var wC = 0; wC < filterWidth; ++wC) {
                                        var xC = xCCorner + wC * dilationWidth;
                                        if (xC < 0 || xC >= convInfo.inWidth) {
                                            continue;
                                        }
                                        var pixel = x.get(b, xR, xC, d1);
                                        var weight = filter.get(wR, wC, d1, q);
                                        dotProd += pixel * weight;
                                    }
                                }
                                y.set(dotProd, b, yR, yC, d1 * chMul + q);
                            }
                        }
                    }
                }
            }
            return y.toTensor();
        };
        MathBackendCPU.prototype.tile = function (x, reps) {
            var newShape = new Array(x.rank);
            for (var i = 0; i < newShape.length; i++) {
                newShape[i] = x.shape[i] * reps[i];
            }
            var result = buffer(newShape, x.dtype);
            var xBuf = x.buffer();
            for (var i = 0; i < result.values.length; ++i) {
                var newLoc = result.indexToLoc(i);
                var originalLoc = new Array(x.rank);
                for (var i_1 = 0; i_1 < originalLoc.length; i_1++) {
                    originalLoc[i_1] = newLoc[i_1] % x.shape[i_1];
                }
                var originalIndex = xBuf.locToIndex(originalLoc);
                result.values[i] = xBuf.values[originalIndex];
            }
            return result.toTensor();
        };
        MathBackendCPU.prototype.pad = function (x, paddings, constantValue) {
            var outShape = paddings.map(function (p, i) { return p[0] + x.shape[i] + p[1]; });
            var start = paddings.map(function (p) { return p[0]; });
            var xBuffer = x.buffer();
            var buffer$$1 = buffer(outShape, x.dtype);
            if (constantValue !== 0) {
                buffer$$1.values.fill(constantValue);
            }
            for (var i = 0; i < x.size; i++) {
                var coords = xBuffer.indexToLoc(i);
                var outCoords = coords.map(function (c, i) { return c + start[i]; });
                buffer$$1.set.apply(buffer$$1, [x.get.apply(x, coords)].concat(outCoords));
            }
            return buffer$$1.toTensor();
        };
        MathBackendCPU.prototype.transpose = function (x, perm) {
            var newShape = new Array(x.rank);
            for (var i = 0; i < newShape.length; i++) {
                newShape[i] = x.shape[perm[i]];
            }
            var values = x.dataSync();
            var result = buffer(newShape, x.dtype);
            var xBuf = x.buffer();
            for (var i = 0; i < x.size; ++i) {
                var loc = xBuf.indexToLoc(i);
                var newLoc = new Array(loc.length);
                for (var i_2 = 0; i_2 < newLoc.length; i_2++) {
                    newLoc[i_2] = loc[perm[i_2]];
                }
                var newIndex = result.locToIndex(newLoc);
                result.values[newIndex] = values[i];
            }
            return result.toTensor();
        };
        MathBackendCPU.prototype.gather = function (x, indices, axis) {
            var newShape = x.shape.slice();
            var indicesValues = indices.dataSync();
            newShape[axis] = indicesValues.length;
            var result = buffer(newShape, x.dtype);
            var xBuf = x.buffer();
            for (var i = 0; i < result.size; ++i) {
                var newLoc = result.indexToLoc(i);
                var originalLoc = newLoc.slice();
                originalLoc[axis] = indicesValues[newLoc[axis]];
                var originalIndex = xBuf.locToIndex(originalLoc);
                result.values[i] = xBuf.values[originalIndex];
            }
            return result.toTensor();
        };
        MathBackendCPU.prototype.pool = function (x, convInfo, poolType) {
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var y = buffer(convInfo.outShape, 'float32');
            var padTop = convInfo.padInfo.top;
            var padLeft = convInfo.padInfo.left;
            for (var b = 0; b < convInfo.batchSize; ++b) {
                for (var d = 0; d < convInfo.inChannels; ++d) {
                    for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                        var xRCorner = yR * strideHeight - padTop;
                        var xRMin = Math.max(0, xRCorner);
                        var xRMax = Math.min(convInfo.inHeight, filterHeight + xRCorner);
                        for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                            var xCCorner = yC * strideWidth - padLeft;
                            var xCMin = Math.max(0, xCCorner);
                            var xCMax = Math.min(convInfo.inWidth, filterWidth + xCCorner);
                            var minMaxValue = (poolType === 'max' ? Number.NEGATIVE_INFINITY :
                                Number.POSITIVE_INFINITY);
                            var avgValue = 0;
                            var count = 0;
                            for (var xR = xRMin; xR < xRMax; ++xR) {
                                for (var xC = xCMin; xC < xCMax; ++xC) {
                                    var pixel = x.get(b, xR, xC, d);
                                    if ((poolType === 'max' && pixel > minMaxValue)) {
                                        minMaxValue = pixel;
                                    }
                                    else if (poolType === 'avg') {
                                        avgValue += pixel;
                                        count++;
                                    }
                                }
                                if (isNaN(minMaxValue)) {
                                    break;
                                }
                            }
                            y.set(poolType === 'avg' ? avgValue / count : minMaxValue, b, yR, yC, d);
                        }
                    }
                }
            }
            return y.toTensor();
        };
        MathBackendCPU.prototype.maxPool = function (x, convInfo) {
            return this.pool(x, convInfo, 'max');
        };
        MathBackendCPU.prototype.maxPoolPositions = function (x, convInfo) {
            var maxPositions = buffer(convInfo.outShape, 'int32');
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var padTop = convInfo.padInfo.top;
            var padLeft = convInfo.padInfo.left;
            for (var b = 0; b < convInfo.batchSize; ++b) {
                for (var d = 0; d < convInfo.inChannels; ++d) {
                    for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                        var xRCorner = yR * strideHeight - padTop;
                        var xRMin = Math.max(0, xRCorner);
                        var xRMax = Math.min(convInfo.inHeight, filterHeight + xRCorner);
                        for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                            var xCCorner = yC * strideWidth - padLeft;
                            var xCMin = Math.max(0, xCCorner);
                            var xCMax = Math.min(convInfo.inWidth, filterWidth + xCCorner);
                            var maxValue = Number.NEGATIVE_INFINITY;
                            var maxPosition = -1;
                            for (var xR = xRMin; xR < xRMax; ++xR) {
                                var wR = xR - xRCorner;
                                for (var xC = xCMin; xC < xCMax; ++xC) {
                                    var wC = xC - xCCorner;
                                    var pixel = x.get(b, xR, xC, d);
                                    if (pixel > maxValue) {
                                        maxValue = pixel;
                                        maxPosition = wR * filterWidth + wC;
                                    }
                                }
                            }
                            maxPositions.set(maxPosition, b, yR, yC, d);
                        }
                    }
                }
            }
            return maxPositions.toTensor();
        };
        MathBackendCPU.prototype.maxPoolBackprop = function (dy, x, y, convInfo) {
            var maxPositions = this.maxPoolPositions(x, convInfo);
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var padLeft = filterWidth - 1 - convInfo.padInfo.left;
            var padTop = filterHeight - 1 - convInfo.padInfo.top;
            var dx = buffer(x.shape, 'float32');
            for (var b = 0; b < convInfo.batchSize; ++b) {
                for (var d = 0; d < convInfo.inChannels; ++d) {
                    for (var dxR = 0; dxR < convInfo.inHeight; ++dxR) {
                        for (var dxC = 0; dxC < convInfo.inWidth; ++dxC) {
                            var dyRCorner = dxR - padTop;
                            var dyCCorner = dxC - padLeft;
                            var dotProd = 0;
                            for (var wR = 0; wR < filterHeight; ++wR) {
                                var dyR = (dyRCorner + wR) / strideHeight;
                                if (dyR < 0 || dyR >= convInfo.outHeight ||
                                    Math.floor(dyR) !== dyR) {
                                    continue;
                                }
                                for (var wC = 0; wC < filterWidth; ++wC) {
                                    var dyC = (dyCCorner + wC) / strideWidth;
                                    if (dyC < 0 || dyC >= convInfo.outWidth ||
                                        Math.floor(dyC) !== dyC) {
                                        continue;
                                    }
                                    var maxPos = filterHeight * filterWidth - 1 -
                                        maxPositions.get(b, dyR, dyC, d);
                                    var curPos = wR * filterWidth + wC;
                                    var mask = maxPos === curPos ? 1 : 0;
                                    if (mask === 0) {
                                        continue;
                                    }
                                    var pixel = dy.get(b, dyR, dyC, d);
                                    dotProd += pixel * mask;
                                }
                            }
                            dx.set(dotProd, b, dxR, dxC, d);
                        }
                    }
                }
            }
            return dx.toTensor();
        };
        MathBackendCPU.prototype.avgPoolBackprop = function (dy, x, convInfo) {
            var strideHeight = convInfo.strideHeight;
            var strideWidth = convInfo.strideWidth;
            var filterHeight = convInfo.filterHeight;
            var filterWidth = convInfo.filterWidth;
            var padLeft = filterWidth - 1 - convInfo.padInfo.left;
            var padTop = filterHeight - 1 - convInfo.padInfo.top;
            var dx = buffer(x.shape, 'float32');
            var avgMultiplier = 1 / (filterHeight * filterWidth);
            for (var b = 0; b < convInfo.batchSize; ++b) {
                for (var d = 0; d < convInfo.inChannels; ++d) {
                    for (var dxR = 0; dxR < convInfo.inHeight; ++dxR) {
                        for (var dxC = 0; dxC < convInfo.inWidth; ++dxC) {
                            var dyRCorner = dxR - padTop;
                            var dyCCorner = dxC - padLeft;
                            var dotProd = 0;
                            for (var wR = 0; wR < filterHeight; ++wR) {
                                var dyR = (dyRCorner + wR) / strideHeight;
                                if (dyR < 0 || dyR >= convInfo.outHeight ||
                                    Math.floor(dyR) !== dyR) {
                                    continue;
                                }
                                for (var wC = 0; wC < filterWidth; ++wC) {
                                    var dyC = (dyCCorner + wC) / strideWidth;
                                    if (dyC < 0 || dyC >= convInfo.outWidth ||
                                        Math.floor(dyC) !== dyC) {
                                        continue;
                                    }
                                    var pixel = dy.get(b, dyR, dyC, d);
                                    dotProd += pixel;
                                }
                            }
                            dx.set(dotProd * avgMultiplier, b, dxR, dxC, d);
                        }
                    }
                }
            }
            return dx.toTensor();
        };
        MathBackendCPU.prototype.cast = function (x, dtype) {
            return castTensor(x, dtype, this);
        };
        MathBackendCPU.prototype.reshape = function (x, shape) {
            return reshapeTensor(x, shape);
        };
        MathBackendCPU.prototype.avgPool = function (x, convInfo) {
            return this.pool(x, convInfo, 'avg').toFloat();
        };
        MathBackendCPU.prototype.resizeBilinear = function (x, newHeight, newWidth, alignCorners) {
            var _a = x.shape, batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], numChannels = _a[3];
            var output = buffer([batch, newHeight, newWidth, numChannels], x.dtype);
            var effectiveInputSize = [
                (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
                (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
            ];
            var effectiveOutputSize = [
                (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
                (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
            ];
            for (var b = 0; b < batch; b++) {
                for (var r = 0; r < newHeight; r++) {
                    for (var c = 0; c < newWidth; c++) {
                        for (var d = 0; d < numChannels; d++) {
                            var sourceFracRow = (effectiveInputSize[0]) * r / (effectiveOutputSize[0]);
                            var sourceFracCol = (effectiveInputSize[1]) * c / (effectiveOutputSize[1]);
                            var sourceRowFloor = Math.floor(sourceFracRow);
                            var sourceRowCeil = Math.min(oldHeight - 1, Math.ceil(sourceFracRow));
                            var sourceColFloor = Math.floor(sourceFracCol);
                            var sourceColCeil = Math.min(oldWidth - 1, Math.ceil(sourceFracCol));
                            var topLeft = x.get(b, sourceRowFloor, sourceColFloor, d);
                            var bottomLeft = x.get(b, sourceRowCeil, sourceColFloor, d);
                            var topRight = x.get(b, sourceRowFloor, sourceColCeil, d);
                            var bottomRight = x.get(b, sourceRowCeil, sourceColCeil, d);
                            var rowFrac = sourceFracRow - sourceRowFloor;
                            var colFrac = sourceFracCol - sourceColFloor;
                            var top_1 = topLeft + (topRight - topLeft) * colFrac;
                            var bottom = bottomLeft + (bottomRight - bottomLeft) * colFrac;
                            var newValue = top_1 + (bottom - top_1) * rowFrac;
                            output.set(newValue, b, r, c, d);
                        }
                    }
                }
            }
            return output.toTensor();
        };
        MathBackendCPU.prototype.resizeBilinearBackprop = function (dy, x, alignCorners) {
            var _a = x.shape, batch = _a[0], xHeight = _a[1], xWidth = _a[2], depth = _a[3];
            var _b = dy.shape, yHeight = _b[1], yWidth = _b[2];
            var output = buffer([batch, xHeight, xWidth, depth], x.dtype);
            var effectiveXSize = [
                (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
                (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
            ];
            var effectiveYSize = [
                (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
                (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
            ];
            var heightScale = effectiveXSize[0] / effectiveYSize[0];
            var widthScale = effectiveXSize[1] / effectiveYSize[1];
            for (var b = 0; b < batch; b++) {
                for (var r = 0; r < yHeight; r++) {
                    var dxR = r * heightScale;
                    var topDxRIndex = Math.floor(dxR);
                    var bottomDxRIndex = Math.min(Math.ceil(dxR), xHeight - 1);
                    var dxRLerp = dxR - topDxRIndex;
                    var inverseDxRLerp = 1.0 - dxRLerp;
                    for (var c = 0; c < yWidth; c++) {
                        var dxC = c * widthScale;
                        var leftDxCIndex = Math.floor(dxC);
                        var rightDxCIndex = Math.min(Math.ceil(dxC), xWidth - 1);
                        var dxCLerp = dxC - leftDxCIndex;
                        var inverseDxCLerp = 1.0 - dxCLerp;
                        for (var d = 0; d < depth; d++) {
                            var dyVal = dy.get(b, r, c, d);
                            var topLeft = output.get(b, topDxRIndex, leftDxCIndex, d);
                            topLeft += dyVal * inverseDxRLerp * inverseDxCLerp;
                            output.set(topLeft, b, topDxRIndex, leftDxCIndex, d);
                            var topRight = output.get(b, topDxRIndex, rightDxCIndex, d);
                            topRight += dyVal * inverseDxRLerp * dxCLerp;
                            output.set(topRight, b, topDxRIndex, rightDxCIndex, d);
                            var bottomLeft = output.get(b, bottomDxRIndex, leftDxCIndex, d);
                            bottomLeft += dyVal * dxRLerp * inverseDxCLerp;
                            output.set(bottomLeft, b, bottomDxRIndex, leftDxCIndex, d);
                            var bottomRight = output.get(b, bottomDxRIndex, rightDxCIndex, d);
                            bottomRight += dyVal * dxRLerp * dxCLerp;
                            output.set(bottomRight, b, bottomDxRIndex, rightDxCIndex, d);
                        }
                    }
                }
            }
            return output.toTensor();
        };
        MathBackendCPU.prototype.resizeNearestNeighbor = function (x, newHeight, newWidth, alignCorners) {
            var _a = x.shape, batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], numChannels = _a[3];
            var output = buffer([batch, newHeight, newWidth, numChannels], x.dtype);
            var effectiveInputSize = alignCorners ? [oldHeight - 1, oldWidth - 1] : [oldHeight, oldWidth];
            var effectiveOutputSize = alignCorners ? [newHeight - 1, newWidth - 1] : [newHeight, newWidth];
            for (var b = 0; b < batch; b++) {
                for (var r = 0; r < newHeight; r++) {
                    for (var c = 0; c < newWidth; c++) {
                        for (var d = 0; d < numChannels; d++) {
                            var sourceFracRow = (effectiveInputSize[0]) * r / (effectiveOutputSize[0]);
                            var sourceFracCol = (effectiveInputSize[1]) * c / (effectiveOutputSize[1]);
                            var sourceNearestRow = Math.min(oldHeight - 1, alignCorners ? Math.round(sourceFracRow) :
                                Math.floor(sourceFracRow));
                            var sourceNearestCol = Math.min(oldWidth - 1, alignCorners ? Math.round(sourceFracCol) :
                                Math.floor(sourceFracCol));
                            var newValue = x.get(b, sourceNearestRow, sourceNearestCol, d);
                            output.set(newValue, b, r, c, d);
                        }
                    }
                }
            }
            return output.toTensor();
        };
        MathBackendCPU.prototype.batchNormalization = function (x, mean$$1, variance, varianceEpsilon, scale, offset) {
            var xValues = x.dataSync();
            var meanValues = mean$$1.dataSync();
            var varianceValues = variance.dataSync();
            var scaleValues = scale ? scale.dataSync() : new Float32Array([1]);
            var offsetValues = offset ? offset.dataSync() : new Float32Array([0]);
            var outValues = new Float32Array(xValues.length);
            for (var i = 0; i < xValues.length; i++) {
                outValues[i] = offsetValues[i % offsetValues.length] +
                    (xValues[i] - meanValues[i % meanValues.length]) *
                        scaleValues[i % scaleValues.length] /
                        Math.sqrt(varianceValues[i % varianceValues.length] + varianceEpsilon);
            }
            return tensor4d(outValues, x.shape);
        };
        MathBackendCPU.prototype.localResponseNormalization4D = function (x, radius, bias, alpha, beta) {
            var output = buffer(x.shape, 'float32');
            var rad = radius;
            var maxD = output.shape[3] - 1;
            function sumAcrossChannels(b, r, c, d) {
                var sum$$1 = 0.0;
                for (var j = Math.max(0, d - rad); j <= Math.min(d + rad, maxD); j++) {
                    var z = x.get(b, r, c, j);
                    sum$$1 += z * z;
                }
                return sum$$1;
            }
            for (var b = 0; b < output.shape[0]; b++) {
                for (var r = 0; r <= output.shape[1]; r++) {
                    for (var c = 0; c < output.shape[2]; c++) {
                        for (var d = 0; d < output.shape[3]; d++) {
                            var sum$$1 = sumAcrossChannels(b, r, c, d);
                            var val = x.get(b, r, c, d) * Math.pow(bias + alpha * sum$$1, -beta);
                            output.set(val, b, r, c, d);
                        }
                    }
                }
            }
            return output.toTensor();
        };
        MathBackendCPU.prototype.multinomial = function (logits, normalized, numSamples, seed) {
            var probabilities = normalized ? logits : softmax(logits);
            var batchSize = probabilities.shape[0];
            var numEvents = probabilities.shape[1];
            var res = zeros([batchSize, numSamples], 'int32');
            var resVals = res.dataSync();
            var probVals = probabilities.dataSync();
            for (var b = 0; b < batchSize; ++b) {
                var offset = b * numEvents;
                var cdf = new Float32Array(numEvents - 1);
                cdf[0] = probVals[offset];
                for (var event_1 = 1; event_1 < cdf.length; ++event_1) {
                    cdf[event_1] = cdf[event_1 - 1] + probVals[offset + event_1];
                }
                var random = undefined(seed.toString());
                var outOffset = b * numSamples;
                for (var sampleId = 0; sampleId < numSamples; ++sampleId) {
                    var r = random();
                    resVals[outOffset + sampleId] = cdf.length;
                    for (var event_2 = 0; event_2 < cdf.length; event_2++) {
                        if (r < cdf[event_2]) {
                            resVals[outOffset + sampleId] = event_2;
                            break;
                        }
                    }
                }
            }
            return res;
        };
        MathBackendCPU.prototype.oneHot = function (indices, depth, onValue, offValue) {
            var res = new Float32Array(indices.size * depth);
            res.fill(offValue);
            for (var event_3 = 0; event_3 < indices.size; ++event_3) {
                res[event_3 * depth + indices.get(event_3)] = onValue;
            }
            return tensor2d(res, [indices.size, depth]);
        };
        MathBackendCPU.prototype.broadcastedBinaryOp = function (a, b, dtype, op) {
            var newShape = assertAndGetBroadcastShape(a.shape, b.shape);
            var result = buffer(newShape, dtype);
            var aValues = a.dataSync();
            var bValues = b.dataSync();
            var aBroadcastDims = getBroadcastDims(a.shape, newShape);
            var bBroadcastDims = getBroadcastDims(b.shape, newShape);
            var aBuf = a.buffer();
            var bBuf = b.buffer();
            var _loop_2 = function (i) {
                var loc = result.indexToLoc(i);
                var aLoc = loc.slice(-a.rank);
                aBroadcastDims.forEach(function (d) { return aLoc[d] = 0; });
                var aIndex = aBuf.locToIndex(aLoc);
                var bLoc = loc.slice(-b.rank);
                bBroadcastDims.forEach(function (d) { return bLoc[d] = 0; });
                var bIndex = bBuf.locToIndex(bLoc);
                result.values[i] = op(aValues[aIndex], bValues[bIndex]);
            };
            for (var i = 0; i < result.values.length; ++i) {
                _loop_2(i);
            }
            return result.toTensor();
        };
        MathBackendCPU.prototype.dispose = function () { };
        return MathBackendCPU;
    }());
    ENV.registerBackend('cpu', function () { return new MathBackendCPU(); }, 1);

    var __decorate$r = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var BrowserUtil = (function () {
        function BrowserUtil() {
        }
        BrowserUtil.nextFrame = function () {
            return new Promise(function (resolve) { return requestAnimationFrame(function () { return resolve(); }); });
        };
        __decorate$r([
            doc({ heading: 'Performance', subheading: 'Timing' })
        ], BrowserUtil, "nextFrame", null);
        return BrowserUtil;
    }());

    var DTYPE_VALUE_SIZE_MAP = {
        'float32': 4,
        'int32': 4,
        'uint16': 2,
        'uint8': 1,
        'bool': 1,
    };

    var __awaiter$7 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$7 = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    function encodeWeights(tensors) {
        return __awaiter$7(this, void 0, void 0, function () {
            var specs, dataPromises, name_1, t, tensorValues;
            return __generator$7(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        specs = [];
                        dataPromises = [];
                        for (name_1 in tensors) {
                            t = tensors[name_1];
                            if (t.dtype !== 'float32' && t.dtype !== 'int32' && t.dtype !== 'bool') {
                                throw new Error("Unsupported dtype in weight '" + name_1 + "': " + t.dtype);
                            }
                            specs.push({ name: name_1, shape: t.shape, dtype: t.dtype });
                            dataPromises.push(t.data());
                        }
                        return [4, Promise.all(dataPromises)];
                    case 1:
                        tensorValues = _a.sent();
                        return [2, { data: concatenateTypedArrays(tensorValues), specs: specs }];
                }
            });
        });
    }
    function decodeWeights(buffer, specs) {
        var out = {};
        var offset = 0;
        for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
            var spec = specs_1[_i];
            var name_2 = spec.name;
            var dtype = spec.dtype;
            var shape = spec.shape;
            if (spec.quantization != null) {
                throw new Error("decodeWeights does not support quantization yet, but encountered " +
                    ("weight '" + name_2 + " with quantization.'"));
            }
            var size = sizeFromShape(shape);
            var value = void 0;
            if (dtype === 'float32') {
                value = ArrayOps.tensor(new Float32Array(buffer, offset, size), shape, 'float32');
            }
            else if (dtype === 'int32') {
                value =
                    ArrayOps.tensor(new Int32Array(buffer, offset, size), shape, 'int32');
            }
            else if (dtype === 'bool') {
                value =
                    ArrayOps.tensor(new Uint8Array(buffer, offset, size), shape, 'bool');
            }
            else {
                throw new Error("Unsupported dtype in weight '" + name_2 + "': " + dtype);
            }
            out[name_2] = value;
            offset += size * DTYPE_VALUE_SIZE_MAP[dtype];
        }
        return out;
    }
    function concatenateTypedArrays(xs) {
        if (xs === null) {
            throw new Error("Invalid input value: " + JSON.stringify(xs));
        }
        var totalByteLength = 0;
        xs.forEach(function (x) {
            if (x instanceof Float32Array || x instanceof Int32Array) {
                totalByteLength += x.length * 4;
            }
            else if (x instanceof Uint8Array) {
                totalByteLength += x.length;
            }
            else {
                throw new Error("Unsupported TypedArray subtype: " + x.constructor.name);
            }
        });
        var y = new Uint8Array(totalByteLength);
        var offset = 0;
        xs.forEach(function (x) {
            y.set(new Uint8Array(x.buffer), offset);
            if (x instanceof Float32Array || x instanceof Int32Array) {
                offset += x.length * 4;
            }
            else {
                offset += x.length;
            }
        });
        return y.buffer;
    }
    function stringByteLength(str) {
        return new Blob([str]).size;
    }
    function arrayBufferToBase64String(buffer) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
    }
    function base64StringToArrayBuffer(str) {
        var s = atob(str);
        var buffer = new Uint8Array(s.length);
        for (var i = 0; i < s.length; ++i) {
            buffer.set([s.charCodeAt(i)], i);
        }
        return buffer.buffer;
    }
    function concatenateArrayBuffers(buffers) {
        var totalByteLength = 0;
        buffers.forEach(function (buffer) {
            totalByteLength += buffer.byteLength;
        });
        var temp = new Uint8Array(totalByteLength);
        var offset = 0;
        buffers.forEach(function (buffer) {
            temp.set(new Uint8Array(buffer), offset);
            offset += buffer.byteLength;
        });
        return temp.buffer;
    }
    function basename(path) {
        var SEPARATOR = '/';
        path = path.trim();
        while (path.endsWith(SEPARATOR)) {
            path = path.slice(0, path.length - 1);
        }
        var items = path.split(SEPARATOR);
        return items[items.length - 1];
    }
    function getModelArtifactsInfoForJSON(modelArtifacts) {
        if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
            throw new Error('Expected JSON model topology, received ArrayBuffer.');
        }
        return {
            dateSaved: new Date(),
            modelTopologyType: 'JSON',
            modelTopologyBytes: modelArtifacts.modelTopology == null ?
                0 :
                stringByteLength(JSON.stringify(modelArtifacts.modelTopology)),
            weightSpecsBytes: modelArtifacts.weightSpecs == null ?
                0 :
                stringByteLength(JSON.stringify(modelArtifacts.weightSpecs)),
            weightDataBytes: modelArtifacts.weightData == null ?
                0 :
                modelArtifacts.weightData.byteLength,
        };
    }

    var IORouterRegistry = (function () {
        function IORouterRegistry() {
            this.saveRouters = [];
            this.loadRouters = [];
        }
        IORouterRegistry.getInstance = function () {
            if (IORouterRegistry.instance == null) {
                IORouterRegistry.instance = new IORouterRegistry();
            }
            return IORouterRegistry.instance;
        };
        IORouterRegistry.registerSaveRouter = function (saveRouter) {
            IORouterRegistry.getInstance().saveRouters.push(saveRouter);
        };
        IORouterRegistry.registerLoadRouter = function (loadRouter) {
            IORouterRegistry.getInstance().loadRouters.push(loadRouter);
        };
        IORouterRegistry.getSaveHandlers = function (url) {
            return IORouterRegistry.getHandlers(url, 'save');
        };
        IORouterRegistry.getLoadHandlers = function (url) {
            return IORouterRegistry.getHandlers(url, 'load');
        };
        IORouterRegistry.getHandlers = function (url, handlerType) {
            var validHandlers = [];
            var routers = handlerType === 'load' ? this.getInstance().loadRouters :
                this.getInstance().saveRouters;
            routers.forEach(function (router) {
                var handler = router(url);
                if (handler !== null) {
                    validHandlers.push(handler);
                }
            });
            return validHandlers;
        };
        return IORouterRegistry;
    }());

    var __awaiter$8 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$8 = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    var URL_SCHEME_SUFFIX = '://';
    var ModelStoreManagerRegistry = (function () {
        function ModelStoreManagerRegistry() {
            this.managers = {};
        }
        ModelStoreManagerRegistry.getInstance = function () {
            if (ModelStoreManagerRegistry.instance == null) {
                ModelStoreManagerRegistry.instance = new ModelStoreManagerRegistry();
            }
            return ModelStoreManagerRegistry.instance;
        };
        ModelStoreManagerRegistry.registerManager = function (scheme, manager) {
            assert(scheme != null, 'scheme must not be undefined or null.');
            if (scheme.endsWith(URL_SCHEME_SUFFIX)) {
                scheme = scheme.slice(0, scheme.indexOf(URL_SCHEME_SUFFIX));
            }
            assert(scheme.length > 0, 'scheme must not be an empty string.');
            var registry = ModelStoreManagerRegistry.getInstance();
            assert(registry.managers[scheme] == null, "A model store manager is already registered for scheme '" + scheme + "'.");
            registry.managers[scheme] = manager;
        };
        ModelStoreManagerRegistry.getManager = function (scheme) {
            var manager = this.getInstance().managers[scheme];
            if (manager == null) {
                throw new Error("Cannot find model manager for scheme '" + scheme + "'");
            }
            return manager;
        };
        ModelStoreManagerRegistry.getSchemes = function () {
            return Object.keys(this.getInstance().managers);
        };
        return ModelStoreManagerRegistry;
    }());
    function parseURL(url) {
        if (url.indexOf(URL_SCHEME_SUFFIX) === -1) {
            throw new Error("The url string provided does not contain a scheme. " +
                "Supported schemes are: " +
                ("" + ModelStoreManagerRegistry.getSchemes().join(',')));
        }
        return {
            scheme: url.split(URL_SCHEME_SUFFIX)[0],
            path: url.split(URL_SCHEME_SUFFIX)[1],
        };
    }
    function listModels() {
        return __awaiter$8(this, void 0, void 0, function () {
            var schemes, out, _i, schemes_1, scheme, schemeOut, path, url;
            return __generator$8(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schemes = ModelStoreManagerRegistry.getSchemes();
                        out = {};
                        _i = 0, schemes_1 = schemes;
                        _a.label = 1;
                    case 1:
                        if (!(_i < schemes_1.length)) return [3, 4];
                        scheme = schemes_1[_i];
                        return [4, ModelStoreManagerRegistry.getManager(scheme).listModels()];
                    case 2:
                        schemeOut = _a.sent();
                        for (path in schemeOut) {
                            url = scheme + URL_SCHEME_SUFFIX + path;
                            out[url] = schemeOut[path];
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, out];
                }
            });
        });
    }
    function removeModel(url) {
        return __awaiter$8(this, void 0, void 0, function () {
            var schemeAndPath, manager;
            return __generator$8(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schemeAndPath = parseURL(url);
                        manager = ModelStoreManagerRegistry.getManager(schemeAndPath.scheme);
                        return [4, manager.removeModel(schemeAndPath.path)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function cloneModelInternal(sourceURL, destURL, deleteSource) {
        if (deleteSource === void 0) { deleteSource = false; }
        return __awaiter$8(this, void 0, void 0, function () {
            var loadHandlers, loadHandler, saveHandlers, saveHandler, sourceScheme, sourcePath, sameMedium, modelArtifacts, saveResult;
            return __generator$8(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert(sourceURL !== destURL, "Old path and new path are the same: '" + sourceURL + "'");
                        loadHandlers = IORouterRegistry.getLoadHandlers(sourceURL);
                        assert(loadHandlers.length > 0, "Copying failed because no load handler is found for source URL " + sourceURL + ".");
                        assert(loadHandlers.length < 2, "Copying failed because more than one (" + loadHandlers.length + ") " +
                            ("load handlers for source URL " + sourceURL + "."));
                        loadHandler = loadHandlers[0];
                        saveHandlers = IORouterRegistry.getSaveHandlers(destURL);
                        assert(saveHandlers.length > 0, "Copying failed because no save handler is found for destination URL " +
                            (destURL + "."));
                        assert(saveHandlers.length < 2, "Copying failed because more than one (" + loadHandlers.length + ") " +
                            ("save handlers for destination URL " + destURL + "."));
                        saveHandler = saveHandlers[0];
                        sourceScheme = parseURL(sourceURL).scheme;
                        sourcePath = parseURL(sourceURL).path;
                        sameMedium = sourceScheme === parseURL(sourceURL).scheme;
                        return [4, loadHandler.load()];
                    case 1:
                        modelArtifacts = _a.sent();
                        if (!(deleteSource && sameMedium)) return [3, 3];
                        return [4, ModelStoreManagerRegistry.getManager(sourceScheme)
                                .removeModel(sourcePath)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4, saveHandler.save(modelArtifacts)];
                    case 4:
                        saveResult = _a.sent();
                        if (!(deleteSource && !sameMedium)) return [3, 6];
                        return [4, ModelStoreManagerRegistry.getManager(sourceScheme)
                                .removeModel(sourcePath)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2, saveResult.modelArtifactsInfo];
                }
            });
        });
    }
    function copyModel(sourceURL, destURL) {
        return __awaiter$8(this, void 0, void 0, function () {
            var deleteSource;
            return __generator$8(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deleteSource = false;
                        return [4, cloneModelInternal(sourceURL, destURL, deleteSource)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function moveModel(sourceURL, destURL) {
        return __awaiter$8(this, void 0, void 0, function () {
            var deleteSource;
            return __generator$8(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deleteSource = true;
                        return [4, cloneModelInternal(sourceURL, destURL, deleteSource)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }

    var __awaiter$9 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$9 = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    var DATABASE_NAME = 'tensorflowjs';
    var DATABASE_VERSION = 1;
    var MODEL_STORE_NAME = 'models_store';
    var INFO_STORE_NAME = 'model_info_store';
    function getIndexedDBFactory() {
        if (!ENV.get('IS_BROWSER')) {
            throw new Error('Failed to obtain IndexedDB factory because the current environment' +
                'is not a web browser.');
        }
        var theWindow = window;
        var factory = theWindow.indexedDB || theWindow.mozIndexedDB ||
            theWindow.webkitIndexedDB || theWindow.msIndexedDB ||
            theWindow.shimIndexedDB;
        if (factory == null) {
            throw new Error('The current browser does not appear to support IndexedDB.');
        }
        return factory;
    }
    function setUpDatabase(openRequest) {
        var db = openRequest.result;
        db.createObjectStore(MODEL_STORE_NAME, { keyPath: 'modelPath' });
        db.createObjectStore(INFO_STORE_NAME, { keyPath: 'modelPath' });
    }
    var BrowserIndexedDB = (function () {
        function BrowserIndexedDB(modelPath) {
            this.indexedDB = getIndexedDBFactory();
            if (modelPath == null || !modelPath) {
                throw new Error('For IndexedDB, modelPath must not be null, undefined or empty.');
            }
            this.modelPath = modelPath;
        }
        BrowserIndexedDB.prototype.save = function (modelArtifacts) {
            return __awaiter$9(this, void 0, void 0, function () {
                return __generator$9(this, function (_a) {
                    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                        throw new Error('BrowserLocalStorage.save() does not support saving model topology ' +
                            'in binary formats yet.');
                    }
                    return [2, this.databaseAction(this.modelPath, modelArtifacts)];
                });
            });
        };
        BrowserIndexedDB.prototype.load = function () {
            return __awaiter$9(this, void 0, void 0, function () {
                return __generator$9(this, function (_a) {
                    return [2, this.databaseAction(this.modelPath)];
                });
            });
        };
        BrowserIndexedDB.prototype.databaseAction = function (modelPath, modelArtifacts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var openRequest = _this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
                openRequest.onupgradeneeded = function () { return setUpDatabase(openRequest); };
                openRequest.onsuccess = function () {
                    var db = openRequest.result;
                    if (modelArtifacts == null) {
                        var modelTx = db.transaction(MODEL_STORE_NAME, 'readonly');
                        var modelStore = modelTx.objectStore(MODEL_STORE_NAME);
                        var getRequest_1 = modelStore.get(_this.modelPath);
                        getRequest_1.onsuccess = function () {
                            if (getRequest_1.result == null) {
                                db.close();
                                return reject(new Error("Cannot find model with path '" + _this.modelPath + "' " +
                                    "in IndexedDB."));
                            }
                            else {
                                resolve(getRequest_1.result.modelArtifacts);
                            }
                        };
                        getRequest_1.onerror = function (error) {
                            db.close();
                            return reject(getRequest_1.error);
                        };
                        modelTx.oncomplete = function () { return db.close(); };
                    }
                    else {
                        var modelArtifactsInfo_1 = getModelArtifactsInfoForJSON(modelArtifacts);
                        var infoTx_1 = db.transaction(INFO_STORE_NAME, 'readwrite');
                        var infoStore_1 = infoTx_1.objectStore(INFO_STORE_NAME);
                        var putInfoRequest_1 = infoStore_1.put({ modelPath: _this.modelPath, modelArtifactsInfo: modelArtifactsInfo_1 });
                        var modelTx_1;
                        putInfoRequest_1.onsuccess = function () {
                            modelTx_1 = db.transaction(MODEL_STORE_NAME, 'readwrite');
                            var modelStore = modelTx_1.objectStore(MODEL_STORE_NAME);
                            var putModelRequest = modelStore.put({
                                modelPath: _this.modelPath,
                                modelArtifacts: modelArtifacts,
                                modelArtifactsInfo: modelArtifactsInfo_1
                            });
                            putModelRequest.onsuccess = function () { return resolve({ modelArtifactsInfo: modelArtifactsInfo_1 }); };
                            putModelRequest.onerror = function (error) {
                                infoStore_1 = infoTx_1.objectStore(INFO_STORE_NAME);
                                var deleteInfoRequest = infoStore_1.delete(_this.modelPath);
                                deleteInfoRequest.onsuccess = function () {
                                    db.close();
                                    return reject(putModelRequest.error);
                                };
                                deleteInfoRequest.onerror = function (error) {
                                    db.close();
                                    return reject(putModelRequest.error);
                                };
                            };
                        };
                        putInfoRequest_1.onerror = function (error) {
                            db.close();
                            return reject(putInfoRequest_1.error);
                        };
                        infoTx_1.oncomplete = function () {
                            if (modelTx_1 == null) {
                                db.close();
                            }
                            else {
                                modelTx_1.oncomplete = function () { return db.close(); };
                            }
                        };
                    }
                };
                openRequest.onerror = function (error) { return reject(openRequest.error); };
            });
        };
        BrowserIndexedDB.URL_SCHEME = 'indexeddb://';
        return BrowserIndexedDB;
    }());
    var indexedDBRouter = function (url) {
        if (!ENV.get('IS_BROWSER')) {
            return null;
        }
        else {
            if (url.startsWith(BrowserIndexedDB.URL_SCHEME)) {
                return browserIndexedDB(url.slice(BrowserIndexedDB.URL_SCHEME.length));
            }
            else {
                return null;
            }
        }
    };
    IORouterRegistry.registerSaveRouter(indexedDBRouter);
    IORouterRegistry.registerLoadRouter(indexedDBRouter);
    function browserIndexedDB(modelPath) {
        return new BrowserIndexedDB(modelPath);
    }
    function maybeStripScheme(key) {
        return key.startsWith(BrowserIndexedDB.URL_SCHEME) ?
            key.slice(BrowserIndexedDB.URL_SCHEME.length) :
            key;
    }
    var BrowserIndexedDBManager = (function () {
        function BrowserIndexedDBManager() {
            this.indexedDB = getIndexedDBFactory();
        }
        BrowserIndexedDBManager.prototype.listModels = function () {
            return __awaiter$9(this, void 0, void 0, function () {
                var _this = this;
                return __generator$9(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            var openRequest = _this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
                            openRequest.onupgradeneeded = function () { return setUpDatabase(openRequest); };
                            openRequest.onsuccess = function () {
                                var db = openRequest.result;
                                var tx = db.transaction(INFO_STORE_NAME, 'readonly');
                                var store = tx.objectStore(INFO_STORE_NAME);
                                var getAllInfoRequest = store.getAll();
                                getAllInfoRequest.onsuccess = function () {
                                    var out = {};
                                    for (var _i = 0, _a = getAllInfoRequest.result; _i < _a.length; _i++) {
                                        var item = _a[_i];
                                        out[item.modelPath] = item.modelArtifactsInfo;
                                    }
                                    resolve(out);
                                };
                                getAllInfoRequest.onerror = function (error) {
                                    db.close();
                                    return reject(getAllInfoRequest.error);
                                };
                                tx.oncomplete = function () { return db.close(); };
                            };
                            openRequest.onerror = function (error) { return reject(openRequest.error); };
                        })];
                });
            });
        };
        BrowserIndexedDBManager.prototype.removeModel = function (path) {
            return __awaiter$9(this, void 0, void 0, function () {
                var _this = this;
                return __generator$9(this, function (_a) {
                    path = maybeStripScheme(path);
                    return [2, new Promise(function (resolve, reject) {
                            var openRequest = _this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
                            openRequest.onupgradeneeded = function () { return setUpDatabase(openRequest); };
                            openRequest.onsuccess = function () {
                                var db = openRequest.result;
                                var infoTx = db.transaction(INFO_STORE_NAME, 'readwrite');
                                var infoStore = infoTx.objectStore(INFO_STORE_NAME);
                                var getInfoRequest = infoStore.get(path);
                                var modelTx;
                                getInfoRequest.onsuccess = function () {
                                    if (getInfoRequest.result == null) {
                                        db.close();
                                        return reject(new Error("Cannot find model with path '" + path + "' " +
                                            "in IndexedDB."));
                                    }
                                    else {
                                        var deleteInfoRequest = infoStore.delete(path);
                                        var deleteModelData_1 = function () {
                                            modelTx = db.transaction(MODEL_STORE_NAME, 'readwrite');
                                            var modelStore = modelTx.objectStore(MODEL_STORE_NAME);
                                            var deleteModelRequest = modelStore.delete(path);
                                            deleteModelRequest.onsuccess = function () {
                                                return resolve(getInfoRequest.result.modelArtifactsInfo);
                                            };
                                            deleteModelRequest.onerror = function (error) {
                                                return reject(getInfoRequest.error);
                                            };
                                        };
                                        deleteInfoRequest.onsuccess = deleteModelData_1;
                                        deleteInfoRequest.onerror = function (error) {
                                            deleteModelData_1();
                                            db.close();
                                            return reject(getInfoRequest.error);
                                        };
                                    }
                                };
                                getInfoRequest.onerror = function (error) {
                                    db.close();
                                    return reject(getInfoRequest.error);
                                };
                                infoTx.oncomplete = function () {
                                    if (modelTx == null) {
                                        db.close();
                                    }
                                    else {
                                        modelTx.oncomplete = function () { return db.close(); };
                                    }
                                };
                            };
                            openRequest.onerror = function (error) { return reject(openRequest.error); };
                        })];
                });
            });
        };
        return BrowserIndexedDBManager;
    }());
    if (ENV.get('IS_BROWSER')) {
        try {
            ModelStoreManagerRegistry.registerManager(BrowserIndexedDB.URL_SCHEME, new BrowserIndexedDBManager());
        }
        catch (err) {
        }
    }

    var __awaiter$a = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$a = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    var PATH_SEPARATOR = '/';
    var PATH_PREFIX = 'tensorflowjs_models';
    var INFO_SUFFIX = 'info';
    var MODEL_TOPOLOGY_SUFFIX = 'model_topology';
    var WEIGHT_SPECS_SUFFIX = 'weight_specs';
    var WEIGHT_DATA_SUFFIX = 'weight_data';
    function getModelKeys(path) {
        return {
            info: [PATH_PREFIX, path, INFO_SUFFIX].join(PATH_SEPARATOR),
            topology: [PATH_PREFIX, path, MODEL_TOPOLOGY_SUFFIX].join(PATH_SEPARATOR),
            weightSpecs: [PATH_PREFIX, path, WEIGHT_SPECS_SUFFIX].join(PATH_SEPARATOR),
            weightData: [PATH_PREFIX, path, WEIGHT_DATA_SUFFIX].join(PATH_SEPARATOR)
        };
    }
    function getModelPathFromKey(key) {
        var items = key.split(PATH_SEPARATOR);
        if (items.length < 3) {
            throw new Error("Invalid key format: " + key);
        }
        return items.slice(1, items.length - 1).join(PATH_SEPARATOR);
    }
    function maybeStripScheme$1(key) {
        return key.startsWith(BrowserLocalStorage.URL_SCHEME) ?
            key.slice(BrowserLocalStorage.URL_SCHEME.length) :
            key;
    }
    var BrowserLocalStorage = (function () {
        function BrowserLocalStorage(modelPath) {
            if (!ENV.get('IS_BROWSER') || typeof window.localStorage === 'undefined') {
                throw new Error('The current environment does not support local storage.');
            }
            this.LS = window.localStorage;
            if (modelPath == null || !modelPath) {
                throw new Error('For local storage, modelPath must not be null, undefined or empty.');
            }
            this.modelPath = modelPath;
            this.keys = getModelKeys(this.modelPath);
        }
        BrowserLocalStorage.prototype.save = function (modelArtifacts) {
            return __awaiter$a(this, void 0, void 0, function () {
                var topology, weightSpecs, modelArtifactsInfo, key;
                return __generator$a(this, function (_a) {
                    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                        throw new Error('BrowserLocalStorage.save() does not support saving model topology ' +
                            'in binary formats yet.');
                    }
                    else {
                        topology = JSON.stringify(modelArtifacts.modelTopology);
                        weightSpecs = JSON.stringify(modelArtifacts.weightSpecs);
                        modelArtifactsInfo = getModelArtifactsInfoForJSON(modelArtifacts);
                        try {
                            this.LS.setItem(this.keys.info, JSON.stringify(modelArtifactsInfo));
                            this.LS.setItem(this.keys.topology, topology);
                            this.LS.setItem(this.keys.weightSpecs, weightSpecs);
                            this.LS.setItem(this.keys.weightData, arrayBufferToBase64String(modelArtifacts.weightData));
                            return [2, { modelArtifactsInfo: modelArtifactsInfo }];
                        }
                        catch (err) {
                            for (key in this.keys) {
                                this.LS.removeItem(this.keys[key]);
                            }
                            throw new Error("Failed to save model '" + this.modelPath + "' to local storage: " +
                                "size quota being exceeded is a possible cause of this failure: " +
                                ("modelTopologyBytes=" + modelArtifactsInfo.modelTopologyBytes + ", ") +
                                ("weightSpecsBytes=" + modelArtifactsInfo.weightSpecsBytes + ", ") +
                                ("weightDataBytes=" + modelArtifactsInfo.weightDataBytes + "."));
                        }
                    }
                    return [2];
                });
            });
        };
        BrowserLocalStorage.prototype.load = function () {
            return __awaiter$a(this, void 0, void 0, function () {
                var info, out, topology, weightSpecs, weightDataBase64;
                return __generator$a(this, function (_a) {
                    info = JSON.parse(this.LS.getItem(this.keys.info));
                    if (info == null) {
                        throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
                    }
                    if (info.modelTopologyType !== 'JSON') {
                        throw new Error('BrowserLocalStorage does not support loading non-JSON model ' +
                            'topology yet.');
                    }
                    out = {};
                    topology = JSON.parse(this.LS.getItem(this.keys.topology));
                    if (topology == null) {
                        throw new Error("In local storage, the topology of model '" + this.modelPath + "' " +
                            "is missing.");
                    }
                    out.modelTopology = topology;
                    weightSpecs = JSON.parse(this.LS.getItem(this.keys.weightSpecs));
                    if (weightSpecs == null) {
                        throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' " +
                            "are missing.");
                    }
                    out.weightSpecs = weightSpecs;
                    weightDataBase64 = this.LS.getItem(this.keys.weightData);
                    if (weightDataBase64 == null) {
                        throw new Error("In local storage, the binary weight values of model " +
                            ("'" + this.modelPath + "' are missing."));
                    }
                    out.weightData = base64StringToArrayBuffer(weightDataBase64);
                    return [2, out];
                });
            });
        };
        BrowserLocalStorage.URL_SCHEME = 'localstorage://';
        return BrowserLocalStorage;
    }());
    var localStorageRouter = function (url) {
        if (!ENV.get('IS_BROWSER')) {
            return null;
        }
        else {
            if (url.startsWith(BrowserLocalStorage.URL_SCHEME)) {
                return browserLocalStorage(url.slice(BrowserLocalStorage.URL_SCHEME.length));
            }
            else {
                return null;
            }
        }
    };
    IORouterRegistry.registerSaveRouter(localStorageRouter);
    IORouterRegistry.registerLoadRouter(localStorageRouter);
    function browserLocalStorage(modelPath) {
        return new BrowserLocalStorage(modelPath);
    }
    var BrowserLocalStorageManager = (function () {
        function BrowserLocalStorageManager() {
            assert(ENV.get('IS_BROWSER'), 'Current environment is not a web browser');
            assert(typeof window.localStorage !== 'undefined', 'Current browser does not appear to support localStorage');
            this.LS = window.localStorage;
        }
        BrowserLocalStorageManager.prototype.listModels = function () {
            return __awaiter$a(this, void 0, void 0, function () {
                var out, prefix, suffix, i, key, modelPath;
                return __generator$a(this, function (_a) {
                    out = {};
                    prefix = PATH_PREFIX + PATH_SEPARATOR;
                    suffix = PATH_SEPARATOR + INFO_SUFFIX;
                    for (i = 0; i < this.LS.length; ++i) {
                        key = this.LS.key(i);
                        if (key.startsWith(prefix) && key.endsWith(suffix)) {
                            modelPath = getModelPathFromKey(key);
                            out[modelPath] = JSON.parse(this.LS.getItem(key));
                        }
                    }
                    return [2, out];
                });
            });
        };
        BrowserLocalStorageManager.prototype.removeModel = function (path) {
            return __awaiter$a(this, void 0, void 0, function () {
                var keys, info;
                return __generator$a(this, function (_a) {
                    path = maybeStripScheme$1(path);
                    keys = getModelKeys(path);
                    if (this.LS.getItem(keys.info) == null) {
                        throw new Error("Cannot find model at path '" + path + "'");
                    }
                    info = JSON.parse(this.LS.getItem(keys.info));
                    this.LS.removeItem(keys.info);
                    this.LS.removeItem(keys.topology);
                    this.LS.removeItem(keys.weightSpecs);
                    this.LS.removeItem(keys.weightData);
                    return [2, info];
                });
            });
        };
        return BrowserLocalStorageManager;
    }());
    if (ENV.get('IS_BROWSER')) {
        try {
            ModelStoreManagerRegistry.registerManager(BrowserLocalStorage.URL_SCHEME, new BrowserLocalStorageManager());
        }
        catch (err) {
        }
    }

    var __awaiter$b = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$b = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    var DEFAULT_FILE_NAME_PREFIX = 'model';
    var DEFAULT_JSON_EXTENSION_NAME = '.json';
    var DEFAULT_WEIGHT_DATA_EXTENSION_NAME = '.weights.bin';
    var BrowserDownloads = (function () {
        function BrowserDownloads(fileNamePrefix) {
            if (!ENV.get('IS_BROWSER')) {
                throw new Error('triggerDownloads() cannot proceed because the current environment ' +
                    'is not a browser.');
            }
            if (fileNamePrefix.startsWith(BrowserDownloads.URL_SCHEME)) {
                fileNamePrefix = fileNamePrefix.slice(BrowserDownloads.URL_SCHEME.length);
            }
            if (fileNamePrefix == null || fileNamePrefix.length === 0) {
                fileNamePrefix = DEFAULT_FILE_NAME_PREFIX;
            }
            this.modelTopologyFileName = fileNamePrefix + DEFAULT_JSON_EXTENSION_NAME;
            this.weightDataFileName =
                fileNamePrefix + DEFAULT_WEIGHT_DATA_EXTENSION_NAME;
        }
        BrowserDownloads.prototype.save = function (modelArtifacts) {
            return __awaiter$b(this, void 0, void 0, function () {
                var weightsURL, weightsManifest, modelTopologyAndWeightManifest, modelTopologyAndWeightManifestURL, jsonAnchor, weightDataAnchor;
                return __generator$b(this, function (_a) {
                    weightsURL = window.URL.createObjectURL(new Blob([modelArtifacts.weightData], { type: 'application/octet-stream' }));
                    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                        throw new Error('DownloadTrigger.save() does not support saving model topology ' +
                            'in binary formats yet.');
                    }
                    else {
                        weightsManifest = [{
                                paths: ['./' + this.weightDataFileName],
                                weights: modelArtifacts.weightSpecs
                            }];
                        modelTopologyAndWeightManifest = {
                            modelTopology: modelArtifacts.modelTopology,
                            weightsManifest: weightsManifest
                        };
                        modelTopologyAndWeightManifestURL = window.URL.createObjectURL(new Blob([JSON.stringify(modelTopologyAndWeightManifest)], { type: 'application/json' }));
                        jsonAnchor = this.jsonAnchor == null ? document.createElement('a') :
                            this.jsonAnchor;
                        jsonAnchor.download = this.modelTopologyFileName;
                        jsonAnchor.href = modelTopologyAndWeightManifestURL;
                        jsonAnchor.click();
                        if (modelArtifacts.weightData != null) {
                            weightDataAnchor = this.weightDataAnchor == null ?
                                document.createElement('a') :
                                this.weightDataAnchor;
                            weightDataAnchor.download = this.weightDataFileName;
                            weightDataAnchor.href = weightsURL;
                            weightDataAnchor.click();
                        }
                        return [2, { modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts) }];
                    }
                    return [2];
                });
            });
        };
        BrowserDownloads.URL_SCHEME = 'downloads://';
        return BrowserDownloads;
    }());
    var BrowserFiles = (function () {
        function BrowserFiles(files) {
            if (files == null || files.length < 1) {
                throw new Error("When calling browserFiles, at least 1 file is required, " +
                    ("but received " + files));
            }
            this.files = files;
        }
        BrowserFiles.prototype.load = function () {
            return __awaiter$b(this, void 0, void 0, function () {
                var _this = this;
                var jsonFile, weightFiles;
                return __generator$b(this, function (_a) {
                    jsonFile = this.files[0];
                    weightFiles = this.files.slice(1);
                    return [2, new Promise(function (resolve, reject) {
                            var jsonReader = new FileReader();
                            jsonReader.onload = function (event) {
                                var modelJSON = JSON.parse(event.target.result);
                                var modelTopology = modelJSON.modelTopology;
                                if (modelTopology == null) {
                                    reject(new Error("modelTopology field is missing from file " + jsonFile.name));
                                    return;
                                }
                                if (weightFiles.length === 0) {
                                    resolve({ modelTopology: modelTopology });
                                }
                                var weightsManifest = modelJSON.weightsManifest;
                                if (weightsManifest == null) {
                                    reject(new Error("weightManifest field is missing from file " + jsonFile.name));
                                    return;
                                }
                                var pathToFile;
                                try {
                                    pathToFile =
                                        _this.checkManifestAndWeightFiles(weightsManifest, weightFiles);
                                }
                                catch (err) {
                                    reject(err);
                                    return;
                                }
                                var weightSpecs = [];
                                var paths = [];
                                var perFileBuffers = [];
                                weightsManifest.forEach(function (weightsGroup) {
                                    weightsGroup.paths.forEach(function (path) {
                                        paths.push(path);
                                        perFileBuffers.push(null);
                                    });
                                    weightSpecs.push.apply(weightSpecs, weightsGroup.weights);
                                });
                                weightsManifest.forEach(function (weightsGroup) {
                                    weightsGroup.paths.forEach(function (path) {
                                        var weightFileReader = new FileReader();
                                        weightFileReader.onload = function (event) {
                                            var weightData = event.target.result;
                                            var index = paths.indexOf(path);
                                            perFileBuffers[index] = weightData;
                                            if (perFileBuffers.indexOf(null) === -1) {
                                                resolve({
                                                    modelTopology: modelTopology,
                                                    weightSpecs: weightSpecs,
                                                    weightData: concatenateArrayBuffers(perFileBuffers),
                                                });
                                            }
                                        };
                                        weightFileReader.onerror = function (error) {
                                            reject("Failed to weights data from file of path '" + path + "'.");
                                            return;
                                        };
                                        weightFileReader.readAsArrayBuffer(pathToFile[path]);
                                    });
                                });
                            };
                            jsonReader.onerror = function (error) {
                                reject("Failed to read model topology and weights manifest JSON " +
                                    ("from file '" + jsonFile.name + "'. BrowserFiles supports loading ") +
                                    "Keras-style tf.Model artifacts only.");
                                return;
                            };
                            jsonReader.readAsText(jsonFile);
                        })];
                });
            });
        };
        BrowserFiles.prototype.checkManifestAndWeightFiles = function (manifest, files) {
            var basenames = [];
            var fileNames = files.map(function (file) { return basename(file.name); });
            var pathToFile = {};
            for (var _i = 0, manifest_1 = manifest; _i < manifest_1.length; _i++) {
                var group = manifest_1[_i];
                group.paths.forEach(function (path) {
                    var pathBasename = basename(path);
                    if (basenames.indexOf(pathBasename) !== -1) {
                        throw new Error("Duplicate file basename found in weights manifest: " +
                            ("'" + pathBasename + "'"));
                    }
                    basenames.push(pathBasename);
                    if (fileNames.indexOf(pathBasename) === -1) {
                        throw new Error("Weight file with basename '" + pathBasename + "' is not provided.");
                    }
                    else {
                        pathToFile[path] = files[fileNames.indexOf(pathBasename)];
                    }
                });
            }
            if (basenames.length !== files.length) {
                throw new Error("Mismatch in the number of files in weights manifest " +
                    ("(" + basenames.length + ") and the number of weight files provided ") +
                    ("(" + files.length + ")."));
            }
            return pathToFile;
        };
        return BrowserFiles;
    }());
    var browserDownloadsRouter = function (url) {
        if (!ENV.get('IS_BROWSER')) {
            return null;
        }
        else {
            if (url.startsWith(BrowserDownloads.URL_SCHEME)) {
                return browserDownloads(url.slice(BrowserDownloads.URL_SCHEME.length));
            }
            else {
                return null;
            }
        }
    };
    IORouterRegistry.registerSaveRouter(browserDownloadsRouter);
    function browserDownloads(fileNamePrefix) {
        if (fileNamePrefix === void 0) { fileNamePrefix = 'model'; }
        return new BrowserDownloads(fileNamePrefix);
    }
    function browserFiles(files) {
        return new BrowserFiles(files);
    }

    var __awaiter$c = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$c = (undefined && undefined.__generator) || function (thisArg, body) {
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
    };
    var BrowserHTTPRequest = (function () {
        function BrowserHTTPRequest(path, requestInit) {
            this.DEFAULT_METHOD = 'POST';
            if (!ENV.get('IS_BROWSER')) {
                throw new Error('browserHTTPRequest is not supported outside the web browser.');
            }
            assert(path != null && path.length > 0, 'URL path for browserHTTPRequest must not be null, undefined or ' +
                'empty.');
            this.path = path;
            if (requestInit != null && requestInit.body != null) {
                throw new Error('requestInit is expected to have no pre-existing body, but has one.');
            }
            this.requestInit = requestInit || {};
        }
        BrowserHTTPRequest.prototype.save = function (modelArtifacts) {
            return __awaiter$c(this, void 0, void 0, function () {
                var init, weightsManifest, modelTopologyAndWeightManifest, response;
                return __generator$c(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                                throw new Error('BrowserHTTPRequest.save() does not support saving model topology ' +
                                    'in binary formats yet.');
                            }
                            init = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit);
                            init.body = new FormData();
                            weightsManifest = [{
                                    paths: ['./model.weights.bin'],
                                    weights: modelArtifacts.weightSpecs,
                                }];
                            modelTopologyAndWeightManifest = {
                                modelTopology: modelArtifacts.modelTopology,
                                weightsManifest: weightsManifest
                            };
                            init.body.append('model.json', new Blob([JSON.stringify(modelTopologyAndWeightManifest)], { type: 'application/json' }), 'model.json');
                            if (modelArtifacts.weightData != null) {
                                init.body.append('model.weights.bin', new Blob([modelArtifacts.weightData], { type: 'application/octet-stream' }), 'model.weights.bin');
                            }
                            return [4, fetch(this.path, init)];
                        case 1:
                            response = _a.sent();
                            if (response.status === 200) {
                                return [2, {
                                        modelArtifactsInfo: getModelArtifactsInfoForJSON(modelArtifacts),
                                        responses: [response],
                                    }];
                            }
                            else {
                                throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " +
                                    (response.status + "."));
                            }
                            return [2];
                    }
                });
            });
        };
        BrowserHTTPRequest.URL_SCHEMES = ['http://', 'https://'];
        return BrowserHTTPRequest;
    }());
    var httpRequestRouter = function (url) {
        if (!ENV.get('IS_BROWSER')) {
            return null;
        }
        else {
            for (var _i = 0, _a = BrowserHTTPRequest.URL_SCHEMES; _i < _a.length; _i++) {
                var scheme = _a[_i];
                if (url.startsWith(scheme)) {
                    return browserHTTPRequest(url);
                }
            }
            return null;
        }
    };
    IORouterRegistry.registerSaveRouter(httpRequestRouter);
    function browserHTTPRequest(path, requestInit) {
        return new BrowserHTTPRequest(path, requestInit);
    }

    var __awaiter$d = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step$$1(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step$$1(generator["throw"](value)); } catch (e) { reject(e); } }
            function step$$1(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step$$1((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator$d = (undefined && undefined.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step$$1([n, v]); }; }
        function step$$1(op) {
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
    };
    function loadWeights(manifest, filePathPrefix, weightNames, requestOptions) {
        if (filePathPrefix === void 0) { filePathPrefix = ''; }
        return __awaiter$d(this, void 0, void 0, function () {
            var groupIndicesToFetchMap, groupWeightsToFetch, weightsFound, allManifestWeightNames, weightsNotFound, groupIndicesToFetch, requests, responses, buffers, weightsTensorMap, bufferIndexOffset;
            return __generator$d(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        groupIndicesToFetchMap = manifest.map(function () { return false; });
                        groupWeightsToFetch = {};
                        weightsFound = weightNames != null ? weightNames.map(function () { return false; }) : [];
                        allManifestWeightNames = [];
                        manifest.forEach(function (manifestGroupConfig, groupIndex) {
                            var groupOffset = 0;
                            manifestGroupConfig.weights.forEach(function (weightsEntry) {
                                var rawDtype = ('quantization' in weightsEntry) ?
                                    weightsEntry.quantization.dtype :
                                    weightsEntry.dtype;
                                var weightsBytes = DTYPE_VALUE_SIZE_MAP[rawDtype] *
                                    sizeFromShape(weightsEntry.shape);
                                var enqueueWeightsForFetchingFn = function () {
                                    groupIndicesToFetchMap[groupIndex] = true;
                                    if (groupWeightsToFetch[groupIndex] == null) {
                                        groupWeightsToFetch[groupIndex] = [];
                                    }
                                    groupWeightsToFetch[groupIndex].push({
                                        manifestEntry: weightsEntry,
                                        groupOffset: groupOffset,
                                        sizeBytes: weightsBytes
                                    });
                                };
                                if (weightNames != null) {
                                    weightNames.forEach(function (weightName, weightIndex) {
                                        if (weightName === weightsEntry.name) {
                                            enqueueWeightsForFetchingFn();
                                            weightsFound[weightIndex] = true;
                                        }
                                    });
                                }
                                else {
                                    enqueueWeightsForFetchingFn();
                                }
                                allManifestWeightNames.push(weightsEntry.name);
                                groupOffset += weightsBytes;
                            });
                        });
                        if (!weightsFound.every(function (found) { return found; })) {
                            weightsNotFound = weightNames.filter(function (weight, i) { return !weightsFound[i]; });
                            throw new Error("Could not find weights in manifest with names: " +
                                (weightsNotFound.join(', ') + ". \n") +
                                "Manifest JSON has weights with names: " +
                                (allManifestWeightNames.join(', ') + "."));
                        }
                        groupIndicesToFetch = groupIndicesToFetchMap.reduce(function (accumulator, shouldFetch, i) {
                            if (shouldFetch) {
                                accumulator.push(i);
                            }
                            return accumulator;
                        }, []);
                        requests = [];
                        groupIndicesToFetch.forEach(function (i) {
                            manifest[i].paths.forEach(function (filepath) {
                                var fetchUrl = filePathPrefix +
                                    (!filePathPrefix.endsWith('/') ? '/' : '') + filepath;
                                requests.push(fetch(fetchUrl, requestOptions));
                            });
                        });
                        return [4, Promise.all(requests)];
                    case 1:
                        responses = _a.sent();
                        return [4, Promise.all(responses.map(function (response) { return response.arrayBuffer(); }))];
                    case 2:
                        buffers = _a.sent();
                        weightsTensorMap = {};
                        bufferIndexOffset = 0;
                        groupIndicesToFetch.forEach(function (i) {
                            var numBuffers = manifest[i].paths.length;
                            var groupBytes = 0;
                            for (var i_1 = 0; i_1 < numBuffers; i_1++) {
                                groupBytes += buffers[bufferIndexOffset + i_1].byteLength;
                            }
                            var groupBuffer = new ArrayBuffer(groupBytes);
                            var groupByteBuffer = new Uint8Array(groupBuffer);
                            var groupBufferOffset = 0;
                            for (var i_2 = 0; i_2 < numBuffers; i_2++) {
                                var buffer$$1 = new Uint8Array(buffers[bufferIndexOffset + i_2]);
                                groupByteBuffer.set(buffer$$1, groupBufferOffset);
                                groupBufferOffset += buffer$$1.byteLength;
                            }
                            var weightsEntries = groupWeightsToFetch[i];
                            weightsEntries.forEach(function (weightsEntry) {
                                var byteBuffer = groupBuffer.slice(weightsEntry.groupOffset, weightsEntry.groupOffset + weightsEntry.sizeBytes);
                                var typedArray;
                                var dtype = weightsEntry.manifestEntry.dtype;
                                if ('quantization' in weightsEntry.manifestEntry) {
                                    var quantization_1 = weightsEntry.manifestEntry.quantization;
                                    if (quantization_1.dtype !== 'uint8' && quantization_1.dtype !== 'uint16') {
                                        throw new Error("Weight " + weightsEntry.manifestEntry.name + " has unknown " +
                                            ("quantization dtype " + quantization_1.dtype + "."));
                                    }
                                    var quantizedArray = (quantization_1.dtype === 'uint8') ?
                                        new Uint8Array(byteBuffer) :
                                        new Uint16Array(byteBuffer);
                                    if (dtype === 'float32') {
                                        typedArray = Float32Array.from(quantizedArray, function (v) { return v * quantization_1.scale + quantization_1.min; });
                                    }
                                    else if (dtype === 'int32') {
                                        typedArray = Int32Array.from(quantizedArray, function (v) { return Math.round(v * quantization_1.scale + quantization_1.min); });
                                    }
                                    else {
                                        throw new Error("Weight " + weightsEntry.manifestEntry.name + " has a dtype not " +
                                            ("supported by quantization: " + dtype));
                                    }
                                }
                                else {
                                    if (dtype === 'float32') {
                                        typedArray = new Float32Array(byteBuffer);
                                    }
                                    else if (dtype === 'int32') {
                                        typedArray = new Int32Array(byteBuffer);
                                    }
                                    else {
                                        throw new Error("Weight " + weightsEntry.manifestEntry.name + " has unknown dtype " +
                                            (dtype + "."));
                                    }
                                }
                                var weightName = weightsEntry.manifestEntry.name;
                                if (weightsTensorMap[weightName] != null) {
                                    throw new Error("Duplicate weight with name " + weightName + ". " +
                                        "Please make sure weights names are unique in the manifest JSON.");
                                }
                                weightsTensorMap[weightName] = tensor(typedArray, weightsEntry.manifestEntry.shape, weightsEntry.manifestEntry.dtype);
                            });
                            bufferIndexOffset += numBuffers;
                        });
                        return [2, weightsTensorMap];
                }
            });
        });
    }

    var registerSaveRouter = IORouterRegistry.registerSaveRouter;
    var registerLoadRouter = IORouterRegistry.registerLoadRouter;
    var getSaveHandlers = IORouterRegistry.getSaveHandlers;
    var getLoadHandlers = IORouterRegistry.getLoadHandlers;

    var io = /*#__PURE__*/Object.freeze({
        browserFiles: browserFiles,
        browserHTTPRequest: browserHTTPRequest,
        copyModel: copyModel,
        decodeWeights: decodeWeights,
        encodeWeights: encodeWeights,
        getLoadHandlers: getLoadHandlers,
        getSaveHandlers: getSaveHandlers,
        listModels: listModels,
        loadWeights: loadWeights,
        moveModel: moveModel,
        registerLoadRouter: registerLoadRouter,
        registerSaveRouter: registerSaveRouter,
        removeModel: removeModel
    });

    var Serializable = (function () {
        function Serializable() {
        }
        Serializable.prototype.getClassName = function () {
            return this.constructor
                .className;
        };
        Serializable.fromConfig = function (cls, config) {
            return new cls(config);
        };
        return Serializable;
    }());
    var SerializationMap = (function () {
        function SerializationMap() {
            this.classNameMap = {};
        }
        SerializationMap.getMap = function () {
            if (SerializationMap.instance == null) {
                SerializationMap.instance = new SerializationMap();
            }
            return SerializationMap.instance;
        };
        SerializationMap.register = function (cls) {
            this.getMap().classNameMap[cls.className] = [cls, cls.fromConfig];
        };
        return SerializationMap;
    }());

    var serialization = /*#__PURE__*/Object.freeze({
        Serializable: Serializable,
        SerializationMap: SerializationMap
    });

    var WEBGL_ENVS = {
        'BACKEND': 'test-webgl'
    };
    var CPU_ENVS = {
        'BACKEND': 'test-cpu'
    };
    var ALL_ENVS = {};
    var TEST_EPSILON = 1e-3;
    function expectArraysClose(actual, expected, epsilon) {
        if (epsilon === void 0) { epsilon = TEST_EPSILON; }
        if (!(actual instanceof Tensor) && !(expected instanceof Tensor)) {
            var aType = actual.constructor.name;
            var bType = expected.constructor.name;
            if (aType !== bType) {
                throw new Error("Arrays are of different type actual: " + aType + " " +
                    ("vs expected: " + bType));
            }
        }
        else if (actual instanceof Tensor && expected instanceof Tensor) {
            if (actual.dtype !== expected.dtype) {
                throw new Error("Arrays are of different type actual: " + actual.dtype + " " +
                    ("vs expected: " + expected.dtype + "."));
            }
            if (!arraysEqual(actual.shape, expected.shape)) {
                throw new Error("Arrays are of different shape actual: " + actual.shape + " " +
                    ("vs expected: " + expected.shape + "."));
            }
        }
        var actualValues;
        var expectedValues;
        if (actual instanceof Tensor) {
            actualValues = actual.dataSync();
        }
        else {
            actualValues = actual;
        }
        if (expected instanceof Tensor) {
            expectedValues = expected.dataSync();
        }
        else {
            expectedValues = expected;
        }
        if (actualValues.length !== expectedValues.length) {
            throw new Error("Arrays have different lengths actual: " + actualValues.length + " vs " +
                ("expected: " + expectedValues.length + ".\n") +
                ("Actual:   " + actualValues + ".\n") +
                ("Expected: " + expectedValues + "."));
        }
        for (var i = 0; i < expectedValues.length; ++i) {
            var a = actualValues[i];
            var e = expectedValues[i];
            if (!areClose(a, Number(e), epsilon)) {
                throw new Error("Arrays differ: actual[" + i + "] = " + a + ", expected[" + i + "] = " + e + ".\n" +
                    ("Actual:   " + actualValues + ".\n") +
                    ("Expected: " + expectedValues + "."));
            }
        }
    }
    function expectPromiseToFail(fn, done) {
        fn().then(function () { return done.fail(); }, function () { return done(); });
    }
    function expectArraysEqual(actual, expected) {
        return expectArraysClose(actual, expected, 0);
    }
    function expectNumbersClose(a, e, epsilon) {
        if (epsilon === void 0) { epsilon = TEST_EPSILON; }
        if (!areClose(a, e, epsilon)) {
            throw new Error("Numbers differ: actual === " + a + ", expected === " + e);
        }
    }
    function areClose(a, e, epsilon) {
        if (isNaN(a) && isNaN(e)) {
            return true;
        }
        if (isNaN(a) || isNaN(e) || Math.abs(a - e) > epsilon) {
            return false;
        }
        return true;
    }
    function expectValuesInRange(actual, low, high) {
        var actualVals;
        if (actual instanceof Tensor) {
            actualVals = actual.dataSync();
        }
        else {
            actualVals = actual;
        }
        for (var i = 0; i < actualVals.length; i++) {
            if (actualVals[i] < low || actualVals[i] > high) {
                throw new Error("Value out of range:" + actualVals[i] + " low: " + low + ", high: " + high);
            }
        }
    }

    var test_util = /*#__PURE__*/Object.freeze({
        WEBGL_ENVS: WEBGL_ENVS,
        CPU_ENVS: CPU_ENVS,
        ALL_ENVS: ALL_ENVS,
        TEST_EPSILON: TEST_EPSILON,
        expectArraysClose: expectArraysClose,
        expectPromiseToFail: expectPromiseToFail,
        expectArraysEqual: expectArraysEqual,
        expectNumbersClose: expectNumbersClose,
        expectValuesInRange: expectValuesInRange
    });

    var version = '0.11.0';



    var webgl = /*#__PURE__*/Object.freeze({
        gpgpu_util: gpgpu_util,
        webgl_util: webgl_util,
        MathBackendWebGL: MathBackendWebGL,
        GPGPUContext: GPGPUContext
    });

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$s = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Optimizer = (function (_super) {
        __extends$1(Optimizer, _super);
        function Optimizer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Optimizer.prototype.minimize = function (f, returnCost, varList) {
            if (returnCost === void 0) { returnCost = false; }
            var _a = this.computeGradients(f, varList), value = _a.value, grads$$1 = _a.grads;
            this.applyGradients(grads$$1);
            var varNames = Object.keys(grads$$1);
            varNames.forEach(function (varName) { return grads$$1[varName].dispose(); });
            if (returnCost) {
                return value;
            }
            else {
                value.dispose();
                return null;
            }
        };
        Optimizer.prototype.computeGradients = function (f, varList) {
            return variableGrads(f, varList);
        };
        __decorate$s([
            doc({ heading: 'Training', subheading: 'Optimizers' })
        ], Optimizer.prototype, "minimize", null);
        Optimizer = __decorate$s([
            doc({ heading: 'Training', subheading: 'Classes', namespace: 'train' })
        ], Optimizer);
        return Optimizer;
    }(Serializable));

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AdadeltaOptimizer = (function (_super) {
        __extends$2(AdadeltaOptimizer, _super);
        function AdadeltaOptimizer(learningRate, rho, epsilon) {
            if (epsilon === void 0) { epsilon = 1e-8; }
            var _this = _super.call(this) || this;
            _this.learningRate = learningRate;
            _this.rho = rho;
            _this.epsilon = epsilon;
            _this.accumulatedGrads = {};
            _this.accumulatedUpdates = {};
            _this.c = keep(scalar(-learningRate));
            _this.epsilonScalar = keep(scalar(epsilon));
            _this.rhoScalar = keep(scalar(rho));
            _this.oneMinusRho = keep(scalar(1 - rho));
            return _this;
        }
        AdadeltaOptimizer.prototype.applyGradients = function (variableGradients) {
            var _this = this;
            var _loop_1 = function (variableName) {
                var value = ENV.engine.registeredVariables[variableName];
                if (this_1.accumulatedGrads[variableName] == null) {
                    var trainable_1 = false;
                    tidy(function () {
                        _this.accumulatedGrads[variableName] =
                            zerosLike(value).variable(trainable_1);
                    });
                }
                if (this_1.accumulatedUpdates[variableName] == null) {
                    var trainable_2 = false;
                    tidy(function () {
                        _this.accumulatedUpdates[variableName] =
                            zerosLike(value).variable(trainable_2);
                    });
                }
                var gradient = variableGradients[variableName];
                var accumulatedGrad = this_1.accumulatedGrads[variableName];
                var accumulatedUpdate = this_1.accumulatedUpdates[variableName];
                tidy(function () {
                    var newAccumulatedGrad = _this.rhoScalar.mul(accumulatedGrad)
                        .add(_this.oneMinusRho.mul(gradient.square()));
                    var updates = accumulatedUpdate.add(_this.epsilonScalar)
                        .sqrt()
                        .div(accumulatedGrad.add(_this.epsilonScalar).sqrt())
                        .mul(gradient);
                    var newAccumulatedUpdate = _this.rhoScalar.mul(accumulatedUpdate)
                        .add(_this.oneMinusRho.mul(updates.square()));
                    _this.accumulatedGrads[variableName].assign(newAccumulatedGrad);
                    _this.accumulatedUpdates[variableName].assign(newAccumulatedUpdate);
                    var newValue = _this.c.mul(updates).add(value);
                    value.assign(newValue);
                });
            };
            var this_1 = this;
            for (var variableName in variableGradients) {
                _loop_1(variableName);
            }
        };
        AdadeltaOptimizer.prototype.dispose = function () {
            var _this = this;
            this.c.dispose();
            this.epsilonScalar.dispose();
            this.rhoScalar.dispose();
            this.oneMinusRho.dispose();
            if (this.accumulatedUpdates != null) {
                Object.keys(this.accumulatedUpdates)
                    .forEach(function (name) { return _this.accumulatedUpdates[name].dispose(); });
                Object.keys(this.accumulatedGrads)
                    .forEach(function (name) { return _this.accumulatedGrads[name].dispose(); });
            }
        };
        AdadeltaOptimizer.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                rho: this.rho,
                epsilon: this.epsilon
            };
        };
        AdadeltaOptimizer.fromConfig = function (cls, config) {
            return new cls(config.learningRate, config.rho, config.epsilon);
        };
        AdadeltaOptimizer.className = 'AdadeltaOptimizer';
        return AdadeltaOptimizer;
    }(Optimizer));
    SerializationMap.register(AdadeltaOptimizer);

    var __extends$3 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AdagradOptimizer = (function (_super) {
        __extends$3(AdagradOptimizer, _super);
        function AdagradOptimizer(learningRate, initialAccumulatorValue) {
            if (initialAccumulatorValue === void 0) { initialAccumulatorValue = 0.1; }
            var _this = _super.call(this) || this;
            _this.learningRate = learningRate;
            _this.initialAccumulatorValue = initialAccumulatorValue;
            _this.accumulatedGrads = {};
            _this.c = keep(scalar(-learningRate));
            _this.epsilon = keep(scalar(1e-8));
            return _this;
        }
        AdagradOptimizer.prototype.applyGradients = function (variableGradients) {
            var _this = this;
            var _loop_1 = function (variableName) {
                var value = ENV.engine.registeredVariables[variableName];
                if (this_1.accumulatedGrads[variableName] == null) {
                    var trainable_1 = false;
                    tidy(function () {
                        _this.accumulatedGrads[variableName] =
                            fill(value.shape, _this.initialAccumulatorValue)
                                .variable(trainable_1);
                    });
                }
                var gradient = variableGradients[variableName];
                var accumulatedGrad = this_1.accumulatedGrads[variableName];
                tidy(function () {
                    var newAccumulatedGrad = accumulatedGrad.add(gradient.square());
                    _this.accumulatedGrads[variableName].assign(newAccumulatedGrad);
                    var newValue = _this.c
                        .mul(gradient.div(newAccumulatedGrad.add(_this.epsilon).sqrt()))
                        .add(value);
                    value.assign(newValue);
                });
            };
            var this_1 = this;
            for (var variableName in variableGradients) {
                _loop_1(variableName);
            }
        };
        AdagradOptimizer.prototype.dispose = function () {
            var _this = this;
            this.epsilon.dispose();
            this.c.dispose();
            if (this.accumulatedGrads != null) {
                Object.keys(this.accumulatedGrads)
                    .forEach(function (name) { return _this.accumulatedGrads[name].dispose(); });
            }
        };
        AdagradOptimizer.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                initialAccumulatorValue: this.initialAccumulatorValue,
            };
        };
        AdagradOptimizer.fromConfig = function (cls, config) {
            return new cls(config.learningRate, config.initialAccumulatorValue);
        };
        AdagradOptimizer.className = 'AdagradOptimizer';
        return AdagradOptimizer;
    }(Optimizer));
    SerializationMap.register(AdagradOptimizer);

    var __extends$4 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AdamOptimizer = (function (_super) {
        __extends$4(AdamOptimizer, _super);
        function AdamOptimizer(learningRate, beta1, beta2, epsilon) {
            if (epsilon === void 0) { epsilon = 1e-8; }
            var _this = _super.call(this) || this;
            _this.learningRate = learningRate;
            _this.beta1 = beta1;
            _this.beta2 = beta2;
            _this.epsilon = epsilon;
            _this.accumulatedFirstMoment = {};
            _this.accumulatedSecondMoment = {};
            _this.c = keep(scalar(-learningRate));
            _this.epsScalar = keep(scalar(epsilon));
            _this.beta1Scalar = keep(scalar(beta1));
            _this.beta2Scalar = keep(scalar(beta2));
            tidy(function () {
                _this.accBeta1 = scalar(beta1).variable();
                _this.accBeta2 = scalar(beta2).variable();
            });
            _this.oneMinusBeta1 = keep(scalar(1 - beta1));
            _this.oneMinusBeta2 = keep(scalar(1 - beta2));
            _this.one = keep(scalar(1));
            return _this;
        }
        AdamOptimizer.prototype.applyGradients = function (variableGradients) {
            var _this = this;
            tidy(function () {
                var oneMinusAccBeta1 = _this.one.sub(_this.accBeta1);
                var oneMinusAccBeta2 = _this.one.sub(_this.accBeta2);
                for (var variableName in variableGradients) {
                    var value = ENV.engine.registeredVariables[variableName];
                    if (_this.accumulatedFirstMoment[variableName] == null) {
                        var trainable = false;
                        _this.accumulatedFirstMoment[variableName] =
                            zerosLike(value).variable(trainable);
                    }
                    if (_this.accumulatedSecondMoment[variableName] == null) {
                        var trainable = false;
                        _this.accumulatedSecondMoment[variableName] =
                            zerosLike(value).variable(trainable);
                    }
                    var gradient = variableGradients[variableName];
                    var firstMoment = _this.accumulatedFirstMoment[variableName];
                    var secondMoment = _this.accumulatedSecondMoment[variableName];
                    var newFirstMoment = _this.beta1Scalar.mul(firstMoment)
                        .add(_this.oneMinusBeta1.mul(gradient));
                    var newSecondMoment = _this.beta2Scalar.mul(secondMoment)
                        .add(_this.oneMinusBeta2.mul(gradient.square()));
                    var biasCorrectedFirstMoment = newFirstMoment.div(oneMinusAccBeta1);
                    var biasCorrectedSecondMoment = newSecondMoment.div(oneMinusAccBeta2);
                    _this.accumulatedFirstMoment[variableName].assign(newFirstMoment);
                    _this.accumulatedSecondMoment[variableName].assign(newSecondMoment);
                    var newValue = _this.c
                        .mul(biasCorrectedFirstMoment.div(_this.epsScalar.add(biasCorrectedSecondMoment.sqrt())))
                        .add(value);
                    value.assign(newValue);
                }
                _this.accBeta1.assign(_this.accBeta1.mul(_this.beta1Scalar));
                _this.accBeta2.assign(_this.accBeta2.mul(_this.beta2Scalar));
            });
        };
        AdamOptimizer.prototype.dispose = function () {
            var _this = this;
            this.c.dispose();
            this.epsScalar.dispose();
            this.beta1Scalar.dispose();
            this.beta2Scalar.dispose();
            this.accBeta1.dispose();
            this.accBeta2.dispose();
            this.oneMinusBeta1.dispose();
            this.oneMinusBeta2.dispose();
            this.one.dispose();
            if (this.accumulatedFirstMoment != null) {
                Object.keys(this.accumulatedFirstMoment)
                    .forEach(function (name) { return _this.accumulatedFirstMoment[name].dispose(); });
            }
            if (this.accumulatedSecondMoment != null) {
                Object.keys(this.accumulatedSecondMoment)
                    .forEach(function (name) { return _this.accumulatedSecondMoment[name].dispose(); });
            }
        };
        AdamOptimizer.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon,
            };
        };
        AdamOptimizer.fromConfig = function (cls, config) {
            return new cls(config.learningRate, config.beta1, config.beta2, config.epsilon);
        };
        AdamOptimizer.className = 'AdamOptimizer';
        return AdamOptimizer;
    }(Optimizer));
    SerializationMap.register(AdamOptimizer);

    var __extends$5 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var AdamaxOptimizer = (function (_super) {
        __extends$5(AdamaxOptimizer, _super);
        function AdamaxOptimizer(learningRate, beta1, beta2, epsilon, decay) {
            if (epsilon === void 0) { epsilon = 1e-8; }
            if (decay === void 0) { decay = 0.0; }
            var _this = _super.call(this) || this;
            _this.learningRate = learningRate;
            _this.beta1 = beta1;
            _this.beta2 = beta2;
            _this.epsilon = epsilon;
            _this.decay = decay;
            _this.accumulatedFirstMoment = {};
            _this.accumulatedWeightedInfNorm = {};
            _this.c = keep(scalar(-learningRate));
            _this.epsScalar = keep(scalar(epsilon));
            _this.beta1Scalar = keep(scalar(beta1));
            _this.beta2Scalar = keep(scalar(beta2));
            _this.decayScalar = keep(scalar(decay));
            tidy(function () {
                _this.iteration = scalar(0).variable();
                _this.accBeta1 = scalar(beta1).variable();
            });
            _this.oneMinusBeta1 = keep(scalar(1 - beta1));
            _this.one = keep(scalar(1));
            return _this;
        }
        AdamaxOptimizer.prototype.applyGradients = function (variableGradients) {
            var _this = this;
            tidy(function () {
                var oneMinusAccBeta1 = _this.one.sub(_this.accBeta1);
                var lr = _this.c.div(_this.one.add(_this.decayScalar.mul(_this.iteration)));
                for (var variableName in variableGradients) {
                    var value = ENV.engine.registeredVariables[variableName];
                    if (_this.accumulatedFirstMoment[variableName] == null) {
                        var trainable = false;
                        _this.accumulatedFirstMoment[variableName] =
                            zerosLike(value).variable(trainable);
                    }
                    if (_this.accumulatedWeightedInfNorm[variableName] == null) {
                        var trainable = false;
                        _this.accumulatedWeightedInfNorm[variableName] =
                            zerosLike(value).variable(trainable);
                    }
                    var gradient = variableGradients[variableName];
                    var firstMoment = _this.accumulatedFirstMoment[variableName];
                    var weightedInfNorm = _this.accumulatedWeightedInfNorm[variableName];
                    var newFirstMoment = _this.beta1Scalar.mul(firstMoment)
                        .add(_this.oneMinusBeta1.mul(gradient));
                    var ut0 = _this.beta2Scalar.mul(weightedInfNorm);
                    var ut1 = gradient.abs();
                    var newWeightedInfNorm = ut0.maximum(ut1);
                    _this.accumulatedFirstMoment[variableName].assign(newFirstMoment);
                    _this.accumulatedWeightedInfNorm[variableName].assign(newWeightedInfNorm);
                    var newValue = lr.div(oneMinusAccBeta1)
                        .mul(newFirstMoment.div(_this.epsScalar.add(newWeightedInfNorm)))
                        .add(value);
                    value.assign(newValue);
                }
                _this.iteration.assign(_this.iteration.add(_this.one));
                _this.accBeta1.assign(_this.accBeta1.mul(_this.beta1Scalar));
            });
        };
        AdamaxOptimizer.prototype.dispose = function () {
            var _this = this;
            this.c.dispose();
            this.epsScalar.dispose();
            this.accBeta1.dispose();
            this.beta1Scalar.dispose();
            this.beta2Scalar.dispose();
            this.oneMinusBeta1.dispose();
            this.decayScalar.dispose();
            this.iteration.dispose();
            this.one.dispose();
            if (this.accumulatedFirstMoment != null) {
                Object.keys(this.accumulatedFirstMoment)
                    .forEach(function (name) { return _this.accumulatedFirstMoment[name].dispose(); });
            }
            if (this.accumulatedWeightedInfNorm != null) {
                Object.keys(this.accumulatedWeightedInfNorm)
                    .forEach(function (name) { return _this.accumulatedWeightedInfNorm[name].dispose(); });
            }
        };
        AdamaxOptimizer.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon,
                decay: this.decay
            };
        };
        AdamaxOptimizer.fromConfig = function (cls, config) {
            return new cls(config.learningRate, config.beta1, config.beta2, config.epsilon, config.decay);
        };
        AdamaxOptimizer.className = 'AdamaxOptimizer';
        return AdamaxOptimizer;
    }(Optimizer));
    SerializationMap.register(AdamaxOptimizer);

    var __extends$6 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var SGDOptimizer = (function (_super) {
        __extends$6(SGDOptimizer, _super);
        function SGDOptimizer(learningRate) {
            var _this = _super.call(this) || this;
            _this.learningRate = learningRate;
            _this.setLearningRate(learningRate);
            return _this;
        }
        SGDOptimizer.prototype.applyGradients = function (variableGradients) {
            var _this = this;
            var varNames = Object.keys(variableGradients);
            varNames.forEach(function (varName) {
                var gradient = variableGradients[varName];
                var value = ENV.engine.registeredVariables[varName];
                tidy(function () {
                    var newValue = _this.c.mul(gradient).add(value);
                    value.assign(newValue);
                });
            });
        };
        SGDOptimizer.prototype.setLearningRate = function (learningRate) {
            this.learningRate = learningRate;
            if (this.c != null) {
                this.c.dispose();
            }
            this.c = keep(scalar(-learningRate));
        };
        SGDOptimizer.prototype.dispose = function () {
            this.c.dispose();
        };
        SGDOptimizer.prototype.getConfig = function () {
            return { learningRate: this.learningRate };
        };
        SGDOptimizer.fromConfig = function (cls, config) {
            return new cls(config.learningRate);
        };
        SGDOptimizer.className = 'SGDOptimizer';
        return SGDOptimizer;
    }(Optimizer));
    SerializationMap.register(SGDOptimizer);

    var __extends$7 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var MomentumOptimizer = (function (_super) {
        __extends$7(MomentumOptimizer, _super);
        function MomentumOptimizer(learningRate, momentum, useNesterov) {
            if (useNesterov === void 0) { useNesterov = false; }
            var _this = _super.call(this, learningRate) || this;
            _this.learningRate = learningRate;
            _this.momentum = momentum;
            _this.useNesterov = useNesterov;
            _this.m = scalar(_this.momentum);
            _this.accumulations = {};
            return _this;
        }
        MomentumOptimizer.prototype.applyGradients = function (variableGradients) {
            var _this = this;
            var _loop_1 = function (variableName) {
                var value = ENV.engine.registeredVariables[variableName];
                if (this_1.accumulations[variableName] == null) {
                    var trainable_1 = false;
                    tidy(function () {
                        _this.accumulations[variableName] =
                            zerosLike(value).variable(trainable_1);
                    });
                }
                var accumulation = this_1.accumulations[variableName];
                var gradient = variableGradients[variableName];
                tidy(function () {
                    var newValue;
                    var newAccumulation = _this.m.mul(accumulation).add(gradient);
                    if (_this.useNesterov) {
                        newValue =
                            _this.c.mul(gradient.add(newAccumulation.mul(_this.m))).add(value);
                    }
                    else {
                        newValue = _this.c.mul(newAccumulation).add(value);
                    }
                    _this.accumulations[variableName].assign(newAccumulation);
                    value.assign(newValue);
                });
            };
            var this_1 = this;
            for (var variableName in variableGradients) {
                _loop_1(variableName);
            }
        };
        MomentumOptimizer.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.m.dispose();
            if (this.accumulations != null) {
                for (var variableName in this.accumulations) {
                    this.accumulations[variableName].dispose();
                }
            }
        };
        MomentumOptimizer.prototype.setMomentum = function (momentum) {
            this.momentum = momentum;
        };
        MomentumOptimizer.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                momentum: this.momentum,
                useNesterov: this.useNesterov
            };
        };
        MomentumOptimizer.fromConfig = function (cls, config) {
            return new cls(config.learningRate, config.momentum, config.useNesterov);
        };
        MomentumOptimizer.className = 'MomentumOptimizer';
        return MomentumOptimizer;
    }(SGDOptimizer));
    SerializationMap.register(MomentumOptimizer);

    var __extends$8 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var RMSPropOptimizer = (function (_super) {
        __extends$8(RMSPropOptimizer, _super);
        function RMSPropOptimizer(learningRate, decay, momentum, epsilon, centered) {
            if (decay === void 0) { decay = 0.9; }
            if (momentum === void 0) { momentum = 0.0; }
            if (epsilon === void 0) { epsilon = 1e-8; }
            if (centered === void 0) { centered = false; }
            var _this = _super.call(this) || this;
            _this.learningRate = learningRate;
            _this.decay = decay;
            _this.momentum = momentum;
            _this.epsilon = epsilon;
            _this.accumulatedMeanSquares = {};
            _this.accumulatedMeanGrads = {};
            _this.accumulatedMoments = {};
            _this.c = keep(scalar(learningRate));
            _this.epsilonScalar = keep(scalar(epsilon));
            _this.decayScalar = keep(scalar(decay));
            _this.momentumScalar = keep(scalar(momentum));
            _this.oneMinusDecay = keep(scalar(1 - decay));
            _this.centered = centered;
            return _this;
        }
        RMSPropOptimizer.prototype.applyGradients = function (variableGradients) {
            var _this = this;
            var _loop_1 = function (variableName) {
                var value = ENV.engine.registeredVariables[variableName];
                if (this_1.accumulatedMeanSquares[variableName] == null) {
                    var trainable_1 = false;
                    tidy(function () {
                        _this.accumulatedMeanSquares[variableName] =
                            zerosLike(value).variable(trainable_1);
                    });
                }
                if (this_1.accumulatedMeanGrads[variableName] == null && this_1.centered) {
                    var trainable_2 = false;
                    tidy(function () {
                        _this.accumulatedMeanGrads[variableName] =
                            zerosLike(value).variable(trainable_2);
                    });
                }
                if (this_1.accumulatedMoments[variableName] == null) {
                    var trainable_3 = false;
                    tidy(function () {
                        _this.accumulatedMoments[variableName] =
                            zerosLike(value).variable(trainable_3);
                    });
                }
                var accumulatedMeanSquare = this_1.accumulatedMeanSquares[variableName];
                var accumulatedMeanGrad = this_1.accumulatedMeanGrads[variableName];
                var accumulatedMoments = this_1.accumulatedMoments[variableName];
                var gradient = variableGradients[variableName];
                tidy(function () {
                    var newAccumulatedMeanSquare = _this.decayScalar.mul(accumulatedMeanSquare)
                        .add(_this.oneMinusDecay.mul(gradient.square()));
                    if (_this.centered) {
                        var newAccumulatedMeanGrad = _this.decayScalar.mul(accumulatedMeanGrad)
                            .add(_this.oneMinusDecay.mul(gradient));
                        var newAccumulatedMoments = _this.momentumScalar.mul(accumulatedMoments)
                            .add(_this.c.mul(gradient).div(newAccumulatedMeanSquare
                            .sub(newAccumulatedMeanGrad.square().add(_this.epsilonScalar))
                            .sqrt()));
                        _this.accumulatedMeanSquares[variableName].assign(newAccumulatedMeanSquare);
                        _this.accumulatedMeanGrads[variableName].assign(newAccumulatedMeanGrad);
                        _this.accumulatedMoments[variableName].assign(newAccumulatedMoments);
                        var newValue = value.sub(newAccumulatedMoments);
                        value.assign(newValue);
                    }
                    else {
                        var newAccumulatedMeanSquare_1 = _this.decayScalar.mul(accumulatedMeanSquare)
                            .add(_this.oneMinusDecay.mul(gradient.square()));
                        var newAccumulatedMoments = _this.momentumScalar.mul(accumulatedMoments)
                            .add(_this.c.mul(gradient).div(newAccumulatedMeanSquare_1.add(_this.epsilonScalar).sqrt()));
                        _this.accumulatedMeanSquares[variableName].assign(newAccumulatedMeanSquare_1);
                        _this.accumulatedMoments[variableName].assign(newAccumulatedMoments);
                        var newValue = value.sub(newAccumulatedMoments);
                        value.assign(newValue);
                    }
                });
            };
            var this_1 = this;
            for (var variableName in variableGradients) {
                _loop_1(variableName);
            }
        };
        RMSPropOptimizer.prototype.dispose = function () {
            var _this = this;
            this.c.dispose();
            this.epsilonScalar.dispose();
            this.decayScalar.dispose();
            this.momentumScalar.dispose();
            this.oneMinusDecay.dispose();
            if (this.accumulatedMeanSquares != null) {
                Object.keys(this.accumulatedMeanSquares)
                    .forEach(function (name) { return _this.accumulatedMeanSquares[name].dispose(); });
            }
            if (this.accumulatedMeanGrads != null && this.centered) {
                Object.keys(this.accumulatedMeanGrads)
                    .forEach(function (name) { return _this.accumulatedMeanGrads[name].dispose(); });
            }
            if (this.accumulatedMoments != null) {
                Object.keys(this.accumulatedMoments)
                    .forEach(function (name) { return _this.accumulatedMoments[name].dispose(); });
            }
        };
        RMSPropOptimizer.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                decay: this.decay,
                momentum: this.momentum,
                epsilon: this.epsilon,
                centered: this.centered
            };
        };
        RMSPropOptimizer.fromConfig = function (cls, config) {
            return new cls(config.learningRate, config.decay, config.momentum, config.epsilon, config.centered);
        };
        RMSPropOptimizer.className = 'RMSPropOptimizer';
        return RMSPropOptimizer;
    }(Optimizer));
    SerializationMap.register(RMSPropOptimizer);

    var __decorate$t = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var OptimizerConstructors = (function () {
        function OptimizerConstructors() {
        }
        OptimizerConstructors.sgd = function (learningRate) {
            return new SGDOptimizer(learningRate);
        };
        OptimizerConstructors.momentum = function (learningRate, momentum, useNesterov) {
            if (useNesterov === void 0) { useNesterov = false; }
            return new MomentumOptimizer(learningRate, momentum, useNesterov);
        };
        OptimizerConstructors.rmsprop = function (learningRate, decay, momentum, epsilon, centered) {
            if (decay === void 0) { decay = .9; }
            if (momentum === void 0) { momentum = 0.0; }
            if (epsilon === void 0) { epsilon = 1e-8; }
            if (centered === void 0) { centered = false; }
            return new RMSPropOptimizer(learningRate, decay, momentum, epsilon, centered);
        };
        OptimizerConstructors.adam = function (learningRate, beta1, beta2, epsilon) {
            if (learningRate === void 0) { learningRate = 0.001; }
            if (beta1 === void 0) { beta1 = 0.9; }
            if (beta2 === void 0) { beta2 = 0.999; }
            if (epsilon === void 0) { epsilon = 1e-8; }
            return new AdamOptimizer(learningRate, beta1, beta2, epsilon);
        };
        OptimizerConstructors.adadelta = function (learningRate, rho, epsilon) {
            if (learningRate === void 0) { learningRate = .001; }
            if (rho === void 0) { rho = .95; }
            if (epsilon === void 0) { epsilon = 1e-8; }
            return new AdadeltaOptimizer(learningRate, rho, epsilon);
        };
        OptimizerConstructors.adamax = function (learningRate, beta1, beta2, epsilon, decay) {
            if (learningRate === void 0) { learningRate = 0.002; }
            if (beta1 === void 0) { beta1 = 0.9; }
            if (beta2 === void 0) { beta2 = 0.999; }
            if (epsilon === void 0) { epsilon = 1e-8; }
            if (decay === void 0) { decay = 0.0; }
            return new AdamaxOptimizer(learningRate, beta1, beta2, epsilon, decay);
        };
        OptimizerConstructors.adagrad = function (learningRate, initialAccumulatorValue) {
            if (initialAccumulatorValue === void 0) { initialAccumulatorValue = 0.1; }
            return new AdagradOptimizer(learningRate, initialAccumulatorValue);
        };
        __decorate$t([
            doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
        ], OptimizerConstructors, "sgd", null);
        __decorate$t([
            doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
        ], OptimizerConstructors, "momentum", null);
        __decorate$t([
            doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
        ], OptimizerConstructors, "rmsprop", null);
        __decorate$t([
            doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
        ], OptimizerConstructors, "adam", null);
        __decorate$t([
            doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
        ], OptimizerConstructors, "adadelta", null);
        __decorate$t([
            doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
        ], OptimizerConstructors, "adamax", null);
        __decorate$t([
            doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
        ], OptimizerConstructors, "adagrad", null);
        return OptimizerConstructors;
    }());

    var train = {
        sgd: OptimizerConstructors.sgd,
        momentum: OptimizerConstructors.momentum,
        adadelta: OptimizerConstructors.adadelta,
        adagrad: OptimizerConstructors.adagrad,
        rmsprop: OptimizerConstructors.rmsprop,
        adamax: OptimizerConstructors.adamax,
        adam: OptimizerConstructors.adam
    };

    var setBackend = Environment.setBackend;
    var getBackend = Environment.getBackend;
    var disposeVariables = Environment.disposeVariables;
    var memory = Environment.memory;
    var nextFrame = BrowserUtil.nextFrame;

    var index = /*#__PURE__*/Object.freeze({
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

    function euclideanDistance(arr1, arr2) {
        if (arr1.length !== arr2.length)
            throw new Error('euclideanDistance: arr1.length !== arr2.length');
        var desc1 = Array.from(arr1);
        var desc2 = Array.from(arr2);
        return Math.sqrt(desc1
            .map(function (val, i) { return val - desc2[i]; })
            .reduce(function (res, diff) { return res + Math.pow(diff, 2); }, 0));
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

    function __awaiter$e(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$e(thisArg, body) {
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
    function round$1(num) {
        return Math.floor(num * 100) / 100;
    }
    function getElement(arg) {
        if (typeof arg === 'string') {
            return document.getElementById(arg);
        }
        return arg;
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
    function createCanvasWithImageData(_a, buf) {
        var width = _a.width, height = _a.height;
        var canvas = createCanvas({ width: width, height: height });
        getContext2dOrThrow(canvas).putImageData(new ImageData(buf, width, height), 0, 0);
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
    function getDefaultDrawOptions() {
        return {
            color: 'blue',
            lineWidth: 2,
            fontSize: 20,
            fontStyle: 'Georgia'
        };
    }
    function drawBox(ctx, x, y, w, h, options) {
        ctx.strokeStyle = options.color;
        ctx.lineWidth = options.lineWidth;
        ctx.strokeRect(x, y, w, h);
    }
    function drawText(ctx, x, y, text, options) {
        var padText = 2 + options.lineWidth;
        ctx.fillStyle = options.color;
        ctx.font = options.fontSize + "px " + options.fontStyle;
        ctx.fillText(text, x + padText, y + padText + (options.fontSize * 0.6));
    }
    function drawDetection(canvasArg, detection, options) {
        var canvas = getElement(canvasArg);
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error('drawBox - expected canvas to be of type: HTMLCanvasElement');
        }
        var detectionArray = Array.isArray(detection)
            ? detection
            : [detection];
        detectionArray.forEach(function (det) {
            var score = det.score, box = det.box;
            var x = box.x, y = box.y, width = box.width, height = box.height;
            var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
            var withScore = Object.assign({ withScore: true }, (options || {})).withScore;
            var ctx = getContext2dOrThrow(canvas);
            drawBox(ctx, x, y, width, height, drawOptions);
            if (withScore) {
                drawText(ctx, x, y, "" + round$1(score), drawOptions);
            }
        });
    }

    var NetInput = /** @class */ (function () {
        function NetInput(mediaArg, dims) {
            var _this = this;
            var mediaArgArray = Array.isArray(mediaArg)
                ? mediaArg
                : [mediaArg];
            if (!mediaArgArray.length) {
                throw new Error('NetInput - empty array passed as input');
            }
            var medias = mediaArgArray.map(getElement);
            medias.forEach(function (media, i) {
                if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement || media instanceof HTMLCanvasElement)) {
                    var idxHint = Array.isArray(mediaArg) ? " at input index " + i + ":" : '';
                    if (typeof mediaArgArray[i] === 'string') {
                        throw new Error("NetInput -" + idxHint + " string passed, but could not resolve HTMLElement for element id");
                    }
                    throw new Error("NetInput -" + idxHint + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement, or to be an element id");
                }
            });
            this._canvases = [];
            medias.forEach(function (m) { return _this.initCanvas(m, dims); });
        }
        NetInput.prototype.initCanvas = function (media, dims) {
            if (media instanceof HTMLCanvasElement) {
                this._canvases.push(media);
                return;
            }
            // if input is batch type, make sure every canvas has the same dimensions
            var _a = this.dims || dims || getMediaDimensions(media), width = _a.width, height = _a.height;
            var canvas = createCanvas({ width: width, height: height });
            getContext2dOrThrow(canvas).drawImage(media, 0, 0, width, height);
            this._canvases.push(canvas);
        };
        Object.defineProperty(NetInput.prototype, "canvases", {
            get: function () {
                return this._canvases;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "width", {
            get: function () {
                return (this._canvases[0] || {}).width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "height", {
            get: function () {
                return (this._canvases[0] || {}).height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NetInput.prototype, "dims", {
            get: function () {
                var _a = this, width = _a.width, height = _a.height;
                return (width > 0 && height > 0) ? { width: width, height: height } : null;
            },
            enumerable: true,
            configurable: true
        });
        return NetInput;
    }());

    function getImageTensor(input) {
        return tidy(function () {
            if (input instanceof Tensor) {
                var rank = input.shape.length;
                if (rank !== 3 && rank !== 4) {
                    throw new Error('input tensor must be of rank 3 or 4');
                }
                return (rank === 3 ? input.expandDims(0) : input).toFloat();
            }
            var netInput = input instanceof NetInput ? input : new NetInput(input);
            return concat(netInput.canvases.map(function (canvas) {
                return fromPixels(canvas).expandDims(0).toFloat();
            }));
        });
    }

    /**
     * Pads the smaller dimension of an image tensor with zeros, such that width === height.
     *
     * @param imgTensor The image tensor.
     * @param isCenterImage (optional, default: false) If true, add padding on both sides of the image, such that the image
     * @returns The padded tensor with width === height.
     */
    function padToSquare(imgTensor, isCenterImage) {
        if (isCenterImage === void 0) { isCenterImage = false; }
        return tidy(function () {
            var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
            if (height === width) {
                return imgTensor;
            }
            var paddingAmount = Math.floor(Math.abs(height - width) * (isCenterImage ? 0.5 : 1));
            var paddingAxis = height > width ? 2 : 1;
            var paddingTensorShape = imgTensor.shape.slice();
            paddingTensorShape[paddingAxis] = paddingAmount;
            var tensorsToStack = (isCenterImage ? [fill(paddingTensorShape, 0)] : [])
                .concat([imgTensor, fill(paddingTensorShape, 0)]);
            return concat(tensorsToStack, paddingAxis);
        });
    }

    function extractorsFactory(extractWeights) {
        function extractDepthwiseConvParams(numChannels) {
            var filters = tensor4d(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
            var batch_norm_scale = tensor1d(extractWeights(numChannels));
            var batch_norm_offset = tensor1d(extractWeights(numChannels));
            var batch_norm_mean = tensor1d(extractWeights(numChannels));
            var batch_norm_variance = tensor1d(extractWeights(numChannels));
            return {
                filters: filters,
                batch_norm_scale: batch_norm_scale,
                batch_norm_offset: batch_norm_offset,
                batch_norm_mean: batch_norm_mean,
                batch_norm_variance: batch_norm_variance
            };
        }
        function extractConvWithBiasParams(channelsIn, channelsOut, filterSize) {
            var filters = tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
            var bias = tensor1d(extractWeights(channelsOut));
            return {
                filters: filters,
                bias: bias
            };
        }
        function extractPointwiseConvParams(channelsIn, channelsOut, filterSize) {
            var _a = extractConvWithBiasParams(channelsIn, channelsOut, filterSize), filters = _a.filters, bias = _a.bias;
            return {
                filters: filters,
                batch_norm_offset: bias
            };
        }
        function extractConvPairParams(channelsIn, channelsOut) {
            var depthwise_conv_params = extractDepthwiseConvParams(channelsIn);
            var pointwise_conv_params = extractPointwiseConvParams(channelsIn, channelsOut, 1);
            return {
                depthwise_conv_params: depthwise_conv_params,
                pointwise_conv_params: pointwise_conv_params
            };
        }
        function extractMobilenetV1Params() {
            var conv_0_params = extractPointwiseConvParams(3, 32, 3);
            var channelNumPairs = [
                [32, 64],
                [64, 128],
                [128, 128],
                [128, 256],
                [256, 256],
                [256, 512],
                [512, 512],
                [512, 512],
                [512, 512],
                [512, 512],
                [512, 512],
                [512, 1024],
                [1024, 1024]
            ];
            var conv_pair_params = channelNumPairs.map(function (_a) {
                var channelsIn = _a[0], channelsOut = _a[1];
                return extractConvPairParams(channelsIn, channelsOut);
            });
            return {
                conv_0_params: conv_0_params,
                conv_pair_params: conv_pair_params
            };
        }
        function extractPredictionLayerParams() {
            var conv_0_params = extractPointwiseConvParams(1024, 256, 1);
            var conv_1_params = extractPointwiseConvParams(256, 512, 3);
            var conv_2_params = extractPointwiseConvParams(512, 128, 1);
            var conv_3_params = extractPointwiseConvParams(128, 256, 3);
            var conv_4_params = extractPointwiseConvParams(256, 128, 1);
            var conv_5_params = extractPointwiseConvParams(128, 256, 3);
            var conv_6_params = extractPointwiseConvParams(256, 64, 1);
            var conv_7_params = extractPointwiseConvParams(64, 128, 3);
            var box_encoding_0_predictor_params = extractConvWithBiasParams(512, 12, 1);
            var class_predictor_0_params = extractConvWithBiasParams(512, 9, 1);
            var box_encoding_1_predictor_params = extractConvWithBiasParams(1024, 24, 1);
            var class_predictor_1_params = extractConvWithBiasParams(1024, 18, 1);
            var box_encoding_2_predictor_params = extractConvWithBiasParams(512, 24, 1);
            var class_predictor_2_params = extractConvWithBiasParams(512, 18, 1);
            var box_encoding_3_predictor_params = extractConvWithBiasParams(256, 24, 1);
            var class_predictor_3_params = extractConvWithBiasParams(256, 18, 1);
            var box_encoding_4_predictor_params = extractConvWithBiasParams(256, 24, 1);
            var class_predictor_4_params = extractConvWithBiasParams(256, 18, 1);
            var box_encoding_5_predictor_params = extractConvWithBiasParams(128, 24, 1);
            var class_predictor_5_params = extractConvWithBiasParams(128, 18, 1);
            var box_predictor_0_params = {
                box_encoding_predictor_params: box_encoding_0_predictor_params,
                class_predictor_params: class_predictor_0_params
            };
            var box_predictor_1_params = {
                box_encoding_predictor_params: box_encoding_1_predictor_params,
                class_predictor_params: class_predictor_1_params
            };
            var box_predictor_2_params = {
                box_encoding_predictor_params: box_encoding_2_predictor_params,
                class_predictor_params: class_predictor_2_params
            };
            var box_predictor_3_params = {
                box_encoding_predictor_params: box_encoding_3_predictor_params,
                class_predictor_params: class_predictor_3_params
            };
            var box_predictor_4_params = {
                box_encoding_predictor_params: box_encoding_4_predictor_params,
                class_predictor_params: class_predictor_4_params
            };
            var box_predictor_5_params = {
                box_encoding_predictor_params: box_encoding_5_predictor_params,
                class_predictor_params: class_predictor_5_params
            };
            return {
                conv_0_params: conv_0_params,
                conv_1_params: conv_1_params,
                conv_2_params: conv_2_params,
                conv_3_params: conv_3_params,
                conv_4_params: conv_4_params,
                conv_5_params: conv_5_params,
                conv_6_params: conv_6_params,
                conv_7_params: conv_7_params,
                box_predictor_0_params: box_predictor_0_params,
                box_predictor_1_params: box_predictor_1_params,
                box_predictor_2_params: box_predictor_2_params,
                box_predictor_3_params: box_predictor_3_params,
                box_predictor_4_params: box_predictor_4_params,
                box_predictor_5_params: box_predictor_5_params
            };
        }
        return {
            extractMobilenetV1Params: extractMobilenetV1Params,
            extractPredictionLayerParams: extractPredictionLayerParams
        };
    }
    function extractParams(weights) {
        var extractWeights = function (numWeights) {
            var ret = weights.slice(0, numWeights);
            weights = weights.slice(numWeights);
            return ret;
        };
        var _a = extractorsFactory(extractWeights), extractMobilenetV1Params = _a.extractMobilenetV1Params, extractPredictionLayerParams = _a.extractPredictionLayerParams;
        var mobilenetv1_params = extractMobilenetV1Params();
        var prediction_layer_params = extractPredictionLayerParams();
        var extra_dim = tensor3d(extractWeights(5118 * 4), [1, 5118, 4]);
        var output_layer_params = {
            extra_dim: extra_dim
        };
        if (weights.length !== 0) {
            throw new Error("weights remaing after extract: " + weights.length);
        }
        return {
            mobilenetv1_params: mobilenetv1_params,
            prediction_layer_params: prediction_layer_params,
            output_layer_params: output_layer_params
        };
    }

    var FaceDetectionResult = /** @class */ (function () {
        function FaceDetectionResult(score, topRelative, leftRelative, bottomRelative, rightRelative) {
            this._score = score;
            this._topRelative = Math.max(0, topRelative),
                this._leftRelative = Math.max(0, leftRelative),
                this._bottomRelative = Math.min(1.0, bottomRelative),
                this._rightRelative = Math.min(1.0, rightRelative);
        }
        FaceDetectionResult.prototype.forSize = function (width, height) {
            var x = Math.floor(this._leftRelative * width);
            var y = Math.floor(this._topRelative * height);
            return {
                score: this._score,
                box: {
                    x: x,
                    y: y,
                    width: Math.floor(this._rightRelative * width) - x,
                    height: Math.floor(this._bottomRelative * height) - y
                }
            };
        };
        return FaceDetectionResult;
    }());

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
            var out = pointwiseConvLayer(x, params.conv_0_params, [2, 2]);
            params.conv_pair_params.forEach(function (param, i) {
                var layerIdx = i + 1;
                var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
                out = depthwiseConvLayer(out, param.depthwise_conv_params, depthwiseConvStrides);
                out = pointwiseConvLayer(out, param.pointwise_conv_params, [1, 1]);
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

    function convWithBias(x, params) {
        return tidy(function () {
            return add(conv2d(x, params.filters, [1, 1], 'same'), params.bias);
        });
    }
    function boxPredictionLayer(x, params) {
        return tidy(function () {
            var batchSize = x.shape[0];
            var boxPredictionEncoding = reshape(convWithBias(x, params.box_encoding_predictor_params), [batchSize, -1, 1, 4]);
            var classPrediction = reshape(convWithBias(x, params.class_predictor_params), [batchSize, -1, 3]);
            return {
                boxPredictionEncoding: boxPredictionEncoding,
                classPrediction: classPrediction
            };
        });
    }

    function predictionLayer(x, conv11, params) {
        return tidy(function () {
            var conv0 = pointwiseConvLayer(x, params.conv_0_params, [1, 1]);
            var conv1 = pointwiseConvLayer(conv0, params.conv_1_params, [2, 2]);
            var conv2 = pointwiseConvLayer(conv1, params.conv_2_params, [1, 1]);
            var conv3 = pointwiseConvLayer(conv2, params.conv_3_params, [2, 2]);
            var conv4 = pointwiseConvLayer(conv3, params.conv_4_params, [1, 1]);
            var conv5 = pointwiseConvLayer(conv4, params.conv_5_params, [2, 2]);
            var conv6 = pointwiseConvLayer(conv5, params.conv_6_params, [1, 1]);
            var conv7 = pointwiseConvLayer(conv6, params.conv_7_params, [2, 2]);
            var boxPrediction0 = boxPredictionLayer(conv11, params.box_predictor_0_params);
            var boxPrediction1 = boxPredictionLayer(x, params.box_predictor_1_params);
            var boxPrediction2 = boxPredictionLayer(conv1, params.box_predictor_2_params);
            var boxPrediction3 = boxPredictionLayer(conv3, params.box_predictor_3_params);
            var boxPrediction4 = boxPredictionLayer(conv5, params.box_predictor_4_params);
            var boxPrediction5 = boxPredictionLayer(conv7, params.box_predictor_5_params);
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

    var resizedImageSize = [512, 512];
    var weight = scalar(0.007843137718737125);
    var bias = scalar(1);
    function resizeLayer(x) {
        return tidy(function () {
            var resized = image.resizeBilinear(x, resizedImageSize, false);
            return sub(mul(resized, weight), bias);
        });
    }

    function faceDetectionNet(weights) {
        var params = extractParams(weights);
        function forwardTensor(imgTensor) {
            return tidy(function () {
                var resized = resizeLayer(imgTensor);
                var features = mobileNetV1(resized, params.mobilenetv1_params);
                var _a = predictionLayer(features.out, features.conv11, params.prediction_layer_params), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
                return outputLayer(boxPredictions, classPredictions, params.output_layer_params);
            });
        }
        function forward(input) {
            return tidy(function () { return forwardTensor(padToSquare(getImageTensor(input))); });
        }
        function locateFaces(input, minConfidence, maxResults) {
            if (minConfidence === void 0) { minConfidence = 0.8; }
            if (maxResults === void 0) { maxResults = 100; }
            return __awaiter$e(this, void 0, void 0, function () {
                var paddedHeightRelative, paddedWidthRelative, _a, _boxes, _scores, boxes, scores, i, scoresData, _b, _c, iouThreshold, indices, results;
                return __generator$e(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            paddedHeightRelative = 1, paddedWidthRelative = 1;
                            _a = tidy(function () {
                                var imgTensor = getImageTensor(input);
                                var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                                imgTensor = padToSquare(imgTensor);
                                paddedHeightRelative = imgTensor.shape[1] / height;
                                paddedWidthRelative = imgTensor.shape[2] / width;
                                return forwardTensor(imgTensor);
                            }), _boxes = _a.boxes, _scores = _a.scores;
                            boxes = _boxes[0];
                            scores = _scores[0];
                            for (i = 1; i < _boxes.length; i++) {
                                _boxes[i].dispose();
                                _scores[i].dispose();
                            }
                            _c = (_b = Array).from;
                            return [4 /*yield*/, scores.data()];
                        case 1:
                            scoresData = _c.apply(_b, [_d.sent()]);
                            iouThreshold = 0.5;
                            indices = nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                            results = indices
                                .map(function (idx) { return new FaceDetectionResult(scoresData[idx], boxes.get(idx, 0) * paddedHeightRelative, boxes.get(idx, 1) * paddedWidthRelative, boxes.get(idx, 2) * paddedHeightRelative, boxes.get(idx, 3) * paddedWidthRelative); });
                            boxes.dispose();
                            scores.dispose();
                            return [2 /*return*/, results];
                    }
                });
            });
        }
        return {
            forward: forward,
            locateFaces: locateFaces
        };
    }

    function scale(x, params) {
        return add(mul(x, params.weights), params.biases);
    }

    function convLayer(x, params, stride, withRelu, padding) {
        if (padding === void 0) { padding = 'same'; }
        var _a = params.conv, filters = _a.filters, biases = _a.biases;
        var out = conv2d(x, filters, [stride, stride], padding);
        out = add(out, biases);
        out = scale(out, params.scale);
        return withRelu ? relu(out) : out;
    }
    function conv(x, params) {
        return convLayer(x, params, 1, true);
    }
    function convNoRelu(x, params) {
        return convLayer(x, params, 1, false);
    }
    function convDown(x, params) {
        return convLayer(x, params, 2, true, 'valid');
    }

    function extractorsFactory$1(extractWeights) {
        function extractFilterValues(numFilterValues, numFilters, filterSize) {
            var weights = extractWeights(numFilterValues);
            var depth = weights.length / (numFilters * filterSize * filterSize);
            if (isFloat(depth)) {
                throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
            }
            return transpose(tensor4d(weights, [numFilters, depth, filterSize, filterSize]), [2, 3, 1, 0]);
        }
        function extractScaleLayerParams(numWeights) {
            var weights = tensor1d(extractWeights(numWeights));
            var biases = tensor1d(extractWeights(numWeights));
            return {
                weights: weights,
                biases: biases
            };
        }
        function extractConvLayerParams(numFilterValues, numFilters, filterSize) {
            var conv_filters = extractFilterValues(numFilterValues, numFilters, filterSize);
            var conv_biases = tensor1d(extractWeights(numFilters));
            var scale = extractScaleLayerParams(numFilters);
            return {
                conv: {
                    filters: conv_filters,
                    biases: conv_biases
                },
                scale: scale
            };
        }
        function extractResidualLayerParams(numFilterValues, numFilters, filterSize, isDown) {
            if (isDown === void 0) { isDown = false; }
            var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize);
            var conv2 = extractConvLayerParams(numFilterValues, numFilters, filterSize);
            return {
                conv1: conv1,
                conv2: conv2
            };
        }
        return {
            extractConvLayerParams: extractConvLayerParams,
            extractResidualLayerParams: extractResidualLayerParams
        };
    }
    function extractParams$1(weights) {
        var extractWeights = function (numWeights) {
            var ret = weights.slice(0, numWeights);
            weights = weights.slice(numWeights);
            return ret;
        };
        var _a = extractorsFactory$1(extractWeights), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
        var conv32_down = extractConvLayerParams(4704, 32, 7);
        var conv32_1 = extractResidualLayerParams(9216, 32, 3);
        var conv32_2 = extractResidualLayerParams(9216, 32, 3);
        var conv32_3 = extractResidualLayerParams(9216, 32, 3);
        var conv64_down = extractResidualLayerParams(36864, 64, 3, true);
        var conv64_1 = extractResidualLayerParams(36864, 64, 3);
        var conv64_2 = extractResidualLayerParams(36864, 64, 3);
        var conv64_3 = extractResidualLayerParams(36864, 64, 3);
        var conv128_down = extractResidualLayerParams(147456, 128, 3, true);
        var conv128_1 = extractResidualLayerParams(147456, 128, 3);
        var conv128_2 = extractResidualLayerParams(147456, 128, 3);
        var conv256_down = extractResidualLayerParams(589824, 256, 3, true);
        var conv256_1 = extractResidualLayerParams(589824, 256, 3);
        var conv256_2 = extractResidualLayerParams(589824, 256, 3);
        var conv256_down_out = extractResidualLayerParams(589824, 256, 3);
        var fc = transpose(tensor2d(extractWeights(256 * 128), [128, 256]), [1, 0]);
        if (weights.length !== 0) {
            throw new Error("weights remaing after extract: " + weights.length);
        }
        return {
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
    }

    function normalize(x) {
        return tidy(function () {
            var avg_r = fill([1, 150, 150, 1], 122.782);
            var avg_g = fill([1, 150, 150, 1], 117.001);
            var avg_b = fill([1, 150, 150, 1], 104.298);
            var avg_rgb = concat([avg_r, avg_g, avg_b], 3);
            return div(sub(x, avg_rgb), scalar(256));
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

    function faceRecognitionNet(weights) {
        var _this = this;
        var params = extractParams$1(weights);
        function forward(input) {
            return tidy(function () {
                var x = padToSquare(getImageTensor(input), true);
                // work with 150 x 150 sized face images
                if (x.shape[1] !== 150 || x.shape[2] !== 150) {
                    x = image.resizeBilinear(x, [150, 150]);
                }
                x = normalize(x);
                var out = convDown(x, params.conv32_down);
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
        }
        var computeFaceDescriptor = function (input) { return __awaiter$e(_this, void 0, void 0, function () {
            var result, data;
            return __generator$e(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = forward(input);
                        return [4 /*yield*/, result.data()];
                    case 1:
                        data = _a.sent();
                        result.dispose();
                        return [2 /*return*/, data];
                }
            });
        }); };
        var computeFaceDescriptorSync = function (input) {
            var result = forward(input);
            var data = result.dataSync();
            result.dispose();
            return data;
        };
        return {
            computeFaceDescriptor: computeFaceDescriptor,
            computeFaceDescriptorSync: computeFaceDescriptorSync,
            forward: forward
        };
    }

    /**
     * Extracts the image regions containing the detected faces.
     *
     * @param input The image that face detection has been performed on.
     * @param detections The face detection results for that image.
     * @returns The Canvases of the corresponding image region for each detected face.
     */
    function extractFaces(image, detections) {
        var ctx = getContext2dOrThrow(image);
        return detections.map(function (det) {
            var _a = det.forSize(image.width, image.height).box, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            var faceImg = createCanvas({ width: width, height: height });
            getContext2dOrThrow(faceImg)
                .putImageData(ctx.getImageData(x, y, width, height), 0, 0);
            return faceImg;
        });
    }

    /**
     * Extracts the tensors of the image regions containing the detected faces.
     * Returned tensors have to be disposed manually once you don't need them anymore!
     * Useful if you want to compute the face descriptors for the face
     * images. Using this method is faster then extracting a canvas for each face and
     * converting them to tensors individually.
     *
     * @param input The image that face detection has been performed on.
     * @param detections The face detection results for that image.
     * @returns Tensors of the corresponding image region for each detected face.
     */
    function extractFaceTensors(image$$1, detections) {
        return tidy(function () {
            var imgTensor = getImageTensor(image$$1);
            // TODO handle batches
            var _a = imgTensor.shape, batchSize = _a[0], imgHeight = _a[1], imgWidth = _a[2], numChannels = _a[3];
            var faceTensors = detections.map(function (det) {
                var _a = det.forSize(imgWidth, imgHeight).box, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                return slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels]);
            });
            return faceTensors;
        });
    }

    exports.euclideanDistance = euclideanDistance;
    exports.faceDetectionNet = faceDetectionNet;
    exports.faceRecognitionNet = faceRecognitionNet;
    exports.NetInput = NetInput;
    exports.tf = index;
    exports.padToSquare = padToSquare;
    exports.extractFaces = extractFaces;
    exports.extractFaceTensors = extractFaceTensors;
    exports.isFloat = isFloat;
    exports.round = round$1;
    exports.getElement = getElement;
    exports.getContext2dOrThrow = getContext2dOrThrow;
    exports.createCanvas = createCanvas;
    exports.createCanvasWithImageData = createCanvasWithImageData;
    exports.getMediaDimensions = getMediaDimensions;
    exports.bufferToImage = bufferToImage;
    exports.getDefaultDrawOptions = getDefaultDrawOptions;
    exports.drawBox = drawBox;
    exports.drawText = drawText;
    exports.drawDetection = drawDetection;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
